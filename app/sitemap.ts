import type { MetadataRoute } from "next";
import { academyTopics } from "@/data/academy";
import { journalArticles, pages } from "@/data/content";
import { site } from "@/data/site";
import { countriesAlphabetical } from "@/data/global-dog-ownership-index/countries";

export default function sitemap(): MetadataRoute.Sitemap {
  const indexBase = "world-atlas/global-dog-ownership-index";
  const staticPaths = ["", ...Object.values(pages).map((page) => page.slug), `${indexBase}/compare`, `${indexBase}/methodology`, `${indexBase}/sources`, ...countriesAlphabetical.map((country) => `${indexBase}/${country.slug}`), "global-travel/dog-passport-planner", "downloads/global-dog-owner-starter-guide", "lab/global-dog-cost-calculator", "lab/breed-fit-quiz", "lab/puppy-readiness-quiz", "lab/dog-travel-checklist", "lab/dog-age-calculator", "lab/dog-name-generator", ...academyTopics.map((topic) => `academy/${topic.slug}`), ...journalArticles.map((article) => `journal/${article.slug}`)];
  return [...new Set(staticPaths)].map((path) => ({ url: `${site.url}${path ? `/${path}` : ""}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
