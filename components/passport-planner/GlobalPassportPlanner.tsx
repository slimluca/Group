"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  countryName,
  plannerCountries,
} from "@/data/passport-planner-countries";
import {
  checklistFor,
  checklistProgress,
  createInitialPlanner,
  isStoredPlanner,
  planningWindow,
  sourcesFor,
  STORAGE_KEY,
  timelineFor,
  validateJourney,
  type ChecklistStatus,
  type PlannerState,
} from "@/lib/passport-planner";

const steps = [
  "Journey",
  "Dog details",
  "Transport",
  "Personalised plan",
  "Sources and print",
];
const personalPurposes = [
  ["personal", "Personal travel"],
  ["family-relocation", "Family relocation"],
  ["long-term", "Long-term move"],
  ["holiday", "Holiday"],
  ["returning-residence", "Returning residence"],
  ["other", "Other personal non-commercial travel"],
  ["commercial", "Commercial movement, sale or transfer"],
];
const transportOptions = [
  ["flight", "Commercial flight"],
  ["road", "Road / private vehicle"],
  ["rail", "Rail"],
  ["ferry", "Ferry or sea route"],
  ["mixed", "Mixed transport"],
  ["undecided", "Not decided"],
];

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  error,
  help,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: [string, string][];
  error?: string;
  help?: string;
}) {
  const describedBy =
    [help ? `${id}-help` : "", error ? `${id}-error` : ""]
      .filter(Boolean)
      .join(" ") || undefined;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
      >
        <option value="">Choose an option</option>
        {options.map(([optionValue, optionLabel]) => (
          <option value={optionValue} key={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
      {help ? (
        <span className="field-help" id={`${id}-help`}>
          {help}
        </span>
      ) : null}
      {error ? (
        <span className="field-error" id={`${id}-error`}>
          {error}
        </span>
      ) : null}
    </div>
  );
}

function PlannerProgress({ step }: { step: number }) {
  return (
    <div
      className="planner-step-progress"
      aria-label={`Step ${step + 1} of ${steps.length}: ${steps[step]}`}
    >
      <div className="planner-step-copy">
        <strong>
          Step {step + 1} of {steps.length}
        </strong>
        <span>{steps[step]}</span>
      </div>
      <progress max={steps.length} value={step + 1}>
        {step + 1} of {steps.length}
      </progress>
      <ol>
        {steps.map((label, index) => (
          <li
            className={
              index === step ? "current" : index < step ? "complete" : ""
            }
            aria-current={index === step ? "step" : undefined}
            key={label}
          >
            <span>{index + 1}</span>
            {label}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function GlobalPassportPlanner() {
  const [plan, setPlan] = useState<PlannerState>(() => createInitialPlanner());
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [storageMessage, setStorageMessage] = useState("Loading saved plan…");
  const [copyMessage, setCopyMessage] = useState("");
  const [manualSummary, setManualSummary] = useState("");
  const hydrated = useRef(false);
  const suppressNextSave = useRef(false);

  const update = <K extends keyof PlannerState>(
    key: K,
    value: PlannerState[K],
  ) =>
    setPlan((current) => ({
      ...current,
      [key]: value,
      updatedAt: new Date().toISOString(),
    }));
  const categories = useMemo(() => checklistFor(plan), [plan]);
  const progress = useMemo(
    () => checklistProgress(categories, plan.checklist),
    [categories, plan.checklist],
  );
  const timeline = useMemo(() => timelineFor(plan), [plan]);
  const officialSources = useMemo(() => sourcesFor(plan), [plan]);
  const windowSummary = useMemo(
    () => planningWindow(plan.travelDate),
    [plan.travelDate],
  );

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (isStoredPlanner(parsed)) {
          queueMicrotask(() => {
            setPlan(parsed);
            setStorageMessage("Saved privately in this browser");
            hydrated.current = true;
          });
        } else
          queueMicrotask(() => {
            setStorageMessage(
              "A saved plan uses an unsupported format. It has not been overwritten; start a new plan or clear it when ready.",
            );
            hydrated.current = false;
          });
      } else
        queueMicrotask(() => {
          setStorageMessage("Saved privately in this browser after you begin");
          hydrated.current = true;
        });
    } catch {
      queueMicrotask(() => {
        setStorageMessage(
          "Saved planner data could not be read. It has not been silently discarded; browser storage may be unavailable or corrupted.",
        );
        hydrated.current = false;
      });
    }
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    if (suppressNextSave.current) {
      suppressNextSave.current = false;
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
    } catch {
      queueMicrotask(() =>
        setStorageMessage(
          "Browser saving is unavailable. Keep this page open or copy and print the plan before leaving.",
        ),
      );
    }
  }, [plan]);

  const validateDog = () => {
    const next: Record<string, string> = {};
    if (!plan.dogAge || Number(plan.dogAge) < 0)
      next.dogAge = "Enter the dog's age.";
    if (!plan.dogSize) next.dogSize = "Choose a dog size.";
    return next;
  };
  const validateTransport = (): Record<string, string> =>
    !plan.transport
      ? { transport: "Choose a transport method or Not decided." }
      : plan.transport === "mixed" && plan.mixedModes.length < 2
        ? { mixedModes: "Choose at least two modes for mixed transport." }
        : {};

  const nextStep = () => {
    const nextErrors: Record<string, string> =
      step === 0
        ? validateJourney(plan)
        : step === 1
          ? validateDog()
          : step === 2
            ? validateTransport()
            : {};
    if (plan.purpose === "commercial" && step === 0)
      nextErrors.purpose =
        "This planner cannot generate a plan for commercial movement, sale or transfer.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStep((current) => Math.min(steps.length - 1, current + 1));
  };

  const setChecklistStatus = (id: string, status: ChecklistStatus) =>
    update("checklist", { ...plan.checklist, [id]: status });
  const clearPlan = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* visible state still resets */
    }
    suppressNextSave.current = true;
    setPlan(createInitialPlanner());
    setStep(0);
    setErrors({});
    setStorageMessage(
      "Saved plan cleared. A new plan will remain in this browser only.",
    );
    setCopyMessage("");
    setManualSummary("");
  };
  const routeLabel = `${countryName(plan.origin)} to ${countryName(plan.destination)}${plan.destination === "GB" && plan.ukArea ? ` (${plan.ukArea === "great-britain" ? "Great Britain" : plan.ukArea === "northern-ireland" ? "Northern Ireland" : "area not yet confirmed"})` : ""}`;
  const summaryText = () =>
    [
      "Dog Haven Global Passport Planner",
      `Route: ${routeLabel}`,
      `Date: ${plan.travelDate || "Not selected"}`,
      `Journey: ${plan.journeyType || "Not selected"}`,
      `Dog: ${plan.dogName || "Name not added"}; ${plan.dogAge} ${plan.dogAgeUnit}; ${plan.dogSize}; ${plan.breed || "breed not added"}; ${plan.dogCount} dog(s)`,
      `Transport: ${plan.transport || "Not selected"}${plan.carrier ? ` — ${plan.carrier}` : ""}`,
      `Progress: ${progress.percent}% (${progress.completed} completed, ${progress.remaining} remaining)`,
      `Priority tasks: ${categories
        .flatMap((category) => category.items)
        .filter(
          (item) =>
            plan.checklist[item.id] !== "completed" &&
            plan.checklist[item.id] !== "not-applicable",
        )
        .slice(0, 5)
        .map((item) => item.label)
        .join("; ")}`,
      `Official sources: ${officialSources.map((source) => source.title).join("; ") || "No dedicated collection yet — identify official authorities directly."}`,
      "Safety notice: This planner does not replace official requirements. It does not issue a pet passport, approve travel, guarantee entry, determine compliance or replace government, veterinary, airline or transport advice.",
    ].join("\n");
  const copySummary = async () => {
    const text = summaryText();
    setManualSummary("");
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(text);
      setCopyMessage("Plan summary copied");
    } catch {
      setCopyMessage(
        "Unable to copy automatically. Select the summary manually.",
      );
      setManualSummary(text);
    }
  };
  const printPlan = () => {
    if (typeof window.print !== "function") {
      setCopyMessage(
        "Printing is unavailable in this browser. Copy the plan summary instead.",
      );
      return;
    }
    window.print();
  };

  return (
    <section className="passport-planner" aria-labelledby="planner-heading">
      <header className="planner-intro">
        <p className="eyebrow">Private browser-based planning</p>
        <h2 id="planner-heading">Build your international dog travel plan</h2>
        <p>
          Work through five focused stages. Your selections and checklist stay
          in this browser and are never submitted to Dog Haven Group through
          this tool.
        </p>
        <p className="planner-safety">
          <strong>This planner does not replace official requirements.</strong>{" "}
          It does not issue a pet passport, approve travel, guarantee entry,
          determine legal compliance, replace a veterinarian, or assess medical
          suitability for a journey.
        </p>
      </header>
      <PlannerProgress step={step} />
      <div className="planner-storage-status" role="status">
        <span>{storageMessage}</span>
        <button type="button" className="text-button" onClick={clearPlan}>
          Clear saved plan
        </button>
      </div>

      <div className="planner-stage" aria-live="polite">
        {step === 0 ? (
          <fieldset>
            <legend>Journey details</legend>
            <div className="planner-form-grid">
              <SelectField
                id="origin"
                label="Origin country"
                value={plan.origin}
                onChange={(value) => update("origin", value)}
                options={plannerCountries.map((country) => [
                  country.code,
                  country.name,
                ])}
                error={errors.origin}
              />
              <SelectField
                id="destination"
                label="Destination country"
                value={plan.destination}
                onChange={(value) => {
                  update("destination", value);
                  if (value !== "GB") update("ukArea", "");
                }}
                options={plannerCountries.map((country) => [
                  country.code,
                  country.name,
                ])}
                error={errors.destination}
              />
              {plan.destination === "GB" ? (
                <SelectField
                  id="uk-area"
                  label="Destination area"
                  value={plan.ukArea}
                  onChange={(value) =>
                    update("ukArea", value as PlannerState["ukArea"])
                  }
                  options={[
                    [
                      "great-britain",
                      "Great Britain — England, Scotland or Wales",
                    ],
                    ["northern-ireland", "Northern Ireland"],
                    ["not-sure", "Not sure"],
                  ]}
                  error={errors.ukArea}
                  help="Great Britain and Northern Ireland use different official travel systems. Confirm the exact destination before relying on the plan."
                />
              ) : null}
              <div className="field">
                <label htmlFor="travel-date">Planned departure date</label>
                <input
                  id="travel-date"
                  type="date"
                  value={plan.travelDate}
                  onChange={(event) => update("travelDate", event.target.value)}
                  aria-invalid={Boolean(errors.travelDate)}
                  aria-describedby={
                    errors.travelDate ? "travel-date-error" : undefined
                  }
                />
                {errors.travelDate ? (
                  <span className="field-error" id="travel-date-error">
                    {errors.travelDate}
                  </span>
                ) : null}
              </div>
              <SelectField
                id="journey-type"
                label="Journey type"
                value={plan.journeyType}
                onChange={(value) =>
                  update("journeyType", value as PlannerState["journeyType"])
                }
                options={[
                  ["temporary", "Temporary trip"],
                  ["permanent", "Permanent relocation"],
                  ["returning", "Returning home"],
                  ["exploring", "Exploring options / date not final"],
                ]}
                error={errors.journeyType}
              />
              <SelectField
                id="purpose"
                label="Dog travel purpose"
                value={plan.purpose}
                onChange={(value) => update("purpose", value)}
                options={personalPurposes as [string, string][]}
                error={errors.purpose}
              />
            </div>
            {plan.purpose === "commercial" ? (
              <p className="planner-warning">
                This version is designed for personal non-commercial dog travel.
                Commercial movement, sale, adoption transfer and unaccompanied
                shipment may follow different rules. Contact the relevant
                official authorities and a qualified animal transport
                professional.
              </p>
            ) : null}
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset>
            <legend>Dog details</legend>
            <p className="field-help">
              Do not enter passport numbers, microchip numbers, certificate
              numbers, addresses or medical records.
            </p>
            <div className="planner-form-grid">
              <div className="field">
                <label htmlFor="dog-name">
                  Dog name <span>(optional)</span>
                </label>
                <input
                  id="dog-name"
                  value={plan.dogName}
                  onChange={(e) => update("dogName", e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="breed">
                  Breed or breed type <span>(optional)</span>
                </label>
                <input
                  id="breed"
                  value={plan.breed}
                  onChange={(e) => update("breed", e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="dog-age">Dog age</label>
                <div className="inline-fields">
                  <input
                    id="dog-age"
                    type="number"
                    min="0"
                    max="40"
                    value={plan.dogAge}
                    onChange={(e) => update("dogAge", e.target.value)}
                    aria-invalid={Boolean(errors.dogAge)}
                  />
                  <select
                    aria-label="Dog age unit"
                    value={plan.dogAgeUnit}
                    onChange={(e) =>
                      update(
                        "dogAgeUnit",
                        e.target.value as PlannerState["dogAgeUnit"],
                      )
                    }
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
                {errors.dogAge ? (
                  <span className="field-error">{errors.dogAge}</span>
                ) : null}
              </div>
              <SelectField
                id="dog-size"
                label="Dog size"
                value={plan.dogSize}
                onChange={(v) => update("dogSize", v)}
                options={[
                  ["small", "Small"],
                  ["medium", "Medium"],
                  ["large", "Large"],
                  ["giant", "Giant"],
                ]}
                error={errors.dogSize}
              />
              <div className="field">
                <label htmlFor="dog-count">Number of dogs</label>
                <input
                  id="dog-count"
                  type="number"
                  min="1"
                  max="20"
                  value={plan.dogCount}
                  onChange={(e) => update("dogCount", e.target.value)}
                />
              </div>
              <SelectField
                id="flat-faced"
                label="Flat-faced / brachycephalic"
                value={plan.flatFaced}
                onChange={(v) => update("flatFaced", v)}
                options={[
                  ["yes", "Yes"],
                  ["no", "No"],
                  ["not-sure", "Not sure"],
                ]}
              />
              <SelectField
                id="microchip"
                label="Microchip status"
                value={plan.microchip}
                onChange={(v) => update("microchip", v)}
                options={[
                  ["microchipped", "Microchipped"],
                  ["not-microchipped", "Not microchipped"],
                  ["not-sure", "Not sure"],
                ]}
              />
              <SelectField
                id="vaccination"
                label="Vaccination-record status"
                value={plan.vaccinationRecords}
                onChange={(v) => update("vaccinationRecords", v)}
                options={[
                  ["available", "Records available"],
                  ["checking", "Records need checking"],
                  ["not-sure", "Not sure"],
                ]}
              />
              <SelectField
                id="crate-experience"
                label="Crate experience"
                value={plan.crateExperience}
                onChange={(v) => update("crateExperience", v)}
                options={[
                  ["comfortable", "Comfortable with a crate"],
                  ["some", "Some crate experience"],
                  ["none", "No crate experience"],
                  ["not-applicable", "Not applicable"],
                ]}
              />
              <SelectField
                id="assistance-dog"
                label="Assistance dog"
                value={plan.assistanceDog}
                onChange={(v) => update("assistanceDog", v)}
                options={[
                  ["yes", "Yes"],
                  ["no", "No"],
                  ["prefer-not", "Prefer not to say"],
                ]}
              />
            </div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset>
            <legend>Transport details</legend>
            <div className="planner-form-grid">
              <SelectField
                id="transport"
                label="Transport method"
                value={plan.transport}
                onChange={(v) =>
                  update("transport", v as PlannerState["transport"])
                }
                options={transportOptions as [string, string][]}
                error={errors.transport}
              />
              <div className="field">
                <label htmlFor="carrier">
                  Airline or carrier name <span>(optional)</span>
                </label>
                <input
                  id="carrier"
                  value={plan.carrier}
                  onChange={(e) => update("carrier", e.target.value)}
                />
              </div>
              {plan.transport === "flight" ||
              (plan.transport === "mixed" &&
                plan.mixedModes.includes("flight")) ? (
                <SelectField
                  id="flight-placement"
                  label="Planned flight arrangement"
                  value={plan.flightPlacement}
                  onChange={(v) => update("flightPlacement", v)}
                  options={[
                    ["cabin", "Cabin"],
                    ["checked", "Checked baggage"],
                    ["cargo", "Manifest cargo"],
                    ["unknown", "Not known"],
                  ]}
                />
              ) : null}
            </div>
            {plan.transport === "mixed" ? (
              <fieldset className="nested-fieldset">
                <legend>Mixed transport modes</legend>
                <div className="choice-grid">
                  {transportOptions.slice(0, 4).map(([value, label]) => (
                    <label key={value}>
                      <input
                        type="checkbox"
                        checked={plan.mixedModes.includes(value)}
                        onChange={(e) =>
                          update(
                            "mixedModes",
                            e.target.checked
                              ? [...plan.mixedModes, value]
                              : plan.mixedModes.filter(
                                  (mode) => mode !== value,
                                ),
                          )
                        }
                      />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.mixedModes ? (
                  <span className="field-error">{errors.mixedModes}</span>
                ) : null}
              </fieldset>
            ) : null}
            {plan.transport === "flight" ||
            plan.mixedModes.includes("flight") ? (
              <p className="planner-warning">
                Airline acceptance, routing, crate rules, seasonal restrictions
                and breed policies vary. Confirm the complete itinerary directly
                with every operating carrier before booking.
              </p>
            ) : null}
          </fieldset>
        ) : null}

        {step === 3 ? (
          <div className="generated-plan">
            <header className={`planning-window ${windowSummary.level}`}>
              <p className="eyebrow">Planning window</p>
              <h3>{windowSummary.title}</h3>
              <p>{windowSummary.message}</p>
            </header>
            <div className="plan-summary-grid">
              <div>
                <span>Route</span>
                <strong>{routeLabel}</strong>
              </div>
              <div>
                <span>Journey</span>
                <strong>{plan.journeyType}</strong>
              </div>
              <div>
                <span>Travel date</span>
                <strong>{plan.travelDate}</strong>
              </div>
              <div>
                <span>Transport</span>
                <strong>{plan.transport}</strong>
              </div>
            </div>
            <section className="planner-timeline">
              <h3>Personalised preparation timeline</h3>
              {timeline.map((phase) => (
                <article key={phase.title}>
                  <div>
                    <span>{phase.timing}</span>
                    <h4>{phase.title}</h4>
                  </div>
                  <ul>
                    {phase.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
            <section className="planner-checklist">
              <h3>Dog travel checklist</h3>
              <div className="checklist-overall">
                <div>
                  <strong>
                    {progress.percent}% of your planning checklist completed
                  </strong>
                  <span>
                    {progress.completed} completed · {progress.remaining}{" "}
                    remaining · {progress.notApplicable} not applicable
                  </span>
                </div>
                <progress max="100" value={progress.percent}>
                  {progress.percent}%
                </progress>
              </div>
              {categories.map((category) => {
                const categoryProgress = checklistProgress(
                  [category],
                  plan.checklist,
                );
                return (
                  <fieldset key={category.id}>
                    <legend>{category.title}</legend>
                    <p>
                      {categoryProgress.completed} completed ·{" "}
                      {categoryProgress.remaining} remaining
                    </p>
                    {category.items.map((item) => (
                      <label className="checklist-item" key={item.id}>
                        <span>{item.label}</span>
                        <select
                          aria-label={`Status for ${item.label}`}
                          value={plan.checklist[item.id] ?? "remaining"}
                          onChange={(e) =>
                            setChecklistStatus(
                              item.id,
                              e.target.value as ChecklistStatus,
                            )
                          }
                        >
                          <option value="remaining">Remaining</option>
                          <option value="completed">Completed</option>
                          {item.allowNA ? (
                            <option value="not-applicable">
                              Not applicable
                            </option>
                          ) : null}
                        </select>
                      </label>
                    ))}
                  </fieldset>
                );
              })}
              <p className="muted-note">
                Checklist completion is planning progress, not proof of legal
                compliance.
              </p>
            </section>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="planner-sources-print">
            <div className="print-brand">
              <Image
                src="/brand/dog-haven-group-logo.png"
                alt=""
                width={72}
                height={72}
              />
              <div>
                <strong>Dog Haven Group</strong>
                <span>Dog Haven Global Passport Planner</span>
              </div>
            </div>
            <section>
              <p className="eyebrow">Official route authorities</p>
              <h3>Open the authorities for your route</h3>
              <p>
                Requirements can change without notice. Open every relevant
                official source again before booking and before travel.
              </p>
              {officialSources.length ? (
                <div className="official-source-list">
                  {officialSources.map((source) => (
                    <article key={source.id}>
                      <span>{source.jurisdiction}</span>
                      <h4>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source.title}
                        </a>
                      </h4>
                      <p>{source.description}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="planner-warning">
                  Dog Haven Group has not yet added a dedicated official-source
                  collection for this route. Use the destination government,
                  competent veterinary authority, embassy or consulate, and your
                  transport provider to confirm current requirements.
                </p>
              )}
            </section>
            <section className="print-plan-recap">
              <h3>Plan recap</h3>
              <p>
                <strong>Route:</strong> {routeLabel}
              </p>
              <p>
                <strong>Journey type:</strong> {plan.journeyType}
              </p>
              <p>
                <strong>Date:</strong> {plan.travelDate}
              </p>
              <p>
                <strong>Dog:</strong> {plan.dogName || "Name not added"},{" "}
                {plan.dogAge} {plan.dogAgeUnit}, {plan.dogSize},{" "}
                {plan.breed || "breed not added"}
              </p>
              <p>
                <strong>Transport:</strong> {plan.transport}
                {plan.carrier ? ` — ${plan.carrier}` : ""}
              </p>
              <p>
                <strong>Planning window:</strong> {windowSummary.title}.{" "}
                {windowSummary.message}
              </p>
            </section>
            <div className="print-only">
              <section className="print-timeline">
                <h3>Preparation timeline</h3>
                {timeline.map((phase) => (
                  <article key={phase.title}>
                    <h4>
                      {phase.title} — {phase.timing}
                    </h4>
                    <ul>
                      {phase.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </section>
              <section className="print-checklist">
                <h3>Planning checklist — {progress.percent}% completed</h3>
                {categories.map((category) => (
                  <article key={category.id}>
                    <h4>{category.title}</h4>
                    <ul>
                      {category.items.map((item) => (
                        <li key={item.id}>
                          [
                          {plan.checklist[item.id] === "completed"
                            ? "x"
                            : plan.checklist[item.id] === "not-applicable"
                              ? "N/A"
                              : " "}
                          ] {item.label}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </section>
            </div>
            <div className="planner-actions no-print">
              <button className="button" type="button" onClick={printPlan}>
                Print or Save as PDF
              </button>
              <button
                className="button secondary"
                type="button"
                onClick={copySummary}
              >
                Copy plan summary
              </button>
            </div>
            <p className="copy-status no-print" role="status">
              {copyMessage}
            </p>
            {manualSummary ? (
              <textarea
                className="manual-summary no-print"
                readOnly
                value={manualSummary}
                aria-label="Plan summary for manual copying"
              />
            ) : null}
            <p>
              Use the{" "}
              <Link href="/downloads/global-dog-owner-starter-guide">
                global dog-owner starter guide
              </Link>{" "}
              for broader ownership and relocation planning alongside your
              route-specific official research.
            </p>
            <p className="print-safety">
              <strong>Safety notice:</strong> This planner does not replace
              official requirements. It does not issue a pet passport, approve
              travel, guarantee entry, determine compliance, replace current
              government or transport information, or replace veterinary advice.
            </p>
            <p className="print-footer">Dog Haven Group · DogHavenGroup.com</p>
          </div>
        ) : null}
      </div>
      <div className="planner-navigation no-print">
        {step > 0 ? (
          <button
            className="button secondary"
            type="button"
            onClick={() => {
              setErrors({});
              setStep((current) => current - 1);
            }}
          >
            Previous step
          </button>
        ) : (
          <span />
        )}
        {step < steps.length - 1 ? (
          <button className="button" type="button" onClick={nextStep}>
            {step === 2
              ? "Build personalised plan"
              : step === 3
                ? "Review sources and print"
                : "Continue"}
          </button>
        ) : (
          <button
            className="button secondary"
            type="button"
            onClick={clearPlan}
          >
            Start a new plan
          </button>
        )}
      </div>
      <p className="planner-privacy">
        Your planner information is stored only in this browser. Dog Haven Group
        does not receive your dog details, route selections or checklist
        progress through this tool.
      </p>
    </section>
  );
}
