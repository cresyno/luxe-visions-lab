import { Star, ShieldCheck, MapPin, Building2 } from "lucide-react";

const items = [
  { icon: Star, label: "5.0 Google Rating" },
  { icon: ShieldCheck, label: "20+ Verified Reviews" },
  { icon: MapPin, label: "Abuja Based" },
  { icon: Building2, label: "Residential & Commercial" },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 px-4 py-8 text-center"
          >
            <Icon className="h-6 w-6 text-gold" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
