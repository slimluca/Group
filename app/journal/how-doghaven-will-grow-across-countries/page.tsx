import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { journalArticles } from "@/data/content";
import { site } from "@/data/site";
import { jsonLd, pageMetadata } from "@/lib/metadata";

const article = journalArticles.find((item) => item.slug === "how-doghaven-will-grow-across-countries")!;
export const metadata = pageMetadata(article.title, article.description, `journal/${article.slug}`);
export default function Page() {
  return (
    <>
      {jsonLd({ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, image: `${site.url}${article.image}`, publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}${site.logoPath}` } }, mainEntityOfPage: `${site.url}/journal/${article.slug}` })}
      <section className="page-hero"><div className="shell"><div className="page-hero-copy"><p className="eyebrow">Dog Haven Group Journal</p><h1>{article.title}</h1><p className="lead">{article.description}</p></div></div></section>
      <section className="section editorial"><div className="shell split"><article>{article.body.map((p) => <p key={p}>{p}</p>)}<p>Explore the current <Link href="/countries">Dog Haven Country Network</Link>, then compare wider ownership conditions in the <Link href="/world-atlas">World Atlas</Link>.</p></article><MediaFrame image={{ src: "/images/doghavengroup/countries/future-country-expansion.svg", alt: "Future Dog Haven country expansion markets shown as planned, not active thin pages." }} /></div></section>
    </>
  );
}
