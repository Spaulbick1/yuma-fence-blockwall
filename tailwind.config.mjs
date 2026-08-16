/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // "Iron & Caliche" palette — see DESIGN_SYSTEM.md §1 for the full
        // contrast table and text-safe vs. decorative-only rules. Replaces
        // the earlier "Caliche & Rebar" (stone/brick) tokens used in the
        // original Phase 2 pass — reconciled to the canonical palette during
        // Phase 3 (2026-08-16), see yuma-fence-blockwall/CONTENT_PLAN.md.
        iron: "#4B5563", // decorative/large only — icons, large graphic accents
        "iron-dark": "#20242A", // text-safe primary — headings, primary CTA fill, header/footer bg
        "iron-50": "#EEF0F2", // ghost-button hover tint on light surfaces
        caliche: "#C7B79A", // decorative/large only — badge fills, large icon accents
        "caliche-dark": "#6E6250", // text-safe accent — eyebrows, links, secondary CTA text
        ink: "#211E1A", // primary body text (warm near-black)
        muted: "#5B5449", // secondary/muted text
        paper: "#FAF7F1", // page background
        sand: "#F0E9DB", // tinted section background
        "sand-line": "#DED2B8", // hairline borders only — border-only, non-text token
      },
      fontFamily: {
        // Display/headings: system sans, set uppercase with wide tracking in
        // component classes (a treatment differentiator, not a font-family
        // one — see DESIGN_SYSTEM.md §2).
        display: [
          "Archivo",
          "Barlow",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "ui-sans-serif",
          "Inter",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        card: "0.625rem", // 10px
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(32 36 42 / 0.06), 0 1px 3px 0 rgb(32 36 42 / 0.08)",
        lift: "0 8px 20px -4px rgb(32 36 42 / 0.18)",
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 0.83rem + 0.2vw, 0.95rem)",
        "fluid-base": "clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)",
        "fluid-lg": "clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)",
        "fluid-xl": "clamp(1.35rem, 1.2rem + 0.7vw, 1.75rem)",
        "fluid-2xl": "clamp(1.75rem, 1.5rem + 1.2vw, 2.5rem)",
        "fluid-3xl": "clamp(2.1rem, 1.7rem + 2vw, 3.25rem)",
      },
    },
  },
  plugins: [],
};
