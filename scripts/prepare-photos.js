// One-off script: pulls selected source photos from the recovered-photos
// folder, auto-rotates using EXIF orientation, resizes, and writes
// optimized copies into public/photos/ for the website.
//
// Run with: node scripts/prepare-photos.js

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SOURCE_DIR = "D:/RecoverdPhotos/30-08-2026/Photo";
const OUT_DIR = path.join(__dirname, "..", "public", "photos");

// Hero background image (couple together)
const HERO = { file: "DSC05668.JPG", out: "hero.jpg" };

// Gallery preview photos, in display order
const GALLERY = [
  { file: "DSC05359.JPG", out: "gallery-01.jpg" }, // welcome sign
  { file: "DSC05462.JPG", out: "gallery-02.jpg" }, // bride portrait
  { file: "DSC05566.JPG", out: "gallery-03.jpg" }, // bride full length
  { file: "DSC05775.JPG", out: "gallery-04.jpg" }, // couple candid
  { file: "DSC05881.JPG", out: "gallery-05.jpg" }, // couple with card
  { file: "DSC05989.JPG", out: "gallery-06.jpg" }, // group photo
  { file: "DSC06095.JPG", out: "gallery-07.jpg" }, // ring ceremony
  { file: "DSC06198.JPG", out: "gallery-08.jpg" }, // family moment
];

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Hero: wide, high quality background image
  await sharp(path.join(SOURCE_DIR, HERO.file))
    .rotate() // auto-orient using EXIF
    .resize({ width: 2200, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT_DIR, HERO.out));
  console.log("hero ->", HERO.out);

  for (const { file, out } of GALLERY) {
    await sharp(path.join(SOURCE_DIR, file))
      .rotate()
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(OUT_DIR, out));
    console.log("gallery ->", out);
  }

  console.log("Done. Photos written to", OUT_DIR);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
