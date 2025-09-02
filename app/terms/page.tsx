export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 text-center">Terms of Service</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-sm text-navy/60">Effective Date: {new Date().toLocaleDateString()}</p>

        <p>Welcome to The Mom Network. By using our site, you agree to the following terms:</p>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-3">1. Nature of the Service</h2>
          <p>
            The Mom Network is a community platform where users can submit stories, nominate themselves, and receive
            support ("Blessings") funded by small-dollar donations from the public.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-3">2. No Nonprofit Status</h2>
          <p>
            The Mom Network is not a 501(c)(3) nonprofit organization. Donations made through this site are voluntary
            gifts and are not tax-deductible as charitable contributions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-3">3. Payments and Donations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All payments are processed securely by Stripe.</li>
            <li>
              The Mom Network does not receive, hold, or control funds. Payments flow directly from donors to recipients
              using Stripe.
            </li>
            <li>
              Stripe may collect personal and financial information necessary to process payments. That information is
              governed by Stripe's privacy policy.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-3">4. Tax Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Recipients are solely responsible for determining and handling any tax obligations associated with
              Blessings received.
            </li>
            <li>The Mom Network does not provide tax advice.</li>
            <li>Stripe may issue tax reporting forms (such as a 1099-K) if thresholds are met.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-3">5. Eligibility for "Parent of the Week"</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any parent or legal guardian residing in the United States may enter.</li>
            <li>Selection is at the sole discretion of The Mom Network.</li>
            <li>
              Submission of a story or wishlist grants us permission to share that content publicly on our site and/or
              social channels.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-3">6. User Conduct</h2>
          <p>By using this site you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Submit false, harmful, or misleading information.</li>
            <li>Attempt to interfere with the site's operations or payment system.</li>
            <li>Impersonate another person.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-3">7. Disclaimer of Liability</h2>
          <p>
            The Mom Network provides the platform "as is." We do not guarantee that every participant will receive a
            Blessing. We are not responsible for technical failures, payment processor errors, or misuse of funds by
            recipients.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-3">8. Changes</h2>
          <p>
            We may update these Terms of Service at any time. Continued use of the site constitutes acceptance of
            updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-3">9. Contact</h2>
          <p>
            Questions about these terms can be directed to:{" "}
            <a href="mailto:MNMomNetwork@gmail.com" className="text-coral hover:underline">
              MNMomNetwork@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
