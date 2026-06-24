"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const checks = ["I have a realistic monthly dog budget.", "I have chosen a veterinary practice or know where to register.", "My household agrees on routines, supervision, and boundaries.", "I have time for toilet training, nights, and early social learning.", "I have safe equipment, sleeping space, and cleaning supplies planned.", "I understand puppies need patience, structure, and professional help when needed."];

export default function PuppyReadinessQuiz() {
  const [selected, setSelected] = useState<string[]>([]);
  const score = selected.length;
  const percent = Math.round((score / checks.length) * 100);
  const result = useMemo(() => {
    if (score >= 5) return { band: "Strong foundation", summary: "You have many foundations in place. Now refine your first-month routine, emergency plan, and household roles.", steps: ["Confirm vet registration and emergency contacts.", "Write the first seven days of feeding, sleep, and toilet routines.", "Decide who supervises visitors, children, cleaning, and night wakeups."] };
    if (score >= 3) return { band: "Nearly ready", summary: "Your plan is promising, but a few gaps could create stress once the puppy arrives.", steps: ["Close missing budget, vet, equipment, or supervision gaps.", "Ask a trainer or vet for guidance if you feel unsure.", "Delay the arrival date if the household routine is not ready."] };
    return { band: "Early planning", summary: "Pause and plan before committing to a puppy timeline. The goal is a calm first month, not a rushed arrival.", steps: ["Build a realistic monthly budget.", "Choose a vet and emergency option.", "Create safe sleeping, toilet, cleaning, and supervision plans."] };
  }, [score]);

  return <section className="section"><div className="shell"><p className="eyebrow">Dog Haven Group Lab</p><h1>Puppy Readiness Quiz</h1><p className="lead">Check the practical foundations before the puppy arrives. This tool is educational and should sit alongside local veterinary, trainer, and adoption or breeder guidance.</p><div className="tool"><div className="panel choice-grid">{checks.map((check) => <label className="choice" key={check}><input type="checkbox" checked={selected.includes(check)} onChange={() => setSelected((items) => items.includes(check) ? items.filter((item) => item !== check) : [...items, check])} /><span>{check}</span></label>)}</div><div className="panel"><p className="eyebrow">Readiness result</p><div className="score">{percent}%</div><h2>{result.band}</h2><div className="progress-track" aria-label={`Readiness ${percent}%`}><span className="progress-fill" style={{ width: `${percent}%` }} /></div><div className="result-grid"><div className="metric-card"><strong>{score}/6</strong><span>Readiness score</span></div><div className="metric-card"><strong>{result.band}</strong><span>Planning band</span></div></div><p>{result.summary}</p><h3>Practical next steps</h3><ul className="result-list">{result.steps.map((step) => <li key={step}>{step}</li>)}</ul><p>Continue with the <Link href="/academy/first-time-dog-owner-guide">First-Time Dog Owner Guide</Link>, the <Link href="/academy/puppy-planning">Puppy Planning guide</Link>, and the <Link href="/downloads/global-dog-owner-starter-guide">starter guide PDF</Link>.</p></div></div></div></section>;
}
