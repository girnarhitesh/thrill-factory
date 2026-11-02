'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ThemeButton } from '@/components/common/ThemeButton';
import {
  CatalogActivity,
  activityDetailHtml,
  catalogImageUrl,
  catalogSavePercent,
  formatCatalogPrice,
} from '@/data/catalogActivities';
import './CatalogActivityModal.css';

interface CatalogActivityModalProps {
  activity: CatalogActivity | null;
  onClose: () => void;
  onBook: (title: string) => void;
}

export const CatalogActivityModal: React.FC<CatalogActivityModalProps> = ({
  activity,
  onClose,
  onBook,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [activity?.id]);

  useEffect(() => {
    if (!activity) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') {
        setImageIndex((current) => (current + 1) % activity.images.length);
      }
      if (event.key === 'ArrowLeft') {
        setImageIndex((current) => (current - 1 + activity.images.length) % activity.images.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activity, onClose]);

  if (!activity) return null;

  const images = activity.images;
  const current = images[imageIndex] ?? images[0];
  const savePercent = catalogSavePercent(activity.price, activity.compare_at_price);
  const showVariants = activity.variants.length > 1;
  const category = activity.categories.join(', ');

  const step = (direction: number) => {
    if (images.length < 2) return;
    setImageIndex((currentIndex) => (currentIndex + direction + images.length) % images.length);
  };

  return (
    <div className="catalog-modal-overlay" onClick={onClose}>
      <div
        className="catalog-modal"
        role="dialog"
        aria-modal="true"
        aria-label={activity.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="catalog-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="catalog-modal-layout">
          <div className="catalog-modal-gallery">
            <div className="catalog-modal-stage">
              {current ? (
                <Image
                  src={catalogImageUrl(current.local_path)}
                  alt={current.alt || activity.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 480px"
                  className="catalog-modal-photo"
                />
              ) : null}
              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    className="catalog-modal-arrow is-prev"
                    onClick={() => step(-1)}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    className="catalog-modal-arrow is-next"
                    onClick={() => step(1)}
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              ) : null}
            </div>

            {images.length > 1 ? (
              <div className="catalog-modal-thumbs" role="list">
                {images.map((image, index) => (
                  <button
                    key={image.local_path}
                    type="button"
                    role="listitem"
                    className={`catalog-modal-thumb${index === imageIndex ? ' is-active' : ''}`}
                    onClick={() => setImageIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <Image
                      src={catalogImageUrl(image.local_path)}
                      alt={`${activity.title} photo ${index + 1}`}
                      width={96}
                      height={72}
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="catalog-modal-copy">
            {category ? <p className="catalog-modal-category">{category}</p> : null}
            <h3 className="catalog-modal-title">{activity.title}</h3>

            <div className="catalog-card-price">
              <span className="ride-card-price-now">{formatCatalogPrice(activity.price)}</span>
              {savePercent !== null ? (
                <>
                  <span className="ride-card-price-was">
                    {formatCatalogPrice(activity.compare_at_price)}
                  </span>
                  <span className="catalog-save-badge">Save {savePercent}%</span>
                </>
              ) : null}
            </div>

            {showVariants ? (
              <ul className="catalog-modal-variants">
                {activity.variants.map((variant) => (
                  <li key={variant.id}>
                    <span>{variant.title}</span>
                    <strong>{formatCatalogPrice(variant.price)}</strong>
                  </li>
                ))}
              </ul>
            ) : null}

            {activity.description_html ? (
              <div
                className="catalog-modal-html"
                dangerouslySetInnerHTML={{ __html: activityDetailHtml(activity.description_html) }}
              />
            ) : null}

            <ThemeButton
              variant="solid"
              arrow
              onClick={() => {
                onClose();
                onBook(activity.title);
              }}
            >
              Book Now
            </ThemeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
