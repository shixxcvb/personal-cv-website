export function CosmicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Ambient Gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#B8A2F9]/30 via-[#D9C8FF]/20 to-[#F8C8E8]/25 blur-[120px] dark:from-[#3B1D66]/40 dark:via-[#261545]/30 dark:to-[#4A1942]/20 animate-float-gentle" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#A5B4FC]/25 via-[#F8C8E8]/20 to-[#D9C8FF]/20 blur-[130px] dark:from-[#24174D]/35 dark:via-[#371647]/25 dark:to-[#170E2E]/30 animate-float-gentle" style={{ animationDelay: "-3s" }} />
      <div className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-[#B8A2F9]/20 via-[#FAF5FF]/30 to-[#FCE7F3]/25 blur-[140px] dark:from-[#201338]/30 dark:to-transparent" />

      {/* Floating Whimsical Cosmic SVGs */}
      <svg
        className="absolute top-36 left-[8%] w-8 h-8 text-[#B8A2F9]/60 dark:text-[#C4B2FF]/40 animate-star-pulse"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      <svg
        className="absolute top-1/2 right-[10%] w-10 h-10 text-[#F8C8E8]/70 dark:text-[#F1BCE1]/40 animate-star-pulse"
        style={{ animationDelay: "-2s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      <svg
        className="absolute bottom-48 left-[12%] w-7 h-7 text-[#A5B4FC]/60 dark:text-[#93A5FE]/40 animate-star-pulse"
        style={{ animationDelay: "-4s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      {/* Floating playful ring */}
      <div className="absolute top-[22%] right-[18%] w-12 h-12 rounded-full border-2 border-dashed border-[#B8A2F9]/40 dark:border-[#7C3AED]/30 animate-spin-slow" />
      <div className="absolute bottom-[28%] right-[5%] w-16 h-16 rounded-full border border-[#F8C8E8]/40 dark:border-[#DB2777]/25 animate-float-gentle" />
    </div>
  );
}
