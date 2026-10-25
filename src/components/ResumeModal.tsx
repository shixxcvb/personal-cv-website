import { X, Printer, MapPin, Mail, Phone, ExternalLink, GraduationCap, Code2, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <div
        className="relative w-full max-w-4xl my-8 bg-white dark:bg-[#1A1426] text-[#261D39] dark:text-[#FAF7FF] rounded-3xl shadow-2xl border border-[#E9DEF7] dark:border-[#382B4D] overflow-hidden transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar (Hidden in Print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0E6FA] dark:border-[#2C2140] bg-[#FAF7FD] dark:bg-[#15111F] no-print">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight text-[#4D347B] dark:text-[#C4B2FF]">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs text-[#7F6F96] dark:text-[#9F91B5]">
              (Print-ready / Save as PDF)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:opacity-95 rounded-xl shadow-xs transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              aria-label="Close CV modal"
              className="p-2 text-[#6D5D84] hover:text-[#261D39] dark:text-[#A798BE] dark:hover:text-white rounded-xl hover:bg-[#EFE8F9] dark:hover:bg-[#2A203C] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable Body */}
        <div className="p-8 md:p-12 space-y-8 print:p-0 print:space-y-6 text-sm">
          {/* Header */}
          <div className="border-b border-[#EDE4F7] dark:border-[#312547] pb-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 id="resume-title" className="text-2xl md:text-3xl font-black tracking-tight text-[#261D39] dark:text-white">
                  {PORTFOLIO_DATA.personal.fullName}
                </h1>
                <p className="text-base font-bold text-[#7C3AED] dark:text-[#C4B2FF] mt-1">
                  {PORTFOLIO_DATA.personal.title} · {PORTFOLIO_DATA.personal.course}
                </p>
                <p className="text-xs font-medium text-[#6F6088] dark:text-[#B1A3C6] mt-0.5">
                  {PORTFOLIO_DATA.personal.school} · {PORTFOLIO_DATA.personal.yearSection}
                </p>
              </div>

              {/* Contact Grid */}
              <div className="space-y-1.5 text-xs text-[#5C4C75] dark:text-[#C0B3D3]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B2FF] shrink-0" />
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:underline font-mono">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B2FF] shrink-0" />
                  <a href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`} className="hover:underline font-mono">
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B2FF] shrink-0" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B2FF] shrink-0" />
                  <a href={PORTFOLIO_DATA.personal.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-mono">
                    github.com/shixxcvb
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B2FF] mb-2">
              Career Objective
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-[#4A3B63] dark:text-[#D5CBE5] italic">
              "{PORTFOLIO_DATA.personal.careerObjective}"
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B2FF] mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-[#D9C8FF] dark:border-[#4B3B66] pl-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-bold text-[#261D39] dark:text-white">{edu.institution}</h3>
                    <span className="text-xs font-bold text-[#7C3AED] dark:text-[#C4B2FF]">{edu.status}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#5A4B73] dark:text-[#B6A8CB]">
                    {edu.degree} {edu.yearLevel ? `(${edu.yearLevel})` : ""}
                  </p>
                  <p className="text-xs text-[#71618B] dark:text-[#9E8FB5] mt-1 leading-normal">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical & Creative Skills */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B2FF] mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" /> Technical &amp; Design Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.skills.map((s) => (
                <span
                  key={s.name}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF7FD] dark:bg-[#201830] border border-[#EDE2F8] dark:border-[#33264A] text-[#4D347B] dark:text-[#FAF7FF]"
                >
                  {s.name} <span className="font-normal text-[#86769F] dark:text-[#A898BE]">({s.level})</span>
                </span>
              ))}
            </div>
          </div>

          {/* Featured Deployed Web Applications */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B2FF] mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Deployed Web Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-2xl border border-[#E9DEF7] dark:border-[#382B4D] bg-[#FCFAFF] dark:bg-[#211931]">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xs font-black text-[#261D39] dark:text-white">
                      {proj.name} – {proj.tagline}
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#786991] dark:text-[#A798BE] line-clamp-2 mt-1">
                    {proj.description}
                  </p>
                  <div className="mt-2 text-[11px] text-[#7C3AED] dark:text-[#C4B2FF] font-semibold flex items-center gap-1">
                    <span>Live App:</span>
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="underline truncate">
                      {proj.liveUrl}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Experience */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B2FF] mb-3">
              Academic Experience &amp; Collaborative Projects
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.academicExperience.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-[#261D39] dark:text-white">{exp.title}</span>
                    <span className="text-[#7C3AED] dark:text-[#C4B2FF] font-semibold">{exp.category}</span>
                  </div>
                  <p className="text-[#5E4F79] dark:text-[#BAACD0] mt-0.5">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer (Hidden in Print) */}
        <div className="px-6 py-4 border-t border-[#F0E6FA] dark:border-[#2C2140] bg-[#FAF7FD] dark:bg-[#15111F] flex items-center justify-between no-print">
          <p className="text-xs text-[#7F6F96] dark:text-[#9F91B5]">
            Charlene Calamba · BSIT 4B · Davao del Norte State College
          </p>
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-xs font-bold text-[#4D347B] dark:text-[#D9C8FF] hover:bg-[#EFE7FA] dark:hover:bg-[#2B213E] rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
