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
  Layers,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<"all" | "code" | "tools" | "design">("all");

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
    activeFilter === "all"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#FAF6FD]/60 dark:bg-[#160F24]/60 border-y border-[#EDE0FA] dark:border-[#2C1F3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B2FF] mb-3">
              <span>02</span>
              <span aria-hidden="true">✦</span>
              <span>Constellation of Tools</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#261D39] dark:text-[#FAF7FF]">
              Skills &amp; Craft
            </h2>
            <p className="mt-3 text-base text-[#615178] dark:text-[#BCAECF]">
              Real technologies, developer workflows, and design software I use to craft functional digital applications.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-[#1E152E] border border-[#E8DCF7] dark:border-[#38264F] shadow-2xs self-start md:self-auto">
            {(["all", "code", "tools", "design"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
                className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white shadow-xs"
                    : "text-[#62517C] dark:text-[#BAACD0] hover:text-[#7C3AED] dark:hover:text-white"
                }`}
              >
                {filter === "all" ? "All Skills" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Unusual Creative Interactive Skill Clusters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => {
            const IconComp = iconMap[skill.icon] || Code2;
            const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0"];
            const rotClass = rotations[idx % rotations.length];

            return (
              <div
                key={skill.name}
                className={`group relative p-7 rounded-[2rem] bg-white dark:bg-[#1E152E] border border-[#E9DDF7] dark:border-[#38264F] shadow-xs hover:shadow-xl hover:border-[#B8A2F9] dark:hover:border-[#7C3AED] transition-all duration-300 hover:-translate-y-2 cursor-pointer ${rotClass}`}
              >
                {/* Top Corner Category Pip */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xs"
                    style={{ backgroundColor: `${skill.color}18`, color: skill.color }}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF5FF] dark:bg-[#281A3F] text-[#7C3AED] dark:text-[#C4B2FF] border border-[#E9DCF8] dark:border-[#3B255B]">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Title & Level */}
                <h3 className="text-2xl font-black text-[#261D39] dark:text-[#FAF7FF] mb-1 group-hover:text-[#7C3AED] dark:group-hover:text-[#C4B2FF] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs font-semibold text-[#71618B] dark:text-[#A798BF]">
                  {skill.level}
                </p>

                {/* Playful Floating Corner Glyph on Hover */}
                <div className="absolute bottom-4 right-4 text-sm text-[#B8A2F9] dark:text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity">
                  ✦
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbiting Marquee Ticker of Skills */}
        <div className="mt-16 py-4 px-6 rounded-2xl bg-white/70 dark:bg-[#1E152E]/70 backdrop-blur-md border border-[#EADDF7] dark:border-[#38264F] flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-[#6D5A85] dark:text-[#B9ABCF]">
          <span className="flex items-center gap-1.5 text-[#7C3AED] dark:text-[#C4B2FF]">
            <Sparkles className="w-3.5 h-3.5" /> HTML5 Semantics
          </span>
          <span>✦</span>
          <span>CSS Animations</span>
          <span>✦</span>
          <span className="text-[#9333EA] dark:text-[#F1BCE1]">JavaScript DOM &amp; Logic</span>
          <span>✦</span>
          <span>Git Branch Hygiene</span>
          <span>✦</span>
          <span className="text-[#EC4899]">Figma Prototyping</span>
          <span>✦</span>
          <span>VS Code Daily Workflow</span>
        </div>

      </div>
    </section>
  );
}
