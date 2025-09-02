import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SponsorSpotlightPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Sponsor Spotlight</h1>
        <p className="text-lg text-navy/80 max-w-2xl mx-auto mb-4">
          Want to support a mom in need and be recognized by our community? Become a sponsor!
        </p>
        <p className="text-sm text-navy/60 mb-6">
          Sponsors help fund our weekly gift drops and get a shoutout during our Sunday TikTok Live.
        </p>
        <Button asChild className="bg-coral hover:bg-coral/90 text-white">
          <Link href="/submit-story">Apply to Sponsor a Week</Link>
        </Button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Recent Sponsors</h2>
        <p className="text-sm text-navy/70">We’re grateful for the support of local businesses and generous individuals.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-navy font-semibold">Sponsor Name Placeholder</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy/70 mb-2">Sponsored: Week of June {10 - i}, 2024</p>
              <p className="text-sm text-navy/60 italic">“Proud to support moms in our community.”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
