import { useState } from "react";
import {
  Code2,
  FileCode2,
  Braces,
  GitBranch,
  Github,
  Terminal,
  Figma,
  Palette,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "code" | "tools" | "design">("all");

  const iconMap: Record<string, any> = {
    Code2,
    FileCode2,
    Braces,
    GitBranch,
    Github,
    Terminal,
    Figma,
    Palette,
  };

  const filteredSkills =
    activeTab === "all"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#FAF6FD]/60 dark:bg-[#130B1E]/60 border-y border-[#EDE0FA] dark:border-[#2C1C3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Kicker */}
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider uppercase text-[#7C3AED] dark:text-[#C4B0F7] mb-4">
          <span>04 / Technical Atelier</span>
          <span aria-hidden="true" className="text-[#9D84D6]">·</span>
          <span className="text-[#6C5882] dark:text-[#A796BD]">Core Proficiencies</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1E142B] dark:text-[#F8F5FD] leading-tight">
              Tools of the{" "}
              <span className="font-editorial-italic font-normal text-[#7C3AED] dark:text-[#C4B0F7]">
                Trade &amp; Craft
              </span>
            </h2>
            <p className="mt-3 text-base text-[#594770] dark:text-[#C4B5DB]">
              The core technologies, developer workflows, and creative software I apply daily to build functional, resilient web experiences.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-[#1A1028] border border-[#E4D7F5] dark:border-[#382652] shadow-2xs self-start md:self-auto">
            {(["all", "code", "tools", "design"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#7C3AED] text-white shadow-2xs"
                    : "text-[#624E79] dark:text-[#BAA9CF] hover:text-[#7C3AED] dark:hover:text-white"
                }`}
              >
                {tab === "all" ? "All Skills" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Catalogue Index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => {
            const IconComp = iconMap[skill.icon] || Code2;

            return (
              <div
                key={skill.name}
                className="group p-6 rounded-2xl bg-white/90 dark:bg-[#1A1028]/90 backdrop-blur-md border border-[#E4D7F5] dark:border-[#382652] shadow-2xs hover:border-[#9D84D6] dark:hover:border-[#7C3AED] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#7F6C95] dark:text-[#A898BC]">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1E142B] dark:text-[#F8F5FD] mb-1 group-hover:text-[#7C3AED] dark:group-hover:text-[#C4B0F7] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-[#635079] dark:text-[#B6A6CB] font-medium">
                  {skill.level}
                </p>

                <div className="mt-4 pt-4 border-t border-[#F2E8FA] dark:border-[#2C1B40] flex items-center justify-between text-[11px] text-[#86739D] dark:text-[#9B89B0] font-mono">
                  <span>DNSC Coursework</span>
                  <span className="text-[#10B981]">Active</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
