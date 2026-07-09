import { Link } from "react-router-dom";

export default function NominationCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-background-950">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden mb-10">
            <img
              src="https://readdy.ai/api/search-image?query=Elegant%20awards%20gala%20stage%20with%20golden%20trophy%20and%20red%20carpet%2C%20dramatic%20spotlights%20from%20above%2C%20dark%20luxurious%20ballroom%20atmosphere%2C%20crowd%20silhouettes%20applauding%2C%20gold%20and%20purple%20lighting%2C%20cinematic%20wide%20angle%2C%20celebration%20of%20excellence&width=1200&height=500&seq=nomination-cta&orientation=landscape"
              alt="Awards gala stage ready for nominees"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-background-950/50 to-transparent"></div>
          </div>

          <div className="text-center">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-50 leading-tight mb-4">
              Know Someone Worthy of{" "}
              <span className="text-gradient-gold italic">Recognition?</span>
            </h2>
            <p className="text-foreground-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              This is your chance to recognize outstanding contributions and shine a spotlight
              on those who make a difference in our community. Nominations are open now.
            </p>
            <a
              href="https://forms.gle/EhXYvwqBY1i68tZDA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gold text-sm md:text-base inline-flex items-center gold-shimmer"
            >
              Submit a Nomination
              <i className="ri-external-link-line ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}