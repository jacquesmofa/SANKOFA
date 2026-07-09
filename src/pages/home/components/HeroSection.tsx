import { Link } from "react-router-dom";
import CountdownTimer from "@/components/feature/CountdownTimer";

const GALA_DATE = new Date("2026-08-09T17:00:00");

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Luxurious%20red%20carpet%20rolling%20out%20toward%20golden%20spotlights%20and%20velvet%20ropes%2C%20dark%20cinematic%20atmosphere%20with%20gold%20dust%20particles%20floating%20in%20spotlight%20beams%2C%20elegant%20ballroom%20entrance%2C%20deep%20royal%20purple%20and%20black%20tones%2C%20VVIP%20gala%20event%20photography%2C%20dramatic%20lighting&width=1920&height=1080&seq=hero-redcarpet&orientation=landscape"
          alt="Red carpet gala entrance with golden spotlights"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-950/40 via-background-950/60 to-background-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-950/70 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full section-padding pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/40 bg-background-950/40 backdrop-blur-sm mb-6">
            <i className="ri-vip-crown-fill text-primary-500 text-xs"></i>
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary-400">
              The 2026 Sankofa Royale Gala
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground-50 leading-[1.1] mb-4">
            Sankofa<br />
            <span className="text-gradient-gold">Royale Awards</span>
          </h1>

          <p className="font-body text-base md:text-lg text-foreground-400 leading-relaxed max-w-xl mb-8">
            Celebrating and acknowledging Black excellence and the power of Us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/tickets" className="btn-primary-gold text-sm md:text-base inline-flex items-center justify-center gold-shimmer">
              Reserve Your VVIP Table
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
            <a
              href="https://forms.gle/EhXYvwqBY1i68tZDA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-sm md:text-base inline-flex items-center justify-center"
            >
              Nominate an Outstanding Leader
              <i className="ri-external-link-line ml-2"></i>
            </a>
          </div>

          <div className="glass-card-strong p-4 md:p-6 inline-block">
            <CountdownTimer targetDate={GALA_DATE} />
          </div>
        </div>

        <div className="hidden lg:block absolute right-8 bottom-24 glass-card p-5 max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <i className="ri-calendar-event-line text-primary-500"></i>
            <span className="font-label text-xs uppercase tracking-wider text-foreground-500">Event Details</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <i className="ri-calendar-line text-primary-500 mt-0.5"></i>
              <span className="text-foreground-300">August 09, 2026</span>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-time-line text-primary-500 mt-0.5"></i>
              <span className="text-foreground-300">5:00 PM &ndash; 12:00 AM</span>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-shirt-line text-primary-500 mt-0.5"></i>
              <span className="text-foreground-300">Formal Traditional / Black Tie</span>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-map-pin-line text-primary-500 mt-0.5"></i>
              <span className="text-foreground-300">23 Regan Road, Brampton ON, L7A 1B2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}