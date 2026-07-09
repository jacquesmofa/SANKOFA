import { Link } from "react-router-dom";

const ticketTiers = [
  {
    name: "Single Ticket",
    price: "$120",
    originalPrice: null,
    guests: "1 Guest",
    features: [
      "Exquisite African Dining Course",
      "Access to Red Carpet",
      "Live Performances & Entertainment",
      "Commemorative Program",
    ],
    image: "https://readdy.ai/api/search-image?query=Elegant%20single%20guest%20seat%20at%20luxury%20gala%20dinner%2C%20gold%20and%20purple%20table%20setting%2C%20fine%20dining%20plate%20with%20African%20cuisine%2C%20warm%20candlelight%2C%20dark%20cinematic%20background%2C%20exclusive%20event%20photography&width=600&height=400&seq=ticket-single-full&orientation=landscape",
    highlight: false,
  },
  {
    name: "VIP Table",
    price: "$1,000",
    originalPrice: null,
    guests: "10 Guests",
    features: [
      "Full Table for 10 Guests",
      "Premium African Dining",
      "Dedicated Table Service",
      "Reserved Premium Seating",
      "Red Carpet Access",
    ],
    image: "https://readdy.ai/api/search-image?query=Luxury%20VIP%20round%20table%20for%2010%20guests%20at%20gala%20event%2C%20elegant%20centerpiece%2C%20gold%20chargers%2C%20crystal%20glassware%2C%20purple%20and%20gold%20decor%2C%20warm%20ambient%20lighting%2C%20exclusive%20ballroom%20setting%2C%20cinematic&width=600&height=400&seq=ticket-vip-full&orientation=landscape",
    highlight: false,
  },
  {
    name: "VVIP Table",
    price: "$2,000",
    originalPrice: null,
    guests: "10 Guests",
    features: [
      "Full Table for 10 Guests",
      "5-Star Curated Dining Experience",
      "Unlimited Fine Wine Pairings",
      "Priority Red Carpet Access",
      "VIP Welcome Reception",
      "Exclusive Table Placement",
    ],
    image: "https://readdy.ai/api/search-image?query=Ultra%20luxury%20VVIP%20dining%20table%20at%20exclusive%20gala%2C%20wine%20pairing%20glasses%2C%20gourmet%20plating%2C%20gold%20accents%20everywhere%2C%20velvet%20chairs%2C%20dramatic%20spotlighting%2C%20dark%20elegant%20atmosphere%2C%20premium%20event%20photography&width=600&height=400&seq=ticket-vvip-full&orientation=landscape",
    highlight: true,
  },
  {
    name: "Platinum VVIP",
    price: "$3,000",
    originalPrice: null,
    guests: "10 Guests",
    features: [
      "Prominent Front-Row Table for 10",
      "Elite Luxurious Dining Experience",
      "Exotic Liquor Pairings",
      "Premier Red Carpet Experience",
      "Private Welcome Reception",
      "Complimentary Program & Photos",
      "Best Stage Views",
    ],
    image: "https://readdy.ai/api/search-image?query=Platinum%20VIP%20front%20row%20table%20at%20awards%20gala%2C%20closest%20to%20stage%2C%20champagne%20buckets%2C%20premium%20spirits%2C%20gold%20and%20purple%20luxury%20decor%2C%20white%20glove%20service%2C%20most%20exclusive%20seating%2C%20cinematic%20dark%20lighting%2C%20VVIP%20experience&width=600&height=400&seq=ticket-platinum-full&orientation=landscape",
    highlight: false,
  },
];

export default function Tickets() {
  return (
    <main className="min-h-screen bg-background-950 pt-24 md:pt-28">
      <section className="section-padding py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
            <i className="ri-ticket-line text-primary-500 text-xs"></i>
            <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
              Ticket & Table Desk
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight mb-5">
            Secure Your <span className="text-gradient-gold italic">Seat</span>
          </h1>
          <p className="text-foreground-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Four distinct tiers crafted for an unforgettable evening of excellence. Choose the experience that best suits your delegation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto mb-14">
          {ticketTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                tier.highlight
                  ? "ring-1 ring-primary-500/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                  : ""
              }`}
            >
              <div className="relative h-52 md:h-60 overflow-hidden">
                <img
                  src={tier.image}
                  alt={`${tier.name} experience`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-background-950/50 to-transparent"></div>
                {tier.highlight && (
                  <div className="absolute top-3 left-3 glass-card px-3 py-1">
                    <span className="font-label text-[10px] uppercase tracking-wider text-primary-400">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 glass-card px-4 py-2">
                  <span className="font-heading text-xl font-bold text-primary-400">{tier.price}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="font-label text-xs text-foreground-400 bg-background-950/60 px-2 py-1 rounded">
                    {tier.guests}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6 bg-background-900/80 border border-background-800/50 border-t-0 rounded-b-xl">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-200 mb-4">
                  {tier.name}
                </h3>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-foreground-500 text-sm">
                      <i className="ri-check-line text-primary-500 mt-0.5 text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-label text-sm font-semibold transition-all duration-300 ${
                    tier.highlight
                      ? "bg-gradient-to-r from-primary-500 to-primary-600 text-background-950 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                      : "bg-background-800/80 text-foreground-200 border border-background-700/50 hover:border-primary-500/40 hover:text-primary-400"
                  }`}
                >
                  Purchase {tier.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto glass-card p-6 md:p-8 text-center">
          <i className="ri-shield-check-line text-primary-500 text-2xl mb-3 block"></i>
          <h3 className="font-heading text-lg font-semibold text-foreground-200 mb-2">
            Secure Checkout
          </h3>
          <p className="text-foreground-500 text-sm leading-relaxed mb-4">
            All ticket purchases are processed through our secure payment system. You will receive a confirmation email with your digital ticket within minutes.
          </p>
          <p className="text-foreground-600 text-xs">
            For bulk purchases or corporate sponsorships, please{" "}
            <Link to="/contact" className="text-primary-400 hover:text-primary-300 underline underline-offset-2">
              contact us directly
            </Link>.
          </p>
        </div>
      </section>
    </main>
  );
}