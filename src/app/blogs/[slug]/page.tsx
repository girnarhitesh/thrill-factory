'use client';

import React, { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { ThemeButton } from '@/components/common/ThemeButton';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import { JsonLd } from '@/components/seo/JsonLd';
import { blogPostingSchema } from '@/seo/schema';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  CheckCircle2,
  Tag,
  Share2,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import '@/components/home/PackagesSection.css';

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = blogPostingSchema(post);

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema} />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)', backgroundColor: '#FFFFFF' }}>
        <article className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12.5px',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-xl)'
            }}
          >
            <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
              Journal
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{post.category}</span>
          </nav>

          {/* Header */}
          <header style={{ marginBottom: 'var(--space-2xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span className="badge badge-primary">{post.category}</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={13} /> {post.date}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={13} /> {post.readTime}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
                fontWeight: 900,
                color: 'var(--color-text-primary)',
                lineHeight: 1.2,
                marginBottom: 'var(--space-lg)',
                letterSpacing: '-0.02em'
              }}
            >
              {post.title}
            </h1>

            {/* Author Byline */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingBottom: 'var(--space-lg)',
                borderBottom: '1px solid var(--color-border)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 77, 0, 0.12)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '14px'
                }}
              >
                TF
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--color-text-primary)' }}>
                  {post.author}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  {post.authorRole} • The Shivpuri Thrill Factory
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div
            style={{
              height: 'clamp(260px, 45vw, 440px)',
              position: 'relative',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              marginBottom: 'var(--space-2xl)',
              boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)'
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Key Takeaways Callout */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div
              style={{
                backgroundColor: 'rgba(255, 77, 0, 0.04)',
                border: '1px solid rgba(255, 77, 0, 0.25)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                marginBottom: 'var(--space-2xl)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Sparkles size={18} color="var(--color-primary)" />
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Essential Takeaways
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {post.keyTakeaways.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Structured Body */}
          <div style={{ lineHeight: 1.75, fontSize: '16px', color: '#334155', marginBottom: 'var(--space-3xl)' }}>
            {post.content.map((sec, idx) => (
              <section key={idx} style={{ marginBottom: 'var(--space-2xl)' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-md)',
                    marginTop: 'var(--space-lg)'
                  }}
                >
                  {sec.heading}
                </h2>
                <p style={{ color: '#475569', fontSize: '15.5px', lineHeight: 1.8 }}>
                  {sec.text}
                </p>
              </section>
            ))}
          </div>

          {/* In-Article Booking Callout */}
          <div
            style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              marginBottom: 'var(--space-3xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 'var(--space-lg)'
            }}
          >
            <div>
              <span style={{ fontSize: '11px', color: 'var(--color-primary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em' }}>
                Experience It In Person
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: '4px 0 6px 0' }}>
                Ready to Experience Thrill Factory in Shivpuri?
              </h3>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0, maxWidth: '520px' }}>
                Pre-book your slot online to receive guaranteed jump timings, safety gear fittings, and direct park rates.
              </p>
            </div>

            <ThemeButton href="/activities" variant="solid" tone="on-dark" arrow>
              Book Your Adventure
            </ThemeButton>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: 'var(--space-3xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--color-border)' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 600 }}>Tags:</span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '11.5px',
                  backgroundColor: '#F1F5F9',
                  color: 'var(--color-text-secondary)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 500
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Articles */}
          <div style={{ marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-2xl)', borderTop: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 'var(--space-xl)' }}>
              More from the Adventure Journal
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 'var(--space-lg)'
              }}
            >
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blogs/${rel.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      backgroundColor: '#FFFFFF',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                  >
                    <div style={{ height: '140px', position: 'relative' }}>
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: 'var(--space-md)' }}>
                      <span style={{ fontSize: '10.5px', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                        {rel.category}
                      </span>
                      <h4
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 700,
                          color: 'var(--color-text-primary)',
                          lineHeight: 1.4,
                          margin: '4px 0 0 0',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {rel.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
              <ThemeButton href="/blogs" size="sm" variant="ghost">
                <ArrowLeft size={14} /> Back to All Articles
              </ThemeButton>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppFloating />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
