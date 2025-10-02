/**
 * Fallback Content System
 * Provides high-quality fallback content when AI generation fails
 */

import type { LandingPageContent, AIContentRequest } from '@/types/ai';

export class FallbackContentGenerator {
  private request: AIContentRequest;

  constructor(request: AIContentRequest) {
    this.request = request;
  }

  generateFallbackContent(): LandingPageContent {
    return {
      hero: this.getFallbackHero(),
      features: this.getFallbackFeatures(),
      about: this.getFallbackAbout(),
      cta: this.getFallbackCTA(),
      testimonials: this.getFallbackTestimonials(),
      metadata: this.getFallbackMetadata(),
    };
  }

  private getFallbackHero() {
    const templates = {
      saas: {
        minimalist: {
          headline: "Streamline Your Workflow",
          subheadline: "The simple solution that helps you work smarter, not harder",
          ctaText: "Start Free Trial"
        },
        modern: {
          headline: "Transform Your Business",
          subheadline: "Next-generation software designed for modern teams",
          ctaText: "Get Started"
        },
        bold: {
          headline: "Dominate Your Market",
          subheadline: "Powerful tools that give you the competitive edge you need",
          ctaText: "Claim Your Advantage"
        },
        elegant: {
          headline: "Excellence in Software",
          subheadline: "Sophisticated solutions crafted for discerning professionals",
          ctaText: "Experience Quality"
        },
        playful: {
          headline: "Work Just Got Fun",
          subheadline: "The delightfully simple way to boost your productivity",
          ctaText: "Let's Go!"
        }
      },
      ecommerce: {
        minimalist: {
          headline: "Shop with Confidence",
          subheadline: "Curated products delivered to your door",
          ctaText: "Shop Now"
        },
        modern: {
          headline: "Discover What's New",
          subheadline: "The latest trends and must-have items for modern living",
          ctaText: "Explore Collection"
        },
        bold: {
          headline: "Unbeatable Selection",
          subheadline: "Premium products at prices that can't be matched",
          ctaText: "Shop Deals"
        },
        elegant: {
          headline: "Luxury Redefined",
          subheadline: "Exceptional quality and timeless style for the sophisticated buyer",
          ctaText: "Browse Premium"
        },
        playful: {
          headline: "Shopping Made Happy",
          subheadline: "Find amazing products that bring joy to your everyday life",
          ctaText: "Start Shopping"
        }
      },
      agency: {
        minimalist: {
          headline: "Results That Matter",
          subheadline: "Strategic solutions that drive real business growth",
          ctaText: "Get Proposal"
        },
        modern: {
          headline: "Innovation Delivered",
          subheadline: "Cutting-edge strategies for forward-thinking businesses",
          ctaText: "Start Project"
        },
        bold: {
          headline: "Dominate Your Industry",
          subheadline: "Aggressive strategies that put you ahead of the competition",
          ctaText: "Take Action"
        },
        elegant: {
          headline: "Strategic Excellence",
          subheadline: "Refined expertise delivering sophisticated business solutions",
          ctaText: "Partner With Us"
        },
        playful: {
          headline: "Let's Create Magic",
          subheadline: "Creative solutions that make your brand shine bright",
          ctaText: "Start Creating"
        }
      },
      corporate: {
        minimalist: {
          headline: "Business Simplified",
          subheadline: "Professional solutions for modern enterprises",
          ctaText: "Learn More"
        },
        modern: {
          headline: "Enterprise Excellence",
          subheadline: "Advanced solutions for today's leading organizations",
          ctaText: "Schedule Demo"
        },
        bold: {
          headline: "Industry Leadership",
          subheadline: "Proven strategies that position your company at the forefront",
          ctaText: "Lead Your Market"
        },
        elegant: {
          headline: "Distinguished Service",
          subheadline: "Premium solutions tailored for prestigious organizations",
          ctaText: "Request Consultation"
        },
        playful: {
          headline: "Business, Reimagined",
          subheadline: "Fresh approaches that make corporate success enjoyable",
          ctaText: "Get Started"
        }
      }
    };

    const template = templates[this.request.businessCategory]?.[this.request.stylePreference] 
      || templates.saas.modern;

    return {
      ...template,
      backgroundText: "Trusted by thousands of businesses worldwide"
    };
  }

  private getFallbackFeatures() {
    const featuresByCategory = {
      saas: [
        { title: "Easy Integration", description: "Connect seamlessly with your existing tools and workflows", icon: "plug" },
        { title: "Real-time Analytics", description: "Track performance and make data-driven decisions instantly", icon: "bar-chart" },
        { title: "Team Collaboration", description: "Work together efficiently with built-in collaboration features", icon: "users" },
        { title: "Enterprise Security", description: "Bank-level security keeps your data safe and compliant", icon: "shield" }
      ],
      ecommerce: [
        { title: "Fast Shipping", description: "Get your orders delivered quickly with our express shipping options", icon: "truck" },
        { title: "Secure Payments", description: "Shop with confidence using our encrypted payment system", icon: "credit-card" },
        { title: "Easy Returns", description: "30-day hassle-free returns on all purchases", icon: "refresh-cw" },
        { title: "24/7 Support", description: "Our customer service team is always here to help", icon: "headphones" }
      ],
      agency: [
        { title: "Strategic Planning", description: "Comprehensive strategies tailored to your business goals", icon: "target" },
        { title: "Creative Excellence", description: "Award-winning creative work that captures attention", icon: "palette" },
        { title: "Proven Results", description: "Track record of delivering measurable business outcomes", icon: "trending-up" },
        { title: "Expert Team", description: "Industry veterans with decades of combined experience", icon: "award" }
      ],
      corporate: [
        { title: "Scalable Solutions", description: "Enterprise-grade systems that grow with your business", icon: "layers" },
        { title: "Global Support", description: "Worldwide coverage with local expertise and support", icon: "globe" },
        { title: "Compliance Ready", description: "Meet industry standards and regulatory requirements", icon: "check-circle" },
        { title: "24/7 Monitoring", description: "Continuous monitoring ensures optimal performance", icon: "activity" }
      ]
    };

    return {
      sectionTitle: "Why Choose Us",
      features: featuresByCategory[this.request.businessCategory] || featuresByCategory.saas
    };
  }

  private getFallbackAbout() {
    const aboutTemplates = {
      saas: {
        sectionTitle: "Our Mission",
        description: "We're dedicated to simplifying complex workflows and empowering teams to achieve more with innovative software solutions.",
        highlights: [
          "10+ years of industry experience",
          "500,000+ satisfied users worldwide",
          "99.9% uptime reliability guarantee"
        ]
      },
      ecommerce: {
        sectionTitle: "Our Story",
        description: "Founded on the belief that shopping should be effortless and enjoyable, we curate the best products for modern lifestyles.",
        highlights: [
          "Curated by product experts",
          "1M+ happy customers served",
          "Award-winning customer service"
        ]
      },
      agency: {
        sectionTitle: "Our Expertise",
        description: "We combine strategic thinking with creative execution to deliver campaigns that not only look great but drive real results.",
        highlights: [
          "50+ industry awards won",
          "200% average ROI improvement",
          "Fortune 500 client portfolio"
        ]
      },
      corporate: {
        sectionTitle: "Our Commitment",
        description: "We partner with organizations to transform their operations through innovative solutions and unwavering support.",
        highlights: [
          "ISO 27001 certified security",
          "Global enterprise solutions",
          "24/7 dedicated support team"
        ]
      }
    };

    return aboutTemplates[this.request.businessCategory] || aboutTemplates.saas;
  }

  private getFallbackCTA() {
    const ctaTemplates = {
      saas: {
        title: "Ready to Get Started?",
        description: "Join thousands of teams already using our platform to work more efficiently.",
        buttonText: "Start Free Trial",
        secondaryText: "No credit card required"
      },
      ecommerce: {
        title: "Start Shopping Today",
        description: "Discover amazing products and enjoy fast, secure delivery to your door.",
        buttonText: "Shop Now",
        secondaryText: "Free shipping on orders over $50"
      },
      agency: {
        title: "Let's Work Together",
        description: "Ready to take your business to the next level? We're here to help.",
        buttonText: "Get Proposal",
        secondaryText: "Free consultation included"
      },
      corporate: {
        title: "Transform Your Business",
        description: "See how our enterprise solutions can streamline your operations.",
        buttonText: "Schedule Demo",
        secondaryText: "Trusted by industry leaders"
      }
    };

    return ctaTemplates[this.request.businessCategory] || ctaTemplates.saas;
  }

  private getFallbackTestimonials() {
    const testimonialTemplates = {
      saas: {
        sectionTitle: "What Our Users Say",
        testimonials: [
          {
            quote: "This platform has completely transformed how our team collaborates and manages projects.",
            author: "Sarah Johnson",
            position: "Project Manager",
            company: "TechCorp"
          },
          {
            quote: "The analytics features helped us increase our productivity by 40% in just three months.",
            author: "Michael Chen",
            position: "Operations Director",
            company: "GrowthLabs"
          }
        ]
      },
      ecommerce: {
        sectionTitle: "Customer Reviews",
        testimonials: [
          {
            quote: "Amazing quality products and lightning-fast shipping. Couldn't be happier!",
            author: "Emily Rodriguez",
            position: "Marketing Specialist",
            company: "Creative Agency"
          },
          {
            quote: "The customer service is outstanding and the return policy gives me complete confidence.",
            author: "David Park",
            position: "Entrepreneur",
            company: "StartupX"
          }
        ]
      },
      agency: {
        sectionTitle: "Client Success Stories",
        testimonials: [
          {
            quote: "Their strategic approach helped us increase brand awareness by 300% in six months.",
            author: "Lisa Thompson",
            position: "CMO",
            company: "RetailPlus"
          },
          {
            quote: "The creative work exceeded our expectations and delivered exceptional ROI.",
            author: "James Wilson",
            position: "Brand Director",
            company: "InnovaCorp"
          }
        ]
      },
      corporate: {
        sectionTitle: "Client Testimonials",
        testimonials: [
          {
            quote: "Their enterprise solution streamlined our operations and reduced costs by 25%.",
            author: "Robert Kumar",
            position: "CTO",
            company: "GlobalTech"
          },
          {
            quote: "Outstanding support and reliability. They're true partners in our success.",
            author: "Amanda Foster",
            position: "VP Operations",
            company: "Enterprise Solutions"
          }
        ]
      }
    };

    return testimonialTemplates[this.request.businessCategory] || testimonialTemplates.saas;
  }

  private getFallbackMetadata() {
    const industry = this.request.industry;
    const category = this.request.businessCategory;
    
    return {
      title: `Professional ${category} Solutions | ${industry} Industry Leader`,
      description: `Transform your business with our proven ${category} solutions. Trusted by industry leaders, designed for ${this.request.targetAudience}.`,
      keywords: [
        category,
        industry,
        'business solutions',
        'professional services',
        this.request.targetAudience,
        'industry leader',
        'trusted platform'
      ]
    };
  }
}