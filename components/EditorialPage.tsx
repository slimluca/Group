import Link from "next/link";
import type { PageContent } from "@/data/content";
import { MediaFrame } from "./MediaFrame";

export function EditorialPage({ page }: { page: PageContent }) {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="page-hero-copy">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.hero}</h1>
            <p className="lead">{page.description}</p>
          </div>
        </div>
      </section>
      {page.sections.map((section, index) => (
        <section className={`section ${index % 2 === 0 ? "editorial" : ""}`} key={section.title}>
          <div className={`shell ${section.image ? "split" : "editorial-reading"}`}>
            <div>
              {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
              {section.links ? (
                <div className="actions">
                  {section.links.map((link) => (
                    <Link className="button" key={link.href} href={link.href}>{link.label}</Link>
                  ))}
                </div>
              ) : null}
            </div>
            {section.image ? <MediaFrame image={section.image} /> : null}
          </div>
        </section>
      ))}
      {page.table ? (
        <section className="section">
          <div className="shell">
            <div className="table-wrap">
              <table>
                <thead><tr>{page.table.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
                <tbody>{page.table.rows.map((row) => <tr key={row.join("-")}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
