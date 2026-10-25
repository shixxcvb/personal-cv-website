import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";

export function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Distinctive artistic SVG motifs for each project
  const renderProjectMotif = (id: string, color: string) => {
    switch (id) {
      case "studyya":
        // Smart Study Assistant: Planetary Study Compass
        return (
          <svg className="w-24 h-24 sm:w-32 sm:h-32" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="2" strokeDasharray="4 4" className="animate-spin-slow" />
            <circle cx="50" cy="50" r="28" stroke={color} strokeWidth="3" />
            <path d="M50 20 L50 80 M20 50 L80 50" stroke={color} strokeWidth="1.5" />
            <circle cx="50" cy="50" r="8" fill={color} />
            <circle cx="50" cy="22" r="4" fill={color} />
          </svg>
        );
      case "studyflow":
        // Student Productivity Planner: Flowing Hourglass & Infinity Loop
        return (
          <svg className="w-24 h-24 sm:w-32 sm:h-32" viewBox="0 0 100 100" fill="none">
            <path
              d="M30 25 C30 45, 70 45, 70 65 C70 85, 30 85, 30 65 C30 45, 70 45, 70 25 Z"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="50" cy="50" r="6" fill={color} />
            <circle cx="35" cy="25" r="4" fill={color} />
            <circle cx="65" cy="75" r="4" fill={color} />
          </svg>
        );
      case "pennywise":
        // Personal Expense Tracker: Financial Geometric Ring & Coin Shield
        return (
          <svg className="w-24 h-24 sm:w-32 sm:h-32" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="25" width="50" height="50" rx="16" stroke={color} strokeWidth="3" transform="rotate(45 50 50)" />
            <circle cx="50" cy="50" r="18" stroke={color} strokeWidth="2" strokeDasharray="3 3" />
            <text x="50" y="56" fill={color} fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
              ₱
            </text>
          </svg>
        );
      case "booknest":
        // Digital Bookstore: Flying Open Book Geometric Wings
        return (
          <svg className="w-24 h-24 sm:w-32 sm:h-32" viewBox="0 0 100 100" fill="none">
            <path d="M50 75 C40 68 25 68 15 72 L15 28 C25 24 40 24 50 30 C60 24 75 24 85 28 L85 72 C75 68 60 68 50 75 Z" stroke={color} strokeWidth="3" />
            <line x1="50" y1="30" x2="50" y2="75" stroke={color} strokeWidth="2" />
            <path d="M50 30 L50 20" stroke={color} strokeWidth="2" strokeDasharray="2 2" />
            <circle cx="50" cy="18" r="3" fill={color} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B2FF] mb-3">
            <span>03</span>
            <span aria-hidden="true">✦</span>
            <span>Selected Deployed Applications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#261D39] dark:text-[#FAF7FF] leading-tight">
            Interactive Project{" "}
            <span className="italic font-serif font-normal text-[#7C3AED] dark:text-[#C4B2FF]">
              Gallery
            </span>
          </h2>
          <p className="mt-3 text-base text-[#615178] dark:text-[#BCAECF]">
            Hover or tap to explore four deployed web applications. No static screenshots—pure typography, animation, and live verified links.
          </p>
        </div>

        {/* Oversized Typography Project Gallery Rows */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.projects.map((project: Project) => {
            const isHovered = hoveredProjectId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group relative rounded-[2.5rem] border border-[#E9DFF7] dark:border-[#38264F] transition-all duration-500 overflow-hidden"
                style={{
                  backgroundColor: isHovered
                    ? undefined
                    : undefined,
                }}
              >
                {/* Dynamic Ambient Background Tint Layer */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundColor: isHovered ? project.accentColor : "transparent",
                    opacity: isHovered ? 0.08 : 0,
                  }}
                />

                {/* Main Row Content Container */}
                <div className="relative p-6 sm:p-10 md:p-12 bg-white/70 dark:bg-[#1E152E]/70 backdrop-blur-md transition-colors duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    
                    {/* Left: Index & Giant Typography Title */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-sm sm:text-base font-black text-[#7C3AED] dark:text-[#C4B2FF]">
                          {project.num}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#9333EA] dark:text-[#F1BCE1]">
                          {project.category}
                        </span>
                        <span className="text-xs text-[#7C3AED] dark:text-[#C4B2FF]">
                          {project.symbol}
                        </span>
                      </div>

                      {/* Giant Project Name */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#261D39] dark:text-[#FAF7FF] transition-all duration-300 group-hover:translate-x-2"
                        style={{
                          color: isHovered ? project.accentColor : undefined,
                        }}
                      >
                        {project.name}
                      </a>

                      <p className="text-base sm:text-lg font-bold text-[#5B3E8C] dark:text-[#D4C3EC] mt-1 mb-4">
                        {project.tagline}
                      </p>

                      <p className="max-w-xl text-sm sm:text-base text-[#56456E] dark:text-[#BFB1D3] leading-relaxed mb-6">
                        "{project.description}"
                      </p>

                      {/* Highlight Chips */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF5FF] dark:bg-[#281A3F] border border-[#E9DCF8] dark:border-[#3B255B] text-[#553C7D] dark:text-[#D1C2E6]"
                          >
                            ✦ {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Interactive Abstract Graphic & Action Controls */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-6 shrink-0">
                      
                      {/* Animated Abstract Project Motif Graphic */}
                      <div
                        className="transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6 hidden md:block"
                        style={{ color: project.accentColor }}
                      >
                        {renderProjectMotif(project.id, project.accentColor)}
                      </div>

                      {/* Action Buttons: Explore Project & GitHub */}
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-black text-white shadow-md transition-all duration-300 hover:opacity-95 active:scale-95 focus-visible:outline-none focus-visible:ring-2"
                          style={{
                            backgroundColor: project.accentColor,
                          }}
                        >
                          <span>Explore Project</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code of ${project.name} on GitHub`}
                            className="inline-flex items-center justify-center p-3.5 rounded-full text-[#4D347B] dark:text-[#FAF7FF] bg-white dark:bg-[#281A3F] border border-[#E9DCF8] dark:border-[#3B255B] hover:bg-[#F2E8FA] dark:hover:bg-[#342252] transition-colors shadow-2xs"
                            title="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>

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
