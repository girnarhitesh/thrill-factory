'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, MessageCircle, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { PackageCombo } from '@/data/packages';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { ThemeButton } from '@/components/common/ThemeButton';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import './ActivityDetailPage.css';

interface ComboDetailPageProps {
  combo: PackageCombo;
  heading: string;
}

export function ComboDetailPage({ combo, heading }: ComboDetailPageProps) {
  const galleryImages = combo.gallery?.length ? combo.gallery : [combo.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = galleryImages[activeImageIndex] || combo.image;
  const savings = combo.originalPrice && combo.originalPrice > combo.price ? combo.originalPrice - combo.price : 0;
  const whatsappMessage = encodeURIComponent(
    `Hello The Shivpuri Thrill Factory, I want to inquire about ${combo.title} (Rs. ${combo.price.toLocaleString('en-IN')}). Please share slot availability.`
  );

  return (
    <>
      <Navbar />
      <main className="activity-page">
        <article className="activity-page-sheet">
          <p className="activity-page-crumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/combos">Combos</Link>
            <span aria-hidden="true"> / </span>
            <span>{combo.title}</span>
          </p>

          <div className="activity-page-badges">
            <span className="badge badge-primary">{combo.badge || 'Official Combo'}</span>
            {combo.id === 'thrill-combo-1-1' ? (
              <span className="package-duo-badge" style={{ position: 'static' }}>
                <Users size={11} />
                <span>For 2 Persons</span>
              </span>
            ) : null}
          </div>

          <div className="combo-page-body">
            <div className="combo-header-section">
              <div className="combo-header-left">
                <h1 className="activity-page-title">{heading}</h1>
                <div className="combo-modal-formula-banner">
                  <span className="combo-formula-tag">Combo Activity</span>
                  <span>( {combo.formula} )</span>
                </div>
              </div>
              <div className="combo-header-pricing">
                <div className="combo-price-main-row">
                  <span className="combo-price-val">Rs. {combo.price.toLocaleString('en-IN')}.00</span>
                  {savings > 0 ? (
                    <span className="combo-price-original">Rs. {combo.originalPrice?.toLocaleString('en-IN')}</span>
                  ) : null}
                </div>
                {savings > 0 ? (
                  <span className="combo-price-savings-pill">Save Rs. {savings.toLocaleString('en-IN')}</span>
                ) : null}
              </div>
            </div>

            <div className="combo-mid-grid">
              <div className="combo-gallery">
                <div className="combo-gallery-main">
                  <Image
                    src={activeImage}
                    alt={combo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="combo-gallery-img"
                  />
                </div>
                {galleryImages.length > 1 ? (
                  <div className="combo-gallery-thumbs">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={img + idx}
                        type="button"
                        className={`combo-gallery-thumb ${idx === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`View photo ${idx + 1}`}
                      >
                        <img src={img} alt={`${combo.title} preview ${idx + 1}`} width={800} height={533} />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="combo-mid-right">
                <div className="combo-inclusions-box">
                  <div className="combo-inclusions-label">Combo Activity Includes:</div>
                  <ul className="combo-inclusions-list">
                    {combo.activitiesIncluded.map((activity) => (
                      <li key={activity} className="combo-inclusion-row">
                        <Check size={16} />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

            {combo.rideDetails?.length ? (
              <div className="combo-rides-section">
                <div className="combo-section-title">
                  <Sparkles size={16} color="var(--color-primary)" />
                  <span>About Included Activities & Experiences</span>
                </div>
                <div className="combo-ride-cards-stack">
                  {combo.rideDetails.map((ride) => (
                    <div key={ride.title} className="combo-ride-detail-card">
                      <div className="combo-ride-detail-head">
                        <span className="combo-ride-name">{ride.title}</span>
                        {ride.heightOrSpec ? <span className="combo-ride-badge">{ride.heightOrSpec}</span> : null}
                      </div>
                      <p className="combo-ride-full-text">{ride.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="combo-protocol-banner">
              <ShieldCheck size={22} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div className="combo-protocol-title">Certified Safety & Gear Protocol</div>
                <p className="combo-protocol-desc">
                  {combo.safetySpecs.gear}. All jumps and rides are supervised by master jump instructors with daily
                  structural rig inspections, participant medical declarations, and personalized certificates of
                  completion.
                </p>
              </div>
            </div>

            <div className="activity-page-actions">
              <div>
                <p className="activity-page-price">Rs. {combo.price.toLocaleString('en-IN')}.00</p>
                <p className="activity-page-note">
                  {combo.id === 'thrill-combo-1-1'
                    ? 'Valid for 2 participants together'
                    : 'Guaranteed lowest online direct price'}
                </p>
              </div>
              <div className="activity-page-buttons">
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
                <ThemeButton variant="solid" size="sm" arrow onClick={openBookingFrame}>
                  Book This Combo Now
                </ThemeButton>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
