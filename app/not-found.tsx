import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main style={{ maxWidth: '760px', margin: '120px auto 80px', padding: '0 24px' }}>
      <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 700, marginBottom: '12px' }}>
        Page not found
      </h1>
      <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '28px' }}>
        That URL is not on this site.
      </p>
      <Link href="/" style={{ color: 'var(--accent)' }}>
        Back to the portfolio
      </Link>
    </main>
  );
}
