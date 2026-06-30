'use client';
import { useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/data';
import { useConsent } from '@/hooks/useConsent';

export default function InlineBlogAd({ index }: { index: number }) {
  const consentAccepted = useConsent();
  const pushed = useRef(false);

  useEffect(() => {
    if (!consentAccepted || pushed.current) return;
    pushed.current = true;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error(`[AdSense] InlineBlogAd[${index}] push failed:`, e);
    }
  }, [consentAccepted, index]);

  if (!consentAccepted) return null;

  return (
    <div className="blog-ad-slot">
      <span className="eyebrow" style={{ fontSize: '0.65rem', marginBottom: '10px' }}>Sponsored</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minHeight: '90px' }}
        data-ad-client={siteConfig.adsenseId}
        data-ad-slot={siteConfig.adsenseSlotInline}
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  );
}
