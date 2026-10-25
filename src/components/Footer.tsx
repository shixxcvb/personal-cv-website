import { ArrowUp, Sparkles, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#EBDFF8] dark:border-[#2C1F3F] bg-[#FAF7FD] dark:bg-[#120D1D] text-[#55466F] dark:text-[#C5B8DA] py-14 relative no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand Logo & Statement */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-black tracking-tight text-[#261D39] dark:text-[#FAF7FF] flex items-center gap-1.5"
            >
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#EC4899] bg-clip-text text-transparent">
                Charlene
              </span>
              <span className="text-[#9333EA] dark:text-[#C4B2FF] text-xl font-bold">✦</span>
            </a>
            <p className="text-xs text-[#7A6B93] dark:text-[#A798BE] mt-1 max-w-sm">
              {PORTFOLIO_DATA.personal.heroManifesto}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-[#65557E] dark:text-[#B2A4C7]">
            <a href="#home" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">
              Universe
            </a>
            <a href="#about" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">
              Works
            </a>
            <a href="#education" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">
              Education
            </a>
            <a href="#experience" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to top button */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1E152E] border border-[#E9DEF7] dark:border-[#38264F] text-xs font-black text-[#4D347B] dark:text-[#FAF7FF] hover:bg-[#F2E8FA] dark:hover:bg-[#2A1D41] shadow-2xs transition-all active:scale-95"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-10 pt-6 border-t border-[#EFE7FA] dark:border-[#221636] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#86779F] dark:text-[#9585AA]">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.fullName} · {PORTFOLIO_DATA.personal.school} (BSIT 4B)
          </p>
          <div className="flex items-center gap-1.5">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#C4B2FF]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
