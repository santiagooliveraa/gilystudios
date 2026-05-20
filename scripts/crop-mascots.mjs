import sharp from "sharp";
import path from "path";

const SRC = path.resolve("public/mascots/grid.png");
const OUT = path.resolve("public/mascots");

const img = sharp(SRC);
const meta = await img.metadata();
const W = meta.width;
const H = meta.height;

console.log(`Grid: ${W}x${H}`);

// Smaller cellH and shifted row centers to avoid section labels ("KIRO", "ORBIT")
const cellW = Math.round(W * 0.235);
const cellH = Math.round(H * 0.255);

const rowCentersY = [0.225, 0.555, 0.875].map((r) => Math.round(H * r));
const colCentersX = [0.125, 0.375, 0.625, 0.875].map((c) => Math.round(W * c));

const poses = [
  { row: 0, col: 0, name: "hero-greeting.png" },
  { row: 0, col: 1, name: "fist-bump.png" },
  { row: 0, col: 2, name: "duo-laptop.png" },
  { row: 0, col: 3, name: "duo-pointing.png" },
  { row: 1, col: 0, name: "kiro-thinking.png" },
  { row: 1, col: 1, name: "kiro-laptop.png" },
  { row: 1, col: 2, name: "kiro-idea.png" },
  { row: 1, col: 3, name: "kiro-dashboard.png" },
  { row: 2, col: 0, name: "orbit-front.png" },
  { row: 2, col: 1, name: "orbit-search.png" },
  { row: 2, col: 2, name: "orbit-thinking.png" },
  { row: 2, col: 3, name: "orbit-report.png" },
];

/**
 * Flood-fill background removal — only kills near-black pixels that
 * are connected to the edges. Internal dark pixels (Kiro's jacket)
 * are preserved.
 */
function removeBackgroundFloodFill(data, width, height, threshold = 30) {
  const total = width * height;
  const isBg = new Uint8Array(total); // 0 = not bg, 1 = bg

  const lumaAt = (idx) => {
    const i = idx * 4;
    return 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
  };

  // Seed queue with all edge pixels that are below threshold
  const queue = [];
  for (let x = 0; x < width; x++) {
    [0, height - 1].forEach((y) => {
      const idx = y * width + x;
      if (lumaAt(idx) < threshold) {
        isBg[idx] = 1;
        queue.push(idx);
      }
    });
  }
  for (let y = 0; y < height; y++) {
    [0, width - 1].forEach((x) => {
      const idx = y * width + x;
      if (lumaAt(idx) < threshold && !isBg[idx]) {
        isBg[idx] = 1;
        queue.push(idx);
      }
    });
  }

  // BFS — 4-connected
  while (queue.length > 0) {
    const idx = queue.shift();
    const x = idx % width;
    const y = Math.floor(idx / width);
    const neighbors = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
    for (const [nx, ny] of neighbors) {
      if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
      const nidx = ny * width + nx;
      if (isBg[nidx]) continue;
      if (lumaAt(nidx) < threshold) {
        isBg[nidx] = 1;
        queue.push(nidx);
      }
    }
  }

  // Apply: bg pixels → alpha 0, edge pixels get soft falloff for anti-alias
  for (let idx = 0; idx < total; idx++) {
    const i = idx * 4;
    if (isBg[idx]) {
      data[i + 3] = 0;
    } else {
      // Check if neighbors are bg — if yes, this is an edge pixel, apply soft alpha
      const x = idx % width;
      const y = Math.floor(idx / width);
      let bgNeighbors = 0;
      for (const [dx, dy] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
        if (isBg[ny * width + nx]) bgNeighbors++;
      }
      if (bgNeighbors > 0) {
        const luma = lumaAt(idx);
        // Soft alpha based on how dark + how many bg neighbors
        if (luma < 50) {
          const lumaFactor = Math.min(1, luma / 50);
          const neighborFactor = 1 - bgNeighbors * 0.15;
          data[i + 3] = Math.round(255 * lumaFactor * neighborFactor);
        }
      }
    }
  }

  return data;
}

for (const pose of poses) {
  const cx = colCentersX[pose.col];
  const cy = rowCentersY[pose.row];
  const left = Math.max(0, cx - Math.round(cellW / 2));
  const top = Math.max(0, cy - Math.round(cellH / 2));
  const width = Math.min(cellW, W - left);
  const height = Math.min(cellH, H - top);

  const TARGET_HEIGHT = 360;
  const cropped = await sharp(SRC)
    .extract({ left, top, width, height })
    .resize({ height: TARGET_HEIGHT, withoutEnlargement: false })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const newData = removeBackgroundFloodFill(
    cropped.data,
    cropped.info.width,
    cropped.info.height,
    30
  );

  const buffer = await sharp(newData, {
    raw: {
      width: cropped.info.width,
      height: cropped.info.height,
      channels: 4,
    },
  })
    .png()
    .toBuffer();

  const trimmed = await sharp(buffer)
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 })
    .png()
    .toBuffer();

  const outPath = path.join(OUT, pose.name);
  await sharp(trimmed).png().toFile(outPath);

  const trimMeta = await sharp(trimmed).metadata();
  console.log(`✓ ${pose.name}  →  ${trimMeta.width}x${trimMeta.height}`);
}

console.log("\nDone — flood-fill background removal preserves internal dark areas.");
