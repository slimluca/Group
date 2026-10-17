import Image from "next/image";
import Link from "next/link";
import { GlobalGuide } from "@/data/global-guides";

export function GlobalGuidePage({ guide }: { guide: GlobalGuide }) {
  return <>
    <section className="global-guide-hero">
      <Image src={guide.hero.src} alt={guide.hero.alt} fill priority sizes="100vw" />
      <span className="global-guide-hero-wash" aria-hidden="true" />
      <div className="shell global-guide-hero-inner"><div className="global-guide-hero-copy"><p className="eyebrow">{guide.eyebrow}</p><h1>{guide.title}</h1><p className="lead">{guide.description}</p><div className="hero-actions"><Link className="button" href="/world-atlas/dogs-of-the-world">Explore dogs by country</Link><Link className="button secondary" href="/lab/breed-fit-quiz">Try the breed-fit quiz</Link></div></div></div>
    </section>
    <main>
      <section className="section global-guide-intro"><div className="shell editorial-copy global-guide-intro-copy"><p className="eyebrow">A useful starting point</p><h2>Good dog information makes the real decision easier.</h2>{guide.intro.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div></section>
      {guide.sections.map((section,index)=><section className={`section global-guide-section ${index % 2 === 1 ? "global-guide-section-dark" : ""}`} key={section.title}><div className="shell global-guide-section-grid"><div className="global-guide-section-number">0{index+1}</div><div className="editorial-copy"><p className="eyebrow">Dog Haven Group planning guide</p><h2>{section.title}</h2>{section.body.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div></div></section>)}
      <section className="section global-guide-checklist"><div className="shell global-guide-checklist-grid"><div className="editorial-copy"><p className="eyebrow">Before you decide</p><h2>Turn the information into a plan you can actually keep.</h2><p>Use this checklist as a conversation starter with the people who share the home. The right dog is the one whose welfare can be supported consistently, including during the difficult weeks.</p></div><ol>{guide.checklist.map((item,index)=><li key={item}><span>0{index+1}</span><p>{item}</p></li>)}</ol></div></section>
      <section className="section global-guide-end"><div className="shell global-guide-end-inner"><p className="eyebrow">Keep exploring</p><h2>Start with the country story, then test the fit for your own life.</h2><div className="compact-actions"><Link className="button" href="/world-atlas/dogs-of-the-world">Dogs of the World</Link><Link className="button secondary" href="/global-travel/dog-passport-planner">Dog travel planner</Link></div></div></section>
    </main>
  </>;
}
