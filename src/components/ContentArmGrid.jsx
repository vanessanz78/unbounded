import { contentArms } from "../data/contentArms.js";
import { getArmHref, getTopicHref } from "../data/contentArmLinks.js";

export default function ContentArmGrid({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {contentArms.map((arm) => {
        const Icon = arm.icon;
        return (
          <article
            key={arm.id}
            className={
              isDark
                ? "group relative border-manuka/25 px-6 py-3 text-center md:border-r md:last:border-r-0"
                : "group relative rounded-lg border border-forest/10 bg-white/90 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-pounamu/30 hover:shadow-soft"
            }
          >
            <a href={getArmHref(arm.id)} className="absolute inset-0 z-0" aria-label={`Explore ${arm.title}`} />
            <a href={getArmHref(arm.id)} className="relative z-10 block focus:outline-none focus-visible:ring-2 focus-visible:ring-manuka focus-visible:ring-offset-4">
              <div
                className={
                  isDark
                    ? "mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full text-manuka"
                    : "mb-5 grid h-12 w-12 place-items-center rounded-full bg-sage text-pounamu transition group-hover:bg-forest group-hover:text-white"
                }
              >
                <Icon size={isDark ? 34 : 23} strokeWidth={isDark ? 1.8 : 2} />
              </div>
              <h3
                className={
                  isDark
                    ? "text-xs font-extrabold uppercase tracking-[0.18em] text-white"
                    : "font-display text-xl font-bold text-ink"
                }
              >
                {arm.title}
              </h3>
              <p className={isDark ? "mx-auto mt-3 max-w-xs text-sm leading-6 text-sand/78" : "mt-2 text-sm leading-6 text-ink/68"}>
                {isDark ? arm.tagline : arm.summary}
              </p>
            </a>
            <div className={isDark ? "relative z-20 mt-4 flex flex-wrap justify-center gap-2" : "relative z-20 mt-4 flex flex-wrap gap-2"}>
              {arm.topics.map((topic) => (
                <a
                  key={topic}
                  href={getTopicHref(arm.id, topic)}
                  className={
                    isDark
                      ? "rounded-full border border-manuka/45 px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-wide text-manuka transition hover:bg-manuka hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-manuka"
                      : "rounded-full border border-forest/15 px-3 py-1 text-xs font-semibold text-forest transition hover:border-manuka hover:bg-sage focus:outline-none focus-visible:ring-2 focus-visible:ring-manuka"
                  }
                >
                  {topic}
                </a>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
