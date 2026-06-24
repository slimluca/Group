"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function DogTravelChecklist() {
  const [scope, setScope] = useState("International");
  const [purpose, setPurpose] = useState("Moving abroad");
  const [size, setSize] = useState("Medium or large dog");
  const [transport, setTransport] = useState("Flight");
  const list = useMemo(() => {
    const items = ["Confirm your dog's health, temperament, and travel suitability with a veterinarian.", "Prepare identification, microchip records, vaccination records, and emergency contact details.", "Pack food, water plan, medication, comfort item, waste bags, lead or harness, and cleaning supplies.", "Research dog-friendly accommodation and arrival transport before departure."];
    if (scope === "International") items.unshift("Check current official government import, export, and transit rules for every country involved.");
    if (purpose === "Moving abroad") items.push("Plan housing rules, rental permissions, local vet registration, routine rebuilding, and extra arrival funds.");
    if (transport === "Flight") items.push("Confirm airline pet policy, crate requirements, weather restrictions, booking steps, and check-in timing directly with the airline.");
    if (transport === "Car") items.push("Plan restraint, breaks, water, shade, overnight stops, and safe loading routines.");
    if (size === "Small dog") items.push("Check carrier size rules and whether in-cabin travel is possible for your route.");
    else items.push("Confirm crate sizing, handling requirements, and realistic comfort planning for a larger dog.");
    return items;
  }, [scope, purpose, size, transport]);
  return <section className="section"><div className="shell"><p className="eyebrow">DogHaven Lab</p><h1>Dog Travel Checklist</h1><p className="lead">Generate a tailored checklist, then verify current rules with official government, airline, transport, and veterinary sources. This is planning support, not legal or veterinary advice.</p><div className="tool"><div className="panel"><Select label="Trip type" value={scope} setValue={setScope} options={["Domestic", "International"]} /><Select label="Purpose" value={purpose} setValue={setPurpose} options={["Holiday", "Moving abroad"]} /><Select label="Dog size" value={size} setValue={setSize} options={["Small dog", "Medium or large dog"]} /><Select label="Transport method" value={transport} setValue={setTransport} options={["Flight", "Car", "Train or ferry"]} /></div><div className="panel"><p className="eyebrow">Tailored checklist</p>{list.map((item) => <label className="choice" key={item}><input type="checkbox" /><span>{item}</span></label>)}<p>For deeper planning, read <Link href="/global-travel/moving-abroad-with-a-dog">moving abroad with a dog</Link> or browse the <Link href="/global-travel/route-guides">Route Guides hub</Link>.</p></div></div></div></section>;
}

function Select({ label, value, setValue, options }: { label: string; value: string; setValue: (value: string) => void; options: string[] }) {
  return <label className="field"><span>{label}</span><select value={value} onChange={(event) => setValue(event.target.value)}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}
