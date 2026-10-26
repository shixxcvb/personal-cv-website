import { useEffect } from "react";
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Code,
  FolderGit2,
  BookOpen,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Close modal when pressing the Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-full-name"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs p-3 sm:p-6 md:p-8 flex justify-center items-start"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-4 sm:my-8 bg-white dark:bg-[#1A1224] text-[#1E142B] dark:text-[#F8F5FD] rounded-2xl shadow-2xl border border-[#E2D5F2] dark:border-[#382652] overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Header (Never cuts off, stays at top while scrolling) */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-8 py-3.5 bg-white/95 dark:bg-[#1A1224]/95 backdrop-blur-md border-b border-[#EDE2F8] dark:border-[#33224B] no-print">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight text-[#301E49] dark:text-[#E8DCF9]">
              Curriculum Vitae
            </span>
            <span className="hidden sm:inline-block text-xs text-[#7A6993] dark:text-[#A797BD]">
              · {PORTFOLIO_DATA.personal.fullName} (BSIT 4B)
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:from-[#6D28D9] hover:to-[#7E22CE] rounded-lg shadow-2xs transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              aria-label="Close CV modal"
              className="p-1.5 text-[#6D5D84] hover:text-[#261D39] dark:text-[#A798BE] dark:hover:text-white rounded-lg hover:bg-[#F2E8FA] dark:hover:bg-[#2C1C42] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formal Clean Paper Document Layout (Authentic, Simple, Elegant, Non-AI) */}
        <div
          id="printable-cv"
          className="p-6 sm:p-10 md:p-12 space-y-7 text-[#261D33] dark:text-[#EAE2F8] print:!text-[#111827] bg-white dark:bg-[#1A1224] print:!bg-white print:p-0 print:space-y-5"
        >
          {/* Header: Candidate Details & Clean Formal Identification */}
          <div className="border-b border-[#E3D7F2] dark:border-[#36244E] print:border-gray-400 pb-6">
            <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-5">
              
              {/* Left Column: Full Name, Degree & Contact info */}
              <div className="space-y-2">
                <div>
                  <h1
                    id="resume-full-name"
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1A1126] dark:text-white print:text-black uppercase"
                  >
                    {PORTFOLIO_DATA.personal.fullName}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-[#7C3AED] dark:text-[#C4B0F7] print:text-neutral-800 mt-0.5">
                    {PORTFOLIO_DATA.personal.course} ({PORTFOLIO_DATA.personal.yearSection})
                  </p>
                  <p className="text-xs text-[#6B5A84] dark:text-[#B3A3C9] print:text-neutral-600">
                    {PORTFOLIO_DATA.personal.school} · Panabo City, Davao del Norte
                  </p>
                </div>

                {/* Contact List */}
                <div className="pt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[#523F6D] dark:text-[#C5B7DB] print:text-neutral-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B0F7] print:text-black shrink-0" />
                    <span>{PORTFOLIO_DATA.personal.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B0F7] print:text-black shrink-0" />
                    <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:underline">
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B0F7] print:text-black shrink-0" />
                    <span>{PORTFOLIO_DATA.personal.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B0F7] print:text-black shrink-0" />
                    <a
                      href={PORTFOLIO_DATA.personal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/shixxcvb
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B0F7] print:text-black shrink-0" />
                    <a
                      href={PORTFOLIO_DATA.personal.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Formal 2x2 Photo Frame */}
              <div className="self-start sm:self-center shrink-0">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden border border-[#D8C7EE] dark:border-[#402C5B] print:border-gray-400 bg-neutral-100 dark:bg-[#251936] shadow-2xs flex items-end justify-center">
                  <img
                    src={PORTFOLIO_DATA.personal.avatarUrl}
                    alt="Charlene Calamba"
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Section 1: Career Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7] print:text-black border-b border-[#E8DEF5] dark:border-[#35254D] print:border-gray-300 pb-1 mb-2.5 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Objective</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#45345E] dark:text-[#D1C4E4] print:text-neutral-800 leading-relaxed text-justify">
              Motivated Fourth-Year Information Technology student at Davao del Norte State College with strong foundational skills in frontend web development, semantic markup, and responsive design. Seeking an Internship / On-the-Job Training (OJT) role where I can apply my knowledge in building intuitive, functional web applications while collaborating with an engineering team to solve real-world problems.
            </p>
          </div>

          {/* Section 2: Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7] print:text-black border-b border-[#E8DEF5] dark:border-[#35254D] print:border-gray-300 pb-1 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </h2>
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-[#1E142B] dark:text-white print:text-black">
                  <span className="text-sm">Davao del Norte State College (DNSC)</span>
                  <span className="text-xs font-medium text-[#7C3AED] dark:text-[#C4B0F7] print:text-neutral-700">
                    2022 – Present (Expected Graduation: 2026)
                  </span>
                </div>
                <div className="text-[#4E3D67] dark:text-[#C3B3D9] print:text-neutral-800 font-semibold mt-0.5">
                  Bachelor of Science in Information Technology (BSIT) · Section 4B
                </div>
                <p className="text-[#685680] dark:text-[#A898BE] print:text-neutral-600 mt-1 leading-normal">
                  Location: Panabo City, Davao del Norte · Focus on Web Development, Systems Analysis, and Database Management.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-[#1E142B] dark:text-white print:text-black">
                  <span>Southern Davao National High School</span>
                  <span className="text-xs font-medium text-[#7A6894] dark:text-[#A797BD] print:text-neutral-700">
                    Completed 2022
                  </span>
                </div>
                <div className="text-[#5E4D78] dark:text-[#B6A6CE] print:text-neutral-800">
                  Secondary Education · Panabo City, Davao del Norte
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-[#1E142B] dark:text-white print:text-black">
                  <span>Panabo Central Elementary School SPED Center</span>
                  <span className="text-xs font-medium text-[#7A6894] dark:text-[#A797BD] print:text-neutral-700">
                    Completed
                  </span>
                </div>
                <div className="text-[#5E4D78] dark:text-[#B6A6CE] print:text-neutral-800">
                  Elementary Education · Panabo City, Davao del Norte
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Technical & Creative Skills (Categorized, Professional & Non-AI) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7] print:text-black border-b border-[#E8DEF5] dark:border-[#35254D] print:border-gray-300 pb-1 mb-3 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" />
              <span>Technical &amp; Creative Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#201530] dark:text-white print:text-black">Programming &amp; Web:</strong>{" "}
                  <span className="text-[#55436E] dark:text-[#C3B3D9] print:text-neutral-700">
                    HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
                  </span>
                </p>
                <p>
                  <strong className="text-[#201530] dark:text-white print:text-black">Developer Tools:</strong>{" "}
                  <span className="text-[#55436E] dark:text-[#C3B3D9] print:text-neutral-700">
                    Git, GitHub, Visual Studio Code, Vercel, npm
                  </span>
                </p>
              </div>

              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#201530] dark:text-white print:text-black">Design &amp; Prototyping:</strong>{" "}
                  <span className="text-[#55436E] dark:text-[#C3B3D9] print:text-neutral-700">
                    Figma, Canva, UI Wireframing, Responsive Layouts
                  </span>
                </p>
                <p>
                  <strong className="text-[#201530] dark:text-white print:text-black">Core Competencies:</strong>{" "}
                  <span className="text-[#55436E] dark:text-[#C3B3D9] print:text-neutral-700">
                    Frontend Architecture, Cross-Device Compatibility, Problem Solving
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Deployed Web Applications (Four Real Projects) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7] print:text-black border-b border-[#E8DEF5] dark:border-[#35254D] print:border-gray-300 pb-1 mb-3 flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Deployed Web Applications &amp; Projects</span>
            </h2>
            <div className="space-y-3.5 text-xs">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div className="font-bold text-[#1E142B] dark:text-white print:text-black">
                      <span>{proj.name}</span>
                      <span className="text-[#6F5E88] dark:text-[#AFA1C5] font-normal"> — {proj.tagline}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#7C3AED] dark:text-[#C4B0F7] print:text-neutral-700">
                      Vercel Deployed
                    </span>
                  </div>
                  <p className="text-[#54436E] dark:text-[#C2B2D8] print:text-neutral-700 leading-normal">
                    {proj.description}
                  </p>
                  <div className="text-[11px] font-mono text-[#7C3AED] dark:text-[#C4B0F7] print:text-neutral-800 flex flex-wrap items-center gap-x-3">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-0.5"
                    >
                      <span>Live: {proj.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                      <ExternalLink className="w-3 h-3 no-print" />
                    </a>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-0.5 text-[#5F4E78] dark:text-[#B6A6CE] print:text-neutral-700"
                      >
                        <span>GitHub: {proj.githubUrl.replace(/^https?:\/\//, "")}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Relevant Academic Experience & Laboratory Work */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7] print:text-black border-b border-[#E8DEF5] dark:border-[#35254D] print:border-gray-300 pb-1 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academic Experience &amp; IT Coursework</span>
            </h2>
            <div className="space-y-2.5 text-xs">
              <div>
                <h3 className="font-bold text-[#1E142B] dark:text-white print:text-black">
                  Frontend Development &amp; Web Systems Laboratory
                </h3>
                <p className="text-[#584672] dark:text-[#BEAFD5] print:text-neutral-700 mt-0.5">
                  Engineered and deployed four client-facing web applications to demonstrate mastery in HTML5 structure, CSS responsive layouts, JavaScript event logic, and continuous deployment workflows via GitHub and Vercel.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#1E142B] dark:text-white print:text-black">
                  Relevant Coursework Covered:
                </h3>
                <p className="text-[#584672] dark:text-[#BEAFD5] print:text-neutral-700 mt-0.5">
                  Web Systems &amp; Technologies, Systems Analysis and Design, Database Management Systems, Information Assurance and Security, Software Engineering, Human-Computer Interaction (HCI).
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Personal Details & References */}
          <div className="border-t border-[#E3D7F2] dark:border-[#36244E] print:border-gray-400 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#705F88] dark:text-[#A999BE] print:text-neutral-600 gap-2">
              <div>
                <strong>Citizenship:</strong> Filipino &nbsp;|&nbsp; <strong>Languages:</strong> English, Tagalog, Bisaya (Cebuano)
              </div>
              <div className="italic">
                Character references available upon request.
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Close Bar (Hidden in Print) */}
        <div className="px-5 sm:px-8 py-3.5 border-t border-[#EDE2F8] dark:border-[#33224B] bg-[#FAF7FD] dark:bg-[#150F1E] flex items-center justify-between no-print">
          <p className="text-xs text-[#7A6993] dark:text-[#A797BD]">
            {PORTFOLIO_DATA.personal.fullName} · Curriculum Vitae
          </p>
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-1.5 text-xs font-semibold text-[#4D347B] dark:text-[#D9C8FF] hover:bg-[#EFE7FA] dark:hover:bg-[#2B213E] rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
