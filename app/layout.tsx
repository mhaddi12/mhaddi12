import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/data';
import CookieConsent from '@/components/CookieConsent';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-space' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const viewport: Viewport = {
  themeColor: '#0A0E1A',
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    // — Identity
    'Muhammad Haddi', 'Haddi Developer', 'haddidev',

    // — Core role (generic, no name)
    'Flutter Developer', 'Flutter Developer Portfolio', 'Flutter App Developer',
    'Mobile App Developer', 'Cross-Platform App Developer', 'Dart Developer',
    'Android Developer', 'iOS Developer', 'Full Stack Mobile Developer',

    // — Hire / service intent (what people search when they want to hire)
    'Hire Flutter Developer', 'Hire Mobile App Developer', 'Flutter Developer for Hire',
    'Freelance Flutter Developer', 'Flutter Freelancer', 'Flutter Consultant',
    'Flutter App Development Services', 'Mobile App Development Services',
    'App Developer for Hire', 'Remote Flutter Developer', 'Contract Flutter Developer',

    // — Tech stack (generic searches)
    'Flutter Firebase Developer', 'Flutter Node.js Developer', 'Flutter MongoDB Developer',
    'Flutter Riverpod Developer', 'Flutter Clean Architecture', 'Flutter REST API',
    'Node.js Developer', 'MongoDB Developer', 'Express.js Developer',
    'Firebase Developer', 'REST API Developer', 'Backend Developer',
    'Full Stack Developer', 'API Development Services',

    // — Use case / industry
    'CRM App Development', 'Business App Development', 'Startup App Developer',
    'Subscription App Flutter', 'Enterprise Mobile App Developer',
    'Flutter App for Startup', 'Cross-Platform Business App',
    'App Store Deployment', 'Google Play Developer', 'iOS App Developer',

    // — Location (for local + regional searches)
    'Flutter Developer Lahore', 'Flutter Developer Pakistan',
    'Mobile App Developer Lahore', 'Mobile App Developer Pakistan',
    'Freelance Flutter Developer Pakistan', 'Hire Flutter Developer Pakistan',
    'Backend Developer Lahore', 'Full Stack Developer Pakistan',
    'Node.js Developer Lahore',

    // — Comparison / alternative searches
    'Flutter vs React Native Developer', 'React Native Alternative',
    'Cross-Platform Alternative to Native App',
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
    images: [{ url: siteConfig.image, alt: 'Portrait of Muhammad Haddi, Software Engineer' }],
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
  jobTitle: 'Software Engineer',
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
    'Cross-Platform Development', 'Flutter Freelancing', 'App Store Deployment',
    'Play Store Deployment', 'GetX', 'BLoC', 'Provider', 'Flutter Web',
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Superior University, Lahore' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = [plusJakartaSans.variable, inter.variable, jetbrainsMono.variable].join(' ');

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
        <CookieConsent adsenseId={siteConfig.adsenseId} />
      </body>
    </html>
  );
}
