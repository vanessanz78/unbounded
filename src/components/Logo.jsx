export default function Logo({ showFamily = true, variant = "light", compact = false }) {
  const isDark = variant === "dark";
  const goldText =
    "bg-gradient-to-br from-[#fff1a8] via-[#d7a84f] to-[#9d651e] bg-clip-text text-transparent drop-shadow-[0_2px_3px_rgba(0,0,0,.35)]";
  const wordSize = compact
    ? "text-[1.35rem] sm:text-[1.55rem] lg:text-[1.45rem] xl:text-[1.6rem]"
    : "text-[2rem] sm:text-[2.8rem] lg:text-[2.35rem] xl:text-[2.8rem]";
  const markSize = compact
    ? "-mx-0.5 h-7 w-7 sm:h-8 sm:w-8 lg:h-8 lg:w-8 xl:h-9 xl:w-9"
    : "-mx-1 h-12 w-12 sm:h-16 sm:w-16 lg:h-14 lg:w-14 xl:h-16 xl:w-16";

  return (
    <a
      href="#/"
      className="group block shrink-0"
      aria-label="The Unbordered Family home"
    >
      <div className="flex items-center leading-none">
        <span className={`font-display uppercase tracking-[0.045em] ${wordSize} ${goldText}`}>
          UNB
        </span>
        <img
          src="/unbordered-attached-element-transparent.png"
          alt=""
          aria-hidden="true"
          className={`${markSize} object-contain`}
        />
        <span className={`font-display uppercase tracking-[0.045em] ${wordSize} ${goldText}`}>
          RDERED
        </span>
      </div>
      {showFamily && (
        <div className="mt-0.5 flex items-center justify-center gap-3 text-manuka">
          <span className="h-px w-14 bg-manuka/65" />
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.55em]">Family</span>
          <span className="h-px w-14 bg-manuka/65" />
        </div>
      )}
    </a>
  );
}
