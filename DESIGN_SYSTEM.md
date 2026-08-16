# DESIGN_SYSTEM.md — Yuma Fence & Wall (Fencing & Block Wall Contractor, Yuma, AZ)

**Date:** 2026-08-16 · **Phase:** 2 (Design System) · **Skill:** rank-rent-build v1.22
**Inputs:** `yuma-fence-blockwall/NICHE_VALIDATION.md` (Phase 0, GO), `yuma-fence-blockwall/KEYWORD_RESEARCH.md`
(Phase 1 — sitemap, keyword split, five-way competitor audit, differentiation plan), `claude_FACTS_YUMA.md`
(YUM-005 ordinance, YUM-006/007 licensing/demand), `claude_FACTS_AZ_STATE.md` (AZ-002 unlicensed-advertising
misdemeanor, AZ-006 R-14/R-31 license classifications).
**Domain:** `yumafenceandwall.com` — recommended, RDAP-confirmed available 2026-08-16. **Not yet purchased —
buy before or during Phase 3.** `astro.config.mjs` and `site-config.ts` use this as the live placeholder;
swap immediately if a different domain is bought instead.
**Repo (sandbox):** `rank-rent-fence-blockwall-yuma/` — Astro (static) + Tailwind, Cloudflare Pages target,
same stack as the rest of the portfolio. Delivered to Scott as a zip this session — no GitHub repo or
OneDrive working copy exists yet (same situation st-george-tree-service and st-george-roofing were in at
this stage).

---

## 0. Carried-forward context (do not re-litigate)

- **Gate 3 is genuinely contested, not a clean win.** Five real, well-built local competitors exist
  (Yuma Arizona Fence, Fence Pro Yuma, Complete Yuma Fence, Precision Yuma Masonry, Trusty Gate Yuma Fence
  Builders) — none combines fence + block wall under one brand, none has a live dollar-figure cost guide for
  either trade, and none covers the YUM-005 ordinance or the AZ-006 license distinction. The differentiation
  case rests on real, sourced content gaps, not on the competitive set being weak or thin.
- **Compliance flags carried into every content phase (3/4):**
  - **Never** "our crew," "our installers," or any first-person performance language — A.R.S. §32-1165
    (AZ-002) makes advertising the ability to perform licensed trade work without a license a class 1
    misdemeanor in Arizona, and this applies to how the site frames itself, not just literal claims.
  - **No unverified "licensed & insured" claims** about any specific renter (compliance.md rule 4) —
    `site.licenseVerifyNote` in `site-config.ts` uses "report holding active licensing and insurance —
    verify before hiring" framing, same posture as every other AZ site in the portfolio.
  - **Block wall $/sq ft has no Yuma-sourced figure yet** (`claude_FACTS_YUMA.md` §5 known gap) — the
    Property Line comparison table and every block-wall page must route to a free-quote CTA instead of a
    dollar figure until a real local number is confirmed. The fence side DOES have a sourced figure
    (`NICHE_VALIDATION.md` Gate 1, homeblue.com Yuma-local pricing) and is used as-is.
  - **AZ-001 (one-party call-recording consent)** applies once Phase 5 wires up the tracked number —
    already sourced and dated in `claude_FACTS_AZ_STATE.md`, no new research needed.

---

## 1. Palette — "Iron & Caliche"

| Token | Hex | Role |
|---|---|---|
| `iron` | `#4B5563` | **Decorative/large only** — icons, large graphic accents. Passes AA on paper (7.07:1) but reserved for decorative use to keep the text-color rule simple and consistent with the rest of the portfolio. |
| `iron-dark` | `#20242A` | **Text-safe primary** — headings-on-light, primary CTA fill (white text), header/footer background. A near-black charcoal with a faint blue undertone — the "wrought iron" reference. |
| `iron-50` | `#EEF0F2` | Ghost-button hover tint on light surfaces. |
| `caliche` | `#C7B79A` | **Decorative/large only** — badge fills, large icon accents. Fails AA as text on paper (1.84:1) — never used for text or links. |
| `caliche-dark` | `#6E6250` | **Text-safe accent** — eyebrows, links, License Check strip background (white text on it), secondary CTA text. A desaturated, grayish stone-tan — the "caliche soil" reference (`claude_FACTS_YUMA.md`/City of Yuma code both reference caliche as the local subsoil). |
| `ink` | `#211E1A` | Primary body text (warm near-black, not pure black). |
| `muted` | `#5B5449` | Secondary/muted text. |
| `paper` | `#FAF7F1` | Page background (warm off-white). |
| `sand` | `#F0E9DB` | Tinted section background. |
| `sand-line` | `#DED2B8` | Hairline borders on warm surfaces — **border-only, non-text token** (1.40:1 vs. paper), same restriction pattern as every prior site's border-only token. |
| `white` | `#FFFFFF` | Card surfaces, header background. |

### 1.1 WCAG AA contrast — every token pair actually in use (computed programmatically)

Standard relative-luminance formula (sRGB → linearized → `0.2126R + 0.7152G + 0.0722B`), not eyeballed,
checked against paper, sand, **and** white per lessons-learned #6 ("passes on white, fails on tint").

| Pair | Ratio | Pair | Ratio |
|---|---|---|---|
| ink / white | 16.60 | iron-dark / paper | 14.58 |
| ink / paper | 15.52 | iron-dark / sand | 12.90 |
| ink / sand | 13.74 | iron-dark / white | 15.59 |
| muted / white | 7.48 | white / iron-dark (CTA) | 15.59 |
| muted / paper | 6.99 | caliche-dark / paper | 5.57 |
| muted / sand | 6.19 | caliche-dark / sand | 4.93 |
| iron-dark / iron-50 | 13.64 | caliche-dark / white | 5.96 |
| white / caliche-dark (footer CTA) | 5.96 | — | — |

All in-use text/UI pairs clear 4.5:1 — worst case is `caliche-dark`/`sand` at 4.93, real margin above the
floor. `caliche` (bright decorative) fails on every surface as text (1.84–3.03:1 depending on background)
and is never applied to text or links anywhere in the component set — confirmed by grep of every `text-`
and `hover:text-` utility using it. Hardcoded SVG hexes in `Logo.astro` and `favicon.svg` are limited to
`#20242A` (iron-dark), `#6E6250`/`#C7B79A` (caliche-dark/caliche, decorative fills only), and `#FAF7F1`
(paper) — re-run the grep in Phase 6/7 if either file changes.

### 1.2 Portfolio footprint separation (scaling rule)

| Site | Primary + accent | Hue (primary/accent) | Type feel | Layout signature | Shape signature |
|---|---|---|---|---|---|
| pahrumpacrepair (HVAC #1) | Teal `#0D747E` | 185° | Sans throughout | Standard hero → trust bar → grid → FAQ | Rounded cards |
| well-pump | Navy `#0E3A5C` + copper `#A64B15` | 206°/22° | Serif headings + sans body | Asymmetric split hero | Copper left-border card |
| septic | Pine `#1F4A36` + amber `#875D0A` | 152°/40° | Geometric sans + mono data | Stacked hero + strata band | Chamfered top-border card |
| electrician | Indigo `#332B7A` + gold `#776722` | 246°/49° | Condensed technical + sans | Diagonal-cut hero | Corner square + bottom border |
| st-george-hvac | Oxide red `#A84024` | 13° | Serif body + serif display | Front-page editorial + index strip | Squared corners + Oxford rule |
| lake-havasu-hvac | Channel `#226B81` + Bluff `#865A27` | 194°/32° | Rounded wayfinding + sans | Horizon-gradient hero | Waterline card (gradient corner) |
| las-vegas-patio-cover (Field Manual) | Ink `#16161A` + Signal `#C8371F` | ~0°/8.5° | Single grotesk, near-neutral | Persistent contents rail, no hero | Hairline rules only, no cards |
| st-george-tree-service (Estimator-first) | Juniper `#355332` + Bark `#604529` | 114.5°/30.5° | Sans + mono numeric readout | Live cost estimator, no hero | Ring card (double hairline) |
| st-george-roofing (Triage Table, **unbuilt/shelved**) | Slate `#384557` + Clay `#A9502D` | 214.8°/~20° | Slab-serif display + sans body | Routing table by situation, no hero | Shingle-lap stepped-top card |
| yuma-hvac (Sun Almanac) | Solar `#B6790A` + Denim `#3C6E8F` | 39°/204° | Geometric/humanist sans, no serif/mono | Two-panel season index, no hero | Sun-ray corner card (`.card-ray`) |
| **This site — Yuma Fence & Wall (Property Line)** | **Iron-dark `#20242A` + Caliche-dark `#6E6250`** | **216°/38°** | **Wide-tracked uppercase display sans + plain sans body, tabular numerals in the comparison table only** | **"The Property Line": a head-to-head Fence-vs-Block-Wall spec-sheet table is the above-the-fold primary element — no hero, no calculator, no routing table, no season panels** | **Post & Rail card: twin corner "post cap" marks + horizontal rail line (`.card-rail`)** |

**Distance from the direct same-city comparator (the one that matters most — yuma-hvac, same city):**
yuma-hvac is warm-gold-primary with a two-panel season-routing hero and a sun-ray card motif. This site
inverts the temperature entirely — a near-black charcoal ("iron") primary with a muted stone-tan accent,
zero gold — and its above-the-fold unit is a literal comparison spec-sheet (two products, six attribute
rows, one table), not two large CTA panels routed by time-of-year. The card motif (twin corner posts + a
horizontal rail) and the palette's defining move (near-black desaturated primary vs. yuma-hvac's vivid gold
primary) share nothing with Sun Almanac's sun-ray/gold-and-denim system.

**Hue-proximity flags, addressed honestly (not asserted away):**
- **`iron-dark` (216°) sits close to well-pump's navy (206°, 10° gap) and unbuilt st-george-roofing's slate
  (214.8°, 1.2° gap).** The separation is saturation and lightness, not hue: `iron-dark` is 13.5% saturation
  at 14.5% lightness — a near-black neutral charcoal — versus well-pump's navy at 73.6% saturation/20.8%
  lightness (a clearly *blue* navy) and roofing's slate at 21.7% saturation/28.0% lightness (still visibly
  blue-gray, and that site is unbuilt/shelved besides). Same desaturation-based separation argument
  st-george-tree-service's `bark` used against copper/bluff/amber/gold — an established, accepted pattern
  in this portfolio's own contrast/hue discipline.
- **`caliche-dark` (38°) sits inside the portfolio's already-flagged "contested gold band"** (yuma-hvac's
  solar 39°, septic's amber 40°, electrician's gold 49° — `yuma-hvac/DESIGN_SYSTEM.md` explicitly warned the
  *next* warm-niche build to avoid this range). This site does **not** avoid the hue — but at 15.8%
  saturation, `caliche-dark` is dramatically less saturated than every token in that band (septic amber
  67%, electrician gold 55.6%, yuma-hvac solar-dark ~85%+). It reads as gray-brown "stone," not gold — a
  deliberate, documented choice (the token literally represents caliche soil, cited in this niche's own
  facts file) rather than an accidental collision. **Flagged for `claude/INDEX.md`: any future warm-niche
  build should still treat 30–50° as contested and either go further into true neutral-gray (as this site
  did) or pick a genuinely different hue family.**

---

## 2. Typography

- **Display / headings:** system sans stack (`ui-sans-serif, "Archivo", "Barlow", system-ui, sans-serif`),
  bold (700), set in **uppercase with wide letter-spacing** (`tracking-wide` on eyebrows/nav, `-0.01em` on
  headings per the base style) for a "stamped property marker" feel — evokes surveyed boundary lines and
  engraved iron work. This is a *treatment* differentiator (uppercase + wide tracking on a system sans)
  rather than a font-family differentiator, since several portfolio sites already share system-sans
  fallback stacks to avoid webfont cost — the archetype (comparison spec-sheet) and palette
  (near-black/desaturated-stone) carry the primary differentiation weight for this site, with type as a
  secondary layer, same discipline lake-havasu-hvac used for its `bluff` token.
- **Body / UI:** system sans stack, `line-height 1.65`, 16px+ minimum.
- **Comparison-table numerals:** set in the same sans at a heavier weight (no monospace) — deliberately
  avoids repeating st-george-tree-service's mono-as-primary-numeric-interface move; septic's decorative
  mono use is also not repeated.
- **Fluid scale** via `clamp()` — `fluid-sm … fluid-3xl`, body at `fluid-base` (≈17px desktop, ≥16px
  mobile).
- **Eyebrow:** `caliche-dark`, uppercase, `tracking-[0.14em]`, semibold.

---

## 3. Page archetype — "The Property Line" (v1.13 archetype rule)

**Existing archetypes going into this build:** Standard hero (6 sites), Field Manual — no hero, persistent
contents rail (las-vegas-patio-cover), Estimator-first — live calculator replaces the hero
(st-george-tree-service), Triage Table — homepage routing table by situation, unbuilt/shelved
(st-george-roofing), Sun Almanac — two-panel season-routing index, no hero (yuma-hvac, same city as this
build).

**This site's above-the-fold element is a head-to-head Fence-vs-Block-Wall comparison spec-sheet, not a
headline hero, not a calculator, not a situation-routing table, and not a two-panel routing unit:**

- A real HTML `<table>` (semantic, not a styled div grid) comparing Fencing vs. Block Wall across six
  attribute rows: Typical Yuma Cost, Privacy, Yuma Code/HOA Fit, Maintenance, Typical Lifespan, Best For.
  Two CTAs sit directly beneath the table (`Get a Fence Quote` / `Get a Block Wall Quote`), each routing to
  that trade's service hub page.
- **This is the site's single biggest confirmed differentiator turned into its primary visual unit.**
  `KEYWORD_RESEARCH.md` §2 item 1 names "combined fence + block wall/masonry under one brand" as the core
  structural gap — no competitor site combines both trades, let alone compares them head-to-head. Leading
  the homepage with the literal comparison, rather than decorating a standard hero, is a structural bet on
  this site's actual strongest wedge (same discipline st-george-tree-service used putting a live estimator
  above the fold because cost content was its proven strongest cluster).
- **Cost-figure discipline:** the Fence column shows a real, sourced range ($10–33/linear ft, from
  `NICHE_VALIDATION.md` Gate 1's homeblue.com Yuma-local pricing). The Block Wall column deliberately
  shows **no dollar figure** — Phase 1's explicit decision (`KEYWORD_RESEARCH.md` §2 item 2,
  `COMPETITOR_AGE_CHECK_2026-08-16.md`) was to route block wall to a free-quote CTA until a real
  Yuma-sourced number exists, rather than publish the national $15–35/sq ft proxy as if it were local.
- Below the comparison table: a **License Check strip** (compact, high-contrast banner teasing the R-14 vs.
  R-31 license-vetting guide — this niche's second flagship content wedge, AZ-006) — kept as its own
  section rather than folded into the table so it reads as a distinct trust signal, not another spec row.
- Then a standard `ServiceGrid` (kept as a reasonable secondary unit — differentiating archetypes is about
  the *primary* above-the-fold unit, not banning every familiar pattern downstream, same precedent
  yuma-hvac's own `ServiceGrid` under Sun Almanac used), `FAQ` accordion, and the lead form.

This is the "directory/comparison-first" direction `phase-2-design.md` names as untried in the portfolio —
distinct from Triage Table's situation-routing (one row → one outcome) because it's a genuine two-column
head-to-head spec comparison of two *products*, not a list of situations routing to money pages, and
distinct from Sun Almanac's two-panel unit because the panels there are two large CTA blocks selected by
season, not a shared attribute-by-attribute table.

### 3.1 Property Line background photo (added 2026-08-16, post-Phase-2 refinement)

The Property Line section now runs a full-bleed background photo behind the eyebrow/H1/subhead and the
comparison card, per an explicit design request after initial Phase 2 delivery — this was not part of the
original archetype build and is documented here as an addendum rather than a rewrite of §3 above.

- **Image:** "Back Yard of Upscale Desert Property" by The Adaptive (Shane Cotee / TheAdaptive.Net),
  Adobe Stock asset #194667096 — Standard license, purchased on the user's existing Adobe Stock plan
  (1 Plan credit). An authentic Arizona desert property: a curved tan stucco compound wall winding through
  native desert landscaping (mountains, desert scrub, blue sky), shot at an elevated ground-level angle
  rather than straight-down aerial — chosen specifically because the wall is the dominant visual subject,
  not a background sliver (two earlier candidates were rejected for showing too little wall).
- **Processing:** downloaded at 4488×3359px, resized to 1920×1920px max via ImageMagick
  (`-resize "1920x1920>" -strip -quality 78`), which also stripped all EXIF/IPTC/XMP/Adobe-profile metadata
  per portfolio practice. Re-encoded to WebP (`cwebp -q 78 -metadata none`) rather than shipping as JPEG —
  269KB vs. 443KB at the same visual quality (~41% smaller), which matters here since this photo is the
  likely LCP element. Final file: `public/images/property-line-bg.webp`, 1920×1437px, ~263KB — well under
  the portfolio's ~1MB background-image budget (lessons-learned #17, which predates this site's WebP
  adoption — that budget was set against JPEG output). No `<picture>`/JPEG fallback is shipped: this is a
  CSS `background-image`, not an `<img>`, so there's no native fallback mechanism anyway, and WebP has
  effectively universal support in the browsers this site targets.
- **Contrast:** a 75%-opacity `iron-dark` (`#20242A`) scrim sits between the photo and the text layer
  (`bg-iron-dark/75` on an absolutely-positioned overlay div, `-z-10`, above a `-z-20` background-image div).
  Verified programmatically against the actual processed image (not a hypothetical): sampling every pixel
  in the upper ~45% of the frame (where the eyebrow/H1/subhead sit), solid white text contrast is **7.40:1
  worst-case** (against the brightest real pixel, a bright cloud) and **10.56:1 average-case** — both clear
  WCAG AAA (7:1), well above the AA floor (4.5:1). All text over the photo (eyebrow, H1, subhead, and the
  "Not sure which fits" paragraph + its two links below the card) uses solid white — **not** `caliche-dark`
  or `text-muted`, which do not clear AA at this scrim opacity and were the site's default eyebrow/body
  text colors prior to this change. Do not swap in a non-white text color over this photo without
  re-running the contrast check.
- **Card behavior:** the `.card-rail` comparison table keeps its opaque white background and sits as a
  floating card on top of the same photo/scrim — no contrast change needed there, since it's not
  transparent.
- **Scope:** this is a homepage-only treatment (`PropertyLineComparison.astro`); no other page or component
  was touched.

---

## 4. Shape signature — "Post & Rail" card (`.card-rail`)

Square corners (base `rounded-card` token only, no pill/heavy rounding) with **twin corner "post cap"
marks** — two short 3px-wide, 14px-tall `iron-dark` bars sitting at the top-left and top-right corners,
outside the card's top edge — plus a **horizontal rail**: a 2px `sand-line` border directly beneath the
card's header content. Together they read as a literal fence post-and-rail line bracketing the card content
— a different visual metaphor and a different corner treatment from every existing portfolio card motif:

| Site | Card motif |
|---|---|
| pahrumpacrepair | Standard rounded corners |
| well-pump | 4px flat copper left border |
| septic | Top border + chamfered corner |
| electrician | Corner square + bottom border |
| st-george-hvac | Squared corners + single Oxford rule |
| las-vegas-patio-cover | Hairline rules only, no card/shadow at all |
| lake-havasu-hvac | Single soft rounded corner + gradient top border |
| st-george-tree-service | Square corners + double hairline top border (ring card) |
| st-george-roofing (unbuilt) | Shingle-lap stepped top edge |
| yuma-hvac | Radiating sun-ray corner motif (conic-gradient) |
| **This site** | **Twin corner post-cap marks (outside the top edge) + a horizontal rail line beneath the header — no gradient, no chamfer, no stepped edge, no single-side border** |

Used on the lead-form wrapper, the (quarantined) Testimonials cards, and the ServiceGrid cards —
`.card-rail` / `.card-rail-header` in `global.css`.

---

## 5. Compliance wiring (compliance.md, read before this phase)

- **Disclosure placement (rule 3):** renders exactly once, in `Footer.astro` only, plain low-key tone
  (v1.2 default). Not in the comparison table, its CTAs, or the License Check strip — checked directly
  against rule 3's "never in the hero, trust bar, or next to a CTA" instruction, which the Property Line
  table inherits as this site's hero-equivalent element.
- **No fake social proof (rule 1):** `Testimonials.astro` built with every string wrapped
  `[SAMPLE — REPLACE BEFORE LAUNCH]`, **not imported by any page** — confirmed by grep.
- **No unverified "licensed & insured" claims (rule 4):** `site.licenseVerifyNote` in `site-config.ts`
  uses "report holding active licensing and insurance — verify before hiring" framing.
- **Publisher-only posture (rule 6, AZ-002):** zero first-person service language anywhere in
  `site-config.ts` or any component — checked across Header, Footer, PropertyLineComparison,
  LicenseCheckStrip, ServiceGrid, LeadForm, FAQ's homepage items.
- **No LocalBusiness schema, no fabricated ratings (rule 8):** `schema.ts` ships Organization, WebSite,
  Service, FAQPage, and BreadcrumbList generators only — no `LocalBusiness` (no genuine local address on
  file) and no `AggregateRating`/`Review`.

---

## 6. Components built (real Astro code, shells with props)

**Layout** (`src/components/layout/`)
- `BaseLayout.astro` — head/meta/canonical/OG, `noindex` prop, named `schema` slot for per-page JSON-LD,
  GA4 that **silently no-ops without `PUBLIC_GA4_ID`** (lesson #11, `is:inline`), skip link, `StickyCTA`
  with a **`quoteHref` prop** (lesson #7), and an explicit `global.css` import (lesson: a prior site's
  BaseLayout shipped without this and deployed with every custom class missing).
- `Header.astro` — logo, desktop nav (6 links: Fence vs. Wall, Fencing, Block Wall, Cost Guides, Verify a
  License, Service Areas), tracked call button (**filled/primary** per the phone-beats-form rule, v1.17),
  "Get Free Quote" button (**outlined/secondary**), mobile-menu island (vanilla `<script>`, no framework:
  Esc-to-close, closes on link select, `aria-expanded` synced).
- `Footer.astro` — iron-dark background, 4 link groups (Fencing / Block Wall / Guides / Company), tracked
  phone CTA (**filled/primary**, standalone-CTA rule since no paired quote button sits on this surface),
  **third-party disclosure rendered verbatim from `site-config`** (compliance #3), service-area line, legal
  name placeholder.
- `Logo.astro` — inline SVG fence-picket + block-wall-course mark; hexes limited to `iron-dark` and
  `caliche-dark` only.

**Sections** (`src/components/sections/`) — Property Line archetype:
- `PropertyLineComparison.astro` — the archetype-defining component: the six-row Fence-vs-Block-Wall
  `<table>`, sourced fence cost / quote-CTA block-wall cost, and the two trade CTAs (props: `quoteHref`).
- `LicenseCheckStrip.astro` — compact high-contrast banner teasing the R-14/R-31 license guide.
- `ServiceGrid.astro` — standard service-card grid, tagged by trade (`fence` | `wall`) (kept as a
  reasonable secondary unit — see §3).
- `FAQ.astro` — native `<details>` accordion, zero JS, schema-ready (props: `items` shared with
  `faqSchema()` so the visible accordion and JSON-LD never drift).
- `LeadForm.astro` — structure only, wiring in Phase 5. Includes A2P-ready consent-checkbox structure with
  a bracketed renter-name placeholder to fill in during that phase.
- `Testimonials.astro` — **built but NOT imported on any page** until real testimonials exist.
- `StickyCTA.astro` — mobile sticky bottom bar, phone **filled/primary**, quote **outlined** (v1.17),
  `quoteHref` prop so every page resolves.

**Lib** (`src/lib/`)
- `site-config.ts` — single source for phone (placeholder until GHL number provisioned), brand name
  ("Yuma Fence & Wall"), service area (5-city footprint matching yuma-hvac's), third-party disclosure text,
  the license-verify hedge sentence, and the canonical R-14-vs-R-31 guide URL so every component/page that
  teases it points at one place.
- `schema.ts` — JSON-LD generators: Organization, WebSite, Service, FAQPage, BreadcrumbList. Article/
  ItemList generators to be added in Phase 6 per `geo-aeo.md` rule 8 once real articles/lists exist. No
  `LocalBusiness`, no fabricated ratings.

**Global** (`src/styles/global.css`)
- Design tokens via Tailwind config, `.card-rail` shape signature, `.section`/`.container-content` rhythm,
  `main a:not([class])` global link style for injected/markdown content (bug caught in lessons-learned #8),
  skip-link, focus-visible rings, `.btn`/`.btn-primary`/`.btn-secondary` button system.

All components: semantic HTML (the comparison table uses a real `<table>` with `scope="row"` headers, not a
styled div grid), labeled form fields, keyboard nav, WCAG 2.2 AA minimum. No animation beyond a CSS
`transition-colors`/`transition-shadow` on hover states — nothing else animates.

---

## 7. Button hierarchy check (v1.17)

Header (phone filled / quote outlined), StickyCTA (phone filled / quote outlined), mobile nav menu (same),
Footer (phone-only CTA rendered filled per the standalone-CTA rule) — all confirmed against the
phone-beats-form rule before any content ships. The Property Line table's two trade CTAs
("Get a Fence Quote" / "Get a Block Wall Quote") are **not** phone-vs-form pairs — both route to
service-hub pages, not a phone number — so that rule doesn't apply to them directly; if a phone number is
later paired inline with either CTA, this must be revisited.

---

## 8. Open items → Phase 3

- **Buy `yumafenceandwall.com`** before or during Phase 3 — RDAP-confirmed available 2026-08-16,
  availability can change.
- **Block wall $/sq ft still has no Yuma-sourced figure** — Phase 3/4 should keep routing to a free-quote
  CTA rather than inventing one; a real local number is a `claude_FACTS_YUMA.md` known-gap item, not a
  Phase 2 blocker.
- **No GitHub repo or Cloudflare Pages project exists yet** — same situation st-george-tree-service and
  st-george-roofing were in at this stage. Stand these up before or during Phase 3 so the build gets a real
  CI check early (the `@astrojs/sitemap` regression this portfolio has hit twice is a build-time-only bug,
  invisible until a real deploy runs).
- **OG image** (`/images/og-default.png`, referenced by `BaseLayout.astro`) doesn't exist yet — Phase 6,
  same recurring gap as every prior site at this stage.
- **`npm install`/`npm run build` not run** — sandbox blocks the npm registry (lessons-learned #2).
  Cloudflare Pages CI is the real compiler once a repo + Pages project exist.

---

## Next session prompt (copy-paste)

```
Follow the rank-rent-build skill. Execute Phase 3 only for yuma-fence-blockwall (Yuma, AZ —
Fencing & Block Wall Contractor).

Read yuma-fence-blockwall/KEYWORD_RESEARCH.md (sitemap, keyword winnability split, five-way
competitor teardown, differentiation plan) and yuma-fence-blockwall/DESIGN_SYSTEM.md (this doc —
"The Property Line" archetype, Iron & Caliche palette, component set) before writing content.

Build the content plan + money pages per the sitemap's 🔑-marked pages: home body (wiring real
copy into PropertyLineComparison/LicenseCheckStrip/ServiceGrid/FAQ, replacing Phase 2's
representative placeholder text), /costs/fence-cost-yuma-az/ (real $ — ships first, sourced from
homeblue.com per Gate 1), /costs/block-wall-cost-yuma-az/ (quote-CTA interim, no $ table yet —
see the open item above), /guides/fence-vs-block-wall-yuma/ (the core differentiator, expand the
homepage comparison into a full guide), /guides/yuma-fence-wall-permit-rules/ (YUM-005 ordinance,
cite the code section by number), /best-fence-block-wall-companies-yuma-az/ (vetting-methodology
framing, not a raw ranked list, per the skill's map-pack-reality rule).

Also read references/geo-aeo.md for direct-answer/schema rules, and continue seeding
claude_FACTS_YUMA / claude_FACTS_AZ_STATE per operating rule 8 as new facts get verified
(especially if a real Yuma block-wall $/sq ft figure is found — update the known-gaps entry).

Before Phase 3 locks content: buy yumafenceandwall.com, and stand up a GitHub repo + Cloudflare
Pages project for this site (none exists yet) so the build gets a real CI check early.
```
