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
      <section className="section"><div className="shell"><h2>Future countries planned</h2><p className="lead">These markets are shown as planned network expansion only. They should not receive thin pages until DogHaven can publish useful local resources.</p><div className="grid">{futureCountries.map((country) => <div className="nav-card" key={country}><h3>{country}</h3><p>Planned future DogHaven country presence. No thin country page has been created in Phase 1.</p></div>)}</div></div></section>
    </>
  );
}
