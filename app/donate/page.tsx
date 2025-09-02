"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"

/** POST to /api/checkout (server reads your env keys) */
async function startCheckout(amountDollars: number) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amountCents: Math.max(200, Math.round(amountDollars * 100)), // $2 min
    }),
  })
  const data = await res.json()
  if (res.ok && data?.url) {
    window.location.href = data.url
  } else {
    alert(data?.error ?? "Unable to start checkout.")
  }
}

export default function DonatePage() {
  const params = useSearchParams()
  const status = params.get("status")

  const [amount, setAmount] = useState<number>(2)
  const cents = useMemo(() => Math.max(200, Math.round(amount * 100)), [amount])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (status === "success") alert("Thank you! Your gift was received.")
    if (status === "cancelled") alert("Donation canceled. You can try again anytime.")
  }, [status])

  const presets = [2, 5, 10, 25] as const

  return (
    <main className="wrap">
      <header className="header">
        <h1 className="title">Support Our Mission</h1>
        <p className="subtitle">
          Your donation helps us bless a Minnesota mom each week. 100% of gifts go to the winner.
        </p>
      </header>

      <section className="grid">
        <article className="left">
          <h2 className="h2">How Your Donation Helps</h2>

          <ul className="list">
            <li>
              <span className="badge">💖</span>
              <div>
                <h3>Support Moms in Need</h3>
                <p>Funds weekly giveaways that cover essential needs and small joys.</p>
              </div>
            </li>
            <li>
              <span className="badge">🏛️</span>
              <div>
                <h3>Build Community</h3>
                <p>A safe, local space where moms can connect and be seen.</p>
              </div>
            </li>
            <li>
              <span className="badge">👛</span>
              <div>
                <h3>Create Resources</h3>
                <p>Guides and tools that make everyday parenting a little lighter.</p>
              </div>
            </li>
          </ul>

          <div className="note">
            <h4>Our Promise</h4>
            <p>We're transparent and careful with every dollar. 90% goes directly to moms; 10% keeps the lights on.</p>
          </div>
        </article>

        <article className="card">
          <h2 className="h2">Choose an amount</h2>

          <div className="chips">
            {presets.map((v) => (
              <button
                key={v}
                className={`chip ${amount === v ? "active" : ""}`}
                onClick={() => setAmount(v)}
                disabled={loading}
              >
                ${v}
              </button>
            ))}
          </div>

          <div className="customRow">
            <label htmlFor="amt">Custom</label>
            <input
              id="amt"
              type="number"
              min={2}
              step={1}
              value={amount}
              onChange={(e) => setAmount(Math.max(2, Number(e.target.value) || 2))}
              disabled={loading}
            />
          </div>

          <button
            className="donate"
            onClick={async () => {
              try {
                setLoading(true)
                await startCheckout(amount)
              } finally {
                setLoading(false)
              }
            }}
            disabled={loading}
          >
            {loading ? "Redirecting…" : `Donate $${amount}`}
          </button>

          <p className="small">Payments are processed securely by Stripe. Minimum donation is $2.00.</p>
        </article>
      </section>

      <style jsx>{`
        :root {
          --navy:#0f1a2b;
          --coral:#ea6a5f;
          --cream:#f8f5ef;
          --sage:#e7efe5;
        }
        .wrap { max-width: 1080px; margin: 0 auto; padding: 32px 16px; color: var(--navy); }
        .header { text-align: center; margin-bottom: 28px; }
        .title { font-size: clamp(28px,4vw,42px); margin: 0 0 8px; font-weight: 800; }
        .subtitle { max-width: 720px; margin: 0 auto; color: #334; }
        .grid { display: grid; gap: 20px; grid-template-columns: 1fr; }
        @media (min-width: 980px) { .grid { grid-template-columns: 1.1fr .9fr; } }
        .h2 { font-size: 22px; font-weight: 800; margin: 0 0 10px; }
        .left .list { display: grid; gap: 14px; margin: 0; padding: 0; list-style: none; }
        .left li { display: grid; grid-template-columns: 44px 1fr; gap: 12px; align-items: start; }
        .badge { display:grid; place-items:center; width:44px; height:44px; border-radius:999px; background: rgba(234,106,95,.12); }
        .note { margin-top: 16px; padding: 14px; background: rgba(231,239,229,.45); border: 1px solid #dfe7de; border-radius: 12px; }
        .note h4 { margin: 0 0 4px; font-weight: 700; }
        .card { border: 1px solid #dfe7de; border-radius: 14px; padding: 18px; background: #fff; box-shadow: 0 8px 28px rgba(15,26,43,.06); }
        .chips { display:flex; flex-wrap: wrap; gap:10px; margin: 6px 0 12px; }
        .chip { padding: 10px 14px; border-radius: 999px; border: 1px solid #222; background:#fff; cursor:pointer; }
        .chip.active { background:#121212; color:#fff; }
        .customRow { display:flex; align-items:center; gap:10px; margin-bottom: 12px; }
        .customRow input { width: 120px; padding: 10px; border:1px solid #ddd; border-radius: 10px; }
        .donate { width: 100%; padding: 12px 16px; border-radius: 12px; border: none; background:#121212; color:#fff; font-weight: 600; }
        .donate:disabled { opacity:.75; cursor:not-allowed; }
        .small { margin-top: 8px; color:#445; opacity:.85; font-size: 13px; text-align:center; }
      `}</style>
    </main>
  )
}
