import Link from "next/link";
import { indexCategories } from "@/data/global-dog-ownership-index/categories";
import {
  Correction,
  DataDownloads,
  IndexNav,
  IndexNotice,
} from "@/components/global-index/IndexShared";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Global Dog Ownership Index Methodology | Dog Haven Group",
  "Read the scoring method, category definitions, source standards, evidence rules and limitations behind the Dog Haven Global Dog Ownership Index.",
  "world-atlas/global-dog-ownership-index/methodology",
);
export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <IndexNav />
          <p className="eyebrow">Published scoring and evidence rules</p>
          <h1>How the Global Dog Ownership Index Works</h1>
          <p className="lead">
            The methodology makes editorial judgement visible, preserves
            uncertainty and prevents incomplete evidence from becoming a
            confident-looking national verdict.
          </p>
        </div>
      </section>
      <main>
        <section className="section">
          <div className="shell index-reading methodology">
            <IndexNotice />
            <h2>Purpose and boundaries</h2>
            <p>
              The Index compares practical conditions that shape dog ownership
              and care. It does not measure dog happiness, identify a
              universally preferred country, guarantee access, or replace legal,
              veterinary, housing or travel advice. The founding countries are
              Australia, Italy, South Africa, the United Kingdom and the United
              States.
            </p>
            <h2>Eight categories and category-specific rubrics</h2>
            {indexCategories.map((c) => (
              <article key={c.id}>
                <h3>{c.name}</h3>
                <ul>
                  {c.rubric.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            ))}
            <h2>Editorial scale</h2>
            <table>
              <caption>Dog Haven Group editorial assessment scale</caption>
              <thead>
                <tr>
                  <th scope="col">Score</th>
                  <th scope="col">Label</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [1, "Substantial barriers"],
                  [2, "Notable constraints"],
                  [3, "Mixed conditions"],
                  [4, "Generally supportive"],
                  [5, "Broadly supportive"],
                ].map((x) => (
                  <tr key={x[0]}>
                    <th scope="row">{x[0]}</th>
                    <td>{x[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>Equal weighting and overall calculation</h2>
            <p>Each category contributes 12.5%. The visible formula is:</p>
            <p className="formula">
              Overall editorial score = (C₁ + C₂ + C₃ + C₄ + C₅ + C₆ + C₇ + C₈)
              ÷ 8
            </p>
            <p>
              The result is rounded to one decimal. Bands are 1.0–1.7
              substantial barriers; 1.8–2.5 notable constraints; 2.6–3.4 mixed
              conditions; 3.5–4.2 generally supportive; and 4.3–5.0 broadly
              supportive.
            </p>
            <h3>Fictional example</h3>
            <p>
              Country A scores 3 in all eight categories, producing 3.0. Country
              B alternates between 2 and 4 across four categories each, also
              producing 3.0. The equal totals conceal different trade-offs,
              which is why category rationales and personal priorities matter.
            </p>
            <h2>Missing-data rules</h2>
            <p>
              A category may use <strong>score: null</strong> and display
              “Evidence still being reviewed”. Missing evidence is never zero.
              An overall score is calculated only when all eight categories have
              a score, rationale and at least one resolved source. Otherwise the
              profile displays “Provisional profile — overall score not yet
              calculated”.
            </p>
            <h2>Evidence confidence</h2>
            <p>
              <strong>High confidence</strong> requires recent, direct and
              geographically appropriate evidence.{" "}
              <strong>Moderate confidence</strong> covers authoritative but
              partial evidence or necessary proxies.{" "}
              <strong>Limited confidence</strong> makes sparse, older or
              predominantly local evidence explicit. Confidence never changes
              the score automatically.
            </p>
            <h2>Source hierarchy and freshness</h2>
            <p>
              Accepted types are government, official statistics,
              intergovernmental organisations, public regulators, official
              transport operators, professional organisations, industry
              associations, academic research and local government. Generic
              blogs, affiliates, AI summaries, anonymous listicles, scraped
              snippets and unverified directories are excluded as primary
              scoring evidence. Source maintenance is documented internally, but
              no record should be treated as a promise that an underlying rule
              cannot change.
            </p>
            <h2>National-versus-local variation</h2>
            <p>
              Representative local evidence is labelled. One city, state or
              operator is never treated as an entire country. UK jurisdictions,
              US federalism, Australian states and territories, Italian
              municipalities and South African municipalities each require
              explicit care.
            </p>
            <h2>Comparability limitations</h2>
            <h3>Costs</h3>
            <p>
              Raw currency conversion is not a household cost comparison. Local
              prices, purchasing power, housing and veterinary access remain
              different, so the Index does not publish a false universal annual
              dog cost.
            </p>
            <h3>Climate</h3>
            <p>
              Climate scoring describes management burden across heat, cold and
              hazards. It is not a breed-health diagnosis or a declaration that
              a country is medically safe for every dog.
            </p>
            <h3>International travel</h3>
            <p>
              Travel scoring is a broad view of process complexity. Actual
              requirements depend on origin, destination, transit, dog history,
              purpose and carrier. Use the{" "}
              <Link href="/global-travel/dog-passport-planner">
                Passport Planner
              </Link>{" "}
              and re-open official sources.
            </p>
            <h2>Editorial judgement, corrections and maintenance</h2>
            <p>
              Scores are Dog Haven Group interpretations documented against
              public rubrics. Assessments are maintained through source checks,
              documented corrections and validation. Future countries will be
              published only after complete research, not as public
              placeholders.
            </p>
            <DataDownloads />
            <Correction />
          </div>
        </section>
      </main>
    </>
  );
}
