import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages["global-travel"];
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() {
  return (
    <>
      <EditorialPage page={page} />
      <section className="section editorial">
        <div className="shell">
          <p className="eyebrow">Global relocation centre</p>
          <h2>Plan the move, not only the travel day.</h2>
          <p className="lead">
            International relocation with a dog needs route research, document
            tracking, transport preparation, crate planning, arrival support and
            settling-in routines. Use the relocation centre as the overview,
            then move into the timeline and document tools when the move becomes
            more specific.
          </p>
          <div className="grid tool-grid">
            <Link className="nav-card" href="/global-travel/relocation">
              <h3>Global Dog Relocation Centre</h3>
              <p>
                Start with the main planning gateway for moving internationally
                with a dog, from early research to settling into a new country.
              </p>
            </Link>
            <Link className="nav-card" href="/global-travel/relocation-timeline">
              <h3>Relocation Timeline</h3>
              <p>
                Choose an approximate departure window and track staged
                relocation tasks with private browser saving.
              </p>
            </Link>
            <Link className="nav-card" href="/global-travel/document-planning">
              <h3>Document Planning</h3>
              <p>
                Organise document categories, private notes and a copyable text
                summary without uploading files.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell information-copy">
          <h2>Turn research into a route-specific plan</h2>
          <p>
            The{" "}
            <Link href="/global-travel/dog-passport-planner">
              Dog Haven Global Passport Planner
            </Link>{" "}
            helps organise a preparation timeline, route checklist and
            official-source questions for a temporary journey or permanent move.
            It saves privately in the browser and remains an organisational aid
            rather than proof that a dog meets current entry or carrier
            requirements.
          </p>
          <p>
            Start with the destination authority, then check origin, transit and
            return requirements separately. Confirm the dog’s individual travel
            suitability with an appropriate veterinarian, verify every operating
            carrier directly, and leave enough time for documents, tests,
            treatments or permits that may apply.
          </p>
        </div>
      </section>
    </>
  );
}
