import Image from "next/image";
import { SourceLibraryClient } from "@/components/global-index/SourceLibraryClient";
import {
  Correction,
  DataDownloads,
  IndexNav,
  IndexNotice,
} from "@/components/global-index/IndexShared";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Global Dog Ownership Research Sources | Dog Haven Group",
  "Explore the government, statistical, intergovernmental and professional sources used in the Global Dog Ownership Index.",
  "world-atlas/global-dog-ownership-index/sources",
);
export default function Page() {
  return (
    <>
      <section className="page-hero template-hero template-hero-index">
        <Image className="template-hero-image" src="/images/doghavengroup/visuals/country-comparison-golden-retriever.webp" alt="A Golden Retriever beside a source research and country comparison desk" fill priority sizes="100vw" />
        <span className="template-hero-overlay" aria-hidden="true" />
        <div className="shell"><IndexNav/><div className="page-hero-copy template-hero-copy"><p className="eyebrow">Evidence behind the comparison</p><h1>Global Dog Ownership Index Source Library</h1><p className="lead">Explore the authorities, regulators, operators and professional evidence used for the founding five-country release.</p><div className="hero-actions"><a className="button" href="#source-library">Explore sources</a><a className="button secondary" href="/world-atlas/global-dog-ownership-index/methodology">Read the methodology</a></div></div></div>
      </section>
      <main>
        <section className="section">
          <div className="shell index-reading" id="source-library">
            <IndexNotice />
            <div className="index-inline-feature"><Image src="/images/doghavengroup/visuals/ownership-index-irish-setter-coast.webp" alt="An Irish Setter beside a calm research planning scene" width={1100} height={700}/><div><p className="eyebrow">Research you can inspect</p><h2>Sources are part of the page, not hidden behind the score.</h2><p>Each entry identifies the publisher, role and limitation of the source. Use the library to understand the evidence behind a profile, then reopen the original authority when a rule or requirement may have changed.</p></div></div>
            <p>
              Sources are classified by publisher role rather than described
              collectively as official. A source may support context without
              directly measuring dog access, affordability or quality; each
              entry records that limitation.
            </p>
            <DataDownloads />
            <SourceLibraryClient />
            <Correction />
          </div>
        </section>
      </main>
    </>
  );
}
