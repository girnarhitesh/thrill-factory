import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { FOOTER_LINKS } from '@/constants/navigation';
import { ThemeButton } from '@/components/common/ThemeButton';
import './Footer.css';

const INSTAGRAM_URL = 'https://www.instagram.com/thrillfactoryatrishikesh';
const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
  SITE_CONFIG.whatsapp.defaultMessage
)}`;

const VISIT_FACTS = [
  {
    code: 'LOC',
    label: 'Address',
    href: SITE_CONFIG.location.googleMapsUrl,
    external: true,
    value: `${SITE_CONFIG.location.landmark}, ${SITE_CONFIG.location.area}, ${SITE_CONFIG.location.city}, ${SITE_CONFIG.location.state} – ${SITE_CONFIG.location.pincode}`,
  },
  {
    code: 'TEL',
    label: 'Jump desk',
    value: SITE_CONFIG.phones.map((phone) => phone.label).join(' · '),
    href: `tel:${SITE_CONFIG.phones[0].raw}`,
  },
  {
    code: 'MAIL',
    label: 'Bookings',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    code: 'HRS',
    label: 'Open',
    value: `${SITE_CONFIG.operatingHours.days.replace(' (All 7 Days)', '')} · ${SITE_CONFIG.operatingHours.hours}`,
  },
] as const;

const GoogleGLogo = () => (
  <svg className="footer-google-g" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const FOOTER_METRICS = [
  { code: 'GGL', value: '4.9 / 5.0', label: 'Google Verified', google: true },
  { code: 'TWR', value: '165 FT', label: "India's Highest Drop" },
  { code: 'OPS', value: '7 DAYS', label: 'Open All Week' },
  { code: 'CLK', value: '9 AM', label: 'Until 10 PM' },
] as const;

export const Footer: React.FC = () => {
  return (
    <footer className="footer" aria-label="Site footer">
      <span className="footer-slash footer-slash--a" aria-hidden="true" />
      <span className="footer-slash footer-slash--b" aria-hidden="true" />

      <div className="container">
        <div className="footer-mast">
          <div className="footer-brand">
            <span className="footer-stamp">
              <span className="footer-stamp-node" aria-hidden="true" />
              Shivpuri · Rishikesh
            </span>
            <Link href="/" className="footer-logo">
              <img
                src="/images/thrill-factory-logo-white.png"
                alt={SITE_CONFIG.brandName}
              />
            </Link>
            <p className="footer-desc">
              Home to India&apos;s 165 FT bungee, 180 FT reverse bungee, SCAD jump, giant swing,
              and a full family adventure zone over the Himalayan valley.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-handle"
            >
              @thrillfactoryatrishikesh
            </a>
          </div>

          <div className="footer-cta">
            <ThemeButton href={`tel:${SITE_CONFIG.phones[0].raw}`} tone="on-dark" variant="solid" size="sm" arrow>
              Call Jump Desk
            </ThemeButton>
            <ThemeButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              tone="on-dark"
              variant="ghost"
              size="sm"
            >
              WhatsApp Slot
            </ThemeButton>
          </div>
        </div>

        <ul className="footer-metrics" aria-label="Park facts">
          {FOOTER_METRICS.map((metric) => (
            <li key={metric.code} className="footer-metric">
              <span className="footer-metric-code">{metric.code}</span>
              <strong>
                {metric.value}
                {'google' in metric && metric.google ? <GoogleGLogo /> : null}
              </strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>

        <div className="footer-board">
          <nav className="footer-col" aria-label="Adventure rides">
            <h4 className="footer-heading">Rides</h4>
            <ul className="footer-link-list">
              {FOOTER_LINKS.activities.map((link, index) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col footer-col--visit">
            <h4 className="footer-heading">Visit</h4>
            <ul className="footer-facts">
              {VISIT_FACTS.map((fact) => (
                <li key={fact.code} className="footer-fact">
                  <span className="footer-fact-code">{fact.code}</span>
                  <div>
                    <span className="footer-fact-label">{fact.label}</span>
                    {'href' in fact && fact.href ? (
                      <a
                        href={fact.href}
                        className="footer-fact-val"
                        {...('external' in fact && fact.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {fact.value}
                      </a>
                    ) : (
                      <span className="footer-fact-val">{fact.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer-col" aria-label="Site links">
            <h4 className="footer-heading">House</h4>
            <ul className="footer-link-list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-base">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </p>

          <div className="footer__powered">
            <span className="footer__powered-text">Powered by</span>
            <a
              href="https://okghumo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__powered-link"
              aria-label="Powered by okGhumo"
            >
              <img src="/images/okghumo-logo-white.png" alt="okGhumo" className="footer__powered-logo" />
            </a>
          </div>

          <nav className="footer-base-links" aria-label="Policies">
            {FOOTER_LINKS.policies.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
