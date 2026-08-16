// JSON-LD generators. No LocalBusiness schema (no genuine local address on
// file) and never a fabricated AggregateRating/Review (compliance.md rule 8
// / rule 1). Article/ItemList generators land in Phase 6 alongside the real
// dated content that needs them (geo-aeo.md rule 8).
import { site } from "./site-config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    url: `https://${site.domain}`,
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
    name: site.brandName,
    url: `https://${site.domain}`,
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
        text: item.answer.replace(/<[^>]+>/g, ""),
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
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "Organization",
      name: site.brandName,
      url: `https://${site.domain}`,
    },
    areaServed: (opts.areaServed ?? site.serviceArea.cities).map((c) => ({
      "@type": "City",
      name: c,
    })),
  };
}
