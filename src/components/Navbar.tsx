import { useState, useEffect } from "react";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import type { Theme } from "../hooks/useTheme";

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  onOpenResume: () => void;
}

export function Navbar({ theme, toggleTheme, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "education", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Universe", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Works", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        isScrolled
          ? "bg-[#FCFAFF]/80 dark:bg-[#120D1D]/85 backdrop-blur-md border-b border-[#EBDFF8]/60 dark:border-[#2C1F3F]/60 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Left Spacer (Portfolio text removed as requested) */}
          <div className="w-8 shrink-0" />

          {/* Center Floating Dock (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/70 dark:bg-[#1E152E]/70 backdrop-blur-md border border-[#EBE0F8] dark:border-[#33224B] shadow-2xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white shadow-xs"
                      : "text-[#5D4E77] dark:text-[#C5B8DA] hover:text-[#7C3AED] dark:hover:text-white hover:bg-[#F5EEFD] dark:hover:bg-[#281C3D]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#EC4899] hover:opacity-95 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A2F9]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              className="lg:hidden p-2 rounded-xl text-[#4D347B] dark:text-[#D9C8FF] hover:bg-[#F2EBFB] dark:hover:bg-[#251D35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A2F9] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EBDFF8] dark:border-[#2C1F3F] bg-[#FCFAFF]/95 dark:bg-[#120D1D]/95 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 shadow-xl">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-[#4D347B] dark:text-[#E2D8F0] hover:bg-[#F3EBFB] dark:hover:bg-[#221636] rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#B8A2F9]">✦</span>
              </a>
            ))}
            <div className="pt-3 border-t border-[#EBDFF8] dark:border-[#2C1F3F] mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#EC4899] rounded-xl shadow-xs"
              >
                <FileText className="w-4 h-4" />
                View &amp; Print CV
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
