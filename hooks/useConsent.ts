'use client';
import { useEffect, useState } from 'react';

export function useConsent(): boolean {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(localStorage.getItem('cookie-consent') === 'accepted');

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') setAccepted(e.newValue === 'accepted');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return accepted;
}
