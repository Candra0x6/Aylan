import { Hero } from "@/components/landing/hero"
import { FeaturedLogos } from "@/components/landing/featured-logos"
import { ProductGrid } from "@/components/landing/product-grid"
import { Reviews } from "@/components/landing/reviews"
import { TrustBadges } from "@/components/landing/trust-badges"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <section aria-label="Featured In" className="border-t border-border">
        <FeaturedLogos />
      </section>
      <section aria-label="Premium Tools" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <header className="mb-8 md:mb-12 text-center">
            <h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight">
              Premium tools for modern entrepreneurs
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
              Curated software and essentials that elevate brand, streamline workflows, and accelerate growth.
            </p>
          </header>
          <ProductGrid />
        </div>
      </section>
      <section aria-label="Customer Reviews" className="py-14 md:py-20 bg-[color:var(--muted)]/30">
        <div className="container mx-auto px-4">
          <Reviews />
        </div>
      </section>
      <section aria-label="Trust & Security" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>
    </main>
  )
}
