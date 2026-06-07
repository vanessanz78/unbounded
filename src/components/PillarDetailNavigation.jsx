import { Grid3X3 } from "lucide-react";

function formatNumber(number) {
  if (!number) return "";
  const value = String(number).trim();
  return value.length === 1 ? value.padStart(2, "0") : value;
}

function pillarLabel(pillar) {
  const number = formatNumber(pillar.number);
  const title = pillar.navTitle || pillar.shortTitle || pillar.title;
  return number ? `${number} ${title}` : title;
}

export default function PillarDetailNavigation({ pillars, activeId, onSelect, onCollapse, className = "", contained = true }) {
  const activeIndex = pillars.findIndex((pillar) => pillar.id === activeId);

  if (activeIndex < 0 || pillars.length < 2) return null;

  const previous = pillars[(activeIndex - 1 + pillars.length) % pillars.length];
  const next = pillars[(activeIndex + 1) % pillars.length];

  return (
    <section className={`${contained ? "container-page " : ""}${className}`}>
      <div className="grid gap-4 border-t border-forest/10 pt-8 sm:grid-cols-3 sm:items-center">
        <button
          type="button"
          onClick={() => onSelect(previous.id)}
          className="rounded-lg px-2 py-3 text-left transition hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-fern focus:ring-offset-2"
        >
          <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-ink/48">
            Previous Pillar
          </span>
          <span className="mt-1 block text-sm font-extrabold uppercase tracking-wide text-forest sm:text-base">
            {pillarLabel(previous)}
          </span>
        </button>

        <button
          type="button"
          onClick={onCollapse}
          className="btn-light mx-auto w-full max-w-sm justify-center rounded-full px-8 py-4 text-base shadow-soft"
        >
          <Grid3X3 size={18} />
          Collapse Details
        </button>

        <button
          type="button"
          onClick={() => onSelect(next.id)}
          className="rounded-lg px-2 py-3 text-left transition hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-fern focus:ring-offset-2 sm:text-right"
        >
          <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-ink/48">
            Next Pillar
          </span>
          <span className="mt-1 block text-sm font-extrabold uppercase tracking-wide text-forest sm:text-base">
            {pillarLabel(next)}
          </span>
        </button>
      </div>
    </section>
  );
}
