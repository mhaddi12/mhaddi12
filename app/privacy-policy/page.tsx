import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: 'Privacy policy for Muhammad Haddi portfolio website.',
};

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: '760px', margin: '120px auto 80px', padding: '0 24px' }}>
      <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--gold)', marginBottom: '24px' }}>
        Privacy Policy
      </h1>
      <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
        This site uses Google AdSense to display ads. Google and its partners may use cookies to serve ads
        based on your prior visits to this website or other websites. You may opt out of personalised
        advertising by visiting{' '}
        <a href="https://www.google.com/settings/ads" style={{ color: 'var(--gold)' }}>
          Google Ads Settings
        </a>.
      </p>
      <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
        No personal data is collected or stored by this website.
      </p>
      <Link href="/" style={{ color: 'var(--gold)' }}>← Back to portfolio</Link>
    </main>
  );
}
