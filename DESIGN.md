---
version: alpha
name: Novy Hosting Brandbook
description: Промышленная эстетика майнинга. Тёмный чёрно-синий фон с зелёным акцентом энергии/хэшрейта. Бренд для профессионального хостинга ASIC-оборудования.
colors:
  deep: "#000812"
  body: "#010A15"
  section: "#020E1A"
  card: "#031220"
  card-hover: "#041A2A"
  elevated: "#052233"
  text-primary: "#EDEFF2"
  text-secondary: "rgba(237, 239, 242, 0.7)"
  text-tertiary: "rgba(237, 239, 242, 0.4)"
  green: "#30C050"
  green-light: "#40D868"
  green-dark: "#28A040"
  green-glow: "rgba(48, 192, 80, 0.12)"
  success: "#30C050"
  danger: "#F87171"

typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.055em"
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
  body:
    fontFamily: Space Grotesk
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: JetBrains Mono
    fontSize: 0.65rem
    fontWeight: 600
    letterSpacing: "0.15em"
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: 500

rounded:
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
    backgroundColor: "{colors.green}"
    textColor: "#000812"
    rounded: "{rounded.full}"
    padding: 12px 28px
  button-primary-hover:
    backgroundColor: "{colors.green-light}"
    textColor: "#000812"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    border: "1px solid rgba(237, 239, 242, 0.1)"
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.xl}"
    border: "1px solid rgba(237, 239, 242, 0.05)"
  card-hover:
    borderColor: "rgba(48, 192, 80, 0.1)"
    backgroundColor: "{colors.card-hover}"
  nav-link:
    textColor: "{colors.text-tertiary}"
    fontWeight: 500
    fontSize: 0.8rem
  nav-cta:
    backgroundColor: "{colors.green}"
    textColor: "#000812"
    rounded: "{rounded.full}"
    fontWeight: 600
  price:
    textColor: "{colors.green}"
    fontWeight: 600
    fontSize: 2.5rem
    letterSpacing: "-0.025em"
  stat-value:
    textColor: "{colors.green}"
    fontWeight: 600
    fontSize: 1.75rem
---
