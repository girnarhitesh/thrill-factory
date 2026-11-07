'use client';

import React from 'react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { ThemeButton } from '@/components/common/ThemeButton';
import './BookingCtaBanner.css';

const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
  SITE_CONFIG.whatsapp.defaultMessage
)}`;

const SHOTS = [
  { src: '/images/HeroBackground.jpg', alt: '165 FT bungee leap', width: 6000, height: 4000 },
  { src: '/images/HeroBackground2.webp', alt: 'Giant swing over the canyon', width: 1400, height: 933 },
  { src: '/images/platform-view.jpg', alt: 'Shivpuri adventure platform', width: 1600, height: 1066 },
  { src: '/images/journey-bungee-leap.webp', alt: 'Freefall from the tower', width: 658, height: 1024 },
  { src: '/images/HeroBackground4.webp', alt: 'Canyon leap at Thrill Factory', width: 1400, height: 1050 },
  { src: '/images/journey-walk-platform.webp', alt: 'Walking the 165 FT deck', width: 1024, height: 768 },
] as const;

export const BookingCtaBanner: React.FC = () => {
  return (
    <section className="cta-banner" aria-label="Book your adventure">
      <div className="container">
        <div className="cta-board booking-cta-content">
          <div className="cta-copy">
            <span className="cta-stamp">
              <span className="cta-stamp-node" aria-hidden="true" />
              Lock Your Slot
            </span>
            <h2 className="cta-title">
              Ready for a full day <span>in Shivpuri?</span>
            </h2>
            <p className="cta-lead">
              Extreme rides, aerial thrills, ground games, VR, and a kids zone — book direct and the desk confirms your slot.
            </p>
            <div className="cta-actions">
              <ThemeButton variant="solid" arrow onClick={openBookingFrame}>
                Book Your Adventure
              </ThemeButton>
              <ThemeButton
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                Talk to the Desk
              </ThemeButton>
            </div>
          </div>

          <div className="cta-mosaic" aria-hidden="true">
            {SHOTS.map((shot, index) => (
              <figure key={shot.src} className={`cta-shot cta-shot--${index + 1}`}>
                <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
