# MIRABO Biotechnology - Project Design Document
## Award-Winning High-Tech Static Website

---

## 📋 Project Overview

### Project Name
MIRABO Biotechnology Official Website

### Project Type
Static Website (HTML5 + CSS3 + Vanilla JavaScript)

### Deployment Platform
Cloudflare Pages

### Design Level
Award-winning (Awwwards / CSS Design Awards standard)

### Target Audience
- Biotech industry professionals
- Pharmaceutical companies
- Personal care brands
- Healthcare organizations
- Investors and partners
- Research institutions

---

## 🎯 Project Goals

1. **Brand Showcase**: Present MIRABO as a cutting-edge AI-driven biotech company
2. **Technology Demonstration**: Clearly explain the MiRAiQ AI Engine and its three platforms
3. **Lead Generation**: Capture inquiries through contact form
4. **Professional Image**: Establish credibility and trust in the industry
5. **Award-Winning Design**: Create a visually stunning, memorable experience

---

## 🛠️ Technology Stack

### Core Technologies
```
HTML5          - Semantic markup, accessibility
CSS3           - Modern styling, animations, Grid, Flexbox
JavaScript ES6+ - Interactive features, form validation
```

### CSS Framework & Libraries
```
Tailwind CSS   - Utility-first CSS (via CDN)
Custom CSS     - Brand-specific styles, animations
```

### Animation Libraries
```
AOS            - Animate On Scroll (v2.3.1+)
GSAP           - GreenSock Animation Platform (v3.12+)
Particles.js   - Particle background effects (v2.0+)
```

### Icon & Font Libraries
```
Lucide Icons   - Modern icon set (via CDN)
Google Fonts   - Inter, Space Grotesk, JetBrains Mono
```

### Utilities
```
Vanilla JS     - No framework dependencies
Intersection Observer - Scroll detection
CSS Variables  - Dynamic theming
```

### Development Tools
```
VS Code        - Code editor
Live Server    - Local development server
Git            - Version control
GitHub/GitLab  - Repository hosting
```

### Deployment
```
Cloudflare Pages - Static hosting with global CDN
Cloudflare DNS   - Domain management
Cloudflare Analytics - Traffic monitoring
```

---

## 📁 Project Structure

```
mirabobio-homepage/
├── index.html                    # Home page
├── about.html                    # About Us page
├── platform.html                 # Platform & Technology page
├── solutions.html                # Solutions page
├── contact.html                  # Contact page
│
├── assets/
│   ├── css/
│   │   ├── style.css            # Main custom styles
│   │   ├── animations.css       # Animation definitions
│   │   └── responsive.css       # Responsive overrides
│   │
│   ├── js/
│   │   ├── main.js              # Core functionality
│   │   ├── animations.js        # GSAP animations
│   │   ├── particles-config.js  # Particle system config
│   │   ├── contact.js           # Contact form handling
│   │   └── utils.js             # Utility functions
│   │
│   ├── images/
│   │   ├── hero/                # Hero section images
│   │   ├── about/               # About page images
│   │   ├── platform/            # Platform page images
│   │   ├── solutions/           # Solutions page images
│   │   ├── icons/               # Custom SVG icons
│   │   └── backgrounds/         # Background images
│   │
│   └── fonts/                   # Local font files (fallback)
│
├── materials/                   # Source materials (not deployed)
│   ├── info.md
│   ├── Teaser-info.md
│   ├── mirabobio-logo-static.svg
│   ├── mirabobio-logo-blink.svg
│   └── Mirabobio AI.png
│
├── .dev2/                       # Development documentation
│   ├── start.md
│   └── generated/
│       ├── homepage-content-design.md
│       ├── project-design.md
│       ├── tasks.md
│       └── start-and-resume.md
│
├── .gitignore
├── README.md
├── robots.txt                   # SEO: Search engine directives
├── sitemap.xml                  # SEO: Site structure
└── _headers                     # Cloudflare: Security headers
```

---

## 🎨 CSS Architecture

### File Organization

#### style.css (Main Stylesheet)
```css
/* 1. CSS Variables */
:root {
  /* Colors */
  /* Typography */
  /* Spacing */
  /* Shadows */
  /* Transitions */
}

/* 2. Reset & Base Styles */
*, *::before, *::after { box-sizing: border-box; }
html, body { ... }

/* 3. Typography */
h1, h2, h3, h4, h5, h6 { ... }
p, a, span { ... }

/* 4. Layout Components */
.container { ... }
.section { ... }
.grid { ... }

/* 5. Header & Navigation */
.header { ... }
.nav { ... }

/* 6. Hero Sections */
.hero { ... }

/* 7. Cards */
.card { ... }
.glass-card { ... }

/* 8. Buttons */
.btn { ... }
.btn-primary { ... }

/* 9. Forms */
.form { ... }
.input { ... }

/* 10. Footer */
.footer { ... }

/* 11. Utilities */
.text-center { ... }
.mt-4 { ... }
```

#### animations.css
```css
/* Keyframe Animations */
@keyframes fadeIn { ... }
@keyframes slideUp { ... }
@keyframes glow { ... }
@keyframes float { ... }

/* Animation Classes */
.animate-fade-in { ... }
.animate-slide-up { ... }
```

#### responsive.css
```css
/* Mobile First Approach */

/* Tablet: 640px+ */
@media (min-width: 640px) { ... }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { ... }

/* Wide: 1280px+ */
@media (min-width: 1280px) { ... }
```

---

## 🧩 JavaScript Architecture

### File Organization

#### main.js (Core Functionality)
```javascript
// 1. Configuration
const config = { ... };

// 2. DOM Elements
const elements = { ... };

// 3. Navigation
function initNavigation() { ... }
function toggleMobileMenu() { ... }
function updateActiveNav() { ... }

// 4. Scroll Effects
function initScrollEffects() { ... }
function handleScroll() { ... }

// 5. Smooth Scroll
function initSmoothScroll() { ... }

// 6. Back to Top
function initBackToTop() { ... }

// 7. Initialization
document.addEventListener('DOMContentLoaded', init);
```

#### animations.js (GSAP Animations)
```javascript
// 1. Hero Animations
function animateHero() { ... }

// 2. Section Animations
function animateSections() { ... }

// 3. Card Animations
function animateCards() { ... }

// 4. Initialize AOS
AOS.init({ ... });

// 5. Initialize GSAP
gsap.registerPlugin(ScrollTrigger);
```

#### particles-config.js
```javascript
// Particle system configuration
particlesJS('particles-js', {
  particles: { ... },
  interactivity: { ... }
});
```

#### contact.js (Form Handling)
```javascript
// 1. Form Validation
function validateForm() { ... }

// 2. Form Submission
function handleSubmit(e) { ... }

// 3. Success/Error Messages
function showMessage(type, message) { ... }
```

#### utils.js (Utilities)
```javascript
// Helper functions
function debounce(func, wait) { ... }
function throttle(func, limit) { ... }
function isInViewport(element) { ... }
```

---

## 🎨 Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --deep-space-blue: #001F54;
  --electric-blue: #0066FF;
  --cyber-cyan: #00D9FF;
  --neon-green: #00FF88;
  --bio-green: #32CD32;
  --quantum-purple: #8B5CF6;
  
  /* Background Colors */
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --bg-section-dark: #0A0E1A;
  --bg-section-light: #F8FAFC;
  --bg-glass: rgba(15, 23, 42, 0.7);
  
  /* Text Colors */
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --text-accent: #00D9FF;
  --text-dark: #0F172A;
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #001F54 0%, #0F172A 50%, #1E1B4B 100%);
  --gradient-card: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
  --gradient-button: linear-gradient(135deg, #0066FF 0%, #00D9FF 100%);
}
```

### Typography Scale
```css
:root {
  /* Font Families */
  --font-primary: 'Inter', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font Sizes - Desktop */
  --text-hero: 6rem;      /* 96px */
  --text-h1: 4.5rem;      /* 72px */
  --text-h2: 3rem;        /* 48px */
  --text-h3: 2.25rem;     /* 36px */
  --text-h4: 1.5rem;      /* 24px */
  --text-body: 1.125rem;  /* 18px */
  --text-small: 0.875rem; /* 14px */
  
  /* Font Sizes - Mobile */
  --text-hero-mobile: 3rem;    /* 48px */
  --text-h1-mobile: 2.5rem;    /* 40px */
  --text-h2-mobile: 2rem;      /* 32px */
  --text-h3-mobile: 1.5rem;    /* 24px */
  --text-h4-mobile: 1.25rem;   /* 20px */
  --text-body-mobile: 1rem;    /* 16px */
  
  /* Font Weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.8;
}
```

### Spacing System
```css
:root {
  /* Base: 4px */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Shadows
```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-glow-cyan: 0 0 20px rgba(0, 217, 255, 0.5);
  --shadow-glow-green: 0 0 20px rgba(0, 255, 136, 0.5);
}
```

### Transitions
```css
:root {
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
  --transition-smooth: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Extra Small: 0px - 639px (default) */
/* Mobile phones */

/* Small: 640px+ */
@media (min-width: 640px) {
  /* Large phones, small tablets */
}

/* Medium: 768px+ */
@media (min-width: 768px) {
  /* Tablets */
}

/* Large: 1024px+ */
@media (min-width: 1024px) {
  /* Laptops, desktops */
}

/* Extra Large: 1280px+ */
@media (min-width: 1280px) {
  /* Large desktops */
}

/* 2X Large: 1536px+ */
@media (min-width: 1536px) {
  /* Ultra-wide screens */
}
```

---

## 🔧 Component Library

### Buttons
```html
<!-- Primary Button -->
<button class="btn btn-primary">
  Get Started
</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">
  Learn More
</button>

<!-- Ghost Button -->
<button class="btn btn-ghost">
  Contact Us
</button>
```

### Cards
```html
<!-- Glass Card -->
<div class="card glass-card">
  <div class="card-icon">
    <!-- Icon -->
  </div>
  <h3 class="card-title">Title</h3>
  <p class="card-description">Description</p>
</div>

<!-- Feature Card -->
<div class="card feature-card">
  <div class="card-icon">
    <!-- Icon -->
  </div>
  <h4 class="card-title">Feature</h4>
  <p class="card-text">Details</p>
</div>
```

### Forms
```html
<!-- Input Field -->
<div class="form-group">
  <label for="name" class="form-label">Name</label>
  <input type="text" id="name" class="form-input" placeholder="Your name">
  <span class="form-error">Error message</span>
</div>

<!-- Textarea -->
<div class="form-group">
  <label for="message" class="form-label">Message</label>
  <textarea id="message" class="form-textarea" rows="5"></textarea>
</div>

<!-- Select -->
<div class="form-group">
  <label for="industry" class="form-label">Industry</label>
  <select id="industry" class="form-select">
    <option>Select...</option>
  </select>
</div>
```

---

## 🎭 Animation Guidelines

### Page Load Sequence
```
1. Logo particle aggregation (1.5s)
2. Hero text fade-in with typing effect (2s)
3. CTA buttons slide up (2.5s)
4. Scroll indicator pulse (3s)
```

### Scroll Animations (AOS)
```javascript
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
  delay: 100
});
```

### Hover Effects
```css
/* Button Hover */
.btn:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-glow-cyan);
}

/* Card Hover */
.card:hover {
  transform: translateY(-8px);
  border-color: var(--cyber-cyan);
}
```

### GSAP Animations
```javascript
// Hero animation
gsap.from('.hero-title', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out'
});

// Scroll-triggered animation
gsap.from('.feature-card', {
  scrollTrigger: {
    trigger: '.feature-card',
    start: 'top 80%'
  },
  opacity: 0,
  y: 30,
  stagger: 0.2
});
```

---

## 🖼️ Image Optimization

### Image Formats
- **WebP**: Primary format (modern browsers)
- **JPEG**: Fallback for photos
- **PNG**: Logos, icons with transparency
- **SVG**: Icons, logos, illustrations

### Image Sizes
```
Hero backgrounds: 1920x1080px (max 300KB)
Section images: 1200x800px (max 200KB)
Card images: 600x400px (max 100KB)
Icons: 64x64px, 48x48px, 32x32px (SVG preferred)
Thumbnails: 300x200px (max 50KB)
```

### Responsive Images
```html
<picture>
  <source srcset="image-large.webp" media="(min-width: 1024px)" type="image/webp">
  <source srcset="image-medium.webp" media="(min-width: 640px)" type="image/webp">
  <source srcset="image-small.webp" type="image/webp">
  <img src="image-fallback.jpg" alt="Description" loading="lazy">
</picture>
```

---

## 🔒 Security & Performance

### Security Headers (_headers file)
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'
```

### Performance Optimizations
- Minify CSS/JS in production
- Lazy load images below fold
- Defer non-critical JavaScript
- Preload critical fonts
- Use CDN for libraries
- Enable Cloudflare caching
- Compress images (WebP)
- Inline critical CSS

---

## 📊 SEO Configuration

### Meta Tags (All Pages)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Page-specific description">
<meta name="keywords" content="AI, synthetic biology, biotech, MiRAiQ">
<meta name="author" content="MIRABO Biotechnology">

<!-- Open Graph -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="https://www.mirabobio.com/og-image.jpg">
<meta property="og:url" content="https://www.mirabobio.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Description">
<meta name="twitter:image" content="https://www.mirabobio.com/twitter-image.jpg">
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://www.mirabobio.com/sitemap.xml
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.mirabobio.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.mirabobio.com/about.html</loc>
    <priority>0.8</priority>
  </url>
  <!-- More URLs -->
</urlset>
```

---

## 🧪 Testing Strategy

### Browser Testing
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Device Testing
- iPhone 12/13/14 (375px, 390px, 428px)
- iPad (768px, 1024px)
- Desktop (1280px, 1920px)
- Ultra-wide (2560px)

### Performance Testing
- Lighthouse audit (target: 95+ all categories)
- PageSpeed Insights
- WebPageTest
- GTmetrix

### Accessibility Testing
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools
- Keyboard navigation
- Screen reader (NVDA, JAWS)

### Functional Testing
- Navigation links
- Mobile menu toggle
- Form validation
- Form submission
- Smooth scroll
- Back-to-top button
- Animations trigger correctly

---

## 🚀 Deployment Workflow

### Development
```bash
# 1. Clone repository
git clone https://github.com/mirabobio/homepage.git
cd homepage

# 2. Open with Live Server (VS Code)
# Right-click index.html > Open with Live Server

# 3. Make changes and test locally
```

### Staging
```bash
# 1. Create feature branch
git checkout -b feature/new-section

# 2. Commit changes
git add .
git commit -m "Add new section"

# 3. Push to GitHub
git push origin feature/new-section

# 4. Cloudflare Pages auto-deploys preview
# Preview URL: https://feature-new-section.mirabobio.pages.dev
```

### Production
```bash
# 1. Merge to main branch
git checkout main
git merge feature/new-section

# 2. Push to main
git push origin main

# 3. Cloudflare Pages auto-deploys to production
# Production URL: https://www.mirabobio.com
```

---

## 📦 Dependencies (CDN)

### CSS Libraries
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- AOS CSS -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
```

### JavaScript Libraries
```html
<!-- AOS JS -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Particles.js -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

### Fonts
```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Icons
```html
<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
```

---

## 🔄 Version Control

### Git Workflow
```
main (production)
  ├── develop (staging)
  │   ├── feature/hero-section
  │   ├── feature/platform-page
  │   └── feature/contact-form
  └── hotfix/critical-bug
```

### Commit Message Convention
```
feat: Add new feature
fix: Fix bug
style: Update styling
docs: Update documentation
refactor: Refactor code
perf: Performance improvement
test: Add tests
chore: Maintenance tasks
```

---

## 📝 Documentation

### Code Comments
```javascript
/**
 * Initialize navigation functionality
 * - Mobile menu toggle
 * - Active state tracking
 * - Smooth scroll to sections
 */
function initNavigation() {
  // Implementation
}
```

### README.md
- Project overview
- Setup instructions
- Development workflow
- Deployment guide
- Contact information

---

## 🎯 Success Metrics

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1
- Largest Contentful Paint: < 2.5s

### Quality Targets
- Lighthouse Performance: > 95
- Lighthouse Accessibility: > 95
- Lighthouse Best Practices: > 95
- Lighthouse SEO: > 95

### Business Targets
- Contact form submissions
- Page views and engagement
- Bounce rate < 40%
- Average session duration > 2 minutes

---

**End of Project Design Document**

This document provides the complete technical architecture and implementation guidelines for the MIRABO Biotechnology website project.
