'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, CheckCircle, MessageSquare } from 'lucide-react';
import { ThemeButton } from '@/components/common/ThemeButton';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { ACTIVITIES_DATA } from '@/data/activities';
import { PACKAGES_DATA } from '@/data/packages';
import { KIDS_ZONE_DATA } from '@/data/kidsZone';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedItem = 'bungee-jumping',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    activityOrPackage: preselectedItem,
    date: '',
    jumpersCount: '1',
    message: '',
  });

  useEffect(() => {
    if (preselectedItem) {
      setFormData((prev) => ({
        ...prev,
        activityOrPackage: preselectedItem,
      }));
    }
  }, [preselectedItem, isOpen]);

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Booking Enquiry - Thrill Factory Shivpuri*\n\n👤 *Name:* ${formData.fullName || 'Guest'}\n📱 *Phone:* ${formData.phone || 'Not provided'}\n🎯 *Adventure/Package:* ${formData.activityOrPackage}\n📅 *Date:* ${formData.date || 'Flexible'}\n👥 *Participants:* ${formData.jumpersCount}\n💬 *Notes:* ${formData.message || 'None'}\n\nPlease verify availability and slots.`;

    const url = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '4px' }}>
              Reserve Your Adventure Slot
            </h3>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-primary)' }}>
              Shivpuri, Rishikesh • Instant Confirmation
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close booking modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-xl) 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md) auto',
                }}
              >
                <CheckCircle size={36} />
              </div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>Enquiry Sent Successfully!</h3>
              <p style={{ marginBottom: 'var(--space-xl)', fontSize: 'var(--font-size-sm)' }}>
                Our Rishikesh team will coordinate your jump slot timing and safety brief details promptly.
              </p>
              <ThemeButton variant="ghost" onClick={handleReset}>
                Done
              </ThemeButton>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Your Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="form-input"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  WhatsApp / Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="activityOrPackage">
                  Choose Activity or Combo Package *
                </label>
                <select
                  id="activityOrPackage"
                  name="activityOrPackage"
                  className="form-select"
                  value={formData.activityOrPackage}
                  onChange={handleChange}
                >
                  <optgroup label="Single Extreme Activities">
                    {ACTIVITIES_DATA.map((act) => (
                      <option key={act.id} value={act.title}>
                        {act.title} (₹{act.price.toLocaleString('en-IN')})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Curated Combos & Multi-Packs">
                    {PACKAGES_DATA.map((pkg) => (
                      <option key={pkg.id} value={pkg.title}>
                        {pkg.title} (₹{pkg.price.toLocaleString('en-IN')})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Kids & Family Fun Zone">
                    {KIDS_ZONE_DATA.map((kid) => (
                      <option key={kid.id} value={kid.title}>
                        {kid.title} (₹{kid.price.toLocaleString('en-IN')})
                      </option>
                    ))}
                  </optgroup>
                  {/* Fallback option if preselected item is not in the lists */}
                  {!ACTIVITIES_DATA.some(a => a.title === formData.activityOrPackage) &&
                   !PACKAGES_DATA.some(p => p.title === formData.activityOrPackage) &&
                   !KIDS_ZONE_DATA.some(k => k.title === formData.activityOrPackage) &&
                   formData.activityOrPackage && (
                    <option value={formData.activityOrPackage}>
                      {formData.activityOrPackage}
                    </option>
                  )}
                </select>
              </div>

              <div className="booking-modal-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="date">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="form-input"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="jumpersCount">
                    No. of Persons
                  </label>
                  <select
                    id="jumpersCount"
                    name="jumpersCount"
                    className="form-select"
                    value={formData.jumpersCount}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, '6+ (Group)'].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Special Notes / Queries
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="Need transport from Tapovan? Tandem jump? Let us know..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <ThemeButton type="submit" variant="ghost" arrow block>
                  <MessageSquare size={16} />
                  Book & Confirm via WhatsApp
                </ThemeButton>
                <p
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-text-muted)',
                    textAlign: 'center',
                  }}
                >
                  No advance fee required to enquire. Pay on-site or online after slot confirmation.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
