import { pageMetadata } from "@/lib/metadata";
import DogTravelChecklist from "./tool";

export const metadata = pageMetadata("Dog Travel Checklist for International Trips | Dog Haven Group", "Generate a dog travel checklist for domestic trips, travelling abroad with a dog, relocation, transport planning, documents, and official-source checks.", "lab/dog-travel-checklist");
export default function Page() { return <DogTravelChecklist />; }
