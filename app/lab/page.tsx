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
          <h2>Use the first working Dog Haven Group Lab tools.</h2>
          <p className="lead">These tools are planning prompts, not verdict machines. Pair cost ranges with local provider checks, breed-fit categories with careful dog research, puppy readiness with professional support where needed, and travel checklists with current official sources.</p>
          <ToolLinks />
        </div>
      </section>
      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Coming later</p>
            <h2>Games and daily challenges can still be premium.</h2>
            <p>Future Dog Haven Group Lab experiences can include daily ownership challenges, care myth or fact prompts, breed recognition games with responsible caveats, dog-friendly city planning tasks, and the Dog Haven Group Passport Planner concept. The standard is simple: every interactive feature should teach something useful and connect back to real planning.</p>
          </div>
          <div className="panel">
            <h3>Passport Planner direction</h3>
            <p>A future planner could organize microchip details, vaccination notes, document windows, airline contacts, crate measurements, route notes, and official-source links. It should help users structure information without replacing current government, airline, or veterinary requirements.</p>
          </div>
        </div>
      </section>
    </>
  );
}
