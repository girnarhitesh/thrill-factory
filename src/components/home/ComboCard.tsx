'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PackageCombo } from '@/data/packages';
import { ThemeButton } from '@/components/common/ThemeButton';
import './ActivityCard.css';

interface ComboCardProps {
  combo: PackageCombo;
  onBook: (comboTitle: string) => void;
  onDetails?: (combo: PackageCombo) => void;
}

const shortRide = (name: string) =>
  name.replace(/\s+in Rishikesh/gi, '').replace(/\s*\(([^)]*)\)/g, ' · $1').trim();

const isRideName = (name: string) =>
  name.length <= 42 &&
  !/^(Includes|Good |Suitable|Works |Strong |Family |Kids |Friends |Couple |School |Corporate )/i.test(
    name
  );

export const ComboCard: React.FC<ComboCardProps> = ({ combo, onBook, onDetails }) => {
  const cardRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const rideNames = combo.activitiesIncluded.filter(isRideName);
  const rideCount = rideNames.length;
  const rides = rideNames.slice(0, 3);
  const extraCount = Math.max(0, rideNames.length - rides.length);
  const savings =
    combo.originalPrice && combo.originalPrice > combo.price
      ? combo.originalPrice - combo.price
      : 0;
  const stamp = combo.popular ? 'Pick' : 'Combo';
  const photoNote = savings
    ? `Save ₹${savings.toLocaleString('en-IN')}`
    : combo.badge ?? `${rideCount} rides`;

  useEffect(() => {
    const card = cardRef.current;
    const video = previewRef.current;
    if (!card || !video || !combo.videoUrl) return;

    const startPreview = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!video.getAttribute('src')) video.src = combo.videoUrl!;
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
  }, [combo.videoUrl]);

  return (
    <article
      ref={cardRef}
      className={`ride-card ride-card--combo${combo.popular ? ' is-popular' : ''}`}
    >
      <button
        type="button"
        className="ride-card-media"
        onClick={() => onDetails?.(combo)}
        aria-label={`View details for ${combo.title}`}
      >
        <Image
          src={combo.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="ride-card-img"
        />
        {combo.videoUrl ? (
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
          <span className="ride-card-index">
            {String(rideCount).padStart(2, '0')}
            <span className="ride-card-index-unit"> rides</span>
          </span>
          <span className="ride-card-cat">{stamp}</span>
        </span>

        <span className="ride-card-height">{photoNote}</span>
      </button>

      <div className="ride-card-body">
        <h3 className="ride-card-title">{combo.title}</h3>

        {combo.cardDesc || combo.formula ? (
          <p className="ride-card-desc" title={combo.cardDesc || combo.formula}>
            {combo.cardDesc || combo.formula}
          </p>
        ) : null}

        <ul className="combo-card-rides" aria-label="Included rides">
          {rides.map((ride) => (
            <li key={ride}>
              <span className="combo-card-node" aria-hidden="true" />
              <span>{shortRide(ride)}</span>
            </li>
          ))}
          {extraCount > 0 ? (
            <li className="combo-card-more">
              +{extraCount} more {extraCount === 1 ? 'ride' : 'rides'}
            </li>
          ) : null}
        </ul>

        <div className="ride-card-foot">
          <div className="ride-card-price">
            {combo.originalPrice ? (
              <span className="ride-card-price-was">
                ₹{combo.originalPrice.toLocaleString('en-IN')}
              </span>
            ) : null}
            <span className="ride-card-price-now">
              ₹{combo.price.toLocaleString('en-IN')}
            </span>
            <span className="ride-card-price-unit">per combo</span>
          </div>

          <div className="ride-card-actions">
            {onDetails ? (
              <button
                type="button"
                className="ride-card-details"
                onClick={() => onDetails(combo)}
              >
                Details
              </button>
            ) : null}
            <ThemeButton size="sm" variant="ghost" arrow onClick={() => onBook(combo.title)}>
              Book
            </ThemeButton>
          </div>
        </div>
      </div>
    </article>
  );
};
