"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

function nextSunday8pm() {
  const now = new Date()
  const out = new Date(now)
  const daysUntilSun = (7 - now.getDay()) % 7
  out.setDate(now.getDate() + daysUntilSun)
  out.setHours(20, 0, 0, 0)
  if (out <= now) out.setDate(out.getDate() + 7)
  return out
}

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(i)
  }, [])
  const s = Math.max(0, Math.floor((+target - +now) / 1000))
  const d = Math.floor(s / 86400)
  const h = Math.floor((s % 86400) / 3600)
  const m = Math.floor((s % 3600) / 60)
  const x = s % 60
  return { d, h, m, x }
}

async function startCheckout(amountDollars = 2) {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amountCents: Math.max(200, Math.round(amountDollars * 100)),
      }),
    })

    const data = await res.json()

    if (res.ok && data?.url) {
      window.location.href = data.url
    } else {
      if (data?.code === "STRIPE_NOT_CONFIGURED") {
        alert("Donations are temporarily unavailable. We're working to get this fixed! Please check back soon.")
      } else {
        alert(data?.error || "Unable to start checkout. Please try again.")
      }
    }
  } catch (error) {
    console.error("Checkout error:", error)
    alert("Network error. Please check your connection and try again.")
  }
}

export default function HomePage() {
  const target = useMemo(() => nextSunday8pm(), [])
  const { d, h, m, x } = useCountdown(target)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Family Photo */}
      <section className="relative min-h-[700px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/family-hero.jpeg')" }}
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-navy/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Small gifts. Big impact.
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Join a community of moms giving $2 to bless one MN mom each week.
          </p>

          <button
            onClick={() => startCheckout(2)}
            className="bg-coral hover:bg-coral/90 text-white text-xl font-semibold px-8 py-4 rounded-lg shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105"
          >
            Donate $2
          </button>

          <div className="mt-8 text-sm text-white/80 max-w-2xl mx-auto drop-shadow-sm">
            <p>Donations are voluntary gifts. The Mom Network is not a 501(c)(3). Funds are processed directly</p>
            <p>by Stripe to recipients. Tax reporting obligations belong to the recipient.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💖</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Give $2–$5</h3>
              <p className="text-navy/70">
                Your small gift joins others to create a big blessing for one mom each week.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Share Your Story</h3>
              <p className="text-navy/70">Tell us about yourself or nominate another mom who could use support.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">See the Impact</h3>
              <p className="text-navy/70">We select and bless one mom each week, sharing the joy with our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Week Status */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-navy mb-4">This Week's Blessing</h2>
            <div className="text-4xl font-bold text-coral mb-2">$47</div>
            <p className="text-navy/70 mb-6">raised so far this week</p>

            <div className="w-full bg-sage/30 rounded-full h-3 mb-6">
              <div className="bg-coral h-3 rounded-full" style={{ width: "31%" }}></div>
            </div>

            <div className="text-sm text-navy font-semibold mb-6">
              ⏳ Next drawing in: {d}d {String(h).padStart(2, "0")}h {String(m).padStart(2, "0")}m{" "}
              {String(x).padStart(2, "0")}s
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => startCheckout(2)}
                className="bg-coral hover:bg-coral/90 text-white font-semibold px-6 py-3 rounded-lg"
              >
                Donate $2
              </button>
              <Link
                href="/donate"
                className="border border-coral text-coral hover:bg-coral hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Choose Amount
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Enter This Week's Drawing</h2>
            <p className="text-navy/70">
              Want to be considered for this week's blessing? Just enter your information below. No explanation needed
              unless you want to share.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <iframe
              src="https://forms.fillout.com/t/koA9PhiAGEus?disableAutosave=true"
              title="Weekly Entry Form"
              width="100%"
              height="500"
              style={{ border: "none", borderRadius: "12px" }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
