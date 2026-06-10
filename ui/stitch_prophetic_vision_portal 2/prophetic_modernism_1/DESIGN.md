---
name: Prophetic Modernism
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#b9c7e4'
  on-secondary: '#233148'
  secondary-container: '#3c4962'
  on-secondary-container: '#abb9d6'
  tertiary: '#d0cdcd'
  on-tertiary: '#313030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454544'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b9c7e4'
  on-secondary-fixed: '#0d1c32'
  on-secondary-fixed-variant: '#39475f'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
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
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system establishes a visual language for a modern prophet—blending ancient authority with contemporary digital aesthetics. The brand persona is **Bold, Youthful, and Organized**, designed to resonate with a generation that seeks spiritual guidance through a professional, high-fidelity lens.

The aesthetic direction is a hybrid of **High-Contrast Minimalism** and **Subtle Glassmorphism**. We use expansive whitespace to denote "breathing room" for contemplation, paired with aggressive, sharp-edged structural elements to convey precision and truth. The integration of translucent layers suggests transparency and depth, moving away from traditional religious tropes toward a sophisticated "Spiritual Tech" or "Modern Leadership" vibe. It is authoritative yet digitally native.

## Colors

The "Midnight & Gold" palette is the cornerstone of this system. It utilizes **Deep Navy (#0A192F)** as the primary anchor for authority, replacing standard blacks for a richer, more "royal" depth. 

- **Primary Gold:** Used exclusively for high-priority actions, signatures, and prophetic "insights." It must maintain high legibility against both light and dark backgrounds.
- **Midnight Navy:** Serves as the surface color in dark mode and the primary text color in light mode.
- **Glass Overlays:** Semi-transparent versions of the surface colors (80% opacity with 16px backdrop blur) are used to create layers of information without breaking the visual flow.

## Typography

Typography is used to establish a hierarchy of "Truth." **Montserrat** provides a geometric, powerful foundation for declarations and headings. Its heavy weights (Bold/ExtraBold) should be used for core prophetic messages.

**Inter** handles the functional and narrative text. It is chosen for its exceptional readability in dense passages of teaching or organization. 

- **Display Text:** Use `display-xl` sparingly for landing hero sections or singular impactful quotes.
- **Editorial Polish:** Use `label-caps` for eyebrows and small metadata to maintain an organized, cataloged feel.

## Layout & Spacing

The layout follows a **12-column fixed grid** on desktop to maintain a sense of rigid organization and professional structure. 

- **Vertical Rhythm:** A strict 8px base unit governs all spacing. Section gaps are intentionally large (120px+) to create a "sanctuary" of whitespace around key content.
- **Mobile Adaptation:** Columns collapse to a single stack with increased side margins (20px). Headlines scale down to maintain readability while preserving the "bold" impact.
- **Content Alignment:** Text-heavy sections should utilize a centered 8-column "reading track" to maximize focus and reduce eye strain during long-form study.

## Elevation & Depth

This system avoids traditional soft shadows in favor of **Tonal Layering** and **Glassmorphism**.

1.  **Base Layer:** The primary surface (Midnight in dark mode, White in light mode).
2.  **Raised Layer:** Subtle 1px borders in a slightly lighter/darker tint than the surface to define boundaries without heavy shadows.
3.  **Prophetic Overlay:** Use a glassmorphic effect (Backdrop Blur: 20px) for navigation bars and modal overlays. This creates a sense of "ethereal" depth, suggesting the UI is floating over the content.
4.  **Interaction:** On hover, elements may gain a subtle gold outer glow (4px spread, low opacity) to indicate "light" or focus.

## Shapes

The shape language is strictly **Sharp (0px)**. This choice reinforces the "Organized" and "Authoritative" brand pillars. Sharp corners evoke a sense of precision, architecture, and uncompromising truth. 

While the general UI is sharp, photography and profile imagery may use circular masks to provide a "human" contrast against the rigid structural frame.

## Components

### Buttons
- **Primary:** Gold background, Navy text, Sharp corners, Montserrat Bold. No gradient.
- **Secondary:** Transparent background, 2px Gold border, Gold text.
- **Hover State:** Background shifts to a slightly brighter Gold; text remains Navy.

### Input Fields
- Underline style preferred over boxed inputs. 1px Gold underline that expands to 2px on focus. Labels use `label-caps`.

### Cards
- Sharp borders with a 1px Midnight (light mode) or White (dark mode) stroke at 10% opacity. 
- Use Glassmorphism backgrounds for "Insight Cards" that contain prophetic words or quotes.

### Chips/Tags
- Small, rectangular boxes with sharp corners. Navy background with Gold text for high-contrast visibility.

### Lists
- Minimalist bullet points replaced by thin Gold horizontal lines between items. Numerical lists use Montserrat Bold in Gold for the digits.