"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const checks = ["I have a realistic monthly dog budget.", "I have chosen a veterinary practice or know where to register.", "My household agrees on routines, supervision, and boundaries.", "I have time for toilet training, nights, and early social learning.", "I have safe equipment, sleeping space, and cleaning supplies planned.", "I understand puppies need patience, structure, and professional help when needed."];

export default function PuppyReadinessQuiz() {
  const [selected, setSelected] = useState<string[]>([]);
  const score = selected.length;
  const result = useMemo(() => score >= 5 ? "Strong readiness" : score >= 3 ? "Promising but needs preparation" : "Pause and plan first", [score]);
  return <section className="section"><div className="shell"><p className="eyebrow">DogHaven Lab</p><h1>Puppy Readiness Quiz</h1><p className="lead">Check the practical foundations before the puppy arrives. This tool is educational and should sit alongside local veterinary, trainer, and adoption or breeder guidance.</p><div className="tool"><div className="panel choice-grid">{checks.map((check) => <label className="choice" key={check}><input type="checkbox" checked={selected.includes(check)} onChange={() => setSelected((items) => items.includes(check) ? items.filter((item) => item !== check) : [...items, check])} /><span>{check}</span></label>)}</div><div className="panel"><p className="eyebrow">Readiness score</p><div className="score">{score}/6</div><h2>{result}</h2><p>{score >= 5 ? "You have many of the core foundations in place. Now refine your first month routine and emergency plan." : "Your next step is to close the gaps before committing to a puppy timeline. Focus on budget, supervision, vet registration, equipment, and training support."}</p><p>Continue with the <Link href="/academy/first-time-dog-owner-guide">First-Time Dog Owner Guide</Link> and the planned worksheets in the <Link href="/downloads">Download Library</Link>.</p></div></div></div></section>;
}
