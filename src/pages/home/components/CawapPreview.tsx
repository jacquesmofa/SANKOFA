import { Link } from "react-router-dom";
import { cawapAreas } from "@/mocks/cawapAreas";

const previewAreas = cawapAreas.slice(0, 6);

export default function CawapPreview() {
  return (
    <section className="relative py-20 md:py-28 bg-background-950">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/10 via-transparent to-secondary-950/10 pointer-events-none"></div>
      <div className="section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
              <i className="ri-heart-pulse-line text-primary-500 text-xs"></i>
              <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
                CAWAP Center
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight">
              The Empowerment<br />
              <span className="text-gradient-gold italic">Core</span>
            </h2>
          </div>
          <div className="lg:pt-14">
            <p className="text-foreground-500 text-sm md:text-base leading-relaxed mb-4">
              The Canadian and African Women Aid Program (CAWAP) is dedicated to empowering
              racialized Canadian and African women and their families. We enhance potential
              and well-being through educational, informative, and empowering programs,
              combating systemic racism and hunger.
            </p>
            <p className="text-foreground-700 text-xs leading-relaxed">
              A registered Canadian non-profit with 15+ active programs and 2,500+ lives impacted monthly.{" "}
              <a
                href="https://www.cawap.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              >
                Learn more at cawap.ca
                <i className="ri-arrow-right-up-line text-[10px]"></i>
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
          {previewAreas.map((area) => (
            <div
              key={area.id}
              className="glass-card p-5 md:p-6 group hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary-950/50 border border-secondary-500/20 flex items-center justify-center mb-4 group-hover:bg-secondary-500/10 transition-colors">
                <i className={`${area.icon} text-secondary-400 text-lg`}></i>
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground-200 mb-2">
                {area.title}
              </h3>
              <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/cawap"
            className="btn-outline-gold text-sm md:text-base inline-flex items-center"
          >
            Explore All 12 Empowerment Areas
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}