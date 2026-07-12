import Link from "next/link";
import type { AcademyTopic } from "@/data/academy";

export function AcademyTopicPage({ topic }: { topic: AcademyTopic }) {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="page-hero-copy">
            <p className="eyebrow">{topic.eyebrow}</p>
            <h1>{topic.hero}</h1>
            <p className="lead">{topic.description}</p>
          </div>
        </div>
      </section>
      {topic.sections.map((section, index) => (
        <section className={`section ${index % 2 === 0 ? "editorial" : ""}`} key={section.title}>
          <div className="shell split">
            <div>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="panel">
              <p className="eyebrow">Planning checklist</p>
              <ul className="result-list">
                {section.checklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
      ))}
      <section className="section">
        <div className="shell">
          <p className="eyebrow">Continue planning</p>
          <h2>Use this guide with the wider Dog Haven Group platform.</h2>
          <div className="actions">
            {topic.links.map((link) => <Link className="button" href={link.href} key={link.href}>{link.label}</Link>)}
            <Link className="button secondary" href="/academy">Back to Academy</Link>
          </div>
        </div>
      </section>
    </>
  );
}
