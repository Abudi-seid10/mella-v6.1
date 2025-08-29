# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Mella Counseling Center** is a professional mental health website built for a counseling practice in Ethiopia. The project is a modern Next.js 15 application with React 19, TypeScript, and Tailwind CSS v4, featuring smooth animations and a professional healthcare-focused design.

## Technology Stack

- **Framework**: Next.js 15.5.0 with App Router and Turbopack
- **Frontend**: React 19.1.0 with TypeScript 5
- **Styling**: Tailwind CSS v4 with custom color palette
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.541.0
- **Analytics**: Vercel Analytics
- **Development**: ESLint 9 with Next.js config

## Development Commands

### Core Development
```bash
# Start development server with Turbopack (10x faster bundling)
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### Package Management
```bash
# Install dependencies
npm install

# Add new dependency
npm install <package-name>

# Add dev dependency  
npm install -D <package-name>
```

## Project Architecture

### File Structure
```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About Us page route
│   │   └── page.tsx       # About page with team, mission, values
│   ├── globals.css        # Global styles with Tailwind v4 + custom theme
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Homepage composed of sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Fixed responsive navigation with animations
│   │   └── Footer.tsx     # Three-column footer with contact info
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Animated hero with trust indicators
│       ├── Services.tsx   # 5 core services grid with hover effects
│       ├── WhyChoose.tsx  # Key differentiators section
│       ├── Testimonials.tsx # Carousel with 6 client testimonials
│       ├── CTA.tsx        # Call-to-action section
│       ├── AboutHero.tsx  # About page hero section
│       ├── Mission.tsx    # Mission, vision, and values
│       └── Team.tsx       # Professional team profiles
```

### Component Architecture

**Layout Components:**
- `Navbar`: Fixed header with scroll effects, mobile menu, glass morphism design
- `Footer`: Contact information, quick links, newsletter signup, social media

**Section Components:**
- All use Framer Motion for animations and scroll-triggered reveals
- Consistent design system with branded color palette
- Responsive grid layouts with hover interactions
- SEO-optimized with proper semantic HTML

### Design System

**Brand Colors** (defined in `globals.css`):
- Primary: Deep Forest Green (#2D5530) - trust, growth, healing
- Secondary: Warm Sage Green (#7B9A7C) - calmness, natural wellness  
- Accent: Soft Gold (#E6C46B) - warmth, hope, optimism
- Neutral: Clean whites (#F8F9FA) and soft grays - accessibility

**Key Features:**
- Custom Tailwind v4 theme with CSS variables
- Framer Motion animations throughout
- Glass morphism effects
- Gradient backgrounds and borders
- Responsive typography scaling
- Hover states and micro-interactions

## Configuration Files

### TypeScript (`tsconfig.json`)
- Path mapping: `@/*` → `./src/*`
- Strict mode enabled
- Next.js plugin integration

### ESLint (`eslint.config.mjs`)
- Next.js core-web-vitals and TypeScript configs
- Ignores: node_modules, .next, out, build, next-env.d.ts

### Next.js (`next.config.ts`)
- Minimal configuration - uses Next.js defaults
- Turbopack enabled for development and build

## Content Management

### Services Data
Located in `src/components/sections/Services.tsx`:
- Individual Counseling
- Virtual Counseling  
- Art Therapy
- Couples Counseling
- Group Therapy

Each service has: icon, title, description, features array, gradient colors

### Contact Information
Located in `src/components/layout/Footer.tsx`:
- Address: Bole Atlas, Addis Ababa, Ethiopia
- Phone: +251 911 123456
- Email: info@mellacounseling.com
- Hours: Monday-Saturday, 8:00 AM - 6:00 PM

### SEO Metadata
Located in `src/app/layout.tsx`:
- Ethiopia-focused keywords and descriptions
- OpenGraph and Twitter card metadata
- Culturally sensitive content approach

## Key Development Patterns

### Animation Patterns
```typescript
// Container animation for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Item animation for reveal effects
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
```

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Typography scaling: `text-4xl md:text-5xl lg:text-6xl`
- Spacing consistency with Tailwind spacing scale

### Component Structure
- Client components use `'use client'` directive
- Consistent imports: React, Next.js, Framer Motion, Lucide icons
- Props typing with TypeScript interfaces
- Semantic HTML with accessibility considerations

## Deployment

### Recommended: Vercel
- Automatic deployments on git push
- Built-in analytics integration
- Optimized for Next.js applications
- CDN and edge functions support

### Build Process
- Uses Turbopack for 10x faster bundling
- Automatic image optimization
- Font optimization with Inter variable font
- Route-based code splitting

## Development Notes

- **Cultural Context**: Ethiopian market focus with local contact info and business hours
- **Healthcare Compliance**: Anonymous testimonials, professional credentials emphasis
- **Performance**: Turbopack integration, optimized animations, image optimization
- **Accessibility**: Screen reader support, keyboard navigation, semantic HTML
- **SEO**: Ethiopia-focused keywords, structured data, meta descriptions
- **Hydration**: Fixed SSR/client hydration issues by moving browser APIs to useEffect

## Pages

### Homepage (`/`)
- Hero section with animated elements and trust indicators
- Services overview with 5 core offerings
- Why Choose Us section with key differentiators  
- Client testimonials carousel
- Call-to-action section

### About Us (`/about`)
- AboutHero: Stats and introduction
- Mission: Mission statement, vision, and core values
- Team: Two detailed professional profiles with credentials and contact info
  - Dr. Meron Tadesse (Clinical Director)
  - Amanuel Bekele, LMFT (Senior Therapist)

## Common Tasks

### Adding New Page
1. Create directory in `src/app/[page-name]/`
2. Add `page.tsx` with metadata export
3. Create section components in `src/components/sections/`
4. Update navbar links in `src/components/layout/Navbar.tsx`

### Adding New Section
1. Create component in `src/components/sections/`
2. Import and add to appropriate page
3. Follow existing animation patterns
4. Use brand colors from globals.css

### Updating Team Information
Edit team members array in `src/components/sections/Team.tsx`

### Updating Contact Info
Edit `src/components/layout/Footer.tsx` contact information block

### Modifying Services
Update services array in `src/components/sections/Services.tsx`

### Customizing Colors
Modify CSS variables in `src/app/globals.css` theme block

### Fixing Hydration Issues
- Use `useEffect` for client-side only code (window, Math.random, etc.)
- Check `typeof window !== 'undefined'` before accessing browser APIs
- Move dynamic values to state managed by useEffect

## Browser Support
- Modern browsers with ES2017+ support
- CSS Grid and Flexbox required
- Framer Motion animations require JavaScript enabled
