import Link from "next/link";
import Image from "next/image";
import type { AcademyTopic } from "@/data/academy";

export function AcademyTopicPage({ topic }: { topic: AcademyTopic }) {
  return (
    <>
      <section className="page-hero">
        <Image
          className="academy-topic-hero-image"
          src={topic.image.src}
          alt={topic.image.alt}
          fill
          priority
          sizes="100vw"
        />
        <span className="academy-topic-hero-overlay" aria-hidden="true" />
        <div className="shell">
          <div className="page-hero-copy">
            <p className="eyebrow">{topic.eyebrow}</p>
            <h1>{topic.hero}</h1>
            <p className="lead">{topic.description}</p>
          </div>
        </div>
      </section>
      {topic.sections.map((section, index) => (
        <div key={section.title}>
          <section
            className={`section content-section academy-guide-section ${index % 2 === 0 ? "editorial" : ""}`}
          >
            <div className="shell split">
              <div className="editorial-copy">
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="panel">
                <p className="eyebrow">Planning checklist</p>
                <ul className="result-list">
                  {section.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          {index === 0 ? (
            <figure className="academy-image-break shell">
              <div className="academy-image-break-media">
                <Image
                  src={topic.supportImage.src}
                  alt={topic.supportImage.alt}
                  fill
                  sizes="(max-width: 760px) 92vw, 1200px"
                />
              </div>
              <figcaption>{topic.supportImage.caption}</figcaption>
            </figure>
          ) : null}
        </div>
      ))}
      <section className="section">
        <div className="shell full-copy">
          <p className="eyebrow">Related ownership guidance</p>
          <h2>Use this guide with the wider Dog Haven Group platform.</h2>
          <div className="actions">
            {topic.links.map((link) => (
              <Link className="button" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="button secondary" href="/academy">
              Back to Academy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
