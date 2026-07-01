import { CONTACT } from "@/lib/site-data";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1-2.82h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.79a5.66 5.66 0 0 0-.77-.05 5.68 5.68 0 1 0 5.68 5.68V9.01a7.34 7.34 0 0 0 4.28 1.37V7.3a4.28 4.28 0 0 1-3.28-1.48Z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-dark px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-4 text-3xl leading-tight text-primary-foreground sm:text-4xl">
            {CONTACT.name}
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/70">
            Reach out to discuss your next residential or commercial project with our team in Abuja.
          </p>

          <div className="mt-8 space-y-5">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 text-primary-foreground/90 transition-colors hover:text-gold"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>{CONTACT.address}</span>
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center gap-4 text-primary-foreground/90 transition-colors hover:text-gold"
            >
              <Phone className="h-5 w-5 shrink-0 text-gold" />
              <span>{CONTACT.phone}</span>
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { href: CONTACT.instagram, Icon: Instagram, label: "Instagram" },
              { href: CONTACT.facebook, Icon: Facebook, label: "Facebook" },
              { href: CONTACT.tiktok, Icon: TikTok, label: "TikTok" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary-foreground/20 text-primary-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="reveal overflow-hidden rounded-sm border border-primary-foreground/10">
          <iframe
            title="First Bholad Ltd location"
            src="https://www.google.com/maps?q=Citec%20Estate%20Jabi%20Abuja&output=embed"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
