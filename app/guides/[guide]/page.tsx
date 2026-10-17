import { notFound } from "next/navigation";
import { globalGuides } from "@/data/global-guides";
import { pageMetadata, jsonLd } from "@/lib/metadata";
import { site } from "@/data/site";
import { GlobalGuidePage } from "@/components/GlobalGuidePage";

export const dynamicParams = false;
export function generateStaticParams() { return globalGuides.map((guide) => ({ guide: guide.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ guide: string }> }) {
  const { guide: slug } = await params;
  const guide = globalGuides.find((item) => item.slug === slug);
  return guide ? pageMetadata(guide.title, guide.description, `guides/${guide.slug}`) : {};
}
export default async function GlobalGuideRoute({ params }: { params: Promise<{ guide: string }> }) {
  const { guide: slug } = await params;
  const guide = globalGuides.find((item) => item.slug === slug);
  if (!guide) notFound();
  return <>{jsonLd({"@context":"https://schema.org","@type":"Article",headline:guide.title,description:guide.description,url:`${site.url}/guides/${guide.slug}`,image:`${site.url}${guide.hero.src}`,isPartOf:{"@type":"WebSite",name:site.name,url:site.url}})}<GlobalGuidePage guide={guide} /></>;
}
