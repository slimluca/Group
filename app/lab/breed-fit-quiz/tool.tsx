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

const categoryNotes = {
  "Experienced-owner breed category": {
    strengths: ["You have selected high activity or advanced experience signals.", "You may be open to dogs that need more structure and enrichment."],
    cautions: ["Demanding dogs still need realistic training, rest, health research, and housing fit.", "Avoid choosing intensity because it sounds impressive."]
  },
  "Travel-friendly smaller dog category": {
    strengths: ["Compact home and travel needs point toward adaptable companion planning.", "Smaller dogs can be easier to transport when rules and temperament fit."],
    cautions: ["Small does not mean low effort.", "Check temperament, noise, handling comfort, and carrier or housing rules."]
  },
  "Family-focused dog category": {
    strengths: ["Your household answer suggests supervision and family routine should guide the choice.", "Stable, sociable categories may be worth researching."],
    cautions: ["No dog is automatically child-safe.", "Adults must manage training, boundaries, and calm routines."]
  },
  "Active outdoor dog category": {
    strengths: ["Your activity answers point toward a dog that can share regular outdoor routines.", "Exercise planning is already part of your decision."],
    cautions: ["High energy requires recovery, training, enrichment, and bad-weather plans.", "Activity needs must be sustainable every week."]
  },
  "Apartment-friendly companion category": {
    strengths: ["Your answers suggest calmer companion planning may be a sensible starting point.", "Routine, rest, and realistic exercise can matter more than home size alone."],
    cautions: ["Apartment-friendly still requires toilet routines, noise planning, walks, and enrichment.", "Research individual temperament carefully."]
  }
};

export default function BreedFitQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const result = useMemo(() => {
    const values = Object.values(answers);
    let title: keyof typeof categoryNotes = "Apartment-friendly companion category";
    let reason = "Your current answers lean toward a calmer companion category. Complete all questions and use this as a research prompt, not a breed prescription.";
    if (values.includes("Confident experienced owner") && values.includes("Long outdoor activity")) {
      title = "Experienced-owner breed category";
      reason = "The combination of confident experience and long outdoor activity suggests you may be prepared for a more demanding dog category.";
    } else if (values.includes("Apartment or compact home") && values.includes("Needs easy travel")) {
      title = "Travel-friendly smaller dog category";
      reason = "Compact-home and travel answers make adaptability, handling, transport, and housing rules especially important.";
    } else if (values.includes("Family with children")) {
      title = "Family-focused dog category";
      reason = "A family household means supervision, temperament, training support, and child-dog routines should lead the decision.";
    } else if (values.includes("Long outdoor activity")) {
      title = "Active outdoor dog category";
      reason = "Your activity answer points toward a dog category that can share consistent exercise and enrichment.";
    }
    const answered = values.length;
    const progress = Math.round((answered / questions.length) * 100);
    const suitability = Math.min(96, Math.max(48, 52 + answered * 8 + (values.includes("Some experience") ? 4 : 0) + (values.includes("Confident experienced owner") ? 8 : 0)));
    return { title, reason, answered, progress, suitability, notes: categoryNotes[title] };
  }, [answers]);

  return (
    <section className="section"><div className="shell"><p className="eyebrow">Dog Haven Group Lab</p><h1>Breed Fit Quiz</h1><p className="lead">This quiz returns a lifestyle category, not an exact breed prescription. Breed choice should consider individual temperament, health, housing rules, local laws, training support, and professional advice where needed.</p><div className="tool"><div className="panel choice-grid">{questions.map((question) => <div key={question.key}><p className="label">{question.label}</p>{question.options.map((option) => <label className="choice" key={option}><input type="radio" name={question.key} checked={answers[question.key] === option} onChange={() => setAnswers({ ...answers, [question.key]: option })} /><span>{option}</span></label>)}</div>)}</div><div className="panel"><p className="eyebrow">Result summary</p><div className="score">{result.suitability}%</div><h2>{result.title}</h2><div className="progress-track" aria-label={`Quiz progress ${result.progress}%`}><span className="progress-fill" style={{ width: `${result.progress}%` }} /></div><div className="result-grid"><div className="metric-card"><strong>{result.answered}/{questions.length}</strong><span>Questions answered</span></div><div className="metric-card"><strong>{result.progress}%</strong><span>Quiz progress</span></div></div><p>{result.reason}</p><h3>Strengths</h3><ul className="result-list">{result.notes.strengths.map((item) => <li key={item}>{item}</li>)}</ul><h3>Cautions</h3><ul className="result-list">{result.notes.cautions.map((item) => <li key={item}>{item}</li>)}</ul><p>Next, read the <Link href="/academy/first-time-dog-owner-guide">First-Time Dog Owner Guide</Link>, plan costs with the <Link href="/lab/global-dog-cost-calculator">Global Dog Cost Calculator</Link>, and save the <Link href="/downloads/global-dog-owner-starter-guide">starter guide</Link>.</p></div></div></div></section>
  );
}
