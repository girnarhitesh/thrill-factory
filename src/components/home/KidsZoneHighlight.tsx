'use client';

import React from 'react';
import { KIDS_ZONE_DATA } from '@/data/kidsZone';
import { ThemeButton } from '@/components/common/ThemeButton';
import { ShieldCheck } from 'lucide-react';
import './KidsZoneHighlight.css';

interface KidsZoneHighlightProps {
  onBook: (activityTitle: string) => void;
}

const compactDuration = (value?: string) => {
  if (!value) return null;
  return value.replace(/\s*Minutes? per session/i, ' MIN').replace(/\s*mins?/i, ' MIN');
};

export const KidsZoneHighlight: React.FC<KidsZoneHighlightProps> = ({ onBook }) => {
  const featured = KIDS_ZONE_DATA.slice(0, 4);

  return (
    <section id="kids-zone" className="kids-arena" aria-label="Kids Zone & Family Fun Arena">
      <div className="kids-arena-photo" aria-hidden="true" />
      <div className="kids-arena-fade" aria-hidden="true" />
      <span className="kids-arena-slash kids-arena-slash--a" aria-hidden="true" />
      <span className="kids-arena-slash kids-arena-slash--b" aria-hidden="true" />

      <div className="container kids-arena-inner">
        <div className="kids-arena-copy">
          <span className="kids-arena-stamp">
            <span className="kids-arena-node" aria-hidden="true" />
            Family Adventure
          </span>

          <h2 className="kids-arena-title">
            Kids Zone &
            <span>Family Fun Arena</span>
          </h2>

          <span className="kids-arena-rule" aria-hidden="true" />

          <p className="kids-arena-lead">
            While the big jumps fly, little explorers have a supervised, cushioned park of their own.
            Sessions start at ₹100.
          </p>

          <div className="kids-arena-actions">
            <ThemeButton href="/kids-zone" variant="solid" tone="on-dark" arrow>
              Explore Kids Zone
            </ThemeButton>
            <ThemeButton
              variant="ghost"
              tone="on-dark"
              onClick={() => onBook('Soft Play Zone For Kids')}
            >
              Book a Pass
            </ThemeButton>
          </div>
        </div>

        <div className="kids-arena-board">
          <p className="kids-arena-board-label">On the floor today</p>

          <ul className="kids-arena-list">
            {featured.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="kids-arena-ride"
                  onClick={() => onBook(item.title)}
                >
                  <span className="kids-arena-ride-fill" aria-hidden="true" />
                  <span className="kids-arena-ride-idx">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="kids-arena-ride-meta">
                    <span className="kids-arena-ride-title">{item.title}</span>
                    <span className="kids-arena-ride-sub">
                      {item.ageGroup}
                      {compactDuration(item.duration) ? ` · ${compactDuration(item.duration)}` : ''}
                    </span>
                  </span>
                  <span className="kids-arena-ride-price">₹{item.price}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="kids-arena-safety">
            <ShieldCheck size={16} strokeWidth={1.75} />
            <p>Cushioned padding, enclosed bays, and certified attendants on every session.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
