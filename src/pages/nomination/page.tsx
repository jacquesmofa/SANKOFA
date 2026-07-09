import { Link } from "react-router-dom";
import { awardCategories } from "@/mocks/awardCategories";

export default function Nomination() {
  return (
    <main className="min-h-screen bg-background-950 pt-24 md:pt-28">
      <section className="section-padding py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
            <i className="ri-award-line text-primary-500 text-xs"></i>
            <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
              Nomination Desk
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight mb-5">
            2026 Award <span className="text-gradient-gold italic">Categories</span>
          </h1>
          <p className="text-foreground-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Do you know someone who inspires, innovates, or excels? Celebrate their achievements by nominating them for the Sankofa Royale Award.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto mb-14">
          {awardCategories.map((cat) => (
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

        <div className="text-center max-w-2xl mx-auto glass-card p-8 md:p-10">
          <i className="ri-user-star-line text-primary-500 text-3xl mb-4 block"></i>
          <h3 className="font-heading text-xl font-semibold text-foreground-200 mb-3">
            Ready to Nominate?
          </h3>
          <p className="text-foreground-500 text-sm leading-relaxed mb-6">
            You will need to provide your Name, Phone Number, and Email, followed by selecting your nominee&apos;s designated category and a statement of their contribution.
          </p>
          <a
            href="https://forms.gle/EhXYvwqBY1i68tZDA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gold text-sm inline-flex items-center gold-shimmer"
          >
            Open Nomination Form
            <i className="ri-external-link-line ml-2"></i>
          </a>
        </div>
      </section>
    </main>
  );
}