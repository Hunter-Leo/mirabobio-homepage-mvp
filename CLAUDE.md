# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MIRABO Biotechnology corporate website — a static HTML5/CSS3/Vanilla JS site deployed on Cloudflare Pages. No framework, no bundler, no test suite.

## Build & Dev

```bash
npm run build          # Runs build.js → copies files to dist/ with cache-busting version strings
python -m http.server 8000  # Local dev server (or VS Code Live Server)
```

The build script uses `CF_PAGES_COMMIT_SHA` (first 7 chars) as the version string on Cloudflare, or `Date.now()` locally. It rewrites `href`/`src` attributes for CSS, JS, images, and video files in `assets/` to append `?v=<hash>`.

## Architecture

This is a **multi-page static site with copy-pasted boilerplate**. There is no HTML templating, no component system, and no shared layout. Each of the 5 pages has its own complete `<head>`, `<header>`, and `<footer>` markup. A change to navigation or footer must be replicated across all 5 pages.

### Pages (all in root)
- `index.html` — Home page with hero typewriter animation, particle canvas
- `about.html` — Mission/vision, team members, milestones
- `platform.html` — PRISM/ORION/IGNIS AI platform descriptions
- `solutions.html` — Downstream services and applications
- `contact.html` — Contact form, office addresses, Leaflet map
- `refer-index.html` — Alternate index with different hero design (particle network focus)

### CSS (in `assets/css/`)
- `style.css` (~2900 lines) — All layout, components, color system, typography, and Tailwind overrides
- `responsive.css` (~820 lines) — Media queries for mobile/tablet breakpoints
- `animations.css` (~40 lines) — Shared keyframe animations

### JS (in `assets/js/`, all vanilla, loaded via `<script>` tags)
- `main.js` — Hero typewriter effect, GSAP scroll animations, header scroll behavior, AOS init
- `canvas-particles.js` — Particle network background (used on index and refer-index)
- `cursor.js` — Custom cursor dot+outline following mouse
- `utils.js` — Shared helpers (e.g., `Utils.isMobile()`)
- `contact.js` — Contact form handling, Leaflet map init
- `platform.js` — Platform page tab switching / accordion
- `icons.js` — SVG icon definitions/renderer

### External Dependencies (all CDN)
- Tailwind CSS (CDN script tag — not a build step)
- GSAP (ScrollTrigger) for scroll-based animations
- Particles.js (loaded but secondary to canvas-particles.js)
- Leaflet (contact page map), AOS (scroll reveal), Google Fonts (Inter, Space Grotesk, JetBrains Mono)

## Key Patterns

- **No server-side processing.** The contact form currently has no backend — it logs to console.
- **Header/footer duplication.** Nav links and footer content are manually copied across all 5 HTML files. The "active" nav link class is hardcoded per page.
- **Cache busting** is done at build time by `build.js` rewriting asset URLs. Source HTML files never have `?v=` params — those only exist in `dist/`.
- **`_headers`** file sets Cloudflare security headers (CSP, HSTS, etc.).
- **Structured data** (JSON-LD) exists in `index.html` only — Organization, WebSite, and SiteNavigationElement schemas.

## SEO

Each page has unique title/description/OG tags. `sitemap.xml` lists all pages with `<lastmod>` dates. `robots.txt` allows all crawlers. Baidu site verification meta tag is present in `index.html` only.
