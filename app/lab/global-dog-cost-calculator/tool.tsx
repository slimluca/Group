"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const regions = {
  "Lower-cost region": 0.75,
  "Moderate-cost region": 1,
  "Higher-cost region": 1.35,
  "Very high-cost city": 1.7,
};
const sizes = { Small: 0.8, Medium: 1, Large: 1.35, "Giant breed": 1.7 };
const foods = {
  Essential: 0.85,
  Balanced: 1,
  Premium: 1.35,
  "Specialist diet planning": 1.65,
};
const grooming = {
  Minimal: 20,
  Moderate: 45,
  Frequent: 85,
  "Professional breed coat": 130,
};
const insurance = {
  "Emergency savings only": 30,
  "Basic insurance or savings": 65,
  "Stronger insurance planning": 115,
};
const training = {
  "Self-guided basics": 15,
  "Group classes": 55,
  "Regular coaching": 120,
};
const extras = { Lean: 25, Balanced: 60, "Travel and enrichment heavy": 135 };
const veterinary = {
  "Routine care reserve": 45,
  "Routine plus dental reserve": 85,
  "Broader preventive reserve": 135,
};
const daycare = {
  "Not planned": 0,
  "Occasional boarding or daycare": 70,
  "Regular daycare or boarding": 180,
};
const travel = {
  "Local routines only": 0,
  "Occasional domestic travel": 40,
  "Frequent or international planning": 110,
};

export default function CostCalculator() {
  const [region, setRegion] = useState<keyof typeof regions>(
    "Moderate-cost region",
  );
  const [size, setSize] = useState<keyof typeof sizes>("Medium");
  const [food, setFood] = useState<keyof typeof foods>("Balanced");
  const [groom, setGroom] = useState<keyof typeof grooming>("Moderate");
  const [cover, setCover] = useState<keyof typeof insurance>(
    "Basic insurance or savings",
  );
  const [train, setTrain] = useState<keyof typeof training>("Group classes");
  const [extra, setExtra] = useState<keyof typeof extras>("Balanced");
  const [vet, setVet] = useState<keyof typeof veterinary>(
    "Routine care reserve",
  );
  const [care, setCare] = useState<keyof typeof daycare>("Not planned");
  const [travelPlan, setTravelPlan] = useState<keyof typeof travel>(
    "Local routines only",
  );

  const result = useMemo(() => {
    const foodBase = Math.round(
      180 * regions[region] * sizes[size] * foods[food],
    );
    const groomingCost = Math.round(grooming[groom] * regions[region]);
    const coverCost = Math.round(insurance[cover] * regions[region]);
    const trainingCost = training[train];
    const extrasCost = extras[extra];
    const veterinaryCost = Math.round(veterinary[vet] * regions[region]);
    const daycareCost = Math.round(daycare[care] * regions[region]);
    const travelCost = travel[travelPlan];
    const monthly =
      foodBase +
      groomingCost +
      coverCost +
      trainingCost +
      extrasCost +
      veterinaryCost +
      daycareCost +
      travelCost;
    const low = Math.round(monthly * 0.82);
    const high = Math.round(monthly * 1.28);
    const yearlyLow = low * 12;
    const yearlyHigh = high * 12;
    const pressure =
      monthly > 720
        ? "High planning pressure"
        : monthly > 470
          ? "Moderate planning pressure"
          : "Lean planning pressure";
    const pressureProgress = Math.min(
      100,
      Math.max(22, Math.round((monthly / 900) * 100)),
    );
    return {
      low,
      high,
      yearlyLow,
      yearlyHigh,
      pressure,
      pressureProgress,
      breakdown: [
        ["Food baseline", foodBase],
        ["Grooming", groomingCost],
        ["Insurance or emergency savings", coverCost],
        ["Training", trainingCost],
        ["Extras and enrichment", extrasCost],
        ["Routine veterinary reserve", veterinaryCost],
        ["Boarding or daycare", daycareCost],
        ["Travel planning", travelCost],
      ],
    };
  }, [region, size, food, groom, cover, train, extra, vet, care, travelPlan]);

  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Dog Haven Group Lab</p>
        <h1>Global Dog Cost Calculator</h1>
        <p className="lead">
          Use this as a planning estimate, not an official price source. Costs
          vary by country, city, dog size, health, insurance, food choice,
          grooming needs, training, and lifestyle.
        </p>
        <div className="tool">
          <div className="panel">
            <Select
              label="Country region grouping"
              value={region}
              setValue={setRegion}
              options={Object.keys(regions)}
            />
            <Select
              label="Dog size"
              value={size}
              setValue={setSize}
              options={Object.keys(sizes)}
            />
            <Select
              label="Food quality"
              value={food}
              setValue={setFood}
              options={Object.keys(foods)}
            />
            <Select
              label="Grooming level"
              value={groom}
              setValue={setGroom}
              options={Object.keys(grooming)}
            />
            <Select
              label="Insurance or emergency planning"
              value={cover}
              setValue={setCover}
              options={Object.keys(insurance)}
            />
            <Select
              label="Training"
              value={train}
              setValue={setTrain}
              options={Object.keys(training)}
            />
            <Select
              label="Extras"
              value={extra}
              setValue={setExtra}
              options={Object.keys(extras)}
            />
            <Select
              label="Routine veterinary planning"
              value={vet}
              setValue={setVet}
              options={Object.keys(veterinary)}
            />
            <Select
              label="Boarding or daycare"
              value={care}
              setValue={setCare}
              options={Object.keys(daycare)}
            />
            <Select
              label="Travel"
              value={travelPlan}
              setValue={setTravelPlan}
              options={Object.keys(travel)}
            />
            <button
              className="button secondary"
              type="button"
              onClick={() => {
                setRegion("Moderate-cost region");
                setSize("Medium");
                setFood("Balanced");
                setGroom("Moderate");
                setCover("Basic insurance or savings");
                setTrain("Group classes");
                setExtra("Balanced");
                setVet("Routine care reserve");
                setCare("Not planned");
                setTravelPlan("Local routines only");
              }}
            >
              Reset assumptions
            </button>
          </div>
          <div className="panel">
            <p className="eyebrow">Estimated planning range</p>
            <div className="score">
              ${result.low} - ${result.high}
            </div>
            <div
              className="progress-track"
              aria-label={`Planning pressure ${result.pressureProgress}%`}
            >
              <span
                className="progress-fill"
                style={{ width: `${result.pressureProgress}%` }}
              />
            </div>
            <h2>Monthly estimate</h2>
            <div className="result-grid">
              <div className="metric-card">
                <strong>
                  ${result.yearlyLow} - ${result.yearlyHigh}
                </strong>
                <span>Estimated yearly planning range</span>
              </div>
              <div className="metric-card">
                <strong>{result.pressure}</strong>
                <span>Budget status for this scenario</span>
              </div>
            </div>
            <div
              className="breakdown-grid"
              aria-label="Estimated monthly breakdown"
            >
              {result.breakdown.map(([label, value]) => (
                <div className="breakdown-row" key={label}>
                  <strong>{label}</strong>
                  <span>${value}</span>
                </div>
              ))}
            </div>
            <div className="result-note">
              <span>
                Planning caution: this is not an official price source. Verify
                local providers, veterinary practices, insurance options,
                housing costs, food prices, and emergency savings in your actual
                city.
              </span>
            </div>
            <p>
              Next, read{" "}
              <Link href="/world-atlas/dog-ownership-costs-by-country">
                dog ownership costs by country
              </Link>
              , compare broader conditions through the{" "}
              <Link href="/world-atlas/global-dog-ownership-index">
                Global Dog Ownership Index framework
              </Link>
              , or download the{" "}
              <Link href="/downloads/global-dog-owner-starter-guide">
                Global Dog Owner Starter Guide
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Select<T extends string>({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: T;
  setValue: (value: T) => void;
  options: string[];
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select
        value={value}
        onChange={(event) => setValue(event.target.value as T)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
