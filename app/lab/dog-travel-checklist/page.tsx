import Link from "next/link";
import { ToolEditorialGuidance } from "@/components/ToolEditorialGuidance";
import { pageMetadata } from "@/lib/metadata";
import DogTravelChecklist from "./tool";

export const metadata = pageMetadata("Dog Travel Checklist for International Trips | Dog Haven Group", "Generate a dog travel checklist for domestic trips, travelling abroad with a dog, relocation, transport planning, documents, and official-source checks.", "lab/dog-travel-checklist");
export default function Page() {
  return <><DogTravelChecklist /><ToolEditorialGuidance title="A completed checklist still needs current source confirmation."><p>The generated list organises common preparation areas according to the trip type, purpose, dog size, and transport method selected. It does not verify entry permission, approve documents, assess fitness to travel, or know the latest policy of a government, airline, ferry, rail operator, accommodation provider, or veterinary authority.</p><p>Keep dated links and contact notes beside each checked item. Reconfirm origin, transit, destination, carrier, crate, accommodation, weather, and arrival requirements before spending non-refundable money and again near departure. For the wider sequence, use the <Link href="/global-travel/moving-abroad-with-a-dog">moving abroad guide</Link> and the <Link href="/global-travel/route-guides">route research framework</Link>.</p></ToolEditorialGuidance></>;
}
