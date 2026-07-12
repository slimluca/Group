import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages["global-travel"];
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() { return <>
  <EditorialPage page={page} />
  <section className="section flagship-tool-section"><div className="shell editorial-reading"><p className="eyebrow">Flagship planning tool</p><h2>Dog Haven Global Passport Planner</h2><p className="lead">Build a personalised dog travel timeline, organise a route-specific checklist, open relevant official sources, save progress privately in your browser, and print a branded plan for an international journey or permanent move.</p><Link className="button" href="/global-travel/dog-passport-planner">Build Your Dog Travel Plan</Link></div></section>
</>; }
