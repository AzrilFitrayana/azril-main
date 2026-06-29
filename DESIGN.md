---
name: Kinetic Bento
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5a413a'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#8e7069'
  outline-variant: '#e2bfb6'
  surface-tint: '#b02e02'
  primary: '#831f00'
  on-primary: '#ffffff'
  primary-container: '#ad2c00'
  on-primary-container: '#ffc9ba'
  inverse-primary: '#ffb5a0'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#434545'
  on-tertiary: '#ffffff'
  tertiary-container: '#5b5c5c'
  on-tertiary-container: '#d4d5d5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid-gap: 1rem
  card-padding: 1.5rem
  container-margin: 2rem
  section-stack: 4rem
---

## Brand & Style
This design system centers on a high-energy, technical aesthetic inspired by modern modular interfaces. It prioritizes information density and visual clarity through a **Bento Grid** framework. The personality is "Playful Engineer"—precise and structured, yet expressive and bold. 

The style merges **Minimalism** with **Modern Brutalism**: it utilizes heavy whitespace and clean lines, but punctuates the experience with punchy color blocks, thick borders, and high-contrast surfaces. The goal is to make complex data feel like a curated collection of tactile objects.

## Colors
The palette is built on extreme contrast to define functional zones. 
- **Primary (#ad2c00):** Used sparingly for high-impact accents, primary actions, and "hero" bento cells.
- **Secondary (#1a1a1a):** The "Ink" color. Used for deep-contrast cards, heavy typography, and structural borders.
- **Surface Palette:** A three-tier system of White (#ffffff) for the base, Off-white (#f5f5f5) for secondary containers, and deep Black for inverted blocks.
- **Functional Hits:** High-saturation status colors (Success/Error) should only appear within small badges or subtle border-glows to maintain the bento hierarchy.

## Typography
Typography is a primary graphic element. Headlines use **Hanken Grotesk** with extra-bold weights and tight tracking to create "text blocks" that feel like physical objects. 

- **Display & Headlines:** Use tight line heights (1.0 to 1.1) to reinforce the compact bento feel. 
- **Body:** **Inter** provides a neutral, highly legible counterpoint to the aggressive headlines.
- **Technical Accents:** **JetBrains Mono** is used for labels, metadata, and captions to lean into the "technical" side of the brand personality.

## Layout & Spacing
The layout follows a strict **Modular Bento Grid**. All content must reside within defined "cells" that align to a 12-column underlying structure.

- **Grid Logic:** Use a fixed gap of `1rem` (16px) between all bento cells.
- **Responsive Behavior:** On desktop, cards can span 3, 4, 6, or 12 columns. On mobile, all cards collapse to a single column width, maintaining the uniform gap.
- **Internal Padding:** Cards should use generous internal padding (`1.5rem`) to ensure content doesn't feel cramped despite the tight external grid.

## Elevation & Depth
Depth is created through **Layered Outlines** rather than traditional shadows. 
- **The "Bento Shadow":** Use a very subtle, tight ambient shadow (4px blur, 5% opacity) paired with a 1px solid border (#e5e5e5).
- **Active State:** When a cell is hovered or active, increase the border weight to 2px or apply a subtle "lift" effect using a slightly larger shadow.
- **Inverted Surfaces:** Dark cards (#1a1a1a) should have 0px shadow and instead rely on high-contrast placement against light backgrounds.

## Shapes
The design system uses a **Rounded** (Level 2) language. 
- **Bento Cells:** Default to `1rem` (16px) corner radius. This provides a soft, "gadget-like" feel that balances the harsh high-contrast colors.
- **Inner Elements:** Elements inside cells (buttons, inputs) should use `0.5rem` (8px) to maintain a nested visual rhythm.

## Components
- **Bento Cards:** The core component. Variations include "Solid" (White background, grey border), "Accent" (Primary color background), and "Inverted" (Black background).
- **Buttons:** Primary buttons are solid Black or Primary color with sharp corners (`0.5rem`). No gradients. Text is all-caps JetBrains Mono.
- **Chips/Badges:** Small, pill-shaped markers with a subtle #f5f5f5 fill and 1px border.
- **Input Fields:** Flat styling with a 1px border that thickens to 2px on focus. Backgrounds should be slightly off-white to distinguish from the card surface.
- **Iconography:** Use a consistent stroke weight that matches the typography’s thinnest stems. Icons should be framed in small square containers within the grid.