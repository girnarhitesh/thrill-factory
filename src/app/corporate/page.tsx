'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { BookingModal } from '@/components/common/BookingModal';
import { ThemeButton } from '@/components/common/ThemeButton';
import { CorporateHero } from '@/components/corporate/CorporateHero';
import { CorporateMix } from '@/components/corporate/CorporateMix';
import { CorporateExplore } from '@/components/corporate/CorporateExplore';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { CheckCircle } from 'lucide-react';

const WORKFORCE_COMPETENCIES = [
  {
    title: 'Leadership Development',
    iconImage: '/images/corporate/competencies/leadership.png',
    desc: 'Experiential scenarios requiring emerging leaders to steer cross-functional squads under real-time pressure.'
  },
  {
    title: 'Creativity',
    iconImage: '/images/corporate/competencies/creativity.png',
    desc: 'Outdoor constraint challenges that dismantle rigid thinking and spark out-of-the-box tactical solutions.'
  },
  {
    title: 'Communication',
    iconImage: '/images/corporate/competencies/communication.png',
    desc: 'Paddling and aerial relays where clear, concise, and noise-free verbal cues directly determine success.'
  },
  {
    title: 'Listening Skills',
    iconImage: '/images/corporate/competencies/listening.png',
    desc: 'Blindfolded navigation courses and harness drills demanding acute focus and empathy between partners.'
  },
  {
    title: 'Relationship Building',
    iconImage: '/images/corporate/competencies/relationship.png',
    desc: 'Breaking down departmental silos by placing managers, engineers, and creatives in mutual vulnerability.'
  },
  {
    title: 'Problem Solving',
    iconImage: '/images/corporate/competencies/problem-solving.png',
    desc: 'Time-boxed rescue and obstacle simulations forcing squads to synthesize diverse perspectives fast.'
  },
  {
    title: 'Decision Making',
    iconImage: '/images/corporate/competencies/decision-making.png',
    desc: 'Navigating risks, calculating trade-offs, and committing decisively before high-altitude launches.'
  },
  {
    title: 'Adaptability',
    iconImage: '/images/corporate/competencies/adaptability.png',
    desc: 'Unpredictable river currents and rapid scenario shifts cultivating psychological resilience.'
  }
];

const PAST_CLIENT_LOGOS = [
  {
    name: 'Axis Bank',
    logo: '/images/corporate/clients/axis.png',
    industry: 'Banking & Financial Services'
  },
  {
    name: 'Grant Thornton',
    logo: '/images/corporate/clients/grant-thornton.png',
    industry: 'Auditing & Advisory'
  },
  {
    name: 'Hindustan Petroleum (HPCL)',
    logo: '/images/corporate/clients/hpcl.png',
    industry: 'Energy & Infrastructure'
  }
];

const ADDITIONAL_ENTERPRISE_CLIENTS = [
  'Tata Consultancy Services',
  'Infosys',
  'HDFC Bank',
  'Wipro Technologies',
  'Deloitte India',
  'Mahindra & Mahindra',
  'Zomato'
];

export default function CorporatePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState('Corporate Custom Offsite Package');

  const [corpForm, setCorpForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    eventType: 'Corporate Team Offsite',
    teamSize: '25 - 50 Persons',
    visitDate: '',
    requirements: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCorpForm({ ...corpForm, [e.target.name]: e.target.value });
  };

  const handleCorpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Corporate Offsite Enquiry - Thrill Factory Shivpuri*\n\n🏢 *Company:* ${corpForm.companyName || 'Not specified'}\n👤 *Contact:* ${corpForm.contactPerson}\n📱 *Phone:* ${corpForm.phone}\n✉️ *Email:* ${corpForm.email}\n🎯 *Event Type:* ${corpForm.eventType}\n👥 *Team Size:* ${corpForm.teamSize}\n📅 *Target Date:* ${corpForm.visitDate || 'Flexible'}\n📝 *Requirements:* ${corpForm.requirements || 'Custom itinerary requested'}\n\nPlease share proposal and slot availability.`;
    const url = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main style={{ backgroundColor: '#FFFFFF' }}>
        <CorporateHero />
        <CorporateMix />
        <CorporateExplore />


        {/* Corporate Workforce Development Programs (Official 8 Competency Modules with Graphic Icons) */}
        <section
          style={{
            padding: 'var(--space-4xl) 0',
            backgroundColor: '#0B1120',
            color: '#FFFFFF'
          }}
        >
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto var(--space-3xl) auto' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-primary)',
                  display: 'inline-block',
                  marginBottom: '8px'
                }}
              >
                Experiential Learning Capsules
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  marginBottom: '14px'
                }}
              >
                Corporate Workforce Development Programs
              </h2>
              <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7 }}>
                Our Board of Advisors and Expert Trainers design experiential learning capsules that sharpen essential workplace skills — from junior executives to senior leaders. Programs range from 1-day to week-long immersive journeys.
              </p>
            </div>

            {/* 8 Competencies Grid (4x2 on Desktop) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: 'var(--space-xl)'
              }}
            >
              {WORKFORCE_COMPETENCIES.map((comp, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-2xl) var(--space-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '14px',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      filter: 'drop-shadow(0 6px 12px rgba(255, 77, 0, 0.2))'
                    }}
                  >
                    <Image
                      src={comp.iconImage}
                      alt={comp.title}
                      width={64}
                      height={64}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: 0
                    }}
                  >
                    {comp.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.55, margin: 0 }}>
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Clients (Presentable Enterprise Brand Showcase with Official Logos) */}
        <section style={{ padding: 'var(--space-4xl) 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-primary)',
                  display: 'block',
                  marginBottom: '6px'
                }}
              >
                Thrill Factory Track Record
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
                Past Clients
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                Trusted by leading banks, Fortune 500 multinationals, and high-growth technology enterprises.
              </p>
            </div>

            {/* Official Logos Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 'var(--space-xl)',
                marginBottom: 'var(--space-2xl)'
              }}
            >
              {PAST_CLIENT_LOGOS.map((client, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-2xl)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <div style={{ height: '70px', width: '180px', position: 'relative', marginBottom: '14px' }}>
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 2px 0' }}>
                    {client.name}
                  </h4>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>
                    {client.industry}
                  </span>
                </div>
              ))}
            </div>

            {/* Extended Enterprise Client Badges Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-sm)',
                flexWrap: 'wrap'
              }}
            >
              {ADDITIONAL_ENTERPRISE_CLIENTS.map((name, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Request Form */}
        <section id="corporate-form" style={{ padding: 'var(--space-4xl) 0', backgroundColor: '#FFFFFF' }}>
          <div className="container">
            <div
              style={{
                maxWidth: '860px',
                margin: '0 auto',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'clamp(var(--space-xl), 4vw, var(--space-3xl))',
                boxShadow: '0 16px 36px rgba(15, 23, 42, 0.07)'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                <span className="badge badge-primary" style={{ marginBottom: '8px' }}>
                  Custom Group & Offsite Proposals
                </span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                  Plan Your Company’s Offsite at Thrill Factory
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', maxWidth: '580px', margin: '8px auto 0 auto' }}>
                  Share your team size, expected dates, and preferred activities. Our Dedicated Corporate Events Desk will respond within 2 business hours with an all-inclusive custom itinerary.
                </p>
              </div>

              {formSubmitted ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: 'var(--space-2xl) 0',
                    backgroundColor: 'rgba(34, 197, 94, 0.08)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <CheckCircle size={48} color="var(--color-success)" style={{ margin: '0 auto 12px auto' }} />
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
                    Corporate Enquiry Initiated!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto var(--space-lg) auto' }}>
                    Your requirements have been formatted. Our corporate coordinators will review logistics and reach out with your proposal.
                  </p>
                  <ThemeButton variant="ghost" onClick={() => setFormSubmitted(false)}>
                    Submit Another Request
                  </ThemeButton>
                </div>
              ) : (
                <form onSubmit={handleCorpSubmit}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: 'var(--space-lg)',
                      marginBottom: 'var(--space-lg)'
                    }}
                  >
                    <div className="form-group">
                      <label className="form-label" htmlFor="companyName">
                        Organization / Company Name *
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        placeholder="e.g. Acme Tech Solutions Pvt Ltd"
                        className="form-input"
                        value={corpForm.companyName}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contactPerson">
                        Contact Person Name *
                      </label>
                      <input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        required
                        placeholder="e.g. Rohit Verma"
                        className="form-input"
                        value={corpForm.contactPerson}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        WhatsApp / Contact Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="form-input"
                        value={corpForm.phone}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Official Corporate Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="rohit.verma@company.com"
                        className="form-input"
                        value={corpForm.email}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="eventType">
                        Event Format *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        className="form-select"
                        value={corpForm.eventType}
                        onChange={handleFormChange}
                      >
                        <option value="Corporate Team Offsite">Corporate Team Offsite (1-2 Days)</option>
                        <option value="Leadership Strategy Retreat">Leadership Strategy Retreat</option>
                        <option value="Annual Company Day Celebration">Annual Company Day Celebration</option>
                        <option value="Reward & Recognition (R&R) Trip">Reward & Recognition (R&R) Trip</option>
                        <option value="Custom Group Adventure">Custom Group Adventure</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="teamSize">
                        Estimated Group Size *
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        className="form-select"
                        value={corpForm.teamSize}
                        onChange={handleFormChange}
                      >
                        <option value="10 - 25 Persons">10 - 25 Persons</option>
                        <option value="25 - 50 Persons">25 - 50 Persons</option>
                        <option value="50 - 100 Persons">50 - 100 Persons</option>
                        <option value="100 - 250+ Persons">100 - 250+ Persons</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="visitDate">
                        Estimated Date of Visit
                      </label>
                      <input
                        id="visitDate"
                        name="visitDate"
                        type="date"
                        className="form-input"
                        value={corpForm.visitDate}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 'var(--space-xl)' }}>
                    <label className="form-label" htmlFor="requirements">
                      Specific Requirements, Meals & Custom Challenges
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={3}
                      placeholder="Mention transport from Tapovan, buffet dining preferences, conference facility needs, or specific activity bundles..."
                      className="form-textarea"
                      value={corpForm.requirements}
                      onChange={handleFormChange}
                    />
                  </div>

                  <ThemeButton type="submit" variant="ghost" arrow block>
                    Schedule Now
                  </ThemeButton>

                  <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '12px' }}>
                    Instant confirmation via WhatsApp with dedicated offsite coordinator assigned.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloating />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedItem={selectedActivity}
      />
    </>
  );
}
