'use client';
import { useEffect } from 'react';
import { siteConfig } from '@/lib/data';

export default function AdSlot() {
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <section id="ads">
      <div className="wrap">
        <div className="ad-slot">
          <div>
            <span className="eyebrow">Sponsored</span>
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client={siteConfig.adsenseId}
              data-ad-slot={siteConfig.adsenseSlot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
