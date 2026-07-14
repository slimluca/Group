import Link from "next/link";
import { DocumentPlanningTool } from "./tool";
import { jsonLd, pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

const path = "global-travel/document-planning";
const title = "Dog Relocation Document Planning Checklist | Dog Haven Group";
const description =
  "Organise dog relocation document categories, private notes and a copyable checklist summary in the browser without uploading documents.";

export const metadata = pageMetadata(title, description, path);

export default function Page() {
  const url = `${site.url}/${path}`;

  return (
    <>
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Dog Haven Dog Relocation Document Planning Checklist",
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
          { "@type": "ListItem", position: 3, name: "Document Planning", item: url }
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
            <span>Document Planning</span>
          </nav>
          <div className="page-hero-copy">
            <p className="eyebrow">Dog relocation document planning</p>
            <h1>Dog Relocation Document Planning Checklist</h1>
            <p className="lead">
              Organise document categories, source questions and private notes
              before an international move with a dog. This checklist does not
              upload or store documents outside the current browser.
            </p>
          </div>
        </div>
      </section>
      <main>
        <section className="section editorial">
          <div className="shell">
            <DocumentPlanningTool />
          </div>
        </section>
        <section className="section">
          <div className="shell editorial-reading">
            <h2>Documents must be confirmed for the exact route.</h2>
            <p>
              The categories in this checklist are planning prompts. They do not
              mean every document applies to every dog or every route. Use the
              checklist beside the{" "}
              <Link href="/global-travel/dog-passport-planner">Passport Planner</Link>,{" "}
              <Link href="/global-travel/relocation-timeline">relocation timeline</Link>{" "}
              and <Link href="/global-travel/route-guides">route guides</Link>.
            </p>
            <p>
              Confirm current requirements, accepted formats, signers,
              endorsement processes and timing with official authorities,
              transport providers and appropriate veterinary professionals
              before booking and again before departure.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
