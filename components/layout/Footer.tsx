import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>Muhammad Haddi — Flutter &amp; Full-Stack Mobile Developer</div>
        <div className="mono" style={{ marginTop: '6px' }}>
          Built with Flutter-grade attention to detail · Lahore, PK
        </div>
        <div style={{ marginTop: '10px' }}>
          <Link href="/privacy-policy" style={{ color: 'var(--gold)' }}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
