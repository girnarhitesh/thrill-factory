'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Activity } from '@/types';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { ThemeButton } from '@/components/common/ThemeButton';
import './ActivityCard.css';

interface ActivityCardProps {
  activity: Activity;
  index?: string;
  onBook: (activityTitle: string) => void;
  onDetails?: (activity: Activity) => void;
}

export const activityFacts = (activity: Activity) => {
  const facts: { label: string; value: string }[] = [];
  if (activity.ageLimit?.trim()) facts.push({ label: 'Age', value: activity.ageLimit.trim() });
  if (activity.weightLimit?.trim()) facts.push({ label: 'Weight', value: activity.weightLimit.trim() });
  if (activity.duration?.trim()) facts.push({ label: 'Time', value: activity.duration.trim() });
  return facts;
};

const cardParagraphs = (activity: Activity) =>
  (activity.paragraphs?.filter(Boolean).join(' ') || activity.fullDesc || '').trim();

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  index,
  onDetails,
}) => {
  const facts = activityFacts(activity);
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
          alt={activity.title}
          width={400}
          height={240}
          sizes="(max-width: 768px) 100vw, 400px"
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

        {index ? (
          <span className="ride-card-media-top">
            <span className="ride-card-index">{index}</span>
          </span>
        ) : null}
      </button>

      <div className="ride-card-body">
        <h3 className="ride-card-title">{activity.title}</h3>

        {previewCopy ? <p className="ride-card-desc">{previewCopy}</p> : null}

        {facts.length > 0 ? (
          <dl className="ride-card-facts">
            {facts.map((fact) => (
              <div className="ride-card-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="ride-card-foot">
          {activity.comingSoon ? (
            <div className="ride-card-price">
              <span className="ride-card-soon">Coming Soon</span>
            </div>
          ) : (
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
          )}

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
            {activity.comingSoon ? null : (
              <ThemeButton size="sm" variant="solid" arrow onClick={openBookingFrame}>
                Book
              </ThemeButton>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
