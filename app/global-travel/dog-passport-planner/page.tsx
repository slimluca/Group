import Link from "next/link";
import { GlobalPassportPlanner } from "@/components/passport-planner/GlobalPassportPlanner";
import { jsonLd, pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

const path = "global-travel/dog-passport-planner";
const title = "Dog Passport Planner for International Travel | Dog Haven Group";
const description = "Build a personalised dog travel timeline, checklist and official-source plan for international trips or moving abroad with a dog.";

export const metadata = pageMetadata(title, description, path);

const faqs = [
  ["Is the Dog Haven Global Passport Planner an official pet passport?", "No. It is a planning and organisational tool; it cannot issue any legal travel document."],
  ["Does the planner replace government travel requirements?", "No. Current origin, destination and transit authorities remain the source of applicable requirements."],
  ["Does the planner confirm that my dog may enter a country?", "No. It organises research and questions but does not approve travel or guarantee entry."],
  ["Where is my plan saved?", "In the current browser only, using local browser storage."],
  ["Does Dog Haven Group receive my dog or journey information?", "No, not through this planner. The tool does not submit plan details to a server, database, account or external service."],
  ["Can I use the planner for permanent relocation?", "Yes, as an organisational starting point for research, veterinary questions, transport preparation and arrival planning."],
  ["Does completing every checklist item guarantee compliance?", "No. Checklist completion records planning progress, not legal compliance or acceptance by an authority or carrier."],
  ["Should I check requirements again before travelling?", "Yes. Reopen every relevant official source before booking and again before travel because rules, forms and carrier policies can change."]
];

export default function Page() {
  const url = `${site.url}/${path}`;
  return <>
    {jsonLd({ "@context": "https://schema.org", "@type": "WebPage", name: title, description, url, isPartOf: { "@type": "WebSite", name: site.name, url: site.url } })}
    {jsonLd({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Dog Haven Group", item: site.url },
      { "@type": "ListItem", position: 2, name: "Global Travel", item: `${site.url}/global-travel` },
      { "@type": "ListItem", position: 3, name: "Dog Haven Global Passport Planner", item: url }
    ] })}
    {jsonLd({ "@context": "https://schema.org", "@type": "WebApplication", name: "Dog Haven Global Passport Planner", applicationCategory: "TravelApplication", operatingSystem: "Any modern web browser", url, description, offers: undefined })}
    <section className="page-hero passport-planner-hero"><div className="shell"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/global-travel">Global Travel</Link><span aria-hidden="true">/</span><span>Passport Planner</span></nav><div className="page-hero-copy"><p className="eyebrow">International dog travel planning</p><h1>Dog Haven Global Passport Planner</h1><p className="lead">Plan an international journey or permanent move with a structured timeline, preparation checklist and direct links to official travel authorities. The Dog Haven Global Passport Planner helps organise questions and tasks but does not issue a pet passport, approve travel or replace current government, veterinary, airline or transport requirements.</p></div></div></section>
    <section className="section editorial"><div className="shell"><GlobalPassportPlanner /></div></section>
    <section className="section"><div className="shell editorial-reading"><h2>How to plan international travel with a dog</h2><p>Begin with the official authority for the destination, then separate origin-country preparation from destination-country entry questions. International dog travel can involve different authorities, forms, timing windows and transport providers, so enough lead time matters even when the route initially looks straightforward.</p><p>Use the dog passport planner to organise research rather than to infer rules. Involve an appropriate veterinarian, check every operating carrier directly, investigate transit countries, and prepare for arrival. Temporary travel also needs a return plan researched before departure; permanent international dog relocation needs accommodation, local transport, food continuity and veterinary support after arrival.</p><p>Use the <Link href="/world-atlas/global-dog-ownership-index">Global Dog Ownership Index</Link> for broader country context before planning a route. Index scores do not determine travel eligibility.</p>
      <h2>Documents dog owners may need to investigate</h2><p>Applicable pet travel documents vary by route and individual circumstances. Identification and microchip records, vaccination records, laboratory results, veterinary certificates, import permits, export endorsements, owner declarations, airline documents or transit-country documents may be required. Whether a category applies depends on the route, timing, purpose and dog.</p><p>Do not treat this list as universal. Confirm through the official authority which records apply, who may complete them, what format is accepted, and when they must be issued or endorsed.</p>
      <h2>Planning flights, ferries, road journeys and mixed routes</h2><p>Transport preparation is separate from government entry research. Airlines and ferry operators can set carrier-specific policies, crate requirements, seasonal restrictions, handling arrangements and approved routes where applicable. Connections may introduce transit-country rules even when the dog does not formally enter that country.</p><p>Confirm the full itinerary with every operator, plan ground transport after arrival, and keep a backup route for disruption. A mixed route should be checked as one connected journey rather than as unrelated bookings.</p>
      <h2>Preparing your dog for the journey</h2><p>An appropriate veterinary consultation can help owners frame dog-specific welfare questions without turning a website checklist into medical advice. Begin crate acclimatisation gradually where relevant, protect familiar routines, prepare identification and emergency information, and ask sensible water, feeding and journey questions well before departure.</p><p>The planner does not give medication or sedation instructions and cannot assess medical suitability for a journey. Avoid last-minute preparation, especially when the dog has little crate experience or the itinerary involves long transfers.</p>
      <h2>Planning the first days after arrival</h2><p>Pre-arrange suitable arrival transport and dog-friendly accommodation. Research a calm first walking area, likely climate conditions, food availability, routine continuity and nearby veterinary contacts. Allow recovery time rather than filling the first days with unnecessary movement.</p><p>Food transition planning and a familiar routine can reduce avoidable disruption, but any health concern after travel belongs with an appropriate veterinary professional.</p>
      <h2>Why official requirements must be checked again</h2><p>Government rules, forms and administrative processes can change after a plan is created. Airlines and other carriers may add operational conditions, and transit countries may apply separate requirements. Reopen the relevant official pages before booking and again shortly before travel.</p><p>A saved plan, printed checklist or completed progress bar is not proof of compliance. This planner does not replace official requirements.</p>
    </div></section>
    <section className="section editorial"><div className="shell editorial-reading"><p className="eyebrow">Frequently asked questions</p><h2>About the Dog Haven Global Passport Planner</h2><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
  </>;
}
