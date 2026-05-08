---
version: alpha
name: Novy Hosting Brandbook
description: Промышленная эстетика майнинга. Тёмный индустриальный стиль с золотым акцентом энергии. Бренд для профессионального хостинга ASIC-оборудования.
colors:
  # Core brand colors
  deep-black: "#0B0D0E"
  body-bg: "#0F1214"
  section-bg: "#13171A"
  card-bg: "#181D21"
  card-hover: "#1E2428"
  elevated-bg: "#22292E"

  # Text
  text-primary: "#ECEDEE"
  text-secondary: "rgba(236, 237, 238, 0.65)"
  text-tertiary: "rgba(236, 237, 238, 0.40)"
  text-muted: "rgba(236, 237, 238, 0.20)"

  # Gold accent — энергия, биткоин, хэшрейт, индустриальная мощь
  gold: "#F5A623"
  gold-light: "#FFB840"
  gold-dark: "#D48B0A"
  gold-glow: "rgba(245, 166, 35, 0.15)"
  gold-intense: "rgba(245, 166, 35, 0.30)"

  # Status
  success: "#34D399"
  danger: "#F87171"
  info: "#60A5FA"

typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.055em"
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 3.5rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  display:
    fontFamily: Space Grotesk
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  h2:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  h3:
    fontFamily: Space Grotesk
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: Space Grotesk
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.7
  caption:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  label:
    fontFamily: JetBrains Mono
    fontSize: 0.65rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.15em"
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4

rounded:
  none: 0px
  sm: 2px
  md: 6px
  lg: 10px
  xl: 14px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px

components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "#0B0D0E"
    rounded: "{rounded.full}"
    padding: 12px 28px
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "#0B0D0E"
    rounded: "{rounded.full}"
    padding: 12px 28px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    border: "1px solid rgba(236, 237, 238, 0.12)"
  button-ghost-hover:
    borderColor: "{colors.gold}"
    textColor: "{colors.gold}"
  card:
    backgroundColor: "{colors.card-bg}"
    rounded: "{rounded.xl}"
    border: "1px solid rgba(236, 237, 238, 0.06)"
  card-hover:
    borderColor: "rgba(245, 166, 35, 0.12)"
    backgroundColor: "{colors.card-hover}"
  header:
    backgroundColor: "rgba(11, 13, 14, 0.85)"
    backdropBlur: "blur(16px) saturate(1.4)"
    borderBottom: "1px solid rgba(236, 237, 238, 0.05)"
  nav-link:
    textColor: "{colors.text-tertiary}"
    fontWeight: 500
    fontSize: 0.8rem
  nav-link-active:
    textColor: "{colors.text-primary}"
  nav-link-hover:
    textColor: "{colors.text-primary}"
  nav-cta:
    backgroundColor: "{colors.gold}"
    textColor: "#0B0D0E"
    rounded: "{rounded.full}"
    padding: 8px 20px
    fontWeight: 600
  tag:
    backgroundColor: "rgba(245, 166, 35, 0.08)"
    textColor: "{colors.gold}"
    rounded: "{rounded.full}"
    padding: 6px 16px
    border: "1px solid rgba(245, 166, 35, 0.12)"
  price:
    textColor: "{colors.gold}"
    fontFamily: Space Grotesk
    fontWeight: 600
    fontSize: 2.5rem
    letterSpacing: "-0.025em"
  stat-value:
    textColor: "{colors.gold}"
    fontFamily: Space Grotesk
    fontWeight: 600
    fontSize: 1.75rem
    letterSpacing: "-0.02em"
  stat-label:
    textColor: "{colors.text-tertiary}"
    fontSize: 0.75rem
  table-header:
    backgroundColor: "{colors.section-bg}"
    textColor: "{colors.text-tertiary}"
    textTransform: uppercase
    letterSpacing: "0.1em"
    fontSize: 0.65rem
    fontWeight: 600
  form-input:
    backgroundColor: "{colors.deep-black}"
    border: "1px solid rgba(236, 237, 238, 0.08)"
    rounded: "{rounded.md}"
    textColor: "{colors.text-primary}"
  form-input-focus:
    borderColor: "{colors.gold}"
    boxShadow: "0 0 0 3px rgba(245, 166, 35, 0.15)"
  footer:
    backgroundColor: "{colors.deep-black}"
    borderTop: "1px solid rgba(236, 237, 238, 0.04)"
  team-avatar:
    backgroundColor: "rgba(245, 166, 35, 0.08)"
    border: "1.5px solid rgba(245, 166, 35, 0.10)"
    textColor: "{colors.gold}"
    rounded: "{rounded.full}"
    size: 64px
---
