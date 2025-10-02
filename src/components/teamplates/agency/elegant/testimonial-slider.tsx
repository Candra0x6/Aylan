"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Reveal from "./reveal"

type Testimonial = {
  quote: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "They crystallized our brand and built a system that actually drives growth. Every deliverable was immaculate.",
    name: "Elise Rowan",
    title: "Founder, Lyra Labs",
  },
  {
    quote:
      "The strategy and execution were world-class. We saw results in weeks and a lasting step-change in perception.",
    name: "Marcus Hale",
    title: "CEO, Meridian",
  },
  {
    quote:
      "A rare blend of taste and rigor. Our team finally has a playbook that scales without losing the brand's soul.",
    name: "Sofia Alvarez",
    title: "COO, Alto & Co",
  },
]

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) return

    const tick = () => setIndex((i) => (i + 1) % testimonials.length)
    timer.current = window.setInterval(tick, 5000)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [])

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section aria-labelledby="testimonials-heading" className="bg-secondary">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Reveal as="header" className="text-center">
          <h2 id="testimonials-heading" className="font-serif text-3xl md:text-4xl text-foreground">
            In Their Words
          </h2>
        </Reveal>

        <div className="mt-8 relative">
          <div className="rounded-lg border border-border bg-card p-8 md:p-10">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                className={cn(
                  "transition-opacity duration-500",
                  i === index ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none p-8 md:p-10",
                )}
                aria-hidden={i !== index}
              >
                <p className="text-lg md:text-xl leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">{t.name}</span> • {t.title}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="rounded-md border border-border bg-card px-3 py-2 text-sm hover:bg-muted transition"
            >
              Prev
            </button>
            <div className="flex items-center gap-2" aria-label="Slide indicators">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className={cn("h-2 w-2 rounded-full", i === index ? "bg-accent" : "bg-border")}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="rounded-md border border-border bg-card px-3 py-2 text-sm hover:bg-muted transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}