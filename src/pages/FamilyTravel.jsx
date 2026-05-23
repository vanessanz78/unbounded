import {
  ArrowRight,
  BookOpen,
  Compass,
  Download,
  ExternalLink,
  GraduationCap,
  Heart,
  LineChart,
  Plane,
  ShieldCheck,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";
import { dailyWorldschooling, familyTravelGuides, relocationCostRows } from "../data/familyTravel.js";
import { abundantFreedomFlyer } from "../data/freedomWealth.js";

const guideTheme = {
  worldschooling: {
    eyebrow: "Worldschooling & Education",
    headline: "Raise curious humans. Learn through the world.",
    image: "/worldschooling-guide.png",
    quote: "Children remember experiences longer than worksheets.",
    icon: GraduationCap
  },
  relocation: {
    eyebrow: "Relocation Guide for Families",
    headline: "Bali & Panama. Two destinations. One mission.",
    image: "/relocation-guide.png",
    quote: "Freedom to live, learn, work, and build wealth anywhere.",
    icon: Plane
  },
  "global-lifestyle": {
    eyebrow: "Global Lifestyle",
    headline: "Live beyond borders. Stay connected to what matters.",
    image: "/global-lifestyle-guide.png",
    quote: "We are not just travelling. We are designing how our family learns, lives, connects, and grows.",
    icon: Compass
  }
};

const principles = [
  {
    title: "Live Anywhere",
    text: "Create the freedom to live and travel on your terms.",
    icon: Compass
  },
  {
    title: "Grow Together",
    text: "Build strong connections through shared experiences.",
    icon: Users
  },
  {
    title: "Learn Beyond Borders",
    text: "Real-world learning that prepares children for life.",
    icon: BookOpen
  },
  {
    title: "Build a Legacy",
    text: "Create memories, freedom, and opportunities for generations.",
    icon: Heart
  }
];

function getRequestedGuideId() {
  if (typeof window === "undefined") return "";
  const query = window.location.hash.split("?")[1] || "";
  const section = new URLSearchParams(query).get("section");
  return familyTravelGuides.some((guide) => guide.id === section) ? section : "";
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const tagTargets = {
  worldschooling: {
    "Real experiences": "learning-on-the-go",
    "Global awareness": "what-is-worldschooling",
    "Lifelong skills": "tools-that-support-the-journey",
    "Family connection": "what-is-worldschooling"
  },
  relocation: {
    Bali: "bali-indonesia",
    Panama: "panama",
    "Visa planning": "planning-essentials",
    "Cost comparison": "family-cost-comparison"
  },
  "global-lifestyle": {
    "Lifestyle design": "principles-of-a-global-lifestyle",
    "Choosing bases": "choosing-your-bases",
    Community: "education-on-the-move",
    "Financial planning": "practical-daily-life"
  }
};

function scrollToFamilyDetail(sectionId = "family-travel-detail") {
  window.setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 70);
}

function GuideCard({ guide, onChoose }) {
  const Icon = guide.icon;

  return (
    <article className="group overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-editorial">
      <button
        type="button"
        onClick={() => onChoose(guide.id)}
        className="block w-full text-left"
        aria-label={`Open ${guide.title}`}
      >
        <div
          className="relative min-h-56 bg-cover bg-center"
          style={{ backgroundImage: `url('${guide.image}')` }}
          role="img"
          aria-label={`${guide.title} visual guide`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ink/62 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-forest text-white shadow-soft">
            <Icon size={23} />
          </span>
        </div>
      </button>
      <div className="p-6">
        <button type="button" onClick={() => onChoose(guide.id)} className="text-left">
          <h3 className="font-display text-2xl font-bold text-ink">{guide.title}</h3>
          <p className="mt-3 min-h-24 text-sm leading-6 text-ink/70">{guide.subtitle}</p>
        </button>
        <div className="mt-4 flex flex-wrap gap-2">
          {guide.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onChoose(guide.id, tagTargets[guide.id]?.[tag]);
              }}
              className="rounded-full bg-sage px-3 py-1 text-[0.7rem] font-bold text-forest transition hover:bg-manuka hover:text-ink"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => onChoose(guide.id)} className="btn-light">
            View Guide
            <ArrowRight size={16} />
          </button>
          <a href={guide.pdf} download className="btn-primary">
            PDF
            <Download size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ReadingList({ guides }) {
  return (
    <section id="family-travel-reading" className="container-page pb-16">
      <div className="rounded-lg border border-forest/10 bg-white p-8 shadow-soft">
        <div className="mb-7 text-center">
          <p className="eyebrow text-manuka">Reading & Tools</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">Recommended resources for family freedom.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.id} className="rounded-lg bg-mist p-5">
              <h3 className="font-display text-xl font-bold text-ink">{guide.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-ink/72">
                {guide.reading.map((item) => (
                  <li key={item} className="flex gap-3">
                    <BookOpen className="mt-0.5 shrink-0 text-forest" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FamilyTravel() {
  const [activeId, setActiveId] = useState("");
  const activeGuide = familyTravelGuides.find((guide) => guide.id === activeId);
  const ActiveIcon = activeGuide?.icon;
  const activeTheme = activeGuide ? guideTheme[activeGuide.id] : null;

  useEffect(() => {
    const syncRequestedGuide = () => {
      const requestedGuideId = getRequestedGuideId();
      if (requestedGuideId) {
        setActiveId(requestedGuideId);
        scrollToFamilyDetail();
      }
    };

    syncRequestedGuide();
    window.addEventListener("hashchange", syncRequestedGuide);
    return () => window.removeEventListener("hashchange", syncRequestedGuide);
  }, []);

  const chooseGuide = (guideId, sectionSlug = "") => {
    setActiveId(guideId);
    scrollToFamilyDetail(sectionSlug ? `${guideId}-${sectionSlug}` : "family-travel-detail");
  };

  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-72"
          style={{ backgroundImage: "url('/family-and-travel.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/18" />
        <div className="container-page relative grid min-h-[620px] items-center py-16 lg:grid-cols-[0.52fr_0.48fr]">
          <div className="max-w-3xl">
            <p className="eyebrow text-manuka">Family & Travel</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-sand sm:text-7xl">
              Raise globally. Stay rooted. Learn everywhere.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sand/84">
              A practical family guide to worldschooling, relocation, and global lifestyle design,
              built around freedom, connection, education, and real-world experience.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {familyTravelGuides.map((guide) => {
                const Icon = guide.icon;
                return (
                  <button
                    key={guide.id}
                    type="button"
                    onClick={() => chooseGuide(guide.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-manuka/45 bg-white/8 px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-sand backdrop-blur transition hover:bg-manuka hover:text-ink"
                  >
                    <Icon size={16} />
                    {guide.title}
                  </button>
                );
              })}
              <a
                href="#quick-guides"
                className="inline-flex items-center gap-2 rounded-full border border-manuka/45 bg-white/8 px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-sand backdrop-blur transition hover:bg-manuka hover:text-ink"
              >
                <Download size={16} />
                Downloads
              </a>
              <a
                href="#family-travel-reading"
                className="inline-flex items-center gap-2 rounded-full border border-manuka/45 bg-white/8 px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-sand backdrop-blur transition hover:bg-manuka hover:text-ink"
              >
                <BookOpen size={16} />
                Reading
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="family-travel-hub" className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <p className="eyebrow text-manuka">Practical guides for families</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Live beyond borders. Stay connected to what matters.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/72">
              This is the family side of the unbordered life: learning through the world,
              choosing bases with intention, and creating a lifestyle where children stay
              grounded while their perspective expands.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button type="button" onClick={() => chooseGuide("relocation")} className="btn-primary">
                Compare Bali & Panama
                <Plane size={17} />
              </button>
              <button type="button" onClick={() => chooseGuide("worldschooling")} className="btn-light">
                Start Worldschooling
                <GraduationCap size={17} />
              </button>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-forest/10 bg-forest shadow-editorial">
            <img
              src="/family-and-travel.png"
              alt="Family walking through a tropical landscape"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/16 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 max-w-lg rounded-lg border border-manuka/35 bg-ink/82 p-6 text-sand backdrop-blur">
              <p className="font-display text-4xl leading-none text-manuka">“</p>
              <p className="mt-1 text-lg font-semibold leading-8">
                We are not just travelling. We are intentionally redesigning how our family learns,
                lives, connects, and grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-guides" className="container-page pb-16">
        <div className="mb-8 text-center">
          <p className="eyebrow text-forest">Practical Guides & Resources for Families</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Choose the chapter that matches your next family decision.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {familyTravelGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} onChoose={chooseGuide} />
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-4 rounded-lg border border-forest/10 bg-white p-6 shadow-soft md:grid-cols-2 xl:grid-cols-4">
          {principles.map(({ title, text, icon: Icon }) => (
            <article key={title} className="border-forest/10 xl:border-r xl:pr-5 last:border-r-0">
              <Icon className="text-forest" size={32} strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {activeGuide ? (
        <section id="family-travel-detail" className="container-page pb-16">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow text-manuka">Focused Guide</p>
            <button
              type="button"
              onClick={() => setActiveId("")}
              className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-forest shadow-sm transition hover:border-manuka hover:text-ink"
            >
              View all family guides
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-editorial">
            <div className="grid gap-0 lg:grid-cols-[0.48fr_0.52fr]">
              <div className="p-8 lg:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-forest text-white">
                  {ActiveIcon ? <ActiveIcon size={28} /> : null}
                </span>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
                  {activeTheme?.eyebrow || activeGuide.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
                  {activeTheme?.headline || activeGuide.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-ink/72">{activeGuide.subtitle}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {activeGuide.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => scrollToFamilyDetail(`${activeGuide.id}-${tagTargets[activeGuide.id]?.[tag] || slugify(tag)}`)}
                      className="rounded-full bg-sage px-3 py-1 text-[0.72rem] font-bold text-forest transition hover:bg-manuka hover:text-ink"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[420px] overflow-hidden bg-forest">
                <img
                  src={activeTheme?.image || activeGuide.image}
                  alt={`${activeGuide.title} visual reference`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-manuka/35 bg-ink/84 p-5 text-sand backdrop-blur">
                  <p className="font-display text-4xl leading-none text-manuka">“</p>
                  <p className="mt-1 text-lg font-semibold leading-8">{activeTheme?.quote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {activeGuide.pillars.map(({ title, text, icon: PillarIcon }) => (
              <article key={title} className="rounded-lg border border-forest/10 bg-white p-5 shadow-sm">
                <PillarIcon className="text-forest" size={28} />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {activeGuide.sections.map(({ title, text }) => (
              <article
                key={title}
                id={`${activeGuide.id}-${slugify(title)}`}
                className="scroll-mt-32 rounded-lg border border-forest/10 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-ink/70">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.55fr_0.45fr]">
            <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-ink">Tips for families</h3>
              <div className="mt-5 grid gap-3">
                {activeGuide.tips.map((tip) => (
                  <div key={tip} className="rounded-lg bg-sage px-4 py-3 text-sm font-semibold leading-6 text-ink/76">
                    {tip}
                  </div>
                ))}
              </div>
            </div>
            <div id="family-travel-reading" className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-ink">Reading for {activeGuide.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/72">
                {activeGuide.reading.map((item) => (
                  <li key={item} className="flex gap-3">
                    <BookOpen className="mt-0.5 shrink-0 text-forest" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
              <div className="p-8">
                <p className="eyebrow text-manuka">Quick Reference Guide</p>
                <h3 className="mt-3 font-display text-3xl font-bold text-ink">
                  Download the {activeGuide.title} visual guide.
                </h3>
                <p className="mt-4 leading-7 text-ink/70">
                  Keep this as a simple planning reference when you are comparing options,
                  discussing next steps, or building your own family travel rhythm.
                </p>
                <a href={activeGuide.pdf} download className="btn-primary mt-7">
                  Download PDF
                  <Download size={17} />
                </a>
              </div>
              <img
                src={activeGuide.image}
                alt={`${activeGuide.title} quick reference guide`}
                className="max-h-[620px] w-full object-contain object-top bg-sage"
              />
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="container-page pb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
                <p className="eyebrow text-forest">A day in our worldschooling life</p>
                <div className="mt-6 space-y-4">
                  {dailyWorldschooling.map(([title, text]) => (
                    <div key={title} className="grid gap-3 rounded-lg bg-sage p-4 sm:grid-cols-[9rem_1fr]">
                      <p className="font-display text-lg font-bold text-ink">{title}</p>
                      <p className="text-sm leading-6 text-ink/70">{text}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
                <p className="eyebrow text-forest">Bali & Panama planning snapshot</p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[680px] text-left text-sm">
                    <thead className="bg-sage text-xs uppercase tracking-wide text-forest">
                      <tr>
                        {["Category", "New Zealand", "Bali", "Panama"].map((heading) => (
                          <th key={heading} className="px-4 py-3 font-extrabold">
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-forest/10">
                      {relocationCostRows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell) => (
                            <td key={cell} className="px-4 py-4 text-ink/72">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            </div>
          </section>

          <ReadingList guides={familyTravelGuides} />
        </>
      )}

      <section className="bg-ink py-16 text-white">
        <div className="container-page">
          <div className="overflow-hidden rounded-lg border border-manuka/25 bg-gradient-to-br from-[#061b3a] via-[#102354] to-[#1f1248] shadow-editorial">
            <div className="grid lg:grid-cols-[0.48fr_0.52fr]">
              <div className="p-8 lg:p-10">
                <p className="eyebrow text-cyan-300">Abundant Freedom</p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Trade anywhere. Live everywhere.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/78">
                  Family travel becomes more possible when income can move with you.
                  Abundant Freedom is Vanessa’s trading and online-income home for building
                  structure, confidence, and practical skills while keeping family at the centre.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      title: "Location independent",
                      text: "Learn skills that can travel with your family.",
                      icon: Compass
                    },
                    {
                      title: "Structured trading",
                      text: "Build repeatable systems instead of guessing.",
                      icon: LineChart
                    },
                    {
                      title: "Family-first freedom",
                      text: "Create income around the life you actually want.",
                      icon: ShieldCheck
                    }
                  ].map(({ title, text, icon: Icon }) => (
                    <article key={title} className="rounded-lg border border-white/12 bg-white/8 p-5">
                      <Icon className="text-cyan-300" size={24} />
                      <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wide text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/68">{text}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="https://www.abundantfreedom.online/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Visit Abundant Freedom
                    <ExternalLink size={17} />
                  </a>
                  <a href={abundantFreedomFlyer.pdf} download className="btn-light">
                    Download Flyer
                    <Download size={17} />
                  </a>
                </div>
              </div>

              <div className="relative min-h-[420px] overflow-hidden bg-[#090a22] p-5 lg:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(24,185,196,0.24),transparent_38%),radial-gradient(circle_at_20%_80%,rgba(212,162,74,0.22),transparent_34%)]" />
                <div className="relative h-full overflow-hidden rounded-lg border border-white/12 bg-white shadow-soft">
                  <img
                    src={abundantFreedomFlyer.image}
                    alt={`${abundantFreedomFlyer.title} visual guide`}
                    className="h-full max-h-[560px] w-full object-contain object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
