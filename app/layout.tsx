import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/data';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-space' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const viewport: Viewport = {
  themeColor: '#0A0E1A',
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'Muhammad Haddi', 'Flutter Developer', 'Mobile App Developer',
    'Flutter Freelancer', 'Node.js Developer', 'Firebase Developer',
    'Lahore', 'Android Developer', 'iOS Developer',
  ],
  authors: [{ name: 'Muhammad Haddi' }],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  verification: { google: siteConfig.googleVerification },
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    images: [{ url: siteConfig.image, alt: 'Portrait of Muhammad Haddi, Flutter Developer and Mobile App Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Haddi',
  jobTitle: 'Flutter & Full-Stack Mobile Developer',
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  image: `${siteConfig.url}${siteConfig.image}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' },
  sameAs: [siteConfig.linkedin, siteConfig.github],
  knowsAbout: [
    'Flutter', 'Dart', 'Node.js', 'MongoDB', 'Riverpod', 'REST APIs',
    'Firebase', 'AWS SES', 'RevenueCat', 'Mobile App Development',
    'Clean Architecture', 'iOS Development', 'Android Development',
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Superior University, Lahore' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = [spaceGrotesk.variable, inter.variable, jetbrainsMono.variable].join(' ');

  return (
    <html lang="en" className={fontClasses}>
      <head>
        <link rel="icon" type="image/png" href={siteConfig.image} />
        <link rel="shortcut icon" type="image/png" href={siteConfig.image} />
        <link rel="apple-touch-icon" href={siteConfig.image} />
        <meta name="google-adsense-account" content={siteConfig.adsenseId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
