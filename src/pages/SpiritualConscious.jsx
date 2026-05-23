import {
  ArrowRight,
  BookOpen,
  Compass,
  Download,
  ExternalLink,
  Heart,
  Leaf,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Sun,
  Users
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  consciousPractices,
  dailySovereigntyCheck,
  spiritualGuides,
  spiritualTags
} from "../data/spiritualConscious.js";

const guideIds = new Set(spiritualGuides.map((guide) => guide.id));

function getActiveGuideId() {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  const path = hash.split("?")[0].split("#")[0];
  const slug = path.split("/").filter(Boolean).pop();
  return guideIds.has(slug) ? slug : "";
}

function GuideNav({ activeId = "" }) {
  return (
    <nav className="flex flex-wrap gap-3" aria-label="Spiritual and conscious living sections">
      <a
        href="#/spiritual-conscious"
        className={`rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition ${
          !activeId ? "border-forest bg-forest text-white" : "border-forest/15 bg-white text-forest hover:bg-sage"
        }`}
      >
        Overview
      </a>
      {spiritualGuides.map((guide) => (
        <a
          key={guide.id}
          href={guide.path}
          className={`rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition ${
            activeId === guide.id
              ? "border-forest bg-forest text-white"
              : "border-forest/15 bg-white text-forest hover:bg-sage"
          }`}
        >
          {guide.title}
        </a>
      ))}
    </nav>
  );
}

function allBooks() {
  return [...new Map(spiritualGuides.flatMap((guide) => guide.books.map((book) => [book, guide.title]))).entries()];
}

function SpiritualOverview() {
  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-y-0 right-0 hidden w-[56%] bg-cover bg-center lg:block"
          style={{ backgroundImage: "url('/spiritual-conscious-overview.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mist via-mist/94 to-mist/18" />
        <div className="container-page relative grid min-h-[590px] items-center py-16">
          <div className="max-w-3xl">
            <p className="eyebrow text-manuka">Awareness. Connection. Intentional action.</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink sm:text-7xl">
              Spiritual & Conscious Living
            </h1>
            <p className="mt-4 font-display text-2xl font-semibold text-forest">
              Mindset, QHHT, Sovereignty
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
              Practical daily practices, tools, and guidance that create clarity, resilience,
              inner trust, and alignment with your values.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#paths" className="btn-primary">
                Start Your Journey
                <ArrowRight size={17} />
              </a>
              <a href="#quick-reference-guides" className="btn-light">
                <Download size={17} />
                Free Guides
              </a>
              <a href="#/blogs?arm=spiritual-conscious" className="btn-light">
                <BookOpen size={17} />
                Relevant Blogs
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-sand/60">
        <div className="container-page grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-6">
          {[
            ["Mindset", "Shift your thinking.", Users],
            ["QHHT", "Access deeper healing.", Sparkles],
            ["Sovereignty", "Take back your power.", ShieldCheck],
            ["Connection", "Build deeper presence.", Heart],
            ["Daily Practices", "Simple tools for change.", Leaf],
            ["Resources", "Guides, books & tools.", Sun]
          ].map(([title, text, Icon]) => (
            <a
              key={title}
              href={title === "Resources" ? "#reading-list" : spiritualTags.find((tag) => tag.label === title)?.href || "#quick-reference-guides"}
              className="flex items-center gap-3 rounded-lg border border-transparent p-3 transition hover:border-forest/10 hover:bg-white"
            >
              <Icon className="shrink-0 text-forest" size={28} />
              <span>
                <span className="block font-display text-lg font-bold text-ink">{title}</span>
                <span className="block text-xs leading-5 text-ink/64">{text}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="paths" className="container-page scroll-mt-32 py-16">
        <div className="mb-9 text-center">
          <p className="eyebrow text-manuka">Explore By Path</p>
          <h2 className="mx-auto mt-2 max-w-4xl font-display text-3xl font-bold text-ink sm:text-4xl">
            Choose the practice your family needs today.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {spiritualGuides.map((guide) => {
            const Icon = guide.icon;
            return (
              <article key={guide.id} className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-editorial">
                <a href={guide.path} className="group block">
                  <div
                    className="relative min-h-72 bg-cover bg-center"
                    style={{ backgroundImage: `url('${guide.heroImage}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/28 to-transparent" />
                    <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-forest shadow-soft">
                      <Icon size={24} />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <h3 className="font-display text-3xl font-bold">{guide.shortTitle}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/82">{guide.overview}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-manuka">
                        Explore
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </a>
                <div className="flex flex-wrap gap-2 p-5">
                  {guide.tags.slice(0, 4).map((tag) => (
                    <a
                      key={tag}
                      href={guide.path}
                      className="rounded-full bg-sage px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-forest transition hover:bg-manuka hover:text-ink"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="quick-reference-guides" className="container-page scroll-mt-32 pb-16">
        <div className="grid gap-6 rounded-lg border border-forest/10 bg-white p-6 shadow-editorial lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="eyebrow text-forest">Quick Reference Cards</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-ink">Download the guides.</h2>
            <p className="mt-4 text-base leading-7 text-ink/68">
              Each guide is ready as a quick visual reference for the practice area it supports.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {spiritualGuides.map((guide) => (
              <article key={guide.id} className="rounded-lg border border-forest/10 bg-mist p-4">
                <div
                  className="h-40 rounded-md bg-cover bg-top"
                  style={{ backgroundImage: `url('${guide.image}')` }}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{guide.shortTitle}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={guide.pdf} download className="btn-primary px-4 py-2 text-xs">
                    Download
                    <Download size={15} />
                  </a>
                  <a href={guide.path} className="btn-light px-4 py-2 text-xs">
                    Open Page
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reading-list" className="container-page scroll-mt-32 pb-16">
        <div className="grid gap-6 lg:grid-cols-[0.65fr_0.35fr]">
          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
            <p className="eyebrow text-forest">Reading List</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-ink">Books and resources for deeper practice.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {allBooks().map(([book, section]) => (
                <div key={book} className="flex gap-3 rounded-lg bg-sage p-4">
                  <BookOpen className="mt-1 shrink-0 text-forest" size={18} />
                  <p>
                    <span className="block font-semibold text-ink">{book}</span>
                    <span className="text-xs font-bold uppercase tracking-wide text-fern">{section}</span>
                  </p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-lg bg-forest p-7 text-white shadow-editorial">
            <p className="eyebrow text-manuka">Relevant Blogs</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-sand">Read the conscious living posts.</h3>
            <p className="mt-4 text-sm leading-7 text-white/74">
              Filter the blog library to posts connected with mindset, sovereignty, QHHT, AI, consciousness,
              and values-led family life.
            </p>
            <a href="#/blogs?arm=spiritual-conscious" className="mt-6 inline-flex items-center gap-2 rounded-full bg-manuka px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-ink transition hover:bg-sand">
              View Filtered Blogs
              <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      <section className="bg-forest py-14 text-white">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {consciousPractices.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-white/12 bg-white/8 p-5">
              <Icon className="text-manuka" size={27} />
              <p className="mt-4 text-sm font-extrabold uppercase tracking-wide text-sand">{title}</p>
              <p className="mt-2 text-sm text-white/70">{text}</p>
            </article>
          ))}
        </div>
        <div className="container-page mt-8 text-center">
          <p className="font-display text-2xl font-bold text-sand">
            Conscious living is a journey, not a destination.
          </p>
          <p className="mt-2 text-white/72">Take one step at a time. Trust your path. You are enough.</p>
        </div>
      </section>
    </main>
  );
}

function SpiritualDetail({ guide }) {
  const Icon = guide.icon;
  const otherGuides = spiritualGuides.filter((item) => item.id !== guide.id);

  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-y-0 right-0 hidden w-[58%] bg-cover bg-center lg:block"
          style={{ backgroundImage: `url('${guide.heroImage}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mist via-mist/94 to-mist/12" />
        <div className="container-page relative grid min-h-[560px] items-center py-16">
          <div className="max-w-3xl">
            <p className="eyebrow text-manuka">{guide.eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink sm:text-7xl">
              {guide.title}
            </h1>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight text-forest">{guide.subtitle}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">{guide.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={guide.pdf} download className="btn-primary">
                <Download size={17} />
                Quick Reference Guide
              </a>
              <a href="#/spiritual-conscious" className="btn-light">
                Back to Overview
              </a>
              <a href="#/blogs?arm=spiritual-conscious" className="btn-light">
                Related Blogs
              </a>
            </div>
            <div className="mt-7">
              <GuideNav activeId={guide.id} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
            <Icon className="text-forest" size={34} />
            <h2 className="mt-4 font-display text-3xl font-bold text-ink">Core principles</h2>
            <div className="mt-5 space-y-3">
              {guide.principles.map((item) => (
                <p key={item} className="rounded-lg bg-sage px-4 py-3 text-sm font-semibold leading-6 text-ink/76">
                  {item}
                </p>
              ))}
            </div>
          </article>
          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
            <p className="eyebrow text-forest">Quick Reference Guide</p>
            <div className="mt-5 grid gap-5 md:grid-cols-[0.45fr_0.55fr] md:items-center">
              <div
                className="min-h-72 rounded-lg bg-cover bg-top shadow-sm"
                style={{ backgroundImage: `url('${guide.image}')` }}
                aria-hidden="true"
              />
              <div>
                <blockquote className="rounded-lg bg-forest p-5 font-display text-2xl font-bold leading-snug text-sand">
                  “{guide.quote}”
                </blockquote>
                <p className="mt-5 text-base leading-7 text-ink/70">{guide.overview}</p>
                <a href={guide.pdf} download className="mt-5 inline-flex items-center gap-2 rounded-full bg-manuka px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-ink transition hover:bg-sand">
                  Download Guide
                  <Download size={16} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="grid gap-5 lg:grid-cols-[0.68fr_0.32fr]">
          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
            <p className="eyebrow text-forest">Practical Steps</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {guide.steps.map(({ title, text, icon: StepIcon }, index) => (
                <div key={title} className="rounded-lg border border-forest/10 bg-mist p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-sm font-extrabold text-white">
                      {index + 1}
                    </span>
                    <StepIcon className="text-manuka" size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/68">{text}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
            <p className="eyebrow text-forest">Reading List</p>
            <div className="mt-5 space-y-3">
              {guide.books.map((book) => (
                <div key={book} className="flex gap-3 border-b border-forest/10 pb-3 last:border-b-0">
                  <BookOpen className="mt-1 shrink-0 text-forest" size={17} />
                  <p className="text-sm font-semibold leading-6 text-ink/78">{book}</p>
                </div>
              ))}
            </div>
            {guide.id === "qhht" && (
              <a href="https://guidedhealing.nz" className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-pounamu">
                GuidedHealing.nz
                <ExternalLink size={15} />
              </a>
            )}
          </aside>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
            <p className="eyebrow text-forest">Tools To Support Your Journey</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {guide.tools.map((tool) => (
                <div key={tool} className="rounded-lg bg-sage px-4 py-3 text-sm font-semibold leading-6 text-ink/76">
                  {tool}
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-lg bg-forest p-7 text-white shadow-editorial">
            <p className="eyebrow text-manuka">Keep Exploring</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-sand">Related conscious living paths.</h3>
            <div className="mt-5 grid gap-3">
              {otherGuides.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className="flex items-center justify-between rounded-lg border border-white/12 bg-white/8 px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:border-manuka hover:text-manuka"
                >
                  {item.shortTitle}
                  <ArrowRight size={16} />
                </a>
              ))}
              <a
                href="#/blogs?arm=spiritual-conscious"
                className="flex items-center justify-between rounded-lg border border-manuka/40 bg-manuka px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-ink transition hover:bg-sand"
              >
                Related Blog Posts
                <BookOpen size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>

      {guide.id === "sovereignty" && (
        <section className="container-page pb-16">
          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
            <p className="eyebrow text-forest">Daily Sovereignty Check-In</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {dailySovereigntyCheck.map((item) => (
                <label key={item} className="flex items-center gap-3 rounded-lg bg-sage px-4 py-3 text-sm font-semibold text-ink/76">
                  <input type="checkbox" className="h-4 w-4 accent-forest" />
                  {item}
                </label>
              ))}
            </div>
          </article>
        </section>
      )}
    </main>
  );
}

export default function SpiritualConscious() {
  const [activeId, setActiveId] = useState(getActiveGuideId);

  useEffect(() => {
    const handleHashChange = () => setActiveId(getActiveGuideId());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeGuide = useMemo(
    () => spiritualGuides.find((guide) => guide.id === activeId),
    [activeId]
  );

  return activeGuide ? <SpiritualDetail guide={activeGuide} /> : <SpiritualOverview />;
}
