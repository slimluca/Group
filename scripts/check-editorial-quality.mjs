import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const includeDirs = ["app", "components", "data", "lib"];
const includeExt = new Set([".tsx", ".ts"]);
const failures = [];

const phraseRules = [
  ["In today's world", "generic AI-style opening"],
  ["Whether you are", "generic AI-style opening"],
  ["It is important to note", "wordy disclaimer phrase"],
  ["Navigating the complexities of", "generic AI-style phrasing"],
  ["Delve into", "generic marketing phrasing"],
  ["Unlock", "generic marketing phrasing"],
  ["Elevate", "generic marketing phrasing"],
  ["Seamlessly", "generic marketing phrasing"],
  ["Robust", "generic marketing phrasing"],
  ["Comprehensive solution", "generic marketing phrasing"],
  ["Ultimate guide", "generic marketing phrasing"],
  ["One-stop destination", "generic marketing phrasing"],
  ["Valuable insights", "generic marketing phrasing"],
  ["Empowering dog owners", "generic marketing phrasing"],
  ["In conclusion", "formulaic conclusion"],
  ["platform ecosystem", "internal project language"],
  ["content architecture", "internal project language"],
  ["source registry", "internal project language"],
  ["route architecture", "internal project language"],
  ["source-of-truth", "internal project language"],
  ["future phase", "internal project language"],
  ["production-ready", "internal project language"],
  ["content cluster", "internal project language"],
  ["internal hand-off", "internal project language"],
  ["transparent editorial assessment", "formulaic methodology phrasing"],
  ["source-backed evidence", "formulaic methodology phrasing"],
  ["fake authority", "defensive internal phrasing"],
  ["fake statistics", "defensive internal phrasing"],
  ["copied country-site content", "defensive internal phrasing"],
  ["Phase 1", "visible project-stage language"],
];

const sentenceDash = /[A-Za-z0-9)][\s\u00a0]+[—–][\s\u00a0]+[A-Za-z0-9(]/;
const sentenceSemicolon = /[A-Za-z)][\s]*;[\s]*[a-zA-Z]/;
const visibleLabel = /\b(Reviewed|Last reviewed|Updated|Version)\s*:/i;
const visibleString = /(["'`])((?:(?!\1).){18,})\1/g;

for (const dir of includeDirs) {
  for (const file of walk(path.join(root, dir))) {
    if (!includeExt.has(path.extname(file))) continue;
    const rel = path.relative(root, file);
    if (rel.includes(`${path.sep}global-dog-ownership-index${path.sep}sources.ts`)) continue;
    if (rel.includes(`${path.sep}global-dog-ownership-index${path.sep}countries.ts`)) continue;
    if (rel.includes(`${path.sep}dog-name-generator${path.sep}names.ts`)) continue;
    if (rel === `data${path.sep}image-assets.ts`) continue;
    if (rel === `lib${path.sep}passport-planner.ts`) continue;
    const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, index) => {
      if (shouldIgnoreLine(line)) return;
      const strings = [...line.matchAll(visibleString)].map((match) => match[2]);
      for (const text of strings) {
        if (shouldIgnoreText(text)) continue;
        for (const [phrase, reason] of phraseRules) {
          if (text.toLowerCase().includes(phrase.toLowerCase())) {
            fail(rel, index + 1, `${reason}: "${phrase}"`);
          }
        }
        if (sentenceDash.test(text)) fail(rel, index + 1, "review dash used as sentence punctuation");
        if (sentenceSemicolon.test(text) && !allowSemicolon(text)) {
          fail(rel, index + 1, "review semicolon in visitor-facing sentence");
        }
        if (visibleLabel.test(text)) fail(rel, index + 1, "review visible date/version label");
        if (/\borganize|organized|organizing|center|neighborhood\b/i.test(text)) {
          fail(rel, index + 1, "review American spelling in visitor-facing text");
        }
      }
    });
  }
}

if (failures.length) {
  console.error("Editorial quality check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Editorial quality check passed: visitor-facing strings avoided flagged AI-like phrases, internal project language, review labels, unnecessary sentence dashes and unallowed semicolons.");

function fail(file, line, message) {
  failures.push(`${file}:${line}: ${message}`);
}

function shouldIgnoreLine(line) {
  return /^\s*(import|export type|type |const [A-Z0-9_]+\s*=|return |if |for |while |\}|\/|\*)/.test(line) ||
    line.includes("http://") ||
    line.includes("https://") ||
    line.includes("className=") ||
    line.includes("style={{") ||
    line.includes("aria-") ||
    line.includes("src:") ||
    line.includes("href:") ||
    line.includes("id:") ||
    line.includes("url:");
}

function shouldIgnoreText(text) {
  return text.includes("/") ||
    text.includes(".") && /\.(png|jpg|jpeg|webp|svg|pdf|json|csv|ico)$/i.test(text) ||
    /^[a-z0-9-]+$/i.test(text) ||
    text.startsWith("@") ||
    text.includes("schema.org") ||
    text.includes("DogHavenGroup.com");
}

function allowSemicolon(text) {
  return /\d\s*;\s*\d/.test(text) ||
    text.includes("not a breed prescription") ||
    text.includes("cannot issue any legal travel document");
}

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next"].includes(entry.name)) continue;
      yield* walk(full);
    } else {
      yield full;
    }
  }
}
