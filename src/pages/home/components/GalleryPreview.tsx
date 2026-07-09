import { galleryImages } from "@/mocks/gallery";
import { Link } from "react-router-dom";

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 4);

  return (
    <section className="relative py-20 md:py-28 bg-background-950">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
            <i className="ri-gallery-line text-primary-500 text-xs"></i>
            <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
              Media & Gallery
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight mb-5">
            Moments of <span className="text-gradient-gold italic">Excellence</span>
          </h2>
          <p className="text-foreground-500 text-sm md:text-base leading-relaxed">
            Glimpses from past Sankofa Royale Awards Galas — a celebration of culture, community, and achievement.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          {previewImages.map((img) => (
            <div
              key={img.id}
              className="relative group rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
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
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className="btn-outline-gold text-sm md:text-base inline-flex items-center"
          >
            View Full Gallery
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}