# Minimalist SaaS Template

This is a clean, minimalist SaaS template with its own unique styling, colors, and fonts. The template preserves all the original design elements from the minimalist SaaS template with a focus on simplicity and clarity.

## Features

- **Clean Design**: Minimalist white/gray color palette with subtle teal accents
- **Typography**: Inter font for clean, professional text
- **Light Theme Focus**: Designed primarily for light mode with elegant dark mode support
- **Simple Layout**: Clean grid-based layout with plenty of whitespace
- **Professional Components**: Hero, features, testimonials, and pricing sections
- **Responsive Design**: Fully responsive layout that works on all devices

## Design Philosophy

The minimalist template follows these key principles:
- **Less is More**: Clean, uncluttered interface with focus on content
- **Subtle Colors**: Muted teal primary color with neutral grays
- **Professional Typography**: Inter font for excellent readability
- **Grid-First Design**: Organized, structured layouts
- **High Contrast**: Excellent readability with proper color contrast

## Components Included

- `CustomHero`: Clean hero section with customizable content
- `Features`: Feature grid with icons and descriptions
- `Testimonials`: Customer testimonial cards with avatars
- `Pricing`: Simple pricing table with feature lists

## Usage

### Option 1: With Theme Provider (Recommended)

```tsx
import MinimalistSaasTemplateWithProvider from '@/components/MinimalistSaasTemplateWithProvider'

export default function YourPage() {
  return (
    <MinimalistSaasTemplateWithProvider 
      brandName="YourBrand"
      brandDescription="Built for efficiency and trust."
      heroTitle="Your custom hero title"
      heroSubtitle="Your custom subtitle"
      ctaPrimary="Start your journey"
      ctaSecondary="Schedule a demo"
      footerText="Free trial available."
    />
  )
}
```

### Option 2: Without Theme Provider

```tsx
import MinimalistSaasTemplate from '@/components/MinimalistSaasTemplate'
import { ThemeProvider } from '@/components/teamplates/sass/minimalist/components/theme-provider'

export default function YourPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <MinimalistSaasTemplate 
        brandName="YourBrand"
        heroTitle="Your custom hero title"
        // ... other props
      />
    </ThemeProvider>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brandName` | string | "Acme Workflows" | Your brand/company name |
| `brandDescription` | string | "Built for productivity and trust." | Description shown in footer |
| `heroTitle` | string | "Streamline professional workflows..." | Main hero title |
| `heroSubtitle` | string | "Acme Workflows is a minimalist platform..." | Hero subtitle/description |
| `ctaPrimary` | string | "Start free trial" | Primary call-to-action button text |
| `ctaSecondary` | string | "Book a demo" | Secondary call-to-action button text |
| `footerText` | string | "No credit card required..." | Text below CTA buttons |

## Styling

The template uses its own CSS variables and custom styles that won't interfere with your main application styles. All styles are scoped to the `.minimalist-saas-template` class.

### Key Design Elements

- **Primary Color**: Muted teal (`oklch(0.72 0.09 200)`)
- **Background**: Pure white (`oklch(1 0 0)`) in light mode, dark gray in dark mode
- **Secondary**: Very light gray (`oklch(0.97 0 0)`)
- **Accent**: Light teal-tinted gray (`oklch(0.97 0.02 200)`)
- **Font**: Inter for clean, professional typography
- **Border Radius**: 0.625rem (10px) for subtle rounded corners

### Color Philosophy

- **Professional**: Muted, professional colors that inspire trust
- **Minimal**: Very subtle color variations with high contrast
- **Accessible**: High contrast ratios for excellent readability
- **Clean**: Lots of whitespace and breathing room

## Sections

### Hero Section
- Navigation bar with brand logo and menu
- Large headline with customizable title
- Call-to-action buttons
- Clean grid visualization

### Features Section
- 4-column grid of feature cards
- Icons with descriptions
- Professional layout with hover effects

### Testimonials Section
- Customer testimonial cards
- Avatar images with names and roles
- Clean card-based layout

### Pricing Section
- 3-tier pricing table
- Feature lists with checkmarks
- Highlighted featured plan option

### Footer
- Simple footer with links
- Copyright and brand information
- Clean, minimal design

## Example Page

Visit `/minimalist-template` to see the template in action with custom branding.

## File Structure

```
src/components/
├── MinimalistSaasTemplate.tsx              # Main template component
├── MinimalistSaasTemplate.css              # Template-specific styles
├── MinimalistSaasTemplateWithProvider.tsx  # Template with theme provider
├── minimalist/
│   └── CustomHero.tsx                      # Customizable hero component
└── teamplates/sass/minimalist/components/  # Original components
    ├── features.tsx
    ├── testimonials.tsx
    ├── pricing.tsx
    └── theme-provider.tsx
```

## Dependencies

The template requires these dependencies:

- `next-themes` - For theme switching
- `lucide-react` - For icons
- `geist` - For Geist Mono font
- `@radix-ui/*` - For UI components
- `next/font/google` - For Google Fonts (Inter)

## Customization

You can customize the template by:

1. **Modifying Colors**: Update CSS variables in `MinimalistSaasTemplate.css`
2. **Changing Content**: Pass different props to the component
3. **Adding Sections**: Extend the component with additional sections
4. **Styling**: Override styles using CSS classes with higher specificity

## Color Scheme

### Light Mode
- Background: Pure white
- Text: Near black
- Primary: Muted teal
- Secondary: Light gray
- Borders: Light gray

### Dark Mode
- Background: Dark gray
- Text: Near white
- Primary: White
- Secondary: Medium gray
- Borders: Medium gray

## Best Practices

- Keep content concise and focused
- Use high-quality images in testimonials
- Maintain consistent spacing and alignment
- Test in both light and dark modes
- Ensure proper contrast ratios for accessibility

## Notes

- The template maintains its own color scheme and won't interfere with your main app styles
- Designed primarily for light mode with elegant dark mode support
- All components are client-side rendered (`"use client"`)
- Theme system works independently from your main app theme
- The template is fully self-contained and portable
- Optimized for professional B2B SaaS applications
