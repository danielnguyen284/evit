# EVIT Landing Page Design Specification

This document defines the design tokens, layout structures, visual effects, and assets for the EVIT landing page.

---

## 1. Design Tokens & Color Palette

We use a modern dark-tech palette featuring glowing accents to create a premium, futuristic, and trust-building aesthetic.

| Token | Role | Value | Usage |
| :--- | :--- | :--- | :--- |
| `background` | Primary Background | `#03032D` | Main website background (deep navy-blue). |
| `blue-bright` | Primary Accent | `#0184D1` | Active links, section sub-headers, glows, and card borders. |
| `red-bright` | Secondary Accent / CTA | `#E30000` | Primary buttons, active state indicators. |
| `text-primary` | Main Text | `#FFFFFF` | Headings, button text, and prominent content. |
| `text-secondary`| Body Text | `#B0B0D0` | Paragraphs, descriptions, secondary navigation. |
| `card-bg` | Card Background | `rgba(1, 132, 209, 0.03)` | Semi-transparent background for About cards. |

---

## 2. Typography

We will use the **Inter** font family via Google Fonts to achieve a clean, modern, and highly legible sans-serif appearance.

- **Headings (H1, H2)**: `Inter`, weights: `700` (Bold), `800` (Extra Bold). Letter spacing: `-0.02em`.
- **Sub-headers & Card Titles**: `Inter`, weights: `600` (Semi-Bold). Letter spacing: `0.05em` (uppercase).
- **Body Text / Paragraphs**: `Inter`, weight: `400` (Regular), line-height: `1.6`.

---

## 3. Asset Mapping

All assets will be copied from `temp/` to the project's relative `assets/` directory.

- **Logo**: `temp/Logo (1).png` -> `assets/logo.png`
- **Hero Background**: `temp/hero-bg.jpg` -> `assets/hero-bg.jpg`
- **Card Icon (Target/Checkmark)**: `temp/Icon.png` -> `assets/icon-checkmark.png`
- **Background Wave Vector**: `temp/Vector (2).png` -> `assets/background-wave.png`

---

## 4. Components & Layout Structure

### 4.1 Header & Navigation Bar
- **Logo**: Positioned on the left. Size adjusted for crisp rendering (height approx. `40px`).
- **Navigation Links**: Center-aligned. Items: `HOME` (Active state with `#E30000` color), `OUR SERVICES`, `CASE STUDIES`, `RESOURCES`, `ABOUT US`.
- **CTA Button**: Right-aligned. Text: `"BOOK FREE CONSULTATION"`. Background color `#E30000`, border-radius `50px` (capsule), with a right arrow `→`.

### 4.2 Hero Section
- **Background**: Full-screen or large banner height (`85vh` to `100vh`) using `assets/hero-bg.jpg`. Centered, cover size, with a dark blue overlay (`rgba(3, 3, 45, 0.6)`) to ensure text contrast.
- **Main Heading**:
  - `"GET MORE CLIENTS"` (White, bold H1)
  - `"WITH A PROVEN SALES SYSTEM"` (Bright Red `#E30000`, bold H1)
  - `"FOR IT SERVICE PROVIDERS"` (Bright Red `#E30000`, bold H1)
- **Sub-description**: Left/Right margins constrained to `800px` max-width, center-aligned, light secondary color `#B0B0D0`.
- **CTA Button**: Center-aligned, capsule shape, bright red background, spelling corrected: `"BOOK FREE CONSULTATION →"`.

### 4.3 About Section
- **Section Indicator**: `"About Company"` (uppercase, small font size, bright blue `#0184D1`, center-aligned).
- **Section Heading**: `"EVIT ORGANIZATION"` (uppercase, bold H2, white, center-aligned).
- **Sub-description**: Max-width `900px`, center-aligned, light secondary text.
- **Grid Layout**: 4 columns on desktop, 2 columns on tablet, 1 column on mobile.
- **Card Styling**:
  - Background: Very dark blue with glassmorphic transparency (`rgba(3, 3, 45, 0.6)`).
  - Borders: 1.5px solid border with a subtle gradient transitioning into bright blue `#0184D1`.
  - Icon: Centered checkmark target icon (`assets/icon-checkmark.png`) inside a circular boundary.
  - Text: Uppercase title (e.g., `"RIGHT APPROACH"`), centered, bold, white.
- **Section Footer Text**: Subtext explaining "Our Guaranteed Consulting Services...", followed by a red CTA button `"OUR SERVICES →"`.

### 4.4 Floating Widgets
- **Calendar Button**: Bottom-right floating button (fixed position). Circular shape, blue/purple gradient background, containing a calendar SVG/icon.

### 4.5 Global Background Wave
- **Background Pattern**: All pages across the website include the `assets/background-wave.png` vector stretched horizontally in the background. It is centered, positioned absolute, and layered behind all content (z-index: -1) with a soft blend mode to add premium cybernetic neon vibes to the page structure.

---

## 5. Micro-interactions & Visual Effects

To achieve a premium, state-of-the-art feel, we will implement the following effects:

### 5.1 Card Glow Effects (About Cards)
- **Default State**: Subtly glowing blue border and box-shadow.
- **Hover State**:
  - The box-shadow expands and intensifies (using a bright blue/purple glow: `box-shadow: 0 10px 30px rgba(1, 132, 209, 0.4)`).
  - The card scales up slightly (`transform: translateY(-5px) scale(1.02)`).
  - Transition duration: `0.3s` ease-in-out.

### 5.2 Button Interactions
- **Hover State**:
  - Background transitions from `#E30000` to a slightly darker/brighter red or adds a scale pulse.
  - Arrow icon slides slightly to the right (`transform: translateX(4px)`).
  - Box-shadow glows red: `box-shadow: 0 4px 20px rgba(227, 0, 0, 0.5)`.

### 5.3 Active Navigation Link Interaction
- Hovering over nav links will show a smooth underline transition or color shift to bright blue/red.
