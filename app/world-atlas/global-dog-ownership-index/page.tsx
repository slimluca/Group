import Link from "next/link";
import { countriesAlphabetical } from "@/data/global-dog-ownership-index/countries";
import { indexCategories } from "@/data/global-dog-ownership-index/categories";
import { band, INDEX_BASE, overall } from "@/lib/global-dog-ownership-index";
import { pageMetadata, jsonLd } from "@/lib/metadata";
import { site } from "@/data/site";
import {
  Correction,
  DataDownloads,
  IndexNav,
  IndexNotice,
} from "@/components/global-index/IndexShared";
const title = "Global Dog Ownership Index: Compare Countries | Dog Haven Group",
  description =
    "Compare dog ownership across countries using transparent research, editorial scoring, source confidence and practical planning categories.";
export const metadata = pageMetadata(
  title,
  description,
  "world-atlas/global-dog-ownership-index",
);
const faqs = [
  [
    "Is the Global Dog Ownership Index an official government ranking?",
    "No. It is a Dog Haven Group editorial assessment supported by cited evidence.",
  ],
  [
    "Does a higher score mean every city is more dog-friendly?",
    "No. National profiles cannot represent every locality, landlord or operator.",
  ],
  [
    "How are country scores calculated?",
    "Eight completed editorial category scores are equally weighted at 12.5% and averaged.",
  ],
  [
    "What is evidence confidence?",
    "Confidence describes the coverage and directness of evidence. It is separate from the score.",
  ],
  [
    "Why are only five countries included?",
    "The founding release prioritises five individually researched profiles rather than publishing thin country pages.",
  ],
  [
    "Will more countries be added?",
    "Yes, after source review and methodology checks are complete.",
  ],
  [
    "Can the Index tell me where I should move with my dog?",
    "No. It supports investigation and cannot account for your dog, household or exact location.",
  ],
  [
    "Are international dog travel requirements included?",
    "Only broad complexity context. Use current official authorities and the Passport Planner for a route.",
  ],
  [
    "How is the evidence maintained?",
    "Sources and assessments are updated through documented editorial checks. No fixed update schedule is promised, so visitors should reopen official authorities for time-sensitive decisions.",
  ],
];
export default function Page() {
  const url = `${site.url}${INDEX_BASE}`;
  return (
    <>
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "Dataset",
        name: "Dog Haven Global Dog Ownership Index",
        description,
        creator: { "@type": "Organization", name: "Dog Haven Group" },
        publisher: { "@type": "Organization", name: "Dog Haven Group" },
        version: "1.0",
        dateModified: "2026-07-12",
        url,
        keywords: [
          "global dog ownership index",
          "dog ownership by country",
          "international dog ownership",
        ],
        spatialCoverage: countriesAlphabetical.map((c) => c.name),
        variableMeasured: indexCategories.map((c) => c.name),
        distribution: [
          {
            "@type": "DataDownload",
            encodingFormat: "application/json",
            contentUrl: `${site.url}/data/global-dog-ownership-index-v1.json`,
          },
          {
            "@type": "DataDownload",
            encodingFormat: "text/csv",
            contentUrl: `${site.url}/data/global-dog-ownership-index-v1.csv`,
          },
        ],
      })}
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      })}
      <section className="page-hero index-hero">
        <div className="shell">
          <IndexNav />
          <p className="eyebrow">Global dog ownership research</p>
          <h1>Global Dog Ownership Index</h1>
          <p className="lead">
            Compare the practical conditions that shape dog ownership across
            researched countries. Every profile separates source-backed evidence
            from Dog Haven Group editorial assessment and shows where national
            comparisons remain limited.
          </p>
          <div className="hero-actions">
            <Link className="button" href={`${INDEX_BASE}/compare`}>
              Compare Countries
            </Link>
            <Link
              className="button secondary"
              href={`${INDEX_BASE}/methodology`}
            >
              Read the Methodology
            </Link>
          </div>
        </div>
      </section>
      <main>
        <section className="section">
          <div className="shell index-reading">
            <IndexNotice />
            <h2>What the Global Dog Ownership Index compares</h2>
            <p>
              The Index examines the practical experience of owning and caring
              for a dog through eight deliberately broad categories. It does not
              award rank numbers or claim to identify a universally preferable
              country.
            </p>
            <div className="category-directory">
              {indexCategories.map((c, i) => (
                <article key={c.id}>
                  <span>0{i + 1}</span>
                  <h3>{c.name}</h3>
                  <p>{c.rubric.join("; ")}.</p>
                </article>
              ))}
            </div>
            <h2>Why national dog ownership comparisons are difficult</h2>
            <p>
              City and rural conditions diverge. Landlords, transport operators
              and local authorities make different decisions. Climate zones and
              cost pressures vary inside borders, while dog-specific datasets
              are often incomplete or not comparable. Rules also change. The
              Index retains those problems as visible limitations rather than
              smoothing them into false precision.
            </p>
            <h2>Evidence and editorial assessment are shown separately</h2>
            <p>
              Source-backed facts and observations provide the evidence layer.
              The score is a transparent Dog Haven Group interpretation using a
              published rubric. Confidence labels describe how direct, current
              and geographically appropriate that evidence is; they never
              secretly adjust the score.
            </p>
            <h2>Founding country profiles</h2>
            <div className="profile-grid">
              {countriesAlphabetical.map((c) => {
                const s = overall(c)!;
                return (
                  <article key={c.slug}>
                    <p className="eyebrow">
                      {c.code} · Complete research profile
                    </p>
                    <h3>{c.name}</h3>
                    <div className="profile-score">
                      <strong>{s.toFixed(1)} / 5</strong>
                      <span>{band(s)}</span>
                    </div>
                    <p>Evidence coverage: 8 of 8 categories.</p>
                    <p>
                      <strong>Potential strengths:</strong>{" "}
                      {c.strengths.slice(0, 2).join("; ")}.
                    </p>
                    <p>
                      <strong>Important constraints:</strong>{" "}
                      {c.constraints.slice(0, 2).join("; ")}.
                    </p>
                    <div className="compact-actions">
                      <Link href={`${INDEX_BASE}/${c.slug}`}>Open profile</Link>
                      <Link
                        href={`${INDEX_BASE}/compare?countries=${c.slug},${c.slug === "italy" ? "australia" : "italy"}`}
                      >
                        Compare
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
            <h2>Use the Index for planning, not as a universal verdict</h2>
            <p>
              Dogs, owners, locations and personal priorities differ. A national
              score cannot decide where someone should live. Explore{" "}
              <Link href={`${INDEX_BASE}/compare`}>
                Your Dog Ownership Priorities
              </Link>{" "}
              to create a private personal planning view without changing the
              equal-weight Index scores.
            </p>
            <p>
              Comparing countries is only the beginning. Use the{" "}
              <Link href="/global-travel/dog-passport-planner">
                Passport Planner
              </Link>{" "}
              to organise a specific international route, timeline, checklist
              and official-source review.
            </p>
            <DataDownloads />
            <section>
              <p className="eyebrow">Frequently asked questions</p>
              <h2>Questions about the Index</h2>
              <div className="faq-list">
                {faqs.map(([q, a]) => (
                  <details key={q}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </section>
            <Correction />
          </div>
        </section>
      </main>
    </>
  );
}
