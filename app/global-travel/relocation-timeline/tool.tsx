"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const storageKey = "dog-haven-relocation-timeline-v1";

type Timeframe = "six-plus" | "three-six" | "one-three" | "under-one" | "undecided";
type SavedState = {
  timeframe: Timeframe;
  checked: string[];
};

const timeframeOptions: { value: Timeframe; label: string; summary: string }[] = [
  {
    value: "six-plus",
    label: "More than six months away",
    summary:
      "Use the long runway to research route options, compare transport choices and begin calm crate or carrier preparation."
  },
  {
    value: "three-six",
    label: "Three to six months",
    summary:
      "Move from broad research into official-source checks, veterinary planning, document organisation and transport decisions."
  },
  {
    value: "one-three",
    label: "One to three months",
    summary:
      "Prioritise source verification, veterinary appointments, carrier confirmation, document readiness and arrival arrangements."
  },
  {
    value: "under-one",
    label: "Less than one month",
    summary:
      "Treat the move as time-sensitive. Reconfirm official sources, contact relevant professionals and avoid assuming a late plan is feasible."
  },
  {
    value: "undecided",
    label: "Date not decided",
    summary:
      "Use the timeline to understand the work ahead before choosing a route, booking transport or committing to a departure window."
  }
];

const baseStages = [
  {
    title: "Destination research",
    timing: "Before booking",
    tasks: [
      "Identify the exact destination country, region and first address where possible.",
      "Record the destination authority that publishes current dog entry information.",
      "List local arrival needs such as accommodation, onward transport, food availability and veterinary support."
    ]
  },
  {
    title: "Official requirements",
    timing: "Early source check",
    tasks: [
      "Check current destination, origin and transit authorities separately.",
      "Record source links, access dates and contact notes in one route file.",
      "Flag any requirement that needs direct confirmation from an authority or appropriate professional."
    ]
  },
  {
    title: "Veterinary planning",
    timing: "Timing depends on the route",
    tasks: [
      "Book a veterinary planning conversation for the route and individual dog.",
      "Ask which records, tests, certificates, treatments or endorsements may need investigation.",
      "Do not rely on a general website for medical suitability or route-specific veterinary deadlines."
    ]
  },
  {
    title: "Identification",
    timing: "Before documents are finalised",
    tasks: [
      "Confirm identification details are readable and match records.",
      "Check whether the official route sources require a specific identification sequence or standard.",
      "Keep identification notes with the document file without publishing private numbers online."
    ]
  },
  {
    title: "Documents",
    timing: "Build before final booking",
    tasks: [
      "Create a document checklist for the specific origin, destination, transit and carrier route.",
      "Separate records you already have from documents that may need issue, endorsement or renewal.",
      "Use the document planning checklist to track categories without uploading files."
    ]
  },
  {
    title: "Transport",
    timing: "Confirm before payment",
    tasks: [
      "Confirm every operating carrier and transfer provider accepts the dog on the complete route.",
      "Ask about carrier, crate, handling, weather, breed, size, timing and disruption policies.",
      "Keep a backup plan for delays or route changes."
    ]
  },
  {
    title: "Crate preparation",
    timing: "Begin gradually",
    tasks: [
      "Check current carrier crate or carrier expectations before buying equipment.",
      "Start calm acclimatisation early if a crate or carrier is part of the journey.",
      "Prepare water, bedding and labelling questions according to the carrier's current rules."
    ]
  },
  {
    title: "Accommodation",
    timing: "Before departure",
    tasks: [
      "Confirm dog-friendly temporary or permanent accommodation in writing where possible.",
      "Check building, rental, access, lift, outdoor and local walking arrangements.",
      "Plan a quiet first sleeping area and a simple first-week routine."
    ]
  },
  {
    title: "Departure",
    timing: "Final recheck",
    tasks: [
      "Reopen official sources before travel because requirements and forms can change.",
      "Review documents, identification, carrier confirmation and emergency contacts.",
      "Prepare food, water, medication questions, cleaning supplies and communication backups."
    ]
  },
  {
    title: "Arrival",
    timing: "First day",
    tasks: [
      "Follow current arrival instructions from the relevant authority and carrier.",
      "Use pre-arranged ground transport and keep the first day calm.",
      "Locate nearby veterinary help and record emergency contacts."
    ]
  },
  {
    title: "Settling in",
    timing: "First weeks",
    tasks: [
      "Rebuild walks, feeding, rest and alone-time routines gradually.",
      "Watch for stress and avoid unnecessary novelty in the first days.",
      "Confirm local ownership expectations, registration questions and veterinary relationships."
    ]
  }
];

function isSavedState(value: unknown): value is SavedState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<SavedState>;
  return (
    typeof candidate.timeframe === "string" &&
    timeframeOptions.some((option) => option.value === candidate.timeframe) &&
    Array.isArray(candidate.checked) &&
    candidate.checked.every((item) => typeof item === "string")
  );
}

function taskId(stageTitle: string, task: string) {
  return `${stageTitle}:${task}`;
}

function progressFor(completedCount: number, totalCount: number) {
  const total = Math.max(0, totalCount);
  const completed = Math.min(total, Math.max(0, completedCount));
  const percent = total ? Math.min(100, Math.max(0, Math.round((completed / total) * 100))) : 0;
  return {
    completed,
    total,
    remaining: total - completed,
    percent,
    label: `${completed} of ${total} tasks complete · ${percent}%`
  };
}

function completionMessage(progress: ReturnType<typeof progressFor>) {
  if (progress.total === 0) return "No timeline tasks are available.";
  if (progress.completed === 0) return "Start by choosing a timeframe and checking the tasks you have already handled.";
  if (progress.completed === progress.total) return "All timeline tasks are checked. Reconfirm current official and carrier sources before travel.";
  return "Timeline planning is in progress. Keep source checks, veterinary questions and transport decisions tied to the actual route.";
}

export function RelocationTimelineTool() {
  const [timeframe, setTimeframe] = useState<Timeframe>("undecided");
  const [checked, setChecked] = useState<string[]>([]);
  const [storageMessage, setStorageMessage] = useState("Loading saved timeline...");
  const hydrated = useRef(false);
  const suppressNextSave = useRef(false);

  const activeTimeframe = timeframeOptions.find((option) => option.value === timeframe)!;
  const allTasks = useMemo(() => baseStages.flatMap((stage) => stage.tasks.map((task) => taskId(stage.title, task))), []);
  const validChecked = useMemo(() => checked.filter((id) => allTasks.includes(id)), [allTasks, checked]);
  const progress = progressFor(validChecked.length, allTasks.length);
  const message = completionMessage(progress);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (isSavedState(parsed)) {
          queueMicrotask(() => {
            setTimeframe(parsed.timeframe);
            setChecked(parsed.checked);
            setStorageMessage("Saved privately in this browser");
          });
        } else {
          queueMicrotask(() => setStorageMessage("Saved timeline data was not recognised. Start a new timeline when ready."));
        }
      } else {
        queueMicrotask(() => setStorageMessage("Saved privately in this browser after you begin"));
      }
    } catch {
      queueMicrotask(() => setStorageMessage("Browser saving is unavailable or blocked."));
    } finally {
      hydrated.current = true;
    }
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    if (suppressNextSave.current) {
      suppressNextSave.current = false;
      return;
    }
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({ timeframe, checked }));
      queueMicrotask(() => setStorageMessage("Saved privately in this browser"));
    } catch {
      queueMicrotask(() => setStorageMessage("Browser saving is unavailable or blocked."));
    }
  }, [timeframe, checked]);

  function toggle(id: string) {
    setChecked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function reset() {
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // The visible state still resets.
    }
    suppressNextSave.current = true;
    setTimeframe("undecided");
    setChecked([]);
    setStorageMessage("Timeline reset. New progress will stay in this browser.");
  }

  return (
    <section className="passport-planner relocation-tool" aria-labelledby="relocation-timeline-heading">
      <header className="planner-intro">
        <p className="eyebrow">Private browser-based planning</p>
        <h2 id="relocation-timeline-heading">Build a relocation timeline</h2>
        <p>
          Choose an approximate departure window and track progress through the
          main planning stages. This tool does not collect personal information
          and does not provide guaranteed legal deadlines.
        </p>
        <p className="planner-safety">
          <strong>Requirements vary by route.</strong> Confirm current rules,
          forms, timing and carrier acceptance with official authorities,
          airlines, transport providers and appropriate veterinary professionals.
        </p>
      </header>
      <div className="planner-storage-status" role="status">
        <span>{storageMessage}</span>
        <button className="text-button" type="button" onClick={reset}>
          Reset timeline
        </button>
      </div>
      <div className="planner-stage">
        <fieldset className="timeline-window-options">
          <legend>Approximate departure timeframe</legend>
          <div className="choice-grid">
            {timeframeOptions.map((option) => (
              <label className="choice" key={option.value}>
                <input
                  type="radio"
                  name="relocation-timeframe"
                  checked={timeframe === option.value}
                  onChange={() => setTimeframe(option.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <section className={`planning-window ${timeframe === "under-one" ? "urgent" : timeframe === "one-three" ? "limited" : "planning"}`}>
          <p className="eyebrow">Timeline focus</p>
          <h3>{activeTimeframe.label}</h3>
          <p>{activeTimeframe.summary}</p>
        </section>
        <section className="planner-checklist">
          <div className="checklist-overall relocation-progress-summary" aria-live="polite">
            <div>
              <strong>{progress.label}</strong>
              <span>{message}</span>
            </div>
            <progress max="100" value={progress.percent}>
              {progress.percent}%
            </progress>
          </div>
          <div className="planner-timeline">
            {baseStages.map((stage) => (
              <article key={stage.title}>
                <div>
                  <span>{stage.timing}</span>
                  <h4>{stage.title}</h4>
                </div>
                <div className="relocation-task-list">
                  {stage.tasks.map((task) => {
                    const id = taskId(stage.title, task);
                    return (
                      <label className="checklist-item" key={id}>
                        <span>{task}</span>
                        <input type="checkbox" checked={validChecked.includes(id)} onChange={() => toggle(id)} />
                      </label>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
          <section className="relocation-completion-summary" aria-live="polite">
            <p className="eyebrow">Timeline progress</p>
            <h3>{progress.label}</h3>
            <p>
              {progress.completed} completed, {progress.total} total, {progress.percent}% complete.
            </p>
            <p>{message}</p>
          </section>
        </section>
      </div>
      <p className="planner-privacy">
        Timeline choices and progress are stored only in this browser. Dog Haven
        Group does not receive this timeline through the tool.
      </p>
    </section>
  );
}
