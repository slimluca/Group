export type BreedComparison = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  hero: { src: string; alt: string };
  secondary: { src: string; alt: string };
  introduction: string[];
  overview: { label: string; value: string }[];
  criteria: { label: string; first: string; second: string; note: string }[];
  sections: { title: string; body: string[] }[];
};

export const breedComparisons: BreedComparison[] = [
  {
    slug: "border-collie-vs-australian-kelpie",
    title: "Border Collie vs Australian Kelpie: Which Working Dog Fits Your Life?",
    description: "Compare the Border Collie and Australian Kelpie through working history, training, exercise, heat, settling and the reality of a modern home.",
    eyebrow: "Breed comparison · Working dogs",
    hero: { src: "/images/doghavengroup/world-dog-stories/united-kingdom-border-collie.webp", alt: "A Border Collie standing with its owner on a green British country path" },
    secondary: { src: "/images/doghavengroup/world-dog-stories/australia-kelpie.webp", alt: "An Australian Kelpie standing with its owner in warm Australian countryside" },
    introduction: ["Border Collies and Australian Kelpies are both intelligent working dogs, but choosing between them should not be reduced to which breed is cleverer or more energetic. Their histories, individual temperaments, breeding lines, climate, training environment and ability to settle all matter.", "The useful comparison is whether the household can support the dog on an ordinary week, not only on the best outdoor day. Both breeds can be rewarding partners for thoughtful owners and difficult choices for people who expect exercise alone to solve every need."],
    overview: [{ label: "Best starting question", value: "Can the household provide purposeful work and calm recovery?" }, { label: "Common mistake", value: "Choosing intelligence without planning an off-switch" }, { label: "Key difference", value: "Individual working style matters more than a simple energy ranking" }],
    criteria: [
      { label: "Working history", first: "Developed in Great Britain for controlled sheep work and responsiveness to a handler.", second: "Developed in Australia for stock work across large properties and demanding distances.", note: "Both histories can appear today as movement sensitivity, persistence and a need for structure." },
      { label: "Training style", first: "Often highly responsive and quick to notice patterns, including accidental habits.", second: "Often practical, driven and inventive, with a strong need for a clear outlet.", note: "Reward-based training, boundaries and calm handling matter for both." },
      { label: "Climate planning", first: "Coat, heat and humidity still need individual assessment despite British origins.", second: "Australian heritage does not make every Kelpie automatically comfortable in every hot region.", note: "Shade, water, exercise timing and the dog's health remain central." },
      { label: "Modern home", first: "May suit a training-focused owner who can teach rest and manage sensitivity.", second: "May suit an active household that can provide work without creating constant arousal.", note: "Neither should be chosen as a generic low-effort family dog." }
    ],
    sections: [{ title: "Choose the routine before the breed", body: ["Write down the activities the dog will actually receive during workdays, wet weather, illness and travel. A plan built around daily sport may collapse when life changes. A sustainable home includes short training, sniffing, cooperative care and a reliable rest routine.", "Meet adult dogs from the lines or rescue backgrounds you are considering. Ask how they behave when bored, frustrated, tired, handled and asked to do nothing. Those answers can reveal more than a breed slogan."] }, { title: "More exercise is not always the answer", body: ["Both breeds can become fitter without becoming calmer if the household only adds distance and intensity. Teach an off-switch, reward quiet observation and protect sleep. The goal is a dog that can work and then return to ordinary home life.", "If the household wants a dog that naturally requires little direction, this comparison may be a sign to look at a different group of dogs rather than picking the less demanding-looking working breed."] }]
  },
  {
    slug: "boston-terrier-vs-italian-greyhound",
    title: "Boston Terrier vs Italian Greyhound: Comparing Two City Companion Dogs",
    description: "Compare the Boston Terrier and Italian Greyhound for apartment life, heat, exercise, training, handling, health planning and everyday companionship.",
    eyebrow: "Breed comparison · Apartment and city life",
    hero: { src: "/images/doghavengroup/world-dog-stories/united-states-boston-terrier-rental.webp", alt: "A Boston Terrier arriving with its owner at a bright American rental home" },
    secondary: { src: "/images/doghavengroup/guides/apartment-italian-greyhound.webp", alt: "An Italian Greyhound relaxing beside its owner in a bright city apartment" },
    introduction: ["Boston Terriers and Italian Greyhounds can both appeal to city owners looking for a compact companion, but they bring different practical questions. A small body does not remove the need for exercise, training, temperature management, safe handling and written housing permission.", "The Boston Terrier may bring a sociable, lively presence while the Italian Greyhound may be more physically delicate and sensitive to cold, handling and sudden movement. The right choice depends on the individual dog and the household's ability to manage those differences."],
    overview: [{ label: "Best starting question", value: "Which needs can the home support every day and every season?" }, { label: "Common mistake", value: "Assuming small means simple, quiet or low-cost" }, { label: "Key difference", value: "Heat and breathing questions differ from cold and injury planning" }],
    criteria: [
      { label: "Apartment life", first: "Can adapt to city living with training, companionship and careful heat planning.", second: "Can adapt to a calm apartment but needs warmth, secure footing and safe handling.", note: "Noise, alone time, stairs and nearby routes matter more than floor area alone." },
      { label: "Temperature", first: "Short-muzzled individuals may need particular caution in heat and strenuous activity.", second: "Fine coat and low body fat can make cold, wet weather and exposed surfaces difficult.", note: "Neither breed should be left to self-manage extreme conditions." },
      { label: "Exercise", first: "Usually benefits from short purposeful outings, play and training without overheating.", second: "Benefits from controlled movement, sniffing and gentle activity with protection from injury.", note: "Individual fitness and health should set the routine." },
      { label: "Handling", first: "Needs respectful health and handling planning, especially around breathing and body condition.", second: "Needs careful restraint, secure equipment and protection from falls or collisions.", note: "A calm cooperative-care routine helps both." }
    ],
    sections: [{ title: "Apartment suitability is a whole-day question", body: ["Check what happens between walks. Can the dog settle while the owner works? Can it manage the building's sounds, lift, stairs and visitors? Does the household have a plan for toilet breaks, hot days, cold rain and periods when the owner is away?", "The most attractive city companion is still the wrong match if the household cannot provide safe, predictable care. Compare the routine, not only the adult weight or appearance."] }, { title: "Health planning belongs in the choice", body: ["Speak with a veterinarian about the health considerations relevant to the individual dog, then budget for preventive care and unexpected problems. A breed comparison is an invitation to ask better questions, not a promise about a particular puppy or adult dog."] }]
  },
  {
    slug: "newfoundland-vs-rhodesian-ridgeback",
    title: "Newfoundland vs Rhodesian Ridgeback: Comparing Two Large Breeds",
    description: "Compare the Newfoundland and Rhodesian Ridgeback through size, climate, exercise, training, family life, transport and practical household planning.",
    eyebrow: "Breed comparison · Large dogs",
    hero: { src: "/images/doghavengroup/world-dog-stories/canada-newfoundland.webp", alt: "A Newfoundland dog resting with its owner beside a Canadian mountain lake" },
    secondary: { src: "/images/doghavengroup/world-dog-stories/south-africa-rhodesian-ridgeback.webp", alt: "A Rhodesian Ridgeback walking with its owner on a South African coastal promenade" },
    introduction: ["A Newfoundland and a Rhodesian Ridgeback are both physically substantial dogs, but they create very different household planning questions. Coat, heat, water, space, strength, independence, transport and veterinary cost all need to be considered before choosing either.", "Large dogs magnify every management decision. A pulling adolescent, unsafe gate, unsuitable car or poorly planned interaction with children is harder to correct when the dog has serious physical power. Early training and realistic budgeting are essential."],
    overview: [{ label: "Best starting question", value: "Can the home, vehicle and budget support the adult dog?" }, { label: "Common mistake", value: "Choosing a large breed from an image or reputation alone" }, { label: "Key difference", value: "Coat, water and gentle bulk differ from athletic independence" }],
    criteria: [
      { label: "Body and coat", first: "Very large, heavy-coated and associated with water work and hauling.", second: "Large, athletic and built for endurance in a warmer working environment.", note: "Space, grooming, heat and transport requirements are not interchangeable." },
      { label: "Climate", first: "Cold-weather coat can make warm conditions demanding and requires careful summer planning.", second: "Warm-climate history does not remove heat, shade and hydration needs.", note: "The exact region and individual dog still determine the routine." },
      { label: "Training", first: "Early manners matter because size and strength make jumping or pulling difficult to manage.", second: "Needs calm boundaries and thoughtful training that respects independence.", note: "Reward-based training and adult supervision are important for both." },
      { label: "Household fit", first: "May suit a family prepared for drool, grooming, giant-breed care and slower activity.", second: "May suit an experienced owner prepared for exercise, fencing and an independent mind.", note: "Neither is a low-cost or low-preparation choice." }
    ],
    sections: [{ title: "Measure the home and the vehicle", body: ["Before choosing a large dog, test doorways, stairways, sleeping space, flooring, gate security and vehicle access. Plan how the dog would reach veterinary care if injured or unable to walk. A future emergency is easier to manage when the household has considered it calmly in advance.", "Food, grooming, parasite prevention, training and veterinary care can all cost more as the dog's size and needs increase. The decision should be affordable in an ordinary year, not only on the adoption day."] }, { title: "Family life needs adult management", body: ["A stable individual may be a wonderful companion, but children should never be left to manage a large dog alone. Protect the dog's rest, teach respectful interaction and create separation options for meals, visitors and over-excited moments."] }]
  },
  {
    slug: "shiba-inu-vs-lagotto-romagnolo",
    title: "Shiba Inu vs Lagotto Romagnolo: Independent Spirit or Collaborative Enrichment?",
    description: "Compare the Shiba Inu and Lagotto Romagnolo for training, scent work, grooming, urban life, handling and owner expectations.",
    eyebrow: "Breed comparison · Temperament and enrichment",
    hero: { src: "/images/doghavengroup/world-dog-stories/japan-shiba.webp", alt: "A Shiba Inu walking with its owner through a quiet Japanese neighbourhood" },
    secondary: { src: "/images/doghavengroup/world-dog-stories/italy-lagotto-train-platform.webp", alt: "A Lagotto Romagnolo waiting calmly with its owner at an Italian railway platform" },
    introduction: ["The Shiba Inu and Lagotto Romagnolo can both appeal to owners who enjoy a distinctive dog with a strong personality, but they often ask for different kinds of cooperation. One may be more independent and selective, while the other may seek closer collaboration and more active scent-based engagement.", "Neither description should replace meeting the individual dog. The comparison is most useful when it helps an owner think about recall, grooming, handling, training, noise, urban exposure and the kind of relationship they actually want to build."],
    overview: [{ label: "Best starting question", value: "Do you want a dog with opinions or a dog seeking more shared work?" }, { label: "Common mistake", value: "Choosing appearance without planning handling and enrichment" }, { label: "Key difference", value: "Independence and secure management versus scent-led collaboration" }],
    criteria: [
      { label: "Training relationship", first: "Often independent and selective, requiring respectful management and realistic recall expectations.", second: "Often enthusiastic about scent work and problem solving when trained thoughtfully.", note: "Both need positive learning and a household that enjoys repetition." },
      { label: "Urban life", first: "May cope with a compact home but needs gradual exposure and excellent escape prevention.", second: "May adapt to city living when daily enrichment and coat care are sustainable.", note: "Crowds, noise, routes and rest should be assessed for the individual dog." },
      { label: "Grooming", first: "Seasonal shedding and routine coat care should be expected.", second: "Curly coat maintenance, mat prevention and grooming appointments are part of ownership.", note: "A beautiful coat is a commitment, not a decoration." },
      { label: "Owner expectation", first: "May suit someone who respects a dog with boundaries and opinions.", second: "May suit someone who enjoys structured games, scent work and close participation.", note: "Neither is guaranteed to welcome every person or dog." }
    ],
    sections: [{ title: "Choose the interaction you can sustain", body: ["Think about how you enjoy spending time with a dog. Some owners value a companion that shares the room but does not need constant direction. Others want daily training, searches and cooperative activities. Both preferences are legitimate, but confusing them can create frustration.", "Ask current owners how the dog handles nail care, visitors, travel, new places and being asked to pause. The ordinary handling moments often decide whether the match works."] }, { title: "Safety and trust are built in small sessions", body: ["Use secure equipment, gradual exposure and reward-based handling. Teach the dog that returning, being touched and resting lead to good outcomes. The best temperament is still supported by a careful environment and consistent people."] }]
  }
];
