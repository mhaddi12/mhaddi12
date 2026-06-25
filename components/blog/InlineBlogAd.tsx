'use client';
import { useEffect } from 'react';
import { siteConfig } from '@/lib/data';

export default function InlineBlogAd({ index }: { index: number }) {
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div className="blog-ad-slot">
      <span className="eyebrow" style={{ fontSize: '0.65rem', marginBottom: '10px' }}>Sponsored</span>
      <ins
        key={`blog-ad-${index}`}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={siteConfig.adsenseId}
        data-ad-slot={siteConfig.adsenseSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
