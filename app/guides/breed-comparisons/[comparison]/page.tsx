import { notFound } from "next/navigation";
import { breedComparisons } from "@/data/breed-comparisons";
import { pageMetadata, jsonLd } from "@/lib/metadata";
import { site } from "@/data/site";
import { BreedComparisonPage } from "@/components/BreedComparisonPage";

export const dynamicParams = false;
export function generateStaticParams() { return breedComparisons.map((comparison) => ({ comparison: comparison.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ comparison: string }> }) { const { comparison: slug } = await params; const comparison = breedComparisons.find((item) => item.slug === slug); return comparison ? pageMetadata(comparison.title, comparison.description, `guides/breed-comparisons/${comparison.slug}`) : {}; }
export default async function BreedComparisonRoute({ params }: { params: Promise<{ comparison: string }> }) { const { comparison: slug } = await params; const comparison = breedComparisons.find((item) => item.slug === slug); if (!comparison) notFound(); return <>{jsonLd({"@context":"https://schema.org","@type":"Article",headline:comparison.title,description:comparison.description,url:`${site.url}/guides/breed-comparisons/${comparison.slug}`,image:`${site.url}${comparison.hero.src}`,isPartOf:{"@type":"WebSite",name:site.name,url:site.url}})}<BreedComparisonPage comparison={comparison} /></>; }
