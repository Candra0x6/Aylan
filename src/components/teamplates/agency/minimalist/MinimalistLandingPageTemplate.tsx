"use client"

import React from "react"
import { Lato } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, ChevronRight, Clock, Play, MapPin } from "lucide-react"
import { FadeIn } from "./fade-in"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
})

// Types for the dynamic minimalist landing page
export interface MinimalistLandingPageData {
  // Header/Navigation
  header: {
    logo: string
    contactCta: string
    contactLink: string
    breadcrumbs?: Array<{ label: string; href: string }>
  }
  
  // Hero Section
  hero: {
    tagline?: string
    targetKeyword: string
    headline: string
    subheading: string
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
  }
  
  // Credibility Strip
  credibility: {
    clientLogos: string[]
    metric: {
      value: string
      description: string
    }
  }
  
  // Services Section
  services: {
    title: string
    subtitle?: string
    items: Array<{
      title: string
      outcomeDescription: string
      workLink: string
    }>
  }
  
  // Featured Case Study
  caseStudy: {
    metric: string
    metricDescription: string
    clientQuote: string
    clientName: string
    clientTitle: string
    caseStudyLink: string
  }
  
  // How We Work Section
  howWeWork: {
    title: string
    subtitle?: string
    steps: Array<{
      stepNumber: number
      title: string
      description: string
    }>
  }
  
  // Testimonials Section
  testimonials: {
    title: string
    subtitle?: string
    items: Array<{
      quote: string
      clientName: string
      clientTitle: string
      clientCompany: string
      clientImage?: string
      videoUrl?: string
      rating?: number
    }>
  }
  
  // Pricing Section
  pricing: {
    title: string
    subtitle?: string
    showTransparentPricing: boolean
    packages?: Array<{
      name: string
      priceRange: string
      description: string
      features: string[]
      ctaText: string
      ctaLink: string
    }>
    customOption?: {
      title: string
      description: string
      ctaText: string
      ctaLink: string
    }
  }
  
  // Lead Capture Section
  leadCapture: {
    title: string
    subtitle?: string
    formType: 'form' | 'calendar'
    nextAvailability?: string
    formFields?: Array<{
      name: string
      label: string
      type: string
      required: boolean
    }>
    calendarEmbedUrl?: string
    submitText?: string
  }
  
  // Footer
  footer: {
    companyName: string
    tagline?: string
    contactInfo: {
      address?: string
      phone?: string
      email?: string
    }
    sitemapLinks: Array<{
      label: string
      href: string
    }>
    socialLinks?: Array<{
      platform: string
      url: string
    }>
  }
}

interface MinimalistLandingPageTemplateProps {
  data: MinimalistLandingPageData
  className?: string
}

// Header Component
const MinimalistHeader: React.FC<{ data: MinimalistLandingPageData['header'] }> = ({ data }) => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="font-light tracking-tight text-foreground/90">
            {data.logo}
          </div>
          {data.breadcrumbs && data.breadcrumbs.length > 0 && (
            <div className="hidden md:flex items-center text-xs text-foreground/50 uppercase tracking-[0.2em]">
              {data.breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  {index > 0 && <ChevronRight className="h-3 w-3 mx-2" />}
                  <a href={crumb.href} className="link-underline hover:text-foreground/70 transition-colors">
                    {crumb.label}
                  </a>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
        <Button 
          asChild 
          variant="ghost" 
          size="sm"
          className="text-sm link-underline font-normal"
        >
          <a href={data.contactLink}>{data.contactCta}</a>
        </Button>
      </nav>
    </header>
  )
}

// Hero Component
const MinimalistHero: React.FC<{ data: MinimalistLandingPageData['hero'] }> = ({ data }) => {
  return (
    <section className="w-full border-b">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        {data.tagline && (
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4">
            {data.tagline}
          </p>
        )}
        <h1 className="text-pretty text-4xl md:text-6xl font-light tracking-tight">
          {data.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-foreground/70 leading-relaxed">
          {data.subheading}
        </p>
        <div className="mt-8 flex items-center gap-6">
          <a 
            href={data.primaryCtaLink || "#contact"} 
            className="link-underline text-sm"
          >
            {data.primaryCtaText || "Get a free strategy call"}
          </a>
          {data.secondaryCtaText && data.secondaryCtaLink && (
            <a 
              href={data.secondaryCtaLink} 
              className="link-underline text-sm text-foreground/70"
            >
              {data.secondaryCtaText}
            </a>
          )}
        </div>
      </div>
      <div className="bg-accent/60 h-[1px] w-full" aria-hidden />
    </section>
  )
}

// Credibility Strip Component
const MinimalistCredibilityStrip: React.FC<{ data: MinimalistLandingPageData['credibility'] }> = ({ data }) => {
  return (
    <section className="py-12 md:py-16 bg-accent">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {data.clientLogos.map((logo, index) => (
              <div
                key={index}
                className="text-foreground/60 font-light tracking-wide text-sm uppercase"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="text-center md:text-right">
            <div className="font-light text-2xl md:text-3xl text-foreground tracking-tight">
              {data.metric.value}
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mt-1">
              {data.metric.description}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// Services Component
const MinimalistServices: React.FC<{ data: MinimalistLandingPageData['services'] }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn as="header" className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-2 text-foreground/70 max-w-2xl leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((service, i) => (
            <FadeIn key={service.title} delay={i * 50}>
              <Card className="rounded-lg border bg-card p-5 hover:bg-accent/20 transition-colors">
                <h3 className="font-light text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {service.outcomeDescription}
                </p>
                <div className="mt-4 pt-3 border-t border-border/50">
                  <a
                    href={service.workLink}
                    className="link-underline text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground/80"
                  >
                    See work
                  </a>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Case Study Component
const MinimalistCaseStudy: React.FC<{ data: MinimalistLandingPageData['caseStudy'] }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="font-light text-4xl md:text-5xl text-foreground tracking-tight mb-2">
              {data.metric}
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
              {data.metricDescription}
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={100}>
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-background">
            <blockquote className="font-light text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-center">
              &ldquo;{data.clientQuote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between border-t border-border/50 pt-6">
              <div>
                <cite className="font-light text-foreground not-italic">
                  {data.clientName}
                </cite>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mt-1">
                  {data.clientTitle}
                </p>
              </div>
              <a 
                href={data.caseStudyLink}
                className="link-underline text-xs uppercase tracking-[0.2em] text-foreground/60"
              >
                Full case study
              </a>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

// How We Work Component
const MinimalistHowWeWork: React.FC<{ data: MinimalistLandingPageData['howWeWork'] }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn as="header" className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-2 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {data.steps.map((step, i) => (
            <FadeIn key={step.stepNumber} delay={i * 100}>
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-12 h-12 border border-foreground/20 text-foreground/60 rounded-full flex items-center justify-center text-sm font-light mx-auto">
                    {step.stepNumber}
                  </div>
                  {i < data.steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border -translate-x-6" />
                  )}
                </div>
                <h3 className="font-light text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Component
const MinimalistTestimonials: React.FC<{ data: MinimalistLandingPageData['testimonials'] }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn as="header" className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-2 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.items.map((testimonial, i) => (
            <FadeIn key={i} delay={i * 100}>
              <Card className="p-6 h-full bg-background">
                {testimonial.rating && (
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-foreground/40 text-foreground/40" />
                    ))}
                  </div>
                )}
                <blockquote className="text-foreground/80 mb-6 leading-relaxed font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                  {testimonial.clientImage && (
                    <Image
                      src={testimonial.clientImage}
                      alt={testimonial.clientName}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <cite className="font-light text-foreground not-italic text-sm">
                      {testimonial.clientName}
                    </cite>
                    <p className="text-xs text-foreground/50 uppercase tracking-[0.2em]">
                      {testimonial.clientTitle}, {testimonial.clientCompany}
                    </p>
                  </div>
                  {testimonial.videoUrl && (
                    <a 
                      href={testimonial.videoUrl}
                      className="text-foreground/40 hover:text-foreground/60 transition-colors"
                    >
                      <Play className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Component
const MinimalistPricing: React.FC<{ data: MinimalistLandingPageData['pricing'] }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn as="header" className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-2 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </FadeIn>

        {data.showTransparentPricing && data.packages ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {data.packages.map((pkg, i) => (
              <FadeIn key={pkg.name} delay={i * 100}>
                <Card className="p-6 text-center relative hover:bg-accent/20 transition-colors">
                  <h3 className="font-light text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="font-light text-xl text-foreground mb-4 tracking-tight">
                    {pkg.priceRange}
                  </div>
                  <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  <ul className="space-y-2 mb-8 text-left">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start text-xs text-foreground/70">
                        <div className="w-1 h-1 bg-foreground/40 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={pkg.ctaLink}
                    className="link-underline text-xs uppercase tracking-[0.2em] text-foreground/60"
                  >
                    {pkg.ctaText}
                  </a>
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : null}

        {data.customOption && (
          <FadeIn>
            <Card className="max-w-2xl mx-auto p-8 text-center bg-accent">
              <h3 className="font-light text-xl text-foreground mb-4">
                {data.customOption.title}
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {data.customOption.description}
              </p>
              <a 
                href={data.customOption.ctaLink}
                className="link-underline text-sm"
              >
                {data.customOption.ctaText}
              </a>
            </Card>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

// Lead Capture Component
const MinimalistLeadCapture: React.FC<{ data: MinimalistLandingPageData['leadCapture'] }> = ({ data }) => {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <FadeIn as="header" className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-2 text-foreground/70 leading-relaxed">
              {data.subtitle}
            </p>
          )}
          {data.nextAvailability && (
            <div className="mt-4 inline-flex items-center text-xs uppercase tracking-[0.2em] text-foreground/50">
              <Clock className="h-3 w-3 mr-2" />
              Next availability: {data.nextAvailability}
            </div>
          )}
        </FadeIn>

        <FadeIn delay={200}>
          {data.formType === 'calendar' && data.calendarEmbedUrl ? (
            <div className="bg-background rounded border shadow-sm p-2">
              <iframe
                src={data.calendarEmbedUrl}
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded"
              />
            </div>
          ) : (
            <Card className="p-8 bg-background">
              <form className="space-y-6">
                {data.formFields?.map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">
                      {field.label}
                      {field.required && <span className="text-destructive ml-1">*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <Textarea
                        name={field.name}
                        required={field.required}
                        className="min-h-[100px] border-border/50 focus:border-foreground/20"
                      />
                    ) : (
                      <Input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="border-border/50 focus:border-foreground/20"
                      />
                    )}
                  </div>
                ))}
                <div className="text-center pt-4">
                  <button 
                    type="submit"
                    className="link-underline text-sm"
                  >
                    {data.submitText || "Get started"}
                  </button>
                </div>
              </form>
            </Card>
          )}
        </FadeIn>
      </div>
    </section>
  )
}

// Footer Component
const MinimalistFooter: React.FC<{ data: MinimalistLandingPageData['footer'] }> = ({ data }) => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-light tracking-tight text-foreground mb-2">
              {data.tagline || `Let's work together.`}
            </h3>
            <div className="space-y-1 text-sm text-foreground/70">
              {data.contactInfo.email && (
                <p>
                  Email us at{" "}
                  <a href={`mailto:${data.contactInfo.email}`} className="link-underline">
                    {data.contactInfo.email}
                  </a>
                </p>
              )}
              {data.contactInfo.phone && (
                <p>
                  Call us at{" "}
                  <a href={`tel:${data.contactInfo.phone}`} className="link-underline">
                    {data.contactInfo.phone}
                  </a>
                </p>
              )}
              {data.contactInfo.address && (
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-3 w-3 mt-1 flex-shrink-0 text-foreground/50" />
                  <span>{data.contactInfo.address}</span>
                </div>
              )}
            </div>
          </div>
          
          <nav aria-label="Footer">
            <ul className="flex items-center gap-6 text-sm">
              {data.sitemapLinks.map((link) => (
                <li key={link.href}>
                  <a className="link-underline text-foreground/70" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-border/50">
          <p className="text-xs text-foreground/60">
            © {new Date().getFullYear()} {data.companyName}
          </p>
          {data.socialLinks && data.socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {data.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="text-xs text-foreground/50 hover:text-foreground/70 transition-colors link-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

// Main Template Component
export default function MinimalistLandingPageTemplate({ data, className }: MinimalistLandingPageTemplateProps) {
  return (
    <div className={cn(
      lato.variable, 
      GeistMono.variable, 
      "minimalist-landing-template font-sans antialiased",
      className
    )}>
      <style jsx global>{`
        .minimalist-landing-template {
          /* Minimalist Landing Template Custom CSS Variables */
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
          --radius: 0.625rem; /* subtle border radius */

          /* Font variables */
          --font-sans: var(--font-lato);
          --font-mono: var(--font-geist-mono);
          
          /* Base styles */
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        /* Ensure all elements within the template use the custom variables */
        .minimalist-landing-template * {
          border-color: hsl(var(--border));
        }

        .minimalist-landing-template *:focus-visible {
          outline: 2px solid hsl(var(--ring));
          outline-offset: 2px;
        }

        /* Custom link underline animation from the original template */
        .minimalist-landing-template a.link-underline {
          position: relative;
          text-decoration: none;
        }

        .minimalist-landing-template a.link-underline::after {
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

        .minimalist-landing-template a.link-underline:hover::after,
        .minimalist-landing-template a.link-underline:focus-visible::after {
          transform: scaleX(1);
        }
      `}</style>
      
      <MinimalistHeader data={data.header} />
      <main>
        <FadeIn as="section">
          <MinimalistHero data={data.hero} />
        </FadeIn>
        
        <FadeIn as="section" delay={50}>
          <MinimalistCredibilityStrip data={data.credibility} />
        </FadeIn>
        
        <FadeIn as="section" delay={100}>
          <MinimalistServices data={data.services} />
        </FadeIn>
        
        <FadeIn as="section" delay={150}>
          <MinimalistCaseStudy data={data.caseStudy} />
        </FadeIn>
        
        <FadeIn as="section" delay={200}>
          <MinimalistHowWeWork data={data.howWeWork} />
        </FadeIn>
        
        <FadeIn as="section" delay={250}>
          <MinimalistTestimonials data={data.testimonials} />
        </FadeIn>
        
        <FadeIn as="section" delay={300}>
          <MinimalistPricing data={data.pricing} />
        </FadeIn>
        
        <FadeIn as="section" delay={350}>
          <MinimalistLeadCapture data={data.leadCapture} />
        </FadeIn>
      </main>
      
      <MinimalistFooter data={data.footer} />
    </div>
  )
}