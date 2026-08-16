import { defineCollection, z } from "astro:content";

// Core service page template's typed frontmatter. Every entry backs a page
// at /services/[slug]/ via src/pages/services/[...slug].astro. See
// CONTENT_PLAN.md for the full page-by-page outline (keywords, word count,
// EEAT elements, schema) this schema is built to satisfy.
const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    trade: z.enum(["fence", "wall"]),
    metaDescription: z.string().max(160),
    // Quotable direct-answer block (geo-aeo.md rule 2): figure + geography +
    // date, 1-2 sentences, rendered before any other body content.
    directAnswer: z.string(),
    // Set false (block-wall pages) when no verified Yuma-local $ figure
    // exists yet — the template swaps a cost table for a quote-CTA panel.
    hasVerifiedCost: z.boolean(),
    costRange: z.string().optional(),
    costNote: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    licenseNote: z.string(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })),
    publishDate: z.string(),
    updatedDate: z.string(),
  }),
});

// Location page template's typed frontmatter. Every entry backs a page at
// /service-areas/[slug]/ via src/pages/service-areas/[...slug].astro. Only
// built for locations with substantively unique local content — per the
// skill's quality bar, a location gets skipped rather than thin-paged.
const locations = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    cityName: z.string(),
    metaDescription: z.string().max(160),
    directAnswer: z.string(),
    population: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })),
    publishDate: z.string(),
    updatedDate: z.string(),
  }),
});

// Pillar blog post collection (Phase 4). Backs /blog/ (index) and
// /blog/[slug]/ via src/pages/blog/index.astro + src/pages/blog/[...slug].astro.
// Article/ItemList schema intentionally deferred to Phase 6 (geo-aeo.md rule
// 8) — posts ship with BreadcrumbList + FAQPage only for now, same pattern
// as every other Phase 3/4 page.
const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    metaDescription: z.string().max(160),
    // Quotable direct-answer block (geo-aeo.md rule 2): figure/claim +
    // geography + date, 1-2 sentences, rendered before any other body content.
    directAnswer: z.string(),
    excerpt: z.string(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    publishDate: z.string(),
    updatedDate: z.string(),
  }),
});

export const collections = { services, locations, posts };
