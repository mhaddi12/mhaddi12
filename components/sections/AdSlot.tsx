'use client';
import { useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/data';
import { useConsent } from '@/hooks/useConsent';

export default function AdSlot() {
  const consentAccepted = useConsent();
  const pushed = useRef(false);

  useEffect(() => {
    if (!consentAccepted || pushed.current) return;
    pushed.current = true;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error('[AdSense] AdSlot push failed:', e);
    }
  }, [consentAccepted]);

  if (!consentAccepted) return null;

  return (
    <section id="ads">
      <div className="wrap">
        <div className="ad-slot">
          <span className="eyebrow" style={{ marginBottom: '12px' }}>Sponsored</span>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '90px' }}
            data-ad-client={siteConfig.adsenseId}
            data-ad-slot={siteConfig.adsenseSlotMain}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </section>
  );
}
