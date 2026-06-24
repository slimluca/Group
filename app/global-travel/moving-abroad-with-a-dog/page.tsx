import { EditorialPage } from "@/components/EditorialPage";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages["moving-abroad-with-a-dog"];
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() { return <EditorialPage page={page} />; }
