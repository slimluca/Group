import Image from "next/image";
import Link from "next/link";
import { WorldDogStory } from "@/data/world-dog-stories";

export function WorldDogStoryPage({ story }: { story: WorldDogStory }) {
  return (
    <>
      <section className="world-story-hero">
        <Image className="world-story-hero-image" src={story.hero.src} alt={story.hero.alt} fill priority sizes="100vw" />
        <span className="world-story-hero-wash" aria-hidden="true" />
        <div className="shell world-story-hero-inner">
          <div className="world-story-hero-copy">
            <p className="eyebrow">{story.eyebrow}</p>
            <h1>{story.title}</h1>
            <p className="lead">{story.description}</p>
            <div className="hero-actions">
              <Link className="button" href="/world-atlas/dogs-of-the-world">Explore all country stories</Link>
              <Link className="button secondary" href="/academy/first-time-dog-owner-guide">Open the owner guide</Link>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="section world-story-intro">
          <div className="shell world-story-intro-grid">
            <div className="editorial-copy">
              <p className="eyebrow">The country and the dog</p>
              <h2>Breed history becomes useful when it changes the ownership decision.</h2>
              {story.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <aside className="world-story-facts">
              <p className="eyebrow">At a glance</p>
              <dl>
                {story.quickFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
              </dl>
            </aside>
          </div>
        </section>

        <section className="section world-story-breed">
          <div className="shell world-story-breed-grid">
            <div className="world-story-breed-label"><span>01</span><p className="eyebrow">Breed story</p><h2>{story.breed}</h2><p>Origin: {story.breedOrigin}</p></div>
            <div className="editorial-copy">{story.breedStory.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>

        {story.sections.map((section, index) => (
          <section className={`section world-story-section ${index % 2 === 1 ? "world-story-section-dark" : ""}`} key={section.title}>
            <div className="shell world-story-section-grid">
              <div className="world-story-section-number">0{index + 2}</div>
              <div className="editorial-copy"><p className="eyebrow">{story.country} ownership planning</p><h2>{section.title}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </div>
          </section>
        ))}

        <section className="section world-story-sources">
          <div className="shell world-story-source-grid">
            <div className="editorial-copy">
              <p className="eyebrow">Continue researching</p>
              <h2>Use this story as a map, then verify the details that can change.</h2>
              <p>Breed history and general ownership guidance can help a reader ask better questions. Laws, entry rules, transport policies, prices and health decisions need current official or professional confirmation for the exact dog, household and route.</p>
              <div className="compact-actions"><Link className="button" href="/global-travel/dog-passport-planner">Plan international travel</Link><Link className="button secondary" href="/world-atlas/global-dog-ownership-index">Compare countries</Link></div>
            </div>
            <aside><p className="eyebrow">Sources used for orientation</p><ol>{story.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ol></aside>
          </div>
        </section>
      </main>
    </>
  );
}
