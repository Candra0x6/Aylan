# 🚀 AI Landing Page Generator

A complete Next.js application that automatically generates professional landing pages using AI-powered content generation with Google's Gemini AI.

## ✨ Features

### 🎯 **Intelligent Template Selection**
- Automatically selects the best template based on your business requirements
- Supports multiple categories: SaaS, E-commerce, Agency, Corporate
- Style variations: Minimalist, Modern, Bold, Elegant, Playful

### 🤖 **AI-Powered Content Generation**
- Uses Google Gemini AI to generate compelling copy
- Creates content tailored to your industry and target audience
- Generates complete landing page sections:
  - Hero section with headlines and CTAs
  - Services/Features sections
  - Testimonials and social proof
  - Pricing tiers
  - Contact forms

### 🎨 **Professional Templates**
- **Agency Templates**: Elegant and Minimalist designs
- **Corporate Templates**: Playful and professional layouts
- **E-commerce Templates**: Modern and Elegant designs
- **SaaS Templates**: Minimalist and Modern approaches

### 📱 **Responsive Design**
- Mobile-first approach
- Tailwind CSS styling
- Modern UI components with shadcn/ui

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Google AI Studio API key

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd ai-landing-page-generator
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
```

3. **Add your Gemini API key to `.env.local`:**
```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** to see the application.

## 🎪 Demo Pages

### Main AI Generator
Visit `/ai-demo` for the complete AI-powered experience:
1. **Form Input**: Enter your business details
2. **Template Selection**: AI automatically selects the best template
3. **Content Generation**: Gemini AI creates personalized copy
4. **Preview**: See your generated landing page

### Individual Template Demos
- `/minimalist-saas-demo` - Clean SaaS template
- `/modern-saas-demo` - Modern SaaS with animations
- `/elegant-agency-demo` - Professional agency template
- `/minimalist-agency-demo` - Clean agency design
- `/playful-corporate-demo` - Fun corporate template
- `/elegant-ecommerce-demo` - Luxury e-commerce template
- `/modern-ecommerce-demo` - Contemporary e-commerce design

## 🏗 Architecture

### Core Components

#### Form System
- `LandingPageForm` - Main form component
- Form validation with Zod
- Industry, category, audience, and style selection

#### Template Selection
- `useTemplateSelection` hook
- Intelligent template matching algorithm
- API endpoint: `/api/select-template`

#### AI Content Generation  
- `useGeminiAI` hook
- Gemini AI integration
- API endpoint: `/api/generate-content`

#### Template Rendering
- Dynamic template components
- Type-safe props interfaces
- Responsive design system

### API Routes

#### `/api/select-template`
- **Method**: POST
- **Purpose**: Selects the best template based on form data
- **Input**: Form data (industry, category, style, etc.)
- **Output**: Template selection with match score and reasoning

#### `/api/generate-content`
- **Method**: POST  
- **Purpose**: Generates AI content for selected template
- **Input**: Form data + selected template
- **Output**: Complete landing page content structure

## 🔧 Configuration

### Form Fields
The system accepts the following inputs:

```typescript
{
  industry: 'tech' | 'healthcare' | 'education' | 'retail'
  businessCategory: 'saas' | 'ecommerce' | 'agency' | 'corporate'
  targetAudience: 'professionals' | 'consumers' | 'entrepreneurs' | 'developers'
  stylePreference: 'minimalist' | 'modern' | 'bold' | 'elegant' | 'playful'
  brandKeywords: string // Optional brand-specific keywords
}
```

### Template Matching
The system uses a scoring algorithm that considers:
- Business category alignment
- Style preference matching  
- Industry compatibility
- Target audience fit

### Content Generation
Gemini AI generates content based on:
- Selected template structure
- Business context from form
- Industry-specific terminology
- Target audience language
- Brand keywords integration

## 🎨 Template Structure

Each template includes these sections:
- **Header**: Navigation and branding
- **Hero**: Main headline and CTA
- **Credibility**: Client logos and metrics
- **Services**: Features or service offerings  
- **Case Study**: Customer success story
- **How We Work**: Process explanation
- **Testimonials**: Customer reviews
- **Pricing**: Service packages or pricing tiers
- **Lead Capture**: Contact form or booking
- **Footer**: Links and contact information

## 🔮 Usage Examples

### Basic AI Generation
```typescript
// 1. User fills form
const formData = {
  industry: 'tech',
  businessCategory: 'saas',
  targetAudience: 'developers',
  stylePreference: 'minimalist',
  brandKeywords: 'automation, productivity, development tools'
}

// 2. System selects template
const template = await selectTemplate(formData)
// Result: minimalist-saas template with 95% match

// 3. AI generates content  
const content = await generateContent(formData, template)
// Result: Complete landing page content optimized for developer audience
```

### Manual Template Selection
You can also directly access template demos:
- Choose from 7+ pre-built templates
- Each with unique design and functionality
- Perfect for design inspiration

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Environment Variables for Production
```bash
GEMINI_API_KEY=your_production_gemini_key
NEXT_PUBLIC_APP_URL=your_production_url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🎯 Roadmap

- [ ] More template variations
- [ ] Additional AI providers (OpenAI, Claude)
- [ ] Real-time preview editing
- [ ] Export to various formats
- [ ] A/B testing capabilities
- [ ] Analytics integration
- [ ] Custom brand guidelines

---

**Built with ❤️ using Next.js, Tailwind CSS, shadcn/ui, and Google Gemini AI**