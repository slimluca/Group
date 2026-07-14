import Link from "next/link";
import { RelocationTimelineTool } from "./tool";
import { jsonLd, pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

const path = "global-travel/relocation-timeline";
const title = "Dog Relocation Timeline Planner | Dog Haven Group";
const description =
  "Create a private browser-saved dog relocation timeline for destination research, official requirements, veterinary planning, documents, transport, departure, arrival and settling in.";

export const metadata = pageMetadata(title, description, path);

export default function Page() {
  const url = `${site.url}/${path}`;

  return (
    <>
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Dog Haven Dog Relocation Timeline Planner",
        applicationCategory: "TravelApplication",
        operatingSystem: "Any modern web browser",
        url,
        description
      })}
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Dog Haven Group", item: site.url },
          { "@type": "ListItem", position: 2, name: "Global Travel", item: `${site.url}/global-travel` },
          { "@type": "ListItem", position: 3, name: "Relocation Timeline", item: url }
        ]
      })}
      <section className="page-hero">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/global-travel">Global Travel</Link>
            <span aria-hidden="true">/</span>
            <Link href="/global-travel/relocation">Relocation</Link>
            <span aria-hidden="true">/</span>
            <span>Timeline</span>
          </nav>
          <div className="page-hero-copy">
            <p className="eyebrow">Dog relocation planning tool</p>
            <h1>Dog Relocation Timeline Planner</h1>
            <p className="lead">
              Turn an approximate departure window into staged planning tasks.
              The timeline helps organise research and preparation, but it does
              not provide guaranteed legal deadlines or route-specific approval.
            </p>
          </div>
        </div>
      </section>
      <main>
        <section className="section editorial">
          <div className="shell">
            <RelocationTimelineTool />
          </div>
        </section>
        <section className="section">
          <div className="shell editorial-reading">
            <h2>Use the timeline with current source checks.</h2>
            <p>
              A relocation timeline is useful because it keeps practical tasks
              visible while official research continues. It should sit beside
              the <Link href="/global-travel/dog-passport-planner">Passport Planner</Link>,{" "}
              <Link href="/global-travel/document-planning">document planning checklist</Link>{" "}
              and <Link href="/global-travel/route-guides">route research framework</Link>.
            </p>
            <p>
              Do not use a completed progress bar as proof that travel is legal,
              safe or accepted by a carrier. Requirements, forms, timing and
              transport policies must be confirmed for the actual route.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
