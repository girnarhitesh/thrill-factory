'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ThemeButton } from '@/components/common/ThemeButton';
import {
  CatalogActivity,
  catalogImageUrl,
  catalogPreviewVideo,
  catalogSavePercent,
  formatCatalogPrice,
} from '@/data/catalogActivities';
import './ActivityCard.css';
import './CatalogActivityModal.css';

interface CatalogActivityCardProps {
  activity: CatalogActivity;
  index?: string;
  onViewMore: (activity: CatalogActivity) => void;
}

export const CatalogActivityCard: React.FC<CatalogActivityCardProps> = ({
  activity,
  index,
  onViewMore,
}) => {
  const image = activity.images[0];
  const category = activity.categories[0];
  const savePercent = catalogSavePercent(activity.price, activity.compare_at_price);
  const videoUrl = catalogPreviewVideo(activity.handle);
  const cardRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = previewRef.current;
    if (!card || !video || !videoUrl) return;

    const startPreview = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!video.getAttribute('src')) video.src = videoUrl;
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
  }, [videoUrl]);

  return (
    <article ref={cardRef} className="ride-card">
      <button
        type="button"
        className="ride-card-media"
        onClick={() => onViewMore(activity)}
        aria-label={`View more about ${activity.title}`}
      >
        {image ? (
          <Image
            src={catalogImageUrl(image.local_path)}
            alt={image.alt || activity.title}
            width={image.width || 400}
            height={image.height || 240}
            sizes="(max-width: 768px) 100vw, 400px"
            className="ride-card-img"
          />
        ) : null}
        {videoUrl ? (
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
      </button>

      <div className="ride-card-body">
        <h3 className="ride-card-title">{activity.title}</h3>

        {activity.description_text ? (
          <p className="ride-card-desc catalog-card-blurb">{activity.description_text}</p>
        ) : null}

        <div className="ride-card-foot">
          <div className="ride-card-price">
            {savePercent !== null ? (
              <span className="catalog-price-was">
                <span className="ride-card-price-was">{formatCatalogPrice(activity.compare_at_price)}</span>
                <span className="catalog-save-badge">Save {savePercent}%</span>
              </span>
            ) : null}
            <span className="ride-card-price-now">{formatCatalogPrice(activity.price)}</span>
          </div>

          <div className="ride-card-actions">
            <ThemeButton size="sm" variant="solid" arrow onClick={() => onViewMore(activity)}>
              View More
            </ThemeButton>
          </div>
        </div>
      </div>
    </article>
  );
};
