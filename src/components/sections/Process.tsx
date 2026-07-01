const steps = [
  { n: "01", title: "Consultation", text: "We listen to your vision, needs and budget." },
  { n: "02", title: "Site Inspection", text: "We assess the space and gather technical details." },
  { n: "03", title: "Design & Planning", text: "Concepts, layouts and material selections are developed." },
  { n: "04", title: "Project Execution", text: "Skilled teams bring the design to life on schedule." },
  { n: "05", title: "Final Delivery", text: "A flawless handover of your completed space." },
];

export function Process() {
  return (
    <section className="bg-secondary px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">How We Work</span>
          <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
            Our Project Process
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n} className="reveal rounded-sm border border-border bg-card p-6 shadow-card">
              <span className="font-serif text-4xl text-gold">{s.n}</span>
              <h3 className="mt-4 text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
