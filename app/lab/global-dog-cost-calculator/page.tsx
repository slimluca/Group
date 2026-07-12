import Link from "next/link";
import { ToolEditorialGuidance } from "@/components/ToolEditorialGuidance";
import { pageMetadata } from "@/lib/metadata";
import CostCalculator from "./tool";

export const metadata = pageMetadata("Dog Cost Calculator: Monthly & Yearly Planning | Dog Haven Group", "Estimate dog ownership costs by broad region, dog size, food quality, grooming, insurance, training, extras, and yearly planning range.", "lab/global-dog-cost-calculator");
export default function Page() {
  return <><CostCalculator /><ToolEditorialGuidance title="Read the range as a budget prompt, not a local quote."><p>The calculator combines broad regional and lifestyle assumptions to show how food, grooming, insurance or emergency savings, training, and enrichment can change a monthly plan. It cannot know prices in your city, an individual dog’s health needs, housing costs, currency changes, or the services you will actually choose.</p><p>Use the low and high values to identify categories that need local quotes. Add a separate emergency margin, distinguish recurring costs from once-off setup, and revisit the plan when the dog’s size, diet, health, or routine changes. The <Link href="/world-atlas/dog-ownership-costs-by-country">costs-by-country guide</Link> explains why national comparisons need caution, while the <Link href="/downloads/global-dog-owner-starter-guide">starter guide</Link> provides a printable household framework.</p></ToolEditorialGuidance></>;
}
