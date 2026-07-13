import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const cssPath = path.join(root, "app", "globals.css");
const css = fs.readFileSync(cssPath, "utf8");
const failures = [];

function fail(message) {
  failures.push(message);
}

if (!css.includes("--max: 1180px")) {
  fail("The shared shell token --max is no longer the approved 1180px homepage width.");
}

const narrowTextPatterns = [
  /\.editorial-reading\s*>\s*p[^{}]*{[^}]*max-width:\s*(?:min\([^)]*82ch|[0-9.]+ch|[0-9]+px)/,
  /\.index-reading\s*>\s*p[^{}]*{[^}]*max-width:\s*(?:min\([^)]*82ch|[0-9.]+ch|[0-9]+px)/,
  /\.information-copy\s*>\s*p[^{}]*{[^}]*max-width:\s*(?:[0-9.]+ch|[0-9]+px)/,
  /\.content-section\s+\.editorial-copy\s*{[^}]*max-width:\s*(?:[0-9.]+ch|[0-9]+px)/,
  /\.split\s+\.editorial-copy[^{}]*{[^}]*max-width:\s*(?:[0-9.]+ch|[0-9]+px)/,
];

for (const pattern of narrowTextPatterns) {
  if (pattern.test(css)) {
    fail(`Narrow text wrapper regression matched: ${pattern}`);
  }
}

if (failures.length) {
  console.error("Layout alignment check failed:");
  for (const message of failures) console.error(`- ${message}`);
  process.exit(1);
}

console.log("Layout alignment check passed: shared shell width is consistent and narrow text wrappers were not reintroduced.");
