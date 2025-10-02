"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { 
  ArrowRight, 
  Star, 
  Check, 
  Play, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Clock,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Quote
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

// Type definitions (inline to avoid import issues)
interface ModernBreadcrumb {
  label: string
  href: string
}

interface ModernNavigationItem {
  label: string
  href: string
}

interface ModernContactCta {
  label: string
  href: string
}

interface ModernHeaderData {
  logo: string
  navigation: ModernNavigationItem[]
  breadcrumbs?: ModernBreadcrumb[]
  contactCta: ModernContactCta
}

interface ModernCta {
  label: string
  href: string
}

interface ModernHeroData {
  badge: string
  headline: string
  targetKeyword: string
  subheadline: string
  primaryCta: ModernCta
  secondaryCta?: ModernCta
}

interface ModernClientLogo {
  src: string
  alt: string
}

interface ModernCredibilityData {
  metric: string
  clientLogos: ModernClientLogo[]
}

interface ModernServiceItem {
  title: string
  outcome: string
  icon: React.ComponentType<{ className?: string }>
  link: string
}

interface ModernServicesData {
  title: string
  subtitle: string
  services: ModernServiceItem[]
}

interface ModernCaseStudyData {
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

interface ModernWorkStep {
  title: string
  description: string
  visual?: React.ComponentType<{ className?: string }>
}

interface ModernHowWeWorkData {
  title: string
  subtitle: string
  steps: ModernWorkStep[]
}

interface ModernTestimonialItem {
  quote: string
  name: string
  title: string
  company?: string
  photo?: string
  logo?: string
  rating: number
}

interface ModernVideoTestimonial {
  thumbnail: string
  videoUrl: string
}

interface ModernTestimonialsData {
  title: string
  subtitle: string
  testimonials: ModernTestimonialItem[]
  videoTestimonial?: ModernVideoTestimonial
}

interface ModernPricingPackage {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  ctaText: string
  ctaLink: string
  featured?: boolean
}

interface ModernCustomOption {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

interface ModernPricingData {
  title: string
  subtitle: string
  packages: ModernPricingPackage[]
  customOption?: ModernCustomOption
}

interface ModernLeadCaptureData {
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

interface ModernFooterLink {
  label: string
  href: string
}

interface ModernFooterSection {
  title: string
  items: ModernFooterLink[]
}

interface ModernFooterData {
  logo: string
  description: string
  email: string
  phone: string
  address?: string
  links: ModernFooterSection[]
  privacy: ModernFooterLink
  terms: ModernFooterLink
  copyright: string
}

interface ModernLandingPageData {
  header: ModernHeaderData
  hero: ModernHeroData
  credibility: ModernCredibilityData
  services: ModernServicesData
  caseStudy: ModernCaseStudyData
  howWeWork: ModernHowWeWorkData
  testimonials: ModernTestimonialsData
  pricing: ModernPricingData
  leadCapture: ModernLeadCaptureData
  footer: ModernFooterData
}

interface ModernLandingPageTemplateProps {
  data: ModernLandingPageData
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function ModernLandingPageTemplate({ data }: ModernLandingPageTemplateProps) {
  return (
    <div className={cn(poppins.variable, GeistMono.variable, "modern-landing-template font-sans antialiased")}>
      <style jsx global>{`
        .modern-landing-template {
          /* Modern E-commerce Template Custom CSS Variables */
          --background: oklch(0.98 0.01 80); /* warm off-white */
          --foreground: oklch(0.22 0.03 60); /* deep warm charcoal */
          --card: oklch(1 0 0);
          --card-foreground: oklch(0.145 0 0);
          --popover: oklch(1 0 0);
          --popover-foreground: oklch(0.145 0 0);
          --primary: oklch(0.74 0.16 55); /* vibrant orange */
          --primary-foreground: oklch(0.15 0.02 60);
          --secondary: oklch(0.97 0 0);
          --secondary-foreground: oklch(0.205 0 0);
          --muted: oklch(0.96 0.01 80); /* subtle panel bg */
          --muted-foreground: oklch(0.45 0.03 60);
          --accent: oklch(0.78 0.1 145); /* fresh green */
          --accent-foreground: oklch(0.15 0.02 60);
          --destructive: oklch(0.577 0.245 27.325);
          --destructive-foreground: oklch(0.577 0.245 27.325);
          --border: oklch(0.92 0.01 80);
          --input: oklch(0.92 0.01 80);
          --ring: oklch(0.7 0.02 60);
          --radius: 0.875rem;
          
          /* Font variables */
          --font-sans: var(--font-poppins);
          --font-mono: var(--font-geist-mono);
          
          /* Base styles */
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        .modern-landing-template * {
          border-color: hsl(var(--border));
        }

        .modern-landing-template *:focus-visible {
          outline: 2px solid hsl(var(--ring));
          outline-offset: 2px;
        }

        /* Modern animations */
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Header */}
      <ModernHeader data={data.header} />

      {/* Hero Section */}
      <ModernHero data={data.hero} />

      {/* Credibility Strip */}
      <ModernCredibility data={data.credibility} />

      {/* Services Section */}
      <ModernServices data={data.services} />

      {/* Case Study Section */}
      <ModernCaseStudy data={data.caseStudy} />

      {/* How We Work Section */}
      <ModernHowWeWork data={data.howWeWork} />

      {/* Testimonials Section */}
      <ModernTestimonials data={data.testimonials} />

      {/* Pricing Section */}
      <ModernPricing data={data.pricing} />

      {/* Lead Capture Section */}
      <ModernLeadCapture data={data.leadCapture} />

      {/* Footer */}
      <ModernFooter data={data.footer} />
    </div>
  )
}

// Header Component
function ModernHeader({ data }: { data: ModernHeaderData }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight text-foreground">
              {data.logo}
            </span>
          </Link>
          
          {/* Breadcrumbs */}
          {data.breadcrumbs && (
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              {data.breadcrumbs.map((crumb: ModernBreadcrumb, index: number) => (
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

        <div className="hidden md:flex items-center gap-6">
          {data.navigation.map((item: ModernNavigationItem) => (
            <Link 
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button 
          className="rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <Link href={data.contactCta.href}>
            {data.contactCta.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </nav>
    </header>
  )
}

// Hero Component
function ModernHero({ data }: { data: ModernHeroData }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-6 text-center">
        <div className="animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 rounded-full px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            {data.badge}
          </Badge>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {data.headline.split(' ').map((word: string, index: number) => (
              <span 
                key={index}
                className={word === data.targetKeyword ? 'text-primary' : ''}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto">
            {data.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
              asChild
            >
              <Link href={data.primaryCta.href}>
                {data.primaryCta.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            {data.secondaryCta && (
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link href={data.secondaryCta.href}>
                  <Play className="mr-2 h-5 w-5" />
                  {data.secondaryCta.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Credibility Component
function ModernCredibility({ data }: { data: ModernCredibilityData }) {
  return (
    <section className="py-12 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="rounded-full px-4 py-2 mb-4">
            <TrendingUp className="mr-2 h-4 w-4" />
            Trusted Results
          </Badge>
          <p className="text-2xl font-bold text-primary">
            {data.metric}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {data.clientLogos.map((logo: ModernClientLogo, index: number) => (
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
function ModernServices({ data }: { data: ModernServicesData }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="rounded-full px-4 py-2 mb-4">
            <Target className="mr-2 h-4 w-4" />
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {data.services.map((service: ModernServiceItem, index: number) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {React.createElement(service.icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.outcome}</p>
                </div>
                
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  See work
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Case Study Component
function ModernCaseStudy({ data }: { data: ModernCaseStudyData }) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <Badge variant="secondary" className="rounded-full px-4 py-2 mb-4">
              <Award className="mr-2 h-4 w-4" />
              Success Story
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
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
              <p className="text-lg italic text-muted-foreground mb-4">
                &quot;{data.clientQuote}&quot;
              </p>
              <footer className="text-sm font-semibold">
                — {data.clientName}, {data.clientTitle}
              </footer>
            </blockquote>
            
            <Button 
              variant="outline"
              className="rounded-full font-semibold"
              asChild
            >
              <Link href={data.caseStudyLink}>
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3" />
            <Image
              src={data.image}
              alt={data.imageAlt}
              width={600}
              height={400}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// How We Work Component
function ModernHowWeWork({ data }: { data: ModernHowWeWorkData }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="rounded-full px-4 py-2 mb-4">
            <Zap className="mr-2 h-4 w-4" />
            Our Process
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {data.steps.map((step: ModernWorkStep, index: number) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < data.steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-border transform translate-x-4" />
              )}
              
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                {step.visual && (
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                    {React.createElement(step.visual, { className: "h-6 w-6 text-accent" })}
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Component
function ModernTestimonials({ data }: { data: ModernTestimonialsData }) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="rounded-full px-4 py-2 mb-4">
            <Users className="mr-2 h-4 w-4" />
            Client Stories
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.testimonials.map((testimonial: ModernTestimonialItem, index: number) => (
            <Card key={index} className="border-0 bg-card shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="mb-6">
                  <Quote className="h-6 w-6 text-primary mb-2" />
                  <p className="text-muted-foreground italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>
                
                <div className="flex items-center gap-4">
                  {testimonial.photo && (
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    {testimonial.company && (
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    )}
                  </div>
                </div>
                
                {testimonial.logo && (
                  <div className="mt-4 pt-4 border-t">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      width={100}
                      height={40}
                      className="h-8 w-auto object-contain opacity-60"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {data.videoTestimonial && (
          <div className="mt-16 text-center">
            <Card className="inline-block border-0 bg-card shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-0 relative">
                <Image
                  src={data.videoTestimonial.thumbnail}
                  alt="Video testimonial"
                  width={600}
                  height={338}
                  className="w-full"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors">
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
function ModernPricing({ data }: { data: ModernPricingData }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="rounded-full px-4 py-2 mb-4">
            <Shield className="mr-2 h-4 w-4" />
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {data.packages.map((pkg: ModernPricingPackage, index: number) => (
            <Card key={index} className={`relative border-2 rounded-2xl ${pkg.featured ? 'border-primary shadow-xl scale-105' : 'border-border'}`}>
              {pkg.featured && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.period}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full rounded-full font-semibold ${
                    pkg.featured 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                  }`}
                  asChild
                >
                  <Link href={pkg.ctaLink}>
                    {pkg.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {data.customOption && (
          <div className="mt-12 text-center">
            <Card className="inline-block border-0 bg-muted/50 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">{data.customOption.title}</h3>
                <p className="text-muted-foreground mb-6">{data.customOption.description}</p>
                <Button 
                  variant="outline"
                  className="rounded-full font-semibold"
                  asChild
                >
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
function ModernLeadCapture({ data }: { data: ModernLeadCaptureData }) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="rounded-full px-4 py-2 mb-4">
            <Calendar className="mr-2 h-4 w-4" />
            Get Started Today
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {data.subtitle}
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Form */}
          <Card className="border-0 bg-card shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">{data.formTitle}</h3>
              
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
                      className="rounded-lg"
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
                      className="rounded-lg"
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
                    className="rounded-lg"
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
                    className="rounded-lg"
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
                    className="rounded-lg"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {data.formCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Calendar/Availability */}
          <div>
            <Card className="border-0 bg-accent/5 rounded-2xl mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Next Availability</h4>
                    <p className="text-sm text-muted-foreground">{data.nextAvailability}</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full rounded-full font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
                  asChild
                >
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
                <span>{data.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>{data.phone}</span>
              </div>
              {data.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span>{data.address}</span>
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
function ModernFooter({ data }: { data: ModernFooterData }) {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <span className="text-xl font-bold tracking-tight">
                {data.logo}
              </span>
            </Link>
            <p className="text-background/70 mb-6">
              {data.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-background/70" />
                <span className="text-sm text-background/70">{data.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-background/70" />
                <span className="text-sm text-background/70">{data.phone}</span>
              </div>
              {data.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-background/70 mt-0.5" />
                  <span className="text-sm text-background/70">{data.address}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Navigation Links */}
          {data.links.map((section: ModernFooterSection, index: number) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item: ModernFooterLink) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            {data.copyright}
          </p>
          
          <div className="flex gap-6">
            <Link 
              href={data.privacy.href}
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              {data.privacy.label}
            </Link>
            <Link 
              href={data.terms.href}
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              {data.terms.label}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}