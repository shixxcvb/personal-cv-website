import { GraduationCap, School, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA, EducationItem } from "../data/portfolioData";

export function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden bg-[#FAF6FD]/60 dark:bg-[#160F24]/60 border-y border-[#EDE0FA] dark:border-[#2C1F3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B2FF] mb-3">
            <span>04</span>
            <span aria-hidden="true">✦</span>
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#261D39] dark:text-[#FAF7FF] leading-tight">
            Education &amp;{" "}
            <span className="italic font-serif font-normal text-[#7C3AED] dark:text-[#C4B2FF]">
              Milestones
            </span>
          </h2>
          <p className="mt-3 text-base text-[#615178] dark:text-[#BCAECF]">
            My academic foundation, currently advancing through fourth-year Information Technology studies.
          </p>
        </div>

        {/* Winding Constellation Milestones */}
        <div className="space-y-8 relative">
          {PORTFOLIO_DATA.education.map((item: EducationItem, idx: number) => {
            const rotations = ["rotate-0", "-rotate-1", "rotate-1"];
            const rotClass = rotations[idx % rotations.length];

            return (
              <div
                key={item.id}
                className={`relative p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#1E152E] border border-[#E9DDF7] dark:border-[#38264F] shadow-xs hover:border-[#B8A2F9] dark:hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300 ${rotClass} group`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  {/* Left: Institution & Degree */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-2xl bg-[#F5EEFD] dark:bg-[#2B1B43] text-[#7C3AED] dark:text-[#C4B2FF] flex items-center justify-center">
                        {item.current ? (
                          <GraduationCap className="w-5 h-5" />
                        ) : (
                          <School className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-[#9333EA] dark:text-[#F1BCE1]">
                        {item.status} {item.yearLevel ? `· ${item.yearLevel}` : ""}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#261D39] dark:text-[#FAF7FF] mb-1 group-hover:text-[#7C3AED] dark:group-hover:text-[#C4B2FF] transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-base font-bold text-[#674F8B] dark:text-[#D1C3E6] mb-4">
                      {item.degree}
                    </p>

                    <p className="max-w-2xl text-sm sm:text-base text-[#56456E] dark:text-[#BFB1D3] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF5FF] dark:bg-[#281A3F] border border-[#E9DCF8] dark:border-[#3B255B] text-[#553C7D] dark:text-[#D1C2E6]"
                        >
                          ✦ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Status Badge */}
                  <div className="shrink-0">
                    <div
                      className={`px-4 py-2 rounded-2xl text-xs font-black tracking-wider uppercase border ${
                        item.current
                          ? "bg-[#F3E8FF] dark:bg-[#341F4E] border-[#D9C8FF] dark:border-[#5B378B] text-[#7C3AED] dark:text-[#D8B4FE]"
                          : "bg-[#FAF7FD] dark:bg-[#241738] border-[#EDE1FA] dark:border-[#3A255B] text-[#786791] dark:text-[#A797BD]"
                      }`}
                    >
                      {item.current ? "Active Degree ✦ Senior" : "Alumnus"}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
