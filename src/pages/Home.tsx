import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { event, formatDate, gallery, home, nomination, tickets, upcomingDate } from "@/lib/content";
import { img } from "@/lib/media";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/Button";
import { Countdown } from "@/components/Countdown";
import { Img } from "@/components/Img";
import { Invitation } from "@/components/Invitation";
import { Divider, Eyebrow, SankofaMark } from "@/components/Mark";
import { Prose } from "@/components/Prose";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

function Hero() {
  const { hero } = home;
  const [slide, setSlide] = useState(0);
  const date = upcomingDate();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setSlide((s) => (s + 1) % hero.slides.length), 7000);
    return () => window.clearInterval(id);
  }, [hero.slides.length]);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      {hero.slides.map((src, i) => (
        <div key={src} className={`absolute inset-0 transition-opacity duration-[1600ms] ${i === slide ? "opacity-100" : "opacity-0"}`} aria-hidden={i !== slide}>
          <img
            src={img(src, { w: 1920, h: 1080 })}
            srcSet={[900, 1400, 1920].map((w) => `${img(src, { w, h: Math.round(w * 0.5625) })} ${w}w`).join(", ")}
            sizes="100vw"
            alt=""
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            className={`h-full w-full object-cover ${i === slide ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative mx-auto grid w-full max-w-page gap-10 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-12 lg:items-end lg:pb-24">
        <div className="lg:col-span-8">
          <Eyebrow className="animate-rise">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 animate-rise font-display leading-[0.92] text-ivory [animation-delay:120ms]">
            <span className="block text-[64px] sm:text-[96px] lg:text-[128px]">{hero.titleLine1}</span>
            <span className="mt-2 block text-[36px] italic text-gold-light sm:text-[54px] lg:text-[68px]">{hero.titleLine2}</span>
          </h1>
          <p className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-ivory/80 [animation-delay:240ms] md:text-xl">{hero.intro}</p>
          <div className="mt-9 flex animate-rise flex-col gap-4 [animation-delay:360ms] sm:flex-row">
            <Button to="/tickets">{hero.primaryLabel}</Button>
            <Button to="/nomination" variant="outline">
              {hero.secondaryLabel}
            </Button>
          </div>
        </div>

        <aside className="animate-rise border-l-2 border-carpet bg-ink/70 p-6 backdrop-blur-md [animation-delay:480ms] lg:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-label text-gold">{event.editionLabel}</p>
          <p className="mt-3 font-display text-2xl text-ivory">{date ? formatDate(event.date) : event.dateText}</p>
          <p className="mt-1 text-sm text-ivory-muted">
            {event.venueName} · {event.venueAddress}
          </p>
          {date && (
            <div className="mt-5">
              <Countdown target={date} />
            </div>
          )}
          <p className="mt-4 border-t border-ink-line pt-4 text-xs leading-relaxed text-ivory/60">
            Last edition: {event.lastEdition.when} — “{event.lastEdition.theme}”
          </p>
        </aside>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 gap-2 lg:flex" role="tablist" aria-label="Hero photos">
        {hero.slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === slide}
            aria-label={`Photo ${i + 1}`}
            onClick={() => setSlide(i)}
            className={`h-[3px] transition-all duration-500 ${i === slide ? "w-10 bg-gold" : "w-5 bg-ivory/30 hover:bg-ivory/60"}`}
          />
        ))}
      </div>
    </section>
  );
}

function Ribbon() {
  const words = [...home.ribbon, ...home.ribbon];
  return (
    <div className="overflow-hidden border-y border-carpet-deep bg-carpet py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-8 motion-reduce:animate-none">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-xl italic text-ivory md:text-2xl">
            {w}
            <SankofaMark className="h-5 w-5 text-gold-light" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  const s = home.story;
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-page gap-16 px-5 md:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <SectionHeading eyebrow={s.eyebrow} heading={s.heading} />
          <Prose text={s.body} className="mt-8 text-[17px] leading-relaxed text-ivory/75" />
          <ol className="mt-10 space-y-6">
            {s.pillars.map((p, i) => (
              <li key={p.title} className="flex gap-5 border-t border-ink-line pt-6">
                <span className="w-10 shrink-0 font-display text-2xl italic text-gold">{ROMAN[i]}</span>
                <div>
                  <h3 className="font-display text-xl text-ivory">{p.title}</h3>
                  <p className="mt-1 text-ivory/65">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="relative lg:col-span-6" delay={150}>
          <div className="relative ml-auto w-[82%]">
            <Img src={s.imageLarge} alt="The host addresses guests at the 2025 Sankofa Royale Awards" ratio={1.3} widths={[480, 760, 1000]} sizes="(min-width: 1024px) 40vw, 80vw" className="aspect-[10/13] w-full object-cover" />
            <div className="absolute -left-4 -top-4 h-full w-full border border-gold/40" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-10 left-0 w-[46%] border-[6px] border-ink shadow-2xl">
            <Img src={s.imageSmall} alt="An honouree raises her award on the red carpet" ratio={1.25} widths={[320, 520]} sizes="30vw" className="aspect-[4/5] w-full object-cover" />
          </div>
          <figure className="mt-20 border-l-2 border-carpet pl-6 lg:ml-[50%] lg:mt-8">
            <blockquote className="font-display text-2xl italic leading-snug text-ivory">{s.quote}</blockquote>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-gold">{s.quoteSource}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  const e = home.experience;
  return (
    <section className="bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow={e.eyebrow} heading={e.heading} />
          <Link to="/award-night" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold-light hover:text-gold">
            The full evening <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-page px-5 md:px-8">
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {e.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className={`w-[78%] shrink-0 snap-start md:w-auto ${i % 2 ? "md:mt-16" : ""}`}>
              <article className="group relative overflow-hidden">
                <Img src={item.image} alt={item.title} ratio={1.45} widths={[360, 560]} sizes="(min-width: 768px) 25vw, 78vw" className="aspect-[2/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="font-display text-sm italic text-gold">0{i + 1}</span>
                  <h3 className="mt-1 font-display text-2xl text-ivory">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/75">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const t = home.timeline;
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <SankofaMark className="pointer-events-none absolute -left-40 top-10 h-[560px] w-[560px] text-gold/[0.035]" />
      <div className="relative mx-auto max-w-page px-5 md:px-8">
        <SectionHeading eyebrow={t.eyebrow} heading={t.heading} align="center" />
        <Divider className="mt-8" />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" aria-hidden="true" />
          <ol className="grid gap-12 md:grid-cols-4 md:gap-6">
            {t.items.map((item, i) => (
              <Reveal key={item.year} delay={i * 140}>
                <li className="relative">
                  <div className="flex items-center gap-4 md:block">
                    <span className={`font-display text-5xl md:text-6xl ${i === t.items.length - 1 ? "italic text-carpet-glow" : "text-gold-light"}`}>{item.year}</span>
                    <span className="hidden h-3 w-3 rotate-45 border border-gold bg-ink md:absolute md:left-1 md:top-[33px] md:block" aria-hidden="true" />
                  </div>
                  <Link to={item.link} className="group mt-6 block">
                    <div className="overflow-hidden">
                      <Img src={item.image} alt={item.title} ratio={0.8} widths={[360, 560]} sizes="(min-width: 768px) 25vw, 90vw" className="aspect-[5/4] w-full object-cover grayscale-[35%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                    </div>
                    <h3 className="mt-5 flex items-center gap-2 font-display text-xl text-ivory group-hover:text-gold-light">
                      {item.title} <ArrowUpRight className="h-4 w-4 text-gold opacity-0 transition group-hover:opacity-100" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/65">{item.text}</p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const c = home.categoriesTeaser;
  return (
    <section className="border-y border-ink-line bg-ink-2 py-24 md:py-28">
      <div className="mx-auto grid max-w-page gap-14 px-5 md:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionHeading eyebrow={c.eyebrow} heading={c.heading} body={c.body} />
          <Button to="/nomination" className="mt-9">
            {c.buttonLabel}
          </Button>
        </Reveal>
        <Reveal className="lg:col-span-8" delay={150}>
          <ol className="grid gap-x-10 sm:grid-cols-2">
            {nomination.categories.map((cat, i) => (
              <li key={cat.name} className="flex items-baseline gap-4 border-b border-ink-line py-3.5">
                <span className="w-7 shrink-0 font-display text-sm italic tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[15px] text-ivory/85">{cat.name}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function TicketsTeaser() {
  const t = home.ticketsTeaser;
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <SectionHeading eyebrow={t.eyebrow} heading={t.heading} body={t.body} align="center" />
        <div className="mt-14 grid gap-px bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
          {tickets.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100} className="h-full">
              <Link to="/tickets" className={`group flex h-full flex-col bg-ink p-8 transition-colors hover:bg-ink-3 ${tier.featured ? "relative ring-1 ring-inset ring-gold/60" : ""}`}>
                {tier.featured && <span className="absolute right-0 top-0 bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">Most loved</span>}
                <p className="text-[11px] font-semibold uppercase tracking-label text-gold">{tier.guests}</p>
                <h3 className="mt-4 font-display text-2xl text-ivory">{tier.name}</h3>
                <p className="mt-6 font-display text-5xl text-gold-light">{tier.price}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs uppercase tracking-[0.2em] text-ivory/70 group-hover:text-gold">
                  Details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ivory-dim">{tickets.priceNote}</p>
        <div className="mt-10 text-center">
          <Button to="/tickets" variant="outline">
            {t.buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

function GalleryTeaser() {
  const g = home.galleryTeaser;
  const albums = gallery.albums;
  const layout = ["md:col-span-7 md:row-span-2", "md:col-span-5", "md:col-span-5", "md:col-span-12 lg:col-span-7"];
  return (
    <section className="bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow={g.eyebrow} heading={g.heading} />
          <Button to="/gallery" variant="outline">
            {g.buttonLabel}
          </Button>
        </div>
        <div className="mt-14 grid auto-rows-[260px] gap-4 md:grid-cols-12 md:auto-rows-[280px]">
          {albums.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 120} className={layout[i]}>
              <Link to={`/gallery/${a.slug}`} className="group relative block h-full overflow-hidden">
                <Img src={a.cover} alt={`${a.year} ${a.title}`} widths={[480, 800, 1200]} ratio={i === 0 ? 1.1 : 0.62} sizes="(min-width: 768px) 55vw, 100vw" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="font-display text-sm italic text-gold">{a.year}</p>
                  <h3 className="font-display text-2xl text-ivory md:text-3xl">{a.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/60">{a.photos.length} photographs</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta("/");
  return (
    <main>
      <Hero />
      <Ribbon />
      <Story />
      <Experience />
      <Timeline />
      <Categories />
      <TicketsTeaser />
      <GalleryTeaser />
      <Invitation />
    </main>
  );
}
