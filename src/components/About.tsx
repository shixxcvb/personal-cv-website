import { Target, Compass, Sparkles, School, MapPin, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Kicker */}
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider uppercase text-[#7C3AED] dark:text-[#C4B0F7] mb-4">
          <span>02 / About &amp; Philosophy</span>
          <span aria-hidden="true" className="text-[#9D84D6]">·</span>
          <span className="text-[#6C5882] dark:text-[#A796BD]">Personal Background</span>
        </div>

        {/* Editorial Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1E142B] dark:text-[#F8F5FD] leading-tight">
            Curiosity as Code,{" "}
            <span className="font-editorial-italic font-normal text-[#7C3AED] dark:text-[#C4B0F7] block sm:inline">
              Creativity as Practice.
            </span>
          </h2>
        </div>

        {/* Editorial Two-Column Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Personal Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white/80 dark:bg-[#1A1028]/80 backdrop-blur-md border border-[#E4D7F5] dark:border-[#382652] shadow-sm">
              <p className="text-lg sm:text-xl text-[#2F1D49] dark:text-[#F4ECFC] leading-relaxed font-medium">
                "{PORTFOLIO_DATA.personal.aboutIntro}"
              </p>

              <div className="mt-8 pt-6 border-t border-[#EDE1FA] dark:border-[#2D1C43] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5D4975] dark:text-[#C3B3D9]">
                <div className="flex items-center gap-2.5">
                  <School className="w-4 h-4 text-[#7C3AED] dark:text-[#C4B0F7] shrink-0" />
                  <span>Davao del Norte State College</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#7C3AED] dark:text-[#C4B0F7] shrink-0" />
                  <span>Panabo City, Philippines</span>
                </div>
              </div>
            </div>

            {/* Quiet Unboxed Creative Interests */}
            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B0F7] mb-3">
                Focus Areas of Exploration
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-[#301E49] dark:text-[#FAF7FF]">
                <span>Web Development</span>
                <span aria-hidden="true" className="text-[#9D84D6]">/</span>
                <span>UI/UX Interface Prototyping</span>
                <span aria-hidden="true" className="text-[#9D84D6]">/</span>
                <span>Creative Frontend Architecture</span>
                <span aria-hidden="true" className="text-[#9D84D6]">/</span>
                <span>Application Development</span>
              </div>
            </div>

          </div>

          {/* Right Column: Career Objective & Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Career Objective Plaque */}
            <div className="p-8 sm:p-9 rounded-2xl bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#9333EA] text-white shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F6DCEB]">
                  <Target className="w-4 h-4" />
                  <span>Career Objective</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest bg-white/20 px-2.5 py-0.5 rounded-md">
                  Aspiration
                </span>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#FAF5FF] font-medium italic mb-6">
                "{PORTFOLIO_DATA.personal.careerObjective}"
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs text-[#EADCF8] font-mono">
                <span>IT Industry Preparation</span>
                <span>✦ 2026 Focus</span>
              </div>
            </div>

            {/* Development Principles Card */}
            <div className="p-7 rounded-2xl bg-white/70 dark:bg-[#1A1028]/70 backdrop-blur-md border border-[#E4D7F5] dark:border-[#382652] space-y-2">
              <p className="font-bold text-sm text-[#26153D] dark:text-white font-mono uppercase">
                Development Principles
              </p>
              <p className="text-xs text-[#523F6B] dark:text-[#C0AFDB] leading-relaxed">
                Focused on building client-centric web applications with semantic markup, modern CSS architecture, accessible interfaces, and maintainable Git version control.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
