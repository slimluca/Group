import { pageMetadata } from "@/lib/metadata";
import DogTravelChecklist from "./tool";

export const metadata = pageMetadata("Dog Travel Checklist | DogHaven Lab", "Generate a tailored dog travel checklist for domestic or international trips, holidays, relocation, dog size, and transport method.", "lab/dog-travel-checklist");
export default function Page() { return <DogTravelChecklist />; }
