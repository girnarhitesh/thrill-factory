'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { Activity } from '@/types';

export function ProductSpotlight({ activity }: { activity: Activity }) {
  const facts = [
    activity.ageLimit ? { label: 'Age', value: activity.ageLimit } : null,
    activity.weightLimit ? { label: 'Weight', value: activity.weightLimit } : null,
    activity.duration ? { label: 'Time', value: activity.duration } : null,
    activity.height ? { label: 'Height', value: activity.height } : null,
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

  return (
    <>
      <Navbar />
      <main>
        <section
          className="activities-lane"
          style={{ paddingTop: 'calc(var(--header-height) + 2.5rem)', paddingBottom: '3rem' }}
        >
          <div className="container" style={{ maxWidth: '880px' }}>
            <SectionHeader
              align="left"
              headingLevel="h1"
              tag={activity.tag}
              title={activity.title}
              description={activity.fullDesc}
            />

            <img
              src={activity.image}
              alt={activity.title}
              width={960}
              height={540}
              style={{ width: '100%', height: 'auto', margin: '1.25rem 0', objectFit: 'cover' }}
            />

            <p className="ride-card-price-now" style={{ marginBottom: '0.35rem' }}>
              ₹{activity.price.toLocaleString('en-IN')}
              <span className="ride-card-price-unit"> per person</span>
            </p>

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

            {activity.features.length > 0 ? (
              <ul style={{ margin: '1.25rem 0', paddingLeft: '1.1rem' }}>
                {activity.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            ) : null}

            <div className="packages-action-footer">
              <ThemeButton variant="solid" arrow onClick={openBookingFrame}>
                Book
              </ThemeButton>
              <ThemeButton href="/collections" variant="ghost" arrow>
                View All Activities
              </ThemeButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
