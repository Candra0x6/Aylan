# Elegant E-commerce Template

This is a sophisticated, elegant e-commerce template with its own unique styling, colors, and fonts. The template preserves all the original design elements from the elegant e-commerce template with a focus on luxury and premium aesthetics.

## Features

- **Luxury Design**: Elegant dark theme with gold accents and premium aesthetics
- **Premium Typography**: Bodoni Moda serif font for headings and Work Sans for body text
- **Dark Theme Focus**: Designed primarily for dark mode with sophisticated styling
- **E-commerce Components**: Hero, product grid, reviews, trust badges, and featured logos
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Cinematic Hero**: Full-screen hero section with background image overlay

## Design Philosophy

The elegant template follows these key principles:
- **Premium Aesthetics**: Dark, sophisticated color palette with gold accents
- **Luxury Typography**: Serif headings for elegance, sans-serif body for readability  
- **Visual Hierarchy**: Strong contrast and elegant proportions
- **Product Focus**: Designed to showcase premium products beautifully
- **Trust Building**: Professional layout that inspires confidence

## Components Included

- `CustomHero`: Cinematic hero section with background image and overlay
- `FeaturedLogos`: Press mentions and media coverage section
- `ProductGrid`: Elegant product cards with hover effects and tags
- `CustomReviews`: Customer testimonial cards with star ratings
- `TrustBadges`: Trust signals for security, guarantee, and delivery

## Usage

### Option 1: With Theme Provider (Recommended)

```tsx
import ElegantEcommerceTemplateWithProvider from '@/components/ElegantEcommerceTemplateWithProvider'

export default function YourPage() {
  return (
    <ElegantEcommerceTemplateWithProvider 
      brandName="Luxury Brand"
      heroTitle="Experience luxury in every detail"
      heroSubtitle="Premium products, elegant design, and uncompromising quality."
      ctaPrimary="Shop Collection"
      ctaSecondary="View Catalog"
      productsTitle="Curated luxury essentials"
      productsSubtitle="Hand-selected premium products that elevate your lifestyle."
      reviewsTitle="Praised by connoisseurs"
      reviewsSubtitle="Exceptional quality recognized by those who demand the finest."
    />
  )
}
```

### Option 2: Without Theme Provider

```tsx
import ElegantEcommerceTemplate from '@/components/ElegantEcommerceTemplate'
import { ThemeProvider } from '@/components/teamplates/e-commerce/elegant/components/theme-provider'

export default function YourPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ElegantEcommerceTemplate 
        brandName="Luxury Brand"
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
| `brandName` | string | "Premium Store" | Your brand/store name |
| `heroTitle` | string | "Build a brand that feels premium..." | Main hero headline |
| `heroSubtitle` | string | "Elegant tools, refined aesthetics..." | Hero description |
| `ctaPrimary` | string | "Shop Premium Tools" | Primary call-to-action button |
| `ctaSecondary` | string | "Explore Collections" | Secondary call-to-action button |
| `productsTitle` | string | "Premium tools for modern entrepreneurs" | Products section title |
| `productsSubtitle` | string | "Curated software and essentials..." | Products section description |
| `reviewsTitle` | string | "Loved by modern founders" | Reviews section title |
| `reviewsSubtitle` | string | "Real customers, real results..." | Reviews section description |

## Styling

The template uses its own CSS variables and custom styles that won't interfere with your main application styles. All styles are scoped to the `.elegant-ecommerce-template` class.

### Key Design Elements

- **Primary Color**: Near black (`oklch(0.205 0 0)`)
- **Background**: Pure white in light mode, near-black (`oklch(0.14 0 0)`) in dark mode
- **Accent Color**: Gold (`oklch(0.8 0.12 85)`) for premium highlights
- **Typography**: 
  - **Headers**: Bodoni Moda (elegant serif)
  - **Body**: Work Sans (clean sans-serif)
  - **Code**: Geist Mono
- **Border Radius**: 0.625rem (10px) for subtle rounded corners

### Color Philosophy

- **Luxury**: Dark backgrounds with elegant gold accents
- **Premium**: High contrast for sophistication and readability
- **Elegant**: Muted grays and refined color palette
- **Professional**: Colors that inspire trust and premium quality

## Sections

### Hero Section
- Full-screen cinematic background image
- Dark overlay for text readability
- Large serif headlines
- Dual call-to-action buttons with gold accent styling

### Featured Logos Section
- Press mentions and media coverage
- Grayscale logos for elegant presentation
- Responsive grid layout

### Products Section
- Elegant product cards with hover effects
- Product tags (Editor's Pick, New)
- Professional product photography display
- Shadow effects for depth

### Reviews Section
- Customer testimonial cards
- Star ratings with gold stars
- Customer avatars and role titles
- Professional testimonial layout

### Trust Badges Section
- Security, guarantee, and delivery badges
- Professional icons with descriptions
- Trust-building elements

## Example Page

Visit `/elegant-template` to see the template in action with luxury branding.

## File Structure

```
src/components/
├── ElegantEcommerceTemplate.tsx              # Main template component
├── ElegantEcommerceTemplate.css              # Template-specific styles
├── ElegantEcommerceTemplateWithProvider.tsx  # Template with theme provider
├── elegant/
│   ├── CustomHero.tsx                        # Customizable hero component
│   └── CustomReviews.tsx                     # Customizable reviews component
└── teamplates/e-commerce/elegant/components/ # Original components
    └── landing/
        ├── featured-logos.tsx
        ├── product-grid.tsx
        ├── product-card.tsx
        └── trust-badges.tsx
```

## Dependencies

The template requires these dependencies:

- `next-themes` - For theme switching
- `geist` - For Geist Mono font
- `@radix-ui/*` - For UI components
- `next/font/google` - For Google Fonts (Bodoni Moda, Work Sans)

## Customization

You can customize the template by:

1. **Modifying Colors**: Update CSS variables in `ElegantEcommerceTemplate.css`
2. **Changing Content**: Pass different props to customize all text content
3. **Adding Products**: Modify the products array in ProductGrid component
4. **Hero Background**: Replace the hero background image
5. **Styling**: Override styles using CSS classes with higher specificity

## Product Data Structure

Products are defined with this structure:
```tsx
{
  id: string
  name: string
  price: string
  image: string
  tag?: string  // Optional: "Editor's Pick", "New", etc.
}
```

## Color Scheme

### Light Mode
- Background: Pure white
- Text: Near black
- Primary: Near black
- Accent: Light gray
- Cards: White with subtle borders

### Dark Mode (Primary)
- Background: Near black
- Text: Off white
- Primary: White
- Accent: Gold for premium highlights
- Cards: Dark with elegant borders
- Muted: Dark gray for sections

## Best Practices

- Use high-quality product images (4:3 aspect ratio)
- Maintain consistent luxury aesthetic
- Test hero background image readability
- Ensure gold accents are used sparingly for maximum impact
- Keep product names concise and premium-sounding
- Use professional customer photos in testimonials

## Notes

- The template maintains its own color scheme and won't interfere with your main app styles
- Designed primarily for dark mode with elegant luxury aesthetics
- All components are client-side rendered (`"use client"`)
- Theme system works independently from your main app theme
- Perfect for premium e-commerce, luxury goods, or high-end services
- Optimized for conversion with trust signals and social proof
- The template is fully self-contained and portable