"use client"
import Image from "next/image"
import { AnimatedButton } from "./animated-button"
import { MascotIcon } from "./mascot-icon"

export function Hero() {
  return (
    <header className="px-4 md:px-8 lg:px-12 pt-10 md:pt-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-card p-6 md:p-12 border shadow-sm">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              Friendly by design
            </p>
            <h1 className="mt-4 text-balance font-display text-4xl md:text-6xl lg:text-7xl leading-tight">
              Build brighter days with our playful tools
            </h1>
            <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed">
              Approachable products for real people. Join a community that learns, plays, and grows together.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <AnimatedButton>Get started</AnimatedButton>
              <AnimatedButton
                variant="secondary"
                className="bg-accent text-foreground hover:bg-primary hover:text-primary-foreground"
              >
                Meet the community
              </AnimatedButton>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
              {/* Mascot illustration (PNG) with animated SVG fallback layered */}
              <Image
                src="/images/mascot-bunny.jpg"
                alt="Playful bunny mascot"
                fill
                className="object-contain drop-shadow-sm rounded-3xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <MascotIcon className="h-16 w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}