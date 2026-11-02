import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const root = process.cwd();

const jobs = [
  { file: 'public/images/HeroBackground.jpg', maxWidth: 2700, quality: 75 },
  { file: 'public/images/combo-thrill-1.jpg', maxWidth: 800, quality: 75 },
  { file: 'public/images/combo-thrill-3.jpg', maxWidth: 800, quality: 75 },
  { file: 'public/images/combo-thrill-4.jpg', maxWidth: 800, quality: 75 },
  { file: 'public/images/combo-thrill-9.jpg', maxWidth: 800, quality: 75 },
  { file: 'public/images/combo-thrill-10.jpg', maxWidth: 800, quality: 75 },
  { file: 'public/images/activities/rope-bungee.jpg', maxWidth: 1200, quality: 75 },
  { file: 'public/images/rope-bungee.jpg', maxWidth: 1200, quality: 75 },
  { file: 'public/images/activities/bungee-jumping.jpg', maxWidth: 1200, quality: 75 },
  { file: 'public/images/activities/zip-lining-in-rishikesh.jpg', maxWidth: 1200, quality: 75 },
  { file: 'public/images/thrill_factory_activities/09_scad-jumping-in-rishikesh/images/scadjump.jpeg', maxWidth: 1200, quality: 75 },
  { file: 'public/images/thrill_factory_activities/02_giant-swing/images/swing.jpeg', maxWidth: 1200, quality: 75 },
  { file: 'public/images/freestyle-bungee-image.jpeg', maxWidth: 1200, quality: 75 },
  { file: 'public/images/thrill_factory_activities/11_reverse-bungee/images/reverse-bungee.jpeg', maxWidth: 1200, quality: 75 },
  { file: 'public/images/bungee-jumping.png', maxHeight: 360, quality: 80 },
  { file: 'public/images/Background-overlay-image-thrill.webp', maxWidth: 1600, quality: 72 },
  { file: 'public/images/BackgrounOveralyImages/Arrive-register.webp', maxWidth: 1400, quality: 70 },
  { file: 'public/images/thrill-factory-logo.png', maxWidth: 540, quality: 80 },
  { file: 'public/images/thrill-factory-logo-white.png', maxWidth: 540, quality: 80 },
  { file: 'public/images/okghumo-logo-white.png', maxHeight: 176, quality: 80 },
];

const extraAvif = [
  'public/images/Background-overlay-image-thrill.webp',
];

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

const encode = (image, file, quality) => {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.png') return image.png({ compressionLevel: 9, palette: false });
  if (ext === '.webp') return image.webp({ quality });
  if (ext === '.png') return image.png({ compressionLevel: 9 });
  return image.jpeg({ quality, mozjpeg: true });
};

const report = [];

for (const job of jobs) {
  const absolute = path.join(root, job.file);
  if (!fs.existsSync(absolute)) {
    report.push({ file: job.file, skipped: 'missing' });
    continue;
  }
  const before = fs.statSync(absolute).size;
  const input = sharp(absolute, { failOn: 'none' });
  const meta = await input.metadata();
  let pipeline = sharp(absolute, { failOn: 'none' }).rotate();
  const width = meta.width || 0;
  const height = meta.height || 0;
  if (job.maxWidth && width > job.maxWidth) {
    pipeline = pipeline.resize({ width: job.maxWidth, withoutEnlargement: true });
  } else if (job.maxHeight && height > job.maxHeight) {
    pipeline = pipeline.resize({ height: job.maxHeight, withoutEnlargement: true });
  }
  const ext = path.extname(job.file).toLowerCase();
  if (ext === '.png') pipeline = pipeline.png({ compressionLevel: 9 });
  else if (ext === '.webp') pipeline = pipeline.webp({ quality: job.quality });
  else pipeline = pipeline.jpeg({ quality: job.quality, mozjpeg: true });
  const buffer = await pipeline.toBuffer();
  const afterMeta = await sharp(buffer).metadata();
  if (buffer.length < before) {
    fs.writeFileSync(absolute, buffer);
  }
  const after = fs.statSync(absolute).size;
  report.push({
    file: job.file,
    before: kb(before),
    after: kb(after),
    from: `${width}x${height}`,
    to: `${afterMeta.width}x${afterMeta.height}`,
  });
}

const png = path.join(root, 'public/images/120m-heighest-bungee.PNG');
const webpOut = path.join(root, 'public/images/120m-heighest-bungee.webp');
if (fs.existsSync(png)) {
  const before = fs.statSync(png).size;
  const meta = await sharp(png).metadata();
  await sharp(png)
    .rotate()
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(webpOut);
  const after = fs.statSync(webpOut).size;
  const outMeta = await sharp(webpOut).metadata();
  report.push({
    file: 'public/images/120m-heighest-bungee.PNG -> .webp',
    before: kb(before),
    after: kb(after),
    from: `${meta.width}x${meta.height}`,
    to: `${outMeta.width}x${outMeta.height}`,
  });
}

for (const file of extraAvif) {
  const absolute = path.join(root, file);
  if (!fs.existsSync(absolute)) continue;
  const avif = absolute.replace(/\.webp$/i, '.avif');
  await sharp(absolute).avif({ quality: 55 }).toFile(avif);
  report.push({ file: path.relative(root, avif), after: kb(fs.statSync(avif).size) });
}

console.log(JSON.stringify(report, null, 2));
