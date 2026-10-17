import Image from "next/image";
import Link from "next/link";
import { jsonLd, pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { worldDogStories } from "@/data/world-dog-stories";

const title = "Dogs of the World: Country Stories, Breed Origins & Owner Guides | Dog Haven Group";
const description = "Meet dogs from different countries through detailed breed-origin stories, temperament notes, climate planning, family fit, city living and practical owner questions.";
export const metadata = pageMetadata(title, description, "world-atlas/dogs-of-the-world");

export default function DogsOfTheWorldPage() {
  return (
    <>
      {jsonLd({"@context":"https://schema.org","@type":"CollectionPage",name:title,description,url:`${site.url}/world-atlas/dogs-of-the-world`,isPartOf:{"@type":"WebSite",name:site.name,url:site.url},hasPart:worldDogStories.map((story)=>({"@type":"Article",headline:story.title,url:`${site.url}/world-atlas/dogs-of-the-world/${story.slug}`}))})}
      <section className="page-hero world-stories-hub-hero">
        <Image className="template-hero-image" src="/images/doghavengroup/visuals/world-atlas-premium-map-v2.webp" alt="A premium global atlas scene for exploring dog breeds and ownership stories by country" fill priority sizes="100vw" />
        <span className="template-hero-overlay" aria-hidden="true" />
        <div className="shell"><div className="page-hero-copy template-hero-copy"><p className="eyebrow">Dog Haven Group World Atlas</p><h1>Dogs of the World</h1><p className="lead">Country stories for people who want to understand where dogs come from, how breeds were shaped, and what responsible ownership looks like in real homes around the world.</p><div className="hero-actions"><Link className="button" href="/world-atlas/global-dog-ownership-index">Compare countries</Link><Link className="button secondary" href="/lab/breed-fit-quiz">Find your lifestyle fit</Link></div></div></div>
      </section>
      <section className="section world-stories-hub-intro"><div className="shell world-stories-hub-copy"><p className="eyebrow">A growing international library</p><h2>Dogs are shaped by place, work, climate and the lives people build with them.</h2><p>Dog Haven Group is building a worldwide library of country-and-breed stories that connects origin history with modern ownership. Every page asks the useful questions: what was this dog developed to do, what does that mean in an ordinary home, what changes in this country&apos;s climate and housing, and what should a new owner verify before making a decision?</p><p>This is not a collection of shallow country pages or romantic breed descriptions. It is a practical editorial layer for global dog owners, travellers, families, renters, first-time owners and curious readers who want more than a list of appearances and personality adjectives.</p></div></section>
      <section className="section world-stories-directory"><div className="shell"><div className="template-section-heading"><p className="eyebrow">Explore by country and breed</p><h2>First edition: ten detailed stories</h2></div><div className="world-stories-grid">{worldDogStories.map((story)=><Link className="world-story-card" href={`/world-atlas/dogs-of-the-world/${story.slug}`} key={story.slug}><div className="world-story-card-image"><Image src={story.hero.src} alt={story.hero.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div className="world-story-card-copy"><p className="eyebrow">{story.country} · {story.region}</p><h3>{story.breed}</h3><p>{story.description}</p><strong>Read the country story →</strong></div></Link>)}</div></div></section>
      <section className="section world-stories-next"><div className="shell world-stories-next-grid"><div><p className="eyebrow">The next layer</p><h2>More countries, native breeds, cities and owner questions are coming.</h2><p>Future editions will expand into Africa, Asia, Europe, the Americas and Oceania, with separate guides for dog-friendly cities, regional climate, local breed history, adoption context and travel planning. New pages will be added when they have genuine research and reader value.</p></div><div className="world-stories-next-list"><span>Next research routes</span><p>Native breeds by country</p><p>Best dogs for hot climates</p><p>Dog-friendly cities worldwide</p><p>Moving countries with a dog</p></div></div></section>
    </>
  );
}
