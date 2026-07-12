export type ImageRef = { src: string; alt: string; caption?: string };
export type LinkRef = { href: string; label: string; text: string };
export type Section = { eyebrow?: string; title: string; body: string[]; links?: LinkRef[]; image?: ImageRef };
export type PageContent = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  hero: string;
  heroImage: ImageRef;
  sections: Section[];
  table?: { columns: string[]; rows: string[][] };
};

export const countries = [
  {
    name: "Dog Haven South Africa",
    href: "/south-africa",
    external: "https://doghaven.co.za",
    anchor: "explore Dog Haven South Africa",
    image: "/images/doghavengroup/countries/south-africa-global-dog-owners.svg",
    summary:
      "A local Dog Haven site for South African dog owners, connected to the global network for travel, planning, ownership education, and future route guidance."
  },
  {
    name: "Dog Haven USA",
    href: "/united-states",
    external: "https://doghaven.us",
    anchor: "visit the Dog Haven USA guide",
    image: "/images/doghavengroup/countries/united-states-dog-ownership-network.svg",
    summary:
      "A Dog Haven USA resource built for a large, varied ownership landscape, from apartment planning and family dogs to travel and cost awareness."
  },
  {
    name: "Dog Haven Italy",
    href: "/italy",
    external: "https://doghaven.it",
    anchor: "read the Dog Haven Italy resources",
    image: "/images/doghavengroup/countries/italy-dog-friendly-living.svg",
    summary:
      "A local Dog Haven Italy site shaped around city living, travel, public space culture, and the practical realities of owning a dog in Italy."
  }
];

export const futureCountries = ["United Kingdom", "Australia", "Canada", "New Zealand", "Ireland", "Germany", "France", "Spain"];

export const pages: Record<string, PageContent> = {
  "south-africa": {
    slug: "south-africa",
    title: "Dog Haven South Africa | Global Country Gateway",
    description:
      "A premium Dog Haven Group gateway explaining how Dog Haven South Africa fits into the global network for dog owners, travel planning, costs, and local ownership guidance.",
    eyebrow: "Country gateway",
    hero: "Dog Haven South Africa connects local dog ownership decisions with the wider global Dog Haven network.",
    heroImage: { src: "/images/doghavengroup/countries/south-africa-global-dog-owners.svg", alt: "A premium editorial scene representing South African dog owners connected to global Dog Haven planning." },
    sections: [
      {
        title: "A local site inside a global ownership system",
        body: [
          "Dog Haven South Africa serves a distinct local audience while Dog Haven Group provides the wider international framework. South African dog owners often need practical guidance that is rooted in local living conditions, local services, seasonal weather, city patterns, housing realities, and the everyday cost of responsible care. The role of this gateway is to explain that relationship clearly before sending readers to the local site.",
          "Within the broader Dog Haven network, South Africa is also an important travel and relocation reference point. Families may be preparing to move with a dog, comparing paperwork requirements, or trying to understand how a dog care budget changes when life crosses borders. Dog Haven Group connects those questions to the <a href=\"/global-travel\">Global Travel</a>, <a href=\"/world-atlas\">World Atlas</a>, and <a href=\"/lab/global-dog-cost-calculator\">Global Dog Cost Calculator</a> sections."
        ],
        image: { src: "/images/doghavengroup/countries/south-africa-country-overview.svg", alt: "South African dog ownership planning shown with city, coast, and household context." },
        links: [{ href: "https://doghaven.co.za", label: "Explore Dog Haven South Africa", text: "Open the local Dog Haven South Africa site for country-specific resources." }]
      },
      {
        title: "What the South African site helps with",
        body: [
          "The local country site can focus on South African ownership situations in a way a global parent site should not flatten. That may include local buying and adoption considerations, puppy planning, safety awareness, seasonal care, travel within the region, and the different expectations of urban, suburban, and more rural dog households.",
          "Dog Haven Group remains the global layer: it compares ownership patterns across countries, builds planning tools, develops route-guide methodology, and keeps readers oriented when dog ownership touches international travel, relocation, or multi-country decisions. Readers who need local detail should <a href=\"https://doghaven.co.za\">explore Dog Haven South Africa</a>; readers comparing countries should continue through the global sections."
        ]
      }
    ]
  },
  "united-states": {
    slug: "united-states",
    title: "Dog Haven USA | Global Country Gateway",
    description:
      "A Dog Haven Group country gateway for the United States, explaining how the Dog Haven USA site supports local dog owners inside the global network.",
    eyebrow: "Country gateway",
    hero: "Dog Haven USA brings a major dog ownership market into the Dog Haven global planning network.",
    heroImage: { src: "/images/doghavengroup/countries/united-states-dog-ownership-network.svg", alt: "A refined United States dog ownership network illustration with city and family planning cues." },
    sections: [
      {
        title: "A large and varied ownership landscape",
        body: [
          "The United States is not one simple dog ownership market. Climate, housing, city design, public-space access, transport choices, insurance habits, training culture, and family routines can vary dramatically from one state or city to another. Dog Haven Group treats the United States as an essential local pillar while keeping the global site focused on comparison, planning structure, and cross-border ownership intelligence.",
          "For people preparing to own a dog in the United States, the Dog Haven USA site can explore practical everyday guidance. For people comparing the United States with Italy, South Africa, or a future Dog Haven country, the global site provides the broader lens through the <a href=\"/world-atlas/global-dog-ownership-index\">Global Dog Ownership Index framework</a> and the <a href=\"/academy/first-time-dog-owner-guide\">first-time owner guide</a>."
        ],
        image: { src: "/images/doghavengroup/countries/united-states-city-dog-living.svg", alt: "United States city dog living shown with apartment, park, travel, and cost planning elements." },
        links: [{ href: "https://doghaven.us", label: "Visit Dog Haven USA", text: "Open the Dog Haven USA website for country-specific material." }]
      },
      {
        title: "How the gateway should be used",
        body: [
          "This gateway is a global orientation page that helps readers understand why a local United States resource exists, what questions belong on the local site, and which questions are better handled at the group level. Local details belong on doghaven.us; global comparison, travel planning, and multi-country ownership decisions belong on DogHavenGroup.com.",
          "If a reader is deciding whether a dog fits their lifestyle, they can start with the <a href=\"/lab/breed-fit-quiz\">Breed Fit Quiz</a>. If they are preparing for costs, the calculator provides planning ranges rather than official prices. If they are relocating, the <a href=\"/global-travel/moving-abroad-with-a-dog\">moving abroad guide</a> explains how to organize the process before checking official sources."
        ]
      }
    ]
  },
  italy: {
    slug: "italy",
    title: "Dog Haven Italy | Global Country Gateway",
    description:
      "A Dog Haven Group gateway for Italy, connecting Italian dog ownership resources with global travel, ownership planning, and future country comparison.",
    eyebrow: "Country gateway",
    hero: "Dog Haven Italy gives the network a local lens on city living, travel culture, and responsible dog ownership in Italy.",
    heroImage: { src: "/images/doghavengroup/countries/italy-dog-friendly-living.svg", alt: "A premium Italian dog ownership scene with city streets, travel notes, and family planning details." },
    sections: [
      {
        title: "Italy in the Dog Haven network",
        body: [
          "Italy is a meaningful country gateway because dog ownership often intersects with compact city living, apartment routines, regional travel, public-space etiquette, and the practical work of planning around transport and accommodation. Dog Haven Italy can speak to those local realities while Dog Haven Group keeps the wider international structure coherent.",
          "For readers comparing Italy with South Africa, the United States, or a future Dog Haven country, this page provides context rather than pretending to be a complete local guide. Global readers can use the <a href=\"/global-travel/route-guides\">Route Guides hub</a>, <a href=\"/downloads\">Download Library</a>, and <a href=\"/world-atlas/dog-ownership-costs-by-country\">costs by country guide</a> before moving into country-specific material."
        ],
        image: { src: "/images/doghavengroup/countries/italy-apartment-and-travel-dogs.svg", alt: "Dog ownership in Italy represented through apartment living, trains, streets, and travel planning." },
        links: [{ href: "https://doghaven.it", label: "Read Dog Haven Italy resources", text: "Open the local Dog Haven Italy site for country-specific resources." }]
      },
      {
        title: "Local insight with global context",
        body: [
          "A global dog ownership platform should not erase local nuance. Italy may raise questions about urban walking routines, rentals, holiday travel, veterinary planning, and how a dog fits into a household that may move between cities or regions. Those are better served through a dedicated Italian site than by forcing every reader through a single global article.",
          "Dog Haven Group supports that local work by creating shared planning tools, honest methodology, and a consistent editorial standard across the network. Readers can move between the Italian site and group-level guidance without confusion about which source is designed for which job."
        ]
      }
    ]
  },
  "world-atlas": {
    slug: "world-atlas",
    title: "Dog Ownership by Country & World Atlas | Dog Haven Group",
    description:
      "Compare dog ownership by country with global planning guidance on costs, travel friction, housing, climate, city life, and the Dog Haven Group index framework.",
    eyebrow: "Dog Haven Group World Atlas",
    hero: "A global reference point for comparing dog ownership conditions across countries without pretending every household has the same reality.",
    heroImage: { src: "/images/doghavengroup/home/world-atlas-premium-map.svg", alt: "A premium world atlas map for global dog ownership planning." },
    sections: [
      {
        title: "Dog ownership by country",
        body: [
          "The World Atlas is Dog Haven Group's long-term structure for understanding how dog ownership changes across borders. It will help readers compare housing expectations, access to public space, climate considerations, transport friction, veterinary planning, cost pressure, and the everyday rhythm of keeping a dog healthy and safe in different countries.",
          "Rather than inventing official rankings before the evidence base is ready, Dog Haven Group begins with transparent methodology. The <a href=\"/world-atlas/global-dog-ownership-index\">Global Dog Ownership Index</a> explains how future scoring will be organized, while the <a href=\"/world-atlas/dog-ownership-costs-by-country\">costs by country guide</a> helps readers think in planning ranges."
        ],
        image: { src: "/images/doghavengroup/countries/global-country-comparison.svg", alt: "Country comparison panels for dog ownership costs, laws, public space, and climate." }
      },
      {
        title: "Costs, laws, cities, climate, and future expansion",
        body: [
          "Useful country comparison requires care. Dog laws can change, travel requirements can shift, and cost estimates become misleading when they ignore city, dog size, health status, food choice, insurance decisions, and lifestyle. Dog Haven Group will use official-source reminders on changing legal and travel topics, and it will avoid presenting estimates as fixed universal facts.",
          "The World Atlas also prepares the network for future country sites including the United Kingdom, Australia, Canada, New Zealand, Germany, France, Spain, Ireland, and more. Those future pages should be launched only when they can provide real value, not as thin pages created simply to target country names."
        ]
      },
      {
        title: "How local sites fit the global atlas",
        body: [
          "The local Dog Haven sites are not competitors to the World Atlas. They are the places where country-level ownership reality can become specific, while the Atlas keeps the comparison layer coherent. A reader may begin with <a href=\"/south-africa\">South Africa</a>, <a href=\"/united-states\">the United States</a>, or <a href=\"/italy\">Italy</a>, then return to the Atlas to compare cost pressure, travel friction, climate, city design, and first-time owner suitability.",
          "As the network grows, Dog Haven Group should expand country comparison only when the research, source reminders, and local editorial purpose are strong enough. The <a href=\"/downloads/global-dog-owner-starter-guide\">Global Dog Owner Starter Guide</a>, <a href=\"/global-travel\">Global Travel</a>, and <a href=\"/lab\">Dog Haven Group Lab</a> give readers practical next steps while the data layer matures."
        ]
      },
      {
        title: "Compare the household and the location together",
        body: [
          "Country information becomes useful only when it is matched to the household and the dog. Renters may need to investigate permission, deposits, building access, noise expectations, and the supply of suitable homes. Families may prioritise safe daily routes and support networks. Owners of large, senior, heat-sensitive, or high-energy dogs may interpret the same city very differently.",
          "City and rural comparisons also require nuance. Dense neighbourhoods can provide walkability, services, and transport while creating smaller homes, busier streets, and rental pressure. Rural areas can offer space while increasing travel time to veterinary care, training, supplies, secure exercise areas, or emergency help. The Atlas should make those trade-offs visible rather than naming a universal winner."
        ]
      },
      {
        title: "Treat changing information differently from stable context",
        body: [
          "Climate patterns, housing structure, and city form can provide broad context, but laws, entry rules, transport policies, fees, and service availability may change quickly. A useful comparison tells the reader which facts need a current official check and which points are general planning considerations. Publication dates and source dates matter when action depends on the answer.",
          "Use the Atlas to build a shortlist of questions, then verify local detail through the relevant country gateway, authority, provider, or professional. For international movement, continue to <a href=\"/global-travel\">Global Travel</a>; for broad budget scenarios, use the <a href=\"/lab/global-dog-cost-calculator\">cost calculator</a>."
        ]
      }
    ],
    table: {
      columns: ["Atlas area", "What it compares", "Current approach"],
      rows: [
        ["Dog ownership costs by country", "Food, routine care, grooming, insurance, training, and contingency planning.", "Planning ranges and methodology, linked to the calculator."],
        ["Dog laws by country", "Registration, public space rules, housing restrictions, travel entry requirements, and local obligations.", "Careful editorial framing with official-source reminders."],
        ["Best countries for dog owners", "Friendliness, access, climate, housing suitability, cost pressure, and travel friction.", "Framework only until evidence can support defensible comparisons."],
        ["Dog friendly cities worldwide", "Apartment fit, parks, transport, walking culture, vet access, and public-space norms.", "Future city intelligence layer."],
        ["Dog climate and safety by country", "Heat, cold, parasites, seasonal events, emergency planning, and routine adaptation.", "Guidance concepts without veterinary claims."]
      ]
    }
  },
  "global-dog-ownership-index": {
    slug: "world-atlas/global-dog-ownership-index",
    title: "Global Dog Ownership Index Methodology | Dog Haven Group",
    description:
      "Dog Haven Group's Global Dog Ownership Index methodology explains future scoring categories without fake rankings, statistics, or unsupported claims.",
    eyebrow: "Index methodology",
    hero: "The Global Dog Ownership Index is a transparent framework for future country comparison, not a fake league table.",
    heroImage: { src: "/images/doghavengroup/countries/global-ownership-index-framework.svg", alt: "A refined scoring framework for future Dog Haven global dog ownership comparisons." },
    sections: [
      {
        title: "Why the index starts with methodology",
        body: [
          "Dog ownership quality cannot be measured responsibly by one headline score. A country might be affordable but difficult for renters, welcoming in public spaces but challenging for heat-sensitive dogs, or excellent for families while complicated for international relocation. Dog Haven Group is building the index as a framework first so that future scoring can be explained, challenged, improved, and updated.",
          "The current framework does not claim official rankings. It explains the categories Dog Haven Group would evaluate only when reliable country research, official-source review, and local editorial validation can support a responsible public index."
        ],
        image: { src: "/images/doghavengroup/lab/index-score-dials.svg", alt: "Index score dials for dog friendliness, cost, climate, travel, and public access." }
      },
      {
        title: "Scoring categories",
        body: [
          "The index framework includes dog friendliness, monthly ownership cost level, apartment suitability, travel difficulty, climate risk, public space access, first-time owner suitability, family dog suitability, paperwork complexity, and vet access planning. Each category is designed to encourage better questions rather than simplistic winners and losers.",
          "Future index releases should explain sources, assumptions, uncertainty, and update cycles. Where laws, import rules, or health requirements are involved, readers must be reminded to check current official government and veterinary sources."
        ]
      },
      {
        title: "What the index will not do",
        body: [
          "The index will not invent exact rankings before the evidence supports them, and it will not treat a whole country as identical from one city to the next. Dog ownership conditions can change between apartment-heavy capitals, coastal towns, rural areas, rental markets, and high-cost urban centers.",
          "When country expansion is ready, index pages should link back to the <a href=\"/countries\">Country Network</a>, the <a href=\"/world-atlas/dog-ownership-costs-by-country\">cost planning guide</a>, and the <a href=\"/global-travel\">Global Travel</a> section so readers can move from comparison into practical planning."
        ]
      }
    ],
    table: {
      columns: ["Category", "What it means", "Why it matters"],
      rows: [
        ["Dog friendliness", "Everyday public, housing, and cultural ease for responsible dog owners.", "Affects quality of life beyond legal permission."],
        ["Monthly ownership cost level", "Routine spending pressure for food, care, services, and contingency planning.", "Helps households prepare before committing."],
        ["Apartment suitability", "How manageable dog ownership can be in smaller homes and dense cities.", "Important for urban and first-time owners."],
        ["Travel difficulty", "Documents, transport friction, routing, and preparation burden.", "Relocation and holiday planning need early structure."],
        ["Climate risk", "Heat, cold, seasonal hazards, and adaptation requirements.", "Dog wellbeing can depend on climate-aware routines."],
        ["Public space access", "Parks, walking areas, transport norms, and dog-friendly amenities.", "Daily exercise and enrichment need real-world access."],
        ["First-time owner suitability", "How forgiving the environment is for new owners learning responsibly.", "Reduces preventable stress and mistakes."],
        ["Family dog suitability", "Fit for households balancing children, routines, safety, and space.", "Family ownership requires planning beyond breed preference."],
        ["Paperwork complexity", "Registration, travel, housing, and import/export administration.", "Complexity changes the time and cost of ownership."],
        ["Vet access planning", "Availability, cost planning, and emergency preparedness.", "Health care access is central to responsible ownership."]
      ]
    }
  },
  "dog-ownership-costs-by-country": {
    slug: "world-atlas/dog-ownership-costs-by-country",
    title: "Dog Ownership Costs by Country | Global Planning Guide",
    description:
      "A professional guide to comparing dog ownership costs by country using planning ranges, assumptions, and responsible cost disclaimers.",
    eyebrow: "Cost planning",
    hero: "Dog ownership costs are best treated as planning ranges, not fixed country facts.",
    heroImage: { src: "/images/doghavengroup/lab/global-cost-calculator-dashboard.svg", alt: "A premium dashboard for comparing dog ownership cost planning categories." },
    sections: [
      {
        title: "Why exact country costs can mislead",
        body: [
          "Dog ownership costs vary by country, city, dog size, health, insurance choice, food quality, grooming needs, training expectations, emergency preparation, and lifestyle. A small apartment dog in one city and a large active dog in another country may have completely different monthly requirements even before travel, boarding, or specialist care is considered.",
          "Dog Haven Group uses cost planning ranges to help households prepare responsibly. The <a href=\"/lab/global-dog-cost-calculator\">Global Dog Cost Calculator</a> is designed for scenario planning rather than official pricing, and readers should always compare local service providers, veterinary practices, insurance options, and product costs before making a final decision."
        ],
        image: { src: "/images/doghavengroup/downloads/dog-cost-planning-workbook.svg", alt: "A dog cost planning workbook with monthly and yearly budget categories." }
      },
      {
        title: "Core cost categories to compare",
        body: [
          "A useful cost comparison begins with recurring essentials: food, preventive veterinary care, parasite control, grooming, equipment replacement, training, insurance or emergency savings, boarding, walking support, and enrichment. International owners should also plan for document preparation, transport crates, import or export steps, and temporary accommodation if a relocation is involved.",
          "No global guide should promise that one country is automatically cheap or expensive for every dog owner. The better question is whether a specific household, in a specific city, with a specific dog, can maintain responsible care without relying on optimistic assumptions."
        ]
      },
      {
        title: "Why city, housing, and lifestyle change the number",
        body: [
          "Two owners in the same country can experience very different costs. A small dog in a walkable apartment neighborhood, a large dog needing professional grooming, a puppy needing training, and a senior dog needing regular veterinary support all create different budgets. Housing rules, pet deposits, insurance availability, food quality, transport habits, and access to trusted services can matter as much as national averages.",
          "Use this guide alongside the <a href=\"/lab/global-dog-cost-calculator\">Global Dog Cost Calculator</a>, the <a href=\"/downloads/global-dog-owner-starter-guide\">starter guide PDF</a>, and country gateways such as <a href=\"/south-africa\">South Africa</a>, <a href=\"/united-states\">United States</a>, and <a href=\"/italy\">Italy</a>. Treat every number as a planning prompt until you verify local providers and current conditions."
        ]
      }
    ]
  },
  "global-travel": {
    slug: "global-travel",
    title: "International Dog Travel Planner & Global Travel Guides | Dog Haven Group",
    description:
      "Plan dog travel worldwide with guidance for travelling abroad with a dog, moving abroad, route research, documents, accommodation, and source checks.",
    eyebrow: "Dog Haven Group Global Travel",
    hero: "International dog travel deserves early planning, careful documents, and calm route thinking.",
    heroImage: { src: "/images/doghavengroup/travel/international-dog-travel-hero.svg", alt: "A premium international dog travel planning scene with documents, route lines, and a calm dog." },
    sections: [
      {
        title: "Travelling abroad with a dog",
        body: [
          "Dog Haven Group Global Travel is built for owners who need to move from vague worry to structured planning. Travel with a dog can involve microchip timing, rabies records, health checks, airline policies, country entry rules, export steps, crate preparation, route selection, accommodation, and arrival routines. The details can change, so every travel article must point readers back to current official government, airline, and veterinary sources.",
          "The <a href=\"/global-travel/moving-abroad-with-a-dog\">moving abroad with a dog guide</a> provides a long-form planning sequence, while the <a href=\"/lab/dog-travel-checklist\">Dog Travel Checklist</a> turns travel context into a practical list for domestic holidays, international trips, and relocations."
        ],
        image: { src: "/images/doghavengroup/travel/passport-planner-documents.svg", alt: "Dog travel documents, passport planning, microchip notes, and route preparation arranged on a desk." }
      },
      {
        title: "Plan the journey in stages before choosing a route",
        body: [
          "A workable international dog journey starts with feasibility, not a ticket search. First identify the origin, every transit point, the destination, the likely travel window, and the dog’s size, health, temperament, and transport constraints. Then separate the work into veterinary timing, identity and vaccination records, government paperwork, carrier approval, crate preparation, accommodation, arrival transport, and a contingency plan. This prevents one deadline from being mistaken for the whole journey.",
          "Origin-country responsibilities and destination requirements should be tracked separately. Export steps may be different from import conditions, while a transit country or transport provider can add another layer. Record the date and source of every rule you rely on, because saved screenshots, forum posts, and old checklists can become inaccurate. The <a href=\"/global-travel/route-guides\">Route Guides hub</a> explains how to organise route research without claiming that general guidance replaces current official instructions.",
          "Route choice is also a welfare and logistics decision. Compare total journey time, layovers, ground transfers, seasonal temperatures, crate handling, cancellation options, and the ability to reach suitable help if plans change. A shorter-looking itinerary is not automatically simpler when it adds a difficult transit stop or splits responsibility across several carriers."
        ]
      },
      {
        title: "Build a travel file that stays useful",
        body: [
          "Keep one travel file for the dog rather than scattering information across messages and browser tabs. It can contain identity and microchip details, vaccination records, veterinary appointments, document issue and expiry windows, government source links, airline contacts, crate measurements, accommodation confirmations, arrival transport, emergency contacts, and notes about the dog’s normal food and routine. Mark which items are confirmed, which are awaiting action, and which must be checked again near departure.",
          "The file should distinguish original documents, copies, and information stored securely for backup. It should also include questions rather than only answers: who handles the dog at each handover, what happens during a delay, which number is answered outside office hours, and how will the dog travel from the arrival point to the first accommodation? Use the <a href=\"/lab/dog-travel-checklist\">Dog Travel Checklist</a> to create a tailored starting list and the <a href=\"/downloads/global-dog-owner-starter-guide\">Global Dog Owner Starter Guide</a> for wider household planning.",
          "A travel file improves organisation; it does not approve a journey. Government authorities, veterinarians, airlines, ferries, rail operators, and other transport providers remain the sources for current requirements and professional decisions."
        ]
      },
      {
        title: "Prepare the dog, the accommodation, and the first week",
        body: [
          "Transport preparation includes more than buying a crate. Give the dog time to become comfortable entering, resting, and settling in the travel setup through gradual, welfare-conscious practice. Confirm carrier specifications before purchasing equipment, and discuss health or anxiety concerns with a qualified veterinarian rather than improvising medication or sedation. Dog Haven Group does not diagnose fitness to travel.",
          "Accommodation planning should cover written pet permission, size or number limits, deposits, lift or stair access, nearby relief areas, noise expectations, temperature control, and the practical route from the arrival terminal. In a new city, identify a suitable veterinary practice and an emergency option, but verify opening times and access directly. Climate matters too: heat, cold, humidity, seasonal restrictions, and the dog’s coat, age, health, and acclimatisation can change what is reasonable.",
          "The first week should be deliberately quiet. Preserve familiar food where possible, keep walks manageable, establish a safe resting place, check identification and contact details, and allow recovery before filling the schedule. Recheck official government, veterinary, airline, and transport information before booking and again before departure, because international dog travel requirements and operating policies can change."
        ]
      },
      {
        title: "Plan for delay, illness, and a route that changes",
        body: [
          "A contingency plan should cover more than a missed connection. Consider where the dog can safely stay if travel is delayed, how food and essential supplies will continue, who can make decisions if the main traveller is unavailable, which documents are backed up, and how to contact the relevant carrier, authority, veterinarian, accommodation, and ground-transport provider. Keep emergency funds accessible rather than assuming every extra cost can be resolved later.",
          "Health planning should be discussed with a qualified veterinarian who knows the dog and the proposed journey. General content cannot assess fitness to travel, prescribe medication, or determine how an individual dog will cope. Ask what changes would justify postponing the journey and what information a veterinarian at the destination would need if care becomes necessary.",
          "If the route changes, recheck the entire chain. A new carrier, transit point, date, season, or arrival airport can change documents, handling, weather exposure, accommodation, and onward transport. Do not assume approval for one itinerary automatically transfers to another."
        ]
      }
    ]
  },
  "moving-abroad-with-a-dog": {
    slug: "global-travel/moving-abroad-with-a-dog",
    title: "Moving Abroad With a Dog: Global Relocation Planning Guide | Dog Haven Group",
    description:
      "A careful long-form guide to moving abroad with a dog, covering early planning, documents, vet preparation, housing, budget, arrival routines, and mistakes to avoid.",
    eyebrow: "Relocation guide",
    hero: "Moving abroad with a dog is a project, not a last-minute errand.",
    heroImage: { src: "/images/doghavengroup/travel/moving-abroad-with-a-dog.svg", alt: "A dog relocation planning scene with luggage, veterinary documents, housing notes, and route research." },
    sections: [
      {
        title: "Early planning and document preparation",
        body: [
          "Begin as early as possible. International dog relocation may require microchip checks, rabies vaccination timing, health certificates, import permits, export documents, parasite treatments, airline approval, and country-specific steps that are not interchangeable. This guide is educational planning content, not legal or veterinary advice, and owners should confirm current rules with official government sources, airlines, and qualified veterinary professionals.",
          "Create a timeline before booking travel. Work backward from the intended arrival date, mark veterinary appointments, document windows, airline deadlines, accommodation needs, crate training milestones, and contingency days. The <a href=\"/lab/dog-travel-checklist\">Dog Travel Checklist</a> can help turn those moving parts into a tailored list."
        ],
        image: { src: "/images/doghavengroup/travel/vet-document-preparation.svg", alt: "Veterinary document preparation for moving abroad with a dog." }
      },
      {
        title: "Transport, housing, budget, and arrival",
        body: [
          "Flight and transport planning should consider dog size, health, temperament, crate requirements, weather, layovers, airline rules, and arrival logistics. Housing planning is just as important: rental restrictions, deposits, building rules, noise expectations, nearby walking areas, and temporary accommodation can make or break the first month.",
          "Budget for more than the ticket. Owners may need veterinary appointments, certificates, approved crates, agents, import fees, accommodation changes, transport to and from airports, emergency funds, and replacement supplies after arrival. The most common mistakes are starting too late, assuming online anecdotes are current rules, underestimating housing friction, and failing to protect the dog's routine during the transition. The <a href=\"/downloads/global-dog-owner-starter-guide\">Global Dog Owner Starter Guide</a> provides printable space for the wider household plan."
        ]
      },
      {
        title: "Origin country versus destination country planning",
        body: [
          "A strong relocation plan separates what must be done before departure from what must be ready after arrival. Origin-country tasks may include veterinary appointments, export paperwork, airline booking, crate acclimation, and timing checks. Destination-country tasks may include import conditions, housing permission, local veterinary registration, food continuity, transport from the airport, and rebuilding the dog's routine.",
          "The safest planning habit is to maintain a route file with dated source links, contact notes, document windows, and backup options. General Dog Haven Group guidance can help structure the work, but current official government, airline, transport, and veterinary sources must remain the authority for the actual move."
        ],
        image: { src: "/images/doghavengroup/travel/passport-planner-documents.svg", alt: "Dog travel document planner with microchip, rabies, airline, and route preparation notes." }
      },
      {
        title: "Relocation mistakes to avoid",
        body: [
          "Common mistakes include starting too late, assuming the destination rules are the only rules, ignoring transit countries, booking accommodation before checking pet policies, choosing an airline before understanding crate or weather restrictions, and underestimating the first week after arrival.",
          "Before you move, download the <a href=\"/downloads/global-dog-owner-starter-guide\">Global Dog Owner Starter Guide</a>, use the <a href=\"/lab/dog-travel-checklist\">Dog Travel Checklist</a>, and keep the <a href=\"/global-travel/route-guides\">route research framework</a> beside your source notes."
        ]
      },
      {
        title: "Prepare the dog for transition without rushing exposure",
        body: [
          "Relocation changes familiar smells, sounds, surfaces, people, walking routes, rest patterns, and sometimes climate. Build confidence through predictable handling and gradual preparation rather than trying to simulate every possible event at once. Crate or carrier acclimatisation should be welfare-conscious and based on the equipment and transport method that will actually be used.",
          "Discuss health, anxiety, motion, medication, and fitness-to-travel concerns with a qualified veterinarian. Do not improvise sedatives or rely on another owner’s experience. If the dog struggles with handling, confinement, unfamiliar environments, or separation, appropriate professional support may need to begin well before the intended move."
        ]
      },
      {
        title: "Rebuild daily life after arrival",
        body: [
          "Arrival is the start of another planning phase. Confirm identification and contact details, establish a secure resting area, locate suitable walking routes, protect access to familiar food where possible, and keep early days manageable. Check housing boundaries and local expectations before allowing off-lead activity, using shared spaces, or assuming transport access.",
          "Identify a local veterinary practice and understand how emergency care is accessed, but verify services directly. Watch for changes in appetite, elimination, sleep, movement, breathing, or behaviour and seek veterinary guidance when concerned. The goal is not to force an instant normal routine; it is to create safety and consistency while the dog and household adjust."
        ]
      }
    ]
  },
  "route-guides": {
    slug: "global-travel/route-guides",
    title: "Dog Haven Route Guides | International Dog Travel Planning",
    description:
      "Dog Haven Route Guides helps owners structure international dog travel research across origin, transit, destination, transport, documents, and arrival planning.",
    eyebrow: "Route Guides",
    hero: "Route research works best when origin, transit, destination, carrier, welfare, and arrival questions are kept separate.",
    heroImage: { src: "/images/doghavengroup/travel/route-guides-world-map.svg", alt: "A world map with future dog travel route guide lines between South Africa, the UK, the USA, Italy, and Australia." },
    sections: [
      {
        title: "How to research an international dog route",
        body: [
          "A responsible route guide begins by separating the journey into origin-country obligations, transit conditions, destination requirements, carrier rules, crate and handling preparation, and arrival-day logistics. The structure can be applied to movements such as South Africa to the UK, USA to Italy, Italy to Australia, or the UK to South Africa without pretending that one static checklist contains current rules for every route.",
          "Start with the authorities responsible for departure and arrival, then identify every transit jurisdiction and the policies of each carrier. Save dated links and contact notes, record document windows, and write down uncertainties that need confirmation. Online experiences can help reveal questions, but they should not replace current government, veterinary, airline, ferry, rail, or other transport instructions.",
          "Use the <a href=\"/global-travel/moving-abroad-with-a-dog\">moving abroad guide</a> for the wider relocation sequence and the <a href=\"/lab/dog-travel-checklist\">Dog Travel Checklist</a> to organise tasks for the actual trip."
        ],
        image: { src: "/images/doghavengroup/travel/dog-route-planning-desk.svg", alt: "A route planning desk for international dog travel with maps, documents, and timing notes." }
      },
      {
        title: "Compare routes by responsibility, not distance alone",
        body: [
          "Two itineraries between the same countries can create very different work. A direct service may simplify handovers but operate only on certain dates or under seasonal conditions. A connecting service may offer flexibility while adding transit rules, longer confinement, terminal transfers, or another organisation responsible for the dog. Compare the whole chain: who accepts the booking, who handles the dog, which documents are inspected, where delays are managed, and how the dog reaches the final accommodation.",
          "Cost comparisons should include more than the fare. Veterinary appointments, certificates, crate equipment, ground transport, accommodation changes, professional assistance, document replacement, and contingency funds may all matter. The <a href=\"/lab/global-dog-cost-calculator\">Global Dog Cost Calculator</a> is a broad ownership-planning tool rather than a travel quote, but it can help families think about the wider budget around a move."
        ]
      },
      {
        title: "Recheck the route before money becomes difficult to recover",
        body: [
          "Build confirmation points into the plan before paying non-refundable costs. Check that the dog, crate, date, route, destination, and document timeline are acceptable to the organisations involved. Ask what could cause refusal, delay, rerouting, or extra fees, and keep written confirmation where available. If a requirement is unclear, contact the relevant official or professional source instead of filling the gap with an assumption.",
          "Rules and operating policies can change after early research. Revisit source pages before booking, before final veterinary appointments, and shortly before departure. A route file with dates makes that review easier and shows which information may have become stale."
        ]
      }
    ]
  },
  lab: {
    slug: "lab",
    title: "Dog Cost Calculator, Breed Fit Quiz & Travel Checklist | Dog Haven Group Lab",
    description:
      "Use Dog Haven Group Lab for dog cost and age calculators, breed-fit and puppy-readiness quizzes, a travel checklist, and curated dog name ideas.",
    eyebrow: "Dog Haven Group Lab",
    hero: "Premium planning tools for dog ownership decisions that deserve more than guesswork.",
    heroImage: { src: "/images/doghavengroup/lab/doghaven-lab-tools.svg", alt: "A premium Dog Haven Group Lab workspace with calculators, quizzes, checklists, and dog planning tools." },
    sections: [
      {
        title: "Useful tools without childish styling",
        body: [
          "Dog Haven Group Lab is the interactive layer of the group site. It helps owners compare broad cost scenarios, think through lifestyle fit, prepare for a puppy, organise travel, understand an approximate age stage, and build a practical dog-name shortlist without turning serious ownership decisions into verdicts.",
          "The six working tools are the <a href=\"/lab/global-dog-cost-calculator\">Global Dog Cost Calculator</a>, <a href=\"/lab/breed-fit-quiz\">Breed Fit Quiz</a>, <a href=\"/lab/puppy-readiness-quiz\">Puppy Readiness Quiz</a>, <a href=\"/lab/dog-travel-checklist\">Dog Travel Checklist</a>, <a href=\"/lab/dog-age-calculator\">Dog Age Calculator</a>, and <a href=\"/lab/dog-name-generator\">Dog Name Generator</a>."
        ],
        image: { src: "/images/doghavengroup/lab/interactive-tool-suite.svg", alt: "Dog Haven Group interactive tool suite with cost, breed, puppy, and travel modules." }
      },
      {
        title: "How to interpret a Lab result",
        body: [
          "A calculator output is an estimate built from the inputs and assumptions shown on the page. A quiz result organises answers into a useful category; it does not prove that one breed, puppy, or ownership choice is right. A checklist records preparation; it cannot confirm that a journey meets current legal, carrier, or veterinary requirements.",
          "Use the explanation beside the result to decide what to verify next. That may mean checking local prices, reading an <a href=\"/academy\">Academy guide</a>, speaking with a veterinarian or qualified trainer, confirming current official travel rules, or revisiting household constraints that a short tool cannot measure."
        ]
      },
      {
        title: "Keep tool results connected to real planning",
        body: [
          "Save or note the assumptions behind a result so it can be revisited when circumstances change. A cost range may need local quotes; a puppy-readiness score may change when support is arranged; a name shortlist becomes more useful after meeting the dog; and a travel checklist should be rechecked as official information and bookings change.",
          "Pair travel outputs with the <a href=\"/global-travel\">Global Travel</a> hub and the <a href=\"/global-travel/moving-abroad-with-a-dog\">moving abroad guide</a>. For wider household preparation, use the <a href=\"/downloads/global-dog-owner-starter-guide\">starter guide PDF</a> as a printable working document."
        ]
      }
    ]
  },
  academy: {
    slug: "academy",
    title: "First-Time Dog Owner Guides & Dog Care Academy | Dog Haven Group",
    description:
      "Learn first-time dog owner planning, puppy preparation, apartment dog ownership, family routines, senior dog care, safety, behavior, and nutrition basics.",
    eyebrow: "Dog Haven Group Academy",
    hero: "Serious learning guides for dog owners who want calm, responsible, globally useful education.",
    heroImage: { src: "/images/doghavengroup/home/doghaven-academy-reading-room.svg", alt: "A refined Dog Haven Group Academy reading room for global dog owner education." },
    sections: [
      {
        title: "The learning layer of Dog Haven Group",
        body: [
          "Dog Haven Group Academy is designed for long professional guides rather than scattered tips. It covers first-time dog owners, puppy planning, apartment dog ownership, family dog ownership, senior dog care, behavior basics, safety, and nutrition basics with careful wording and internal links to tools, downloads, and country resources.",
          "Begin with the <a href=\"/academy/first-time-dog-owner-guide\">First-Time Dog Owner Guide</a>, then choose the topic that matches the current decision. Every Academy guide is written for global readers rather than copied from a country site and is explicit about when readers need a veterinarian, trainer, local authority, or other qualified professional."
        ],
        image: { src: "/images/doghavengroup/downloads/owner-starter-guide-cover.svg", alt: "A premium dog owner starter guide cover for Dog Haven Group Academy learning resources." }
      },
      {
        title: "Learn in the order decisions happen",
        body: [
          "Good ownership education follows the dog’s life and the household’s decisions. Before arrival, focus on lifestyle fit, budget, home preparation, sourcing, support, and realistic routine. During the first weeks, prioritise safety, rest, veterinary planning, gradual learning, and predictable care. Later questions may involve apartment routines, family boundaries, behaviour foundations, nutrition principles, travel, or adapting the home for a senior dog.",
          "A guide is more useful when it connects to action. Use the <a href=\"/lab/puppy-readiness-quiz\">Puppy Readiness Quiz</a> to identify preparation gaps, the <a href=\"/lab/dog-age-calculator\">Dog Age Calculator</a> for an educational life-stage estimate, and the <a href=\"/downloads/global-dog-owner-starter-guide\">starter guide</a> to record decisions away from the screen."
        ]
      },
      {
        title: "General education has clear limits",
        body: [
          "Academy material cannot assess pain, illness, nutrition needs, behaviour risk, medication, legal obligations, or the suitability of an individual dog. Those questions may need a veterinarian, qualified behaviour professional, trainer, local authority, adoption organisation, responsible breeder, or another appropriate source.",
          "The purpose of the Academy is to help readers recognise what responsible preparation looks like, ask better questions, and understand why individual context matters. It should reduce avoidable confusion without creating false certainty."
        ]
      }
    ]
  },
  "first-time-dog-owner-guide": {
    slug: "academy/first-time-dog-owner-guide",
    title: "First-Time Dog Owner Guide | Dog Haven Group Academy",
    description:
      "A professional global first-time dog owner guide covering lifestyle fit, budgeting, routines, puppy planning, adult dogs, safety, training, and downloadable resources.",
    eyebrow: "Academy guide",
    hero: "Your first dog should begin with a realistic plan, not a fantasy version of ownership.",
    heroImage: { src: "/images/doghavengroup/home/first-time-dog-owner-guide.svg", alt: "A first-time dog owner planning a calm home routine with a dog, checklist, and budget notes." },
    sections: [
      {
        title: "Start with the life the dog will actually live",
        body: [
          "A good first dog decision begins with daily routine, housing, budget, energy, time, family structure, travel plans, and tolerance for mess, training, noise, and unpredictability. The right question is not which dog looks appealing online; it is which kind of dog can thrive in the life you can responsibly provide for the next decade or more.",
          "Before choosing a puppy or adult dog, use the <a href=\"/lab/breed-fit-quiz\">Breed Fit Quiz</a> to think in lifestyle categories, then check the <a href=\"/lab/global-dog-cost-calculator\">Global Dog Cost Calculator</a> to understand planning ranges. If your life may involve relocation, read <a href=\"/global-travel/moving-abroad-with-a-dog\">moving abroad with a dog</a> before making a commitment."
        ],
        image: { src: "/images/doghavengroup/home/dog-home-routine-planning.svg", alt: "A calm home routine planning scene for a new dog owner." }
      },
      {
        title: "Prepare the home, budget, and support system",
        body: [
          "First-time owners should plan sleeping areas, toilet routines, walking routes, enrichment, safe storage, basic equipment, veterinary registration, emergency funds, training help, and household roles before the dog arrives. Puppies need more supervision and structure; adult dogs may need decompression, patience, and careful routine building.",
          "Dog Haven Group Academy connects puppy planning, apartment dog ownership, family routines, senior dog care, behaviour foundations, safety, and nutrition principles. The live <a href=\"/downloads/global-dog-owner-starter-guide\">Global Dog Owner Starter Guide</a> provides a branded worksheet-style resource for organising this first stage."
        ],
        image: { src: "/images/doghavengroup/downloads/puppy-first-month-planner.svg", alt: "A puppy first month planner with feeding, sleeping, vet, and training notes." }
      },
      {
        title: "Choose the dog as an individual, not an online ideal",
        body: [
          "Breed traits can help frame questions about size, coat, activity, training, health screening, and common working history, but they do not guarantee an individual temperament. Age, early experience, health, genetics, current environment, and the quality of support all matter. Meet the dog carefully, ask for honest information, and avoid choosing only by appearance or a short social-media impression.",
          "When adopting, ask what is known about routine, handling, time alone, other animals, children, walking, recovery after stress, and any support already in place. When speaking with a breeder, investigate health testing, welfare, social development, contracts, return support, and how homes are matched. Independent veterinary and training guidance can help when information is unclear."
        ]
      },
      {
        title: "Plan the first weeks around safety and decompression",
        body: [
          "A new dog does not need an immediate calendar full of visitors and adventures. Prepare a quiet resting place, secure doors and boundaries, store hazards safely, agree on household cues, and keep early routines predictable. Introductions to people, animals, environments, and handling should respect the dog’s welfare and the advice of appropriate professionals.",
          "Arrange veterinary registration and understand how to access emergency help before it is needed. Record food, medication prescribed by a veterinarian, identification details, insurance or savings arrangements, and important contacts. If behaviour raises a safety concern, seek qualified help early rather than relying on punishment or generic online tips."
        ]
      },
      {
        title: "Build a routine the household can sustain",
        body: [
          "Responsible ownership is repetitive in the best sense: meals, toilet access, exercise, enrichment, rest, training, grooming, cleaning, supervision, and health observation need to fit ordinary weekdays as well as enthusiastic weekends. Decide who does what, how care continues during work or travel, and what happens when the usual caregiver is unavailable.",
          "Review the plan as the dog changes. A puppy becomes an adolescent, an adult dog may reveal new needs after settling, and a senior dog may need different movement, comfort, and veterinary support. Continue into <a href=\"/academy/puppy-planning\">Puppy Planning</a>, <a href=\"/academy/dog-behavior-basics\">Behaviour Basics</a>, <a href=\"/academy/dog-safety\">Dog Safety</a>, or <a href=\"/academy/senior-dog-care\">Senior Dog Care</a> when those questions become relevant."
        ]
      }
    ]
  },
  journal: {
    slug: "journal",
    title: "Global Dog Ownership Journal, Travel Updates & Network Notes | Dog Haven Group",
    description:
      "Read Dog Haven Group Journal insights on global dog ownership, dog travel planning, safety, ownership trends, country spotlights, and network updates.",
    eyebrow: "Dog Haven Group Journal",
    hero: "A premium insights room for global dog ownership, travel planning, safety, trends, and network updates.",
    heroImage: { src: "/images/doghavengroup/journal/journal-editorial-desk.svg", alt: "A premium editorial desk for Dog Haven Group Journal with global dog ownership notes." },
    sections: [
      {
        title: "Not a generic blog grid",
        body: [
          "Dog Haven Group Journal is the editorial and research layer of the group site rather than a generic blog archive. It publishes methodology notes, travel-planning explanations, safety context, ownership-trend analysis, country spotlights, and Dog Haven network updates when there is a clear reader need.",
          "Articles are selected for durable usefulness and transparent limits. Journal categories include global dog ownership, travel preparation, dog safety, ownership trends, Dog Haven network development, country context, and explanations of how the platform evaluates evidence."
        ],
        image: { src: "/images/doghavengroup/journal/global-dog-newsroom.svg", alt: "Dog Haven global dog newsroom with country notes, travel planning, and editorial boards." }
      },
      {
        title: "What the Journal publishes",
        body: [
          "The Journal is the place for useful global dog ownership updates, travel and moving-abroad planning explainers, safety and seasonal guidance, Dog Haven network updates, country spotlights, and methodology notes. It does not publish fake dates, invented news, or generic filler simply to appear active.",
          "Every Journal piece should connect back into the platform: <a href=\"/world-atlas\">World Atlas</a> comparison, <a href=\"/global-travel\">Global Travel</a> planning, <a href=\"/lab\">Lab</a> tools, <a href=\"/downloads\">Download Library</a> resources, and the <a href=\"/countries\">Country Network</a>."
        ]
      }
    ]
  },
  downloads: {
    slug: "downloads",
    title: "Free Dog Ownership Planners, PDFs & Checklists | Dog Haven Group",
    description:
      "Download free dog ownership planners, PDFs, checklists, worksheets, travel resources, puppy planning guides, and dog cost planning workbooks.",
    eyebrow: "Download Library",
    hero: "Free branded planners and worksheets for dog owners who want decisions to feel organized.",
    heroImage: { src: "/images/doghavengroup/downloads/download-library-premium-guides.svg", alt: "A premium library of Dog Haven Group branded dog owner guides, planners, and checklists." },
    sections: [
      {
        title: "A practical resource library",
        body: [
          "The Download Library provides printable planning resources that turn longer guidance into something a household can use away from the screen. The live <a href=\"/downloads/global-dog-owner-starter-guide\">Global Dog Owner Starter Guide</a> covers lifestyle fit, budgeting, puppy preparation, travel, moving abroad, safety, and country-network next steps in one structured PDF.",
          "Use the guide as a working document: discuss household roles, record questions, mark decisions that need local prices or professional advice, and follow its links back to updated web guidance. It connects first-time planning with the <a href=\"/world-atlas\">World Atlas</a>, <a href=\"/global-travel\">Global Travel</a>, <a href=\"/lab\">Lab</a>, <a href=\"/academy\">Academy</a>, and <a href=\"/countries\">Country Network</a>."
        ],
        image: { src: "/images/doghavengroup/downloads/owner-starter-guide-cover.svg", alt: "A premium cover concept for the Global Dog Owner Starter Guide." }
      },
      {
        title: "How resources earn their place",
        body: [
          "The Download Library is deliberately curated. A resource earns its place when it gives the reader a practical planning object: a checklist, worksheet, budget file, timeline, emergency sheet, or decision framework that is easier to use than a long article alone. A decorative PDF that merely repeats a page would not improve the platform.",
          "Downloads remain general educational resources. Prices, laws, travel rules, veterinary requirements, and an individual dog’s needs must be checked against current local sources and qualified professionals. Each resource should have a related live page so readers can move between printable preparation and information that can be updated more readily."
        ]
      }
    ]
  },
  countries: {
    slug: "countries",
    title: "Dog Haven Country Network: South Africa, United States & Italy | Dog Haven Group",
    description:
      "Explore the Dog Haven country network for South Africa, the United States, Italy, and future country expansion connected to global dog ownership planning.",
    eyebrow: "Country Network",
    hero: "The country network lets each Dog Haven site serve its local audience while the group site keeps the global framework coherent.",
    heroImage: { src: "/images/doghavengroup/countries/doghaven-country-network.svg", alt: "A premium country network map for Dog Haven sites and future expansion." },
    sections: [
      {
        title: "Local sites with a shared global standard",
        body: [
          "Dog Haven Group is the parent platform, not a replacement for local country sites. South Africa, the United States, and Italy each deserve their own local editorial lens, while the group site handles global ownership intelligence, travel planning, tools, downloads, methodology, and the future country expansion structure.",
          "A country gateway should help a reader decide where to continue. Local sites can address everyday housing, climate, services, public-space culture, costs, and region-specific ownership questions. Dog Haven Group provides the comparison, international travel, learning, and planning layer that connects those local realities without copying them.",
          "New country sites should appear only when useful local content, contextual review, and a clear editorial purpose justify them. A country name alone is not enough reason to publish a page."
        ],
        image: { src: "/images/doghavengroup/countries/future-country-expansion.svg", alt: "Future Dog Haven country expansion shown with planned markets across several regions." }
      }
    ]
  },
  "doghaven-universe": {
    slug: "doghaven-universe",
    title: "Dog Haven Group Platform Map: Atlas, Travel, Lab, Academy & Countries",
    description:
      "Explore the Dog Haven Group platform map across World Atlas, Global Travel, Lab tools, Academy guides, Journal insights, downloads, and countries.",
    eyebrow: "Platform map",
    hero: "Dog Haven Group Universe is the internal map of a global dog ownership platform built to grow carefully.",
    heroImage: { src: "/images/doghavengroup/home/doghaven-universe-map.svg", alt: "A premium internal map of the Dog Haven Group Universe platform sections." },
    sections: [
      {
        title: "How the platform fits together",
        body: [
          "The Dog Haven Group Universe includes the World Atlas, Global Travel, Route Guides, Lab, Academy, Journal, Download Library, and Country Network. Each section has a role. The Atlas compares countries, Travel organises movement, Lab turns decisions into tools, Academy teaches, Journal publishes researched context, and the Country Network routes readers into local sites.",
          "A serious mother site needs this structure because dog ownership is no longer only local for many families. People move countries, compare costs, travel with dogs, rent apartments, plan around climates, and look for trustworthy education that does not collapse into either vague inspiration or unsupported claims."
        ],
        image: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "Dog Haven Group platform sections shown as connected global ownership systems." }
      },
      {
        title: "Global research and local editorial responsibility",
        body: [
          "The group platform can compare broad themes—housing pressure, climate, transport, public access, veterinary planning, costs, and travel friction—but local country sites must explain how those themes are experienced in practice. A score or global summary cannot replace local detail, and local material should not be copied between countries where rules, services, culture, and everyday routines differ.",
          "Research work should show its assumptions and limits. Cost tools use planning ranges rather than official prices. Travel guidance separates organisation from legal approval. Academy material is educational and does not diagnose individual dogs. When a decision depends on current law, transport policy, or health, the reader should be directed to the relevant official source or qualified professional.",
          "The <a href=\"/research-methodology\">research methodology</a> explains this approach, while the <a href=\"/editorial-policy\">editorial policy</a> sets standards for clarity, originality, corrections, and responsible uncertainty."
        ]
      },
      {
        title: "Expansion without duplicated country content",
        body: [
          "A new country site needs a distinct audience and enough local knowledge to answer real questions. The group site should not compete with it by reproducing local articles, and the country site should not mirror global pages merely to look complete. Instead, the two layers should link to one another where the reader’s question changes from global comparison to local action.",
          "That separation keeps the network useful as it grows. Someone comparing countries can stay in the <a href=\"/world-atlas\">World Atlas</a>; someone preparing a cross-border move can work through <a href=\"/global-travel\">Global Travel</a>; and someone who needs local ownership context can choose an established gateway through the <a href=\"/countries\">country network</a>."
        ]
      }
    ]
  },
  about: {
    slug: "about",
    title: "About Dog Haven Group | Global Dog Ownership Platform",
    description:
      "Learn about Dog Haven Group, the premium global parent platform for the Dog Haven country network, ownership intelligence, travel planning, tools, Academy, Journal, and downloads.",
    eyebrow: "About",
    hero: "Dog Haven Group exists to make responsible dog ownership easier to plan across countries, homes, and life stages.",
    heroImage: { src: "/images/doghavengroup/home/global-dog-ownership-hero.svg", alt: "Dog Haven Group global dog ownership platform brand scene." },
    sections: [
      {
        title: "A parent brand with a practical mission",
        body: [
          "Dog Haven Group is the global home of the Dog Haven network. It connects local country sites with broader planning resources for dog ownership, international travel, learning, cost awareness, tools, and responsible editorial guidance.",
          "The group site is built to be serious, scalable, and useful. It avoids fake authority, fake statistics, and copied country-site content. Its job is to give readers a polished global framework and then route them to local Dog Haven sites when local context matters."
        ]
      },
      {
        title: "What readers can use the platform for",
        body: [
          "A prospective owner can begin with the <a href=\"/academy/first-time-dog-owner-guide\">first-time owner guide</a>, test practical readiness in the <a href=\"/lab\">Lab</a>, and use the download library to organise household decisions. An owner comparing a move can use the <a href=\"/world-atlas\">World Atlas</a> for broad country context and <a href=\"/global-travel\">Global Travel</a> to structure route, document, accommodation, and arrival questions.",
          "These resources are designed to support decisions, not make them on the reader’s behalf. Individual dogs differ, current requirements change, and general online content cannot replace veterinary, legal, government, transport, or other qualified advice where those sources are needed."
        ]
      },
      {
        title: "How the global and country layers stay distinct",
        body: [
          "Dog Haven Group handles subjects that cross borders: comparison methods, travel preparation, shared educational foundations, planning tools, downloads, and network standards. Dog Haven South Africa, Dog Haven USA, and Dog Haven Italy can concentrate on the housing, climate, services, routines, culture, and ownership questions that matter locally.",
          "This structure allows internal links to be genuinely useful. Readers move to a country site when local context is required and return to the group site when they need comparison, international planning, or a shared learning resource."
        ]
      }
    ]
  },
  "editorial-policy": {
    slug: "editorial-policy",
    title: "Editorial Policy | Dog Haven Group",
    description: "Dog Haven Group's editorial policy for professional, useful, non-misleading dog ownership content across global and country-specific resources.",
    eyebrow: "Editorial Policy",
    hero: "Dog Haven Group content should be useful, careful, original, and honest about uncertainty.",
    heroImage: { src: "/images/doghavengroup/journal/journal-editorial-desk.svg", alt: "Dog Haven Group editorial standards desk with notes and review materials." },
    sections: [
      {
        title: "How we approach content",
        body: [
          "Dog Haven Group publishes educational dog ownership content, planning frameworks, tools, and editorial resources. We do not present general content as veterinary, legal, financial, or government advice. Where rules, health matters, travel requirements, or legal obligations are involved, readers are reminded to consult current official sources and qualified professionals.",
          "Content should be original to Dog Haven Group, distinct from local country sites, and written for real reader value rather than search-engine volume. We avoid fake reviews, fake authorship claims, fake statistics, and thin doorway pages."
        ]
      },
      {
        title: "Sources, updates, and corrections",
        body: [
          "Source expectations depend on the subject. Current travel, legal, transport, and government requirements should be checked against authoritative sources close to publication and clearly framed as changeable. Educational ownership material should distinguish established general principles from judgement calls, individual variation, and topics that need professional assessment.",
          "When an error or outdated statement is identified, the useful response is to review the source, correct the page, and make the limitation clearer where necessary. Readers can send a correction or source concern through the <a href=\"/contact\">contact form</a>."
        ]
      }
    ]
  },
  "research-methodology": {
    slug: "research-methodology",
    title: "Research Methodology | Dog Haven Group",
    description: "Dog Haven Group's research methodology for global dog ownership comparisons, cost planning, travel topics, and future index development.",
    eyebrow: "Research Methodology",
    hero: "Dog Haven Group methodology begins with transparency, practical assumptions, and clear limits.",
    heroImage: { src: "/images/doghavengroup/countries/global-ownership-index-framework.svg", alt: "Dog Haven Group research methodology framework for global dog ownership comparison." },
    sections: [
      {
        title: "Planning frameworks before false precision",
        body: [
          "Dog Haven Group uses planning frameworks for topics where precise universal claims would be misleading. Cost content is framed as ranges and assumptions. Travel and law content includes reminders to verify current official rules. The Global Dog Ownership Index begins as a methodology before any public ranking is claimed.",
          "As the network grows, country-specific research should be reviewed through local context, official-source checks where relevant, and a clear distinction between editorial guidance and professional advice."
        ]
      },
      {
        title: "How comparison categories should be interpreted",
        body: [
          "Country comparison is multi-dimensional. Housing access, public-space expectations, climate, transport, veterinary access, cost pressure, travel connections, and the needs of different households cannot be collapsed into one universal definition of a good place to own a dog. A category can reveal a question to investigate; it cannot make the decision for every dog or family.",
          "Any future index should publish its category definitions, weighting choices, source dates, geographic limitations, and known gaps. It should also distinguish national information from city-level reality, because conditions can vary significantly inside one country."
        ]
      },
      {
        title: "Tools are estimates, not measurements of an individual dog",
        body: [
          "Lab calculators and quizzes translate user inputs into planning prompts. Cost results are broad ranges, breed-fit results are lifestyle categories, readiness scores organise preparation, and age equivalents are educational approximations. None of them diagnoses health, guarantees suitability, predicts lifespan, or replaces local prices and professional advice.",
          "Readers should use results to identify the next useful question, then continue to an Academy guide, current official source, local provider, qualified trainer, or veterinarian as appropriate. The explanation beside a result is as important as the number or category it produces."
        ]
      }
    ]
  },
  contact: {
    slug: "contact",
    title: "Contact Dog Haven Group",
    description: "Contact Dog Haven Group for corrections, partnerships, country suggestions, media enquiries, editorial notes, and website support through the contact form.",
    eyebrow: "Contact",
    hero: "Contact Dog Haven Group for platform, editorial, and network enquiries.",
    heroImage: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "Dog Haven Group contact and network map." },
    sections: [
      {
        title: "Contact details",
        body: [
          "For Dog Haven Group enquiries, use the contact form on this page. The form is designed for general notes, corrections, country suggestions, partnership enquiries, media requests, and technical issues, with delivery configured through the site owner's email provider.",
          "Please do not use general website content as a substitute for veterinary, legal, transport, or government advice. For urgent dog health concerns, contact a qualified veterinarian or local emergency service."
        ]
      }
    ]
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy | Dog Haven Group",
    description: "Dog Haven Group privacy policy covering basic website privacy principles for DogHavenGroup.com.",
    eyebrow: "Privacy Policy",
    hero: "Dog Haven Group is designed with a restrained, transparent approach to website privacy.",
    heroImage: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "Dog Haven Group website privacy and trust page." },
    sections: [
      {
        title: "Privacy overview",
        body: [
          "This privacy policy is a Phase 1 website policy and should be reviewed by a qualified legal professional before final deployment. Dog Haven Group may collect information voluntarily submitted through contact links or future forms, along with standard technical information used to operate and improve the website.",
          "Dog Haven Group should avoid collecting unnecessary personal data. If analytics, email tools, forms, advertising, or third-party services are added, this policy must be updated to describe those services accurately."
        ]
      }
    ]
  },
  terms: {
    slug: "terms",
    title: "Terms | Dog Haven Group",
    description: "Dog Haven Group website terms for use of DogHavenGroup.com content, tools, downloads, and educational resources.",
    eyebrow: "Terms",
    hero: "Dog Haven Group provides educational planning content and tools subject to sensible website terms.",
    heroImage: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "Dog Haven Group terms and website use page." },
    sections: [
      {
        title: "Website terms",
        body: [
          "These terms are a Phase 1 website draft and should be reviewed by a qualified legal professional before final deployment. Dog Haven Group content is provided for general educational and planning purposes only. It is not veterinary, legal, financial, transport, or government advice.",
          "Users are responsible for checking current official sources, qualified professionals, and local requirements before making decisions about dog health, ownership obligations, travel, relocation, or spending."
        ]
      }
    ]
  },
  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer | Dog Haven Group",
    description: "Dog Haven Group disclaimer for educational dog ownership, travel, cost, Academy, Journal, and planning tool content.",
    eyebrow: "Disclaimer",
    hero: "Dog Haven Group helps readers plan, but it does not replace qualified professional or official advice.",
    heroImage: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "Dog Haven Group disclaimer and responsible guidance page." },
    sections: [
      {
        title: "Important limitations",
        body: [
          "Dog Haven Group publishes general educational content, planning tools, and editorial resources. Nothing on this website should be treated as veterinary, legal, financial, airline, import, export, or government advice. Rules and health requirements can change, and individual dogs have individual needs.",
          "Before acting on travel, legal, medical, nutrition, cost, or ownership guidance, consult current official sources and qualified professionals. Tool outputs are estimates or educational prompts, not guarantees."
        ]
      }
    ]
  }
};

export const journalArticles = [
  {
    slug: "introducing-dog-haven-group",
    title: "Introducing Dog Haven Group",
    description: "Why Dog Haven Group exists as the global home of the Dog Haven network and how the platform supports global and local ownership decisions.",
    image: "/images/doghavengroup/journal/introducing-doghaven-group.svg",
    summary:
      "A launch essay explaining Dog Haven Group as the parent platform for global dog ownership planning, country sites, travel guidance, learning, tools, and downloadable resources.",
    body: [
      "Dog Haven Group begins with a simple but serious idea: dog ownership is local in the details, but increasingly global in the decisions. People compare countries, move with dogs, travel internationally, rent apartments, prepare for puppies, budget for care, and look for advice that respects both practical reality and emotional commitment.",
      "The group site is designed as the mother platform for the Dog Haven network. Dog Haven South Africa, Dog Haven USA, and Dog Haven Italy can serve local audiences with local context, while DogHavenGroup.com builds the global framework around ownership intelligence, travel planning, tools, Academy guides, Journal insights, and branded downloads.",
      "The platform begins with a clear structure, editorial standard, country gateways, interactive tools, and trust pages. Growth should be careful rather than noisy: useful country expansion, better data, practical downloads, responsible route guidance, and deeper Academy resources."
    ]
  },
  {
    slug: "how-doghaven-will-grow-across-countries",
    title: "How Dog Haven Will Grow Across Countries",
    description: "A transparent look at how the Dog Haven country network can expand without creating thin pages or flattening local ownership realities.",
    image: "/images/doghavengroup/journal/doghaven-country-growth.svg",
    summary:
      "An evergreen network note on future Dog Haven countries, local editorial purpose, and the importance of launching only when each market has real value.",
    body: [
      "The Dog Haven network is built to grow, but growth should not mean creating shallow pages for every country name. A useful country site needs local editorial purpose, practical ownership context, and a clear relationship to the global parent platform.",
      "Potential countries such as the United Kingdom, Australia, Canada, New Zealand, Ireland, Germany, France, and Spain belong in the network only when Dog Haven can provide meaningful guidance for local dog owners and connect that guidance to global planning resources.",
      "Dog Haven Group will remain the framework layer. It can compare countries, develop methodology, organize travel planning, host tools, and publish shared learning resources. Country sites can then focus on the local realities that matter most to readers in that market."
    ]
  },
  {
    slug: "why-global-dog-travel-needs-better-planning",
    title: "Why Global Dog Travel Needs Better Planning",
    description: "A Dog Haven Group Journal essay on why international dog travel requires early planning, official-source checks, and better owner preparation.",
    image: "/images/doghavengroup/journal/global-dog-travel-planning.svg",
    summary:
      "A practical editorial piece explaining why dog travel content should focus on preparation structure, source reminders, and calm decision-making.",
    body: [
      "International dog travel is one of the clearest reasons Dog Haven Group needs to exist. A dog cannot be packed into a relocation plan as an afterthought. Documents, microchip checks, rabies timing, airline policies, route decisions, housing, arrival routines, and emergency planning all need attention.",
      "The rules can change, and online anecdotes are often out of date. Dog Haven Group travel content should help owners organize their thinking while reminding them to check current official government, airline, and veterinary sources before acting.",
      "The Global Travel hub, Moving Abroad guide, Route Guides, Dog Travel Checklist, and printable starter guide work together. They give dog owners a structured planning pathway without pretending that a general website can replace professional or official advice."
    ]
  }
];
