"use client"

import React from "react"
import { Nunito, Baloo_2 } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Hero } from "./hero"
import { IconNav } from "./icon-nav"
import { CommunityStories } from "./community-stories"
import { PollQuiz } from "./poll-quiz"
import { MilestoneProgress } from "./milestone-progress"
import { cn } from "@/lib/utils"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })
const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo" })

export default function PlayfulCorporateTemplate() {
  return (
    <div className={cn(nunito.variable, baloo.variable, GeistMono.variable, "playful-corporate-template font-sans antialiased")}>
      <style jsx global>{`
        .playful-corporate-template {
          /* Playful Corporate Template Custom CSS Variables */
          /* Neutrals */
          --background: oklch(0.98 0.01 260); /* soft off-white */
          --foreground: oklch(0.28 0.03 278); /* friendly dark gray */

          /* Brand + accents (playful pastel palette) */
          --primary: oklch(0.88 0.06 235); /* pastel blue */
          --primary-foreground: oklch(0.22 0.03 278);

          --accent: oklch(0.92 0.1 20); /* pastel pink */
          --accent-foreground: oklch(0.28 0.03 278);

          --secondary: oklch(0.95 0.09 100); /* pastel yellow */
          --secondary-foreground: oklch(0.28 0.03 278);

          /* Support colors */
          --card: oklch(0.98 0.01 260);
          --card-foreground: oklch(0.28 0.03 278);
          --popover: oklch(0.98 0.01 260);
          --popover-foreground: oklch(0.28 0.03 278);
          --muted: oklch(0.96 0.01 260);
          --muted-foreground: oklch(0.45 0.02 278);
          --border: oklch(0.92 0.01 260);
          --input: oklch(0.92 0.01 260);
          --ring: oklch(0.78 0.04 235);
          --destructive: oklch(0.577 0.245 27.325);
          --destructive-foreground: oklch(0.577 0.245 27.325);

          /* Charts retain same slots but map to our palette */
          --chart-1: var(--primary);
          --chart-2: var(--accent);
          --chart-3: var(--secondary);
          --chart-4: oklch(0.9 0.02 278); /* soft gray */
          --chart-5: oklch(0.82 0.05 235);

          --radius: 1rem; /* rounder UI */
          --sidebar: oklch(1 0 0);
          --sidebar-foreground: oklch(0.145 0 0);
          --sidebar-primary: oklch(0.205 0 0);
          --sidebar-primary-foreground: oklch(0.985 0 0);
          --sidebar-accent: oklch(0.97 0 0);
          --sidebar-accent-foreground: oklch(0.205 0 0);
          --sidebar-border: oklch(0.922 0 0);
          --sidebar-ring: oklch(0.708 0 0);

          /* Font variables */
          --font-sans: var(--font-nunito);
          --font-mono: var(--font-geist-mono);
          
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
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          min-height: 100dvh;
        }

        .playful-corporate-template.dark {
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
        .playful-corporate-template * {
          border-color: hsl(var(--border));
        }

        .playful-corporate-template *:focus-visible {
          outline: 2px solid hsl(var(--ring));
          outline-offset: 2px;
        }

        /* Playful display font class */
        .playful-corporate-template .font-display {
          font-family: var(--font-baloo, system-ui), ui-rounded, sans-serif;
        }

        /* Custom animations from the original template */
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-2deg) translateY(0);
          }
          50% {
            transform: rotate(2deg) translateY(-2px);
          }
        }

        @keyframes bounce-soft {
          0%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-4px);
          }
          60% {
            transform: translateY(-2px);
          }
        }

        .playful-corporate-template .animate-wiggle {
          animation: wiggle 1.2s ease-in-out infinite;
        }

        .playful-corporate-template .press-bounce:active {
          transform: translateY(0.5px) scale(0.98);
        }

        .playful-corporate-template .hover-bounce:hover {
          animation: bounce-soft 0.6s ease;
        }
      `}</style>
      
      <main className="min-h-dvh bg-background">
        <IconNav />
        <Hero />
        <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
          <CommunityStories />
        </section>
        <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 bg-secondary rounded-t-[2rem]">
          <PollQuiz />
        </section>
        <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
          <MilestoneProgress />
        </section>
        <footer className="px-4 md:px-8 lg:px-12 py-10 text-center text-sm text-muted-foreground">
          Made with care by PlayCo. All copy is placeholder.
        </footer>
      </main>
    </div>
  )
}