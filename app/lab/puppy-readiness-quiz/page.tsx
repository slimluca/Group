import { pageMetadata } from "@/lib/metadata";
import PuppyReadinessQuiz from "./tool";

export const metadata = pageMetadata("Puppy Readiness Quiz | DogHaven Lab", "Score your puppy readiness and receive practical next steps for home, budget, training, vet, and routine planning.", "lab/puppy-readiness-quiz");
export default function Page() { return <PuppyReadinessQuiz />; }
