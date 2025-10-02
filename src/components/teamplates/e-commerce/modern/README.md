# Modern E-commerce Landing Page Template

A dynamic, fully customizable landing page template designed for modern e-commerce businesses. Built with Next.js, TypeScript, and Tailwind CSS, featuring a vibrant orange and fresh green color scheme with warm, professional aesthetics.

## Features

- 🎨 **Modern Design System**: Vibrant orange primary (#ff6b35), fresh green accent (#4ade80), warm off-white background
- 🏗️ **Component-Based Architecture**: Every section is a reusable component with props
- 🎯 **E-commerce Focused**: Optimized for online stores, SaaS platforms, and digital commerce
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Performance Optimized**: Built with Next.js best practices
- 🔧 **TypeScript Support**: Full type safety and IntelliSense
- 🎭 **Modern Animations**: Subtle animations and hover effects
- 🎨 **OKLCH Color System**: Modern color space for consistent, vibrant colors

## Template Sections

### 1. Header
- Compact navigation with contact CTA
- Breadcrumbs for deeper pages
- Sticky positioning with backdrop blur

### 2. Hero Section
- H1 with target keyword highlighting
- Compelling subheadline
- Primary CTA: "Get a free strategy call"
- Optional secondary CTA with video play button
- Animated background elements

### 3. Credibility Strip
- Client logos display
- Key metric (e.g., "+$15M in client revenue")
- Social proof elements

### 4. Services Section
- Top 3 services as cards
- One-line outcome descriptions
- "See work" links with hover effects
- Icon integration with Lucide React

### 5. Case Study Section
- Featured performance metric
- Client quote with photo/details
- Link to full case study
- Visual elements with images

### 6. How We Work Section
- 3-step process visualization
- Step numbers with icons
- Clear descriptions and visuals
- Connected workflow design

### 7. Testimonials Section
- Client quotes with ratings
- Photos and company logos
- Optional video testimonial
- Grid layout with cards

### 8. Pricing Section
- Transparent price ranges
- Feature comparisons
- "Custom" option available
- Featured package highlighting

### 9. Lead Capture Section
- Contact form with minimal fields
- Calendar widget integration
- "Next Availability" indicator
- Contact information display

### 10. Footer
- Contact information
- Sitemap links (privacy, services, blog)
- Multi-column layout
- Brand description

## Installation

1. Copy the template files to your project:
```bash
src/components/templates/e-commerce/modern/
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
import { ModernLandingPageTemplate } from '@/components/templates/e-commerce/modern'
import { modernLandingPageExampleData } from '@/components/templates/e-commerce/modern'

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
    logo: "YourBrand",
    navigation: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" }
    ],
    contactCta: {
      label: "Get Started",
      href: "#contact"
    }
  },
  hero: {
    badge: "E-commerce Growth",
    headline: "Scale Your Online Store with Data-Driven Marketing",
    targetKeyword: "Data-Driven Marketing",
    subheadline: "Increase revenue by 300% with our proven system",
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
import { Target, TrendingUp, Users } from 'lucide-react'
import { createModernServiceItem } from './modern'

const customServices = [
  createModernServiceItem(
    "Performance Marketing",
    "Achieve 4x ROAS through optimized campaigns",
    Target,
    "/services/marketing"
  ),
  createModernServiceItem(
    "Growth Analytics", 
    "Data-driven insights for 150% conversion increase",
    TrendingUp,
    "/services/analytics"
  ),
  createModernServiceItem(
    "Customer Success",
    "Build retention systems that generate 30% of revenue",
    Users,
    "/services/retention"
  )
]
```

### Custom Testimonials
```tsx
import { createModernTestimonial } from './modern'

const testimonials = [
  createModernTestimonial(
    "Amazing results! Revenue increased 400% in 6 months.",
    "Sarah Johnson",
    "CEO",
    "TechStart Inc",
    "/photos/sarah.jpg",
    "/logos/techstart.png",
    5
  )
]
```

## Customization

### Colors
The template uses OKLCH color variables that can be customized:

```css
--background: oklch(0.98 0.01 80); /* warm off-white */
--foreground: oklch(0.22 0.03 60); /* deep warm charcoal */
--primary: oklch(0.74 0.16 55); /* vibrant orange */
--accent: oklch(0.78 0.1 145); /* fresh green */
```

### Typography
Uses Poppins font family with weights 400, 500, 600, 700:

```css
--font-sans: var(--font-poppins);
```

### Animations
Built-in animation classes:
- `.animate-bounce-gentle` - Subtle bouncing
- `.animate-float` - Floating effect
- `.animate-fade-in-up` - Fade in from bottom

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
- Implements proper lazy loading
- Minimizes CSS-in-JS for better performance
- Uses semantic HTML for accessibility
- Optimized for Core Web Vitals

## Best Practices

### Content Strategy
- Keep headlines under 60 characters
- Use action-oriented CTAs
- Include specific metrics and results
- Showcase real client testimonials
- Provide clear value propositions

### SEO Optimization
- Use target keywords in headlines
- Include alt text for all images
- Implement proper heading hierarchy
- Add schema markup for testimonials
- Optimize meta descriptions

### Conversion Optimization
- Limit forms to essential fields
- Use social proof throughout
- Create urgency with availability indicators
- Test different CTA button colors
- A/B test headline variations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Follow the existing code style
2. Add TypeScript types for new features
3. Include examples in the usage file
4. Update documentation
5. Test on multiple devices

## License

This template is available under the MIT License. Feel free to use it in commercial projects.

---

**Ready to create high-converting e-commerce landing pages?** This template provides everything you need to build professional, modern landing pages that drive results for online businesses.