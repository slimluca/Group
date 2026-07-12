import { passportPlannerSources, type PassportPlannerSource } from "../data/passport-planner-sources.ts";

export const STORAGE_KEY = "dog-haven-global-passport-planner-v1";
export const STORAGE_VERSION = 1;
export const EU_COUNTRIES = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE".split(" "));

export type ChecklistStatus = "remaining" | "completed" | "not-applicable";
export type PlannerState = {
  version: 1; createdAt: string; updatedAt: string; origin: string; destination: string; ukArea: "" | "great-britain" | "northern-ireland" | "not-sure"; travelDate: string; journeyType: "" | "temporary" | "permanent" | "returning" | "exploring"; purpose: string;
  dogName: string; dogAge: string; dogAgeUnit: "years" | "months"; dogSize: string; breed: string; dogCount: string; flatFaced: string; microchip: string; vaccinationRecords: string; crateExperience: string; assistanceDog: string;
  transport: "" | "flight" | "road" | "rail" | "ferry" | "mixed" | "undecided"; mixedModes: string[]; flightPlacement: string; carrier: string; checklist: Record<string, ChecklistStatus>;
};

export type ChecklistCategory = { id: string; title: string; items: { id: string; label: string; allowNA?: boolean }[] };

export function createInitialPlanner(now = new Date()): PlannerState {
  const stamp = now.toISOString();
  return { version: 1, createdAt: stamp, updatedAt: stamp, origin: "", destination: "", ukArea: "", travelDate: "", journeyType: "", purpose: "", dogName: "", dogAge: "", dogAgeUnit: "years", dogSize: "", breed: "", dogCount: "1", flatFaced: "", microchip: "", vaccinationRecords: "", crateExperience: "", assistanceDog: "", transport: "", mixedModes: [], flightPlacement: "", carrier: "", checklist: {} };
}

export function daysUntil(date: string, today = new Date()) {
  if (!date || Number.isNaN(Date.parse(`${date}T12:00:00`))) return null;
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  return Math.round((new Date(`${date}T00:00:00`).getTime() - start) / 86400000);
}

export function planningWindow(date: string, today = new Date()) {
  const days = daysUntil(date, today);
  if (days === null) return { days, level: "invalid", title: "Choose a valid planned date", message: "Add an approximate date so the planner can organise preparation phases." };
  if (days < 0) return { days, level: "invalid", title: "Past date", message: "Choose a future departure date. This planner cannot build a plan for a date that has passed." };
  const title = days > 180 ? "Long planning window" : days >= 90 ? "Good planning window — check official timelines now" : days >= 30 ? "Priority preparation window" : days >= 14 ? "Limited planning window" : "Urgent verification required";
  return { days, level: days < 14 ? "urgent" : days < 30 ? "limited" : "planning", title, message: `Your selected date leaves approximately ${days} days. Some routes require lengthy preparation, permits, testing or waiting periods. Review official sources and contact the relevant authorities immediately.` };
}

export function validateJourney(plan: PlannerState, today = new Date()) {
  const errors: Record<string, string> = {};
  if (!plan.origin) errors.origin = "Choose an origin country.";
  if (!plan.destination) errors.destination = "Choose a destination country.";
  if (plan.origin && plan.origin === plan.destination) errors.destination = "Origin and destination must be different for an international plan.";
  if (!plan.travelDate) errors.travelDate = "Choose a planned or approximate departure date.";
  else if ((daysUntil(plan.travelDate, today) ?? -1) < 0) errors.travelDate = "Choose a future departure date.";
  if (!plan.journeyType) errors.journeyType = "Choose a journey type.";
  if (!plan.purpose) errors.purpose = "Choose a personal travel purpose.";
  if (plan.destination === "GB" && !plan.ukArea) errors.ukArea = "Choose the United Kingdom destination area, or select Not sure.";
  return errors;
}

export function checklistFor(plan: PlannerState): ChecklistCategory[] {
  const categories: ChecklistCategory[] = [
    { id: "official", title: "Official route research", items: [
      { id: "official-destination", label: "Review the destination authority" }, { id: "official-origin", label: "Review the origin export authority" }, { id: "official-transit", label: "Review every transit-country requirement", allowNA: true }, { id: "official-entry", label: "Confirm the exact entry point or route where applicable", allowNA: true }
    ] },
    { id: "veterinary", title: "Veterinary and identification preparation", items: [
      { id: "vet-appointment", label: "Arrange a veterinary planning appointment" }, { id: "vet-microchip", label: plan.microchip === "not-microchipped" ? "Discuss identification and microchip preparation with the appropriate veterinarian and authority" : "Confirm microchip and identification status" }, { id: "vet-records", label: "Review vaccination records and identification details" }, { id: "vet-tests", label: "Ask which tests, treatments, certificates or endorsements apply" }, { id: "vet-government", label: "Ask whether government endorsement is required", allowNA: true }
    ] },
    { id: "transport", title: "Transport", items: [
      { id: "transport-acceptance", label: "Confirm every carrier accepts the dog and complete itinerary" }, { id: "transport-carrier", label: "Confirm crate or carrier requirements" }, { id: "transport-transfer", label: "Confirm transfer arrangements", allowNA: true }, { id: "transport-season", label: "Confirm weather, seasonal and operational policies" }, { id: "transport-arrival", label: "Confirm arrival transport and create a backup route" }
    ] },
    { id: "crate", title: "Crate and journey preparation", items: [
      { id: "crate-select", label: "Select a suitable crate or carrier", allowNA: plan.transport === "road" }, { id: "crate-acclimatise", label: plan.crateExperience === "none" ? "Begin gradual crate acclimatisation early" : "Continue calm crate or carrier practice", allowNA: plan.crateExperience === "not-applicable" }, { id: "crate-labels", label: "Check permitted identification labels" }, { id: "crate-water", label: "Prepare water arrangements and journey-specific welfare questions" }, { id: "crate-bedding", label: "Confirm whether familiar bedding is permitted", allowNA: true }
    ] },
    { id: "documents", title: "Document organisation", items: [
      { id: "docs-paper", label: "Create a paper document folder" }, { id: "docs-offline", label: "Create offline digital copies" }, { id: "docs-details", label: "Verify names, identification details and document dates" }, { id: "docs-sources", label: "Save official-source links and prepare emergency contacts" }
    ] },
    { id: "arrival", title: "Accommodation and arrival", items: [
      { id: "arrival-stay", label: "Confirm dog-friendly accommodation" }, { id: "arrival-transport", label: "Confirm local transport" }, { id: "arrival-walk", label: "Plan a suitable first walking area and calm recovery time" }, { id: "arrival-vet", label: "Research nearby veterinary support" }, { id: "arrival-food", label: "Plan food availability and routine continuity" }
    ] },
    { id: "emergency", title: "Emergency and contingency", items: [
      { id: "emergency-transport", label: "Record a backup transport contact" }, { id: "emergency-vet", label: "Record an emergency veterinary contact" }, { id: "emergency-lost", label: "Prepare lost-dog information and identification photographs" }, { id: "emergency-delay", label: "Create a delay and communication contingency" }
    ] }
  ];
  if (plan.journeyType === "temporary") categories.push({ id: "return", title: "Return journey", items: [
    { id: "return-rules", label: "Review return-entry requirements before departure" }, { id: "return-docs", label: "Preserve certificates and confirm return documentation" }, { id: "return-carrier", label: "Confirm the return carrier and itinerary" }, { id: "return-changes", label: "Check official rule changes again before returning" }
  ] });
  return categories;
}

export function timelineFor(plan: PlannerState) {
  const phases = [
    { title: "Research phase", timing: "As early as possible", tasks: ["Open destination and origin official sources.", "Identify the competent veterinary authority and investigate permits, certificates, tests, treatments or quarantine that may apply.", "Investigate transit countries and discuss the route with an appropriate veterinarian."] },
    { title: "Transport phase", timing: "Early planning", tasks: ["Confirm carrier acceptance, the complete route and transfer conditions.", "Confirm crate or carrier specifications and seasonal restrictions.", "Investigate arrival transport and create a backup route."] },
    { title: "Veterinary preparation phase", timing: "Timing determined by official requirements", tasks: ["Review identification and vaccination history.", "Ask which tests, treatments, certificates and endorsements apply.", "Schedule appointments according to the official timing for this route."] },
    { title: "Document phase", timing: "Before final booking and travel", tasks: ["Gather official documents and check names and identification details.", "Keep paper and offline digital copies and confirm validity.", "Verify destination and transit requirements again."] },
    { title: "Final preparation phase", timing: "Close to departure", tasks: ["Reconfirm transport and accommodation.", "Prepare emergency contacts, crate, arrival plans, and food and water questions.", "Open the official sources again before travel."] },
    { title: "Arrival phase", timing: "On arrival and during the first days", tasks: ["Follow official inspection or entry instructions.", "Use pre-arranged transport and establish a calm routine.", "Identify local veterinary support and monitor the dog after travel."] }
  ];
  if (plan.journeyType === "temporary") phases.push({ title: "Return phase", timing: "Plan before the outbound journey", tasks: ["Investigate return-entry requirements before departure.", "Preserve relevant documents and confirm return documentation.", "Review the route and official sources again before returning."] });
  return phases;
}

export function sourcesFor(plan: Pick<PlannerState, "origin" | "destination" | "ukArea" | "transport" | "mixedModes">): PassportPlannerSource[] {
  const ids = new Set<string>();
  const addCode = (code: string) => passportPlannerSources.filter((source) => source.countryCode === code).forEach((source) => ids.add(source.id));
  if (plan.origin !== "GB") addCode(plan.origin);
  if (plan.destination !== "GB") addCode(plan.destination);
  if (EU_COUNTRIES.has(plan.origin) || EU_COUNTRIES.has(plan.destination)) addCode("EU");
  if (plan.destination === "GB") addCode(plan.ukArea === "northern-ireland" ? "GB-NIR" : "GB");
  if (plan.origin === "GB" && plan.ukArea === "northern-ireland") addCode("GB-NIR");
  if (plan.transport === "flight" || (plan.transport === "mixed" && plan.mixedModes.includes("flight"))) addCode("AIR");
  return passportPlannerSources.filter((source) => ids.has(source.id));
}

export function checklistProgress(categories: ChecklistCategory[], statuses: Record<string, ChecklistStatus>) {
  const items = categories.flatMap((category) => category.items);
  const applicable = items.filter((item) => statuses[item.id] !== "not-applicable");
  const completed = applicable.filter((item) => statuses[item.id] === "completed").length;
  const notApplicable = items.length - applicable.length;
  return { total: items.length, completed, remaining: applicable.length - completed, notApplicable, percent: applicable.length ? Math.round((completed / applicable.length) * 100) : 0 };
}

export function isStoredPlanner(value: unknown): value is PlannerState {
  if (!value || typeof value !== "object") return false;
  const plan = value as Partial<PlannerState>;
  return plan.version === STORAGE_VERSION && typeof plan.origin === "string" && typeof plan.destination === "string" && typeof plan.checklist === "object" && Array.isArray(plan.mixedModes);
}
