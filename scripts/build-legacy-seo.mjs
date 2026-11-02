import fs from 'fs';

const source = fs.readFileSync('public/thrillfactory-seo-metadata.md', 'utf8');
const body = source.split('## 4. Page-by-page metadata')[1].split('## Appendix')[0];
const chunks = body.split(/^### /m).slice(1);

const DESCRIPTIONS = {
  '/pages/contact':
    'Call or WhatsApp the Thrill Factory desk in Shivpuri, Rishikesh for bookings, NH-58 directions, and park hours from 9:00 AM to 10:00 PM daily.',
  '/pages/about-us':
    'The Shivpuri Thrill Factory is a Rishikesh adventure park for bungee jumping, giant swing, SCAD jump, indoor games, VR, and a kids zone in one visit.',
  '/pages/corporate':
    'Book a corporate offsite at Thrill Factory in Shivpuri, Rishikesh, with group adventure slots, team games, and a coordinator for the whole day.',
  '/collections/all-adventures':
    'Browse every adventure at Thrill Factory in Shivpuri, Rishikesh, from bungee jumping and giant swing to indoor games, VR, and the kids zone.',
  '/collections/save-more':
    'Save on Thrill Factory combos in Rishikesh. Bundle bungee jumping, giant swing, reverse bungee, and SCAD jump for less than buying each ticket.',
  '/collections/rope-bungee-combo':
    'Book rope bungee combos at Thrill Factory in Shivpuri, Rishikesh. Pair the 160 ft rope pendulum with other jumps and pay less than singles.',
  '/blogs/news':
    'Read Thrill Factory guides on bungee jumping in Rishikesh, park safety, ticket prices, giant swing, SCAD jump, zip lining, and Shivpuri tips.',
  '/blogs/bungee-jumping-safety-in-rishikesh-how-thrill-factory-makes-adventure-count':
    'See how Thrill Factory in Shivpuri, Rishikesh keeps bungee jumping safe, with a briefing, harness checks, and trained jump masters on every leap.',
  '/collections/all':
    'See all Thrill Factory activities and combos in Shivpuri, Rishikesh, with prices for bungee jumping, swings, indoor games, VR, and kids rides.',
  '/pages/terms-and-condition':
    'Read the Thrill Factory terms for bookings at the Shivpuri adventure park in Rishikesh, including tickets, guest conduct, and use of this website.',
  '/pages/privacy-policy':
    'See how Thrill Factory in Shivpuri, Rishikesh collects and uses your name, phone number, and messages when you enquire, book, or visit the park.',
  '/pages/return-and-refund':
    'Review Thrill Factory refund and cancellation rules for adventure bookings in Shivpuri, Rishikesh, including weather holds and timing changes.',
  '/pages/test':
    'Thrill Factory keeps this older test address online so the Shivpuri, Rishikesh link does not break for visitors who still open it from search.',
  '/pages/partial-payment-policy':
    'Thrill Factory partial payments let you reserve a Shivpuri, Rishikesh adventure with an upfront amount and pay the remaining balance before you jump.',
  '/blogs/news/why-rishikesh-is-india-s-ultimate-destination-for-bungee-jumping':
    'Rishikesh is a leading bungee destination in India. Jump at Thrill Factory in Shivpuri, with valley views, a trained crew, and clear ticket prices.',
  '/blogs/news/first-time-bungee-jumping-complete-beginner-s-guide-by-thrillfactory':
    'A beginner’s guide to a first bungee jump at Thrill Factory in Rishikesh: what to wear, age and weight rules, the safety briefing, and the leap.',
  '/blogs/news/top-10-adventure-activities-in-india-you-must-try-in-2026':
    'Ten adventure activities to try in India in 2026, including bungee jumping, giant swing, and SCAD jump at Thrill Factory in Shivpuri, Rishikesh.',
  '/blogs/news/is-bungee-jumping-safe-myths-vs-facts-explained':
    'Myths and facts about bungee jumping safety, and how Thrill Factory in Shivpuri, Rishikesh checks the gear and briefs every jumper before the leap.',
  '/blogs/news/highest-bungee-jumping-in-india-heres-why-thrill-factory-in-rishikesh-should-be-your-next-stop':
    'Why jumpers choose Thrill Factory in Rishikesh for a high bungee: the Shivpuri platform, the valley view, and a crew that walks you to the edge.',
  '/blogs/news/ziplining-in-uttarakhand-2026-every-zipline-worth-doing':
    'Zip lining in Uttarakhand, including the flying fox at Thrill Factory in Shivpuri, Rishikesh, and what to expect before you clip in and ride.',
  '/blogs/news/the-complete-guide-to-bungee-jumping-in-rishikesh-cost-booking-price-per-person':
    'Bungee jumping in Rishikesh explained: Thrill Factory prices per person, how to book a Shivpuri slot, and what is included on jump day.',
  '/blogs/news/why-splash-bungee-rishikesh-is-one-of-india-s-most-thrilling-adventure-experiences':
    'Splash bungee in Rishikesh adds a water finish to the freefall. See why jumpers book that leap at Thrill Factory in Shivpuri, and how it runs.',
  '/blogs/news/adventure-safety-at-thrill-factory-where-every-thrill-begins-with-preparation':
    'Adventure safety at Thrill Factory starts before the leap, with gear checks, a safety briefing, and trained crew at the Shivpuri park in Rishikesh.',
};

const TITLES = {
  '/products/reverse-bungee-giant-swing-combo-in-rishikesh':
    'Reverse Bungee Giant Swing Combo in Rishikesh | Thrill Factory',
  '/blogs/bungee-jumping-safety-in-rishikesh-how-thrill-factory-makes-adventure-count':
    'Bungee Jumping Safety in Rishikesh | Thrill Factory',
  '/blogs/news/highest-bungee-jumping-in-india-heres-why-thrill-factory-in-rishikesh-should-be-your-next-stop':
    'Highest Bungee Jumping in India | Thrill Factory',
  '/blogs/news/adventure-safety-at-thrill-factory-where-every-thrill-begins-with-preparation':
    'Adventure Safety at Thrill Factory, Rishikesh',
};

const field = (chunk, label) => {
  const match = chunk.match(new RegExp(`\\*\\*${label}:?\\*\\*(?: \\([^)]*\\))?:?\\s*([^\\n]+)`));
  return match ? match[1].trim() : '';
};

const keywordHeading = (title) => title.split(/\s+\|\s+/)[0].replace(/\s+[–-]\s+Thrill Factory$/, '').trim();

const H1S = {
  '/pages/contact': 'Contact Thrill Factory in Shivpuri, Rishikesh',
  '/pages/about-us': 'About Thrill Factory in Shivpuri',
  '/pages/terms-and-condition': 'Thrill Factory Terms and Conditions',
  '/pages/privacy-policy': 'Thrill Factory Privacy Policy',
  '/pages/return-and-refund': 'Thrill Factory Return and Refund Policy',
  '/pages/test': 'Thrill Factory Legacy Test Page',
  '/pages/corporate': 'Corporate Offsites at Thrill Factory, Rishikesh',
  '/pages/partial-payment-policy': 'Thrill Factory Partial Payment Policy',
  '/blogs/news': 'Thrill Factory Adventure News and Guides',
  '/blogs/bungee-jumping-safety-in-rishikesh-how-thrill-factory-makes-adventure-count':
    'Bungee Jumping Safety in Rishikesh',
  '/collections/all': 'All Thrill Factory Activities and Combos',
  '/collections/all-adventures': 'All Adventures at Thrill Factory, Rishikesh',
  '/collections/save-more': 'Save More with Thrill Factory Combos',
  '/collections/rope-bungee-combo': 'Rope Bungee Combos in Rishikesh',
};

const fitDescription = (text) => {
  let value = text.replace(/\s+/g, ' ').trim();
  const extras = [' Book at Thrill Factory in Shivpuri.', ' Open daily in Rishikesh.', ' Call the desk.'];
  for (const extra of extras) {
    if ([...value].length >= 150) break;
    if ([...(value + extra)].length <= 160) value += extra;
  }
  for (const extra of [' Daily.', ' Today.', ' Now.']) {
    if ([...value].length >= 150) break;
    if ([...(value + extra)].length <= 160) {
      value += extra;
      break;
    }
  }
  return value;
};

const pages = chunks.map((chunk) => {
  const path = chunk.match(/^`(\/[^`]*)`/)?.[1];
  if (!path) throw new Error(`No path in chunk: ${chunk.slice(0, 80)}`);
  const rawTitle = field(chunk, 'Meta title');
  const rawDescription = field(chunk, 'Meta description');
  const ogTitleRaw = field(chunk, 'OG title');
  const ogDescriptionRaw = field(chunk, 'OG description');
  const ogType = field(chunk, 'OG type') || 'website';
  const canonical = field(chunk, 'Canonical');
  const h1Raw = field(chunk, 'H1');
  const priceRaw = field(chunk, 'OG price');
  const priceMatch = priceRaw.match(/([\d,]+)/);
  const price = priceMatch ? Number(priceMatch[1].replace(/,/g, '')) : null;

  const title = TITLES[path] || rawTitle;
  const rawDescriptionText = rawDescription === '_not set_' ? '' : rawDescription.replace(/ … _\(auto-filled[\s\S]*$/, '').trim();
  const description = DESCRIPTIONS[path] ? fitDescription(DESCRIPTIONS[path]) : rawDescriptionText;

  const ogTitle =
    ogTitleRaw && !ogTitleRaw.startsWith('_')
      ? ogTitleRaw
      : title;
  const ogDescription = DESCRIPTIONS[path]
    ? description
    : ogDescriptionRaw && !ogDescriptionRaw.startsWith('_') && !ogDescriptionRaw.includes('auto-filled')
      ? ogDescriptionRaw
      : description;

  let h1 = H1S[path] || (h1Raw && h1Raw !== '_none_' ? h1Raw.split(' / ')[0].trim() : '');
  if (!h1 || h1.startsWith('Thrill Combo') || h1.startsWith('Collection:')) {
    h1 = keywordHeading(title);
  }

  const kind = path.startsWith('/products/')
    ? 'product'
    : path.startsWith('/collections/')
      ? 'collection'
      : path.startsWith('/pages/')
        ? 'page'
        : path.startsWith('/blogs/')
          ? 'article'
          : 'home';

  return { path, title, description, ogTitle, ogDescription, ogType, canonical, price, h1, kind };
});

const bad = pages.filter((page) => {
  const length = [...page.description].length;
  return DESCRIPTIONS[page.path] && (length < 150 || length > 160);
});
if (bad.length) {
  for (const page of bad) console.error([...page.description].length, page.path);
  process.exit(1);
}
if (pages.length !== 81) {
  console.error('Expected 81 pages, got', pages.length);
  process.exit(1);
}

const out = `/* Generated from public/thrillfactory-seo-metadata.md. Text only — no image URLs from that file. */
export type LegacySeoPage = {
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  canonical: string;
  price: number | null;
  h1: string;
  kind: 'home' | 'product' | 'collection' | 'page' | 'article';
};

export const LEGACY_SEO_PAGES: LegacySeoPage[] = ${JSON.stringify(pages, null, 2)};

export const legacySeoPage = (path: string) => {
  const key = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  return LEGACY_SEO_PAGES.find((page) => page.path === key);
};
`;

fs.writeFileSync('src/data/legacySeo.ts', out);
console.log('Wrote', pages.length, 'pages');
