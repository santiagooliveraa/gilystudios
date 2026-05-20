import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/og-image.png");
const MASCOT = path.resolve("public/mascots/hero-greeting.png");

const W = 1200;
const H = 630;

// Base: dark background with subtle radial glow
const bgSvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="78%" cy="58%" r="55%">
      <stop offset="0%" stop-color="#F43F5E" stop-opacity="0.18"/>
      <stop offset="55%" stop-color="#F43F5E" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#F43F5E" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="#0a0a0a"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Wordmark -->
  <text x="80" y="200" font-family="Geist, system-ui, -apple-system, sans-serif" font-size="80" font-weight="600" fill="#FAFAFA" letter-spacing="-3">GilyStudios</text>
  <text x="755" y="148" font-family="Geist, system-ui, sans-serif" font-size="24" font-weight="400" fill="#A0A0A0">™</text>

  <!-- Tagline first line -->
  <text x="80" y="320" font-family="Geist, system-ui, sans-serif" font-size="56" font-weight="500" fill="#FAFAFA" letter-spacing="-2">Where creativity meets</text>

  <!-- Tagline second line (accent) -->
  <text x="80" y="395" font-family="Geist, system-ui, sans-serif" font-size="56" font-weight="300" font-style="italic" fill="#F43F5E" letter-spacing="-2">automation.</text>

  <!-- Eyebrow tag -->
  <rect x="80" y="430" width="280" height="34" rx="17" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <circle cx="100" cy="447" r="3" fill="#F43F5E"/>
  <text x="115" y="452" font-family="Geist, system-ui, sans-serif" font-size="13" font-weight="500" fill="#A0A0A0" letter-spacing="2">CREATIVE &amp; AI STUDIO · EST. 2026</text>

  <!-- Footer line -->
  <text x="80" y="555" font-family="Geist, system-ui, sans-serif" font-size="18" fill="#999">gilystudios.com</text>
</svg>
`;

const bg = await sharp(Buffer.from(bgSvg)).png().toBuffer();

// Composite mascot on the right
const mascot = await sharp(MASCOT).resize({ height: 480 }).png().toBuffer();
const mascotMeta = await sharp(mascot).metadata();

const finalImage = await sharp(bg)
  .composite([
    {
      input: mascot,
      left: W - mascotMeta.width - 60,
      top: Math.round((H - mascotMeta.height) / 2),
    },
  ])
  .png()
  .toFile(OUT);

console.log(`✓ OG image generated: ${OUT}`);
console.log(`  Size: ${finalImage.width}x${finalImage.height}`);
