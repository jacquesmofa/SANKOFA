import { sankofa } from "@/lib/content";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/Button";
import { Img } from "@/components/Img";
import { Invitation } from "@/components/Invitation";
import { Divider, Eyebrow, SankofaMark } from "@/components/Mark";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export default function Sankofa() {
  usePageMeta("/sankofa");
  const p = sankofa;
  return (
    <main>
      <PageHero {...p.hero} imageAlt="An honouree in traditional dress before a kente-patterned backdrop" />

      {/* The word itself */}
      <section className="border-y border-ink-line bg-ink-2 py-20 md:py-24">
        <div className="mx-auto max-w-page px-5 text-center md:px-8">
          <Reveal>
            <SankofaMark className="mx-auto h-24 w-24 text-gold md:h-32 md:w-32" title="The Sankofa Adinkra symbol" />
            <p className="mt-8 font-display text-5xl tracking-wide text-ivory md:text-7xl">{p.meaning.word}</p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-3xl gap-px bg-ink-line sm:grid-cols-3">
            {p.meaning.parts.map((part, i) => (
              <Reveal key={part.term} delay={i * 120} className="bg-ink-2 px-6 py-8">
                <p className="font-display text-4xl italic text-gold-light">{part.term}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ivory/70">{part.meaning}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <blockquote className="mx-auto mt-12 max-w-3xl font-display text-2xl italic leading-snug text-ivory md:text-3xl">{p.meaning.translation}</blockquote>
          </Reveal>
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-page space-y-24 px-5 md:px-8">
          {p.chapters.map((c, i) => (
            <Reveal key={c.heading} className={`grid items-center gap-10 md:grid-cols-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="md:col-span-5">
                <Img src={c.image} alt={c.heading} ratio={1.25} widths={[420, 700]} sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Eyebrow>Chapter {["one", "two", "three", "four"][i] ?? i + 1}</Eyebrow>
                <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">{c.heading}</h2>
                <p className="mt-6 text-[17px] leading-relaxed text-ivory/75">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why the name */}
      <section className="relative overflow-hidden bg-carpet-deep py-20 md:py-28">
        <SankofaMark className="pointer-events-none absolute -right-20 top-1/2 h-[520px] w-[520px] -translate-y-1/2 text-ivory/[0.06]" />
        <div className="relative mx-auto max-w-page px-5 md:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-4xl text-ivory md:text-5xl">{p.whyHeading}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ivory/85">{p.whyBody}</p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {p.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120} className="border-t border-gold-light/50 pt-6">
                <h3 className="font-display text-3xl italic text-gold-light">{v.title}</h3>
                <p className="mt-3 text-ivory/80">{v.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-4">
            <Button to="/nomination">Nominate a leader</Button>
            <Button to="/gallery" variant="outline">
              See past honourees
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-ink pt-16">
        <Divider />
      </div>
      <Invitation />
    </main>
  );
}
