import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Check if Stripe is configured
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY

    if (!stripeSecretKey) {
      return NextResponse.json(
        {
          error: "Payment processing is temporarily unavailable. Please try again later or contact support.",
          code: "STRIPE_NOT_CONFIGURED",
        },
        { status: 503 },
      )
    }

    // Dynamic import of Stripe to avoid loading if not configured
    const Stripe = (await import("stripe")).default
    const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" })

    const body = await request.json().catch(() => ({}))

    // Parse and enforce $2.00 minimum
    const rawAmount = Number(body?.amountCents)
    const amountCents = Math.max(200, Number.isFinite(rawAmount) ? Math.floor(rawAmount) : 200)

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Donation to The Mom Network" },
            unit_amount: amountCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/donate?status=success`,
      cancel_url: `${siteUrl}/donate?status=cancelled`,
    })

    return NextResponse.json({ url: session.url }, { status: 200 })
  } catch (error: any) {
    console.error("Stripe checkout error:", error)

    // Return user-friendly error messages
    let errorMessage = "Unable to process donation at this time. Please try again later."

    if (error.type === "StripeInvalidRequestError") {
      errorMessage = "Invalid payment request. Please check your information and try again."
    } else if (error.type === "StripeAPIError") {
      errorMessage = "Payment service is temporarily unavailable. Please try again in a few minutes."
    }

    return NextResponse.json(
      {
        error: errorMessage,
        code: error.code || "UNKNOWN_ERROR",
      },
      { status: 500 },
    )
  }
}
