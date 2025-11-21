# MIRABO Biotechnology - Homepage Content Design
## Award-Winning High-Tech Website Design

---

## 📋 Design Overview

### Project Goal
Create an award-winning, high-tech website for MIRABO Biotechnology that showcases their AI-driven synthetic biology platform with cutting-edge visual design, immersive user experience, and professional presentation.

### Design Philosophy
**"AI × Biology: Visualizing the Future of Life Sciences"**

- **Visual Theme**: Futuristic Biotech Laboratory + Minimalist Tech Aesthetics
- **Emotional Tone**: Precision, Intelligence, Vitality, Sustainability
- **Design Level**: Awwwards Site of the Day / CSS Design Awards Winner Standard
- **Language**: Full English Content

---

## 🎨 Brand & Logo Analysis

### Logo Design Elements (from mirabobio-logo-static.svg)

**Color Palette**:
- Primary Blue: `#003BA3` - Technology, Trust, Professionalism
- Light Blue: `#4B8DFF` - Innovation, Energy
- Bio Green: `#32CD32` - Life, Biotechnology, Sustainability

**Design Features**:
- Green dot on "i" symbolizes **Life Origin** and **AI Intelligence Core**
- Vertical line represents **Data, Precision, Scientific Rigor**
- Bold modern font conveys **Technical Strength**

**Brand Personality**:
- Scientific Excellence
- AI-Driven Innovation
- Sustainable Future
- Professional & Trustworthy

---

## 🎯 Core Design Style (Based on refer-index.html)

### Visual Aesthetic
**"Dark Tech + Bio Neon + Glassmorphism"**

1. **Deep Space Background**
   - Ultra-dark base: `#05080F` (Deep Space Black)
   - Secondary dark: `#0F141E` (Surface Dark)
   - Creates immersive, futuristic atmosphere

2. **Custom Cursor System**
   - Green dot cursor (8px, #32CD32)
   - Animated outline ring (40px, rgba(50, 205, 50, 0.5))
   - Expands on hover (60px) with background fill
   - Adds premium, interactive feel

3. **Noise Texture Overlay**
   - SVG fractal noise filter
   - 30% opacity with mix-blend-overlay
   - Adds organic, analog warmth to digital design
   - Fixed position covering entire viewport

4. **Glassmorphism Cards**
   - Background: rgba(15, 20, 30, 0.6)
   - Backdrop-filter: blur(12px)
   - Border: 1px solid rgba(255, 255, 255, 0.05)
   - Creates floating, translucent effect

5. **Sticky Scroll Cards**
   - Technology platform cards stack on scroll
   - Each card sticks at different top positions (top-32, top-36, top-40)
   - Creates layered, depth effect
   - Different shadow colors per card (blue, purple, green)

6. **Canvas Particle Network**
   - 60 particles (30 on mobile) in blue/green
   - Connects particles within 150px distance
   - Simulates biological network/neural connections
   - Subtle movement (0.5px/frame)

7. **Smooth Scroll (Lenis)**
   - Duration: 1.2s
   - Easing: exponential decay
   - Creates buttery-smooth scrolling experience
   - Industry-standard for award-winning sites

8. **Light/Dark Mode Switch**
   - Mission section switches to light mode (bg-gray-100)
   - Text changes to dark (text-mirabo-dark)
   - Creates visual break and emphasis

---

## 🌈 Enhanced Color System

### Primary Colors (Updated from refer-index.html)
```css
--mirabo-blue: #003BA3           /* Brand primary */
--mirabo-lightBlue: #4B8DFF      /* Brand secondary */
--mirabo-green: #32CD32          /* Logo green - life & biotech */
--mirabo-dark: #05080F           /* Deep space black - main bg */
--mirabo-surface: #0F141E        /* Surface dark - sections */

--deep-space-blue: #001F54       /* Accent blue */
--electric-blue: #0066FF         /* High-energy accent */
--cyber-cyan: #00D9FF            /* Cyber accent */
--neon-green: #00FF88            /* Neon highlight */
--quantum-purple: #8B5CF6        /* AI & innovation */
```

### Background Colors
```css
--bg-primary: #05080F            /* Deep space - main background */
--bg-secondary: #0F141E          /* Secondary dark surface */
--bg-section-dark: #0A0E1A       /* Ultra dark for hero */
--bg-section-light: #F8FAFC      /* Light contrast sections */
--bg-glass: rgba(15, 20, 30, 0.6)  /* Glassmorphism */
```

### Gradients
```css
--gradient-hero: linear-gradient(135deg, #001F54 0%, #05080F 50%, #0F141E 100%);
--gradient-mesh: radial-gradient(circle at 20% 50%, rgba(0, 102, 255, 0.15) 0%, transparent 50%),
                 radial-gradient(circle at 80% 80%, rgba(50, 205, 50, 0.1) 0%, transparent 50%);
--gradient-card: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
--gradient-button: linear-gradient(135deg, #0066FF 0%, #00D9FF 100%);
```

### Text Colors
```css
--text-primary: #F1F5F9          /* Main text on dark */
--text-secondary: #94A3B8        /* Secondary text */
--text-accent: #00D9FF           /* Highlighted text */
--text-dark: #0F172A             /* Text on light backgrounds */
--text-green: #32CD32            /* Green accent text */
```

---

## 🎯 Visual Elements System

### Core Interactive Elements (from refer-index.html)

#### 1. Custom Cursor System
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

/* On hover */
.cursor-outline:hover {
  width: 60px;
  height: 60px;
  background-color: rgba(50, 205, 50, 0.1);
}
```

#### 2. Noise Texture Overlay
```css
.noise-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml,...'); /* Fractal noise */
  opacity: 0.3;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 50;
}
```

#### 3. Glassmorphism Cards
```css
.glass-panel {
  background: rgba(15, 20, 30, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
}
```

#### 4. Canvas Particle Network
```javascript
// Bio network simulation
class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.color = Math.random() > 0.9 ? '#32CD32' : '#4B8DFF';
  }
}

// Draw connections between particles within 150px
```

#### 5. Sticky Scroll Cards
```css
.tech-card {
  position: sticky;
  top: 8rem; /* 32 * 0.25rem */
}

.tech-card:nth-child(2) {
  top: 9rem; /* 36 * 0.25rem */
}

.tech-card:nth-child(3) {
  top: 10rem; /* 40 * 0.25rem */
}
```

### Biotech Elements
- DNA double helix animated lines
- Molecular structure particle animations
- Protein folding visualizations
- Cell division effects
- Microscopic imagery
- Bio network connections (canvas)

### AI Tech Elements
- Neural network connection lines
- Data flow animations
- Matrix-style code rain
- Holographic projection effects
- Scanning line animations
- Circuit board patterns

### Fusion Elements
- Gradient mesh backgrounds
- Glassmorphism (frosted glass effect)
- Neon glow borders
- 3D floating cards
- Parallax scrolling
- Particle systems

---

## 📐 Typography System

### Font Families
```css
--font-primary: 'Inter', sans-serif;           /* Body text */
--font-display: 'Space Grotesk', sans-serif;   /* Headlines - tech feel */
--font-mono: 'JetBrains Mono', monospace;      /* Code/data display */
```

### Font Sizes (Desktop)
```css
--text-hero: 96px / 6rem        /* Hero headlines */
--text-h1: 72px / 4.5rem        /* Page titles */
--text-h2: 48px / 3rem          /* Section titles */
--text-h3: 36px / 2.25rem       /* Subsection titles */
--text-h4: 24px / 1.5rem        /* Card titles */
--text-body: 18px / 1.125rem    /* Body text */
--text-small: 14px / 0.875rem   /* Small text */
```

### Font Sizes (Mobile)
```css
--text-hero-mobile: 48px / 3rem
--text-h1-mobile: 40px / 2.5rem
--text-h2-mobile: 32px / 2rem
--text-h3-mobile: 24px / 1.5rem
--text-h4-mobile: 20px / 1.25rem
--text-body-mobile: 16px / 1rem
```

### Typography Rules
- Line height: 1.6 for body, 1.2 for headlines
- Letter spacing: -0.02em for large headlines
- Font weight: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- Bold contrast: Use 96px headlines with 18px body text

---

## 📱 Responsive Breakpoints

```css
--mobile: 0px - 639px
--tablet: 640px - 1023px
--desktop: 1024px - 1279px
--wide: 1280px+
```

---

## ✨ Animation & Interaction Guidelines

### Page Load Animations
- Logo particle aggregation (1.5s)
- Hero text fade-in with typing effect (2s)
- Staggered element appearance (0.3s delay each)

### Scroll Animations (AOS + GSAP)
- Fade up: Cards, text blocks
- Fade in: Images
- Scale up: Icons, buttons
- Slide in: Side panels
- Parallax: Background elements

### Hover Effects
- Buttons: Glow + scale (1.05x)
- Cards: Lift + shadow + border glow
- Links: Underline slide-in
- Images: Zoom (1.1x) + overlay fade

### Micro-interactions
- Button ripple effect on click
- Form input focus glow
- Cursor follow effect (custom cursor)
- Magnetic buttons (cursor attraction)

---

## 🖼️ Image Strategy (Unsplash Keywords)

### Hero Backgrounds
- "abstract technology blue"
- "data visualization"
- "neural network"
- "futuristic laboratory"
- "digital particles"

### About Section
- "biotech laboratory team"
- "scientists collaboration"
- "modern research facility"
- "microscope research"

### Platform Section
- "AI visualization"
- "molecular structure"
- "protein structure"
- "biotech innovation"
- "data science"

### Solutions Section
- "skincare laboratory"
- "medical research"
- "pharmaceutical development"
- "healthcare technology"

---

## 📄 Page Structure & Detailed Design

---

## 1️⃣ HOME PAGE - "The Future is Now"

### Theme
Immersive tech experience with dynamic visual storytelling

### Layout Structure

#### 1.1 Hero Section (Full Viewport)
**Background**:
- Base: Dark gradient (`--gradient-hero`)
- Layer 1: Animated particle system (white/cyan particles)
- Layer 2: DNA helix lines (animated paths)
- Layer 3: Neural network nodes (subtle connections)

**Content Layout**:
```
[Center Aligned]
- Logo (animated entrance)
- Main Headline: "Pioneering AI-Driven Synthetic Biology"
  Font: Space Grotesk, 96px (mobile: 48px), Bold
  Color: White with subtle glow
  Animation: Typing effect + fade in

- Subheadline: "Creating next-generation bioactive ingredients and medical materials through intelligent innovation"
  Font: Inter, 24px (mobile: 18px), Light
  Color: #94A3B8
  Animation: Fade in (delay 1s)

- CTA Buttons (horizontal layout):
  [Explore Our Platform] (Primary - glowing blue)
  [Contact Us] (Secondary - outline)
  Animation: Slide up (delay 1.5s)

- Scroll Indicator (bottom center)
  Icon: Animated down arrow
  Text: "Scroll to explore"
```

**Images Needed**:
- Background: Abstract tech particles (Unsplash: "abstract technology blue particles")
- Overlay: Semi-transparent gradient

**Visual Effects**:
- Mouse parallax (background moves with cursor)
- Particle animation (continuous)
- Glow effect on text
- Button hover: Scale + glow

---

#### 1.2 Company Overview Section
**Background**: `--bg-primary` with subtle grid pattern

**Layout**: Container (max-width: 1280px), centered

**Content**:
```
[Badge] "Who We Are" (small, cyan, uppercase)

[Headline] "Bridging AI and Biology"
Font: Space Grotesk, 48px, Bold
Color: White
Animation: Fade up on scroll

[Description] 
"MIRABO Biotechnology is a Hong Kong-based synthetic biology company pioneering AI-integrated platforms for the personal-care and healthcare industries."

Font: Inter, 20px, Regular
Color: #94A3B8
Max-width: 800px, centered
Animation: Fade up (delay 0.2s)

[Stats Grid - 3 columns]
┌─────────────┬─────────────┬─────────────┐
│   AI-Driven │  Sustainable│  Innovative │
│   Platform  │   Solutions │   Research  │
└─────────────┴─────────────┴─────────────┘

Each stat card:
- Icon (top, 48px, cyan glow)
- Title (24px, bold, white)
- Description (16px, gray)
- Glass card background
- Hover: Lift + glow border
```

**Images Needed**:
- Icons: AI chip, leaf/recycle, flask/beaker (SVG, custom designed)

---

#### 1.3 MiRAiQ Platform Section
**Background**: Dark with radial gradient spotlight

**Layout**: Full-width, centered content

**Content**:
```
[Section Badge] "Our Technology"

[Headline] "MiRAiQ AI Engine"
Font: 72px, Bold
Color: White with gradient (blue to cyan)

[Tagline] "From Protein Design to Scalable Production"
Font: 28px, Light
Color: Cyan

[Platform Visual]
- Center: Large platform interface mockup (3D perspective)
- Image: AI dashboard visualization (Unsplash: "AI data visualization dashboard")
- Effect: Floating animation, glow border

[Three Platform Cards - Horizontal Layout]

┌──────────────────────────────────────────────────────┐
│  PRISM™        ORION™         IGNIS™                 │
│  [Icon]        [Icon]         [Icon]                 │
│  Analysis      Engineering    Manufacturing          │
└──────────────────────────────────────────────────────┘

Each card:
- Background: Glassmorphism with unique accent color
  - PRISM: Blue-purple gradient
  - ORION: Cyan-green gradient  
  - IGNIS: Orange-red gradient
- Icon: 64px, custom designed
- Title: Platform name + ™ symbol
- Subtitle: One-line description
- "Learn More →" link
- Hover: 3D tilt effect + glow

[CTA Button] "Explore Full Platform" (centered, large)
```

**Images Needed**:
- Platform mockup: "AI interface dashboard" (Unsplash)
- PRISM icon: Prism/analysis symbol
- ORION icon: Gear/engineering symbol
- IGNIS icon: Flame/manufacturing symbol

---

#### 1.4 Industries Section
**Background**: Light section (`--bg-section-light`) - contrast break

**Layout**: Container, 2-column grid

**Content**:
```
[Headline] "Transforming Industries"
Font: 48px, Bold
Color: Dark blue
Alignment: Center

[Industry Cards - 2 columns]

┌─────────────────────┬─────────────────────┐
│   Personal Care     │     Healthcare      │
│   [Large Image]     │   [Large Image]     │
│   Description       │   Description       │
│   [Learn More]      │   [Learn More]      │
└─────────────────────┴─────────────────────┘

Each card:
- Large background image (400px height)
- Gradient overlay (dark to transparent)
- Icon (top-left, 48px, white)
- Title (32px, bold, white)
- Description (18px, white/80%)
- Button (outline, white)
- Hover: Image zoom + overlay darken
```

**Images Needed**:
- Personal Care: "skincare laboratory cosmetics" (Unsplash)
- Healthcare: "medical research laboratory" (Unsplash)

---

#### 1.5 Mission & Vision Section
**Background**: Dark gradient with particle overlay

**Layout**: Split layout (60/40)

**Content**:
```
[Left Side - Mission]
Icon: Target/compass (64px, neon green)
Label: "Our Mission"
Text: "Bridging biotechnology and everyday life through innovative, sustainable products powered by synthetic biology. We are dedicated to enhancing quality of life while preserving the environment."
Font: 24px, Light
Color: White

[Right Side - Vision]  
Icon: Telescope/star (64px, cyan)
Label: "Our Vision"
Text: "Becoming a global leader in synthetic biology, pioneering sustainable solutions that extend into broader areas of daily life."
Font: 24px, Light
Color: White

[Background Element]
- Abstract DNA helix visualization (right side)
- Animated, low opacity
```

**Images Needed**:
- Background: "abstract DNA structure" (Unsplash, low opacity)

---

#### 1.6 CTA Section
**Background**: Gradient with glow effect

**Layout**: Centered, full-width

**Content**:
```
[Headline] "Ready to Innovate Together?"
Font: 56px, Bold
Color: White
Alignment: Center

[Subtext] "Let's discuss how our AI platform can accelerate your R&D"
Font: 20px, Regular
Color: #94A3B8

[CTA Button] "Get in Touch"
Style: Large, glowing, animated pulse
Size: 20px padding, 18px font

[Background Effect]
- Animated gradient waves
- Particle burst on hover
```

---

## 2️⃣ ABOUT US PAGE - "The Origin of Intelligence"

### Theme
Human × Technology storytelling

### Layout Structure

#### 2.1 Hero Section
**Background**: Dark with spotlight effect

**Content**:
```
[Breadcrumb] Home > About Us

[Headline] "About MIRABO"
Font: 72px, Bold
Animation: Fade in

[Intro Text]
"Founded by University of Minnesota alumni, MIRABO Biotechnology combines deep expertise in synthetic biology, AI, and bioprocess engineering to revolutionize biologics development."

Font: 24px, Light
Max-width: 900px
```

---

#### 2.2 Company Story Section
**Background**: Alternating dark/light sections

**Content**:
```
[Section 1 - Hong Kong HQ]
Layout: Image left (50%) + Text right (50%)
Image: "Hong Kong Science Park modern building" (Unsplash)
Text: MIRABO Biotechnology Limited description
Effect: Parallax scroll

[Section 2 - Shanghai Subsidiary]
Layout: Text left (50%) + Image right (50%)
Image: "Shanghai Zhangjiang laboratory" (Unsplash)
Text: Shanghai MIRABO description
Effect: Parallax scroll (opposite direction)
```

---

#### 2.3 Mission & Vision (Detailed)
**Background**: Dark with gradient cards

**Layout**: 2-column grid

**Content**:
```
[Mission Card]
- Large quote mark icon
- Full mission statement
- Background: Glass card with green accent
- Icon grid: Innovation, Sustainability, Quality icons

[Vision Card]
- Large star icon
- Full vision statement
- Background: Glass card with blue accent
- Future-oriented imagery overlay
```

---

#### 2.4 Our Approach Section
**Background**: Light section

**Content**:
```
[Headline] "How We Work"

[Process Flow - 4 steps, horizontal]
1. AI-Driven Modeling
   Icon: Brain/network
   
2. Experimental Validation
   Icon: Flask/test tube
   
3. Process Optimization
   Icon: Gears/settings
   
4. Scalable Production
   Icon: Factory/scale

Each step:
- Number badge (large, gradient)
- Icon (64px)
- Title (24px, bold)
- Description (16px)
- Connecting arrow animation
```

**Images Needed**:
- Background: "laboratory workflow" (Unsplash, subtle)

---

## 3️⃣ PLATFORM & TECHNOLOGY PAGE - "The Trinity AI Engine"

### Theme
Technology visualization with interactive elements

### Layout Structure

#### 3.1 Hero Section
**Background**: Animated neural network visualization

**Content**:
```
[Breadcrumb] Home > Platform

[Headline] "MiRAiQ AI Engine"
Font: 72px, Bold, Gradient text (blue to cyan)

[Tagline] "From Protein Design to Scalable Production"
Font: 32px, Light

[Description]
"Three integrated AI platforms covering the entire biologics development pipeline from molecular design to commercial manufacturing."

Font: 20px, Regular
Max-width: 800px, centered
```

**Images Needed**:
- Background: "neural network visualization" (Unsplash)

---

#### 3.2 Platform Overview Diagram
**Background**: Dark

**Content**:
```
[Drug Development Pipeline Visualization]

Horizontal flow diagram:
Target ID → Lead ID → Lead Opt → Process Dev → Manufacturing
              ↓          ↓           ↓              ↓
           PRISM™    ORION™      IGNIS™         IGNIS™

Visual style:
- Timeline with connecting lines
- Platform badges appear at relevant stages
- Animated flow (data particles moving)
- Hover on stage: Highlight + info tooltip
```

---

#### 3.3 Three Platform Sections (Tabbed Interface)

**Tab Navigation**:
```
[PRISM™] [ORION™] [IGNIS™]

Active tab: Glowing underline + accent color
Inactive: Gray, hover: lighten
```

---

##### Platform 1: MIRAIQ-PRISM™

**Background**: Blue-purple gradient section

**Layout**: Split (40% visual / 60% content)

**Content**:
```
[Left Side - Visual]
- 3D protein structure visualization
- Animated analysis overlay
- Scanning lines effect
- Image: "protein structure molecular" (Unsplash)

[Right Side - Content]

[Badge] "AI-Driven Analysis"

[Title] "MIRAIQ-PRISM™"
Font: 48px, Bold
Color: White

[Subtitle] "In-Silico Analysis Engine"
Font: 24px, Light
Color: Cyan

[Purpose]
"Accelerate developability assessment of protein candidates"

[Stage Badge] "Lead Identification"

[Key Features - Expandable Accordion]

▼ Sequence Core
  • PTM risk assessment
  • Proteolytic site prediction
  • Disulfide bond stability

▼ Structure Core
  • Molecular dynamics simulation
  • Surface charge & hydrophobicity
  • Side-chain prediction

▼ Safety/Efficacy Core
  • Immunogenicity prediction
  • Off-target effect analysis
  • Potency assessment

▼ Other Properties
  • Aggregation propensity
  • Solubility prediction
  • Viscosity modeling
  • Thermal stability

Each accordion:
- Icon (left, 32px)
- Title (18px, bold)
- Expand/collapse animation
- Content (16px, gray)
- Hover: Glow border

[CTA] "Request Demo"
```

**Images Needed**:
- "protein structure 3D visualization" (Unsplash)
- "molecular analysis dashboard" (Unsplash)

---

##### Platform 2: MIRAIQ-ORION™

**Background**: Cyan-green gradient section

**Layout**: Split (60% content / 40% visual)

**Content**:
```
[Left Side - Content]

[Badge] "AI-Driven Engineering"

[Title] "MIRAIQ-ORION™"
Font: 48px, Bold

[Subtitle] "Protein Engineering Platform"
Font: 24px, Light

[Purpose]
"Drug optimization to enhance stability, activity, and yield"

[Stage Badge] "Lead Optimization"

[Key Technologies - Icon Grid]

┌──────────────┬──────────────┐
│ AI Modeling  │ DBTL Cycles  │
│   [Icon]     │   [Icon]     │
│ Description  │ Description  │
├──────────────┼──────────────┤
│ Rational Eng │ Dev Accel    │
│   [Icon]     │   [Icon]     │
│ Description  │ Description  │
└──────────────┴──────────────┘

Each technology card:
- Icon (48px, gradient)
- Title (20px, bold)
- Description (14px)
- Glass background
- Hover: Scale + glow

[Workflow Diagram]
Design → Build → Test → Learn → (loop back)
Animated circular flow with icons

[Right Side - Visual]
- Protein mutation visualization
- Before/after comparison
- Enhanced binding illustration
- Image: "protein engineering mutation" (Unsplash)
```

**Images Needed**:
- "protein engineering visualization" (Unsplash)
- "molecular mutation comparison" (Unsplash)

---

##### Platform 3: MIRAIQ-IGNIS™

**Background**: Orange-red gradient section

**Layout**: Full-width with centered content

**Content**:
```
[Badge] "AI-Driven Manufacturing"

[Title] "MIRAIQ-IGNIS™"
Font: 48px, Bold

[Subtitle] "Bioprocess Optimization Platform"
Font: 24px, Light

[Purpose]
"Optimize manufacturing processes for yield, quality, and scalability"

[Stage Badge] "Process Development & Commercial Manufacturing"

[Process Flow Visualization - Horizontal]

Upstream → Downstream → Formulation → Scale-up/down
  [Icon]      [Icon]       [Icon]        [Icon]

Each stage (expandable cards):

1. Upstream
   - AI-guided cell culture optimization
   - Icon: Cell/bioreactor
   - Image: "bioreactor cell culture" (Unsplash)

2. Downstream
   - Intelligent purification design
   - Icon: Filter/purification
   - Image: "protein purification" (Unsplash)

3. Formulation
   - Enhanced stability & shelf-life
   - Icon: Vial/formula
   - Image: "pharmaceutical formulation" (Unsplash)

4. Scale-up/down
   - Predictive modeling
   - Icon: Scale/factory
   - Image: "manufacturing scale" (Unsplash)

Interaction: Click to expand, show detailed info
Animation: Smooth expand/collapse
```

**Images Needed**:
- "bioreactor manufacturing" (Unsplash)
- "pharmaceutical production line" (Unsplash)

---

#### 3.4 Intelligent Software Platform Section

**Background**: Dark with code pattern overlay

**Content**:
```
[Headline] "From Digital Lab to Smart Lab"
Font: 48px, Bold

[Subtext] "Integrated software modules for end-to-end biologics development"

[Module Grid - 4x2 layout]

┌──────────┬──────────┬──────────┬──────────┐
│ Bulk BCR │  Phage   │  Codon   │  Vector  │
│          │ Display  │   Opt    │   Eng    │
├──────────┼──────────┼──────────┼──────────┤
│ Process  │  Omics   │  Enzyme  │Nucleotide│
│   Data   │Integration│Discovery │  Mining  │
└──────────┴──────────┴──────────┴──────────┘

Each module card:
- Icon (40px, cyan)
- Title (18px, bold)
- One-line description (14px)
- Glass card background
- Hover: Glow + info tooltip
- Click: Modal with detailed info
```

---

#### 3.5 Platform Benefits Section

**Background**: Light section (contrast)

**Content**:
```
[Headline] "Why MiRAiQ?"

[Benefits Grid - 2x2]

┌─────────────────────┬─────────────────────┐
│  50-70% Time        │  Improved           │
│  Reduction          │  Precision          │
│  [Icon + Number]    │  [Icon + Number]    │
├─────────────────────┼─────────────────────┤
│  Lower Costs        │  Faster             │
│                     │  Time-to-Market     │
│  [Icon + Number]    │  [Icon + Number]    │
└─────────────────────┴─────────────────────┘

Each benefit:
- Large animated number (count-up effect)
- Icon (64px)
- Title (24px, bold)
- Description (16px)
- Background: White card with shadow
```

---

## 4️⃣ SOLUTIONS PAGE - "Empowering Industries"

### Theme
Scenario-based showcase

### Layout Structure

#### 4.1 Hero Section
**Background**: Dark gradient

**Content**:
```
[Breadcrumb] Home > Solutions

[Headline] "Solutions for Tomorrow's Industries"
Font: 72px, Bold

[Description]
"Tailored AI-driven synthetic biology solutions for personal care and healthcare sectors"

Font: 20px, Regular
```

---

#### 4.2 Industry Solutions (Full-Width Cards)

##### Solution 1: Personal Care Industry

**Background**: Large image with gradient overlay

**Layout**: Asymmetric (70% image / 30% content overlay)

**Content**:
```
[Left Side - Large Image]
Image: "luxury skincare laboratory" (Unsplash)
Effect: Parallax scroll, zoom on hover

[Right Side - Content Overlay]
Background: Glass card (frosted)

[Icon] Skincare/cosmetics (64px, neon green)

[Title] "Bioactive Ingredients for Personal Care"
Font: 40px, Bold

[Description]
"Next-generation skincare actives developed through AI-optimized synthetic biology"

[Benefits List]
✓ Enhanced efficacy
✓ Natural and sustainable
✓ Consumer-safe formulations
✓ Rapid development cycles

[Features]
• Bio-based peptides
• Sustainable actives
• Custom formulations

[CTA] "Explore Solutions" (glowing button)
```

**Images Needed**:
- "luxury skincare laboratory cosmetics" (Unsplash)
- "natural skincare ingredients" (Unsplash)

---

##### Solution 2: Healthcare Industry

**Background**: Large image with gradient overlay

**Layout**: Asymmetric (30% content overlay / 70% image)

**Content**:
```
[Left Side - Content Overlay]
Background: Glass card (frosted)

[Icon] Medical/healthcare (64px, cyan)

[Title] "Advanced Medical Materials"
Font: 40px, Bold

[Description]
"Precision therapeutics and biomaterials engineered with AI-driven platforms"

[Benefits List]
✓ Clinical precision
✓ Improved patient outcomes
✓ Regulatory compliance
✓ Scalable manufacturing

[Features]
• Therapeutic proteins
• Biomaterials
• Diagnostic solutions

[CTA] "Learn More" (glowing button)

[Right Side - Large Image]
Image: "medical research laboratory" (Unsplash)
Effect: Parallax scroll, zoom on hover
```

**Images Needed**:
- "medical research laboratory equipment" (Unsplash)
- "pharmaceutical development" (Unsplash)

---

#### 4.3 Custom Solutions Section

**Background**: Dark with particle effect

**Content**:
```
[Headline] "Tailored to Your Needs"
Font: 48px, Bold
Alignment: Center

[Description]
"Partner with us for custom R&D projects leveraging our AI platforms"

[Partnership Approach - 3 steps]

1. Consultation
   Icon: Handshake
   Description: "Understand your challenges"

2. Development
   Icon: Gear/cog
   Description: "AI-driven solution design"

3. Delivery
   Icon: Rocket
   Description: "Scalable implementation"

[CTA] "Discuss Your Project" (large, centered)
```

---

#### 4.4 Case Studies Teaser (Optional)

**Background**: Light section

**Content**:
```
[Headline] "Success Stories"

[Case Study Cards - Horizontal Scroll]

Card 1: [Coming Soon]
Card 2: [Coming Soon]
Card 3: [Coming Soon]

Each card:
- Industry icon
- Project title
- Brief description
- "Read More" link
- Glass card design
```

---

## 5️⃣ CONTACT PAGE - "Connect to the Future"

### Theme
Clean, efficient, professional

### Layout Structure

#### 5.1 Hero Section
**Background**: Dark gradient with subtle animation

**Content**:
```
[Breadcrumb] Home > Contact

[Headline] "Let's Innovate Together"
Font: 72px, Bold

[Description]
"Get in touch with our team to discuss how MiRAiQ can accelerate your R&D"

Font: 20px, Regular
```

---

#### 5.2 Contact Form Section

**Background**: Split layout (50/50)

**Layout**:
```
[Left Side - Contact Form]
Background: Glass card with glow border

Form Fields:
1. Name * (required)
   - Input with floating label
   - Focus: Cyan glow border
   
2. Email * (required)
   - Input with validation
   - Icon: Email symbol
   
3. Company
   - Optional field
   
4. Industry (dropdown)
   - Options: Personal Care, Healthcare, Pharmaceutical, Other
   - Custom styled select
   
5. Subject *
   - Input field
   
6. Message * (required)
   - Textarea (5 rows)
   - Character counter
   
[Submit Button]
"Send Message"
Style: Large, glowing, full-width
Loading state: Spinner animation
Success state: Checkmark + "Message sent!"
Error state: Red border + error message

Form Validation:
- Real-time validation
- Error messages below fields
- Success message: Modal overlay

[Right Side - Contact Information]

[Company Info Cards]

Card 1: MIRABO Biotechnology Limited
- Icon: Building (48px, cyan)
- Location: Hong Kong Science Park, Hong Kong
- Map pin icon + "View on Map" link
- Background: Glass card

Card 2: Shanghai MIRABO Biotechnology
- Icon: Building (48px, green)
- Location: Zhangjiang Pharma Valley Innovation Center, Shanghai, China
- Map pin icon + "View on Map" link
- Background: Glass card

[Contact Details]
- Website: www.mirabobio.com
- Email: info@mirabobio.com

[Business Hours]
Monday - Friday: 9:00 AM - 6:00 PM (HKT)

[Social Media Icons]
- LinkedIn (hover: glow)
- Twitter/X (hover: glow)
- Research Gate (hover: glow)

Each icon: 40px, outline style, hover: fill + glow
```

---

#### 5.3 Map Section

**Background**: Dark

**Content**:
```
[Interactive Map]
- Embedded map (dark theme)
- Two location markers:
  1. Hong Kong Science Park (blue marker)
  2. Shanghai Zhangjiang (green marker)
- Zoom controls
- Custom marker design (glowing pins)
- Click marker: Info popup

Map Style: Dark mode with cyan/green accents
Height: 500px
Full-width
```

**Implementation**: 
- Use Mapbox GL JS or Google Maps (dark theme)
- Custom styled markers
- Smooth zoom animations

---

## 🧩 Global Components

### Header / Navigation

**Design**:
```
[Fixed/Sticky Header]
Background: Transparent (on hero), Dark with blur (on scroll)
Height: 80px
Border-bottom: 1px solid rgba(255,255,255,0.1) (on scroll)

Layout:
┌────────────────────────────────────────────────────┐
│ [Logo]              [Nav Links]         [CTA]      │
└────────────────────────────────────────────────────┘

[Logo] (Left)
- MIRABO logo with green dot
- Size: 180px width
- Hover: Subtle glow
- Link to home

[Navigation Links] (Center/Right)
- Home
- About Us
- Platform
- Solutions
- Contact

Each link:
- Font: Inter, 16px, Medium
- Color: White (80% opacity)
- Hover: 100% opacity + underline slide-in
- Active: Cyan color + underline

[CTA Button] (Right)
"Get Started"
Style: Outline button with glow
Hover: Fill + scale

[Mobile Menu] (< 768px)
- Hamburger icon (animated)
- Full-screen overlay menu
- Slide-in animation
- Close button (X)
- Vertical nav links
- Background: Dark with blur
```

---

### Footer

**Design**:
```
[Background] Ultra dark (#0A0E1A)
[Border-top] 1px solid rgba(255,255,255,0.1)
[Padding] 80px vertical

Layout: 4-column grid (responsive to 1-column on mobile)

┌──────────┬──────────┬──────────┬──────────┐
│  About   │  Links   │ Contact  │  Social  │
└──────────┴──────────┴──────────┴──────────┘

[Column 1 - About]
- MIRABO logo (small, 150px)
- Tagline: "Pioneering AI-Driven Synthetic Biology"
- Short description (3 lines)
- Font: 14px, gray

[Column 2 - Quick Links]
Title: "Quick Links"
Links:
- About Us
- Platform
- Solutions
- Contact
- Privacy Policy
- Terms of Service

Each link: 14px, gray, hover: cyan

[Column 3 - Contact]
Title: "Contact"
- Hong Kong office address
- Shanghai office address
- Email: info@mirabobio.com

Font: 14px, gray
Icons: 16px, cyan

[Column 4 - Follow Us]
Title: "Follow Us"
Social icons (horizontal):
- LinkedIn
- Twitter/X
- Research Gate

Each icon: 32px, outline, hover: fill + glow

[Bottom Bar]
Full-width, centered
"© 2025 MIRABO Biotechnology. All rights reserved."
Font: 12px, gray

[Back-to-Top Button]
Position: Fixed, bottom-right
Icon: Arrow up (circle)
Style: Glass button with glow
Hover: Scale + glow increase
Click: Smooth scroll to top
Show: Only when scrolled > 500px
```

---

### Buttons

**Primary Button**:
```css
Background: Linear gradient (electric blue to cyan)
Color: White
Padding: 16px 32px
Border-radius: 8px
Font: 16px, Semibold
Shadow: 0 4px 20px rgba(0, 102, 255, 0.4)
Hover: Scale 1.05 + glow increase
Active: Scale 0.98
Transition: 0.3s ease
```

**Secondary Button**:
```css
Background: Transparent
Border: 2px solid cyan
Color: Cyan
Padding: 14px 30px
Border-radius: 8px
Font: 16px, Semibold
Hover: Background cyan + color dark
Transition: 0.3s ease
```

**Ghost Button**:
```css
Background: Transparent
Color: White
Padding: 12px 24px
Border: 1px solid rgba(255,255,255,0.2)
Hover: Border cyan + glow
```

---

### Cards

**Glass Card**:
```css
Background: rgba(30, 41, 59, 0.6)
Backdrop-filter: blur(20px)
Border: 1px solid rgba(255,255,255,0.1)
Border-radius: 16px
Padding: 32px
Shadow: 0 8px 32px rgba(0,0,0,0.3)
Hover: Border glow (cyan) + lift (translateY -8px)
Transition: 0.4s ease
```

**Feature Card**:
```css
Background: Dark gradient
Border: 1px solid rgba(0,217,255,0.2)
Border-radius: 12px
Padding: 24px
Hover: Border glow + scale 1.02
Icon: 48px, gradient
Title: 20px, bold
Description: 16px, gray
```

---

### Forms

**Input Field**:
```css
Background: rgba(30, 41, 59, 0.5)
Border: 1px solid rgba(255,255,255,0.1)
Border-radius: 8px
Padding: 14px 16px
Color: White
Font: 16px
Placeholder: Gray (50% opacity)
Focus: Border cyan + glow + label float up
Error: Border red + error message below
```

**Textarea**:
```css
Same as input
Min-height: 120px
Resize: vertical
```

**Select Dropdown**:
```css
Custom styled (hide default arrow)
Background: Dark
Border: Same as input
Options: Dark background, white text
Hover option: Cyan background
```

---

### Loading States

**Page Load**:
```
1. Logo particle aggregation (1.5s)
2. Progress bar (top, cyan, 2s)
3. Fade in content (0.5s)
```

**Button Loading**:
```
- Spinner icon (rotating)
- Text: "Sending..."
- Disabled state
```

**Image Loading**:
```
- Skeleton placeholder (animated gradient)
- Fade in when loaded
- Blur-up effect (low-res to high-res)
```

---

### Animations

**Scroll Animations** (AOS):
```
- fade-up: Cards, text blocks (duration: 800ms)
- fade-in: Images (duration: 600ms)
- zoom-in: Icons (duration: 500ms)
- slide-left/right: Side content (duration: 700ms)
- Stagger delay: 100ms between elements
```

**Hover Animations**:
```
- Scale: 1.05 (buttons, cards)
- Glow: Box-shadow increase
- Lift: translateY(-8px)
- Tilt: 3D rotate (cards)
- Duration: 0.3s - 0.4s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

**Continuous Animations**:
```
- Particle float: Infinite, slow
- Glow pulse: 2s infinite
- Gradient shift: 5s infinite
- Rotate: Icons, 20s infinite
```

---

## 📐 Responsive Design Rules

### Mobile (< 640px)
- Single column layouts
- Hamburger menu
- Reduced font sizes (see typography mobile)
- Stack cards vertically
- Full-width buttons
- Reduced padding (16px instead of 32px)
- Hide complex animations (performance)

### Tablet (640px - 1023px)
- 2-column grids become 1-column
- Adjusted font sizes
- Simplified navigation
- Maintain key animations

### Desktop (1024px+)
- Full multi-column layouts
- All animations enabled
- Hover effects active
- Parallax scrolling
- Complex interactions

---

## 🎯 Performance Targets

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Performance**: > 95
- **Lighthouse Accessibility**: > 95
- **Lighthouse Best Practices**: > 95
- **Lighthouse SEO**: > 95

---

## ✅ Design Checklist

### Visual Design
- [ ] Consistent color system applied
- [ ] Typography hierarchy clear
- [ ] Spacing system consistent (8px grid)
- [ ] All images optimized (WebP, < 200KB)
- [ ] Icons consistent style (outline/filled)
- [ ] Glassmorphism effects applied
- [ ] Gradient overlays on images
- [ ] Glow effects on interactive elements

### Animations
- [ ] Page load animation
- [ ] Scroll-triggered animations (AOS)
- [ ] Hover effects on all interactive elements
- [ ] Button states (hover, active, disabled)
- [ ] Form validation animations
- [ ] Loading states
- [ ] Smooth transitions (0.3s - 0.4s)

### Interactions
- [ ] Navigation active states
- [ ] Mobile menu functional
- [ ] Form validation working
- [ ] Smooth scroll to sections
- [ ] Back-to-top button
- [ ] Modal/overlay interactions
- [ ] Tab switching (Platform page)
- [ ] Accordion expand/collapse

### Responsive
- [ ] Mobile layout (< 640px)
- [ ] Tablet layout (640px - 1023px)
- [ ] Desktop layout (1024px+)
- [ ] Touch-friendly buttons (min 44px)
- [ ] Readable text on all devices
- [ ] Images scale properly

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Alt text on images
- [ ] Color contrast WCAG AA
- [ ] Screen reader compatible

### Performance
- [ ] Images lazy loaded
- [ ] CSS/JS minified
- [ ] Critical CSS inlined
- [ ] Fonts optimized (font-display: swap)
- [ ] No layout shift (CLS < 0.1)
- [ ] Animations 60fps

---

## 🏆 Award-Winning Elements Summary

1. **Immersive Hero**: Full-screen animated particle background with DNA/neural network fusion
2. **Glassmorphism**: Frosted glass cards throughout
3. **3D Effects**: Card tilt, parallax scrolling, depth layers
4. **Micro-interactions**: Button ripples, magnetic effects, cursor follow
5. **Data Visualization**: Animated charts, flow diagrams, progress indicators
6. **Typography**: Bold size contrast (96px vs 16px)
7. **Color Gradients**: Dynamic gradients on text, buttons, backgrounds
8. **Smooth Animations**: GSAP-powered advanced animations
9. **Dark Theme**: Premium dark UI with neon accents
10. **Attention to Detail**: Every element has hover state, every transition is smooth

---

**End of Content Design Document**

This design document provides comprehensive guidance for creating an award-winning, high-tech website for MIRABO Biotechnology. All visual elements, layouts, and interactions are designed to showcase the company's AI-driven synthetic biology platform with cutting-edge aesthetics and user experience.
## 5️⃣ CONTACT PAGE - "Connect to the Future"

### Theme
Clean, efficient, professional

### Layout Structure

#### 5.1 Hero Section
**Background**: Dark gradient with subtle animation

**Content**:
```
[Breadcrumb] Home > Contact

[Headline] "Let's Innovate Together"
Font: 72px, Bold

[Description]
"Get in touch with our team to discuss how MiRAiQ can accelerate your R&D"

Font: 20px, Regular
```

---

#### 5.2 Contact Form Section

**Background**: Split layout (50/50)

**Layout**:
```
[Left Side - Contact Form]
Background: Glass card with glow border

Form Fields:
1. Name * (required)
   - Input with floating label
   - Focus: Cyan glow border
   
2. Email * (required)
   - Input with validation
   - Icon: Email symbol
   
3. Company
   - Optional field
   
4. Industry (dropdown)
   - Options: Personal Care, Healthcare, Pharmaceutical, Other
   - Custom styled select
   
5. Subject *
   - Input field
   
6. Message * (required)
   - Textarea (5 rows)
   - Character counter
   
[Submit Button]
"Send Message"
Style: Large, glowing, full-width
Loading state: Spinner animation
Success state: Checkmark + "Message sent!"
Error state: Red border + error message

Form Validation:
- Real-time validation
- Error messages below fields
- Success message: Modal overlay

[Right Side - Contact Information]

[Company Info Cards]

Card 1: MIRABO Biotechnology Limited
- Icon: Building (48px, cyan)
- Location: Hong Kong Science Park, Hong Kong
- Map pin icon + "View on Map" link
- Background: Glass card

Card 2: Shanghai MIRABO Biotechnology
- Icon: Building (48px, green)
- Location: Zhangjiang Pharma Valley Innovation Center, Shanghai, China
- Map pin icon + "View on Map" link
- Background: Glass card

[Contact Details]
- Website: www.mirabobio.com
- Email: info@mirabobio.com

[Business Hours]
Monday - Friday: 9:00 AM - 6:00 PM (HKT)

[Social Media Icons]
- LinkedIn (hover: glow)
- Twitter/X (hover: glow)
- Research Gate (hover: glow)

Each icon: 40px, outline style, hover: fill + glow
```

---

#### 5.3 Map Section

**Background**: Dark

**Content**:
```
[Interactive Map]
- Embedded map (dark theme)
- Two location markers:
  1. Hong Kong Science Park (blue marker)
  2. Shanghai Zhangjiang (green marker)
- Zoom controls
- Custom marker design (glowing pins)
- Click marker: Info popup

Map Style: Dark mode with cyan/green accents
Height: 500px
Full-width
```

**Implementation**: 
- Use Mapbox GL JS or Google Maps (dark theme)
- Custom styled markers
- Smooth zoom animations

---

## 🧩 Global Components

### Header / Navigation

**Design**:
```
[Fixed/Sticky Header]
Background: Transparent (on hero), Dark with blur (on scroll)
Height: 80px
Border-bottom: 1px solid rgba(255,255,255,0.1) (on scroll)

Layout:
┌────────────────────────────────────────────────────┐
│ [Logo]              [Nav Links]         [CTA]      │
└────────────────────────────────────────────────────┘

[Logo] (Left)
- MIRABO logo with green dot
- Size: 180px width
- Hover: Subtle glow
- Link to home

[Navigation Links] (Center/Right)
- Home
- About Us
- Platform
- Solutions
- Contact

Each link:
- Font: Inter, 16px, Medium
- Color: White (80% opacity)
- Hover: 100% opacity + underline slide-in
- Active: Cyan color + underline

[CTA Button] (Right)
"Get Started"
Style: Outline button with glow
Hover: Fill + scale

[Mobile Menu] (< 768px)
- Hamburger icon (animated)
- Full-screen overlay menu
- Slide-in animation
- Close button (X)
- Vertical nav links
- Background: Dark with blur
```

---

### Footer

**Design**:
```
[Background] Ultra dark (#0A0E1A)
[Border-top] 1px solid rgba(255,255,255,0.1)
[Padding] 80px vertical

Layout: 4-column grid (responsive to 1-column on mobile)

┌──────────┬──────────┬──────────┬──────────┐
│  About   │  Links   │ Contact  │  Social  │
└──────────┴──────────┴──────────┴──────────┘

[Column 1 - About]
- MIRABO logo (small, 150px)
- Tagline: "Pioneering AI-Driven Synthetic Biology"
- Short description (3 lines)
- Font: 14px, gray

[Column 2 - Quick Links]
Title: "Quick Links"
Links:
- About Us
- Platform
- Solutions
- Contact
- Privacy Policy
- Terms of Service

Each link: 14px, gray, hover: cyan

[Column 3 - Contact]
Title: "Contact"
- Hong Kong office address
- Shanghai office address
- Email: info@mirabobio.com

Font: 14px, gray
Icons: 16px, cyan

[Column 4 - Follow Us]
Title: "Follow Us"
Social icons (horizontal):
- LinkedIn
- Twitter/X
- Research Gate

Each icon: 32px, outline, hover: fill + glow

[Bottom Bar]
Full-width, centered
"© 2025 MIRABO Biotechnology. All rights reserved."
Font: 12px, gray

[Back-to-Top Button]
Position: Fixed, bottom-right
Icon: Arrow up (circle)
Style: Glass button with glow
Hover: Scale + glow increase
Click: Smooth scroll to top
Show: Only when scrolled > 500px
```

---

### Buttons

**Primary Button**:
```css
Background: Linear gradient (electric blue to cyan)
Color: White
Padding: 16px 32px
Border-radius: 8px
Font: 16px, Semibold
Shadow: 0 4px 20px rgba(0, 102, 255, 0.4)
Hover: Scale 1.05 + glow increase
Active: Scale 0.98
Transition: 0.3s ease
```

**Secondary Button**:
```css
Background: Transparent
Border: 2px solid cyan
Color: Cyan
Padding: 14px 30px
Border-radius: 8px
Font: 16px, Semibold
Hover: Background cyan + color dark
Transition: 0.3s ease
```

**Ghost Button**:
```css
Background: Transparent
Color: White
Padding: 12px 24px
Border: 1px solid rgba(255,255,255,0.2)
Hover: Border cyan + glow
```

---

### Cards

**Glass Card**:
```css
Background: rgba(30, 41, 59, 0.6)
Backdrop-filter: blur(20px)
Border: 1px solid rgba(255,255,255,0.1)
Border-radius: 16px
Padding: 32px
Shadow: 0 8px 32px rgba(0,0,0,0.3)
Hover: Border glow (cyan) + lift (translateY -8px)
Transition: 0.4s ease
```

**Feature Card**:
```css
Background: Dark gradient
Border: 1px solid rgba(0,217,255,0.2)
Border-radius: 12px
Padding: 24px
Hover: Border glow + scale 1.02
Icon: 48px, gradient
Title: 20px, bold
Description: 16px, gray
```

---

### Forms

**Input Field**:
```css
Background: rgba(30, 41, 59, 0.5)
Border: 1px solid rgba(255,255,255,0.1)
Border-radius: 8px
Padding: 14px 16px
Color: White
Font: 16px
Placeholder: Gray (50% opacity)
Focus: Border cyan + glow + label float up
Error: Border red + error message below
```

**Textarea**:
```css
Same as input
Min-height: 120px
Resize: vertical
```

**Select Dropdown**:
```css
Custom styled (hide default arrow)
Background: Dark
Border: Same as input
Options: Dark background, white text
Hover option: Cyan background
```

---

### Loading States

**Page Load**:
```
1. Logo particle aggregation (1.5s)
2. Progress bar (top, cyan, 2s)
3. Fade in content (0.5s)
```

**Button Loading**:
```
- Spinner icon (rotating)
- Text: "Sending..."
- Disabled state
```

**Image Loading**:
```
- Skeleton placeholder (animated gradient)
- Fade in when loaded
- Blur-up effect (low-res to high-res)
```

---

### Animations

**Scroll Animations** (AOS):
```
- fade-up: Cards, text blocks (duration: 800ms)
- fade-in: Images (duration: 600ms)
- zoom-in: Icons (duration: 500ms)
- slide-left/right: Side content (duration: 700ms)
- Stagger delay: 100ms between elements
```

**Hover Animations**:
```
- Scale: 1.05 (buttons, cards)
- Glow: Box-shadow increase
- Lift: translateY(-8px)
- Tilt: 3D rotate (cards)
- Duration: 0.3s - 0.4s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

**Continuous Animations**:
```
- Particle float: Infinite, slow
- Glow pulse: 2s infinite
- Gradient shift: 5s infinite
- Rotate: Icons, 20s infinite
```

---

## 📐 Responsive Design Rules

### Mobile (< 640px)
- Single column layouts
- Hamburger menu
- Reduced font sizes (see typography mobile)
- Stack cards vertically
- Full-width buttons
- Reduced padding (16px instead of 32px)
- Hide complex animations (performance)

### Tablet (640px - 1023px)
- 2-column grids become 1-column
- Adjusted font sizes
- Simplified navigation
- Maintain key animations

### Desktop (1024px+)
- Full multi-column layouts
- All animations enabled
- Hover effects active
- Parallax scrolling
- Complex interactions

---

## 🎯 Performance Targets

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Performance**: > 95
- **Lighthouse Accessibility**: > 95
- **Lighthouse Best Practices**: > 95
- **Lighthouse SEO**: > 95

---

## ✅ Design Checklist

### Visual Design
- [ ] Consistent color system applied
- [ ] Typography hierarchy clear
- [ ] Spacing system consistent (8px grid)
- [ ] All images optimized (WebP, < 200KB)
- [ ] Icons consistent style (outline/filled)
- [ ] Glassmorphism effects applied
- [ ] Gradient overlays on images
- [ ] Glow effects on interactive elements

### Animations
- [ ] Page load animation
- [ ] Scroll-triggered animations (AOS)
- [ ] Hover effects on all interactive elements
- [ ] Button states (hover, active, disabled)
- [ ] Form validation animations
- [ ] Loading states
- [ ] Smooth transitions (0.3s - 0.4s)

### Interactions
- [ ] Navigation active states
- [ ] Mobile menu functional
- [ ] Form validation working
- [ ] Smooth scroll to sections
- [ ] Back-to-top button
- [ ] Modal/overlay interactions
- [ ] Tab switching (Platform page)
- [ ] Accordion expand/collapse

### Responsive
- [ ] Mobile layout (< 640px)
- [ ] Tablet layout (640px - 1023px)
- [ ] Desktop layout (1024px+)
- [ ] Touch-friendly buttons (min 44px)
- [ ] Readable text on all devices
- [ ] Images scale properly

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Alt text on images
- [ ] Color contrast WCAG AA
- [ ] Screen reader compatible

### Performance
- [ ] Images lazy loaded
- [ ] CSS/JS minified
- [ ] Critical CSS inlined
- [ ] Fonts optimized (font-display: swap)
- [ ] No layout shift (CLS < 0.1)
- [ ] Animations 60fps

---

## 🏆 Award-Winning Elements Summary

1. **Immersive Hero**: Full-screen animated particle background with DNA/neural network fusion
2. **Glassmorphism**: Frosted glass cards throughout
3. **3D Effects**: Card tilt, parallax scrolling, depth layers
4. **Micro-interactions**: Button ripples, magnetic effects, cursor follow
5. **Data Visualization**: Animated charts, flow diagrams, progress indicators
6. **Typography**: Bold size contrast (96px vs 16px)
7. **Color Gradients**: Dynamic gradients on text, buttons, backgrounds
8. **Smooth Animations**: GSAP-powered advanced animations
9. **Dark Theme**: Premium dark UI with neon accents
10. **Attention to Detail**: Every element has hover state, every transition is smooth

---

**End of Content Design Document**

This design document provides comprehensive guidance for creating an award-winning, high-tech website for MIRABO Biotechnology. All visual elements, layouts, and interactions are designed to showcase the company's AI-driven synthetic biology platform with cutting-edge aesthetics and user experience.
