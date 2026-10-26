import { ArrowDown, ArrowUpRight, FileText, MapPin, Sparkles } from "lucide-react";
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
            
            {/* Live Status Pill with pulsing beacon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#1E132D]/80 border border-[#E4D7F5] dark:border-[#3A2754] shadow-2xs backdrop-blur-xs mb-5 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-[#57436E] dark:text-[#D1C3E6]">
                Available for OJT &amp; Web Projects
              </span>
              <span aria-hidden="true" className="text-[#9D84D6] text-xs">✦</span>
              <span className="text-xs text-[#806D96] dark:text-[#A998C0]">Panabo City</span>
            </div>

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
              <span aria-hidden="true" className="text-[#9D84D6] animate-pulse-soft">✦</span>
              <span className="flex items-center gap-1.5 font-normal text-[#6B5784] dark:text-[#B3A1C9] text-base sm:text-lg">
                <MapPin className="w-4 h-4 text-[#7C3AED] dark:text-[#C4B0F7] shrink-0" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </span>
            </div>

            {/* Manifesto Prose */}
            <p className="max-w-xl text-base sm:text-lg text-[#4E3B68] dark:text-[#CBC0DC] leading-relaxed mb-10">
              "{PORTFOLIO_DATA.personal.heroManifesto}"
            </p>

            {/* Action Buttons with lively micro-animations */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("projects")}
                type="button"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] rounded-xl shadow-sm hover:shadow-md hover:shadow-[#7C3AED]/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9D84D6]"
              >
                <span>Explore Works (04)</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              <button
                onClick={onOpenResume}
                type="button"
                className="group inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#301E49] dark:text-[#FAF7FF] bg-white dark:bg-[#1E132D] hover:bg-[#F5EFFC] dark:hover:bg-[#281A3C] rounded-xl border border-[#E4D7F5] dark:border-[#3A2754] shadow-2xs hover:shadow-md hover:border-[#9D84D6] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#7C3AED] dark:text-[#C4B0F7] transition-transform duration-300 group-hover:scale-110" />
                <span>View CV</span>
              </button>

              <button
                onClick={() => scrollTo("contact")}
                type="button"
                className="group inline-flex items-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-medium text-[#65527E] dark:text-[#C3B3D9] hover:text-[#7C3AED] dark:hover:text-white transition-all duration-300"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#7C3AED] dark:text-[#C4B0F7]" />
              </button>
            </div>

          </div>

          {/* Right Column: Natural Cutout Portrait with NO BOX, NO CARD, NO BORDERS (5 cols on sm+) */}
          <div className="sm:col-span-5 flex items-center justify-center sm:justify-end">
            
            {/* Pure cutout presentation directly on the page with floating animation */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[450px] flex justify-center sm:justify-end animate-float-gentle">
              
              {/* Soft Dreamy Ambient Backlight Aura directly behind her silhouette */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#9D84D6]/35 via-[#F6DCEB]/30 to-[#A5B4FC]/35 blur-3xl opacity-80 dark:opacity-65 pointer-events-none animate-ambient-glow" />

              {/* Decorative subtle floating star */}
              <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-[#1E132D]/90 shadow-md border border-[#E4D7F5] dark:border-[#3A2754] animate-spin-slow">
                <Sparkles className="w-5 h-5 text-[#7C3AED] dark:text-[#C4B0F7]" />
              </div>

              {/* The Genuine Photo Cutout: No box, no border, no rectangular frame */}
              <img
                src="/assets/charlene-transparent.png"
                alt="Charlene Calamba"
                className="relative z-10 w-full h-auto max-h-[580px] object-contain drop-shadow-[0_18px_35px_rgba(77,36,123,0.22)] dark:drop-shadow-[0_24px_45px_rgba(196,176,247,0.18)] transition-all duration-500 hover:scale-[1.03] cursor-pointer"
                loading="eager"
              />

              {/* Floating Mini Tech Pill in front of silhouette */}
              <div className="absolute -bottom-2 sm:bottom-4 left-0 sm:-left-6 z-20 px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-[#1E132D]/95 border border-[#E4D7F5] dark:border-[#3A2754] shadow-lg backdrop-blur-md flex items-center gap-2 animate-float-slow">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                <span className="text-xs font-bold text-[#2D1B48] dark:text-[#FAF7FF]">
                  BSIT 4B · Web Craft
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
