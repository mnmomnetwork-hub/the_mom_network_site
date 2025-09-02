import { NextResponse } from "next/server"

// In a real implementation, this would connect to a database
// For now, we'll use an in-memory store
const donations: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.amount || !body.donorEmail) {
      return NextResponse.json({ error: "Amount and donor email are required" }, { status: 400 })
    }

    // Create donation record with timestamp
    const donation = {
      id: Date.now().toString(),
      amount: body.amount,
      donorEmail: body.donorEmail,
      donorName: body.donorName || "Anonymous",
      date: new Date().toISOString(),
      status: "completed",
    }

    // In a real implementation, this would save to a database
    donations.push(donation)

    return NextResponse.json({ success: true, message: "Donation recorded successfully", donation }, { status: 201 })
  } catch (error) {
    console.error("Error recording donation:", error)
    return NextResponse.json({ error: "Failed to record donation" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // In a real implementation, this would fetch from a database
    // Return summary data only for privacy
    const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0)
    const totalCount = donations.length

    return NextResponse.json({
      totalAmount,
      totalCount,
      recentDonations: donations.slice(-5).map((d) => ({
        amount: d.amount,
        date: d.date,
        donorName: d.donorName,
      })),
    })
  } catch (error) {
    console.error("Error fetching donations:", error)
    return NextResponse.json({ error: "Failed to fetch donations" }, { status: 500 })
  }
}
