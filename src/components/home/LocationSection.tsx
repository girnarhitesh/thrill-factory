import React from 'react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ThemeButton } from '@/components/common/ThemeButton';
import './LocationSection.css';

const ROUTES = [
  { code: 'TAP', from: 'Tapovan / Laxman Jhula', eta: '16 km · 25–30 min' },
  { code: 'YNRK', from: 'Rishikesh Railway Station', eta: '20 km · 40 min' },
  { code: 'DED', from: 'Dehradun Jolly Grant Airport', eta: '36 km · 55 min' },
] as const;

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="location-section" aria-label="How to reach Shivpuri Thrill Factory">
      <div className="container">
        <SectionHeader
          tag="Plan Your Visit"
          title="How to Reach"
          highlightWord="Shivpuri"
          description="On the Rishikesh–Devprayag NH-58 highway, overlooking the Ganges valley."
        />

        <div className="location-board">
          <div className="location-card location-anim-box">
            <div className="location-addr">
              <span className="location-addr-idx">01</span>
              <div>
                <span className="location-addr-tag">Physical Address</span>
                <p className="location-addr-val">
                  {SITE_CONFIG.location.landmark}, {SITE_CONFIG.location.area},{' '}
                  {SITE_CONFIG.location.city}, {SITE_CONFIG.location.state} – {SITE_CONFIG.location.pincode}
                </p>
              </div>
            </div>

            <ul className="location-routes">
              {ROUTES.map((route) => (
                <li key={route.code} className="location-route">
                  <span className="location-route-code">{route.code}</span>
                  <span className="location-route-from">{route.from}</span>
                  <span className="location-route-eta">{route.eta}</span>
                </li>
              ))}
            </ul>

            <div className="location-actions">
              <ThemeButton
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="ghost"
                arrow
              >
                Open in Google Maps
              </ThemeButton>
              <ThemeButton href={`tel:${SITE_CONFIG.phones[0].raw}`} size="sm" variant="ghost">
                Call Driving Desk
              </ThemeButton>
            </div>
          </div>

          <div className="location-photo location-anim-box">
            <img
              src="/images/platform-view.jpg"
              alt="Jumpers on the Shivpuri adventure platform"
              className="location-photo-img"
            />
            <div className="location-photo-copy">
              <span className="location-photo-stamp">
                <span className="location-photo-stamp-node" aria-hidden="true" />
                Shivpuri Strip
              </span>
              <h3 className="location-photo-title">Scenic Himalayan Valley</h3>
              <p className="location-photo-desc">
                Parking, rest rooms, cafe lounge, and a spectator cliff deck on site.
              </p>
              <ThemeButton
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="ghost"
                tone="on-dark"
                arrow
              >
                Get GPS Route
              </ThemeButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
