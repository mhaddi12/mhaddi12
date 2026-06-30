'use client';
import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/data';
import { useConsent } from '@/hooks/useConsent';

export default function FloatingBlogAd() {
  const consentAccepted = useConsent();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pushed = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem('floating-ad-dismissed') === '1') setDismissed(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (ratio > 0.25) {
        setMounted(true);
        setVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  useEffect(() => {
    if (!mounted || !consentAccepted || pushed.current) return;
    pushed.current = true;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error('[AdSense] FloatingBlogAd push failed:', e);
    }
  }, [mounted, consentAccepted]);

  function dismiss() {
    sessionStorage.setItem('floating-ad-dismissed', '1');
    setDismissed(true);
  }

  if (dismissed) return null;

  return (
    <div className={`floating-ad${visible ? ' floating-ad--visible' : ''}`} aria-label="Advertisement">
      <button className="floating-ad-close" onClick={dismiss} aria-label="Close ad">
        ✕
      </button>
      <span className="eyebrow" style={{ fontSize: '0.6rem', marginBottom: '8px', display: 'block' }}>
        Sponsored
      </span>
      {mounted && consentAccepted && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client={siteConfig.adsenseId}
          data-ad-slot={siteConfig.adsenseSlotFloating}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
}
