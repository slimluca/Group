import { notFound } from "next/navigation";
import { jsonLd, pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { worldDogStories } from "@/data/world-dog-stories";
import { WorldDogStoryPage } from "@/components/WorldDogStoryPage";

export const dynamicParams = false;
export function generateStaticParams() { return worldDogStories.map((story) => ({ story: story.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ story: string }> }) {
  const { story: slug } = await params;
  const story = worldDogStories.find((item) => item.slug === slug);
  return story ? pageMetadata(story.title, story.description, `world-atlas/dogs-of-the-world/${story.slug}`, { url: story.hero.src, width: 1536, height: 1024, alt: story.hero.alt }) : {};
}
export default async function Page({ params }: { params: Promise<{ story: string }> }) {
  const { story: slug } = await params;
  const story = worldDogStories.find((item) => item.slug === slug);
  if (!story) notFound();
  const url = `${site.url}/world-atlas/dogs-of-the-world/${story.slug}`;
  return <>{jsonLd({"@context":"https://schema.org","@type":"Article",headline:story.title,description:story.description,url,image:`${site.url}${story.hero.src}`,author:{"@type":"Organization",name:"Dog Haven Group",url:site.url},publisher:{"@type":"Organization",name:"Dog Haven Group"},about:[story.country,story.breed,story.breedOrigin]})}<WorldDogStoryPage story={story} /></>;
}
