export interface Activity {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  originalPrice?: number;
  height?: string;
  duration?: string;
  ageLimit?: string;
  weightLimit?: string;
  category: 'extreme' | 'moderate' | 'entertainment' | 'kids' | 'vr' | string;
  tag?: string;
  image: string;
  features: string[];
  paragraphs?: string[];
  includesDSLRVideo?: boolean;
}

export interface PackageCombo {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  popular?: boolean;
  activitiesIncluded: string[];
  highlights: string[];
  suitableFor: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  activity: string;
  date: string;
  comment: string;
  verified: boolean;
  actionImage?: string;
  photos?: string[];
  overflowCount?: number;
  avatar?: string;
  tagline?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'safety' | 'activities' | 'location';
}

export interface SafetyRule {
  id: string;
  title: string;
  desc: string;
  iconName: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  selectedActivityOrPackage: string;
  bookingDate: string;
  numberOfPersons: number;
  notes?: string;
}
