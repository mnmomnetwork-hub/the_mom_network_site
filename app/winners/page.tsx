import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WeeklyWinnersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Past Weekly Blessings</h1>
        <p className="text-lg text-navy/80">
          Each Sunday we pool our tiny gifts and bless one Minnesota parent live on TikTok. Below is the historical list of
          winners (kept for one year).
        </p>
      </div>

      {/* First giveaway notice */}
      <div className="bg-sage/20 rounded-lg p-6 text-center text-navy font-medium mb-12">
        Our first giveaway is coming soon! Follow us on TikTok to watch the live drawing
        every&nbsp;Sunday&nbsp;at&nbsp;5&nbsp;PM&nbsp;CST.
      </div>

      {/* Static example list – replace with real data later */}
      <ul className="max-w-md mx-auto space-y-4 text-navy">
        {[
          "June 10 – A parent from Hennepin County",
          "June 3 – A parent from Anoka County",
          "May 27 – A parent from Ramsey County",
        ].map((item) => (
          <li key={item} className="border border-sage/40 rounded-lg p-4 hover:bg-sage/10 transition-colors">
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="text-center mt-16">
        <Button asChild className="bg-coral hover:bg-coral/90 text-white">
          <Link href="/donate" prefetch={false}>
            Support Next Week&#39;s Blessing
          </Link>
        </Button>
      </div>
    </div>
  )
}
