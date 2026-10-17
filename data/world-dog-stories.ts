export type WorldDogStory = {
  slug: string;
  country: string;
  region: string;
  breed: string;
  breedOrigin: string;
  title: string;
  description: string;
  eyebrow: string;
  hero: { src: string; alt: string };
  introduction: string[];
  breedStory: string[];
  sections: { title: string; body: string[] }[];
  quickFacts: { label: string; value: string }[];
  sources: { label: string; url: string }[];
};

export const worldDogStories: WorldDogStory[] = [
  {
    slug: "south-africa-rhodesian-ridgeback",
    country: "South Africa",
    region: "Southern Africa",
    breed: "Rhodesian Ridgeback",
    breedOrigin: "Southern Africa",
    title: "Dogs of South Africa: Rhodesian Ridgeback history, temperament and daily life",
    description: "Discover the Rhodesian Ridgeback's Southern African story, working history, temperament, exercise needs, climate considerations and what dog owners should plan before bringing one home.",
    eyebrow: "Dogs of the world · Southern Africa",
    hero: { src: "/images/doghavengroup/visuals/south-africa-ridgeback-promenade.webp", alt: "A Rhodesian Ridgeback walking with its owner on a coastal promenade in South Africa" },
    introduction: [
      "South Africa is home to dog ownership cultures that change dramatically between dense cities, coastal suburbs, highveld towns, farms and rural communities. A dog that seems perfectly suited to one household may be a poor fit for another because climate, secure space, travel distance, housing rules and access to veterinary care all shape the real experience.",
      "The Rhodesian Ridgeback is one of the country's best-known native-associated breeds. Its story is not a simple label about toughness. It is a story about endurance, independence, human partnership and a dog that needs thoughtful boundaries, meaningful activity and a household able to respect both its physical power and its sensitivity."
    ],
    breedStory: [
      "The Ridgeback developed in Southern Africa from local and introduced dog populations selected for practical work in demanding environments. The ridge is its most recognisable feature, but the more useful ownership question is what sits behind the appearance: athleticism, persistence, awareness and a tendency to form a close bond with its people.",
      "A Ridgeback is not automatically a suitable guard dog, running companion or family dog simply because it is strong. Early socialisation, humane training, safe fencing and careful management around small animals matter. A calm adult with a reliable routine may be very different from a bored adolescent with too much freedom and too little direction."
    ],
    sections: [
      { title: "Climate and the South African household", body: ["Many South African households need to plan around heat, sun exposure, water access and seasonal storms. A large athletic dog still needs shade, rest and a routine that avoids the hottest part of the day. Coastal humidity, dry inland heat and high-altitude conditions should not be treated as one national climate.", "Housing also matters. Secure fencing, gate discipline, neighbour relationships and the ability to transport a large dog safely are more important than a postcode label. Before choosing a Ridgeback, a household should test its actual weekday routine rather than imagining an ideal weekend lifestyle."] },
      { title: "Who may enjoy living with a Ridgeback", body: ["The breed can suit owners who value an affectionate but not constantly dependent companion, enjoy structured outdoor time and are prepared to train without intimidation. It may fit an experienced household that can provide secure space, predictable rules and calm exposure to people, dogs, traffic and new environments.", "It may be difficult for a first-time owner who wants a naturally obedient dog, has weak fencing, works long hours without support or expects a big dog to exercise itself. Breed history is useful only when it improves the household decision."] },
      { title: "South African planning questions", body: ["Ask which municipality, estate, landlord or body corporate rules apply. Locate a veterinary practice and an emergency option before the dog arrives. Plan safe exercise for heat, consider the cost of quality food and parasite prevention, and decide how the dog will travel if the household moves between cities or crosses a border."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "Southern Africa" }, { label: "Typical owner question", value: "Is a Ridgeback suitable for my climate and routine?" }, { label: "Main planning theme", value: "Space, heat, training and secure management" }],
    sources: [{ label: "FCI breed nomenclature and standards", url: "https://www.fci.be/en/nomenclature/" }, { label: "South African Veterinary Council", url: "https://www.savc.org.za/" }, { label: "South African government animal import guidance", url: "https://www.gov.za/services/import/import-animals-and-animal-products" }]
  },
  {
    slug: "united-states-boston-terrier",
    country: "United States",
    region: "North America",
    breed: "Boston Terrier",
    breedOrigin: "United States",
    title: "Dogs of the United States: Boston Terrier history, temperament and city living",
    description: "Explore the Boston Terrier's American history, companion temperament, apartment considerations, heat awareness and the practical questions US dog owners should ask.",
    eyebrow: "Dogs of the world · North America",
    hero: { src: "/images/doghavengroup/visuals/united-states-boston-terrier-rental.webp", alt: "A Boston Terrier and its owner arriving at a suburban rental home in the United States" },
    introduction: [
      "The United States is too varied to describe through one typical dog household. A Boston Terrier living in a walkable city apartment, a suburban rental and a hot southern home may face entirely different daily pressures. Housing permission, insurance, transport, climate, veterinary access and the availability of safe walking routes all deserve attention before the breed is chosen.",
      "Boston Terriers are often attractive to owners looking for a compact, sociable companion with a lively personality. Their small size can make them easier to accommodate, but it does not remove the need for careful heat management, humane exercise and realistic expectations about breathing, activity and individual health."
    ],
    breedStory: [
      "The Boston Terrier developed in the United States as a companion breed with a distinctive tuxedo-like coat and expressive face. Its appeal is not only visual. Many owners value the breed's social character, humour and ability to participate in household life without needing the physical scale of a working or sporting dog.",
      "A responsible profile should also make room for the trade-offs. Short-muzzled dogs can be more vulnerable in heat and during strenuous activity, while individual health varies. Prospective owners should discuss breathing, eyes, spine, weight and exercise with an experienced veterinarian rather than relying on a breed stereotype."
    ],
    sections: [
      { title: "Apartment fit is more than square metres", body: ["A Boston Terrier may adapt well to an apartment when the household provides regular gentle activity, enrichment, training and predictable toilet routines. Lift access, stairs, summer temperatures, noise, nearby green space and the owner's working day can matter more than the floor area alone.", "US renters should read the lease, pet addendum, deposit rules, insurer requirements and building policies separately. A landlord's verbal reassurance is not a substitute for written permission."] },
      { title: "Heat, exercise and everyday care", body: ["Warm weather planning is central for many US households. Walks should be adjusted for temperature, humidity and pavement heat, with water and shade available. A small dog still benefits from training games, sniffing and short purposeful outings, but intense exercise in hot conditions can be unsafe.", "Weight control and preventive veterinary care are especially important because extra body weight can make breathing and heat tolerance harder. The right routine is individual, not a fixed number of minutes copied from a generic breed chart."] },
      { title: "Questions for a US household", body: ["Which state and local rules apply? Does the building permit the breed? Is the dog covered by the household's insurance? Who provides care during a workday or emergency? What will transport look like without assuming the dog can ride everywhere in a car? These questions turn a breed preference into a responsible plan."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "United States" }, { label: "Typical owner question", value: "Can a Boston Terrier live well in my apartment or city?" }, { label: "Main planning theme", value: "Heat, health, housing permission and routine" }],
    sources: [{ label: "American Kennel Club breed library", url: "https://www.akc.org/dog-breeds/boston-terrier/" }, { label: "CDC dog import guidance", url: "https://www.cdc.gov/importation/dogs/index.html" }, { label: "USDA APHIS pet travel", url: "https://www.aphis.usda.gov/pet-travel" }]
  },
  {
    slug: "italy-lagotto-romagnolo",
    country: "Italy",
    region: "Southern Europe",
    breed: "Lagotto Romagnolo",
    breedOrigin: "Italy",
    title: "Dogs of Italy: Lagotto Romagnolo history, temperament and family life",
    description: "Learn about the Lagotto Romagnolo's Italian roots, working character, grooming, enrichment, city living and the practical ownership questions behind the breed's popularity.",
    eyebrow: "Dogs of the world · Southern Europe",
    hero: { src: "/images/doghavengroup/visuals/italy-lagotto-train-platform.webp", alt: "A Lagotto Romagnolo waiting calmly with its owner at an Italian railway platform" },
    introduction: [
      "Italy offers many different dog lives: historic city apartments, village homes, regional rail journeys, coastal routines, alpine seasons and rural working landscapes. A breed profile becomes useful when it explains how a dog may fit those conditions without pretending that every Italian household or municipality works the same way.",
      "The Lagotto Romagnolo is an Italian water dog known today for its truffle work and affectionate, curly-coated appearance. Beneath the charming image is a dog selected to use its nose, solve problems and work closely with people. Owners who understand that working mind usually build a better home routine than owners who focus only on size or coat."
    ],
    breedStory: [
      "The Lagotto's history is tied to the wetlands and rural landscapes of Romagna, where water-dog work later connected with truffle searching. Its heritage helps explain the breed's enthusiasm for scent, investigation and purposeful interaction.",
      "A Lagotto may be an engaging family companion, but it still needs an outlet for its brain. Scent games, search work, training variety and calm social exposure can be more satisfying than simply adding longer walks. Curly coats also require a grooming routine that a household can sustain."
    ],
    sections: [
      { title: "Italian city life and the working dog", body: ["A compact home does not automatically rule out a Lagotto, provided the household creates daily opportunities for movement, sniffing and rest. Historic streets, stairs, crowded squares, warm pavements and public transport all need to be considered alongside access to quieter areas.", "Owners should check local rules for parks, beaches, trains and accommodation because Italian transport and public-space conditions can be regional or operator-specific. A travel-friendly dog still needs a calm training foundation before it is taken into busy places."] },
      { title: "Coat, grooming and seasonal comfort", body: ["The coat is part of the breed's appeal and part of the work. Matting, wet weather, heat and grooming appointments should be planned from the start. Owners should ask how the coat will be maintained in summer, after water exposure and during travel rather than leaving the answer to chance.", "Like every breed, the Lagotto benefits from weight control, preventive care and a veterinarian who knows the individual dog. A country of origin does not guarantee that every dog will enjoy the same climate or routine."] },
      { title: "Who should pause before choosing one", body: ["A household that wants a very low-maintenance, quiet dog with no interest in training may find the Lagotto demanding. A family prepared to build scent games, boundaries, grooming and gradual exposure may find the breed wonderfully responsive and full of personality."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "Romagna, Italy" }, { label: "Typical owner question", value: "How much enrichment and grooming will this dog need?" }, { label: "Main planning theme", value: "Scent work, coat care and city routines" }],
    sources: [{ label: "FCI Lagotto Romagnolo standard", url: "https://www.fci.be/en/nomenclature/ROMAGNA-WATER-DOG-298.html" }, { label: "Italian Ministry of Health pet travel information", url: "https://www.salute.gov.it/new/en/tema/animali-daffezione/travelling-italy-pets/" }, { label: "Trenitalia travelling with pets", url: "https://www.trenitalia.com/en/services/travelling-with-your-pet.html" }]
  },
  {
    slug: "united-kingdom-border-collie",
    country: "United Kingdom",
    region: "Northern Europe",
    breed: "Border Collie",
    breedOrigin: "The border country of Great Britain",
    title: "Dogs of the United Kingdom: Border Collie history, intelligence and real-life needs",
    description: "Understand the Border Collie's working history, intelligence, exercise and training needs, plus the housing, countryside and routine questions UK owners should consider.",
    eyebrow: "Dogs of the world · Northern Europe",
    hero: { src: "/images/doghavengroup/world-dog-stories/united-kingdom-border-collie.webp", alt: "A Border Collie standing with its owner on a misty green British footpath" },
    introduction: [
      "The United Kingdom's dog culture is shaped by public footpaths, changing weather, urban density, rental pressure, local control orders and a strong tradition of working breeds. A Border Collie can look at home in a countryside photograph, but the real question is whether the household can provide a balanced life rather than an endless cycle of high-intensity exercise.",
      "Border Collies are intelligent, observant and often highly responsive to movement and human direction. That can make them rewarding partners for training, sport and working activities, but it can also create difficulty when a dog is bored, over-aroused or taught that constant stimulation is the only way to feel settled."
    ],
    breedStory: [
      "The Border Collie developed around the border country of Great Britain as a sheep-working dog valued for controlled movement, responsiveness and stamina. Its intelligence is practical rather than decorative: the dog notices patterns, anticipates behaviour and learns quickly, including habits an owner did not intend to teach.",
      "Good ownership includes an off-switch. Rest, calm handling, loose-lead skills, recall, safe exposure and thoughtful enrichment matter as much as running. A Collie should not be selected solely because it is clever or photogenic."
    ],
    sections: [
      { title: "The British countryside is not one open dog park", body: ["Footpaths, farmland, beaches, commons and parks can all have different access rules. Livestock, nesting birds, seasonal restrictions, local dog-control orders and other walkers affect where and how a dog can be exercised. A reliable recall and lead routine are safety skills, not optional polish.", "Urban owners may have excellent access to parks but less room for decompression. Rural owners may have space but more livestock, roads and wildlife. The best routine depends on the actual route and the dog's arousal level."] },
      { title: "Mental work without creating a frantic dog", body: ["Training can include scent searches, shaping, cooperative care, retrieving, calm observation and carefully selected sport. Variety helps, but more activity is not always better. A dog that cannot settle after a busy day may need help learning rest and emotional regulation, not another kilometre.", "Families should also plan for rainy days, illness, adolescence, childcare changes and periods when the owner cannot provide the usual exercise. A sustainable dog life has a low-energy version."] },
      { title: "UK housing and transport checks", body: ["Read the tenancy agreement and pet terms, then check the specific local and operator rules for the journey. Great Britain rail guidance does not automatically describe every service in Northern Ireland, and a countryside-friendly breed still needs safe transport and accommodation planning."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "Great Britain border country" }, { label: "Typical owner question", value: "Can I meet the breed's needs without creating over-arousal?" }, { label: "Main planning theme", value: "Training, recall, rest and access rules" }],
    sources: [{ label: "Kennel Club Border Collie information", url: "https://www.thekennelclub.org.uk/search/breeds-a-to-z/breeds/pastoral/border-collie/" }, { label: "GOV.UK bringing a pet to Great Britain", url: "https://www.gov.uk/bring-pet-to-great-britain" }, { label: "National Rail travelling with pets", url: "https://www.nationalrail.co.uk/on-the-train/your-rights-and-obligations/travelling-with-pets/" }]
  },
  {
    slug: "australia-australian-kelpie",
    country: "Australia",
    region: "Oceania",
    breed: "Australian Kelpie",
    breedOrigin: "Australia",
    title: "Dogs of Australia: Australian Kelpie history, work and climate planning",
    description: "Explore the Australian Kelpie's working origins, athletic temperament, heat planning, enrichment needs and suitability for modern Australian households.",
    eyebrow: "Dogs of the world · Oceania",
    hero: { src: "/images/doghavengroup/world-dog-stories/australia-kelpie.webp", alt: "An Australian Kelpie standing with its owner in a dry Australian grassland with eucalyptus trees" },
    introduction: [
      "Australia's scale creates unusual dog ownership questions. A dog in a cool southern city, a tropical suburb, a remote property and a dense apartment can face very different heat, transport, wildlife and veterinary challenges. Breed origin can provide context, but it does not replace local planning.",
      "The Australian Kelpie is a working breed developed for demanding stock work. Its athleticism, speed and problem-solving ability can be extraordinary in the right setting. In a normal household, the challenge is to provide meaningful outlets and clear boundaries without assuming that a dog must be exhausted every day to be content."
    ],
    breedStory: [
      "Kelpies were developed in Australia for stock work across large properties, where endurance, responsiveness and independent judgement were valuable. That history helps explain why a Kelpie often notices movement, seeks a job and can become inventive when its environment lacks structure.",
      "A Kelpie can thrive in an active household that enjoys training and purposeful outdoor time. It may struggle when bought as a generic family dog with no plan for mental work, secure containment, heat management and adolescence."
    ],
    sections: [
      { title: "Heat and distance change the routine", body: ["Australia's heat, UV exposure, bushfire conditions and long travel distances can affect daily care. Owners need shaded rest, water planning, safe walking surfaces and a plan for smoke, extreme weather and emergency transport. The same breed can have a comfortable routine in one region and a difficult one in another.", "Remote and rural households should also think about veterinary distance, parasite prevention, fencing, wildlife encounters and what happens if a dog is injured far from a clinic."] },
      { title: "A working dog in a non-working home", body: ["Kelpies often benefit from scent games, obedience, controlled retrieving, cooperative care and activities that ask them to think. A long run alone may build fitness without building calmness. Owners should teach settling, household manners and safe boundaries alongside exercise.", "Children can enjoy a Kelpie's energy, but adults remain responsible for supervision and for making sure the dog's movement does not turn into chasing or rough herding behaviour."] },
      { title: "The honest suitability test", body: ["Ask whether the household has a daily plan for ordinary weeks, hot weeks, wet weeks, illness and travel. If the answer depends on a large property or constant sport that may not exist, another breed or an adult dog with a known temperament may be a better decision."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "Australia" }, { label: "Typical owner question", value: "Can my household provide work, training and calm?" }, { label: "Main planning theme", value: "Heat, secure space, distance and enrichment" }],
    sources: [{ label: "Australian National Kennel Council breed information", url: "https://ankc.org.au/" }, { label: "Australian Government bringing dogs to Australia", url: "https://www.agriculture.gov.au/biosecurity-trade/cats-dogs" }, { label: "FCI breeds nomenclature", url: "https://www.fci.be/en/nomenclature/" }]
  },
  {
    slug: "canada-newfoundland",
    country: "Canada",
    region: "North America",
    breed: "Newfoundland",
    breedOrigin: "Newfoundland and Labrador, Canada",
    title: "Dogs of Canada: Newfoundland history, size, water work and family life",
    description: "Learn how the Newfoundland developed in Canada, what its gentle reputation means in practice, and how owners should plan for size, coat, heat, transport and veterinary care.",
    eyebrow: "Dogs of the world · North America",
    hero: { src: "/images/doghavengroup/world-dog-stories/canada-newfoundland.webp", alt: "A Newfoundland dog resting beside its owner on a Canadian mountain lake shore" },
    introduction: [
      "Canada's geography makes regional planning essential. A Newfoundland living near a cool lake, a heated apartment in Toronto, a rural property or a coastal town may have the same breed label but a very different daily experience. Snow, ice, summer heat, stair access, car space and veterinary distance all matter.",
      "The Newfoundland is known for a powerful combination of size, strength, water ability and a generally gentle companion reputation. That reputation should not hide the practical work. A giant dog needs space to turn around comfortably, careful growth and weight management, grooming, transport planning and owners who can handle emergencies."
    ],
    breedStory: [
      "Newfoundlands were developed in Newfoundland and Labrador and became associated with water work, hauling and partnership with people. Their history is visible in their build and confidence around water, but individual dogs vary and not every Newfoundland should be pushed into swimming or cold-water activity.",
      "A calm temperament is valuable in a family home, but size magnifies every behaviour. Jumping, pulling, doorway congestion and poor lead skills are harder to manage when the dog is enormous. Early cooperative training is a safety investment."
    ],
    sections: [
      { title: "Giant-breed planning before the puppy arrives", body: ["Owners should budget for food, preventive care, grooming, appropriate transport and the possibility of higher veterinary costs. Flooring, stairs, vehicle access, sleeping space and safe interaction with children are practical design questions, not minor details.", "Growth should be managed with veterinary guidance. More food and more exercise are not automatically better for a growing giant breed. The household needs a slow, informed plan."] },
      { title: "Cold climate does not remove heat risk", body: ["A thick coat can be helpful in cold conditions but uncomfortable in warm weather. Summer walking, vehicle temperature, humidity and access to shade need as much attention as winter paw care and ice safety. Coastal and prairie conditions can feel very different.", "Water should be treated as a safety subject. Swimming ability is not a guarantee, and large dogs still need supervision around water, docks, thin ice and strong currents."] },
      { title: "Family fit and everyday manners", body: ["A Newfoundland can be a deeply involved family companion when the household enjoys a slower, structured routine and is ready for grooming, drool, size and training. It is not a sensible choice for someone who wants a small, low-cost dog that can fit anywhere without preparation."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "Newfoundland and Labrador, Canada" }, { label: "Typical owner question", value: "Can my home, vehicle and budget handle a giant breed?" }, { label: "Main planning theme", value: "Size, coat, growth, heat and transport" }],
    sources: [{ label: "Canadian Kennel Club breed standards", url: "https://www.ckc.ca/en/Choosing-a-Dog/Choosing-a-Breed" }, { label: "Canadian Food Inspection Agency dog travel", url: "https://inspection.canada.ca/en/travelling-pets-food-plants/travelling-pets/dog-travel" }, { label: "FCI breeds nomenclature", url: "https://www.fci.be/en/nomenclature/" }]
  },
  {
    slug: "japan-shiba-inu",
    country: "Japan",
    region: "East Asia",
    breed: "Shiba Inu",
    breedOrigin: "Japan",
    title: "Dogs of Japan: Shiba Inu history, independence and urban ownership",
    description: "Discover the Shiba Inu's Japanese history, independent temperament, grooming, recall challenges and the realities of raising one in a modern Japanese home.",
    eyebrow: "Dogs of the world · East Asia",
    hero: { src: "/images/doghavengroup/world-dog-stories/japan-shiba.webp", alt: "A Shiba Inu walking with its owner through a quiet traditional Japanese neighbourhood" },
    introduction: [
      "Japan combines dense urban neighbourhoods, compact homes, seasonal heat, humid summers, public transport and a strong culture of careful daily routines. A Shiba Inu can look perfectly suited to a small home because of its size, yet its independence, alertness and escape ability require more planning than the photograph suggests.",
      "The Shiba Inu is a Japanese native breed with a distinctive character. Many owners value its cleanliness, expression and spirited personality. Others are surprised by selective listening, sensitivity to handling, dog-to-dog preferences and a strong desire to control distance. Respectful training works better than expecting a small dog to behave like a compliant one."
    ],
    breedStory: [
      "Shiba Inu ancestors were used in Japan for hunting in varied terrain. The modern breed retains athleticism, alertness and a degree of independence. Its compact body does not mean it is a decorative apartment accessory. It still needs movement, investigation, training and a secure relationship with its owner.",
      "The breed's clean appearance can also hide seasonal shedding. Grooming, household cleaning and skin care should be part of the plan. A Shiba's famous expression is not a reliable measure of how it feels, so owners need to learn canine body language and cooperative handling."
    ],
    sections: [
      { title: "Compact homes and calm routines", body: ["A Shiba may live successfully in a smaller home when daily walks, sniffing, enrichment, quiet rest and safe toilet arrangements are realistic. The building's stairs, lifts, noise, balcony safety, nearby routes and pet rules matter more than square metres alone.", "Owners should plan for humid summers, hot pavement and indoor cooling. A small dog can still overheat, and dense urban routes can be stressful if the dog has not been gradually introduced to bicycles, crowds, construction noise and other animals."] },
      { title: "Recall, handling and the escape problem", body: ["Independent dogs need excellent management. Secure harnesses, gates, doors, identification and careful lead practice are important because a Shiba that slips away may not return simply because it knows its name. Recall training is worthwhile, but it should not be the only safety plan.", "Cooperative care can make grooming, nail care, veterinary handling and travel easier. Short, positive sessions are usually more productive than forcing a dog through a difficult interaction."] },
      { title: "Who the breed may suit", body: ["A Shiba can suit an observant owner who enjoys a dog with opinions and is willing to learn. It may frustrate someone who wants guaranteed off-lead freedom, instant obedience or a dog that welcomes every person and dog. The individual temperament must be assessed honestly."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "Japan" }, { label: "Typical owner question", value: "Can I manage an independent dog safely in a dense city?" }, { label: "Main planning theme", value: "Secure handling, urban exposure and heat" }],
    sources: [{ label: "Japan Kennel Club", url: "https://www.jkc.or.jp/" }, { label: "FCI Shiba standard", url: "https://www.fci.be/en/nomenclature/SHIBA-257.html" }, { label: "Japanese Ministry of Agriculture pet quarantine", url: "https://www.maff.go.jp/aqs/english/animal/dog/" }]
  },
  {
    slug: "germany-german-shepherd",
    country: "Germany",
    region: "Central Europe",
    breed: "German Shepherd Dog",
    breedOrigin: "Germany",
    title: "Dogs of Germany: German Shepherd history, training and responsible ownership",
    description: "Explore the German Shepherd Dog's German working history, training needs, health planning, family suitability and the importance of choosing a stable individual.",
    eyebrow: "Dogs of the world · Central Europe",
    hero: { src: "/images/doghavengroup/world-dog-stories/germany-german-shepherd.webp", alt: "A German Shepherd standing with its owner beside a forest trail in Germany" },
    introduction: [
      "Germany's dog landscape includes dense cities, forests, village roads, public transport and strong expectations around responsible control. The German Shepherd Dog is one of the country's most recognisable breeds, but its reputation has become so broad that it can hide the difference between a stable companion, a working prospect and a dog whose needs exceed the household's experience.",
      "A German Shepherd is intelligent, athletic and often deeply connected to its handler. That can be a wonderful foundation for training and companionship. It also means poor breeding, inconsistent socialisation, isolation or harsh handling can have serious consequences. The best profile is about the dog in front of you, not a heroic image of the breed."
    ],
    breedStory: [
      "The breed was developed in Germany as a versatile herding and working dog. Its working history explains the combination of movement, attention, courage and responsiveness that many owners admire. It also explains why a German Shepherd usually needs a job-like structure even when the job is family life, scent work, obedience or assistance-style tasks.",
      "Health screening, sound movement and stable temperament should be central when choosing a dog. No breed label can guarantee health or behaviour, and a puppy should not be selected only for colour, size or an intimidating appearance."
    ],
    sections: [
      { title: "Training should build trust and control", body: ["German Shepherds benefit from clear household rules, reward-based learning, calm exposure and a strong foundation in recall, lead walking, handling and settling. Protection-style games and defensive training should not be improvised by inexperienced owners.", "A dog that is physically tired but emotionally overwhelmed is not necessarily well exercised. Owners should measure success by calmness, recovery and safe behaviour as well as distance walked."] },
      { title: "German housing and public-space reality", body: ["Local rules, landlord terms, insurance, public transport and dog-control expectations all need to be checked for the actual city. A large dog may need more space, but good management and a thoughtful routine matter just as much. Secure travel and access to a veterinarian should be planned before the dog arrives.", "Owners moving across borders should separate general breed information from current import, vaccination and carrier requirements. Those details change and should be checked through official authorities."] },
      { title: "A family dog with serious physical presence", body: ["A stable German Shepherd can be a loyal family companion, but adults must supervise interactions, protect the dog's rest and teach children respectful boundaries. Households wanting a low-effort, naturally easy dog should look elsewhere."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "Germany" }, { label: "Typical owner question", value: "Can I provide training, structure and responsible management?" }, { label: "Main planning theme", value: "Temperament, health, training and control" }],
    sources: [{ label: "German Kennel Club (VDH)", url: "https://www.vdh.de/" }, { label: "FCI German Shepherd Dog standard", url: "https://www.fci.be/en/nomenclature/GERMAN-SHEPHERD-DOG-166.html" }, { label: "EU travelling with dogs, cats and ferrets", url: "https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets_en" }]
  },
  {
    slug: "france-brittany-spaniel",
    country: "France",
    region: "Western Europe",
    breed: "Brittany Spaniel",
    breedOrigin: "Brittany, France",
    title: "Dogs of France: Brittany Spaniel history, energy and companion life",
    description: "Learn about the Brittany Spaniel's French sporting history, affectionate temperament, exercise needs and suitability for modern family life.",
    eyebrow: "Dogs of the world · Western Europe",
    hero: { src: "/images/doghavengroup/world-dog-stories/france-brittany-spaniel.webp", alt: "A Brittany Spaniel walking with its owner beside a warm stone village path in France" },
    introduction: [
      "France offers a wide range of dog lives, from apartment routines in large cities to village homes, working farms, beach towns and mountain regions. The Brittany Spaniel is a good example of why breed history matters. It may be a manageable size for many homes, but it still carries the energy and curiosity of a sporting dog.",
      "Brittanys are often described as affectionate, responsive and eager to participate. That can make them enjoyable companions for owners who like outdoor activity and training. It can be demanding for households that want a quiet dog with little need for structured exercise or engagement."
    ],
    breedStory: [
      "The Brittany was developed in the French region of Brittany as a versatile hunting dog. Its history helps explain its nose, movement, alertness and desire to work with a person. Modern owners do not need to hunt, but they do need to replace the purpose with suitable activities.",
      "Retrieving, scent games, recall, trail walks and cooperative care can give the breed useful outlets. Too much frantic ball play or uncontrolled running may increase arousal rather than creating a balanced dog, so variety and rest matter."
    ],
    sections: [
      { title: "Village, city and holiday life", body: ["A Brittany can adapt to an apartment or smaller home when the household has realistic access to exercise and enrichment. A village route is not automatically safe if there are roads, livestock or wildlife, and a coastal holiday is not automatically suitable if the dog cannot settle around crowds and unfamiliar accommodation.", "French public-space and transport rules should be checked for the precise commune, operator, park, beach or accommodation. Travelling well is a learned skill."] },
      { title: "Family fit and the need for a real off-switch", body: ["The breed may fit an active family that enjoys walks, training and outdoor weekends, provided adults protect rest and supervise children. A dog that is always invited into activity can struggle to settle, so quiet mat work, calm handling and predictable downtime belong in the plan.", "Food, coat care, ear checks, parasite prevention and veterinary routines should be treated as ordinary ownership rather than forgotten because the dog looks easy to maintain."] },
      { title: "The honest choice", body: ["Choose the individual and the household together. A Brittany is not a lifestyle accessory for a country-house fantasy. It is a responsive sporting dog that can become an excellent companion when its body and mind have somewhere appropriate to go."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "Brittany, France" }, { label: "Typical owner question", value: "Can I provide sporting outlets and calm family routines?" }, { label: "Main planning theme", value: "Exercise, scent, recall and settling" }],
    sources: [{ label: "Société Centrale Canine", url: "https://www.centrale-canine.fr/" }, { label: "FCI Brittany standard", url: "https://www.fci.be/en/nomenclature/FRENCH-SPANIEL-175.html" }, { label: "EU travelling with pets", url: "https://europa.eu/youreurope/citizens/travel/carry/pets-and-other-animals/index_en.htm" }]
  },
  {
    slug: "brazil-brazilian-terrier",
    country: "Brazil",
    region: "South America",
    breed: "Brazilian Terrier",
    breedOrigin: "Brazil",
    title: "Dogs of Brazil: Brazilian Terrier history, urban energy and hot-weather care",
    description: "Discover the Brazilian Terrier's local history, alert temperament, city suitability, enrichment needs and climate-aware daily care.",
    eyebrow: "Dogs of the world · South America",
    hero: { src: "/images/doghavengroup/world-dog-stories/brazil-brazilian-terrier.webp", alt: "A Brazilian Terrier walking with its owner through a leafy urban park in Brazil" },
    introduction: [
      "Brazilian dog ownership spans dense apartment cities, hot coastal neighbourhoods, inland towns, rural properties and communities with very different access to transport and veterinary services. A breed story should therefore be a starting point for questions, not a claim that one national lifestyle exists.",
      "The Brazilian Terrier is lively, alert and athletic. Its compact size can make it attractive to urban households, but its terrier mind still needs movement, exploration, training and safe outlets for chasing and investigation. Warm weather and street safety add another layer to the everyday plan."
    ],
    breedStory: [
      "The Brazilian Terrier developed in Brazil and is associated with an energetic, watchful companion style. Like many terriers, it may be quick to notice movement, sound and small animals. That can be fun in an active home, but it means owners should not mistake a small body for a low-management dog.",
      "Scent searches, short training sessions, controlled play and calm observation can work well in a city. Reliable identification, secure doors and lead management are important in any environment where a dog may be tempted to chase or investigate."
    ],
    sections: [
      { title: "Heat, pavement and daily timing", body: ["Hot and humid conditions can change the best time for walks, especially on dark pavement or in areas with little shade. Water, ventilation, rest and a route with safe surfaces should be planned. Climate also affects parasite prevention and the household's ability to keep the dog comfortable indoors.", "Regional differences matter. A cool highland routine should not be copied into a tropical coastal city, and wildfire, flood or storm planning may matter depending on the area."] },
      { title: "Urban enrichment without constant chaos", body: ["A Brazilian Terrier may enjoy apartment life when its people provide purposeful walks, sniffing, training and quiet rest. The dog should learn to pass bicycles, traffic, visitors and other dogs without being pushed into overwhelming exposure.", "Terrier play can become intense quickly. Owners should teach release cues, cooperative handling and calm transitions rather than relying on endless high-speed games."] },
      { title: "A practical ownership checklist", body: ["Check building permission, secure entry points, local walking areas, veterinarian access, emergency transport and the cost of preventive care. If the dog will travel between regions or countries, begin with official requirements well before the departure date."] }
    ],
    quickFacts: [{ label: "Breed origin", value: "Brazil" }, { label: "Typical owner question", value: "Can I combine urban life with terrier-level enrichment?" }, { label: "Main planning theme", value: "Heat, safety, training and activity" }],
    sources: [{ label: "Confederação Brasileira de Cinofilia", url: "https://cbkc.org/" }, { label: "FCI breeds nomenclature", url: "https://www.fci.be/en/nomenclature/" }, { label: "IATA Traveller's Pet Corner", url: "https://www.iata.org/en/programs/cargo/live-animals/pets/" }]
  }
];

export const worldDogStorySlugs = worldDogStories.map((story) => story.slug);
