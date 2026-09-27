/**
 * Priority (money) pages surfaced by components/sections/RelatedServices.astro on every
 * indexable page. Why this exists: in the built-HTML internal-link graph the footer gives
 * /privacy-policy/ (35) and /terms/ (34) a link from every page, while eight of the nine
 * content-collection service pages (wood, vinyl, chain link, wrought iron, pool fence,
 * automatic gate, perimeter block wall, retaining wall) are not in the footer and had only
 * 2-5 inbound links each. Same pattern as the Pahrump AC Repair pilot (site-git commit
 * 226b39b), adapted: this site's LeadForm does not link the legal pages, so the problem
 * here is near-orphaned service pages rather than an inflated legal count.
 *
 * The block renders on 31 pages, so a card alone adds ~30 links. That only brings a page
 * starting at 2-5 level with the legal pages, so every service page also sits in
 * PRIORITY_ALL_SERVICES, the one-line "All fence & wall services" list under the cards.
 *
 * Keep cards to 6-8 entries. Order matters: the first two that aren't the current page are
 * used in the intro sentence, so the weakest money pages go first.
 */
export const PRIORITY_LINKS = [
  {
    href: '/services/wood-fence-yuma-az/',
    label: 'Wood privacy fence installation',
    desc: 'Per-foot pricing, desert-specific maintenance, and how to vet the contractor.',
  },
  {
    href: '/services/wrought-iron-fence-yuma-az/',
    label: 'Wrought iron & ornamental fencing',
    desc: 'Cost factors, pool-barrier fit, and how iron and aluminum hold up in Yuma heat.',
  },
  {
    href: '/services/vinyl-fence-yuma-az/',
    label: 'Vinyl fence installation',
    desc: 'Per-foot pricing and desert-specific considerations.',
  },
  {
    href: '/services/chain-link-fence-yuma-az/',
    label: 'Chain link fence',
    desc: 'The most budget-friendly option: per-foot pricing and common uses.',
  },
  {
    href: '/services/pool-fence-yuma-az/',
    label: 'Pool safety fencing',
    desc: 'Arizona and City of Yuma pool-barrier rules, and which materials qualify.',
  },
  {
    href: '/services/automatic-gate-yuma-az/',
    label: 'Automatic & electric gates',
    desc: 'Swing vs. slide, cost factors, and desert-climate considerations.',
  },
  {
    href: '/services/perimeter-block-wall-yuma-az/',
    label: 'Perimeter block wall',
    desc: 'City of Yuma code requirements and what to ask a masonry contractor.',
  },
  {
    href: '/services/retaining-wall-yuma-az/',
    label: 'Retaining wall installation',
    desc: 'Why this scope needs an R-31 masonry license, and what drives cost.',
  },
] as const;

/** Every service page, repeated as a one-line text list under the cards. */
export const PRIORITY_ALL_SERVICES = [
  { href: '/services/wood-fence-yuma-az/', label: 'Wood' },
  { href: '/services/vinyl-fence-yuma-az/', label: 'Vinyl' },
  { href: '/services/chain-link-fence-yuma-az/', label: 'Chain link' },
  { href: '/services/wrought-iron-fence-yuma-az/', label: 'Wrought iron' },
  { href: '/services/pool-fence-yuma-az/', label: 'Pool fencing' },
  { href: '/services/automatic-gate-yuma-az/', label: 'Automatic gates' },
  { href: '/services/fence-repair-yuma-az/', label: 'Fence repair' },
  { href: '/services/perimeter-block-wall-yuma-az/', label: 'Perimeter block wall' },
  { href: '/services/retaining-wall-yuma-az/', label: 'Retaining wall' },
] as const;

/** Pages where the block must not render (legal, utility). Prefix match. */
export const PRIORITY_EXCLUDE = ['/privacy-policy', '/terms', '/thank-you', '/404'] as const;
