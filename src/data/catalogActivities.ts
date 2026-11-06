import rawCatalog from '../../public/images/thrill_factory_activities/activities.json';

export interface CatalogImage {
  position: number;
  alt: string | null;
  width: number;
  height: number;
  original_url: string;
  local_path: string;
  variant_ids: number[];
}

export interface CatalogVariant {
  id: number;
  title: string;
  sku: string | null;
  price: string;
  compare_at_price: string;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  available: boolean;
}

export interface CatalogActivity {
  id: number;
  title: string;
  handle: string;
  url: string;
  categories: string[];
  price: string;
  compare_at_price: string;
  variants: CatalogVariant[];
  description_html: string;
  description_text: string;
  images: CatalogImage[];
}

export interface CatalogTab {
  name: string;
  handle?: string;
  count: number;
}

interface CatalogFile {
  category_tabs: CatalogTab[];
  activities: CatalogActivity[];
}

const catalog = rawCatalog as CatalogFile;

export const CATALOG_TABS = catalog.category_tabs;
export const CATALOG_ACTIVITIES = catalog.activities;

export const catalogImageUrl = (localPath: string) =>
  `/images/thrill_factory_activities/${localPath}`;

const OTHER_POPULAR = /Other Popular(?: Adventure)? Activities at Thrill Factory:?/i;

export const activityDetailHtml = (html: string) => {
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/\son\w+=(?:"[^"]*"|'[^']*')/gi, '')
    .replace(
      /<a\b[^>]*href=(?:"[^"]*(?:javascript|admin\.thrillfactory)[^"]*"|'[^']*(?:javascript|admin\.thrillfactory)[^']*')[^>]*>([\s\S]*?)<\/a>/gi,
      '$1'
    )
    .replace(/<span class="rdw-link-decorator-wrapper">([\s\S]*?)<\/span>/gi, '$1');

  const match = OTHER_POPULAR.exec(cleaned);
  if (!match) return emphasizeQuestions(highlightKeyFacts(cleaned));

  const before = cleaned.slice(0, match.index);
  const start = Math.max(
    before.lastIndexOf('<h2'),
    before.lastIndexOf('<h3'),
    before.lastIndexOf('<div'),
    before.lastIndexOf('<p'),
    0
  );
  const after = cleaned.slice(match.index);
  const nextSection = after.search(/FAQ|Frequently Asked/i);
  const listEnd = after.search(/<\/ul>/i);
  const end = nextSection !== -1
    ? match.index + beforeNextSection(after, nextSection)
    : listEnd === -1
      ? cleaned.length
      : match.index + listEnd + '</ul>'.length;

  return emphasizeQuestions(highlightKeyFacts(cleaned.slice(0, start) + cleaned.slice(end)));
};

const emphasizeQuestions = (html: string) =>
  html.replace(/(>)(\s*Q\d+\s*[:.][^<]*)/g, '$1<strong class="activity-faq-q">$2</strong>');

const highlightKeyFacts = (html: string) => {
  const ulAt = html.search(/<ul\b/i);
  if (ulAt < 0) return html;

  const listEnd = html.slice(ulAt).search(/<\/ul>/i);
  if (listEnd < 0) return html;

  const ulClose = ulAt + listEnd + '</ul>'.length;
  const listText = html.slice(ulAt, ulClose).replace(/<[^>]+>/g, ' ');
  if (!/(Age|Weight|Solo|Couple|₹|Rs\.|Note:|Timing|Height:)/i.test(listText)) return html;

  let blockStart = ulAt;
  const before = html.slice(0, ulAt);
  const leadAt = before.lastIndexOf('<p');
  if (leadAt >= 0) {
    const lead = before.slice(leadAt).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (lead.length > 0 && lead.length < 240 && !before.slice(leadAt).includes('</div>')) {
      blockStart = leadAt;
    }
  }

  return `${html.slice(0, blockStart)}<div class="activity-key-facts">${html.slice(blockStart, ulClose)}</div>${html.slice(ulClose)}`;
};

const beforeNextSection = (after: string, sectionIndex: number) => {
  const head = after.slice(0, sectionIndex);
  return Math.max(
    head.lastIndexOf('<h2'),
    head.lastIndexOf('<h3'),
    head.lastIndexOf('<div'),
    head.lastIndexOf('<p'),
    sectionIndex
  );
};

export const formatCatalogPrice = (price: string) => `Rs. ${price}`;

export const catalogSavePercent = (price: string, compareAtPrice: string) => {
  const current = Number(price);
  const previous = Number(compareAtPrice);
  if (!compareAtPrice || !Number.isFinite(current) || !Number.isFinite(previous) || previous <= current) {
    return null;
  }
  return Math.round(((previous - current) / previous) * 100);
};

export const activitiesForCatalogTab = (tab: CatalogTab) => {
  if (!tab.handle || tab.name === 'All Adventures') return CATALOG_ACTIVITIES;
  return CATALOG_ACTIVITIES.filter((activity) => activity.categories.includes(tab.name));
};

/** Hover clips already on the site. Other activities stay on the still image. */
const PREVIEW_VIDEOS: Record<string, string> = {
  '360-degree-cycle': '/images/ActivitiesVideos/360-degree-cycle.mp4',
  'giant-swing': '/images/ActivitiesVideos/Giant-Swing-Video.mp4',
  'vr-bungee': '/images/ActivitiesVideos/VR-Bungee.mp4',
  archery: '/images/ActivitiesVideos/Archery-video.mp4',
  'pool-table': '/images/ActivitiesVideos/pool-table.mp4',
  'wall-climbing': '/images/ActivitiesVideos/wall-climb.mp4',
  'bungee-jumping': '/images/ActivitiesVideos/freestyle-bungee.mp4',
  'free-style-bungee': '/images/ActivitiesVideos/Free-Style-Bungee-in-Rishikesh.mp4',
  'scad-jumping-in-rishikesh': '/images/ActivitiesVideos/scad-jump-video-thrill.mp4',
  'sky-cycling': '/images/ActivitiesVideos/sky-cycle-video.mp4',
  cricket: '/images/ActivitiesVideos/cricket-thrill-video.mp4',
  'foot-pool': '/images/ActivitiesVideos/Foot-Pool.mp4',
  'reverse-bungee': '/images/ActivitiesVideos/reverse-bungee-thrill.mp4',
};

export const catalogPreviewVideo = (handle: string) => PREVIEW_VIDEOS[handle];
