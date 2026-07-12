import Link from "next/link";
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
      <section className="section flagship-tool-section"><div className="shell editorial-reading"><p className="eyebrow">Flagship global planning tool</p><h2>Build a complete international dog travel plan</h2><p className="lead">The Dog Haven Global Passport Planner combines a personalised preparation timeline, category checklist, official-source collection, private browser saving and a printable plan without claiming to determine compliance.</p><Link className="button" href="/global-travel/dog-passport-planner">Open the Passport Planner</Link></div></section>
      <section className="section editorial">
        <div className="shell">
          <p className="eyebrow">Live tools</p>
          <h2>Use six working Dog Haven Group Lab tools.</h2>
          <p className="lead">These tools are planning prompts, not verdict machines. Pair cost ranges with local provider checks, breed-fit categories with careful dog research, puppy readiness with professional support, travel checklists with current official sources, age estimates with individual veterinary history, and name ideas with the dog you are getting to know.</p>
          <ToolLinks />
        </div>
      </section>
      <section className="section">
        <div className="shell editorial-reading">
          <p className="eyebrow">Responsible interpretation</p>
          <h2>A useful result creates a better next question.</h2>
          <p>Lab results are educational planning aids. Cost ranges need local price checks, breed-fit categories need research into the individual dog, puppy readiness depends on real household support, and travel preparation still requires current government, carrier, transport, and veterinary information.</p>
          <p>Keep the assumptions behind a result, compare them with the relevant <Link href="/academy">Academy guidance</Link>, and use the <Link href="/downloads/global-dog-owner-starter-guide">starter guide</Link> when a printable household plan is more useful than another score.</p>
        </div>
      </section>
    </>
  );
}
