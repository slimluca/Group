import { pageMetadata } from "@/lib/metadata";
import DogNameGenerator from "./tool";

export const metadata = pageMetadata(
  "Dog Name Generator: Find Unique Dog Name Ideas | Dog Haven Group",
  "Generate classic, strong, elegant, playful and globally inspired dog names with the free Dog Haven Group dog name generator.",
  "lab/dog-name-generator"
);

export default function Page() {
  return <DogNameGenerator />;
}
