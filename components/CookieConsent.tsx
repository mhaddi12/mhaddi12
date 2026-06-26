'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

export default function CookieConsent({ adsenseId }: { adsenseId: string }) {
  const [status, setStatus] = useState<'accepted' | 'declined' | 'pending' | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent');
    if (saved === 'accepted' || saved === 'declined') {
      setStatus(saved);
    } else {
      setStatus('pending');
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setStatus('accepted');
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setStatus('declined');
  }

  return (
    <>
      {status === 'accepted' && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}

      {status === 'pending' && (
        <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
          <div className="cookie-banner__inner">
            <div className="cookie-banner__text">
              <p>
                This site uses cookies from Google AdSense to show personalised ads.
                See our{' '}
                <Link href="/privacy-policy" className="cookie-banner__link">
                  Privacy Policy
                </Link>{' '}
                for details.
              </p>
            </div>
            <div className="cookie-banner__actions">
              <button className="cookie-banner__decline" onClick={decline}>
                Decline
              </button>
              <button className="cookie-banner__accept" onClick={accept}>
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
