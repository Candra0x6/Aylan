"use client"

import React, { useState, useEffect } from 'react'
import { JetBrains_Mono, Inter } from "next/font/google"
import { ArrowRight, Github, Star, Users, Zap, Shield, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Import individual components
import { ThemeToggle } from './components/theme-toggle'
import { AnimatedCodeBlock } from './components/animated-code-block'
import { IntegrationDiagram } from './components/integration-diagram'
import { PricingTable } from './components/pricing-table'
import { ApiDocumentation } from './components/api-documentation'

// Font configurations matching the original layout
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const stats = [
  { label: "Deployments", value: "2M+", icon: Zap },
  { label: "Developers", value: "50K+", icon: Users },
  { label: "Uptime", value: "99.9%", icon: Shield },
  { label: "Integrations", value: "200+", icon: Database },
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy in seconds with our optimized build pipeline and global edge network.",
  },
  {
    icon: Database,
    title: "200+ Integrations",
    description: "Connect with your favorite tools and services with one-click integrations.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Automatically scale to millions of users across 50+ regions worldwide.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in security features with SOC 2 compliance and advanced threat protection.",
  },
]

export function ModernSaasTemplate() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // CSS variables as a style object matching the original modern design
  const modernStyles = {
    // Light theme variables
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
    '--chart-1': 'oklch(0.6 0.25 264)',
    '--chart-2': 'oklch(0.7 0.2 180)',
    '--chart-3': 'oklch(0.65 0.22 300)',
    '--chart-4': 'oklch(0.75 0.18 120)',
    '--chart-5': 'oklch(0.8 0.15 60)',
    '--radius': '0.75rem',
    '--sidebar': 'oklch(0.98 0.005 264)',
    '--sidebar-foreground': 'oklch(0.15 0.02 264)',
    '--sidebar-primary': 'oklch(0.6 0.25 264)',
    '--sidebar-primary-foreground': 'oklch(0.98 0.005 264)',
    '--sidebar-accent': 'oklch(0.95 0.01 264)',
    '--sidebar-accent-foreground': 'oklch(0.2 0.02 264)',
    '--sidebar-border': 'oklch(0.9 0.01 264)',
    '--sidebar-ring': 'oklch(0.6 0.25 264)',

    // Font variables
    '--font-sans': `${inter.style.fontFamily}, system-ui, sans-serif`,
    '--font-mono': `${jetbrainsMono.style.fontFamily}, ui-monospace, monospace`,

    // Apply base styling
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
        .modern-template {
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
          --chart-1: oklch(0.7 0.2 180);
          --chart-2: oklch(0.65 0.22 300);
          --chart-3: oklch(0.6 0.25 264);
          --chart-4: oklch(0.75 0.18 120);
          --chart-5: oklch(0.8 0.15 60);
          --sidebar: oklch(0.1 0.02 264);
          --sidebar-foreground: oklch(0.95 0.01 264);
          --sidebar-primary: oklch(0.7 0.2 180);
          --sidebar-primary-foreground: oklch(0.08 0.02 264);
          --sidebar-accent: oklch(0.15 0.02 264);
          --sidebar-accent-foreground: oklch(0.9 0.01 264);
          --sidebar-border: oklch(0.18 0.02 264);
          --sidebar-ring: oklch(0.7 0.2 180);
        }

        /* Custom animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(112, 255, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(112, 255, 255, 0.6); }
        }

        @keyframes code-typing {
          from { width: 0; }
          to { width: 100%; }
        }

        .modern-template .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .modern-template .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .modern-template .animate-code-typing {
          animation: code-typing 3s steps(40, end) infinite;
        }

        /* Grid pattern background */
        .modern-template .grid-pattern {
          background-image: linear-gradient(rgba(112, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(112, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      <div 
        className={`modern-template font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={modernStyles}
      >
        <div className="min-h-screen">
          {/* Navigation */}
          <nav className="sticky top-0 z-50 border-b backdrop-blur-sm" style={{ 
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
                  <span className="font-bold text-xl">DevFlow</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <a href="#features" className="transition-colors" style={{ 
                    color: 'var(--muted-foreground)'
                  }}>
                    Features
                  </a>
                  <a href="#integrations" className="transition-colors" style={{ 
                    color: 'var(--muted-foreground)'
                  }}>
                    Integrations
                  </a>
                  <a href="#pricing" className="transition-colors" style={{ 
                    color: 'var(--muted-foreground)'
                  }}>
                    Pricing
                  </a>
                  <a href="#docs" className="transition-colors" style={{ 
                    color: 'var(--muted-foreground)'
                  }}>
                    Docs
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <Badge variant="secondary" className="ml-1">
                    12.5k
                  </Badge>
                </Button>
                <ThemeToggle />
                <Button>Get Started</Button>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30"></div>
            <div
              className="absolute inset-0"
              style={{ 
                background: 'linear-gradient(135deg, color-mix(in oklch, var(--primary) 10%, transparent), transparent, color-mix(in oklch, var(--accent) 10%, transparent))',
                transform: `translateY(${scrollY * 0.5}px)` 
              }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge className="border-primary/20" style={{ 
                      backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                      color: 'var(--primary)'
                    }}>
                      ✨ Now with AI-powered deployments
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                      The complete platform to{" "}
                      <span 
                        className="bg-clip-text text-transparent"
                        style={{ 
                          background: 'linear-gradient(to right, var(--primary), var(--accent))',
                          WebkitBackgroundClip: 'text'
                        }}
                      >
                        build the web
                      </span>
                    </h1>
                    <p className="text-xl text-pretty leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      Your team&apos;s toolkit to stop configuring and start innovating. Securely build, deploy, and scale the
                      best web experiences with lightning speed.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" style={{ 
                      backgroundColor: 'var(--primary)', 
                      color: 'var(--primary-foreground)'
                    }}>
                      Get a demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary/20 bg-transparent" style={{
                      borderColor: 'color-mix(in oklch, var(--primary) 20%, transparent)'
                    }}>
                      Explore the Product
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                    {stats.map((stat) => {
                      const Icon = stat.icon
                      return (
                        <div key={stat.label} className="text-center">
                          <div className="flex justify-center mb-2">
                            <Icon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                          </div>
                          <div className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>{stat.value}</div>
                          <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{stat.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="relative">
                  <AnimatedCodeBlock />
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl animate-float"
                       style={{ 
                         background: 'linear-gradient(135deg, color-mix(in oklch, var(--primary) 20%, transparent), color-mix(in oklch, var(--accent) 20%, transparent))'
                       }}></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl animate-float"
                    style={{ 
                      background: 'linear-gradient(135deg, color-mix(in oklch, var(--accent) 20%, transparent), color-mix(in oklch, var(--primary) 20%, transparent))',
                      animationDelay: "1s" 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20" style={{ 
            backgroundColor: 'color-mix(in oklch, var(--muted) 30%, transparent)'
          }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="mb-4 border-primary/20" style={{ 
                  backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                  color: 'var(--primary)'
                }}>Features</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Faster iteration. More innovation.</h2>
                <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                  The platform for rapid progress. Let your team focus on shipping features instead of managing
                  infrastructure.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card
                      key={feature.title}
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
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Integrations Section */}
          <section id="integrations" className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="mb-4 border-primary/20" style={{ 
                  backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                  color: 'var(--primary)'
                }}>Integrations</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Make teamwork seamless</h2>
                <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                  Tools for your team and stakeholders to share feedback and iterate faster.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <IntegrationDiagram />
              </div>

              <div className="mt-12 text-center">
                <p className="mb-6" style={{ color: 'var(--muted-foreground)' }}>Trusted by developers at</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {["Netflix", "TripAdvisor", "Box", "eBay", "Shopify", "Stripe"].map((company) => (
                    <div key={company} className="text-2xl font-bold" style={{ color: 'var(--muted-foreground)' }}>
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20" style={{ 
            backgroundColor: 'color-mix(in oklch, var(--muted) 30%, transparent)'
          }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="mb-4 border-primary/20" style={{ 
                  backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                  color: 'var(--primary)'
                }}>Pricing</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Simple, transparent pricing</h2>
                <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                  Start free, scale as you grow. No hidden fees or surprise charges.
                </p>
              </div>

              <PricingTable />
            </div>
          </section>

          {/* API Documentation Section */}
          <section id="docs" className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="mb-4 border-primary/20" style={{ 
                  backgroundColor: 'color-mix(in oklch, var(--primary) 10%, transparent)', 
                  color: 'var(--primary)'
                }}>API Documentation</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Powerful APIs for developers</h2>
                <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                  Integrate DevFlow into your workflow with our comprehensive REST API.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <ApiDocumentation />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden" style={{ 
            background: 'linear-gradient(135deg, color-mix(in oklch, var(--primary) 10%, transparent), var(--background), color-mix(in oklch, var(--accent) 10%, transparent))'
          }}>
            <div className="absolute inset-0 grid-pattern opacity-20"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to build the future?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty" style={{ color: 'var(--muted-foreground)' }}>
                Join thousands of developers who ship faster with DevFlow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--primary-foreground)'
                }}>
                  Start building for free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" style={{
                  borderColor: 'color-mix(in oklch, var(--primary) 20%, transparent)'
                }}>
                  Talk to sales
                </Button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t py-12" style={{ 
            borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)',
            backgroundColor: 'color-mix(in oklch, var(--muted) 30%, transparent)'
          }}>
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                         style={{ 
                           background: 'linear-gradient(135deg, var(--primary), var(--accent))'
                         }}>
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl">DevFlow</span>
                  </div>
                  <p style={{ color: 'var(--muted-foreground)' }}>
                    The complete platform to build, deploy, and scale modern web applications.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Product</h3>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                    <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Developers</h3>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                    <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Examples</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2" style={{ color: 'var(--muted-foreground)' }}>
                    <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ 
                borderColor: 'color-mix(in oklch, var(--border) 50%, transparent)'
              }}>
                <p style={{ color: 'var(--muted-foreground)' }}>© 2025 DevFlow. All rights reserved.</p>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default ModernSaasTemplate