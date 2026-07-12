import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { journalArticles } from "@/data/content";
import { site } from "@/data/site";
import { jsonLd, pageMetadata } from "@/lib/metadata";

const article = journalArticles.find((item) => item.slug === "why-global-dog-travel-needs-better-planning")!;
export const metadata = pageMetadata(article.title, article.description, `journal/${article.slug}`);
export default function Page() {
  return (
    <>
      {jsonLd({ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, image: `${site.url}${article.image}`, publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}${site.logoPath}` } }, mainEntityOfPage: `${site.url}/journal/${article.slug}` })}
      <section className="page-hero"><div className="shell"><div className="page-hero-copy"><p className="eyebrow">Dog Haven Group Journal</p><h1>{article.title}</h1><p className="lead">{article.description}</p></div></div></section>
      <section className="section editorial"><div className="shell split"><article>{article.body.map((p) => <p key={p}>{p}</p>)}<p>Use the <Link href="/global-travel/moving-abroad-with-a-dog">moving abroad guide</Link>, the <Link href="/global-travel/route-guides">Route Guides hub</Link>, and the <Link href="/lab/dog-travel-checklist">Dog Travel Checklist</Link> for practical next steps.</p></article><MediaFrame image={{ src: "/images/doghavengroup/travel/passport-planner-documents.svg", alt: "Dog travel document planner with microchip, rabies, airline, and route preparation notes." }} /></div></section>
    </>
  );
}
