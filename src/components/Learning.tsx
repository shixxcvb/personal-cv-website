import { Sparkles, BookOpen, Compass, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Learning() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curated Continuous Growth Plaque */}
        <div className="p-8 sm:p-12 md:p-14 rounded-2xl bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#FAF8FD] dark:from-[#180E26] dark:via-[#130B1E] dark:to-[#170E24] border border-[#E4D7F5] dark:border-[#382652] shadow-xs relative overflow-hidden">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>07 / Continuous Growth</span>
              <span aria-hidden="true">·</span>
              <span>Always Learning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E142B] dark:text-[#F8F5FD]">
              Expanding Horizons &amp; Practical Mastery
            </h2>
            <p className="mt-3 text-base text-[#594770] dark:text-[#C4B5DB]">
              Information technology evolves constantly. Here are the core craft dimensions I actively strengthen through daily coding, university challenges, and independent curiosity.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.continuousLearning.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/80 dark:bg-[#1E122F]/80 backdrop-blur-md border border-[#E4D7F5] dark:border-[#382652] hover:border-[#9D84D6] dark:hover:border-[#7C3AED] transition-colors"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B0F7] block mb-2 font-bold">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-[#1E142B] dark:text-[#F8F5FD] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D4E76] dark:text-[#BFB1D3] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
