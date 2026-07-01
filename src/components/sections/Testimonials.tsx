import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "The painting was neat, the color selection was perfect, and the overall interior finish exceeded my expectations.",
    name: "Victoria James",
  },
  {
    text: "David and his team are very reliable, zealous and hardworking young men. He keeps to time and ensures every project receives a satisfying finishing touch.",
    name: "Blessing Ogbeche",
  },
  {
    text: "I had an amazing experience with First Bholad Ltd. Their attention to detail, creativity and professionalism truly set them apart.",
    name: "Nwokorie Uzoma",
  },
  {
    text: "They transformed spaces into something modern, beautiful and functional.",
    name: "Verified Client",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">Client Testimonials</span>
          <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
            Trusted by homeowners and businesses.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="reveal relative rounded-sm border border-border bg-card p-8 shadow-card"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/20" />
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
