import Link from "next/link";

export const toolLinks = [
  { href: "/lab/global-dog-cost-calculator", title: "Global Dog Cost Calculator", text: "Estimate monthly and yearly planning ranges by region, size, food, grooming, insurance, training, and extras." },
  { href: "/lab/breed-fit-quiz", title: "Breed Fit Quiz", text: "Explore lifestyle result categories without pretending one exact breed is universally correct." },
  { href: "/lab/puppy-readiness-quiz", title: "Puppy Readiness Quiz", text: "Score your practical readiness and receive next steps before bringing a puppy home." },
  { href: "/lab/dog-travel-checklist", title: "Dog Travel Checklist", text: "Build a tailored checklist for domestic trips, international travel, holidays, or moving abroad." }
];

export function ToolLinks() {
  return (
    <div className="grid">
      {toolLinks.map((tool) => (
        <Link className="nav-card" href={tool.href} key={tool.href}>
          <h3>{tool.title}</h3>
          <p>{tool.text}</p>
        </Link>
      ))}
    </div>
  );
}
