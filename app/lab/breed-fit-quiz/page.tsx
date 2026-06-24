import { pageMetadata } from "@/lib/metadata";
import BreedFitQuiz from "./tool";

export const metadata = pageMetadata("Breed Fit Quiz for Global Dog Owners | Dog Haven Group", "Use the breed fit quiz to compare lifestyle, home, activity, children, grooming, and travel factors before choosing a dog.", "lab/breed-fit-quiz");
export default function Page() { return <BreedFitQuiz />; }
