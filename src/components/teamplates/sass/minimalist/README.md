# Minimalist SaaS Landing Page Template

A clean, dynamic landing page template designed for SaaS platforms and productivity tools. Built with Next.js, TypeScript, and Tailwind CSS, featuring a minimalist design system with muted teal accents and clean grid-based layouts.

## Features

- 🎨 **Minimalist Design System**: Muted teal primary (#72B2D9), clean whites, subtle grays
- 🏗️ **Component-Based Architecture**: Every section is a reusable component with props
- 🎯 **SaaS Focused**: Optimized for productivity tools, workflow platforms, and B2B SaaS
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Performance Optimized**: Built with Next.js best practices
- 🔧 **TypeScript Support**: Full type safety and IntelliSense
- 🎭 **Clean Animations**: Subtle hover effects and transitions
- 🎨 **OKLCH Color System**: Modern color space for consistent, professional colors
- 📐 **Grid-First Design**: Structured layouts that communicate clarity and organization

## Template Sections

### 1. Header
- Compact navigation with contact CTA
- Breadcrumbs for deeper pages
- Clean border separation with minimal visual noise

### 2. Hero Section
- H1 with target keyword highlighting
- Clear, focused messaging
- Primary CTA: "Get a free strategy call"
- Optional secondary CTA with play button
- Minimalist visual grid representation

### 3. Credibility Strip
- Client logos display
- Key metric (e.g., "+$2M in client revenue saved")
- Simple, understated social proof

### 4. Services Section
- Top 3 services as clean cards
- One-line outcome descriptions
- "See work" links with minimal styling
- Icon integration with subtle backgrounds

### 5. Case Study Section
- Featured performance metric
- Client quote with clean typography
- Link to full case study
- Simple image presentation

### 6. How We Work Section
- 3-step process visualization
- Numbered steps with connecting lines
- Clear descriptions without visual clutter
- Optional icons for each step

### 7. Testimonials Section
- Client quotes with star ratings
- Minimal photo and logo presentation
- Optional video testimonial
- Clean card layout without shadows

### 8. Pricing Section
- Transparent price ranges
- Simple feature lists with checkmarks
- "Custom" option available
- Subtle highlighting for featured plans

### 9. Lead Capture Section
- Contact form with essential fields only
- Calendar widget integration
- "Next Availability" indicator
- Contact information in clean layout

### 10. Footer
- Contact information
- Organized sitemap links
- Minimal visual treatment
- Essential links only

## Installation

1. Copy the template files to your project:
```bash
src/components/templates/saas/minimalist/
├── MinimalistLandingPageTemplate.tsx
├── MinimalistExampleUsage.tsx
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
import { MinimalistLandingPageTemplate } from '@/components/templates/saas/minimalist'
import { minimalistLandingPageExampleData } from '@/components/templates/saas/minimalist'

export default function MyLandingPage() {
  return <MinimalistLandingPageTemplate data={minimalistLandingPageExampleData} />
}
```

## Usage Examples

### Basic Usage
```tsx
import { MinimalistLandingPageTemplate, MinimalistLandingPageData } from './minimalist'

const myData: MinimalistLandingPageData = {
  header: {
    logo: "YourSaaS",
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
    headline: "Streamline Your Workflows with Clean Automation",
    targetKeyword: "Workflows",
    subheadline: "Simple, focused tools for productive teams",
    primaryCta: {
      label: "Get a free strategy call",
      href: "#contact"
    }
  },
  // ... other sections
}

<MinimalistLandingPageTemplate data={myData} />
```

### Custom Service Items
```tsx
import { Workflow, Gauge, Brain } from 'lucide-react'
import { createMinimalistServiceItem } from './minimalist'

const customServices = [
  createMinimalistServiceItem(
    "Workflow Automation",
    "Reduce manual tasks by 80% with intelligent automation",
    Workflow,
    "/features/automation"
  ),
  createMinimalistServiceItem(
    "Performance Analytics", 
    "Clear visibility into team productivity metrics",
    Gauge,
    "/features/analytics"
  ),
  createMinimalistServiceItem(
    "Smart Integrations",
    "Connect tools seamlessly with 200+ integrations",
    Brain,
    "/features/integrations"
  )
]
```

### Custom Testimonials
```tsx
import { createMinimalistTestimonial } from './minimalist'

const testimonials = [
  createMinimalistTestimonial(
    "Clean, simple, and exactly what our team needed.",
    "Sarah Kim",
    "Product Manager",
    "TechCorp",
    "/photos/sarah.jpg",
    "/logos/techcorp.png",
    5
  )
]
```

## Customization

### Colors
The template uses OKLCH color variables that can be customized:

```css
--background: oklch(1 0 0); /* pure white */
--foreground: oklch(0.145 0 0); /* near black */
--primary: oklch(0.72 0.09 200); /* muted teal */
--accent: oklch(0.97 0.02 200); /* very light teal-tinted gray */
```

### Typography
Uses Inter font family for clean, readable text:

```css
--font-sans: var(--font-inter);
```

### Grid Elements
Minimalist visual representations using clean grids:

```tsx
<div className="grid grid-cols-3 gap-3">
  <div className="h-24 rounded-lg bg-accent" />
  <div className="h-24 rounded-lg bg-accent" />
  <div className="h-24 rounded-lg bg-accent" />
</div>
```

## TypeScript Support

All components are fully typed with comprehensive interfaces:

```tsx
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
```

## Performance Considerations

- Uses Next.js Image component for optimized images
- Minimal CSS-in-JS for better performance
- Clean HTML structure for accessibility
- Optimized for Core Web Vitals
- Reduced visual complexity for faster loading

## Design Philosophy

### Less is More
- Focuses on essential elements only
- Removes visual clutter and distractions
- Uses whitespace effectively
- Emphasizes content over decoration

### Grid-First Approach
- Structured layouts communicate organization
- Visual consistency across all sections
- Clean alignment and spacing
- Professional, trustworthy appearance

### Subtle Interactions
- Hover effects are minimal but meaningful
- Transitions are smooth and purposeful
- No unnecessary animations or movement
- Focus remains on content and functionality

## Best Practices

### Content Strategy
- Keep messaging clear and concise
- Focus on benefits over features
- Use specific metrics and outcomes
- Maintain consistent tone throughout

### Visual Hierarchy
- Use typography to guide attention
- Leverage whitespace for clarity
- Group related elements together
- Maintain consistent spacing patterns

### User Experience
- Minimize cognitive load
- Provide clear navigation paths
- Reduce form friction
- Focus on essential actions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Example Use Cases

### Perfect For:
- B2B SaaS platforms
- Productivity tools
- Workflow automation
- Project management software
- Developer tools
- Professional services
- Consulting platforms

### Key Benefits:
- Builds trust through clean design
- Reduces decision fatigue
- Focuses on core value proposition
- Appeals to professional audiences
- Converts through clarity, not flashiness

## Contributing

1. Follow the existing minimalist design principles
2. Add TypeScript types for new features
3. Include clean, focused examples
4. Update documentation
5. Test across devices and browsers

## License

This template is available under the MIT License. Feel free to use it in commercial projects.

---

**Ready to build trust through simplicity?** This template provides everything you need to create professional, high-converting SaaS landing pages that communicate value through clarity and focus.