---
name: Executive Bridge
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#43474e'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#476083'
  primary: '#000613'
  on-primary: '#ffffff'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#afc8f0'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#040607'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1f20'
  on-tertiary-container: '#848688'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h2:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system establishes a premium, institutional atmosphere tailored for high-stakes talent acquisition. It blends **Corporate Modernism** with **Minimalist** refinement to evoke a sense of exclusivity and reliability. The visual language is designed to feel "established" from the first interaction, utilizing a restricted color palette and generous whitespace to reduce cognitive load for busy executives and high-tier candidates.

The emotional response is one of "Quiet Confidence." By avoiding loud gradients or trendy patterns, the interface allows the quality of the talent and the prestige of the "Bridge Certified" status to remain the focal point. The system prioritizes clarity and structured information density, echoing the professionalism of top-tier fintech and professional networking platforms.

## Colors

The palette is anchored by **Deep Navy (#001F3F)**, used for primary actions, navigation, and core brand elements to signify stability and authority. **Rich Gold (#D4AF37)** is reserved exclusively for "Bridge Certified" indicators, success states, and premium highlights, ensuring these elements command attention without overwhelming the UI.

The background architecture utilizes **Clean White (#FFFFFF)** for primary content areas, layered over **Light Grey (#F8F9FA)** surfaces to create subtle structural contrast. Secondary text and borders utilize a slate neutral to maintain legibility while softening the overall contrast compared to pure black.

## Typography

This design system employs a dual-font strategy. **Manrope** is used for headings to provide a sophisticated, geometric character that feels modern yet grounded. Its tight kerning and clean lines are ideal for high-impact titles and candidate names.

**Inter** is utilized for all body copy, labels, and UI elements. Chosen for its exceptional legibility and systematic feel, it ensures that dense data—such as resumes, job descriptions, and contract terms—remains highly readable. The "Label-Caps" style is specifically intended for section headers and metadata tags to create clear horizontal anchors within the layout.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop (12 columns) to maintain a curated, editorial feel. On larger screens, content is centered within a 1280px max-width container, preventing line lengths from becoming unreadable.

A strict 8px spacing scale governs the rhythm. Layouts should prioritize generous vertical margins (using the `xl` unit) between major sections to emphasize the premium nature of the marketplace. For internal card layouts, use `md` padding to ensure elements do not feel cramped, reflecting a high-end service experience.

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and **Tonal Layers**. Surfaces are rarely "flat"; instead, the system uses extremely diffused, low-opacity shadows (e.g., `0px 4px 20px rgba(0, 0, 0, 0.04)`) to lift cards off the light grey background.

Depth is used functionally:
- **Level 0 (Base):** Light Grey background (#F8F9FA).
- **Level 1 (Cards):** White surfaces with soft shadows for talent profiles and job posts.
- **Level 2 (Interactions):** Active states or hovered cards use a slightly deeper shadow to simulate physical lift.
- **Level 3 (Modals):** Prominent shadows with a backdrop blur (12px) to focus user attention on critical decision points.

## Shapes

The design system adopts a **Rounded** shape language to soften the corporate aesthetic and make the platform feel accessible. Standard buttons, input fields, and small cards utilize a 0.5rem (8px) radius. Larger layout containers, such as profile headers or dashboard modules, utilize a 1rem (16px) radius to create a distinct "pod" appearance.

The "Bridge Certified" badges are the exception, often using a circular or "lozenge" shape to differentiate them from standard UI elements, signifying their special status as a seal of quality.

## Components

### Buttons
Primary buttons use the Deep Navy background with White text. Secondary buttons use a Navy outline with a transparent base. The "Premium" or "Certified" call-to-actions may use the Gold accent background to distinguish them from administrative tasks.

### Bridge Certified Badges
These are the signature component. They must feature the Gold (#D4AF37) color, often paired with a subtle "shimmer" effect or a delicate 1px border. They should include a checkmark icon or a "Seal" icon to communicate verified status instantly.

### Rounded Cards
Talent profiles and job listings are housed in cards with a white background and 16px corner radius. Padding is generous (24px) to allow for clear separation between the candidate's photo, headline, and core stats.

### Inputs & Fields
Fields use a subtle 1px border in a light-neutral grey. Upon focus, the border transitions to Deep Navy. Labels are always positioned above the field in "body-sm" weight to maintain clarity during data entry.

### Additional Components
- **Trust Bar:** A horizontal strip displaying partner logos in grayscale, emphasizing the "Link" aspect of the brand.
- **Status Chips:** For application tracking (e.g., "Interviewing", "Hired"), using muted tonal backgrounds of the status color to avoid clashing with the Gold certification badge.