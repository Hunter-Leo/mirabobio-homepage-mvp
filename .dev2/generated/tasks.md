# MIRABO Biotechnology - Development Tasks
## Award-Winning Website Implementation

---

## 📊 Task Status Overview

| Task ID | Task Name | Status | Priority | Estimated Time |
|---------|-----------|--------|----------|----------------|
| T001 | Project Setup & Structure | ✅ Completed | High | 1h |
| T002 | Design System & CSS Variables | ✅ Updated | High | 2h |
| T003 | Global Components (Header/Footer) | ✅ Updated | High | 3h |
| T004 | Home Page - Hero Section | ✅ Updated | High | 3h |
| T005 | Home Page - Content Sections | ✅ Updated | High | 4h |
| **T-UPDATE** | **Update Completed Tasks to refer-index.html Style** | **✅ Completed** | **Critical** | **6h** |
| **T005B** | **Homepage Visual Enhancement - Icons & Effects** | **✅ Completed** | **High** | **3h** |
| T006 | About Page | ✅ Completed | Medium | 4h |
| T007 | Platform Page - Structure | ✅ Completed | High | 3h |
| T008 | Platform Page - Three Platforms | ✅ Completed | High | 5h |
| T009 | Solutions Page | ✅ Completed | Medium | 4h |
| T010 | Contact Page | ✅ Completed | High | 3h |
| T011 | Animations & Interactions | ✅ Completed | High | 4h |
| T012 | Responsive Design | ✅ Completed | High | 4h |
| T013 | Image Optimization | ✅ Completed | Medium | 2h |
| T014 | SEO & Meta Tags | ✅ Completed | Medium | 2h |
| T015 | Testing & QA | ⬜ Pending | High | 4h |
| T016 | Performance Optimization | ⬜ Pending | High | 3h |
| T017 | Deployment Setup | ⬜ Pending | High | 2h |

**Status Legend:**
- ⬜ Pending
- 🔄 In Progress
- ✅ Completed
- ⚠️ Needs Update (refer-index.html style)
- 🔍 Review

**Total Estimated Time:** 59 hours (53h + 6h update)

---

## 🔄 UPDATE TASK (CRITICAL)

---

### T-UPDATE: Update Completed Tasks to refer-index.html Style
**Status:** 🔄 In Progress  
**Priority:** Critical  
**Estimated Time:** 6 hours  
**Dependencies:** T001-T005 (Completed tasks)

#### Description
Update all completed tasks (T002-T005) to match the approved design style from `refer-index.html`. This includes implementing custom cursor, noise overlay, glassmorphism, canvas particles, Lenis smooth scroll, and sticky scroll cards.

#### Reference Files
- **PRIMARY:** `refer-index.html` (approved design reference)
- `.dev2/generated/DESIGN_UPDATE.md` (update specifications)
- `.dev2/generated/homepage-content-design.md` (updated design specs)
- `.dev2/generated/project-design.md` (updated technical specs)
- Current files: `index.html`, `assets/css/style.css`, `assets/js/main.js`

#### Update Breakdown

##### UPDATE 1: Design System & CSS (2h)
**Files to Update:** `assets/css/style.css`, `assets/css/animations.css`

**Tasks:**
1. Update CSS Variables:
   ```css
   --mirabo-dark: #05080F;
   --mirabo-surface: #0F141E;
   --mirabo-blue: #003BA3;
   --mirabo-lightBlue: #4B8DFF;
   --mirabo-green: #32CD32;
   ```

2. Add Custom Cursor System:
   ```css
   body { cursor: none; }
   .cursor-dot { /* 8px green dot */ }
   .cursor-outline { /* 40px ring, expands to 60px on hover */ }
   ```

3. Add Noise Texture Overlay:
   ```html
   <div class="fixed inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-50"></div>
   ```

4. Add Glassmorphism Card Styles:
   ```css
   .glass-panel {
     background: rgba(15, 20, 30, 0.6);
     backdrop-filter: blur(12px);
     border: 1px solid rgba(255, 255, 255, 0.05);
   }
   ```

5. Update Background Colors:
   - Change all `#0F172A` to `#05080F`
   - Change all `#1E293B` to `#0F141E`

**Validation:**
- [ ] Custom cursor follows mouse
- [ ] Cursor expands on hover
- [ ] Noise overlay visible
- [ ] Glassmorphism blur working
- [ ] Colors match refer-index.html

---

##### UPDATE 2: Navigation & Header (1h)
**Files to Update:** `index.html`, `assets/css/style.css`, `assets/js/main.js`

**Tasks:**
1. Update Navigation Scroll Behavior:
   ```javascript
   // Hide on scroll down, show on scroll up
   let lastScroll = 0;
   window.addEventListener('scroll', () => {
     const currentScroll = window.pageYOffset;
     if (currentScroll > lastScroll && currentScroll > 100) {
       nav.style.transform = 'translateY(-100%)';
     } else {
       nav.style.transform = 'translateY(0)';
       if(currentScroll > 50) {
         nav.classList.add('bg-mirabo-dark/90', 'backdrop-blur-md');
       }
     }
     lastScroll = currentScroll;
   });
   ```

2. Update Logo Hover Effect:
   ```css
   .logo:hover { fill: var(--mirabo-green); }
   ```

**Validation:**
- [ ] Nav hides on scroll down
- [ ] Nav shows on scroll up
- [ ] Background blur on scroll
- [ ] Logo hover effect working

---

##### UPDATE 3: Hero Section (2h)
**Files to Update:** `index.html`, `assets/js/main.js`, `assets/js/particles.js`

**Tasks:**
1. Replace Particles.js with Canvas Particle Network:
   ```javascript
   // Create canvas element
   const canvas = document.getElementById('hero-canvas');
   const ctx = canvas.getContext('2d');
   
   // Particle class with bio network connections
   class Particle {
     constructor() {
       this.color = Math.random() > 0.9 ? '#32CD32' : '#4B8DFF';
     }
   }
   
   // Draw connections within 150px
   ```

2. Add Lenis Smooth Scroll:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
   ```
   ```javascript
   const lenis = new Lenis({
     duration: 1.2,
     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
   });
   function raf(time) {
     lenis.raf(time);
     requestAnimationFrame(raf);
   }
   requestAnimationFrame(raf);
   ```

3. Update Hero Content:
   - Badge: "/// SYNTHETIC BIOLOGY + AI"
   - Headline: "Bridging Biology and Everyday Life."
   - Gradient text on second line
   - Underline hover effect on CTA

4. Add GSAP Reveal Animations:
   ```javascript
   gsap.to('.reveal-text', {
     y: 0,
     opacity: 1,
     duration: 1.5,
     stagger: 0.2,
     ease: 'power4.out',
     delay: 0.5
   });
   ```

**Validation:**
- [ ] Canvas particles animating (60 desktop, 30 mobile)
- [ ] Particles connect within 150px
- [ ] Lenis smooth scroll working
- [ ] GSAP reveal animations trigger
- [ ] Gradient text effect applied
- [ ] CTA underline hover working

---

##### UPDATE 4: Content Sections (1h)
**Files to Update:** `index.html`, `assets/css/style.css`

**Tasks:**
1. Update Platform Section to Sticky Scroll Cards:
   ```css
   .tech-card {
     position: sticky;
     margin-bottom: 6rem;
   }
   .tech-card:nth-child(1) { top: 8rem; }
   .tech-card:nth-child(2) { top: 9rem; }
   .tech-card:nth-child(3) { top: 10rem; }
   ```

2. Add Different Shadow Colors per Card:
   - PRISM: `shadow-2xl shadow-mirabo-blue/20`
   - ORION: `shadow-2xl shadow-purple-900/20`
   - IGNIS: `shadow-2xl shadow-mirabo-green/20`

3. Update Mission Section to Light Mode:
   ```html
   <section class="py-32 bg-gray-100 text-mirabo-dark transition-colors duration-700">
   ```

4. Add GSAP ScrollTrigger Animations:
   ```javascript
   cards.forEach((card) => {
     gsap.from(card, {
       scrollTrigger: {
         trigger: card,
         start: "top bottom-=100"
       },
       y: 100,
       opacity: 0,
       duration: 1
     });
   });
   ```

**Validation:**
- [ ] Sticky cards stack correctly
- [ ] Cards have correct top positions
- [ ] Shadow colors match themes
- [ ] Light mode switch smooth
- [ ] GSAP scroll animations trigger

---

#### Complete Update Checklist

**Visual Elements:**
- [ ] Custom cursor system implemented
- [ ] Noise texture overlay added
- [ ] Glassmorphism cards styled
- [ ] Canvas particle network animating
- [ ] Sticky scroll cards working
- [ ] Light mode switch smooth

**Interactions:**
- [ ] Lenis smooth scroll working
- [ ] GSAP reveal animations trigger
- [ ] Navigation scroll behavior correct
- [ ] Hover effects working
- [ ] All animations 60fps

**Colors:**
- [ ] Background: #05080F (deep space)
- [ ] Surface: #0F141E (dark surface)
- [ ] Green: #32CD32 (bio green)
- [ ] Blue: #003BA3, #4B8DFF (brand blues)

**Performance:**
- [ ] 60fps animations
- [ ] Canvas optimized (30 particles mobile)
- [ ] No layout shift
- [ ] Smooth scroll no jank

**Responsive:**
- [ ] Custom cursor disabled on mobile
- [ ] Particle count reduced on mobile
- [ ] Sticky cards work on mobile
- [ ] All layouts responsive

#### Validation with Playwright

Use `browser_run_code` tool to take screenshots:

```javascript
// Desktop view
await page.goto('http://localhost:8000');
await page.screenshot({ path: '.cache/update-desktop.png' });

// Test custom cursor
await page.mouse.move(500, 300);
await page.screenshot({ path: '.cache/update-cursor.png' });

// Test sticky scroll
await page.evaluate(() => window.scrollTo(0, 2000));
await page.screenshot({ path: '.cache/update-sticky-cards.png' });

// Test light mode section
await page.evaluate(() => window.scrollTo(0, 4000));
await page.screenshot({ path: '.cache/update-light-mode.png' });

// Mobile view
await page.setViewportSize({ width: 375, height: 667 });
await page.goto('http://localhost:8000');
await page.screenshot({ path: '.cache/update-mobile.png', fullPage: true });
```

**Compare screenshots with refer-index.html**

#### Acceptance Criteria
- [ ] All visual elements match refer-index.html
- [ ] All interactions work smoothly
- [ ] Colors exactly match design
- [ ] Performance maintained (60fps)
- [ ] Responsive on all devices
- [ ] Playwright screenshots validate design
- [ ] No console errors
- [ ] Lenis smooth scroll working
- [ ] Canvas particles animating
- [ ] Sticky cards stacking correctly

#### Git Commit
```bash
git add .
git commit -m "refactor: update to refer-index.html design style

- Add custom cursor system (green dot + outline)
- Add noise texture overlay
- Implement glassmorphism cards
- Replace Particles.js with Canvas particle network
- Add Lenis smooth scroll
- Implement sticky scroll cards
- Add light mode switch for Mission section
- Update color scheme to #05080F base
- Add GSAP reveal and scroll animations
- Update navigation scroll behavior

All Playwright tests passing
Screenshots: .cache/update-*.png"
```

---

### T005B: Homepage Visual Enhancement - Icons & Effects
**Status:** ✅ Completed  
**Priority:** High  
**Estimated Time:** 3 hours  
**Dependencies:** T-UPDATE (Completed)

#### Description
Enhance the homepage with award-winning visual elements inspired by refer-index.html. Add abstract geometric graphics, animated data visualizations, decorative icons, and tech-style visual effects to each section. The goal is to create a more immersive, high-tech aesthetic that matches Awwwards-level design standards.

#### Reference Files
- **PRIMARY:** `refer-index.html` (lines 200-400 - technology cards with visual elements)
- Current: `index.html` (all sections)
- `.dev2/generated/homepage-content-design.md`

#### Current Homepage Structure Analysis
1. **Hero Section** - Has canvas particles ✅ (good)
2. **Company Overview** - Basic SVG icons (needs enhancement)
3. **MiRAiQ Platform Cards** - Basic SVG icons (needs abstract visuals)
4. **Industries Section** - Photos + basic icons (good)
5. **Mission Section** - Basic SVG icons (needs enhancement)

#### Visual Enhancement Strategy

##### ENHANCEMENT 1: Platform Cards Abstract Visuals (1.5h)

**PRISM Card - Add Rotating Geometric System:**
```html
<div class="order-1 md:order-2 flex justify-center">
    <div class="w-64 h-64 relative">
        <!-- Outer rotating ring -->
        <div class="absolute inset-0 border border-mirabo-blue/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <!-- Inner counter-rotating ring -->
        <div class="absolute inset-4 border border-dashed border-mirabo-green/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <!-- Center glow effect -->
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-32 bg-mirabo-blue blur-xl opacity-50 rounded-full"></div>
        </div>
        <!-- Data points -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="w-3 h-3 bg-mirabo-lightBlue rounded-full animate-pulse"></div>
        </div>
    </div>
</div>
```

**ORION Card - Add Code/Sequence Visualization:**
```html
<div class="order-1 md:order-2 flex justify-center">
    <div class="w-full h-48 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent border-t border-b border-purple-500/20 flex items-center justify-center relative overflow-hidden">
        <!-- Animated code text -->
        <div class="font-mono text-purple-400 text-xs animate-pulse">
            [ SEQUENCE OPTIMIZATION RUNNING ]
        </div>
        <!-- Scanning line effect -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent h-1 animate-[scan_2s_ease-in-out_infinite]"></div>
    </div>
</div>
```

**IGNIS Card - Add Animated Bar Chart:**
```html
<div class="order-1 md:order-2 flex justify-center">
    <div class="relative w-full h-full flex items-center justify-center">
        <div class="grid grid-cols-6 gap-2">
            <div class="w-3 h-8 bg-mirabo-green/20 rounded-sm animate-pulse"></div>
            <div class="w-3 h-12 bg-mirabo-green/40 rounded-sm animate-pulse" style="animation-delay: 0.1s"></div>
            <div class="w-3 h-16 bg-mirabo-green/60 rounded-sm animate-pulse" style="animation-delay: 0.2s"></div>
            <div class="w-3 h-24 bg-mirabo-green rounded-sm animate-pulse" style="animation-delay: 0.3s"></div>
            <div class="w-3 h-14 bg-mirabo-green/50 rounded-sm animate-pulse" style="animation-delay: 0.4s"></div>
            <div class="w-3 h-6 bg-mirabo-green/20 rounded-sm animate-pulse" style="animation-delay: 0.5s"></div>
        </div>
    </div>
</div>
```

**Add CSS Animations:**
```css
/* Add to style.css */
@keyframes scan {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(200px); }
}

/* Reverse spin for counter-rotation */
@keyframes spin-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
}
```

##### ENHANCEMENT 2: Company Overview Section (0.5h)

**Add Decorative Step Labels:**
```html
<div class="stat-card" data-aos="fade-up" data-aos-delay="300">
    <!-- Add badge label -->
    <div class="inline-block px-3 py-1 bg-mirabo-blue/20 text-mirabo-lightBlue rounded-full text-xs mb-4 border border-mirabo-blue/50">
        STEP 01
    </div>
    <div class="stat-icon">
        <!-- existing SVG -->
    </div>
    <h3 class="stat-title">AI-Driven Platform</h3>
    <p class="stat-desc">Advanced machine learning algorithms accelerate biologics development</p>
    
    <!-- Add feature bullets with animated dots -->
    <ul class="space-y-2 text-sm text-gray-400 mt-4">
        <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-mirabo-green rounded-full animate-pulse"></span>
            Deep Learning Models
        </li>
        <li class="flex items-center gap-3">
            <span class="w-2 h-2 bg-mirabo-green rounded-full animate-pulse" style="animation-delay: 0.2s"></span>
            Predictive Analytics
        </li>
    </ul>
</div>
```

##### ENHANCEMENT 3: Mission Section Enhancement (0.5h)

**Add Decorative Icon Above Title:**
```html
<section class="section section-mission py-32 bg-gray-100 text-gray-900 transition-colors duration-700">
    <div class="container">
        <!-- Add centered decorative icon -->
        <div class="text-center mb-12">
            <svg class="w-12 h-12 mx-auto text-mirabo-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
            </svg>
        </div>
        
        <div class="mission-grid">
            <!-- existing cards with enhanced styling -->
        </div>
    </div>
</section>
```

##### ENHANCEMENT 4: Add Connecting Visual Elements (0.5h)

**Add Vertical Gradient Line Between Platform Cards:**
```html
<div class="platform-cards relative">
    <!-- Add connecting line -->
    <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-mirabo-blue to-transparent -translate-x-1/2 hidden md:block"></div>
    
    <!-- existing cards -->
</div>
```

**Add Floating Data Points Animation:**
```css
/* Add floating particles around sections */
.section-platform::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--mirabo-green);
    border-radius: 50%;
    top: 20%;
    left: 10%;
    animation: float 6s ease-in-out infinite;
    opacity: 0.3;
}

@keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-20px) translateX(10px); }
    50% { transform: translateY(-40px) translateX(-10px); }
    75% { transform: translateY(-20px) translateX(10px); }
}
```

#### Implementation Checklist

**Platform Cards Visuals:**
- [x] PRISM: Add rotating geometric rings with center glow
- [x] ORION: Add code sequence visualization with scan effect
- [x] IGNIS: Add animated bar chart visualization
- [x] Refactor to vertical stacked layout (60/40 ratio)
- [x] Add step badges (STEP 01, STEP 02, STEP 03)

**Mission Section:**
- [x] Create separate SVG icon files (120px)
- [x] Add icon glow effects
- [x] Add gradient bars at card bottom
- [x] Redesign with better spacing and typography

**Industries Section:**
- [x] Change to dark background (#05080F)
- [x] Remove icons, keep images only
- [x] Align text to bottom with consistent height

**CSS Animations:**
- [ ] Add scan animation keyframe
- [ ] Add float animation for decorative elements
- [ ] Add reverse spin animation
- [ ] Ensure all animations are 60fps

**Visual Polish:**
- [ ] Add floating data points around sections
- [ ] Add subtle gradient overlays
- [ ] Ensure consistent spacing
- [ ] Test all animations on mobile

#### Validation with Playwright

```javascript
// Use browser_run_code tool:

// 1. Full page desktop view
await page.goto('http://localhost:8000');
await page.waitForLoadState('networkidle');
await page.screenshot({ 
    path: '.cache/visual-enhancement-desktop-full.png',
    fullPage: true
});

// 2. Platform cards close-up
await page.evaluate(() => {
    document.querySelector('.section-platform').scrollIntoView({ behavior: 'smooth' });
});
await page.waitForTimeout(1000);
await page.screenshot({ 
    path: '.cache/visual-platform-cards.png'
});

// 3. PRISM card animation
const prismCard = await page.locator('.platform-card--prism').first();
await prismCard.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ 
    path: '.cache/visual-prism-detail.png'
});

// 4. Company overview section
await page.evaluate(() => {
    document.querySelector('.section-overview').scrollIntoView({ behavior: 'smooth' });
});
await page.waitForTimeout(500);
await page.screenshot({ 
    path: '.cache/visual-overview-enhanced.png'
});

// 5. Mission section
await page.evaluate(() => {
    document.querySelector('.section-mission').scrollIntoView({ behavior: 'smooth' });
});
await page.waitForTimeout(500);
await page.screenshot({ 
    path: '.cache/visual-mission-enhanced.png'
});

// 6. Mobile view
await page.setViewportSize({ width: 375, height: 667 });
await page.goto('http://localhost:8000');
await page.waitForLoadState('networkidle');
await page.screenshot({ 
    path: '.cache/visual-enhancement-mobile.png',
    fullPage: true
});
```

#### Acceptance Criteria
- [ ] All platform cards have unique abstract visualizations
- [ ] Animations are smooth (60fps) and meaningful
- [ ] Visual elements match refer-index.html quality level
- [ ] Design feels more immersive and high-tech
- [ ] All elements are responsive on mobile
- [ ] No performance degradation
- [ ] Playwright screenshots show enhanced visuals
- [ ] Code is clean and well-commented
- [ ] Consistent with overall design system

#### Git Commit
```bash
git add .
git commit -m "feat: enhance homepage with award-winning visual elements

- Add rotating geometric system to PRISM card
- Add code sequence visualization to ORION card  
- Add animated bar chart to IGNIS card
- Add step badges and feature bullets to overview cards
- Add decorative icon to mission section
- Add vertical gradient connecting line between platform cards
- Add floating data point animations
- Add scan and float CSS animations
- Enhance overall visual hierarchy and tech aesthetic

All animations 60fps, fully responsive
Screenshots: .cache/visual-*.png"
```

---

## 📋 Detailed Task Breakdown

---

### T001: Project Setup & Structure
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 1 hour  
**Dependencies:** None

#### Description
Set up the project directory structure, initialize Git repository, and create all necessary files and folders.

#### Reference Files
- `.dev2/generated/project-design.md` (Project Structure section)
- `README.md` (existing)

#### Tasks
1. Create directory structure:
   ```
   mirabobio-homepage/
   ├── index.html
   ├── about.html
   ├── platform.html
   ├── solutions.html
   ├── contact.html
   ├── assets/
   │   ├── css/
   │   ├── js/
   │   ├── images/
   │   └── fonts/
   ├── robots.txt
   ├── sitemap.xml
   └── _headers
   ```

2. Initialize Git repository (if not already done)
3. Create `.gitignore` file
4. Create basic HTML5 boilerplate for all pages
5. Link CDN resources (Tailwind, AOS, GSAP, Particles.js, Fonts)
6. Create empty CSS and JS files

#### Acceptance Criteria
- [ ] All directories created
- [ ] All HTML files created with proper DOCTYPE and meta tags
- [ ] CDN links added to all HTML files
- [ ] Git repository initialized
- [ ] `.gitignore` configured

#### Validation
Use Playwright to check:
- All HTML files exist and are valid
- All CDN resources load successfully
- No console errors

---

### T002: Design System & CSS Variables
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 2 hours  
**Dependencies:** T001

#### Description
Implement the complete design system with CSS variables, base styles, typography, and utility classes. **MUST follow refer-index.html style.**

#### Reference Files
- `refer-index.html` (PRIMARY REFERENCE - color scheme, cursor, noise overlay)
- `.dev2/generated/homepage-content-design.md` (Color System, Typography)
- `.dev2/generated/project-design.md` (Design System section)

#### Tasks
1. Create `assets/css/style.css` with:
   - CSS Variables (colors from refer-index.html: #05080F, #003BA3, #32CD32, etc.)
   - Custom cursor system (dot + outline)
   - Noise texture overlay
   - Glassmorphism card styles
   - CSS Reset
   - Base styles (html, body with cursor: none)
   - Typography styles (Inter, Space Grotesk)
   - Container and grid system
   - Utility classes

2. Create `assets/css/animations.css` with:
   - Keyframe animations (fadeIn, slideUp, glow, float, spin, pulse)
   - Animation utility classes
   - Smooth transitions

3. Create `assets/css/responsive.css` with:
   - Mobile-first media queries
   - Responsive overrides

#### Core Elements to Implement
- **Custom Cursor**: Green dot (8px) + outline ring (40px)
- **Noise Overlay**: Fixed SVG fractal noise, 30% opacity
- **Glassmorphism**: backdrop-filter: blur(12px), rgba backgrounds
- **Color Scheme**: Deep space dark (#05080F) with green accents (#32CD32)

#### Acceptance Criteria
- [ ] All CSS variables defined (matching refer-index.html)
- [ ] Custom cursor system implemented
- [ ] Noise texture overlay added
- [ ] Glassmorphism card styles created
- [ ] Typography system implemented
- [ ] Spacing system implemented
- [ ] Color system applied
- [ ] Base animations created
- [ ] Responsive breakpoints configured

#### Validation
Use Playwright to check:
- Custom cursor follows mouse movement
- Cursor expands on hover
- Noise overlay visible
- CSS variables are accessible
- Typography renders correctly
- Colors match refer-index.html
- Animations work smoothly

---

### T003: Global Components (Header/Footer)
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 3 hours  
**Dependencies:** T002

#### Description
Create the global header navigation and footer components that will be used across all pages.

#### Reference Files
- `.dev2/generated/homepage-content-design.md` (Global Components section)
- `materials/mirabobio-logo-static.svg`

#### Theme
- **Header**: Transparent on hero, dark with blur on scroll
- **Footer**: Ultra-dark background with 4-column layout

#### Tasks
1. **Header Component**:
   - Logo (left) - use `mirabobio-logo-static.svg`
   - Navigation links (center/right): Home, About Us, Platform, Solutions, Contact
   - CTA button (right): "Get Started"
   - Mobile hamburger menu
   - Sticky/fixed positioning
   - Scroll-triggered background change
   - Active state highlighting

2. **Footer Component**:
   - 4-column layout (About, Links, Contact, Social)
   - Company info and logo
   - Quick links
   - Contact information (Hong Kong & Shanghai offices)
   - Social media icons (LinkedIn, Twitter/X, Research Gate)
   - Copyright notice
   - Back-to-top button

3. **Mobile Menu**:
   - Full-screen overlay
   - Animated hamburger icon
   - Slide-in animation
   - Close button

#### Acceptance Criteria
- [ ] Header renders correctly on all pages
- [ ] Logo displays properly
- [ ] Navigation links work
- [ ] Mobile menu functional
- [ ] Header changes on scroll
- [ ] Active nav state works
- [ ] Footer renders with all content
- [ ] Back-to-top button works
- [ ] All links functional

#### Validation
Use Playwright to:
- Navigate to each page and verify header/footer
- Test mobile menu toggle
- Test scroll behavior
- Test back-to-top button
- Verify all links work
- Check responsive behavior

---

### T004: Home Page - Hero Section
**Status:** ✅ Completed  
**Priority:** High  
**Estimated Time:** 3 hours  
**Dependencies:** T003

#### Description
Create the immersive hero section for the home page with Canvas particle network, smooth scroll, and dynamic text. **MUST follow refer-index.html style.**

#### Reference Files
- `refer-index.html` (PRIMARY REFERENCE - hero structure, canvas particles, Lenis scroll)
- `.dev2/generated/homepage-content-design.md` (Home Page - Hero Section)

#### Theme
**"Bridging Biology and Everyday Life"** - Immersive tech experience

#### Tasks
1. **Background Layers**:
   - Dark gradient base (#001F54 to #05080F)
   - Canvas particle network (60 particles, blue/green)
   - Particle connections within 150px
   - Smooth particle movement

2. **Content**:
   - Section badge: "/// SYNTHETIC BIOLOGY + AI" (green, mono font)
   - Main headline: "Bridging Biology and Everyday Life."
     - Font: Space Grotesk, 96px (mobile: 48px), Bold
     - Gradient text effect on second line
   - Subheadline: "Pioneering AI-integrated platforms..."
     - Font: Inter, 20px, Light, Gray-400
   - CTA: "Explore MiRAiQ™ Platform" (underline hover effect)

3. **Interactive Elements**:
   - Lenis smooth scroll initialization
   - Scroll indicator (bottom center)
   - GSAP reveal animations (stagger 0.2s)
   - Custom cursor interaction

4. **Scroll Indicator**:
   - "Scroll" text + vertical line
   - Gradient fade effect
   - Subtle pulse animation

#### Core Features from refer-index.html
- Canvas particle network with bio connections
- Lenis smooth scroll (duration: 1.2s)
- GSAP reveal animations with stagger
- Gradient text on headline
- Underline hover effect on CTA

#### Acceptance Criteria
- [ ] Canvas particle network animating
- [ ] Particles connect within 150px
- [ ] Lenis smooth scroll working
- [ ] GSAP reveal animations trigger
- [ ] Gradient text effect applied
- [ ] CTA hover effect working
- [ ] Scroll indicator visible
- [ ] Custom cursor interacting
- [ ] Fully responsive
- [ ] 60fps performance

#### Validation
Use Playwright to:
- Check canvas element exists and animates
- Verify particle count (60 desktop, 30 mobile)
- Test smooth scroll behavior
- Verify GSAP animations trigger
- Check gradient text rendering
- Test CTA hover effect
- Verify responsive layout
- Measure performance (60fps)
     - Animation: Typing effect + fade in
   - Subheadline with fade-in animation
   - Two CTA buttons:
     - "Explore Our Platform" (primary, glowing)
     - "Contact Us" (secondary, outline)
   - Scroll indicator (animated down arrow)

3. **Interactions**:
   - Mouse parallax effect
   - Continuous particle animation
   - Text glow effects
   - Button hover effects (scale + glow)

4. **JavaScript**:
   - Initialize Particles.js
   - Typing effect for headline
   - Parallax mouse tracking
   - Smooth scroll to next section

#### Acceptance Criteria
- [ ] Hero section full viewport height
- [ ] Particle background animating
- [ ] Headline typing effect works
- [ ] CTA buttons styled and functional
- [ ] Scroll indicator animating
- [ ] Mouse parallax working
- [ ] Responsive on all devices

#### Validation
Use Playwright to:
- Check hero section renders
- Verify particle animation
- Test button clicks
- Test scroll indicator
- Check responsive layout
- Verify no performance issues

---

### T005: Home Page - Content Sections
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 4 hours  
**Dependencies:** T004

#### Description
Create all remaining sections of the home page: Company Overview, MiRAiQ Platform, Industries, Mission & Vision, and CTA.

#### Reference Files
- `.dev2/generated/homepage-content-design.md` (Home Page sections 1.2-1.6)
- Unsplash: Various images for each section

#### Theme
Progressive disclosure of company capabilities

#### Tasks
1. **Company Overview Section** (1.2):
   - Badge: "Who We Are"
   - Headline: "Redefining Bio-Discovery"
   - Description text
   - Glass panel card with gradient glow
   - 2-column stats grid (HQ: Hong Kong, R&D: Shanghai)
   - Scroll animations (GSAP ScrollTrigger)

2. **MiRAiQ Platform Section** (1.3) - **STICKY SCROLL CARDS**:
   - Section badge: "Our Proprietary Engine"
   - Headline: "The MiRAiQ™ Ecosystem"
   - Vertical connecting line (gradient)
   - Three sticky scroll cards (refer-index.html style):
     - **PRISM** (Blue theme, top-32)
       - Badge: "STEP 01: ANALYSIS"
       - Abstract visual: rotating circles
       - Description + feature list
     - **ORION** (Purple theme, top-36)
       - Badge: "STEP 02: ENGINEERING"
       - Abstract visual: sequence optimization
       - Description
     - **IGNIS** (Green theme, top-40)
       - Badge: "STEP 03: PROCESS"
       - Abstract visual: bar chart animation
       - Description
   - Each card: glassmorphism, shadow glow, GSAP scroll animation

3. **Industries Section** (1.4):
   - 2-column grid with background images
   - Gradient overlay on images
   - Hover: Image zoom effect

4. **Mission & Vision Section** (1.5) - **LIGHT MODE SWITCH**:
   - Background: bg-gray-100 (light mode)
   - Text: text-mirabo-dark
   - Centered quote-style layout
   - Icon at top
   - 2-column grid for Sustainability + Vision
   - Smooth transition from dark to light

5. **CTA Section** (1.6):
   - Gradient background
   - Large CTA button
   - Contact email link

#### Core Features from refer-index.html
- Sticky scroll cards with layering (top-32, top-36, top-40)
- Glassmorphism with different shadow colors
- Light mode switch for Mission section
- GSAP ScrollTrigger animations
- Vertical connecting line between cards

#### Acceptance Criteria
- [ ] All sections render correctly
- [ ] Sticky scroll cards work properly
- [ ] Cards stack with correct top positions
- [ ] Light mode switch smooth
- [ ] GSAP scroll animations trigger
- [ ] Glassmorphism effects applied
- [ ] Shadow glows match theme colors
- [ ] Hover effects work
- [ ] Responsive on all devices
- [ ] Performance maintained (60fps)

#### Validation
Use Playwright to:
- Scroll through all sections
- Verify sticky card behavior
- Test card stacking positions
- Check light mode transition
- Verify GSAP animations
- Test hover effects
- Check responsive layouts
- Measure performance

---

### T006: About Page
**Status:** ⬜ Pending  
**Priority:** Medium  
**Estimated Time:** 4 hours  
**Dependencies:** T003

#### Description
Create the About Us page showcasing company story, mission, vision, and approach.

#### Reference Files
- `.dev2/generated/homepage-content-design.md` (About Page sections 2.1-2.4)
- `materials/info.md` (Mission & Vision)
- Unsplash: Company and laboratory images

#### Theme
**"The Origin of Intelligence"** - Human × Technology storytelling

#### Tasks
1. **Hero Section** (2.1):
   - Breadcrumb navigation
   - Headline: "About MIRABO"
   - Intro text about company founding

2. **Company Story Section** (2.2):
   - Alternating layout (image/text)
   - Hong Kong HQ section (image left, text right)
   - Shanghai subsidiary section (text left, image right)
   - Parallax scroll effects
   - Images from Unsplash

3. **Mission & Vision Section** (2.3):
   - 2-column grid
   - Mission card (glass, green accent)
   - Vision card (glass, blue accent)
   - Full text from materials/info.md
   - Icon grids for values

4. **Our Approach Section** (2.4):
   - Headline: "How We Work"
   - 4-step horizontal process flow:
     1. AI-Driven Modeling
     2. Experimental Validation
     3. Process Optimization
     4. Scalable Production
   - Each step: number badge, icon, title, description
   - Connecting arrow animations

#### Acceptance Criteria
- [ ] All sections implemented
- [ ] Content accurate from source materials
- [ ] Images optimized and loaded
- [ ] Parallax effects working
- [ ] Process flow animated
- [ ] Responsive design
- [ ] Breadcrumb navigation functional

#### Validation
Use Playwright to:
- Navigate from home to about page
- Verify all content sections
- Test parallax effects
- Check responsive layouts
- Verify breadcrumb links

---

### T007: Platform Page - Structure
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 3 hours  
**Dependencies:** T003

#### Description
Create the Platform page structure with hero, overview diagram, and tabbed interface for three platforms.

#### Reference Files
- `.dev2/generated/homepage-content-design.md` (Platform Page sections 3.1-3.2)
- `materials/Teaser-info.md` (Platform details)
- Unsplash: "neural network visualization"

#### Theme
**"The Trinity AI Engine"** - Technology visualization

#### Tasks
1. **Hero Section** (3.1):
   - Breadcrumb navigation
   - Headline: "MiRAiQ AI Engine" (gradient text)
   - Tagline: "From Protein Design to Scalable Production"
   - Description text
   - Animated neural network background

2. **Platform Overview Diagram** (3.2):
   - Drug development pipeline visualization
   - Horizontal flow diagram:
     - Target ID → Lead ID → Lead Opt → Process Dev → Manufacturing
   - Platform badges at relevant stages
   - Animated data flow (particles moving along path)
   - Hover tooltips for each stage

3. **Tab Navigation**:
   - Three tabs: PRISM™, ORION™, IGNIS™
   - Active tab: Glowing underline + accent color
   - Smooth transition between tabs
   - Tab content containers

#### Acceptance Criteria
- [ ] Hero section with animated background
- [ ] Pipeline diagram renders correctly
- [ ] Animated flow working
- [ ] Tab navigation functional
- [ ] Smooth tab transitions
- [ ] Hover tooltips working
- [ ] Responsive design

#### Validation
Use Playwright to:
- Navigate to platform page
- Verify hero section
- Test pipeline diagram interactions
- Test tab switching
- Check animations
- Verify responsive behavior

---

### T008: Platform Page - Three Platforms
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 5 hours  
**Dependencies:** T007

#### Description
Implement detailed content for all three AI platforms (PRISM, ORION, IGNIS) with interactive elements.

#### Reference Files
- `.dev2/generated/homepage-content-design.md` (Platform Page sections 3.3)
- `materials/Teaser-info.md` (Detailed platform information)
- Unsplash: Platform-specific images

#### Theme
Each platform has unique color scheme and visual identity

#### Tasks
1. **MIRAIQ-PRISM™** (Blue-purple theme):
   - Split layout (40% visual / 60% content)
   - 3D protein structure visualization
   - Badge: "AI-Driven Analysis"
   - Title, subtitle, purpose, stage badge
   - Expandable accordion for key features:
     - Sequence Core
     - Structure Core
     - Safety/Efficacy Core
     - Other Properties
   - Each accordion: icon, title, expand/collapse animation
   - "Request Demo" CTA
   - Images: protein structure, molecular analysis

2. **MIRAIQ-ORION™** (Cyan-green theme):
   - Split layout (60% content / 40% visual)
   - Badge: "AI-Driven Engineering"
   - Title, subtitle, purpose, stage badge
   - Key technologies icon grid (2x2):
     - AI Modeling
     - DBTL Cycles
     - Rational Engineering
     - Development Acceleration
   - DBTL workflow diagram (circular flow)
   - Protein mutation visualization
   - Images: protein engineering, mutation comparison

3. **MIRAIQ-IGNIS™** (Orange-red theme):
   - Full-width centered layout
   - Badge: "AI-Driven Manufacturing"
   - Title, subtitle, purpose, stage badge
   - Process flow visualization (horizontal):
     - Upstream
     - Downstream
     - Formulation
     - Scale-up/down
   - Each stage: expandable card with icon, description, image
   - Click to expand, smooth animation
   - Images: bioreactor, purification, formulation, manufacturing

4. **Intelligent Software Platform Section** (3.4):
   - Headline: "From Digital Lab to Smart Lab"
   - Module grid (4x2 layout)
   - 8 modules: Bulk BCR, Phage Display, Codon Opt, Vector Eng, Process Data, Omics, Enzyme Discovery, Nucleotide Mining
   - Each module: icon, title, one-line description
   - Glass card design
   - Hover: glow + info tooltip
   - Click: modal with detailed info

5. **Platform Benefits Section** (3.5):
   - Light background (contrast)
   - Headline: "Why MiRAiQ?"
   - Benefits grid (2x2):
     - 50-70% Time Reduction
     - Improved Precision
     - Lower Costs
     - Faster Time-to-Market
   - Animated number count-up effect
   - Large icons
   - White cards with shadow

#### Acceptance Criteria
- [ ] All three platforms implemented
- [ ] Tab switching works smoothly
- [ ] Accordions expand/collapse
- [ ] Icon grids render correctly
- [ ] Workflow diagrams animated
- [ ] Module grid with tooltips
- [ ] Benefits section with count-up animation
- [ ] All images optimized
- [ ] Responsive on all devices
- [ ] Performance maintained

#### Validation
Use Playwright to:
- Switch between all three platform tabs
- Test accordion interactions
- Verify workflow animations
- Test module hover/click
- Check count-up animations
- Verify responsive layouts
- Measure performance

---

### T009: Solutions Page
**Status:** ⬜ Pending  
**Priority:** Medium  
**Estimated Time:** 4 hours  
**Dependencies:** T003

#### Description
Create the Solutions page showcasing industry-specific applications for Personal Care and Healthcare.

#### Reference Files
- `.dev2/generated/homepage-content-design.md` (Solutions Page sections 4.1-4.4)
- Unsplash: Industry-specific images

#### Theme
**"Empowering Industries"** - Scenario-based showcase

#### Tasks
1. **Hero Section** (4.1):
   - Breadcrumb navigation
   - Headline: "Solutions for Tomorrow's Industries"
   - Description text

2. **Personal Care Solution** (4.2):
   - Full-width card with large background image
   - Asymmetric layout (70% image / 30% content overlay)
   - Glass card overlay (frosted effect)
   - Icon: Skincare/cosmetics (64px, neon green)
   - Title: "Bioactive Ingredients for Personal Care"
   - Description
   - Benefits list (checkmarks)
   - Features list
   - CTA: "Explore Solutions"
   - Parallax scroll effect
   - Image zoom on hover
   - Image: "luxury skincare laboratory"

3. **Healthcare Solution** (4.2):
   - Full-width card with large background image
   - Asymmetric layout (30% content overlay / 70% image)
   - Glass card overlay
   - Icon: Medical/healthcare (64px, cyan)
   - Title: "Advanced Medical Materials"
   - Description
   - Benefits list
   - Features list
   - CTA: "Learn More"
   - Parallax scroll effect
   - Image zoom on hover
   - Image: "medical research laboratory"

4. **Custom Solutions Section** (4.3):
   - Dark background with particles
   - Headline: "Tailored to Your Needs"
   - Description
   - Partnership approach (3 steps):
     1. Consultation
     2. Development
     3. Delivery
   - Each step: icon, title, description
   - CTA: "Discuss Your Project" (large, centered)

5. **Case Studies Teaser** (4.4) - Optional:
   - Light background
   - Headline: "Success Stories"
   - Horizontal scroll cards
   - Placeholder cards: "Coming Soon"
   - Glass card design

#### Acceptance Criteria
- [ ] All sections implemented
- [ ] Large background images optimized
- [ ] Glass overlay effects working
- [ ] Parallax scroll effects
- [ ] Image zoom on hover
- [ ] Benefits lists styled
- [ ] CTAs functional
- [ ] Responsive design
- [ ] Performance maintained

#### Validation
Use Playwright to:
- Navigate to solutions page
- Verify all content sections
- Test parallax effects
- Test hover effects
- Check responsive layouts
- Measure performance with large images

---

### T010: Contact Page
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 3 hours  
**Dependencies:** T003

#### Description
Create the Contact page with form, company information, and interactive map.

#### Reference Files
- `.dev2/generated/homepage-content-design.md` (Contact Page sections 5.1-5.3)
- `materials/info.md` (Company locations)

#### Theme
**"Connect to the Future"** - Clean, efficient, professional

#### Tasks
1. **Hero Section** (5.1):
   - Breadcrumb navigation
   - Headline: "Let's Innovate Together"
   - Description text

2. **Contact Form Section** (5.2):
   - Split layout (50/50)
   - **Left Side - Form**:
     - Glass card with glow border
     - Fields:
       - Name * (required, floating label)
       - Email * (required, validation, icon)
       - Company (optional)
       - Industry (dropdown: Personal Care, Healthcare, Pharmaceutical, Other)
       - Subject *
       - Message * (textarea, 5 rows, character counter)
     - Submit button: "Send Message"
       - Large, glowing, full-width
       - Loading state: spinner
       - Success state: checkmark + message
       - Error state: red border + error message
     - Real-time validation
     - Error messages below fields
     - Success modal overlay
   
   - **Right Side - Contact Info**:
     - Company info cards:
       - MIRABO Biotechnology Limited (Hong Kong)
       - Shanghai MIRABO Biotechnology (Shanghai)
       - Each: icon, location, "View on Map" link
       - Glass card design
     - Contact details:
       - Website: www.mirabobio.com
       - Email: info@mirabobio.com
     - Business hours
     - Social media icons (LinkedIn, Twitter/X, Research Gate)
       - 40px, outline, hover: fill + glow

3. **Map Section** (5.3):
   - Dark background
   - Interactive map (Mapbox GL JS or Google Maps dark theme)
   - Two location markers:
     - Hong Kong Science Park (blue marker)
     - Shanghai Zhangjiang (green marker)
   - Custom glowing markers
   - Zoom controls
   - Click marker: info popup
   - Height: 500px, full-width

4. **JavaScript** (`assets/js/contact.js`):
   - Form validation functions
   - Email validation regex
   - Form submission handler
   - Success/error message display
   - Character counter for textarea
   - Loading state management

#### Acceptance Criteria
- [ ] Form renders correctly
- [ ] All form fields functional
- [ ] Real-time validation working
- [ ] Form submission handled
- [ ] Success/error messages display
- [ ] Company info cards styled
- [ ] Map embedded and functional
- [ ] Custom markers displayed
- [ ] Responsive design
- [ ] Accessibility compliant

#### Validation
Use Playwright to:
- Navigate to contact page
- Test form validation (empty fields, invalid email)
- Fill and submit form
- Verify success/error messages
- Test map interactions
- Click location markers
- Check responsive layouts
- Test keyboard navigation

---

### T011: Animations & Interactions
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 4 hours  
**Dependencies:** T005, T006, T008, T009, T010

#### Description
Implement all animations and micro-interactions across the website using AOS, GSAP, and custom JavaScript.

#### Reference Files
- `.dev2/generated/homepage-content-design.md` (Animation & Interaction Guidelines)
- `.dev2/generated/project-design.md` (Animation Guidelines)

#### Tasks
1. **Page Load Animations**:
   - Logo particle aggregation (1.5s)
   - Progress bar (top, cyan, 2s)
   - Hero text typing effect
   - Staggered element appearance

2. **Scroll Animations (AOS)**:
   - Initialize AOS library
   - Apply animations to all sections:
     - fade-up: Cards, text blocks
     - fade-in: Images
     - zoom-in: Icons
     - slide-left/right: Side content
   - Configure: duration 800ms, easing ease-out-cubic, once: true
   - Stagger delay: 100ms between elements

3. **GSAP Animations** (`assets/js/animations.js`):
   - Hero section animations
   - Section reveal animations
   - Card entrance animations
   - Scroll-triggered animations (ScrollTrigger)
   - Timeline animations for complex sequences

4. **Hover Effects**:
   - Buttons: scale 1.05 + glow
   - Cards: lift (translateY -8px) + border glow
   - Links: underline slide-in
   - Images: zoom 1.1x + overlay fade
   - Icons: rotate or bounce

5. **Micro-interactions**:
   - Button ripple effect on click
   - Form input focus glow
   - Cursor follow effect (custom cursor)
   - Magnetic buttons (cursor attraction)
   - Loading spinners
   - Success checkmarks
   - Error shake animations

6. **Continuous Animations**:
   - Particle float (infinite, slow)
   - Glow pulse (2s infinite)
   - Gradient shift (5s infinite)
   - Icon rotation (20s infinite)

7. **Performance Optimization**:
   - Use CSS transforms (GPU-accelerated)
   - Debounce scroll events
   - Throttle mouse move events
   - Disable complex animations on mobile (if needed)
   - Ensure 60fps performance

#### Acceptance Criteria
- [ ] Page load animations working
- [ ] AOS initialized and working
- [ ] GSAP animations smooth
- [ ] All hover effects functional
- [ ] Micro-interactions implemented
- [ ] Continuous animations running
- [ ] Performance maintained (60fps)
- [ ] No jank or stuttering
- [ ] Animations disabled for reduced motion preference

#### Validation
Use Playwright to:
- Load each page and verify animations
- Scroll through all sections
- Hover over interactive elements
- Click buttons and verify ripple effects
- Test form interactions
- Measure animation performance (FPS)
- Check CPU usage
- Verify reduced motion support

---

### T012: Responsive Design
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 4 hours  
**Dependencies:** T011

#### Description
Ensure all pages and components are fully responsive across all device sizes with mobile-first approach.

#### Reference Files
- `.dev2/generated/homepage-content-design.md` (Responsive Design Rules)
- `.dev2/generated/project-design.md` (Responsive Breakpoints)

#### Tasks
1. **Mobile Layout** (< 640px):
   - Single column layouts
   - Hamburger menu functional
   - Reduced font sizes
   - Stack cards vertically
   - Full-width buttons
   - Reduced padding (16px instead of 32px)
   - Simplified animations (performance)
   - Touch-friendly buttons (min 44px)

2. **Tablet Layout** (640px - 1023px):
   - 2-column grids where appropriate
   - Adjusted font sizes
   - Simplified navigation
   - Maintain key animations
   - Optimized images

3. **Desktop Layout** (1024px+):
   - Full multi-column layouts
   - All animations enabled
   - Hover effects active
   - Parallax scrolling
   - Complex interactions

4. **Test Devices**:
   - iPhone 12/13/14 (375px, 390px, 428px)
   - iPad (768px, 1024px)
   - Desktop (1280px, 1920px)
   - Ultra-wide (2560px)

5. **Responsive Images**:
   - Use `<picture>` element with multiple sources
   - srcset for different resolutions
   - Lazy loading for below-fold images
   - Optimized sizes for each breakpoint

6. **Responsive Typography**:
   - Fluid typography (clamp() or calc())
   - Readable line lengths (45-75 characters)
   - Appropriate line heights
   - Scalable spacing

#### Acceptance Criteria
- [ ] All pages responsive on mobile
- [ ] All pages responsive on tablet
- [ ] All pages responsive on desktop
- [ ] Mobile menu works perfectly
- [ ] Touch targets adequate (44px+)
- [ ] Text readable on all devices
- [ ] Images scale properly
- [ ] No horizontal scroll
- [ ] Performance maintained on mobile

#### Validation
Use Playwright to:
- Test all pages at each breakpoint
- Verify mobile menu functionality
- Check touch interactions
- Test image loading
- Verify text readability
- Check layout integrity
- Measure mobile performance
- Test orientation changes

---

### T013: Image Optimization
**Status:** ⬜ Pending  
**Priority:** Medium  
**Estimated Time:** 2 hours  
**Dependencies:** T012

#### Description
Optimize all images for web performance using appropriate formats, compression, and lazy loading.

#### Reference Files
- `.dev2/generated/project-design.md` (Image Optimization section)
- `.dev2/generated/homepage-content-design.md` (Image Strategy)

#### Tasks
1. **Source Images from Unsplash**:
   - Hero backgrounds: "abstract technology blue particles"
   - About section: "biotech laboratory team", "scientists collaboration"
   - Platform section: "AI visualization", "molecular structure", "protein structure"
   - Solutions section: "luxury skincare laboratory", "medical research laboratory"
   - Download high-quality images

2. **Image Processing**:
   - Convert to WebP format (primary)
   - Keep JPEG as fallback
   - Compress images:
     - Hero backgrounds: max 300KB
     - Section images: max 200KB
     - Card images: max 100KB
     - Thumbnails: max 50KB
   - Create multiple sizes for responsive images
   - Optimize SVG files (remove unnecessary data)

3. **Implementation**:
   - Use `<picture>` element for responsive images
   - Add `loading="lazy"` for below-fold images
   - Add proper `alt` text for accessibility
   - Implement blur-up effect (low-res to high-res)
   - Preload critical images (hero backgrounds)

4. **Icon Optimization**:
   - Use SVG for icons (scalable, small file size)
   - Inline critical icons
   - Sprite sheet for multiple icons
   - Optimize SVG code

5. **Logo Optimization**:
   - Use `mirabobio-logo-static.svg` from materials
   - Optimize SVG code
   - Create PNG fallback if needed
   - Ensure crisp rendering at all sizes

#### Acceptance Criteria
- [ ] All images sourced from Unsplash
- [ ] All images converted to WebP
- [ ] JPEG fallbacks provided
- [ ] Images compressed to target sizes
- [ ] Responsive images implemented
- [ ] Lazy loading working
- [ ] Alt text added to all images
- [ ] Icons optimized
- [ ] Logo renders perfectly
- [ ] Page load time improved

#### Validation
Use Playwright to:
- Check all images load correctly
- Verify WebP support and fallback
- Test lazy loading behavior
- Measure page load times
- Check image quality
- Verify alt text present
- Test responsive image switching

---

### T014: SEO & Meta Tags
**Status:** ⬜ Pending  
**Priority:** Medium  
**Estimated Time:** 2 hours  
**Dependencies:** T013

#### Description
Implement comprehensive SEO optimization including meta tags, Open Graph, Twitter Cards, structured data, sitemap, and robots.txt.

#### Reference Files
- `.dev2/generated/project-design.md` (SEO Configuration section)

#### Tasks
1. **Meta Tags** (All Pages):
   - Charset and viewport
   - Page-specific title (60 characters max)
   - Meta description (155 characters max)
   - Keywords
   - Author
   - Canonical URL

2. **Open Graph Tags** (All Pages):
   - og:title
   - og:description
   - og:image (1200x630px)
   - og:url
   - og:type
   - og:site_name

3. **Twitter Card Tags** (All Pages):
   - twitter:card (summary_large_image)
   - twitter:title
   - twitter:description
   - twitter:image

4. **Structured Data** (JSON-LD):
   - Organization schema (home page)
   - WebSite schema
   - BreadcrumbList schema (all pages)
   - ContactPoint schema (contact page)

5. **Sitemap.xml**:
   - Create XML sitemap
   - Include all pages
   - Set priorities
   - Add lastmod dates

6. **Robots.txt**:
   - Allow all crawlers
   - Reference sitemap
   - Disallow admin/private areas (if any)

7. **Semantic HTML**:
   - Use proper heading hierarchy (h1-h6)
   - Use semantic tags (header, nav, main, section, article, footer)
   - Add ARIA labels where needed

8. **Performance for SEO**:
   - Optimize Core Web Vitals
   - Reduce page load time
   - Minimize layout shift
   - Optimize images

#### Acceptance Criteria
- [ ] All meta tags implemented
- [ ] Open Graph tags on all pages
- [ ] Twitter Cards configured
- [ ] Structured data added
- [ ] Sitemap.xml created
- [ ] Robots.txt created
- [ ] Semantic HTML used
- [ ] Heading hierarchy correct
- [ ] ARIA labels added
- [ ] Core Web Vitals optimized

#### Validation
Use Playwright and tools to:
- Verify meta tags present
- Test Open Graph with Facebook Debugger
- Test Twitter Cards with Twitter Card Validator
- Validate structured data with Google Rich Results Test
- Check sitemap.xml validity
- Verify robots.txt
- Run Lighthouse SEO audit (target: 95+)
- Check heading hierarchy
- Validate HTML

---

### T015: Testing & QA
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 4 hours  
**Dependencies:** T014

#### Description
Comprehensive testing of all functionality, cross-browser compatibility, accessibility, and user experience.

#### Reference Files
- `.dev2/generated/project-design.md` (Testing Strategy section)
- `.dev2/generated/homepage-content-design.md` (Design Checklist)

#### Tasks
1. **Functional Testing**:
   - All navigation links work
   - Mobile menu toggles correctly
   - Contact form validates and submits
   - All CTAs link to correct pages
   - Smooth scrolling works
   - Back-to-top button functional
   - Tab switching (Platform page)
   - Accordion expand/collapse
   - Map interactions

2. **Cross-Browser Testing**:
   - Chrome (latest 2 versions)
   - Firefox (latest 2 versions)
   - Safari (latest 2 versions)
   - Edge (latest 2 versions)
   - Mobile Safari (iOS)
   - Chrome Mobile (Android)

3. **Responsive Testing**:
   - Mobile: 375px, 414px, 428px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px
   - Ultra-wide: 2560px
   - Portrait and landscape orientations

4. **Accessibility Testing**:
   - Keyboard navigation (Tab, Enter, Esc)
   - Screen reader compatibility (NVDA, JAWS)
   - Color contrast (WCAG AA minimum)
   - Focus indicators visible
   - Alt text on images
   - ARIA labels present
   - Form labels associated
   - Skip to content link

5. **Performance Testing**:
   - Lighthouse audit (target: 95+ all categories)
   - PageSpeed Insights
   - WebPageTest
   - GTmetrix
   - Core Web Vitals:
     - LCP < 2.5s
     - FID < 100ms
     - CLS < 0.1

6. **Visual Testing**:
   - Design matches mockups
   - Typography consistent
   - Colors accurate
   - Spacing consistent
   - Alignment correct
   - Images display properly
   - Animations smooth

7. **Content Testing**:
   - All text accurate
   - No typos or grammar errors
   - Links point to correct destinations
   - Contact information correct
   - Copyright year correct

8. **Error Testing**:
   - 404 page (if applicable)
   - Form validation errors
   - Network errors
   - Console errors
   - Broken links

#### Acceptance Criteria
- [ ] All functional tests pass
- [ ] Cross-browser compatibility confirmed
- [ ] Responsive design verified
- [ ] Accessibility compliant (WCAG AA)
- [ ] Performance targets met
- [ ] Visual design accurate
- [ ] Content accurate
- [ ] No console errors
- [ ] No broken links

#### Validation
Use Playwright to:
- Automate functional tests
- Test across browsers
- Test responsive layouts
- Check accessibility
- Measure performance
- Capture screenshots for visual comparison
- Generate test reports

---

### T016: Performance Optimization
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 3 hours  
**Dependencies:** T015

#### Description
Final performance optimization to achieve award-winning load times and smooth interactions.

#### Reference Files
- `.dev2/generated/project-design.md` (Security & Performance section)
- `.dev2/generated/homepage-content-design.md` (Performance Targets)

#### Tasks
1. **CSS Optimization**:
   - Minify CSS files
   - Remove unused CSS
   - Inline critical CSS
   - Defer non-critical CSS
   - Combine CSS files (if multiple)

2. **JavaScript Optimization**:
   - Minify JavaScript files
   - Defer non-critical scripts
   - Async load third-party scripts
   - Remove unused code
   - Code splitting (if applicable)

3. **Image Optimization** (Final Pass):
   - Verify all images compressed
   - Implement lazy loading
   - Use responsive images
   - Preload critical images
   - Add image dimensions (prevent CLS)

4. **Font Optimization**:
   - Use font-display: swap
   - Preload critical fonts
   - Subset fonts (only needed characters)
   - Use system fonts as fallback

5. **Caching Strategy**:
   - Set cache headers in `_headers` file
   - Configure Cloudflare caching
   - Use service worker (optional)
   - Cache static assets

6. **Resource Hints**:
   - dns-prefetch for external domains
   - preconnect for critical origins
   - prefetch for next page resources
   - preload for critical resources

7. **Code Optimization**:
   - Remove console.log statements
   - Optimize loops and functions
   - Debounce/throttle event handlers
   - Use efficient selectors

8. **Reduce Requests**:
   - Combine files where possible
   - Use CSS sprites for icons
   - Inline small SVGs
   - Remove unnecessary dependencies

9. **Monitoring**:
   - Set up Cloudflare Analytics
   - Configure performance monitoring
   - Set up error tracking

#### Acceptance Criteria
- [ ] CSS minified and optimized
- [ ] JavaScript minified and optimized
- [ ] Images fully optimized
- [ ] Fonts optimized
- [ ] Caching configured
- [ ] Resource hints added
- [ ] Code optimized
- [ ] Requests minimized
- [ ] Lighthouse Performance > 95
- [ ] FCP < 1.5s
- [ ] TTI < 3s
- [ ] CLS < 0.1

#### Validation
Use Playwright and tools to:
- Run Lighthouse audit
- Test PageSpeed Insights
- Measure Core Web Vitals
- Check network waterfall
- Verify caching working
- Test on slow 3G connection
- Compare before/after metrics

---

### T017: Deployment Setup
**Status:** ⬜ Pending  
**Priority:** High  
**Estimated Time:** 2 hours  
**Dependencies:** T016

#### Description
Set up deployment to Cloudflare Pages with proper configuration, domain setup, and CI/CD.

#### Reference Files
- `.dev2/generated/project-design.md` (Deployment Workflow section)
- `README.md` (Deployment instructions)

#### Tasks
1. **Git Repository**:
   - Ensure all code committed
   - Create `.gitignore` (exclude node_modules, .DS_Store, etc.)
   - Push to GitHub/GitLab
   - Create main and develop branches
   - Set up branch protection rules

2. **Cloudflare Pages Setup**:
   - Log in to Cloudflare Dashboard
   - Go to Pages section
   - Click "Create a project"
   - Connect GitHub/GitLab repository
   - Configure build settings:
     - Build command: (leave empty for static site)
     - Build output directory: `/`
     - Root directory: (leave empty)
   - Set environment variables (if any)

3. **Domain Configuration**:
   - Add custom domain: www.mirabobio.com
   - Configure DNS settings
   - Enable HTTPS (automatic SSL)
   - Set up redirects (www to non-www or vice versa)

4. **Cloudflare Settings**:
   - Enable Auto Minify (HTML, CSS, JS)
   - Enable Brotli compression
   - Configure caching rules
   - Set up security headers
   - Enable DDoS protection
   - Configure firewall rules (if needed)

5. **Preview Deployments**:
   - Configure preview deployments for branches
   - Test preview URL
   - Set up deployment notifications

6. **Production Deployment**:
   - Deploy to production
   - Verify deployment successful
   - Test production URL
   - Check all pages load correctly
   - Verify SSL certificate

7. **Post-Deployment**:
   - Set up Cloudflare Analytics
   - Configure error pages (404, 500)
   - Set up monitoring/alerts
   - Document deployment process
   - Create rollback plan

8. **Documentation**:
   - Update README.md with deployment info
   - Document environment variables
   - Document custom domain setup
   - Create deployment checklist

#### Acceptance Criteria
- [ ] Code pushed to repository
- [ ] Cloudflare Pages connected
- [ ] Build settings configured
- [ ] Custom domain added
- [ ] DNS configured
- [ ] HTTPS enabled
- [ ] Cloudflare settings optimized
- [ ] Preview deployments working
- [ ] Production deployment successful
- [ ] All pages accessible
- [ ] Analytics configured
- [ ] Documentation updated

#### Validation
Use Playwright to:
- Test production URL
- Verify all pages load
- Check SSL certificate
- Test redirects
- Verify caching headers
- Check security headers
- Test from different locations
- Verify analytics tracking

---

## 📝 Task Execution Guidelines

### Before Starting Each Task
1. Read the task description thoroughly
2. Review all reference files
3. Check dependencies are completed
4. Understand acceptance criteria
5. Estimate actual time needed

### During Task Execution
1. Follow the design specifications exactly
2. Write clean, commented code
3. Test incrementally as you build
4. Commit changes frequently with clear messages
5. Document any deviations or issues

### After Completing Each Task
1. Review acceptance criteria
2. Run validation tests with Playwright
3. Check design document for accuracy
4. Test responsive behavior
5. Check browser console for errors
6. Update task status to ✅ Completed
7. Commit final changes
8. Move to next task

### Using Playwright for Validation
```javascript
// Example validation script
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to page
  await page.goto('http://localhost:8000');
  
  // Check hero section
  const hero = await page.locator('.hero');
  await expect(hero).toBeVisible();
  
  // Check animations
  await page.waitForTimeout(2000);
  
  // Take screenshot
  await page.screenshot({ path: 'validation.png' });
  
  await browser.close();
})();
```

### Quality Standards
- **Code Quality**: Clean, readable, well-commented
- **Design Accuracy**: Matches design document exactly
- **Performance**: 60fps animations, fast load times
- **Accessibility**: WCAG AA compliant
- **Responsiveness**: Works on all devices
- **Browser Support**: Works on all major browsers

---

## 🔄 Task Status Tracking

Update this section as tasks are completed:

### Completed Tasks
- None yet

### In Progress
- None yet

### Blocked
- None yet

### Next Up
- T001: Project Setup & Structure

---

**End of Tasks Document**

This document provides a comprehensive breakdown of all development tasks required to build the award-winning MIRABO Biotechnology website. Each task includes detailed instructions, reference materials, acceptance criteria, and validation methods using Playwright.
