import { pageMetadata } from "@/lib/metadata";
import CostCalculator from "./tool";

export const metadata = pageMetadata("Global Dog Cost Calculator | DogHaven Lab", "Estimate dog ownership monthly and yearly planning ranges by broad region, dog size, food quality, grooming, insurance, training, and extras.", "lab/global-dog-cost-calculator");
export default function Page() { return <CostCalculator />; }
