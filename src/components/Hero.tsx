import { useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Compass, Camera } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Hero() {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomPhoto(URL.createObjectURL(file));
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Floating Universe Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#1E152E]/80 backdrop-blur-md border border-[#E8DCF7] dark:border-[#38264F] shadow-xs text-xs font-bold text-[#7C3AED] dark:text-[#C4B2FF] animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>{PORTFOLIO_DATA.personal.welcomeKicker}</span>
            <span className="text-[#EC4899]">✦</span>
            <span className="text-[#64537D] dark:text-[#B9AACC]">BSIT 4B · DNSC</span>
          </div>
        </div>

        {/* Central Asymmetrical Hero Composition */}
        <div className="relative text-center max-w-5xl mx-auto">
          
          {/* Rotated Sticker Tag 1: Left */}
          <div className="absolute -top-4 left-0 sm:left-4 -rotate-6 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-[#F8C8E8] to-[#FCE7F3] dark:from-[#3D1A32] dark:to-[#4C1D3F] border border-[#F4B6DE] dark:border-[#5E254F] text-[#831843] dark:text-[#F9A8D4] text-xs font-black shadow-md z-20">
            <span>Panabo City, PH 📍</span>
          </div>

          {/* Rotated Sticker Tag 2: Right */}
          <div className="absolute -top-2 right-0 sm:right-6 rotate-6 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-[#D9C8FF] to-[#EDE9FE] dark:from-[#261545] dark:to-[#381B5E] border border-[#C4B2FF] dark:border-[#4B237C] text-[#4C1D95] dark:text-[#DDD6FE] text-xs font-black shadow-md z-20">
            <span>4 Deployed Web Apps 🚀</span>
          </div>

          {/* Massive Expressive Editorial Headline */}
          <div className="relative mb-6">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#6D588E] dark:text-[#BCAECF] uppercase mb-1">
              Hey, I'm
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] via-[#C026D3] to-[#EC4899] bg-clip-text text-transparent drop-shadow-xs">
                CHARLENE!
              </span>
            </h1>
          </div>

          {/* Subheading & Title with Stylized Badges */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/70 dark:bg-[#201633]/70 backdrop-blur-md border border-[#E9DFF7] dark:border-[#38264F] mb-8 shadow-xs">
            <span className="text-base sm:text-xl font-bold text-[#261D39] dark:text-white">
              {PORTFOLIO_DATA.personal.heroSubheading}
            </span>
            <span className="text-[#9333EA] dark:text-[#C4B2FF] text-lg">✦</span>
            <span className="text-xs sm:text-sm font-semibold text-[#7C3AED] dark:text-[#C4B2FF]">
              {PORTFOLIO_DATA.personal.school}
            </span>
          </div>

          {/* Centerpiece Creative Portrait Vessel & Floating Accents */}
          <div className="relative my-8 flex items-center justify-center">
            
            {/* Ambient Background Aura */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#B8A2F9] via-[#F8C8E8] to-[#A5B4FC] opacity-40 dark:opacity-30 blur-2xl animate-float-gentle" />

            {/* Vessel Ring */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2.5 bg-gradient-to-b from-[#FFFFFF] via-[#F3E8FF] to-[#E9D5FF] dark:from-[#2D1B46] dark:via-[#1D1230] dark:to-[#140C22] shadow-2xl border-2 border-[#D9C8FF] dark:border-[#4B3469] group flex items-center justify-center">
              
              {customPhoto ? (
                <img
                  src={customPhoto}
                  alt="Charlene Calamba Portrait"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#E9D5FF] via-[#FCE7F3] to-[#EDE9FE] dark:from-[#311B4B] dark:via-[#25153A] dark:to-[#170E25] flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                  {/* Internal floating soft blobs */}
                  <div className="absolute w-28 h-28 rounded-full bg-[#B8A2F9]/40 dark:bg-[#9333EA]/20 blur-xl -top-4 -left-4" />
                  <div className="absolute w-28 h-28 rounded-full bg-[#F8C8E8]/40 dark:bg-[#DB2777]/20 blur-xl -bottom-4 -right-4" />

                  {/* Monogram Typography */}
                  <span className="relative z-10 font-black text-5xl sm:text-6xl tracking-tighter bg-gradient-to-br from-[#5B21B6] via-[#7C3AED] to-[#DB2777] dark:from-[#C4B2FF] dark:via-[#F3E8FF] dark:to-[#F472B6] bg-clip-text text-transparent">
                    CC
                  </span>
                  <span className="relative z-10 text-[11px] font-bold tracking-widest uppercase text-[#6B5A85] dark:text-[#AFA1C6] mt-0.5">
                    CHARLENE CALAMBA
                  </span>
                </div>
              )}

              {/* Photo preview upload hover affordance */}
              <label
                htmlFor="hero-portrait-upload"
                title="Preview your photo"
                className="absolute inset-0 bg-black/40 backdrop-blur-xs rounded-full opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300 cursor-pointer z-30"
              >
                <Camera className="w-6 h-6 mb-1" />
                <span className="text-[11px] font-semibold">Preview Photo</span>
                <input
                  id="hero-portrait-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>

              {/* Outer decorative mini satellite chips */}
              <div className="absolute -top-3 -right-3 p-2 bg-white dark:bg-[#201633] rounded-2xl shadow-lg border border-[#E9DEF7] dark:border-[#38264F] text-[#7C3AED] dark:text-[#C4B2FF] animate-star-pulse">
                <Sparkles className="w-5 h-5" />
              </div>

              <div className="absolute -bottom-2 -left-4 px-3 py-1.5 bg-white dark:bg-[#201633] rounded-full shadow-lg border border-[#E9DEF7] dark:border-[#38264F] text-[11px] font-bold text-[#4D347B] dark:text-[#E2D8F0] flex items-center gap-1.5 animate-float-gentle">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>Web Dev &amp; UI/UX</span>
              </div>
            </div>

          </div>

          {/* Expressive Manifesto Message */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-medium text-[#483764] dark:text-[#D5C7EA] leading-relaxed mb-10 italic">
            "{PORTFOLIO_DATA.personal.heroManifesto}"
          </p>

          {/* High-Intent Creative CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              type="button"
              className="group inline-flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#EC4899] hover:opacity-95 rounded-full shadow-lg shadow-[#7C3AED]/25 hover:shadow-xl hover:shadow-[#7C3AED]/35 transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A2F9]"
            >
              <span>Explore My Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold text-[#4D347B] dark:text-[#FAF7FF] bg-white/90 dark:bg-[#201633]/90 hover:bg-[#F3EBFB] dark:hover:bg-[#2B1D45] rounded-full border border-[#E7DCF7] dark:border-[#3D2859] shadow-sm transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A2F9]"
            >
              <span>Let's Connect</span>
              <span className="text-[#9333EA] dark:text-[#C4B2FF]">✦</span>
            </button>
          </div>

        </div>

        {/* Scroll Invitation Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollTo("about")}
            type="button"
            aria-label="Scroll to about section"
            className="group flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7C6B96] dark:text-[#A799BF] hover:text-[#7C3AED] dark:hover:text-white transition-colors"
          >
            <span>Scroll Into My Universe</span>
            <div className="w-8 h-12 rounded-full border-2 border-[#D9C8FF] dark:border-[#4B3469] flex items-start justify-center p-1.5 group-hover:border-[#7C3AED] transition-colors">
              <span className="w-1.5 h-2.5 rounded-full bg-[#7C3AED] dark:bg-[#C4B2FF] animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
