import { images } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="reveal order-2 md:order-1">
          <span className="eyebrow">About First Bholad</span>
          <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
            Transforming spaces into beautiful, functional and timeless environments.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            First Bholad Ltd is a professional architecture, interior design, renovation, and
            construction company committed to transforming spaces into beautiful, functional, and
            timeless environments.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From luxury residential interiors to commercial developments and renovations, our team
            combines creativity, technical expertise, and attention to detail to deliver
            exceptional results.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { n: "20+", l: "Verified Reviews" },
              { n: "5.0", l: "Google Rating" },
              { n: "100%", l: "Client Focus" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-gold">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal order-1 overflow-hidden rounded-sm shadow-elegant md:order-2">
          <img
            src={images.modernLivingRoom}
            alt="Elegant modern living room interior by First Bholad Ltd"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
