import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">The Mom Network</h2>
            <p className="mt-4 text-sm">Supporting moms through community, resources, and weekly giveaways.</p>
            <div className="mt-6 flex space-x-6">
              <Link href="#" className="text-cream hover:text-coral">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-cream hover:text-coral">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-cream hover:text-coral">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="/resources" className="text-sm hover:text-coral">
                    Digital Downloads
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="text-sm hover:text-coral">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm hover:text-coral">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-coral">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Community</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="/share-story" className="text-sm hover:text-coral">
                    Share Your Story
                  </Link>
                </li>
                <li>
                  <Link href="/winners" className="text-sm hover:text-coral">
                    Weekly Winners
                  </Link>
                </li>
                <li>
                  <Link href="/apply" className="text-sm hover:text-coral">
                    Apply to Help
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm hover:text-coral">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Subscribe</h3>
            <p className="mt-4 text-sm">Get the latest updates and news from The Mom Network.</p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white/10 px-4 py-2 text-base text-cream placeholder-cream/50 shadow-sm focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-coral px-4 py-2 text-base font-medium text-white hover:bg-coral/90 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-navy"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/20 pt-8">
          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <Link href="/terms" className="hover:text-coral">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-coral">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-coral">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-coral">
              Contact
            </Link>
          </div>
          <p className="mt-4 text-center text-xs">
            &copy; {new Date().getFullYear()} The Mom Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
