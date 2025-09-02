import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MissionPage() {
  return (
    <div className="container mx-auto py-24 px-4 max-w-3xl text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Why We Exist</h1>
      <p className="text-lg text-navy/80 mb-6">
        The Mom Network is here to build a community of giving. We believe small acts of kindness can change lives.
      </p>
      <p className="text-lg text-navy/80 mb-6">
        Every week we pool together $2–$5 donations and bless one Minnesota mom, dad, or caregiver — no strings attached, no judgment. Because when families are supported, communities thrive.
      </p>
      <p className="text-sm text-navy/60 mb-10">
        While we are mom-centered, we proudly welcome dads, grandparents, foster parents, and all loving caregivers doing the work of raising children.
      </p>
      <Button asChild className="bg-coral hover:bg-coral/90 text-white">
        <Link href="/donate">Support Our Mission</Link>
      </Button>
    </div>
  )
}
