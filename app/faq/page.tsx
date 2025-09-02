"use client";

export default function FAQPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-navy mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">

        {/* 1 - How do I enter */}
        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            How do I enter?
          </summary>
          <p className="mt-2 text-navy/80">
            Use the donation box at the top of the homepage to give — then scroll down to submit your name into the weekly drawing. Both steps matter.
          </p>
        </details>

        {/* 2 - Do I need to re-enter */}
        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Do I need to re-enter my name every week?
          </summary>
          <p className="mt-2 text-navy/80">
            Yes! Entries reset every Sunday night. Make sure to re-submit your name each week if you'd like to be included.
          </p>
        </details>

        {/* 3 - Will I be taxed */}
        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Will I be taxed if I win?
          </summary>
          <p className="mt-2 text-navy/80">
            Blessings from The Mom Network are intended as personal gifts, not income. Under U.S. tax law, gifts are generally not taxable to the recipient. However, payment processors like Stripe may still issue a 1099-K form if you receive $600 or more in a calendar year. If that happens, you should work with a tax professional to record the funds as gifts. We recommend keeping your own simple record of any blessings you receive.
          </p>
        </details>

        {/* 4 - Do I have to donate */}
        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Do I have to donate to be eligible?
          </summary>
          <p className="mt-2 text-navy/80">
            Yes. We ask that every participant gives a small gift (like $2–$5) so we can keep the cycle of kindness going. If that’s a barrier, please check back next round. Donations are required to participate, but they do not guarantee you will win.
          </p>
        </details>

        {/* 5 - Who can be selected */}
        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Who can be selected as the Parent of the Week?
          </summary>
          <p className="mt-2 text-navy/80">
            Any parent — mom, dad, or legal guardian — living anywhere in the United States. Whether you’re in need of a little extra support or just deserve to be celebrated, you can enter your own name each week to be considered.
          </p>
        </details>

        {/* 6 - Why is it called The Mom Network */}
        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Why is it called The Mom Network if you also help dads?
          </summary>
          <p className="mt-2 text-navy/80">
            The Mom Network started with the goal of supporting moms, but it quickly grew into a community for all parents — moms, dads, and legal guardians. While the name reflects our origins, our mission is to celebrate and support all parents across the United States.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Can I nominate another parent?
          </summary>
          <p className="mt-2 text-navy/80">
            No. To keep it fair and honest, all stories must be submitted by the person asking for help. However, you can encourage someone to share their own story — or bless them directly using their Amazon wishlist.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Can I submit an Amazon wishlist?
          </summary>
          <p className="mt-2 text-navy/80">
            Yes. When you submit your story, there’s a place to add your Amazon wishlist link. This helps others contribute if they'd like.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Where does the money go?
          </summary>
          <p className="mt-2 text-navy/80">
            <strong>100% of donations go directly to our weekly winners</strong> through Stripe’s secure payment system. The funds never pass through our hands — Stripe sends them straight to the winner’s own account. If you choose to add the optional $2 organizer tip, it helps keep this program running by covering fees, tools, and the time needed to coordinate blessings.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Why is there no $1.00 option?
          </summary>
          <p className="mt-2 text-navy/80">
            Payment processors like Stripe take about 2.9% + $0.30 per transaction. On a $1.00 payment, nearly a third disappears in fees, which leaves too little to bless the winner. A $2.00 minimum ensures that donations remain impactful even after processing costs.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Why is there a $2.00 tip option on the donation form?
          </summary>
          <p className="mt-2 text-navy/80">
            The $2.00 <strong>tip</strong> is completely optional and supports the organizer so we can keep this program going every week. Your main $2.00 entry donation goes fully to the weekly winners; the tip helps cover the basic costs to run the program.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Can I participate if I don’t live in Minnesota?
          </summary>
          <p className="mt-2 text-navy/80">
            Yes! We now welcome nominations from anywhere in the United States.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            How do you know if the winner is a parent?
          </summary>
          <p className="mt-2 text-navy/80">
            Winners must answer a phone call and complete a short video call with the organizer within 24 hours of being selected. During this call, winners may be asked to briefly show a valid U.S. ID to confirm they reside in the United States. No copies are taken or stored. If we can’t reach someone in 24 hours, we select another winner.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            How will I receive my blessing if I win?
          </summary>
          <p className="mt-2 text-navy/80">
            Winners receive a secure Stripe onboarding link to set up their own free account. This is where you privately enter your payout details so Stripe can send your blessing directly to you. We never see or store your bank information — all payments are handled through Stripe’s secure system.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Is this legit? How do I know it’s not a scam?
          </summary>
          <p className="mt-2 text-navy/80">
            We will <strong>never</strong> DM you to ask for money. All donations and entries happen only through our official website. Winners are announced publicly on our website, TikTok, and Instagram, and complete a brief verification video call before receiving blessings. If you’re ever unsure, double-check the URL before donating and look for our logo and branding.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Can a parent win twice?
          </summary>
          <p className="mt-2 text-navy/80">
            Yes! Moms, dads, or guardians can win more than once. We believe removing past winners from the drawing would also remove a potential future gifter. If someone wins again, it must mean they truly need the blessing — and we hope they are doing something amazing with it.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Do I have to share my story?
          </summary>
          <p className="mt-2 text-navy/80">
            No. While we would love to hear your story, it’s not required. You can simply submit your name to be entered into the drawing — but please note that if you win, your name will be publicly announced on our website, TikTok, and Instagram. Beyond that, if you do not feel comfortable recording a video call, you don’t have to. The video call is optional after the verification process.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Can I be disqualified?
          </summary>
          <p className="mt-2 text-navy/80">
            Yes. Kindness matters here. Hate speech, harassment, dishonesty, or attempting to manipulate the drawing process will result in disqualification from current and future drawings. We reserve the right to update our rules or eligibility requirements at any time.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Do you control how the winner spends their blessing?
          </summary>
          <p className="mt-2 text-navy/80">
            No. Once a blessing is received, it belongs to the winner to use however they choose. We are not responsible for how blessings are spent.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Why do you ask for my email?
          </summary>
          <p className="mt-2 text-navy/80">
            We send out a short weekly reminder email to help you remember to get your name into the drawing before the deadline.
          </p>
        </details>

        <details className="group border rounded-lg px-4 py-3">
          <summary className="cursor-pointer font-semibold text-navy">
            Do you have an app?
          </summary>
          <p className="mt-2 text-navy/80">
            Not yet — but it’s a work in progress! In the meantime, you can access everything on our official website.
          </p>
        </details>

      </div>
    </div>
  );
}
