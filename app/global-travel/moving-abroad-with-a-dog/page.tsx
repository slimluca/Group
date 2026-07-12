import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages["moving-abroad-with-a-dog"];
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() { return <><EditorialPage page={page} /><section className="section"><div className="shell editorial-reading"><h2>Turn relocation research into a working route plan</h2><p>When your origin, destination and approximate date are known, use the <Link href="/global-travel/dog-passport-planner">Dog Haven Global Passport Planner</Link> to organise official-source checks, veterinary questions, transport preparation, arrival tasks and a browser-saved checklist. It remains an organisational aid rather than proof that requirements have been met.</p></div></section></>; }
