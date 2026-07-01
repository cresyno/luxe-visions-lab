import { Gem, Users, Clock, Layers, Heart } from "lucide-react";

const reasons = [
  { icon: Gem, title: "Attention To Detail", text: "Every element is carefully planned and executed." },
  { icon: Users, title: "Professional Team", text: "Experienced designers, architects and builders." },
  { icon: Clock, title: "Timely Delivery", text: "Projects completed efficiently and professionally." },
  { icon: Layers, title: "Quality Materials", text: "Premium finishes and trusted suppliers." },
  { icon: Heart, title: "Client Satisfaction", text: "Consistently rated highly by clients." },
];

export function WhyChoose() {
  return (
    <section className="bg-gradient-dark px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">Why First Bholad</span>
          <h2 className="mt-4 text-3xl leading-tight text-primary-foreground sm:text-4xl">
            Built on craftsmanship, trust and results.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="reveal rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm"
            >
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 text-xl text-primary-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
