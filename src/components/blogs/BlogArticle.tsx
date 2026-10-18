'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeButton } from '@/components/common/ThemeButton';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import './BlogArticle.css';

const activityHref = (slug?: string) => (slug === 'corporate' ? '/corporate' : '/activities');

export const BlogArticle: React.FC<{ post: BlogPost }> = ({ post }) => {
  const index = BLOG_POSTS.findIndex((item) => item.id === post.id);
  const sameLane = BLOG_POSTS.filter((item) => item.id !== post.id && item.category === post.category);
  const otherLanes = BLOG_POSTS.filter((item) => item.id !== post.id && item.category !== post.category);
  const related = [...sameLane, ...otherLanes].slice(0, 3);

  return (
    <article className="blog-article">
      <div className="container">
        <nav className="blog-article-crumb" aria-label="Guide path">
          <Link href="/blogs">Journal</Link>
          <span>{post.category}</span>
        </nav>

        <header className="blog-article-head">
          <p className="blog-article-kicker">
            <span className="blog-article-node" aria-hidden="true" />
            {String(index + 1).padStart(2, '0')} / {String(BLOG_POSTS.length).padStart(2, '0')}
            <em>{post.readTime}</em>
          </p>
          <h1>{post.title}</h1>
          <p className="blog-article-byline">
            <strong>{post.author}</strong>
            <span>{post.authorRole}</span>
            <span>{post.date}</span>
          </p>
        </header>

        <div className="blog-article-media blog-article-frame">
          <Image src={post.image} alt="" width={1400} height={760} priority />
        </div>

        <div className="blog-article-layout">
          <div className="blog-article-body">
            {post.keyTakeaways.length > 0 ? (
              <section className="blog-article-takes" aria-label="Essential takeaways">
                <p className="blog-article-kicker">
                  <span className="blog-article-node" aria-hidden="true" />
                  Takeaways
                </p>
                <ol className="blog-article-frame">
                  {post.keyTakeaways.map((point, pointIndex) => (
                    <li key={point}>
                      <span>{String(pointIndex + 1).padStart(2, '0')}</span>
                      {point}
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            <div className="blog-article-sections">
              {post.content.map((block, blockIndex) => {
                if (block.type === 'heading') {
                  const Tag = block.level === 2 ? 'h2' : 'h3';
                  return <Tag key={blockIndex}>{block.text}</Tag>;
                }
                if (block.type === 'list') {
                  return (
                    <ul key={blockIndex}>
                      {block.items.map((item, itemIndex) => (
                        <li key={`${blockIndex}-${itemIndex}`}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={blockIndex}>{block.text}</p>;
              })}
            </div>
          </div>

          <aside className="blog-article-side">
            <div className="blog-article-cta blog-article-frame">
              <p className="blog-article-kicker">
                <span className="blog-article-node" aria-hidden="true" />
                On the ground
              </p>
              <h2>{post.relatedActivityTitle ?? 'Book the jump'}</h2>
              <p>
                {post.relatedActivitySlug === 'corporate'
                  ? 'Put the team on a Shivpuri brief, with a fixed program and a desk reply.'
                  : 'Pre-book a slot for gear fitting and a fixed jump time at Shivpuri.'}
              </p>
              <ThemeButton href={activityHref(post.relatedActivitySlug)} variant="ghost" arrow>
                {post.relatedActivitySlug === 'corporate' ? 'Plan the offsite' : 'See activities'}
              </ThemeButton>
            </div>

            {post.tags.length > 0 ? (
              <ul className="blog-article-tags" aria-label="Tags">
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
          </aside>
        </div>

        <section className="blog-article-more" aria-label="More guides">
          <p className="blog-article-kicker">
            <span className="blog-article-node" aria-hidden="true" />
            More from the journal
          </p>
          <div className="blog-article-related">
            {related.map((item) => {
              const itemIndex = BLOG_POSTS.findIndex((entry) => entry.id === item.id);
              return (
                <Link key={item.id} href={`/blogs/${item.slug}`} className="blog-article-rel blog-article-frame">
                  <span className="blog-article-rel-media">
                    <Image src={item.image} alt="" width={640} height={427} />
                    <span className="blog-article-rel-idx">{String(itemIndex + 1).padStart(2, '0')}</span>
                  </span>
                  <span className="blog-article-rel-copy">
                    <strong>{item.category}</strong>
                    <em>{item.title}</em>
                  </span>
                </Link>
              );
            })}
          </div>
          <ThemeButton href="/blogs" variant="ghost">
            Back to all guides
          </ThemeButton>
        </section>
      </div>
    </article>
  );
};
