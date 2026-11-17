'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Activity } from '@/types';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { activityFacts } from '@/components/home/ActivityCard';
import { openBookingFrame } from '@/components/common/BookingFrame';
import { ThemeButton } from '@/components/common/ThemeButton';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { CATALOG_ACTIVITIES, activityDetailHtml, catalogImageUrl } from '@/data/catalogActivities';
import './ActivityDetailPage.css';

interface ActivityDetailPageProps {
  activity: Activity;
  heading: string;
}

export function ActivityDetailPage({ activity, heading }: ActivityDetailPageProps) {
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
  const facts = activityFacts(activity);

  return (
    <>
      <Navbar />
      <main className="activity-page">
        <article className="activity-page-sheet">
          <p className="activity-page-crumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/collections">Activities</Link>
            <span aria-hidden="true"> / </span>
            <span>{activity.title}</span>
          </p>

          <div className="activity-page-badges">
            <span className="badge badge-primary">{activity.tag || 'Official Adventure'}</span>
            <span className="activity-page-category">{activity.category}</span>
          </div>

          <div className="combo-header-section">
            <div className="combo-header-left">
              <h1 className="activity-page-title">{heading}</h1>
              {activity.holdNote ? <p className="activity-hold-note">{activity.holdNote}</p> : null}
            </div>

            <div className="combo-header-pricing">
              {activity.comingSoon ? (
                <div className="combo-price-main-row">
                  <span className="combo-price-val">Coming Soon</span>
                </div>
              ) : (
                <>
                  <div className="combo-price-main-row">
                    <span className="combo-price-val">Rs. {activity.price.toLocaleString('en-IN')}.00</span>
                    {activity.originalPrice && activity.originalPrice > activity.price ? (
                      <span className="combo-price-original">
                        Rs. {activity.originalPrice.toLocaleString('en-IN')}
                      </span>
                    ) : null}
                  </div>
                  <span className="combo-price-savings-pill">Official Direct Park Rate</span>
                </>
              )}
            </div>
          </div>

          {facts.length > 0 ? (
            <dl className="activity-detail-facts">
              {facts.map((fact) => (
                <div className="activity-detail-fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="activity-detail-gallery">
            {gallery.map((image) => (
              <div className="activity-detail-frame" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="activity-detail-photo"
                />
              </div>
            ))}
          </div>

          {copyHtml || activity.detailHtml ? (
            <div
              className="activity-detail-copy"
              dangerouslySetInnerHTML={{ __html: copyHtml || activity.detailHtml || '' }}
            />
          ) : activity.paragraphs && activity.paragraphs.length > 0 ? (
            <div className="activity-detail-copy">
              {activity.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          ) : null}

          <div className="activity-page-actions">
            <div>
              <p className="activity-page-price">
                {activity.comingSoon ? 'Coming Soon' : `Rs. ${activity.price.toLocaleString('en-IN')}.00`}
              </p>
              <p className="activity-page-note">
                {activity.holdNote
                  ? activity.holdNote
                  : activity.comingSoon
                    ? 'Opening at Thrill Factory'
                    : 'Instant online slot confirmation'}
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
              {activity.comingSoon || activity.holdNote ? null : (
                <ThemeButton variant="solid" size="sm" arrow onClick={openBookingFrame}>
                  Book This Activity Now
                </ThemeButton>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
