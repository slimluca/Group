export function ToolEditorialGuidance({ eyebrow = "Using this tool", title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="section editorial">
      <div className="shell editorial-reading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
