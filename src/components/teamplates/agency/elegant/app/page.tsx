import Hero from "@/components/hero"
import Services from "@/components/services"
import ClientLogos from "@/components/client-logos"
import CaseStudies from "@/components/case-studies"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <ClientLogos />
      <CaseStudies />
      <TestimonialSlider />
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg">Aurum Atelier</p>
          <p className="text-sm opacity-80">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
