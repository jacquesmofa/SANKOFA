import { useState } from "react";
import { galleryImages } from "@/mocks/gallery";

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState("");

  const openLightbox = (src: string, caption: string) => {
    setLightboxImage(src);
    setLightboxCaption(caption);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxCaption("");
    document.body.style.overflow = "";
  };

  return (
    <main className="min-h-screen bg-background-950 pt-24 md:pt-28">
      <section className="section-padding py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
            <i className="ri-gallery-line text-primary-500 text-xs"></i>
            <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
              Media & Gallery
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight mb-5">
            Moments of <span className="text-gradient-gold italic">Excellence</span>
          </h1>
          <p className="text-foreground-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Glimpses from past Sankofa Royale Awards Galas — celebrating culture, community, and the power of Us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="relative group rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(img.src, img.caption)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openLightbox(img.src, img.caption);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.caption}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground-200 text-xs md:text-sm font-medium font-heading">
                  {img.caption}
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-background-950/60 backdrop-blur-sm flex items-center justify-center">
                  <i className="ri-zoom-in-line text-foreground-200 text-lg"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-background-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background-800/80 flex items-center justify-center text-foreground-300 hover:text-foreground-100 transition-colors"
            aria-label="Close lightbox"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
          <div className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage}
              alt={lightboxCaption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {lightboxCaption && (
              <p className="text-center text-foreground-400 text-sm mt-4 font-heading">
                {lightboxCaption}
              </p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}