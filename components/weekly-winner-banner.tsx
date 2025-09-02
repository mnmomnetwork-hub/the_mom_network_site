"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function WeeklyWinnerBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-coral text-white py-3 px-4">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <p className="font-medium">
            Congratulations to our weekly winner: <span className="font-bold">Sarah Johnson!</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary" size="sm" className="bg-white text-coral hover:bg-white/90">
            <Link href="/winners">View All Winners</Link>
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white"
            aria-label="Close banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
