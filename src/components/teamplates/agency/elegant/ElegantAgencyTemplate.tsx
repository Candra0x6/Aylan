"use client"

import React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import Hero from "./hero"
import Services from "./services"
import ClientLogos from "./client-logos"
import CaseStudies from "./case-studies"
import TestimonialSlider from "./testimonial-slider"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export default function ElegantAgencyTemplate() {
  return (
    <div className={cn(GeistSans.variable, GeistMono.variable, playfair.variable, "elegant-agency-template font-sans antialiased")}>
      <style jsx global>{`
        .elegant-agency-template {
          /* Elegant Agency Template Custom CSS Variables */
          
          /* Brand tokens - sophisticated color palette */
          --brand-navy: #0b1b2b;
          --brand-ivory: #f8f5ef;
          --brand-gold: #c8a24a;
          --brand-graphite: #2a2f36;

          /* Core colors mapped to brand */
          --background: var(--brand-ivory);
          --foreground: var(--brand-navy);
          --card: var(--brand-ivory);
          --card-foreground: var(--brand-navy);
          --popover: var(--brand-ivory);
          --popover-foreground: var(--brand-navy);
          --primary: var(--brand-navy);
          --primary-foreground: var(--brand-ivory);
          --secondary: #eae6dd; /* subtle ivory tint */
          --secondary-foreground: var(--brand-navy);
          --muted: #f1ede5;
          --muted-foreground: #5b616a;
          --accent: var(--brand-gold);
          --accent-foreground: var(--brand-navy);
          --destructive: #8a2b2b; /* not used visually; kept for system completeness */
          --destructive-foreground: var(--brand-ivory);
          --border: #e7e2d8;
          --input: #e7e2d8;
          --ring: var(--brand-gold);
          --chart-1: oklch(0.646 0.222 41.116);
          --chart-2: oklch(0.6 0.118 184.704);
          --chart-3: oklch(0.398 0.07 227.392);
          --chart-4: oklch(0.828 0.189 84.429);
          --chart-5: oklch(0.769 0.188 70.08);
          --radius: 0.625rem;
          --sidebar: oklch(0.985 0 0);
          --sidebar-foreground: oklch(0.145 0 0);
          --sidebar-primary: oklch(0.205 0 0);
          --sidebar-primary-foreground: oklch(0.985 0 0);
          --sidebar-accent: oklch(0.97 0 0);
          --sidebar-accent-foreground: oklch(0.205 0 0);
          --sidebar-border: oklch(0.922 0 0);
          --sidebar-ring: oklch(0.708 0 0);

          /* Font variables */
          --font-sans: var(--font-geist-sans);
          --font-mono: var(--font-geist-mono);
          --font-serif: var(--font-playfair); /* Map serif font to Playfair for headings */
          
          /* Color mappings */
          --color-background: var(--background);
          --color-foreground: var(--foreground);
          --color-card: var(--card);
          --color-card-foreground: var(--card-foreground);
          --color-popover: var(--popover);
          --color-popover-foreground: var(--popover-foreground);
          --color-primary: var(--primary);
          --color-primary-foreground: var(--primary-foreground);
          --color-secondary: var(--secondary);
          --color-secondary-foreground: var(--secondary-foreground);
          --color-muted: var(--muted);
          --color-muted-foreground: var(--muted-foreground);
          --color-accent: var(--accent);
          --color-accent-foreground: var(--accent-foreground);
          --color-destructive: var(--destructive);
          --color-destructive-foreground: var(--destructive-foreground);
          --color-border: var(--border);
          --color-input: var(--input);
          --color-ring: var(--ring);
          --color-chart-1: var(--chart-1);
          --color-chart-2: var(--chart-2);
          --color-chart-3: var(--chart-3);
          --color-chart-4: var(--chart-4);
          --color-chart-5: var(--chart-5);
          --radius-sm: calc(var(--radius) - 4px);
          --radius-md: calc(var(--radius) - 2px);
          --radius-lg: var(--radius);
          --radius-xl: calc(var(--radius) + 4px);
          --color-sidebar: var(--sidebar);
          --color-sidebar-foreground: var(--sidebar-foreground);
          --color-sidebar-primary: var(--sidebar-primary);
          --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
          --color-sidebar-accent: var(--sidebar-accent);
          --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
          --color-sidebar-border: var(--sidebar-border);
          --color-sidebar-ring: var(--sidebar-ring);

          /* Base styles */
          background-color: var(--background);
          color: var(--foreground);
        }

        .elegant-agency-template.dark {
          --background: oklch(0.145 0 0);
          --foreground: oklch(0.985 0 0);
          --card: oklch(0.145 0 0);
          --card-foreground: oklch(0.985 0 0);
          --popover: oklch(0.145 0 0);
          --popover-foreground: oklch(0.985 0 0);
          --primary: oklch(0.985 0 0);
          --primary-foreground: oklch(0.205 0 0);
          --secondary: oklch(0.269 0 0);
          --secondary-foreground: oklch(0.985 0 0);
          --muted: oklch(0.269 0 0);
          --muted-foreground: oklch(0.708 0 0);
          --accent: oklch(0.269 0 0);
          --accent-foreground: oklch(0.985 0 0);
          --destructive: oklch(0.396 0.141 25.723);
          --destructive-foreground: oklch(0.637 0.237 25.331);
          --border: oklch(0.269 0 0);
          --input: oklch(0.269 0 0);
          --ring: oklch(0.439 0 0);
          --chart-1: oklch(0.488 0.243 264.376);
          --chart-2: oklch(0.696 0.17 162.48);
          --chart-3: oklch(0.769 0.188 70.08);
          --chart-4: oklch(0.627 0.265 303.9);
          --chart-5: oklch(0.645 0.246 16.439);
          --sidebar: oklch(0.205 0 0);
          --sidebar-foreground: oklch(0.985 0 0);
          --sidebar-primary: oklch(0.488 0.243 264.376);
          --sidebar-primary-foreground: oklch(0.985 0 0);
          --sidebar-accent: oklch(0.269 0 0);
          --sidebar-accent-foreground: oklch(0.985 0 0);
          --sidebar-border: oklch(0.269 0 0);
          --sidebar-ring: oklch(0.439 0 0);
        }

        /* Ensure all elements within the template use the custom variables */
        .elegant-agency-template * {
          border-color: var(--border);
        }

        .elegant-agency-template *:focus-visible {
          outline: 2px solid var(--ring);
          outline-offset: 2px;
        }
      `}</style>
      
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
    </div>
  )
}