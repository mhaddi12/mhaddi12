import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { siteConfig } from '@/lib/data';
import { isProductionIndexable, jsonLdScript, personId, websiteId } from '@/lib/seo';
import CookieConsent from '@/components/CookieConsent';

// Keep builds independent of Google Fonts responses and network availability.
const plusJakartaSans = localFont({ src: './fonts/plus-jakarta-sans-latin.woff2', weight: '400 800', display: 'swap', variable: '--font-space' });
const inter = localFont({ src: './fonts/inter-latin.woff2', weight: '400 600', display: 'swap', variable: '--font-inter' });
const jetbrainsMono = localFont({ src: './fonts/jetbrains-mono-latin.woff2', weight: '400 500', display: 'swap', variable: '--font-mono' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0C',
};

const indexable = isProductionIndexable();

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  robots: indexable
    ? { index: true, follow: true, 'max-image-preview': 'large' }
    : { index: false, follow: false },
  verification: { google: siteConfig.googleVerification },
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: 'en',
  publisher: { '@id': personId },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = [plusJakartaSans.variable, inter.variable, jetbrainsMono.variable].join(' ');

  return (
    <html lang="en" className={fontClasses}>
      <head>
        <meta name="google-adsense-account" content={siteConfig.adsenseId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent adsenseId={siteConfig.adsenseId} />
      </body>
    </html>
  );
}
