'use client';
import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/data';

export default function FloatingBlogAd() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pushed = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (ratio > 0.25) setVisible(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  useEffect(() => {
    if (visible && !pushed.current) {
      pushed.current = true;
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch {}
    }
  }, [visible]);

  if (dismissed) return null;

  return (
    <div className={`floating-ad${visible ? ' floating-ad--visible' : ''}`} aria-label="Advertisement">
      <button
        className="floating-ad-close"
        onClick={() => setDismissed(true)}
        aria-label="Close ad"
      >
        ✕
      </button>
      <span className="eyebrow" style={{ fontSize: '0.6rem', marginBottom: '8px', display: 'block' }}>
        Sponsored
      </span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minHeight: '100px' }}
        data-ad-client={siteConfig.adsenseId}
        data-ad-slot={siteConfig.adsenseSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
