export type PlannedImageAsset = {
  filename: string;
  folder: string;
  usedOn: string;
  recommendedSize: string;
  description: string;
  alt: string;
  mobileCrop: string;
  priority: "high" | "medium";
};

export const plannedImageAssets: PlannedImageAsset[] = [
  {
    filename: "global-dog-ownership-hero.svg",
    folder: "public/images/doghavengroup/home/",
    usedOn: "/about",
    recommendedSize: "1600x1100",
    description: "Premium editorial artwork showing a calm dog ownership planning desk with subtle global map cues.",
    alt: "Dog Haven Group global dog ownership platform brand scene.",
    mobileCrop: "Keep the dog and planning desk centered; map detail can crop softly.",
    priority: "high"
  },
  {
    filename: "world-atlas-premium-map.svg",
    folder: "public/images/doghavengroup/world-atlas/",
    usedOn: "/world-atlas and homepage",
    recommendedSize: "1600x1100",
    description: "Dark premium atlas map with gold country connection lines and dog ownership comparison panels.",
    alt: "A premium world atlas map for global dog ownership planning.",
    mobileCrop: "Keep the central map and two comparison panels visible on narrow crops.",
    priority: "high"
  },
  {
    filename: "international-dog-travel-hero.svg",
    folder: "public/images/doghavengroup/travel/",
    usedOn: "/global-travel",
    recommendedSize: "1600x1100",
    description: "Dog travel planning scene with documents, route lines, crate planning, and official-source reminder cues.",
    alt: "A premium international dog travel planning scene with documents, route lines, and a calm dog.",
    mobileCrop: "Keep dog, documents, and one route line centered.",
    priority: "high"
  },
  {
    filename: "moving-abroad-with-a-dog.svg",
    folder: "public/images/doghavengroup/travel/",
    usedOn: "/global-travel/moving-abroad-with-a-dog",
    recommendedSize: "1600x1100",
    description: "Relocation planning desk with luggage, vet documents, housing notes, and arrival routine checklist.",
    alt: "A dog relocation planning scene with luggage, veterinary documents, housing notes, and route research.",
    mobileCrop: "Keep dog, luggage, and document stack in the center third.",
    priority: "high"
  },
  {
    filename: "doghaven-lab-tools.svg",
    folder: "public/images/doghavengroup/lab/",
    usedOn: "/lab",
    recommendedSize: "1600x1100",
    description: "Premium tool workspace with calculator, quiz, checklist, passport planner, and daily challenge modules.",
    alt: "A premium Dog Haven Group Lab workspace with calculators, quizzes, checklists, and dog planning tools.",
    mobileCrop: "Center the calculator and checklist modules.",
    priority: "high"
  },
  {
    filename: "doghaven-academy-reading-room.svg",
    folder: "public/images/doghavengroup/academy/",
    usedOn: "/academy",
    recommendedSize: "1600x1100",
    description: "Quiet premium reading room with dog owner guides, notes, and a calm educational tone.",
    alt: "A refined Dog Haven Group Academy reading room for global dog owner education.",
    mobileCrop: "Keep reading chair, guide stack, and logo cue visible.",
    priority: "medium"
  },
  {
    filename: "journal-editorial-desk.svg",
    folder: "public/images/doghavengroup/journal/",
    usedOn: "/journal and editorial policy",
    recommendedSize: "1600x1100",
    description: "Premium newsroom desk for global dog ownership, travel, safety, country spotlight, and network update planning.",
    alt: "A premium editorial desk for Dog Haven Group Journal with global dog ownership notes.",
    mobileCrop: "Keep the desk center and avoid cropping headline cards.",
    priority: "medium"
  },
  {
    filename: "download-library-premium-guides.svg",
    folder: "public/images/doghavengroup/downloads/",
    usedOn: "/downloads",
    recommendedSize: "1600x1100",
    description: "Premium library of black, gold, and ivory Dog Haven PDF guides and worksheets.",
    alt: "A premium library of Dog Haven Group branded dog owner guides, planners, and checklists.",
    mobileCrop: "Keep the front guide covers visible, crop shelves first.",
    priority: "high"
  }
];
