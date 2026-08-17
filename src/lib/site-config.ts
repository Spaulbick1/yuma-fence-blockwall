// Single source of truth for brand identity, contact info, service area, and
// compliance copy. Every component/page should import from here rather than
// hardcoding any of these values — see lessons-learned #5 (price/claim drift)
// and compliance.md rule 3 (disclosure wording must be identical everywhere).

export const site = {
  brandName: "Yuma Fence & Wall",
  legalDisclaimerName: "Yuma Fence & Wall",
  domain: "yumafenceandwall.com",
  // PURCHASED 2026-08-16 via Cloudflare Registrar ($10.46/yr, auto-renew on,
  // confirmed Active, expires Aug 16, 2027). No longer a placeholder.
  domainIsPlaceholder: false,

  tagline: "Fencing & Block Wall Contractors, Yuma AZ",

  serviceArea: {
    primaryCity: "Yuma, AZ",
    cities: ["Yuma", "Fortuna Foothills", "San Luis", "Somerton", "Wellton"],
  },

  // --- Phone / call tracking (Phase 5) ---
  // GHL tracked number provisioned 2026-08-17: +1 928-597-4928, wired in the
  // shared "St George" GHL sub-account (forwards to 702-538-3637, whisper
  // "Lead from Yuma Fence & Wall website", call recording enabled per AZ
  // one-party-consent disclosure). Every component keys off
  // `phoneIsPlaceholder` — when true, hide/disable Call CTAs rather than
  // show a fake number (same pattern as every other site in the portfolio).
  phoneIsPlaceholder: false,
  phoneDisplay: "(928) 597-4928",
  phoneHref: "tel:+19285974928",

  // --- Lead form (Phase 5) ---
  webhookUrl: "",

  // --- Compliance (compliance.md rules 3, 4, 6) ---
  // AZ-002: A.R.S. § 32-1165 makes advertising licensed trade work without a
  // license a class 1 misdemeanor — this site must read as a publisher/
  // matching service everywhere, never "our technicians," never quoting or
  // offering to perform the work. Same posture as every AZ site in this
  // portfolio (yuma-hvac's nearest precedent).
  //
  // Disclosure wording: plain, low-key, once per surface (footer, about,
  // terms, and the vetting/"best of" guide) — never in the hero, trust bar,
  // or next to a CTA (compliance.md rule 3, v1.2).
  disclosure:
    "Yuma Fence & Wall is an independent local resource that connects Yuma-area homeowners with third-party fencing and block wall contractors. We don't perform installation or repair work ourselves — every project is completed by an independent, separately owned and operated business.",

  // "Guide"/"independent" self-description stays out of the header wordmark,
  // hero headline/kicker, and any TrustBar-style item — footer/about only,
  // same placement discipline as the disclosure line itself
  // (phase-2-design.md, v1.19).

  // --- Renter-claim hedge language (compliance.md rule 4) ---
  licensedInsuredHedge:
    "we work with providers who report being licensed and insured through the Arizona Registrar of Contractors — verify any specific contractor's license directly at roc.az.gov before hiring",

  // --- Local facts cited on this site (claude_FACTS_YUMA.md / claude_FACTS_AZ_STATE.md) ---
  // YUM-005: City of Yuma Municipal Code § 154-15.06 "Walls and Fences"
  // AZ-006: ROC R-14 Fencing vs. R-31 Masonry license classifications
  // YUM-006/007: renter pool + demand signal, not page-facing claims
};

export const compareSpec = {
  // Feeds the SpecCompare component (see components/sections/SpecCompare.astro).
  // Figures here are placeholders pending Phase 3's real cost-guide sourcing
  // (homeblue.com-sourced fence numbers ship first per KEYWORD_RESEARCH.md §2;
  // block wall stays a quote-CTA until a Yuma-sourced $/sq ft figure exists —
  // do not fill in a block-wall dollar figure here from the national proxy).
  fence: {
    label: "Fencing",
    costRange: "$10–33/linear ft installed",
    costNote: "varies by material — see the full cost guide",
    lifespan: "15–30+ years (material-dependent)",
    bestFor: "Privacy, pool code compliance, pet containment, curb appeal",
    licenseNote: "ROC R-14 (Fencing)",
  },
  blockWall: {
    label: "Block Wall & Masonry",
    costRange: "Request a free on-site quote",
    costNote: "no verified Yuma-local $/sq ft figure yet — see claude_FACTS_YUMA.md §5",
    lifespan: "40+ years, minimal maintenance",
    bestFor: "Subdivision perimeter code compliance, sound/wind barriers, retaining walls",
    licenseNote: "ROC R-31 (Masonry) — required for retaining walls; R-14 excludes them",
  },
};
