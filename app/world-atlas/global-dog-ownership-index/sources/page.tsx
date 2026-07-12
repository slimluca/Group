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
      <section className="page-hero">
        <div className="shell">
          <IndexNav />
          <p className="eyebrow">Evidence behind the comparison</p>
          <h1>Global Dog Ownership Index Source Library</h1>
          <p className="lead">
            Explore the authorities, regulators, operators and professional
            evidence used for the founding five-country release.
          </p>
        </div>
      </section>
      <main>
        <section className="section">
          <div className="shell index-reading">
            <IndexNotice />
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
