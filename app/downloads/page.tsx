import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages.downloads;
export const metadata = pageMetadata(page.title, page.description, page.slug);
const downloads = ["Global Dog Owner Starter Guide", "Moving Abroad With a Dog Checklist", "International Dog Travel Planner", "Dog Cost Planning Workbook", "Puppy First Month Planner", "Dog Emergency Preparedness Checklist", "Dog Breed Fit Worksheet"];
export default function Page() {
  return (
    <>
      <EditorialPage page={page} />
      <section className="section editorial"><div className="shell grid">{downloads.map((item) => <Link className="nav-card" href={item === "Global Dog Owner Starter Guide" ? "/downloads/global-dog-owner-starter-guide" : "/downloads"} key={item}><h3>{item}</h3><p>Planned branded PDF resource using Dog Haven Group premium black, gold, and white identity.</p></Link>)}</div></section>
    </>
  );
}
