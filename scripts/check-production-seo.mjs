import fs from "node:fs";

const baseUrl = process.env.SEO_BASE_URL || "http://localhost:3000";
const productionHost = "https://doghavengroup.com";
const routes = [
  "/", "/about", "/academy", "/academy/first-time-dog-owner-guide", "/academy/puppy-planning",
  "/academy/apartment-dog-ownership", "/academy/family-dog-ownership", "/academy/senior-dog-care",
  "/academy/dog-behavior-basics", "/academy/dog-safety", "/academy/dog-nutrition-basics",
  "/world-atlas", "/world-atlas/dog-ownership-costs-by-country", "/world-atlas/global-dog-ownership-index",
  "/world-atlas/global-dog-ownership-index/compare", "/world-atlas/global-dog-ownership-index/methodology",
  "/world-atlas/global-dog-ownership-index/sources", "/world-atlas/global-dog-ownership-index/australia",
  "/world-atlas/global-dog-ownership-index/italy", "/world-atlas/global-dog-ownership-index/south-africa",
  "/world-atlas/global-dog-ownership-index/united-kingdom", "/world-atlas/global-dog-ownership-index/united-states",
  "/global-travel", "/global-travel/dog-passport-planner", "/global-travel/moving-abroad-with-a-dog",
  "/global-travel/route-guides", "/global-travel/relocation", "/global-travel/relocation-timeline",
  "/global-travel/document-planning", "/lab", "/lab/global-dog-cost-calculator", "/lab/breed-fit-quiz",
  "/lab/puppy-readiness-quiz", "/lab/dog-age-calculator", "/lab/dog-name-generator", "/lab/dog-travel-checklist",
  "/downloads", "/downloads/global-dog-owner-starter-guide", "/countries", "/south-africa", "/united-states",
  "/italy", "/journal", "/journal/introducing-dog-haven-group", "/journal/how-doghaven-will-grow-across-countries",
  "/journal/why-global-dog-travel-needs-better-planning", "/contact", "/editorial-policy", "/research-methodology",
  "/privacy-policy", "/terms", "/disclaimer", "/doghaven-universe",
];

const failures = [];
const titles = new Map();
const descriptions = new Map();
const incoming = new Map(routes.map((route) => [route, 0]));
const report = [];

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  if (response.status !== 200) {
    fail(`${route}: expected HTTP 200, got ${response.status}`);
    continue;
  }
  const html = await response.text();
  if (/localhost|127\.0\.0\.1|vercel\.app/i.test(html.replaceAll(baseUrl, ""))) {
    fail(`${route}: rendered HTML contains development or preview host text`);
  }
  if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) fail(`${route}: accidental noindex found`);

  const title = text(match(html, /<title[^>]*>([\s\S]*?)<\/title>/i));
  const description = attr(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i);
  const canonical = attr(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i);
  const h1Count = count(html, /<h1[\s>]/gi);
  if (!title) fail(`${route}: missing title`);
  if (!description) fail(`${route}: missing meta description`);
  if (h1Count !== 1) fail(`${route}: expected one H1, found ${h1Count}`);
  const expectedCanonical = `${productionHost}${route === "/" ? "" : route}`;
  if (canonical !== expectedCanonical) fail(`${route}: canonical ${canonical || "(missing)"} does not match ${expectedCanonical}`);
  addUnique(titles, title, route, "title");
  addUnique(descriptions, description, route, "description");

  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const block of jsonLdBlocks) {
    try {
      JSON.parse(unescapeHtml(block[1]));
    } catch (error) {
      fail(`${route}: invalid JSON-LD (${error.message})`);
    }
  }

  const links = [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)].map((m) => m[1]);
  for (const href of links) {
    if (href.startsWith("/") && !href.startsWith("//")) {
      const clean = href.split("#")[0].split("?")[0] || "/";
      if (incoming.has(clean) && clean !== route) incoming.set(clean, incoming.get(clean) + 1);
    }
  }

  const imageSrcs = [...html.matchAll(/<(?:img|source)\b[^>]*(?:src|srcset)=["']([^"']+)["'][^>]*>/gi)].flatMap((m) =>
    m[1].split(",").map((part) => part.trim().split(/\s+/)[0]),
  );
  for (const src of imageSrcs) {
    if (src.includes("/_next/image")) fail(`${route}: image still uses /_next/image (${src})`);
    if (src.startsWith("/")) {
      const asset = await fetch(`${baseUrl}${src}`);
      if (asset.status === 402 || asset.status === 404) fail(`${route}: image ${src} returned ${asset.status}`);
    }
  }
  for (const image of [...html.matchAll(/<img\b([^>]*)>/gi)]) {
    const attrs = image[1];
    const src = attr(attrs, /\bsrc=["']([^"']+)["']/i);
    const alt = attr(attrs, /\balt=["']([^"']*)["']/i);
    if (src && !src.includes("brand/") && alt === "") fail(`${route}: meaningful image has empty alt (${src})`);
  }

  report.push({ route, title, description, canonical, h1Count, links: links.length, images: imageSrcs.length });
}

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
if (sitemapResponse.status !== 200) fail(`sitemap.xml returned ${sitemapResponse.status}`);
const sitemapXml = await sitemapResponse.text();
for (const route of routes) {
  const url = `${productionHost}${route === "/" ? "" : route}`;
  if (!sitemapXml.includes(url)) fail(`sitemap missing ${url}`);
}
if (/localhost|127\.0\.0\.1|vercel\.app|docs|api|qa/i.test(sitemapXml)) fail("sitemap contains an excluded or development URL");

const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
if (robotsResponse.status !== 200) fail(`robots.txt returned ${robotsResponse.status}`);
const robotsText = await robotsResponse.text();
if (!robotsText.includes(`${productionHost}/sitemap.xml`)) fail("robots.txt does not reference the production sitemap");
if (/Disallow:\s*\//i.test(robotsText)) fail("robots.txt appears to block normal public crawling");

for (const [route, count] of incoming) {
  if (route !== "/" && count === 0) fail(`${route}: no meaningful internal incoming link found`);
}

fs.mkdirSync(".qa-screenshots", { recursive: true });
fs.writeFileSync(".qa-screenshots/production-seo-report.json", JSON.stringify({ checkedRoutes: routes.length, report, failures }, null, 2));

if (failures.length) {
  console.error("Production SEO check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Production SEO check passed: ${routes.length} routes, unique metadata, production canonicals, valid JSON-LD, sitemap/robots, internal links and direct image assets.`);

function addUnique(map, value, route, label) {
  if (!value) return;
  if (map.has(value)) fail(`${route}: duplicate ${label} also used by ${map.get(value)}`);
  else map.set(value, route);
}

function fail(message) {
  failures.push(message);
}

function match(textValue, regex) {
  return textValue.match(regex)?.[1] ?? "";
}

function attr(textValue, regex) {
  return unescapeHtml(textValue.match(regex)?.[1] ?? "");
}

function count(textValue, regex) {
  return (textValue.match(regex) ?? []).length;
}

function text(value) {
  return unescapeHtml(value).replace(/\s+/g, " ").trim();
}

function unescapeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", "\"")
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}
