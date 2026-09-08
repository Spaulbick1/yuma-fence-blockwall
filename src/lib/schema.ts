// JSON-LD generators. No LocalBusiness schema (no genuine local address on
// file) and never a fabricated AggregateRating/Review (compliance.md rule 8
// / rule 1). Article/ItemList generators land in Phase 6 alongside the real
// dated content that needs them (geo-aeo.md rule 8).
import { site } from "./site-config";

// Strip HTML tags then decode the handful of entities our own markdown/HTML
// answer strings actually contain (2026-09-03 fix — FAQPage JSON-LD was
// shipping literal "&amp;" instead of "&" because tags were stripped but
// entities were never decoded).
function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'");
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `https://www.${site.domain}/#organization`,
    name: site.brandName,
    url: `https://www.${site.domain}`,
    areaServed: site.serviceArea.cities.map((c) => ({
      "@type": "City",
      name: c,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `https://www.${site.domain}/#website`,
    name: site.brandName,
    url: `https://www.${site.domain}`,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      // Strip HTML tags — FAQPage acceptedAnswer.text should be plain text;
      // the visible <FAQ> component still renders the linked HTML version.
      acceptedAnswer: {
        "@type": "Answer",
        text: toPlainText(item.answer),
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${opts.url}#service`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    // No provider field: this is a referral/publisher site (compliance.md
    // rule 6 / rule 1) that does not itself perform installation or repair
    // work. A provider block naming the publisher as an Organization would
    // tell search engines the opposite of what the visible disclosure says
    // (2026-09-03 fix — same bug found and fixed on yuma-roofing).
    areaServed: (opts.areaServed ?? site.serviceArea.cities).map((c) => ({
      "@type": "City",
      name: c,
    })),
  };
}

// New (Operating Rule 14, 2026-09-08): every page must carry a WebPage node
// with a stable @id, and the page(s) that carry a Service node must link
// mainEntity to that Service's own @id (see MASTER_PROMPT Section 4/9).
export function webPageSchema(opts: {
  url: string;
  name: string;
  description?: string;
  mainEntityId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    isPartOf: { "@id": `https://www.${site.domain}/#website` },
    about: { "@id": `https://www.${site.domain}/#organization` },
    ...(opts.mainEntityId ? { mainEntity: { "@id": opts.mainEntityId } } : {}),
  };
}
