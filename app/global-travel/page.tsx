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
