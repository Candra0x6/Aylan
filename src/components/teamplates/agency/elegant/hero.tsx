"use client"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const layerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const layer = layerRef.current
    if (!layer) return

    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) return

    let raf = 0
    const onScroll = () => {
      const y = window.scrollY * 0.2
      layer.style.transform = `translateY(${y}px)`
    }
    const loop = () => {
      onScroll()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section aria-label="Hero" className="relative w-full min-h-[60vh] md:min-h-[78vh] overflow-hidden bg-primary">
      {/* Parallax layer */}
      <div
        ref={layerRef}
        aria-hidden="true"
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-primary/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32 flex flex-col items-start">
        <span className="inline-flex items-center rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs tracking-wide">
          Bespoke Strategy • Enduring Brands
        </span>
        <h1 className="mt-6 font-serif text-balance text-4xl md:text-6xl leading-tight text-primary-foreground">
          Elevate Your Brand. Accelerate Your Growth.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-primary-foreground/90">
          A boutique agency for entrepreneurs seeking premium positioning and measurable business outcomes.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#services"
            className={cn(
              "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium",
              "bg-accent text-accent-foreground hover:opacity-90 transition",
            )}
          >
            Explore Services
          </a>
          <a
            href="#case-studies"
            className={cn(
              "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium",
              "bg-secondary text-secondary-foreground hover:bg-muted transition",
            )}
          >
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  )
}