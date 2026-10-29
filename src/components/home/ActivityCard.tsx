'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Activity } from '@/types';
import { ThemeButton } from '@/components/common/ThemeButton';
import './ActivityCard.css';

interface ActivityCardProps {
  activity: Activity;
  index?: string;
  onBook: (activityTitle: string) => void;
  onDetails?: (activity: Activity) => void;
}

const compactAge = (value?: string) => {
  if (!value) return null;
  const match = value.match(/\d+/);
  return match ? `${match[0]}+` : value;
};

const compactDuration = (value?: string) => {
  if (!value) return null;
  return value.replace(/\s*mins?/i, ' MIN').replace(/\s*hours?/i, ' HR');
};

const compactHeight = (activity: Activity) => {
  if (activity.height) {
    return activity.height.replace(/feet/i, 'FT').replace(/\s+/g, ' ').trim();
  }
  return activity.tag ?? null;
};

const rideSpecs = (activity: Activity) => {
  const specs = [compactHeight(activity), compactDuration(activity.duration), compactAge(activity.ageLimit)].filter(
    Boolean
  ) as string[];

  if (specs.length < 3 && activity.includesDSLRVideo) {
    specs.push('4K VIDEO');
  }

  return specs.slice(0, 3);
};

const cardParagraphs = (activity: Activity) =>
  (activity.paragraphs?.filter(Boolean).join(' ') || activity.fullDesc || '').trim();

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  index,
  onBook,
  onDetails,
}) => {
  const specs = rideSpecs(activity);
  const heightStamp = compactHeight(activity);
  const category = activity.category?.replace(/-/g, ' ');
  const previewCopy = cardParagraphs(activity);
  const cardRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = previewRef.current;
    if (!card || !video || !activity.videoUrl) return;

    const startPreview = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!video.getAttribute('src')) video.src = activity.videoUrl!;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.loop = true;
      void video.play().then(() => card.classList.add('is-previewing')).catch(() => {
        card.classList.remove('is-previewing');
      });
    };

    const stopPreview = () => {
      video.pause();
      video.currentTime = 0;
      card.classList.remove('is-previewing');
    };

    const onFocusOut = (event: FocusEvent) => {
      if (!card.contains(event.relatedTarget as Node | null)) stopPreview();
    };

    card.addEventListener('mouseenter', startPreview);
    card.addEventListener('mouseleave', stopPreview);
    card.addEventListener('focusin', startPreview);
    card.addEventListener('focusout', onFocusOut);

    return () => {
      card.removeEventListener('mouseenter', startPreview);
      card.removeEventListener('mouseleave', stopPreview);
      card.removeEventListener('focusin', startPreview);
      card.removeEventListener('focusout', onFocusOut);
      stopPreview();
    };
  }, [activity.videoUrl]);

  return (
    <article ref={cardRef} className="ride-card">
      <button
        type="button"
        className="ride-card-media"
        onClick={() => onDetails?.(activity)}
        aria-label={`View details for ${activity.title}`}
      >
        <Image
          src={activity.image}
          alt=""
          width={400}
          height={240}
          className="ride-card-img"
        />
        {activity.videoUrl ? (
          <video
            ref={previewRef}
            className="ride-card-video"
            muted
            loop
            playsInline
            preload="none"
          />
        ) : null}
        <span className="ride-card-scrim" aria-hidden="true" />

        <span className="ride-card-media-top">
          {index ? <span className="ride-card-index">{index}</span> : null}
          {category ? <span className="ride-card-cat">{category}</span> : null}
        </span>

        {heightStamp ? <span className="ride-card-height">{heightStamp}</span> : null}
      </button>

      <div className="ride-card-body">
        <h3 className="ride-card-title">{activity.title}</h3>

        {previewCopy ? <p className="ride-card-desc">{previewCopy}</p> : null}

        {specs.length > 0 ? (
          <div className="ride-card-specs" aria-label="Ride facts">
            {specs.map((spec) => (
              <span className="ride-card-spec" key={spec}>
                {spec}
              </span>
            ))}
          </div>
        ) : null}

        <div className="ride-card-foot">
          <div className="ride-card-price">
            {activity.originalPrice ? (
              <span className="ride-card-price-was">
                ₹{activity.originalPrice.toLocaleString('en-IN')}
              </span>
            ) : null}
            <span className="ride-card-price-now">
              ₹{activity.price.toLocaleString('en-IN')}
            </span>
            <span className="ride-card-price-unit">per person</span>
          </div>

          <div className="ride-card-actions">
            {onDetails ? (
              <button
                type="button"
                className="ride-card-details"
                onClick={() => onDetails(activity)}
              >
                Details
              </button>
            ) : null}
            <ThemeButton size="sm" variant="ghost" arrow onClick={() => onBook(activity.title)}>
              Book
            </ThemeButton>
          </div>
        </div>
      </div>
    </article>
  );
};
