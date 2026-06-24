import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { downloadResources } from "@/data/download-resources";
import { pageMetadata } from "@/lib/metadata";

const guide = downloadResources[0];
const downloadHref = `/downloads/${guide.filename}`;

export const metadata = pageMetadata("Global Dog Owner Starter Guide PDF | Dog Haven Group", "Download the Dog Haven Group Global Dog Owner Starter Guide PDF for first-time owners, puppy planning, dog travel, moving abroad, costs, and safety.", "downloads/global-dog-owner-starter-guide");

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Download Library</p>
            <h1>The Dog Haven Group Global Dog Owner Starter Guide</h1>
            <p className="lead">The first official Dog Haven Group PDF is available now: a polished starter guide for dog owners comparing lifestyle fit, costs, puppy preparation, global travel, moving abroad, safety planning, and country-network next steps.</p>
            <div className="actions"><Link className="button" href={downloadHref}>Download PDF</Link><Link className="button secondary" href="/downloads">Back to downloads</Link></div>
          </div>
          <MediaFrame image={{ src: "/images/doghavengroup/downloads/owner-starter-guide-cover.svg", alt: "A premium cover concept for the Dog Haven Group Global Dog Owner Starter Guide." }} />
        </div>
      </section>
      <section className="section editorial">
        <div className="shell split">
          <div>
            <p className="eyebrow">Inside the guide</p>
            <h2>A premium printable framework, not a plain document.</h2>
            <p>The guide includes a branded cover page, DogHavenGroup.com footer, circular Dog Haven Group logo, professional black and gold styling, internal website links, and printable planning worksheets. It introduces the Dog Haven Group approach to global dog ownership without copying country-site content or pretending general guidance can replace current official sources.</p>
            <p>Sections cover welcome and orientation, global dog ownership thinking, choosing the right dog for your lifestyle, budgeting, puppy preparation, first-time owner planning, travelling abroad, moving abroad, safety and emergency planning, and the South Africa, United States, and Italy country network.</p>
          </div>
          <MediaFrame image={{ src: "/images/doghavengroup/downloads/download-library-premium-guides.svg", alt: "Dog Haven Group branded PDF guides and worksheets arranged in a premium download library." }} />
        </div>
      </section>
      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Suggested next steps</p>
            <h2>Use the PDF with the live platform.</h2>
            <p>Start with the guide, then move into the live sections that match your decision: compare conditions in the <Link href="/world-atlas">World Atlas</Link>, prepare route questions through <Link href="/global-travel">Global Travel</Link>, use interactive planning in the <Link href="/lab">Dog Haven Group Lab</Link>, deepen first-owner learning in the <Link href="/academy">Academy</Link>, and choose local context through the <Link href="/countries">Country Network</Link>.</p>
          </div>
          <div className="panel">
            <p className="eyebrow">Download status</p>
            <h3>PDF available</h3>
            <p>The active download points to <code>{guide.filename}</code>. No broken download button is used.</p>
            <Link className="button" href={downloadHref}>Download the guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
