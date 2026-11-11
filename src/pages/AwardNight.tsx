import { awardNight, event, formatDate, upcomingDate } from "@/lib/content";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/Button";
import { Img } from "@/components/Img";
import { Invitation } from "@/components/Invitation";
import { Divider } from "@/components/Mark";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function AwardNight() {
  usePageMeta("/award-night");
  const p = awardNight;
  const date = upcomingDate();
  return (
    <main>
      <PageHero {...p.hero} imageAlt="A guest in a red gown on the Sankofa Royale red carpet">
        <Button to="/tickets">Reserve a Seat</Button>
        <Button to="/gallery/gala-2025" variant="outline">
          See the 2025 gala
        </Button>
      </PageHero>

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-page gap-12 px-5 md:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-tight text-ivory md:text-5xl">{p.intro.heading}</h2>
          </Reveal>
          <Reveal className="text-[17px] leading-relaxed text-ivory/75 lg:col-span-7" delay={120}>
            <Prose text={p.intro.body} />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-2 py-20 md:py-28" aria-labelledby="flow">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <SectionHeading eyebrow="The evening, moment by moment" heading="How the night unfolds" align="center" />
          <Divider className="mt-8" />
          <ol className="mt-16 space-y-20 md:space-y-28" id="flow">
            {p.moments.map((m, i) => (
              <li key={m.title}>
                <Reveal className={`grid items-center gap-10 md:grid-cols-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative md:col-span-6">
                    <Img src={m.image} alt={m.title} ratio={0.75} widths={[480, 800, 1100]} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                    <span className="absolute -top-6 left-4 font-display text-7xl italic text-gold/80 md:-left-6 md:text-8xl" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-5 md:col-start-8">
                    <p className="text-[11px] font-semibold uppercase tracking-label text-carpet-glow">{m.time}</p>
                    <h3 className="mt-3 font-display text-3xl text-ivory md:text-4xl">{m.title}</h3>
                    <p className="mt-4 text-[17px] leading-relaxed text-ivory/70">{m.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-page gap-12 px-5 md:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Plan your evening" heading={p.details.heading} />
            <div className="mt-8 border border-gold/40 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-label text-gold">{event.editionLabel}</p>
              <p className="mt-2 font-display text-2xl text-ivory">{date ? formatDate(event.date) : event.dateText}</p>
              <p className="mt-1 text-sm text-ivory-muted">
                {event.time} · {event.venueName}, {event.venueAddress}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">{event.note}</p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <dl className="divide-y divide-ink-line border-y border-ink-line">
              {p.details.items.map((d) => (
                <div key={d.label} className="grid gap-2 py-6 sm:grid-cols-3">
                  <dt className="font-display text-lg italic text-gold-light">{d.label}</dt>
                  <dd className="text-ivory/75 sm:col-span-2">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-2 py-20 md:py-28">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <SectionHeading eyebrow="Come as royalty" heading={p.attire.heading} body={p.attire.body} />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {p.attire.images.map((src, i) => (
              <Reveal key={src} delay={i * 100} className={i % 2 ? "md:mt-12" : ""}>
                <Img src={src} alt="Guests in traditional attire at the Sankofa Royale Awards" ratio={1.4} widths={[300, 480]} sizes="(min-width: 768px) 25vw, 50vw" className="aspect-[5/7] w-full object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Invitation />
    </main>
  );
}
