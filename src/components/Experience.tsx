import { Code2, GitBranch, Layers, Laptop, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B2FF] mb-3">
            <span>05</span>
            <span aria-hidden="true">✦</span>
            <span>Laboratory &amp; Collaborative Practice</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#261D39] dark:text-[#FAF7FF] leading-tight">
            Academic{" "}
            <span className="italic font-serif font-normal text-[#7C3AED] dark:text-[#C4B2FF]">
              Experience
            </span>
          </h2>
          <p className="mt-3 text-base text-[#615178] dark:text-[#BCAECF]">
            Authentic academic project development, collaborative laboratories, and hands-on software design practice at Davao del Norte State College.
          </p>
        </div>

        {/* Academic Experience Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.academicExperience.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-[2.5rem] bg-white/80 dark:bg-[#1E152E]/80 backdrop-blur-md border border-[#E9DDF7] dark:border-[#38264F] shadow-xs hover:border-[#B8A2F9] dark:hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-[#9333EA] dark:text-[#F1BCE1]">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#B8A2F9] dark:text-[#7C3AED]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#261D39] dark:text-[#FAF7FF] mb-3 group-hover:text-[#7C3AED] dark:group-hover:text-[#C4B2FF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#56456E] dark:text-[#BFB1D3] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-4 border-t border-[#F0E4FB] dark:border-[#2F1F46]">
                  {item.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-[#66547F] dark:text-[#C2B4D6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] dark:bg-[#C4B2FF]" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-8 pt-4 border-t border-[#F0E4FB] dark:border-[#2F1F46] flex items-center justify-between text-xs text-[#7F6F96] dark:text-[#A494BE]">
                <span>Davao del Norte State College</span>
                <span className="font-bold text-[#7C3AED] dark:text-[#C4B2FF]">Collaborative</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
