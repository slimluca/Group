"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const questions = [
  { key: "space", label: "Home space", options: ["Apartment or compact home", "House with some outdoor access", "Large active property"] },
  { key: "energy", label: "Daily activity", options: ["Calm short walks", "Steady daily exercise", "Long outdoor activity"] },
  { key: "experience", label: "Owner experience", options: ["First dog", "Some experience", "Confident experienced owner"] },
  { key: "travel", label: "Travel needs", options: ["Needs easy travel", "Occasional travel", "Travel is rare"] },
  { key: "family", label: "Household", options: ["Solo or couple", "Family with children", "Busy mixed household"] }
];

export default function BreedFitQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const result = useMemo(() => {
    const values = Object.values(answers);
    if (values.includes("Confident experienced owner") && values.includes("Long outdoor activity")) return ["Experienced-owner breed category", "Your answers suggest you may be prepared for a more demanding dog category, but you should still research temperament, training, health, and local legal or housing restrictions carefully."];
    if (values.includes("Apartment or compact home") && values.includes("Needs easy travel")) return ["Travel-friendly smaller dog category", "A smaller, adaptable companion category may suit your routine, especially if housing, transport, and travel flexibility matter."];
    if (values.includes("Family with children")) return ["Family-focused dog category", "Your answers point toward a stable, sociable, family-oriented dog category. Prioritize temperament, supervision, training support, and realistic child-dog routines."];
    if (values.includes("Long outdoor activity")) return ["Active outdoor dog category", "An energetic dog category may fit your lifestyle if you can provide consistent exercise, enrichment, training, and recovery time."];
    return ["Apartment-friendly companion category", "Your answers suggest a calmer companion category may be a good starting point. Research individual dogs carefully and avoid choosing by appearance alone."];
  }, [answers]);

  return (
    <section className="section"><div className="shell"><p className="eyebrow">DogHaven Lab</p><h1>Breed Fit Quiz</h1><p className="lead">This quiz returns a lifestyle category, not an exact breed prescription. Breed choice should consider individual temperament, health, housing rules, local laws, training support, and professional advice where needed.</p><div className="tool"><div className="panel choice-grid">{questions.map((question) => <div key={question.key}><p className="label">{question.label}</p>{question.options.map((option) => <label className="choice" key={option}><input type="radio" name={question.key} checked={answers[question.key] === option} onChange={() => setAnswers({ ...answers, [question.key]: option })} /><span>{option}</span></label>)}</div>)}</div><div className="panel"><p className="eyebrow">Result</p><h2>{result[0]}</h2><p>{result[1]}</p><p>Use this as an educational starting point. Next, read the <Link href="/academy/first-time-dog-owner-guide">First-Time Dog Owner Guide</Link> and plan costs with the <Link href="/lab/global-dog-cost-calculator">Global Dog Cost Calculator</Link>.</p></div></div></div></section>
  );
}
