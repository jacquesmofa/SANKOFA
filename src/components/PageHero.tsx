import { Img } from "./Img";
import { Eyebrow } from "./Mark";

type Props = { eyebrow: string; heading: string; intro: string; image: string; imageAlt?: string; children?: React.ReactNode };

/** Inner-page opening: words on the left, a tall photo in a gold offset frame on the right. */
export function PageHero({ eyebrow, heading, intro, image, imageAlt, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-[76px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(179,18,30,0.22),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-page items-center gap-12 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20">
        <div className="animate-rise md:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[42px] leading-[1.04] text-ivory sm:text-6xl lg:text-[76px]">{heading}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/75">{intro}</p>
          {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
        </div>
        <div className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
          <div className="absolute -bottom-4 -right-4 h-full w-full border border-gold/50" aria-hidden="true" />
          <Img src={image} alt={imageAlt ?? heading} ratio={1.25} widths={[400, 640, 900]} sizes="(min-width: 768px) 40vw, 90vw" priority className="relative aspect-[4/5] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
