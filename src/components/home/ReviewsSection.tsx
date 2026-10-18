'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, X } from 'lucide-react';
import { REVIEWS_DATA } from '@/data/reviews';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import './ReviewsSection.css';

const GOOGLE_REVIEWS_URL = 'https://maps.google.com/?cid=12848188791482064085';

const GoogleGLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const MOBILE_AUTOPLAY_MQ = '(max-width: 768px)';
const MOBILE_AUTOPLAY_MS = 3000;

export const ReviewsSection: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const pausedRef = useRef(false);
  const lightboxRef = useRef<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  lightboxRef.current = lightboxImg;

  const getStep = () => {
    const root = scrollerRef.current;
    const card = root?.querySelector<HTMLElement>('.review-card');
    const track = root?.querySelector<HTMLElement>('.reviews-track');
    if (!card || !track) return 0;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 20;
    return card.offsetWidth + gap;
  };

  const getMaxOffset = () => {
    const root = scrollerRef.current;
    const track = root?.querySelector<HTMLElement>('.reviews-track');
    if (!root || !track) return 0;
    return Math.max(0, track.scrollWidth - root.clientWidth);
  };

  const scrollCards = (direction: number) => {
    const step = getStep();
    const max = getMaxOffset();
    setOffset((prev) => Math.max(0, Math.min(max, prev + direction * step)));
  };

  useEffect(() => {
    const onResize = () => {
      setOffset((prev) => Math.max(0, Math.min(getMaxOffset(), prev)));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia(MOBILE_AUTOPLAY_MQ);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer = 0;

    const stop = () => {
      if (timer) {
        window.clearInterval(timer);
        timer = 0;
      }
    };

    const tick = () => {
      if (pausedRef.current || lightboxRef.current || document.hidden) return;
      const step = getStep();
      const max = getMaxOffset();
      if (step <= 0 || max <= 0) return;
      setOffset((prev) => {
        const next = prev + step;
        return next > max + 1 ? 0 : Math.min(max, next);
      });
    };

    const start = () => {
      stop();
      if (!mobile.matches || reduced.matches) return;
      timer = window.setInterval(tick, MOBILE_AUTOPLAY_MS);
    };

    start();
    mobile.addEventListener('change', start);
    reduced.addEventListener('change', start);
    document.addEventListener('visibilitychange', start);

    return () => {
      stop();
      mobile.removeEventListener('change', start);
      reduced.removeEventListener('change', start);
      document.removeEventListener('visibilitychange', start);
    };
  }, []);

  return (
    <section id="reviews" className="reviews-section" aria-label="Customer stories and Google reviews">
      <div className="container">
        <SectionHeader
          tag="Google Reviews"
          title="Customer Stories"
          highlightWord="& Feedback"
          description="Verified jumps, real names, and the footage they took home from the 165 FT deck."
        />

        <div className="reviews-score">
          <div className="reviews-score-copy">
            <GoogleGLogo className="reviews-score-g google-g-live" />
            <span className="reviews-score-num">4.9</span>
            <span className="reviews-score-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="reviews-score-meta">2,700+ verified jumpers</span>
          </div>
          <ThemeButton
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="ghost"
            arrow
          >
            Review us
          </ThemeButton>
        </div>

        <div className="reviews-board">
          <button
            type="button"
            className="reviews-nav reviews-nav--prev"
            onClick={() => scrollCards(-1)}
            aria-label="Previous reviews"
          >
            <ChevronLeft size={20} strokeWidth={1.75} />
          </button>

          <div
            className="reviews-scroller"
            ref={scrollerRef}
            onTouchStart={(event) => {
              pausedRef.current = true;
              touchStartX.current = event.touches[0].clientX;
            }}
            onTouchEnd={(event) => {
              const delta = touchStartX.current - event.changedTouches[0].clientX;
              if (delta > 40) scrollCards(1);
              if (delta < -40) scrollCards(-1);
              pausedRef.current = false;
            }}
          >
            <div
              className="reviews-track"
              style={{ transform: `translate3d(${-offset}px, 0, 0)` }}
            >
            {REVIEWS_DATA.map((rev, index) => {
              const isOpen = !!expanded[rev.id];
              const photos = rev.photos?.slice(0, 3) ?? [];
              const extra =
                (rev.photos?.length ?? 0) - photos.length + (rev.overflowCount ?? 0);

              return (
                <article key={rev.id} className="review-card">
                  <div className="review-card-top">
                    <span className="review-card-idx">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="review-card-mark">
                      <span className="review-card-stars" aria-label={`${rev.rating} out of 5`}>
                        {Array.from({ length: rev.rating }).map((_, star) => (
                          <Star key={star} size={12} fill="currentColor" strokeWidth={0} />
                        ))}
                      </span>
                      <GoogleGLogo className="review-card-g" />
                    </span>
                  </div>

                  <p className={`review-card-quote${isOpen ? ' is-open' : ''}`}>
                    {rev.comment}
                  </p>
                  {rev.comment.length > 150 ? (
                    <button
                      type="button"
                      className="review-card-more"
                      onClick={() =>
                        setExpanded((prev) => ({ ...prev, [rev.id]: !prev[rev.id] }))
                      }
                    >
                      {isOpen ? 'Show less' : 'Read full review'}
                    </button>
                  ) : null}

                  {photos.length > 0 ? (
                    <div className="review-card-photos">
                      {photos.map((photoUrl, photoIdx) => {
                        const showBadge = photoIdx === photos.length - 1 && extra > 0;
                        return (
                          <button
                            key={photoUrl}
                            type="button"
                            className="review-card-photo"
                            onClick={() => setLightboxImg(photoUrl)}
                            aria-label={`View photo ${photoIdx + 1} from ${rev.name}`}
                          >
                            <Image
                              src={photoUrl}
                              alt=""
                              width={160}
                              height={100}
                              className="review-card-photo-img"
                            />
                            {showBadge ? (
                              <span className="review-card-photo-more">+{extra}</span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}

                  <footer className="review-card-foot">
                    {rev.avatar ? (
                      <Image
                        src={rev.avatar}
                        alt=""
                        width={36}
                        height={36}
                        className="review-card-avatar"
                      />
                    ) : (
                      <span className="review-card-initials" aria-hidden="true">
                        {getInitials(rev.name)}
                      </span>
                    )}
                    <span className="review-card-who">
                      <span className="review-card-name">{rev.name}</span>
                      <span className="review-card-meta">
                        {rev.date}
                        {rev.activity ? ` · ${rev.activity}` : ''}
                      </span>
                    </span>
                  </footer>
                </article>
              );
            })}
            </div>
          </div>

          <button
            type="button"
            className="reviews-nav reviews-nav--next"
            onClick={() => scrollCards(1)}
            aria-label="Next reviews"
          >
            <ChevronRight size={20} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {lightboxImg ? (
        <div
          className="review-lightbox"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged review photo"
        >
          <button
            type="button"
            className="review-lightbox-close"
            onClick={() => setLightboxImg(null)}
            aria-label="Close enlarged photo"
          >
            <X size={22} strokeWidth={1.75} />
          </button>
          <Image
            src={lightboxImg}
            alt=""
            width={900}
            height={900}
            className="review-lightbox-img"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
};
