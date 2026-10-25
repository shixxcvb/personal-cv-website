import { Sparkles, Target, Compass, Heart, School, MapPin, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B2FF] mb-3">
            <span>01</span>
            <span aria-hidden="true">✦</span>
            <span>The Mind Behind The Screen</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#261D39] dark:text-[#FAF7FF] leading-tight">
            Curious Mind,{" "}
            <span className="italic font-serif font-normal text-[#7C3AED] dark:text-[#C4B2FF]">
              Creative Heart
            </span>
          </h2>
        </div>

        {/* Artistic Asymmetrical Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Manifesto (7 cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Giant Background Quotation Glyph */}
            <div className="absolute -top-12 -left-6 text-8xl sm:text-9xl font-serif text-[#D9C8FF]/40 dark:text-[#4A2D73]/30 pointer-events-none select-none">
              “
            </div>

            <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-white/80 dark:bg-[#1E152E]/80 backdrop-blur-md border border-[#EADDF7] dark:border-[#38264F] shadow-sm">
              
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9333EA] dark:text-[#F1BCE1] mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Personal Introduction</span>
              </div>

              {/* Exact Verified Biography */}
              <p className="text-xl sm:text-2xl font-medium text-[#2F2148] dark:text-[#FAF7FF] leading-relaxed mb-8">
                "{PORTFOLIO_DATA.personal.aboutIntro}"
              </p>

              {/* Key Identity Markers as Playful Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#F0E4FB] dark:border-[#2F1F46]">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5FF] dark:bg-[#281A3F] border border-[#E9DCF8] dark:border-[#3B255B] text-xs font-semibold text-[#5B3E8C] dark:text-[#D4C3EC]">
                  <School className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B2FF]" />
                  <span>Davao del Norte State College</span>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5FF] dark:bg-[#281A3F] border border-[#E9DCF8] dark:border-[#3B255B] text-xs font-semibold text-[#5B3E8C] dark:text-[#D4C3EC]">
                  <MapPin className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B2FF]" />
                  <span>Panabo City, Philippines</span>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F8] dark:bg-[#38162E] border border-[#FBCFE8] dark:border-[#572248] text-xs font-semibold text-[#9D174D] dark:text-[#F472B6]">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>BSIT 4B Senior</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Career Objective & Creative Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Career Objective in an Organic Liquid Shape */}
            <div className="relative p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#7C3AED] via-[#9333EA] to-[#C026D3] text-white shadow-xl overflow-hidden">
              {/* Decorative star watermark */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 select-none pointer-events-none">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#F8C8E8]">
                  <Target className="w-4 h-4" />
                  <span>Career Objective</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  North Star
                </span>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#FDF4FF] font-medium italic mb-6">
                "{PORTFOLIO_DATA.personal.careerObjective}"
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs text-[#E9D5FF]">
                <span>Practical IT Industry Experience</span>
                <span className="font-bold">✦ Vision</span>
              </div>
            </div>

            {/* Sticker Cluster: What Sparks My Passion */}
            <div className="p-7 rounded-[2rem] bg-white/70 dark:bg-[#1E152E]/70 backdrop-blur-md border border-[#EADDF7] dark:border-[#38264F] flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B2FF]">
                What Sparks My Curiosity
              </span>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-xl bg-[#FAF5FF] dark:bg-[#281A3F] border border-[#E9DCF8] dark:border-[#3B255B] text-xs font-bold text-[#5B3E8C] dark:text-[#D4C3EC] rotate-1">
                  ✦ Responsive Web Craft
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#FDF2F8] dark:bg-[#341629] border border-[#FBCFE8] dark:border-[#4E203E] text-xs font-bold text-[#9D174D] dark:text-[#F472B6] -rotate-1">
                  ✦ Creative UI/UX Design
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#ECFDF5] dark:bg-[#122A21] border border-[#A7F3D0] dark:border-[#1E4B3A] text-xs font-bold text-[#065F46] dark:text-[#6EE7B7] rotate-2">
                  ✦ Hands-on Projects
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#EFF6FF] dark:bg-[#15233D] border border-[#BFDBFE] dark:border-[#223B69] text-xs font-bold text-[#1E40AF] dark:text-[#93C5FD] -rotate-2">
                  ✦ Emerging Web Tech
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
