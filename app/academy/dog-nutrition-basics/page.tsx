import { AcademyTopicPage } from "@/components/AcademyTopicPage";
import { academyTopicMap } from "@/data/academy";
import { pageMetadata } from "@/lib/metadata";

const topic = academyTopicMap["dog-nutrition-basics"];
export const metadata = pageMetadata(topic.title, topic.description, `academy/${topic.slug}`);
export default function Page() { return <AcademyTopicPage topic={topic} />; }
