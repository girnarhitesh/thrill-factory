'use client';

import React from 'react';
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

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  index,
  onBook,
  onDetails,
}) => {
  const specs = rideSpecs(activity);
  const heightStamp = compactHeight(activity);
  const category = activity.category?.replace(/-/g, ' ');

  return (
    <article className="ride-card">
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
        <span className="ride-card-scrim" aria-hidden="true" />

        <span className="ride-card-media-top">
          {index ? <span className="ride-card-index">{index}</span> : null}
          {category ? <span className="ride-card-cat">{category}</span> : null}
        </span>

        {heightStamp ? <span className="ride-card-height">{heightStamp}</span> : null}
      </button>

      <div className="ride-card-body">
        <h3 className="ride-card-title">{activity.title}</h3>

        {activity.shortDesc ? <p className="ride-card-desc">{activity.shortDesc}</p> : null}

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
