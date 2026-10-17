import { notFound } from "next/navigation";
import { dogFriendlyCities } from "@/data/dog-friendly-cities";
import { pageMetadata, jsonLd } from "@/lib/metadata";
import { site } from "@/data/site";
import { GlobalGuidePage } from "@/components/GlobalGuidePage";

export const dynamicParams = false;
export function generateStaticParams() { return dogFriendlyCities.map((city) => ({ city: city.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = dogFriendlyCities.find((item) => item.slug === slug);
  return city ? pageMetadata(city.title, city.description, `world-atlas/dog-friendly-cities/${city.slug}`) : {};
}
export default async function DogFriendlyCityRoute({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = dogFriendlyCities.find((item) => item.slug === slug);
  if (!city) notFound();
  return <>{jsonLd({"@context":"https://schema.org","@type":"Article",headline:city.title,description:city.description,url:`${site.url}/world-atlas/dog-friendly-cities/${city.slug}`,image:`${site.url}${city.hero.src}`,isPartOf:{"@type":"WebSite",name:site.name,url:site.url}})}<GlobalGuidePage guide={city} /></>;
}
