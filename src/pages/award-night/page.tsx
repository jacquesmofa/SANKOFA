import { Link } from "react-router-dom";

export default function AwardNight() {
  return (
    <main className="min-h-screen bg-background-950 pt-24 md:pt-28">
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-950/30 mb-6">
            <i className="ri-movie-line text-primary-500 text-xs"></i>
            <span className="font-label text-xs uppercase tracking-[0.15em] text-primary-400">
              The Gala Night
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-50 leading-tight mb-5">
            The Gala <span className="text-gradient-gold italic">Night</span>
          </h1>
          <p className="text-foreground-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Experience the elegance of the Ambience Royale Fundraising Gala. Step onto the red carpet at our glamorous event and immerse yourself in an evening of pure luxury.
          </p>
          <div className="glass-card p-8 md:p-12">
            <i className="ri-hourglass-line text-primary-500 text-4xl mb-4 block"></i>
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground-200 mb-3">
              Coming Soon
            </h2>
            <p className="text-foreground-600 text-sm mb-6">
              The full gala agenda, African cuisine menu, performance lineup, and paparazzi experience will be unveiled shortly.
            </p>
            <Link to="/" className="btn-outline-gold text-sm inline-flex items-center">
              Back to Home
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}