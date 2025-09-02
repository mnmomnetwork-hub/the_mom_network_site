"use client";

import { ExternalLink, ShieldCheck } from "lucide-react";

export default function ResourcesPage() {
  return (
    <main className="px-4 py-12 sm:px-8 bg-cream text-navy">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-3">Start Here for Links, Forms & Updates</h1>
          <p className="text-navy/80 max-w-2xl mx-auto">
            One place for our latest guides, giveaways, and weekly Parent of the Week updates.
            Tap below to open our Beacons hub for quick links, forms, and announcements.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <a
              href="https://beacons.ai/momhelpermn?utm_source=website&utm_medium=resources_page&utm_campaign=beacons_hub"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral/90 text-white font-semibold px-5 py-2.5 rounded-lg transition"
            >
              Open Beacons Hub <ExternalLink size={16} />
            </a>
          </div>

          {/* Safety note */}
          <div className="mt-6 inline-flex items-start gap-2 text-left text-sm text-navy/80 bg-white border border-sage/30 rounded-lg px-3 py-2">
            <ShieldCheck className="mt-0.5 shrink-0" size={16} />
            <p><strong>Safety:</strong> We’ll never DM you for money. Always use links from our website or Beacons hub.</p>
          </div>
        </section>

      </div>
    </main>
  );
}
