import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Global Dog Owner Starter Guide | DogHaven Downloads", "The landing page for DogHaven Group's planned free Global Dog Owner Starter Guide PDF.", "downloads/global-dog-owner-starter-guide");

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Download Library</p>
            <h1>Global Dog Owner Starter Guide</h1>
            <p className="lead">A premium DogHaven Group PDF is planned for first-time and globally minded dog owners. The final PDF file is not present yet, so the download action is intentionally disabled instead of linking to a broken file.</p>
            <div className="actions"><span className="button disabled">PDF coming soon</span><Link className="button secondary" href="/downloads">Back to downloads</Link></div>
          </div>
          <MediaFrame image={{ src: "/images/doghavengroup/downloads/owner-starter-guide-cover.svg", alt: "A premium cover concept for the DogHaven Group Global Dog Owner Starter Guide." }} />
        </div>
      </section>
      <section className="section editorial"><div className="shell split"><div><h2>What the guide should include</h2><p>The finished guide should include first dog decision prompts, routine planning, household readiness, cost categories, safety preparation, travel awareness, and links back to DogHavenGroup.com. It should carry the Dog Haven Group logo, black and gold cover styling, clear footer links, and professional worksheet pages.</p><p>Until the PDF is created and uploaded to <code>/downloads/dog-haven-group-global-dog-owner-starter-guide.pdf</code>, the page keeps expectations honest and avoids a broken download button.</p></div><MediaFrame image={{ src: "/images/doghavengroup/downloads/download-library-premium-guides.svg", alt: "DogHaven branded PDF guides and worksheets arranged in a premium download library." }} /></div></section>
    </>
  );
}
