import Link from "next/link";
import Image from "next/image";
import { countries } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";
import { ToolLinks } from "@/components/ToolLinks";

export const metadata = pageMetadata(
  "Global Dog Ownership & Travel Guides | Dog Haven Group",
  "Explore international dog ownership guidance, country comparisons, travel planning, practical tools and trusted resources from Dog Haven Group.",
  "",
  {
    url: "/images/doghavengroup/visuals/home-mountain-australian-shepherd.webp",
    width: 1983,
    height: 793,
    alt: "An Australian Shepherd and its owner overlooking an alpine lake at golden hour",
  },
);

export default function HomePage() {
  const [southAfrica, unitedStates, italy] = countries;

  return (
    <>
      <section className="hero home-hero">
        <Image
          className="home-hero-image"
          src="/images/doghavengroup/visuals/home-mountain-australian-shepherd.webp"
          alt="An Australian Shepherd and its owner looking over an alpine lake at golden hour"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Global home of the Dog Haven network</p>
            <h1>
              Premium dog ownership intelligence for a world that moves with
              dogs.
            </h1>
            <p className="lead">
              Dog Haven Group brings global ownership research, international
              travel planning, practical tools, Academy learning and local
              country knowledge into one considered platform.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/doghaven-universe">
                Explore the platform
              </Link>
              <Link className="button secondary" href="/countries">
                View country network
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pathway-section">
        <div className="shell">
          <div className="pathway-grid">
            <Link className="pathway-card" href="/world-atlas">
              <Image
                src="/images/doghavengroup/visuals/atlas-portugal-irish-setter.webp"
                alt="An Irish Setter and owner on a Portuguese coastal path for country comparison guidance"
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
              />
              <span className="pathway-card-wash" aria-hidden="true" />
              <span className="pathway-card-content">
                <span className="pathway-number">01</span>
                <strong>Compare countries</strong>
                <span>See ownership conditions through a global lens.</span>
                <span className="pathway-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
            <Link className="pathway-card" href="/global-travel">
              <Image
                src="/images/doghavengroup/visuals/travel-alpine-train-border-collie.webp"
                alt="A Border Collie travelling beside a train window through the Alps"
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
              />
              <span className="pathway-card-wash" aria-hidden="true" />
              <span className="pathway-card-content">
                <span className="pathway-number">02</span>
                <strong>Plan a journey</strong>
                <span>Prepare travel, documents and relocation with care.</span>
                <span className="pathway-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
            <Link className="pathway-card" href="/academy">
              <Image
                src="/images/doghavengroup/visuals/academy-staffy-trainer.webp"
                alt="A brindle Staffordshire Bull Terrier resting attentively in a bright training room"
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
              />
              <span className="pathway-card-wash" aria-hidden="true" />
              <span className="pathway-card-content">
                <span className="pathway-number">03</span>
                <strong>Build a better ownership plan</strong>
                <span>Practical guidance for a healthier life together.</span>
                <span className="pathway-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section editorial">
        <div className="shell split">
          <div>
            <p className="eyebrow">Mother site architecture</p>
            <h2>One global brand, separate local country purposes.</h2>
            <p>
              DogHavenGroup.com is not a copy of Dog Haven South Africa, Dog
              Haven USA, or Dog Haven Italy. It exists above those local sites
              as the global parent brand: a serious platform for country
              comparison, travel planning, ownership education, structured
              tools, editorial methodology, and branded resources for dog owners
              whose decisions increasingly cross borders.
            </p>
            <p>
              Readers can use the{" "}
              <Link href="/world-atlas">Dog Haven Group World Atlas</Link> to
              compare ownership conditions, the{" "}
              <Link href="/global-travel">Global Travel</Link> section to
              prepare for routes and relocation, the{" "}
              <Link href="/lab">Dog Haven Group Lab</Link> for interactive
              planning, and the{" "}
              <Link href="/academy">Dog Haven Group Academy</Link> for long-form
              learning before moving into a local country site.
            </p>
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
          <p className="lead">
            Each gateway gives real global context before linking to the local
            Dog Haven country site. The country sites remain separate websites
            with their own local purpose.
          </p>
          <div
            className="country-strip"
            aria-label="Dog Haven country gateway slider"
          >
            <Link className="country-card" href={southAfrica.href}>
              <div className="country-card-media country-card-media-south-africa">
                <Image
                  src="/images/doghavengroup/visuals/south-africa-fynbos-rescue-dog.webp"
                  alt="A South African woman walking a tan rescue dog through coastal fynbos"
                  width={1774}
                  height={887}
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
                  src="/images/doghavengroup/visuals/united-states-waterfront-golden-retriever.webp"
                  alt="A couple walking a Golden Retriever beside a Pacific Northwest waterfront"
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
                  src="/images/doghavengroup/visuals/italy-square-whippet.webp"
                  alt="An older man walking a blue-grey Whippet through an Italian stone square"
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

      <section className="section owner-guidance-section">
        <div className="shell information-copy">
          <p className="eyebrow">Practical dog-owner guidance</p>
          <h2>Guidance for dog owners wherever life takes them</h2>
          <p>
            Thoughtful dog ownership begins before a dog comes home. Use the{" "}
            <Link href="/academy">Academy</Link> to think through daily
            routines, training, household agreement and long-term care, then use
            the practical tools in the <Link href="/lab">Lab</Link> to test
            budgets, readiness and travel assumptions without treating a result
            as a verdict.
          </p>
          <p>
            Care changes with age, health, climate, housing and family life.
            Plan safe exercise around the individual dog, know where appropriate
            veterinary help is available, and revisit routines when a puppy
            matures, a senior dog slows down or the household changes. The{" "}
            <Link href="/countries">Dog Haven country network</Link> provides
            local starting points where city rules, services and costs matter
            more than a global summary.
          </p>
          <p>
            International travel and relocation need an additional layer of
            preparation. Compare broader ownership conditions in the{" "}
            <Link href="/world-atlas/global-dog-ownership-index">
              Global Dog Ownership Index
            </Link>
            , organise a specific journey in the{" "}
            <Link href="/global-travel/dog-passport-planner">
              Passport Planner
            </Link>
            , and reopen the relevant government, veterinary and transport
            sources before making time-sensitive decisions.
          </p>
          <nav
            className="context-link-row"
            aria-label="Dog-owner planning resources"
          >
            <Link href="/academy">Ownership guidance</Link>
            <Link href="/lab">Planning tools</Link>
            <Link href="/world-atlas/global-dog-ownership-index">
              Compare countries
            </Link>
            <Link href="/global-travel/dog-passport-planner">Plan a route</Link>
          </nav>
        </div>
      </section>

      <section className="section editorial">
        <div className="shell">
          <div className="split">
            <div>
              <p className="eyebrow">Platform pathways</p>
              <h2>Start with the decision you are actually making.</h2>
              <p>
                Dog Haven Group is built around connected decisions, not
                isolated articles. A first-time owner may begin in{" "}
                <Link href="/academy">Academy</Link>, test assumptions in the{" "}
                <Link href="/lab">Lab</Link>, download a planning guide, then
                compare country conditions in the{" "}
                <Link href="/world-atlas">World Atlas</Link>. A family moving
                abroad may begin in{" "}
                <Link href="/global-travel">Global Travel</Link>, use the
                checklist tool, and then choose the right local country gateway.
              </p>
              <p>
                The site should feel like a global ownership system: editorial
                guidance, structured tools, printable resources, and country
                context all supporting one another.
              </p>
            </div>
            <div className="resource-panel">
              <span className="status-pill available">New download</span>
              <h3>The Dog Haven Group Global Dog Owner Starter Guide</h3>
              <p>
                A branded PDF for lifestyle fit, budgets, puppy preparation,
                travel, relocation, safety, and country-network next steps.
              </p>
              <Link href="/downloads/global-dog-owner-starter-guide">
                Open the guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-story-section">
        <div className="shell">
          <div className="home-story-heading">
            <div>
              <p className="eyebrow">Guidance through every life stage</p>
              <h2>Beautiful lives begin with practical preparation.</h2>
            </div>
            <p>
              Start with the decision in front of you, then move naturally
              between trusted guidance, planning tools and country context.
            </p>
          </div>
          <div className="home-story-grid">
            <Link className="home-story-card" href="/academy/first-time-dog-owner-guide">
              <Image src="/images/doghavengroup/visuals/academy-first-dog-puppy-plan.webp" alt="A young puppy sleeping while its new owners quietly prepare a first-month plan" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <span><small>First dog</small><strong>Prepare the home, budget and first month with confidence.</strong></span>
            </Link>
            <Link className="home-story-card" href="/academy/senior-dog-care">
              <Image src="/images/doghavengroup/visuals/academy-senior-black-labrador.webp" alt="A senior black Labrador resting comfortably beside its owner in a bright home" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <span><small>Senior years</small><strong>Protect comfort, routine and dignity as needs change.</strong></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Core sections</p>
            <h2>
              Built for comparison, travel, tools, learning, insight, and
              resources.
            </h2>
            <p>
              The first version of Dog Haven Group includes the{" "}
              <Link href="/world-atlas">World Atlas</Link>,{" "}
              <Link href="/global-travel">Global Travel</Link>,{" "}
              <Link href="/lab">Dog Haven Group Lab</Link>,{" "}
              <Link href="/academy">Dog Haven Group Academy</Link>,{" "}
              <Link href="/journal">Dog Haven Group Journal</Link>,{" "}
              <Link href="/downloads">Download Library</Link>,{" "}
              <Link href="/countries">Country Network</Link>, and{" "}
              <Link href="/doghaven-universe">Dog Haven Group Universe</Link>.
              This structure gives the site room to grow without creating thin
              pages or making the homepage behave like a generic blog index.
            </p>
            <p>
              The <Link href="/downloads">Download Library</Link> now begins
              with a real branded starter guide. The{" "}
              <Link href="/journal">Dog Haven Group Journal</Link> is positioned
              as a premium insights room for travel planning, safety guidance,
              network updates, and country spotlights. The Atlas and Travel
              sections provide the global frame, while the Lab turns decisions
              into usable planning tools.
            </p>
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
          <p className="lead">
            The Lab is where Dog Haven Group turns careful editorial thinking
            into calculators, quizzes, checklists, and future planning tools.
            Use it with the World Atlas, Global Travel, Academy guides, and
            downloads rather than treating a result as a final answer.
          </p>
          <ToolLinks />
        </div>
      </section>
    </>
  );
}
