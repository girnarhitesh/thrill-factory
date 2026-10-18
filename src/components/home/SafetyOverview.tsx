import React from 'react';
import Link from 'next/link';
import { SAFETY_STANDARDS, MEDICAL_RESTRICTIONS } from '@/data/safetyRules';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Shield, Award, Lock, CheckCircle2, HeartPulse, AlertTriangle, ArrowRight, ClipboardCheck, Footprints, Zap, Users } from 'lucide-react';
import './SafetyOverview.css';

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  ShieldCheck: Shield,
  Lock,
  CheckCircle2,
  HeartPulse,
  Users,
};

const JUMP_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Arrive & Register',
    desc: 'Quick digital check-in at the Shivpuri reception desk, weigh-in, safety waiver signature, and locker bag drop.',
    icon: ClipboardCheck,
    image: '/images/BackgrounOveralyImages/Arrive-register.webp',
  },
  {
    step: '02',
    title: 'Safety Gear Fitting',
    desc: 'Veteran Jump Masters fit your AS/NZS certified full-body harness with redundant backups and carabiner locks.',
    icon: Shield,
    image: '/images/BackgrounOveralyImages/safety-gear-fitting.webp',
  },
  {
    step: '03',
    title: 'Walk The Platform',
    desc: 'Step out onto the fixed steel tower deck 165 FT above the riverbed. Soak in panoramic Himalayan mountain views.',
    icon: Footprints,
    image: '/images/BackgrounOveralyImages/walk-the-platform.webp',
  },
  {
    step: '04',
    title: '3-2-1 Bungee Leap!',
    desc: 'Freefall adrenaline rush at 140 km/h, followed by smooth cord rebound and gentle automated winch recovery.',
    icon: Zap,
    image: '/images/BackgrounOveralyImages/3-2-1-bungee.webp',
  },
];

export const SafetyOverview: React.FC = () => {
  return (
    <section id="safety" className="section section-alt bg-architectural-grid">
      <div className="container">
        {/* Customer Journey Header */}
        <SectionHeader
          tag="The Experience"
          title="How It Works:"
          highlightWord="Your Jump Journey"
          description="From check-in to your 165 FT leap, experience seamless hospitality and zero-compromise safety at every stage."
        />

        {/* 4-Step Customer Jump Journey */}
        <div className="journey-steps-grid">
          {JUMP_JOURNEY_STEPS.map((item) => {
            const StepIcon = item.icon;
            return (
              <div key={item.step} className="journey-step-card">
                <div className="journey-step-photo" aria-hidden="true">
                  <img src={item.image} alt="" />
                </div>
                <span className="journey-step-number-pill">
                  <span>Step</span>
                  {item.step}
                </span>
                <div className="journey-step-icon-wrap">
                  <StepIcon size={22} />
                </div>
                <h3 className="journey-step-title">{item.title}</h3>
                <p className="journey-step-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Safety Standards Header */}
        <SectionHeader
          tag="Safety Is Non-Negotiable"
          title="World-Class Protocols &"
          highlightWord="Safety Standards"
          description="Operating under AS/NZS 5848 international bungee standards with dual-redundant harnesses and daily cord testing."
        />

        <div className="safety-protocol-board">
          <ul className="safety-protocol-list">
            {SAFETY_STANDARDS.map((rule, index) => {
              const Icon = ICON_MAP[rule.iconName] || Shield;
              return (
                <li key={rule.id} className="safety-protocol-row">
                  <span className="safety-protocol-idx">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="safety-protocol-copy">
                    <h4 className="safety-protocol-title">
                      <Icon size={14} strokeWidth={1.75} />
                      {rule.title}
                    </h4>
                    <p className="safety-protocol-desc">{rule.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Medical Restrictions Banner */}
        <div className="safety-medical-box">
          <div className="safety-medical-header">
            <AlertTriangle size={22} strokeWidth={1.75} />
            <h3 className="safety-medical-title">
              Medical & Health Eligibility Criteria
            </h3>
          </div>

          <p className="safety-medical-lead">
            For participant wellbeing, the following medical conditions strictly disqualify individuals from bungee jumping and extreme gravity rides:
          </p>

          <div className="safety-medical-list">
            {MEDICAL_RESTRICTIONS.map((item, idx) => (
              <div key={idx} className="safety-medical-item">
                <div className="safety-medical-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link href="/safety" className="safety-medical-link">
            Read full technical safety report & weight charts
            <ArrowRight size={14} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  );
};
