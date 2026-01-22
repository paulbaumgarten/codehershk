// app/redirect/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToMain() {
  const router = useRouter();

  useEffect(() => {
    const trackAndRedirect = async () => {
      try {
        await fetch('https://app.codehershk.org/hkace', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event: 'page_redirect',
            page: '/redirect',
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error('Analytics error:', error);
      } finally {
        // Always redirect, even if API fails
        router.push('https://codehershk.org');
      }
    };

    trackAndRedirect();
  }, [router]);

}