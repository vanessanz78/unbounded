import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Download,
  Eye,
  Heart,
  Leaf,
  Moon,
  PlaySquare,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
  Target,
  Users,
  Wind,
  X
} from "lucide-react";
import PillarDetailNavigation from "../components/PillarDetailNavigation.jsx";
import { getAmazonBookLink } from "../data/amazonBookLinks.js";
import { toolLinks } from "../data/toolLinks.js";

const pillars = [
  {
    id: "connection",
    number: "01",
    title: "Connection",
    subtitle: "The foundation of all",
    tagline: "We are part of something greater.",
    icon: Sprout,
    heroImage: "/spiritual-connection-hero.png",
    detailImage: "/spiritual-connection-detail.png",
    guideImage: "/spiritual-connection-checklist.png",
    quote: "When you change the way you look at things, the things you look at change.",
    quoteBy: "Wayne Dyer",
    intro: [
      "At the heart of our journey is the knowing that we are not separate. We are an expression of the Creator, part of the divine, and connected to all that is seen and unseen.",
      "Everything is alive. Everything holds energy. Everything is connected. When we live with this understanding, we move through life with reverence, gratitude, and a deep sense of belonging."
    ],
    checks: [
      "We are not separate.",
      "We are part of the Creator and creation.",
      "Everything is alive and holds intelligence.",
      "We honour the natural world.",
      "Our thoughts, words and actions create ripples.",
      "Gratitude opens the door to abundance."
    ],
    side: [
      ["We are connected", "To each other, to nature, to the Creator, and to the energies that shape reality.", Leaf],
      ["We live with reverence", "Every action, choice and word carries energy and intention.", Heart],
      ["We create with intention", "Our thoughts and words shape our reality and the world around us.", Sparkles],
      ["We contribute", "Our purpose is to uplift, support, and leave things better than we found them.", Users]
    ],
    practicesTitle: "Ways We Live Connection",
    practices: [
      ["Nature", "Spend time outside and listen deeply.", Leaf],
      ["Gratitude", "Notice what is already abundant.", Sun],
      ["Community", "Offer help, care and presence.", Users],
      ["Prayer", "Speak from the heart.", Heart],
      ["Stillness", "Let the nervous system soften.", Wind]
    ]
  },
  {
    id: "awareness",
    number: "02",
    title: "Awareness",
    subtitle: "The bridge to choice",
    tagline: "Observe. Understand. Be present.",
    icon: Brain,
    heroImage: "/spiritual-awareness-hero.png",
    detailImage: "/spiritual-awareness-detail.png",
    guideImage: "/spiritual-awareness-checklist.png",
    quote: "Awareness is the greatest agent for change.",
    quoteBy: "Eckhart Tolle",
    intro: [
      "Most people move through life on autopilot. They react without noticing, repeat patterns without questioning them, and inherit beliefs without examining them.",
      "Awareness is the moment we pause long enough to see what is actually happening. It is the bridge between unconscious reaction and conscious choice."
    ],
    checks: [
      "Awareness creates choice.",
      "Choice creates freedom.",
      "Presence is a practice.",
      "Thoughts influence experience.",
      "Emotions provide information.",
      "Growth starts when we are willing to see clearly."
    ],
    side: [
      ["Presence", "Fully arrive in this moment. Not yesterday. Not tomorrow. Just here.", Leaf],
      ["Thoughts & Mindset", "Our thoughts shape experience. Awareness helps us choose thoughts that support us.", Brain],
      ["Emotional Awareness", "Emotions are information, not problems. Feel them, understand them, learn from them.", Heart],
      ["Conscious Parenting", "Children learn awareness by observing awareness.", Users]
    ],
    practicesTitle: "Practical Ways We Build Awareness",
    practices: [
      ["Daily Reflection", "Take time to observe thoughts and feelings.", BookOpen],
      ["Journaling", "Create space for insight.", Compass],
      ["Meditation", "Train attention and presence.", Sparkles],
      ["Nature", "Step away from noise.", Leaf],
      ["Conversation", "Listen deeply and speak consciously.", Users]
    ]
  },
  {
    id: "healing",
    number: "03",
    title: "Healing",
    subtitle: "A return to wholeness",
    tagline: "Restore balance. Body, mind & soul.",
    icon: Heart,
    heroImage: "/spiritual-healing-hero.png",
    detailImage: "/spiritual-healing-detail.png",
    guideImage: "/spiritual-healing-checklist.png",
    quote: "The body heals with play, the mind heals with laughter, the spirit heals with joy.",
    quoteBy: "Proverb",
    intro: [
      "Healing happens on many layers: physical, emotional, mental, energetic, and spiritual. True healing supports the whole person, not just the symptoms.",
      "We combine ancient traditions, intuitive guidance, and modern understanding to help restore harmony and flow."
    ],
    checks: [
      "Release emotional blocks.",
      "Heal subconscious patterns.",
      "Balance your energy.",
      "Reconnect with intuition.",
      "Support your body naturally.",
      "Remember who you truly are."
    ],
    side: [
      ["QHHT Healing", "Explore the subconscious mind for deep healing and soul understanding.", Sparkles],
      ["Guided Healing", "Sessions, meditations and practices to restore balance.", Heart],
      ["Rongoā Māori", "Traditional natural remedies, herbs and ancestral healing knowledge.", Leaf],
      ["Energy & Intuition", "Learn to feel energy and trust subtle guidance.", Target]
    ],
    practicesTitle: "Real Projects & Tools We Use",
    practices: [
      ["QHHT Sessions", "Professional sessions for deep subconscious exploration.", Sparkles],
      ["GuidedHealing.nz", "Healing stories, meditation and spiritual support.", Heart],
      ["Rongoā Remedies", "Balms, tinctures and natural care.", Leaf],
      ["Angel Numbers", "Decode repeated signs and meaning.", Moon],
      ["Mindset Videos", "Rewire through learning and reflection.", PlayIcon]
    ]
  },
  {
    id: "sovereignty",
    number: "04",
    title: "Sovereignty",
    subtitle: "The power of choice",
    tagline: "Choose consciously. Take responsibility.",
    icon: ShieldCheck,
    heroImage: "/spiritual-sovereignty-hero.png",
    detailImage: "/spiritual-sovereignty-detail.png",
    guideImage: "/spiritual-sovereignty-checklist.png",
    quote: "You become what you allow into your mind, body, home and life.",
    quoteBy: "Unknown",
    intro: [
      "Every thought you think, every bite you eat, every word you speak, every dollar you spend, and every action you take either moves you closer to alignment or further away.",
      "Sovereignty is not about control. It is about conscious choice, responsibility, and understanding that you always have a choice."
    ],
    checks: [
      "What am I allowing into my body?",
      "What am I allowing into my mind?",
      "What am I spending my time on?",
      "What am I spending my energy on?",
      "What kind of impact am I creating?",
      "What kind of legacy do I want to leave?"
    ],
    side: [
      ["Mind Sovereignty", "Choose your thoughts, beliefs and stories you repeat.", Brain],
      ["Body Sovereignty", "Nourish your body with real food, movement, rest and natural living.", Heart],
      ["Information Sovereignty", "Be intentional about what you read, watch and listen to.", Eye],
      ["Financial Sovereignty", "Make conscious financial choices that support freedom.", Target]
    ],
    practicesTitle: "Areas of Sovereignty",
    practices: [
      ["Food Choices", "Choose real food that supports health.", Sprout],
      ["Media", "Protect what shapes your beliefs.", Eye],
      ["Time", "Use your attention intentionally.", Sun],
      ["Relationships", "Choose people who uplift you.", Users],
      ["Environment", "Care for home, land and Earth.", Leaf]
    ]
  },
  {
    id: "purpose",
    number: "05",
    title: "Purpose",
    subtitle: "How we choose to live",
    tagline: "Live intentionally. Leave a legacy.",
    icon: Sun,
    heroImage: "/spiritual-purpose-hero.png",
    detailImage: "/spiritual-purpose-detail.png",
    guideImage: "/spiritual-purpose-checklist.png",
    quote: "The meaning of life is to find your gift. The purpose of life is to give it away.",
    quoteBy: "Pablo Picasso",
    intro: [
      "Purpose is not something we find once and keep forever. It evolves as we grow, learn, and experience life.",
      "Purpose is not about doing more. It is about doing what matters most. When we live with purpose, our days feel aligned and our impact becomes meaningful."
    ],
    checks: [
      "Know our values and honour them.",
      "Use our gifts to serve others.",
      "Make choices that reflect who we truly are.",
      "Care for the people and places around us.",
      "Build a legacy we are proud of.",
      "Live today in a way our future selves will thank us for."
    ],
    side: [
      ["Values in Action", "Live in alignment with what matters most.", Compass],
      ["Contribution", "Use your gifts and experiences to make a positive difference.", Users],
      ["Legacy", "Think beyond today. Your choices shape future generations.", Sprout],
      ["Service", "Serve your family, community and world with love.", Heart]
    ],
    practicesTitle: "Reflection Questions",
    practices: [
      ["What matters most?", "Return to values before choices.", Target],
      ["How do I contribute?", "Use your gifts generously.", Heart],
      ["What legacy?", "Choose impact over image.", Leaf],
      ["Who am I here to serve?", "Let service guide action.", Users],
      ["How can I live with purpose?", "Make today intentional.", Sun]
    ]
  }
];

const bookLibrary = [
  ["The Power of Now", "Eckhart Tolle", "https://covers.openlibrary.org/b/id/551262-L.jpg"],
  ["A New Earth", "Eckhart Tolle", "https://covers.openlibrary.org/b/id/10858608-L.jpg"],
  ["The Untethered Soul", "Michael A. Singer", "https://covers.openlibrary.org/b/id/10630553-L.jpg"],
  ["Between Death and Life", "Dolores Cannon", "https://covers.openlibrary.org/b/id/7023413-L.jpg"],
  ["The Convoluted Universe", "Dolores Cannon", "https://covers.openlibrary.org/b/id/934299-L.jpg"],
  ["Five Lives Remembered", "Dolores Cannon", "https://covers.openlibrary.org/b/id/7023395-L.jpg"],
  ["Many Lives, Many Masters", "Brian L. Weiss", "https://covers.openlibrary.org/b/id/8404297-L.jpg"],
  ["Same Soul, Many Bodies", "Brian L. Weiss", "https://covers.openlibrary.org/b/id/474410-L.jpg"],
  ["Journey of Souls", "Michael Newton", "https://covers.openlibrary.org/b/id/809169-L.jpg"],
  ["Conversations with God", "Neale Donald Walsch", "https://covers.openlibrary.org/b/id/1463838-L.jpg"],
  ["The Divine Matrix", "Gregg Braden", "https://covers.openlibrary.org/b/id/750542-L.jpg"],
  ["Pure Human", "Gregg Braden", ""],
  ["The Biology of Belief", "Bruce H. Lipton", "https://covers.openlibrary.org/b/id/6940973-L.jpg"],
  ["Your Body Speaks Your Mind", "Deb Shapiro", "https://covers.openlibrary.org/b/id/1977115-L.jpg"],
  ["The Body Keeps the Score", "Bessel van der Kolk", "https://covers.openlibrary.org/b/id/8315367-L.jpg"],
  ["Becoming Supernatural", "Dr. Joe Dispenza", "https://covers.openlibrary.org/b/id/8596356-L.jpg"],
  ["Breaking the Habit of Being Yourself", "Dr. Joe Dispenza", "https://covers.openlibrary.org/b/id/11348192-L.jpg"],
  ["You Are the Placebo", "Dr. Joe Dispenza", "https://covers.openlibrary.org/b/id/14317018-L.jpg"],
  ["The Seat of the Soul", "Gary Zukav", "https://covers.openlibrary.org/b/id/6560723-L.jpg"],
  ["The Four Agreements", "Don Miguel Ruiz", "https://covers.openlibrary.org/b/id/924521-L.jpg"],
  ["Atomic Habits", "James Clear", "https://covers.openlibrary.org/b/id/12539702-L.jpg"]
];

const supportTools = [
  {
    title: "QHHT Sessions",
    text: "Quantum Healing Hypnosis Technique sessions for deeper healing and guidance.",
    image: "/qhht-session-tool.png",
    action: "Learn More",
    href: toolLinks.guidedHealing
  },
  {
    title: "Angel Numbers",
    text: "Daily guidance, symbols and messages to support your journey.",
    image: "/angel-numbers-tool.png",
    action: "Learn More",
    href: toolLinks.angelNumbers
  },
  {
    title: "AuraCam",
    text: "Aura insights and chakra reflections to help you understand your energy.",
    image: "/auracam-tool.png",
    action: "Learn More",
    href: toolLinks.auracam
  },
  {
    title: "Guided Healing Website",
    text: "Energy healing sessions, meditations and spiritual support.",
    image: "/home-guidedhealing-nz.png",
    action: "Visit Site",
    href: toolLinks.guidedHealingHome
  },
  {
    title: "Abundance Mindset YouTube",
    text: "Inspiration, mindset shifts and conscious conversations.",
    image: "https://img.youtube.com/vi/_I2c8F70GjE/hqdefault.jpg",
    action: "Watch Now",
    href: toolLinks.abundanceMindsetVideo
  },
  {
    title: "Know Thyself Podcast",
    text: "Deep conversations on spirituality, self-awareness, healing and conscious growth.",
    image: "https://img.youtube.com/vi/kUm0KS7Jyn4/hqdefault.jpg",
    action: "Watch Now",
    href: toolLinks.knowThyselfVideo
  },
  {
    title: "Journal & Reflection Tools",
    text: "Prompts and practices to help you reflect, process and grow.",
    image: "/journaling-reflection-tools.png",
    action: "Explore",
    href: "#/spiritual-conscious?section=awareness",
    guideImage: "/journaling-reflection-tools.png"
  }
];

function PlayIcon(props) {
  return <Sun {...props} />;
}

function getInitialPillar() {
  if (typeof window === "undefined") return "connection";
  const hash = window.location.hash.replace(/^#/, "");
  const pathSlug = hash.split("?")[0].split("/").filter(Boolean).pop();
  const section = new URLSearchParams(hash.split("?")[1] || "").get("section");
  const candidate = section || pathSlug;
  return pillars.some((pillar) => pillar.id === candidate) ? candidate : "connection";
}

function getRequestedAnchor() {
  if (typeof window === "undefined") return "";
  const hash = window.location.hash.replace(/^#/, "");
  return new URLSearchParams(hash.split("?")[1] || "").get("anchor") || "";
}

function scrollToRequestedAnchor() {
  const anchor = getRequestedAnchor();
  if (!anchor) return;
  window.setTimeout(() => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

export default function SpiritualConscious() {
  const [activeId, setActiveId] = useState(getInitialPillar);
  const [openGuideId, setOpenGuideId] = useState("");
  const [openCustomGuide, setOpenCustomGuide] = useState(null);
  const activePillar = useMemo(() => pillars.find((pillar) => pillar.id === activeId) || null, [activeId]);
  const heroPillar = activePillar || pillars[0];
  const openGuide = openCustomGuide || (openGuideId ? pillars.find((pillar) => pillar.id === openGuideId) : null);

  useEffect(() => {
    const onHashChange = () => {
      setActiveId(getInitialPillar());
      scrollToRequestedAnchor();
    };
    scrollToRequestedAnchor();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const selectPillar = (id) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#/spiritual-conscious?section=${id}`);
    window.setTimeout(() => {
      document.getElementById("spiritual-pillars")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  const clearPillar = () => {
    setActiveId("");
    window.history.replaceState(null, "", "#/spiritual-conscious");
    window.setTimeout(() => {
      document.getElementById("spiritual-pillars")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  return (
    <main className="bg-mist">
      <Hero pillar={heroPillar} />

      <section id="spiritual-pillars" className="container-page relative z-10 -mt-8 scroll-mt-28 overflow-hidden rounded-t-[2rem] bg-mist py-10 shadow-[0_-22px_50px_rgba(9,52,45,0.08)]">
        <div
          className="pointer-events-none absolute -right-24 top-2 h-80 w-80 rounded-full opacity-[0.09]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%), radial-gradient(circle at 35% 35%, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%), radial-gradient(circle at 65% 35%, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%), radial-gradient(circle at 35% 65%, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%), radial-gradient(circle at 65% 65%, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%)"
          }}
        />
        <div className="relative mb-7 flex items-center justify-center gap-4 text-center">
          <Leaf className="text-forest" size={18} />
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-ink">The 5 pillars of spiritual & conscious living</p>
          <Leaf className="scale-x-[-1] text-forest" size={18} />
        </div>
        <div className="relative grid gap-4 md:grid-cols-5">
          {pillars.map((pillar) => (
            <PillarButton
              key={pillar.id}
              pillar={pillar}
              active={pillar.id === activeId}
              onClick={() => selectPillar(pillar.id)}
            />
          ))}
        </div>
      </section>

      <section id="spiritual-detail" className="container-page scroll-mt-28 pb-14">
        {activePillar ? (
          <PillarDetail pillar={activePillar} onOpenGuide={() => setOpenGuideId(activePillar.id)} />
        ) : (
          <div className="rounded-lg border border-forest/10 bg-white p-8 text-center shadow-soft">
            <p className="eyebrow text-manuka">Choose a pillar</p>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold text-ink">
              Select a conscious living pillar above to open the full guide.
            </h2>
          </div>
        )}
      </section>

      {activePillar && (
        <PillarDetailNavigation
          pillars={pillars}
          activeId={activePillar.id}
          onSelect={selectPillar}
          onCollapse={clearPillar}
          className="-mt-10 pb-14"
        />
      )}

      <SharedBooks />
      <PracticalTools onOpenGuide={setOpenCustomGuide} />
      <SharedGuides onOpenGuide={setOpenGuideId} />
      <ConsciousClosing />
      {openGuide && <GuideModal guide={openGuide} onClose={() => {
        setOpenGuideId("");
        setOpenCustomGuide(null);
      }} />}
    </main>
  );
}

function Hero({ pillar }) {
  const scrollToSection = (id) => {
    window.history.replaceState(null, "", "#/spiritual-conscious");
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={pillar.heroImage}
          alt={`${pillar.title} conscious living visual`}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/16" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_9%_88%,rgba(3,23,22,.76),transparent_30rem)]" />
      </div>
      <div className="container-page relative grid min-h-[620px] items-center py-16 sm:min-h-[680px]">
        <div className="max-w-2xl" style={{ textShadow: "0 2px 28px rgba(3, 23, 22, 0.48)" }}>
          <p className="eyebrow text-manuka">Spiritual & Conscious Living</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.98] text-sand sm:text-7xl">{pillar.title}</h1>
          <p className="mt-2 font-display text-3xl font-semibold italic leading-tight text-manuka">{pillar.tagline}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-sand/84">
            A worldview that creates freedom through presence, reverence, healing, responsibility and purpose.
          </p>
          <div className="mt-7 grid max-w-xl gap-4 sm:grid-cols-3">
            {[
              ["Rooted", "in nature", Leaf],
              ["Guided", "by values", Heart],
              ["Living", "with purpose", Sun]
            ].map(([title, text, Icon]) => (
              <div key={title} className="flex items-center gap-3 border-r border-white/16 last:border-r-0">
                <Icon size={24} className="text-manuka" />
                <p className="text-xs font-bold text-sand">
                  {title}
                  <span className="block font-medium text-sand/68">{text}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => scrollToSection("spiritual-tools")} className="btn-primary bg-manuka text-ink hover:bg-sand">
              View Tools
              <ArrowRight size={16} />
            </button>
            <button type="button" onClick={() => scrollToSection("spiritual-guides")} className="btn-secondary border-manuka/75 text-sand hover:bg-manuka hover:text-ink">
              Free Guides
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarButton({ pillar, active, onClick }) {
  const Icon = pillar.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[190px] flex-col items-center rounded-lg border bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${
        active ? "border-manuka ring-1 ring-manuka/70" : "border-forest/10"
      }`}
    >
      <span className={`grid h-8 w-8 place-items-center rounded-full text-[0.65rem] font-extrabold ${active ? "bg-manuka text-ink" : "bg-forest text-white"}`}>
        {pillar.number}
      </span>
      <Icon className="mt-4 text-ink" size={42} strokeWidth={1.55} />
      <h2 className="mt-4 font-display text-lg font-bold text-ink">{pillar.title}</h2>
      <p className="mt-2 text-xs leading-5 text-ink/68">{pillar.tagline}</p>
    </button>
  );
}

function PillarDetail({ pillar, onOpenGuide }) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-forest/10 bg-white p-5 shadow-editorial sm:p-7">
      <div
        className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%), radial-gradient(circle at 35% 35%, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%), radial-gradient(circle at 65% 35%, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%), radial-gradient(circle at 35% 65%, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%), radial-gradient(circle at 65% 65%, transparent 0 21%, #09342d 22% 23%, transparent 24% 100%)"
        }}
      />
      <div className="relative grid gap-8 lg:grid-cols-[0.3fr_0.43fr_0.27fr] lg:items-start">
        <div className="relative overflow-hidden rounded-lg bg-ink shadow-soft">
          <img src={pillar.detailImage} alt="" className="h-full min-h-[430px] w-full object-cover" />
          <div className="absolute left-4 top-4 grid h-16 w-16 place-items-center rounded-full border border-manuka/70 bg-white/90 font-display text-2xl font-bold text-manuka">
            {pillar.number}
          </div>
        </div>

        <div>
          <h2 className="font-display text-4xl font-bold leading-tight text-ink">{pillar.title}: {pillar.subtitle}</h2>
          <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.24em] text-manuka">{pillar.tagline}</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-ink/76">
            {pillar.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ul className="mt-6 space-y-3">
            {pillar.checks.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-ink/76">
                <CheckCircle2 className="mt-1 shrink-0 text-forest" size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="card-action-row mt-7">
            <button type="button" onClick={onOpenGuide} className="btn-light">
              View Guide
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <aside className="rounded-lg border border-forest/10 bg-mist p-5">
          <div className="space-y-5">
            {pillar.side.map(([title, text, Icon]) => (
              <div key={title} className="flex gap-4 border-b border-forest/10 pb-5 last:border-b-0 last:pb-0">
                <Icon className="mt-1 shrink-0 text-forest" size={29} strokeWidth={1.55} />
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/68">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="relative mt-9 border-t border-forest/10 pt-7">
        <div className="mb-5 flex items-center justify-center gap-3">
          <Leaf className="text-manuka" size={17} />
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink">{pillar.practicesTitle}</p>
          <Leaf className="scale-x-[-1] text-manuka" size={17} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillar.practices.map(([title, text, Icon]) => (
            <article key={title} className="flex min-h-40 flex-col items-center rounded-lg border border-forest/10 bg-white p-4 text-center shadow-sm">
              <Icon className="text-forest" size={34} strokeWidth={1.55} />
              <h3 className="mt-4 text-sm font-extrabold text-ink">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-ink/66">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}

function SharedBooks() {
  const shelfRef = useRef(null);
  const scrollBooks = (direction) => {
    shelfRef.current?.scrollBy({ left: direction * 720, behavior: "smooth" });
  };

  return (
    <section id="reading-list" className="container-page scroll-mt-28 pb-12">
      <div className="relative">
        <SectionDividerTitle
          icon={BookOpen}
          title="Book Recommendations"
          text="Books that have shaped our mindset and our family’s journey."
        />
        <p className="mx-auto -mt-3 mb-8 max-w-3xl text-center text-sm leading-6 text-ink/62">
          Where you can, support your local independent bookstore or a small online bookseller before ordering from the biggest marketplaces.
          These reads are here to guide curiosity, not to push one shop.
        </p>
        <button
          className="absolute left-0 top-40 hidden h-10 w-10 place-items-center rounded-full bg-forest/10 text-ink transition hover:bg-forest hover:text-white md:grid"
          type="button"
          onClick={() => scrollBooks(-1)}
          aria-label="Previous books"
        >
          ‹
        </button>
        <button
          className="absolute right-0 top-40 hidden h-10 w-10 place-items-center rounded-full bg-forest/10 text-ink transition hover:bg-forest hover:text-white md:grid"
          type="button"
          onClick={() => scrollBooks(1)}
          aria-label="Next books"
        >
          ›
        </button>
        <div
          ref={shelfRef}
          className="flex snap-x gap-6 overflow-x-auto px-0 pb-5 md:px-12 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-forest/20 [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {bookLibrary.map(([title, author, cover]) => (
            <a
              key={title}
              href={getAmazonBookLink(title, author)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${title} on Amazon`}
              className="w-36 shrink-0 snap-start text-center no-underline transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-manuka"
            >
              <div className="mx-auto h-48 w-32 overflow-hidden rounded-md bg-sage shadow-soft">
                {cover ? (
                  <img src={cover} alt={`${title} book cover`} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-forest via-ink to-[#133f36] p-4 text-sand">
                    <BookOpen className="mx-auto mt-2 text-manuka" size={30} strokeWidth={1.4} />
                    <p className="font-display text-xl font-bold leading-tight">{title}</p>
                    <p className="text-[0.62rem] uppercase tracking-[0.18em] text-manuka">Cover coming soon</p>
                  </div>
                )}
              </div>
              <h3 className="mx-auto mt-4 max-w-36 text-sm font-extrabold leading-5 text-ink">{title}</h3>
              <p className="mt-2 text-xs leading-4 text-ink/58">{author}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PracticalTools({ onOpenGuide }) {
  const toolsRef = useRef(null);
  const scrollTools = (direction) => {
    const container = toolsRef.current;
    if (!container) return;
    container.scrollBy({ left: direction * Math.min(container.clientWidth * 0.86, 980), behavior: "smooth" });
  };

  return (
    <section id="spiritual-tools" className="container-page scroll-mt-28 pb-14">
      <div className="rounded-lg border border-forest/10 bg-white/72 p-5 shadow-soft sm:p-7">
        <SectionDividerTitle
          icon={Sparkles}
          title="Practical Tools & Support"
          text="Tools and spaces that support our daily practice and growth."
        />
        <div className="relative mt-8">
          <button
            type="button"
            onClick={() => scrollTools(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-forest/10 bg-white/90 text-forest shadow-soft transition hover:border-manuka hover:bg-forest hover:text-white md:grid"
            aria-label="Previous tools"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => scrollTools(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-forest/10 bg-white/90 text-forest shadow-soft transition hover:border-manuka hover:bg-forest hover:text-white md:grid"
            aria-label="Next tools"
          >
            <ChevronRight size={22} />
          </button>
          <div
            ref={toolsRef}
            role="list"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-6 md:px-12 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-forest/20 [&::-webkit-scrollbar-track]:bg-transparent"
          >
            {supportTools.map(({ title, text, image, icon: Icon, action, href, guideImage }) => (
              <article
                key={title}
                role="listitem"
                className="flex min-h-[390px] w-[82vw] max-w-[20rem] shrink-0 snap-start flex-col rounded-lg border border-forest/10 bg-white p-4 text-center shadow-sm sm:w-[20rem] lg:w-[21rem]"
              >
                <div className="h-40 w-full overflow-hidden rounded-md bg-sage">
                  {image ? (
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-mist">
                      <Icon className="text-manuka" size={58} strokeWidth={1.45} />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col items-center">
                  <h3 className="mt-5 font-display text-xl font-bold leading-tight text-ink">{title}</h3>
                  <p className="mt-3 max-w-[18rem] text-sm leading-6 text-ink/64">{text}</p>
                </div>
                <div className="card-action-row mt-6 min-h-11 items-end">
                  {guideImage ? (
                    <button
                      type="button"
                      onClick={() => onOpenGuide({ title, tagline: text, guideImage })}
                      className="btn-light px-4 py-2 text-xs"
                    >
                      {action}
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="btn-light px-4 py-2 text-xs">
                      {action}
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsciousClosing() {
  const footerItems = [
    [Heart, "Family First"],
    [Compass, "Location Freedom"],
    [Sprout, "Food Security"],
    [BookOpen, "Entrepreneurship"],
    [Sun, "Conscious Living"]
  ];

  return (
    <section className="container-page pb-16">
      <div className="relative overflow-hidden rounded-lg bg-forest p-7 text-sand shadow-editorial sm:p-9">
        <div className="absolute -left-8 -top-12 h-52 w-52 opacity-25">
          <FlowerOfLife />
        </div>
        <Leaf className="absolute bottom-7 right-8 hidden rotate-12 text-manuka/35 md:block" size={90} strokeWidth={1.2} />
        <div className="relative grid gap-7 lg:grid-cols-[0.67fr_0.33fr] lg:items-center">
          <div className="flex items-center gap-7">
            <div className="hidden h-32 w-32 shrink-0 text-manuka sm:block">
              <FlowerOfLife />
            </div>
            <div>
              <p className="font-display text-3xl font-bold leading-tight">Conscious living is a journey, not a destination.</p>
              <p className="mt-2 font-display text-3xl font-semibold italic text-manuka">You are here. You are enough. You belong.</p>
            </div>
          </div>
          <div className="border-manuka/25 lg:border-l lg:pl-10">
            <a href="#/" className="btn-primary bg-manuka text-ink hover:bg-sand">
              Start Your Journey
              <ArrowRight size={16} />
            </a>
            <p className="mt-4 text-sm font-semibold text-sand/76">Create freedom. Live fully.</p>
          </div>
        </div>
      </div>
      <div className="mt-7 grid gap-4 border-b border-forest/10 pb-7 text-center sm:grid-cols-2 lg:grid-cols-5">
        {footerItems.map(([Icon, label]) => (
          <div key={label} className="flex items-center justify-center gap-3 border-forest/10 text-sm font-bold text-ink/74 lg:border-r lg:last:border-r-0">
            <Icon className="text-forest" size={24} strokeWidth={1.5} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center text-xs text-ink/50">© 2024 Unbordered Family. All rights reserved.</p>
    </section>
  );
}

function SectionDividerTitle({ icon: Icon, title, text }) {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-manuka/40 to-manuka/40" />
        <Icon className="text-manuka" size={17} />
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink">{title}</p>
        <Icon className="text-manuka" size={17} />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-manuka/40 to-manuka/40" />
      </div>
      <p className="mt-3 text-sm text-ink/60">{text}</p>
    </div>
  );
}

function FlowerOfLife() {
  const circles = [
    [50, 50], [32, 50], [68, 50], [41, 34], [59, 34], [41, 66], [59, 66],
    [23, 34], [77, 34], [23, 66], [77, 66], [50, 18], [50, 82]
  ];

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="h-full w-full">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {circles.map(([cx, cy], index) => (
        <circle key={`${cx}-${cy}-${index}`} cx={cx} cy={cy} r="18" fill="none" stroke="currentColor" strokeWidth="1.2" />
      ))}
    </svg>
  );
}

function SharedGuides({ onOpenGuide }) {
  return (
    <section id="spiritual-guides" className="container-page scroll-mt-28 pb-16">
      <div className="rounded-lg border border-forest/10 bg-white/88 p-6 shadow-soft">
        <div className="mb-6 flex items-center justify-center gap-3 text-center">
          <Leaf className="text-manuka" size={18} />
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink">Quick Reference Guides</p>
          <Leaf className="scale-x-[-1] text-manuka" size={18} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="flex min-h-[300px] flex-col rounded-lg border border-forest/10 bg-white p-4 shadow-soft">
              <img src={pillar.guideImage} alt={`${pillar.title} quick reference guide`} className="h-36 w-full rounded-md object-cover object-top" />
              <h3 className="mt-4 font-display text-xl font-bold leading-tight text-ink">{pillar.title}</h3>
              <div className="card-action-row mt-auto">
                <button type="button" onClick={() => onOpenGuide(pillar.id)} className="btn-primary px-4 py-2 text-xs">
                  View Guide
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuideModal({ guide, onClose }) {
  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto bg-ink/78 px-4 py-6 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-manuka/30 bg-white shadow-editorial">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-forest/10 bg-white/95 px-4 py-3 backdrop-blur">
          <div>
            <p className="eyebrow text-manuka">{guide.tagline}</p>
            <h2 className="font-display text-2xl font-bold text-ink">{guide.title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <a href={guide.guideImage} download className="btn-light px-4 py-2 text-xs">
              <Download size={15} />
              Download
            </a>
            <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white text-ink transition hover:bg-sage" aria-label="Close guide popup">
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src={guide.guideImage} alt={`${guide.title} guide`} className="mx-auto max-h-[82vh] w-auto rounded-md object-contain shadow-soft" />
        </div>
      </div>
    </div>
  );
}
