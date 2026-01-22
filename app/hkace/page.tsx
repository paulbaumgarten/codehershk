import { redirect } from 'next/navigation';

export default async function RedirectToYMain() {
  // Track the visit
  try {
    await fetch('https://app.codehershk.org/hkace', {
      method: 'POST',
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
    // Silently fail - still redirect even if API fails
    console.error('Analytics error:', error);
  }
  
  redirect('https://codehershk.org');
}
