interface MarqueeBannerProps {
  text?: string[];
  className?: string;
  speed?: "normal" | "slow";
}

export function MarqueeBanner({
  text = [
    "TURNING CURIOSITY INTO CODE",
    "CHARLENE CALAMBA",
    "FRONTEND DEVELOPER & IT STUDENT",
    "DAVAO DEL NORTE STATE COLLEGE",
    "BSIT 4B",
    "4 DEPLOYED WEB APPLICATIONS",
    "CREATIVE DIGITAL EXPERIENCES",
  ],
  className = "",
}: MarqueeBannerProps) {
  const items = [...text, ...text];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 bg-gradient-to-r from-[#FAF5FF] via-[#F3E8FF] to-[#FAF5FF] dark:from-[#1D142C] dark:via-[#241738] dark:to-[#1D142C] border-y border-[#E9DEF7] dark:border-[#38274F] select-none ${className}`}
    >
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
            <span className="text-[#5B3E8C] dark:text-[#D4C3EC]">{item}</span>
            <span className="text-[#B8A2F9] dark:text-[#A855F7] text-base">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
