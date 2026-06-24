import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { journalArticles } from "@/data/content";
import { site } from "@/data/site";
import { jsonLd, pageMetadata } from "@/lib/metadata";

const article = journalArticles.find((item) => item.slug === "introducing-dog-haven-group")!;
export const metadata = pageMetadata(article.title, article.description, `journal/${article.slug}`);
export default function Page() {
  return <Article article={article} />;
}

function Article({ article }: { article: (typeof journalArticles)[number] }) {
  return (
    <>
      {jsonLd({ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, image: `${site.url}${article.image}`, publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}${site.logoPath}` } }, mainEntityOfPage: `${site.url}/journal/${article.slug}` })}
      <section className="section"><div className="shell split"><div><p className="eyebrow">DogHaven Journal</p><h1>{article.title}</h1><p className="lead">{article.description}</p></div><MediaFrame image={{ src: article.image, alt: "DogHaven Group launch article visual with global platform planning materials." }} /></div></section>
      <section className="section editorial"><div className="shell split"><article>{article.body.map((p) => <p key={p}>{p}</p>)}<p>Continue into the <Link href="/doghaven-universe">DogHaven Universe</Link>, <Link href="/countries">Country Network</Link>, or <Link href="/lab">DogHaven Lab</Link> to explore the platform structure.</p></article><MediaFrame image={{ src: "/images/doghavengroup/journal/global-dog-newsroom.svg", alt: "DogHaven Journal newsroom with global ownership, travel, country, and network planning boards." }} /></div></section>
    </>
  );
}
