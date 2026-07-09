import { Link } from "react-router-dom";
import { cawapAreas } from "@/mocks/cawapAreas";

const coreValues = [
  {
    title: "Empowerment",
    description: "We believe in empowering individuals to take control of their lives and achieve their goals.",
    icon: "ri-shining-line",
  },
  {
    title: "Community",
    description: "We foster strong, supportive communities where everyone can thrive together.",
    icon: "ri-group-2-line",
  },
  {
    title: "Equality",
    description: "We promote gender equality and equal opportunities for all members of our community.",
    icon: "ri-scales-3-line",
  },
];

const impactStats = [
  { value: "15+", label: "Active Programs", icon: "ri-stack-line" },
  { value: "2,500+", label: "Lives Impacted Monthly", icon: "ri-hearts-line" },
  { value: "12,500+", label: "Meals Distributed Monthly", icon: "ri-restaurant-line" },
  { value: "15+", label: "Years of Service", icon: "ri-history-line" },
];

export default function Cawap() {
  return (
    <main className="min-h-screen bg-background-950 pt-24 md:pt-28">
      {/* Hero Banner */}
      <section className="section-padding py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
            <i className="ri-heart-pulse-line text-primary-500 text-xs"></i>
            <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
              About CAWAP
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight mb-5">
            Canadian and African<br />
            <span className="text-gradient-gold italic">Women Aid Program</span>
          </h1>
          <p className="text-foreground-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Empowering Afro-Caribbean and Canadian women by fostering skill development, promoting economic growth, advocating for gender equality, and enhancing community accessibility through a range of programs and services.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-5 md:p-6 text-center group hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-secondary-950/50 border border-secondary-500/20 flex items-center justify-center mb-3">
                  <i className={`${stat.icon} text-secondary-400 text-lg`}></i>
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-foreground-600 text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="glass-card p-6 md:p-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-950/40 border border-primary-500/20 flex items-center justify-center">
                  <i className="ri-focus-3-line text-primary-400 text-base"></i>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground-200">
                  Our Mission
                </h3>
              </div>
              <p className="text-foreground-500 text-sm leading-relaxed">
                To empower Afro-Caribbean and Canadian women through comprehensive programs that promote economic development, cultural diversity, gender equality, and community accessibility, enabling them to overcome poverty and achieve their full potential.
              </p>
            </div>
            <div className="glass-card p-6 md:p-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-950/40 border border-primary-500/20 flex items-center justify-center">
                  <i className="ri-eye-line text-primary-400 text-base"></i>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground-200">
                  Our Vision
                </h3>
              </div>
              <p className="text-foreground-500 text-sm leading-relaxed">
                A world where every woman has equal opportunities to thrive, where cultural diversity is celebrated, and where communities are strengthened through the empowerment of women and youth. An inclusive society where no one is left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground-200 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="glass-card p-5 md:p-6 text-center group hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary-950/50 border border-secondary-500/20 flex items-center justify-center mb-4 group-hover:bg-secondary-500/10 transition-colors">
                  <i className={`${val.icon} text-secondary-400 text-xl`}></i>
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground-200 mb-2">
                  {val.title}
                </h3>
                <p className="text-foreground-600 text-xs md:text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-secondary-950/80 to-primary-950/50 border-2 border-primary-500/30 flex items-center justify-center overflow-hidden">
                  <i className="ri-user-star-line text-primary-400 text-3xl md:text-4xl"></i>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-primary-500/20 bg-primary-950/30 mb-3">
                  <span className="font-label text-[10px] uppercase tracking-[0.15em] text-primary-400">
                    Meet Our Founder
                  </span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-200 mb-1">
                  Rev. Irine Ashu, PhD
                </h3>
                <p className="text-primary-400 text-xs md:text-sm font-medium mb-4">
                  Founder & CEO, CAWAP
                </p>
                <p className="text-foreground-500 text-xs md:text-sm leading-relaxed mb-3">
                  Rev. Irine Ashu, PhD, is the founder and CEO of the Canadian and African Women Aid Program. She is the pastor of Jesus Revival for All Nations. Her journey into philanthropism started in her native country, Cameroun, where she formed the Community Aid Center — informed by her personal experiences and challenges growing up.
                </p>
                <p className="text-foreground-500 text-xs md:text-sm leading-relaxed">
                  Also an entrepreneur, she founded Heavenly Breeze Cosmetics and Gospel Lane Media Inc. She leverages her worldwide travels and experiences as a life coach, mentor, advocate, and community service worker. Her dynamism has been described as infectious, and her uncanny leadership abilities are evident in the many organisations she leads simultaneously. Rev. Ashu is also a doting mother of four boys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground-200 mb-2 text-center">
            Our Programs & Empowerment Areas
          </h2>
          <p className="text-foreground-600 text-xs md:text-sm text-center mb-8 max-w-xl mx-auto">
            CAWAP focuses on human development and capacity building for youth, women, and seniors across our communities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {cawapAreas.map((area) => (
              <div
                key={area.id}
                className="glass-card p-5 md:p-6 group hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1"
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
        </div>
      </section>

      {/* CTA to Official Website */}
      <section className="section-padding py-14 md:py-18">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-8 md:p-10 border-primary-500/20">
            <div className="w-14 h-14 mx-auto rounded-full bg-primary-950/40 border border-primary-500/30 flex items-center justify-center mb-5">
              <i className="ri-global-line text-primary-400 text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-100 mb-3">
              Discover More at CAWAP
            </h3>
            <p className="text-foreground-500 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              Visit the official CAWAP website to explore all programs, upcoming events, the food bank, and ways to get involved in empowering our community.
            </p>
            <a
              href="https://www.cawap.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gold text-sm md:text-base inline-flex items-center gold-shimmer"
            >
              Visit CAWAP Official Website
              <i className="ri-arrow-right-up-line ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}