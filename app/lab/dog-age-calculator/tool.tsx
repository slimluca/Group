"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type DogSize = "Small" | "Medium" | "Large" | "Giant";
type LifeStage =
  "Puppy" | "Adolescent" | "Young adult" | "Mature adult" | "Senior";

const annualAgeRate: Record<DogSize, number> = {
  Small: 4,
  Medium: 5,
  Large: 6,
  Giant: 7,
};
const seniorAge: Record<DogSize, number> = {
  Small: 10,
  Medium: 8,
  Large: 7,
  Giant: 6,
};
const adolescentEnd: Record<DogSize, number> = {
  Small: 1.25,
  Medium: 1.5,
  Large: 1.75,
  Giant: 2,
};

const planningSuggestions: Record<LifeStage, string[]> = {
  Puppy: [
    "Build predictable sleep, feeding, toilet, training, and calm-handling routines.",
    "Plan age-appropriate social learning with guidance from your veterinary and training team.",
    "Review home safety as mobility, confidence, and chewing behaviour change quickly.",
  ],
  Adolescent: [
    "Keep training consistent while impulse control and confidence are still developing.",
    "Match exercise and enrichment to the individual dog rather than age alone.",
    "Revisit household boundaries, safe travel habits, and everyday handling skills.",
  ],
  "Young adult": [
    "Maintain sustainable exercise, enrichment, training, and preventive-care routines.",
    "Track body condition, behaviour changes, and recurring costs as adult patterns settle.",
    "Build reliable care plans for travel, emergencies, and changes in household routine.",
  ],
  "Mature adult": [
    "Watch for gradual changes in stamina, recovery, mobility, weight, and daily comfort.",
    "Review nutrition, dental care, exercise, and screening needs with your veterinarian.",
    "Adapt routines early when small environmental changes could improve comfort.",
  ],
  Senior: [
    "Prioritise comfort, accessible movement, predictable routines, and suitable enrichment.",
    "Discuss age-related screening and any changes in appetite, sleep, mobility, or behaviour with a veterinarian.",
    "Review flooring, bedding, stairs, travel, temperature, and emergency plans for easier daily living.",
  ],
};

export function estimateDogAge(years: number, months: number, size: DogSize) {
  const age = Math.max(0, years) + Math.min(11, Math.max(0, months)) / 12;
  let equivalent: number;

  if (age <= 1) {
    equivalent = age * 15;
  } else if (age <= 2) {
    equivalent = 15 + (age - 1) * 9;
  } else {
    equivalent = 24 + (age - 2) * annualAgeRate[size];
  }

  const spread = age < 1 ? 2 : size === "Small" ? 2 : size === "Medium" ? 3 : 4;
  const range = {
    low: Math.max(0, Math.round(equivalent - spread)),
    high: Math.max(1, Math.round(equivalent + spread)),
  };

  let stage: LifeStage;
  if (age < 0.5) stage = "Puppy";
  else if (age < adolescentEnd[size]) stage = "Adolescent";
  else if (age < 3) stage = "Young adult";
  else if (age < seniorAge[size]) stage = "Mature adult";
  else stage = "Senior";

  return { age, range, stage, suggestions: planningSuggestions[stage] };
}

export default function DogAgeCalculator() {
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);
  const [size, setSize] = useState<DogSize>("Medium");
  const result = useMemo(
    () => estimateDogAge(years, months, size),
    [years, months, size],
  );
  const enteredAge = `${years} ${years === 1 ? "year" : "years"}${months ? `, ${months} ${months === 1 ? "month" : "months"}` : ""}`;

  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Dog Haven Group Lab</p>
        <h1>Dog Age Calculator</h1>
        <p className="lead">
          Estimate your dog’s approximate human-age equivalent and current life
          stage using age and body-size category. The result is an educational
          planning guide rather than a health or lifespan prediction.
        </p>
        <div className="tool">
          <div className="panel">
            <label className="field">
              <span>Dog age in years</span>
              <input
                type="number"
                min="0"
                max="30"
                step="1"
                value={years}
                onChange={(event) =>
                  setYears(
                    Math.min(30, Math.max(0, Number(event.target.value))),
                  )
                }
              />
            </label>
            <label className="field">
              <span>Additional months (optional)</span>
              <input
                type="number"
                min="0"
                max="11"
                step="1"
                value={months}
                onChange={(event) =>
                  setMonths(
                    Math.min(11, Math.max(0, Number(event.target.value))),
                  )
                }
              />
            </label>
            <label className="field">
              <span>Dog size category</span>
              <select
                value={size}
                onChange={(event) => setSize(event.target.value as DogSize)}
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Giant</option>
              </select>
            </label>
            <div className="result-note">
              <span>
                This dog years calculator uses rapid early development and
                size-adjusted adult ageing. It does not rely on a universal
                “multiply by seven” rule.
              </span>
            </div>
            <button
              className="button secondary"
              type="button"
              onClick={() => {
                setYears(5);
                setMonths(0);
                setSize("Medium");
              }}
            >
              Reset age details
            </button>
          </div>
          <div className="panel" aria-live="polite">
            <p className="eyebrow">Estimated age-stage result</p>
            <div className="score">
              {result.range.low}–{result.range.high}
            </div>
            <h2>Human-age equivalent range</h2>
            <div className="result-grid">
              <div className="metric-card">
                <strong>{enteredAge}</strong>
                <span>Entered dog age</span>
              </div>
              <div className="metric-card">
                <strong>{result.stage}</strong>
                <span>Estimated dog life stage</span>
              </div>
            </div>
            <p>
              Dog size affects ageing patterns because smaller dogs often move
              through later adult years more gradually than large and giant
              dogs. Breed, genetics, health, body condition, environment, and
              veterinary history can all change how an individual dog ages.
            </p>
            <h3>Planning ideas for this stage</h3>
            <ul className="result-list">
              {result.suggestions.map((suggestion) => (
                <li key={suggestion}>{suggestion}</li>
              ))}
            </ul>
            <div className="result-note">
              <span>
                This estimate does not diagnose health, predict lifespan, make
                guarantees, or replace veterinary advice.
              </span>
            </div>
            <p>
              Continue with the{" "}
              <Link href="/academy/senior-dog-care">Senior Dog Care guide</Link>
              , explore the wider{" "}
              <Link href="/academy">Dog Haven Group Academy</Link>, or return to
              the <Link href="/lab">Dog Haven Group Lab</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
