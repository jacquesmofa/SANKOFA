import { Link } from "react-router-dom";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { nomination, site } from "@/lib/content";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/Button";
import { Field, FormShell, fieldClass } from "@/components/FormShell";
import { Img } from "@/components/Img";
import { Invitation } from "@/components/Invitation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function Nomination() {
  usePageMeta("/nomination");
  const p = nomination;
  const form = site.links.nominationForm;
  return (
    <main>
      <PageHero {...p.hero} imageAlt="An honouree receives her award on stage">
        <Button to="#nominate">{p.formButtonLabel}</Button>
      </PageHero>

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <SectionHeading eyebrow="Nineteen ways to honour" heading={p.categoriesHeading} body={p.categoriesIntro} />
          <div className="mt-14 grid gap-px bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
            {p.categories.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 80} className="h-full">
                <article className="group relative h-full bg-ink p-7 transition-colors duration-500 hover:bg-ink-3">
                  <span className="font-display text-4xl italic text-gold/70 transition-colors group-hover:text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-xl text-ivory">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/65">{c.description}</p>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-carpet transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-2 py-20 md:py-28">
        <div className="mx-auto grid max-w-page gap-16 px-5 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="The process" heading={p.steps.heading} />
            <ol className="mt-10 space-y-8">
              {p.steps.items.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <li className="flex gap-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/60 font-display text-xl text-gold-light">{i + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl text-ivory">{s.title}</h3>
                      <p className="mt-2 leading-relaxed text-ivory/70">{s.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Button to="#nominate" className="mt-12">
              {p.formButtonLabel}
            </Button>
          </div>
          <Reveal className="lg:col-span-5" delay={150}>
            <div className="border border-gold/40 bg-ink p-8">
              <h3 className="font-display text-2xl text-ivory">{p.criteria.heading}</h3>
              <ul className="mt-6 space-y-4">
                {p.criteria.items.map((c) => (
                  <li key={c} className="flex gap-3 text-ivory/75">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="nominate" className="scroll-mt-24 border-t border-ink-line bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHeading eyebrow="Nomination form" heading={p.form.heading} body={p.form.intro} />
          <div className="mt-10 border border-gold/40 bg-ink-2 p-7 md:p-10">
            <FormShell subject={(fd) => `Nomination: ${fd.get("nominee_name")} (${fd.get("category")})`} submitLabel="Submit nomination" successMessage={p.form.successMessage}>
              <p className="text-[11px] font-semibold uppercase tracking-label text-gold md:col-span-2">Your details</p>
              <Field label="Your full name" required>
                <input name="name" required autoComplete="name" className={fieldClass} />
              </Field>
              <Field label="Your email" required>
                <input name="email" type="email" required autoComplete="email" className={fieldClass} />
              </Field>
              <Field label="Your phone" required>
                <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
              </Field>
              <Field label="Your relationship to the nominee">
                <input name="relationship" placeholder="e.g. colleague, client, church member" className={fieldClass} />
              </Field>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-label text-gold md:col-span-2">The nominee</p>
              <Field label="Nominee's full name (or organisation)" required>
                <input name="nominee_name" required className={fieldClass} />
              </Field>
              <Field label="Award category" required>
                <select name="category" required className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Choose a category
                  </option>
                  {p.categories.map((c) => (
                    <option key={c.name}>{c.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Nominee's email or phone">
                <input name="nominee_contact" className={fieldClass} />
              </Field>
              <Field label="Website or social media (optional)">
                <input name="nominee_link" type="text" inputMode="url" className={fieldClass} />
              </Field>
              <Field label="Why do they deserve this award?" required className="md:col-span-2">
                <textarea name="statement" required rows={7} maxLength={4000} placeholder="What have they achieved, who has benefited, and for how long?" className={fieldClass} />
              </Field>
            </FormShell>
          </div>
          <a href={form} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-ivory/60 underline-offset-4 hover:text-gold hover:underline">
            {p.form.altLinkLabel} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <section className="bg-ink-2 py-20 md:py-28">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="The honour roll" heading={p.honourRoll.heading} body={p.honourRoll.body} />
            <Link to={p.honourRoll.link} className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold-light hover:text-gold">
              All 2024 nominees <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.honourRoll.images.map((src, i) => (
              <Reveal key={src} delay={i * 100}>
                <Link to={p.honourRoll.link} className="block overflow-hidden border border-ink-line">
                  <Img src={src} alt="2024 Sankofa Royale nominee card" widths={[400, 640]} sizes="(min-width: 1024px) 25vw, 50vw" className="w-full transition-transform duration-700 hover:scale-105" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Invitation />
    </main>
  );
}
