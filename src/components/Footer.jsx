import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo.jsx";
import { discordUrl, instagramUrl, youtubeUrl } from "../data/socialLinks.js";
import { toolLinks } from "../data/toolLinks.js";

const defaultFooterPanel = {
  eyebrow: "Choose Your Door",
  title: "Choose the life you want to build.",
  text: "Explore the five content pillars: Freedom & Wealth, Family & Travel, Conscious Living, Home & Living, and AI Tools.",
  image: "/tropical-garden-path.png",
  href: "#/",
  cta: "Choose Your Door"
};

const footerScenery = {
  default: { image: "/tropical-garden-path.png", position: "center" },
  openPath: { image: "/nz-header-pano.jpg", position: "center" },
  coastal: { image: "/pataua-north-road-aerial.png", position: "center" },
  global: { image: "/panama-city-skyline.jpg", position: "center" }
};

function getFooterScenery(path) {
  if (path === "/journey" || path.startsWith("/home-lifestyle")) return footerScenery.coastal;
  if (path === "/our-story") return footerScenery.global;
  if (path === "/using-ai-tools" || path.startsWith("/family-travel")) return footerScenery.openPath;
  if (path === "/building-public" || path.startsWith("/using-ai-tools")) return footerScenery.global;
  return footerScenery.default;
}

const footerPanels = {
  "/": defaultFooterPanel,
  "/guides-library": {
    eyebrow: "Guides Library",
    title: "Download the guides that support your next step.",
    text: "Browse the quick-reference guides across wealth, travel, conscious living, home, and AI tools.",
    image: "/building-public-page-reference.png",
    href: "#/guides-library",
    cta: "View Guides"
  },
  "/recommended-reading": {
    eyebrow: "Recommended Reading",
    title: "Books that keep shaping the journey.",
    text: "A shared reading shelf for freedom, family travel, conscious living, home systems, and practical online building.",
    image: "/read-by-theme.png",
    href: "#/recommended-reading",
    cta: "Browse Books"
  },
  "/our-story": {
    eyebrow: "AI Tools",
    title: "Create, automate, and build freedom.",
    text: "Our favorite tools help us turn ideas into practical projects, income streams, and systems that support family life.",
    image: "/building-public-page-reference.png",
    href: "#/using-ai-tools?section=ai-tools&anchor=ai-tools-we-use",
    cta: "Explore AI Tools"
  },
  "/journey": {
    eyebrow: "Follow Our Journey",
    title: "Follow the path as it unfolds.",
    text: "From Northland roots to family adventures and new ideas, this is where the story keeps moving.",
    image: "/pacific-family-route.png",
    href: "#/our-story",
    cta: "Read Our Story"
  },
  "/family-travel": {
    eyebrow: "Home & Living",
    title: "Create a home that supports freedom.",
    text: "Our home projects, food security, land, and lifestyle choices help us live with more purpose and less noise.",
    image: "/home-family-portrait.png",
    href: "#/home-lifestyle?section=sovereign-lifestyle",
    cta: "Explore Home Living"
  },
  "/family-travel?section=why-travel": {
    eyebrow: "Why Travel?",
    title: "Collect experiences, not just things.",
    text: "Travel gives our children stories, perspective, resilience, and shared memories that last longer than possessions.",
    image: "/why-travel-expanded-guide.png",
    href: "#/family-travel?section=why-travel",
    cta: "Read Why Travel"
  },
  "/family-travel?section=travel-smarter": {
    eyebrow: "Travel Smarter",
    title: "Stay more, pay less, travel better.",
    text: "We use smart accommodation, points, money flow, and planning systems so travel supports freedom instead of draining it.",
    image: "/travel-smarter-expanded-guide.png",
    href: "#/family-travel?section=travel-smarter",
    cta: "Travel Smarter"
  },
  "/family-travel?section=worldschooling": {
    eyebrow: "Worldschooling",
    title: "Let the world become the classroom.",
    text: "Learning through people, cultures, places, projects, and daily life helps our children grow with curiosity and confidence.",
    image: "/worldschooling-expanded-guide.png",
    href: "#/family-travel?section=worldschooling",
    cta: "Explore Worldschooling"
  },
  "/family-travel?section=relocation": {
    eyebrow: "Relocation",
    title: "Choose a base that supports your life.",
    text: "Relocation is not escaping. It is choosing alignment, lower pressure, more time, and a place that helps your family thrive.",
    image: "/relocation-expanded-guide.png",
    href: "#/family-travel?section=relocation",
    cta: "Explore Relocation"
  },
  "/family-travel?section=global-lifestyle": {
    eyebrow: "Global Lifestyle Design",
    title: "Build a life by design.",
    text: "Global living is about intentional choices, family rhythm, meaningful work, learning, community, and legacy.",
    image: "/global-lifestyle-expanded-guide.png",
    href: "#/family-travel?section=global-lifestyle",
    cta: "Design Your Lifestyle"
  },
  "/freedom-wealth": {
    eyebrow: "Freedom & Wealth",
    title: "Build freedom with purpose.",
    text: "Wealth is a tool for choice, resilience, and family freedom when it is built with clear values and steady systems.",
    image: "/freedom-and-wealth.png",
    href: "#/freedom-wealth",
    cta: "Explore Freedom"
  },
  "/spiritual-conscious": {
    eyebrow: "Conscious Living",
    title: "Live consciously. Grow gently.",
    text: "Connection, awareness, healing, sovereignty, and purpose help us create freedom from the inside out.",
    image: "/spiritual-conscious-living.png",
    href: "#/spiritual-conscious#spiritual-tools",
    cta: "View Tools"
  },
  "/spiritual-conscious?section=connection": {
    eyebrow: "Connection",
    title: "We are part of something greater.",
    text: "Connection reminds us that freedom is not isolation. It is belonging, reverence, contribution, and love in motion.",
    image: "/spiritual-connection-hero.png",
    href: "#/spiritual-conscious?section=connection",
    cta: "Explore Connection"
  },
  "/spiritual-conscious?section=awareness": {
    eyebrow: "Awareness",
    title: "Observe. Understand. Be present.",
    text: "Awareness gives us the pause between reaction and choice, helping us see clearly and live with intention.",
    image: "/spiritual-awareness-hero.png",
    href: "#/spiritual-conscious?section=awareness",
    cta: "Explore Awareness"
  },
  "/spiritual-conscious?section=healing": {
    eyebrow: "Healing",
    title: "Restore balance, body, mind, and soul.",
    text: "Healing helps us soften old patterns, support the whole person, and reconnect with our inner knowing.",
    image: "/spiritual-healing-hero.png",
    href: "#/spiritual-conscious?section=healing&anchor=spiritual-detail",
    cta: "Explore Healing"
  },
  "/spiritual-conscious?section=sovereignty": {
    eyebrow: "Sovereignty",
    title: "Choose consciously. Take responsibility.",
    text: "Sovereignty is built in daily choices, in what we allow, what we protect, and what we create.",
    image: "/spiritual-sovereignty-hero.png",
    href: "#/spiritual-conscious?section=sovereignty",
    cta: "Explore Sovereignty"
  },
  "/spiritual-conscious?section=purpose": {
    eyebrow: "Purpose",
    title: "Live intentionally. Leave a legacy.",
    text: "Purpose helps us choose what matters, serve with heart, and build a life our children can learn from.",
    image: "/spiritual-purpose-hero.png",
    href: "#/spiritual-conscious?section=purpose",
    cta: "Explore Purpose"
  },
  "/spiritual-conscious/mindset": {
    eyebrow: "Conscious Living",
    title: "Choose awareness, then choose again.",
    text: "The inner work beneath freedom starts with noticing what is true, what is ours, and what we are ready to change.",
    image: "/spiritual-awareness-hero.png",
    href: "#/spiritual-conscious#spiritual-tools",
    cta: "View Tools"
  },
  "/spiritual-conscious/qhht": {
    eyebrow: "Healing",
    title: "Return to the wisdom within.",
    text: "Healing, reflection, and guided support help us soften old patterns and reconnect with what matters.",
    image: "/spiritual-healing-hero.png",
    href: "#/spiritual-conscious?section=healing&anchor=spiritual-detail",
    cta: "Explore Healing"
  },
  "/spiritual-conscious/sovereignty": {
    eyebrow: "Sovereignty",
    title: "Choose consciously. Take responsibility.",
    text: "Sovereignty is built in daily choices, in what we allow, what we protect, and what we create.",
    image: "/spiritual-sovereignty-hero.png",
    href: "#/spiritual-conscious?section=sovereignty",
    cta: "Explore Sovereignty"
  },
  "/home-lifestyle": {
    eyebrow: "Family & Travel",
    title: "Design a life without borders.",
    text: "Travel smarter, worldschool gently, and choose places that support more time, more connection, and more freedom.",
    image: "/family-and-travel.png",
    href: "#/family-travel?section=why-travel",
    cta: "Explore Family Travel"
  },
  "/home-lifestyle?section=sovereign-lifestyle": {
    eyebrow: "Sovereign Lifestyle",
    title: "Choose systems that give life back.",
    text: "A sovereign home is built with intention, practical skills, family rhythm, and choices that reduce dependency.",
    image: "/our-home.jpg",
    href: "#/home-lifestyle?section=sovereign-lifestyle",
    cta: "Explore Sovereignty"
  },
  "/home-lifestyle?section=nature-outdoor-adventures": {
    eyebrow: "Nature & Outdoors",
    title: "Let the outside world shape the day.",
    text: "Bush walks, beaches, kayaks, waterfalls, gardens, and open space keep our family grounded and alive.",
    image: "/nz-header-kayak.jpg",
    href: "#/home-lifestyle?section=nature-outdoor-adventures",
    cta: "Explore Outdoors"
  },
  "/home-lifestyle?section=connection-to-roots": {
    eyebrow: "Connection to Roots",
    title: "Be rooted in place, people, and story.",
    text: "New Zealand, whakapapa, land, family history, and community remind us what we are building from.",
    image: "/rooted-in-new-zealand-guide.png",
    href: "#/home-lifestyle?section=connection-to-roots",
    cta: "Explore Roots"
  },
  "/home-lifestyle?section=income-generating-property": {
    eyebrow: "Income Property",
    title: "Build assets that support family life.",
    text: "Our cottage, cattery, and practical projects help turn home-based work into freedom, income, and service.",
    image: "/home-deloraine-cottage.png",
    href: "#/home-lifestyle?section=income-generating-property",
    cta: "Explore Property"
  },
  "/home-lifestyle?section=food-security-self-sufficiency": {
    eyebrow: "Food Security",
    title: "Be prepared. Eat well. Live free.",
    text: "Gardens, storage, eggs, local food, and simple systems help our family feel steady and self-reliant.",
    image: "/food-security-storage-guide.png",
    href: "#/home-lifestyle?section=food-security-self-sufficiency",
    cta: "Explore Food Security"
  },
  "/building-public": {
    eyebrow: "AI Tools",
    title: "Use technology to create freedom.",
    text: "We use AI to build websites, systems, guides, tools, and content that give our family more time and reach.",
    image: "/building-in-public.png",
    href: "#/using-ai-tools?section=ai-tools&anchor=ai-tools-we-use",
    cta: "Explore AI Tools"
  },
  "/using-ai-tools?section=why-ai": {
    eyebrow: "Why AI?",
    title: "Use tools to create more time.",
    text: "AI is most powerful when it supports family life, creativity, systems, learning, and practical income.",
    image: "/building-in-public.png",
    href: "#/using-ai-tools?section=why-ai",
    cta: "Explore Why AI"
  },
  "/using-ai-tools?section=ai-tools": {
    eyebrow: "AI Tool Stack",
    title: "Choose the right tools for the job.",
    text: "The best tools help us create, automate, prototype, document, and scale without losing our family-first values.",
    image: "/ai-tools-guide.png",
    href: "#/using-ai-tools?section=ai-tools&anchor=ai-tools-we-use",
    cta: "View AI Tools"
  },
  "/using-ai-tools?section=workflow": {
    eyebrow: "Workflow",
    title: "Turn ideas into repeatable systems.",
    text: "Clear steps, useful prompts, project dashboards, and testing rhythms help ideas become real work.",
    image: "/building-public-page-reference.png",
    href: "#/using-ai-tools?section=workflow",
    cta: "Explore Workflow"
  },
  "/using-ai-tools?section=idea-now-what": {
    eyebrow: "Idea to Project",
    title: "Start small, then make it real.",
    text: "A good idea becomes useful when it is scoped, built, tested, refined, and shared with the right people.",
    image: "/storytelling-digital-creativity.png",
    href: "#/using-ai-tools?section=idea-now-what",
    cta: "Explore Ideas"
  },
  "/using-ai-tools?section=money-scale": {
    eyebrow: "Money & Scale",
    title: "Build systems that can grow.",
    text: "Income grows best when the offer is useful, the systems are simple, and the work can be repeated without burnout.",
    image: "/staydirect-dashboard.png",
    href: "#/using-ai-tools?section=money-scale",
    cta: "Explore Scale"
  },
  "/using-ai-tools": {
    eyebrow: "Our Story",
    title: "The story behind the journey.",
    text: "We are building this life as a family, one decision, project, adventure, and honest lesson at a time.",
    image: "/wilson-whanau.png",
    href: "#/journey",
    cta: "Follow Our Journey"
  },
  "/blogs": {
    eyebrow: "Stories & Notes",
    title: "Read by topic. Grow at your own pace.",
    text: "Our writing lives inside the pillars, so you can follow the ideas that matter most to your current season.",
    image: "/read-by-theme.png",
    href: "#/",
    cta: "Explore Pillars"
  },
  "/contact": {
    eyebrow: "Connect",
    title: "Let us stay connected.",
    text: "Questions, collaborations, stories, and kindred ideas are welcome here. Reach out or follow the journey.",
    image: "/wilsons-contact.png",
    href: "#/contact",
    cta: "Contact Us"
  }
};

const hideFooterPanelPaths = new Set(["/freedom-wealth"]);

function getFooterPath() {
  if (typeof window === "undefined") {
    return "/";
  }

  const hash = window.location.hash.replace(/^#/, "") || "/";
  const path = hash.split(/[?#]/)[0] || "/";
  const query = hash.split("?")[1]?.split("#")[0] || "";
  const querySection = new URLSearchParams(query).get("section");
  const anchorSection = hash.split("#")[1];
  const section = querySection || anchorSection;
  const sectionKey = section ? `${path}?section=${section}` : path;

  return footerPanels[sectionKey] ? sectionKey : path;
}

function useFooterPanel() {
  const [path, setPath] = useState(getFooterPath);

  useEffect(() => {
    const updatePath = () => setPath(getFooterPath());
    window.addEventListener("hashchange", updatePath);
    return () => window.removeEventListener("hashchange", updatePath);
  }, []);

  if (hideFooterPanelPaths.has(path)) {
    return null;
  }

  const panel = footerPanels[path] || defaultFooterPanel;
  const scenery = getFooterScenery(path);
  return { ...panel, image: scenery.image, imagePosition: scenery.position };
}

function scrollToFooterTarget(href) {
  if (!href?.startsWith("#/") || !href.includes("anchor=")) return;
  const query = href.split("?")[1]?.split("#")[0] || "";
  const targetId = new URLSearchParams(query).get("anchor");
  if (!targetId) return;
  window.setTimeout(() => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 90);
}

const footerColumns = [
  {
    title: "Explore",
    links: [
      ["Home", "#/"],
      ["Our Story", "#/our-story"],
      ["Follow Our Journey", "#/journey"]
    ]
  },
  {
    title: "Content Pillars",
    links: [
      ["Freedom & Wealth", "#/freedom-wealth"],
      ["Family & Travel", "#/family-travel?section=why-travel"],
      ["Conscious Living", "#/spiritual-conscious"],
      ["Home & Living", "#/home-lifestyle?section=sovereign-lifestyle"],
      ["AI Tools", "#/using-ai-tools?section=ai-tools&anchor=ai-tools-we-use"]
    ]
  },
  {
    title: "Learn",
    links: [
      ["Online Trading Course", toolLinks.abundantFreedom],
      ["Guides Library", "#/guides-library"],
      ["Recommended Reading", "#/recommended-reading"]
    ]
  },
  {
    title: "Connect",
    links: [
      ["Contact", "#/contact"],
      ["Discord", discordUrl],
      ["Instagram", instagramUrl],
      ["YouTube", youtubeUrl]
    ]
  },
  {
    title: "Our Projects",
    links: [
      ["Deloraine Cattery", toolLinks.deloraineCattery],
      ["Deloraine Cottage", toolLinks.deloraineCottage],
      ["QHHT", toolLinks.guidedHealing],
      ["Online Trading", toolLinks.abundantFreedom],
      ["Stay Direct", toolLinks.stayDirect]
    ]
  }
];

export default function Footer() {
  const footerPanel = useFooterPanel();

  return (
    <>
      {footerPanel ? (
        <section className="container-page pb-16 pt-3">
          <div className="relative overflow-hidden rounded-lg border border-manuka/25 bg-forest text-sand shadow-editorial">
            <div className="absolute inset-0">
              <img
                src={footerPanel.image}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: footerPanel.imagePosition || "center" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-forest/78 to-ink/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(222,174,77,0.2),transparent_32%)]" />
            </div>

            <div className="relative grid min-h-[238px] gap-0 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-stretch">
              <div className="flex max-w-3xl flex-col justify-center px-6 py-7 sm:px-8 lg:px-10">
                <p className="eyebrow text-manuka">{footerPanel.eyebrow}</p>
                <h2 className="mt-2 max-w-2xl font-display text-2xl font-bold leading-tight text-sand sm:text-3xl">
                  {footerPanel.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-sand/82 sm:text-base">
                  {footerPanel.text}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 border-t border-white/10 px-6 pb-7 sm:px-8 lg:border-l lg:border-t-0 lg:py-7">
                <a
                  href={footerPanel.href}
                  onClick={() => scrollToFooterTarget(footerPanel.href)}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-manuka px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-ink shadow-sm transition hover:bg-sand"
                >
                  {footerPanel.cta}
                  <ArrowRight size={19} />
                </a>
                <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-sand/68">
                  Create freedom. Live fully.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <footer className="bg-forest text-white">
        <div className="container-page grid gap-4 py-4 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-manuka">{title}</h2>
              <ul className={`mt-2 grid gap-y-1 ${title === "Popular Topics" ? "sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-1 xl:grid-cols-2" : ""}`}>
                {links.map(([label, href]) => (
                  <li key={`${title}-${label}`}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-[0.72rem] font-semibold leading-4 text-white/72 transition hover:text-manuka"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="container-page flex flex-col gap-2 border-t border-white/10 py-3 text-[0.72rem] text-white/62 md:flex-row md:items-center md:justify-between">
          <Logo variant="dark" showFamily={false} compact />
          <p>Create freedom. Live fully.</p>
          <p>© 2024 Unbordered Family. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
