import { CONTACT } from "@/lib/site-data";
import { images } from "@/lib/site-data";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={images.luxuryLivingOffice}
        alt="Luxury interior living room designed by First Bholad Ltd"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/55 to-charcoal/40" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-28 sm:px-10 md:justify-center md:pb-24">
        <div className="max-w-2xl reveal">
          <span className="eyebrow text-gold">First Bholad Ltd · Abuja, Nigeria</span>
          <h1 className="mt-5 text-4xl leading-[1.05] text-primary-foreground sm:text-5xl md:text-6xl">
            Designing Exceptional Spaces. Building Lasting Value.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            First Bholad Ltd delivers premium architecture, interior design, renovation, and
            construction solutions for residential and commercial clients across Nigeria.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="bg-gradient-gold inline-flex items-center justify-center rounded-sm px-8 py-4 text-sm font-medium uppercase tracking-widest text-gold-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/40 px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              Request Consultation
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-primary-foreground/90">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm">5.0 · 20+ verified reviews on Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
