import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { academyTopics } from "@/data/academy";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages.academy;
export const metadata = pageMetadata(page.title, page.description, page.slug);
const firstTopic = {
  title: "First-time dog owners",
  slug: "/academy/first-time-dog-owner-guide",
  description: "A long-form guide for first-time dog owners covering lifestyle fit, budget, routines, safety, training, and next steps."
};
export default function Page() {
  return (
    <>
      <EditorialPage page={page} />
      <section className="section editorial">
        <div className="shell">
          <p className="eyebrow">Academy library</p>
          <h2>Practical guides with real pages behind them.</h2>
          <div className="grid">
            <Link className="nav-card" href={firstTopic.slug}><h3>{firstTopic.title}</h3><p>{firstTopic.description}</p></Link>
            {academyTopics.map((topic) => <Link className="nav-card" href={`/academy/${topic.slug}`} key={topic.slug}><h3>{topic.title.replace(" | Dog Haven Group Academy", "")}</h3><p>{topic.description}</p></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
