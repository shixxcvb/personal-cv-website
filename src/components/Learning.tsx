import { Sparkles, BookOpen, Compass, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Learning() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curated Always Learning Board */}
        <div className="p-8 sm:p-14 rounded-[3rem] bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#EDE9FE] dark:from-[#201534] dark:via-[#19102A] dark:to-[#120B1E] border border-[#E9DCF8] dark:border-[#38264F] shadow-sm relative overflow-hidden">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B2FF] mb-3">
              <Sparkles className="w-4 h-4 text-[#9333EA] dark:text-[#F1BCE1] animate-spin-slow" />
              <span>Continuous Growth</span>
              <span aria-hidden="true">✦</span>
              <span>Always Learning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#261D39] dark:text-[#FAF7FF]">
              Curiosity In Continuous Motion
            </h2>
            <p className="mt-2 text-base text-[#615178] dark:text-[#BCAECF]">
              Technology moves fast. Here are the core craft dimensions I am expanding through daily coding, experiments, and university software challenges.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.continuousLearning.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[2rem] bg-white/80 dark:bg-[#1E152E]/80 backdrop-blur-md border border-[#EDE1FA] dark:border-[#3A2855] hover:border-[#B8A2F9] dark:hover:border-[#7C3AED] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF5FF] dark:bg-[#281A3F] text-[#7C3AED] dark:text-[#C4B2FF] border border-[#E9DCF8] dark:border-[#3B255B] inline-block mb-3">
                  {item.badge}
                </span>
                <h3 className="text-lg font-black text-[#261D39] dark:text-[#FAF7FF] mb-2">
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
