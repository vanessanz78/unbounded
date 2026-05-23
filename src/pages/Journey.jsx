import { ArrowRight, Map, MapPin } from "lucide-react";
import { useState } from "react";
import { journeyTimeline } from "../data/timeline.js";

const stopVisuals = {
  nz: {
    image: "/nz-header-pano.jpg",
    mapImage: "/pataua-log.png"
  },
  bali: {
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    mapImage: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=300&q=80"
  },
  fiji: {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    mapImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80"
  },
  panama: {
    image: "/panama-city-skyline.jpg",
    mapImage: "/panama-city-skyline.jpg"
  },
  future: {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    mapImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&q=80"
  }
};

export default function Journey() {
  const [activeId, setActiveId] = useState(journeyTimeline[0].id);

  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden border-b border-forest/10 bg-mist">
        <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_28%_18%,rgba(215,168,79,.18),transparent_18rem),radial-gradient(circle_at_72%_36%,rgba(47,128,104,.18),transparent_20rem)]" />
        <div className="container-page relative grid gap-10 py-14 lg:grid-cols-[0.34fr_0.39fr_0.27fr] lg:items-center">
          <div>
            <p className="eyebrow text-forest">Our Journey</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              From New Zealand to Bali, Fiji, Panama, and future countries.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/72">
              This is the living map of our family’s next chapter: part plan, part experiment,
              part invitation to keep listening for the right door.
            </p>
            <a href="#journey-chapters" className="btn-primary mt-8">
              Explore the Map
              <MapPin size={17} />
            </a>
          </div>

          <div className="relative min-h-[470px] overflow-hidden rounded-lg border border-forest/10 bg-[#eef3ed] shadow-editorial">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=70')] bg-cover bg-center opacity-32 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,.78),transparent_17rem),radial-gradient(circle_at_82%_76%,rgba(215,168,79,.18),transparent_16rem),linear-gradient(135deg,rgba(255,255,255,.82),rgba(220,233,225,.5))]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M83 80 C80 70 76 64 74 58 C70 54 66 52 62 52 C52 54 38 60 24 57 C24 42 29 30 34 22"
                fill="none"
                stroke="rgba(7,63,55,.58)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.9"
                strokeDasharray="2.2 2.2"
              />
              <path d="M76 69 l5 4 -6 2 2 -3 -1 -3Z" fill="rgba(7,63,55,.7)" />
              <path d="M45 56 l5 -1 -3 4 -1 -2 -1 -1Z" fill="rgba(7,63,55,.7)" />
              <path d="M28 42 l4 -4 -1 6 -1 -2 -2 0Z" fill="rgba(7,63,55,.7)" />
            </svg>
            {journeyTimeline.map((stop, index) => (
              <div
                key={stop.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${stop.coordinates.x}%`, top: `${stop.coordinates.y}%` }}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(stop.id)}
                  className={`group grid h-14 w-14 place-items-center rounded-full border-[3px] bg-cover bg-center shadow-soft transition hover:scale-105 ${
                    activeId === stop.id ? "border-manuka scale-110" : "border-white"
                  }`}
                  style={{ backgroundImage: `url('${stopVisuals[stop.id].mapImage}')` }}
                  aria-label={`View ${stop.title}`}
                >
                  <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold shadow-sm ${
                    activeId === stop.id ? "bg-manuka text-white" : "bg-forest text-white"
                  }`}>
                    {index + 1}
                  </span>
                </button>
                <div className="pointer-events-none absolute left-1/2 top-16 w-36 -translate-x-1/2 text-center">
                  <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.15em] text-forest">
                    {stop.short}
                  </p>
                  <p className="mt-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-ink/58">
                    {stop.status}
                  </p>
                </div>
              </div>
            ))}
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/70 bg-white/72 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-forest shadow-soft backdrop-blur">
              A living route from Aotearoa through the Pacific, toward Panama and the open map beyond.
            </div>
          </div>

          <aside className="rounded-lg border border-forest/10 bg-white/90 p-6 shadow-soft backdrop-blur">
            <p className="eyebrow text-forest">Journey Stops</p>
            <div className="mt-5 divide-y divide-forest/10">
              {journeyTimeline.map((stop, index) => {
                const visual = stopVisuals[stop.id];
                const isActive = activeId === stop.id;
                return (
                  <button
                    key={stop.id}
                    type="button"
                    onClick={() => setActiveId(stop.id)}
                    className="grid w-full grid-cols-[3rem_1.75rem_minmax(0,1fr)] items-center gap-3 py-4 text-left"
                  >
                    <span
                      className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${visual.mapImage}')` }}
                      aria-hidden="true"
                    />
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${isActive ? "bg-manuka text-white" : "bg-forest text-white"}`}>
                      {index + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-lg font-bold leading-tight text-ink">{stop.title}</span>
                      <span className="mt-1 block text-[0.62rem] font-extrabold uppercase tracking-wide text-forest">
                        {stop.status}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <a href="#journey-chapters" className="btn-light mt-4 w-full justify-center">
              <Map size={17} />
              View Full Journey Map
            </a>
          </aside>
        </div>
      </section>

      <section id="journey-chapters" className="container-page py-14">
        <div className="mb-7 flex items-center gap-5 text-center">
          <span className="h-px flex-1 bg-forest/14" />
          <p className="eyebrow text-ink">Explore Each Chapter</p>
          <span className="h-px flex-1 bg-forest/14" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {journeyTimeline.map((stop, index) => {
            const visual = stopVisuals[stop.id];
            return (
              <article
                key={stop.id}
                className="group overflow-hidden rounded-lg border border-white/70 bg-forest shadow-soft transition hover:-translate-y-1 hover:shadow-editorial"
              >
                <div
                  className="relative min-h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url('${visual.image}')` }}
                  role="img"
                  aria-label={`${stop.title} landscape`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-transparent" />
                  <span className={`absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full border-2 border-white text-sm font-extrabold text-white shadow-soft ${index === journeyTimeline.length - 1 ? "bg-manuka" : "bg-forest"}`}>
                    {index + 1}
                  </span>
                </div>
                <div className="bg-gradient-to-b from-forest to-ink p-5 text-white">
                  <h2 className="font-display text-2xl font-bold text-sand">{stop.title}</h2>
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                    {stop.status}
                  </p>
                  <p className="mt-4 min-h-24 text-sm leading-6 text-white/82">{stop.description}</p>
                  <button
                    type="button"
                    onClick={() => setActiveId(stop.id)}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-sand transition group-hover:text-manuka"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
