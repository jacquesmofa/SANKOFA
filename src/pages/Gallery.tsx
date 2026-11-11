import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Images } from "lucide-react";
import { gallery, type Album } from "@/lib/content";
import { usePageMeta } from "@/lib/seo";
import { Img } from "@/components/Img";
import { Lightbox } from "@/components/Lightbox";
import { Divider, Eyebrow, SankofaMark } from "@/components/Mark";
import { Reveal } from "@/components/Reveal";
import NotFound from "./NotFound";

/** Album index: one large "cover story" per album, alternating sides. */
export function GalleryIndex() {
  usePageMeta("/gallery");
  return (
    <main className="bg-ink pt-[76px]">
      <section className="relative overflow-hidden py-16 md:py-24">
        <SankofaMark className="pointer-events-none absolute -right-24 -top-10 h-[480px] w-[480px] text-gold/[0.04]" />
        <div className="relative mx-auto max-w-page px-5 md:px-8">
          <Eyebrow>Gallery</Eyebrow>
          <h1 className="mt-5 font-display text-5xl text-ivory md:text-7xl">{gallery.heading}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75">{gallery.intro}</p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gold-light">
            {gallery.albums.length} albums · {gallery.albums.reduce((n, a) => n + a.photos.length, 0)} photographs
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-page space-y-6 px-5 md:px-8">
          {gallery.albums.map((a, i) => (
            <Reveal key={a.slug}>
              <Link to={`/gallery/${a.slug}`} className="group grid overflow-hidden border border-ink-line bg-ink-2 transition-colors hover:border-gold/60 md:grid-cols-12">
                <div className={`relative overflow-hidden md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                  <Img src={a.cover} alt={`${a.year} ${a.title}`} ratio={0.62} widths={[600, 900, 1300]} sizes="(min-width: 768px) 58vw, 100vw" className="aspect-[16/10] h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 flex gap-1 p-4">
                    {a.photos.slice(1, 4).map((p) => (
                      <Img key={p} src={p} alt="" ratio={1} widths={[120]} sizes="60px" className="h-14 w-14 border-2 border-ink object-cover md:h-16 md:w-16" />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:col-span-5 md:p-12">
                  <p className="font-display text-6xl italic text-gold/80 md:text-7xl">{a.year}</p>
                  <h2 className="mt-3 font-display text-3xl text-ivory md:text-4xl">{a.title}</h2>
                  <p className="mt-2 text-sm italic text-gold-light">{a.theme}</p>
                  <p className="mt-5 leading-relaxed text-ivory/70">{a.description}</p>
                  <p className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ivory/80 group-hover:text-gold">
                    <Images className="h-4 w-4 text-gold" /> {a.photos.length} photographs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

function AlbumView({ album }: { album: Album }) {
  usePageMeta(`/gallery/${album.slug}`, `${album.year} ${album.title} — Gallery`);
  const [open, setOpen] = useState<number | null>(null);
  const others = gallery.albums.filter((a) => a.slug !== album.slug);
  const landscape = album.layout === "landscape";
  const label = `${album.year} · ${album.title}`;

  return (
    <main className="bg-ink pt-[76px]">
      <section className="relative overflow-hidden">
        <Img src={album.cover} alt="" widths={[800, 1400, 2000]} className="absolute inset-0 h-full w-full object-cover opacity-25 blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        <div className="relative mx-auto max-w-page px-5 py-16 md:px-8 md:py-24">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold-light hover:text-gold">
            <ArrowLeft className="h-4 w-4" /> All albums
          </Link>
          <p className="mt-10 font-display text-7xl italic text-gold/80 md:text-8xl">{album.year}</p>
          <h1 className="mt-2 font-display text-4xl text-ivory md:text-6xl">{album.title}</h1>
          <p className="mt-3 italic text-gold-light">{album.theme}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75">{album.description}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-ivory/60">{album.photos.length} photographs · tap any photo to view it full screen</p>
        </div>
      </section>

      <section className="pb-20">
        <div className={`mx-auto grid max-w-page gap-2 px-3 sm:gap-3 md:px-8 ${landscape ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}`}>
          {album.photos.map((src, i) => (
            <button key={src} type="button" onClick={() => setOpen(i)} className="group relative block overflow-hidden bg-ink-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold" aria-label={`Open photo ${i + 1} of ${album.photos.length}`}>
              <Img
                src={src}
                alt={`${label}, photo ${i + 1}`}
                ratio={landscape ? 0.67 : 1.25}
                widths={landscape ? [480, 720] : [300, 450, 600]}
                sizes={landscape ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"}
                className={`${landscape ? "aspect-[3/2]" : "aspect-[4/5]"} w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:opacity-90`}
              />
              <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/0 transition group-hover:ring-gold/60" />
            </button>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink-2 py-16">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <Divider />
          <p className="mt-8 text-center text-[11px] font-semibold uppercase tracking-label text-gold">More from the archive</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((a) => (
              <Link key={a.slug} to={`/gallery/${a.slug}`} className="group relative block overflow-hidden">
                <Img src={a.cover} alt={`${a.year} ${a.title}`} ratio={0.7} widths={[400, 640]} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[10/7] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <p className="font-display text-sm italic text-gold">{a.year}</p>
                  <p className="font-display text-xl text-ivory">{a.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Lightbox photos={album.photos} index={open} title={label} onChange={setOpen} />
    </main>
  );
}

export function AlbumPage() {
  const { slug } = useParams();
  const album = gallery.albums.find((a) => a.slug === slug);
  return album ? <AlbumView key={album.slug} album={album} /> : <NotFound />;
}
