'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import './BlogIndex.css';

const LANES = [
  { id: 'All', code: 'ALL', label: 'All' },
  { id: 'Safety & Training', code: 'SAF', label: 'Safety' },
  { id: 'Bungee & Freefall', code: 'BNG', label: 'Freefall' },
  { id: 'Rishikesh Travel Guide', code: 'TRV', label: 'Travel' },
  { id: 'Extreme Sports', code: 'XTR', label: 'Extreme' },
  { id: 'Team & Group Adventures', code: 'OFF', label: 'Offsite' },
] as const;

const postIndex = (post: BlogPost) => BLOG_POSTS.findIndex((item) => item.id === post.id);

const laneFor = (category: BlogPost['category']) =>
  LANES.find((lane) => lane.id === category) ?? LANES[0];

export const BlogIndex: React.FC = () => {
  const [lane, setLane] = useState<(typeof LANES)[number]['id']>('All');

  const posts = useMemo(
    () => (lane === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.category === lane)),
    [lane]
  );

  const featured = lane === 'All' ? posts[0] : null;
  const grid = featured ? posts.slice(1) : posts;

  return (
    <section className="blog-index" aria-label="Adventure guides">
      <div className="container">
        <div className="blog-index-head">
          <SectionHeader
            align="left"
            tag="The Thrill Factory Journal"
            title="Adventure"
            highlightWord="Guides"
            description="Rigging notes, freefall physics, and Shivpuri travel briefs written by the jump masters and desk."
          />
        </div>

        <div className="blog-lanes" role="tablist" aria-label="Guide lanes">
          {LANES.map((item, index) => {
            const count =
              item.id === 'All'
                ? BLOG_POSTS.length
                : BLOG_POSTS.filter((post) => post.category === item.id).length;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={lane === item.id}
                className={`blog-lane${lane === item.id ? ' is-on' : ''}`}
                onClick={() => setLane(item.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.label}
                <em>{String(count).padStart(2, '0')}</em>
              </button>
            );
          })}
        </div>

        {featured ? <FeaturedGuide post={featured} /> : null}

        {grid.length > 0 ? (
          <div className="blog-grid">
            {grid.map((post) => (
              <GuideCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="blog-empty">No guides in this lane yet.</p>
        )}

        <div className="blog-pass blog-frame">
          <div>
            <p className="blog-kicker">
              <span className="blog-node" aria-hidden="true" />
              From the page to the platform
            </p>
            <h3>Turn the guide into a Shivpuri slot.</h3>
          </div>
          <div className="blog-pass-actions">
            <ThemeButton href="/activities" variant="ghost" arrow>
              Explore Activities
            </ThemeButton>
            <ThemeButton href="/combos" variant="ghost">
              Save More Combos
            </ThemeButton>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedGuide: React.FC<{ post: BlogPost }> = ({ post }) => {
  const lane = laneFor(post.category);
  return (
    <article className="blog-feature blog-frame">
      <Link href={`/blogs/${post.slug}`} className="blog-feature-media">
        <Image src={post.image} alt="" width={960} height={640} priority />
        <span>
          {String(postIndex(post) + 1).padStart(2, '0')} / {String(BLOG_POSTS.length).padStart(2, '0')}
        </span>
      </Link>
      <div className="blog-feature-copy">
        <p className="blog-kicker">
          <span className="blog-node" aria-hidden="true" />
          {lane.code} · Lead guide
        </p>
        <h2>
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <p className="blog-meta">
          <strong>{post.author}</strong>
          {post.date}
          <span>{post.readTime}</span>
        </p>
        <ThemeButton href={`/blogs/${post.slug}`} variant="ghost" arrow>
          Read Guide
        </ThemeButton>
      </div>
    </article>
  );
};

const GuideCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const lane = laneFor(post.category);
  return (
    <article className="blog-card">
      <Link href={`/blogs/${post.slug}`} className="blog-card-media">
        <Image src={post.image} alt="" width={640} height={427} />
        <span>{String(postIndex(post) + 1).padStart(2, '0')}</span>
      </Link>
      <div className="blog-card-body">
        <p className="blog-kicker">
          <span className="blog-node" aria-hidden="true" />
          {lane.code}
        </p>
        <h3>
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-meta">
          {post.date}
          <span>{post.readTime}</span>
        </p>
      </div>
    </article>
  );
};
