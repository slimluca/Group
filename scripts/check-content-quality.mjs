import fs from "node:fs";
import path from "node:path";

const roots = ["app", "components", "data"];
const extensions = new Set([".ts", ".tsx"]);
const minimumParagraphLength = 120;
const intentionalLegalDrafts = [
  "This privacy policy is a Phase 1 website policy",
  "These terms are a Phase 1 website draft"
];
const intentionalSharedInterfaceCopy = [
  "Comparing countries is only the beginning. Use the Passport Planner to organise a specific international route, timeline, checklist and official-source review."
];
const suspiciousPhrases = [
  "Connected DogHaven sections",
  "Connected Dog Haven sections",
  "Continue through the global platform using the internal links in this page",
  "planned coverage",
  "future content",
  "content coming soon",
  "lorem ipsum"
];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function lineNumber(source, offset) {
  return source.slice(0, offset).split("\n").length;
}

function normalise(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]+\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const files = roots.flatMap((root) => walk(root)).filter((file) => extensions.has(path.extname(file)));
const paragraphs = new Map();
const suspicious = [];
let ignoredLegalNotices = 0;

function recordParagraph(text, file, line) {
  const value = normalise(text);
  if (intentionalSharedInterfaceCopy.includes(value)) return;
  if (value.length < minimumParagraphLength) return;
  const key = value.toLocaleLowerCase("en");
  const entries = paragraphs.get(key) ?? [];
  if (!entries.some((entry) => entry.file === file && entry.line === line)) entries.push({ file, line, value });
  paragraphs.set(key, entries);
}

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");

  for (const phrase of suspiciousPhrases) {
    let offset = source.indexOf(phrase);
    while (offset !== -1) {
      suspicious.push({ file, line: lineNumber(source, offset), phrase });
      offset = source.indexOf(phrase, offset + phrase.length);
    }
  }

  for (const phrase of intentionalLegalDrafts) {
    let offset = source.indexOf(phrase);
    while (offset !== -1) {
      ignoredLegalNotices += 1;
      offset = source.indexOf(phrase, offset + phrase.length);
    }
  }

  const quotedString = /"(?:\\.|[^"\\]){120,}"/g;
  for (const match of source.matchAll(quotedString)) {
    try {
      recordParagraph(JSON.parse(match[0]), file, lineNumber(source, match.index));
    } catch {
      // Ignore non-JSON TypeScript strings; JSX paragraphs are handled below.
    }
  }

  const jsxParagraph = /<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g;
  for (const match of source.matchAll(jsxParagraph)) {
    recordParagraph(match[1], file, lineNumber(source, match.index));
  }
}

const duplicates = [...paragraphs.values()].filter((entries) => entries.length > 1);

if (duplicates.length || suspicious.length) {
  console.error("Content quality check failed.");
  for (const entries of duplicates) {
    console.error(`\nRepeated paragraph: “${entries[0].value.slice(0, 150)}…”`);
    for (const entry of entries) console.error(`  - ${entry.file}:${entry.line}`);
  }
  for (const item of suspicious) console.error(`\nSuspicious placeholder language “${item.phrase}” at ${item.file}:${item.line}`);
  process.exit(1);
}

console.log(`Content quality check passed across ${files.length} source files.`);
console.log(`Checked ${paragraphs.size} long-form passages; no suspicious duplicates or placeholder phrases found.`);
console.log(`Intentional legal draft notices ignored: ${ignoredLegalNotices}.`);
