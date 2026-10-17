import Image from "next/image";
import { CompareClient } from "@/components/global-index/CompareClient";
import { IndexNav, IndexNotice } from "@/components/global-index/IndexShared";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Compare Dog Ownership by Country | Dog Haven Group","Compare housing, transport, costs, climate, veterinary support, travel complexity and everyday dog ownership across researched countries.","world-atlas/global-dog-ownership-index/compare");
export default function Page(){return <>
  <section className="page-hero template-hero template-hero-index">
    <Image className="template-hero-image" src="/images/doghavengroup/visuals/ownership-index-irish-setter-coast.webp" alt="An Irish Setter beside a coastal planning scene representing global dog ownership research" fill priority sizes="100vw" />
    <span className="template-hero-overlay" aria-hidden="true" />
    <div className="shell"><IndexNav/><div className="page-hero-copy template-hero-copy"><p className="eyebrow">Global Dog Ownership Index</p><h1>Compare Dog Ownership by Country</h1><p className="lead">Compare two or three founding profiles without turning editorial evidence into a universal ranking. Use the comparison to see which questions deserve closer local research.</p><div className="hero-actions"><a className="button" href="#comparison-tool">Start comparing</a><a className="button secondary" href="/world-atlas/global-dog-ownership-index/methodology">Read the methodology</a></div></div></div>
  </section>
  <main>
    <section className="section index-feature-section"><div className="shell index-feature-grid"><div className="editorial-copy"><p className="eyebrow">A clearer planning view</p><h2>See the trade-offs before you make a country decision.</h2><p>Country comparisons are useful when they expose questions rather than pretending to settle them. Housing, transport, veterinary access, climate, local services and travel conditions can vary dramatically within a national border.</p><p>Choose two or three profiles, review the evidence confidence and then follow the links into local research. The tool is a starting point for better investigation, not a universal scorecard for every dog or household.</p></div><Image className="index-feature-image" src="/images/doghavengroup/visuals/country-comparison-golden-retriever.webp" alt="A Golden Retriever beside a refined country comparison planning scene" width={1100} height={780}/></div></section>
    <section className="section index-tool-section" id="comparison-tool"><div className="shell"><IndexNotice/><CompareClient/></div></section>
  </main>
</>}