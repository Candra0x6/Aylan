# Modern SaaS Template

This is a fully functional modern SaaS template with its own unique styling, colors, and fonts. The template preserves all the original design elements from the modern SaaS template.

## Features

- **Custom Color Scheme**: Modern purple/blue gradient color palette
- **Typography**: Inter font for general text and JetBrains Mono for code
- **Dark/Light Theme**: Built-in theme toggle with smooth transitions
- **Animations**: Custom animations including floating elements, pulse glow, and code typing effects
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Components**: Includes various sections like hero, features, integrations, pricing, API docs, and footer

## Components Included

- `AnimatedCodeBlock`: Interactive code demonstration block
- `IntegrationDiagram`: Visual diagram showing integrations
- `PricingTable`: Modern pricing table component
- `ApiDocumentation`: Interactive API documentation section
- `ThemeToggle`: Dark/light mode toggle button

## Usage

### Option 1: With Theme Provider (Recommended)

```tsx
import ModernSaasTemplateWithProvider from '@/components/ModernSaasTemplateWithProvider'

export default function YourPage() {
  return (
    <ModernSaasTemplateWithProvider 
      brandName="YourBrand"
      brandDescription="Your custom description here"
      heroTitle="Your custom hero title"
      heroSubtitle="Your custom subtitle"
    />
  )
}
```

### Option 2: Without Theme Provider

```tsx
import ModernSaasTemplate from '@/components/ModernSaasTemplate'
import { ThemeProvider } from '@/components/teamplates/sass/modern/components/theme-provider'

export default function YourPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ModernSaasTemplate 
        brandName="YourBrand"
        brandDescription="Your custom description here"
        heroTitle="Your custom hero title"
        heroSubtitle="Your custom subtitle"
      />
    </ThemeProvider>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brandName` | string | "DevFlow" | Your brand/company name |
| `brandDescription` | string | "The complete platform..." | Description shown in footer |
| `heroTitle` | string | "The complete platform to build the web" | Main hero title |
| `heroSubtitle` | string | "Your team's toolkit..." | Hero subtitle/description |

## Styling

The template uses its own CSS variables and custom styles that won't interfere with your main application styles. All styles are scoped to the `.modern-saas-template` class.

### Key Design Elements

- **Primary Color**: Purple-blue gradient (`oklch(0.6 0.25 264)`)
- **Accent Color**: Cyan (`oklch(0.7 0.2 180)`)
- **Background**: Light gray (`oklch(0.98 0.005 264)`) in light mode, dark blue-gray in dark mode
- **Fonts**: Inter for body text, JetBrains Mono for code
- **Border Radius**: 0.75rem (12px)

## Custom Animations

The template includes several custom animations:

- `animate-float`: Floating effect for decorative elements
- `animate-pulse-glow`: Pulsing glow effect for highlights
- `animate-code-typing`: Typewriter effect for code blocks
- `grid-pattern`: Subtle grid background pattern

## Example Page

Visit `/modern-template` to see the template in action with custom branding.

## File Structure

```
src/components/
├── ModernSaasTemplate.tsx          # Main template component
├── ModernSaasTemplate.css          # Template-specific styles
├── ModernSaasTemplateWithProvider.tsx  # Template with theme provider
└── teamplates/sass/modern/components/  # Individual components
    ├── animated-code-block.tsx
    ├── api-documentation.tsx
    ├── integration-diagram.tsx
    ├── pricing-table.tsx
    ├── theme-provider.tsx
    └── theme-toggle.tsx
```

## Dependencies

The template requires these dependencies (already included in your project):

- `next-themes` - For theme switching
- `lucide-react` - For icons
- `@radix-ui/*` - For UI components
- `next/font/google` - For Google Fonts (Inter & JetBrains Mono)

## Customization

You can customize the template by:

1. **Modifying Colors**: Update CSS variables in `ModernSaasTemplate.css`
2. **Changing Content**: Pass different props to the component
3. **Adding Sections**: Extend the component with additional sections
4. **Styling**: Override styles using CSS classes with higher specificity

## Notes

- The template maintains its own color scheme and won't interfere with your main app styles
- All components are client-side rendered (`"use client"`)
- Theme system works independently from your main app theme
- The template is fully self-contained and portable