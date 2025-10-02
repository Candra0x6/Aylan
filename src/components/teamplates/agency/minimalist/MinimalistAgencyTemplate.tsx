"use client"

import React from "react"
import { Lato } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { MinNav } from "./min-nav"
import { Hero } from "./hero"
import { PortfolioGrid } from "./portfolio-grid"
import { Services } from "./services"
import { ClientLogos } from "./client-logos"
import { FadeIn } from "./fade-in"
import { cn } from "@/lib/utils"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export default function MinimalistAgencyTemplate() {
  return (
    <div className={cn(lato.variable, GeistMono.variable, "minimalist-agency-template font-sans antialiased")}>
      <style jsx global>{`
        .minimalist-agency-template {
          /* Minimalist Agency Template Custom CSS Variables */
          /* Pure minimalist color scheme */
          --background: oklch(1 0 0); /* pure white */
          --foreground: oklch(0.18 0 0); /* deep black */
          --card: oklch(1 0 0); /* pure white */
          --card-foreground: oklch(0.18 0 0); /* deep black */
          --popover: oklch(1 0 0); /* pure white */
          --popover-foreground: oklch(0.18 0 0); /* deep black */
          --primary: oklch(0.205 0 0); /* dark black */
          --primary-foreground: oklch(0.985 0 0); /* off-white */
          --secondary: oklch(0.97 0 0); /* very light gray */
          --secondary-foreground: oklch(0.205 0 0); /* dark black */
          --muted: oklch(0.97 0 0); /* very light gray */
          --muted-foreground: oklch(0.556 0 0); /* medium gray */
          --accent: oklch(0.98 0.02 85); /* soft beige */
          --accent-foreground: oklch(0.18 0 0); /* deep black */
          --destructive: oklch(0.577 0.245 27.325);
          --destructive-foreground: oklch(0.577 0.245 27.325);
          --border: oklch(0.92 0 0); /* soft gray border */
          --input: oklch(0.922 0 0);
          --ring: oklch(0.708 0 0);
          --chart-1: oklch(0.646 0.222 41.116);
          --chart-2: oklch(0.6 0.118 184.704);
          --chart-3: oklch(0.398 0.07 227.392);
          --chart-4: oklch(0.828 0.189 84.429);
          --chart-5: oklch(0.769 0.188 70.08);
          --radius: 0.625rem; /* subtle border radius */
          --sidebar: oklch(0.985 0 0);
          --sidebar-foreground: oklch(0.18 0 0);
          --sidebar-primary: oklch(0.205 0 0);
          --sidebar-primary-foreground: oklch(0.985 0 0);
          --sidebar-accent: oklch(0.98 0.02 85); /* soft beige */
          --sidebar-accent-foreground: oklch(0.18 0 0);
          --sidebar-border: oklch(0.92 0 0); /* soft gray border */
          --sidebar-ring: oklch(0.708 0 0);

          /* Font variables */
          --font-sans: var(--font-lato);
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
        }

        .minimalist-agency-template.dark {
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
        .minimalist-agency-template * {
          border-color: hsl(var(--border));
        }

        .minimalist-agency-template *:focus-visible {
          outline: 2px solid hsl(var(--ring));
          outline-offset: 2px;
        }

        /* Custom link underline animation from the original template */
        .minimalist-agency-template a.link-underline {
          position: relative;
          text-decoration: none;
        }

        .minimalist-agency-template a.link-underline::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 200ms ease;
        }

        .minimalist-agency-template a.link-underline:hover::after,
        .minimalist-agency-template a.link-underline:focus-visible::after {
          transform: scaleX(1);
        }
      `}</style>
      
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
                <h3 className="font-light tracking-tight">Let&apos;s make it clear.</h3>
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
    </div>
  )
}