/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_GHL_WEBHOOK_URL?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
