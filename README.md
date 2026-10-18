# The Shivpuri Thrill Factory — Static Web Platform

A high-performance, SEO-optimized static website replica and upgrade of **[thrillfactory.in](https://thrillfactory.in)**, designed for the bungee and extreme adventure operator located in **Shivpuri, Rishikesh, Uttarakhand**.

Built with **Next.js (App Router)** using a **CSS Design Token Architecture**, TypeScript, and zero magic constants. Fully pre-rendered as a static export (`output: 'export'`) in the `out/` directory.

---

## 🎨 Design System & CSS Variables Architecture

All static values (colors, elevation shadows, typography scales, spacing, border radii, and transitions) are governed through centralized CSS custom properties in [src/styles/variables.css](file:///home/dhruvil/Dhruvil/Folder/TF/src/styles/variables.css):

* **Brand Primary:** `--color-primary: #FF5E14` (Extreme Adrenaline Orange)
* **Brand Secondary:** `--color-secondary: #00C4CC` (River Rapids Turquoise)
* **Brand Accent:** `--color-accent: #FFB703` (High-Alert Gold)
* **Surfaces:** Dark Himalayan aesthetic (`--color-bg-body: #0A0D14`, `--color-bg-surface: #111723`, `--color-bg-card: #161F2E`)
* **Borders & Elevation:** `--color-border: #232E42`, `--shadow-primary`, `--shadow-card`
* **Typography & Spacing:** Strict 8-point harmonic spacing scale (`--space-xs` through `--space-4xl`)

---

## 📁 Clean Code Structure

```
src/
├── app/                              # Next.js App Router (Static Pages)
│   ├── layout.tsx                    # Global metadata, SEO tags, and Google Fonts
│   ├── page.tsx                      # Homepage with all adventure sections
│   ├── activities/page.tsx           # All 6+ extreme rides with detailed specifications
│   ├── packages/page.tsx             # Curated Thrill Combo saver packages
│   ├── kids-zone/page.tsx            # Kids Zone & family adventure arena
│   ├── safety/page.tsx               # Technical safety & AS/NZS 5848 standards
│   └── contact/page.tsx              # Directions from Tapovan, phone lines, and GPS
├── components/                       # Modular, Reusable UI Components
│   ├── common/
│   │   ├── Navbar.tsx                # Sticky glassmorphic desktop & mobile drawer
│   │   ├── Footer.tsx                # Semantic footer with contacts & links
│   │   ├── BookingModal.tsx          # Interactive booking form + WhatsApp dispatcher
│   │   ├── SectionHeader.tsx         # Standardized section headings
│   │   └── WhatsAppFloating.tsx      # Floating quick-chat button (+91 8929942009)
│   └── home/
│       ├── HeroBanner.tsx            # Hero with stats counter & dual CTAs
│       ├── QuickHighlights.tsx       # 4 trust pillars
│       ├── ActivityCard.tsx          # Card with price, height, and limits
│       ├── ActivitiesGrid.tsx        # Filterable activities grid
│       ├── PackagesSection.tsx       # Thrill Combos 2.4, 1.3 & Mega Pack
│       ├── KidsZoneHighlight.tsx     # Family attractions
│       ├── SafetyOverview.tsx        # Certified Jump Masters & inspections
│       ├── ReviewsSection.tsx        # Real visitor reviews
│       ├── LocationSection.tsx       # Distance guide from Tapovan & Rishikesh
│       └── FaqSection.tsx            # Collapsible accordion FAQ
├── constants/
│   ├── siteConfig.ts                 # Single source of truth for phones, address, GPS
│   └── navigation.ts                 # Nav menu links and footer trees
├── data/
│   ├── activities.ts                 # Full pricing, height specs, and features
│   ├── packages.ts                   # Combo deals & savings
│   ├── kidsZone.ts                   # Children's park offerings
│   ├── safetyRules.ts                # AS/NZS codes and medical restrictions
│   ├── reviews.ts                    # Google ratings & customer testimonials
│   └── faqs.ts                       # Frequently asked questions
├── types/
│   └── index.ts                      # Strict TypeScript interfaces
└── styles/
    ├── variables.css                 # 100% CSS variable tokens
    ├── globals.css                   # Reset, base typography & layout utilities
    └── components.css                # Buttons, form controls, badges & modals
```

---

## ⚡ Available Commands

### Development Server
```bash
npm run dev
```
Runs the live development server on [http://localhost:3001](http://localhost:3001).

### Static Build & Export
```bash
npm run build
```
Generates 100% pre-rendered, production-ready static HTML, CSS, and JavaScript files into the `out/` directory.

---

## 🚀 Static Hosting & Deployment

Because this project is configured with `output: 'export'` in [next.config.mjs](file:///home/dhruvil/Dhruvil/Folder/TF/next.config.mjs), the contents of `out/` can be deployed instantly to:
* **Vercel** (`npx vercel`)
* **Netlify** (Drag-and-drop the `out` directory)
* **GitHub Pages** (Push `out` to `gh-pages` branch)
* **AWS S3 / CloudFront**
* **Apache / Nginx / cPanel Web Hosting** (Copy files from `out/` to `public_html`)
