import Link from "next/link";
import { ToolEditorialGuidance } from "@/components/ToolEditorialGuidance";
import { pageMetadata } from "@/lib/metadata";
import PuppyReadinessQuiz from "./tool";

export const metadata = pageMetadata("Puppy Readiness Quiz & First Month Checklist | Dog Haven Group", "Score your puppy readiness and get practical next steps for home setup, budget, vet planning, training support, safety, and first-month routines.", "lab/puppy-readiness-quiz");
export default function Page() {
  return <><PuppyReadinessQuiz /><ToolEditorialGuidance title="Readiness can improve when practical support is arranged."><p>The score is not a pass or fail judgement. It highlights whether time, budget, home preparation, veterinary planning, training support, safety, and household agreement have been considered. It cannot measure every challenge, the needs of a particular puppy, or how routines will feel once care begins.</p><p>Turn unchecked areas into actions: agree on supervision and toilet routines, identify professional support, plan veterinary registration, protect sleep and safe confinement, create an emergency fund, and confirm that housing permits the dog. The <Link href="/academy/puppy-planning">Puppy Planning guide</Link> explains the first-month structure, and the <Link href="/downloads/global-dog-owner-starter-guide">starter guide</Link> helps households record decisions together.</p></ToolEditorialGuidance></>;
}
