import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted-foreground">
          <div className="grid grid-cols-1 items-center justify-between gap-6 md:grid-cols-3">
            <p>&copy; {new Date().getFullYear()} Acme Workflows. All rights reserved.</p>
            <nav className="flex justify-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
            <p className="text-right hidden md:block">Built for productivity and trust.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
