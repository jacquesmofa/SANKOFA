import { Link } from "react-router-dom";

export default function SankofaPreview() {
  return (
    <section className="relative py-20 md:py-28 bg-background-950">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
              <i className="ri-book-open-line text-primary-500 text-xs"></i>
              <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
                Historical Essence
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight mb-6">
              The Meaning of{" "}
              <span className="text-gradient-gold italic">Sankofa</span>
            </h2>

            <p className="text-foreground-500 text-sm md:text-base leading-relaxed mb-4">
              Sankofa, an African word originating from the Akan tribe in Ghana, holds profound meaning.
              Its literal translation, <span className="text-primary-400 italic">&ldquo;it is not taboo to fetch what is at risk of being left behind,&rdquo;</span>{" "}
              conveys the idea that we are encouraged to reflect on the past and bring its wisdom with us.
            </p>

            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-8">
              By embracing this, we delve into our history to gain a profound appreciation for our culture
              and traditions, paving the way for a brighter future.
            </p>

            <Link
              to="/sankofa"
              className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors group"
            >
              Explore the Full Story
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative glass-card p-4 md:p-6 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Majestic%20crowned%20Sankofa%20bird%20symbol%20in%20traditional%20Akan%20Ghanaian%20art%20style%2C%20rich%20golden%20bronze%20and%20deep%20purple%20tones%2C%20bird%20turning%20its%20head%20backward%20with%20egg%20in%20beak%2C%20intricate%20tribal%20geometric%20patterns%20in%20background%2C%20dark%20onyx%20canvas%2C%20luxurious%20metallic%20texture%2C%20cultural%20heritage%20art%2C%20highly%20detailed&width=600&height=700&seq=sankofa-bird&orientation=portrait"
                  alt="The Sankofa bird symbol turning its head backward, representing learning from the past"
                  className="w-full max-w-[360px] md:max-w-[420px] rounded-lg object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card-strong p-3 md:p-4">
                  <p className="text-foreground-300 text-xs md:text-sm italic text-center font-heading">
                    &ldquo;It is not taboo to fetch what is at risk of being left behind.&rdquo;
                  </p>
                  <p className="text-primary-500 text-[10px] uppercase tracking-wider text-center mt-1 font-label">
                    &mdash; Akan Proverb, Ghana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}