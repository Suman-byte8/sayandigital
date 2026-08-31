// ============================================================
//  Non-translatable site configuration.
//  All user-facing copy now lives in src/i18n/translations/{en,bn}.js
//  — this file only holds language-independent data (image assets,
//  external links) that components pull directly.
// ============================================================

import srowthLogo from "../assets/sponsors_logo/srowth_logo.png";
import maaJewelersLogo from "../assets/sponsors_logo/maa_jewelery_logo.png";

// Every image under src/assets/images/<year>/<n>.jpg is bundled and
// grouped by year automatically — add/remove files there and this
// updates on the next build, no manual edits needed here.
const galleryImageModules = import.meta.glob("../assets/images/*/*.jpg", {
  eager: true,
  import: "default",
});

function buildGalleryData() {
  const byYear = {};

  Object.entries(galleryImageModules).forEach(([path, url]) => {
    const match = path.match(/images\/(\d{4})\/(\d+)\.jpg$/);
    if (!match) return;
    const [, year, num] = match;
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push({ num: Number(num), url });
  });

  return Object.fromEntries(
    Object.entries(byYear).map(([year, images]) => [
      year,
      images.sort((a, b) => a.num - b.num).map((img) => img.url),
    ])
  );
}

export const GALLERY_DATA = buildGalleryData();

export const DEVELOPER_PORTFOLIO_URL = "https://sumancodes.netlify.app";
export const DEVELOPER_PORTFOLIO_LABEL = "sumancodes.netlify.app";
export const DEVELOPER_PHONE_DISPLAY = "+91 77976 07126";
export const DEVELOPER_PHONE_TEL = "+917797607126";

export const SPONSOR_LOGOS = [
  { src: srowthLogo, alt: "Srowth Packaged Drinking Water" },
  { src: maaJewelersLogo, alt: "Maa Jewellers" },
];

// Set to true to accept real submissions. While false, the application
// form renders as a preview only — every field/checkbox/upload/submit
// control is disabled and a notice banner is shown instead. Flip this
// back to true (and redeploy) whenever applications should open.
export const APPLICATIONS_OPEN = false;

// Optional human-readable opening date shown in the preview banner,
// e.g. "1 October 2026". Leave empty to show a generic "opening soon"
// message instead.
export const APPLICATIONS_OPEN_DATE = "";
