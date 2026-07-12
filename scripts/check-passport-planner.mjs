import assert from "node:assert/strict";
import { checklistFor, checklistProgress, createInitialPlanner, isStoredPlanner, planningWindow, sourcesFor, timelineFor, validateJourney } from "../lib/passport-planner.ts";

const today = new Date("2026-07-12T12:00:00Z");
const dateFromNow = (days) => {
  const date = new Date(today);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};
const plan = (overrides = {}) => ({ ...createInitialPlanner(today), origin: "ZA", destination: "GB", ukArea: "great-britain", travelDate: dateFromNow(240), journeyType: "permanent", purpose: "family-relocation", dogAge: "4", dogSize: "medium", microchip: "microchipped", vaccinationRecords: "available", crateExperience: "comfortable", transport: "flight", ...overrides });

assert.equal(planningWindow(dateFromNow(181), today).title, "Long planning window");
assert.match(planningWindow(dateFromNow(120), today).title, /Good planning window/);
assert.equal(planningWindow(dateFromNow(45), today).title, "Priority preparation window");
assert.equal(planningWindow(dateFromNow(20), today).title, "Limited planning window");
assert.equal(planningWindow(dateFromNow(5), today).title, "Urgent verification required");
assert.equal(planningWindow(dateFromNow(-1), today).level, "invalid");
assert.ok(validateJourney(plan({ destination: "ZA" }), today).destination, "same-country route must fail");

assert.ok(timelineFor(plan({ journeyType: "temporary" })).some((phase) => phase.title === "Return phase"));
assert.ok(!timelineFor(plan({ journeyType: "permanent" })).some((phase) => phase.title === "Return phase"));
assert.ok(checklistFor(plan({ journeyType: "temporary" })).some((category) => category.id === "return"));
assert.ok(!checklistFor(plan({ journeyType: "permanent" })).some((category) => category.id === "return"));
assert.ok(checklistFor(plan({ transport: "flight" })).find((category) => category.id === "transport"));
assert.match(checklistFor(plan({ crateExperience: "none" })).find((category) => category.id === "crate").items[1].label, /Begin gradual/);

const sourceTitles = (value) => sourcesFor(value).map((source) => source.title).join(" | ");
assert.match(sourceTitles(plan()), /South African Government/);
assert.match(sourceTitles(plan()), /GOV.UK/);
assert.match(sourceTitles(plan()), /IATA/);
assert.match(sourceTitles(plan({ origin: "US", destination: "IT", journeyType: "temporary" })), /USDA APHIS/);
assert.match(sourceTitles(plan({ origin: "US", destination: "IT" })), /Your Europe/);
assert.match(sourceTitles(plan({ origin: "US", destination: "IT" })), /Italian Ministry/);
assert.match(sourceTitles(plan({ origin: "IT", destination: "US" })), /CDC/);
assert.match(sourceTitles(plan({ origin: "AU", destination: "ZA", transport: "mixed", mixedModes: ["road", "ferry"] })), /Australian Government/);
assert.match(sourceTitles(plan({ origin: "AU", destination: "ZA", transport: "mixed", mixedModes: ["road", "ferry"] })), /South African Government/);
assert.equal(sourcesFor(plan({ origin: "CA", destination: "NZ", transport: "road" })).length, 0, "unsupported route uses generic fallback");

const categories = checklistFor(plan());
const first = categories[0].items[0].id;
const second = categories[0].items[1].id;
const progress = checklistProgress(categories, { [first]: "completed", [second]: "not-applicable" });
assert.equal(progress.completed, 1);
assert.equal(progress.notApplicable, 1);
assert.ok(progress.percent > 0);
assert.ok(isStoredPlanner(plan()));
assert.equal(isStoredPlanner({ version: 2, origin: "ZA", destination: "GB", checklist: {}, mixedModes: [] }), false);
assert.equal(isStoredPlanner({ version: 1 }), false);

console.log("Passport planner deterministic checks passed: timeline windows, validation, journey logic, transport/crate tasks, source filtering, progress, and storage schema.");
