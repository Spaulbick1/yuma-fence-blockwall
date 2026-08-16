import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Domain: yumafenceandwall.com — PURCHASED 2026-08-16 via Cloudflare
// Registrar ($10.46/yr, auto-renew on, confirmed Active).
export default defineConfig({
  site: "https://www.yumafenceandwall.com",
  output: "static",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("/thank-you") && !page.includes("/404"),
    }),
  ],
});
