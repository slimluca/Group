import { pageMetadata } from "@/lib/metadata";
import DogAgeCalculator from "./tool";

export const metadata = pageMetadata(
  "Dog Age Calculator: Estimate Your Dog’s Human Age | Dog Haven Group",
  "Use the free Dog Haven Group dog age calculator to estimate your dog’s human-age equivalent and life stage using age and size.",
  "lab/dog-age-calculator"
);

export default function Page() {
  return <DogAgeCalculator />;
}
