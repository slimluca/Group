"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const regions = { "Lower-cost region": 0.75, "Moderate-cost region": 1, "Higher-cost region": 1.35, "Very high-cost city": 1.7 };
const sizes = { Small: 0.8, Medium: 1, Large: 1.35, "Giant breed": 1.7 };
const foods = { Essential: 0.85, Balanced: 1, Premium: 1.35, "Specialist diet planning": 1.65 };
const grooming = { Minimal: 20, Moderate: 45, Frequent: 85, "Professional breed coat": 130 };
const insurance = { "Emergency savings only": 30, "Basic insurance or savings": 65, "Stronger insurance planning": 115 };
const training = { "Self-guided basics": 15, "Group classes": 55, "Regular coaching": 120 };
const extras = { Lean: 25, Balanced: 60, "Travel and enrichment heavy": 135 };

export default function CostCalculator() {
  const [region, setRegion] = useState<keyof typeof regions>("Moderate-cost region");
  const [size, setSize] = useState<keyof typeof sizes>("Medium");
  const [food, setFood] = useState<keyof typeof foods>("Balanced");
  const [groom, setGroom] = useState<keyof typeof grooming>("Moderate");
  const [cover, setCover] = useState<keyof typeof insurance>("Basic insurance or savings");
  const [train, setTrain] = useState<keyof typeof training>("Group classes");
  const [extra, setExtra] = useState<keyof typeof extras>("Balanced");

  const result = useMemo(() => {
    const base = 180 * regions[region] * sizes[size] * foods[food];
    const monthly = base + grooming[groom] * regions[region] + insurance[cover] * regions[region] + training[train] + extras[extra];
    return { low: Math.round(monthly * 0.82), high: Math.round(monthly * 1.28), yearlyLow: Math.round(monthly * 0.82 * 12), yearlyHigh: Math.round(monthly * 1.28 * 12) };
  }, [region, size, food, groom, cover, train, extra]);

  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">DogHaven Lab</p>
        <h1>Global Dog Cost Calculator</h1>
        <p className="lead">Use this as a planning estimate, not an official price source. Costs vary by country, city, dog size, health, insurance, food choice, grooming needs, training, and lifestyle.</p>
        <div className="tool">
          <div className="panel">
            <Select label="Country region grouping" value={region} setValue={setRegion} options={Object.keys(regions)} />
            <Select label="Dog size" value={size} setValue={setSize} options={Object.keys(sizes)} />
            <Select label="Food quality" value={food} setValue={setFood} options={Object.keys(foods)} />
            <Select label="Grooming level" value={groom} setValue={setGroom} options={Object.keys(grooming)} />
            <Select label="Insurance or emergency planning" value={cover} setValue={setCover} options={Object.keys(insurance)} />
            <Select label="Training" value={train} setValue={setTrain} options={Object.keys(training)} />
            <Select label="Extras" value={extra} setValue={setExtra} options={Object.keys(extras)} />
          </div>
          <div className="panel">
            <p className="eyebrow">Estimated planning range</p>
            <div className="score">${result.low} - ${result.high}</div>
            <h3>Estimated monthly range</h3>
            <p>Estimated yearly planning range: <strong>${result.yearlyLow} - ${result.yearlyHigh}</strong>. This range is intentionally broad because real ownership costs depend on local services, dog health, insurance availability, and household choices.</p>
            <p>For deeper context, read <Link href="/world-atlas/dog-ownership-costs-by-country">dog ownership costs by country</Link> or compare broader conditions through the <Link href="/world-atlas/global-dog-ownership-index">Global Dog Ownership Index framework</Link>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Select<T extends string>({ label, value, setValue, options }: { label: string; value: T; setValue: (value: T) => void; options: string[] }) {
  return <label className="field"><span>{label}</span><select value={value} onChange={(event) => setValue(event.target.value as T)}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}
