import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import { BLOG_POSTS_NEWEST, blogImageSrc, blogNewsPath, formatBlogDate } from '@/data/blogs';
import { ArrowRight, Sparkles } from 'lucide-react';
import '@/components/home/PackagesSection.css';
import './BlogsIndex.css';

export default function BlogsIndex() {
  return (
    <>
      <Navbar />

      <main className="blogs-index">
        <div className="container">
          <SectionHeader
            tag="The Thrill Factory Journal"
            title="Thrill Factory Adventure News"
            highlightWord="and Guides"
            headingLevel="h1"
            description="Park guides, safety notes, and Shivpuri travel briefs from the Thrill Factory desk."
          />

          <div className="blogs-list">
            {BLOG_POSTS_NEWEST.map((post) => (
              <article key={post.slug} className="blogs-card">
                <Link href={blogNewsPath(post.slug)} className="blogs-card-link">
                  {post.image ? (
                    <span className="blogs-card-media">
                      <Image
                        src={blogImageSrc(post.image)}
                        alt={post.title}
                        width={post.imageWidth}
                        height={post.imageHeight}
                        sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 400px"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </span>
                  ) : null}
                  <span className="blogs-card-body">
                    <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <span className="blogs-card-read">
                      Read <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <div className="blogs-cta">
            <div>
              <div className="blogs-cta-title">
                <Sparkles size={20} color="var(--color-primary)" />
                <h3>Ready to Turn Stories into Adrenaline?</h3>
              </div>
              <p>
                Extreme rides, aerial thrills, ground games, VR, and a kids zone — one destination in Shivpuri, Rishikesh.
              </p>
            </div>
            <div className="blogs-cta-actions">
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
    </>
  );
}
