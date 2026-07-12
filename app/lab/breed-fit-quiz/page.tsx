import Link from "next/link";
import { ToolEditorialGuidance } from "@/components/ToolEditorialGuidance";
import { pageMetadata } from "@/lib/metadata";
import BreedFitQuiz from "./tool";

export const metadata = pageMetadata("Breed Fit Quiz for Global Dog Owners | Dog Haven Group", "Use the breed fit quiz to compare lifestyle, home, activity, children, grooming, and travel factors before choosing a dog.", "lab/breed-fit-quiz");
export default function Page() {
  return <><BreedFitQuiz /><ToolEditorialGuidance title="A lifestyle category is the beginning of breed research."><p>The quiz organises housing, activity, household, grooming, and travel preferences into a broad result. It cannot assess an individual dog, predict temperament, guarantee compatibility, or account for every health, legal, housing, and support consideration. Dogs within one breed can differ, and rescue or mixed-breed dogs may not fit a simple label.</p><p>Use the result to refine questions for reputable adoption organisations, responsible breeders, veterinarians, qualified trainers, landlords, and household members. Compare daily routine, adult size, exercise, grooming, training, health screening, alone time, travel, and long-term cost before deciding. Continue with the <Link href="/academy/first-time-dog-owner-guide">first-time dog owner guide</Link> and the <Link href="/lab/global-dog-cost-calculator">cost calculator</Link>.</p></ToolEditorialGuidance></>;
}
