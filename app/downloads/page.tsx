import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { pages } from "@/data/content";
import { downloadResources } from "@/data/download-resources";
import { pageMetadata } from "@/lib/metadata";

const page = pages.downloads;
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() {
  const featured = downloadResources[0];

  return (
    <>
      <EditorialPage page={page} />
      <section className="section editorial">
        <div className="shell split">
          <div>
            <p className="eyebrow">Available now</p>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <p>This first download anchors the library: polished, practical, and connected back into the <Link href="/world-atlas">World Atlas</Link>, <Link href="/global-travel">Global Travel</Link>, <Link href="/lab">Lab</Link>, <Link href="/academy">Academy</Link>, and <Link href="/countries">Country Network</Link>.</p>
            <div className="actions">
              <Link className="button" href={featured.slug ?? "/downloads"}>Open guide page</Link>
              <Link className="button secondary" href={`/downloads/${featured.filename}`}>Download PDF</Link>
            </div>
          </div>
          <div className="resource-panel">
            <span className="status-pill available">Available</span>
            <h3>{featured.filename}</h3>
            <p>{featured.benefit}</p>
            <Link href={featured.relatedHref}>{featured.relatedLabel}</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell editorial-reading">
          <p className="eyebrow">Using the library well</p>
          <h2>Print the resource, then verify the decisions it helps organise.</h2>
          <p>A worksheet is most useful when it becomes part of a real conversation. Mark the items that are settled, record questions that still need research, and note where the answer depends on a local price, housing rule, professional assessment, or current travel requirement. The PDF should make preparation easier without creating false certainty.</p>
          <p>Use the <Link href="/academy/first-time-dog-owner-guide">first-time owner guide</Link> for deeper explanation, the <Link href="/lab">Lab</Link> for interactive estimates and checklists, and <Link href="/global-travel">Global Travel</Link> when a decision involves movement between countries. Return to the live pages for information that may change more quickly than a downloaded file.</p>
          <p>For route planning, build a current working checklist in the <Link href="/global-travel/dog-passport-planner">Dog Haven Global Passport Planner</Link>. Use the global dog-owner starter guide for broader ownership and relocation planning alongside route-specific official research.</p>
        </div>
      </section>
    </>
  );
}
