'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Activity } from '@/types';
import { SITE_CONFIG } from '@/constants/siteConfig';
import {
  X,
  Check,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Clock,
  Scale
} from 'lucide-react';
import { ThemeButton } from '@/components/common/ThemeButton';
import './ComboDetailsModal.css';

interface ActivityDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: Activity | null;
  onBook: (activityTitle: string) => void;
}

export const ActivityDetailsModal: React.FC<ActivityDetailsModalProps> = ({
  isOpen,
  onClose,
  activity,
  onBook
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !activity) return null;

  const handleProceedBooking = () => {
    onClose();
    onBook(activity.title);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello The Shivpuri Thrill Factory, I want to inquire about ${activity.title} (Rs. ${activity.price.toLocaleString('en-IN')}). Please share slot availability.`
  );

  return (
    <div className="combo-modal-overlay" onClick={onClose}>
      <div
        className="combo-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${activity.title} Details`}
      >
        {/* Top Header Bar */}
        <div className="combo-modal-header">
          <div className="combo-modal-header-badges">
            <span className="badge badge-primary">{activity.tag || 'Official Adventure'}</span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                backgroundColor: '#FFF5EE',
                padding: '3px 8px',
                borderRadius: '4px'
              }}
            >
              {activity.category}
            </span>
          </div>
          <button
            type="button"
            className="combo-modal-close-btn"
            onClick={onClose}
            aria-label="Close details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="combo-modal-body">
          {/* Header Title & Pricing Row */}
          <div className="combo-header-section">
            <div className="combo-header-left">
              <h2 className="combo-modal-title">{activity.title}</h2>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {activity.shortDesc}
              </p>
            </div>

            <div className="combo-header-pricing">
              <div className="combo-price-main-row">
                <span className="combo-price-val">
                  Rs. {activity.price.toLocaleString('en-IN')}.00
                </span>
                {activity.originalPrice && activity.originalPrice > activity.price && (
                  <span className="combo-price-original">
                    Rs. {activity.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <span className="combo-price-savings-pill">
                Official Direct Park Rate
              </span>
            </div>
          </div>

          {/* Two-Column Mid Grid: Photo Left, Highlights Right */}
          <div className="combo-mid-grid">
            {/* Photo Banner */}
            <div className="combo-gallery">
              <div className="combo-gallery-main" style={{ height: '260px' }}>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="combo-gallery-img"
                  priority
                />
              </div>
            </div>

            {/* Highlights & Features */}
            <div className="combo-mid-right">
              <div className="combo-inclusions-box">
                <div className="combo-inclusions-label">Activity Highlights & Inclusions:</div>
                <ul className="combo-inclusions-list">
                  {activity.features.map((feature, idx) => (
                    <li key={idx} className="combo-inclusion-row">
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs Grid */}
              <div className="combo-specs-grid">
                <div className="combo-spec-card">
                  <div className="combo-spec-label">Weight Limit</div>
                  <div className="combo-spec-value">{activity.weightLimit || 'Standard (35-110 kg)'}</div>
                </div>
                <div className="combo-spec-card">
                  <div className="combo-spec-label">Age Requirement</div>
                  <div className="combo-spec-value">{activity.ageLimit || '8+ Years'}</div>
                </div>
                <div className="combo-spec-card">
                  <div className="combo-spec-label">Duration</div>
                  <div className="combo-spec-value">{activity.duration || '20 – 45 Mins'}</div>
                </div>
                <div className="combo-spec-card">
                  <div className="combo-spec-label">Safety Standard</div>
                  <div className="combo-spec-value">CE / EN Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Verbatim Description from thrillfactory.in */}
          {activity.paragraphs && activity.paragraphs.length > 0 && (
            <div className="combo-rides-section">
              <div className="combo-section-title">
                <Sparkles size={16} color="var(--color-primary)" />
                <span>The Complete Adventure Experience</span>
              </div>
              <div className="combo-ride-cards-stack">
                {activity.paragraphs.map((para, idx) => (
                  <div key={idx} className="combo-ride-detail-card">
                    <p className="combo-ride-full-text">{para}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Safety & Protocol */}
          <div className="combo-protocol-banner">
            <ShieldCheck size={22} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div className="combo-protocol-title">
                International Safety Standards & Certified Marshals
              </div>
              <p className="combo-protocol-desc">
                Operating under rigorous international standards with daily load tests, CE/EN-rated harnesses, and trained adventure marshals at The Shivpuri Thrill Factory.
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="combo-modal-footer">
          <div className="combo-modal-footer-price">
            <span className="combo-footer-price-main">
              Rs. {activity.price.toLocaleString('en-IN')}.00
            </span>
            <span className="combo-footer-price-sub">
              Instant online slot confirmation
            </span>
          </div>

          <div className="combo-modal-footer-actions">
            <ThemeButton
              href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="ghost"
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </ThemeButton>

            <ThemeButton variant="ghost" arrow onClick={handleProceedBooking}>
              Book This Activity Now
            </ThemeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
