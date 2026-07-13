import { test, expect } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = "http://localhost:3000";
const outDir = ".qa-screenshots";
const viewports = [1440, 1280, 1024, 768, 430, 390, 360];
const routes = [
  "/",
  "/about",
  "/academy",
  "/academy/first-time-dog-owner-guide",
  "/academy/puppy-planning",
  "/academy/apartment-dog-ownership",
  "/academy/family-dog-ownership",
  "/academy/senior-dog-care",
  "/academy/dog-behavior-basics",
  "/academy/dog-safety",
  "/academy/dog-nutrition-basics",
  "/world-atlas",
  "/world-atlas/global-dog-ownership-index",
  "/world-atlas/global-dog-ownership-index/compare",
  "/world-atlas/global-dog-ownership-index/methodology",
  "/world-atlas/global-dog-ownership-index/sources",
  "/world-atlas/global-dog-ownership-index/australia",
  "/world-atlas/global-dog-ownership-index/italy",
  "/world-atlas/global-dog-ownership-index/south-africa",
  "/world-atlas/global-dog-ownership-index/united-kingdom",
  "/world-atlas/global-dog-ownership-index/united-states",
  "/global-travel",
  "/global-travel/dog-passport-planner",
  "/global-travel/moving-abroad-with-a-dog",
  "/global-travel/route-guides",
  "/lab",
  "/lab/global-dog-cost-calculator",
  "/lab/breed-fit-quiz",
  "/lab/puppy-readiness-quiz",
  "/lab/dog-age-calculator",
  "/lab/dog-name-generator",
  "/lab/dog-travel-checklist",
  "/downloads",
  "/downloads/global-dog-owner-starter-guide",
  "/countries",
  "/south-africa",
  "/united-states",
  "/italy",
  "/journal",
  "/journal/introducing-dog-haven-group",
  "/journal/how-doghaven-will-grow-across-countries",
  "/journal/why-global-dog-travel-needs-better-planning",
  "/contact",
  "/editorial-policy",
  "/research-methodology",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/doghaven-universe",
];
const screenshots = [
  ["/", 1440, "homepage-desktop.png"],
  ["/academy", 1440, "academy-hub-desktop.png"],
  ["/academy/first-time-dog-owner-guide", 1440, "academy-guide-desktop.png"],
  ["/global-travel", 1440, "global-travel-desktop.png"],
  ["/global-travel/dog-passport-planner", 1440, "passport-planner-desktop.png"],
  ["/world-atlas/global-dog-ownership-index", 1440, "index-hub-desktop.png"],
  ["/world-atlas/global-dog-ownership-index/south-africa", 1440, "index-country-desktop.png"],
  ["/world-atlas/global-dog-ownership-index/compare", 1440, "compare-tool-desktop.png"],
  ["/lab", 1440, "lab-desktop.png"],
  ["/lab/global-dog-cost-calculator", 1440, "calculator-desktop.png"],
  ["/lab/breed-fit-quiz", 1440, "quiz-desktop.png"],
  ["/contact", 1440, "contact-desktop.png"],
  ["/", 1440, "footer-desktop.png"],
  ["/", 390, "footer-mobile.png"],
];

test("site-wide width, asset, responsive, and interaction QA", async ({ page }) => {
  test.setTimeout(360000);
  await fs.mkdir(outDir, { recursive: true });
  const failures = [];
  const checked = [];
  const consoleErrors = [];
  const badResponses = [];

  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("response", (response) => {
    const status = response.status();
    const url = response.url();
    if ((status === 402 || status === 404) && !url.includes("__nextjs_original-stack-frames")) {
      badResponses.push(`${status} ${url}`);
    }
  });

  for (const width of viewports) {
    await page.setViewportSize({ width, height: 950 });
    for (const route of routes) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 15000 });
      await page.waitForTimeout(120);
      const result = await page.evaluate(async () => {
        await Promise.all(
          [...document.images].map((img) => {
            if (img.complete) return undefined;
            return new Promise((resolve) => {
              const done = () => resolve(undefined);
              img.addEventListener("load", done, { once: true });
              img.addEventListener("error", done, { once: true });
              setTimeout(done, 2000);
            });
          }),
        );
        const doc = document.documentElement;
        const overflow = doc.scrollWidth - doc.clientWidth;
        const brokenImages = [...document.images]
          .filter((img) => img.currentSrc && img.complete && img.naturalWidth === 0)
          .map((img) => img.currentSrc || img.getAttribute("src"));
        const transformedImages = [...document.images]
          .map((img) => img.currentSrc || img.getAttribute("src") || "")
          .filter((src) => src.includes("/_next/image"));
        const clipped = [...document.querySelectorAll("button, a, input, select, textarea")]
          .filter((el) => {
            const rect = el.getBoundingClientRect();
            return rect.width > 0 && (rect.right > doc.clientWidth + 1 || rect.left < -1);
          })
          .map((el) => el.textContent?.trim() || el.getAttribute("aria-label") || el.tagName);
        return { overflow, brokenImages, transformedImages, clipped };
      });
      checked.push(`${route}@${width}`);
      if (result.overflow > 1) failures.push(`${route}@${width}: horizontal overflow ${result.overflow}px`);
      if (result.brokenImages.length) failures.push(`${route}@${width}: broken images ${result.brokenImages.join(", ")}`);
      if (result.transformedImages.length) failures.push(`${route}@${width}: images still use /_next/image ${result.transformedImages.join(", ")}`);
      if (result.clipped.length) failures.push(`${route}@${width}: clipped controls ${result.clipped.join(", ")}`);
    }
  }

  await page.setViewportSize({ width: 1440, height: 950 });
  await page.goto(`${baseUrl}/academy`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(120);
  const academy = await page.evaluate(() => {
    const heading = [...document.querySelectorAll("h2")].find((node) =>
      node.textContent?.includes("General education has clear limits"),
    );
    const section = heading?.closest("section");
    const shell = heading?.closest(".shell");
    const copy = section?.querySelector(".editorial-copy");
    const library = [...document.querySelectorAll("h2")].find((node) =>
      node.textContent?.includes("Practical guides with real pages behind them"),
    );
    const libraryShell = library?.closest(".shell");
    const rect = (el) => {
      const r = el?.getBoundingClientRect();
      return r ? { left: r.left, right: r.right, width: r.width } : null;
    };
    return { heading: rect(heading), shell: rect(shell), copy: rect(copy), libraryShell: rect(libraryShell) };
  });
  if (!academy.shell || !academy.copy || Math.abs(academy.shell.width - academy.copy.width) > 2) {
    failures.push(`Academy text copy does not fill shell: ${JSON.stringify(academy)}`);
  }
  if (academy.shell && academy.libraryShell && Math.abs(academy.shell.left - academy.libraryShell.left) > 2) {
    failures.push(`Academy section and library left edges differ: ${JSON.stringify(academy)}`);
  }

  await page.setViewportSize({ width: 390, height: 820 });
  await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(120);
  await page.getByRole("button", { name: "Toggle menu" }).click();
  if (!(await page.locator(".mobile-panel.open").count())) failures.push("Mobile menu did not open at 390px.");

  for (const [route, width, file] of screenshots) {
    await page.setViewportSize({ width, height: width < 500 ? 820 : 950 });
    await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForTimeout(120);
    if (file.includes("footer")) {
      await page.locator("footer").screenshot({ path: path.join(outDir, file) });
    } else {
      await page.screenshot({ path: path.join(outDir, file), fullPage: false });
    }
  }

  if (consoleErrors.length) {
    failures.push(`browser console errors: ${[...new Set(consoleErrors)].slice(0, 8).join(" | ")}`);
  }
  if (badResponses.length) {
    failures.push(`bad 402/404 responses: ${[...new Set(badResponses)].slice(0, 12).join(" | ")}`);
  }

  const summary = {
    checkedRoutes: routes.length,
    checkedViewportRuns: checked.length,
    widths: viewports,
    screenshots: screenshots.map(([, , file]) => path.join(outDir, file)),
    consoleErrorCount: consoleErrors.length,
    badResponseCount: badResponses.length,
    academy,
    failures,
  };
  await fs.writeFile(path.join(outDir, "browser-qa-summary.json"), JSON.stringify(summary, null, 2));
  expect(failures).toEqual([]);
});
