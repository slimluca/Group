import Link from "next/link";
import Image from "next/image";
import type { PageContent } from "@/data/content";
import { MediaFrame } from "./MediaFrame";

const templateHeroAssets: Record<string, { src: string; alt: string; className: string }> = {
  "world-atlas": {
    src: "/images/doghavengroup/home/world-atlas-premium-map.svg",
    alt: "An illuminated world map representing global dog ownership comparison",
    className: "template-hero-atlas",
  },
  "global-travel": {
    src: "/images/doghavengroup/visuals/global-travel-hero-photograph.webp",
    alt: "A Border Collie looking out from a train towards an alpine landscape",
    className: "template-hero-travel",
  },
  academy: {
    src: "/images/doghavengroup/visuals/academy-staffy-training-room.webp",
    alt: "A brindle Staffordshire bull terrier working with its owner in a bright training room",
    className: "template-hero-academy",
  },
  lab: {
    src: "/images/doghavengroup/visuals/lab-dachshund-nutrition.webp",
    alt: "A chocolate dachshund beside nutrition notes and planning tools in a bright studio",
    className: "template-hero-lab",
  },
};

export function EditorialPage({ page }: { page: PageContent }) {
  const templateKind =
    page.slug === "world-atlas" || page.slug.startsWith("world-atlas/") ? "world-atlas" :
      page.slug === "global-travel" || page.slug.startsWith("global-travel/") ? "global-travel" :
        page.slug === "academy" || page.slug.startsWith("academy/") ? "academy" :
          page.slug === "lab" || page.slug.startsWith("lab/") ? "lab" : undefined;
  const templateHero = templateKind ? templateHeroAssets[templateKind] : undefined;

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
            ["South Africa", "country-comparison-golden-retriever.webp", "Space, climate and city choice", "R 3.2k–R 7.8k"],
            ["United States", "ownership-index-irish-setter-coast.webp", "Services, housing and travel", "$150–$420"],
            ["Italy", "tools-apricot-poodle-reading-room.webp", "Walkability, routine and access", "€110–€300"],
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
    <section className="template-academy-meta">
      <div className="shell template-meta-row"><span>Academy / Planning guides</span><span>Evidence-aware · Global context · Practical next steps</span></div>
    </section>
  ) : null;

  return (
    <>
      <section className={`page-hero ${templateHero ? `template-hero ${templateHero.className}` : ""}`}>
        {templateHero ? (
          <>
            <Image
              className="template-hero-image"
              src={templateHero.src}
              alt={templateHero.alt}
              fill
              sizes="100vw"
              priority
            />
            <span className="template-hero-overlay" aria-hidden="true" />
          </>
        ) : null}
        <div className="shell">
          <div className={`page-hero-copy ${templateHero ? "template-hero-copy" : ""}`}>
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
