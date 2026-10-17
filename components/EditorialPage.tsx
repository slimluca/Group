import Link from "next/link";
import Image from "next/image";
import type { PageContent } from "@/data/content";
import { MediaFrame } from "./MediaFrame";

const templateHeroAssets: Record<string, { src: string; alt: string; className: string }> = {
  "world-atlas": {
    src: "/images/doghavengroup/visuals/atlas-portugal-irish-setter.webp",
    alt: "An Irish Setter and its owner on a Portuguese Atlantic coastal path",
    className: "template-hero-atlas",
  },
  "global-travel": {
    src: "/images/doghavengroup/visuals/travel-alpine-train-border-collie.webp",
    alt: "A Border Collie travelling calmly with its owner on an alpine train",
    className: "template-hero-travel",
  },
  academy: {
    src: "/images/doghavengroup/visuals/academy-staffy-trainer.webp",
    alt: "A brindle Staffordshire bull terrier working with its owner in a bright training room",
    className: "template-hero-academy",
  },
  lab: {
    src: "/images/doghavengroup/visuals/lab-dachshund-planning-desk.webp",
    alt: "A chocolate Dachshund beside a calm dog-owner planning desk",
    className: "template-hero-lab",
  },
};

export function EditorialPage({ page }: { page: PageContent }) {
  const templateKind = ["world-atlas", "global-travel", "academy", "lab"].includes(page.slug)
    ? page.slug
    : undefined;
  const templateHero = templateKind ? templateHeroAssets[templateKind] : undefined;

  const countryHeroAssets: Record<string, { src: string; alt: string }> = {
    "south-africa": {
      src: "/images/doghavengroup/visuals/south-africa-fynbos-rescue-dog.webp",
      alt: "A South African woman walking a tan rescue dog through coastal fynbos above Cape Town",
    },
    "united-states": {
      src: "/images/doghavengroup/visuals/united-states-waterfront-golden-retriever.webp",
      alt: "A couple walking a Golden Retriever beside an urban waterfront in the Pacific Northwest",
    },
    italy: {
      src: "/images/doghavengroup/visuals/italy-square-whippet.webp",
      alt: "An older man walking a blue-grey Whippet through a quiet Italian stone square",
    },
  };
  const countryHero = countryHeroAssets[page.slug];
  const secondaryHeroAssets: Record<string, { src: string; alt: string }> = {
    "academy/first-time-dog-owner-guide": {
      src: "/images/doghavengroup/visuals/academy-first-dog-puppy-plan.webp",
      alt: "A young puppy sleeping while its new owners prepare a calm first-month plan",
    },
  };
  const secondaryHero = secondaryHeroAssets[page.slug];
  const heroVisual = templateHero
    ?? (countryHero ? { ...countryHero, className: "template-hero-country" } : undefined)
    ?? (secondaryHero ? { ...secondaryHero, className: "template-hero-guide" } : undefined);

  const templateIntro = templateKind === "global-travel" ? (
    <>
      <section className="template-step-section" aria-label="Global travel planning steps">
        <div className="shell template-step-strip">
          {["Prepare", "Documents", "Transport", "Arrive"].map((step, index) => (
            <div className="template-step" key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              <em>{["Build a calm route", "Check current rules", "Choose the right carrier", "Settle the first week"][index]}</em>
            </div>
          ))}
        </div>
      </section>
      <section className="template-feature-section">
        <div className="shell template-feature-grid">
          <Link href="/global-travel/dog-passport-planner" className="template-feature-card">
            <Image src="/images/doghavengroup/visuals/ownership-index-irish-setter-coast.webp" alt="Irish Setter on a coastal travel route" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <span><small>International dog travel</small><strong>Take the next route with a better plan →</strong></span>
          </Link>
          <Link href="/global-travel/relocation" className="template-feature-card">
            <Image src="/images/doghavengroup/visuals/relocation-greyhound-airport.webp" alt="Greyhound waiting calmly in a modern airport" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <span><small>Relocation centre</small><strong>Move well, from first question to arrival →</strong></span>
          </Link>
        </div>
      </section>
    </>
  ) : templateKind === "world-atlas" ? (
    <section className="template-atlas-section">
      <div className="shell">
        <div className="template-section-heading"><p className="eyebrow">Featured comparisons</p><h2>See the ownership picture clearly.</h2></div>
        <div className="template-country-grid">
          {[
            ["South Africa", "south-africa-fynbos-rescue-dog.webp", "Space, climate and city choice", "Planning range"],
            ["United States", "united-states-waterfront-golden-retriever.webp", "Services, housing and travel", "Planning range"],
            ["Italy", "italy-square-whippet.webp", "Walkability, routine and access", "Planning range"],
          ].map(([name, image, detail, range]) => (
            <article className="template-country-card" key={name}>
              <div className="template-country-image"><Image src={`/images/doghavengroup/visuals/${image}`} alt={`${name} dog ownership planning`} fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
              <div className="template-country-copy"><p className="eyebrow">{name}</p><h3>{detail}</h3><strong>{range}</strong><div className="metric"><span /><span /><span /><span /><span /></div><Link href="/world-atlas/global-dog-ownership-index">View the framework →</Link></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  ) : templateKind === "academy" ? (
    <>
      <section className="template-academy-meta">
        <div className="shell template-meta-row"><span>Academy / Planning guides</span><span>Evidence-aware · Global context · Practical next steps</span></div>
      </section>
      <section className="template-feature-section">
        <div className="shell template-feature-grid">
          <Link href="/academy/puppy-planning" className="template-feature-card">
            <Image src="/images/doghavengroup/visuals/academy-beagle-puppy-planning.webp" alt="A Beagle puppy exploring a carefully prepared puppy area" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <span><small>Puppy planning</small><strong>Prepare the first month before the puppy arrives →</strong></span>
          </Link>
          <Link href="/academy/senior-dog-care" className="template-feature-card">
            <Image src="/images/doghavengroup/visuals/academy-senior-black-labrador.webp" alt="A senior black Labrador resting comfortably beside its owner" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <span><small>Senior care</small><strong>Adapt the home and routine with dignity →</strong></span>
          </Link>
        </div>
      </section>
    </>
  ) : templateKind === "lab" ? (
    <section className="template-feature-section">
      <div className="shell template-feature-grid">
        <Link href="/lab/global-dog-cost-calculator" className="template-feature-card">
          <Image src="/images/doghavengroup/visuals/lab-dachshund-planning-desk.webp" alt="A Dachshund beside a dog-owner budgeting and planning desk" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span><small>Cost planning</small><strong>Build a realistic monthly and yearly ownership range →</strong></span>
        </Link>
        <Link href="/lab/puppy-readiness-quiz" className="template-feature-card">
          <Image src="/images/doghavengroup/visuals/academy-first-dog-puppy-plan.webp" alt="A puppy sleeping while its owners prepare a practical plan" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span><small>Readiness</small><strong>Turn uncertainty into a clear preparation list →</strong></span>
        </Link>
      </div>
    </section>
  ) : null;

  return (
    <>
      <section className={`page-hero ${heroVisual ? `template-hero ${heroVisual.className}` : ""}`}>
        {heroVisual ? (
          <>
            <Image
              className="template-hero-image"
              src={heroVisual.src}
              alt={heroVisual.alt}
              fill
              sizes="100vw"
              priority
            />
            <span className="template-hero-overlay" aria-hidden="true" />
          </>
        ) : null}
        <div className="shell">
          <div className={`page-hero-copy ${heroVisual ? "template-hero-copy" : ""}`}>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.hero}</h1>
            <p className="lead">{page.description}</p>
            {templateHero ? (
              <div className="hero-actions">
                <Link
                  className="button"
                  href={templateKind === "lab" ? "/lab/global-dog-cost-calculator" : templateKind === "academy" ? "/academy/first-time-dog-owner-guide" : templateKind === "global-travel" ? "/global-travel/dog-passport-planner" : "/world-atlas/global-dog-ownership-index"}
                >
                  {templateKind === "lab" ? "Start planning" : templateKind === "academy" ? "Explore the guides" : templateKind === "global-travel" ? "Plan a journey" : "Compare countries"}
                </Link>
                <Link
                  className="button secondary"
                  href={templateKind === "lab" ? "/academy" : templateKind === "academy" ? "/lab" : templateKind === "global-travel" ? "/global-travel/relocation" : "/countries"}
                >
                  {templateKind === "lab" ? "Read the Academy" : templateKind === "academy" ? "Open the Lab" : templateKind === "global-travel" ? "Moving abroad" : "Country network"}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {templateIntro}
      {page.sections.map((section, index) => (
        <section
          className={`section content-section ${section.image ? "content-section-with-media" : "content-section-reading"} ${index % 2 === 0 ? "editorial" : ""}`}
          key={section.title}
        >
          <div
            className={`shell ${section.image ? "split" : "full-copy"}`}
          >
            <div className="editorial-copy">
              {section.eyebrow ? (
                <p className="eyebrow">{section.eyebrow}</p>
              ) : null}
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              {section.links ? (
                <div className="actions">
                  {section.links.map((link) => (
                    <Link className="button" key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {section.image ? <MediaFrame image={section.image} /> : null}
          </div>
        </section>
      ))}
      {page.table ? (
        <section className="section content-section data-section">
          <div className="shell">
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    {page.table.columns.map((column) => (
                      <th scope="col" key={column}>
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.table.rows.map((row) => (
                    <tr key={row.join("-")}>
                      {row.map((cell) => (
                        <td key={cell}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
