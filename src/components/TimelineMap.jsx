import { useState } from "react";
import { journeyTimeline } from "../data/timeline.js";

export default function TimelineMap() {
  const [activeId, setActiveId] = useState(journeyTimeline[0].id);
  const active = journeyTimeline.find((item) => item.id === activeId) || journeyTimeline[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-forest/10 bg-[#e8f0eb] shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(15,74,63,.25),transparent_28%),radial-gradient(circle_at_20%_55%,rgba(76,139,115,.28),transparent_28%),linear-gradient(135deg,rgba(255,255,255,.95),rgba(220,231,223,.55))]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M82 82 C73 72 67 62 58 58 S40 45 22 56 C28 46 34 38 43 32"
            fill="none"
            stroke="rgba(15,74,63,.35)"
            strokeWidth="0.8"
            strokeDasharray="2 2"
          />
        </svg>
        {journeyTimeline.map((stop, index) => (
          <button
            key={stop.id}
            type="button"
            onClick={() => setActiveId(stop.id)}
            className={`absolute grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 text-xs font-extrabold shadow-lg transition ${
              activeId === stop.id
                ? "border-forest bg-forest text-white scale-110"
                : "border-white bg-white text-forest hover:scale-105"
            }`}
            style={{ left: `${stop.coordinates.x}%`, top: `${stop.coordinates.y}%` }}
            aria-label={`View ${stop.title}`}
          >
            {index + 1}
          </button>
        ))}
        <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-forest shadow-sm">
          Interactive Journey Map
        </div>
      </div>
      <aside className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
        <p className="eyebrow">{active.status}</p>
        <h3 className="mt-3 font-display text-3xl font-bold text-ink">{active.title}</h3>
        <p className="mt-1 text-sm font-bold text-fern">{active.location}</p>
        <p className="mt-5 leading-7 text-ink/70">{active.description}</p>
        <div className="mt-7 space-y-3">
          {journeyTimeline.map((stop) => (
            <button
              key={stop.id}
              type="button"
              onClick={() => setActiveId(stop.id)}
              className={`flex w-full items-center justify-between rounded-md border px-4 py-3 text-left transition ${
                activeId === stop.id
                  ? "border-forest bg-sage text-forest"
                  : "border-forest/10 bg-white text-ink hover:border-fern"
              }`}
            >
              <span className="font-bold">{stop.short}</span>
              <span className="text-xs font-semibold uppercase tracking-wide opacity-70">
                {stop.timeframe}
              </span>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
