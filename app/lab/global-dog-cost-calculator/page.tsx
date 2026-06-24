import { pageMetadata } from "@/lib/metadata";
import CostCalculator from "./tool";

export const metadata = pageMetadata("Dog Cost Calculator: Monthly & Yearly Planning | Dog Haven Group", "Estimate dog ownership costs by broad region, dog size, food quality, grooming, insurance, training, extras, and yearly planning range.", "lab/global-dog-cost-calculator");
export default function Page() { return <CostCalculator />; }
