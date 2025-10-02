"use client"

import React from "react"
import { Bodoni_Moda, Work_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  ChevronRight, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  MapPin, 
  Phone, 
  Mail,
  Sparkles
} from "lucide-react"

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

// Types for the dynamic elegant landing page
export interface ElegantLandingPageData {
  // Header/Navigation
  header: {
    logo: string
    contactCta: string
    contactLink: string
    breadcrumbs?: Array<{ label: string; href: string }>
    logoImage?: string
  }
  
  // Hero Section
  hero: {
    badge?: string
    targetKeyword: string
    headline: string
    subheading: string
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
    backgroundImage?: string
    overlayOpacity?: number
  }
  
  // Credibility Strip
  credibility: {
    clientLogos: Array<{ name: string; image?: string }>
    metric: {
      value: string
      description: string
      icon?: React.ReactNode
    }
    featuredInText?: string
  }
  
  // Services Section
  services: {
    title: string
    subtitle?: string
    items: Array<{
      title: string
      outcomeDescription: string
      workLink: string
      icon?: React.ReactNode
      image?: string
      price?: string
    }>
  }
  
  // Featured Case Study
  caseStudy: {
    metric: string
    metricDescription: string
    clientQuote: string
    clientName: string
    clientTitle: string
    clientCompany?: string
    caseStudyLink: string
    clientImage?: string
    backgroundImage?: string
  }
  
  // How We Work Section
  howWeWork: {
    title: string
    subtitle?: string
    steps: Array<{
      stepNumber: number
      title: string
      description: string
      icon?: React.ReactNode
      image?: string
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
      popular?: boolean
      icon?: React.ReactNode
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
      placeholder?: string
    }>
    calendarEmbedUrl?: string
    submitText?: string
    backgroundImage?: string
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
      icon?: React.ReactNode
    }>
    logoImage?: string
  }
}

interface ElegantLandingPageTemplateProps {
  data: ElegantLandingPageData
  className?: string
}

// Header Component
const ElegantHeader: React.FC<{ data: ElegantLandingPageData['header'] }> = ({ data }) => {
  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-3 px-4 md:px-8 py-4">
        <div className="flex items-center gap-3">
          {data.logoImage ? (
            <Image
              src={data.logoImage}
              alt={data.logo}
              width={32}
              height={32}
              className="rounded-md"
            />
          ) : (
            <div className="h-8 w-8 rounded-md bg-accent flex items-center justify-center">
              <span className="font-serif text-accent-foreground font-semibold text-sm">
                {data.logo.charAt(0)}
              </span>
            </div>
          )}
          <span className="font-serif text-xl font-semibold">{data.logo}</span>
        </div>

        <div className="flex items-center gap-4">
          {data.breadcrumbs && data.breadcrumbs.length > 0 && (
            <div className="hidden md:flex items-center text-sm text-muted-foreground">
              {data.breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                  <a 
                    href={crumb.href} 
                    className="hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
                  >
                    {crumb.label}
                  </a>
                </React.Fragment>
              ))}
            </div>
          )}
          
          <Button 
            size="sm" 
            className="bg-accent text-accent-foreground hover:brightness-95"
            asChild
          >
            <a href={data.contactLink}>
              {data.contactCta}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

// Hero Component
const ElegantHero: React.FC<{ data: ElegantLandingPageData['hero'] }> = ({ data }) => {
  const overlayOpacity = data.overlayOpacity ?? 0.5

  return (
    <section className="relative isolate">
      {data.backgroundImage && (
        <>
          <div
            className="absolute inset-0 -z-10 bg-center bg-cover"
            style={{ backgroundImage: `url('${data.backgroundImage}')` }}
            aria-hidden="true"
          />
          <div 
            className="absolute inset-0 -z-0 bg-black"
            style={{ opacity: overlayOpacity }}
            aria-hidden="true" 
          />
        </>
      )}
      
      <div className="container mx-auto px-4">
        <div className="flex min-h-[72vh] md:min-h-[80vh] items-center justify-center text-center">
          <div className="max-w-4xl">
            {data.badge && (
              <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
                {data.badge}
              </Badge>
            )}
            <h1 className="text-balance text-4xl md:text-6xl font-serif font-semibold leading-tight">
              {data.headline}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {data.subheading}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:brightness-95"
                asChild
              >
                <a href={data.primaryCtaLink || "#contact"}>
                  {data.primaryCtaText || "Get a free strategy call"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              {data.secondaryCtaText && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/10 bg-transparent"
                  asChild
                >
                  <a href={data.secondaryCtaLink || "#services"}>
                    {data.secondaryCtaText}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Credibility Strip Component
const ElegantCredibilityStrip: React.FC<{ data: ElegantLandingPageData['credibility'] }> = ({ data }) => {
  return (
    <section className="border-t py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            {data.featuredInText || "Trusted by industry leaders"}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80 flex-1">
            {data.clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                {logo.image ? (
                  <Image
                    src={logo.image}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={40}
                    className="h-6 md:h-7 w-auto contrast-0 brightness-150 opacity-70"
                  />
                ) : (
                  <div className="font-serif text-muted-foreground text-lg font-medium">
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center lg:text-right lg:min-w-[200px]">
            <div className="flex items-center gap-2 justify-center lg:justify-end mb-2">
              {data.metric.icon && (
                <span className="text-accent">
                  {data.metric.icon}
                </span>
              )}
              <div className="font-serif text-3xl md:text-4xl font-semibold">
                {data.metric.value}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {data.metric.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Component
const ElegantServices: React.FC<{ data: ElegantLandingPageData['services'] }> = ({ data }) => {
  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl md:text-4xl font-serif font-semibold tracking-tight mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {service.image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                {service.icon && (
                  <div className="text-accent mb-4">
                    {service.icon}
                  </div>
                )}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl font-semibold">
                    {service.title}
                  </h3>
                  {service.price && (
                    <Badge variant="secondary" className="ml-2">
                      {service.price}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.outcomeDescription}
                </p>
                <a
                  href={service.workLink}
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  See work
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Case Study Component
const ElegantCaseStudy: React.FC<{ data: ElegantLandingPageData['caseStudy'] }> = ({ data }) => {
  return (
    <section className="py-14 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden">
          {data.backgroundImage && (
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={data.backgroundImage}
                alt="Case study"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="font-serif text-4xl md:text-5xl font-semibold mb-2">
                {data.metric}
              </div>
              <p className="text-muted-foreground text-lg">
                {data.metricDescription}
              </p>
            </div>
            
            <blockquote className="text-center mb-8">
              <p className="font-serif text-xl md:text-2xl leading-relaxed mb-6">
                &ldquo;{data.clientQuote}&rdquo;
              </p>
              
              <footer className="flex items-center justify-center gap-4">
                {data.clientImage && (
                  <Image
                    src={data.clientImage}
                    alt={data.clientName}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                )}
                <div className="text-left">
                  <cite className="font-semibold not-italic">
                    {data.clientName}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {data.clientTitle}
                    {data.clientCompany && `, ${data.clientCompany}`}
                  </p>
                </div>
              </footer>
            </blockquote>
            
            <div className="text-center">
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent/10"
                asChild
              >
                <a href={data.caseStudyLink}>
                  Read full case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

// How We Work Component
const ElegantHowWeWork: React.FC<{ data: ElegantLandingPageData['howWeWork'] }> = ({ data }) => {
  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl md:text-4xl font-serif font-semibold mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {data.steps.map((step, index) => (
            <div key={step.stepNumber} className="text-center relative">
              <div className="relative mb-6">
                {step.image ? (
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-serif font-semibold mx-auto shadow-lg">
                    {step.icon || step.stepNumber}
                  </div>
                )}
                {index < data.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8" />
                )}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Component
const ElegantTestimonials: React.FC<{ data: ElegantLandingPageData['testimonials'] }> = ({ data }) => {
  return (
    <section className="py-14 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl md:text-4xl font-serif font-semibold mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.items.map((testimonial, index) => (
            <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              {testimonial.rating && (
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              )}
              
              <blockquote className="mb-6">
                <p className="font-serif text-lg leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              
              <footer className="flex items-center gap-3">
                {testimonial.clientImage && (
                  <Image
                    src={testimonial.clientImage}
                    alt={testimonial.clientName}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                )}
                <div className="flex-1">
                  <cite className="font-semibold not-italic text-sm">
                    {testimonial.clientName}
                  </cite>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.clientTitle}, {testimonial.clientCompany}
                  </p>
                </div>
                {testimonial.videoUrl && (
                  <a 
                    href={testimonial.videoUrl}
                    className="text-accent hover:text-accent/80 transition-colors p-2 rounded-full hover:bg-accent/10"
                    title="Watch video testimonial"
                  >
                    <Play className="h-5 w-5" />
                  </a>
                )}
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Component
const ElegantPricing: React.FC<{ data: ElegantLandingPageData['pricing'] }> = ({ data }) => {
  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl md:text-4xl font-serif font-semibold mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>

        {data.showTransparentPricing && data.packages ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {data.packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={cn(
                  "p-8 text-center relative hover:shadow-lg transition-all duration-300",
                  pkg.popular && "ring-2 ring-accent shadow-lg scale-105"
                )}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                {pkg.icon && (
                  <div className="text-accent mb-4 flex justify-center">
                    {pkg.icon}
                  </div>
                )}
                
                <h3 className="font-serif text-2xl font-semibold mb-2">
                  {pkg.name}
                </h3>
                <div className="font-serif text-3xl font-semibold mb-4">
                  {pkg.priceRange}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={cn(
                    "w-full",
                    pkg.popular 
                      ? "bg-accent text-accent-foreground hover:brightness-95" 
                      : "border-accent text-accent hover:bg-accent/10"
                  )}
                  variant={pkg.popular ? "default" : "outline"}
                  asChild
                >
                  <a href={pkg.ctaLink}>
                    {pkg.ctaText}
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        ) : null}

        {data.customOption && (
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-semibold mb-4">
              {data.customOption.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {data.customOption.description}
            </p>
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:brightness-95"
              asChild
            >
              <a href={data.customOption.ctaLink}>
                {data.customOption.ctaText}
              </a>
            </Button>
          </Card>
        )}
      </div>
    </section>
  )
}

// Lead Capture Component
const ElegantLeadCapture: React.FC<{ data: ElegantLandingPageData['leadCapture'] }> = ({ data }) => {
  return (
    <section className="py-14 md:py-20 relative">
      {data.backgroundImage && (
        <>
          <div
            className="absolute inset-0 -z-10 bg-center bg-cover"
            style={{ backgroundImage: `url('${data.backgroundImage}')` }}
          />
          <div className="absolute inset-0 -z-0 bg-black/60" />
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-balance text-3xl md:text-4xl font-serif font-semibold mb-4">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-muted-foreground text-lg leading-relaxed">
                {data.subtitle}
              </p>
            )}
            {data.nextAvailability && (
              <div className="mt-4 inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 text-sm text-accent">
                <Clock className="h-4 w-4" />
                Next availability: {data.nextAvailability}
              </div>
            )}
          </div>

          {data.formType === 'calendar' && data.calendarEmbedUrl ? (
            <Card className="p-6">
              <iframe
                src={data.calendarEmbedUrl}
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-lg"
              />
            </Card>
          ) : (
            <Card className="p-8 md:p-12">
              <form className="space-y-6">
                {data.formFields?.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium mb-2">
                      {field.label}
                      {field.required && <span className="text-destructive ml-1">*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <Textarea
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="min-h-[120px]"
                      />
                    ) : (
                      <Input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
                <div className="text-center pt-4">
                  <Button 
                    size="lg"
                    className="w-full md:w-auto bg-accent text-accent-foreground hover:brightness-95"
                  >
                    {data.submitText || "Get started"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

// Footer Component
const ElegantFooter: React.FC<{ data: ElegantLandingPageData['footer'] }> = ({ data }) => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {data.logoImage ? (
                <Image
                  src={data.logoImage}
                  alt={data.companyName}
                  width={32}
                  height={32}
                  className="rounded-md"
                />
              ) : (
                <div className="h-8 w-8 rounded-md bg-accent flex items-center justify-center">
                  <span className="font-serif text-accent-foreground font-semibold text-sm">
                    {data.companyName.charAt(0)}
                  </span>
                </div>
              )}
              <h3 className="font-serif text-xl font-semibold">
                {data.companyName}
              </h3>
            </div>
            {data.tagline && (
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {data.tagline}
              </p>
            )}
            <div className="space-y-2 text-sm text-muted-foreground">
              {data.contactInfo.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                  <span>{data.contactInfo.address}</span>
                </div>
              )}
              {data.contactInfo.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                  <a href={`tel:${data.contactInfo.phone}`} className="hover:text-foreground transition-colors">
                    {data.contactInfo.phone}
                  </a>
                </div>
              )}
              {data.contactInfo.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                  <a href={`mailto:${data.contactInfo.email}`} className="hover:text-foreground transition-colors">
                    {data.contactInfo.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Sitemap Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {data.sitemapLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                {data.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.platform}
                  >
                    {social.icon || (
                      <span className="text-xs font-medium">
                        {social.platform.charAt(0)}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {data.companyName}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with elegance and precision
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Template Component
export default function ElegantLandingPageTemplate({ data, className }: ElegantLandingPageTemplateProps) {
  // CSS variables for elegant e-commerce theme
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
      className={cn(
        workSans.variable, 
        bodoni.variable, 
        GeistMono.variable, 
        "elegant-landing-template antialiased",
        className
      )}
      style={elegantStyles}
    >
      <ElegantHeader data={data.header} />
      <main className="min-h-screen">
        <ElegantHero data={data.hero} />
        <ElegantCredibilityStrip data={data.credibility} />
        <ElegantServices data={data.services} />
        <ElegantCaseStudy data={data.caseStudy} />
        <ElegantHowWeWork data={data.howWeWork} />
        <ElegantTestimonials data={data.testimonials} />
        <ElegantPricing data={data.pricing} />
        <ElegantLeadCapture data={data.leadCapture} />
      </main>
      <ElegantFooter data={data.footer} />
    </div>
  )
}
