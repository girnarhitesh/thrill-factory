'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Activity } from '@/types';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { X, MessageCircle } from 'lucide-react';
import { ThemeButton } from '@/components/common/ThemeButton';
import { CATALOG_ACTIVITIES, activityDetailHtml, catalogImageUrl } from '@/data/catalogActivities';
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
    activity.comingSoon
      ? `Hello The Shivpuri Thrill Factory, I want to inquire about ${activity.title}. Please share when it opens.`
      : `Hello The Shivpuri Thrill Factory, I want to inquire about ${activity.title} (Rs. ${activity.price.toLocaleString('en-IN')}). Please share slot availability.`
  );

  const catalog = CATALOG_ACTIVITIES.find((item) => item.handle === activity.slug);
  const catalogGallery = catalog?.images.length
    ? catalog.images.map((image) => ({
        src: catalogImageUrl(image.local_path),
        alt: image.alt || activity.title,
      }))
    : [];
  const lead = { src: activity.image, alt: activity.title };
  const showCustomLead =
    catalogGallery.length > 0 &&
    !activity.image.startsWith('/images/activities/') &&
    !catalogGallery.some((image) => image.src === activity.image);
  const gallery = showCustomLead ? [lead, ...catalogGallery] : catalogGallery.length ? catalogGallery : [lead];
  const copyHtml = catalog?.description_html ? activityDetailHtml(catalog.description_html) : '';

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
            </div>

            <div className="combo-header-pricing">
              {activity.comingSoon ? (
                <div className="combo-price-main-row">
                  <span className="combo-price-val">Coming Soon</span>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>

          <div className="activity-detail-gallery">
            {gallery.map((image) => (
              <div className="activity-detail-frame" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="activity-detail-photo"
                />
              </div>
            ))}
          </div>

          {copyHtml ? (
            <article
              className="activity-detail-copy"
              dangerouslySetInnerHTML={{ __html: copyHtml }}
            />
          ) : activity.paragraphs && activity.paragraphs.length > 0 ? (
            <article className="activity-detail-copy">
              {activity.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </article>
          ) : null}
        </div>

        {/* Sticky Action Footer */}
        <div className="combo-modal-footer">
          <div className="combo-modal-footer-price">
            <span className="combo-footer-price-main">
              {activity.comingSoon ? 'Coming Soon' : `Rs. ${activity.price.toLocaleString('en-IN')}.00`}
            </span>
            <span className="combo-footer-price-sub">
              {activity.comingSoon ? 'Opening at Thrill Factory' : 'Instant online slot confirmation'}
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

            {activity.comingSoon ? null : (
              <ThemeButton variant="ghost" arrow onClick={handleProceedBooking}>
                Book This Activity Now
              </ThemeButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
