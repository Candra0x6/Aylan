"use client"

import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      )}
      role="banner"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6" aria-label="Primary">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center">
            <span className="text-xl font-extrabold tracking-tight text-balance">TrendEase</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="rounded-full px-4">
            New
          </Button>
          <Button variant="ghost" className="rounded-full px-4">
            Women
          </Button>
          <Button variant="ghost" className="rounded-full px-4">
            Men
          </Button>
          <Button variant="ghost" className="rounded-full px-4">
            Accessories
          </Button>
          <Button variant="ghost" className="rounded-full px-4">
            Home
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full" aria-label="Search">
            <Search className="h-5 w-5" aria-hidden />
          </Button>
          <Button
            className="rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
            aria-label="Open cart"
          >
            <ShoppingCart className="mr-2 h-5 w-5" aria-hidden />
            <span className="hidden sm:inline">Cart</span>
          </Button>
        </div>
      </nav>
    </header>
  )
}
