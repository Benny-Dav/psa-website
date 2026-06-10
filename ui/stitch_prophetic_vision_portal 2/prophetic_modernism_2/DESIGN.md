---
name: Prophetic Modernism
colors:
  surface: '#0d141d'
  surface-dim: '#0d141d'
  surface-bright: '#333a44'
  surface-container-lowest: '#080f18'
  surface-container-low: '#151c26'
  surface-container: '#19202a'
  surface-container-high: '#242a34'
  surface-container-highest: '#2e353f'
  on-surface: '#dce3f0'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#dce3f0'
  inverse-on-surface: '#2a313b'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#9acee1'
  on-secondary: '#003542'
  secondary-container: '#154f60'
  on-secondary-container: '#8cc0d3'
  tertiary: '#ffbcda'
  on-tertiary: '#5d0d3f'
  tertiary-container: '#fb92c6'
  on-tertiary-container: '#782555'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#b6ebfe'
  secondary-fixed-dim: '#9acee1'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#114d5d'
  tertiary-fixed: '#ffd8e7'
  tertiary-fixed-dim: '#ffafd4'
  on-tertiary-fixed: '#3d0026'
  on-tertiary-fixed-variant: '#7a2756'
  background: '#0d141d'
  on-background: '#dce3f0'
  surface-variant: '#2e353f'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies a "Prophetic Modernism" aesthetic—a fusion of spiritual depth and contemporary precision. It is designed to feel authoritative yet youthful, premium yet accessible. The visual language centers on the interplay between light and shadow, symbolizing enlightenment against a deep, mysterious background.

The style leverages **Minimalism** with a **Tactile** edge. We use large, confident typography and purposeful whitespace to create a sense of sacred order. Subdued gradients and metallic accents provide a physical quality, suggesting permanence and value. The target audience seeks wisdom and professional guidance, requiring an interface that feels both visionary and grounded.

## Colors
The palette is rooted in a "Deep Midnight" foundation, utilizing **#050B14** as the primary canvas to evoke vastness and stability. 

- **Primary (Gold):** #D4AF37 is used for high-impact moments, signifying divinity, value, and "the light." Use this for primary calls to action and key branding accents.
- **Secondary (Teal):** #0F4C5C provides a sophisticated, calming counter-balance to the gold. It should be used for secondary interactive elements and decorative depth.
- **Surface Tiers:** Surfaces are built using layered shades of navy and charcoal to create atmospheric depth without relying on pure black.
- **Accents:** Occasional use of deep plum or violet (sampled from the flame logo) can be used for subtle status indicators or unique hover states.

## Typography
Montserrat is the sole typeface, utilized across all levels to maintain a cohesive, bold, and youthful identity. 

Headlines use heavy weights (700+) with tighter letter-spacing to create a "monumental" feel. Body text remains at a 400 weight for optimal legibility against the dark background. Labels and small metadata should use 600 weight with increased tracking (letter-spacing) to ensure clarity and an editorial, premium look.

## Layout & Spacing
The system utilizes a **Fixed Grid** for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). 

The spacing rhythm is based on an 8px baseline. We prioritize "generous breathing room" to reflect the premium nature of the brand. Vertical rhythm should be expansive, using larger gaps between sections (e.g., 80px, 120px, or 160px) to allow the content to feel curated and intentional. Margins on desktop are intentionally wide to keep the focal point centered and authoritative.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Ambient Shadows**. Surfaces do not "float" with harsh shadows; instead, they emerge from the dark background using subtle linear gradients (top-down, from a lighter navy to the base dark navy).

Where separation is required, use "Inner Light" borders—1px top-borders with 10-15% opacity white or gold to simulate light hitting the edge of a physical object. Shadows should be ultra-diffused, using a deep teal-tinted shadow color (#000000 at 60% with a 20px blur) to maintain the atmospheric mood.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the brutalist tendencies of high-contrast dark modes, making the professional environment feel more inviting and sophisticated. 

Cards and major containers use a slightly larger radius (0.5rem) to signify containment. Interactive elements like buttons should remain consistent with the soft 0.25rem radius to maintain a precise, architectural feel. Avoid fully rounded/pill shapes as they are too casual for this brand narrative.

## Components

### Buttons
- **Primary:** Solid Gold (#D4AF37) with Navy text. Subtle hover state involves a slight scale-up (1.02x) and an increased outer glow.
- **Secondary:** Transparent with a 1px Gold border. Text is Gold.
- **Tertiary:** Teal background with white text for utility actions.

### Input Fields
- Darkest navy background with a 1px border that shifts from Teal to Gold upon focus.
- Placeholder text in a muted blue-grey to ensure the interface remains low-distraction.

### Cards
- Surfaces should use a subtle vertical gradient.
- Apply a very thin "rim light" (1px border) using the secondary teal color at 20% opacity.

### Chips & Badges
- Used for categories. These should be low-profile: dark backgrounds with gold or teal text and 1px borders.

### Special Element: The "Prophetic Beam"
- A decorative UI element consisting of a low-opacity gold linear gradient that can be used as a divider or a background element to guide the user's eye toward key information, echoing the light rays in the logo.