import { Link } from "react-router-dom";

const ticketTiers = [
  {
    name: "Single Ticket",
    price: "$120",
    features: ["Exquisite African Dining Course", "Access to Red Carpet", "Live Performances"],
    image: "https://readdy.ai/api/search-image?query=Elegant%20single%20guest%20seat%20at%20luxury%20gala%20dinner%2C%20gold%20and%20purple%20table%20setting%2C%20fine%20dining%20plate%20with%20African%20cuisine%2C%20warm%20candlelight%2C%20dark%20cinematic%20background%2C%20exclusive%20event%20photography&width=600&height=400&seq=ticket-single&orientation=landscape",
    highlight: false,
  },
  {
    name: "VIP Table",
    price: "$1,000",
    features: ["Table for 10 Guests", "Premium Dining", "Dedicated Table Service"],
    image: "https://readdy.ai/api/search-image?query=Luxury%20VIP%20round%20table%20for%2010%20guests%20at%20gala%20event%2C%20elegant%20centerpiece%2C%20gold%20chargers%2C%20crystal%20glassware%2C%20purple%20and%20gold%20decor%2C%20warm%20ambient%20lighting%2C%20exclusive%20ballroom%20setting%2C%20cinematic&width=600&height=400&seq=ticket-vip&orientation=landscape",
    highlight: false,
  },
  {
    name: "VVIP Table",
    price: "$2,000",
    features: ["Table for 10 Guests", "5-Star Curated Dining", "Unlimited Fine Wine Pairings"],
    image: "https://readdy.ai/api/search-image?query=Ultra%20luxury%20VVIP%20dining%20table%20at%20exclusive%20gala%2C%20wine%20pairing%20glasses%2C%20gourmet%20plating%2C%20gold%20accents%20everywhere%2C%20velvet%20chairs%2C%20dramatic%20spotlighting%2C%20dark%20elegant%20atmosphere%2C%20premium%20event%20photography&width=600&height=400&seq=ticket-vvip&orientation=landscape",
    highlight: true,
  },
  {
    name: "Platinum VVIP",
    price: "$3,000",
    features: ["Front-Row Table for 10", "Elite Luxurious Dining", "Exotic Liquor Pairings"],
    image: "https://readdy.ai/api/search-image?query=Platinum%20VIP%20front%20row%20table%20at%20awards%20gala%2C%20closest%20to%20stage%2C%20champagne%20buckets%2C%20premium%20spirits%2C%20gold%20and%20purple%20luxury%20decor%2C%20white%20glove%20service%2C%20most%20exclusive%20seating%2C%20cinematic%20dark%20lighting%2C%20VVIP%20experience&width=600&height=400&seq=ticket-platinum&orientation=landscape",
    highlight: false,
  },
];

export default function TicketPreview() {
  return (
    <section className="relative py-20 md:py-28 bg-background-950">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
              <i className="ri-ticket-line text-primary-500 text-xs"></i>
              <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
                Ticket & Table Desk
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight">
              Choose Your <span className="text-gradient-gold italic">Experience</span>
            </h2>
          </div>
          <p className="text-foreground-500 text-sm md:text-base max-w-md leading-relaxed">
            Four distinct tiers crafted for an unforgettable evening of excellence and celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {ticketTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                tier.highlight
                  ? "ring-1 ring-primary-500/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                  : ""
              }`}
            >
              <div className="relative h-48 md:h-52 overflow-hidden">
                <img
                  src={tier.image}
                  alt={`${tier.name} dining experience`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-background-950/40 to-transparent"></div>
                <div className="absolute top-3 right-3 glass-card px-3 py-1">
                  <span className="font-heading text-lg font-bold text-primary-400">{tier.price}</span>
                </div>
              </div>
              <div className="p-5 bg-background-900/80 border border-background-800/50 border-t-0 rounded-b-xl">
                <h3 className="font-heading text-lg font-semibold text-foreground-200 mb-2">
                  {tier.name}
                </h3>
                <ul className="space-y-1.5 mb-5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-foreground-600 text-xs md:text-sm">
                      <i className="ri-check-line text-primary-500 mt-0.5 text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/tickets"
                  className={`inline-flex items-center text-sm font-medium transition-colors ${
                    tier.highlight
                      ? "text-primary-400 hover:text-primary-300"
                      : "text-foreground-500 hover:text-primary-400"
                  }`}
                >
                  Reserve Now
                  <i className="ri-arrow-right-line ml-1.5 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}