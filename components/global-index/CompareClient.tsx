"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { indexCategories } from "@/data/global-dog-ownership-index/categories";
import { countriesAlphabetical } from "@/data/global-dog-ownership-index/countries";
import { band, overall, sourcesFor } from "@/lib/global-dog-ownership-index";
import {
  equalPriorities,
  isPriorityMap,
  priorityOptions,
  priorityPresets,
  priorityResult,
  type PriorityMap,
} from "@/lib/global-index-priorities";

const defaults = ["south-africa", "united-states", "italy"];
const storageKey = "dog-haven-global-ownership-priorities-v1";

export function CompareClient() {
  const [selected, setSelected] = useState(defaults);
  const [priorities, setPriorities] = useState<PriorityMap>(equalPriorities);
  const [activePreset, setActivePreset] = useState("balanced");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const query =
        new URLSearchParams(location.search).get("countries")?.split(",") ?? [];
      const valid = [...new Set(query)]
        .filter((slug) =>
          countriesAlphabetical.some((country) => country.slug === slug),
        )
        .slice(0, 3);
      if (valid.length >= 2) setSelected(valid);
      try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
        if (isPriorityMap(saved)) {
          setPriorities(saved);
          setActivePreset("custom");
        }
      } catch {}
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const countries = selected
    .map((slug) =>
      countriesAlphabetical.find((country) => country.slug === slug)!,
    )
    .filter(Boolean);
  const updateCountry = (index: number, slug: string) => {
    if (selected.includes(slug) && selected[index] !== slug) return;
    const next = [...selected];
    next[index] = slug;
    setSelected(next);
  };
  const applyPreset = (id: string) => {
    if (id === "custom") return;
    setPriorities({ ...priorityPresets[id].values });
    setActivePreset(id);
  };
  const share = async () => {
    const url = `${location.origin}${location.pathname}?countries=${selected.join(",")}`;
    history.replaceState(null, "", url);
    try {
      await navigator.clipboard.writeText(url);
      setMessage("Comparison link copied.");
    } catch {
      setMessage(
        "Clipboard access was unavailable. Copy the URL from your address bar.",
      );
    }
  };

  return (
    <div className="compare-app">
      <fieldset className="country-pickers no-print">
        <legend>Choose two or three countries</legend>
        {selected.map((value, index) => (
          <label key={index}>
            Country {index + 1}
            <select
              value={value}
              onChange={(event) => updateCountry(index, event.target.value)}
            >
              {countriesAlphabetical.map((country) => (
                <option
                  key={country.slug}
                  value={country.slug}
                  disabled={
                    selected.includes(country.slug) && value !== country.slug
                  }
                >
                  {country.name}
                </option>
              ))}
            </select>
          </label>
        ))}
        {selected.length < 3 ? (
          <button
            type="button"
            className="button secondary"
            onClick={() =>
              setSelected([
                ...selected,
                countriesAlphabetical.find(
                  (country) => !selected.includes(country.slug),
                )!.slug,
              ])
            }
          >
            Add third country
          </button>
        ) : (
          <button
            type="button"
            className="button secondary"
            onClick={() => setSelected(selected.slice(0, 2))}
          >
            Remove third country
          </button>
        )}
      </fieldset>

      <div className="print-brand">
        <Image
          src="/brand/dog-haven-group-logo.png"
          alt=""
          width={54}
          height={54}
        />
        <div>
          <strong>Dog Haven Group</strong>
          <span>Global Dog Ownership Index</span>
        </div>
      </div>
      <div className="comparison-overview">
        {countries.map((country) => {
          const score = overall(country)!;
          return (
            <article key={country.slug}>
              <h2>{country.name}</h2>
              <strong>{score.toFixed(1)} / 5</strong>
              <span>{band(score)}</span>
              <small>Dog Haven Group editorial index score</small>
              <p>
                {
                  country.assessments.filter(
                    (item) => item.confidence === "High confidence",
                  ).length
                }{" "}
                high-confidence categories · {sourcesFor(country).length}{" "}
                sources
              </p>
            </article>
          );
        })}
      </div>

      <div className="comparison-table-wrap">
        <table>
          <caption>
            Eight-category editorial comparison, on a consistent 1 to 5 scale
          </caption>
          <thead>
            <tr>
              <th scope="col">Category</th>
              {countries.map((country) => (
                <th scope="col" key={country.slug}>
                  {country.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {indexCategories.map((category) => (
              <tr key={category.id}>
                <th scope="row">{category.name}</th>
                {countries.map((country) => {
                  const assessment = country.assessments.find(
                    (item) => item.categoryId === category.id,
                  )!;
                  return (
                    <td key={country.slug}>
                      <strong>
                        {assessment.score} / 5 — {assessment.scoreLabel}
                      </strong>
                      <span>{assessment.confidence}</span>
                      <p>{assessment.summary}</p>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="priority-matcher no-print">
        <p className="eyebrow">Private, browser-saved tool</p>
        <h2>Your Dog Ownership Priorities</h2>
        <p>
          Your personal planning view changes only according to the priorities
          you select. It does not change the Global Dog Ownership Index score.
          It is not a universal country ranking or a recommendation to move.
        </p>
        <label className="priority-preset">
          Start with a priority preset
          <select
            value={activePreset}
            onChange={(event) => applyPreset(event.target.value)}
          >
            {Object.entries(priorityPresets).map(([id, item]) => (
              <option key={id} value={id}>
                {item.label}
              </option>
            ))}
            <option value="custom">Custom priorities</option>
          </select>
        </label>
        <fieldset>
          <legend>Set the importance of each category</legend>
          <div className="priority-grid">
            {indexCategories.map((category) => (
              <label key={category.id}>
                {category.name}
                <select
                  value={priorities[category.id]}
                  onChange={(event) => {
                    setPriorities({
                      ...priorities,
                      [category.id]: Number(
                        event.target.value,
                      ) as PriorityMap[typeof category.id],
                    });
                    setActivePreset("custom");
                  }}
                >
                  {priorityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        </fieldset>
        <h3>Your personal planning view</h3>
        <div className="personal-results detailed">
          {countries.map((country) => {
            const result = priorityResult(country, priorities);
            return (
              <article key={country.slug}>
                <header>
                  <h4>{country.name}</h4>
                  <strong>
                    {result.score === null
                      ? "—"
                      : `${result.score.toFixed(1)} / 5`}
                  </strong>
                </header>
                <div
                  className="personal-score-track"
                  aria-label={`${country.name} personal planning score ${result.score ?? 0} out of 5`}
                >
                  <span style={{ width: `${(result.score ?? 0) * 20}%` }} />
                </div>
                <p className="alignment-label">{result.alignment}</p>
                <p>{result.explanation}</p>
                <dl>
                  <div>
                    <dt>Strongest alignment</dt>
                    <dd>
                      {result.strongest.join(", ") || "Select priorities"}
                    </dd>
                  </div>
                  <div>
                    <dt>Needs closer investigation</dt>
                    <dd>
                      {result.investigate.join(", ") || "Select priorities"}
                    </dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
        <p>
          Your priorities stay on this device and are never sent to a server.
        </p>
        <div className="compact-actions">
          <button
            className="button"
            type="button"
            onClick={() => {
              localStorage.setItem(storageKey, JSON.stringify(priorities));
              setMessage("Priorities saved on this device.");
            }}
          >
            Save priorities
          </button>
          <button
            className="button secondary"
            type="button"
            onClick={() => {
              setPriorities(equalPriorities());
              setActivePreset("balanced");
            }}
          >
            Use equal priorities
          </button>
          <button
            className="button secondary"
            type="button"
            onClick={() => {
              localStorage.removeItem(storageKey);
              setPriorities(equalPriorities());
              setActivePreset("balanced");
            }}
          >
            Reset priorities
          </button>
        </div>
      </section>

      <div className="compact-actions no-print">
        <button className="button" type="button" onClick={share}>
          Copy Comparison Link
        </button>
        <button
          className="button secondary"
          type="button"
          onClick={() => window.print()}
        >
          Print or Save as PDF
        </button>
      </div>
      <p className="copy-status no-print" role="status">
        {message}
      </p>
      <section className="print-notes comparison-context">
        <h2>Important context behind the comparison</h2>
        <p>
          National comparisons cannot represent every city, region, housing
          arrangement, transport operator, climate zone or individual household.
        </p>
        {countries.map((country) => (
          <article key={country.slug}>
            <h3>{country.name}</h3>
            <p>
              <strong>Local variation:</strong> {country.variation}
            </p>
            <h4>Relevant sources</h4>
            <ul>
              {sourcesFor(country).map((source) => (
                <li key={source.id}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.title}
                  </a>
                  <span>{source.publisher}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
        <p className="print-methodology-label">
          Read the methodology on DogHavenGroup.com
        </p>
      </section>
    </div>
  );
}
