# Component Documentation

This document provides comprehensive documentation for all components in the Mella portfolio application.

## Table of Contents

- [UI Components](#ui-components)
  - [ErrorBoundary](#errorboundary)
  - [LazySection](#lazysection)
  - [SkipLink](#skiplink)
  - [UpdateNotification](#updatenotification)
- [Layout Components](#layout-components)
  - [Navbar](#navbar)
- [Section Components](#section-components)
  - [Hero](#hero)
- [Provider Components](#provider-components)
  - [ServiceWorkerProvider](#serviceworkerprovider)

---

## UI Components

### ErrorBoundary

A React error boundary component that catches JavaScript errors anywhere in the child component tree and displays a fallback UI.

**Location:** `src/components/ui/ErrorBoundary.tsx`

**Props:**
- `children: React.ReactNode` - Child components to wrap
- `fallback?: React.ComponentType<ErrorInfo>` - Custom fallback component
- `onError?: (error: Error, errorInfo: ErrorInfo) => void` - Error callback

**Features:**
- Catches and displays errors gracefully
- Shows error details in development mode
- Provides retry functionality
- Supports custom fallback components
- Logs errors to console

**Usage:**
```tsx
<ErrorBoundary onError={(error) => console.log(error)}>
  <YourComponent />
</ErrorBoundary>
```

---

### LazySection

A component that implements lazy loading using Intersection Observer API for performance optimization.

**Location:** `src/components/ui/LazySection.tsx`

**Props:**
- `children: React.ReactNode` - Content to lazy load
- `fallback?: React.ReactNode` - Loading placeholder (default: skeleton)
- `className?: string` - Additional CSS classes
- `threshold?: number` - Intersection threshold (default: 0.1)
- `rootMargin?: string` - Root margin for intersection (default: '50px')

**Features:**
- Intersection Observer-based lazy loading
- Customizable loading thresholds
- Skeleton loading animation
- Performance optimized
- Accessibility compliant

**Usage:**
```tsx
<LazySection fallback={<div>Loading...</div>}>
  <ExpensiveComponent />
</LazySection>
```

---

### SkipLink

An accessibility component that provides keyboard navigation shortcuts for screen readers and keyboard users.

**Location:** `src/components/ui/SkipLink.tsx`

**Props:**
- `href: string` - Target element ID or URL
- `children: React.ReactNode` - Link text

**Features:**
- Hidden by default, visible on focus
- Keyboard accessible
- Screen reader friendly
- WCAG 2.1 compliant

**Usage:**
```tsx
<SkipLink href="#main-content">Skip to main content</SkipLink>
```

---

### UpdateNotification

A notification component that informs users when a new version of the PWA is available.

**Location:** `src/components/ui/UpdateNotification.tsx`

**Props:**
- `registration?: ServiceWorkerRegistration` - Service worker registration

**Features:**
- PWA update notifications
- Manual update trigger
- Dismissible notification
- Loading states
- Responsive design

**Usage:**
```tsx
<UpdateNotification registration={swRegistration} />
```

---

## Layout Components

### Navbar

The main navigation component with responsive design and mobile menu support.

**Location:** `src/components/layout/Navbar.tsx`

**Features:**
- Responsive navigation
- Mobile hamburger menu
- Scroll-based styling
- Accessibility compliant
- Logo and CTA button
- Smooth scrolling navigation

**Navigation Links:**
- Home
- About
- Services
- Projects
- Contact

**Usage:**
```tsx
<Navbar />
```

---

## Section Components

### Hero

The main hero section component featuring animated elements and call-to-action buttons.

**Location:** `src/components/sections/Hero.tsx`

**Features:**
- Animated floating elements
- Responsive design
- Call-to-action buttons
- Background decorations
- Framer Motion animations
- Professional imagery

**Content:**
- Main headline and description
- Professional profile image
- Action buttons (Get Started, Learn More)
- Animated background elements

**Usage:**
```tsx
<Hero />
```

---

## Provider Components

### ServiceWorkerProvider

A provider component that handles service worker registration and PWA functionality.

**Location:** `src/components/providers/ServiceWorkerProvider.tsx`

**Props:**
- `children: React.ReactNode` - Child components

**Features:**
- Service worker registration
- Update notifications
- Production-only activation
- Error handling
- PWA functionality

**Usage:**
```tsx
<ServiceWorkerProvider>
  <App />
</ServiceWorkerProvider>
```

---

## Design System

### Colors
- Primary: `#6366f1` (Indigo)
- Secondary: Various gradients
- Background: `#0f0f23` (Dark)
- Text: White/Gray variants

### Typography
- Font Family: Inter
- Responsive font sizes
- Proper contrast ratios

### Spacing
- Consistent padding/margin scale
- Responsive breakpoints
- Grid-based layouts

### Animations
- Framer Motion powered
- Performance optimized
- Reduced motion support

---

## Accessibility Features

All components follow WCAG 2.1 guidelines:

- **Keyboard Navigation:** Full keyboard support
- **Screen Readers:** Proper ARIA labels and roles
- **Color Contrast:** Meets AA standards
- **Focus Management:** Visible focus indicators
- **Skip Links:** Navigation shortcuts
- **Semantic HTML:** Proper heading hierarchy

---

## Performance Optimizations

- **Lazy Loading:** Intersection Observer API
- **Code Splitting:** Dynamic imports
- **Image Optimization:** Next.js Image component
- **Caching:** Service worker implementation
- **Bundle Analysis:** Optimized dependencies

---

## Testing

All components include comprehensive test suites:

- **Unit Tests:** Jest + React Testing Library
- **Accessibility Tests:** ARIA compliance
- **Integration Tests:** Component interactions
- **Coverage:** 70%+ threshold

Run tests with:
```bash
npm test
npm run test:coverage
```

---

## Development Guidelines

### Component Structure
```
ComponentName/
├── ComponentName.tsx
├── ComponentName.test.tsx
├── ComponentName.stories.tsx (if using Storybook)
└── index.ts
```

### Naming Conventions
- Components: PascalCase
- Files: PascalCase for components
- Props: camelCase
- CSS Classes: kebab-case or Tailwind

### Best Practices
- Use TypeScript for type safety
- Implement proper error boundaries
- Follow accessibility guidelines
- Write comprehensive tests
- Document component APIs
- Use semantic HTML
- Optimize for performance

---

## Contributing

When adding new components:

1. Follow the established patterns
2. Add comprehensive tests
3. Include accessibility features
4. Document the component API
5. Ensure responsive design
6. Add error handling
7. Consider performance implications

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

PWA features require modern browser support for Service Workers and Web App Manifest.