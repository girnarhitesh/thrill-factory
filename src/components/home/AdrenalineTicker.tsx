'use client';

import React from 'react';
import './AdrenalineTicker.css';

const TICKER_ITEMS = [
  "INDIA'S ONLY ADVENTURE AND ENTERTAINMENT DESTINATION",
  "EXTREME RIDES · AERIAL THRILLS · GROUND GAMES",
  "KIDS ZONE · VR LAB · ENTERTAINMENT ARENA",
  "GIANT SWING · ZIP LINE · SCAD · REVERSE LAUNCH",
  "SHIVPURI · RISHIKESH · OPEN ALL WEEK",
  "A FULL DAY ON ONE PARK, NOT A SINGLE RIDE",
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
