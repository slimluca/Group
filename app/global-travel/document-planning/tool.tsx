"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const storageKey = "dog-haven-document-planning-v1";

type DocumentItem = {
  id: string;
  category: string;
  title: string;
  prompt: string;
};

type SavedState = {
  checked: string[];
  notes: Record<string, string>;
};

const documentItems: DocumentItem[] = [
  {
    id: "dog-identification",
    category: "Dog identification",
    title: "Identification details",
    prompt: "Record where identification details are stored and whether they match the dog's records."
  },
  {
    id: "microchip-notes",
    category: "Dog identification",
    title: "Microchip or identity record questions",
    prompt: "Note questions to confirm with official sources or an appropriate veterinary professional."
  },
  {
    id: "vet-records",
    category: "Veterinary records",
    title: "General veterinary records",
    prompt: "Track where current veterinary history and contact details are stored."
  },
  {
    id: "vaccination-records",
    category: "Vaccination records",
    title: "Vaccination records",
    prompt: "Record whether vaccination documents need source review, update or professional confirmation."
  },
  {
    id: "health-certificates",
    category: "Health certificates",
    title: "Health certificates or veterinary certificates",
    prompt: "Do not assume a certificate applies. Confirm route-specific forms, timing and authorised signers."
  },
  {
    id: "import-documents",
    category: "Import or export documents",
    title: "Import documents",
    prompt: "List destination authority questions, permit references or forms to investigate."
  },
  {
    id: "export-documents",
    category: "Import or export documents",
    title: "Export or endorsement documents",
    prompt: "List origin authority questions, export steps or endorsement requirements to investigate."
  },
  {
    id: "transit-documents",
    category: "Import or export documents",
    title: "Transit records",
    prompt: "Record whether any transit country, airport, port or route leg needs separate confirmation."
  },
  {
    id: "transport-documents",
    category: "Airline or transport documents",
    title: "Carrier confirmations",
    prompt: "Track booking references, pet acceptance notes, crate questions and carrier contacts."
  },
  {
    id: "accommodation-records",
    category: "Accommodation records",
    title: "Dog-friendly accommodation records",
    prompt: "Record accommodation confirmations, building rules and arrival access notes."
  },
  {
    id: "insurance-information",
    category: "Insurance information",
    title: "Insurance or emergency funding information",
    prompt: "Note where policy or emergency savings information is kept without uploading documents."
  },
  {
    id: "emergency-contacts",
    category: "Emergency contacts",
    title: "Emergency contacts",
    prompt: "Track primary vet, emergency vet, backup caregiver, carrier and accommodation contacts."
  },
  {
    id: "arrival-documents",
    category: "Arrival documents",
    title: "Arrival and local setup records",
    prompt: "List local vet registration notes, address records, local ownership questions or first-week tasks."
  }
];

function isSavedState(value: unknown): value is SavedState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<SavedState>;
  return (
    Array.isArray(candidate.checked) &&
    candidate.checked.every((item) => typeof item === "string") &&
    Boolean(candidate.notes) &&
    typeof candidate.notes === "object" &&
    Object.values(candidate.notes).every((item) => typeof item === "string")
  );
}

export function DocumentPlanningTool() {
  const [checked, setChecked] = useState<string[]>([]);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [storageMessage, setStorageMessage] = useState("Loading saved document plan...");
  const [copyMessage, setCopyMessage] = useState("");
  const [manualSummary, setManualSummary] = useState("");
  const hydrated = useRef(false);
  const suppressNextSave = useRef(false);

  const grouped = useMemo(() => {
    const map = new Map<string, DocumentItem[]>();
    documentItems.forEach((item) => {
      map.set(item.category, [...(map.get(item.category) ?? []), item]);
    });
    return [...map.entries()];
  }, []);
  const completed = documentItems.filter((item) => checked.includes(item.id)).length;
  const percent = Math.round((completed / documentItems.length) * 100);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (isSavedState(parsed)) {
          queueMicrotask(() => {
            setChecked(parsed.checked);
            setNotes(parsed.notes);
            setStorageMessage("Saved privately in this browser");
          });
        } else {
          queueMicrotask(() => setStorageMessage("Saved document planning data was not recognised. Start a new plan when ready."));
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
      window.localStorage.setItem(storageKey, JSON.stringify({ checked, notes }));
      queueMicrotask(() => setStorageMessage("Saved privately in this browser"));
    } catch {
      queueMicrotask(() => setStorageMessage("Browser saving is unavailable or blocked."));
    }
  }, [checked, notes]);

  function toggle(id: string) {
    setChecked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
    setCopyMessage("");
  }

  function updateNote(id: string, value: string) {
    setNotes((current) => ({ ...current, [id]: value.slice(0, 500) }));
    setCopyMessage("");
  }

  function reset() {
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // The visible state still resets.
    }
    suppressNextSave.current = true;
    setChecked([]);
    setNotes({});
    setManualSummary("");
    setCopyMessage("");
    setStorageMessage("Document plan reset. New progress will stay in this browser.");
  }

  function summaryText() {
    const lines = [
      "Dog Haven Group Document Planning Checklist",
      `Progress: ${completed}/${documentItems.length} categories checked`,
      "Important: Required documents vary by route. Confirm current requirements with official authorities, airlines, transport providers and appropriate veterinary professionals.",
      ""
    ];
    grouped.forEach(([category, items]) => {
      lines.push(category);
      items.forEach((item) => {
        const note = notes[item.id]?.trim();
        lines.push(`[${checked.includes(item.id) ? "x" : " "}] ${item.title}`);
        if (note) lines.push(`Note: ${note}`);
      });
      lines.push("");
    });
    return lines.join("\n");
  }

  async function copySummary() {
    const text = summaryText();
    setManualSummary("");
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(text);
      setCopyMessage("Document planning summary copied.");
    } catch {
      setManualSummary(text);
      setCopyMessage("Copy was unavailable. Select the summary manually.");
    }
  }

  return (
    <section className="passport-planner relocation-tool" aria-labelledby="document-planning-heading">
      <header className="planner-intro">
        <p className="eyebrow">Private browser-based planning</p>
        <h2 id="document-planning-heading">Build a dog relocation document plan</h2>
        <p>
          Track document categories and private notes in this browser. Do not
          upload documents, passport numbers, certificate numbers, addresses or
          medical records into this tool.
        </p>
        <p className="planner-safety">
          <strong>Document requirements vary by route.</strong> Confirm current
          requirements, accepted formats, signers and timing with official
          authorities, airlines, transport providers and appropriate veterinary
          professionals.
        </p>
      </header>
      <div className="planner-storage-status" role="status">
        <span>{storageMessage}</span>
        <button className="text-button" type="button" onClick={reset}>
          Reset document plan
        </button>
      </div>
      <div className="planner-stage">
        <div className="checklist-overall">
          <div>
            <strong>{percent}% of document categories checked</strong>
            <span>
              {completed} checked, {documentItems.length - completed} remaining
            </span>
          </div>
          <progress max="100" value={percent}>
            {percent}%
          </progress>
        </div>
        <div className="document-category-list">
          {grouped.map(([category, items]) => (
            <fieldset className="document-category" key={category}>
              <legend>{category}</legend>
              {items.map((item) => (
                <article className="document-item" key={item.id}>
                  <label className="checklist-item">
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.prompt}</small>
                    </span>
                    <input type="checkbox" checked={checked.includes(item.id)} onChange={() => toggle(item.id)} />
                  </label>
                  <label className="field document-note">
                    <span>Private note for this category</span>
                    <textarea
                      value={notes[item.id] ?? ""}
                      onChange={(event) => updateNote(item.id, event.target.value)}
                      rows={3}
                      placeholder="Add route questions, source links or contact notes. Do not enter sensitive document numbers."
                    />
                  </label>
                </article>
              ))}
            </fieldset>
          ))}
        </div>
        <div className="planner-actions">
          <button className="button" type="button" onClick={copySummary}>
            Copy text summary
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset checklist
          </button>
        </div>
        <p className="copy-status" role="status">
          {copyMessage}
        </p>
        {manualSummary ? (
          <textarea className="manual-summary" readOnly value={manualSummary} aria-label="Document planning summary for manual copying" />
        ) : null}
      </div>
      <p className="planner-privacy">
        Checklist progress and notes are stored only in this browser. Dog Haven
        Group does not receive documents, notes or route details through this tool.
      </p>
    </section>
  );
}
