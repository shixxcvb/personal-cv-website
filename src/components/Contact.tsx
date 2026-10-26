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
    },
    {
      name: "LinkedIn",
      handle: "Charlene Calamba",
      url: PORTFOLIO_DATA.personal.linkedinUrl,
      icon: Linkedin,
    },
    {
      name: "Facebook",
      handle: "Charlene Calamba",
      url: PORTFOLIO_DATA.personal.facebookUrl,
      icon: Facebook,
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#FAF6FD]/60 dark:bg-[#130B1E]/60 border-t border-[#EDE0FA] dark:border-[#2C1C3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Kicker */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7]">
            <span>08 / Direct Contact</span>
            <span aria-hidden="true" className="text-[#9D84D6]">·</span>
            <span>Open for Opportunities</span>
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1E142B] dark:text-[#F8F5FD] leading-tight mb-6">
            Have an idea?{" "}
            <span className="font-editorial-italic font-normal text-[#7C3AED] dark:text-[#C4B0F7] block sm:inline">
              Let's make something wonderful.
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#55426C] dark:text-[#BFB0D6] leading-relaxed">
            Available for student internships, junior web development opportunities, collaborative software engineering, or a friendly conversation.
          </p>
        </div>

        {/* 3 Core Contact Vessels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Direct Action Card */}
          <div className="p-8 sm:p-9 rounded-2xl bg-white/90 dark:bg-[#1A1028]/90 backdrop-blur-md border border-[#E4D7F5] dark:border-[#382652] shadow-2xs hover:border-[#9D84D6] dark:hover:border-[#7C3AED] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF5FF] dark:bg-[#25153A] text-[#7C3AED] dark:text-[#C4B0F7] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7] block mb-1">
                Direct Email
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1E142B] dark:text-[#F8F5FD] break-all mb-2 font-mono">
                {PORTFOLIO_DATA.personal.email}
              </h3>
              <p className="text-xs text-[#6F5E86] dark:text-[#A798BE] leading-relaxed">
                Send an inquiry regarding projects, opportunities, or questions.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F2E8FA] dark:border-[#2C1B40] flex items-center gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#7C3AED] hover:bg-[#6D28D9] shadow-2xs transition-all active:scale-95"
              >
                <span>Compose Message</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                type="button"
                aria-label="Copy email address"
                className="p-2.5 rounded-xl border border-[#E4D7F5] dark:border-[#382652] text-[#635079] dark:text-[#B6A6CB] hover:bg-[#FAF5FF] dark:hover:bg-[#25153A] transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Telephone Dial Card */}
          <div className="p-8 sm:p-9 rounded-2xl bg-white/90 dark:bg-[#1A1028]/90 backdrop-blur-md border border-[#E4D7F5] dark:border-[#382652] shadow-2xs hover:border-[#9D84D6] dark:hover:border-[#7C3AED] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF5FF] dark:bg-[#25153A] text-[#7C3AED] dark:text-[#C4B0F7] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7] block mb-1">
                Contact Number
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1E142B] dark:text-[#F8F5FD] mb-2 font-mono">
                {PORTFOLIO_DATA.personal.phone}
              </h3>
              <p className="text-xs text-[#6F5E86] dark:text-[#A798BE] leading-relaxed">
                Available for SMS messages and phone calls regarding IT opportunities.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F2E8FA] dark:border-[#2C1B40]">
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#2D1A45] dark:text-[#FAF7FF] bg-[#FAF8FD] dark:bg-[#221435] hover:bg-[#F5EFFC] dark:hover:bg-[#2A1840] border border-[#E4D7F5] dark:border-[#382652] transition-colors active:scale-95"
              >
                <span>Call or SMS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location Plaque */}
          <div className="p-8 sm:p-9 rounded-2xl bg-white/90 dark:bg-[#1A1028]/90 backdrop-blur-md border border-[#E4D7F5] dark:border-[#382652] shadow-2xs hover:border-[#9D84D6] dark:hover:border-[#7C3AED] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF5FF] dark:bg-[#25153A] text-[#7C3AED] dark:text-[#C4B0F7] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C3AED] dark:text-[#C4B0F7] block mb-1">
                Geographic Anchor
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1E142B] dark:text-[#F8F5FD] mb-2">
                {PORTFOLIO_DATA.personal.location}
              </h3>
              <p className="text-xs text-[#6F5E86] dark:text-[#A798BE] leading-relaxed">
                Davao del Norte State College (DNSC) · Davao Region, Philippines
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F2E8FA] dark:border-[#2C1B40] flex items-center justify-between text-xs font-mono text-[#827198] dark:text-[#A494BE]">
              <span>GMT+8 (PST)</span>
              <span className="text-[#10B981]">Active Student</span>
            </div>
          </div>

        </div>

        {/* Social Platforms Row */}
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          {socials.map((s) => {
            const IconComp = s.icon;
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white/90 dark:bg-[#1A1028]/90 border border-[#E4D7F5] dark:border-[#382652] hover:border-[#9D84D6] dark:hover:border-[#7C3AED] shadow-2xs transition-all duration-200 text-xs font-bold text-[#2D1A45] dark:text-[#FAF7FF] group active:scale-95"
              >
                <IconComp className="w-4 h-4 text-[#7C3AED] dark:text-[#C4B0F7]" />
                <span>{s.name} ({s.handle})</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8D7A9E] group-hover:text-[#7C3AED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
