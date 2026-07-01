import { Sofa, Compass, Hammer } from "lucide-react";

const groups = [
  {
    icon: Sofa,
    title: "Interior Design",
    items: [
      "Bathroom Design",
      "Bedroom Design",
      "Living Room Design",
      "Dining Room Design",
      "Kitchen Design",
      "Office Space Design",
      "Restaurant Design",
      "Hospitality Design",
    ],
  },
  {
    icon: Compass,
    title: "Architecture & Planning",
    items: [
      "Architectural Designs",
      "Interior Architectural Design",
      "Space Planning",
      "Consultancy",
    ],
  },
  {
    icon: Hammer,
    title: "Construction & Renovation",
    items: [
      "Renovation Works",
      "Refurbishment",
      "Flooring Selection",
      "Interior Painting",
      "Stone, Brick & Stucco Design",
      "Custom Installations",
      "Cabinetry & Hardware Design",
      "Closet Design",
      "Lighting Design",
      "Window Design",
      "Door Design",
      "Home Decor Selection",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
            A complete suite of design and build services.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="reveal flex flex-col rounded-sm border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-elegant"
            >
              <div className="bg-gradient-gold flex h-14 w-14 items-center justify-center rounded-sm">
                <Icon className="h-7 w-7 text-gold-foreground" />
              </div>
              <h3 className="mt-6 text-2xl text-foreground">{title}</h3>
              <ul className="mt-5 space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
