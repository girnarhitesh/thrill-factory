'use client';

import React from 'react';
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

  return (
    <article className={`ride-card ride-card--combo${combo.popular ? ' is-popular' : ''}`}>
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

        {combo.formula ? (
          <p className="ride-card-desc" title={combo.formula}>
            {combo.formula}
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
