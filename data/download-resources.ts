export type DownloadStatus = "available" | "coming next" | "planned";

export type DownloadResource = {
  title: string;
  slug?: string;
  status: DownloadStatus;
  description: string;
  relatedHref: string;
  relatedLabel: string;
  filename: string;
  benefit: string;
};

export const downloadResources: DownloadResource[] = [
  {
    title: "Global Dog Owner Starter Guide",
    slug: "/downloads/global-dog-owner-starter-guide",
    status: "available",
    description:
      "A polished first planning guide for globally minded dog owners covering lifestyle fit, costs, puppy preparation, travel, relocation, safety, and country-network next steps.",
    relatedHref: "/academy/first-time-dog-owner-guide",
    relatedLabel: "First-Time Dog Owner Guide",
    filename: "dog-haven-group-global-dog-owner-starter-guide.pdf",
    benefit: "Gives new and moving households one calm place to start before using the wider platform."
  },
  {
    title: "Moving Abroad With a Dog Checklist",
    status: "coming next",
    description:
      "A relocation checklist for separating origin-country tasks, destination-country tasks, airline steps, housing research, and arrival routines.",
    relatedHref: "/global-travel/moving-abroad-with-a-dog",
    relatedLabel: "Moving Abroad With a Dog",
    filename: "dog-haven-group-moving-abroad-with-a-dog-checklist.pdf",
    benefit: "Helps owners avoid late paperwork, unclear source checks, and first-week arrival chaos."
  },
  {
    title: "International Dog Travel Planner",
    status: "planned",
    description:
      "A route-planning worksheet for documents, transport decisions, transit points, crate preparation, accommodation, and official-source verification.",
    relatedHref: "/global-travel",
    relatedLabel: "Global Travel",
    filename: "dog-haven-group-international-dog-travel-planner.pdf",
    benefit: "Turns broad travel anxiety into a route-specific planning file."
  },
  {
    title: "Dog Cost Planning Workbook",
    status: "planned",
    description:
      "A budgeting workbook for monthly ranges, annual reserves, emergency planning, grooming, food, insurance, training, boarding, and relocation extras.",
    relatedHref: "/world-atlas/dog-ownership-costs-by-country",
    relatedLabel: "Dog Ownership Costs by Country",
    filename: "dog-haven-group-dog-cost-planning-workbook.pdf",
    benefit: "Helps households compare cost pressure without pretending one number fits every country."
  },
  {
    title: "Puppy First Month Planner",
    status: "planned",
    description:
      "A first-month routine planner for sleeping, toilet training, feeding, veterinary registration, safe equipment, visitors, and household roles.",
    relatedHref: "/lab/puppy-readiness-quiz",
    relatedLabel: "Puppy Readiness Quiz",
    filename: "dog-haven-group-puppy-first-month-planner.pdf",
    benefit: "Gives new puppy households a practical structure before the emotional first weeks begin."
  },
  {
    title: "Dog Emergency Preparedness Checklist",
    status: "planned",
    description:
      "A safety checklist for lost-dog details, emergency vet access, medication notes, heat or cold planning, travel disruption, and backup caregivers.",
    relatedHref: "/journal",
    relatedLabel: "Dog Haven Group Journal",
    filename: "dog-haven-group-dog-emergency-preparedness-checklist.pdf",
    benefit: "Keeps critical information close before a stressful moment arrives."
  },
  {
    title: "Dog Breed Fit Worksheet",
    status: "planned",
    description:
      "A decision worksheet for comparing routine, home space, grooming tolerance, training capacity, family needs, and travel fit before choosing a dog.",
    relatedHref: "/lab/breed-fit-quiz",
    relatedLabel: "Breed Fit Quiz",
    filename: "dog-haven-group-dog-breed-fit-worksheet.pdf",
    benefit: "Moves breed decisions away from appearance and toward responsible lifestyle fit."
  }
];

