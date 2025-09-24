# API Reference

This document provides detailed API reference for utilities, services, and configuration files in the Mella portfolio application.

## Table of Contents

- [Utilities](#utilities)
  - [cn (Class Names)](#cn-class-names)
- [Services](#services)
  - [Service Worker Registration](#service-worker-registration)
- [Configuration](#configuration)
  - [Tailwind CSS](#tailwind-css)
  - [TypeScript](#typescript)
  - [Jest](#jest)
  - [Next.js](#nextjs)
- [PWA Configuration](#pwa-configuration)
  - [Web App Manifest](#web-app-manifest)
  - [Service Worker](#service-worker)

---

## Utilities

### cn (Class Names)

A utility function for conditionally joining CSS class names using `clsx` and `tailwind-merge`.

**Location:** `src/lib/utils.ts`

**Function Signature:**
```typescript
function cn(...inputs: ClassValue[]): string
```

**Parameters:**
- `...inputs: ClassValue[]` - Variable number of class name inputs

**Returns:**
- `string` - Merged and deduplicated class names

**Usage:**
```typescript
import { cn } from '@/lib/utils'

// Basic usage
cn('px-4', 'py-2', 'bg-blue-500')
// Returns: "px-4 py-2 bg-blue-500"

// Conditional classes
cn('base-class', {
  'active-class': isActive,
  'disabled-class': isDisabled
})

// With Tailwind merge (removes conflicts)
cn('px-2 px-4', 'py-1 py-2')
// Returns: "px-4 py-2"
```

**Dependencies:**
- `clsx`: For conditional class joining
- `tailwind-merge`: For Tailwind CSS class deduplication

---

## Services

### Service Worker Registration

Handles Progressive Web App (PWA) service worker registration and lifecycle management.

**Location:** `src/lib/sw-registration.ts`

#### Functions

##### `registerSW()`

Registers the service worker and handles updates.

**Function Signature:**
```typescript
function registerSW(): Promise<ServiceWorkerRegistration | null>
```

**Returns:**
- `Promise<ServiceWorkerRegistration | null>` - Service worker registration or null

**Features:**
- Development environment detection
- Automatic update checking
- Error handling
- User notification for updates

**Usage:**
```typescript
import { registerSW } from '@/lib/sw-registration'

// Register service worker
registerSW().then(registration => {
  if (registration) {
    console.log('SW registered:', registration)
  }
})
```

**Events Handled:**
- `updatefound` - New service worker available
- `statechange` - Service worker state changes
- `controllerchange` - New service worker activated

---

## Configuration

### Tailwind CSS

**Location:** `tailwind.config.ts`

**Configuration Options:**

```typescript
interface TailwindConfig {
  content: string[]           // File patterns to scan
  theme: {
    extend: {
      colors: Record<string, any>      // Custom colors
      fontFamily: Record<string, any>  // Custom fonts
      animation: Record<string, any>   // Custom animations
      keyframes: Record<string, any>   // Animation keyframes
    }
  }
  plugins: any[]             // Tailwind plugins
}
```

**Custom Theme Extensions:**
- **Colors:** Custom color palette
- **Fonts:** Inter font family
- **Animations:** Custom keyframe animations
- **Spacing:** Extended spacing scale

---

### TypeScript

**Location:** `tsconfig.json`

**Key Configuration:**
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Path Mapping:**
- `@/*` → `./src/*` - Absolute imports from src directory

---

### Jest

**Location:** `jest.config.js`

**Configuration Options:**
```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/app/**',
    '!src/setupTests.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
}
```

**Key Features:**
- **Environment:** jsdom for DOM testing
- **Setup:** Custom test setup file
- **Module Mapping:** Path aliases and CSS mocking
- **Coverage:** 70% threshold requirement

---

### Next.js

**Location:** `next.config.js`

**Configuration:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['example.com'],
    formats: ['image/webp', 'image/avif']
  }
}
```

**Features:**
- **App Directory:** Next.js 13+ app router
- **Image Optimization:** WebP and AVIF support
- **Performance:** Optimized builds

---

## PWA Configuration

### Web App Manifest

**Location:** `public/manifest.json`

**Schema:**
```json
{
  "name": "string",
  "short_name": "string",
  "description": "string",
  "start_url": "string",
  "display": "standalone" | "fullscreen" | "minimal-ui" | "browser",
  "background_color": "string",
  "theme_color": "string",
  "orientation": "portrait" | "landscape" | "any",
  "icons": [
    {
      "src": "string",
      "sizes": "string",
      "type": "string",
      "purpose": "any" | "maskable" | "monochrome"
    }
  ],
  "shortcuts": [
    {
      "name": "string",
      "short_name": "string",
      "description": "string",
      "url": "string",
      "icons": [...]
    }
  ],
  "screenshots": [
    {
      "src": "string",
      "sizes": "string",
      "type": "string",
      "form_factor": "wide" | "narrow"
    }
  ]
}
```

**Current Configuration:**
- **Name:** "Mella - AI-Powered Portfolio"
- **Display:** Standalone app experience
- **Icons:** SVG format for scalability
- **Shortcuts:** Quick access to sections
- **Screenshots:** App store previews

---

### Service Worker

**Location:** `public/sw.js`

**API Methods:**

#### Cache Management
```javascript
// Add resources to cache
caches.open(cacheName).then(cache => {
  return cache.addAll(urlsToCache)
})

// Retrieve from cache
caches.match(request).then(response => {
  return response || fetch(request)
})
```

#### Background Sync
```javascript
// Register background sync
self.registration.sync.register('background-sync')

// Handle sync event
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})
```

#### Push Notifications
```javascript
// Handle push events
self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: '/icon-192x192.svg',
    badge: '/icon-192x192.svg'
  }
  
  event.waitUntil(
    self.registration.showNotification('Title', options)
  )
})
```

**Cache Strategies:**
- **Static Assets:** Cache first
- **API Requests:** Network first with fallback
- **Images:** Cache with network fallback
- **Documents:** Network first

---

## Environment Variables

### Development
```bash
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Production
```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

**Usage:**
```typescript
const appUrl = process.env.NEXT_PUBLIC_APP_URL
const isDev = process.env.NODE_ENV === 'development'
```

---

## Build Scripts

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

**Script Descriptions:**
- `dev` - Start development server
- `build` - Create production build
- `start` - Start production server
- `lint` - Run ESLint
- `test` - Run test suite
- `test:watch` - Run tests in watch mode
- `test:coverage` - Generate coverage report

---

## Error Handling

### Global Error Boundary
Components are wrapped in error boundaries that:
- Catch JavaScript errors
- Display fallback UI
- Log errors for debugging
- Provide retry functionality

### Service Worker Errors
```javascript
self.addEventListener('error', event => {
  console.error('SW Error:', event.error)
})

self.addEventListener('unhandledrejection', event => {
  console.error('SW Unhandled Promise Rejection:', event.reason)
})
```

---

## Performance Monitoring

### Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Bundle Analysis
```bash
npm run build
npx @next/bundle-analyzer
```

---

## Security

### Content Security Policy
```javascript
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
`
```

### HTTPS Requirements
- Service workers require HTTPS in production
- PWA features need secure context
- Development allows localhost

---

## Browser Compatibility

### Supported Features
- **Service Workers:** Chrome 40+, Firefox 44+, Safari 11.1+
- **Web App Manifest:** Chrome 39+, Firefox 53+, Safari 11.3+
- **Intersection Observer:** Chrome 51+, Firefox 55+, Safari 12.1+

### Polyfills
- Intersection Observer polyfill for older browsers
- Service worker polyfill if needed

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Manual Deployment
```bash
npm run build
npm start
```

### Environment Setup
1. Set environment variables
2. Configure domain
3. Enable HTTPS
4. Test PWA functionality