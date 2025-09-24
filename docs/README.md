# Documentation

Welcome to the Mella Portfolio Application documentation. This folder contains comprehensive guides and references for developers working on this project.

## 📚 Documentation Structure

### [Component Documentation](./components.md)
Comprehensive documentation for all React components including:
- UI Components (ErrorBoundary, LazySection, SkipLink, UpdateNotification)
- Layout Components (Navbar)
- Section Components (Hero)
- Provider Components (ServiceWorkerProvider)
- Usage examples and API references
- Accessibility features and best practices

### [API Reference](./api-reference.md)
Detailed API reference covering:
- Utility functions and services
- Configuration files (Tailwind, TypeScript, Jest, Next.js)
- PWA configuration (Service Worker, Web App Manifest)
- Environment variables and build scripts
- Performance monitoring and security guidelines

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern browser with PWA support

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd mella-v6.1

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Workflow
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🏗️ Project Architecture

```
mella-v6.1/
├── public/                 # Static assets and PWA files
│   ├── sw.js              # Service worker
│   ├── manifest.json      # Web app manifest
│   └── *.svg             # App icons
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── layout/      # Layout components
│   │   ├── sections/    # Page sections
│   │   └── providers/   # Context providers
│   ├── lib/             # Utilities and services
│   └── styles/          # Global styles
├── docs/                # Documentation
└── tests/               # Test configuration
```

## 🎯 Key Features

### Progressive Web App (PWA)
- **Service Worker**: Offline functionality and caching
- **Web App Manifest**: Native app-like experience
- **Push Notifications**: User engagement features
- **Background Sync**: Offline data synchronization

### Performance Optimizations
- **Lazy Loading**: Intersection Observer API
- **Code Splitting**: Dynamic imports
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Optimized dependencies

### Accessibility (WCAG 2.1 AA)
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels
- **Color Contrast**: Meets accessibility standards
- **Skip Links**: Navigation shortcuts

### Testing Strategy
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Component interactions
- **Accessibility Tests**: ARIA compliance
- **Coverage**: 70%+ threshold

## 🛠️ Technology Stack

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

### Development Tools
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript
- **Build Tool**: Next.js built-in

### PWA Technologies
- **Service Worker**: Custom implementation
- **Cache API**: Browser caching
- **Intersection Observer**: Lazy loading
- **Web App Manifest**: PWA configuration

## 📱 Browser Support

### Minimum Requirements
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### PWA Features
- Service Workers: Chrome 40+, Firefox 44+, Safari 11.1+
- Web App Manifest: Chrome 39+, Firefox 53+, Safari 11.3+
- Intersection Observer: Chrome 51+, Firefox 55+, Safari 12.1+

## 🔧 Configuration Files

### Core Configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS setup
- `tsconfig.json` - TypeScript configuration
- `jest.config.js` - Testing configuration

### PWA Configuration
- `public/manifest.json` - Web app manifest
- `public/sw.js` - Service worker
- `src/lib/sw-registration.ts` - SW registration logic

## 🎨 Design System

### Color Palette
- **Primary**: #6366f1 (Indigo)
- **Background**: #0f0f23 (Dark)
- **Text**: White/Gray variants
- **Accent**: Various gradients

### Typography
- **Font Family**: Inter
- **Responsive Sizes**: Mobile-first approach
- **Contrast**: WCAG AA compliant

### Components
- Consistent spacing scale
- Responsive breakpoints
- Accessible focus states
- Smooth animations

## 🧪 Testing Guidelines

### Test Structure
```
ComponentName/
├── ComponentName.tsx
├── ComponentName.test.tsx
└── __mocks__/
```

### Testing Best Practices
- Test user interactions, not implementation
- Use semantic queries (getByRole, getByLabelText)
- Test accessibility features
- Mock external dependencies
- Maintain high coverage (70%+)

### Running Tests
```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# Specific test file
npm test ComponentName.test.tsx
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Manual Deployment
```bash
# Build application
npm run build

# Start production server
npm start
```

### Environment Variables
```bash
# Development
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Production
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## 🔍 Performance Monitoring

### Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Bundle Analysis
```bash
npm run build
npx @next/bundle-analyzer
```

## 🛡️ Security

### Best Practices
- No hardcoded secrets
- HTTPS in production
- Content Security Policy
- Secure service worker implementation

### Environment Security
- Use environment variables for sensitive data
- Validate all inputs
- Sanitize user content
- Regular dependency updates

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Update documentation
7. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Use Prettier for formatting
- Follow ESLint rules
- Write comprehensive tests
- Document component APIs
- Ensure accessibility compliance

### Commit Messages
```
feat: add new component
fix: resolve accessibility issue
docs: update component documentation
test: add integration tests
refactor: improve performance
```

## 📞 Support

### Getting Help
- Check existing documentation
- Review component examples
- Run tests to verify setup
- Check browser console for errors

### Common Issues
- **Service Worker**: Requires HTTPS in production
- **PWA Features**: Need secure context
- **Tests**: Ensure proper setup files
- **Build**: Check TypeScript errors

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🔄 Changelog

### Version 6.1.0
- ✅ Implemented comprehensive testing suite
- ✅ Added PWA functionality with service worker
- ✅ Created component documentation
- ✅ Enhanced accessibility features
- ✅ Optimized performance with lazy loading

### Previous Versions
- 6.0.0: Initial Next.js 14 implementation
- 5.x: Legacy React implementation

---

## 📋 Quick Reference

### Essential Commands
```bash
npm run dev          # Start development
npm test            # Run tests
npm run build       # Build for production
npm run lint        # Lint code
```

### Important Files
- `src/app/layout.tsx` - Root layout
- `src/components/ui/ErrorBoundary.tsx` - Error handling
- `public/sw.js` - Service worker
- `public/manifest.json` - PWA manifest

### Key Directories
- `src/components/` - All React components
- `src/lib/` - Utilities and services
- `public/` - Static assets and PWA files
- `docs/` - Documentation files

For detailed information, refer to the specific documentation files in this directory.