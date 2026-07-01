import { useState } from "react";
import { toast } from "sonner";
import { CONTACT } from "@/lib/site-data";

const services = [
  "Interior Design",
  "Architecture & Planning",
  "Renovation & Refurbishment",
  "Construction",
  "Space Planning / Consultancy",
  "Other",
];

const budgets = [
  "Under ₦2M",
  "₦2M – ₦5M",
  "₦5M – ₦15M",
  "₦15M – ₦50M",
  "Above ₦50M",
];

export function Booking() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const message = [
      `New Consultation Request — First Bholad Ltd`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Location: ${data.get("location")}`,
      `Service: ${data.get("service")}`,
      `Budget: ${data.get("budget")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");

    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    toast.success("Thank you! We're opening WhatsApp to complete your request.");
    form.reset();
    setSubmitting(false);
  };

  const inputCls =
    "w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold";

  return (
    <section id="booking" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="reveal text-center">
          <span className="eyebrow">Get Started</span>
          <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
            Request a Consultation
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project and our team will get back to you shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal mt-12 grid gap-4 rounded-sm border border-border bg-card p-6 shadow-elegant sm:grid-cols-2 sm:p-10"
        >
          <input name="name" required placeholder="Full Name" className={inputCls} />
          <input name="phone" required placeholder="Phone Number" className={inputCls} />
          <input name="email" type="email" placeholder="Email" className={inputCls} />
          <input name="location" placeholder="Project Location" className={inputCls} />
          <select name="service" required defaultValue="" className={inputCls}>
            <option value="" disabled>
              Service Needed
            </option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select name="budget" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Budget Range
            </option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows={4}
            className={`${inputCls} sm:col-span-2`}
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-gradient-gold sm:col-span-2 rounded-sm px-8 py-4 text-sm font-medium uppercase tracking-widest text-gold-foreground shadow-elegant transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
