"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Slide = {
  id: string
  title: string
  subtitle: string
  imgSrc: string
  cta?: { label: string; href: string }
}

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const count = useMemo(() => slides.length, [slides])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const id = setInterval(() => {
      const next = (index + 1) % count
      setIndex(next)
      const nextChild = el.children[next] as HTMLElement | undefined
      nextChild?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }, 4500)
    return () => clearInterval(id)
  }, [index, count])

  // Pause rotation on user interaction
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let paused = false
    const onPointerDown = () => (paused = true)
    const onPointerUp = () => (paused = false)
    el.addEventListener("pointerdown", onPointerDown)
    el.addEventListener("pointerup", onPointerUp)
    return () => {
      el.removeEventListener("pointerdown", onPointerDown)
      el.removeEventListener("pointerup", onPointerUp)
    }
  }, [])

  return (
    <section aria-label="Featured products" className="relative">
      <div
        ref={containerRef}
        className={cn(
          "relative h-[80vh] md:h-[88vh] w-full",
          "overflow-x-auto overscroll-x-contain",
          "snap-x snap-mandatory scroll-smooth",
          "flex touch-pan-x",
        )}
      >
        {slides.map((s) => (
          <article key={s.id} className="relative snap-start shrink-0 w-full h-full" aria-roledescription="slide">
            <img src={s.imgSrc || "/placeholder.svg"} alt={s.title} className="h-full w-full object-cover" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/40 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-10 md:bottom-16">
              <div className="mx-auto max-w-5xl px-4 text-center">
                <h1 className="text-pretty text-3xl md:text-5xl font-extrabold leading-tight">{s.title}</h1>
                <p className="mt-3 text-lg md:text-xl text-muted-foreground">{s.subtitle}</p>
                {s.cta && (
                  <div className="mt-6">
                    <Button
                      asChild
                      className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-7 py-6 text-base font-semibold"
                    >
                      <a href={s.cta.href}>{s.cta.label}</a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Dots */}
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={cn(
              "h-2 w-2 rounded-full bg-muted transition-opacity",
              i === index ? "opacity-100" : "opacity-50",
            )}
          />
        ))}
      </div>
    </section>
  )
}