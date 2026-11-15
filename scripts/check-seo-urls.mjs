import fs from 'fs';
import path from 'path';

const root = path.resolve(import.meta.dirname, '..');
const source = fs.readFileSync(path.join(root, 'src/data/legacySeo.ts'), 'utf8');
const marker = 'export const LEGACY_SEO_PAGES: LegacySeoPage[] = ';
const start = source.indexOf(marker);
const end = source.indexOf('\n];', start);
const pages = JSON.parse(source.slice(start + marker.length, end + 2));
const origin = process.env.SEO_ORIGIN || 'http://localhost:3001';

const decode = (value) =>
  value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const expectedFor = (page) => {
  if (page.path === '/pages/test') return { status: 404 };
  if (page.path === '/pages/corporate') return { status: 301, location: '/corporate' };
  if (page.path.startsWith('/blogs/') && !page.path.startsWith('/blogs/news')) {
    return { status: 301, location: `/blogs/news/${page.path.split('/').pop()}` };
  }
  return {
    status: 200,
    title: page.title,
    description: page.description,
    h1: page.h1,
    canonical: `https://thrillfactory.in${page.path === '/' ? '/' : page.path}`,
  };
};

const extras = [
  { path: '/contact', status: 301, location: '/pages/contact' },
  { path: '/blogs', status: 301, location: '/blogs/news' },
  {
    path: '/blogs/ziplining-in-uttarakhand-every-zipline-worth-doing-in-rishikesh',
    status: 301,
    location: '/blogs/news/ziplining-in-uttarakhand-2026-every-zipline-worth-doing',
  },
  { path: '/no-such-page-xyz', status: 404 },
];

const targets = [
  ...pages.map((page) => ({ path: page.path, ...expectedFor(page) })),
  ...extras,
];

const check = async (target) => {
  const response = await fetch(`${origin}${target.path}`, { redirect: 'manual' });
  const location = response.headers.get('location') || '';
  const fails = [];
  if (response.status !== target.status) fails.push(`status ${response.status} expected ${target.status}`);
  if (target.location) {
    const hop = location.replace(origin, '');
    if (hop !== target.location && location !== target.location) {
      fails.push(`location ${location || '(none)'} expected ${target.location}`);
    }
  }
  let missingAlt = 0;
  if (target.status === 200) {
    const html = await response.text();
    const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
    const description = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
    const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
    const h1 = decode((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '');
    if (title !== target.title) fails.push(`title "${title}"`);
    if (description !== target.description) fails.push(`description mismatch`);
    if (h1 !== target.h1) fails.push(`h1 "${h1}"`);
    if (canonical !== target.canonical && !(target.path === '/' && canonical === 'https://thrillfactory.in')) {
      fails.push(`canonical ${canonical || '(none)'}`);
    }
    const images = html.match(/<img\b[^>]*>/g) || [];
    missingAlt = images.filter((tag) => !/\salt=/.test(tag)).length;
    if (missingAlt) fails.push(`${missingAlt} img missing alt`);
  }
  return { path: target.path, ok: fails.length === 0, fails };
};

const queue = [...targets];
const results = [];
const workers = Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const target = queue.shift();
    results.push(await check(target));
  }
});
await Promise.all(workers);
results.sort((a, b) => a.path.localeCompare(b.path));

const failed = results.filter((row) => !row.ok);
for (const row of results) {
  console.log(`${row.ok ? 'PASS' : 'FAIL'}\t${row.path}${row.ok ? '' : `\t${row.fails.join(' | ')}`}`);
}
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) process.exitCode = 1;
