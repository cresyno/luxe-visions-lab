import { CONTACT } from "@/lib/site-data";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1-2.82h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.79a5.66 5.66 0 0 0-.77-.05 5.68 5.68 0 1 0 5.68 5.68V9.01a7.34 7.34 0 0 0 4.28 1.37V7.3a4.28 4.28 0 0 1-3.28-1.48Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-serif text-2xl text-foreground">{CONTACT.name}</div>
            <p className="mt-2 text-sm uppercase tracking-widest text-gold">
              Architecture • Interior Design • Renovation • Construction
            </p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-gold"
            >
              <MapPin className="h-4 w-4 text-gold" /> {CONTACT.address}
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center gap-3 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold" /> {CONTACT.phone}
            </a>
          </div>

          <div className="flex gap-3">
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
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {year} {CONTACT.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
