import { Check, Mail, MessageCircle, Phone, Plus } from "lucide-react";
import { event, formatDate, site, tickets, upcomingDate, whatsappLink } from "@/lib/content";
import { usePageMeta } from "@/lib/seo";
import { Img } from "@/components/Img";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function Tickets() {
  usePageMeta("/tickets");
  const p = tickets;
  const date = upcomingDate();
  const phone = site.contact.phones[0];
  return (
    <main>
      <PageHero {...p.hero} imageAlt="Guests at a front-row table at the Sankofa Royale Awards">
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-light">
          <MessageCircle className="h-4 w-4" /> {p.howToBuy.whatsappLabel}
        </a>
      </PageHero>

      <section className="bg-ink pb-10 pt-6">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <div className="flex flex-col gap-2 border-y border-ink-line py-5 text-sm text-ivory/75 md:flex-row md:items-center md:justify-between">
            <span>
              <span className="text-gold">{event.editionLabel}:</span> {date ? formatDate(event.date) : event.dateText} · {event.venueName}
            </span>
            <span className="text-ivory-dim">{p.priceNote}</span>
          </div>
        </div>
      </section>

      <section className="bg-ink pb-24">
        <div className="mx-auto grid max-w-page gap-6 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-4">
          {p.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100} className="h-full">
              <article className={`flex h-full flex-col border bg-ink-2 ${tier.featured ? "border-gold shadow-[0_0_60px_-20px_rgba(200,162,83,0.45)]" : "border-ink-line"}`}>
                <div className="relative">
                  <Img src={tier.image} alt={`${tier.name} at the gala`} ratio={0.7} widths={[400, 640]} sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="aspect-[10/7] w-full object-cover" />
                  {tier.featured && <span className="absolute left-0 top-4 bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">Most loved</span>}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-gold">{tier.guests}</p>
                  <h2 className="mt-3 font-display text-2xl text-ivory">{tier.name}</h2>
                  <p className="mt-4 font-display text-5xl text-gold-light">{tier.price}</p>
                  <ul className="mt-6 space-y-3 text-sm text-ivory/75">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hello! I would like to reserve: ${tier.name} (${tier.guests}) for the Sankofa Royale Awards gala.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto block pt-8 text-center`}
                  >
                    <span className={`block py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors ${tier.featured ? "bg-gold text-ink hover:bg-gold-light" : "border border-gold/60 text-gold-light hover:bg-gold hover:text-ink"}`}>
                      Reserve this tier
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-2 py-20 md:py-24">
        <div className="mx-auto grid max-w-page gap-12 px-5 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Book with a person, not a checkout" heading={p.howToBuy.heading} body={p.howToBuy.body} />
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {[
              { href: whatsappLink(), label: p.howToBuy.whatsappLabel, detail: phone.display, Icon: MessageCircle, external: true },
              { href: `tel:${phone.link}`, label: p.howToBuy.callLabel, detail: site.contact.phones.map((x) => x.display).join(" · "), Icon: Phone, external: false },
              { href: `mailto:${site.contact.email}?subject=${encodeURIComponent("Sankofa Royale Awards — tickets")}`, label: p.howToBuy.emailLabel, detail: site.contact.email, Icon: Mail, external: false },
            ].map(({ href, label, detail, Icon, external }) => (
              <a key={label} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group border border-ink-line bg-ink p-6 transition-colors hover:border-gold">
                <Icon className="h-6 w-6 text-gold" />
                <p className="mt-5 font-display text-xl text-ivory group-hover:text-gold-light">{label}</p>
                <p className="mt-1 break-words text-sm text-ivory-muted">{detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHeading eyebrow="Questions" heading={p.faq.heading} align="center" />
          <div className="mt-12 divide-y divide-ink-line border-y border-ink-line">
            {p.faq.items.map((q) => (
              <details key={q.question} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-xl text-ivory marker:hidden hover:text-gold-light">
                  {q.question}
                  <Plus className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="pb-5 leading-relaxed text-ivory/70">{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
