import Link from "next/link";
import Image from "next/image";
import { countries } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { ToolLinks } from "@/components/ToolLinks";

export const metadata = pageMetadata(
  "Global Dog Ownership Guides, Travel Tools & Country Network | Dog Haven Group",
  "Dog Haven Group provides global dog ownership guidance, international dog travel planning, country comparisons, premium tools, and gateways to Dog Haven country websites.",
  "",
  {
    url: "/images/doghavengroup/home/mother-site-architecture-global-network.jpg",
    width: 1450,
    height: 1088,
    alt: "Dog Haven Group global network architecture connecting country dog websites around the world"
  }
);

export default function HomePage() {
  const [southAfrica, unitedStates, italy] = countries;

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Global home of the Dog Haven network</p>
            <h1>Premium dog ownership intelligence for a world that moves with dogs.</h1>
            <p className="lead">Dog Haven Group is the mother site for Dog Haven country platforms, global ownership planning, international dog travel, premium tools, Academy learning, Journal insight, and downloadable resources.</p>
            <div className="hero-actions">
              <Link className="button" href="/doghaven-universe">Explore the platform</Link>
              <Link className="button secondary" href="/countries">View country network</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section editorial">
        <div className="shell split">
          <div>
            <p className="eyebrow">Mother site architecture</p>
            <h2>One global brand, separate local country purposes.</h2>
            <p>DogHavenGroup.com is not a copy of Dog Haven South Africa, Dog Haven USA, or Dog Haven Italy. It exists above those local sites as the global parent brand: a serious platform for country comparison, travel planning, ownership education, structured tools, editorial methodology, and branded resources for dog owners whose decisions increasingly cross borders.</p>
            <p>Readers can use the <Link href="/world-atlas">Dog Haven Group World Atlas</Link> to compare ownership conditions, the <Link href="/global-travel">Global Travel</Link> section to prepare for routes and relocation, the <Link href="/lab">Dog Haven Group Lab</Link> for interactive planning, and the <Link href="/academy">Dog Haven Group Academy</Link> for long-form learning before moving into a local country site.</p>
          </div>
          <figure className="homepage-media-frame">
            <Image
              src="/images/doghavengroup/home/mother-site-architecture-global-network.jpg"
              alt="Dog Haven Group global network architecture connecting country dog websites around the world"
              width={1450}
              height={1088}
              sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1200px) 46vw, 560px"
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Country showcase</p>
          <h2>Dog Haven country gateways</h2>
          <p className="lead">Each gateway gives real global context before linking to the local Dog Haven country site. The country sites remain separate websites with their own local purpose.</p>
          <div className="country-strip" aria-label="Dog Haven country gateway slider">
            <Link className="country-card" href={southAfrica.href}>
              <div className="country-card-media country-card-media-south-africa">
                <Image
                  src="/images/doghavengroup/countries/dog-haven-south-africa-country-gateway-map.webp"
                  alt="South Africa highlighted on a premium Africa network map for Dog Haven South Africa country guides"
                  width={1450}
                  height={1088}
                  sizes="(max-width: 520px) calc(100vw - 28px), (max-width: 900px) 46vw, 370px"
                />
              </div>
              <div className="country-card-content">
                <h3>{southAfrica.name}</h3>
                <p>{southAfrica.summary}</p>
                <span className="eyebrow">Open gateway</span>
              </div>
            </Link>
            <Link className="country-card" href={unitedStates.href}>
              <div className="country-card-media country-card-media-united-states">
                <Image
                  src="/images/doghavengroup/countries/dog-haven-united-states-country-gateway-map.webp"
                  alt="United States highlighted on a premium global network map for Dog Haven USA country guides"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 520px) calc(100vw - 28px), (max-width: 900px) 46vw, 370px"
                />
              </div>
              <div className="country-card-content">
                <h3>{unitedStates.name}</h3>
                <p>{unitedStates.summary}</p>
                <span className="eyebrow">Open gateway</span>
              </div>
            </Link>
            <Link className="country-card" href={italy.href}>
              <div className="country-card-media country-card-media-italy">
                <Image
                  src="/images/doghavengroup/countries/dog-haven-italy-country-gateway-map.webp"
                  alt="Italy highlighted on a premium European network map for Dog Haven Italy country guides"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 520px) calc(100vw - 28px), (max-width: 900px) 46vw, 370px"
                />
              </div>
              <div className="country-card-content">
                <h3>{italy.name}</h3>
                <p>{italy.summary}</p>
                <span className="eyebrow">Open gateway</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section flagship-tool-section">
        <div className="shell editorial-reading">
          <p className="eyebrow">Flagship global tool</p>
          <h2>Plan an international journey with your dog</h2>
          <p className="lead">Build a personalised preparation timeline, organise travel questions, track checklist progress and open relevant official sources before an international trip or permanent move.</p>
          <Link className="button" href="/global-travel/dog-passport-planner">Open the Global Passport Planner</Link>
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
          <figure className="homepage-media-frame">
            <Image
              src="/images/doghavengroup/home/dog-haven-group-core-sections-platform.webp"
              alt="Dog Haven Group platform connecting the World Atlas, dog travel guides, planning tools, Academy learning, Journal insights and downloadable resources"
              width={1450}
              height={1088}
              sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1200px) 46vw, 560px"
            />
          </figure>
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
