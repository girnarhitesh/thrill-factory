'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PackageCombo } from '@/data/packages';
import { SITE_CONFIG } from '@/constants/siteConfig';
import {
  X,
  Check,
  ShieldCheck,
  Users,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { ThemeButton } from '@/components/common/ThemeButton';
import './ComboDetailsModal.css';

interface ComboDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  combo: PackageCombo | null;
  onBook: (comboTitle: string) => void;
}

export const ComboDetailsModal: React.FC<ComboDetailsModalProps> = ({
  isOpen,
  onClose,
  combo,
  onBook
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when combo changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [combo]);

  // Lock body scroll and handle Escape key
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

  if (!isOpen || !combo) return null;

  const galleryImages = combo.gallery && combo.gallery.length > 0 ? combo.gallery : [combo.image];
  const activeImage = galleryImages[activeImageIndex] || combo.image;
  const savings = combo.originalPrice ? combo.originalPrice - combo.price : 0;

  const handleProceedBooking = () => {
    onClose();
    onBook(combo.title);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello The Shivpuri Thrill Factory, I want to inquire about ${combo.title} (Rs. ${combo.price.toLocaleString('en-IN')}). Please share slot availability.`
  );

  return (
    <div className="combo-modal-overlay" onClick={onClose}>
      <div
        className="combo-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${combo.title} Details`}
      >
        {/* Top Header Bar */}
        <div className="combo-modal-header">
          <div className="combo-modal-header-badges">
            <span className="badge badge-primary">{combo.badge || 'Official Combo'}</span>
            {combo.id === 'thrill-combo-1-1' && (
              <span className="package-duo-badge" style={{ position: 'static' }}>
                <Users size={11} />
                <span>For 2 Persons</span>
              </span>
            )}
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
          {/* Header Title & Pricing Row (Clean, Spacious & Non-Wrapping) */}
          <div className="combo-header-section">
            <div className="combo-header-left">
              <h2 className="combo-modal-title">{combo.title}</h2>
              <div className="combo-modal-formula-banner">
                <span className="combo-formula-tag">Combo Activity</span>
                <span>( {combo.formula} )</span>
              </div>
            </div>

            <div className="combo-header-pricing">
              <div className="combo-price-main-row">
                <span className="combo-price-val">
                  Rs. {combo.price.toLocaleString('en-IN')}.00
                </span>
                {combo.originalPrice && combo.originalPrice > combo.price && (
                  <span className="combo-price-original">
                    Rs. {combo.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              {savings > 0 && (
                <span className="combo-price-savings-pill">
                  Save Rs. {savings.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          {/* Two-Column Mid Grid: Gallery Left, Inclusions & Specs Right */}
          <div className="combo-mid-grid">
            {/* Gallery */}
            <div className="combo-gallery">
              <div className="combo-gallery-main">
                <Image
                  src={activeImage}
                  alt={combo.title}
                  fill
                  className="combo-gallery-img"
                  priority
                />
              </div>

              {galleryImages.length > 1 && (
                <div className="combo-gallery-thumbs">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`combo-gallery-thumb ${idx === activeImageIndex ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <img src={img} alt={`${combo.title} preview ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Inclusions & Specs */}
            <div className="combo-mid-right">
              {/* Inclusions Card */}
              <div className="combo-inclusions-box">
                <div className="combo-inclusions-label">Combo Activity Includes:</div>
                <ul className="combo-inclusions-list">
                  {combo.activitiesIncluded.map((activity, idx) => (
                    <li key={idx} className="combo-inclusion-row">
                      <Check size={16} />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs Grid */}
              <div className="combo-specs-grid">
                <div className="combo-spec-card">
                  <div className="combo-spec-label">Weight Limit</div>
                  <div className="combo-spec-value">{combo.safetySpecs.weightLimit}</div>
                </div>
                <div className="combo-spec-card">
                  <div className="combo-spec-label">Age Requirement</div>
                  <div className="combo-spec-value">{combo.safetySpecs.ageLimit}</div>
                </div>
                <div className="combo-spec-card">
                  <div className="combo-spec-label">Est. Duration</div>
                  <div className="combo-spec-value">{combo.safetySpecs.duration}</div>
                </div>
                <div className="combo-spec-card">
                  <div className="combo-spec-label">Safety Standard</div>
                  <div className="combo-spec-value">CE / EN Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Ride Descriptions (Complete verbatim text from thrillfactory.in) */}
          {combo.rideDetails && combo.rideDetails.length > 0 && (
            <div className="combo-rides-section">
              <div className="combo-section-title">
                <Sparkles size={16} color="var(--color-primary)" />
                <span>About Included Activities & Experiences</span>
              </div>
              <div className="combo-ride-cards-stack">
                {combo.rideDetails.map((ride, idx) => (
                  <div key={idx} className="combo-ride-detail-card">
                    <div className="combo-ride-detail-head">
                      <span className="combo-ride-name">{ride.title}</span>
                      {ride.heightOrSpec && (
                        <span className="combo-ride-badge">{ride.heightOrSpec}</span>
                      )}
                    </div>
                    <p className="combo-ride-full-text">{ride.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Safety & Equipment Protocol */}
          <div className="combo-protocol-banner">
            <ShieldCheck size={22} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div className="combo-protocol-title">
                Certified Safety & Gear Protocol
              </div>
              <p className="combo-protocol-desc">
                {combo.safetySpecs.gear}. All jumps and rides are supervised by master jump instructors with daily structural rig inspections, participant medical declarations, and personalized certificates of completion.
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="combo-modal-footer">
          <div className="combo-modal-footer-price">
            <span className="combo-footer-price-main">
              Rs. {combo.price.toLocaleString('en-IN')}.00
            </span>
            <span className="combo-footer-price-sub">
              {combo.id === 'thrill-combo-1-1' ? 'Valid for 2 participants together' : 'Guaranteed lowest online direct price'}
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
              Book This Combo Now
            </ThemeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
