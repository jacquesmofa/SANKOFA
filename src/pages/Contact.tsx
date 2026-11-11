import { Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Field, FormShell, fieldClass } from "@/components/FormShell";
import { contact, site, whatsappLink } from "@/lib/content";
import { usePageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function Contact() {
  usePageMeta("/contact");
  const p = contact;

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
              <div className="mt-8">
                <FormShell subject={(fd) => `${fd.get("topic")} — ${fd.get("name")}`} submitLabel="Send message" successMessage={p.form.successMessage}>
                  <Field label="Full name" required>
                    <input name="name" required autoComplete="name" className={fieldClass} />
                  </Field>
                  <Field label="Email" required>
                    <input name="email" type="email" required autoComplete="email" className={fieldClass} />
                  </Field>
                  <Field label="Phone">
                    <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
                  </Field>
                  <Field label="I'm writing about">
                    <select name="topic" className={fieldClass} defaultValue={p.form.topics[0]}>
                      {p.form.topics.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message" required className="md:col-span-2">
                    <textarea name="message" required rows={6} maxLength={3000} className={fieldClass} />
                  </Field>
                </FormShell>
              </div>
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
