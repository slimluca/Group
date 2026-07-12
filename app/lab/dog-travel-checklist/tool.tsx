"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ChecklistGroup = { title: string; items: string[] };

export default function DogTravelChecklist() {
  const [scope, setScope] = useState("International");
  const [purpose, setPurpose] = useState("Moving abroad");
  const [size, setSize] = useState("Medium or large dog");
  const [transport, setTransport] = useState("Flight");
  const [checked, setChecked] = useState<string[]>([]);
  const groups = useMemo<ChecklistGroup[]>(() => {
    const source =
      scope === "International"
        ? [
            "Check current official government import, export, and transit rules for every country involved.",
            "Record source links and dates in a travel file.",
          ]
        : [
            "Check local transport, accommodation, and destination rules.",
            "Confirm emergency vet options near the destination.",
          ];
    const transportItems =
      transport === "Flight"
        ? [
            "Confirm airline pet policy, crate requirements, weather restrictions, booking steps, and check-in timing directly with the airline.",
            "Plan airport transport and arrival handling.",
          ]
        : transport === "Car"
          ? [
              "Plan restraint, breaks, water, shade, overnight stops, and safe loading routines.",
              "Keep cleaning supplies, water, and emergency contacts accessible.",
            ]
          : [
              "Check train or ferry pet rules, carrier expectations, busy periods, and boarding steps.",
              "Plan quiet recovery time after arrival.",
            ];
    const relocation =
      purpose === "Moving abroad"
        ? [
            "Plan housing rules, rental permissions, local vet registration, routine rebuilding, and extra arrival funds.",
            "Separate origin-country tasks from destination-country tasks.",
          ]
        : [
            "Confirm dog-friendly accommodation and daily walking options.",
            "Plan stress reduction, rest time, and food continuity.",
          ];
    const sizeItems =
      size === "Small dog"
        ? [
            "Check carrier size rules and whether in-cabin travel is possible for your route.",
          ]
        : [
            "Confirm crate sizing, handling requirements, and realistic comfort planning for a larger dog.",
          ];
    return [
      { title: "Official-source checks", items: source },
      { title: "Transport planning", items: transportItems },
      {
        title: "Dog comfort and safety",
        items: [
          "Confirm your dog's health, temperament, and travel suitability with a veterinarian.",
          "Pack food, water plan, medication, comfort item, waste bags, lead or harness, and cleaning supplies.",
          ...sizeItems,
        ],
      },
      { title: "Arrival planning", items: relocation },
    ];
  }, [scope, purpose, size, transport]);
  const allItems = groups.flatMap((group) => group.items);
  const complete = allItems.filter((item) => checked.includes(item)).length;
  const percent = allItems.length
    ? Math.round((complete / allItems.length) * 100)
    : 0;

  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Dog Haven Group Lab</p>
        <h1>Dog Travel Checklist</h1>
        <p className="lead">
          Generate a tailored checklist, then verify current rules with official
          government, airline, transport, and veterinary sources. This is
          planning support, not legal or veterinary advice.
        </p>
        <div className="tool">
          <div className="panel">
            <Select
              label="Trip type"
              value={scope}
              setValue={(value) => {
                setScope(value);
                setChecked([]);
              }}
              options={["Domestic", "International"]}
            />
            <Select
              label="Purpose"
              value={purpose}
              setValue={(value) => {
                setPurpose(value);
                setChecked([]);
              }}
              options={["Holiday", "Moving abroad"]}
            />
            <Select
              label="Dog size"
              value={size}
              setValue={(value) => {
                setSize(value);
                setChecked([]);
              }}
              options={["Small dog", "Medium or large dog"]}
            />
            <Select
              label="Transport method"
              value={transport}
              setValue={(value) => {
                setTransport(value);
                setChecked([]);
              }}
              options={["Flight", "Car", "Train or ferry"]}
            />
            <button
              className="button secondary"
              type="button"
              onClick={() => {
                setScope("International");
                setPurpose("Moving abroad");
                setSize("Medium or large dog");
                setTransport("Flight");
                setChecked([]);
              }}
            >
              Reset checklist
            </button>
          </div>
          <div className="panel">
            <p className="eyebrow">Tailored checklist</p>
            <div className="score">{percent}%</div>
            <h2>
              {percent >= 80
                ? "Strong checklist progress"
                : percent >= 40
                  ? "Planning in progress"
                  : "Start with source checks"}
            </h2>
            <div
              className="progress-track"
              aria-label={`Checklist progress ${percent}%`}
            >
              <span
                className="progress-fill"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="result-grid">
              <div className="metric-card">
                <strong>
                  {complete}/{allItems.length}
                </strong>
                <span>Items checked</span>
              </div>
              <div className="metric-card">
                <strong>{scope}</strong>
                <span>Trip type</span>
              </div>
            </div>
            {groups.map((group) => (
              <div className="choice-grid" key={group.title}>
                <h3>{group.title}</h3>
                {group.items.map((item) => (
                  <label className="choice" key={item}>
                    <input
                      type="checkbox"
                      checked={checked.includes(item)}
                      onChange={() =>
                        setChecked((items) =>
                          items.includes(item)
                            ? items.filter((value) => value !== item)
                            : [...items, item],
                        )
                      }
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            ))}
            <div className="result-note">
              <span>
                Official-source reminder: verify current government, airline,
                transport, and veterinary requirements before booking or
                travelling.
              </span>
            </div>
            <p>
              For deeper planning, read{" "}
              <Link href="/global-travel/moving-abroad-with-a-dog">
                moving abroad with a dog
              </Link>
              , browse the{" "}
              <Link href="/global-travel/route-guides">Route Guides hub</Link>,
              or download the{" "}
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

function Select({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
