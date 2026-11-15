import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: '8rem 0 5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '0.04em' }}>
          Page not found
        </h1>
        <p>This address is not on the Thrill Factory site.</p>
        <Link href="/">Back to home</Link>
      </main>
      <Footer />
    </>
  );
};
