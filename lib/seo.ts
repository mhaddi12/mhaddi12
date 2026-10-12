import { siteConfig } from '@/lib/data';

/** Preview and local builds stay out of the index. Production stays indexable. */
export function isProductionIndexable() {
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV === 'production';
  return process.env.NODE_ENV === 'production';
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const personId = `${siteConfig.url}/#person`;
export const websiteId = `${siteConfig.url}/#website`;
