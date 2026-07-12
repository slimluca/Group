import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { countries, futureCountries, pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages.countries;
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() {
  return (
    <>
      <EditorialPage page={page} />
      <section className="section editorial"><div className="shell"><h2>Live country gateways</h2><div className="grid">{countries.map((country) => <Link className="country-card" href={country.href} key={country.href}><h3>{country.name}</h3><p>{country.summary}</p></Link>)}</div></div></section>
      <section className="section"><div className="shell editorial-reading"><h2>How future country expansion is evaluated</h2><p className="lead">The United Kingdom, Australia, Canada, New Zealand, Ireland, Germany, France, and Spain are potential network markets, not empty destinations waiting for generic pages.</p><p>A country site should launch only when it can explain local ownership conditions with care: housing and rental realities, regional climate, public-space expectations, transport, veterinary access, everyday cost pressure, travel connections, and the legal or administrative topics that require current official sources. That work also needs local editorial judgement so advice is not copied from another country and relabelled.</p><p>Until those standards can be met, readers can compare broader conditions through the <Link href="/world-atlas">World Atlas</Link>, prepare cross-border questions in <Link href="/global-travel">Global Travel</Link>, and use the existing gateways for <Link href="/south-africa">South Africa</Link>, <Link href="/united-states">the United States</Link>, and <Link href="/italy">Italy</Link>.</p><p className="muted-note">Markets under consideration: {futureCountries.join(", ")}.</p></div></section>
    </>
  );
}
