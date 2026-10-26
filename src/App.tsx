import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import { CosmicBackground } from "./components/CosmicBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Learning } from "./components/Learning";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCFAFF] dark:bg-[#120D1D] text-[#261D39] dark:text-[#FAF7FF] transition-colors duration-500 relative selection:bg-[#D9C8FF] selection:text-[#4D347B] font-sans overflow-x-hidden">
      {/* Dreamy Cosmic Ambient Background */}
      <CosmicBackground />

      {/* Experimental Floating Dock Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Experience Flow */}
      <main className="relative z-10">
        {/* 1. Extraordinary Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Kinetic Editorial Marquee Banner */}
        <MarqueeBanner />

        {/* 3. Artistic About Me Section */}
        <About />

        {/* 4. Skills Universe */}
        <Skills />

        {/* 5. Typography-Focused Interactive Project Gallery (No screenshots/thumbnails) */}
        <Projects />

        {/* 6. Education Constellation Milestones */}
        <Education />

        {/* 7. Academic Laboratory Experience */}
        <Experience />

        {/* 8. Continuous Growth ("Always Learning") */}
        <Learning />

        {/* 9. Contact Centerpiece */}
        <Contact />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Executive Printable CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
