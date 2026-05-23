import {
  ArrowRight,
  BookOpen,
  Compass,
  Mail,
  Map,
  Sparkles,
  Users
} from "lucide-react";
import { contentArms } from "../data/contentArms.js";
import { getArmHref, getTopicHref } from "../data/contentArmLinks.js";

const paths = [
  {
    title: "Meet the Family",
    text: "Start with our roots, mission, and why we chose this path.",
    href: "#/our-story",
    icon: Users,
    image: "/tropical-garden-path.png"
  },
  {
    title: "See the Journey",
    text: "Explore the NZ to Bali, Fiji, Panama, and future-country timeline.",
    href: "#/journey",
    icon: Map,
    image: "/read-the-journey.png"
  },
  {
    title: "Read by Theme",
    text: "Filter posts by travel, money, spirituality, home, or building in public.",
    href: "#/blogs",
    icon: BookOpen,
    image: "/read-by-theme.png"
  },
  {
    title: "Join the Community",
    text: "Sign up for updates and future Abundant Freedom community links.",
    href: "#/contact",
    icon: Mail,
    image: "/join-community.png"
  },
  {
    title: "Choose Your Door",
    text: "Use the content arms below to follow the stream that fits your season.",
    href: "#arms",
    icon: Compass,
    image: "/choose-your-door.png"
  }
];

const armImages = {
  "freedom-wealth": "/freedom-and-wealth.png",
  "family-travel": "/family-and-travel.png",
  "spiritual-conscious": "/spiritual-conscious-overview.png",
  "home-lifestyle": "/nz-roots-guide.png",
  "building-public": "/ai-tools-guide.png"
};

export default function StartHere() {
  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/wilson-whanau.png')", backgroundPosition: "65% center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mist via-mist/82 to-transparent" />
        <div className="container-page relative grid min-h-[430px] items-center py-12 lg:min-h-[500px]">
          <div className="max-w-xl">
            <p className="eyebrow text-manuka">Start Here</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              A quick navigation hub for the whole unbordered ecosystem.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-ink/72">
              Everything you need to explore our journey, values, and vision, all in one place.
            </p>
            <a href="#hub" className="btn-primary mt-8">
              Explore the Hub
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="hub" className="container-page -mt-12 pb-14">
        <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {paths.map(({ title, text, href, icon: Icon, image }) => (
            <a
              key={title}
              href={href}
              className="group overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-editorial"
            >
              <div
                className="relative min-h-44 bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
                role="img"
                aria-label={`${title} preview`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/28 to-transparent" />
                <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-forest text-white shadow-soft">
                  <Icon size={22} />
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
                <p className="mt-3 min-h-20 text-sm leading-6 text-ink/70">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-forest">
                  Go
                  <ArrowRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="arms" className="container-page pb-16">
        <div className="mb-7 text-center">
          <p className="eyebrow text-manuka">Explore Our Content Arms</p>
          <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Dive deeper into what matters most.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {contentArms.map((arm) => {
            const Icon = arm.icon || Sparkles;
            return (
              <article
                key={arm.id}
                className="group relative overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-editorial"
              >
                <a href={getArmHref(arm.id)} className="absolute inset-0 z-0" aria-label={`Explore ${arm.title}`} />
                <a href={getArmHref(arm.id)} className="relative z-10 block">
                  <div
                    className="relative min-h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url('${armImages[arm.id]}')` }}
                    role="img"
                    aria-label={`${arm.title} preview`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/28 to-transparent" />
                    <span className="absolute -bottom-6 left-5 grid h-12 w-12 place-items-center rounded-full border-4 border-white bg-forest text-white shadow-soft">
                      <Icon size={21} />
                    </span>
                  </div>
                </a>
                <div className="p-5 pt-9">
                  <a href={getArmHref(arm.id)} className="relative z-10 block">
                    <h3 className="font-display text-xl font-bold leading-tight text-ink">{arm.title}</h3>
                    <p className="mt-3 min-h-28 text-sm leading-6 text-ink/70">{arm.summary}</p>
                  </a>
                  <div className="relative z-20 mt-4 flex flex-wrap gap-2">
                    {arm.topics.map((topic) => (
                      <a
                        key={topic}
                        href={getTopicHref(arm.id, topic)}
                        className="rounded-full bg-sage px-3 py-1 text-[0.7rem] font-bold text-forest transition hover:bg-manuka hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-manuka"
                      >
                        {topic}
                      </a>
                    ))}
                  </div>
                  <a
                    href={getArmHref(arm.id)}
                    className="relative z-10 mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-forest transition group-hover:text-manuka"
                  >
                    Explore
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
