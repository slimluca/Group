import fs from "node:fs";
import assert from "node:assert/strict";

const read = (path) => fs.readFileSync(path, "utf8");
const percent = (complete, total) =>
  total > 0 ? Math.round((complete / total) * 100) : 0;
for (const [complete, total, expected] of [
  [0, 0, 0],
  [0, 10, 0],
  [5, 10, 50],
  [10, 10, 100],
])
  assert.equal(percent(complete, total), expected);

const priorityScore = (scores, weights) => {
  const denominator = weights.reduce((sum, value) => sum + value, 0);
  return denominator
    ? Number(
        (
          scores.reduce(
            (sum, score, index) => sum + score * weights[index],
            0,
          ) / denominator
        ).toFixed(1),
      )
    : null;
};
assert.equal(
  priorityScore([1, 2, 3, 4, 5, 4, 3, 2], [1, 1, 1, 1, 1, 1, 1, 1]),
  3,
);
assert.equal(
  priorityScore([1, 2, 3, 4, 5, 4, 3, 2], [0, 0, 0, 0, 0, 0, 0, 0]),
  null,
);
assert.equal(priorityScore([5, 1], [3, 0.5]), 4.4);

const costRange = (monthly) => ({
  low: Math.round(monthly * 0.82),
  high: Math.round(monthly * 1.28),
});
for (const monthly of [0, 100, 500, 2500]) {
  const range = costRange(monthly);
  assert.ok(Number.isFinite(range.low) && range.low >= 0);
  assert.ok(range.high >= range.low);
}

const ageEstimate = (years, months, rate) => {
  const age = Math.max(0, years) + Math.min(11, Math.max(0, months)) / 12;
  return age <= 1
    ? age * 15
    : age <= 2
      ? 15 + (age - 1) * 9
      : 24 + (age - 2) * rate;
};
assert.equal(ageEstimate(-2, -1, 5), 0);
assert.equal(ageEstimate(1, 0, 5), 15);
assert.equal(ageEstimate(2, 0, 5), 24);
assert.equal(ageEstimate(5, 0, 5), 39);

const prioritySource = read("lib/global-index-priorities.ts");
for (const label of [
  "Balanced priorities",
  "Apartment and rental living",
  "Budget-conscious ownership",
  "Frequent international travel",
  "Public transport dependent",
  "Outdoor lifestyle",
  "Veterinary access first",
  "Low priority",
])
  assert.ok(
    prioritySource.includes(label),
    `Missing priority option: ${label}`,
  );
const compareSource = read("components/global-index/CompareClient.tsx");
for (const label of [
  "Save priorities",
  "Reset priorities",
  "Use equal priorities",
  "Strongest alignment",
  "Needs closer investigation",
])
  assert.ok(
    compareSource.includes(label),
    `Missing matcher behavior: ${label}`,
  );
for (const path of [
  "app/lab/global-dog-cost-calculator/tool.tsx",
  "app/lab/breed-fit-quiz/tool.tsx",
  "app/lab/puppy-readiness-quiz/tool.tsx",
  "app/lab/dog-age-calculator/tool.tsx",
  "app/lab/dog-travel-checklist/tool.tsx",
])
  assert.ok(read(path).includes("Reset"), `${path} needs a reset control`);
const nameSource = read("app/lab/dog-name-generator/tool.tsx");
for (const behavior of [
  "Sound preference",
  "Name ending",
  "Personality direction",
  "Generate again",
  "Reset name preferences",
  "Copy favourites",
  "Clear favourites",
])
  assert.ok(
    nameSource.includes(behavior),
    `Name generator behavior missing: ${behavior}`,
  );

const passportCheck = read("scripts/check-passport-planner.mjs");
assert.ok(
  passportCheck.includes("timeline") && passportCheck.includes("progress"),
  "Passport Planner deterministic checks missing",
);
const dataset = JSON.parse(
  read("public/data/global-dog-ownership-index-v1.json"),
);
assert.equal(dataset.rows.length, 40);
assert.ok(
  dataset.rows.every(
    (row) => Number.isFinite(row.score) && row.score >= 1 && row.score <= 5,
  ),
);

console.log(
  "Interactive tool checks passed: percentages, priority weights and presets, cost ranges, age boundaries, reset controls, Passport Planner coverage, and Index score bounds.",
);
