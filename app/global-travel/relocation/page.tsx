import Link from "next/link";
import { jsonLd, pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

const path = "global-travel/relocation";
const title = "Global Dog Relocation Centre | Dog Haven Group";
const description =
  "Plan an international move with a dog using calm relocation guidance for route research, documents, transport, crates, departure, transit, arrival and settling in.";

const planningSections = [
  {
    title: "Where to begin",
    body:
      "Start by separating the move into decisions you control and requirements you must verify. Your controllable plan includes budget, accommodation, transport choices, crate preparation, dog routines and arrival support. Verified requirements belong with current official authorities, airlines, transport providers and appropriate veterinary professionals."
  },
  {
    title: "Route and destination research",
    body:
      "Treat the route as origin, destination, transit and carrier research, not as one simple country-to-country question. A destination may have one set of entry rules, the origin may have export or endorsement steps, and a transit country or operating carrier can add separate conditions."
  },
  {
    title: "Dog health preparation",
    body:
      "Book a planning conversation with an appropriate veterinarian early enough to discuss the individual dog, the intended route and any records or checks that may be relevant. Dog Haven Group cannot assess travel fitness, prescribe medication or confirm health requirements."
  },
  {
    title: "Identification and document planning",
    body:
      "Create a route file for identification details, vaccination records, veterinary records, certificates, permits, owner declarations, carrier confirmations and arrival contacts. Required documents vary by route, purpose, dog history and timing, so the document list must be confirmed from current sources."
  },
  {
    title: "Airline and transport preparation",
    body:
      "Transport planning is separate from legal entry research. Confirm every operating airline, ferry, rail provider, pet transport service and ground transfer directly. Ask about acceptance, routing, handling, crate or carrier expectations, seasonal limits and what happens if the itinerary changes."
  },
  {
    title: "Crate preparation overview",
    body:
      "Where a crate or carrier is needed, preparation should begin as a calm training process rather than a last-minute equipment purchase. Check the carrier's current specification, measure carefully, practise gradually and avoid using the first travel day as the dog's first serious crate experience."
  },
  {
    title: "Departure planning",
    body:
      "The final departure stage should include source rechecks, document review, identification checks, carrier reconfirmation, emergency contacts, food and water planning, weather review and a backup communication plan. A printed or copied checklist is useful, but it is not proof of compliance."
  },
  {
    title: "Transit planning",
    body:
      "Connections can create practical and regulatory questions. Confirm whether a transit country, airport, ferry port or transfer provider has any applicable rules, where the dog will be handled, and what support exists if a delay changes the route."
  },
  {
    title: "Arrival planning",
    body:
      "Arrange dog-friendly accommodation, suitable onward transport, a calm first walking area, food continuity and nearby veterinary contacts before departure. Arrival should be treated as part of the relocation, not as the end of the plan."
  },
  {
    title: "Settling a dog into a new country",
    body:
      "After arrival, protect routine before adding novelty. Keep walks simple, watch for stress, locate local veterinary support, confirm local ownership expectations and give the dog time to learn the new home, sounds, climate and daily rhythm."
  },
  {
    title: "Common planning mistakes",
    body:
      "Common mistakes include relying on old forum posts, checking only the destination, booking transport before verifying acceptance, underestimating crate preparation, ignoring transit questions, leaving documents scattered and assuming arrival will be easy once the flight or road journey is complete."
  },
  {
    title: "Official-source reminder",
    body:
      "This centre organises planning. It does not publish current legal requirements for every route, approve travel, guarantee entry, replace an airline or carrier policy, or replace veterinary advice. Reopen official sources before booking and again before departure."
  }
];

const linkedResources = [
  {
    href: "/global-travel/dog-passport-planner",
    title: "Passport Planner",
    text: "Build a private browser-saved route plan with timeline phases, official-source prompts and checklist progress."
  },
  {
    href: "/global-travel/relocation-timeline",
    title: "Relocation Timeline",
    text: "Choose an approximate departure window and work through staged planning tasks with local progress saving."
  },
  {
    href: "/global-travel/document-planning",
    title: "Document Planning",
    text: "Organise document categories, private notes and a copyable summary without uploading files."
  },
  {
    href: "/global-travel/moving-abroad-with-a-dog",
    title: "Moving Abroad With a Dog",
    text: "Read the existing long-form relocation guide for broader household and route preparation."
  },
  {
    href: "/global-travel/route-guides",
    title: "Route Guides",
    text: "Use the route research framework to keep origin, destination, transit and carrier questions separate."
  },
  {
    href: "/lab/dog-travel-checklist",
    title: "Dog Travel Checklist",
    text: "Generate a practical checklist for domestic trips, international travel or moving abroad."
  }
];

export const metadata = pageMetadata(title, description, path);

export default function Page() {
  const url = `${site.url}/${path}`;

  return (
    <>
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url,
        isPartOf: { "@type": "WebSite", name: site.name, url: site.url }
      })}
      {jsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Dog Haven Group", item: site.url },
          { "@type": "ListItem", position: 2, name: "Global Travel", item: `${site.url}/global-travel` },
          { "@type": "ListItem", position: 3, name: "Global Dog Relocation Centre", item: url }
        ]
      })}
      <section className="page-hero">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/global-travel">Global Travel</Link>
            <span aria-hidden="true">/</span>
            <span>Relocation</span>
          </nav>
          <div className="page-hero-copy">
            <p className="eyebrow">Global dog relocation planning</p>
            <h1>Global Dog Relocation Centre</h1>
            <p className="lead">
              Organise an international move with a dog from early research to
              arrival routines. This centre is a planning gateway, not a source
              of route-specific legal approval or current carrier rules.
            </p>
          </div>
        </div>
      </section>
      <main>
        <section className="section editorial">
          <div className="shell relocation-layout">
            <div className="editorial-reading">
              <h2>Build the relocation plan before the bookings</h2>
              <p>
                A good dog relocation plan keeps the route, the dog, the
                documents, the transport and the first weeks after arrival in
                view at the same time. The goal is not to memorise every rule
                from a general guide. The goal is to know which questions must
                be answered by current official sources and which practical
                preparations belong in the household plan.
              </p>
              <p>
                Use this page as the central overview, then move into the
                browser-based timeline, document checklist and Passport Planner
                when your move becomes more specific.
              </p>
            </div>
            <aside className="panel relocation-start-panel">
              <p className="eyebrow">Start here</p>
              <h2>Three practical planning steps</h2>
              <ol>
                <li>Define the origin, destination, likely route and travel window.</li>
                <li>Open current official, carrier and veterinary sources for that route.</li>
                <li>Track documents, transport, crate preparation, arrival and settling-in tasks.</li>
              </ol>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <p className="eyebrow">Relocation planning areas</p>
            <h2>Work through the move in connected stages.</h2>
            <div className="relocation-topic-grid">
              {planningSections.map((section) => (
                <article className="nav-card" key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section editorial">
          <div className="shell">
            <p className="eyebrow">Relocation tools and next steps</p>
            <h2>Move from overview to a working plan.</h2>
            <div className="grid tool-grid">
              {linkedResources.map((resource) => (
                <Link className="nav-card" href={resource.href} key={resource.href}>
                  <h3>{resource.title}</h3>
                  <p>{resource.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
