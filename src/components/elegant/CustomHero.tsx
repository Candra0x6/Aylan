"use client"

import { Button } from "@/components/ui/button"

interface CustomHeroProps {
  heroTitle?: string
  heroSubtitle?: string
  ctaPrimary?: string
  ctaSecondary?: string
}

export default function CustomHero({
  heroTitle = "Build a brand that feels premium from day one",
  heroSubtitle = "Elegant tools, refined aesthetics, and effortless performance—crafted for ambitious founders.",
  ctaPrimary = "Shop Premium Tools",
  ctaSecondary = "Explore Collections"
}: CustomHeroProps) {
  return (
    <section aria-label="Hero" className="relative isolate">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/hero-cinematic.jpg')" }}
        aria-hidden="true"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 -z-0 bg-black/50" aria-hidden="true" />
      <div className="container mx-auto px-4">
        <div className="flex min-h-[72vh] md:min-h-[80vh] items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl md:text-6xl font-semibold leading-tight">
              {heroTitle}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {heroSubtitle}
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button className="bg-[color:var(--accent)] text-[color:var(--accent-foreground)] hover:brightness-95">
                {ctaPrimary}
              </Button>
              <Button
                variant="outline"
                className="border-[color:var(--accent)] text-[color:var(--accent)] hover:bg-[color:var(--accent)]/10 bg-transparent"
              >
                {ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}