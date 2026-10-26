import { ArrowDown, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Two-Column Asymmetrical Hero: Side-by-side layout with photo on the right */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Immediately leads with Charlene Calamba (7 cols on sm+) */}
          <div className="sm:col-span-7 flex flex-col items-start text-left">
            
            {/* The absolute first thing seen at the very top: CHARLENE CALAMBA */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.92] text-[#1E142B] dark:text-[#F8F5FD] mb-6">
              Charlene{" "}
              <span className="font-editorial-italic font-normal block text-[#7C3AED] dark:text-[#C4B0F7] tracking-normal mt-2">
                Calamba.
              </span>
            </h1>

            {/* Professional Title & Location */}
            <div className="flex flex-wrap items-center gap-3 text-lg sm:text-xl md:text-2xl font-bold text-[#4D366D] dark:text-[#D9CBED] mb-6">
              <span>{PORTFOLIO_DATA.personal.title}</span>
              <span aria-hidden="true" className="text-[#9D84D6]">✦</span>
              <span className="flex items-center gap-1.5 font-normal text-[#6B5784] dark:text-[#B3A1C9] text-base sm:text-lg">
                <MapPin className="w-4 h-4 text-[#7C3AED] dark:text-[#C4B0F7] shrink-0" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </span>
            </div>

            {/* Manifesto Prose */}
            <p className="max-w-xl text-base sm:text-lg text-[#4E3B68] dark:text-[#CBC0DC] leading-relaxed mb-10">
              "{PORTFOLIO_DATA.personal.heroManifesto}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("projects")}
                type="button"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] rounded-xl shadow-sm transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9D84D6]"
              >
                <span>Explore Works (04)</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#301E49] dark:text-[#FAF7FF] bg-white dark:bg-[#1E132D] hover:bg-[#F5EFFC] dark:hover:bg-[#281A3C] rounded-xl border border-[#E4D7F5] dark:border-[#3A2754] shadow-2xs transition-all duration-200 active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#7C3AED] dark:text-[#C4B0F7]" />
                <span>View CV</span>
              </button>

              <button
                onClick={() => scrollTo("contact")}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-medium text-[#65527E] dark:text-[#C3B3D9] hover:text-[#7C3AED] dark:hover:text-white transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Large, Beautiful Portrait with NO BOX OR CARD (5 cols on sm+) */}
          <div className="sm:col-span-5 flex items-center justify-center sm:justify-end">
            
            {/* Direct photo presentation with soft ambient glow, no box / no card container */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px] lg:max-w-[440px] group">
              
              {/* Soft Dreamy Ambient Backlight */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#9D84D6]/25 via-[#F6DCEB]/20 to-[#A5B4FC]/25 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* The Large Photo Itself: Clean, Elegant, No Clumsy Box */}
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[#4D247B]/20 dark:shadow-black/60 transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={PORTFOLIO_DATA.personal.avatarUrl}
                  alt="Charlene Calamba"
                  className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.01]"
                  loading="eager"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
