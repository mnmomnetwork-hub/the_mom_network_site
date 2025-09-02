"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhoWeHelpPage() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Who We Help</h1>
      <p className="text-lg text-navy/80 max-w-2xl mx-auto mb-8">
        We support Minnesota parents who are overwhelmed, under-supported, or simply going through a tough season — no applications, no judgment.
      </p>
      <p className="text-sm text-navy/60 mb-10">
        While our mission began with moms, The Mom Network now welcomes single dads, foster parents, and any loving caregiver raising children in Minnesota.
      </p>

      <div className="bg-sage/10 text-navy rounded-xl p-6 max-w-xl mx-auto mb-12">
        <p className="text-lg font-medium mb-2">We’re building a softer world — one Minnesota family at a time 💛</p>
        <p className="text-sm">If you’re raising a child and could use extra support, you’re in the right place.</p>
      </div>

      <Button asChild className="bg-coral hover:bg-coral/90 text-white">
        <Link href="/donate">Support a Parent</Link>
      </Button>
    </div>
  )
}
