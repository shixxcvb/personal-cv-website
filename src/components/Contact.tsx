import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  ArrowUpRight,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    {
      name: "GitHub",
      handle: "@shixxcvb",
      url: PORTFOLIO_DATA.personal.githubUrl,
      icon: Github,
      accent: "#7C3AED",
    },
    {
      name: "LinkedIn",
      handle: "Charlene Calamba",
      url: PORTFOLIO_DATA.personal.linkedinUrl,
      icon: Linkedin,
      accent: "#0A66C2",
    },
    {
      name: "Facebook",
      handle: "Charlene Calamba",
      url: PORTFOLIO_DATA.personal.facebookUrl,
      icon: Facebook,
      accent: "#1877F2",
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#FAF6FD]/60 dark:bg-[#160F24]/60 border-t border-[#EDE0FA] dark:border-[#2C1F3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Expressive Contact Centerpiece */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B2FF] mb-4">
            <Sparkles className="w-4 h-4 text-[#9333EA] dark:text-[#F1BCE1] animate-spin-slow" />
            <span>06</span>
            <span aria-hidden="true">✦</span>
            <span>Let's Connect</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#261D39] dark:text-[#FAF7FF] leading-tight mb-6">
            Have an idea?{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] via-[#C026D3] to-[#EC4899] bg-clip-text text-transparent">
              Let's make something wonderful.
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#5B4973] dark:text-[#C2B4D6] leading-relaxed">
            Whether it's an academic collaboration, a frontend challenge, an internship opportunity, or a friendly hello.
          </p>
        </div>

        {/* 3 Core Interactive Contact Vessels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Direct Action Card */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#1E152E] border border-[#E9DDF7] dark:border-[#38264F] shadow-xs hover:border-[#B8A2F9] dark:hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F5EEFD] dark:bg-[#2B1B43] text-[#7C3AED] dark:text-[#C4B2FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B2FF] block mb-1">
                Email
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#261D39] dark:text-[#FAF7FF] break-all mb-2 font-mono">
                {PORTFOLIO_DATA.personal.email}
              </h3>
              <p className="text-xs text-[#71618B] dark:text-[#A798BF] leading-relaxed">
                Direct inquiry for academic projects, internships, or collaboration.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F2E8FA] dark:border-[#2F1F46] flex items-center gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-black text-white bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:opacity-95 shadow-sm transition-all"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                type="button"
                aria-label="Copy email address"
                className="p-3 rounded-full border border-[#ECE0FA] dark:border-[#3A2D50] text-[#6A5B83] dark:text-[#B1A3C6] hover:bg-[#F4EDFC] dark:hover:bg-[#2D2241] transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Phone Direct Action Card */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#1E152E] border border-[#E9DDF7] dark:border-[#38264F] shadow-xs hover:border-[#B8A2F9] dark:hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F5EEFD] dark:bg-[#2B1B43] text-[#7C3AED] dark:text-[#C4B2FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B2FF] block mb-1">
                Direct Line
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#261D39] dark:text-[#FAF7FF] mb-2 font-mono">
                {PORTFOLIO_DATA.personal.phone}
              </h3>
              <p className="text-xs text-[#71618B] dark:text-[#A798BF] leading-relaxed">
                Available for SMS messages and calls regarding software discussions.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F2E8FA] dark:border-[#2F1F46]">
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-black text-[#4D347B] dark:text-[#FAF7FF] bg-[#FAF7FD] dark:bg-[#291B41] hover:bg-[#F2E8FA] dark:hover:bg-[#342252] border border-[#ECE0FA] dark:border-[#3A2D50] transition-colors"
              >
                <span>Call or SMS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#1E152E] border border-[#E9DDF7] dark:border-[#38264F] shadow-xs hover:border-[#B8A2F9] dark:hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F5EEFD] dark:bg-[#2B1B43] text-[#7C3AED] dark:text-[#C4B2FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B2FF] block mb-1">
                Base
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#261D39] dark:text-[#FAF7FF] mb-2">
                {PORTFOLIO_DATA.personal.location}
              </h3>
              <p className="text-xs text-[#71618B] dark:text-[#A798BF] leading-relaxed">
                Davao del Norte State College (DNSC) · Davao Region, Philippines
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F2E8FA] dark:border-[#2F1F46] flex items-center justify-between text-xs text-[#7F6F96] dark:text-[#A292BD]">
              <span>Timezone: GMT+8</span>
              <span className="font-bold text-[#7C3AED] dark:text-[#C4B2FF]">DNSC Student</span>
            </div>
          </div>

        </div>

        {/* Social Platforms Row */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {socials.map((s) => {
              const IconComp = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white dark:bg-[#1E152E] border border-[#E9DDF7] dark:border-[#38264F] hover:border-[#B8A2F9] dark:hover:border-[#7C3AED] shadow-2xs hover:shadow-md transition-all duration-200 text-xs font-bold text-[#35254E] dark:text-[#FAF7FF] group"
                >
                  <IconComp className="w-4 h-4 text-[#7C3AED] dark:text-[#C4B2FF]" />
                  <span>{s.name} ({s.handle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9D8CB7] group-hover:text-[#7C3AED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
