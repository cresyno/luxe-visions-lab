import { images } from "@/lib/site-data";

const showcases = [
  {
    before: images.minimalLivingRoom,
    after: images.grandLivingRoom,
    title: "Living Room Transformation",
    description:
      "A dated lounge reimagined into a light-filled marble living space with layered lighting, custom media wall and refined finishes.",
  },
  {
    before: images.cozySittingRoom,
    after: images.luxuryLivingOffice,
    title: "Residential Interior Upgrade",
    description:
      "A simple sitting room elevated into an executive living and study suite with premium materials and considered space planning.",
  },
];

export function BeforeAfter() {
  return (
    <section id="transformations" className="bg-secondary px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">The Difference</span>
          <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
            Before &amp; After Showcase
          </h2>
        </div>

        <div className="mt-14 space-y-16">
          {showcases.map((s) => (
            <div key={s.title} className="reveal grid gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Before", img: s.before },
                  { label: "After", img: s.after },
                ].map((x) => (
                  <div key={x.label} className="relative overflow-hidden rounded-sm shadow-card">
                    <img
                      src={x.img}
                      alt={`${x.label} — ${s.title}`}
                      loading="lazy"
                      className="aspect-[3/4] h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-sm bg-charcoal/80 px-3 py-1 text-xs uppercase tracking-widest text-gold">
                      {x.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl text-foreground">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
