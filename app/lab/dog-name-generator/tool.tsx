"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { nameIdeas, nameStyles, type NameGender, type NameIdea, type NameStyle, type NameTag } from "./names";

type GenderPreference = "any" | NameGender;
type FormatPreference = "any" | NameTag;

const STORAGE_KEY = "dog-haven-group-name-favourites";

function seededValue(name: string, seed: number) {
  let value = seed * 7919;
  for (const character of name) value = (value * 31 + character.charCodeAt(0)) % 104729;
  return value;
}

export function generateNameIdeas(style: NameStyle, gender: GenderPreference, format: FormatPreference, seed: number) {
  return nameIdeas
    .filter((idea) => idea.style === style)
    .map((idea) => {
      const genderScore = gender === "any" ? 0 : idea.gender === gender ? 5 : idea.gender === "unisex" ? 3 : 0;
      const formatScore = format === "any" ? 0 : idea.tags.includes(format) ? 4 : 0;
      return { idea, score: genderScore * 100 + formatScore * 60 + seededValue(idea.name, seed) % 55 };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map(({ idea }) => idea);
}

export default function DogNameGenerator() {
  const [style, setStyle] = useState<NameStyle>("classic");
  const [gender, setGender] = useState<GenderPreference>("any");
  const [format, setFormat] = useState<FormatPreference>("any");
  const [seed, setSeed] = useState(1);
  const [favourites, setFavourites] = useState<string[]>([]);
  const [storageReady, setStorageReady] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const suggestions = useMemo(() => generateNameIdeas(style, gender, format, seed), [style, gender, format, seed]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        const parsed: unknown = saved ? JSON.parse(saved) : [];
        if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) setFavourites(parsed);
      } catch {
        // The generator remains usable if storage is unavailable.
      }
      setStorageReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch {
      // The generator remains usable if storage is unavailable.
    }
  }, [favourites, storageReady]);

  function toggleFavourite(name: string) {
    setFavourites((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
    setCopyStatus("");
  }

  async function copyFavourites() {
    if (!favourites.length) return;
    try {
      await navigator.clipboard.writeText(favourites.join(", "));
      setCopyStatus("Favourite names copied.");
    } catch {
      setCopyStatus("Copy was unavailable. Select and copy the names from the favourites list.");
    }
  }

  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">Dog Haven Group Lab</p>
        <h1>Dog Name Generator</h1>
        <p className="lead">Explore curated puppy name ideas across classic, modern, strong, elegant, playful, natural, travel, Italian, African, and American inspiration. Preferences help rank male dog names, female dog names, unisex dog names, short choices, and more unusual options.</p>
        <div className="name-generator-layout">
          <div className="panel name-generator-controls">
            <label className="field">
              <span>Name style</span>
              <select value={style} onChange={(event) => { setStyle(event.target.value as NameStyle); setSeed((value) => value + 1); }}>
                {nameStyles.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <label className="field">
              <span>Gender preference</span>
              <select value={gender} onChange={(event) => setGender(event.target.value as GenderPreference)}>
                <option value="any">Any</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
              </select>
            </label>
            <label className="field">
              <span>Name format</span>
              <select value={format} onChange={(event) => setFormat(event.target.value as FormatPreference)}>
                <option value="any">Any</option>
                <option value="short">Short names</option>
                <option value="two-syllable">Two-syllable names</option>
                <option value="unusual">Unusual names</option>
              </select>
            </label>
            <button className="button" type="button" onClick={() => setSeed((value) => value + 1)}>Generate again</button>
            <p className="generator-privacy">No account is required. Favourites stay in this browser and no name preferences are sent externally.</p>
          </div>
          <aside className="panel favourites-panel" aria-label="Saved favourite dog names">
            <p className="eyebrow">Saved favourites</p>
            <h2>{favourites.length ? `${favourites.length} saved ${favourites.length === 1 ? "name" : "names"}` : "No favourites yet"}</h2>
            {favourites.length ? <ul className="favourite-list">{favourites.map((name) => <li key={name}>{name}</li>)}</ul> : <p>Save promising names from the results, then copy the shortlist when you are ready to compare them.</p>}
            <div className="actions compact-actions">
              <button className="button secondary" type="button" disabled={!favourites.length} onClick={copyFavourites}>Copy favourites</button>
              <button className="button secondary" type="button" disabled={!favourites.length} onClick={() => { setFavourites([]); setCopyStatus(""); }}>Clear favourites</button>
            </div>
            {copyStatus ? <p className="form-status" aria-live="polite">{copyStatus}</p> : null}
          </aside>
        </div>
        <div className="name-results-heading">
          <div>
            <p className="eyebrow">Curated results</p>
            <h2>Dog name ideas for your preferences</h2>
          </div>
          <span className="status-pill available">12 suggestions</span>
        </div>
        <div className="name-results" aria-live="polite">
          {suggestions.map((idea) => <NameCard key={`${style}-${idea.name}`} idea={idea} saved={favourites.includes(idea.name)} toggleFavourite={toggleFavourite} />)}
        </div>
        <div className="panel generator-next-steps">
          <h2>Test a shortlist in everyday life.</h2>
          <p>A useful dog name should feel comfortable to say, remain clear around common cues, and suit the individual dog as you learn their personality. Continue with <Link href="/academy/puppy-planning">Puppy Planning</Link> or return to the <Link href="/lab">Dog Haven Group Lab</Link>.</p>
        </div>
      </div>
    </section>
  );
}

function NameCard({ idea, saved, toggleFavourite }: { idea: NameIdea; saved: boolean; toggleFavourite: (name: string) => void }) {
  return (
    <article className="name-card">
      <div>
        <h3>{idea.name}</h3>
        {idea.pronunciation ? <p className="pronunciation">Pronunciation: {idea.pronunciation}</p> : null}
        <p><strong>Inspiration:</strong> {idea.meaning}</p>
        <p>{idea.why}</p>
      </div>
      <button className={`button ${saved ? "" : "secondary"}`} type="button" aria-pressed={saved} onClick={() => toggleFavourite(idea.name)}>{saved ? "Saved" : "Save favourite"}</button>
    </article>
  );
}
