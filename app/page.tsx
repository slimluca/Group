import Link from "next/link";
import Image from "next/image";
import { countries } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { MediaFrame } from "@/components/MediaFrame";
import { ToolLinks } from "@/components/ToolLinks";

export const metadata = pageMetadata("Global Dog Ownership Guides, Travel Tools & Country Network | Dog Haven Group", "Dog Haven Group helps owners compare dog ownership by country, plan dog travel worldwide, use premium tools, and move into the Dog Haven country network.", "");

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Global home of the DogHaven network</p>
            <h1>Premium dog ownership intelligence for a world that moves with dogs.</h1>
            <p className="lead">Dog Haven Group is the mother site for DogHaven country platforms, global ownership planning, international dog travel, premium tools, Academy learning, Journal insight, and downloadable resources.</p>
            <div className="hero-actions">
              <Link className="button" href="/doghaven-universe">Explore the platform</Link>
              <Link className="button secondary" href="/countries">View country network</Link>
            </div>
          </div>
          <div className="hero-brand-panel" aria-label="Dog Haven Group brand mark">
            <div className="hero-logo-ring">
              <Image src="/brand/dog-haven-group-logo.png" alt="Dog Haven Group" width={180} height={180} priority />
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
            <p>Readers can use the <Link href="/world-atlas">Dog Haven Group World Atlas</Link> to compare ownership conditions, the <Link href="/global-travel">Global Travel</Link> section to prepare for routes and relocation, the <Link href="/lab">Dog Haven Group Lab</Link> for interactive planning, and the <Link href="/academy">Dog Haven Group Academy</Link> for long-form learning before moving into a local country site.</p>
          </div>
          <MediaFrame image={{ src: "/images/doghavengroup/home/world-atlas-premium-map.svg", alt: "A premium world atlas scene showing global dog ownership planning and country connections." }} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Country showcase</p>
          <h2>Dog Haven country gateways</h2>
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
          <div className="split">
            <div>
              <p className="eyebrow">Platform pathways</p>
              <h2>Start with the decision you are actually making.</h2>
              <p>Dog Haven Group is built around connected decisions, not isolated articles. A first-time owner may begin in <Link href="/academy">Academy</Link>, test assumptions in the <Link href="/lab">Lab</Link>, download a planning guide, then compare country conditions in the <Link href="/world-atlas">World Atlas</Link>. A family moving abroad may begin in <Link href="/global-travel">Global Travel</Link>, use the checklist tool, and then choose the right local country gateway.</p>
              <p>The site should feel like a global ownership system: editorial guidance, structured tools, printable resources, and country context all supporting one another.</p>
            </div>
            <div className="resource-panel">
              <span className="status-pill available">New download</span>
              <h3>The Dog Haven Group Global Dog Owner Starter Guide</h3>
              <p>A branded PDF for lifestyle fit, budgets, puppy preparation, travel, relocation, safety, and country-network next steps.</p>
              <Link href="/downloads/global-dog-owner-starter-guide">Open the guide</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Core sections</p>
            <h2>Built for comparison, travel, tools, learning, insight, and resources.</h2>
            <p>The first version of Dog Haven Group includes the <Link href="/world-atlas">World Atlas</Link>, <Link href="/global-travel">Global Travel</Link>, <Link href="/lab">Dog Haven Group Lab</Link>, <Link href="/academy">Dog Haven Group Academy</Link>, <Link href="/journal">Dog Haven Group Journal</Link>, <Link href="/downloads">Download Library</Link>, <Link href="/countries">Country Network</Link>, and <Link href="/doghaven-universe">Dog Haven Group Universe</Link>. This structure gives the site room to grow without creating thin pages or making the homepage behave like a generic blog index.</p>
            <p>The <Link href="/downloads">Download Library</Link> now begins with a real branded starter guide. The <Link href="/journal">Dog Haven Group Journal</Link> is positioned as a premium insights room for travel planning, safety guidance, network updates, and country spotlights. The Atlas and Travel sections provide the global frame, while the Lab turns decisions into usable planning tools.</p>
          </div>
          <MediaFrame image={{ src: "/images/doghavengroup/home/platform-section-map.svg", alt: "A premium map of Dog Haven Group sections including Atlas, Travel, Lab, Academy, Journal, and Downloads." }} />
        </div>
      </section>

      <section className="section editorial">
        <div className="shell">
          <p className="eyebrow">Interactive Lab</p>
          <h2>Working tools with a wider platform behind them.</h2>
          <p className="lead">The Lab is where Dog Haven Group turns careful editorial thinking into calculators, quizzes, checklists, and future planning tools. Use it with the World Atlas, Global Travel, Academy guides, and downloads rather than treating a result as a final answer.</p>
          <ToolLinks />
        </div>
      </section>
    </>
  );
}
