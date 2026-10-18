'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { SectionHeader } from '@/components/common/SectionHeader';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { ThemeButton } from '@/components/common/ThemeButton';

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-4xl)', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeader
            tag="Find & Reach Us"
            title="Contact & Location"
            highlightWord="Directory"
            description="We are located directly along NH-58 in Shivpuri, Rishikesh. Feel free to call our desk or message us on WhatsApp for live route directions."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-2xl)',
              marginBottom: 'var(--space-4xl)',
            }}
          >
            {/* Contact Details Card */}
            <div
              className="card"
              style={{
                padding: 'var(--space-2xl)',
                gap: 'var(--space-xl)',
                backgroundColor: '#FFFFFF',
              }}
            >
              <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>Direct Assistance</h3>

              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-light)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    Phone Lines (Open 9:00 AM – 10:00 PM)
                  </h4>
                  <div style={{ marginTop: '4px' }}>
                    <a
                      href={`tel:${SITE_CONFIG.phones[0].raw}`}
                      style={{ display: 'block', fontSize: 'var(--font-size-base)', fontWeight: 'bold', color: 'var(--color-text-primary)' }}
                    >
                      {SITE_CONFIG.phones[0].label}
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.phones[1].raw}`}
                      style={{ display: 'block', fontSize: 'var(--font-size-base)', fontWeight: 'bold', color: 'var(--color-text-secondary)' }}
                    >
                      {SITE_CONFIG.phones[1].label}
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-secondary-light)',
                    color: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    Email Inquiries
                  </h4>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    style={{ display: 'block', fontSize: 'var(--font-size-base)', fontWeight: 'bold', color: 'var(--color-text-primary)', marginTop: '4px' }}
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-light)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    Camp & Platform Location
                  </h4>
                  <p style={{ marginTop: '4px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {SITE_CONFIG.location.name}<br />
                    {SITE_CONFIG.location.landmark}, {SITE_CONFIG.location.area}<br />
                    {SITE_CONFIG.location.city}, {SITE_CONFIG.location.state} – {SITE_CONFIG.location.pincode}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-bg-surface)',
                    color: 'var(--color-text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    Operational Hours
                  </h4>
                  <p style={{ marginTop: '4px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    {SITE_CONFIG.operatingHours.days}<br />
                    {SITE_CONFIG.operatingHours.hours}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-md)' }}>
                <ThemeButton
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  style={{ flex: 1 }}
                >
                  <MessageSquare size={16} /> WhatsApp Us
                </ThemeButton>

                <ThemeButton
                  variant="ghost"
                  arrow
                  style={{ flex: 1 }}
                  onClick={() => setIsBookingOpen(true)}
                >
                  Book Slot
                </ThemeButton>
              </div>
            </div>

            {/* Travel Directions & Tips */}
            <div
              className="card"
              style={{
                padding: 'var(--space-2xl)',
                backgroundColor: 'var(--color-bg-surface)',
              }}
            >
              <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-lg)' }}>
                Travel Distances & Tips
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', fontSize: 'var(--font-size-sm)' }}>
                <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>From Tapovan / Laxman Jhula:</strong>
                  <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    Take the Badrinath highway (NH-58) towards Shivpuri for approx. 16 km (25-30 mins). You will see our large entrance sign right next to the Indian Oil station.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>From Rishikesh Bus / Train Station:</strong>
                  <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    Shared jeeps, local buses, and private taxis regularly head from Rishikesh to Shivpuri (approx. ₹300–₹600 for taxi, ₹50 for shared transport).
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Parking & Amenities:</strong>
                  <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    Complimentary private parking for cars and two-wheelers, riverside observation deck, locker facilities, and a cafeteria serving snacks and beverages.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-xl)' }}>
                <ThemeButton
                  href={SITE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  block
                >
                  <ExternalLink size={16} /> Open in Google Maps
                </ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
