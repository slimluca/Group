import { EditorialPage } from "@/components/EditorialPage";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";

const page = pages["world-atlas"];
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() {
  return (
    <>
      <EditorialPage page={page} />
      <section className="section">
        <div className="shell information-copy">
          <p className="eyebrow">Comparing everyday ownership</p>
          <h2>Global Dog Ownership Index</h2>
          <p>
            Five individually researched countries are compared across eight
            practical categories through a transparent methodology. Every
            profile separates evidence from editorial scoring, displays
            confidence and limitations, and connects to a filterable source
            library.
          </p>
          <div className="compact-actions">
            <Link
              className="button"
              href="/world-atlas/global-dog-ownership-index"
            >
              Explore the Global Dog Ownership Index
            </Link>
            <Link
              className="button secondary"
              href="/world-atlas/global-dog-ownership-index/compare"
            >
              Compare Countries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
