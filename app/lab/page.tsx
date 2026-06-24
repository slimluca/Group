import { EditorialPage } from "@/components/EditorialPage";
import { ToolLinks } from "@/components/ToolLinks";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages.lab;
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() {
  return (
    <>
      <EditorialPage page={page} />
      <section className="section editorial">
        <div className="shell">
          <p className="eyebrow">Live tools</p>
          <h2>Use the first working DogHaven Lab tools.</h2>
          <ToolLinks />
        </div>
      </section>
    </>
  );
}
