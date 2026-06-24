import Link from "next/link";
import Image from "next/image";
import { countries, pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { MediaFrame } from "@/components/MediaFrame";
import { ToolLinks } from "@/components/ToolLinks";

export const metadata = pageMetadata("DogHaven Group | Global Dog Ownership Platform", pages["world-atlas"].description);

const startPaths = [
  { href: "/academy/first-time-dog-owner-guide", title: "I am getting my first dog", text: "Begin with lifestyle fit, budget, home preparation, training support, and realistic first-month planning." },
  { href: "/global-travel/moving-abroad-with-a-dog", title: "I am moving abroad with my dog", text: "Use a structured relocation guide before checking official government, airline, and veterinary sources." },
  { href: "/lab/global-dog-cost-calculator", title: "I want to compare dog costs", text: "Estimate planning ranges for monthly and yearly ownership costs across broad region groups." },
  { href: "/global-travel", title: "I want dog travel help", text: "Plan documents, routes, checklists, quarantine research, and arrival routines with careful reminders." },
  { href: "/lab", title: "I want tools and quizzes", text: "Open the calculator, Breed Fit Quiz, Puppy Readiness Quiz, and Dog Travel Checklist." },
  { href: "/countries", title: "I want my country's DogHaven site", text: "Start with the country network and move into South Africa, United States, Italy, or future markets." }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Global home of the DogHaven network</p>
            <h1>Premium dog ownership intelligence for a world that moves with dogs.</h1>
            <p className="lead">DogHaven Group is the mother site for DogHaven country platforms, global ownership planning, international dog travel, premium tools, Academy learning, Journal insight, and downloadable resources.</p>
            <div className="hero-actions">
              <Link className="button" href="/doghaven-universe">Explore the platform</Link>
              <Link className="button secondary" href="/countries">View country network</Link>
            </div>
          </div>
          <div className="hero-brand-panel" aria-label="DogHaven Group brand mark">
            <div className="hero-logo-ring">
              <Image src="/brand/dog-haven-group-logo.png" alt="DogHaven Group" width={180} height={180} priority />
            </div>
            <div className="hero-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>Global platform for country comparison, travel planning, ownership tools, Academy learning, Journal insight, and branded resources.</p>
          </div>
        </div>
      </section>

      <section className="section editorial">
        <div className="shell split">
          <div>
            <p className="eyebrow">Mother site architecture</p>
            <h2>One global brand, separate local country purposes.</h2>
            <p>DogHavenGroup.com is not a copy of DogHaven South Africa, DogHaven United States, or DogHaven Italy. It exists above those local sites as the global parent brand: a serious platform for country comparison, travel planning, ownership education, structured tools, editorial methodology, and branded resources for dog owners whose decisions increasingly cross borders.</p>
            <p>Readers can use the <Link href="/world-atlas">DogHaven World Atlas</Link> to compare ownership conditions, the <Link href="/global-travel">Global Travel</Link> section to prepare for routes and relocation, the <Link href="/lab">DogHaven Lab</Link> for interactive planning, and the <Link href="/academy">Academy</Link> for long-form learning before moving into a local country site.</p>
          </div>
          <MediaFrame image={{ src: "/images/doghavengroup/home/world-atlas-premium-map.svg", alt: "A premium world atlas scene showing global dog ownership planning and country connections." }} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Country showcase</p>
          <h2>DogHaven country gateways</h2>
          <p className="lead">Each gateway gives real global context before linking to the local DogHaven country site. The country sites remain separate websites with their own local purpose.</p>
          <div className="country-strip" aria-label="DogHaven country gateway slider">
            {countries.map((country) => (
              <Link className="country-card" href={country.href} key={country.href} style={{ "--country-image": `url(${country.image})` } as React.CSSProperties}>
                <h3>{country.name}</h3>
                <p>{country.summary}</p>
                <span className="eyebrow">Open gateway</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section editorial">
        <div className="shell">
          <p className="eyebrow">Start here</p>
          <h2>Choose the path that matches your decision.</h2>
          <div className="grid">
            {startPaths.map((path) => (
              <Link className="nav-card" href={path.href} key={path.href}>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Core sections</p>
            <h2>Built for comparison, travel, tools, learning, insight, and resources.</h2>
            <p>The first version of DogHaven Group includes the World Atlas, Global Travel, DogHaven Lab, DogHaven Academy, DogHaven Journal, Download Library, Country Network, and DogHaven Universe. This structure gives the site room to grow without creating thin pages or making the homepage behave like a generic blog index.</p>
            <p>The <Link href="/downloads">Download Library</Link> will hold branded PDF planners and worksheets. The <Link href="/journal">DogHaven Journal</Link> is reserved for premium launch essays, network updates, travel planning explainers, safety topics, ownership trends, and country spotlights.</p>
          </div>
          <MediaFrame image={{ src: "/images/doghavengroup/home/platform-section-map.svg", alt: "A premium map of DogHaven Group sections including Atlas, Travel, Lab, Academy, Journal, and Downloads." }} />
        </div>
      </section>

      <section className="section editorial">
        <div className="shell">
          <p className="eyebrow">Interactive Lab</p>
          <h2>Working tools in Phase 1</h2>
          <ToolLinks />
        </div>
      </section>
    </>
  );
}
