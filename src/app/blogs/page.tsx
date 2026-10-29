'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Sparkles,
  Tag,
  CheckCircle2
} from 'lucide-react';
import '@/components/home/PackagesSection.css';

export default function BlogsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Safety & Training',
    'Bungee & Freefall',
    'Rishikesh Travel Guide',
    'Extreme Sports',
    'Team & Group Adventures'
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-4xl)', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeader
            tag="The Thrill Factory Journal"
            title="Adventure Guides &"
            highlightWord="Rishikesh Stories"
            description="Expert rigging insights, freefall physics, traveler guides, and safety analyses written directly by our certified jump masters and mountain coordinators."
          />

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-xs)',
              marginBottom: 'var(--space-3xl)',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Hero Article (when 'All' is selected) */}
          {selectedCategory === 'All' && featuredPost && (
            <div
              style={{
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                marginBottom: 'var(--space-4xl)',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'stretch'
              }}
            >
              <div style={{ position: 'relative', minHeight: '320px' }}>
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(255, 77, 0, 0.95)',
                    color: '#FFFFFF',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  Featured Guide
                </div>
              </div>

              <div
                style={{
                  padding: 'clamp(var(--space-xl), 4vw, var(--space-3xl))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: '#94A3B8', marginBottom: '10px' }}>
                  <span style={{ color: '#FF6B00', fontWeight: 600 }}>{featuredPost.category}</span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} /> {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {featuredPost.readTime}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.25,
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    style={{ color: '#FFFFFF', textDecoration: 'none' }}
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '14px', color: '#CBD5E1', lineHeight: 1.6, marginBottom: 'var(--space-xl)' }}>
                  {featuredPost.excerpt}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 77, 0, 0.2)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '13px'
                      }}
                    >
                      TF
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>{featuredPost.author}</div>
                      <div style={{ fontSize: '11px', color: '#94A3B8' }}>{featuredPost.authorRole}</div>
                    </div>
                  </div>

                  <ThemeButton
                    href={`/blogs/${featuredPost.slug}`}
                    size="sm"
                    variant="solid"
                    tone="on-dark"
                    arrow
                  >
                    Read Guide
                  </ThemeButton>
                </div>
              </div>
            </div>
          )}

          {/* Blog Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--space-xl)',
              marginBottom: 'var(--space-4xl)'
            }}
          >
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Image */}
                <div style={{ height: '210px', position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: 'var(--color-primary)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '11px',
                      fontWeight: 700,
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {post.category}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '11.5px',
                      color: 'var(--color-text-muted)',
                      marginBottom: '8px'
                    }}
                  >
                    <Calendar size={12} /> {post.date}
                    <span>•</span>
                    <Clock size={12} /> {post.readTime}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      lineHeight: 1.35,
                      marginBottom: '10px'
                    }}
                  >
                    <Link
                      href={`/blogs/${post.slug}`}
                      style={{ color: 'var(--color-text-primary)', textDecoration: 'none' }}
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.5,
                      marginBottom: 'var(--space-lg)',
                      flex: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: 'var(--space-md)',
                      borderTop: '1px solid var(--color-border-subtle)'
                    }}
                  >
                    <span style={{ fontSize: '11.5px', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                      By {post.author}
                    </span>

                    <Link
                      href={`/blogs/${post.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        color: 'var(--color-primary)',
                        textDecoration: 'none'
                      }}
                    >
                      Read Guide <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Call to Action Banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255, 77, 0, 0.05) 0%, rgba(255, 77, 0, 0.12) 100%)',
              border: '1px solid rgba(255, 77, 0, 0.25)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-3xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 'var(--space-xl)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Sparkles size={20} color="var(--color-primary)" />
                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)' }}>
                  Ready to Turn Stories into Adrenaline?
                </h3>
              </div>
              <p style={{ fontSize: '14px', maxWidth: '640px', color: 'var(--color-text-secondary)', margin: 0 }}>
                Experience India’s premier 165 FT Bungee Jump, 180 FT Reverse Bungee, and curated adventure combos in Shivpuri, Rishikesh.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <ThemeButton href="/activities" variant="ghost" arrow>
                Explore Activities
              </ThemeButton>
              <ThemeButton href="/combos" variant="ghost">
                Save More Combos
              </ThemeButton>
            </div>
          </div>
        </div>
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
