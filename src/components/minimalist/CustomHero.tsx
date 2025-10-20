"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
  brandName?: string
  heroTitle?: string
  heroSubtitle?: string
  ctaPrimary?: string
  ctaSecondary?: string
  footerText?: string
}

export default function CustomHero({
  brandName = "Acme Workflows",
  heroTitle = "Streamline professional workflows with clarity and speed",
  heroSubtitle = "Acme Workflows is a minimalist platform designed for focused teams. Automate routine tasks, align processes, and move work forward with confidence.",
  ctaPrimary = "Start free trial",
  ctaSecondary = "Book a demo",
  footerText = "No credit card required. 14-day free trial."
}: HeroProps) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-primary" aria-hidden />
            <span className="font-semibold tracking-tight">{brandName}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#customers" className="hover:text-foreground transition-colors">
              Customers
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Sign in</Button>
            <Button>Get started</Button>
          </div>
        </div>

        {/*  Hero section */}
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6 lg:col-span-7">
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              {heroTitle}
            </h1>
            <p className="mt-5 max-w-prose text-pretty text-muted-foreground">
              {heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="px-6">
                {ctaPrimary}
              </Button>
              <Button size="lg" variant="outline" className="px-6 bg-transparent">
                {ctaSecondary}
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{footerText}</p>
          </div>

          {/* Minimalist visual */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 rounded-lg bg-accent" />
                <div className="h-24 rounded-lg bg-accent" />
                <div className="h-24 rounded-lg bg-accent" />
                <div className="col-span-3 h-36 rounded-lg bg-secondary" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="h-20 rounded-lg bg-accent" />
                <div className="h-20 rounded-lg bg-accent" />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">A clean, grid-first canvas that keeps teams aligned.</p>
          </div>
        </div>
      </div>
    </header>
  )
}