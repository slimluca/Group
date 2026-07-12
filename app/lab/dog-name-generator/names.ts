export type NameStyle = "classic" | "modern" | "strong" | "elegant" | "playful" | "nature-inspired" | "travel-inspired" | "Italian-inspired" | "African-inspired" | "American-inspired";
export type NameGender = "male" | "female" | "unisex";
export type NameTag = "short" | "two-syllable" | "unusual";

export type NameIdea = {
  name: string;
  style: NameStyle;
  gender: NameGender;
  tags: NameTag[];
  pronunciation?: string;
  meaning: string;
  why: string;
};

type NameTuple = [name: string, gender: NameGender, tags: NameTag[], meaning: string, pronunciation?: string];

const curatedNames: Record<NameStyle, NameTuple[]> = {
  classic: [
    ["Max", "male", ["short"], "A long-standing favourite associated with greatness."],
    ["Bella", "female", ["two-syllable"], "A familiar name meaning beautiful in Italian."],
    ["Charlie", "unisex", [], "A warm traditional name with an approachable sound."],
    ["Lucy", "female", ["short", "two-syllable"], "A bright classic linked with light."],
    ["Oscar", "male", ["two-syllable"], "A confident traditional name with literary history."],
    ["Daisy", "female", ["two-syllable"], "A cheerful flower name used for generations."],
    ["Henry", "male", ["two-syllable"], "A steady classic with a friendly rhythm."],
    ["Molly", "female", ["two-syllable"], "A gentle, familiar name with an upbeat ending."],
    ["Jack", "male", ["short"], "A crisp classic known across many countries."],
    ["Ruby", "female", ["short", "two-syllable"], "Inspired by the rich red gemstone."],
    ["Sam", "unisex", ["short"], "A simple, dependable shortened classic."],
    ["Rosie", "female", ["two-syllable"], "A friendly form inspired by the rose."],
    ["Toby", "male", ["short", "two-syllable"], "A relaxed traditional name with clear sounds."],
    ["Annie", "female", ["two-syllable"], "A warm classic associated with grace."]
  ],
  modern: [
    ["Nova", "female", ["short", "two-syllable"], "Inspired by a star that suddenly shines brightly."],
    ["Arlo", "male", ["short", "two-syllable"], "A contemporary favourite with a soft, open sound."],
    ["Luna", "female", ["short", "two-syllable"], "The Latin word for moon."],
    ["Milo", "male", ["short", "two-syllable"], "A light modern name with an easy rhythm."],
    ["Zuri", "unisex", ["short", "two-syllable", "unusual"], "A Swahili name associated with beauty."],
    ["Remi", "unisex", ["short", "two-syllable"], "A compact modern name used internationally."],
    ["Nox", "unisex", ["short", "unusual"], "The Latin word for night."],
    ["Koda", "unisex", ["short", "two-syllable"], "A modern name with a strong opening sound."],
    ["Juno", "female", ["short", "two-syllable"], "Inspired by the Roman queen of the gods."],
    ["Onyx", "unisex", ["short", "two-syllable", "unusual"], "Named for the dark banded gemstone."],
    ["Indie", "unisex", ["two-syllable"], "A free-spirited contemporary choice."],
    ["Enzo", "male", ["short", "two-syllable"], "A compact Italian name with modern global appeal."],
    ["Cleo", "female", ["short", "two-syllable"], "A bright shortened form linked with glory."],
    ["Kai", "unisex", ["short", "unusual"], "A concise name found in several language traditions."]
  ],
  strong: [
    ["Atlas", "male", ["two-syllable"], "Inspired by the mythic figure who carried the heavens."],
    ["Rocco", "male", ["two-syllable"], "A sturdy Italian name traditionally linked with rest."],
    ["Freya", "female", ["two-syllable"], "Inspired by the Norse goddess associated with love and courage."],
    ["Bruno", "male", ["two-syllable"], "A grounded European name associated with brown."],
    ["Xena", "female", ["short", "two-syllable", "unusual"], "A bold name with a clean, energetic sound."],
    ["Valor", "unisex", ["two-syllable", "unusual"], "The quality of courage and resolve."],
    ["Sable", "unisex", ["two-syllable"], "Inspired by a rich dark colour and the sable animal."],
    ["Knox", "male", ["short", "unusual"], "A compact name with a firm final sound."],
    ["Zara", "female", ["short", "two-syllable"], "A bright international name with a confident rhythm."],
    ["Bear", "male", ["short"], "Inspired by strength, steadiness, and presence."],
    ["Griffin", "male", ["two-syllable"], "Inspired by the legendary guardian creature."],
    ["Nyx", "female", ["short", "unusual"], "Inspired by the Greek personification of night."],
    ["Titan", "male", ["two-syllable"], "A mythic name suggesting scale and strength."],
    ["Vega", "unisex", ["short", "two-syllable", "unusual"], "Named for one of the brightest stars in the night sky."]
  ],
  elegant: [
    ["Celeste", "female", ["unusual"], "A graceful name meaning heavenly."],
    ["Hugo", "male", ["short", "two-syllable"], "A polished European classic associated with mind and spirit."],
    ["Esme", "female", ["short", "unusual"], "A refined name associated with being esteemed."],
    ["Dante", "male", ["two-syllable"], "An Italian literary name with a clear cadence."],
    ["Opal", "female", ["short", "two-syllable"], "Inspired by the luminous gemstone."],
    ["Felix", "male", ["two-syllable"], "A Latin name associated with happiness and good fortune."],
    ["Amara", "female", [], "A melodic international name with several positive traditions."],
    ["Louis", "male", ["two-syllable"], "A traditional name with a composed sound.", "LOO-ee"],
    ["Flora", "female", ["two-syllable"], "The Roman name associated with flowers and spring."],
    ["Theo", "male", ["short", "two-syllable"], "A warm shortened classic with an elegant finish."],
    ["Vivienne", "female", ["unusual"], "A French form associated with life."],
    ["Nico", "unisex", ["short", "two-syllable"], "A sleek shortened name used across Europe."],
    ["Pearl", "female", ["short"], "Inspired by the timeless natural gemstone."],
    ["Elio", "male", ["two-syllable", "unusual"], "An Italian name associated with the sun.", "EH-lee-oh"]
  ],
  playful: [
    ["Biscuit", "unisex", ["two-syllable"], "A cosy food-inspired name with comic warmth."],
    ["Ziggy", "unisex", ["two-syllable"], "A lively name with a quick, bouncy rhythm."],
    ["Pippin", "unisex", ["two-syllable"], "A cheerful traditional nickname with storybook energy."],
    ["Tilly", "female", ["two-syllable"], "A bright shortened classic that feels light and friendly."],
    ["Mochi", "unisex", ["two-syllable"], "Inspired by the soft Japanese rice cake."],
    ["Bubbles", "unisex", ["two-syllable", "unusual"], "A buoyant choice for an expressive personality."],
    ["Pickle", "unisex", ["two-syllable", "unusual"], "A humorous food name with a crisp sound."],
    ["Sunny", "unisex", ["two-syllable"], "Inspired by warmth and bright weather."],
    ["Waffle", "unisex", ["two-syllable", "unusual"], "A playful food-inspired choice."],
    ["Fizz", "unisex", ["short", "unusual"], "A tiny name suggesting sparkle and energy."],
    ["Doodle", "unisex", ["two-syllable"], "A light creative name with an easy call sound."],
    ["Peanut", "unisex", ["two-syllable"], "An affectionate choice often suited to a small companion."],
    ["Skipper", "unisex", ["two-syllable"], "A jaunty name inspired by captains and movement."],
    ["Trixie", "female", ["two-syllable"], "A spirited nickname with a playful ending."]
  ],
  "nature-inspired": [
    ["Willow", "female", ["two-syllable"], "Inspired by the graceful willow tree."],
    ["River", "unisex", ["two-syllable"], "A flowing landscape name associated with movement."],
    ["Aspen", "unisex", ["two-syllable"], "Named for the mountain tree with shimmering leaves."],
    ["Clover", "female", ["two-syllable"], "A green botanical name associated with luck."],
    ["Fern", "female", ["short"], "Inspired by the resilient woodland plant."],
    ["Birch", "male", ["short", "unusual"], "Named for the pale-barked tree."],
    ["Sage", "unisex", ["short"], "A fragrant herb name also associated with wisdom."],
    ["Storm", "unisex", ["short"], "A dramatic weather-inspired choice."],
    ["Maple", "female", ["two-syllable"], "Inspired by the tree known for vivid seasonal colour."],
    ["Ocean", "unisex", ["two-syllable", "unusual"], "A broad natural name inspired by the sea."],
    ["Flint", "male", ["short"], "Named for the hard stone that can create a spark."],
    ["Meadow", "female", ["two-syllable"], "Inspired by open grassland and wildflowers."],
    ["Cedar", "unisex", ["two-syllable"], "Named for the aromatic evergreen tree."],
    ["Dawn", "female", ["short"], "Inspired by the first light of day."]
  ],
  "travel-inspired": [
    ["Cairo", "male", ["two-syllable"], "Inspired by Egypt’s historic capital."],
    ["Oslo", "unisex", ["short", "two-syllable"], "Inspired by Norway’s waterside capital."],
    ["Rio", "unisex", ["short", "two-syllable"], "A bright city name that also means river in Spanish and Portuguese."],
    ["Bali", "unisex", ["short", "two-syllable"], "Inspired by the Indonesian island."],
    ["Skye", "unisex", ["short"], "Inspired by Scotland’s Isle of Skye."],
    ["Atlas", "male", ["two-syllable"], "Inspired by maps, journeys, and world geography."],
    ["Paris", "unisex", ["two-syllable"], "Inspired by the French capital."],
    ["Siena", "female", ["two-syllable"], "Inspired by the historic Tuscan city."],
    ["Kona", "unisex", ["short", "two-syllable"], "Inspired by the western coast of Hawaiʻi."],
    ["Hudson", "male", ["two-syllable"], "Inspired by the river and wider travel region."],
    ["Sahara", "female", [], "Inspired by the vast North African desert."],
    ["Devon", "unisex", ["two-syllable"], "Inspired by the English county of coasts and moorland."],
    ["Journey", "unisex", ["two-syllable", "unusual"], "A direct celebration of movement and discovery."],
    ["Dakota", "unisex", [], "A place-inspired name with a broad, open sound."]
  ],
  "Italian-inspired": [
    ["Luna", "female", ["short", "two-syllable"], "The Italian word for moon."],
    ["Enzo", "male", ["short", "two-syllable"], "A compact Italian name with an energetic sound."],
    ["Bella", "female", ["two-syllable"], "The Italian word for beautiful."],
    ["Dante", "male", ["two-syllable"], "A literary Italian name associated with endurance."],
    ["Aria", "female", ["two-syllable"], "An Italian musical term for a solo melody."],
    ["Bruno", "male", ["two-syllable"], "A traditional Italian name associated with brown."],
    ["Giada", "female", ["two-syllable", "unusual"], "The Italian word used for jade.", "JAH-dah"],
    ["Nino", "male", ["short", "two-syllable"], "A warm Italian given name and familiar form."],
    ["Stella", "female", ["two-syllable"], "The Italian word for star."],
    ["Piero", "male", ["two-syllable", "unusual"], "An Italian form related to Peter.", "PYEH-roh"],
    ["Rocco", "male", ["two-syllable"], "A strong Italian name with a grounded sound."],
    ["Vita", "female", ["short", "two-syllable", "unusual"], "The Italian word for life."],
    ["Elio", "male", ["two-syllable", "unusual"], "An Italian name associated with the sun.", "EH-lee-oh"],
    ["Lupo", "male", ["short", "two-syllable", "unusual"], "The Italian word for wolf."]
  ],
  "African-inspired": [
    ["Zuri", "unisex", ["short", "two-syllable"], "A Swahili name associated with beauty."],
    ["Ayo", "unisex", ["short", "two-syllable", "unusual"], "A Yoruba name associated with joy.", "EYE-oh"],
    ["Amara", "female", [], "A name found in several traditions, including West African usage."],
    ["Thandi", "female", ["two-syllable", "unusual"], "A southern African name associated with love.", "TAHN-dee"],
    ["Lethabo", "unisex", ["unusual"], "A Sesotho name associated with joy.", "leh-TAH-boh"],
    ["Jabari", "male", ["unusual"], "A Swahili name associated with bravery.", "jah-BAH-ree"],
    ["Zola", "unisex", ["short", "two-syllable"], "A southern African name with a calm, lyrical sound."],
    ["Tau", "male", ["short", "unusual"], "A Setswana and Sesotho word for lion.", "TAH-oo"],
    ["Imani", "female", ["unusual"], "A Swahili name meaning faith.", "ee-MAH-nee"],
    ["Themba", "male", ["two-syllable", "unusual"], "An isiZulu name associated with hope or trust.", "TEM-bah"],
    ["Neo", "unisex", ["short", "two-syllable"], "A Sesotho and Setswana name associated with a gift.", "NEH-oh"],
    ["Eshe", "female", ["short", "two-syllable", "unusual"], "A Swahili name associated with life.", "EH-sheh"],
    ["Sanaa", "female", ["two-syllable", "unusual"], "A Swahili name associated with art.", "sah-NAH"],
    ["Kito", "male", ["short", "two-syllable", "unusual"], "A compact East African-inspired choice with a clear rhythm."]
  ],
  "American-inspired": [
    ["Scout", "unisex", ["short"], "A spirited literary and outdoors-inspired choice."],
    ["Dakota", "unisex", [], "A place-inspired name with a broad, open sound."],
    ["Austin", "male", ["two-syllable"], "Inspired by the Texas capital."],
    ["Georgia", "female", [], "Inspired by the US state and a classic given name."],
    ["Denver", "unisex", ["two-syllable"], "Inspired by Colorado’s mountain gateway city."],
    ["Hudson", "male", ["two-syllable"], "Inspired by the Hudson River and valley."],
    ["Aspen", "unisex", ["two-syllable"], "Inspired by the Colorado mountain town and tree."],
    ["Memphis", "unisex", ["two-syllable", "unusual"], "Inspired by the Tennessee music city."],
    ["Cheyenne", "female", ["two-syllable", "unusual"], "A place name connected with Wyoming’s capital.", "shy-ANN"],
    ["Cody", "male", ["short", "two-syllable"], "A familiar American place and given name."],
    ["Savannah", "female", [], "Inspired by the historic Georgia city and open grasslands."],
    ["Dallas", "unisex", ["two-syllable"], "Inspired by the Texas city."],
    ["Brooklyn", "unisex", ["two-syllable"], "Inspired by the New York borough."],
    ["Lincoln", "male", ["two-syllable"], "A historic surname and American place name."]
  ]
};

function whyItWorks(name: string, tags: NameTag[]) {
  if (tags.includes("short")) return `${name} is concise, easy to repeat, and distinct in everyday recall cues.`;
  if (tags.includes("two-syllable")) return `${name} has a clear rhythm that is comfortable to call and easy to recognise.`;
  return `${name} has a distinctive sound and enough character to suit a memorable everyday dog name.`;
}

export const nameIdeas: NameIdea[] = Object.entries(curatedNames).flatMap(([style, names]) =>
  names.map(([name, gender, tags, meaning, pronunciation]) => ({
    name,
    style: style as NameStyle,
    gender,
    tags,
    pronunciation,
    meaning,
    why: whyItWorks(name, tags)
  }))
);

export const nameStyles = Object.keys(curatedNames) as NameStyle[];
