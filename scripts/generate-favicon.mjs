import sharp from "sharp";
import path from "path";

// Use Kiro's face for the favicon — friendliest and most identifiable
const SRC = path.resolve("public/mascots/kiro-thinking.png");

// Background plate for favicon — dark with rounded corners
async function makeIcon(size, outName) {
  // Create dark rounded background
  const bgSvg = `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size * 0.22}" ry="${size * 0.22}" fill="#0a0a0a"/>
</svg>`;
  const bg = await sharp(Buffer.from(bgSvg)).png().toBuffer();

  // Crop just Kiro's face/head area from the source (top 60% of image)
  const srcMeta = await sharp(SRC).metadata();
  const cropHeight = Math.round(srcMeta.height * 0.62);
  const cropWidth = Math.min(srcMeta.width, Math.round(cropHeight * 0.95));
  const cropLeft = Math.round((srcMeta.width - cropWidth) / 2);

  const mascotInset = Math.round(size * 0.1);
  const mascotSize = size - mascotInset * 2;

  const mascot = await sharp(SRC)
    .extract({ left: cropLeft, top: 0, width: cropWidth, height: cropHeight })
    .resize({ width: mascotSize, height: mascotSize, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(bg)
    .composite([{ input: mascot, left: mascotInset, top: mascotInset }])
    .png()
    .toFile(path.resolve(outName));

  console.log(`✓ ${outName} (${size}x${size})`);
}

await makeIcon(32, "src/app/icon.png");
await makeIcon(180, "src/app/apple-icon.png");
await makeIcon(512, "public/icon-512.png");

console.log("\nFavicons generated.");
