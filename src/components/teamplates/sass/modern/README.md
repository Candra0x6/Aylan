# Modern SaaS Landing Page Template

A sophisticated, dynamic landing page template designed for SaaS platforms and technology companies. Built with Next.js, TypeScript, and Tailwind CSS, featuring a modern design system with vibrant purples, teals, and advanced OKLCH color space.

## Features

- 🚀 **Modern Design System**: OKLCH color space with vibrant purple primary (#6366F1), teal accent (#06B6D4)
- 🏗️ **Component-Based Architecture**: Every section is a reusable component with props
- 🎯 **SaaS Optimized**: Perfect for developer tools, analytics platforms, and B2B SaaS
- 📱 **Fully Responsive**: Works seamlessly across all devices
- ⚡ **High Performance**: Built with Next.js best practices
- 🔧 **TypeScript Support**: Complete type safety and IntelliSense
- 🎭 **Advanced Animations**: Smooth transitions, floating elements, and pulse effects
- 🎨 **OKLCH Color System**: Future-proof color space for consistent, vibrant colors
- 🌙 **Dark Mode Ready**: Automatic theme switching with prefers-color-scheme

## Template Sections

### 1. Header
- Compact navigation with contact CTA
- Breadcrumbs for deeper pages
- Gradient logo with animated background

### 2. Hero Section
- H1 with target keyword highlighting
- Gradient text effects for key terms
- Primary CTA: "Get a free strategy call"
- Optional secondary CTA with play button
- Animated code block visualization

### 3. Credibility Strip
- Client logos display
- Key metric (e.g., "+$2M in client revenue")
- Prominent social proof section

### 4. Services Section
- Top 3 services as gradient cards
- One-line outcome descriptions
- "See work" links with arrow icons
- Hover animations and staggered loading

### 5. Case Study Section
- Featured performance metric
- Client quote with proper typography
- Link to full case study
- Split layout with visual element

### 6. How We Work Section
- 3-step process visualization
- Connecting lines between steps
- Icon-based step indicators
- Clear process descriptions

### 7. Testimonials Section
- Client quotes with star ratings
- Photo and logo integration
- Optional video testimonial links
- Grid layout with hover effects

### 8. Pricing Section
- Transparent price ranges
- Feature lists with checkmarks
- "Most Popular" highlighting
- Custom option available

### 9. Lead Capture Section
- Contact form with validation
- Calendar widget integration
- "Next Availability" indicator
- Complete contact information

### 10. Footer
- Company information
- Organized link categories
- Social media integration
- Contact details

## Installation

1. Copy the template files to your project:
```bash
src/components/templates/sass/modern/
├── ModernLandingPageTemplate.tsx
├── ModernExampleUsage.tsx
├── types.ts
├── index.ts
└── README.md
```

2. Install required dependencies:
```bash
npm install lucide-react @next/font
```

3. Import and use the template:
```tsx
import { ModernLandingPageTemplate } from '@/components/templates/sass/modern'
import { modernLandingPageExampleData } from '@/components/templates/sass/modern'

export default function MyLandingPage() {
  return <ModernLandingPageTemplate data={modernLandingPageExampleData} />
}
```

## Usage Examples

### Basic Usage
```tsx
import { ModernLandingPageTemplate, ModernLandingPageData } from './modern'

const myData: ModernLandingPageData = {
  header: {
    logo: "TechFlow",
    navigation: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" }
    ],
    contactCta: {
      label: "Get Started",
      href: "#contact"
    }
  },
  hero: {
    headline: "Build scalable applications with the ultimate developer platform",
    targetKeyword: "developer platform",
    subheadline: "Streamline your development workflow with AI-powered tools",
    primaryCta: {
      label: "Get a free strategy call",
      href: "#contact"
    }
  },
  // ... other sections
}

<ModernLandingPageTemplate data={myData} />
```

### Custom Service Items
```tsx
import { Zap, Target, Rocket } from 'lucide-react'
import { createModernServiceItem } from './modern'

const customServices = [
  createModernServiceItem(
    "AI-Powered Development",
    "Reduce coding time by 60% with intelligent code generation",
    Zap,
    "/case-studies/ai-development"
  ),
  createModernServiceItem(
    "Performance Monitoring", 
    "Improve app performance by 40% with real-time insights",
    Target,
    "/case-studies/performance"
  ),
  createModernServiceItem(
    "Seamless CI/CD Pipeline",
    "Deploy 10x faster with automated workflows",
    Rocket,
    "/case-studies/cicd"
  )
]
```

### Custom Testimonials
```tsx
import { createModernTestimonial } from './modern'

const testimonials = [
  createModernTestimonial(
    "TechFlow transformed our development process completely.",
    "Sarah Chen",
    "VP of Engineering",
    "InnovateCorp",
    "/photos/sarah.jpg",
    "/logos/innovatecorp.png",
    5,
    "https://youtube.com/watch?v=testimonial1"
  )
]
```

## Customization

### Colors
The template uses OKLCH color variables for vibrant, consistent colors:

```css
--primary: oklch(0.6 0.25 264); /* vibrant purple */
--accent: oklch(0.7 0.2 180); /* bright teal */
--background: oklch(0.98 0.005 264); /* light background */
--foreground: oklch(0.15 0.02 264); /* dark text */
```

### Typography
Uses Inter and JetBrains Mono fonts for modern, readable text:

```css
--font-sans: var(--font-inter);
--font-mono: var(--font-jetbrains-mono);
```

### Animations
Includes custom CSS animations for enhanced interactivity:

```css
/* Floating animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Pulse glow effect */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.3); }
  50% { box-shadow: 0 0 40px rgba(96, 165, 250, 0.6); }
}
```

## TypeScript Support

All components are fully typed with comprehensive interfaces:

```tsx
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
```

## Performance Considerations

- Uses Next.js Image component for optimized images
- Implements CSS-in-JS for scoped styling
- Optimized animations with GPU acceleration
- Lazy loading for improved Core Web Vitals
- Grid pattern backgrounds with optimal rendering

## Design Philosophy

### Vibrant & Modern
- Uses cutting-edge OKLCH color space
- Vibrant purples and teals for energy
- Gradient effects and advanced typography
- Modern UI patterns and interactions

### Tech-Forward Approach
- Code block visualizations
- Developer-focused imagery
- Grid patterns for structured feel
- Advanced CSS animations

### Professional Trust
- Clean typography hierarchy
- Consistent spacing patterns
- Subtle shadows and depth
- Polished interactive elements

## Best Practices

### Content Strategy
- Highlight technical benefits clearly
- Use specific metrics and outcomes
- Include developer-focused messaging
- Maintain consistent tone throughout

### Visual Hierarchy
- Use gradients to guide attention
- Leverage contrast for readability
- Group related elements effectively
- Maintain consistent spacing

### User Experience
- Smooth scroll behavior
- Logical information flow
- Clear call-to-action placement
- Responsive interaction design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Example Use Cases

### Perfect For:
- Developer platforms and tools
- SaaS analytics platforms
- API and integration services
- DevOps and deployment tools
- Data visualization platforms
- Enterprise software solutions
- Technical consulting services

### Key Benefits:
- Appeals to technical audiences
- Builds trust through modern design
- Showcases technical sophistication
- Converts through clear value props
- Scalable for enterprise needs

## Contributing

1. Follow the existing modern design principles
2. Add TypeScript types for new features
3. Include vibrant, tech-forward examples
4. Update documentation
5. Test across devices and browsers

## License

This template is available under the MIT License. Feel free to use it in commercial projects.

---

**Ready to build the future?** This template provides everything you need to create stunning, high-converting SaaS landing pages that appeal to technical audiences and showcase your platform's capabilities.