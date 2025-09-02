export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 text-center">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-navy/80 mb-8">The Mom Network respects your privacy.</p>

        <ul className="space-y-4 text-navy/80">
          <li>
            <strong>Information you submit</strong> (name, story, wishlist, or email) is used only to operate the site,
            process donations, and select winners.
          </li>
          <li>
            <strong>We do not sell or rent</strong> your information to third parties.
          </li>
          <li>
            <strong>If you share a story or wishlist,</strong> you are choosing to make that information public.
          </li>
          <li>
            <strong>Payments are processed securely</strong> through Stripe. We do not store credit card numbers.
          </li>
          <li>
            <strong>You may contact us</strong> at{" "}
            <a href="mailto:MNMomNetwork@gmail.com" className="text-coral hover:underline">
              MNMomNetwork@gmail.com
            </a>{" "}
            to request removal of your data.
          </li>
        </ul>
      </div>
    </div>
  )
}
