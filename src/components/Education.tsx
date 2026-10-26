import { GraduationCap, School, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA, EducationItem } from "../data/portfolioData";

export function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Kicker */}
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider uppercase text-[#7C3AED] dark:text-[#C4B0F7] mb-4">
          <span>05 / Academic Anthology</span>
          <span aria-hidden="true" className="text-[#9D84D6]">·</span>
          <span className="text-[#6C5882] dark:text-[#A796BD]">Educational Milestones</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1E142B] dark:text-[#F8F5FD] leading-tight">
            Education &amp;{" "}
            <span className="font-editorial-italic font-normal text-[#7C3AED] dark:text-[#C4B0F7]">
              Foundations
            </span>
          </h2>
          <p className="mt-3 text-base text-[#594770] dark:text-[#C4B5DB]">
            My formal learning journey, currently completing the Bachelor of Science in Information Technology degree at Davao del Norte State College.
          </p>
        </div>

        {/* Academic Anthology Chapters */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.education.map((item: EducationItem, idx: number) => (
            <div
              key={item.id}
              className="group p-8 sm:p-10 rounded-2xl bg-white/80 dark:bg-[#1A1028]/80 backdrop-blur-md border border-[#E4D7F5] dark:border-[#382652] shadow-2xs hover:border-[#9D84D6] dark:hover:border-[#7C3AED] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Left Hierarchy */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7C3AED] dark:text-[#C4B0F7] mb-2">
                    <span className="font-bold">CHAPTER 0{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span className="uppercase tracking-wider">{item.status}</span>
                    {item.yearLevel && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#6C5882] dark:text-[#A796BD]">{item.yearLevel}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#1E142B] dark:text-[#F8F5FD] mb-1 group-hover:text-[#7C3AED] dark:group-hover:text-[#C4B0F7] transition-colors">
                    {item.institution}
                  </h3>
                  
                  <p className="text-base font-semibold text-[#543E70] dark:text-[#D5C6EB] mb-4">
                    {item.degree}
                  </p>

                  <p className="max-w-3xl text-sm sm:text-base text-[#56456E] dark:text-[#BFB1D3] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights with subtle separators */}
                  <div className="flex flex-wrap items-center gap-x-2 text-xs font-medium text-[#65527E] dark:text-[#BAA9CF]">
                    <span className="font-mono text-[#7C3AED] dark:text-[#C4B0F7]">Focus:</span>
                    {item.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="flex items-center gap-2">
                        {hIdx > 0 && <span aria-hidden="true" className="text-[#9D84D6]">·</span>}
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Status Indicator */}
                <div className="shrink-0 self-start">
                  <div
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider border ${
                      item.current
                        ? "bg-[#FAF5FF] dark:bg-[#25153A] border-[#D9C8FF] dark:border-[#523377] text-[#7C3AED] dark:text-[#C4B0F7]"
                        : "bg-[#FAF8FD] dark:bg-[#1D122C] border-[#EDE1FA] dark:border-[#382352] text-[#7B6A92] dark:text-[#A291B7]"
                    }`}
                  >
                    {item.current ? "Active Senior Student" : "Completed"}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
