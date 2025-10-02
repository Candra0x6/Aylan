"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { 
  ArrowRight, 
  Star, 
  Play, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  Quote,
  CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Type definitions for the minimalist template
interface MinimalistBreadcrumb {
  label: string
  href: string
}

interface MinimalistNavigationItem {
  label: string
  href: string
}

interface MinimalistContactCta {
  label: string
  href: string
}

interface MinimalistHeaderData {
  logo: string
  navigation: MinimalistNavigationItem[]
  breadcrumbs?: MinimalistBreadcrumb[]
  contactCta: MinimalistContactCta
}

interface MinimalistCta {
  label: string
  href: string
}

interface MinimalistHeroData {
  badge?: string
  headline: string
  targetKeyword: string
  subheadline: string
  primaryCta: MinimalistCta
  secondaryCta?: MinimalistCta
}

interface MinimalistClientLogo {
  src: string
  alt: string
}

interface MinimalistCredibilityData {
  metric: string
  clientLogos: MinimalistClientLogo[]
}

interface MinimalistServiceItem {
  title: string
  outcome: string
  icon: React.ComponentType<{ className?: string }>
  link: string
}

interface MinimalistServicesData {
  title: string
  subtitle: string
  services: MinimalistServiceItem[]
}

interface MinimalistCaseStudyData {
  title: string
  metric: string
  metricDescription: string
  clientQuote: string
  clientName: string
  clientTitle: string
  caseStudyLink: string
  image: string
  imageAlt: string
}

interface MinimalistWorkStep {
  title: string
  description: string
  visual?: React.ComponentType<{ className?: string }>
}

interface MinimalistHowWeWorkData {
  title: string
  subtitle: string
  steps: MinimalistWorkStep[]
}

interface MinimalistTestimonialItem {
  quote: string
  name: string
  title: string
  company?: string
  photo?: string
  logo?: string
  rating: number
}

interface MinimalistVideoTestimonial {
  thumbnail: string
  videoUrl: string
}

interface MinimalistTestimonialsData {
  title: string
  subtitle: string
  testimonials: MinimalistTestimonialItem[]
  videoTestimonial?: MinimalistVideoTestimonial
}

interface MinimalistPricingPackage {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  ctaText: string
  ctaLink: string
  featured?: boolean
}

interface MinimalistCustomOption {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

interface MinimalistPricingData {
  title: string
  subtitle: string
  packages: MinimalistPricingPackage[]
  customOption?: MinimalistCustomOption
}

interface MinimalistLeadCaptureData {
  title: string
  subtitle: string
  formTitle: string
  formCta: string
  nextAvailability: string
  calendarLink: string
  email: string
  phone: string
  address?: string
}

interface MinimalistFooterLink {
  label: string
  href: string
}

interface MinimalistFooterSection {
  title: string
  items: MinimalistFooterLink[]
}

interface MinimalistFooterData {
  logo: string
  description: string
  email: string
  phone: string
  address?: string
  links: MinimalistFooterSection[]
  privacy: MinimalistFooterLink
  terms: MinimalistFooterLink
  copyright: string
}

interface MinimalistLandingPageData {
  header: MinimalistHeaderData
  hero: MinimalistHeroData
  credibility: MinimalistCredibilityData
  services: MinimalistServicesData
  caseStudy: MinimalistCaseStudyData
  howWeWork: MinimalistHowWeWorkData
  testimonials: MinimalistTestimonialsData
  pricing: MinimalistPricingData
  leadCapture: MinimalistLeadCaptureData
  footer: MinimalistFooterData
}

interface MinimalistLandingPageTemplateProps {
  data: MinimalistLandingPageData
}

export default function MinimalistLandingPageTemplate({ data }: MinimalistLandingPageTemplateProps) {
  const minimalistStyles = {
    // Light theme variables matching minimalist design
    '--background': 'oklch(1 0 0)',
    '--foreground': 'oklch(0.145 0 0)',
    '--card': 'oklch(1 0 0)',
    '--card-foreground': 'oklch(0.145 0 0)',
    '--popover': 'oklch(1 0 0)',
    '--popover-foreground': 'oklch(0.145 0 0)',
    '--primary': 'oklch(0.72 0.09 200)', // muted teal
    '--primary-foreground': 'oklch(0.985 0 0)',
    '--secondary': 'oklch(0.97 0 0)',
    '--secondary-foreground': 'oklch(0.205 0 0)',
    '--muted': 'oklch(0.97 0 0)',
    '--muted-foreground': 'oklch(0.556 0 0)',
    '--accent': 'oklch(0.97 0.02 200)', // very light teal-tinted gray
    '--accent-foreground': 'oklch(0.205 0 0)',
    '--destructive': 'oklch(0.577 0.245 27.325)',
    '--destructive-foreground': 'oklch(0.577 0.245 27.325)',
    '--border': 'oklch(0.922 0 0)',
    '--input': 'oklch(0.922 0 0)',
    '--ring': 'oklch(0.708 0 0)',
    '--radius': '0.625rem',
    
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
      className={cn("font-sans antialiased", inter.variable, GeistMono.variable)}
      style={minimalistStyles}
    >
      {/* Header */}
      <MinimalistHeader data={data.header} />

      {/* Hero Section */}
      <MinimalistHero data={data.hero} />

      {/* Credibility Strip */}
      <MinimalistCredibility data={data.credibility} />

      {/* Services Section */}
      <MinimalistServices data={data.services} />

      {/* Case Study Section */}
      <MinimalistCaseStudy data={data.caseStudy} />

      {/* How We Work Section */}
      <MinimalistHowWeWork data={data.howWeWork} />

      {/* Testimonials Section */}
      <MinimalistTestimonials data={data.testimonials} />

      {/* Pricing Section */}
      <MinimalistPricing data={data.pricing} />

      {/* Lead Capture Section */}
      <MinimalistLeadCapture data={data.leadCapture} />

      {/* Footer */}
      <MinimalistFooter data={data.footer} />
    </div>
  )
}

// Header Component
function MinimalistHeader({ data }: { data: MinimalistHeaderData }) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-6 rounded-md bg-primary" aria-hidden />
              <span className="font-semibold tracking-tight">
                {data.logo}
              </span>
            </Link>
            
            {/* Breadcrumbs */}
            {data.breadcrumbs && (
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                {data.breadcrumbs.map((crumb: MinimalistBreadcrumb, index: number) => (
                  <React.Fragment key={index}>
                    <Link 
                      href={crumb.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {crumb.label}
                    </Link>
                    {index < (data.breadcrumbs?.length || 0) - 1 && (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {data.navigation.map((item: MinimalistNavigationItem) => (
              <Link 
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button asChild>
            <Link href={data.contactCta.href}>
              {data.contactCta.label}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

// Hero Component
function MinimalistHero({ data }: { data: MinimalistHeroData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-7">
            {data.badge && (
              <Badge variant="secondary" className="mb-6 rounded-full">
                {data.badge}
              </Badge>
            )}
            
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              {data.headline.split(' ').map((word: string, index: number) => (
                <span 
                  key={index}
                  className={word === data.targetKeyword ? 'text-primary' : ''}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="mt-5 max-w-prose text-pretty text-muted-foreground">
              {data.subheadline}
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="px-6" asChild>
                <Link href={data.primaryCta.href}>
                  {data.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              {data.secondaryCta && (
                <Button size="lg" variant="outline" className="px-6 bg-transparent" asChild>
                  <Link href={data.secondaryCta.href}>
                    <Play className="mr-2 h-4 w-4" />
                    {data.secondaryCta.label}
                  </Link>
                </Button>
              )}
            </div>
          </div>
          
          {/* Minimalist visual */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 rounded-lg bg-accent" />
                <div className="h-24 rounded-lg bg-accent" />
                <div className="h-24 rounded-lg bg-accent" />
                <div className="col-span-3 h-36 rounded-lg bg-secondary" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="h-20 rounded-lg bg-accent" />
                <div className="h-20 rounded-lg bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Credibility Component
function MinimalistCredibility({ data }: { data: MinimalistCredibilityData }) {
  return (
    <section className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-8">
          <p className="text-2xl font-semibold text-primary mb-2">
            {data.metric}
          </p>
          <p className="text-sm text-muted-foreground">Trusted by leading companies</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {data.clientLogos.map((logo: MinimalistClientLogo, index: number) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Component
function MinimalistServices({ data }: { data: MinimalistServicesData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              {data.title}
            </h2>
          </div>
          <p className="md:col-span-4 text-muted-foreground">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service: MinimalistServiceItem, index: number) => (
            <Card key={index} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-3 inline-flex size-9 items-center justify-center rounded-md bg-accent">
                  {React.createElement(service.icon, { 
                    className: "size-5 text-foreground"
                  })}
                </div>
                <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground mb-4">
                {service.outcome}
              </CardContent>
              <CardFooter>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  See work
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Case Study Component
function MinimalistCaseStudy({ data }: { data: MinimalistCaseStudyData }) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-6">
              {data.title}
            </h2>
            
            <div className="mb-8">
              <div className="text-4xl font-bold text-primary mb-2">
                {data.metric}
              </div>
              <p className="text-muted-foreground">{data.metricDescription}</p>
            </div>
            
            <blockquote className="border-l-4 border-primary pl-6 mb-8">
              <Quote className="h-6 w-6 text-primary mb-2" />
              <p className="text-lg text-muted-foreground mb-4">
                &quot;{data.clientQuote}&quot;
              </p>
              <footer className="text-sm font-semibold">
                — {data.clientName}, {data.clientTitle}
              </footer>
            </blockquote>
            
            <Button variant="outline" asChild>
              <Link href={data.caseStudyLink}>
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <Image
                src={data.image}
                alt={data.imageAlt}
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// How We Work Component
function MinimalistHowWeWork({ data }: { data: MinimalistHowWeWorkData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {data.steps.map((step: MinimalistWorkStep, index: number) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < data.steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-border transform translate-x-4" />
              )}
              
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                {step.visual && (
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                    {React.createElement(step.visual, { className: "h-6 w-6 text-foreground" })}
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Component
function MinimalistTestimonials({ data }: { data: MinimalistTestimonialsData }) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.testimonials.map((testimonial: MinimalistTestimonialItem, index: number) => (
            <Card key={index} className="transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="mb-6">
                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>
                
                <div className="flex items-center gap-4">
                  {testimonial.photo && (
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                    {testimonial.company && (
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    )}
                  </div>
                </div>
                
                {testimonial.logo && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      width={80}
                      height={32}
                      className="h-6 w-auto object-contain opacity-60"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {data.videoTestimonial && (
          <div className="mt-16 text-center">
            <Card className="inline-block overflow-hidden">
              <CardContent className="p-0 relative">
                <Image
                  src={data.videoTestimonial.thumbnail}
                  alt="Video testimonial"
                  width={600}
                  height={338}
                  className="w-full"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

// Pricing Component
function MinimalistPricing({ data }: { data: MinimalistPricingData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {data.title}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {data.packages.map((pkg: MinimalistPricingPackage, index: number) => (
            <Card key={index} className={`transition-shadow hover:shadow-md ${pkg.featured ? "border-primary" : ""}`}>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span className="text-lg">{pkg.name}</span>
                  <span className="text-2xl font-semibold">
                    {pkg.price}
                    <span className="text-sm font-normal text-muted-foreground">{pkg.period}</span>
                  </span>
                </CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="mt-2 space-y-2">
                  {pkg.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 aria-hidden className="mt-0.5 size-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href={pkg.ctaLink}>
                    {pkg.ctaText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {data.customOption && (
          <div className="mt-12 text-center">
            <Card className="inline-block border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">{data.customOption.title}</h3>
                <p className="text-muted-foreground mb-6">{data.customOption.description}</p>
                <Button variant="outline" asChild>
                  <Link href={data.customOption.ctaLink}>
                    {data.customOption.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

// Lead Capture Component
function MinimalistLeadCapture({ data }: { data: MinimalistLeadCaptureData }) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl">{data.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input 
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName"
                      name="lastName"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  {data.formCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Calendar/Availability */}
          <div>
            <Card className="border-border mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Next Availability</h4>
                    <p className="text-sm text-muted-foreground">{data.nextAvailability}</p>
                  </div>
                </div>
                
                <Button className="w-full" asChild>
                  <Link href={data.calendarLink}>
                    Book a Call
                    <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">{data.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">{data.phone}</span>
              </div>
              {data.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">{data.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function MinimalistFooter({ data }: { data: MinimalistFooterData }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="size-6 rounded-md bg-primary" aria-hidden />
              <span className="font-semibold tracking-tight">
                {data.logo}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              {data.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{data.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{data.phone}</span>
              </div>
              {data.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm text-muted-foreground">{data.address}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Navigation Links */}
          {data.links.map((section: MinimalistFooterSection, index: number) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item: MinimalistFooterLink) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {data.copyright}
          </p>
          
          <div className="flex gap-6">
            <Link 
              href={data.privacy.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {data.privacy.label}
            </Link>
            <Link 
              href={data.terms.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {data.terms.label}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}