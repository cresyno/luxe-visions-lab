import { CONTACT } from "@/lib/site-data";
import { MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
          "Hello First Bholad Ltd, I'd like to discuss a project.",
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-105 md:bottom-6"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Sticky mobile consultation bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
        <a
          href="#booking"
          className="bg-gradient-gold block rounded-sm py-3.5 text-center text-sm font-medium uppercase tracking-widest text-gold-foreground shadow-elegant"
        >
          Request Consultation
        </a>
      </div>
    </>
  );
}
