import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { pages } from "@/data/content";
import { downloadResources } from "@/data/download-resources";
import { pageMetadata } from "@/lib/metadata";

const page = pages.downloads;
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() {
  const featured = downloadResources[0];
  const next = downloadResources.slice(1);

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
        <div className="shell">
          <p className="eyebrow">Resource roadmap</p>
          <h2>Planned guides with a clear job to do.</h2>
          <div className="resource-list">
            {next.map((resource) => (
              <article className="resource-row" key={resource.title}>
                <div>
                  <span className={`status-pill ${resource.status.replace(" ", "-")}`}>{resource.status}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                </div>
                <div>
                  <p className="label">Planned filename</p>
                  <p>{resource.filename}</p>
                  <p className="label">Intended benefit</p>
                  <p>{resource.benefit}</p>
                  <Link href={resource.relatedHref}>Related: {resource.relatedLabel}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
