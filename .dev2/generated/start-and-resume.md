# MIRABO Biotechnology - Task Execution Guide
## How to Start and Resume Development

---

## 📋 Document Purpose

This document provides clear instructions on how to start or resume the development of the MIRABO Biotechnology website. It includes design requirements, coding standards, execution process, and quality assurance procedures.

---

## 🎯 Project Overview

**Project Name:** MIRABO Biotechnology Official Website  
**Project Type:** Award-Winning Static Website  
**Technology Stack:** HTML5, CSS3, Vanilla JavaScript  
**Deployment:** Cloudflare Pages  
**Design Level:** Awwwards / CSS Design Awards Standard

**Key Documents:**
- Design Specification: `.dev2/generated/homepage-content-design.md`
- Technical Architecture: `.dev2/generated/project-design.md`
- Task Breakdown: `.dev2/generated/tasks.md`
- This Document: `.dev2/generated/start-and-resume.md`

---

## 🚀 How to Start Development

### Step 1: Environment Setup

#### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Code editor (VS Code recommended)
- Git installed
- Basic understanding of HTML, CSS, JavaScript

#### Initial Setup
```bash
# 1. Navigate to project directory
cd /Users/leoluo/Documents/code/mirabobio-homepage

# 2. Check Git status
git status

# 3. Create a new branch for development (if needed)
git checkout -b develop

# 4. Open project in VS Code
code .
```

#### Install VS Code Extensions (Recommended)
- Live Server (for local development)
- Prettier (code formatting)
- ESLint (JavaScript linting)
- HTML CSS Support
- Auto Rename Tag

---

### Step 2: Review Documentation

**Before writing any code, thoroughly review:**

1. **Design Specification** (`.dev2/generated/homepage-content-design.md`)
   - Understand the visual design system
   - Review color palette and typography
   - Study each page layout in detail
   - Note all visual effects and animations

2. **Technical Architecture** (`.dev2/generated/project-design.md`)
   - Understand the project structure
   - Review the technology stack
   - Study the component library
   - Understand the CSS architecture

3. **Task Breakdown** (`.dev2/generated/tasks.md`)
   - Review all tasks and their dependencies
   - Understand task priorities
   - Check task status
   - Identify the next task to work on

---

### Step 3: Start Local Development Server

```bash
# Option 1: Using VS Code Live Server
# Right-click on index.html > "Open with Live Server"

# Option 2: Using Python
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Using Node.js
npx http-server
```

---

### Step 4: Begin First Task

1. Open `.dev2/generated/tasks.md`
2. Find the first pending task (T001: Project Setup & Structure)
3. Read the task description completely
4. Review reference files
5. Understand acceptance criteria
6. Start implementation

---

## 🔄 How to Resume Development

### Step 1: Check Current Status

```bash
# 1. Navigate to project directory
cd /Users/leoluo/Documents/code/mirabobio-homepage

# 2. Check Git status
git status

# 3. Check current branch
git branch

# 4. Pull latest changes (if working in a team)
git pull origin develop
```

---

### Step 2: Review Progress

1. **Open Task Document** (`.dev2/generated/tasks.md`)
   - Check "Task Status Overview" table
   - Identify completed tasks (✅)
   - Identify in-progress tasks (🔄)
   - Identify next pending task (⬜)

2. **Review Last Commit**
   ```bash
   git log -1
   ```

3. **Check What Was Last Modified**
   ```bash
   git diff
   ```

---

### Step 3: Continue Development

1. **Identify Next Task**
   - Look at task dependencies
   - Choose the next logical task
   - Update task status to 🔄 In Progress

2. **Review Task Details**
   - Read task description
   - Review reference files
   - Check acceptance criteria
   - Understand validation requirements

3. **Start Coding**
   - Follow design specifications
   - Follow coding standards (see below)
   - Test incrementally
   - Commit frequently

---

## 📐 Design Requirements & Specifications

### ⚠️ CRITICAL DESIGN REQUIREMENTS

**These requirements are MANDATORY and must be strictly followed:**

1. **High-Tech Aesthetic (refer-index.html Style)**
   - Deep space dark background (#05080F)
   - Custom cursor system (green dot + outline ring)
   - Noise texture overlay (30% opacity, mix-blend-overlay)
   - Glassmorphism cards (backdrop-filter: blur(12px))
   - Canvas particle network animation
   - Lenis smooth scroll (1.2s duration)
   - Sticky scroll cards with layering effect

2. **Award-Winning Design**
   - Design quality MUST be at Awwwards Site of the Day level
   - Every detail matters: spacing, typography, colors, animations
   - User experience must be exceptional
   - Visual impact must be memorable

3. **English Content Only**
   - ALL content MUST be in English
   - No Chinese characters in the public-facing website
   - Professional, technical English tone

4. **Brand Consistency**
   - Use official logo from `materials/mirabobio-logo-static.svg`
   - Follow brand color palette exactly:
     - Primary: Mirabo Blue (#003BA3)
     - Secondary: Light Blue (#4B8DFF)
     - Accent: Bio Green (#32CD32)
     - Background: Deep Space (#05080F)
   - Maintain consistent visual language

---

### Design System Compliance

#### Color Usage
```css
/* MUST use these exact colors (from refer-index.html) */
--mirabo-blue: #003BA3;
--mirabo-lightBlue: #4B8DFF;
--mirabo-green: #32CD32;
--mirabo-dark: #05080F;
--mirabo-surface: #0F141E;
--text-primary: #F1F5F9;
```

#### Core Interactive Elements (MUST IMPLEMENT)
1. **Custom Cursor System**
   - Green dot (8px) following mouse
   - Outline ring (40px) with smooth animation
   - Expands to 60px on hover with background fill

2. **Noise Texture Overlay**
   - Fixed position covering viewport
   - SVG fractal noise filter
   - 30% opacity with mix-blend-overlay

3. **Glassmorphism Cards**
   - Background: rgba(15, 20, 30, 0.6)
   - Backdrop-filter: blur(12px)
   - Border: 1px solid rgba(255, 255, 255, 0.05)

4. **Canvas Particle Network**
   - 60 particles (30 on mobile)
   - Blue (#4B8DFF) and green (#32CD32) colors
   - Connect particles within 150px
   - Smooth movement animation

5. **Lenis Smooth Scroll**
   - Duration: 1.2s
   - Easing: exponential decay
   - Buttery-smooth scrolling

6. **Sticky Scroll Cards**
   - Technology cards stack on scroll
   - Different top positions (8rem, 9rem, 10rem)
   - Creates layered depth effect

#### Typography Rules
- **Display Font:** Space Grotesk (headlines)
- **Body Font:** Inter (body text)
- **Mono Font:** JetBrains Mono (code/data)
- **Size Hierarchy:** Maintain dramatic size contrast (96px headlines vs 18px body)
- **Line Height:** 1.2 for headlines, 1.6 for body

#### Spacing System
- Use 8px grid system
- Consistent padding and margins
- Generous white space
- Proper visual hierarchy

#### Animation Guidelines
- Smooth transitions (0.3s - 0.4s)
- 60fps performance
- Meaningful animations (not decorative only)
- Respect reduced motion preferences

---

## 💻 Coding Requirements & Standards

### HTML Standards

#### Semantic HTML
```html
<!-- ✅ GOOD: Semantic structure -->
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <section class="hero">
    <h1>Headline</h1>
  </section>
</main>

<footer>
  <p>&copy; 2025 MIRABO Biotechnology</p>
</footer>

<!-- ❌ BAD: Non-semantic -->
<div class="header">
  <div class="nav">
    <div class="link">Home</div>
  </div>
</div>
```

#### Accessibility
```html
<!-- ✅ GOOD: Accessible -->
<button aria-label="Open menu" class="menu-toggle">
  <span class="sr-only">Menu</span>
  <svg aria-hidden="true">...</svg>
</button>

<img src="logo.svg" alt="MIRABO Biotechnology Logo">

<!-- ❌ BAD: Not accessible -->
<div onclick="openMenu()">
  <svg>...</svg>
</div>

<img src="logo.svg">
```

#### Meta Tags
```html
<!-- REQUIRED on every page -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Page-specific description">
<title>Page Title | MIRABO Biotechnology</title>
```

---

### CSS Standards

#### CSS Organization
```css
/* 1. CSS Variables */
:root {
  --primary-color: #001F54;
}

/* 2. Reset & Base */
* { box-sizing: border-box; }

/* 3. Typography */
h1 { font-size: var(--text-h1); }

/* 4. Layout */
.container { max-width: 1280px; }

/* 5. Components */
.btn { padding: 16px 32px; }

/* 6. Utilities */
.text-center { text-align: center; }

/* 7. Responsive */
@media (min-width: 1024px) { ... }
```

#### Naming Conventions
```css
/* ✅ GOOD: BEM-like naming */
.card { }
.card__title { }
.card__description { }
.card--featured { }

/* ✅ GOOD: Utility classes */
.mt-4 { margin-top: 1rem; }
.text-cyan { color: var(--cyber-cyan); }

/* ❌ BAD: Unclear naming */
.box1 { }
.thing { }
.stuff { }
```

#### Performance
```css
/* ✅ GOOD: GPU-accelerated */
.card {
  transform: translateY(-8px);
  will-change: transform;
}

/* ❌ BAD: Causes reflow */
.card {
  top: -8px;
}
```

---

### JavaScript Standards

#### Code Style
```javascript
// ✅ GOOD: Clear, documented
/**
 * Initialize navigation functionality
 */
function initNavigation() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.menu-toggle');
  
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// ❌ BAD: Unclear, undocumented
function init() {
  let n = document.querySelector('.n');
  let t = document.querySelector('.t');
  t.onclick = () => n.classList.toggle('a');
}
```

#### Event Handling
```javascript
// ✅ GOOD: Debounced scroll handler
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

window.addEventListener('scroll', debounce(handleScroll, 100));

// ❌ BAD: Unoptimized
window.addEventListener('scroll', handleScroll);
```

#### DOM Manipulation
```javascript
// ✅ GOOD: Efficient
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', handleCardClick);
});

// ❌ BAD: Inefficient
for (let i = 0; i < 100; i++) {
  document.querySelector('.card-' + i).onclick = handleCardClick;
}
```

---

### File Organization

#### Directory Structure
```
assets/
├── css/
│   ├── style.css          # Main styles
│   ├── animations.css     # Animations
│   └── responsive.css     # Responsive overrides
├── js/
│   ├── main.js           # Core functionality
│   ├── animations.js     # GSAP animations
│   ├── particles-config.js
│   ├── contact.js        # Form handling
│   └── utils.js          # Utilities
└── images/
    ├── hero/
    ├── about/
    └── platform/
```

#### File Naming
- Use lowercase
- Use hyphens for spaces
- Be descriptive
- Examples: `hero-background.webp`, `platform-prism.svg`

---

## 🔍 Execution Process & Workflow

### Standard Workflow for Each Task

```
┌─────────────────────────────────────────────────────────┐
│                    TASK EXECUTION FLOW                   │
└─────────────────────────────────────────────────────────┘

1. CURRENT EXECUTION STEP
   ↓
   Read task from tasks.md
   Update status to 🔄 In Progress
   
2.正在查找文档 (Searching Documentation)
   ↓
   Review homepage-content-design.md
   Review project-design.md
   Review reference materials
   Understand requirements completely
   
3.正在执行 (Executing)
   ↓
   Write HTML structure
   Implement CSS styles
   Add JavaScript functionality
   Test incrementally
   
4. VALIDATION WITH PLAYWRIGHT
   ↓
   Create Playwright test script
   Run automated tests
   Check against design document
   Verify visual accuracy
   Test interactions
   Check responsive behavior
   
5. 更新任务状态 (Update Task Status)
   ↓
   If tests pass: Update to ✅ Completed
   If tests fail: Fix issues and re-test
   Commit changes with clear message
   Move to next task
```

---

### Detailed Step-by-Step Process

#### Step 1: Current Execution Step

**Actions:**
1. Open `.dev2/generated/tasks.md`
2. Locate the next pending task
3. Read the entire task description
4. Check dependencies are completed
5. Update task status:
   ```markdown
   | T001 | Project Setup | 🔄 In Progress | High | 1h |
   ```

**Example:**
```markdown
### Current Task: T004 - Home Page Hero Section
Status: 🔄 In Progress
Started: 2025-01-20 10:00
```

---

#### Step 2: 正在查找文档 (Searching Documentation)

**Actions:**
1. **Review Design Document**
   - Open `.dev2/generated/homepage-content-design.md`
   - Find the relevant section (e.g., "Home Page - Hero Section")
   - Note all design specifications:
     - Layout structure
     - Content requirements
     - Visual effects
     - Animations
     - Images needed
     - Interactions

2. **Review Technical Document**
   - Open `.dev2/generated/project-design.md`
   - Check component specifications
   - Review CSS architecture
   - Check JavaScript patterns

3. **Review Reference Materials**
   - Check `materials/` folder for assets
   - Review company information
   - Check logo files

4. **Create Implementation Checklist**
   ```markdown
   ## T004 Implementation Checklist
   - [ ] HTML structure
   - [ ] Background gradient
   - [ ] Particle system
   - [ ] Headline with typing effect
   - [ ] CTA buttons
   - [ ] Scroll indicator
   - [ ] Mouse parallax
   - [ ] Responsive layout
   ```

---

#### Step 3: 正在执行 (Executing)

**Actions:**

1. **Write HTML Structure**
   ```html
   <!-- Follow semantic HTML -->
   <section class="hero" id="home">
     <div class="hero__background">
       <div id="particles-js"></div>
     </div>
     <div class="hero__content">
       <h1 class="hero__title">
         Pioneering AI-Driven Synthetic Biology
       </h1>
       <p class="hero__subtitle">
         Creating next-generation bioactive ingredients...
       </p>
       <div class="hero__cta">
         <a href="#platform" class="btn btn-primary">
           Explore Our Platform
         </a>
         <a href="contact.html" class="btn btn-secondary">
           Contact Us
         </a>
       </div>
     </div>
     <div class="hero__scroll-indicator">
       <span>Scroll to explore</span>
       <svg><!-- Arrow icon --></svg>
     </div>
   </section>
   ```

2. **Implement CSS Styles**
   ```css
   /* Follow design system */
   .hero {
     position: relative;
     min-height: 100vh;
     display: flex;
     align-items: center;
     justify-content: center;
     background: var(--gradient-hero);
     overflow: hidden;
   }
   
   .hero__title {
     font-family: var(--font-display);
     font-size: var(--text-hero);
     font-weight: var(--font-bold);
     color: var(--text-primary);
     text-align: center;
     margin-bottom: var(--space-6);
   }
   
   /* Responsive */
   @media (max-width: 640px) {
     .hero__title {
       font-size: var(--text-hero-mobile);
     }
   }
   ```

3. **Add JavaScript Functionality**
   ```javascript
   // Initialize particle system
   particlesJS('particles-js', {
     particles: {
       number: { value: 80 },
       color: { value: '#00D9FF' },
       // ... configuration
     }
   });
   
   // Typing effect
   function typeWriter(element, text, speed = 50) {
     let i = 0;
     function type() {
       if (i < text.length) {
         element.innerHTML += text.charAt(i);
         i++;
         setTimeout(type, speed);
       }
     }
     type();
   }
   ```

4. **Test Incrementally**
   - Save files
   - Refresh browser
   - Check visual appearance
   - Test interactions
   - Check console for errors
   - Fix issues immediately

5. **Commit Progress**
   ```bash
   git add .
   git commit -m "feat: implement hero section structure and styles"
   ```

---

#### Step 4: Validation with Playwright

**⚠️ CRITICAL REQUIREMENT:**
After completing each page or functional module, you MUST use Playwright to validate that the implementation matches the design document.

**⚠️ SCREENSHOT REQUIREMENT:**
When taking screenshots with Playwright, you MUST use the `browser_run_code` tool to save screenshots to the `.cache/` directory in the current project, then view the screenshots to verify the implementation.

**Actions:**

1. **Use browser_run_code Tool for Screenshots**
   ```javascript
   // ✅ CORRECT: Use browser_run_code tool
   // This will be executed through the tool system
   await page.goto('http://localhost:8000');
   await page.screenshot({ 
     path: '.cache/hero-section-desktop.png',
     fullPage: false
   });
   
   // Mobile screenshot
   await page.setViewportSize({ width: 375, height: 667 });
   await page.screenshot({ 
     path: '.cache/hero-section-mobile.png',
     fullPage: false
   });
   
   // Full page screenshot
   await page.setViewportSize({ width: 1440, height: 900 });
   await page.screenshot({ 
     path: '.cache/hero-section-fullpage.png',
     fullPage: true
   });
   ```

2. **Screenshot Naming Convention**
   ```
   .cache/
   ├── hero-section-desktop.png       # Desktop view (1440x900)
   ├── hero-section-mobile.png        # Mobile view (375x667)
   ├── hero-section-fullpage.png      # Full page scroll
   ├── platform-cards-desktop.png     # Specific component
   ├── sticky-scroll-test.png         # Interaction test
   └── light-mode-switch.png          # Theme switch test
   ```

3. **Validation Workflow**
   ```
   Step 1: Navigate to page
   ↓
   Step 2: Take desktop screenshot (.cache/xxx-desktop.png)
   ↓
   Step 3: Take mobile screenshot (.cache/xxx-mobile.png)
   ↓
   Step 4: View screenshots using fs_read or image viewing
   ↓
   Step 5: Compare with design document
   ↓
   Step 6: Document findings
   ↓
   Step 7: Fix issues if needed
   ↓
   Step 8: Re-test until perfect
   ```

4. **Example: Complete Validation Process**
   ```javascript
   // Use browser_run_code tool with this code:
   
   // 1. Desktop view
   await page.goto('http://localhost:8000');
   await page.waitForLoadState('networkidle');
   await page.screenshot({ 
     path: '.cache/hero-desktop.png',
     fullPage: false
   });
   
   // 2. Test custom cursor (hover state)
   await page.mouse.move(500, 300);
   await page.waitForTimeout(500);
   await page.screenshot({ 
     path: '.cache/hero-cursor-hover.png'
   });
   
   // 3. Test scroll behavior
   await page.evaluate(() => window.scrollTo(0, 800));
   await page.waitForTimeout(500);
   await page.screenshot({ 
     path: '.cache/hero-scrolled.png'
   });
   
   // 4. Mobile view
   await page.setViewportSize({ width: 375, height: 667 });
   await page.goto('http://localhost:8000');
   await page.waitForLoadState('networkidle');
   await page.screenshot({ 
     path: '.cache/hero-mobile.png',
     fullPage: true
   });
   
   // 5. Tablet view
   await page.setViewportSize({ width: 768, height: 1024 });
   await page.goto('http://localhost:8000');
   await page.screenshot({ 
     path: '.cache/hero-tablet.png'
   });
   ```

5. **Check Screenshots**
   - View screenshots in `.cache/` directory
   - Compare with design document specifications
   - Verify colors match (use color picker if needed)
   - Check spacing and alignment
   - Verify typography (font size, weight, line height)
   - Check animations triggered correctly
   - Verify responsive behavior

6. **Document Test Results**
   ```markdown
   ## T004 Validation Results
   
   ### Desktop (1440x900)
   - ✅ Hero section displays correctly
   - ✅ Canvas particle network animating
   - ✅ Custom cursor visible and following mouse
   - ✅ Gradient text effect applied
   - ✅ Scroll indicator visible
   - Screenshot: .cache/hero-desktop.png
   
   ### Mobile (375x667)
   - ✅ Responsive layout working
   - ✅ Particle count reduced (30 particles)
   - ✅ Custom cursor disabled
   - ✅ Text sizes adjusted
   - ✅ CTA buttons stacked vertically
   - Screenshot: .cache/hero-mobile.png
   
   ### Interactions
   - ✅ Lenis smooth scroll working
   - ✅ GSAP reveal animations trigger
   - ✅ Hover effects working
   - Screenshot: .cache/hero-scrolled.png
   
   ### Issues Found
   - None
   
   ### Status
   ✅ Ready for production
   ```

7. **Fix Issues if Found**
   - If screenshots show problems, fix the code
   - Re-run browser_run_code with screenshot commands
   - Compare new screenshots with design
   - Repeat until perfect match

8. **Important Notes**
   - ✅ Always save to `.cache/` directory
   - ✅ Use descriptive filenames
   - ✅ Test multiple viewports (desktop, tablet, mobile)
   - ✅ Test interactions (hover, scroll, click)
   - ✅ Compare screenshots with design document
   - ✅ Document all findings
   - ❌ Don't save to other directories
   - ❌ Don't skip screenshot validation
   - ❌ Don't assume it looks correct without checking

---

#### Step 5: 更新任务状态 (Update Task Status)

**Actions:**

1. **Update Task Status in tasks.md**
   ```markdown
   | T004 | Home Page - Hero Section | ✅ Completed | High | 3h |
   ```

2. **Add to Completed Tasks Section**
   ```markdown
   ### Completed Tasks
   - ✅ T001: Project Setup & Structure (2025-01-20)
   - ✅ T002: Design System & CSS Variables (2025-01-20)
   - ✅ T003: Global Components (2025-01-20)
   - ✅ T004: Home Page - Hero Section (2025-01-20)
   ```

3. **Update Next Up Section**
   ```markdown
   ### Next Up
   - T005: Home Page - Content Sections
   ```

4. **Final Commit**
   ```bash
   git add .
   git commit -m "feat: complete hero section with tests

   - Implemented hero section structure
   - Added particle background animation
   - Implemented typing effect for headline
   - Added CTA buttons with hover effects
   - Made fully responsive
   - All Playwright tests passing
   - Visual design matches specification"
   
   git push origin develop
   ```

5. **Move to Next Task**
   - Review task dependencies
   - Identify next task
   - Repeat the process

---

## ⚠️ Important Requirements

### CRITICAL RULES - MUST FOLLOW

1. **Strict Adherence to Design**
   - The website design and styling MUST reflect a high-tech company
   - Color scheme MUST follow the specified palette exactly
   - Typography MUST use the specified fonts and sizes
   - Animations MUST be smooth and professional
   - Overall design MUST be award-winning quality

2. **English Content Only**
   - ALL website content MUST be displayed in English
   - No Chinese characters in public-facing pages
   - Professional, technical English tone
   - Proper grammar and spelling

3. **Award-Winning Quality**
   - Design MUST be capable of winning highest design awards
   - Every detail matters: spacing, alignment, colors, animations
   - User experience MUST be exceptional
   - Visual impact MUST be memorable
   - Performance MUST be optimal

4. **Playwright Validation Required**
   - After completing each page or functional module, you MUST use Playwright to check the actual page effect
   - Compare implementation with design document
   - Verify all interactions work correctly
   - Check responsive behavior
   - Ensure visual accuracy
   - Document test results

5. **No Personal Information**
   - Do NOT use personal contact information
   - Use company email: info@mirabobio.com
   - Use company addresses only (Hong Kong & Shanghai offices)
   - No individual phone numbers or personal emails

6. **Performance Standards**
   - First Contentful Paint < 1.5s
   - Time to Interactive < 3s
   - Lighthouse Performance > 95
   - All animations at 60fps
   - No layout shift (CLS < 0.1)

---

## 🛠️ Development Tools & Commands

### Essential Commands

```bash
# Start local server
python -m http.server 8000

# Git commands
git status
git add .
git commit -m "message"
git push origin develop

# Playwright commands
npx playwright test
npx playwright test --ui
npx playwright test --headed
npx playwright show-report

# Check for errors
# Open browser console (F12)
# Check for red errors
```

### Browser DevTools

**Essential Shortcuts:**
- `F12` or `Cmd+Option+I` - Open DevTools
- `Cmd+Shift+M` - Toggle device toolbar (responsive testing)
- `Cmd+Shift+P` - Command palette
- `Cmd+R` - Refresh
- `Cmd+Shift+R` - Hard refresh (clear cache)

**DevTools Tabs:**
- **Elements** - Inspect HTML/CSS
- **Console** - Check for errors
- **Network** - Check resource loading
- **Performance** - Measure performance
- **Lighthouse** - Run audits

---

## 📊 Quality Assurance Checklist

### Before Marking Task as Complete

- [ ] Code follows HTML/CSS/JS standards
- [ ] Design matches specification exactly
- [ ] All content is in English
- [ ] Colors match design system
- [ ] Typography is correct
- [ ] Spacing is consistent
- [ ] Animations are smooth (60fps)
- [ ] Responsive on all devices
- [ ] Accessibility compliant
- [ ] No console errors
- [ ] Playwright tests pass
- [ ] Visual comparison with design document
- [ ] Performance is optimal
- [ ] Code is clean and commented
- [ ] Git commit with clear message

---

## 🐛 Troubleshooting

### Common Issues

**Issue: Styles not applying**
```bash
# Solution: Hard refresh browser
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# Or clear cache in DevTools
# DevTools > Network tab > Disable cache checkbox
```

**Issue: JavaScript not working**
```bash
# Solution: Check console for errors
# Open DevTools (F12) > Console tab
# Fix any red errors shown
```

**Issue: Images not loading**
```bash
# Solution: Check file paths (case-sensitive)
# Verify images exist in assets/images/
# Check image file extensions
```

**Issue: Animations stuttering**
```bash
# Solution: Use GPU-accelerated properties
# Use transform instead of top/left
# Use will-change for animated elements
# Reduce number of animated elements
```

**Issue: Playwright tests failing**
```bash
# Solution: Check selectors
# Verify elements exist
# Add wait times if needed
# Check viewport size
```

---

## 📞 Getting Help

### Resources

**Documentation:**
- Design Spec: `.dev2/generated/homepage-content-design.md`
- Technical Spec: `.dev2/generated/project-design.md`
- Tasks: `.dev2/generated/tasks.md`

**Reference Materials:**
- Company Info: `materials/info.md`
- Platform Details: `materials/Teaser-info.md`
- Logo: `materials/mirabobio-logo-static.svg`

**External Resources:**
- MDN Web Docs: https://developer.mozilla.org
- CSS-Tricks: https://css-tricks.com
- Playwright Docs: https://playwright.dev
- Awwwards: https://www.awwwards.com (design inspiration)

---

## 🎯 Success Criteria

### Project Completion Checklist

- [ ] All 17 tasks completed
- [ ] All pages implemented
- [ ] Design matches specification
- [ ] All content in English
- [ ] Award-winning visual quality
- [ ] All Playwright tests passing
- [ ] Responsive on all devices
- [ ] Accessibility compliant (WCAG AA)
- [ ] Performance optimized (Lighthouse 95+)
- [ ] Cross-browser compatible
- [ ] Deployed to Cloudflare Pages
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics configured
- [ ] Documentation complete

---

## 📝 Daily Development Log Template

```markdown
# Development Log - [Date]

## Tasks Worked On
- Task ID: T004
- Task Name: Home Page - Hero Section
- Status: ✅ Completed

## What Was Accomplished
- Implemented hero section HTML structure
- Added particle background animation
- Created typing effect for headline
- Styled CTA buttons with hover effects
- Made section fully responsive
- Wrote and passed Playwright tests

## Challenges Faced
- Particle animation performance on mobile
- Solution: Reduced particle count for mobile devices

## Playwright Test Results
- All tests passing ✅
- Screenshot saved: tests/screenshots/hero-section.png
- Visual comparison: Matches design document

## Next Steps
- Start T005: Home Page - Content Sections
- Review design document for content sections
- Plan implementation approach

## Time Spent
- Estimated: 3 hours
- Actual: 3.5 hours

## Notes
- Consider adding more particle interaction effects
- May need to optimize for slower devices
```

---

**End of Start and Resume Document**

This document provides comprehensive guidance for starting and resuming development of the MIRABO Biotechnology website. Follow this process strictly to ensure high-quality, award-winning results.

**Remember:**
1. Always review documentation before coding
2. Follow design specifications exactly
3. Test with Playwright after each module
4. Maintain high-tech, award-winning quality
5. Keep all content in English
6. Commit frequently with clear messages
7. Update task status regularly

**Good luck building an award-winning website! 🚀**
