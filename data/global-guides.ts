export type GlobalGuide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  hero: { src: string; alt: string };
  intro: string[];
  sections: { title: string; body: string[] }[];
  checklist: string[];
};

export const globalGuides: GlobalGuide[] = [
  {
    slug: "best-dogs-for-hot-climates",
    title: "Best Dogs for Hot Climates: Breed Traits, Heat Planning and Safer Routines",
    description: "Compare the traits that can help dogs cope with hot climates, then plan shade, exercise, hydration, grooming and veterinary support for your actual region.",
    eyebrow: "Global owner guide · Climate and breed fit",
    hero: { src: "/images/doghavengroup/guides/hot-climate-saluki.webp", alt: "A Saluki standing with its owner beside a shaded desert-edge home in warm sunlight" },
    intro: [
      "Choosing a dog for a hot climate is not a simple list of short-haired breeds. Heat tolerance depends on body shape, coat, age, weight, fitness, humidity, shade, airflow, exercise timing and the individual dog's health. A breed that handles dry heat may be uncomfortable in a humid city, while a local mixed-breed dog may be better adapted to the household than a fashionable imported breed.",
      "The most useful question is not which dog is immune to heat. It is whether the household can build a safe daily rhythm around the climate. That means cool resting space, reliable water, shaded outdoor areas, suitable walking surfaces, emergency planning and a willingness to reduce activity when conditions are unsafe."
    ],
    sections: [
      { title: "Traits that deserve attention", body: ["A functional muzzle, moderate body weight, sensible coat management and a history of work in warm conditions may be helpful, but none of these traits guarantees safety. Short-muzzled dogs can face particular breathing and heat risks, while very heavy or thick-coated dogs may need more careful management in warm weather.", "Look at the actual dog as well as the breed name. Age, previous illness, medication, fitness and weight can change the plan. Ask a veterinarian how to recognise early heat stress and what activity is appropriate for that individual dog."] },
      { title: "Build the cool-day version of the routine", body: ["Walk early or late when possible, check the pavement with your hand, carry water and give the dog permission to rest. Replace a long midday outing with scent games, short training sessions, food puzzles and calm indoor enrichment. A dog does not need to be exhausted to have had a worthwhile day.", "Homes should offer shade, airflow and a cool indoor retreat. Cars, enclosed balconies, metal surfaces and poorly ventilated kennels can become dangerous quickly, even when the weather initially feels manageable to a person."] },
      { title: "Breeds are a starting point, not a guarantee", body: ["A responsible choice considers local veterinary access, parasite pressure, grooming support, housing rules and the owner's ability to change plans during heatwaves. Meet the individual dog, ask about health history and avoid choosing solely from a photograph or a short listicle."] }
    ],
    checklist: ["Map the coolest safe areas of the home", "Choose exercise times around heat and humidity", "Learn early heat-stress warning signs", "Budget for preventive veterinary and parasite care", "Prepare an emergency transport plan"]
  },
  {
    slug: "best-dogs-for-apartments",
    title: "Best Dogs for Apartments: How to Match a Breed to Real City Life",
    description: "Find out what really makes a dog suitable for apartment living, including noise, exercise, stairs, separation, housing rules and individual temperament.",
    eyebrow: "Global owner guide · City living",
    hero: { src: "/images/doghavengroup/guides/apartment-italian-greyhound.webp", alt: "An Italian Greyhound relaxing beside its owner in a bright city apartment" },
    intro: [
      "The best apartment dog is not automatically the smallest dog. A successful city dog is one whose exercise, toilet, rest, noise, grooming and social needs can be met within the building and neighbourhood where the household actually lives. A large calm adult may be easier in an apartment than a small dog that is vocal, restless or unable to settle.",
      "Before choosing a breed, walk through an ordinary weekday. Consider lifts and stairs, neighbours, hot corridors, nearby green space, working hours, building rules, balcony safety and what happens when the weather is bad. A realistic routine is more valuable than a perfect-sounding breed description."
    ],
    sections: [
      { title: "Measure the lifestyle, not just the floor plan", body: ["Square metres matter, but they are only one part of the decision. Access to safe walking routes, the time available for interaction, the dog's ability to rest and the owner's plan for toilet breaks may matter more. Puppies and adolescents usually create more disruption than their adult size suggests.", "Ask whether the dog can move comfortably between its bed, water, feeding area and the door. Keep balconies secure and avoid assuming that a dog will naturally understand shared corridors, stairs, lifts or unfamiliar sounds."] },
      { title: "Noise and separation are central city questions", body: ["Barking, scratching, door reactions and distress when alone can affect neighbours and the dog's welfare. Gradual alone-time training, predictable departures, enrichment and professional help when needed are part of apartment ownership, not optional extras.", "A dog that gets a long walk but spends the rest of the day anxious has not been given a good routine. Calmness and recovery should be included in the suitability test."] },
      { title: "Check permission before you fall in love", body: ["Read the lease, pet addendum, building rules, insurance requirements and local restrictions in writing. Ask how size, breed, number of pets, lifts, communal gardens and visitor access are handled. A verbal promise may not protect the household later."] }
    ],
    checklist: ["Read every building and rental pet rule", "Plan toilet breaks for workdays and emergencies", "Test nearby walking routes at busy times", "Create a quiet rest area away from the front door", "Plan gradual alone-time training"]
  },
  {
    slug: "first-time-dog-owner-breed-guide",
    title: "First-Time Dog Owner Breed Guide: How to Choose a Dog You Can Truly Support",
    description: "A practical first-time dog owner guide to temperament, exercise, training, health costs, puppy decisions and choosing an individual dog responsibly.",
    eyebrow: "Global owner guide · First dog planning",
    hero: { src: "/images/doghavengroup/guides/first-time-havanese.webp", alt: "A Havanese sitting beside a first-time owner preparing a notebook, leash and bowl at home" },
    intro: [
      "Choosing a first dog is less about finding the breed everyone calls easy and more about understanding what your home can repeat on an ordinary Tuesday. Work hours, budget, housing, transport, energy, travel and the support available when something goes wrong all shape the decision.",
      "A friendly appearance does not predict trainability, health, grooming or adult size. First-time owners do well when they compare several realistic options, meet adult dogs, ask direct questions about health and temperament, and prepare the home before the dog arrives."
    ],
    sections: [
      { title: "Start with your non-negotiables", body: ["Write down the maximum daily exercise you can sustain, the longest time the dog may be alone, the size and noise limits of the home, the level of grooming you can manage and the monthly budget you can protect. Include holidays, illness and unexpected veterinary costs.", "If children, cats or other dogs are part of the home, describe the real supervision and separation plan. Do not rely on a breed label to solve a household management problem."] },
      { title: "Temperament is more useful than popularity", body: ["A first-time owner may prefer a dog that can recover from new experiences, accepts gentle handling, enjoys learning and can settle after activity. That description can occur in many breeds and mixed-breed dogs, but the individual still needs to be assessed carefully.", "Ask the breeder, rescue organisation or current owner what the dog is like when tired, frustrated, alone, handled, around visitors and in a new place. Those answers are often more useful than a ranking of the most popular breeds."] },
      { title: "Prepare before the first night", body: ["Arrange a veterinarian, identification, food plan, safe sleeping space, cleaning supplies, transport method and a first-week routine. Decide who provides care when the main owner is at work. Early help from a qualified reward-based trainer can prevent small uncertainties becoming exhausting patterns."] }
    ],
    checklist: ["Write the real weekday routine", "Set a first-year veterinary budget", "Meet adult dogs, not only puppies", "Prepare secure sleeping and feeding areas", "Choose support for training and emergencies"]
  },
  {
    slug: "dog-travel-planning-guide",
    title: "Travelling With a Dog: A Global Planning Guide for Safer Journeys",
    description: "Plan an international or domestic dog journey with a practical checklist covering health documents, transport, accommodation, borders, rest and backup plans.",
    eyebrow: "Global owner guide · Travel and relocation",
    hero: { src: "/images/doghavengroup/guides/dog-travel-golden-retriever.webp", alt: "A Golden Retriever travelling calmly with its owner at a bright modern train station" },
    intro: [
      "Dog travel becomes much easier when it is treated as a chain of separate decisions rather than one booking. The destination's entry rules, the origin country's export requirements, the carrier's policy, the dog's health, the route, accommodation and the return journey can all be different.",
      "Rules change and can depend on the exact country, territory, transit point, document, microchip, vaccination timing and transport method. Use this guide to organise the questions, then confirm the current requirements with official authorities, the carrier and a veterinarian before paying for a non-refundable journey."
    ],
    sections: [
      { title: "Build the route from the most restrictive step", body: ["Start with the destination and every transit country. Check identification, rabies timing, certificates, parasite treatments, quarantine conditions, approved routes and whether the dog can travel in cabin, hold, vehicle or on public transport. A route that looks simple on a map may have a difficult connection or document requirement.", "Keep copies of documents in a secure digital folder and a physical travel file. Record expiry dates and allow time for veterinary appointments, laboratory processing and authority approval where required."] },
      { title: "Train the journey before the departure day", body: ["A dog should be comfortable with its carrier, harness, car, station sounds, waiting, toileting away from home and calm handling before a long journey. Take short practice trips and create a familiar rest routine. Do not introduce every new piece of equipment on the day of travel.", "Plan water, food, medication instructions, identification, cleaning supplies, a lead backup and a quiet place to decompress after arrival. Travel is not finished when the vehicle or aircraft stops."] },
      { title: "Keep a plan B", body: ["Prepare for delays, missed connections, illness, a carrier refusal, weather disruption or accommodation changes. Know where veterinary help is available at the destination and keep enough flexibility for the dog to rest. Official requirements and commercial policies should be checked again close to departure."] }
    ],
    checklist: ["Check destination and transit rules", "Confirm carrier and accommodation policies", "Book veterinary and document appointments early", "Practise the equipment and route", "Prepare copies, emergency contacts and a backup plan"]
  },
  {
    slug: "native-dog-breeds-by-country",
    title: "Native Dog Breeds by Country: How Place, Work and Culture Shape Dogs",
    description: "Explore native and country-associated dog breeds through history, working roles, climate, culture and the responsible questions behind modern ownership.",
    eyebrow: "World Atlas guide · Breed origins",
    hero: { src: "/images/doghavengroup/guides/native-breed-basenji.webp", alt: "A Basenji standing with its owner in a warm African landscape near a village path" },
    intro: [
      "Native dog breeds are often presented as colourful names on a map, but their stories are much richer. Dogs were shaped by work, climate, terrain, trade, settlement, local preferences and relationships with people. A country-associated breed may have a long history in one region while its modern population lives all over the world.",
      "Understanding origins can improve ownership decisions, but it should not turn into romantic mythology. A breed's past does not predict every individual dog, and a photograph of a dog in its historic landscape does not explain the housing, health, training or welfare needs of a modern household."
    ],
    sections: [
      { title: "Origin is a story, not a guarantee", body: ["Breed histories help explain why a dog may notice movement, enjoy scent work, tolerate weather, guard space, retrieve, herd or prefer independence. They do not guarantee temperament, health or suitability. Ask how the historical trait appears in ordinary family life before choosing the breed.", "Country names can also simplify complicated histories. Breeds developed across regions, borders and changing populations, so credible sources and careful wording matter more than a dramatic claim about one exact birthplace."] },
      { title: "Compare working purpose with modern life", body: ["A dog developed for livestock, hunting, water work or guarding may now live in an apartment or suburban home. That can work when the household provides appropriate outlets, boundaries and rest. It can become difficult when the dog's strongest behaviours are treated as problems after the choice has already been made.", "Look for pages that explain the work behind the appearance and the modern compromises an owner must make. That is more useful than a list of rare breeds without practical context."] },
      { title: "A responsible global breed library", body: ["The best international resource connects country stories with individual breed pages, local ownership conditions, climate, travel rules, adoption context and current professional guidance. It also makes uncertainty visible when a detail varies by jurisdiction or needs verification."] }
    ],
    checklist: ["Read the breed's historical purpose", "Separate country origin from modern individual temperament", "Compare climate and housing honestly", "Use current local welfare and veterinary guidance", "Keep a source list for claims that may change"]
  }
];
