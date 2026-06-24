import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { journalArticles, pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages.journal;
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() {
  return (
    <>
      <EditorialPage page={page} />
      <section className="section editorial">
        <div className="shell">
          <p className="eyebrow">Launch articles</p>
          <h2>Initial Journal entries</h2>
          <div className="grid">
            {journalArticles.map((article) => (
              <Link className="article-card" href={`/journal/${article.slug}`} key={article.slug}>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
