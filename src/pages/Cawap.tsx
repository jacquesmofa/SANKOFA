import { cawap, site } from "@/lib/content";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/Button";
import { Img } from "@/components/Img";
import { Invitation } from "@/components/Invitation";
import { SankofaMark } from "@/components/Mark";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function Cawap() {
  usePageMeta("/cawap");
  const p = cawap;
  return (
    <main>
      <PageHero {...p.hero} imageAlt="CAWAP's founder with guests at the Sankofa Royale Awards">
        <Button to={site.links.cawapWebsite}>{p.cta.buttonLabel}</Button>
      </PageHero>

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-page items-center gap-14 px-5 md:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <Img src={p.about.image} alt="The host of the 2023 Sankofa Royale Awards" ratio={1.2} widths={[420, 700]} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[5/6] w-full object-cover" />
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-carpet/70" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <h2 className="font-display text-4xl leading-tight text-ivory md:text-5xl">{p.about.heading}</h2>
            <Prose text={p.about.body} className="mt-6 text-[17px] leading-relaxed text-ivory/75" />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-2 py-20 md:py-28">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <SectionHeading eyebrow="Programs" heading={p.areasHeading} />
          <ol className="mt-14 grid gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {p.areas.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 80}>
                <li className="flex gap-5 border-t border-ink-line py-7">
                  <SankofaMark className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-xl text-ivory">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/65">{a.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-gold/40 p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h3 className="font-display text-3xl text-ivory">{p.cta.heading}</h3>
              <p className="mt-2 text-ivory/70">{p.cta.body}</p>
            </div>
            <Button to={site.links.cawapWebsite}>{p.cta.buttonLabel}</Button>
          </div>
        </div>
      </section>

      <Invitation />
    </main>
  );
}
