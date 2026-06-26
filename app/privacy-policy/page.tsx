import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: 'Privacy policy for Muhammad Haddi portfolio and blog website.',
};

const section: React.CSSProperties = { marginBottom: '32px' };
const h2Style: React.CSSProperties = {
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: '1.1rem',
  fontWeight: 600,
  color: 'var(--text)',
  marginBottom: '10px',
};
const p: React.CSSProperties = { color: 'var(--muted)', lineHeight: 1.75, marginBottom: '10px' };

export default function PrivacyPolicy() {
  const updated = 'June 26, 2026';

  return (
    <main style={{ maxWidth: '760px', margin: '120px auto 80px', padding: '0 24px' }}>
      <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--gold)', marginBottom: '8px' }}>
        Privacy Policy
      </h1>
      <p style={{ color: 'var(--muted-2)', fontSize: '0.85rem', marginBottom: '40px' }}>
        Last updated: {updated}
      </p>

      <div style={section}>
        <h2 style={h2Style}>What this site is</h2>
        <p style={p}>
          This is the personal portfolio and blog of Muhammad Haddi — a mobile developer. The site
          displays project work, skills, and technical articles. No user accounts, registration, or
          login exist anywhere on this site.
        </p>
      </div>

      <div style={section}>
        <h2 style={h2Style}>Data we collect</h2>
        <p style={p}>
          <strong style={{ color: 'var(--text)' }}>Blog view counts.</strong> When you open a blog
          post, an anonymous counter is incremented in our database (MongoDB Atlas). No IP address,
          device ID, or any personally identifying information is stored alongside the count.
        </p>
        <p style={p}>
          <strong style={{ color: 'var(--text)' }}>No other personal data.</strong> We do not
          collect your name, email, location, or any other personal information. There are no
          comment forms, contact forms with stored submissions, or tracking pixels on this site.
        </p>
      </div>

      <div style={section}>
        <h2 style={h2Style}>Google AdSense</h2>
        <p style={p}>
          This site uses Google AdSense to display advertisements on the main portfolio page and
          within blog posts. AdSense is <strong style={{ color: 'var(--text)' }}>opt-in</strong> —
          the AdSense script is not loaded until you click <em>Accept</em> on the cookie consent
          banner shown on your first visit.
        </p>
        <p style={p}>
          If you accepted and later change your mind, open your browser&apos;s developer console
          and run <code style={{ color: 'var(--gold)', background: 'var(--surface)', padding: '1px 6px', borderRadius: '4px' }}>localStorage.removeItem(&apos;cookie-consent&apos;)</code> then
          refresh — the banner will reappear so you can choose again.
        </p>
        <p style={p}>
          You can also opt out of personalised advertising at any time via{' '}
          <a href="https://www.google.com/settings/ads" style={{ color: 'var(--gold)' }}>
            Google Ads Settings
          </a>{' '}
          or{' '}
          <a href="https://www.aboutads.info/choices/" style={{ color: 'var(--gold)' }}>
            aboutads.info
          </a>.
        </p>
      </div>

      <div style={section}>
        <h2 style={h2Style}>Third-party services</h2>
        <p style={p}>
          <strong style={{ color: 'var(--text)' }}>MongoDB Atlas</strong> — stores blog post
          content and anonymous view counters. Hosted on MongoDB&apos;s cloud infrastructure.
        </p>
        <p style={p}>
          <strong style={{ color: 'var(--text)' }}>Vercel</strong> — hosts this website. Vercel
          may collect standard server access logs (IP, request path, timestamp) as part of normal
          infrastructure operation. See{' '}
          <a href="https://vercel.com/legal/privacy-policy" style={{ color: 'var(--gold)' }}>
            Vercel&apos;s Privacy Policy
          </a>.
        </p>
        <p style={p}>
          <strong style={{ color: 'var(--text)' }}>Google AdSense</strong> — see the AdSense
          section above. See{' '}
          <a href="https://policies.google.com/privacy" style={{ color: 'var(--gold)' }}>
            Google&apos;s Privacy Policy
          </a>.
        </p>
      </div>

      <div style={section}>
        <h2 style={h2Style}>Cookies &amp; your consent</h2>
        <p style={p}>
          On your first visit a consent banner appears at the bottom of the screen. Your choice is
          saved in <code style={{ color: 'var(--gold)', background: 'var(--surface)', padding: '1px 6px', borderRadius: '4px' }}>localStorage</code> (not a cookie) so the banner does not re-appear.
        </p>
        <p style={p}>
          <strong style={{ color: 'var(--text)' }}>If you click Accept</strong> — Google AdSense
          loads and may set third-party cookies on <code style={{ color: 'var(--gold)', background: 'var(--surface)', padding: '1px 6px', borderRadius: '4px' }}>doubleclick.net</code> and <code style={{ color: 'var(--gold)', background: 'var(--surface)', padding: '1px 6px', borderRadius: '4px' }}>google.com</code> for
          ad personalisation.
        </p>
        <p style={p}>
          <strong style={{ color: 'var(--text)' }}>If you click Decline</strong> — the AdSense
          script is never loaded and no third-party cookies are set.
        </p>
        <p style={p}>
          This site itself sets no first-party cookies.
        </p>
      </div>

      <div style={section}>
        <h2 style={h2Style}>Contact</h2>
        <p style={p}>
          Questions about this policy? Reach out at{' '}
          <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--gold)' }}>
            {siteConfig.email}
          </a>.
        </p>
      </div>

      <Link href="/" style={{ color: 'var(--gold)' }}>← Back to portfolio</Link>
    </main>
  );
}
