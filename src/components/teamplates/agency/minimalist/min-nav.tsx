"use client"

import Link from "next/link"

export function MinNav() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="font-light tracking-tight text-foreground/90">
          Clarity Agency
          <span className="sr-only">Home</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          {[
            { href: "#work", label: "Work" },
            { href: "#services", label: "Services" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline text-foreground/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}