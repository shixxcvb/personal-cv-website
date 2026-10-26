import { Code2, GitBranch, Layers, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#FAF6FD]/60 dark:bg-[#130B1E]/60 border-t border-[#EDE0FA] dark:border-[#2C1C3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Kicker */}
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider uppercase text-[#7C3AED] dark:text-[#C4B0F7] mb-4">
          <span>06 / Applied Practice</span>
          <span aria-hidden="true" className="text-[#9D84D6]">·</span>
          <span className="text-[#6C5882] dark:text-[#A796BD]">Coursework &amp; Laboratories</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1E142B] dark:text-[#F8F5FD] leading-tight">
            Academic{" "}
            <span className="font-editorial-italic font-normal text-[#7C3AED] dark:text-[#C4B0F7]">
              Experience
            </span>
          </h2>
          <p className="mt-3 text-base text-[#594770] dark:text-[#C4B5DB]">
            Hands-on technical implementation, team software development, and UI/UX design practice conducted in the IT laboratories of Davao del Norte State College.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.academicExperience.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-white/80 dark:bg-[#1A1028]/80 backdrop-blur-md border border-[#E4D7F5] dark:border-[#382652] shadow-2xs hover:border-[#9D84D6] dark:hover:border-[#7C3AED] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7]">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs text-[#8B779E] dark:text-[#9A87B2]">
                    REC 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#1E142B] dark:text-[#F8F5FD] mb-3 group-hover:text-[#7C3AED] dark:group-hover:text-[#C4B0F7] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#56456E] dark:text-[#BFB1D3] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-4 border-t border-[#F0E4FB] dark:border-[#2F1D46]">
                  {item.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-[#5B4775] dark:text-[#C3B3D9]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] dark:bg-[#C4B0F7]" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-[#F0E4FB] dark:border-[#2F1D46] flex items-center justify-between text-xs font-mono text-[#827198] dark:text-[#A494BE]">
                <span>Davao del Norte State College</span>
                <span className="text-[#10B981]">Verified Lab Work</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
