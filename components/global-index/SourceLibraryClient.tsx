"use client";
import { useState } from "react";
import { indexSources } from "@/data/global-dog-ownership-index/sources";
import { indexCategories } from "@/data/global-dog-ownership-index/categories";
export function SourceLibraryClient() {
  const [country, setCountry] = useState("ALL"),
    [category, setCategory] = useState("ALL"),
    [type, setType] = useState("ALL"),
    [q, setQ] = useState("");
  const rows = indexSources.filter(
    (s) =>
      (country === "ALL" || s.countryCodes.includes(country)) &&
      (category === "ALL" || s.categories.includes(category as never)) &&
      (type === "ALL" || s.sourceType === type) &&
      `${s.title} ${s.publisher} ${s.summary}`
        .toLowerCase()
        .includes(q.toLowerCase()),
  );
  return (
    <>
      <fieldset className="source-filters">
        <legend>Filter the source library</legend>
        <label>
          Country
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="ALL">All countries</option>
            <option value="GLOBAL">Global and cross-country</option>
            <option value="ZA">South Africa</option>
            <option value="US">United States</option>
            <option value="IT">Italy</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>
        </label>
        <label>
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="ALL">All categories</option>
            {indexCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.shortName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Source type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="ALL">All source types</option>
            {[...new Set(indexSources.map((s) => s.sourceType))].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Search
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            type="search"
            placeholder="Title or publisher"
          />
        </label>
      </fieldset>
      <p aria-live="polite">
        Showing {rows.length} of {indexSources.length} research sources.
      </p>
      <div className="source-library">
        {rows.map((s) => (
          <article key={s.id}>
            <p className="eyebrow">{s.sourceType}</p>
            <h2>{s.title}</h2>
            <p>
              <strong>{s.publisher}</strong> · {s.geographicScope}
            </p>
            <p>{s.summary}</p>
            <dl>
              <div>
                <dt>Supports</dt>
                <dd>
                  {s.categories
                    .map(
                      (id) =>
                        indexCategories.find((c) => c.id === id)?.shortName,
                    )
                    .join(", ")}
                </dd>
              </div>
              <div>
                <dt>Limitations</dt>
                <dd>{s.limitations}</dd>
              </div>
            </dl>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              Visit Source
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
