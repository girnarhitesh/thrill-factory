import images from './blogImages.json';
import posts from './blogPosts.json';

export type BlogText = { t: 'text'; v: string; b?: true; i?: true };
export type BlogLink = { t: 'link'; href: string; c: BlogInline[] };
export type BlogBreak = { t: 'br' };
export type BlogInline = BlogText | BlogLink | BlogBreak;

export type BlogBlock =
  | { type: 'p'; c: BlogInline[] }
  | { type: 'h2'; c: BlogInline[] }
  | { type: 'h3'; c: BlogInline[] }
  | { type: 'h4'; c: BlogInline[] }
  | { type: 'ul'; items: BlogInline[][] }
  | { type: 'ol'; items: BlogInline[][] }
  | { type: 'table'; rows: BlogInline[][][][] }
  | { type: 'blank' };

export interface BlogPost {
  title: string;
  slug: string;
  seoTitle: string;
  description: string;
  date: string;
  liveUrl: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  blocks: BlogBlock[];
}

const blogImages = images as Record<string, { src: string; width: number; height: number }>;

export const blogImageSrc = (src: string) => encodeURI(src);

export const BLOG_POSTS = (posts as Omit<BlogPost, 'image' | 'imageWidth' | 'imageHeight'>[]).map((post) => {
  const image = blogImages[post.slug];
  return {
    ...post,
    image: image?.src || '',
    imageWidth: image?.width || 0,
    imageHeight: image?.height || 0,
  };
});

export const blogBySlug = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug);

export const blogNewsPath = (slug: string) => {
  if (slug === 'ziplining-in-uttarakhand-every-zipline-worth-doing-in-rishikesh') {
    return '/blogs/news/ziplining-in-uttarakhand-2026-every-zipline-worth-doing';
  }
  return `/blogs/news/${slug}`;
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatBlogDate = (iso: string) => {
  const [year, month, day] = iso.split('-');
  const monthName = MONTHS[Number(month) - 1];
  if (!year || !monthName || !day) return iso;
  return `${Number(day)} ${monthName} ${year}`;
};

export const BLOG_POSTS_NEWEST = [...BLOG_POSTS].sort((a, b) => {
  if (a.date === b.date) return 0;
  return a.date < b.date ? 1 : -1;
});
