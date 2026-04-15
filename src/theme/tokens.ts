/**
 * Flexicurl Design Tokens — single source of truth.
 *
 * HOW TO CHANGE THE THEME
 * ─────────────────────────────────────────────────────────────────────────
 * • Colors  → edit the `colors` block below.
 *   globals.css reads these same values via CSS custom properties.
 *   All Tailwind utilities (bg-primary, text-heading, border-stroke …)
 *   are generated from those CSS vars, so one change cascades everywhere.
 *
 * • Typography → edit the `typography` block.
 *   Tailwind's --font-sans / --font-display / --font-mono are wired here.
 *
 * • Radius / Shadow → edit `radius` / `shadows`.
 *   Tailwind utilities rounded-brand-* and shadow-card / shadow-elevated
 *   are sourced from these values.
 *
 * • Gradient → edit `gradients.brand`.
 *   Used in inline `style` props and the Tailwind bg-brand utility.
 * ─────────────────────────────────────────────────────────────────────────
 */

// ── Colors ──────────────────────────────────────────────────────────────

export const colors = {
  /* Primary brand blues */
  primary:        "#5B9BD5",
  primaryDark:    "#3A7BBF",
  primaryLight:   "#EBF4FC",
  primaryPale:    "#F4F9FE",
  primaryLighter: "#7DB8E8",

  /* Light-mode surfaces */
  page:   "#F4F9FE",
  card:   "#FFFFFF",
  stroke: "#D8E8F5",

  /* Light-mode text */
  heading: "#1A2B3C",
  body:    "#4E6277",
  muted:   "#8FA5BA",

  /* Dark-mode surfaces (html.dark) */
  dark: {
    page:   "#0D1B2A",
    card:   "#112235",
    stroke: "#1A3550",
    text:   "#E8F1F9",
    muted:  "#5A7A99",
  },

  /* Semantic */
  success: "#22C55E",
  warning: "#F59E0B",
  danger:  "#EF4444",
  info:    "#3B82F6",
  purple:  "#8B5CF6",

  /* Audience accent colours (used in Features, HowItWorks, Testimonials) */
  gyms:      "#5B9BD5",   // same as primary
  members:   "#7c3aed",
  community: "#059669",
} as const;

// ── Gradients ────────────────────────────────────────────────────────────

export const gradients = {
  /**
   * Primary brand gradient — hero panel, popular pricing card, mockup cards.
   * Direction and stops are intentional; tweak here to change globally.
   */
  brand: `linear-gradient(150deg, ${colors.primaryDark} 0%, ${colors.primary} 60%, ${colors.primaryLighter} 100%)`,
} as const;

// ── Typography ───────────────────────────────────────────────────────────

export const typography = {
  fontFamily: {
    /** UI / body text — loaded as --font-inter in layout.tsx */
    sans:    "'Inter', 'Geist Variable', system-ui, sans-serif",
    /** Headings & brand name — Playfair Display loaded per-component */
    display: "'Playfair Display', Georgia, serif",
    /** Code / mono */
    mono:    "'Geist Mono', ui-monospace, monospace",
  },
  /** Type scale in rem (1rem = 16px) */
  scale: {
    "2xs": "0.6875rem", // 11px
    xs:    "0.75rem",   // 12px
    sm:    "0.8125rem", // 13px
    base:  "0.875rem",  // 14px
    md:    "1rem",      // 16px
    lg:    "1.125rem",  // 18px
    xl:    "1.375rem",  // 22px
  },
  /** Nav / section labels */
  label: {
    fontSize:      "0.625rem",   // 10px
    fontWeight:    "500",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
} as const;

// ── Border radius ────────────────────────────────────────────────────────

export const radius = {
  sm:    "6px",      // subtle – chips, small badges
  md:    "10px",     // buttons, inputs
  lg:    "14px",     // cards
  xl:    "20px",     // large panels / hero
  pill:  "9999px",   // fully rounded badges
} as const;

// ── Shadows ──────────────────────────────────────────────────────────────

export const shadows = {
  card:     "0 1px 4px rgba(91,155,213,0.08)",
  elevated: "0 4px 16px rgba(91,155,213,0.12)",
} as const;

// ── Convenience re-export ────────────────────────────────────────────────

const theme = { colors, gradients, typography, radius, shadows } as const;
export default theme;
