import { indexCategories } from "@/data/global-dog-ownership-index/categories";
import type {
  CategoryId,
  IndexCountry,
} from "@/data/global-dog-ownership-index/types";

export type PriorityWeight = 0 | 0.5 | 1 | 2 | 3;
export type PriorityMap = Record<CategoryId, PriorityWeight>;

export const priorityOptions: { value: PriorityWeight; label: string }[] = [
  { value: 0, label: "Not important" },
  { value: 0.5, label: "Low priority" },
  { value: 1, label: "Useful" },
  { value: 2, label: "Important" },
  { value: 3, label: "Essential" },
];

export const equalPriorities = (): PriorityMap =>
  Object.fromEntries(
    indexCategories.map((category) => [category.id, 1]),
  ) as PriorityMap;

const preset = (values: Partial<PriorityMap>): PriorityMap => ({
  ...equalPriorities(),
  ...values,
});

export const priorityPresets: Record<
  string,
  { label: string; values: PriorityMap }
> = {
  balanced: { label: "Balanced priorities", values: equalPriorities() },
  apartment: {
    label: "Apartment and rental living",
    values: preset({
      housing: 3,
      "public-spaces": 2,
      transport: 2,
      everyday: 2,
      cost: 2,
      travel: 0.5,
    }),
  },
  budget: {
    label: "Budget-conscious ownership",
    values: preset({
      cost: 3,
      housing: 3,
      veterinary: 2,
      everyday: 2,
      travel: 0.5,
    }),
  },
  travel: {
    label: "Frequent international travel",
    values: preset({
      travel: 3,
      transport: 3,
      veterinary: 2,
      housing: 1,
      climate: 1,
    }),
  },
  transit: {
    label: "Public transport dependent",
    values: preset({
      transport: 3,
      "public-spaces": 2,
      housing: 2,
      everyday: 2,
      travel: 1,
    }),
  },
  outdoor: {
    label: "Outdoor lifestyle",
    values: preset({
      "public-spaces": 3,
      climate: 3,
      everyday: 2,
      veterinary: 1,
      transport: 1,
    }),
  },
  veterinary: {
    label: "Veterinary access first",
    values: preset({
      veterinary: 3,
      cost: 2,
      transport: 2,
      everyday: 2,
      travel: 1,
    }),
  },
};

export function isPriorityMap(value: unknown): value is PriorityMap {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return indexCategories.every((category) =>
    priorityOptions.some((option) => option.value === record[category.id]),
  );
}

export function personalPlanningScore(
  country: IndexCountry,
  priorities: PriorityMap,
) {
  const denominator = indexCategories.reduce(
    (total, category) => total + priorities[category.id],
    0,
  );
  if (!denominator) return null;
  const weighted = country.assessments.reduce(
    (total, assessment) =>
      total + (assessment.score ?? 0) * priorities[assessment.categoryId],
    0,
  );
  return Number((weighted / denominator).toFixed(1));
}

export function priorityResult(country: IndexCountry, priorities: PriorityMap) {
  const score = personalPlanningScore(country, priorities);
  const considered = country.assessments
    .filter((assessment) => priorities[assessment.categoryId] > 0)
    .map((assessment) => ({
      assessment,
      category: indexCategories.find(
        (category) => category.id === assessment.categoryId,
      )!,
      weight: priorities[assessment.categoryId],
    }));
  const strongest = [...considered]
    .sort(
      (a, b) =>
        (b.assessment.score ?? 0) * b.weight -
        (a.assessment.score ?? 0) * a.weight,
    )
    .slice(0, 2)
    .map((item) => item.category.shortName);
  const investigate = [...considered]
    .filter((item) => item.weight >= 1)
    .sort(
      (a, b) =>
        (a.assessment.score ?? 0) - (b.assessment.score ?? 0) ||
        b.weight - a.weight,
    )
    .slice(0, 2)
    .map((item) => item.category.shortName);
  const alignment =
    score === null
      ? "No priorities selected"
      : score >= 4
        ? "Strong alignment with your selected priorities"
        : score >= 3
          ? "Mixed alignment"
          : "Needs closer investigation";
  const explanation =
    score === null
      ? "Choose at least one priority to create a personal planning view."
      : `${country.name} shows ${alignment.toLowerCase()}. Use the category evidence to investigate the exact city, housing arrangement and services that matter to your household.`;
  return { score, strongest, investigate, alignment, explanation };
}
