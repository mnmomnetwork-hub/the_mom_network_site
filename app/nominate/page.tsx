"use client"

import { useEffect, useState } from "react"

export default function ShareAStoryPage() {
  const [countdown, setCountdown] = useState(0)

  useEffect(() => {
    const nextSunday = new Date()
    nextSunday.setDate(nextSunday.getDate() + ((7 - nextSunday.getDay()) % 7 || 7))
    nextSunday.setHours(17, 0, 0, 0)

    const interval = setInterval(() => {
      const now = new Date()
      const diff = nextSunday.getTime() - now.getTime()
      setCountdown(Math.max(0, Math.floor(diff / 1000)))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (sec: number) => {
    const h = Math.floor(sec / 3600)
    const m = Math.floor((sec % 3600) / 60)
    const s = sec % 60
    return `${h}h ${m}m ${s}s`
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-r from-[#f5f7f1] to-[#fdebe6] min-h-screen">
      <div className="max-w-2xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold text-navy mb-2">📖 Share a Story for a Mom</h1>
        <p className="text-navy/80 text-lg">
          Tell us about a Minnesota mom who could use some kindness. You can include her Amazon wishlist and a short story. Stories may be shared on our public wall to inspire support.
        </p>
        <p className="mt-4 text-sm text-navy/60 italic">
          Submissions may be publicly viewable. Please share with consent.
        </p>
      </div>

      <div className="w-full max-w-2xl mb-6">
        <iframe
          src="https://forms.fillout.com/t/koA9PhiAGEus?autosave=false"
          title="Share a Story"
          width="100%"
          height="600"
          style={{ border: "none", borderRadius: "12px" }}
        />
      </div>

      <div className="text-sm text-navy font-semibold">
        ⏳ Next drawing in: <span className="text-coral">{formatTime(countdown)}</span>
      </div>
    </div>
  )
}
