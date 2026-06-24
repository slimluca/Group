import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages.academy;
export const metadata = pageMetadata(page.title, page.description, page.slug);
const topics = ["First-time dog owners", "Puppy planning", "Apartment dog ownership", "Family dog ownership", "Senior dog care", "Dog behavior basics", "Dog safety", "Dog nutrition basics"];
export default function Page() {
  return (
    <>
      <EditorialPage page={page} />
      <section className="section editorial"><div className="shell grid">{topics.map((topic) => <Link className="nav-card" href={topic === "First-time dog owners" ? "/academy/first-time-dog-owner-guide" : "/academy"} key={topic}><h3>{topic}</h3><p>Planned Academy coverage for responsible global dog owners, written with professional caution and practical internal links.</p></Link>)}</div></section>
    </>
  );
}
