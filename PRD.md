# Product Requirements Document (PRD)
## Stinablis Landing Page

**Version:** 1.0
**Last Updated:** February 2026
**Status:** Production

---

## 1. Overview

### 1.1 Product Summary
Stinablis Landing Page is a modern, responsive single-page website designed to showcase Stinablis's engineering and sustainability services. The website serves as the primary digital presence for the company, providing information about services, products, and contact details.

### 1.2 Company Background
Stinablis is a Malaysian-based company that combines engineering precision with modern technology to deliver:
- High-performance systems
- Custom databases
- Automotive parts
- Sustainable composite materials

**Tagline:** "Engineering Meets Sustainability"

### 1.3 Target Audience
- Businesses seeking engineering and prototyping services
- Automotive industry clients requiring custom parts
- Companies looking for sustainable material solutions
- Organizations needing software development services

---

## 2. Technical Stack

### 2.1 Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.5.2 | React framework with SSR/SSG |
| React | 19.1.0 | UI library |
| TypeScript | 5.x | Type-safe JavaScript |

### 2.2 Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| MUI (Material UI) | 7.3.1 | Component library |
| Tailwind CSS | 4.x | Utility-first CSS |
| Emotion | 11.14.x | CSS-in-JS for MUI |

### 2.3 Animation
| Technology | Version | Purpose |
|------------|---------|---------|
| GSAP | 3.x | Scroll animations & transitions |
| ScrollTrigger | (GSAP plugin) | Scroll-based animation triggers |

### 2.4 Integrations
| Service | Purpose |
|---------|---------|
| EmailJS | Contact form submission |
| Google Maps Embed | Location display |

---

## 3. Site Architecture

### 3.1 Page Structure
```
/
├── Header (Fixed navigation)
├── Hero Section
├── About Us Section
├── Products Section
├── Contact Section
└── Footer
```

### 3.2 Component Hierarchy
```
src/app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main page composition
├── styles/
│   └── globals.css     # Global styles & CSS variables
└── components/
    ├── Header.tsx      # Fixed navigation bar
    ├── HeroSection.tsx # Full-screen hero with CTA
    ├── AboutUs.tsx     # Company information
    ├── ProductSection.tsx # Product/service cards
    ├── ContactSection.tsx # Contact form, address, map
    ├── Footer.tsx      # Copyright footer
    └── Section.tsx     # Reusable section wrapper
```

---

## 4. Feature Specifications

### 4.1 Header / Navigation
**Purpose:** Persistent navigation across the page

**Features:**
- Fixed position at top of viewport
- Semi-transparent background with blur effect
- Company logo (links to home)
- Navigation links: About, Products, Contact
- Smooth scroll to sections on click
- GSAP entrance animation on page load

**Responsive Behavior:**
- Logo scales down on mobile (36px → 44px desktop)
- All nav items visible on all screen sizes

### 4.2 Hero Section
**Purpose:** Create strong first impression and primary CTA

**Features:**
- Full viewport height (88-92vh)
- Background image with gradient overlay
- Large company name typography
- Tagline subtitle
- Primary CTA button ("Talk to us")
- GSAP staggered entrance animations

**Responsive Behavior:**
- Typography scales with viewport (clamp values)
- Button expands to full width on mobile

### 4.3 About Us Section
**Purpose:** Build trust and communicate company values

**Features:**
- Section heading with subtitle
- Two-column layout (text + image)
- Company description copy
- High-quality image with rounded corners
- GSAP scroll-triggered animations (text from left, image from right)

**Responsive Behavior:**
- Stacks vertically on mobile (image below text)
- Image height adjusts per breakpoint

### 4.4 Products Section
**Purpose:** Showcase service offerings

**Products/Services Displayed:**
1. Rapid Prototyping
2. Sustainable Composites
3. 3D Printing
4. Automotive Parts
5. Reverse Engineering
6. Software Solutions
7. Animation and Audio Production

**Features:**
- Section heading with subtitle
- Card-based grid layout
- Each card contains:
  - Product image (3:2 aspect ratio)
  - Title
  - Description
  - "Learn more" CTA button
- GSAP staggered card animations on scroll

**Responsive Behavior:**
- 3-column grid on desktop
- 2-column on tablet
- Single column on mobile

### 4.5 Contact Section
**Purpose:** Enable customer inquiries and provide contact info

**Features:**
- Section heading
- Three-column layout:
  1. **Address Block:** Physical address, phone, email, social links
  2. **Contact Form:** Name, email, message fields with EmailJS integration
  3. **Google Maps:** Embedded map showing office location
- Form validation (required fields)
- Success/error alerts on form submission
- GSAP scroll-triggered animations

**Form Fields:**
| Field | Type | Required |
|-------|------|----------|
| Name | Text | Yes |
| Email | Email | Yes |
| Message | Textarea | Yes |

**Responsive Behavior:**
- Stacks vertically on mobile
- Form padding adjusts per breakpoint

### 4.6 Footer
**Purpose:** Legal information and site closure

**Features:**
- Top border separator
- Dynamic copyright year
- Company name
- GSAP fade-in animation

---

## 5. Design System

### 5.1 Color Palette
```css
--bg: #0b0d12        /* Background - dark navy */
--ink: #ffffff       /* Primary text - white */
--muted: #b7becb     /* Secondary text - gray */
--stroke: #1c2230    /* Borders - dark gray */
--card: #10141c      /* Card background - slightly lighter */
--btn: #ffffff       /* Button background - white */
--btnText: #0b0d12   /* Button text - dark */
--btnHover: #e7e9ee  /* Button hover - light gray */
```

### 5.2 Typography
**Primary Font:** Staatliches (Google Fonts)
- Weight: 400 (only available weight)
- Fallback: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif

**Base Font Size:**
- Desktop: 16px
- Mobile: 15px

### 5.3 Spacing
- Section padding: 120px vertical (80px mobile)
- Card padding: 22px (18px mobile)
- Grid gap: 22px / 1.5rem
- Container max-width: 1280px

### 5.4 Border Radius
- Buttons: 999px (pill shape)
- Cards: 16px
- Images: 16px

### 5.5 Shadows
- Cards: `0 12px 28px rgba(0,0,0,0.35)`
- Buttons: `0 12px 28px rgba(0,0,0,0.28)`

---

## 6. Animation Specifications

### 6.1 GSAP Animations

**Header Animation (on load):**
- Header slides down from -80px with fade
- Logo slides in from left
- Nav items fade in with stagger (0.1s delay each)

**Hero Animation (on load):**
- Title: scale from 0.95, y from 60px, fade in
- Subtitle: y from 40px, fade in (0.5s delay)
- CTA: y from 30px, fade in (0.4s delay)

**Section Animations (on scroll):**
- Headings: y from 50px, fade in
- Text blocks: x from -60px or +60px, fade in
- Images: x offset with scale from 0.95
- Cards: y from 60px, scale from 0.95, staggered (0.1s)

**Scroll Trigger Settings:**
- Start: "top 80-88%"
- Toggle actions: "play none none reverse"

---

## 7. Performance Requirements

### 7.1 Build Output
- Static site generation (SSG)
- Turbopack for optimized builds
- Target First Load JS: < 250KB

### 7.2 Core Web Vitals Targets
| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |

### 7.3 Image Optimization
- Lazy loading for below-fold images
- Appropriate image formats (JPG/PNG)
- Responsive image sizing via CSS

---

## 8. SEO & Metadata

### 8.1 Page Metadata
```typescript
title: "Stinablis - Engineering Meets Sustainability"
description: "Stinablis turns plastics into innovation. Engineering precision with modern tech."
```

### 8.2 Favicon
- Format: PNG
- Location: `/public/logo-new.png`
- Also used as Apple touch icon

---

## 9. Third-Party Integrations

### 9.1 EmailJS Configuration
| Setting | Value |
|---------|-------|
| Service ID | service_z4refme |
| Template ID | template_2tz2nes |
| Public Key | W4PxuH5Nidlqts1aJ |

### 9.2 Google Maps Embed
- Location: Stinablis office in Kuching, Sarawak, Malaysia
- Coordinates: 1.557059998428393, 110.34905117496618

---

## 10. File Structure

```
stinablis-landing/
├── public/
│   ├── logo-new.png        # Company logo
│   ├── hero-image.jpg      # Hero background
│   ├── about-image.jpg     # About section image
│   ├── rapid.jpg           # Product images
│   ├── fibre.jpg
│   ├── 3dprint.jpg
│   ├── bumper.png
│   ├── scanning.png
│   ├── web.png
│   └── production.png
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── icon.png        # Favicon
│       ├── styles/
│       │   └── globals.css
│       └── components/
│           ├── Header.tsx
│           ├── HeroSection.tsx
│           ├── AboutUs.tsx
│           ├── ProductSection.tsx
│           ├── ContactSection.tsx
│           ├── Footer.tsx
│           └── Section.tsx
├── package.json
├── tsconfig.json
├── next.config.ts
└── PRD.md
```

---

## 11. Development Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Production build with Turbopack
npm run start    # Start production server
```

---

## 12. Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## 13. Future Enhancements (Roadmap)

### Phase 2 (Planned)
- [ ] Individual product detail pages
- [ ] Blog/News section
- [ ] Client testimonials carousel
- [ ] Portfolio/Case studies gallery

### Phase 3 (Planned)
- [ ] Multi-language support (English, Malay, Chinese)
- [ ] Dark/Light theme toggle
- [ ] Customer portal integration
- [ ] Live chat widget

---

## 14. Contact Information

**Company:** Stinablis
**Address:** Lot 1324, No.856, 1st Floor Tabuan Jaya 93350 Kuching Sarawak Malaysia
**Phone:** (+60) 11-6091 5670
**Email:** info@stinablis.com
**Facebook:** https://facebook.com/stinablis
**LinkedIn:** https://linkedin.com/company/stinablis

---

*Document maintained by the Stinablis development team.*
