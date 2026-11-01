import { SafetyRule } from '@/types';

export const SAFETY_STANDARDS: SafetyRule[] = [
  {
    id: 'extreme-rides',
    title: 'Extreme Ride Standards',
    desc: 'Certified guides and daily checks on bungee, swing, zip, rope, reverse, and SCAD.',
    iconName: 'Award',
  },
  {
    id: 'moderate-rides',
    title: 'Moderate Adventure Checks',
    desc: 'Briefing and harness for sky cycling, rope course, quick jump, and 360 cycle.',
    iconName: 'Lock',
  },
  {
    id: 'entertainment',
    title: 'Games & Ground Activities',
    desc: 'Staff and rules for climbing, shooting, archery, cricket, bowling, and foot pool.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'kids-zone',
    title: 'Supervised Kids Zone',
    desc: 'Staffed, age-appropriate soft play, ball pool, trampoline, and kids rides.',
    iconName: 'Users',
  },
  {
    id: 'vr-arcade',
    title: 'VR & Arcade Supervision',
    desc: 'Headset checks and staff nearby for VR bungee, battlefield, photobooth, and arcade.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'health-screening',
    title: 'Health Rules for High Rides',
    desc: 'Health and weight check on high rides. Listed conditions may restrict participation.',
    iconName: 'HeartPulse',
  },
];

export const MEDICAL_RESTRICTIONS = [
  {
    title: 'Back or Neck Injuries',
    detail: 'Spinal problems, neck injuries, or significant bone and joint conditions.',
  },
  {
    title: 'Heart Conditions',
    detail: 'Heart disease, pacemaker implants, or uncontrolled high blood pressure.',
  },
  {
    title: 'Neurological Conditions',
    detail: 'Epilepsy, seizures, fainting spells, or severe neurological disorders.',
  },
  {
    title: 'Respiratory Conditions',
    detail: 'Asthma, breathing difficulties, or other significant respiratory problems.',
  },
  {
    title: 'Recent Surgeries or Fractures',
    detail: 'Recent surgery, bone fractures, or injuries that may affect safe participation.',
  },
  {
    title: 'Pregnancy',
    detail: 'Participation is not permitted during pregnancy.',
  },
  {
    title: 'Alcohol or Drug Impairment',
    detail: 'Participation is not allowed while under the influence of alcohol or drugs.',
  },
];
