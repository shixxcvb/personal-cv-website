import { Sun, Moon } from "lucide-react";
import type { Theme } from "../hooks/useTheme";

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
  className?: string;
}

export function ThemeToggle({ theme, toggleTheme, className = "" }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A2F9] active:scale-95 ${
        isDark
          ? "bg-[#231B33] text-[#F1BCE1] hover:bg-[#2F2445] border border-[#3E3059]"
          : "bg-white text-[#4D347B] hover:bg-[#F4EDFC] border border-[#E8DEF8] shadow-sm"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100 text-amber-500" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
