import { ArrowRight, BookOpen, Download, ExternalLink, PlayCircle, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import {
  abundantFreedomFlyer,
  bitcoinGrowthRows,
  comparisonRows,
  familyPrinciples,
  freedomQuickGuides,
  freedomPillars,
  platformGroups,
  readingList,
  stockGrowthRows
} from "../data/freedomWealth.js";

const accentClasses = {
  navy: "bg-[#0d3158] text-white",
  fern: "bg-fern text-white",
  gold: "bg-manuka text-ink",
  teal: "bg-pounamu text-white"
};

const readingByPillar = {
  trading: ["Trading & Mindset", "Personal Finance & Money Mindset"],
  "online-income": ["Passive Income & Online Entrepreneurship", "Personal Finance & Money Mindset"],
  affiliates: ["Passive Income & Online Entrepreneurship", "Personal Finance & Money Mindset"],
  stocks: ["Investing & Long-Term Wealth", "Personal Finance & Money Mindset"],
  bitcoin: ["Bitcoin & Financial Sovereignty", "Personal Finance & Money Mindset"]
};

const guideFallbackByPillar = {
  affiliates: "online-income"
};

function getGuideForPillar(pillarId) {
  const guideId = guideFallbackByPillar[pillarId] || pillarId;
  return freedomQuickGuides.find((guide) => guide.id === guideId);
}

function getReadingForPillar(pillarId) {
  const categories = readingByPillar[pillarId] || [];
  return readingList.filter((category) => categories.includes(category.category));
}

function getRequestedPillarId() {
  if (typeof window === "undefined") return "";
  const query = window.location.hash.split("?")[1] || "";
  const section = new URLSearchParams(query).get("section");
  return freedomPillars.some((pillar) => pillar.id === section) ? section : "";
}

function ReadingCards({ items }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map(({ category, icon: Icon, books }) => (
        <article key={category} className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-sage text-forest">
              <Icon size={22} />
            </span>
            <h3 className="font-display text-xl font-bold text-ink">{category}</h3>
          </div>
          <div className="mt-5 grid gap-3">
            {books.map(([title, author, description]) => (
              <div key={title} className="rounded-lg bg-mist p-4">
                <p className="font-bold text-ink">{title}</p>
                <p className="mt-1 text-xs font-extrabold uppercase tracking-wide text-forest">{author}</p>
                <p className="mt-2 text-sm leading-6 text-ink/70">{description}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-manuka">
                  Affiliate link placeholder
                  <ExternalLink size={13} />
                </span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function FreedomWealth() {
  const [activeId, setActiveId] = useState("");
  const activePillar = freedomPillars.find((pillar) => pillar.id === activeId);
  const activeGuide = activePillar ? getGuideForPillar(activePillar.id) : null;
  const activeReading = activePillar ? getReadingForPillar(activePillar.id) : [];
  const ActiveIcon = activePillar?.icon;

  useEffect(() => {
    const syncRequestedPillar = () => {
      const requestedPillarId = getRequestedPillarId();
      if (requestedPillarId) {
        setActiveId(requestedPillarId);
        window.setTimeout(() => {
          document.getElementById("pillar-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    };

    syncRequestedPillar();
    window.addEventListener("hashchange", syncRequestedPillar);
    return () => window.removeEventListener("hashchange", syncRequestedPillar);
  }, []);

  const choosePillar = (pillarId) => {
    setActiveId(pillarId);
    window.setTimeout(() => {
      document.getElementById("pillar-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden border-b border-forest/10 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(215,168,79,.16),transparent_20rem),radial-gradient(circle_at_82%_30%,rgba(37,97,76,.12),transparent_22rem)]" />
        <div className="container-page relative grid min-h-[560px] items-center gap-10 py-16 lg:grid-cols-[0.47fr_0.53fr]">
          <div className="max-w-2xl">
            <p className="eyebrow text-manuka">Real strategies. Real life. Real freedom.</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
              Freedom & Wealth
            </h1>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-forest sm:text-4xl">
              5 pillars to building financial freedom for your family.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/72">
              Practical ways to create financial independence through structured trading,
              online income, investing, and Bitcoin sovereignty, all grounded in real family life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quick-reference-guides" className="btn-primary">
                Quick Reference Guides
                <BookOpen size={17} />
              </a>
              <a href="#reading-list" className="btn-light">
                Reading List
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-forest/10 bg-forest shadow-editorial">
            <img
              src="/freedom-and-wealth.png"
              alt="Freedom and wealth visual guide"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/24 via-transparent to-ink/36" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-manuka/35 bg-ink/86 p-6 text-sand shadow-editorial backdrop-blur-md sm:left-auto sm:max-w-sm">
              <p className="font-display text-5xl leading-none text-manuka">“</p>
              <p className="mt-1 text-lg font-semibold leading-8">
                You don’t need a lot of money to start. You need the right knowledge,
                structure, and a plan.
              </p>
              <ShieldCheck className="mt-5 text-manuka" size={24} />
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" className="container-page py-16">
        <div className="mb-8 text-center">
          <p className="eyebrow text-forest">The 5 Pillars of Financial Freedom</p>
          <h2 className="mx-auto mt-3 max-w-4xl font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
            Choose the pathway that aligns with your season.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/70">
            Every pillar is a step toward freedom. Start with the one that feels most useful now,
            then come back as your capacity, curiosity, and plans expand.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {freedomPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activeId === pillar.id;
            return (
              <button
                id={pillar.id}
                key={pillar.id}
                type="button"
                onClick={() => choosePillar(pillar.id)}
                className={`group rounded-lg border bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-editorial ${
                  isActive ? "border-manuka ring-2 ring-manuka/30" : "border-forest/10"
                }`}
              >
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-sage">
                  <span className={`grid h-14 w-14 place-items-center rounded-full ${accentClasses[pillar.accent]}`}>
                    <Icon size={28} strokeWidth={1.8} />
                  </span>
                </div>
                <div className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
                  <span className="text-forest/45">—</span> {pillar.number.padStart(2, "0")} <span className="text-forest/45">—</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold leading-tight text-ink">{pillar.title}</h3>
                <p className="mt-3 min-h-28 text-sm leading-6 text-ink/70">{pillar.promise}</p>
                <span className="mt-5 inline-flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-forest">
                  Explore this pillar
                  <ArrowRight size={16} />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {!activePillar ? (
        <section className="container-page pb-16">
          <div className="grid gap-6 lg:grid-cols-[0.51fr_0.49fr]">
            <div className="rounded-lg border border-forest/10 bg-white p-8 shadow-soft">
              <p className="eyebrow text-forest">Practical Takeaways</p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {familyPrinciples.map(({ title, text, icon: Icon }) => (
                  <article key={title} className="border-forest/10 md:border-r md:pr-5 last:border-r-0">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-sage text-forest">
                      <Icon size={23} />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/70">{text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-sage p-4">
                <p className="text-sm font-semibold text-ink/75">
                  Not sure where to begin? Start with one pillar and build momentum from there.
                </p>
                <button type="button" onClick={() => choosePillar("trading")} className="btn-primary">
                  View Getting Started Guide
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-lg bg-forest p-8 text-sand shadow-editorial">
              <img
                src="/freedom-and-wealth.png"
                alt="Family looking toward freedom and wealth"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/70 to-forest/15" />
              <div className="relative max-w-md">
                <p className="font-display text-5xl leading-none text-manuka">“</p>
                <p className="mt-2 font-display text-3xl font-bold leading-tight">
                  Freedom isn’t just about money. It’s about time, choices, and creating a life your family never wants to escape.
                </p>
                <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
                  Live freely. Build wealth. Leave a legacy.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="pillar-detail" className="container-page pb-16">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow text-manuka">Focused Pillar</p>
            <button
              type="button"
              onClick={() => setActiveId("")}
              className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-forest shadow-sm transition hover:border-manuka hover:text-ink"
            >
              View all pillars
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-editorial">
            <div className="grid gap-0 lg:grid-cols-[0.48fr_0.52fr]">
              <div className="p-8 lg:p-10">
                <span className={`grid h-14 w-14 place-items-center rounded-full ${accentClasses[activePillar.accent]}`}>
                  {ActiveIcon ? <ActiveIcon size={28} /> : null}
                </span>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
                  Freedom through focused action
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
                  {activePillar.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-ink/72">{activePillar.description}</p>

                <div className="mt-8 grid gap-3">
                  {activePillar.highlights.map((item) => (
                    <div key={item} className="flex gap-3 rounded-lg bg-sage/70 p-4">
                      <ShieldCheck className="mt-0.5 shrink-0 text-forest" size={18} />
                      <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sage p-6 lg:p-8">
                {activeGuide ? (
                  <div className="overflow-hidden rounded-lg border border-manuka/30 bg-white shadow-soft">
                    <img
                      src={activeGuide.image}
                      alt={`${activeGuide.title} quick reference guide`}
                      className="max-h-[680px] w-full object-contain object-top"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-forest/10 bg-white p-4">
                      <div>
                        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-forest">
                          Quick Reference Guide
                        </p>
                        <p className="mt-1 text-sm text-ink/68">{activeGuide.description}</p>
                      </div>
                      <a href={activeGuide.pdf} download className="btn-light">
                        Download PDF
                        <Download size={16} />
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div id="reading-list" className="mt-10">
            <div className="mb-6 max-w-3xl">
              <p className="eyebrow text-manuka">Reading List</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink">
                Books and resources for {activePillar.shortTitle.toLowerCase()}.
              </h2>
            </div>
            <ReadingCards items={activeReading} />
          </div>
        </section>
      )}

      {!activePillar ? (
        <>
      <section id="quick-reference-guides" className="container-page pb-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="eyebrow text-manuka">Quick Reference Guides</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">
              Save the practical guides for the pillar you are working on.
            </h2>
          </div>
          <a href={abundantFreedomFlyer.pdf} download className="btn-primary">
            Download Abundant Freedom Flyer
            <Download size={17} />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {freedomQuickGuides.map((guide) => (
            <article key={guide.title} className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft">
              <img
                src={guide.image}
                alt={`${guide.title} visual quick reference guide`}
                className="h-56 w-full object-cover object-top"
              />
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-ink">{guide.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-ink/70">{guide.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => choosePillar(guide.id)}
                      className="rounded-full bg-sage px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-forest"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => choosePillar(guide.id)}
                    className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-ink"
                  >
                    View Section
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href={guide.pdf}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-forest/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-forest transition hover:border-manuka hover:text-ink"
                  >
                    PDF
                    <Download size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-forest/10 bg-white py-14">
        <div className="container-page">
          <div className="mb-8 text-center">
            <p className="eyebrow text-manuka">Tools & Platforms We Recommend</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">
              Trusted tools for each pillar.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {platformGroups.map(({ title, icon: Icon, items }) => (
              <article key={title} className="rounded-lg border border-forest/10 bg-mist p-6 shadow-sm">
                <Icon className="text-forest" size={32} />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/72">
                  {items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-forest">
                  View Details
                  <ExternalLink size={14} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-8 lg:grid-cols-[0.54fr_0.46fr]">
          <div>
            <p className="eyebrow text-forest">Quick Comparison</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">Pick the path that suits your capacity.</h2>
            <div className="mt-6 overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-sage text-xs uppercase tracking-wide text-forest">
                    <tr>
                      {["Pillar", "Time", "Capital", "Income Potential", "Best For"].map((heading) => (
                        <th key={heading} className="px-4 py-3 font-extrabold">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-forest/10">
                    {comparisonRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell} className="px-4 py-4 text-ink/74">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {familyPrinciples.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-forest/10 bg-white p-5 shadow-sm">
                <Icon className="text-manuka" size={26} />
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-14 text-white">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-manuka">Compounding Examples</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-sand">Small habits can become serious options.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
              These examples are illustrative, not promises. Markets vary year to year, but the tables show why consistent contributions can matter.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg border border-white/10 bg-white/8 p-5">
              <h3 className="font-display text-xl font-bold text-sand">Stocks example: $100 per week at 8% average return</h3>
              <div className="mt-4 grid gap-2">
                {stockGrowthRows.map(([time, contributed, value]) => (
                  <div key={time} className="grid grid-cols-3 rounded-lg bg-white/8 px-4 py-3 text-sm">
                    <span>{time}</span>
                    <span>{contributed}</span>
                    <span className="font-bold text-manuka">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/8 p-5">
              <h3 className="font-display text-xl font-bold text-sand">Bitcoin example: weekly contributions</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[520px] text-sm">
                  <thead className="text-left text-manuka">
                    <tr>
                      {["Time", "$50/wk", "$100/wk", "$150/wk"].map((heading) => (
                        <th key={heading} className="pb-3 font-extrabold">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {bitcoinGrowthRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell} className="py-3 text-white/78">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reading-list" className="container-page py-14">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow text-manuka">Reading List</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">Books for financial confidence.</h2>
          <p className="mt-4 text-base leading-7 text-ink/72">
            While these books are widely available online, we love supporting small, locally owned bookstores.
            Buying from a local shop helps keep money in your community and supports thoughtful curation.
            When possible, visit your neighborhood bookstore or a local global indie bookshop to pick up these titles.
          </p>
        </div>
        <ReadingCards items={readingList} />
      </section>
        </>
      ) : null}

      <section id="newsletter" className="border-t border-forest/10 bg-white py-14">
        <div className="container-page grid gap-6 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <div>
            <p className="eyebrow text-forest">Abundant Freedom</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">
              Learn the strategies without losing sight of the life they are meant to support.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/72">
              Join the list for updates, future tools, course resources, and family-first finance guides.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-forest/10 bg-mist shadow-soft">
              <img
                src={abundantFreedomFlyer.image}
                alt="Abundant Freedom flyer"
                className="max-h-[520px] w-full object-contain object-top"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-forest/10 bg-white p-4">
                <p className="text-sm font-semibold text-ink/74">{abundantFreedomFlyer.subtitle}</p>
                <a href={abundantFreedomFlyer.pdf} download className="btn-light">
                  Download Flyer
                  <Download size={16} />
                </a>
              </div>
            </div>
          </div>
          <form className="rounded-lg border border-forest/10 bg-sage p-5 shadow-soft">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                placeholder="Your email address"
                className="min-h-12 rounded-lg border border-forest/10 bg-white px-4 text-sm outline-none ring-forest/20 transition focus:ring-4"
              />
              <button type="button" className="btn-primary">
                Join the Community
                <PlayCircle size={17} />
              </button>
            </div>
            <p className="mt-3 text-xs leading-5 text-ink/60">
              Newsletter integration ready. This form can connect to your email platform when chosen.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
