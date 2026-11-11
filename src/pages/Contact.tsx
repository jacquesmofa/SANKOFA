import { useState } from "react";
import { Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, site, whatsappLink } from "@/lib/content";
import { usePageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border border-ink-line bg-ink px-4 py-3.5 text-ivory placeholder:text-ivory-dim focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

export default function Contact() {
  usePageMeta("/contact");
  const p = contact;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.botcheck) return; // spam trap
    const subject = `Sankofa Royale Awards — ${data.topic}`;
    const body = `${data.message}\n\n— ${data.name}\n${data.email}${data.phone ? `\n${data.phone}` : ""}`;
    const key = site.forms.web3formsAccessKey;

    // No form service set up yet: open the visitor's email app with the message ready to send.
    if (!key) {
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: key, subject, from_name: "Sankofa Royale website", ...data }),
      });
      const json = await res.json();
      setStatus(json.success ? "sent" : "error");
      if (json.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <PageHero {...p.hero} imageAlt="Guests celebrating together at the 2025 gala" />

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-page gap-14 px-5 md:px-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            {[
              { href: whatsappLink(), Icon: MessageCircle, label: "WhatsApp", value: site.contact.phones[0].display, ext: true },
              ...site.contact.phones.map((ph) => ({ href: `tel:${ph.link}`, Icon: Phone, label: "Call", value: ph.display, ext: false })),
              { href: `mailto:${site.contact.email}`, Icon: Mail, label: "Email", value: site.contact.email, ext: false },
            ].map(({ href, Icon, label, value, ext }) => (
              <a key={label + value} href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-5 border border-ink-line bg-ink-2 p-5 transition-colors hover:border-gold">
                <Icon className="h-5 w-5 shrink-0 text-gold" />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.22em] text-ivory-dim">{label}</span>
                  <span className="block break-all text-ivory group-hover:text-gold-light">{value}</span>
                </span>
              </a>
            ))}
            <div className="flex items-start gap-5 border border-ink-line bg-ink-2 p-5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <span>
                <span className="block text-[11px] uppercase tracking-[0.22em] text-ivory-dim">{site.contact.officeName}</span>
                <span className="block text-ivory">{site.contact.officeAddress}</span>
              </span>
            </div>
            <iframe
              title={`Map: ${site.contact.officeAddress}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.contact.officeAddress)}&output=embed`}
              className="h-56 w-full border border-ink-line grayscale-[60%] invert-[90%] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <Reveal className="lg:col-span-8">
            <div className="border border-gold/40 bg-ink-2 p-7 md:p-10">
              <h2 className="font-display text-3xl text-ivory md:text-4xl">{p.form.heading}</h2>
              {status === "sent" ? (
                <p className="mt-8 flex items-start gap-3 text-lg text-ivory" role="status">
                  <Check className="mt-1 h-5 w-5 text-gold" /> {site.forms.web3formsAccessKey ? p.form.successMessage : "Your email app has opened with your message ready — just press send."}
                </p>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                  <label className="block">
                    <span className="mb-2 block text-sm text-ivory/80">Full name *</span>
                    <input name="name" required autoComplete="name" className={field} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-ivory/80">Email *</span>
                    <input name="email" type="email" required autoComplete="email" className={field} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-ivory/80">Phone</span>
                    <input name="phone" type="tel" autoComplete="tel" className={field} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-ivory/80">I'm writing about</span>
                    <select name="topic" className={field} defaultValue={p.form.topics[0]}>
                      {p.form.topics.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-sm text-ivory/80">Message *</span>
                    <textarea name="message" required rows={6} maxLength={2000} className={field} />
                  </label>
                  <div className="md:col-span-2">
                    <button type="submit" disabled={status === "sending"} className="bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-light disabled:opacity-60">
                      {status === "sending" ? "Sending…" : "Send message"}
                    </button>
                    {status === "error" && (
                      <p className="mt-4 text-sm text-carpet-glow" role="alert">
                        Sorry, the message could not be sent. Please email {site.contact.email} directly.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink-2 py-20 md:py-28">
        <div className="mx-auto grid max-w-page gap-12 px-5 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Partnerships" heading={p.sponsorship.heading} body={p.sponsorship.body} />
          </div>
          <ul className="space-y-4 lg:col-span-5 lg:col-start-8">
            {p.sponsorship.points.map((pt) => (
              <li key={pt} className="flex gap-4 border-b border-ink-line pb-4 text-ivory/80">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" /> {pt}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
