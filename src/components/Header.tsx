import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Projects" },
  { href: "#transformations", label: "Transformations" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 shadow-card backdrop-blur-md"
          : "bg-gradient-to-b from-charcoal/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#home"
          className={`font-serif text-xl tracking-tight transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          First Bholad<span className="text-gold">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-gold ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-gradient-gold rounded-sm px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-gold-foreground"
          >
            Consultation
          </a>
        </nav>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-charcoal md:hidden animate-fade-in">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-serif text-xl text-foreground">
              First Bholad<span className="text-gold">.</span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 pt-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-serif text-2xl text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="bg-gradient-gold mt-6 rounded-sm px-6 py-4 text-center text-sm font-medium uppercase tracking-widest text-gold-foreground"
            >
              Request Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
