import Image from "next/image";
import Link from "next/link";
import { indexCategories } from "@/data/global-dog-ownership-index/categories";
import { IndexCountry } from "@/data/global-dog-ownership-index/types";
import {
  INDEX_BASE,
  band,
  overall,
  sourcesFor,
} from "@/lib/global-dog-ownership-index";
import { IndexNav, IndexNotice, Correction } from "./IndexShared";
export function CountryProfile({ country }: { country: IndexCountry }) {
  const score = overall(country);
  const sources = sourcesFor(country);
  return (
    <>
      <section
        className={`page-hero index-country-hero ${country.image ? "with-image" : "data-led"}`}
      >
        <div className="shell">
          <IndexNav />
          <div className="index-country-heading">
            <div>
              <p className="eyebrow">Global Dog Ownership Index</p>
              <h1>Dog Ownership in {country.name}: Global Comparison</h1>
              <p className="lead">{country.intro}</p>
            </div>
            {country.image ? (
              <Image
                src={country.image.src}
                alt={country.image.alt}
                width={720}
                height={500}
              />
            ) : (
              <div className="hero-score">
                <span>{country.code}</span>
                <strong>{score?.toFixed(1)} / 5</strong>
                <small>{score ? band(score) : "Provisional"}</small>
              </div>
            )}
          </div>
        </div>
      </section>
      <main>
        <section className="section">
          <div className="shell index-reading">
            <IndexNotice />
            <div className="index-summary">
              <div>
                <span>Dog Haven Group editorial index score</span>
                <strong>{score?.toFixed(1)} out of 5</strong>
                <small>
                  {score
                    ? band(score)
                    : "Provisional profile — overall score not yet calculated"}
                </small>
              </div>
              <div>
                <span>Evidence coverage</span>
                <strong>8 of 8 categories</strong>
                <small>Complete profile with cited evidence</small>
              </div>
            </div>
            <h2>Country overview</h2>
            {country.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h2>Eight category assessments</h2>
            <p>
              Every number below is a{" "}
              <strong>Dog Haven Group editorial assessment</strong>, interpreted
              from the cited evidence. Confidence describes the evidence base
              and does not alter the score.
            </p>
            <div className="assessment-list">
              {country.assessments.map((a) => {
                const cat = indexCategories.find((c) => c.id === a.categoryId)!;
                return (
                  <article key={a.categoryId} id={a.categoryId}>
                    <header>
                      <div>
                        <p className="eyebrow">{cat.name}</p>
                        <h3>
                          {a.score === null
                            ? "Evidence still being reviewed"
                            : `${a.score} / 5 — ${a.scoreLabel}`}
                        </h3>
                      </div>
                      <span
                        className={`confidence ${a.confidence.split(" ")[0].toLowerCase()}`}
                      >
                        {a.confidence}
                      </span>
                    </header>
                    <div
                      className="score-track"
                      aria-label={`${cat.name}: ${a.score} out of 5`}
                    >
                      <i style={{ width: `${(a.score ?? 0) * 20}%` }} />
                    </div>
                    <p>
                      <strong>{a.summary}</strong>
                    </p>
                    <p>{a.rationale}</p>
                    <dl>
                      <div>
                        <dt>Why this confidence?</dt>
                        <dd>{a.confidenceReason}</dd>
                      </div>
                      <div>
                        <dt>National versus local</dt>
                        <dd>{a.localVariation}</dd>
                      </div>
                      <div>
                        <dt>Limitations</dt>
                        <dd>{a.limitations}</dd>
                      </div>
                      <div>
                        <dt>Evidence references</dt>
                        <dd>
                          {a.sourceIds.length} source reference
                          {a.sourceIds.length !== 1 ? "s" : ""}
                        </dd>
                      </div>
                    </dl>
                  </article>
                );
              })}
            </div>
            <div className="index-columns">
              <section>
                <h2>Key ownership strengths</h2>
                <ul>
                  {country.strengths.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>Important constraints</h2>
                <ul>
                  {country.constraints.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </section>
            </div>
            <h2>National-versus-local variation</h2>
            <p>{country.variation}</p>
            <h2>International travel context</h2>
            <p>{country.travelContext}</p>
            <p>
              Comparing countries is only the beginning. Use the{" "}
              <Link href="/global-travel/dog-passport-planner">
                Passport Planner
              </Link>{" "}
              to organise a specific international route, timeline, checklist
              and official-source review.
            </p>
            <h2>Questions to investigate before moving</h2>
            <ul>
              {country.questions.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            {country.localSite ? (
              <aside className="local-handoff">
                <h2>{country.localSite.name}</h2>
                <p>{country.localSite.wording}</p>
                <a
                  className="button"
                  href={country.localSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continue to {country.localSite.name}
                </a>
              </aside>
            ) : null}
            <h2>Country-specific source list</h2>
            <ol className="source-mini">
              {sources.map((s) => (
                <li key={s.id}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.title}
                  </a>{" "}
                  <span>
                    {s.publisher} · {s.sourceType}
                  </span>
                </li>
              ))}
            </ol>
            <div className="compact-actions no-print">
              <Link
                className="button"
                href={`${INDEX_BASE}/compare?countries=${country.slug},${country.slug === "italy" ? "australia" : "italy"}`}
              >
                Compare {country.name}
              </Link>
              <Link
                className="button secondary"
                href={`${INDEX_BASE}/methodology`}
              >
                Read methodology
              </Link>
            </div>
            <Correction />
          </div>
        </section>
      </main>
    </>
  );
}
