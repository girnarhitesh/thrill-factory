export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Activities', href: '/activities' },
  { label: 'Combos', href: '/combos' },
  { label: 'Kids Zone', href: '/kids-zone' },
  { label: 'Corporate', href: '/corporate' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Safety', href: '/safety' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  activities: [
    { label: 'Bungee Jumping (165 ft)', href: '/activities#bungee-jumping' },
    { label: 'Reverse Bungee (180 ft)', href: '/activities#reverse-bungee' },
    { label: 'SCAD Jump', href: '/activities#scad-jump' },
    { label: 'Giant Swing', href: '/activities#giant-swing' },
    { label: 'Zip Lining / Flying Fox', href: '/activities#zipline' },
    { label: 'Rope Bungee (160 ft)', href: '/activities#rope-bungee' },
  ],
  company: [
    { label: 'About Thrill Factory', href: '/contact#about' },
    { label: 'Corporate & Offsites', href: '/corporate' },
    { label: 'Adventure Blogs & Guides', href: '/blogs' },
    { label: 'Safety & Equipment', href: '/safety' },
    { label: 'Save More Combos', href: '/combos' },
    { label: 'Kids Adventure Zone', href: '/kids-zone' },
    { label: 'Directions & Map', href: '/contact#location' },
  ],
  policies: [
    { label: 'Medical & Weight Rules', href: '/safety#medical' },
    { label: 'Cancellation Policy', href: '/safety#cancellation' },
    { label: 'Terms & Conditions', href: '/safety#terms' },
  ],
};
