"use client"

import React from 'react'
import { Bodoni_Moda, Work_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"

// Import individual components
import { Hero } from './components/landing/hero'
import { FeaturedLogos } from './components/landing/featured-logos'
import { ProductGrid } from './components/landing/product-grid'
import { Reviews } from './components/landing/reviews'
import { TrustBadges } from './components/landing/trust-badges'

// Font configurations matching the original layout
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

export function ElegantEcommerceTemplate() {
  // CSS variables as a style object
  const elegantStyles = {
    '--background': 'oklch(0.14 0 0)',
    '--foreground': 'oklch(0.98 0 0)',
    '--card': 'oklch(0.145 0 0)',
    '--card-foreground': 'oklch(0.985 0 0)',
    '--popover': 'oklch(0.145 0 0)',
    '--popover-foreground': 'oklch(0.985 0 0)',
    '--primary': 'oklch(0.985 0 0)',
    '--primary-foreground': 'oklch(0.205 0 0)',
    '--secondary': 'oklch(0.269 0 0)',
    '--secondary-foreground': 'oklch(0.985 0 0)',
    '--muted': 'oklch(0.24 0 0)',
    '--muted-foreground': 'oklch(0.72 0 0)',
    '--accent': 'oklch(0.8 0.12 85)',
    '--accent-foreground': 'oklch(0.18 0 0)',
    '--destructive': 'oklch(0.396 0.141 25.723)',
    '--destructive-foreground': 'oklch(0.637 0.237 25.331)',
    '--border': 'oklch(0.269 0 0)',
    '--input': 'oklch(0.269 0 0)',
    '--ring': 'oklch(0.439 0 0)',
    '--chart-1': 'oklch(0.488 0.243 264.376)',
    '--chart-2': 'oklch(0.696 0.17 162.48)',
    '--chart-3': 'oklch(0.769 0.188 70.08)',
    '--chart-4': 'oklch(0.627 0.265 303.9)',
    '--chart-5': 'oklch(0.645 0.246 16.439)',
    '--radius': '0.625rem',
    '--sidebar': 'oklch(0.205 0 0)',
    '--sidebar-foreground': 'oklch(0.985 0 0)',
    '--sidebar-primary': 'oklch(0.488 0.243 264.376)',
    '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
    '--sidebar-accent': 'oklch(0.269 0 0)',
    '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
    '--sidebar-border': 'oklch(0.269 0 0)',
    '--sidebar-ring': 'oklch(0.439 0 0)',
    '--font-sans': `${workSans.style.fontFamily}, system-ui, sans-serif`,
    '--font-mono': `${GeistMono.style.fontFamily}, ui-monospace, monospace`,
    '--font-serif': `${bodoni.style.fontFamily}, ui-serif, serif`,
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    fontFamily: 'var(--font-sans)',
    minHeight: '100vh'
  } as React.CSSProperties

  return (
    <div 
      className={`${workSans.variable} ${bodoni.variable} ${GeistMono.variable} antialiased`}
      style={elegantStyles}
    >
      <main className="min-h-screen">
        <Hero />
        <section aria-label="Featured In" className="border-t" style={{ borderColor: 'var(--border)' }}>
          <FeaturedLogos />
        </section>
        <section aria-label="Premium Tools" className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <header className="mb-8 md:mb-12 text-center">
              <h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                Premium tools for modern entrepreneurs
              </h2>
              <p className="mt-3 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                Curated software and essentials that elevate brand, streamline workflows, and accelerate growth.
              </p>
            </header>
            <ProductGrid />
          </div>
        </section>
        <section 
          aria-label="Customer Reviews" 
          className="py-14 md:py-20"
          style={{ backgroundColor: 'color-mix(in oklch, var(--muted) 30%, transparent)' }}
        >
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
    </div>
  )
}

export default ElegantEcommerceTemplate