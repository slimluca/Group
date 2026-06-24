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
    name: "DogHaven South Africa",
    href: "/south-africa",
    external: "https://doghaven.co.za",
    anchor: "explore DogHaven South Africa",
    image: "/images/doghavengroup/countries/south-africa-global-dog-owners.svg",
    summary:
      "A local DogHaven site for South African dog owners, connected to the global network for travel, planning, ownership education, and future route guidance."
  },
  {
    name: "DogHaven United States",
    href: "/united-states",
    external: "https://doghaven.us",
    anchor: "visit the United States DogHaven guide",
    image: "/images/doghavengroup/countries/united-states-dog-ownership-network.svg",
    summary:
      "A United States DogHaven resource built for a large, varied ownership landscape, from apartment planning and family dogs to travel and cost awareness."
  },
  {
    name: "DogHaven Italy",
    href: "/italy",
    external: "https://doghaven.it",
    anchor: "read the Italian DogHaven resources",
    image: "/images/doghavengroup/countries/italy-dog-friendly-living.svg",
    summary:
      "A local Italian DogHaven site shaped around city living, travel, public space culture, and the practical realities of owning a dog in Italy."
  }
];

export const futureCountries = ["United Kingdom", "Australia", "Canada", "New Zealand", "Ireland", "Germany", "France", "Spain"];

export const pages: Record<string, PageContent> = {
  "south-africa": {
    slug: "south-africa",
    title: "DogHaven South Africa | Global Country Gateway",
    description:
      "A premium DogHaven Group gateway explaining how DogHaven South Africa fits into the global network for dog owners, travel planning, costs, and local ownership guidance.",
    eyebrow: "Country gateway",
    hero: "DogHaven South Africa connects local dog ownership decisions with the wider global DogHaven network.",
    heroImage: { src: "/images/doghavengroup/countries/south-africa-global-dog-owners.svg", alt: "A premium editorial scene representing South African dog owners connected to global DogHaven planning." },
    sections: [
      {
        title: "A local site inside a global ownership system",
        body: [
          "DogHaven South Africa serves a distinct local audience while DogHaven Group provides the wider international framework. South African dog owners often need practical guidance that is rooted in local living conditions, local services, seasonal weather, city patterns, housing realities, and the everyday cost of responsible care. The role of this gateway is to explain that relationship clearly before sending readers to the local site.",
          "Within the broader DogHaven network, South Africa is also an important travel and relocation reference point. Families may be preparing to move with a dog, comparing paperwork requirements, or trying to understand how a dog care budget changes when life crosses borders. DogHaven Group connects those questions to the <a href=\"/global-travel\">Global Travel</a>, <a href=\"/world-atlas\">World Atlas</a>, and <a href=\"/lab/global-dog-cost-calculator\">Global Dog Cost Calculator</a> sections."
        ],
        image: { src: "/images/doghavengroup/countries/south-africa-country-overview.svg", alt: "South African dog ownership planning shown with city, coast, and household context." },
        links: [{ href: "https://doghaven.co.za", label: "Explore DogHaven South Africa", text: "Open the local South African DogHaven site for country-specific resources." }]
      },
      {
        title: "What the South African site helps with",
        body: [
          "The local country site can focus on South African ownership situations in a way a global parent site should not flatten. That may include local buying and adoption considerations, puppy planning, safety awareness, seasonal care, travel within the region, and the different expectations of urban, suburban, and more rural dog households.",
          "DogHaven Group remains the global layer: it compares ownership patterns across countries, builds planning tools, develops route-guide methodology, and keeps readers oriented when dog ownership touches international travel, relocation, or multi-country decisions. Readers who need local detail should <a href=\"https://doghaven.co.za\">explore DogHaven South Africa</a>; readers comparing countries should continue through the global sections."
        ]
      }
    ]
  },
  "united-states": {
    slug: "united-states",
    title: "DogHaven United States | Global Country Gateway",
    description:
      "A DogHaven Group country gateway for the United States, explaining how the US DogHaven site supports local dog owners inside the global network.",
    eyebrow: "Country gateway",
    hero: "DogHaven United States brings a major dog ownership market into the DogHaven global planning network.",
    heroImage: { src: "/images/doghavengroup/countries/united-states-dog-ownership-network.svg", alt: "A refined United States dog ownership network illustration with city and family planning cues." },
    sections: [
      {
        title: "A large and varied ownership landscape",
        body: [
          "The United States is not one simple dog ownership market. Climate, housing, city design, public-space access, transport choices, insurance habits, training culture, and family routines can vary dramatically from one state or city to another. DogHaven Group treats the United States as an essential local pillar while keeping the global site focused on comparison, planning structure, and cross-border ownership intelligence.",
          "For people preparing to own a dog in the United States, the local DogHaven site can explore practical everyday guidance. For people comparing the United States with Italy, South Africa, or a future DogHaven country, the global site provides the broader lens through the <a href=\"/world-atlas/global-dog-ownership-index\">Global Dog Ownership Index framework</a> and the <a href=\"/academy/first-time-dog-owner-guide\">first-time owner guide</a>."
        ],
        image: { src: "/images/doghavengroup/countries/united-states-city-dog-living.svg", alt: "United States city dog living shown with apartment, park, travel, and cost planning elements." },
        links: [{ href: "https://doghaven.us", label: "Visit the United States DogHaven guide", text: "Open the local DogHaven United States website for country-specific material." }]
      },
      {
        title: "How the gateway should be used",
        body: [
          "This gateway is not a thin doorway page. It is a global orientation page that helps readers understand why a local United States resource exists, what questions belong on the local site, and which questions are better handled at the group level. Local details belong on DogHaven.us; global comparison, travel planning, and multi-country ownership decisions belong on DogHavenGroup.com.",
          "If a reader is deciding whether a dog fits their lifestyle, they can start with the <a href=\"/lab/breed-fit-quiz\">Breed Fit Quiz</a>. If they are preparing for costs, the calculator provides planning ranges rather than official prices. If they are relocating, the <a href=\"/global-travel/moving-abroad-with-a-dog\">moving abroad guide</a> explains how to organize the process before checking official sources."
        ]
      }
    ]
  },
  italy: {
    slug: "italy",
    title: "DogHaven Italy | Global Country Gateway",
    description:
      "A DogHaven Group gateway for Italy, connecting Italian dog ownership resources with global travel, ownership planning, and future country comparison.",
    eyebrow: "Country gateway",
    hero: "DogHaven Italy gives the network a local lens on city living, travel culture, and responsible dog ownership in Italy.",
    heroImage: { src: "/images/doghavengroup/countries/italy-dog-friendly-living.svg", alt: "A premium Italian dog ownership scene with city streets, travel notes, and family planning details." },
    sections: [
      {
        title: "Italy in the DogHaven network",
        body: [
          "Italy is a meaningful country gateway because dog ownership often intersects with compact city living, apartment routines, regional travel, public-space etiquette, and the practical work of planning around transport and accommodation. DogHaven Italy can speak to those local realities while DogHaven Group keeps the wider international structure coherent.",
          "For readers comparing Italy with South Africa, the United States, or a future DogHaven country, this page provides context rather than pretending to be a complete local guide. Global readers can use the <a href=\"/global-travel/route-guides\">Route Guides hub</a>, <a href=\"/downloads\">Download Library</a>, and <a href=\"/world-atlas/dog-ownership-costs-by-country\">costs by country guide</a> before moving into country-specific material."
        ],
        image: { src: "/images/doghavengroup/countries/italy-apartment-and-travel-dogs.svg", alt: "Dog ownership in Italy represented through apartment living, trains, streets, and travel planning." },
        links: [{ href: "https://doghaven.it", label: "Read the Italian DogHaven resources", text: "Open the local DogHaven Italy site for country-specific resources." }]
      },
      {
        title: "Local insight with global context",
        body: [
          "A global dog ownership platform should not erase local nuance. Italy may raise questions about urban walking routines, rentals, holiday travel, veterinary planning, and how a dog fits into a household that may move between cities or regions. Those are better served through a dedicated Italian site than by forcing every reader through a single global article.",
          "DogHaven Group supports that local work by creating shared planning tools, honest methodology, and a consistent editorial standard across the network. Readers can move between the Italian site and group-level guidance without confusion about which source is designed for which job."
        ]
      }
    ]
  },
  "world-atlas": {
    slug: "world-atlas",
    title: "DogHaven World Atlas | Global Dog Ownership Intelligence",
    description:
      "Explore DogHaven Group's World Atlas for global dog ownership comparisons, costs, laws, climate, city planning, and the future DogHaven index framework.",
    eyebrow: "DogHaven World Atlas",
    hero: "A global reference point for comparing dog ownership conditions across countries without pretending every household has the same reality.",
    heroImage: { src: "/images/doghavengroup/home/world-atlas-premium-map.svg", alt: "A premium world atlas map for global dog ownership planning." },
    sections: [
      {
        title: "Dog ownership by country",
        body: [
          "The World Atlas is DogHaven Group's long-term structure for understanding how dog ownership changes across borders. It will help readers compare housing expectations, access to public space, climate considerations, transport friction, veterinary planning, cost pressure, and the everyday rhythm of keeping a dog healthy and safe in different countries.",
          "Rather than inventing official rankings before the evidence base is ready, DogHaven Group begins with transparent methodology. The <a href=\"/world-atlas/global-dog-ownership-index\">Global Dog Ownership Index</a> explains how future scoring will be organized, while the <a href=\"/world-atlas/dog-ownership-costs-by-country\">costs by country guide</a> helps readers think in planning ranges."
        ],
        image: { src: "/images/doghavengroup/countries/global-country-comparison.svg", alt: "Country comparison panels for dog ownership costs, laws, public space, and climate." }
      },
      {
        title: "Costs, laws, cities, climate, and future expansion",
        body: [
          "Useful country comparison requires care. Dog laws can change, travel requirements can shift, and cost estimates become misleading when they ignore city, dog size, health status, food choice, insurance decisions, and lifestyle. DogHaven Group will use official-source reminders on changing legal and travel topics, and it will avoid presenting estimates as fixed universal facts.",
          "The World Atlas also prepares the network for future country sites including the United Kingdom, Australia, Canada, New Zealand, Germany, France, Spain, Ireland, and more. Those future pages should be launched only when they can provide real value, not as thin pages created simply to target country names."
        ]
      }
    ],
    table: {
      columns: ["Atlas area", "What it compares", "Current Phase 1 treatment"],
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
    title: "Global Dog Ownership Index | DogHaven Methodology",
    description:
      "DogHaven Group's Global Dog Ownership Index methodology explains future scoring categories without fake rankings, statistics, or unsupported claims.",
    eyebrow: "Index methodology",
    hero: "The Global Dog Ownership Index is a transparent framework for future country comparison, not a fake league table.",
    heroImage: { src: "/images/doghavengroup/countries/global-ownership-index-framework.svg", alt: "A refined scoring framework for future DogHaven global dog ownership comparisons." },
    sections: [
      {
        title: "Why the index starts with methodology",
        body: [
          "Dog ownership quality cannot be measured responsibly by one headline score. A country might be affordable but difficult for renters, welcoming in public spaces but challenging for heat-sensitive dogs, or excellent for families while complicated for international relocation. DogHaven Group is building the index as a framework first so that future scoring can be explained, challenged, improved, and updated.",
          "The Phase 1 version does not claim official rankings. It introduces the categories DogHaven will use when enough reliable country research, official-source review, and local editorial validation exist to support a public index."
        ],
        image: { src: "/images/doghavengroup/lab/index-score-dials.svg", alt: "Index score dials for dog friendliness, cost, climate, travel, and public access." }
      },
      {
        title: "Scoring categories",
        body: [
          "The index framework includes dog friendliness, monthly ownership cost level, apartment suitability, travel difficulty, climate risk, public space access, first-time owner suitability, family dog suitability, paperwork complexity, and vet access planning. Each category is designed to encourage better questions rather than simplistic winners and losers.",
          "Future index releases should explain sources, assumptions, uncertainty, and update cycles. Where laws, import rules, or health requirements are involved, readers must be reminded to check current official government and veterinary sources."
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
          "DogHaven Group uses cost planning ranges to help households prepare responsibly. The <a href=\"/lab/global-dog-cost-calculator\">Global Dog Cost Calculator</a> is designed for scenario planning rather than official pricing, and readers should always compare local service providers, veterinary practices, insurance options, and product costs before making a final decision."
        ],
        image: { src: "/images/doghavengroup/downloads/dog-cost-planning-workbook.svg", alt: "A dog cost planning workbook with monthly and yearly budget categories." }
      },
      {
        title: "Core cost categories to compare",
        body: [
          "A useful cost comparison begins with recurring essentials: food, preventive veterinary care, parasite control, grooming, equipment replacement, training, insurance or emergency savings, boarding, walking support, and enrichment. International owners should also plan for document preparation, transport crates, import or export steps, and temporary accommodation if a relocation is involved.",
          "No global guide should promise that one country is automatically cheap or expensive for every dog owner. The better question is whether a specific household, in a specific city, with a specific dog, can maintain responsible care without relying on optimistic assumptions."
        ]
      }
    ]
  },
  "global-travel": {
    slug: "global-travel",
    title: "DogHaven Global Travel | International Dog Travel Planning",
    description:
      "DogHaven Global Travel helps owners plan international dog travel, moving abroad with dogs, documents, quarantine research, route guides, and checklists.",
    eyebrow: "DogHaven Global Travel",
    hero: "International dog travel deserves early planning, careful documents, and calm route thinking.",
    heroImage: { src: "/images/doghavengroup/travel/international-dog-travel-hero.svg", alt: "A premium international dog travel planning scene with documents, route lines, and a calm dog." },
    sections: [
      {
        title: "Travelling abroad with a dog",
        body: [
          "DogHaven Global Travel is built for owners who need to move from vague worry to structured planning. Travel with a dog can involve microchip timing, rabies records, health checks, airline policies, country entry rules, export steps, crate preparation, route selection, accommodation, and arrival routines. The details can change, so every travel article must point readers back to current official government, airline, and veterinary sources.",
          "The <a href=\"/global-travel/moving-abroad-with-a-dog\">moving abroad with a dog guide</a> provides a long-form planning sequence, while the <a href=\"/lab/dog-travel-checklist\">Dog Travel Checklist</a> turns travel context into a practical list for domestic holidays, international trips, and relocations."
        ],
        image: { src: "/images/doghavengroup/travel/passport-planner-documents.svg", alt: "Dog travel documents, passport planning, microchip notes, and route preparation arranged on a desk." }
      },
      {
        title: "Route guides and future planning tools",
        body: [
          "The route-guide model will help readers understand common movements such as South Africa to the UK, USA to Italy, Italy to Australia, and the UK to South Africa. DogHaven Group will not create thin route pages until each guide can provide enough value, source reminders, preparation structure, and route-specific planning context.",
          "Downloadable travel resources will sit in the <a href=\"/downloads\">Download Library</a>, including the planned International Dog Travel Planner and Moving Abroad With a Dog Checklist. These resources should be branded, useful, and honest about the limits of general guidance."
        ]
      }
    ]
  },
  "moving-abroad-with-a-dog": {
    slug: "global-travel/moving-abroad-with-a-dog",
    title: "Moving Abroad With a Dog | DogHaven Global Guide",
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
          "Budget for more than the ticket. Owners may need veterinary appointments, certificates, approved crates, agents, import fees, accommodation changes, transport to and from airports, emergency funds, and replacement supplies after arrival. The most common mistakes are starting too late, assuming online anecdotes are current rules, underestimating housing friction, and failing to protect the dog's routine during the transition. A branded downloadable checklist is planned in the <a href=\"/downloads\">Download Library</a>."
        ]
      }
    ]
  },
  "route-guides": {
    slug: "global-travel/route-guides",
    title: "DogHaven Route Guides | Future International Dog Travel Routes",
    description:
      "DogHaven Route Guides is the future hub for detailed dog travel routes such as South Africa to the UK, USA to Italy, Italy to Australia, and UK to South Africa.",
    eyebrow: "Route Guides",
    hero: "Route guides will be built only when they can be useful enough to deserve their own pages.",
    heroImage: { src: "/images/doghavengroup/travel/route-guides-world-map.svg", alt: "A world map with future dog travel route guide lines between South Africa, the UK, the USA, Italy, and Australia." },
    sections: [
      {
        title: "How route guides will work",
        body: [
          "DogHaven Route Guides will eventually cover specific movements such as taking a dog from South Africa to the UK, taking a dog from the USA to Italy, taking a dog from Italy to Australia, and taking a dog from the UK to South Africa. These routes should not be published as thin pages with generic checklists. Each route needs current-source reminders, document sequence structure, airline and routing considerations, arrival planning, cost awareness, and practical preparation guidance.",
          "Until those pages are ready, this hub explains the model and links readers to broader planning resources. Start with <a href=\"/global-travel/moving-abroad-with-a-dog\">moving abroad with a dog</a>, use the <a href=\"/lab/dog-travel-checklist\">Dog Travel Checklist</a>, and prepare downloadable worksheets through the <a href=\"/downloads\">Download Library</a>."
        ],
        image: { src: "/images/doghavengroup/travel/dog-route-planning-desk.svg", alt: "A route planning desk for international dog travel with maps, documents, and timing notes." }
      }
    ]
  },
  lab: {
    slug: "lab",
    title: "DogHaven Lab | Premium Dog Tools, Quizzes, and Planners",
    description:
      "DogHaven Lab brings together premium dog ownership tools, quizzes, calculators, checklists, name ideas, myth or fact learning, breed games, and daily trivia concepts.",
    eyebrow: "DogHaven Lab",
    hero: "Premium planning tools for dog ownership decisions that deserve more than guesswork.",
    heroImage: { src: "/images/doghavengroup/lab/doghaven-lab-tools.svg", alt: "A premium DogHaven Lab workspace with calculators, quizzes, checklists, and dog planning tools." },
    sections: [
      {
        title: "Useful tools without childish styling",
        body: [
          "DogHaven Lab is the interactive layer of the group site. It exists for owners who want to compare dog costs, think through breed fit, prepare for a puppy, organize travel, and eventually use playful but still polished experiences such as a dog name generator, care myth or fact quiz, guess the breed game, and daily trivia challenge.",
          "The first working tools are the <a href=\"/lab/global-dog-cost-calculator\">Global Dog Cost Calculator</a>, <a href=\"/lab/breed-fit-quiz\">Breed Fit Quiz</a>, <a href=\"/lab/puppy-readiness-quiz\">Puppy Readiness Quiz</a>, and <a href=\"/lab/dog-travel-checklist\">Dog Travel Checklist</a>."
        ],
        image: { src: "/images/doghavengroup/lab/interactive-tool-suite.svg", alt: "DogHaven interactive tool suite with cost, breed, puppy, and travel modules." }
      }
    ]
  },
  academy: {
    slug: "academy",
    title: "DogHaven Academy | Global Dog Owner Learning Guides",
    description:
      "DogHaven Academy is a global learning hub for first-time owners, puppy planning, apartment dogs, family ownership, senior dog care, behavior, safety, and nutrition basics.",
    eyebrow: "DogHaven Academy",
    hero: "Serious learning guides for dog owners who want calm, responsible, globally useful education.",
    heroImage: { src: "/images/doghavengroup/home/doghaven-academy-reading-room.svg", alt: "A refined DogHaven Academy reading room for global dog owner education." },
    sections: [
      {
        title: "The learning layer of DogHaven Group",
        body: [
          "DogHaven Academy is designed for long professional guides rather than scattered tips. It covers first-time dog owners, puppy planning, apartment dog ownership, family dog ownership, senior dog care, behavior basics, safety, and nutrition basics with careful wording and internal links to tools, downloads, and country resources.",
          "The first long-form guide is the <a href=\"/academy/first-time-dog-owner-guide\">First-Time Dog Owner Guide</a>, written for global readers rather than copied from any country site. Future Academy guides should build the same standard: practical, warm, polished, and explicit about when readers need a veterinarian, trainer, local authority, or other qualified professional."
        ],
        image: { src: "/images/doghavengroup/downloads/owner-starter-guide-cover.svg", alt: "A premium dog owner starter guide cover for DogHaven Academy learning resources." }
      }
    ]
  },
  "first-time-dog-owner-guide": {
    slug: "academy/first-time-dog-owner-guide",
    title: "First-Time Dog Owner Guide | DogHaven Academy",
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
          "DogHaven Academy will keep expanding with puppy planning, apartment dog ownership, family dog ownership, senior dog care, behavior basics, safety, and nutrition basics. The planned Global Dog Owner Starter Guide in the <a href=\"/downloads/global-dog-owner-starter-guide\">Download Library</a> will provide a branded worksheet-style resource for this first stage."
        ],
        image: { src: "/images/doghavengroup/downloads/puppy-first-month-planner.svg", alt: "A puppy first month planner with feeding, sleeping, vet, and training notes." }
      }
    ]
  },
  journal: {
    slug: "journal",
    title: "DogHaven Journal | Global Dog Ownership Insights",
    description:
      "DogHaven Journal is the premium newsroom and insights section for global dog news, travel updates, safety, ownership trends, network updates, and country spotlight pieces.",
    eyebrow: "DogHaven Journal",
    hero: "A premium insights room for global dog ownership, travel planning, safety, trends, and network updates.",
    heroImage: { src: "/images/doghavengroup/journal/journal-editorial-desk.svg", alt: "A premium editorial desk for DogHaven Journal with global dog ownership notes." },
    sections: [
      {
        title: "Not a generic blog grid",
        body: [
          "DogHaven Journal is the editorial and newsroom layer of the group site, but the website itself should not feel like a blog. The Journal can publish launch essays, methodology notes, travel planning explainers, safety updates, ownership trend analysis, country spotlights, and DogHaven network updates when there is something useful to say.",
          "Phase 1 includes honest evergreen launch articles without fake dates, fake news, or invented authority. Categories include global dog news, dog travel updates, dog safety, dog ownership trends, DogHaven network updates, and country spotlight."
        ],
        image: { src: "/images/doghavengroup/journal/global-dog-newsroom.svg", alt: "DogHaven global dog newsroom with country notes, travel planning, and editorial boards." }
      }
    ]
  },
  downloads: {
    slug: "downloads",
    title: "DogHaven Download Library | Free Dog Ownership Planners",
    description:
      "DogHaven Download Library is the premium hub for branded dog owner PDFs, planners, checklists, worksheets, travel resources, and cost planning workbooks.",
    eyebrow: "Download Library",
    hero: "Free branded planners and worksheets for dog owners who want decisions to feel organized.",
    heroImage: { src: "/images/doghavengroup/downloads/download-library-premium-guides.svg", alt: "A premium library of DogHaven branded dog owner guides, planners, and checklists." },
    sections: [
      {
        title: "A practical resource library",
        body: [
          "The Download Library will house free branded PDF guides, planners, checklists, and worksheets. Planned resources include the Global Dog Owner Starter Guide, Moving Abroad With a Dog Checklist, International Dog Travel Planner, Dog Cost Planning Workbook, Puppy First Month Planner, Dog Emergency Preparedness Checklist, and Dog Breed Fit Worksheet.",
          "Every downloadable resource should use the Dog Haven Group logo, black, gold, and white premium identity, a professional cover page, footer links, and clear links back to DogHavenGroup.com. The first landing page is the <a href=\"/downloads/global-dog-owner-starter-guide\">Global Dog Owner Starter Guide</a>."
        ],
        image: { src: "/images/doghavengroup/downloads/owner-starter-guide-cover.svg", alt: "A premium cover concept for the Global Dog Owner Starter Guide." }
      }
    ]
  },
  countries: {
    slug: "countries",
    title: "DogHaven Country Network | Global DogHaven Sites",
    description:
      "Explore the DogHaven country network, including South Africa, United States, Italy, and future planned countries such as the UK, Australia, Canada, New Zealand, Ireland, Germany, France, and Spain.",
    eyebrow: "Country Network",
    hero: "The country network lets each DogHaven site serve its local audience while the group site keeps the global framework coherent.",
    heroImage: { src: "/images/doghavengroup/countries/doghaven-country-network.svg", alt: "A premium country network map for DogHaven sites and future expansion." },
    sections: [
      {
        title: "Local sites with a shared global standard",
        body: [
          "DogHaven Group is the parent platform, not a replacement for local country sites. South Africa, the United States, and Italy each deserve their own local editorial lens, while the group site handles global ownership intelligence, travel planning, tools, downloads, methodology, and the future country expansion structure.",
          "Future country entries are shown as planned markets only. DogHaven Group should not create thin future country pages until there is enough useful content, local context, and editorial purpose to justify them."
        ],
        image: { src: "/images/doghavengroup/countries/future-country-expansion.svg", alt: "Future DogHaven country expansion shown with planned markets across several regions." }
      }
    ]
  },
  "doghaven-universe": {
    slug: "doghaven-universe",
    title: "DogHaven Universe | Global Platform Map",
    description:
      "DogHaven Universe explains the full global platform: World Atlas, Global Travel, Passport Planner, Route Guides, Lab, Academy, Journal, Download Library, Safety Center, Country Network, and future Data Hub.",
    eyebrow: "Platform map",
    hero: "DogHaven Universe is the internal map of a global dog ownership platform built to grow carefully.",
    heroImage: { src: "/images/doghavengroup/home/doghaven-universe-map.svg", alt: "A premium internal map of the DogHaven Universe platform sections." },
    sections: [
      {
        title: "How the platform fits together",
        body: [
          "The DogHaven Universe includes the World Atlas, Global Travel, Passport Planner concept, Route Guides, Lab, Academy, Journal, Download Library, Safety Center, Country Network, and a future Data Hub. Each section has a role. The Atlas compares countries, Travel organizes movement, Lab turns decisions into tools, Academy teaches, Journal publishes insight, and the Country Network routes readers into local sites.",
          "A serious mother site needs this structure because dog ownership is no longer only local for many families. People move countries, compare costs, travel with dogs, rent apartments, plan around climates, and look for trustworthy education that does not collapse into either vague inspiration or unsupported claims."
        ],
        image: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "DogHaven platform sections shown as connected global ownership systems." }
      }
    ]
  },
  about: {
    slug: "about",
    title: "About DogHaven Group | Global Dog Ownership Platform",
    description:
      "Learn about DogHaven Group, the premium global parent platform for the DogHaven country network, ownership intelligence, travel planning, tools, Academy, Journal, and downloads.",
    eyebrow: "About",
    hero: "DogHaven Group exists to make responsible dog ownership easier to plan across countries, homes, and life stages.",
    heroImage: { src: "/images/doghavengroup/home/global-dog-ownership-hero.svg", alt: "DogHaven Group global dog ownership platform brand scene." },
    sections: [
      {
        title: "A parent brand with a practical mission",
        body: [
          "DogHaven Group is the global home of the DogHaven network. It connects local country sites with broader planning resources for dog ownership, international travel, learning, cost awareness, tools, and responsible editorial guidance.",
          "The group site is built to be serious, scalable, and useful. It avoids fake authority, fake statistics, and copied country-site content. Its job is to give readers a polished global framework and then route them to local DogHaven sites when local context matters."
        ]
      }
    ]
  },
  "editorial-policy": {
    slug: "editorial-policy",
    title: "Editorial Policy | DogHaven Group",
    description: "DogHaven Group's editorial policy for professional, useful, non-misleading dog ownership content across global and country-specific resources.",
    eyebrow: "Editorial Policy",
    hero: "DogHaven Group content should be useful, careful, original, and honest about uncertainty.",
    heroImage: { src: "/images/doghavengroup/journal/journal-editorial-desk.svg", alt: "DogHaven editorial standards desk with notes and review materials." },
    sections: [
      {
        title: "How we approach content",
        body: [
          "DogHaven Group publishes educational dog ownership content, planning frameworks, tools, and editorial resources. We do not present general content as veterinary, legal, financial, or government advice. Where rules, health matters, travel requirements, or legal obligations are involved, readers are reminded to consult current official sources and qualified professionals.",
          "Content should be original to DogHaven Group, distinct from local country sites, and written for real reader value rather than search-engine volume. We avoid fake reviews, fake authorship claims, fake statistics, and thin doorway pages."
        ]
      }
    ]
  },
  "research-methodology": {
    slug: "research-methodology",
    title: "Research Methodology | DogHaven Group",
    description: "DogHaven Group's research methodology for global dog ownership comparisons, cost planning, travel topics, and future index development.",
    eyebrow: "Research Methodology",
    hero: "DogHaven methodology begins with transparency, practical assumptions, and clear limits.",
    heroImage: { src: "/images/doghavengroup/countries/global-ownership-index-framework.svg", alt: "DogHaven research methodology framework for global dog ownership comparison." },
    sections: [
      {
        title: "Planning frameworks before false precision",
        body: [
          "DogHaven Group uses planning frameworks for topics where precise universal claims would be misleading. Cost content is framed as ranges and assumptions. Travel and law content includes reminders to verify current official rules. The Global Dog Ownership Index begins as a methodology before any public ranking is claimed.",
          "As the network grows, country-specific research should be reviewed through local context, official-source checks where relevant, and a clear distinction between editorial guidance and professional advice."
        ]
      }
    ]
  },
  contact: {
    slug: "contact",
    title: "Contact DogHaven Group",
    description: "Contact DogHaven Group at info@doghavengroup.com for global platform, editorial, network, and website enquiries.",
    eyebrow: "Contact",
    hero: "Contact DogHaven Group for platform, editorial, and network enquiries.",
    heroImage: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "DogHaven Group contact and network map." },
    sections: [
      {
        title: "Contact details",
        body: [
          "For DogHaven Group enquiries, email <a href=\"mailto:info@doghavengroup.com\">info@doghavengroup.com</a>. The official website is <a href=\"https://doghavengroup.com\">https://doghavengroup.com</a>.",
          "Please do not use general website content as a substitute for veterinary, legal, transport, or government advice. For urgent dog health concerns, contact a qualified veterinarian or local emergency service."
        ]
      }
    ]
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy | DogHaven Group",
    description: "DogHaven Group privacy policy covering basic website privacy principles for DogHavenGroup.com.",
    eyebrow: "Privacy Policy",
    hero: "DogHaven Group is designed with a restrained, transparent approach to website privacy.",
    heroImage: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "DogHaven Group website privacy and trust page." },
    sections: [
      {
        title: "Privacy overview",
        body: [
          "This privacy policy is a Phase 1 website policy and should be reviewed by a qualified legal professional before final deployment. DogHaven Group may collect information voluntarily submitted through contact links or future forms, along with standard technical information used to operate and improve the website.",
          "DogHaven Group should avoid collecting unnecessary personal data. If analytics, email tools, forms, advertising, or third-party services are added, this policy must be updated to describe those services accurately."
        ]
      }
    ]
  },
  terms: {
    slug: "terms",
    title: "Terms | DogHaven Group",
    description: "DogHaven Group website terms for use of DogHavenGroup.com content, tools, downloads, and educational resources.",
    eyebrow: "Terms",
    hero: "DogHaven Group provides educational planning content and tools subject to sensible website terms.",
    heroImage: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "DogHaven Group terms and website use page." },
    sections: [
      {
        title: "Website terms",
        body: [
          "These terms are a Phase 1 website draft and should be reviewed by a qualified legal professional before final deployment. DogHaven Group content is provided for general educational and planning purposes only. It is not veterinary, legal, financial, transport, or government advice.",
          "Users are responsible for checking current official sources, qualified professionals, and local requirements before making decisions about dog health, ownership obligations, travel, relocation, or spending."
        ]
      }
    ]
  },
  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer | DogHaven Group",
    description: "DogHaven Group disclaimer for educational dog ownership, travel, cost, Academy, Journal, and planning tool content.",
    eyebrow: "Disclaimer",
    hero: "DogHaven Group helps readers plan, but it does not replace qualified professional or official advice.",
    heroImage: { src: "/images/doghavengroup/home/platform-section-map.svg", alt: "DogHaven Group disclaimer and responsible guidance page." },
    sections: [
      {
        title: "Important limitations",
        body: [
          "DogHaven Group publishes general educational content, planning tools, and editorial resources. Nothing on this website should be treated as veterinary, legal, financial, airline, import, export, or government advice. Rules and health requirements can change, and individual dogs have individual needs.",
          "Before acting on travel, legal, medical, nutrition, cost, or ownership guidance, consult current official sources and qualified professionals. Tool outputs are estimates or educational prompts, not guarantees."
        ]
      }
    ]
  }
};

export const journalArticles = [
  {
    slug: "introducing-dog-haven-group",
    title: "Introducing DogHaven Group",
    description: "Why DogHaven Group exists as the global home of the DogHaven network and what Phase 1 of the platform is built to do.",
    image: "/images/doghavengroup/journal/introducing-doghaven-group.svg",
    summary:
      "A launch essay explaining DogHaven Group as the parent platform for global dog ownership planning, country sites, travel guidance, learning, tools, and downloadable resources.",
    body: [
      "DogHaven Group begins with a simple but serious idea: dog ownership is local in the details, but increasingly global in the decisions. People compare countries, move with dogs, travel internationally, rent apartments, prepare for puppies, budget for care, and look for advice that respects both practical reality and emotional commitment.",
      "The group site is designed as the mother platform for the DogHaven network. DogHaven South Africa, DogHaven United States, and DogHaven Italy can serve local audiences with local context, while DogHavenGroup.com builds the global framework around ownership intelligence, travel planning, tools, Academy guides, Journal insights, and branded downloads.",
      "Phase 1 is intentionally foundational. It creates the structure, editorial standard, country gateways, interactive tools, and trust pages needed for a premium global platform. Future growth should be careful rather than noisy: useful country expansion, better data, stronger downloads, route guides, and deeper Academy resources."
    ]
  },
  {
    slug: "how-doghaven-will-grow-across-countries",
    title: "How DogHaven Will Grow Across Countries",
    description: "A transparent look at how the DogHaven country network can expand without creating thin pages or flattening local ownership realities.",
    image: "/images/doghavengroup/journal/doghaven-country-growth.svg",
    summary:
      "An evergreen network note on future DogHaven countries, local editorial purpose, and the importance of launching only when each market has real value.",
    body: [
      "The DogHaven network is built to grow, but growth should not mean creating shallow pages for every country name. A useful country site needs local editorial purpose, practical ownership context, and a clear relationship to the global parent platform.",
      "Future countries such as the United Kingdom, Australia, Canada, New Zealand, Ireland, Germany, France, and Spain are planned as part of the network vision. They should launch when DogHaven can provide meaningful guidance for local dog owners and connect that guidance to global planning resources.",
      "DogHaven Group will remain the framework layer. It can compare countries, develop methodology, organize travel planning, host tools, and publish shared learning resources. Country sites can then focus on the local realities that matter most to readers in that market."
    ]
  },
  {
    slug: "why-global-dog-travel-needs-better-planning",
    title: "Why Global Dog Travel Needs Better Planning",
    description: "A DogHaven Journal essay on why international dog travel requires early planning, official-source checks, and better owner preparation.",
    image: "/images/doghavengroup/journal/global-dog-travel-planning.svg",
    summary:
      "A practical editorial piece explaining why dog travel content should focus on preparation structure, source reminders, and calm decision-making.",
    body: [
      "International dog travel is one of the clearest reasons DogHaven Group needs to exist. A dog cannot be packed into a relocation plan as an afterthought. Documents, microchip checks, rabies timing, airline policies, route decisions, housing, arrival routines, and emergency planning all need attention.",
      "The rules can change, and online anecdotes are often out of date. DogHaven travel content should help owners organize their thinking while reminding them to check current official government, airline, and veterinary sources before acting.",
      "The Global Travel hub, Moving Abroad guide, Route Guides concept, Dog Travel Checklist, and planned PDF resources are meant to work together. They give dog owners a structured planning pathway without pretending that a general website can replace professional or official advice."
    ]
  }
];
