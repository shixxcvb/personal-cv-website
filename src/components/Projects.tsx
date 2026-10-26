import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";

export function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Bespoke architectural SVG line motifs for each project
  const renderProjectMotif = (id: string, color: string) => {
    switch (id) {
      case "studyya":
        // StudyYa: Concentric Planetary Study Astrolabe
        return (
          <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="2" />
            <line x1="15" y1="50" x2="85" y2="50" stroke={color} strokeWidth="1.5" />
            <line x1="50" y1="15" x2="50" y2="85" stroke={color} strokeWidth="1.5" />
            <circle cx="50" cy="50" r="6" fill={color} />
            <circle cx="50" cy="20" r="3.5" fill={color} />
          </svg>
        );
      case "studyflow":
        // StudyFlow: Infinite Focus Loop & Precision Dial
        return (
          <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
            <path
              d="M30 30 C30 50, 70 50, 70 70 C70 90, 30 90, 30 70 C30 50, 70 50, 70 30 Z"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="50" cy="50" r="5" fill={color} />
            <circle cx="35" cy="30" r="3.5" fill={color} />
            <circle cx="65" cy="70" r="3.5" fill={color} />
          </svg>
        );
      case "pennywise":
        // PennyWise: Modern FinTech Diamond Ring & Currency Seal
        return (
          <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="25" width="50" height="50" rx="14" stroke={color} strokeWidth="2.5" transform="rotate(45 50 50)" />
            <circle cx="50" cy="50" r="20" stroke={color} strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="50" y="56" fill={color} fontSize="17" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">
              ₱
            </text>
          </svg>
        );
      case "booknest":
        // BookNest: Geometric Flying Foliant & Reading Arc
        return (
          <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
            <path d="M50 75 C38 68 24 68 14 72 L14 28 C24 24 38 24 50 30 C62 24 76 24 86 28 L86 72 C76 68 62 68 50 75 Z" stroke={color} strokeWidth="2.5" />
            <line x1="50" y1="30" x2="50" y2="75" stroke={color} strokeWidth="1.5" />
            <circle cx="50" cy="18" r="3.5" fill={color} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Kicker */}
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider uppercase text-[#7C3AED] dark:text-[#C4B0F7] mb-4">
          <span>03 / Selected Works</span>
          <span aria-hidden="true" className="text-[#9D84D6]">·</span>
          <span className="text-[#6C5882] dark:text-[#A796BD]">4 Deployed Web Applications</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1E142B] dark:text-[#F8F5FD] leading-tight">
              Interactive{" "}
              <span className="font-editorial-italic font-normal text-[#7C3AED] dark:text-[#C4B0F7]">
                Project Gallery
              </span>
            </h2>
            <p className="mt-3 text-base text-[#594770] dark:text-[#C4B5DB]">
              Curated client-side applications built with clean code and modern architecture. Click any project to experience the live deployed system on Vercel.
            </p>
          </div>

          <div className="text-xs font-mono text-[#7B6A92] dark:text-[#A797BD] self-start md:self-auto">
            ALL APPS LIVE ON VERCEL ✦
          </div>
        </div>

        {/* Oversized Editorial Interactive Project Rows */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.projects.map((project: Project, idx: number) => {
            const isHovered = hoveredProjectId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group relative rounded-2xl border border-[#E4D7F5] dark:border-[#382652] transition-all duration-300 overflow-hidden bg-white/80 dark:bg-[#1A1028]/80 backdrop-blur-md shadow-xs hover:shadow-xl hover:border-[#9D84D6] dark:hover:border-[#7C3AED]"
              >
                {/* Subtle Hover Aura */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundColor: project.accentColor,
                    opacity: isHovered ? 0.05 : 0,
                  }}
                />

                {/* Main Row Content */}
                <div className="relative p-7 sm:p-10 md:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    
                    {/* Left Typographic Hierarchy */}
                    <div className="flex-1">
                      {/* Quiet Unboxed Metadata Line */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#7C3AED] dark:text-[#C4B0F7] mb-3">
                        <span className="font-bold">0{idx + 1}</span>
                        <span aria-hidden="true">/</span>
                        <span className="uppercase tracking-wider font-semibold">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#6D5A85] dark:text-[#A695BE]">Vercel Deployed</span>
                      </div>

                      {/* Enormous Project Title (Clickable) */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1E142B] dark:text-[#F8F5FD] transition-all duration-200 group-hover:translate-x-1"
                        style={{
                          color: isHovered ? project.accentColor : undefined,
                        }}
                      >
                        {project.name}
                      </a>

                      <p className="text-base sm:text-lg font-bold text-[#553E73] dark:text-[#D7C8EC] mt-1 mb-4">
                        {project.tagline}
                      </p>

                      <p className="max-w-xl text-sm sm:text-base text-[#56456E] dark:text-[#BFB1D3] leading-relaxed mb-6">
                        "{project.description}"
                      </p>

                      {/* Clean Unboxed Tags with Bullet Separators */}
                      <div className="flex flex-wrap items-center gap-x-2 text-xs font-semibold text-[#5B4775] dark:text-[#C3B3D9]">
                        <span className="font-mono text-[#7C3AED] dark:text-[#C4B0F7]">Features:</span>
                        {project.highlights.map((h, i) => (
                          <span key={i} className="flex items-center gap-2">
                            {i > 0 && <span aria-hidden="true" className="text-[#9D84D6]">·</span>}
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Motif & Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-6 shrink-0">
                      
                      {/* Geometric Line Motif */}
                      <div
                        className="transition-transform duration-500 transform group-hover:scale-105 hidden md:block"
                        style={{ color: project.accentColor }}
                      >
                        {renderProjectMotif(project.id, project.accentColor)}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white shadow-xs transition-all duration-200 hover:opacity-95 active:scale-95 focus-visible:outline-none focus-visible:ring-2"
                          style={{
                            backgroundColor: project.accentColor,
                          }}
                        >
                          <span>Explore Project</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code of ${project.name} on GitHub`}
                            className="inline-flex items-center justify-center p-3 rounded-xl text-[#301E49] dark:text-[#FAF7FF] bg-white dark:bg-[#221435] border border-[#E4D7F5] dark:border-[#382652] hover:bg-[#F5EFFC] dark:hover:bg-[#2C1945] transition-colors shadow-2xs"
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
