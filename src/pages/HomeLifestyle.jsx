import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  BookOpen,
  Cat,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  Download,
  Egg,
  Flame,
  Flower2,
  Grid3X3,
  Heart,
  Home,
  Landmark,
  Leaf,
  MapPin,
  Mountain,
  PawPrint,
  Recycle,
  ShieldCheck,
  Sprout,
  Sun,
  TentTree,
  Trees,
  Users,
  Waves,
  X
} from "lucide-react";
import { toolLinks } from "../data/toolLinks.js";

const pillars = [
  {
    id: "sovereign-lifestyle",
    number: "01",
    title: "Sovereign Lifestyle",
    icon: Sun,
    cardText: "Control your time, income, choices and direction. Not dependent on one employer or one system.",
    lead: "Freedom begins with ownership of your choices.",
    intro: [
      "Not just your money. Your body. Your health. Your time. Your work. Your family. Your future.",
      "For us, sovereignty isn't political. It's personal. It's about creating a life where we are free to make decisions that align with our values rather than being forced into decisions because of financial pressure, social pressure, or government policy.",
      "We don't expect everyone to agree with our choices. We simply believe every family should have the right to make informed decisions for themselves."
    ],
    quote: "Freedom isn't doing whatever you want. It's having enough options that you can choose what aligns with your values.",
    content: <SovereignLifestyle />
  },
  {
    id: "nature-outdoor-adventures",
    number: "02",
    title: "Nature & Outdoor Adventures",
    icon: Mountain,
    cardText: "Living close to nature means endless free adventures, learning and connection.",
    lead: "Adventure is our everyday classroom.",
    intro: [
      "We live surrounded by nature's playground. Rivers, forests, beaches, mountains and trails are right on our doorstep, and they're free.",
      "Our family spends as much time outside as possible, exploring, learning, moving, creating memories and connecting with the natural world."
    ],
    quote: "The best memories aren't planned. They're found outside.",
    content: <NatureAdventures />
  },
  {
    id: "connection-to-roots",
    number: "03",
    title: "Connection to Roots",
    icon: Waves,
    cardText: "Whakapapa, belonging, and honouring where we come from and what matters most.",
    lead: "Knowing where you come from gives clarity to where you're going.",
    intro: [
      "Our roots ground us. They remind us who we are, where we belong, and what truly matters.",
      "For us, this means honouring our whakapapa, our whenua, our whānau, and the stories that came before us, while creating new ones for the generations to come."
    ],
    quote: "He aha te mea nui o te ao? He tangata, he tangata, he tangata. What is the most important thing in the world? It is people, it is people, it is people.",
    quoteByline: "Māori Proverb",
    content: <ConnectionRoots />
  },
  {
    id: "income-generating-property",
    number: "04",
    title: "Income Generating Property",
    icon: Home,
    cardText: "Building flexible income streams around lifestyle through our cottage, cattery & more.",
    lead: "We build income around lifestyle, not the other way around.",
    intro: [
      "We didn't buy property to chase profit. We bought it to create freedom, time and security for our family, and built income streams that support the life we want to live.",
      "Our properties work for us. They generate income, increase in value, provide for our lifestyle and are structured to protect what matters most."
    ],
    quote: "Buy a property that gives you the lifestyle you want, then build income streams from it. Let the property serve your family, not the other way around.",
    content: <IncomeProperty />
  },
  {
    id: "food-security-self-sufficiency",
    number: "05",
    title: "Food Security & Self Sufficiency",
    icon: Sprout,
    cardText: "Grow more, consume less, share more. Building resilience through food, knowledge & community.",
    lead: "Real food. Real health. Real independence.",
    intro: [
      "Food security is freedom. It's knowing where your food comes from, growing it with care, and sharing it with the people you love.",
      "We grow what we can, raise what we need, and preserve the rest. It's better for our health, our budget and our environment, and it brings incredible connection and purpose to daily life."
    ],
    quote: "When you control your food, you take back a powerful part of your freedom. It's not just about saving money. It's about knowing what's on your plate, and building resilience for the future.",
    content: <FoodSecurity />
  }
];

const projectCards = [
  ["Deloraine Cattery", "Our primary income stream. Purpose-built with love, designed for cat comfort.", "/home-deloraine-cattery.png", toolLinks.deloraineCattery],
  ["Deloraine Cottage", "French-inspired guest accommodation that gives guests a true Northland stay.", "/home-deloraine-cottage.png", toolLinks.deloraineCottage],
  ["GuidedHealing.nz", "A calm spiritual platform helping people soften into presence.", "/home-guidedhealing-nz.png", toolLinks.guidedHealing],
  ["StayDirect.nz", "Property management tools for hosts and travellers.", "/home-staydirect-nz.png", toolLinks.stayDirect],
  ["CatStays.app", "Helping cattery owners streamline bookings.", "/home-catstays-app.png", toolLinks.catStays],
  ["AbundantFreedom.online", "Trading, tools and freedom resources for building income with clarity.", "/home-abundantfreedom-online.png", toolLinks.abundantFreedom]
];

const dayMoments = [
  ["Morning", "Feed the cats, check on guests, coffee on the veranda.", "/day-morning.png", Sun],
  ["Late Morning", "Work on projects, content creation, property admin.", "/day-late-morning.png", Home],
  ["Midday", "Family time, outdoor adventures, homeschooling, errands.", "/day-midday.png", Users],
  ["Afternoon", "Kayaking, beach walks, hikes, waterfalls, bush exploring.", "/day-afternoon.png", Waves],
  ["Evening", "Family dinner, fire pit and chats, stargazing.", "/day-evening.png", Flame]
];

const patauaStory = [
  "Some of our most treasured memories were formed at Pātaua.",
  "Long before online businesses, booking platforms, AI tools, and the busyness of modern life, there were summers shaped by something much simpler: family, nature, and freedom.",
  "Every year we would pack up and head to Pātaua. The journey itself felt like leaving one world behind and entering another. There was no rush to be anywhere. No endless notifications. No pressure to perform. Just the promise of long days stretching ahead.",
  "Back then there was no power at the bach.",
  "The refrigerator ran on gas. The evenings were lit by lanterns. Water was precious. Entertainment wasn't streamed through a screen - it was found outside.",
  "We swam in the estuary for hours. We explored the rocks looking for crabs. We fished from the beach and collected shellfish when conditions allowed.",
  "We kayaked, walked, explored, built things, and invented games. The days felt endless.",
  "When the tide changed, the whole rhythm of the day changed with it. When the weather shifted, we adapted.",
  "Nature wasn't something we visited. It was something we lived inside.",
  "What we didn't realise at the time was that these summers were teaching us lessons that would stay with us for life.",
  "We learned that happiness doesn't require constant consumption. We learned that freedom is often found in simplicity. We learned that the best conversations happen when nobody is distracted. We learned that some of life's richest moments cost very little.",
  "Pātaua also shaped our understanding of self-sufficiency. Fishing wasn't a hobby. It was food.",
  "Growing, gathering, sharing, and looking after what you had simply felt normal. There was an understanding that resources mattered and that waste mattered too.",
  "Those experiences planted seeds that continue to influence how we live today: the food security projects we build, the gardens we grow, the way we think about home, family, and community, and the desire to create businesses that support lifestyle rather than consume it.",
  "Even now, when life becomes busy, we often find ourselves reflecting on those summers. Not because we want to go backwards, but because they remind us what matters: presence, connection, adventure, purpose, family.",
  "Pātaua showed us that a rich life is not necessarily a complicated one. It showed us that freedom is not something you buy one day in the future. It is something you intentionally create.",
  "And for us, it all began with long summers, no power, no rush, and a small piece of Northland coastline that still feels like home."
];

const guidePopups = {
  rooted: {
    title: "Rooted in New Zealand",
    subtitle: "Whakapapa. Manaakitanga. Kaitiakitanga.",
    image: "/rooted-in-new-zealand-guide.png",
    download: "/rooted-in-new-zealand-guide.png",
    type: "image"
  },
  pataua: {
    title: "Summers at Pātaua",
    subtitle: "Long summers, no power, no rush.",
    image: "/summers-at-pataua-guide.png",
    download: "/summers-at-pataua-guide.png",
    type: "image"
  },
  food: {
    title: "Food Security & Storage Guide",
    subtitle: "Be prepared. Eat well. Live free.",
    image: "/food-security-storage-guide.png",
    download: "/food-security-storage-guide.png",
    type: "image"
  }
};

const defaultPillarId = "sovereign-lifestyle";

export default function HomeLifestyle() {
  const [activeId, setActiveId] = useState(() => getSectionFromHash());
  const activePillar = useMemo(() => pillars.find((pillar) => pillar.id === activeId) || null, [activeId]);

  useEffect(() => {
    const onHashChange = () => {
      const nextSection = getSectionFromHash();
      setActiveId(nextSection);
      const explicitSection = getExplicitSectionFromHash();
      if (explicitSection) {
        window.setTimeout(() => {
          document.getElementById(explicitSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    };
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const selectPillar = (id) => {
    const nextId = activeId === id ? "" : id;
    setActiveId(nextId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", nextId ? `#/home-lifestyle?section=${nextId}` : "#/home-lifestyle");
    }
    window.setTimeout(() => {
      document.getElementById(nextId || "pillars")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  const clearPillar = () => {
    setActiveId("");
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "#/home-lifestyle");
    }
    window.setTimeout(() => document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
  };

  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden bg-ink text-white">
        <img
          src="/our-home.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-72"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/12" />
        <div className="container-page relative grid min-h-[560px] items-center py-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-manuka">Home & Lifestyle</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[0.96] text-sand sm:text-7xl">
              Freedom doesn't have to mean
              <span className="block text-manuka">leaving home.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-sand/84">
              A life built around family, nature, flexibility, and meaningful work.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-sand/72">
              We didn't build Deloraine to escape life. We built it to create a life we didn't need to escape from.
              Through our cattery, cottage, gardens, animals and connection to place, we've created a lifestyle
              that prioritises freedom, family and intentional living.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#/home-lifestyle#pillars" className="btn-primary bg-manuka text-ink hover:bg-sand">
                Explore Our Lifestyle
                <ArrowRight size={16} />
              </a>
              <a href={toolLinks.deloraineCottage} target="_blank" rel="noreferrer" className="btn-secondary border-manuka/55">
                Deloraine Cottage
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" className="container-page py-10">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.28em] text-ink">
          The 5 pillars of our lifestyle
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              active={activePillar?.id === pillar.id}
              onSelect={() => selectPillar(pillar.id)}
            />
          ))}
        </div>
      </section>

      {activePillar && (
        <ExpandedPillar pillar={activePillar} onBack={clearPillar} onSelect={selectPillar} />
      )}

      <LifestyleOverview />
    </main>
  );
}

function getSectionFromHash() {
  return getExplicitSectionFromHash() || defaultPillarId;
}

function getExplicitSectionFromHash() {
  if (typeof window === "undefined") return "";
  const raw = window.location.hash.replace("#", "") || "/";
  const query = raw.split("?")[1]?.split("#")[0] || "";
  const fromQuery = new URLSearchParams(query).get("section");
  const fromHash = raw.split("#")[1];
  const section = fromQuery || fromHash || "";
  return pillars.some((pillar) => pillar.id === section) ? section : "";
}

function PillarCard({ pillar, active, onSelect }) {
  const Icon = pillar.icon;
  return (
    <article className={`flex min-h-[330px] flex-col rounded-lg border bg-white/84 p-5 shadow-sm transition ${active ? "border-manuka ring-1 ring-manuka/70" : "border-forest/10"}`}>
      <div className="flex items-start gap-4">
        <Icon size={48} strokeWidth={1.55} className="shrink-0 text-ink" />
        <div>
          <p className="text-xs font-extrabold text-manuka">{pillar.number}</p>
          <h2 className="mt-1 font-display text-lg font-bold leading-tight text-ink">{pillar.title}</h2>
        </div>
      </div>
      <p className="mt-7 text-sm leading-7 text-ink/76">{pillar.cardText}</p>
      <button
        type="button"
        onClick={onSelect}
        className="mx-auto mt-auto inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-forest"
      >
        {active ? "Hide Details" : "Explore"}
        <ArrowRight size={15} className={active ? "-rotate-90 text-manuka" : "text-manuka"} />
      </button>
    </article>
  );
}

function ExpandedPillar({ pillar, onBack, onSelect }) {
  const index = pillars.findIndex((item) => item.id === pillar.id);
  const previous = pillars[(index - 1 + pillars.length) % pillars.length];
  const next = pillars[(index + 1) % pillars.length];

  return (
    <section id={pillar.id} className="container-page pb-12">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-manuka"
      >
        <ArrowRight size={14} className="rotate-180" />
        Collapse details
      </button>

      <div className="grid gap-8 lg:grid-cols-[0.54fr_0.46fr] lg:items-start">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            <span className="mr-4 text-manuka">{pillar.number}</span>
            {pillar.title}
          </h2>
          <p className="mt-4 text-lg font-extrabold text-ink">{pillar.lead}</p>
          <div className="mt-3 space-y-3 text-sm leading-7 text-ink/82">
            {pillar.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <QuoteCard quote={pillar.quote} byline={pillar.quoteByline || "Unbordered Family"} />
      </div>

      <div className="mt-8">{pillar.content}</div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:items-center">
        <button
          type="button"
          onClick={() => onSelect(previous.id)}
          className="text-left text-xs font-extrabold uppercase tracking-wide text-ink"
        >
          <span className="block text-[0.65rem] text-ink/60">Previous Pillar</span>
          {previous.number} {previous.title}
        </button>
        <button type="button" className="btn-light justify-center" onClick={onBack}>
          <Grid3X3 size={16} />
          Collapse Details
        </button>
        <button
          type="button"
          onClick={() => onSelect(next.id)}
          className="text-right text-xs font-extrabold uppercase tracking-wide text-ink"
        >
          <span className="block text-[0.65rem] text-ink/60">Next Pillar</span>
          {next.number} {next.title}
        </button>
      </div>
    </section>
  );
}

function LifestyleOverview() {
  const [activeGuideId, setActiveGuideId] = useState("");
  const activeGuide = activeGuideId ? guidePopups[activeGuideId] : null;

  return (
    <>
      <section className="bg-ink py-9 text-white">
        <div className="container-page">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-manuka">
            The projects that support our lifestyle
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {projectCards.map(([title, text, image, href]) => {
              const CardTag = href ? "a" : "article";
              return (
              <CardTag key={title} href={href || undefined} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined} className="block overflow-hidden rounded-md border border-manuka/30 bg-white/8 transition hover:-translate-y-0.5 hover:border-manuka/70">
                <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
                <div className="p-3">
                  <h3 className="text-sm font-extrabold text-sand">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-white/66">{text}</p>
                </div>
              </CardTag>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-5">
            <Leaf className="text-manuka" size={22} />
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-ink">A day in our world</p>
            <Leaf className="scale-x-[-1] text-manuka" size={22} />
          </div>
          <div className="mx-auto mt-3 h-px w-44 bg-forest/30" />
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-5">
          {dayMoments.map(([time, text, image, Icon], index) => (
            <article key={time} className="flex min-h-[300px] flex-col overflow-hidden rounded-lg border border-forest/10 bg-white text-center shadow-soft">
              <div className="flex flex-1 flex-col p-5">
                <span className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-manuka/40 bg-manuka/12 text-sm font-extrabold text-manuka">
                  {index + 1}
                </span>
                <Icon className="mx-auto mt-4 text-forest/72" size={42} strokeWidth={1.5} />
                <h3 className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-ink">{time}</h3>
                <div className="mx-auto mt-3 h-px w-12 bg-manuka/50" />
                <p className="mt-3 text-sm leading-6 text-ink/72">{text}</p>
              </div>
              <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
            </article>
          ))}
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_1.35fr_1fr]">
          <GuideFeaturePanel
            title="Rooted in New Zealand"
            items={["Whakapapa", "Manaakitanga", "Kaitiakitanga", "Kotahitanga"]}
            button="Learn More"
            image="/rooted-in-new-zealand-guide.png"
            onOpen={() => setActiveGuideId("rooted")}
          />

          <article className="relative flex min-h-[360px] flex-col overflow-hidden rounded-lg bg-ink p-7 text-white shadow-editorial">
            <img src="/pataua-north-road-aerial.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-58" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/58 to-forest/24" />
            <div className="relative flex flex-1 flex-col">
              <p className="eyebrow text-manuka">Summers at Pātaua</p>
              <h3 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight text-sand">
                Long summers, no power, no rush.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-sand/84">
                Just nature, family and freedom. A place that shaped us and still calls us home.
              </p>
              <button type="button" onClick={() => setActiveGuideId("pataua")} className="btn-secondary mx-auto mt-auto border-manuka/50">
                Read the Story
                <ArrowRight size={16} />
              </button>
            </div>
          </article>

          <GuideFeaturePanel
            title="Food Security & Self Sufficiency"
            items={["Vegetable gardens", "Fruit trees & orchards", "Fresh eggs daily", "Fishing & kaimoana"]}
            button="Learn More"
            image="/food-security-storage-guide.png"
            onOpen={() => setActiveGuideId("food")}
          />
        </div>

        <div className="mt-7 grid gap-3 rounded-lg border border-forest/10 bg-white/78 p-5 shadow-soft sm:grid-cols-2 lg:grid-cols-5">
          {[
            [Leaf, "Live With Purpose", "Meaningful work, family and freedom."],
            [Landmark, "Connected to Land", "We protect, respect and care for our whenua."],
            [Users, "Stronger Together", "Family first, community always."],
            [Sun, "Simple & Intentional", "Choosing what matters. Letting go of the rest."],
            [Sprout, "Build a Legacy", "Creating a life of impact for generations."]
          ].map(([Icon, title, text]) => (
            <article key={title} className="flex items-center gap-4 border-forest/10 lg:border-r lg:pr-4 lg:last:border-r-0">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sand/70 text-ink">
                <Icon size={25} strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-ink">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-ink/68">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeGuide && <GuideModal guide={activeGuide} onClose={() => setActiveGuideId("")} />}

      <section className="relative overflow-hidden bg-ink text-white">
        <img src="/pacific-family-route.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-forest/60" />
        <div className="container-page relative grid gap-8 py-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-sand">Home is more than a place. It is the people you love.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-sand/76">
              The values you carry. The freedom you protect. And the life you intentionally build.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="#/family-travel?section=why-travel" className="btn-primary bg-manuka text-ink hover:bg-sand">Explore Family & Travel</a>
            <a href="#/freedom-wealth" className="btn-secondary border-manuka/55">Explore Freedom & Wealth</a>
          </div>
        </div>
      </section>
    </>
  );
}

function GuideFeaturePanel({ title, items, button, image, onOpen }) {
  return (
    <article className="relative flex min-h-[360px] flex-col overflow-hidden rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
      <h3 className="relative font-display text-2xl font-bold text-ink">{title}</h3>
      <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-md bg-mist p-3 text-center text-xs font-bold text-ink/74">{item}</div>
        ))}
      </div>
      <button type="button" onClick={onOpen} className="btn-light relative mx-auto mt-auto">
        {button}
        <ArrowRight size={15} />
      </button>
    </article>
  );
}

function GuideModal({ guide, onClose }) {
  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto bg-ink/78 px-4 py-6 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-manuka/30 bg-mist shadow-editorial">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-forest/10 bg-white/95 px-4 py-3 backdrop-blur">
          <div>
            <p className="eyebrow text-manuka">{guide.subtitle}</p>
            <h2 className="font-display text-2xl font-bold text-ink">{guide.title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <a href={guide.download} download className="btn-light px-4 py-2 text-xs">
              <Download size={15} />
              Download
            </a>
            <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white text-ink transition hover:bg-sage" aria-label="Close guide popup">
              <X size={18} />
            </button>
          </div>
        </div>

        {guide.type === "image" ? (
          <div className="bg-white p-4">
            <img src={guide.image} alt={`${guide.title} guide`} className="mx-auto max-h-[82vh] w-auto rounded-md object-contain shadow-soft" />
          </div>
        ) : (
          <div className="grid gap-0 bg-white lg:grid-cols-[0.42fr_0.58fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-ink">
              <img src={guide.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-72" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/36 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="eyebrow text-manuka">Summers at Pātaua</p>
                <h3 className="mt-3 font-display text-4xl font-bold leading-tight text-sand">
                  Long summers, no power, no rush.
                </h3>
              </div>
            </div>
            <article className="max-h-[82vh] overflow-y-auto p-6 sm:p-8">
              <p className="text-lg font-semibold leading-8 text-ink/78">
                Long before online businesses, booking platforms, AI tools, and the busyness of modern life,
                there were summers shaped by something much simpler: family, nature, and freedom.
              </p>
              <div className="mt-6 columns-1 gap-8 space-y-4 text-sm leading-7 text-ink/74 lg:columns-2">
                {patauaStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        )}
      </div>
    </div>
  );
}

function SovereignLifestyle() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.34fr_0.34fr_0.32fr]">
      <InfoCard title="What Sovereignty Means to Us">
        <IconParagraph icon={Leaf} title="Health Sovereignty" text="We take an active role in our health, combining modern knowledge with traditional wisdom and natural approaches." />
        <Checklist items={["Rongoā Māori", "Kawakawa balm", "Herbal tinctures", "Meditation", "Ozonated water", "Nature immersion", "Mindfulness practices", "Home-prepared food"]} columns />
        <Divider />
        <IconParagraph icon={CircleDollarSign} title="Financial Sovereignty" text="Money creates choices. We intentionally built income streams through Deloraine Cattery, Deloraine Cottage, Guided Healing, digital projects and future lifestyle properties." />
        <Divider />
        <IconParagraph icon={Compass} title="Time Sovereignty" text="Time is the one thing we can never earn back. Our goal has never been to become wealthy so we can work more. It has been to create enough flexibility that we can spend more time doing what matters most." />
      </InfoCard>
      <InfoCard title="Education Sovereignty">
        <IconParagraph icon={BookOpen} title="Learning happens everywhere." text="Not just inside a classroom. Our children learn through travel, business projects, nature, community, reading, exploration and real-life experiences." />
        <Divider />
        <IconParagraph icon={Sun} title="Freedom of Thought" text="One of the most important lessons we try to teach our children is how to think rather than what to think." />
        <Checklist items={["Ask questions.", "Stay curious.", "Explore different perspectives.", "Make decisions based on evidence, intuition, experience and responsibility."]} />
        <Divider />
        <IconParagraph icon={Users} title="What We Learnt During COVID" text="The more dependent you are on systems you don't control, the fewer choices you have when circumstances change." />
      </InfoCard>
      <div className="grid gap-5">
        <InfoCard title="Our Sovereignty Principles">
          <IconList items={["We choose responsibility over dependency.", "We choose preparation over fear.", "We choose flexibility over rigidity.", "We choose participation over passivity.", "We choose freedom with responsibility.", "We choose family first."]} />
        </InfoCard>
        <InfoCard title="What Anyone Can Start Doing">
          <p className="text-sm leading-6 text-ink/76">You don't need a trust. You don't need acreage. You don't need multiple businesses. You can begin where you are.</p>
          <Checklist items={["Learn one new skill.", "Grow one vegetable.", "Reduce one dependency.", "Create one income stream.", "Spend one afternoon in nature.", "Ask one better question."]} />
        </InfoCard>
        <RememberCard title="Remember">
          You do not need permission to become more capable. You do not need permission to become more resilient. You do not need permission to take responsibility for your own life.
        </RememberCard>
      </div>
    </div>
  );
}

function NatureAdventures() {
  return (
    <div className="rounded-lg border border-forest/10 bg-white/76 p-6 shadow-soft">
      <div className="grid gap-8 lg:grid-cols-[0.42fr_0.38fr_0.2fr]">
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">What nature gives our family</h3>
          <Checklist items={["Physical health and wellbeing - moving our bodies every day.", "Connection and presence - we slow down and truly see each other.", "Real-world learning and curiosity - nature sparks endless questions.", "Resilience, confidence and independence - challenges build strength.", "A deep respect for the land and environment - caring for what we love.", "Simple, meaningful family time - the best things in life are free."]} />
        </div>
        <div className="border-forest/10 lg:border-l lg:pl-8">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">Our favourite outdoor pursuits</h3>
          <IconParagraph icon={TentTree} title="Kayaking & River Adventures" text="Exploring the Wairoa River and local waterways." />
          <IconParagraph icon={Waves} title="Beach Life" text="Beach walks, rock pools, sunrise swims and sandcastles." />
          <IconParagraph icon={Mountain} title="Hiking & Bush Walks" text="Waterfalls, native bush tracks, lookouts and valleys." />
          <IconParagraph icon={Flame} title="Camping & Tramping" text="Overnight adventures, freedom under the stars." />
          <IconParagraph icon={Leaf} title="Fishing & Foraging" text="Catching kai, learning skills, connecting to the land." />
        </div>
        <aside className="rounded-lg bg-mist p-6 text-center font-display text-2xl italic leading-relaxed text-ink shadow-sm">
          The best memories aren't planned. They're found outside.
          <Heart className="mx-auto mt-5 text-ink" />
        </aside>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <InfoCard title="Learning Without Walls">
          <p className="text-sm leading-6 text-ink/76">Nature is one of the greatest teachers. We learn by doing, exploring and experiencing.</p>
          <BulletList items={["Risk assessment", "Observation", "Patience", "Environmental awareness", "Self-confidence"]} />
        </InfoCard>
        <InfoCard title="Why This Matters">
          <p className="text-sm leading-7 text-ink/76">Many families believe freedom requires more money. We've found it often requires more imagination.</p>
          <p className="mt-5 text-center font-display text-xl italic text-forest">We don't just visit these places. We belong to them.</p>
        </InfoCard>
        <InfoCard title="Places We Love">
          <IconList icon={MapPin} items={["Pataua", "Wairoa River", "Matai Bay", "Taupo Bay", "Whangārei Falls", "Tutukaka Coast", "Bream Head Coastal Walkway", "Whangārei Heads"]} />
        </InfoCard>
      </div>
      <BottomTips
        title="Things Anyone Can Start Doing"
        items={["One family adventure per week - even a simple walk or beach visit.", "One day per month without screens - go outside and explore.", "Learn one new local walk or spot - make it a family mission.", "Visit a river instead of a shopping mall - nature is the best reset.", "Let children get dirty - mud, scratches and sunshine build character."]}
      />
    </div>
  );
}

function ConnectionRoots() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <InfoCard title="What Connection to Roots Means to Us">
        <IconParagraph icon={Waves} title="Honouring Whakapapa" text="We honour our ancestors and the journey that brought us here." />
        <IconParagraph icon={Heart} title="Belonging & Identity" text="We know who we are, where we come from, and what we stand for." />
        <IconParagraph icon={Leaf} title="Connection to Land" text="We care for the land that sustains us and teaches us." />
        <IconParagraph icon={Users} title="Strong Whānau & Community" text="We build and nurture relationships that support and uplift." />
        <IconParagraph icon={Compass} title="Living Our Values" text="We make choices that align with our beliefs and the legacy we want to leave." />
      </InfoCard>
      <InfoCard title="How We Stay Connected">
        <Checklist items={["Spending time at Pataua, where our story runs deep.", "Sharing stories of our ancestors and family history.", "Teaching our children te reo Māori and tikanga.", "Celebrating Māori traditions and important dates.", "Supporting local Māori creators and businesses.", "Being active in our local communities."]} />
        <div className="mt-6 rounded-lg bg-mist p-5 text-center">
          <p className="text-xs font-extrabold uppercase tracking-wide text-ink">Our children are learning</p>
          <BulletList items={["Where they come from", "Who their people are", "How to respect the land and all living things", "The importance of giving back", "That they belong"]} />
          <p className="mt-4 font-display text-xl italic text-forest">These are the roots that grow strong.</p>
        </div>
      </InfoCard>
      <InfoCard title="Ways to Deepen Your Roots">
        <NumberedList items={["Learn your family history. Ask questions. Record stories.", "Spend time on your whenua. Walk it, care for it, know it.", "Learn local history and the stories of your area.", "Build relationships with your neighbours and community.", "Support local and indigenous initiatives.", "Pass down knowledge, values and traditions to the next generation."]} />
      </InfoCard>
      <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm lg:col-span-3">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">Resources & Inspiration</h3>
            <IconList icon={ArrowRight} items={["Te Ara Encyclopedia of New Zealand", "NZ History Online", "Te Papa Collections & Stories", "National Library Tuia 250 - Our Stories", "Local Marae & Iwi Websites"]} />
          </div>
          <div className="rounded-lg bg-mist p-5">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">Reflect & Connect</h3>
            <p className="mt-3 text-sm leading-6 text-ink/76">Take time to reflect on your own roots. Where do you feel a sense of belonging? What stories do you want your children to carry forward?</p>
          </div>
        </div>
      </article>
    </div>
  );
}

function IncomeProperty() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <InfoCard title="Our Income Generating Properties">
        <IconParagraph icon={Cat} title="Deloraine Cattery" text="Our primary income stream. Built with love and designed for cats and their humans." />
        <IconParagraph icon={Home} title="Deloraine Cottage" text="French-inspired guest accommodation offering comfort, charm and a true Northland stay." />
        <IconParagraph icon={Waves} title="Pataua North" text="Our coastal escape. A long-term asset for lifestyle, income potential and future growth." />
        <IconParagraph icon={Heart} title="Events & Retreats" text="We host events, weddings, fundraisers and retreats aligned with our values." />
      </InfoCard>
      <InfoCard title="Why Our Property Works For Us">
        <Checklist items={["It creates the lifestyle we want.", "It generates multiple income streams.", "It grows in value over time.", "All income is tax deductible.", "All expenses are claimable.", "Owned within our family trust.", "Protected from personal liability.", "Provides flexibility, freedom and options for our future."]} />
        <div className="mt-6 rounded-lg bg-mist p-5 text-center">
          <p className="text-xs font-extrabold uppercase tracking-wide text-ink">Tax Benefits & Structure</p>
          <p className="mt-3 text-sm leading-6 text-ink/76">All income is redeemable against business and tax expenses. Structured within our family trust for asset protection and long-term security.</p>
          <p className="mt-3 font-display text-xl italic text-forest">Smart structure. Strong protection. Freedom for generations.</p>
        </div>
      </InfoCard>
      <InfoCard title="Lifestyle Features We Love">
        <IconList items={["Expansive grounds to grow our own food, fruit trees and herbs.", "Vegetable gardens and green spaces for a sustainable lifestyle.", "Swimming pool and spa for rest, play and connection.", "Gazebo and outdoor dining area for long summer evenings.", "Fire pit for warmth, ambience and quality time together.", "Outdoor playground, trees to climb and space for kids to be kids.", "Peace, privacy and nature all around."]} />
      </InfoCard>
      <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm lg:col-span-2">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">How We Use Our Property</h3>
            <IconList items={["Live here and love it.", "Generate income while we sleep.", "Host events that give back.", "Create unforgettable guest experiences.", "Build a life of freedom, not financial stress."]} />
          </div>
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">The Results For Our Family</h3>
            <IconList icon={CheckCircle2} items={["More time together doing what we love.", "Financial freedom and peace of mind.", "A secure future for our children.", "A lifestyle that money can't buy.", "A legacy we're proud to build."]} />
          </div>
        </div>
      </article>
      <RememberCard title="Remember">
        Don't buy a property to just hold it. Buy a property to live it, love it and let it provide for you.
      </RememberCard>
    </div>
  );
}

function FoodSecurity() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <InfoCard title="Growing Our Own Food">
        <IconParagraph icon={Sprout} title="Fruit Trees Everywhere" text="Plant any available space with a variety of fruit trees. Always include more than one variety where needed." />
        <IconParagraph icon={Sun} title="Tropical Fruits in the Sun" text="Bananas, guavas, pawpaws, pineapples and more love full sun." />
        <IconParagraph icon={Leaf} title="Kitchen Garden Close By" text="Our main veggie garden is right by the cottage so we can pick fresh daily." />
        <IconParagraph icon={Flower2} title="Big Crops Up Top" text="Cucumbers, pumpkins, potatoes, corn and other crops grow at the top of the property." />
        <IconParagraph icon={Recycle} title="Rotate, Replant, Repeat" text="We rotate crops, keep soil fertile and work with nature, not against it." />
      </InfoCard>
      <InfoCard title="Animals That Work With Us">
        <IconParagraph icon={Egg} title="Chickens" text="They eat scraps, keep pests down, fertilise the soil and lay nutritious eggs." />
        <IconParagraph icon={Egg} title="Ducks" text="Free range in the orchard. They control bugs, forage fallen fruit and lay beautiful eggs." />
        <IconParagraph icon={PawPrint} title="Meat for the Freezer" text="We raise animals with care and respect. We honour every part." />
        <IconParagraph icon={Waves} title="Coastal Property" text="Our coastal block provides meat through a few cows and sheep that keep the land healthy." />
        <div className="mt-5 rounded-lg bg-mist p-4 text-center">
          <p className="font-extrabold text-ink">Respect. Gratitude. Connection.</p>
          <p className="mt-2 text-sm leading-6 text-ink/72">We have a relationship with our animals and the land. We're grateful for the food they provide.</p>
        </div>
      </InfoCard>
      <InfoCard title="More Than Just Food">
        <IconList items={["Save thousands on groceries every year.", "Know exactly what goes into our food.", "Better nutrition for our family.", "Less reliance on the system.", "Stronger immune systems and fewer allergies from real, whole foods.", "Less waste, more sustainability.", "Teaching our children valuable life skills.", "Share abundance with family, friends, neighbours and community."]} />
      </InfoCard>
      <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm lg:col-span-3">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg bg-mist p-5">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">Our Garden, Our Sanctuary</h3>
            <p className="mt-3 text-sm leading-7 text-ink/76">Our gardens aren't just productive, they're beautiful and magical. Terraced walkways, fairy lights, hidden spots to sit with a coffee, strawberries by the path, herbs at your fingertips.</p>
            <div className="mt-5 grid grid-cols-5 gap-2 text-center text-xs font-semibold text-ink/70">
              {["Gazebo & dining", "Terraced gardens", "Pick fresh strawberries", "Fire pit connection", "Playgrounds & trees"].map((item) => (
                <div key={item} className="rounded-md bg-white p-3">{item}</div>
              ))}
            </div>
            <p className="mt-4 text-center font-display text-xl italic text-forest">A space that nourishes our family in every way.</p>
          </div>
          <div className="rounded-lg bg-mist p-5">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">What We Avoid</h3>
            <p className="mt-3 text-sm leading-6 text-ink/76">We choose real food over convenience. Most supermarket food is loaded with things our bodies weren't meant to have.</p>
            <Checklist items={["Pesticides & herbicides", "Preservatives & additives", "Artificial colours & flavourings", "Excess sugar & refined carbs", "Hidden seed oils", "GMOs", "Over-processed foods", "Mystery ingredients"]} columns />
            <p className="mt-5 rounded-md bg-white p-4 text-center font-display text-lg italic text-forest">Our choice is simple: Grow real food. Eat real food. Feel better. Live better.</p>
          </div>
        </div>
      </article>
      <BottomTips
        title="Tips to Get Started"
        items={["Start small. Even a few pots of herbs makes a difference.", "Plant what you eat most often and what grows well in your area.", "Use companion planting and crop rotation for healthy soil.", "Compost everything you can and let animals help.", "Learn, experiment and enjoy the process."]}
      />
      <RememberCard title="Remember">
        Food security is one of the greatest gifts you can give your family. When you control your food, you control your future.
      </RememberCard>
    </div>
  );
}

function InfoCard({ title, children }) {
  return (
    <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">{title}</h3>
      <div className="mt-5 space-y-5">{children}</div>
    </article>
  );
}

function QuoteCard({ quote, byline }) {
  return (
    <aside className="rounded-lg bg-white/78 p-8 shadow-soft">
      <p className="font-display text-6xl leading-none text-manuka">“</p>
      <p className="mx-auto max-w-md font-display text-xl italic leading-9 text-ink">{quote}</p>
      <p className="mx-auto mt-5 max-w-md border-t border-manuka/45 pt-4 text-sm font-semibold italic text-ink/72">— {byline}</p>
    </aside>
  );
}

function RememberCard({ title, children }) {
  return (
    <aside className="rounded-lg bg-ink p-6 text-white shadow-soft">
      <div className="flex items-center gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-full border border-manuka/60 text-manuka">
          <ShieldCheck size={26} />
        </span>
        <p className="text-sm font-extrabold uppercase tracking-wide text-sand">{title}</p>
      </div>
      <p className="mt-5 text-sm leading-7 text-sand/82">{children}</p>
    </aside>
  );
}

function IconParagraph({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mist text-ink">
        <Icon size={23} strokeWidth={1.7} />
      </span>
      <div>
        <h4 className="font-extrabold text-ink">{title}</h4>
        <p className="mt-1 text-sm leading-6 text-ink/72">{text}</p>
      </div>
    </div>
  );
}

function Checklist({ items, columns = false }) {
  return (
    <ul className={`mt-4 grid gap-2 ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-6 text-ink/76">
          <CheckCircle2 className="mt-1 shrink-0 text-manuka" size={15} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function IconList({ items, icon: Icon = Heart }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-ink/76">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mist text-ink">
            <Icon size={16} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-ink/76">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-extrabold text-white">{index + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-ink/76">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function BottomTips({ title, items }) {
  return (
    <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm lg:col-span-2">
      <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">{title}</h3>
      <NumberedList items={items} />
    </article>
  );
}

function Divider() {
  return <div className="border-t border-forest/10" />;
}
