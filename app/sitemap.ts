import type { MetadataRoute } from "next";
import { academyTopics } from "@/data/academy";
import { journalArticles, pages } from "@/data/content";
import { site } from "@/data/site";
import { countriesAlphabetical } from "@/data/global-dog-ownership-index/countries";
import { worldDogStories } from "@/data/world-dog-stories";
import { globalGuides } from "@/data/global-guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const indexBase = "world-atlas/global-dog-ownership-index";
  const staticPaths = ["", ...Object.values(pages).map((page) => page.slug), "dogweddingkit", "world-atlas/dogs-of-the-world", ...worldDogStories.map((story) => `world-atlas/dogs-of-the-world/${story.slug}`), "guides", ...globalGuides.map((guide) => `guides/${guide.slug}`), `${indexBase}/compare`, `${indexBase}/methodology`, `${indexBase}/sources`, ...countriesAlphabetical.map((country) => `${indexBase}/${country.slug}`), "global-travel/dog-passport-planner", "global-travel/relocation", "global-travel/relocation-timeline", "global-travel/document-planning", "downloads/global-dog-owner-starter-guide", "lab/global-dog-cost-calculator", "lab/breed-fit-quiz", "lab/puppy-readiness-quiz", "lab/dog-travel-checklist", "lab/dog-age-calculator", "lab/dog-name-generator", ...academyTopics.map((topic) => `academy/${topic.slug}`), ...journalArticles.map((article) => `journal/${article.slug}`)];
  return [...new Set(staticPaths)].map((path) => ({
    url: `${site.url}${path ? `/${path}` : ""}`,
  }));
}
