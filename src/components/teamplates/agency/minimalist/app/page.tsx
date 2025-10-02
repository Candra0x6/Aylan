import { MinNav } from "@/components/min-nav"
import { Hero } from "@/components/hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Services } from "@/components/services"
import { ClientLogos } from "@/components/client-logos"
import { FadeIn } from "@/components/fade-in"

export default function Page() {
  return (
    <main>
      <MinNav />
      <FadeIn as="section" className="">
        <Hero />
      </FadeIn>

      <FadeIn as="section" delay={50}>
        <ClientLogos />
      </FadeIn>

      <FadeIn as="section" delay={100}>
        <PortfolioGrid />
      </FadeIn>

      <FadeIn as="section" delay={150}>
        <Services />
      </FadeIn>

      <footer id="contact" className="border-t">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-light tracking-tight">Let’s make it clear.</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Email us at{" "}
                <a href="mailto:hello@clarity.agency" className="link-underline">
                  hello@clarity.agency
                </a>
              </p>
            </div>
            <nav aria-label="Footer">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="link-underline" href="#work">
                    Work
                  </a>
                </li>
                <li>
                  <a className="link-underline" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="link-underline" href="#about">
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <p className="mt-6 text-xs text-foreground/60">© {new Date().getFullYear()} Clarity Agency</p>
        </div>
      </footer>
    </main>
  )
}
