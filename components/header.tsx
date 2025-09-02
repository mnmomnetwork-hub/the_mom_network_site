"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Mission", href: "/mission" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "Videos", href: "/videos" },
  { name: "Weekly Winners", href: "/winners" },
  { name: "Resources", href: "/resources" },
  { name: "Share a Story", href: "/share-story" },
  { name: "Apply", href: "/apply" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-cream/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">The Mom Network</span>
            <div className="h-10 w-10 rounded-full bg-coral flex items-center justify-center text-white font-bold text-sm">
              MN
            </div>
            <span className="hidden sm:inline-block font-bold text-xl text-navy">The Mom Network</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-navy"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium leading-6 text-navy hover:text-coral transition-colors px-2 py-1 rounded",
                pathname === item.href && "text-coral bg-coral/10",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop donate button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-coral hover:bg-coral/90 text-white">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-cream px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-coral flex items-center justify-center text-white font-bold">
                  MN
                </div>
                <span className="font-bold text-xl text-navy">The Mom Network</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-navy"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-navy hover:bg-muted",
                      pathname === item.href && "bg-muted text-coral",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button asChild className="w-full bg-coral hover:bg-coral/90 text-white">
                  <Link href="/donate">Donate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
