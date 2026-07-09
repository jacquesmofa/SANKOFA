import { Link } from "react-router-dom";
import { awardCategories } from "@/mocks/awardCategories";

export default function NominationPreview() {
  const previewCategories = awardCategories.slice(0, 6);

  return (
    <section className="relative py-20 md:py-28 bg-background-950">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/20 via-transparent to-secondary-950/20 pointer-events-none"></div>
      <div className="section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
            <i className="ri-award-line text-primary-500 text-xs"></i>
            <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
              2026 Nomination Desk
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight mb-5">
            19 Categories. <span className="text-gradient-gold italic">One Night.</span>
          </h2>
          <p className="text-foreground-500 text-sm md:text-base leading-relaxed">
            Do you know someone who inspires, innovates, or excels? Celebrate their achievements
            by nominating them for the Sankofa Royale Award.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
          {previewCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-card p-5 md:p-6 group hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-950/50 border border-primary-500/20 flex items-center justify-center mb-4 group-hover:bg-primary-500/10 transition-colors">
                <i className={`${cat.icon} text-primary-500 text-lg`}></i>
              </div>
              <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-200 mb-2">
                {cat.name}
              </h3>
              <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/nomination"
            className="btn-outline-gold text-sm md:text-base inline-flex items-center"
          >
            View All 19 Categories
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}