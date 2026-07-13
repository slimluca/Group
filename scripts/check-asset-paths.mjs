import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const scannedDirs = ["app", "components", "data", "lib"];
const extensions = new Set([
  ".avif",
  ".csv",
  ".gif",
  ".ico",
  ".jpg",
  ".jpeg",
  ".json",
  ".pdf",
  ".png",
  ".svg",
  ".webp",
]);
const publicFiles = new Map();
const failures = [];

for (const file of walk(publicDir)) {
  const relative = `/${path.relative(publicDir, file).replaceAll(path.sep, "/")}`;
  publicFiles.set(relative, file);
  publicFiles.set(relative.toLowerCase(), file);
}

const pathPattern = /["'`](\/(?:brand|data|downloads|images|favicon|icon|apple-icon|opengraph-image)[^"'`)\s?#]+)["'`]/g;

for (const dir of scannedDirs) {
  for (const file of walk(path.join(root, dir))) {
    if (!/\.(tsx|ts|css|mjs|json)$/.test(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    for (const match of text.matchAll(pathPattern)) {
      const assetPath = match[1];
      if (!extensions.has(path.extname(assetPath).toLowerCase())) continue;
      const exact = publicFiles.get(assetPath);
      if (exact) continue;
      const caseInsensitive = publicFiles.get(assetPath.toLowerCase());
      if (caseInsensitive) {
        failures.push(
          `${path.relative(root, file)} references ${assetPath}, but actual casing is /${path.relative(publicDir, caseInsensitive).replaceAll(path.sep, "/")}`,
        );
      } else {
        failures.push(`${path.relative(root, file)} references missing public asset ${assetPath}`);
      }
    }
  }
}

if (failures.length) {
  console.error("Asset path check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Asset path check passed: referenced local public assets exist with exact casing.");

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if ([".next", "node_modules"].includes(entry.name)) continue;
      yield* walk(full);
    } else {
      yield full;
    }
  }
}
