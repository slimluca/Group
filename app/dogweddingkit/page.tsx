import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { jsonLd, pageMetadata } from "@/lib/metadata";

const showcaseImage = {
  url: "/images/doghavengroup/dog-wedding-kit/golden-dog-wedding-chaperone-hero.webp",
  width: 1536,
  height: 1024,
  alt: "Golden retriever beside a dog wedding chaperone at an elegant venue",
};

export const metadata: Metadata = pageMetadata(
  "Dog Wedding Kit | Dog Haven Group Project",
  "Explore Dog Wedding Kit, a premium business and operations system for professionals building a dog wedding chaperone service.",
  "dogweddingkit",
  showcaseImage,
);

export default function DogWeddingKitShowcasePage() {
  return (
    <>
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "Dog Wedding Kit",
        description:
          "A business and operations system for professionals building a dog wedding chaperone service.",
        url: "https://dogweddingkit.com",
        image: `https://doghavengroup.com${showcaseImage.url}`,
        creator: { "@type": "Organization", name: "Sites by Luca", url: "https://sitesbyluca.com" },
        isPartOf: { "@type": "WebSite", name: "Dog Haven Group", url: "https://doghavengroup.com" },
      })}
      <section className="dwk-showcase-hero">
        <Image
          className="dwk-showcase-hero-image"
          src={showcaseImage.url}
          alt={showcaseImage.alt}
          fill
          priority
          sizes="100vw"
        />
        <div className="dwk-showcase-hero-wash" aria-hidden="true" />
        <div className="shell dwk-showcase-hero-inner">
          <div className="dwk-showcase-hero-copy">
            <p className="eyebrow">A project by Sites by Luca</p>
            <h1>Dog Wedding Kit</h1>
            <p className="lead">
              A beautiful, practical business system for professionals who help
              couples include their dogs in the wedding day.
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href="https://dogweddingkit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Dog Wedding Kit <span aria-hidden="true">↗</span>
              </a>
              <Link className="button secondary" href="/contact">
                Discuss a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dwk-showcase-intro">
        <div className="shell dwk-showcase-intro-grid">
          <div className="editorial-copy">
            <p className="eyebrow">The idea</p>
            <h2>Turning a specialist service into a confident business.</h2>
            <p>
              Dog Wedding Kit was created for experienced dog walkers, pet
              sitters, trainers, groomers, boarding professionals and other
              pet-care specialists who want to build a thoughtful wedding-day
              service around the dogs they already know how to care for.
            </p>
            <p>
              The platform brings the commercial, client, safety, planning and
              marketing pieces into one connected system. It is designed to
              make the service easier to understand, easier to deliver and more
              professional from the first enquiry through to the wedding-day
              handover.
            </p>
          </div>
          <aside className="dwk-showcase-note">
            <span className="eyebrow">Project focus</span>
            <strong>Plan · manage · grow</strong>
            <p>
              A clear digital product experience supported by useful resources,
              practical tools and calm editorial guidance.
            </p>
          </aside>
        </div>
      </section>

      <section className="section dwk-showcase-feature dwk-showcase-feature-paper">
        <div className="shell dwk-showcase-feature-grid">
          <div className="dwk-showcase-feature-image">
            <Image
              src="/images/doghavengroup/dog-wedding-kit/dog-wedding-chaperone-walking-irish-setter-at-venue.webp"
              alt="Dog wedding chaperone walking an Irish setter through an elegant wedding venue"
              width={1536}
              height={1024}
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">Built around the real work</p>
            <h2>From first download to wedding-day handover.</h2>
            <p>
              The experience is structured around the decisions a real service
              provider has to make: defining packages, pricing the work,
              understanding client expectations, gathering dog and venue
              details, preparing safety plans and presenting the service with
              clarity.
            </p>
            <div className="dwk-showcase-list">
              <div><span>01</span><strong>Business foundations</strong><p>Shape the offer, audience, positioning and launch plan.</p></div>
              <div><span>02</span><strong>Client resources</strong><p>Make enquiries, information gathering and communication more consistent.</p></div>
              <div><span>03</span><strong>Wedding-day systems</strong><p>Prepare the dog, couple, venue, schedule and handover with care.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dwk-showcase-feature dwk-showcase-feature-dark">
        <div className="shell dwk-showcase-feature-grid dwk-showcase-feature-grid-reverse">
          <div className="dwk-showcase-feature-image">
            <Image
              src="/images/doghavengroup/dog-wedding-kit/dwk-wedding-business-planning.webp"
              alt="Professional planning a dog wedding service with a golden retriever beside her at a floral wedding venue"
              width={1672}
              height={941}
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">A considered product experience</p>
            <h2>Useful resources with a warm, premium presentation.</h2>
            <p>
              Dog Wedding Kit combines editable documents, fillable PDFs,
              print-ready editions, workbooks and pricing support in a product
              that feels approachable without losing professional detail. The
              visual language keeps the emotional side of weddings present while
              giving the business side room to be taken seriously.
            </p>
            <a
              className="text-link"
              href="https://dogweddingkit.com/product"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore what is included <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section dwk-showcase-closing">
        <div className="shell dwk-showcase-closing-grid">
          <div>
            <p className="eyebrow">See the finished project</p>
            <h2>A specialist website with a clear reason to exist.</h2>
            <p>
              Visit Dog Wedding Kit to explore the complete product, compare the
              available kits and see how a focused niche idea can become a
              useful, distinctive digital business.
            </p>
            <a
              className="button primary"
              href="https://dogweddingkit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit dogweddingkit.com <span aria-hidden="true">↗</span>
            </a>
          </div>
          <Image
            src="/images/doghavengroup/dog-wedding-kit/dwk-bride-and-dog-portrait.webp"
            alt="Smiling bride embracing her golden retriever among wedding flowers"
            width={941}
            height={841}
            sizes="(max-width: 800px) 100vw, 44vw"
          />
        </div>
      </section>
    </>
  );
}
