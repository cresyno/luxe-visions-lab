import { useState } from "react";
import { categories, projects, type ProjectCategory } from "@/lib/site-data";
import { Plus, X } from "lucide-react";

type Filter = "All" | ProjectCategory;

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = projects.filter((p) => filter === "All" || p.category === filter);
  const filters: Filter[] = ["All", ...categories];

  return (
    <section id="portfolio" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">Selected Work</span>
          <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
            Project Portfolio
          </h2>
          <p className="mt-4 text-muted-foreground">
            A showcase of residential, commercial and renovation projects delivered with precision.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                filter === f
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-gold/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => {
            const idx = projects.indexOf(project);
            return (
              <button
                key={project.title}
                onClick={() => setLightbox(idx)}
                className="reveal group relative aspect-[4/5] overflow-hidden rounded-sm text-left shadow-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-xs uppercase tracking-widest text-gold">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-xl text-primary-foreground">{project.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary-foreground/80">
                    <Plus className="h-3.5 w-3.5" /> View Project
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[lightbox].image}
              alt={projects[lightbox].title}
              className="max-h-[78vh] w-full rounded-sm object-contain"
            />
            <figcaption className="mt-4 text-center text-primary-foreground">
              <span className="text-xs uppercase tracking-widest text-gold">
                {projects[lightbox].category}
              </span>
              <div className="mt-1 font-serif text-xl">{projects[lightbox].title}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
