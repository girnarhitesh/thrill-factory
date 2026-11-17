'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ActivitiesRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/collections');
  }, [router]);

  return (
    <main>
      <p>
        <a href="/collections">All activities</a>
      </p>
    </main>
  );
}
