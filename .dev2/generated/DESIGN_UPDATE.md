# Design Style Update - Based on refer-index.html

## 📅 Update Date
2025-11-21

## 🎯 Purpose
Update all generated design documents to follow the approved design style from `refer-index.html`.

---

## ✅ Updated Documents

### 1. homepage-content-design.md
**Updated Sections:**
- Brand & Logo Analysis - Added "Core Design Style" section
- Enhanced Color System - Updated to match refer-index.html colors
- Visual Elements System - Added core interactive elements

**Key Changes:**
- Primary background: `#05080F` (Deep Space Black)
- Surface background: `#0F141E` (Surface Dark)
- Added custom cursor system specifications
- Added noise texture overlay specifications
- Added glassmorphism card specifications
- Added canvas particle network specifications
- Added Lenis smooth scroll specifications
- Added sticky scroll cards specifications

### 2. project-design.md
**Updated Sections:**
- Animation Libraries - Added Lenis, removed AOS
- Design System - Updated color palette
- Dependencies (CDN) - Updated library list

**Key Changes:**
- Replaced AOS with Lenis smooth scroll
- Updated color variables to match refer-index.html
- Simplified font imports (removed JetBrains Mono)
- Removed Lucide Icons (using inline SVG)

### 3. start-and-resume.md
**Updated Sections:**
- Critical Design Requirements - Updated with refer-index.html style
- Design System Compliance - Added core interactive elements

**Key Changes:**
- Added custom cursor system requirements
- Added noise texture overlay requirements
- Added glassmorphism requirements
- Added canvas particle network requirements
- Added Lenis smooth scroll requirements
- Added sticky scroll cards requirements

### 4. tasks.md
**Updated Tasks:**
- T002: Design System & CSS Variables
- T004: Home Page - Hero Section
- T005: Home Page - Content Sections

**Key Changes:**
- Added refer-index.html as PRIMARY REFERENCE
- Updated color scheme specifications
- Added custom cursor implementation requirements
- Added noise overlay implementation requirements
- Added canvas particle network requirements
- Added Lenis smooth scroll requirements
- Added sticky scroll cards requirements
- Updated Mission section to light mode switch

---

## 🎨 Core Design Elements to Implement

### 1. Custom Cursor System
```css
.cursor-dot {
  width: 8px;
  height: 8px;
  background-color: #32CD32;
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
}

.cursor-outline {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(50, 205, 50, 0.5);
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: width 0.2s, height 0.2s, background-color 0.2s;
}
```

**Behavior:**
- Dot follows mouse exactly
- Outline follows with 500ms delay
- Expands to 60px on hover with background fill

### 2. Noise Texture Overlay
```css
.noise-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml,...');
  opacity: 0.3;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 50;
}
```

**SVG Noise Filter:**
```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noiseFilter">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.05"/>
</svg>
```

### 3. Glassmorphism Cards
```css
.glass-panel {
  background: rgba(15, 20, 30, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
}
```

### 4. Canvas Particle Network
```javascript
class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.color = Math.random() > 0.9 ? '#32CD32' : '#4B8DFF';
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }
  
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Draw connections between particles within 150px
for (let i = 0; i < particles.length; i++) {
  for (let j = i; j < particles.length; j++) {
    const dx = particles[i].x - particles[j].x;
    const dy = particles[i].y - particles[j].y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 150) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(75, 141, 255, ${0.1 - distance/1500})`;
      ctx.lineWidth = 1;
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(particles[j].x, particles[j].y);
      ctx.stroke();
    }
  }
}
```

**Configuration:**
- Desktop: 60 particles
- Mobile: 30 particles
- Colors: 90% blue (#4B8DFF), 10% green (#32CD32)
- Connection distance: 150px
- Movement speed: 0.5px/frame

### 5. Lenis Smooth Scroll
```javascript
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

### 6. Sticky Scroll Cards
```css
.tech-card {
  position: sticky;
  margin-bottom: 6rem;
}

.tech-card:nth-child(1) {
  top: 8rem; /* 32 * 0.25rem */
}

.tech-card:nth-child(2) {
  top: 9rem; /* 36 * 0.25rem */
}

.tech-card:nth-child(3) {
  top: 10rem; /* 40 * 0.25rem */
}
```

**GSAP Animation:**
```javascript
cards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=100",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});
```

### 7. Navigation Scroll Behavior
```javascript
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const nav = document.getElementById('navbar');
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
    if(currentScroll > 50) {
      nav.classList.add('bg-mirabo-dark/90', 'backdrop-blur-md');
    } else {
      nav.classList.remove('bg-mirabo-dark/90', 'backdrop-blur-md');
    }
  }
  lastScroll = currentScroll;
});
```

### 8. Light Mode Switch (Mission Section)
```html
<section id="mission" class="py-32 bg-gray-100 text-mirabo-dark relative transition-colors duration-700">
  <!-- Content -->
</section>
```

**Key Features:**
- Background: `bg-gray-100` (light)
- Text: `text-mirabo-dark` (dark)
- Smooth transition: `transition-colors duration-700`
- Creates visual break from dark sections

---

## 🎨 Updated Color Palette

### Primary Colors
```css
--mirabo-blue: #003BA3;           /* Brand primary */
--mirabo-lightBlue: #4B8DFF;      /* Brand secondary */
--mirabo-green: #32CD32;          /* Logo green */
--mirabo-dark: #05080F;           /* Deep space black */
--mirabo-surface: #0F141E;        /* Surface dark */
```

### Background Colors
```css
--bg-primary: #05080F;            /* Main background */
--bg-secondary: #0F141E;          /* Secondary surface */
--bg-section-light: #F8FAFC;      /* Light sections */
--bg-glass: rgba(15, 20, 30, 0.6); /* Glassmorphism */
```

### Text Colors
```css
--text-primary: #F1F5F9;          /* Main text on dark */
--text-secondary: #94A3B8;        /* Secondary text */
--text-accent: #00D9FF;           /* Highlighted text */
--text-dark: #0F172A;             /* Text on light */
--text-green: #32CD32;            /* Green accent */
```

---

## 📚 Updated Technology Stack

### Removed
- ❌ AOS (Animate On Scroll)
- ❌ Particles.js (replaced with Canvas)
- ❌ JetBrains Mono font
- ❌ Lucide Icons

### Added
- ✅ Lenis Smooth Scroll (v1.0.29+)
- ✅ Custom Canvas particle system
- ✅ Custom cursor system
- ✅ Noise texture overlay

### Kept
- ✅ Tailwind CSS (via CDN)
- ✅ GSAP + ScrollTrigger
- ✅ Inter font (body)
- ✅ Space Grotesk font (display)

---

## 🔧 Implementation Priority

### Phase 1: Core Systems (T002)
1. Custom cursor system
2. Noise texture overlay
3. Glassmorphism card styles
4. Updated color variables
5. Base styles with `cursor: none`

### Phase 2: Hero Section (T004)
1. Canvas particle network
2. Lenis smooth scroll
3. GSAP reveal animations
4. Gradient text effects
5. Scroll indicator

### Phase 3: Content Sections (T005)
1. Sticky scroll cards
2. Light mode switch (Mission)
3. GSAP ScrollTrigger animations
4. Glassmorphism with shadow glows
5. Responsive layouts

---

## ✅ Validation Checklist

### Visual Validation
- [ ] Custom cursor follows mouse smoothly
- [ ] Cursor expands on hover (60px)
- [ ] Noise overlay visible (30% opacity)
- [ ] Glassmorphism blur effect working
- [ ] Canvas particles animating (60fps)
- [ ] Particle connections drawing correctly
- [ ] Lenis smooth scroll working
- [ ] Sticky cards stacking properly
- [ ] Light mode switch smooth
- [ ] Navigation scroll behavior correct

### Performance Validation
- [ ] 60fps animation performance
- [ ] Canvas optimized for mobile (30 particles)
- [ ] Smooth scroll no jank
- [ ] No layout shift
- [ ] Fast page load (<2s)

### Responsive Validation
- [ ] Custom cursor disabled on mobile
- [ ] Particle count reduced on mobile
- [ ] Sticky cards work on mobile
- [ ] Light mode switch works on mobile
- [ ] All layouts responsive

---

## 📝 Notes for Developers

1. **Always reference refer-index.html first** when implementing any feature
2. **Custom cursor only on desktop** - disable on touch devices
3. **Canvas particle count** - 60 desktop, 30 mobile for performance
4. **Lenis smooth scroll** - initialize before GSAP ScrollTrigger
5. **Sticky cards** - test scroll behavior thoroughly
6. **Light mode switch** - ensure smooth transition (700ms)
7. **Glassmorphism** - test on different backgrounds
8. **Performance** - monitor 60fps, optimize if needed

---

## 🔗 Reference Files

- **Primary Reference:** `refer-index.html`
- **Design Spec:** `.dev2/generated/homepage-content-design.md`
- **Technical Spec:** `.dev2/generated/project-design.md`
- **Task List:** `.dev2/generated/tasks.md`
- **Execution Guide:** `.dev2/generated/start-and-resume.md`

---

**End of Design Update Document**

All design documents have been updated to reflect the approved style from refer-index.html. Developers should follow these specifications strictly to maintain design consistency and quality.
