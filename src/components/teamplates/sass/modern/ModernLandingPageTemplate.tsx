"use client"
import React from 'react'
import { JetBrains_Mono, Inter } from "next/font/google"
import { 
  ArrowRight, 
  Star, 
  Zap,
  ChevronRight,
  Play,
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  Quote,
  Camera,
  BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

// Font configurations matching the modern design
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// TypeScript interfaces for props
export interface ModernHeaderData {
  logo: string
  navigation: Array<{
    label: string
    href: string
  }>
  contactCta: {
    label: string
    href: string
  }
  breadcrumbs?: Array<{
    label: string
    href?: string
  }>
}

export interface ModernHeroData {
  headline: string
  targetKeyword: string
  subheadline: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
    hasPlayIcon?: boolean
  }
  visualElement?: React.ReactNode
}

export interface ModernCredibilityData {
  metric: string
  clientLogos: Array<{
    name: string
    logo?: string
  }>
  description?: string
}

export interface ModernServiceItem {
  title: string
  outcome: string
  icon: React.ComponentType<{ className?: string }>
  workLink: string
}

export interface ModernServicesData {
  title: string
  subtitle?: string
  services: ModernServiceItem[]
}

export interface ModernCaseStudyData {
  metric: string
  metricDescription: string
  quote: string
  clientName: string
  clientRole: string
  clientCompany: string
  image?: string
  fullCaseStudyLink: string
}

export interface ModernWorkStep {
  number: number
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface ModernHowWeWorkData {
  title: string
  subtitle?: string
  steps: ModernWorkStep[]
}

export interface ModernTestimonial {
  quote: string
  clientName: string
  clientRole: string
  clientCompany: string
  photo?: string
  logo?: string
  rating?: number
  videoUrl?: string
}

export interface ModernTestimonialsData {
  title: string
  subtitle?: string
  testimonials: ModernTestimonial[]
}

export interface ModernPricingPlan {
  name: string
  priceRange: string
  description: string
  features: string[]
  cta: {
    label: string
    href: string
  }
  featured?: boolean
}

export interface ModernPricingData {
  title: string
  subtitle?: string
  plans: ModernPricingPlan[]
  customOption: {
    title: string
    description: string
    cta: {
      label: string
      href: string
    }
  }
}

export interface ModernLeadCaptureData {
  title: string
  subtitle?: string
  form: {
    fields: Array<{
      name: string
      label: string
      type: 'text' | 'email' | 'textarea'
      required?: boolean
    }>
    submitLabel: string
    submitHref: string
  }
  calendar?: {
    nextAvailability: string
    bookingUrl: string
  }
  contact: {
    phone?: string
    email?: string
    address?: string
  }
}

export interface ModernFooterData {
  logo: string
  description: string
  contact: {
    phone?: string
    email?: string
    address?: string
  }
  links: {
    [category: string]: Array<{
      label: string
      href: string
    }>
  }
  social?: Array<{
    platform: string
    href: string
    icon: React.ComponentType<{ className?: string }>
  }>
  copyright: string
}

export interface ModernLandingPageData {
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

// Helper functions to create components
export const createModernServiceItem = (
  title: string,
  outcome: string,
  icon: React.ComponentType<{ className?: string }>,
  workLink: string
): ModernServiceItem => ({
  title,
  outcome,
  icon,
  workLink
})

export const createModernTestimonial = (
  quote: string,
  clientName: string,
  clientRole: string,
  clientCompany: string,
  photo?: string,
  logo?: string,
  rating?: number,
  videoUrl?: string
): ModernTestimonial => ({
  quote,
  clientName,
  clientRole,
  clientCompany,
  photo,
  logo,
  rating,
  videoUrl
})

export const createModernWorkStep = (
  number: number,
  title: string,
  description: string,
  icon?: React.ComponentType<{ className?: string }>
): ModernWorkStep => ({
  number,
  title,
  description,
  icon
})

export const createModernPricingPlan = (
  name: string,
  priceRange: string,
  description: string,
  features: string[],
  cta: { label: string; href: string },
  featured?: boolean
): ModernPricingPlan => ({
  name,
  priceRange,
  description,
  features,
  cta,
  featured
})

// Main Template Component
export function ModernLandingPageTemplate({ data }: { data: ModernLandingPageData }) {
  // Modern template styles
  const modernStyles = {
    '--background': 'oklch(0.98 0.005 264)',
    '--foreground': 'oklch(0.15 0.02 264)',
    '--card': 'oklch(0.99 0.002 264)',
    '--card-foreground': 'oklch(0.15 0.02 264)',
    '--popover': 'oklch(0.99 0.002 264)',
    '--popover-foreground': 'oklch(0.15 0.02 264)',
    '--primary': 'oklch(0.6 0.25 264)',
    '--primary-foreground': 'oklch(0.98 0.005 264)',
    '--secondary': 'oklch(0.95 0.01 264)',
    '--secondary-foreground': 'oklch(0.2 0.02 264)',
    '--muted': 'oklch(0.96 0.008 264)',
    '--muted-foreground': 'oklch(0.5 0.01 264)',
    '--accent': 'oklch(0.7 0.2 180)',
    '--accent-foreground': 'oklch(0.98 0.005 264)',
    '--destructive': 'oklch(0.6 0.25 15)',
    '--destructive-foreground': 'oklch(0.98 0.005 264)',
    '--border': 'oklch(0.9 0.01 264)',
    '--input': 'oklch(0.9 0.01 264)',
    '--ring': 'oklch(0.6 0.25 264)',
    '--radius': '0.75rem',
    '--font-sans': `${inter.style.fontFamily}, system-ui, sans-serif`,
    '--font-mono': `${jetbrainsMono.style.fontFamily}, ui-monospace, monospace`,
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    fontFamily: 'var(--font-sans)',
    minHeight: '100vh',
    transition: 'colors 300ms'
  } as React.CSSProperties

  return (
    <>
      {/* Modern theme styles */}
      <style jsx global>{`
        .modern-landing-template {
          --background: oklch(0.98 0.005 264);
          --foreground: oklch(0.15 0.02 264);
          --card: oklch(0.99 0.002 264);
          --card-foreground: oklch(0.15 0.02 264);
          --popover: oklch(0.99 0.002 264);
          --popover-foreground: oklch(0.15 0.02 264);
          --primary: oklch(0.6 0.25 264);
          --primary-foreground: oklch(0.98 0.005 264);
          --secondary: oklch(0.95 0.01 264);
          --secondary-foreground: oklch(0.2 0.02 264);
          --muted: oklch(0.96 0.008 264);
          --muted-foreground: oklch(0.5 0.01 264);
          --accent: oklch(0.7 0.2 180);
          --accent-foreground: oklch(0.98 0.005 264);
          --destructive: oklch(0.6 0.25 15);
          --destructive-foreground: oklch(0.98 0.005 264);
          --border: oklch(0.9 0.01 264);
          --input: oklch(0.9 0.01 264);
          --ring: oklch(0.6 0.25 264);
        }

        @media (prefers-color-scheme: dark) {
          .modern-landing-template {
            --background: oklch(0.08 0.02 264);
            --foreground: oklch(0.95 0.01 264);
            --card: oklch(0.1 0.02 264);
            --card-foreground: oklch(0.95 0.01 264);
            --popover: oklch(0.1 0.02 264);
            --popover-foreground: oklch(0.95 0.01 264);
            --primary: oklch(0.7 0.2 180);
            --primary-foreground: oklch(0.08 0.02 264);
            --secondary: oklch(0.15 0.02 264);
            --secondary-foreground: oklch(0.9 0.01 264);
            --muted: oklch(0.12 0.02 264);
            --muted-foreground: oklch(0.6 0.01 264);
            --accent: oklch(0.65 0.22 300);
            --accent-foreground: oklch(0.95 0.01 264);
            --destructive: oklch(0.65 0.25 15);
            --destructive-foreground: oklch(0.95 0.01 264);
            --border: oklch(0.18 0.02 264);
            --input: oklch(0.18 0.02 264);
            --ring: oklch(0.7 0.2 180);
          }
        }

        /* Grid pattern background */
        .modern-landing-template .grid-pattern {
          background-image: linear-gradient(rgba(96, 165, 250, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Custom animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.3); }
          50% { box-shadow: 0 0 40px rgba(96, 165, 250, 0.6); }
        }

        .modern-landing-template .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .modern-landing-template .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <div 
        className={`modern-landing-template font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={modernStyles}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 border-b backdrop-blur-sm" style={{ 
          borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
          backgroundColor: 'color-mix(in oklch, var(--background) 80%, transparent)'
        }}>
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center"
                     style={{ 
                       background: 'linear-gradient(135deg, var(--primary), var(--accent))'
                     }}>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">{data.header.logo}</span>
              </div>
              
              <nav className="hidden md:flex items-center gap-6">
                {data.header.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Breadcrumbs for deeper pages */}
            {data.header.breadcrumbs && data.header.breadcrumbs.length > 0 && (
              <div className="hidden lg:flex items-center gap-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                {data.header.breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.label}>
                    {crumb.href ? (
                      <a href={crumb.href} className="hover:text-foreground transition-colors">
                        {crumb.label}
                      </a>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                    {index < data.header.breadcrumbs!.length - 1 && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            <Button asChild style={{ 
              backgroundColor: 'var(--primary)', 
              color: 'var(--primary-foreground)'
            }}>
              <a href={data.header.contactCta.href}>
                {data.header.contactCta.label}
              </a>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(135deg, color-mix(in oklch, var(--primary) 10%, transparent), transparent, color-mix(in oklch, var(--accent) 10%, transparent))'
          }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                    {data.hero.headline.split(data.hero.targetKeyword).map((part, index, array) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < array.length - 1 && (
                          <span 
                            className="bg-clip-text text-transparent"
                            style={{ 
                              background: 'linear-gradient(to right, var(--primary), var(--accent))',
                              WebkitBackgroundClip: 'text'
                            }}
                          >
                            {data.hero.targetKeyword}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="text-xl text-pretty leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {data.hero.subheadline}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild style={{ 
                    backgroundColor: 'var(--primary)', 
                    color: 'var(--primary-foreground)'
                  }}>
                    <a href={data.hero.primaryCta.href}>
                      {data.hero.primaryCta.label}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  
                  {data.hero.secondaryCta && (
                    <Button size="lg" variant="outline" asChild className="border-primary/20 bg-transparent" style={{
                      borderColor: 'color-mix(in oklch, var(--primary) 20%, transparent)'
                    }}>
                      <a href={data.hero.secondaryCta.href} className="flex items-center gap-2">
                        {data.hero.secondaryCta.hasPlayIcon && <Play className="w-4 h-4" />}
                        {data.hero.secondaryCta.label}
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative">
                {data.hero.visualElement || (
                  <div className="relative">
                    <div className="w-full h-80 rounded-lg border" style={{ 
                      backgroundColor: 'color-mix(in oklch, var(--card) 50%, transparent)',
                      borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)'
                    }}>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 rounded" style={{ backgroundColor: 'var(--primary)', opacity: 0.7, width: '80%' }}></div>
                          <div className="h-4 rounded" style={{ backgroundColor: 'var(--accent)', opacity: 0.5, width: '60%' }}></div>
                          <div className="h-4 rounded" style={{ backgroundColor: 'var(--primary)', opacity: 0.3, width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl animate-float"
                         style={{ 
                           background: 'linear-gradient(135deg, color-mix(in oklch, var(--primary) 20%, transparent), color-mix(in oklch, var(--accent) 20%, transparent))'
                         }}></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Strip */}
        <section className="py-12 border-b" style={{ 
          borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
          backgroundColor: 'color-mix(in oklch, var(--muted) 30%, transparent)'
        }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
                {data.credibility.metric}
              </div>
              {data.credibility.description && (
                <p style={{ color: 'var(--muted-foreground)' }}>
                  {data.credibility.description}
                </p>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {data.credibility.clientLogos.map((client) => (
                <div key={client.name} className="text-lg font-semibold" style={{ color: 'var(--muted-foreground)' }}>
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="h-8 object-contain" />
                  ) : (
                    client.name
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 border-primary/20" style={{ 
                backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                color: 'var(--primary)'
              }}>
                Services
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{data.services.title}</h2>
              {data.services.subtitle && (
                <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                  {data.services.subtitle}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {data.services.services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.title}
                    className="transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    style={{ 
                      borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
                      backgroundColor: 'color-mix(in oklch, var(--card) 50%, transparent)',
                      animationDelay: `${index * 0.1}s` 
                    }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                           style={{ 
                             background: 'linear-gradient(135deg, var(--primary), var(--accent))'
                           }}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {service.outcome}
                      </CardDescription>
                      <Button variant="ghost" asChild className="p-0 h-auto font-medium" style={{ color: 'var(--primary)' }}>
                        <a href={service.workLink} className="flex items-center gap-1">
                          See work <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20" style={{ 
          backgroundColor: 'color-mix(in oklch, var(--muted) 30%, transparent)'
        }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 border-primary/20" style={{ 
                  backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                  color: 'var(--primary)'
                }}>
                  Case Study
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Featured Results</h2>
              </div>

              <Card className="overflow-hidden" style={{ 
                borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
                backgroundColor: 'color-mix(in oklch, var(--card) 80%, transparent)'
              }}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold" style={{ color: 'var(--primary)' }}>
                        {data.caseStudy.metric}
                      </div>
                      <p className="text-lg" style={{ color: 'var(--muted-foreground)' }}>
                        {data.caseStudy.metricDescription}
                      </p>
                    </div>

                    <blockquote className="border-l-4 pl-4 italic text-lg" style={{ 
                      borderColor: 'var(--primary)',
                      color: 'var(--foreground)'
                    }}>
                      <Quote className="w-6 h-6 mb-2 opacity-50" />
                      &ldquo;{data.caseStudy.quote}&rdquo;
                    </blockquote>

                    <div className="space-y-1">
                      <div className="font-semibold">{data.caseStudy.clientName}</div>
                      <div style={{ color: 'var(--muted-foreground)' }}>
                        {data.caseStudy.clientRole} at {data.caseStudy.clientCompany}
                      </div>
                    </div>

                    <Button asChild style={{ 
                      backgroundColor: 'var(--primary)', 
                      color: 'var(--primary-foreground)'
                    }}>
                      <a href={data.caseStudy.fullCaseStudyLink}>
                        Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <div className="relative min-h-[300px]" style={{ backgroundColor: 'var(--muted)' }}>
                    {data.caseStudy.image ? (
                      <img
                        src={data.caseStudy.image}
                        alt="Case study"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BarChart3 className="w-16 h-16" style={{ color: 'var(--muted-foreground)' }} />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 border-primary/20" style={{ 
                backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                color: 'var(--primary)'
              }}>
                Process
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{data.howWeWork.title}</h2>
              {data.howWeWork.subtitle && (
                <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                  {data.howWeWork.subtitle}
                </p>
              )}
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting lines */}
                <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px" style={{ 
                  backgroundColor: 'var(--border)',
                  transform: 'translateY(-50%)'
                }}></div>

                {data.howWeWork.steps.map((step) => {
                  const Icon = step.icon
                  return (
                    <div key={step.number} className="text-center space-y-4 relative">
                      <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center relative z-10"
                           style={{ 
                             background: 'linear-gradient(135deg, var(--primary), var(--accent))'
                           }}>
                        {Icon ? (
                          <Icon className="w-8 h-8 text-white" />
                        ) : (
                          <span className="text-2xl font-bold text-white">{step.number}</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p style={{ color: 'var(--muted-foreground)' }}>{step.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20" style={{ 
          backgroundColor: 'color-mix(in oklch, var(--muted) 30%, transparent)'
        }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 border-primary/20" style={{ 
                backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                color: 'var(--primary)'
              }}>
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{data.testimonials.title}</h2>
              {data.testimonials.subtitle && (
                <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                  {data.testimonials.subtitle}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.testimonials.testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  style={{ 
                    borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
                    backgroundColor: 'color-mix(in oklch, var(--card) 80%, transparent)'
                  }}
                >
                  <CardContent className="p-6 space-y-4">
                    {testimonial.rating && (
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--primary)' }} />
                        ))}
                      </div>
                    )}

                    <blockquote className="text-sm leading-relaxed italic">
                      <Quote className="w-4 h-4 mb-2 opacity-50" />
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                      {testimonial.photo ? (
                        <img
                          src={testimonial.photo}
                          alt={testimonial.clientName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--muted)' }}>
                          <Camera className="w-5 h-5" style={{ color: 'var(--muted-foreground)' }} />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm">{testimonial.clientName}</div>
                        <div className="text-xs truncate" style={{ color: 'var(--muted-foreground)' }}>
                          {testimonial.clientRole} at {testimonial.clientCompany}
                        </div>
                      </div>
                      {testimonial.videoUrl && (
                        <Button size="sm" variant="ghost" asChild>
                          <a href={testimonial.videoUrl}>
                            <Play className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 border-primary/20" style={{ 
                backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                color: 'var(--primary)'
              }}>
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{data.pricing.title}</h2>
              {data.pricing.subtitle && (
                <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                  {data.pricing.subtitle}
                </p>
              )}
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {data.pricing.plans.map((plan) => (
                  <Card
                    key={plan.name}
                    className={`transition-all duration-300 hover:scale-105 relative ${
                      plan.featured ? 'ring-2' : ''
                    }`}
                    style={{ 
                      borderColor: plan.featured ? 'var(--primary)' : 'color-mix(in oklch, var(--border) 50%, transparent)',
                      backgroundColor: 'color-mix(in oklch, var(--card) 80%, transparent)'
                    }}
                  >
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge style={{ 
                          backgroundColor: 'var(--primary)', 
                          color: 'var(--primary-foreground)'
                        }}>
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>
                          {plan.priceRange}
                        </div>
                        <CardDescription>{plan.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className="w-full"
                        variant={plan.featured ? "default" : "outline"}
                        style={plan.featured ? { 
                          backgroundColor: 'var(--primary)', 
                          color: 'var(--primary-foreground)'
                        } : {}}
                      >
                        <a href={plan.cta.href}>{plan.cta.label}</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Custom Option */}
              <Card className="text-center" style={{ 
                borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
                backgroundColor: 'color-mix(in oklch, var(--muted) 50%, transparent)'
              }}>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">{data.pricing.customOption.title}</h3>
                  <p style={{ color: 'var(--muted-foreground)' }}>
                    {data.pricing.customOption.description}
                  </p>
                  <Button asChild style={{ 
                    backgroundColor: 'var(--primary)', 
                    color: 'var(--primary-foreground)'
                  }}>
                    <a href={data.pricing.customOption.cta.href}>
                      {data.pricing.customOption.cta.label}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Capture Section */}
        <section className="py-20" style={{ 
          backgroundColor: 'color-mix(in oklch, var(--muted) 30%, transparent)'
        }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{data.leadCapture.title}</h2>
                {data.leadCapture.subtitle && (
                  <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                    {data.leadCapture.subtitle}
                  </p>
                )}
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card style={{ 
                  borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
                  backgroundColor: 'color-mix(in oklch, var(--card) 80%, transparent)'
                }}>
                  <CardHeader>
                    <CardTitle>Get Started Today</CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      {data.leadCapture.form.fields.map((field) => (
                        <div key={field.name} className="space-y-2">
                          <label className="text-sm font-medium" htmlFor={field.name}>
                            {field.label} {field.required && <span style={{ color: 'var(--destructive)' }}>*</span>}
                          </label>
                          {field.type === 'textarea' ? (
                            <Textarea
                              id={field.name}
                              name={field.name}
                              required={field.required}
                              style={{ 
                                backgroundColor: 'var(--background)',
                                borderColor: 'var(--border)'
                              }}
                            />
                          ) : (
                            <Input
                              id={field.name}
                              name={field.name}
                              type={field.type}
                              required={field.required}
                              style={{ 
                                backgroundColor: 'var(--background)',
                                borderColor: 'var(--border)'
                              }}
                            />
                          )}
                        </div>
                      ))}
                      <Button
                        type="submit"
                        className="w-full"
                        style={{ 
                          backgroundColor: 'var(--primary)', 
                          color: 'var(--primary-foreground)'
                        }}
                      >
                        {data.leadCapture.form.submitLabel}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Calendar Widget & Contact Info */}
                <div className="space-y-8">
                  {data.leadCapture.calendar && (
                    <Card style={{ 
                      borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
                      backgroundColor: 'color-mix(in oklch, var(--card) 80%, transparent)'
                    }}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Schedule a Call
                        </CardTitle>
                        <CardDescription>
                          Book a free strategy session at your convenience.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                          <span>Next Availability: {data.leadCapture.calendar.nextAvailability}</span>
                        </div>
                        <Button asChild className="w-full" style={{ 
                          backgroundColor: 'var(--primary)', 
                          color: 'var(--primary-foreground)'
                        }}>
                          <a href={data.leadCapture.calendar.bookingUrl}>
                            Book Now
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}

                  {/* Contact Information */}
                  <Card style={{ 
                    borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
                    backgroundColor: 'color-mix(in oklch, var(--card) 80%, transparent)'
                  }}>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {data.leadCapture.contact.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                          <a href={`tel:${data.leadCapture.contact.phone}`} className="hover:underline">
                            {data.leadCapture.contact.phone}
                          </a>
                        </div>
                      )}
                      {data.leadCapture.contact.email && (
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                          <a href={`mailto:${data.leadCapture.contact.email}`} className="hover:underline">
                            {data.leadCapture.contact.email}
                          </a>
                        </div>
                      )}
                      {data.leadCapture.contact.address && (
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 mt-0.5" style={{ color: 'var(--primary)' }} />
                          <address className="not-italic leading-relaxed">
                            {data.leadCapture.contact.address}
                          </address>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12" style={{ 
          borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
          backgroundColor: 'color-mix(in oklch, var(--muted) 30%, transparent)'
        }}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                       style={{ 
                         background: 'linear-gradient(135deg, var(--primary), var(--accent))'
                       }}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-xl">{data.footer.logo}</span>
                </div>
                <p style={{ color: 'var(--muted-foreground)' }}>
                  {data.footer.description}
                </p>
                <div className="space-y-2">
                  {data.footer.contact.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                      <a href={`tel:${data.footer.contact.phone}`} className="hover:underline">
                        {data.footer.contact.phone}
                      </a>
                    </div>
                  )}
                  {data.footer.contact.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                      <a href={`mailto:${data.footer.contact.email}`} className="hover:underline">
                        {data.footer.contact.email}
                      </a>
                    </div>
                  )}
                  {data.footer.contact.address && (
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="w-4 h-4 mt-0.5" style={{ color: 'var(--primary)' }} />
                      <address className="not-italic">
                        {data.footer.contact.address}
                      </address>
                    </div>
                  )}
                </div>
              </div>

              {Object.entries(data.footer.links).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-4 capitalize">{category}</h3>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                    {links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="hover:text-foreground transition-colors">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Separator className="mb-8" style={{ backgroundColor: 'var(--border)' }} />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                {data.footer.copyright}
              </p>
              {data.footer.social && data.footer.social.length > 0 && (
                <div className="flex items-center gap-4">
                  {data.footer.social.map((social) => {
                    const Icon = social.icon
                    return (
                      <Button key={social.platform} variant="ghost" size="sm" asChild>
                        <a href={social.href} aria-label={social.platform}>
                          <Icon className="w-4 h-4" />
                        </a>
                      </Button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default ModernLandingPageTemplate