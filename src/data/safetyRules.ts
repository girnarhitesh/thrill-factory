import { SafetyRule } from '@/types';

export const SAFETY_STANDARDS: SafetyRule[] = [
  {
    id: 'certified-jumpmasters',
    title: 'Certified & Veteran Jump Masters',
    desc: 'Our Jump Masters have overseen tens of thousands of successful jumps and undergo rigorous regular re-certifications according to international bungee jumping safety protocols.',
    iconName: 'Award',
  },
  {
    id: 'australian-standards',
    title: 'Global Engineering & AS/NZS Standards',
    desc: 'All cantilever platforms, bungee cords, steel carabiners, and arresting gear strictly conform to Australian & New Zealand Standards (AS/NZS 5848) code of practice.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'redundant-harness',
    title: 'Dual Redundant Ankle & Body Harnesses',
    desc: 'Every jumper is outfitted with both an anatomical waist/chest full-body harness and a dual-locking ankle harness backup, eliminating single-point vulnerabilities.',
    iconName: 'Lock',
  },
  {
    id: 'daily-inspection',
    title: 'Daily Cord Cycle & Load Testing',
    desc: 'Bungee cords are calibrated according to jumper body weight and are retired far before their certified cycle limits. Rigorous daily load tests are conducted prior to opening.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'medical-screening',
    title: 'Strict Pre-Jump Medical Screenings',
    desc: 'Every participant goes through a thorough health evaluation and digital weight measurement. Individuals with heart conditions, high blood pressure, or recent surgeries are advised not to jump.',
    iconName: 'HeartPulse',
  },
  {
    id: 'valley-rescue',
    title: 'Rapid River Retrieval Crew',
    desc: 'A dedicated ground and water recovery team stands by with specialized retrieval gear to guide jumpers smoothly back to the observation platform.',
    iconName: 'Users',
  }
];

export const MEDICAL_RESTRICTIONS = [
  'Back or neck injuries, spinal issues, or recent dislocations',
  'Heart conditions, pacemaker implants, or uncontrolled high blood pressure',
  'Recent surgeries (within the past 6 months) or bone fractures',
  'Pregnancy (strictly prohibited across all extreme gravity activities)',
  'Epilepsy, fainting spells, or severe neurological disorders',
  'Alcohol or drug impairment (zero-tolerance breathalyzer check)'
];
