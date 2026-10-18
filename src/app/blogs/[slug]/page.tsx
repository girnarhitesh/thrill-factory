'use client';

import React, { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { BlogArticle } from '@/components/blogs/BlogArticle';
import { BLOG_POSTS } from '@/data/blogs';

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main>
        <BlogArticle post={post} />
      </main>
      <Footer />
      <WhatsAppFloating />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
