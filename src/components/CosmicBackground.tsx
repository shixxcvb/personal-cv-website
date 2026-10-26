export function CosmicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Editorial Grain Overlay */}
      <div className="absolute inset-0 editorial-grain pointer-events-none" />

      {/* Atmospheric Ambient Lighting Pools */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#E8DEFC]/40 via-[#F5EDFC]/30 to-transparent blur-[120px] dark:from-[#2B1747]/40 dark:via-[#1A0E30]/25 dark:to-transparent animate-ambient-glow" />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#F6DCEB]/35 via-[#E6DCFA]/25 to-transparent blur-[140px] dark:from-[#35153E]/30 dark:via-[#221038]/25 dark:to-transparent animate-ambient-glow" style={{ animationDelay: "-6s" }} />
      <div className="absolute -bottom-40 left-1/4 w-[750px] h-[750px] rounded-full bg-gradient-to-t from-[#EDE4FA]/35 via-[#FCECF7]/25 to-transparent blur-[150px] dark:from-[#1E0D33]/40 dark:to-transparent" />

      {/* Subtle Editorial Coordinate Markers */}
      <div className="hidden lg:block absolute top-28 left-8 text-[10px] font-mono tracking-widest text-[#9A8AA8]/40 dark:text-[#8D7A9E]/30">
        LAT 07°18'N · LON 125°41'E
      </div>

      {/* Hairline Grid Dividers (Subtle, architectural, human-designed) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(157,132,214,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(157,132,214,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
    </div>
  );
}
