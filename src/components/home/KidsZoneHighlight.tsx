'use client';

import React from 'react';
import { KIDS_ZONE_DATA } from '@/data/kidsZone';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import './KidsZoneHighlight.css';

interface KidsZoneHighlightProps {
  onBook?: (activityTitle: string) => void;
}

const SHOWCASE_IDS = [
  'soft-play-zone',
  'ball-pool',
  'hoverboard-ride',
  'kids-trampoline',
  'car-ride-kids',
  'scooter-ride-kids',
];

const SHOWCASE = SHOWCASE_IDS.map(
  (id) => KIDS_ZONE_DATA.find((item) => item.id === id)!
);

export const KidsZoneHighlight: React.FC<KidsZoneHighlightProps> = () => {
  const [feature, ...plays] = SHOWCASE;
  const rail = plays.slice(0, 2);
  const strip = plays.slice(2);

  return (
    <section id="kids-zone" className="kids-play" aria-label="Kids Zone playground">
      <div className="container">
        <div className="kids-arena-copy">
          <SectionHeader
            align="left"
            tag="Family adventure"
            title="Kids Zone"
            highlightWord="Playground"
            // description="A supervised park of its own — soft play, rides, and trampolines from ₹100, inside the same Shivpuri destination."
          />
        </div>

        <div className="kids-arena-board kids-play-stage">
          <a className="kids-play-feature" href="/kids-zone">
            <img src={feature.image} alt={feature.title} width={960} height={720} />
            <span className="kids-play-scrim" aria-hidden="true" />
            <span className="kids-play-caption">
              <span className="kids-play-index">01</span>
              <span className="kids-play-name">{feature.title}</span>
              <span className="kids-play-meta">
                {feature.ageGroup}
                <span>₹{feature.price}</span>
              </span>
            </span>
          </a>

          <div className="kids-play-rail">
            {rail.map((item, index) => (
              <a className="kids-play-tile" href="/kids-zone" key={item.id}>
                <img src={item.image} alt={item.title} width={480} height={360} />
                <span className="kids-play-scrim" aria-hidden="true" />
                <span className="kids-play-caption">
                  <span className="kids-play-index">{String(index + 2).padStart(2, '0')}</span>
                  <span className="kids-play-name">{item.title}</span>
                  <span className="kids-play-meta">
                    {item.ageGroup}
                    <span>₹{item.price}</span>
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="kids-play-strip">
            {strip.map((item, index) => (
              <a className="kids-play-tile" href="/kids-zone" key={item.id}>
                <img src={item.image} alt={item.title} width={640} height={420} />
                <span className="kids-play-scrim" aria-hidden="true" />
                <span className="kids-play-caption">
                  <span className="kids-play-index">{String(index + 4).padStart(2, '0')}</span>
                  <span className="kids-play-name">{item.title}</span>
                  <span className="kids-play-meta">
                    {item.ageGroup}
                    <span>₹{item.price}</span>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="kids-play-foot">
          <p>Cushioned padding, enclosed bays, and certified attendants on every session.</p>
          <div className="kids-play-actions">
            <ThemeButton href="/kids-zone" variant="ghost" arrow>
              Explore Kids Zone
            </ThemeButton>
            <ThemeButton variant="solid" onClick={openBookingFrame}>
              Book a Pass
            </ThemeButton>
          </div>
        </div>
      </div>
    </section>
  );
};
