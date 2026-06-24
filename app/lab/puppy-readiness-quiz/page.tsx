import { pageMetadata } from "@/lib/metadata";
import PuppyReadinessQuiz from "./tool";

export const metadata = pageMetadata("Puppy Readiness Quiz & First Month Checklist | Dog Haven Group", "Score your puppy readiness and get practical next steps for home setup, budget, vet planning, training support, safety, and first-month routines.", "lab/puppy-readiness-quiz");
export default function Page() { return <PuppyReadinessQuiz />; }
