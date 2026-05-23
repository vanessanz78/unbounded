import { ArrowRight, Download, Heart, Home, Leaf, MapPin, Waves } from "lucide-react";
import {
  homeLifestyleGuides,
  homeLifestyleMoments,
  homeLifestyleNavTags,
  homeLifestyleValues
} from "../data/homeLifestyle.js";

export default function HomeLifestyle() {
  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-64"
          style={{ backgroundImage: "url('/pataua-north-road-aerial.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-ink/22" />
        <div className="container-page relative grid min-h-[560px] items-center py-16">
          <div className="max-w-3xl">
            <p className="eyebrow text-manuka">Home & Lifestyle</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-sand sm:text-7xl">
              Rooted in New Zealand. Built for freedom.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sand/84">
              Our home chapter: NZ roots, Pataua summers, Deloraine Cattery, Deloraine Cottage,
              slow living, and the lifestyle foundation that makes the global dream feel grounded.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {homeLifestyleNavTags.map((tag) => (
                <a
                  key={tag.href}
                  href={tag.href}
                  className="rounded-full border border-manuka/45 bg-white/8 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-sand backdrop-blur transition hover:bg-manuka hover:text-ink"
                >
                  {tag.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="home-downloads" className="container-page -mt-12 relative pb-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {homeLifestyleGuides.map(({ id, title, subtitle, image, pdf, icon: Icon, tags }) => (
            <article key={id} className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-editorial">
              <a href={`#${id}`} className="block">
                <div
                  className="relative min-h-72 bg-cover bg-center"
                  style={{ backgroundImage: `url('${image}')` }}
                  role="img"
                  aria-label={`${title} visual guide`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-forest text-white shadow-soft">
                    <Icon size={24} />
                  </span>
                </div>
              </a>
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/70">{subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <a
                      key={tag}
                      href={`#${id}`}
                      className="rounded-full bg-sage px-3 py-1 text-[0.7rem] font-bold text-forest transition hover:bg-manuka hover:text-ink"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`#${id}`} className="btn-light">
                    View Section
                    <ArrowRight size={16} />
                  </a>
                  <a href={pdf} download className="btn-primary">
                    Download Guide
                    <Download size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {homeLifestyleGuides.map((guide, index) => {
        const Icon = guide.icon;
        const isDark = index === 1;
        return (
          <section
            key={guide.id}
            id={guide.id}
            className={isDark ? "bg-forest py-16 text-white" : "container-page py-16"}
          >
            <div className={isDark ? "container-page" : ""}>
              <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                <div>
                  <span className={`grid h-14 w-14 place-items-center rounded-full ${isDark ? "bg-white/10 text-manuka" : "bg-sage text-forest"}`}>
                    <Icon size={28} />
                  </span>
                  <p className={`mt-6 eyebrow ${isDark ? "text-manuka" : "text-forest"}`}>{guide.eyebrow}</p>
                  <h2 className={`mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl ${isDark ? "text-sand" : "text-ink"}`}>
                    {guide.title}
                  </h2>
                  <p className={`mt-5 text-lg leading-8 ${isDark ? "text-white/76" : "text-ink/72"}`}>
                    {guide.subtitle}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={guide.pdf}
                      download
                      className={isDark ? "inline-flex items-center justify-center gap-2 rounded-full bg-manuka px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-ink transition hover:bg-sand" : "btn-primary"}
                    >
                      Download Quick Guide
                      <Download size={17} />
                    </a>
                    <a href="#home-downloads" className={isDark ? "btn-secondary border-white/35" : "btn-light"}>
                      Back to Guides
                    </a>
                  </div>
                </div>

                <div className={`overflow-hidden rounded-lg border shadow-editorial ${isDark ? "border-white/15 bg-white/8" : "border-forest/10 bg-white"}`}>
                  <img
                    src={guide.image}
                    alt={`${guide.title} visual guide artwork`}
                    className="max-h-[720px] w-full object-contain object-top"
                  />
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {guide.pillars.map(({ title, text, icon: PillarIcon }) => (
                  <article
                    key={title}
                    className={`rounded-lg p-5 ${isDark ? "border border-white/12 bg-white/8" : "border border-forest/10 bg-white shadow-sm"}`}
                  >
                    <PillarIcon className={isDark ? "text-manuka" : "text-forest"} size={28} />
                    <h3 className={`mt-4 font-display text-xl font-bold ${isDark ? "text-sand" : "text-ink"}`}>{title}</h3>
                    <p className={`mt-2 text-sm leading-6 ${isDark ? "text-white/72" : "text-ink/68"}`}>{text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                {guide.sections.map(({ title, text }) => (
                  <article
                    key={title}
                    className={`rounded-lg p-6 ${isDark ? "border border-white/12 bg-white/8" : "border border-forest/10 bg-white shadow-sm"}`}
                  >
                    <h3 className={`font-display text-2xl font-bold ${isDark ? "text-sand" : "text-ink"}`}>{title}</h3>
                    <p className={`mt-3 leading-7 ${isDark ? "text-white/74" : "text-ink/70"}`}>{text}</p>
                  </article>
                ))}
              </div>

              <div className={`mt-10 rounded-lg p-6 ${isDark ? "bg-white/8" : "bg-white shadow-soft"}`}>
                <h3 className={`font-display text-2xl font-bold ${isDark ? "text-sand" : "text-ink"}`}>What we carry forward</h3>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {guide.details.map((detail) => (
                    <div key={detail} className={`rounded-lg px-4 py-3 text-sm font-semibold leading-6 ${isDark ? "bg-white/8 text-white/78" : "bg-sage text-ink/76"}`}>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section id="slow-living" className="container-page py-16">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow text-manuka">Slow Living</p>
          <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-ink">
            Freedom is not just about income. It is about presence.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/72">
            Deloraine gave us roots. It gave us freedom. Now it is guiding us toward a life we love:
            slower, more intentional, more connected, and more aligned.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homeLifestyleMoments.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
              <Icon className="text-forest" size={28} />
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="home-values" className="bg-forest py-14 text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <p className="eyebrow text-manuka">Our Foundations</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-sand">
              Wherever we go, New Zealand will always be part of our foundation.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/76">
              Home is not just a place. It is the values we carry, the way we care,
              and the roots that travel with us.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-5">
            {homeLifestyleValues.map((value, index) => {
              const icons = [Heart, CompassIcon, Leaf, Waves, Home];
              const Icon = icons[index] || Heart;
              return (
                <div key={value} className="rounded-lg border border-white/12 bg-white/8 p-5 text-center">
                  <Icon className="mx-auto text-manuka" size={24} />
                  <p className="mt-4 text-xs font-extrabold uppercase tracking-wide text-sand">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function CompassIcon(props) {
  return <MapPin {...props} />;
}
