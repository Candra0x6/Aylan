# Dynamic Landing Page Template

A comprehensive, reusable landing page template built with Next.js and TypeScript that allows easy customization of content through props while maintaining consistent styling and professional design.

## Features

✅ **Complete Landing Page Structure** - All essential sections included  
✅ **Fully Dynamic** - Every piece of content can be customized via props  
✅ **Type-Safe** - Full TypeScript support with detailed interfaces  
✅ **Responsive Design** - Mobile-first approach with elegant desktop layouts  
✅ **SEO Optimized** - Semantic HTML and accessibility features  
✅ **Professional Styling** - Consistent with the elegant agency template design system  
✅ **Easy Integration** - Drop-in component with minimal setup required  

## Sections Included

### 1. Header/Navigation
- Sticky navigation with company logo
- Always-visible contact CTA button
- Breadcrumb navigation for deeper pages
- Mobile-responsive design

### 2. Hero Section
- Customizable H1 with target keyword integration
- Compelling subheading and value proposition
- Primary CTA button (defaults to "Get a free strategy call")
- Optional background image and badge text
- Parallax-ready background support

### 3. Credibility Strip
- Client logos display
- Key performance metric (e.g., "+$2M in client revenue")
- Social proof and trust indicators

### 4. Services Section
- Top 3 services displayed as cards
- Outcome-focused descriptions
- "See work" links for case studies
- Grid layout with hover effects

### 5. Featured Case Study
- Prominent performance metric display
- Client testimonial quote
- Client information and attribution
- Link to full case study
- Optional background image

### 6. How We Work Process
- 3-step process visualization
- Clear step-by-step breakdown
- Visual progress indicators
- Customizable icons and descriptions

### 7. Testimonials Section
- Multiple client testimonials
- Client photos and company information
- Star ratings support
- Optional video testimonial links
- Grid layout for multiple testimonials

### 8. Pricing/Packages Section
- Transparent pricing display
- Multiple package tiers
- Feature comparison lists
- Custom pricing option
- Clear CTAs for each package

### 9. Lead Capture Form
- Contact form with customizable fields
- Calendar widget embedding support
- "Next Availability" indicator
- Minimal, conversion-optimized design
- Form validation ready

### 10. Footer
- Company contact information
- Sitemap navigation links
- Social media links
- Privacy policy and legal links
- Professional layout with proper spacing

## Usage

### Basic Implementation

```tsx
import DynamicLandingPageTemplate, { LandingPageData } from './DynamicLandingPageTemplate'

const landingPageData: LandingPageData = {
  header: {
    logo: "Your Company Name",
    contactCta: "Get Free Consultation",
    contactLink: "#contact"
  },
  hero: {
    targetKeyword: "Your Target Keyword",
    headline: "Your Compelling Headline",
    subheading: "Your value proposition and key benefits"
  },
  // ... other sections
}

export default function MyLandingPage() {
  return <DynamicLandingPageTemplate data={landingPageData} />
}
```

### Advanced Usage with Customization

```tsx
import DynamicLandingPageTemplate from './DynamicLandingPageTemplate'
import { createMinimalLandingPageData } from './ExampleUsage'

export default function CustomLandingPage() {
  const customData = createMinimalLandingPageData({
    hero: {
      targetKeyword: "Digital Marketing Services",
      headline: "Grow Your Business with Proven Digital Marketing",
      subheading: "We help companies increase revenue through strategic digital marketing campaigns.",
      backgroundImage: "/images/custom-hero.jpg"
    },
    services: {
      title: "Our Marketing Services",
      items: [
        {
          title: "SEO Optimization",
          outcomeDescription: "Increase organic traffic by 300% in 6 months",
          workLink: "/case-studies/seo"
        }
        // ... more services
      ]
    }
  })

  return <DynamicLandingPageTemplate data={customData} />
}
```

## Data Structure

The template uses a comprehensive `LandingPageData` interface that defines all customizable content. Each section has its own sub-interface for type safety and better organization.

### Key Interfaces

- `LandingPageData` - Main data structure
- `HeaderData` - Navigation and branding
- `HeroData` - Hero section content
- `ServicesData` - Services section with items array
- `TestimonialsData` - Client testimonials
- `PricingData` - Pricing packages and options
- `FooterData` - Footer content and links

## Styling

The template inherits the elegant agency design system with:

- **Color Palette**: Navy, ivory, gold, and graphite
- **Typography**: Playfair Display (serif) for headings, Geist Sans for body text
- **Spacing**: Consistent padding and margins using Tailwind classes
- **Components**: Shadcn/ui components for form elements and UI patterns

## Customization Options

### Content Customization
Every text element, link, and image can be customized through the data props without touching the component code.

### Visual Customization
- Background images for hero and case study sections
- Client logos and testimonial photos
- Badge text and promotional elements
- Color scheme inheritance from parent template

### Layout Customization
- Show/hide pricing packages
- Toggle between form and calendar widget
- Conditional breadcrumb navigation
- Optional social links and contact information

## Best Practices

### SEO Optimization
- Use descriptive headlines with target keywords
- Include alt text for images
- Structure content with proper heading hierarchy
- Add meta descriptions and structured data

### Conversion Optimization
- Keep CTAs clear and action-oriented
- Use social proof and testimonials effectively
- Minimize form fields for better conversion
- Include trust indicators and credentials

### Content Strategy
- Focus on outcomes rather than features
- Use specific metrics and results
- Include diverse testimonials
- Keep copy scannable with bullet points

## Integration with Existing Projects

The template is designed to work seamlessly with:

- Next.js applications
- TypeScript projects
- Tailwind CSS styling
- Shadcn/ui component library

## File Structure

```
elegant/
├── DynamicLandingPageTemplate.tsx    # Main template component
├── ExampleUsage.tsx                  # Usage examples and sample data
├── types.ts                          # TypeScript interfaces
├── README.md                         # This documentation
└── reveal.tsx                        # Animation component (dependency)
```

## Dependencies

- React 18+
- Next.js 13+
- TypeScript
- Tailwind CSS
- Shadcn/ui components
- Lucide React icons
- Geist and Playfair Display fonts

## Performance Considerations

- Components use React.memo where appropriate
- Images should be optimized (Next.js Image component used)
- Lazy loading for non-critical sections
- Minimal JavaScript bundle impact

## Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

When modifying the template:

1. Maintain TypeScript strict mode compliance
2. Follow the existing component structure
3. Update interfaces when adding new props
4. Test across different screen sizes
5. Verify accessibility compliance
6. Update documentation for new features

## Troubleshooting

### Common Issues

**Missing styles**: Ensure Tailwind CSS is properly configured and the parent component includes the elegant agency CSS variables.

**Type errors**: Check that all required fields in the `LandingPageData` interface are provided.

**Images not loading**: Verify image paths are correct and accessible from your public directory.

**Form not working**: Implement form submission handling in your application (template provides the UI structure).

### Support

For questions or issues:
1. Check the example usage file for reference implementations
2. Verify your data structure matches the TypeScript interfaces
3. Ensure all dependencies are installed and up to date

This template provides a solid foundation for creating high-converting landing pages while maintaining the flexibility to adapt to different business needs and content requirements.