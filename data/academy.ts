export type AcademyTopic = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  hero: string;
  image: { src: string; alt: string };
  sections: { title: string; body: string[]; checklist: string[] }[];
  links: { href: string; label: string }[];
};

export const academyTopics: AcademyTopic[] = [
  {
    slug: "puppy-planning",
    title: "Puppy Planning | Dog Haven Group Academy",
    description: "A practical Dog Haven Group Academy guide to puppy preparation, first-month routines, safe spaces, social learning, supplies, and household roles.",
    eyebrow: "Academy guide",
    hero: "A puppy plan should be calm, practical, and ready before the puppy arrives.",
    image: { src: "/images/doghavengroup/downloads/puppy-first-month-planner.svg", alt: "A puppy first month planner with feeding, sleeping, vet, and training notes." },
    sections: [
      {
        title: "Prepare the first month before the first night",
        body: [
          "Puppy planning is not a shopping list. The first month needs sleep structure, toilet routines, safe spaces, cleaning systems, gentle social learning, veterinary registration, food planning, and clear household roles.",
          "A puppy arrives without understanding your home. Decide who handles nights, where the puppy rests, how children and visitors behave, what spaces are off-limits, and when professional help should be brought in."
        ],
        checklist: ["Sleeping space chosen", "Toilet routine planned", "Vet shortlisted or registered", "Cleaning supplies ready", "Safe storage checked", "Household roles agreed"]
      },
      {
        title: "Use readiness signals, not pressure",
        body: [
          "If the household is rushing, pause. A slower start is kinder than a chaotic first week. Use the Puppy Readiness Quiz and the starter guide worksheet to find gaps before a puppy date becomes fixed.",
          "This guide is educational and should sit alongside local veterinary, trainer, adoption, or breeder guidance."
        ],
        checklist: ["Budget checked", "Time commitment honest", "Training support identified", "Emergency transport plan ready"]
      }
    ],
    links: [{ href: "/lab/puppy-readiness-quiz", label: "Take the Puppy Readiness Quiz" }, { href: "/downloads/global-dog-owner-starter-guide", label: "Download the Starter Guide" }]
  },
  {
    slug: "apartment-dog-ownership",
    title: "Apartment Dog Ownership | Dog Haven Group Academy",
    description: "A Dog Haven Group Academy guide to owning a dog in apartments and compact homes with routines, enrichment, noise planning, and building rules.",
    eyebrow: "Academy guide",
    hero: "Apartment dog ownership depends on routine, not just floor space.",
    image: { src: "/images/doghavengroup/countries/italy-apartment-and-travel-dogs.svg", alt: "Dog ownership in compact city living with apartment, streets, and travel planning." },
    sections: [
      {
        title: "Compact living needs structure",
        body: [
          "A dog can live well in a compact home when the routine is realistic. Toilet access, exercise, enrichment, noise control, safe resting space, lifts or stairs, and building rules matter more than a simple apartment-versus-house label.",
          "Owners should check rental rules, body corporate or building policies, nearby walking routes, and whether the dog can rest calmly when normal city noise happens."
        ],
        checklist: ["Building or rental rules checked", "Walking route planned", "Noise plan considered", "Resting area protected", "Enrichment routine ready"]
      },
      {
        title: "Match dog choice to the building reality",
        body: [
          "Breed and size are only part of apartment fit. Energy, barking tendency, training support, grooming, stairs, lift access, and owner schedule all shape daily success.",
          "Use the Breed Fit Quiz as a prompt, then research individual dogs carefully and seek professional support when needed."
        ],
        checklist: ["Daily exercise sustainable", "Grooming needs realistic", "Training support available", "Emergency exit plan clear"]
      }
    ],
    links: [{ href: "/lab/breed-fit-quiz", label: "Use the Breed Fit Quiz" }, { href: "/world-atlas", label: "Compare Country Context" }]
  },
  {
    slug: "family-dog-ownership",
    title: "Family Dog Ownership | Dog Haven Group Academy",
    description: "A careful Dog Haven Group Academy guide to family dog planning, child-dog routines, supervision, training support, and household responsibilities.",
    eyebrow: "Academy guide",
    hero: "A family dog plan should be led by adults, not wishful thinking.",
    image: { src: "/images/doghavengroup/home/dog-home-routine-planning.svg", alt: "A calm home routine planning scene for a new dog owner." },
    sections: [
      {
        title: "Adults own the responsibility",
        body: [
          "Children may love the idea of a dog, but adults remain responsible for safety, training, costs, supervision, exercise, grooming, veterinary care, and household boundaries.",
          "A family dog decision should include schedules, school-day routines, visitor rules, toy and food boundaries, quiet spaces, and how adults will intervene when either the dog or children are overwhelmed."
        ],
        checklist: ["Adult responsibilities assigned", "Child-dog boundaries agreed", "Quiet dog space protected", "Visitor rules written", "Training support identified"]
      },
      {
        title: "Choose temperament and support over fantasy",
        body: [
          "No breed label guarantees family fit. Look for individual temperament, responsible sourcing or adoption support, health considerations, training plan, and realistic supervision.",
          "Use Dog Haven Group tools to prepare, but seek qualified professional support for safety or behavior concerns."
        ],
        checklist: ["Temperament researched", "Supervision plan realistic", "Budget includes training", "Emergency contacts ready"]
      }
    ],
    links: [{ href: "/academy/first-time-dog-owner-guide", label: "Read First-Time Dog Owner Guide" }, { href: "/lab/breed-fit-quiz", label: "Use Breed Fit Quiz" }]
  },
  {
    slug: "senior-dog-care",
    title: "Senior Dog Care | Dog Haven Group Academy",
    description: "A general educational Dog Haven Group Academy guide to planning senior dog routines, comfort, vet relationships, mobility, and household adjustments.",
    eyebrow: "Academy guide",
    hero: "Senior dog care is about comfort, observation, and steady routines.",
    image: { src: "/images/doghavengroup/home/dog-home-routine-planning.svg", alt: "A calm dog care planning scene with household notes and routine prompts." },
    sections: [
      {
        title: "Plan for changes without guessing medical answers",
        body: [
          "Senior dogs may need changes in routine, surfaces, bedding, exercise, grooming, temperature management, transport, and observation. This guide is educational planning support, not veterinary advice.",
          "Owners should keep a close relationship with a veterinarian and ask about changes in appetite, movement, sleep, behavior, weight, pain signs, medication, and preventive care."
        ],
        checklist: ["Vet relationship current", "Comfortable bedding planned", "Slippery surfaces reviewed", "Transport plan gentle", "Observation notes kept"]
      },
      {
        title: "Protect routine and dignity",
        body: [
          "A senior care plan should make daily life easier. Shorter walks, easier access to water, quiet recovery spaces, grooming support, and predictable routines can reduce stress.",
          "Use emergency planning and family roles so the dog is not left waiting for decisions during a health or mobility change."
        ],
        checklist: ["Water access easy", "Exercise adjusted", "Grooming realistic", "Emergency vet known"]
      }
    ],
    links: [{ href: "/downloads/global-dog-owner-starter-guide", label: "Download Starter Guide" }, { href: "/contact", label: "Contact Dog Haven Group" }]
  },
  {
    slug: "dog-behavior-basics",
    title: "Dog Behavior Basics | Dog Haven Group Academy",
    description: "A Dog Haven Group Academy guide to behavior planning, training expectations, stress signals, enrichment, routine, and when to seek qualified help.",
    eyebrow: "Academy guide",
    hero: "Dog behavior planning starts with routine, observation, and support.",
    image: { src: "/images/doghavengroup/lab/interactive-tool-suite.svg", alt: "Dog Haven Group planning tools for training, behavior, and routine decisions." },
    sections: [
      {
        title: "Behavior is information",
        body: [
          "Behavior problems are not solved by labels alone. Routine, sleep, exercise, fear, pain, boredom, household stress, inconsistent rules, and owner expectations can all shape what a dog does.",
          "This guide does not diagnose behavior. It helps owners prepare to observe patterns and seek qualified veterinary or training support when needed."
        ],
        checklist: ["Routine written down", "Sleep and rest protected", "Exercise realistic", "Triggers observed", "Qualified help identified"]
      },
      {
        title: "Training expectations should be practical",
        body: [
          "Training is not a one-time event. Owners need repeatable cues, rewards, boundaries, patience, and consistency across the household.",
          "If safety is involved, or behavior escalates, seek qualified professional help rather than relying on generic online advice."
        ],
        checklist: ["Household cues consistent", "Rewards planned", "Boundaries agreed", "Safety concerns escalated"]
      }
    ],
    links: [{ href: "/academy/first-time-dog-owner-guide", label: "Read First-Time Guide" }, { href: "/lab/puppy-readiness-quiz", label: "Check Puppy Readiness" }]
  },
  {
    slug: "dog-safety",
    title: "Dog Safety | Dog Haven Group Academy",
    description: "A Dog Haven Group Academy guide to dog safety planning, emergency contacts, weather, household hazards, travel safety, and official-source reminders.",
    eyebrow: "Academy guide",
    hero: "Dog safety is easier when emergency details are ready before they are needed.",
    image: { src: "/images/doghavengroup/travel/vet-document-preparation.svg", alt: "Dog safety and veterinary document preparation notes arranged on a desk." },
    sections: [
      {
        title: "Build a simple safety file",
        body: [
          "A safety file should include primary vet details, emergency vet details, microchip information, medication notes, insurance or emergency savings notes, transport options, and a backup caregiver.",
          "This is educational planning support, not veterinary advice. For urgent health concerns, contact a qualified veterinarian or emergency service."
        ],
        checklist: ["Primary vet recorded", "Emergency vet recorded", "Microchip noted", "Medication notes current", "Backup caregiver agreed"]
      },
      {
        title: "Plan for ordinary hazards",
        body: [
          "Heat, cold, storms, toxic foods, open gates, travel delays, rough surfaces, unfamiliar dogs, and household chemicals are ordinary risks that deserve planning.",
          "Dog Haven Group safety content should stay practical and route readers to qualified or official sources where the topic requires it."
        ],
        checklist: ["Heat/cold plan ready", "Toxic food list reviewed", "Gate and fence habits checked", "Travel safety kit prepared"]
      }
    ],
    links: [{ href: "/lab/dog-travel-checklist", label: "Use Dog Travel Checklist" }, { href: "/downloads/global-dog-owner-starter-guide", label: "Download Starter Guide" }]
  },
  {
    slug: "dog-nutrition-basics",
    title: "Dog Nutrition Basics | Dog Haven Group Academy",
    description: "A cautious Dog Haven Group Academy guide to dog nutrition planning, food budgeting, water, feeding routines, storage, and veterinary guidance.",
    eyebrow: "Academy guide",
    hero: "Nutrition planning should be practical, cautious, and specific to the dog.",
    image: { src: "/images/doghavengroup/downloads/dog-cost-planning-workbook.svg", alt: "A dog cost planning workbook with monthly and yearly budget categories." },
    sections: [
      {
        title: "Food choices need context",
        body: [
          "Dog nutrition planning should consider age, size, health, activity, budget, storage, feeding routine, and veterinary guidance. This guide does not prescribe diets or replace veterinary advice.",
          "Owners should avoid dramatic claims and verify health-related diet questions with a qualified veterinarian, especially where allergies, weight, illness, or specialist diets are involved."
        ],
        checklist: ["Feeding routine planned", "Storage safe", "Water access reliable", "Budget realistic", "Vet guidance sought for health questions"]
      },
      {
        title: "Budget and routine matter",
        body: [
          "Food is often one of the largest recurring cost categories. A realistic plan includes food, treats, bowls, storage, travel feeding, changes over life stage, and what happens if the first food does not suit the dog.",
          "Use the Global Dog Cost Calculator to compare scenarios, then verify real local product and veterinary costs."
        ],
        checklist: ["Monthly food range estimated", "Treats included", "Travel feeding plan ready", "Calculator used"]
      }
    ],
    links: [{ href: "/lab/global-dog-cost-calculator", label: "Use Cost Calculator" }, { href: "/world-atlas/dog-ownership-costs-by-country", label: "Read Cost Guide" }]
  }
];

export const academyTopicMap = Object.fromEntries(academyTopics.map((topic) => [topic.slug, topic]));
