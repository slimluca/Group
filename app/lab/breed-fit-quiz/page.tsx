import { pageMetadata } from "@/lib/metadata";
import BreedFitQuiz from "./tool";

export const metadata = pageMetadata("Breed Fit Quiz | DogHaven Lab", "Answer lifestyle questions and receive a thoughtful dog fit category without pretending one exact breed is universally right.", "lab/breed-fit-quiz");
export default function Page() { return <BreedFitQuiz />; }
