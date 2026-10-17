import Image from "next/image";
import Link from "next/link";
import styles from "./BreedComparisonPage.module.css";
import { BreedComparison } from "@/data/breed-comparisons";

export function BreedComparisonPage({ comparison }: { comparison: BreedComparison }) {
  return <>
    <section className={styles.hero}><Image src={comparison.hero.src} alt={comparison.hero.alt} fill priority sizes="100vw" /><span className={styles.wash} aria-hidden="true" /><div className={`shell ${styles.heroInner}`}><div className={styles.heroCopy}><p className="eyebrow">{comparison.eyebrow}</p><h1>{comparison.title}</h1><p className="lead">{comparison.description}</p><div className="hero-actions"><Link className="button" href="/guides">Open owner guides</Link><Link className="button secondary" href="/lab/breed-fit-quiz">Try the breed-fit quiz</Link></div></div></div></section>
    <main>
      <section className={`section ${styles.intro}`}><div className={`shell ${styles.introGrid}`}><div className="editorial-copy"><p className="eyebrow">A better comparison</p><h2>Breed choice becomes clearer when the trade-offs are visible.</h2>{comparison.introduction.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div><Image className={styles.secondaryImage} src={comparison.secondary.src} alt={comparison.secondary.alt} width={900} height={650} /></div><div className="shell"><div className={styles.overview}>{comparison.overview.map((item)=><article key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div></div></section>
      <section className={`section ${styles.tableSection}`}><div className="shell"><p className="eyebrow">Side-by-side planning</p><h2>What changes between these two dogs?</h2><div className={styles.tableWrap}><table className={styles.table}><thead><tr><th>Question</th><th>First breed</th><th>Second breed</th></tr></thead><tbody>{comparison.criteria.map((criterion)=><tr key={criterion.label}><td>{criterion.label}</td><td><p>{criterion.first}</p></td><td><p>{criterion.second}</p></td></tr>)}</tbody></table></div><p className={styles.note}>{comparison.criteria.map((criterion)=>criterion.note).join(" ")}</p></div></section>
      {comparison.sections.map((section,index)=><section className={`section ${index % 2 === 1 ? styles.sectionDark : ""}`} key={section.title}><div className={`shell ${styles.sectionGrid}`}><div className={styles.number}>0{index + 1}</div><div className={`editorial-copy ${styles.copy}`}><p className="eyebrow">Dog Haven Group decision guide</p><h2>{section.title}</h2>{section.body.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div></div></section>)}
      <section className={`section ${styles.end}`}><div className={`shell ${styles.endInner}`}><p className="eyebrow">Keep researching</p><h2>The best match is the dog whose needs your household can support consistently.</h2><div className="compact-actions"><Link className="button" href="/world-atlas/dogs-of-the-world">Explore breed stories</Link><Link className="button secondary" href="/world-atlas/dog-friendly-cities">Explore city guides</Link></div></div></section>
    </main>
  </>;
}
