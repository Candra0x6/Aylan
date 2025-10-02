"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Github, Star, Users, Zap, Shield, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedCodeBlock } from "@/components/animated-code-block"
import { IntegrationDiagram } from "@/components/integration-diagram"
import { PricingTable } from "@/components/pricing-table"
import { ApiDocumentation } from "@/components/api-documentation"

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

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">DevFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">
                Integrations
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
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
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  ✨ Now with AI-powered deployments
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                  The complete platform to{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    build the web
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the
                  best web experiences with lightning speed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get a demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                  Explore the Product
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="flex justify-center mb-2">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <AnimatedCodeBlock />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Faster iteration. More innovation.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
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
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Integrations</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Make teamwork seamless</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tools for your team and stakeholders to share feedback and iterate faster.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <IntegrationDiagram />
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">Trusted by developers at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Netflix", "TripAdvisor", "Box", "eBay", "Shopify", "Stripe"].map((company) => (
                <div key={company} className="text-2xl font-bold text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Simple, transparent pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">API Documentation</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Powerful APIs for developers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Integrate DevFlow into your workflow with our comprehensive REST API.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ApiDocumentation />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to build the future?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of developers who ship faster with DevFlow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start building for free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 bg-transparent">
              Talk to sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">DevFlow</span>
              </div>
              <p className="text-muted-foreground">
                The complete platform to build, deploy, and scale modern web applications.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2025 DevFlow. All rights reserved.</p>
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
  )
}
