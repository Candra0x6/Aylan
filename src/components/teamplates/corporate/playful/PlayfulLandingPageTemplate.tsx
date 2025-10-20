"use client"

import React, { useState } from "react"
import { Nunito, Baloo_2 } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import Image from "next/image"
import { cn } from "@/lib/utils"

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
  Heart,
  Sparkles
} from "lucide-react"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })
const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo" })

// Animated Button Component
const PlayfulAnimatedButton: React.FC<{
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  bounceOnClick?: boolean
}> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  onClick, 
  href,
  bounceOnClick = true 
}) => {
  const [pulse, setPulse] = useState(false)

  const baseClasses = "rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md active:shadow press-bounce"
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-accent hover:text-foreground",
    secondary: "bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground", 
    accent: "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  }

  const handleClick = () => {
    if (bounceOnClick) {
      setPulse(true)
      setTimeout(() => setPulse(false), 450)
    }
    onClick?.()
  }

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    pulse && "hover-bounce",
    className
  )

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={handleClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {children}
    </button>
  )
}

// Types for the dynamic playful landing page
export interface PlayfulLandingPageData {
  // Header/Navigation
  header: {
    logo: string
    contactCta: string
    contactLink: string
    breadcrumbs?: Array<{ label: string; href: string }>
    mascotIcon?: React.ReactNode
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
    mascotImage?: string
    decorativeElements?: React.ReactNode[]
  }
  
  // Credibility Strip
  credibility: {
    clientLogos: string[]
    metric: {
      value: string
      description: string
      icon?: React.ReactNode
    }
    communityCount?: string
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
      color?: 'primary' | 'accent' | 'secondary'
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
    backgroundColor?: 'primary' | 'accent' | 'secondary'
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
      color?: 'primary' | 'accent' | 'secondary'
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
      emoji?: string
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
      color?: 'primary' | 'accent' | 'secondary'
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
    backgroundColor?: 'primary' | 'accent' | 'secondary'
    decorativeElements?: React.ReactNode[]
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
    mascotIcon?: React.ReactNode
  }
}

interface PlayfulLandingPageTemplateProps {
  data: PlayfulLandingPageData
  className?: string
}

// Header Component
const PlayfulHeader: React.FC<{ data: PlayfulLandingPageData['header'] }> = ({ data }) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-3 px-4 md:px-8 py-3">
        <div className="flex items-center gap-2">
          {data.mascotIcon && (
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-primary/40 text-foreground">
              {data.mascotIcon}
            </span>
          )}
          <span className="font-display text-lg">{data.logo}</span>
        </div>

        <div className="flex items-center gap-3">
          {data.breadcrumbs && data.breadcrumbs.length > 0 && (
            <div className="hidden md:flex items-center text-sm text-muted-foreground">
              {data.breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                  <a 
                    href={crumb.href} 
                    className="hover:text-foreground transition-colors rounded-full px-2 py-1 hover:bg-primary/20"
                  >
                    {crumb.label}
                  </a>
                </React.Fragment>
              ))}
            </div>
          )}
          
          <PlayfulAnimatedButton 
            size="sm" 
            href={data.contactLink}
          >
            {data.contactCta}
          </PlayfulAnimatedButton>
        </div>
      </div>
    </nav>
  )
}

// Hero Component
const PlayfulHero: React.FC<{ data: PlayfulLandingPageData['hero'] }> = ({ data }) => {
  return (
    <header className="px-4 md:px-8 lg:px-12 pt-6 md:pt-12">
      <div className="mx-auto max-w-6xl rounded-3xl bg-card p-6 md:p-12 border shadow-sm relative overflow-hidden">
        {/* Decorative Elements */}
        {data.decorativeElements && (
          <div className="absolute inset-0 pointer-events-none">
            {data.decorativeElements.map((element, index) => (
              <div 
                key={index} 
                className={cn(
                  "absolute animate-wiggle",
                  index % 4 === 0 && "top-4 right-4",
                  index % 4 === 1 && "bottom-4 left-4", 
                  index % 4 === 2 && "top-1/2 right-8",
                  index % 4 === 3 && "bottom-8 right-1/4"
                )}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {element}
              </div>
            ))}
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="text-center md:text-left">
            {data.badge && (
              <Badge className="rounded-full bg-secondary text-secondary-foreground mb-4">
                {data.badge}
              </Badge>
            )}
            <h1 className="mt-4 text-balance font-display text-4xl md:text-6xl lg:text-7xl leading-tight">
              {data.headline}
            </h1>
            <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed text-lg">
              {data.subheading}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <PlayfulAnimatedButton 
                size="lg"
                href={data.primaryCtaLink || "#contact"}
              >
                {data.primaryCtaText || "Get a free strategy call"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </PlayfulAnimatedButton>
              {data.secondaryCtaText && (
                <PlayfulAnimatedButton
                  variant="accent"
                  size="lg"
                  href={data.secondaryCtaLink || "#work"}
                >
                  {data.secondaryCtaText}
                </PlayfulAnimatedButton>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
              {data.mascotImage ? (
                <Image
                  src={data.mascotImage}
                  alt="Playful mascot"
                  fill
                  className="object-contain drop-shadow-sm rounded-3xl hover-bounce"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center hover-bounce">
                  <Heart className="h-24 w-24 text-white animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Credibility Strip Component
const PlayfulCredibilityStrip: React.FC<{ data: PlayfulLandingPageData['credibility'] }> = ({ data }) => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-secondary p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {data.clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="font-display text-foreground/70 text-lg hover:text-foreground transition-colors hover-bounce cursor-default"
                >
                  {logo}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                {data.metric.icon && (
                  <span className="text-accent">
                    {data.metric.icon}
                  </span>
                )}
                <div className="font-display text-3xl md:text-4xl text-foreground">
                  {data.metric.value}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {data.metric.description}
              </div>
              {data.communityCount && (
                <div className="mt-2 text-xs text-muted-foreground">
                  {data.communityCount} happy community members
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Component
const PlayfulServices: React.FC<{ data: PlayfulLandingPageData['services'] }> = ({ data }) => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((service) => {
            const bgColor = {
              primary: 'bg-primary/10 hover:bg-primary/20',
              accent: 'bg-accent/30 hover:bg-accent/40', 
              secondary: 'bg-secondary hover:bg-secondary/80'
            }[service.color || 'primary']

            return (
              <Card 
                key={service.title} 
                className={cn(
                  "p-6 rounded-2xl border-0 transition-all duration-300 hover:shadow-lg hover-bounce cursor-pointer",
                  bgColor
                )}
              >
                {service.icon && (
                  <div className="text-accent mb-4">
                    {service.icon}
                  </div>
                )}
                <h3 className="font-display text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.outcomeDescription}
                </p>
                <a
                  href={service.workLink}
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  See work
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Featured Case Study Component
const PlayfulCaseStudy: React.FC<{ data: PlayfulLandingPageData['caseStudy'] }> = ({ data }) => {
  const bgColor = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    secondary: 'bg-secondary'
  }[data.backgroundColor || 'primary']

  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className={cn("rounded-3xl p-8 md:p-12", bgColor)}>
          <div className="text-center mb-12">
            <div className="font-display text-5xl md:text-6xl text-foreground mb-2">
              {data.metric}
            </div>
            <p className="text-muted-foreground text-lg">
              {data.metricDescription}
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl">
            <div className="text-center">
              <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                &ldquo;{data.clientQuote}&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
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
                  <cite className="font-medium text-foreground not-italic">
                    {data.clientName}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {data.clientTitle}
                    {data.clientCompany && `, ${data.clientCompany}`}
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <PlayfulAnimatedButton 
                  variant="accent" 
                  href={data.caseStudyLink}
                >
                  Read full case
                  <ArrowRight className="ml-2 h-4 w-4" />
                </PlayfulAnimatedButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

// How We Work Component
const PlayfulHowWeWork: React.FC<{ data: PlayfulLandingPageData['howWeWork'] }> = ({ data }) => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {data.steps.map((step, i) => {
            const bgColor = {
              primary: 'bg-primary text-primary-foreground',
              accent: 'bg-accent text-accent-foreground',
              secondary: 'bg-secondary text-secondary-foreground'
            }[step.color || 'primary']

            return (
              <div key={step.stepNumber} className="text-center relative">
                <div className="relative mb-6">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center text-xl font-display font-bold mx-auto shadow-lg hover-bounce",
                    bgColor
                  )}>
                    {step.icon || step.stepNumber}
                  </div>
                  {i < data.steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8" />
                  )}
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Testimonials Component
const PlayfulTestimonials: React.FC<{ data: PlayfulLandingPageData['testimonials'] }> = ({ data }) => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 bg-secondary rounded-t-[2rem]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.items.map((testimonial, i) => (
            <Card key={i} className="p-6 rounded-2xl bg-background hover:shadow-lg transition-all duration-300 hover-bounce">
              {testimonial.rating && (
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              )}
              
              <blockquote className="text-foreground mb-6 leading-relaxed">
                {testimonial.emoji && (
                  <span className="text-2xl mr-2">{testimonial.emoji}</span>
                )}
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center gap-3">
                {testimonial.clientImage && (
                  <Image
                    src={testimonial.clientImage}
                    alt={testimonial.clientName}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
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
                  <a 
                    href={testimonial.videoUrl}
                    className="text-accent hover:text-primary transition-colors p-2 rounded-full hover:bg-accent/20"
                  >
                    <Play className="h-5 w-5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Component
const PlayfulPricing: React.FC<{ data: PlayfulLandingPageData['pricing'] }> = ({ data }) => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        {data.showTransparentPricing && data.packages ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {data.packages.map((pkg) => {
              const bgColor = {
                primary: 'bg-primary/10 border-primary/30',
                accent: 'bg-accent/30 border-accent/50',
                secondary: 'bg-secondary border-secondary/80'
              }[pkg.color || 'primary']

              return (
                <Card 
                  key={pkg.name} 
                  className={cn(
                    "p-8 text-center relative rounded-2xl transition-all duration-300 hover:shadow-lg hover-bounce",
                    bgColor,
                    pkg.popular && "ring-2 ring-accent shadow-lg scale-105"
                  )}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                      Most Popular ⭐
                    </Badge>
                  )}
                  
                  {pkg.icon && (
                    <div className="text-accent mb-4 flex justify-center">
                      {pkg.icon}
                    </div>
                  )}
                  
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="font-display text-3xl text-foreground mb-4">
                    {pkg.priceRange}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <PlayfulAnimatedButton 
                    variant={pkg.popular ? 'primary' : 'accent'}
                    className="w-full"
                    href={pkg.ctaLink}
                  >
                    {pkg.ctaText}
                  </PlayfulAnimatedButton>
                </Card>
              )
            })}
          </div>
        ) : null}

        {data.customOption && (
          <Card className="max-w-2xl mx-auto p-8 text-center bg-accent/30 rounded-2xl">
            <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="font-display text-2xl text-foreground mb-4">
              {data.customOption.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {data.customOption.description}
            </p>
            <PlayfulAnimatedButton 
              size="lg"
              href={data.customOption.ctaLink}
            >
              {data.customOption.ctaText}
            </PlayfulAnimatedButton>
          </Card>
        )}
      </div>
    </section>
  )
}

// Lead Capture Component
const PlayfulLeadCapture: React.FC<{ data: PlayfulLandingPageData['leadCapture'] }> = ({ data }) => {
  const bgColor = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    secondary: 'bg-secondary'
  }[data.backgroundColor || 'accent']

  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className={cn("rounded-3xl p-8 md:p-12 relative overflow-hidden", bgColor)}>
          {/* Decorative Elements */}
          {data.decorativeElements && (
            <div className="absolute inset-0 pointer-events-none">
              {data.decorativeElements.map((element, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "absolute animate-wiggle opacity-60",
                    index % 3 === 0 && "top-4 right-4",
                    index % 3 === 1 && "bottom-4 left-4",
                    index % 3 === 2 && "top-1/2 right-8"
                  )}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {element}
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-muted-foreground text-lg">
                {data.subtitle}
              </p>
            )}
            {data.nextAvailability && (
              <div className="mt-4 inline-flex items-center gap-2 bg-background/20 rounded-full px-4 py-2 text-sm text-foreground">
                <Clock className="h-4 w-4" />
                Next availability: {data.nextAvailability}
              </div>
            )}
          </div>

          <div className="relative z-10">
            {data.formType === 'calendar' && data.calendarEmbedUrl ? (
              <div className="bg-background rounded-2xl p-4 shadow-lg">
                <iframe
                  src={data.calendarEmbedUrl}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="rounded-xl"
                />
              </div>
            ) : (
              <Card className="p-8 rounded-2xl bg-background shadow-lg">
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
                          placeholder={field.placeholder}
                          required={field.required}
                          className="min-h-[100px] rounded-xl border-border/50 focus:border-accent"
                        />
                      ) : (
                        <Input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="rounded-xl border-border/50 focus:border-accent"
                        />
                      )}
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <PlayfulAnimatedButton 
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      {data.submitText || "Get started"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </PlayfulAnimatedButton>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
const PlayfulFooter: React.FC<{ data: PlayfulLandingPageData['footer'] }> = ({ data }) => {
  return (
    <footer className="px-4 md:px-8 lg:px-12 py-12 bg-card border-t">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {data.mascotIcon && (
                <span className="text-accent">
                  {data.mascotIcon}
                </span>
              )}
              <h3 className="font-display text-xl text-foreground">
                {data.companyName}
              </h3>
            </div>
            {data.tagline && (
              <p className="text-muted-foreground mb-4">
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
            <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
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
              <h4 className="font-medium text-foreground mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                {data.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors hover-bounce"
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

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {data.companyName}. Made with 💖
          </p>
          <p className="text-xs text-muted-foreground">
            Spreading joy one interaction at a time ✨
          </p>
        </div>
      </div>
    </footer>
  )
}

// Default fallback data to prevent undefined errors
const getDefaultPlayfulCorporateData = (): PlayfulLandingPageData => ({
  header: {
    logo: "Playful Corp",
    contactCta: "Get Started",
    contactLink: "#contact",
    breadcrumbs: [
      { label: "Home", href: "#" },
      { label: "Solutions", href: "#services" },
      { label: "Pricing", href: "#pricing" }
    ]
  },
  hero: {
    badge: "🚀 Innovation Leader",
    targetKeyword: "corporate solutions",
    headline: "Business Solutions with a Creative Twist",
    subheading: "We help companies grow with innovative, people-first strategies.",
    primaryCtaText: "Explore Solutions",
    primaryCtaLink: "#services",
    secondaryCtaText: "Book a Call",
    secondaryCtaLink: "#contact"
  },
  credibility: {
    clientLogos: ["Fortune 500 Co", "Tech Giant", "Global Brand"],
    metric: { value: "1000+", description: "Happy Clients" },
    communityCount: "50,000+"
  },
  services: {
    title: "What We Offer",
    subtitle: "Comprehensive business solutions",
    items: [
      { title: "Strategy Consulting", outcomeDescription: "Drive growth with smart strategies", workLink: "#", color: "primary" },
      { title: "Digital Transformation", outcomeDescription: "Modernize your business", workLink: "#", color: "accent" },
      { title: "Team Development", outcomeDescription: "Build high-performing teams", workLink: "#", color: "secondary" }
    ]
  },
  caseStudy: {
    metric: "400%",
    metricDescription: "ROI increase",
    clientQuote: "They transformed our entire business approach.",
    clientName: "Michael Roberts",
    clientTitle: "COO",
    clientCompany: "Enterprise Inc",
    caseStudyLink: "#",
    backgroundColor: "accent"
  },
  howWeWork: {
    title: "Our Process",
    subtitle: "Simple steps to success",
    steps: [
      { stepNumber: 1, title: "Analyze", description: "Understand your business needs", color: "primary" },
      { stepNumber: 2, title: "Plan", description: "Create a custom roadmap", color: "accent" },
      { stepNumber: 3, title: "Execute", description: "Deliver measurable results", color: "secondary" }
    ]
  },
  testimonials: {
    title: "Success Stories",
    subtitle: "From our amazing clients",
    items: [
      { quote: "Game-changing partnership! 🎯", clientName: "Jennifer Lee", clientTitle: "CEO", clientCompany: "Tech Startup", rating: 5, emoji: "🚀" },
      { quote: "Incredible results! 💪", clientName: "Robert Brown", clientTitle: "VP Operations", clientCompany: "Manufacturing Co", rating: 5, emoji: "⭐" },
      { quote: "Highly recommend! 🌟", clientName: "Amanda White", clientTitle: "Director", clientCompany: "Retail Chain", rating: 5, emoji: "✨" }
    ]
  },
  pricing: {
    title: "Choose Your Plan",
    subtitle: "Flexible pricing for every business size",
    showTransparentPricing: true,
    packages: [
      { name: "Starter", priceRange: "$2,500/mo", description: "Perfect for small businesses", features: ["Monthly consulting", "Email support", "Basic analytics"], ctaText: "Get Started", ctaLink: "#", color: "primary" },
      { name: "Professional", priceRange: "$5,000/mo", description: "For growing companies", features: ["Weekly consulting", "Priority support", "Advanced analytics", "Custom strategies"], ctaText: "Get Started", ctaLink: "#", popular: true, color: "accent" },
      { name: "Enterprise", priceRange: "Custom", description: "For large organizations", features: ["Daily support", "Dedicated team", "Full analytics suite", "White-glove service"], ctaText: "Contact Us", ctaLink: "#", color: "secondary" }
    ],
    customOption: {
      title: "Need Something Custom?",
      description: "We'll create a plan just for you",
      ctaText: "Let's Chat",
      ctaLink: "#contact"
    }
  },
  leadCapture: {
    title: "Ready to Transform Your Business?",
    subtitle: "Let's start the conversation",
    formType: "form",
    formFields: [
      { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Smith" },
      { name: "email", label: "Work Email", type: "email", required: true, placeholder: "john@company.com" },
      { name: "company", label: "Company Name", type: "text", required: true, placeholder: "Acme Corp" },
      { name: "message", label: "How can we help?", type: "textarea", required: true, placeholder: "Tell us about your needs..." }
    ],
    submitText: "Schedule Consultation",
    backgroundColor: "accent"
  },
  footer: {
    companyName: "Playful Corp",
    tagline: "Business solutions with personality",
    contactInfo: {
      email: "hello@playfulcorp.com",
      phone: "(555) 234-5678",
      address: "789 Innovation Blvd, Business City"
    },
    sitemapLinks: [
      { label: "Solutions", href: "#services" },
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" }
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Twitter", url: "https://twitter.com" },
      { platform: "Facebook", url: "https://facebook.com" }
    ]
  }
});

// Main Template Component
export default function PlayfulLandingPageTemplate({ data, className }: PlayfulLandingPageTemplateProps) {
  // Merge provided data with default data to ensure all fields exist
  const safeData: PlayfulLandingPageData = {
    header: { ...getDefaultPlayfulCorporateData().header, ...data?.header },
    hero: { ...getDefaultPlayfulCorporateData().hero, ...data?.hero },
    credibility: { ...getDefaultPlayfulCorporateData().credibility, ...data?.credibility },
    services: { ...getDefaultPlayfulCorporateData().services, ...data?.services },
    caseStudy: { ...getDefaultPlayfulCorporateData().caseStudy, ...data?.caseStudy },
    howWeWork: { ...getDefaultPlayfulCorporateData().howWeWork, ...data?.howWeWork },
    testimonials: { ...getDefaultPlayfulCorporateData().testimonials, ...data?.testimonials },
    pricing: { ...getDefaultPlayfulCorporateData().pricing, ...data?.pricing },
    leadCapture: { ...getDefaultPlayfulCorporateData().leadCapture, ...data?.leadCapture },
    footer: { ...getDefaultPlayfulCorporateData().footer, ...data?.footer }
  };

  return (
    <div className={cn(
      nunito.variable, 
      baloo.variable, 
      GeistMono.variable, 
      "playful-landing-template font-sans antialiased",
      className
    )}>
      <style jsx global>{`
        .playful-landing-template {
          /* Playful Landing Template Custom CSS Variables */
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

          --radius: 1rem; /* rounder UI */

          /* Font variables */
          --font-sans: var(--font-nunito);
          --font-mono: var(--font-geist-mono);
          
          /* Base styles */
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          min-height: 100dvh;
        }

        /* Ensure all elements within the template use the custom variables */
        .playful-landing-template * {
          border-color: hsl(var(--border));
        }

        .playful-landing-template *:focus-visible {
          outline: 2px solid hsl(var(--ring));
          outline-offset: 2px;
        }

        /* Playful display font class */
        .playful-landing-template .font-display {
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

        .playful-landing-template .animate-wiggle {
          animation: wiggle 1.2s ease-in-out infinite;
        }

        .playful-landing-template .press-bounce:active {
          transform: translateY(0.5px) scale(0.98);
        }

        .playful-landing-template .hover-bounce:hover {
          animation: bounce-soft 0.6s ease;
        }
      `}</style>
      
      <PlayfulHeader data={safeData.header} />
      <main className="min-h-dvh bg-background">
        <PlayfulHero data={safeData.hero} />
        <PlayfulCredibilityStrip data={safeData.credibility} />
        <PlayfulServices data={safeData.services} />
        <PlayfulCaseStudy data={safeData.caseStudy} />
        <PlayfulHowWeWork data={safeData.howWeWork} />
        <PlayfulTestimonials data={safeData.testimonials} />
        <PlayfulPricing data={safeData.pricing} />
        <PlayfulLeadCapture data={safeData.leadCapture} />
      </main>
      <PlayfulFooter data={safeData.footer} />
    </div>
  )
}