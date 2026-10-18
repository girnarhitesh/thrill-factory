'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MAIN_NAV_ITEMS } from '@/constants/navigation';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { Phone, Menu, X } from 'lucide-react';
import { ThemeButton } from '@/components/common/ThemeButton';
import './Navbar.css';

interface NavbarProps {
  onOpenBooking: () => void;
}

const FILL_DISTANCE = 240;

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const cleanPath = pathname && pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const isOverMedia =
    cleanPath === '/' ||
    cleanPath === '/corporate' ||
    cleanPath === '/activities' ||
    cleanPath === '/combos' ||
    cleanPath === '/kids-zone';

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const next = Math.min(Math.max(window.scrollY / FILL_DISTANCE, 0), 1);
      setScrollProgress(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  const fillProgress = mobileMenuOpen ? 1 : scrollProgress;
  const useDarkTone = isOverMedia && fillProgress < 0.55;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isItemActive = (href: string) => {
    if (!cleanPath) return false;
    const cleanHref = href.length > 1 && href.endsWith('/') ? href.slice(0, -1) : href;

    if (cleanHref === '/') {
      return cleanPath === '/' || cleanPath === '';
    }

    if (cleanHref === '/combos') {
      return (
        cleanPath === '/combos' ||
        cleanPath.startsWith('/combos/') ||
        cleanPath === '/packages' ||
        cleanPath.startsWith('/packages/')
      );
    }

    return cleanPath === cleanHref || cleanPath.startsWith(`${cleanHref}/`);
  };

  return (
    <header
      className={`header${isOverMedia ? ' header--over-media' : ''}`}
      style={{ '--nav-progress': fillProgress } as React.CSSProperties}
    >
      <div className="header-fill-clip" aria-hidden="true">
        <div className="header-fill" />
      </div>

      <div className="container header-container">
        {/* Official Brand Logo */}
        <Link href="/" className="brand-logo" onClick={closeMobileMenu}>
          <span className="brand-logo-stack">
            <img
              src="/images/thrill-factory-logo-white.png"
              alt=""
              aria-hidden="true"
              className="brand-logo-img brand-logo-img--white"
            />
            <img
              src="/images/thrill-factory-logo.png"
              alt={SITE_CONFIG.brandName}
              className="brand-logo-img brand-logo-img--color"
            />
          </span>
        </Link>

        {/* Clean Center Navigation (Guaranteed Single Line) */}
        <nav className="nav-links" aria-label="Main Navigation">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = isItemActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Minimalist Right Actions */}
        <div className="nav-actions">
          <a
            href={`tel:${SITE_CONFIG.phones[0].raw}`}
            className="nav-phone-link"
            title="Call Thrill Factory"
          >
            <Phone size={15} />
            <span>{SITE_CONFIG.phones[0].label}</span>
          </a>

          <ThemeButton
            size="sm"
            variant="ghost"
            tone={useDarkTone ? 'on-dark' : 'on-light'}
            onClick={onOpenBooking}
          >
            Book Now
          </ThemeButton>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {MAIN_NAV_ITEMS.map((item) => {
          const isActive = isItemActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link-item ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="mobile-drawer-footer">
          <ThemeButton href={`tel:${SITE_CONFIG.phones[0].raw}`} variant="ghost" block>
            <Phone size={16} />
            {SITE_CONFIG.phones[0].label}
          </ThemeButton>
          <ThemeButton
            variant="ghost"
            arrow
            block
            onClick={() => {
              closeMobileMenu();
              onOpenBooking();
            }}
          >
            Book Now
          </ThemeButton>
        </div>
      </div>
    </header>
  );
};
