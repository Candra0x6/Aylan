"use client"

import React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, ChevronRight, Clock, CheckCircle, ArrowRight, Quote, Play, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import Reveal from "./reveal"
import { LandingPageData } from "./types"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

// Types for the dynamic landing page


interface DynamicLandingPageTemplateProps {
  data: LandingPageData
  className?: string
}

// Header Component
const DynamicHeader: React.FC<{ data: LandingPageData['header'] }> = ({ data }) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="font-serif text-xl text-foreground">{data.logo}</h1>
            {data.breadcrumbs && data.breadcrumbs.length > 0 && (
              <nav className="hidden md:flex items-center text-sm text-muted-foreground">
                {data.breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.href}>
                    {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                    <a href={crumb.href} className="hover:text-foreground transition-colors">
                      {crumb.label}
                    </a>
                  </React.Fragment>
                ))}
              </nav>
            )}
          </div>
          <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
            <a href={data.contactLink}>{data.contactCta}</a>
          </Button>
        </div>
      </div>
    </header>
  )
}

// Hero Component
const DynamicHero: React.FC<{ data: LandingPageData['hero'] }> = ({ data }) => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[78vh] overflow-hidden bg-primary">
      {/* Background Image */}
      {data.backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${data.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32 flex flex-col items-start">
        {data.badgeText && (
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            {data.badgeText}
          </Badge>
        )}
        <h1 className="mt-6 font-serif text-balance text-4xl md:text-6xl leading-tight text-primary-foreground">
          {data.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-primary-foreground/90 text-lg">
          {data.subheading}
        </p>
        <div className="mt-8">
          <Button 
            asChild 
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 text-base px-8 py-4"
          >
            <a href={data.primaryCtaLink || "#contact"}>
              {data.primaryCtaText || "Get a free strategy call"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Credibility Strip Component
const CredibilityStrip: React.FC<{ data: LandingPageData['credibility'] }> = ({ data }) => {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Reveal className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {data.clientLogos.map((logo, index) => (
              <div
                key={index}
                className="text-accent font-serif tracking-widest text-base md:text-lg opacity-80"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="text-center md:text-right">
            <div className="font-serif text-2xl md:text-3xl text-accent">
              {data.metric.value}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {data.metric.description}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Services Component
const DynamicServices: React.FC<{ data: LandingPageData['services'] }> = ({ data }) => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal as="header">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {data.subtitle}
            </p>
          )}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className="h-full">
              <Card className="h-full p-6 hover:shadow-sm transition-shadow">
                <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted-foreground">{service.outcomeDescription}</p>
                <Separator className="my-4" />
                <a
                  href={service.workLink}
                  className="inline-flex items-center text-sm text-foreground underline underline-offset-4 decoration-accent hover:opacity-80"
                >
                  See work
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Case Study Component
const FeaturedCaseStudy: React.FC<{ data: LandingPageData['caseStudy'] }> = ({ data }) => {
  return (
    <section className="relative bg-muted">
      {data.backgroundImage && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('${data.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-12">
            <div className="font-serif text-4xl md:text-5xl text-accent mb-2">
              {data.metric}
            </div>
            <p className="text-lg text-muted-foreground">
              {data.metricDescription}
            </p>
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            <Quote className="h-8 w-8 text-accent mb-6" />
            <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              &ldquo;{data.clientQuote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <cite className="font-medium text-foreground not-italic">
                  {data.clientName}
                </cite>
                <p className="text-sm text-muted-foreground">
                  {data.clientTitle}
                </p>
              </div>
              <Button asChild variant="outline">
                <a href={data.caseStudyLink}>
                  Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

// How We Work Component
const HowWeWork: React.FC<{ data: LandingPageData['howWeWork'] }> = ({ data }) => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal as="header" className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              {data.subtitle}
            </p>
          )}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.steps.map((step, i) => (
            <Reveal key={step.stepNumber} delay={i * 100}>
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.stepNumber}
                  </div>
                  {i < data.steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-8" />
                  )}
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Component
const DynamicTestimonials: React.FC<{ data: LandingPageData['testimonials'] }> = ({ data }) => {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal as="header" className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              {data.subtitle}
            </p>
          )}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.items.map((testimonial, i) => (
            <Reveal key={i} delay={i * 100}>
              <Card className="p-6 h-full">
                {testimonial.rating && (
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                )}
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  {testimonial.clientImage && (
                    <Image
                      src={testimonial.clientImage}
                      alt={testimonial.clientName}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <cite className="font-medium text-foreground not-italic text-sm">
                      {testimonial.clientName}
                    </cite>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.clientTitle}, {testimonial.clientCompany}
                    </p>
                  </div>
                  {testimonial.videoUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={testimonial.videoUrl}>
                        <Play className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Component
const DynamicPricing: React.FC<{ data: LandingPageData['pricing'] }> = ({ data }) => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal as="header" className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              {data.subtitle}
            </p>
          )}
        </Reveal>

        {data.showTransparentPricing && data.packages ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {data.packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 100}>
                <Card className="p-6 text-center relative">
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="font-serif text-2xl text-accent mb-4">
                    {pkg.priceRange}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {pkg.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <a href={pkg.ctaLink}>{pkg.ctaText}</a>
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        ) : null}

        {data.customOption && (
          <Reveal>
            <Card className="max-w-2xl mx-auto p-8 text-center">
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {data.customOption.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {data.customOption.description}
              </p>
              <Button asChild size="lg">
                <a href={data.customOption.ctaLink}>
                  {data.customOption.ctaText}
                </a>
              </Button>
            </Card>
          </Reveal>
        )}
      </div>
    </section>
  )
}

// Lead Capture Component
const LeadCapture: React.FC<{ data: LandingPageData['leadCapture'] }> = ({ data }) => {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Reveal as="header" className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-3 text-muted-foreground">
              {data.subtitle}
            </p>
          )}
          {data.nextAvailability && (
            <div className="mt-4 inline-flex items-center text-sm text-accent">
              <Clock className="h-4 w-4 mr-2" />
              Next Availability: {data.nextAvailability}
            </div>
          )}
        </Reveal>

        <Reveal delay={200}>
          {data.formType === 'calendar' && data.calendarEmbedUrl ? (
            <div className="bg-background rounded-lg p-2 shadow-sm">
              <iframe
                src={data.calendarEmbedUrl}
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded"
              />
            </div>
          ) : (
            <Card className="p-8">
              <form className="space-y-6">
                {data.formFields?.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {field.label}
                      {field.required && <span className="text-destructive ml-1">*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <Textarea
                        name={field.name}
                        required={field.required}
                        className="min-h-[100px]"
                      />
                    ) : (
                      <Input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
                <Button type="submit" size="lg" className="w-full">
                  {data.submitText || "Get Started"}
                </Button>
              </form>
            </Card>
          )}
        </Reveal>
      </div>
    </section>
  )
}

// Footer Component
const DynamicFooter: React.FC<{ data: LandingPageData['footer'] }> = ({ data }) => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl mb-4">{data.companyName}</h3>
            {data.contactInfo.address && (
              <div className="flex items-start gap-2 mb-2 text-sm opacity-90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{data.contactInfo.address}</span>
              </div>
            )}
            {data.contactInfo.phone && (
              <div className="flex items-center gap-2 mb-2 text-sm opacity-90">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${data.contactInfo.phone}`} className="hover:opacity-80">
                  {data.contactInfo.phone}
                </a>
              </div>
            )}
            {data.contactInfo.email && (
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${data.contactInfo.email}`} className="hover:opacity-80">
                  {data.contactInfo.email}
                </a>
              </div>
            )}
          </div>

          {/* Sitemap Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {data.sitemapLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          {data.socialLinks && data.socialLinks.length > 0 && (
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {data.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <p>© {new Date().getFullYear()} {data.companyName}. All rights reserved.</p>
          <p>Built with precision and care.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Template Component
export default function DynamicLandingPageTemplate({ data, className }: DynamicLandingPageTemplateProps) {
  return (
    <div className={cn(
      GeistSans.variable, 
      GeistMono.variable, 
      playfair.variable, 
      "dynamic-landing-template font-sans antialiased",
      className
    )}>
      <style jsx global>{`
        .dynamic-landing-template {
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
          --secondary: #eae6dd;
          --secondary-foreground: var(--brand-navy);
          --muted: #f1ede5;
          --muted-foreground: #5b616a;
          --accent: var(--brand-gold);
          --accent-foreground: var(--brand-navy);
          --destructive: #8a2b2b;
          --destructive-foreground: var(--brand-ivory);
          --border: #e7e2d8;
          --input: #e7e2d8;
          --ring: var(--brand-gold);
          --radius: 0.625rem;

          /* Font variables */
          --font-sans: var(--font-geist-sans);
          --font-mono: var(--font-geist-mono);
          --font-serif: var(--font-playfair);
          
          /* Base styles */
          background-color: var(--background);
          color: var(--foreground);
        }

        /* Ensure all elements within the template use the custom variables */
        .dynamic-landing-template * {
          border-color: var(--border);
        }

        .dynamic-landing-template *:focus-visible {
          outline: 2px solid var(--ring);
          outline-offset: 2px;
        }
      `}</style>
      
      <DynamicHeader data={data.header} />
      <main>
        <DynamicHero data={data.hero} />
        <CredibilityStrip data={data.credibility} />
        <DynamicServices data={data.services} />
        <FeaturedCaseStudy data={data.caseStudy} />
        <HowWeWork data={data.howWeWork} />
        <DynamicTestimonials data={data.testimonials} />
        <DynamicPricing data={data.pricing} />
        <LeadCapture data={data.leadCapture} />
      </main>
      <DynamicFooter data={data.footer} />
    </div>
  )
}