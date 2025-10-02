"use client"

import React from 'react'
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"

// Import individual components
import Hero from './components/hero'
import Features from './components/features'
import Testimonials from './components/testimonials'
import Pricing from './components/pricing'

// Font configurations matching the original layout
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export function MinimalistSaasTemplate() {
  // CSS variables as a style object matching the original design
  const minimalistStyles = {
    // Light theme variables
    '--background': 'oklch(1 0 0)',
    '--foreground': 'oklch(0.145 0 0)',
    '--card': 'oklch(1 0 0)',
    '--card-foreground': 'oklch(0.145 0 0)',
    '--popover': 'oklch(1 0 0)',
    '--popover-foreground': 'oklch(0.145 0 0)',
    '--primary': 'oklch(0.72 0.09 200)', // muted teal
    '--primary-foreground': 'oklch(0.985 0 0)', // white-ish
    '--secondary': 'oklch(0.97 0 0)',
    '--secondary-foreground': 'oklch(0.205 0 0)',
    '--muted': 'oklch(0.97 0 0)',
    '--muted-foreground': 'oklch(0.556 0 0)',
    '--accent': 'oklch(0.97 0.02 200)', // very light teal-tinted gray
    '--accent-foreground': 'oklch(0.205 0 0)', // near black for contrast
    '--destructive': 'oklch(0.577 0.245 27.325)',
    '--destructive-foreground': 'oklch(0.577 0.245 27.325)',
    '--border': 'oklch(0.922 0 0)',
    '--input': 'oklch(0.922 0 0)',
    '--ring': 'oklch(0.708 0 0)',
    '--chart-1': 'oklch(0.646 0.222 41.116)',
    '--chart-2': 'oklch(0.6 0.118 184.704)',
    '--chart-3': 'oklch(0.398 0.07 227.392)',
    '--chart-4': 'oklch(0.828 0.189 84.429)',
    '--chart-5': 'oklch(0.769 0.188 70.08)',
    '--radius': '0.625rem',
    '--sidebar': 'oklch(0.985 0 0)',
    '--sidebar-foreground': 'oklch(0.145 0 0)',
    '--sidebar-primary': 'oklch(0.205 0 0)',
    '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
    '--sidebar-accent': 'oklch(0.97 0 0)',
    '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
    '--sidebar-border': 'oklch(0.922 0 0)',
    '--sidebar-ring': 'oklch(0.708 0 0)',

    // Font variables
    '--font-sans': `${inter.style.fontFamily}, system-ui, sans-serif`,
    '--font-mono': `${GeistMono.style.fontFamily}, ui-monospace, monospace`,

    // Apply base styling
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    fontFamily: 'var(--font-sans)',
    minHeight: '100vh'
  } as React.CSSProperties

  return (
    <div 
      className={`font-sans antialiased ${inter.variable} ${GeistMono.variable}`}
      style={minimalistStyles}
    >
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm" style={{ color: 'var(--muted-foreground)' }}>
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
    </div>
  )
}

export default MinimalistSaasTemplate