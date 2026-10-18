'use client';

import React from 'react';
import './AdrenalineTicker.css';

const TICKER_ITEMS = [
  "INDIA'S PREMIER 165 FT FIXED BUNGEE PLATFORM",
  "180 FT REVERSE CATAPULT ROCKET",
  "AS/NZS 5848:2000 INTERNATIONAL SAFETY PROTOCOLS",
  "50,000+ SUCCESSFUL JUMPS COMPLETED",
  "COMPLIMENTARY 4K DSLR & ACTION VIDEO INCLUDED",
  "100% DUAL-REDUNDANT HARNESS TRACK RECORD",
  "PRIME SHIVPURI CANYON LOCATION • RISHIKESH",
  "ASIA'S ONLY IMPORTED ITALIAN REVERSE SLINGSHOT",
];

export const AdrenalineTicker: React.FC = () => {
  return (
    <div className="adrenaline-ticker" aria-label="Live adventure highlights ticker">
      <div className="adrenaline-ticker-track">
        {/* First repetition */}
        <div className="adrenaline-ticker-group">
          {TICKER_ITEMS.map((item, idx) => (
            <React.Fragment key={`a-${idx}`}>
              <span className="ticker-item">{item}</span>
              <span className="ticker-dot">◆</span>
            </React.Fragment>
          ))}
        </div>

        {/* Second repetition for seamless infinite loop */}
        <div className="adrenaline-ticker-group" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => (
            <React.Fragment key={`b-${idx}`}>
              <span className="ticker-item">{item}</span>
              <span className="ticker-dot">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
