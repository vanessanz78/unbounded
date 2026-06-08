import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Compass,
  CreditCard,
  Camera,
  CircleDollarSign,
  Globe2,
  GraduationCap,
  Heart,
  Home,
  Download,
  Landmark,
  Leaf,
  Lightbulb,
  MapPin,
  PenLine,
  Plane,
  Repeat,
  School,
  Search,
  Sparkles,
  Star,
  Sun,
  Timer,
  Users,
  WalletCards,
  Wifi,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PillarDetailNavigation from "../components/PillarDetailNavigation.jsx";
import { getAmazonBookLink } from "../data/amazonBookLinks.js";
import { discordUrl } from "../data/socialLinks.js";
import { toolLinks } from "../data/toolLinks.js";

const starlinkReferralUrl = toolLinks.starlink;

const pillars = [
  {
    id: "why-travel",
    number: "01",
    title: "Why Travel?",
    text: "The why behind our journey. Values, vision and the freedom we are creating for our family.",
    icon: Compass
  },
  {
    id: "travel-smarter",
    number: "02",
    title: "Travel Smarter",
    text: "How we travel more and spend less using points, home exchange, and smart strategies.",
    icon: Plane
  },
  {
    id: "worldschooling",
    number: "03",
    title: "Worldschooling",
    text: "How our children learn through the world, not just in classrooms.",
    icon: BookOpen
  },
  {
    id: "relocation",
    number: "04",
    title: "Relocation",
    text: "Exploring new bases like Bali and Panama for more freedom and financial flow.",
    icon: Globe2
  },
  {
    id: "global-lifestyle",
    number: "05",
    title: "Global Lifestyle Design",
    text: "Building a lifestyle that supports family, freedom, connection and purpose.",
    icon: Home
  }
];

const practicalGuides = [
  ["Cost-Saving Travel Strategies", "Use points, home exchange, and smart tools to travel more for less.", WalletCards],
  ["Worldschooling Resources", "Curriculum ideas, learning on the road, and raising global citizens.", School],
  ["Relocation Guides", "Compare destinations, understand visas, costs, healthcare, and more.", MapPin],
  ["Real Cost Comparisons", "See the numbers behind why we explore Bali and Panama.", BarChart3],
  ["Travel Planning Tools", "Apps, checklists, and systems to simplify family travel.", CalendarDays],
  ["Community & Connection", "Find support and inspiration from other like-minded families.", Users]
];

const travelFreedomTools = [
  ["Home Exchange", "Stay for free anywhere in the world.", Home, toolLinks.homeExchange],
  ["Karma Group", "Resorts, villas, cruises & campervans at members' rates.", Sparkles, toolLinks.karmaGroup],
  ["Airpoints Strategy", "Turn everyday spending into free flights.", Plane, toolLinks.airpoints],
  ["Smart Money", "Credit cards for points. Revolving facility to save on interest.", CreditCard, toolLinks.wise],
  ["Travel Planning", "Apps, tools & systems to plan with ease.", Globe2, toolLinks.airbnb],
  ["Starlink Internet", "Reliable internet for remote work, travel bases, and off-grid family adventures.", Wifi, starlinkReferralUrl]
];

const familyTravelGuides = [
  {
    id: "worldschooling",
    title: "Worldschooling",
    text: "A family-first guide to learning through real-world experiences, cultural immersion, travel, nature, and meaningful connection.",
    tags: ["Real experiences", "Global awareness", "Lifelong skills", "Family connection"],
    image: "/worldschooling-guide.png",
    icon: GraduationCap
  },
  {
    id: "relocation-guide",
    title: "Relocation Guide",
    text: "A planning guide for families comparing lifestyle, visas, costs, community, schooling, remote work, and sovereignty considerations.",
    tags: ["Bali", "Panama", "Visa planning", "Cost comparison"],
    image: "/relocation-guide.png",
    icon: Plane
  },
  {
    id: "global-lifestyle-guide",
    title: "Global Lifestyle",
    text: "A lifestyle design guide for choosing bases, learning globally, building community, managing money, and staying rooted as a family.",
    tags: ["Lifestyle design", "Choosing bases", "Community", "Financial planning"],
    image: "/global-lifestyle-guide.png",
    icon: Compass
  }
];

const familyTravelBooks = [
  {
    title: "Vagabonding",
    author: "Rolf Potts",
    cover: "https://covers.openlibrary.org/b/isbn/9780812992182-L.jpg?default=false",
    text: "A classic for anyone seeking freedom through travel and experiences.",
    tags: ["Adventure", "Freedom", "Perspective"]
  },
  {
    title: "Die With Zero",
    author: "Bill Perkins",
    cover: "https://covers.openlibrary.org/b/isbn/9780358567097-L.jpg?default=false",
    text: "A powerful reminder to prioritise life experiences over accumulating things.",
    tags: ["Mindset", "Money", "Fulfilment"]
  },
  {
    title: "The 4-Hour Workweek",
    author: "Tim Ferriss",
    cover: "https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg?default=false",
    text: "Design freedom into your life and build a location independent lifestyle.",
    tags: ["Business", "Freedom", "Lifestyle design"]
  },
  {
    title: "The Unschooling Handbook",
    author: "Mary Griffith",
    cover: "https://covers.openlibrary.org/b/isbn/9780761512769-L.jpg?default=false",
    text: "Your child can learn anywhere. The world is the classroom.",
    tags: ["Education", "Curiosity", "Freedom"]
  },
  {
    title: "How to Raise a Wild Child",
    author: "Scott D. Sampson",
    cover: "https://covers.openlibrary.org/b/isbn/9780544279322-L.jpg?default=false",
    text: "Reconnect children with nature and raise healthy, confident, resilient humans.",
    tags: ["Nature", "Development", "Resilience"]
  },
  {
    title: "Essentialism",
    author: "Greg McKeown",
    cover: "https://covers.openlibrary.org/b/isbn/9780804137386-L.jpg?default=false",
    text: "Focus on what truly matters and eliminate the rest.",
    tags: ["Focus", "Simplicity", "Purpose"]
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg?default=false",
    text: "Small habits create big changes over time. Perfect for families.",
    tags: ["Habits", "Growth", "Consistency"]
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg?default=false",
    text: "A beautiful reminder to follow the signs, trust the journey, and listen for your own path.",
    tags: ["Purpose", "Adventure", "Intuition"]
  },
  {
    title: "The 7 Habits of Highly Effective Families",
    author: "Stephen R. Covey",
    cover: "https://covers.openlibrary.org/b/isbn/9780307440853-L.jpg?default=false",
    text: "Build stronger families through principles that last generations.",
    tags: ["Family", "Values", "Relationships"]
  }
];

const accommodationStrategies = [
  {
    title: "Home Exchange",
    text: "Stay for free anywhere in the world.",
    points: [
      "Swap homes with other families",
      "Live like a local, not a tourist",
      "Save thousands on accommodation",
      "Annual membership with global access"
    ],
    image: "/bali-panama-beyond-rice-fields.png",
    icon: Home,
    links: [["HomeExchange", toolLinks.homeExchange]]
  },
  {
    title: "Karma Group",
    text: "Resorts, villas, cruises & campers at members' rates.",
    points: [
      "Karma Group portfolio worldwide",
      "Alliance partners in 80+ countries",
      "Campervans across Australia & New Zealand",
      "Cruises, hotels, villas & more"
    ],
    image: "/travel-smarter-expanded-guide.png",
    icon: Sparkles,
    links: [["Karma Group", toolLinks.karmaGroup]]
  },
  {
    title: "Airbnb & Booking.com",
    text: "Perfect for last-minute trips & short stays.",
    points: [
      "Flexible & convenient",
      "Great for short breaks",
      "Huge range of options",
      "Use when other options are not available"
    ],
    image: "/home-deloraine-cottage.png",
    icon: Compass,
    links: [
      ["Airbnb", toolLinks.airbnb],
      ["Booking.com", toolLinks.booking]
    ]
  }
];

const airpointsStrategy = [
  "We put every expense on our credit card (AMEX + ANZ Airpoints).",
  "Pay card off in full each month - never pay interest.",
  "Maximise Airpoints Dollars with every purchase.",
  "With a family of six, this covers 1-2 flights annually."
];

const airpointsFlow = [
  ["Spend on credit card", CreditCard],
  ["Earn Airpoints", Star],
  ["Pay off in full monthly", CalendarDays],
  ["Fly for (essentially) free", Plane]
];

const smartMoneyStrategy = [
  "All money we're not using is placed in our revolving credit facility (offset account).",
  "This reduces our mortgage interest significantly.",
  "We earn Airpoints while saving on interest.",
  "Two powerful strategies working together."
];

const relocationReasons = [
  "Lower cost of living and more financial freedom",
  "More time together and less life admin",
  "Access to better weather and outdoor living",
  "Opportunities for global travel and exploration",
  "A lifestyle aligned with our values"
];

const relocationBenefits = [
  ["Freedom", "Live with more time, choice, and flexibility.", Compass],
  ["Family", "Stronger family connections and shared experiences.", Users],
  ["Growth", "Kids thrive with real-world learning and perspective.", Leaf],
  ["Simplicity", "Less stress, less stuff, more of what matters.", Heart]
];

const relocationCostRows = [
  ["Cost of Living (family of 6)", "$$$$", "$$", "$$"],
  ["Accommodation", "$$$$", "$$", "$$"],
  ["Groceries & Food", "$$$", "$", "$$"],
  ["Transport", "$$", "$", "$"],
  ["Healthcare", "$$$", "$", "$$"],
  ["Education / Activities", "$$$", "$ - $$", "$$"],
  ["Domestic Help", "$$$$", "$", "$"],
  ["Taxes", "High", "Moderate", "Favourable"],
  ["Discretionary Income Left", "Lower", "Higher", "Higher"]
];

const countrySnapshots = [
  {
    title: "Bali, Indonesia",
    image: "/bali-panama-beyond-rice-fields.png",
    points: [
      "Affordable living",
      "Warm climate year-round",
      "Beautiful culture & community",
      "Great for families & digital work",
      "Tourist visa options available"
    ],
    action: "Explore Bali Guide"
  },
  {
    title: "Panama",
    image: "/panama-city-skyline.jpg",
    points: [
      "Stable economy & infrastructure",
      "Favourable tax environment",
      "Excellent healthcare options",
      "Easy access to the Americas",
      "Friendly visa options"
    ],
    action: "Explore Panama Guide"
  }
];

const relocationFramework = [
  "Lifestyle: What do we value most?",
  "Education: How will our kids learn?",
  "Healthcare: What are the options?",
  "Cost: Can we live well on less?",
  "Community: Can we build connection?",
  "Future: What opportunities exist here?"
];

const relocationBaseFactors = [
  ["Cost & Finance", "Can we live well and save more?", WalletCards],
  ["Visa & Legal", "What are our rights and options?", MapPin],
  ["Healthcare", "Access, quality, and affordability.", Heart],
  ["Education", "Learning options for our children.", GraduationCap],
  ["Safety", "Is it safe and family-friendly?", MapPin],
  ["Connection", "Can we build a community?", Heart]
];

const globalLifestylePillars = [
  {
    title: "Freedom",
    text: "Design more time and location freedom.",
    points: ["Work from anywhere", "Live on our terms", "More experiences", "Less rush"],
    icon: Timer
  },
  {
    title: "Family",
    text: "Keep family at the centre of every decision.",
    points: ["More connection", "Shared adventures", "Stronger bonds", "Memories that last"],
    icon: Users
  },
  {
    title: "Purpose & Work",
    text: "Build meaningful work around our lifestyle.",
    points: ["Location independent", "Value driven", "Flexible and creative", "Impact focused"],
    icon: CreditCard
  },
  {
    title: "Learning",
    text: "Stay curious. Keep growing. Never stop.",
    points: ["Lifelong learning", "Skills for the future", "Explore interests", "Lead by example"],
    icon: BookOpen
  },
  {
    title: "Community",
    text: "Build meaningful connections wherever we are.",
    points: ["Local friendships", "Global community", "Support networks", "Give back"],
    icon: Users
  },
  {
    title: "Legacy",
    text: "Create a life our children can be proud of.",
    points: ["Values over things", "Opportunities", "Confidence", "A better world"],
    icon: Leaf
  }
];

const globalLifestyleFocus = [
  "Experiences over possessions",
  "Health over hustle",
  "Connection over convenience",
  "Freedom over fitting in",
  "Growth over comfort"
];

const globalLifestyleFlow = [
  ["Clarify Values", "Know what matters most to us.", Compass],
  ["Set Intentions", "Choose how we want to live.", MapPin],
  ["Design Systems", "Build routines and systems that support freedom.", CalendarDays],
  ["Take Action", "Make choices that move us forward.", Globe2],
  ["Review & Adapt", "Keep evolving as our family grows.", BarChart3]
];

const whyTravelCards = [
  {
    title: "Experiences > Possessions",
    text: "Research shows experiences create longer-lasting happiness than material possessions.",
    points: ["Memories last a lifetime", "Build resilience & confidence", "More joy, less clutter", "Children remember experiences, not things"],
    icon: Lightbulb
  },
  {
    title: "Travel Expands Perspective",
    text: "Children learn in the real world, not just from books.",
    points: ["Cultures & languages", "Geography & history", "Empathy & understanding", "Curiosity & open-mindedness"],
    icon: Globe2
  },
  {
    title: "Family Connection",
    text: "Shared adventures create shared stories.",
    points: ["Stronger relationships", "Deeper conversations", "Teamwork & support", "A lifetime of inside jokes and memories"],
    icon: Heart
  },
  {
    title: "Personal Growth",
    text: "Travel grows everyone.",
    points: ["Step outside comfort zones", "Adaptability & problem solving", "Confidence & independence", "A broader worldview"],
    icon: Leaf
  },
  {
    title: "What We Believe",
    text: "We don't travel to escape life. We travel to experience more of it.",
    points: ["Intentional choices", "Aligned with our values", "Create the life we want to live"],
    icon: Star
  }
];

const travelLessons = [
  ["Be curious", "Ask questions", Search],
  ["Be kind", "Embrace differences", Heart],
  ["Be brave", "Try new things", Compass],
  ["Be capable", "Solve problems", Lightbulb],
  ["Be grateful", "Appreciate more", Sun]
];

const whyTravelBottom = [
  {
    title: "Why Now?",
    items: ["Life is short.", "Children grow up fast.", "The world is waiting.", "The best time to create memories is now."],
    image: "/why-travel-expanded-guide.png",
    icon: Timer
  },
  {
    title: "Is It Worth It?",
    items: ["It's not always easy.", "It requires planning and flexibility.", "But the return is priceless.", "More connection.", "More learning.", "More life."],
    image: "/bali-panama-beyond-rice-fields.png",
    icon: Heart
  },
  {
    title: "Our Promise",
    items: ["We'll share honestly.", "The highs, the lows, the wins and the lessons.", "To help your family create a life without borders."],
    image: "/family-and-travel.png",
    icon: Camera
  }
];

const worldschoolingSubjects = [
  ["Geography", "We don't just study places, we experience them.", ["Map skills", "Landscapes", "Cultures", "Global awareness"], Globe2],
  ["History", "We walk through history, not just read about it.", ["Historic sites", "Ancient cultures", "Local stories", "Living timeline"], Landmark],
  ["Culture", "We learn from people, not textbooks.", ["Languages", "Traditions", "Food & art", "Customs"], Users],
  ["Life Skills", "The world teaches what school can't.", ["Problem solving", "Adaptability", "Communication", "Independence"], Lightbulb],
  ["Values & Character", "Travel shapes who they become.", ["Empathy", "Resilience", "Confidence", "Open-mindedness"], Heart],
  ["Learning by Living", "Everyday moments become lessons.", ["Real-world learning", "Practical knowledge", "Curiosity driven", "Joyful education"], GraduationCap]
];

const worldschoolingDay = [
  ["Morning: Core learning", "Reading, writing, maths, language.", BookOpen],
  ["Late morning: Explore", "Museums, markets, nature, locals.", Compass],
  ["Afternoon: Project time", "Research, journaling, creative work.", Home],
  ["Evening: Reflection", "Family discussion, planning tomorrow.", MapPin]
];

const worldschoolingSupport = [
  {
    title: "Is Worldschooling For Us?",
    items: [
      "You value experiences over possessions.",
      "You want your children to see the world.",
      "You believe learning happens everywhere.",
      "You want flexibility and family time.",
      "You're curious, open, and adaptable."
    ],
    action: "Take the Quiz",
    icon: Heart
  },
  {
    title: "What We Use",
    items: [
      "Online learning platforms",
      "Curriculum resources",
      "Books & audiobooks",
      "Travel journals",
      "Documentaries & videos",
      "Local experts & experiences"
    ],
    icon: BookOpen
  },
  {
    title: "Parents' Role",
    text: "We're not just facilitators. We're co-learners and guides.",
    items: [
      "Encourage curiosity",
      "Provide resources",
      "Start meaningful conversations",
      "Support independence",
      "Learn together as a family"
    ],
    icon: Users
  }
];

const comparisonRows = [
  ["Accommodation", "NZD $3,000-$5,500", "USD $1,200-$3,000", "USD $1,500-$3,000"],
  ["Groceries & food", "NZD $800-$1,500", "USD $400-$900", "USD $500-$900"],
  ["Transport", "NZD $400-$700", "USD $100-$250", "USD $100-$250"],
  ["Healthcare / insurance", "NZD $500-$800", "USD $100-$300", "USD $100-$300"],
  ["Education / childcare", "NZD $1,200-$2,500", "USD $500-$1,500", "USD $1,000-$2,500"],
  ["Total monthly estimate", "NZD $7,750-$14,000", "USD $2,550-$6,850", "USD $3,800-$8,800"]
];

const beginCards = [
  {
    title: "New to Family Travel?",
    text: "Start with our story and why we chose this path.",
    action: "Read Our Story",
    href: "#/our-story",
    image: "/family-and-travel.png",
    icon: Compass
  },
  {
    title: "Plan Your Next Trip",
    text: "Learn how we find and book amazing trips for less.",
    action: "Travel Smarter",
    href: "#/family-travel?section=travel-smarter",
    image: "/bali-panama-beyond-rice-fields.png",
    icon: Plane
  },
  {
    title: "Worldschooling",
    text: "Resources and inspiration to educate beyond borders.",
    action: "Explore Guides",
    href: "#/family-travel?section=worldschooling",
    image: "/worldschooling-guide.png",
    icon: BookOpen
  },
  {
    title: "Thinking of Relocating?",
    text: "Compare locations and plan your move with confidence.",
    action: "Relocation Guide",
    href: "#/family-travel?section=relocation",
    image: "/relocation-guide.png",
    icon: Globe2
  },
  {
    title: "Global Lifestyle",
    text: "Create a life that supports your family's freedom.",
    action: "Quick Reference Guide",
    guideId: "global-lifestyle-guide",
    image: "/global-lifestyle-guide.png",
    icon: Compass
  }
];

const bottomValues = [
  [Users, "Family First"],
  [Leaf, "Live Simply"],
  [GraduationCap, "Grow Together"],
  [Compass, "Create Freedom"],
  [Globe2, "Explore More"]
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getTargetSection() {
  const hash = window.location.hash.replace("#", "");
  const query = hash.split("?")[1] || "";
  return new URLSearchParams(query).get("section") || "";
}

function getCurrentHashPath() {
  const hash = window.location.hash.replace("#", "") || "/";
  return hash.split(/[?#]/)[0] || "/";
}

function getInitialPillar() {
  const target = getTargetSection();
  return pillars.some((pillar) => pillar.id === target) ? target : "why-travel";
}

function FamilyTravelSectionTitle({ icon: Icon, title, text }) {
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

function TravelBookCover({ title, cover }) {
  const [hasCover, setHasCover] = useState(Boolean(cover));

  return (
    <div className="mx-auto h-48 w-32 overflow-hidden rounded-md bg-sage shadow-soft">
      {hasCover ? (
        <img
          src={cover}
          alt={`${title} book cover`}
          className="h-full w-full object-cover"
          onError={() => setHasCover(false)}
        />
      ) : (
        <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-forest via-ink to-[#133f36] p-4 text-sand">
          <BookOpen className="mx-auto mt-2 text-manuka" size={30} strokeWidth={1.4} />
          <p className="font-display text-xl font-bold leading-tight">{title}</p>
          <p className="text-[0.62rem] uppercase tracking-[0.18em] text-manuka">Cover coming soon</p>
        </div>
      )}
    </div>
  );
}

function FamilyTravelBookshelf() {
  const shelfRef = useRef(null);
  const scrollBooks = (direction) => {
    shelfRef.current?.scrollBy({ left: direction * 720, behavior: "smooth" });
  };

  return (
    <section id="family-travel-books" className="container-page scroll-mt-28 pb-16">
      <div className="relative">
        <FamilyTravelSectionTitle
          icon={BookOpen}
          title="Book Recommendations"
          text="Books that have shaped our mindset and our family's journey."
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
          {familyTravelBooks.map(({ title, author, cover }) => (
            <a
              key={title}
              href={getAmazonBookLink(title, author)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${title} on Amazon`}
              className="w-36 shrink-0 snap-start text-center no-underline transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-manuka"
            >
              <TravelBookCover title={title} cover={cover} />
              <h3 className="mx-auto mt-4 max-w-36 text-sm font-extrabold leading-5 text-ink">{title}</h3>
              <p className="mt-2 text-xs leading-4 text-ink/58">{author}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function TravelFreedomToolsSection() {
  return (
    <section id="travel-freedom-tools" className="container-page scroll-mt-28 pb-16">
      <div className="rounded-lg border border-forest/10 bg-white p-5 shadow-soft sm:p-7">
        <div className="text-center">
          <p className="eyebrow text-manuka">Our Top Tools for Freedom & Travel</p>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {travelFreedomTools.map(([title, text, Icon, href]) => {
            const cardClass =
              "group flex min-h-[300px] flex-col items-center rounded-lg border border-forest/10 bg-mist px-5 py-6 text-center transition hover:-translate-y-1 hover:border-manuka/50 hover:bg-sage/70 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-manuka";
            const content = (
              <>
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white text-forest shadow-soft">
                  <Icon size={44} strokeWidth={1.35} />
                </div>
                <h3 className="mt-5 min-h-[3.2rem] font-display text-xl font-bold leading-tight text-ink">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-ink/66">{text}</p>
                {href && (
                  <span className="mt-auto inline-flex items-center justify-center gap-2 pt-6 text-xs font-extrabold uppercase tracking-wide text-manuka">
                    Use Referral Link
                    <ArrowRight size={14} />
                  </span>
                )}
              </>
            );

            return href ? (
              <a key={title} href={href} target="_blank" rel="noreferrer" className={cardClass}>
                {content}
              </a>
            ) : (
              <article key={title} className={cardClass}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PracticalGuidesSection() {
  return (
    <section className="container-page pb-12">
      <div className="text-center">
        <p className="eyebrow text-manuka">What You’ll Find Here</p>
        <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl font-bold text-ink">
          Practical Guides. Real Strategies. Family Focused.
        </h2>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3 xl:grid-cols-6">
        {practicalGuides.map(([title, text, Icon]) => (
          <article key={title} className="flex min-h-[190px] flex-col items-center border-forest/10 px-4 text-center xl:border-r xl:last:border-r-0">
            <Icon className="text-forest" size={38} strokeWidth={1.45} />
            <h3 className="mt-4 text-sm font-extrabold text-ink">{title}</h3>
            <p className="mt-3 text-xs leading-5 text-ink/64">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function FamilyTravel() {
  const [activeGuideId, setActiveGuideId] = useState("");
  const [activeId, setActiveId] = useState(getInitialPillar);
  const activeGuide = familyTravelGuides.find((guide) => guide.id === activeGuideId);

  const choosePillar = (id) => {
    setActiveId(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#/family-travel?section=${id}`);
    }
    window.setTimeout(() => scrollTo(id), 40);
  };

  const clearPillar = () => {
    setActiveId("");
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "#/family-travel");
    }
    window.setTimeout(() => scrollTo("family-pillars"), 40);
  };

  useEffect(() => {
    const syncTarget = () => {
      if (getCurrentHashPath() !== "/family-travel") return;
      const target = getTargetSection();
      const nextTarget = pillars.some((pillar) => pillar.id === target) ? target : "why-travel";
      setActiveId(nextTarget);
      window.setTimeout(() => scrollTo(nextTarget), 90);
    };

    syncTarget();
    window.addEventListener("hashchange", syncTarget);
    return () => window.removeEventListener("hashchange", syncTarget);
  }, []);

  return (
    <main className="overflow-hidden bg-mist">
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src="/family-and-travel.png"
            alt="The Unbordered Family walking through a tropical landscape"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/14" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_9%_88%,rgba(3,23,22,.76),transparent_30rem)]" />
        </div>
        <div className="container-page relative grid min-h-[620px] items-center py-16 sm:min-h-[680px]">
          <div className="max-w-2xl" style={{ textShadow: "0 2px 28px rgba(3, 23, 22, 0.48)" }}>
            <p className="eyebrow text-manuka">Family & Travel</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[0.98] text-sand sm:text-6xl">
              Design a Life Without Borders.
            </h1>
            <p className="mt-4 font-display text-3xl font-semibold italic leading-tight text-manuka">
              Family first. Freedom focused. Connected everywhere.
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-sand/84">
              We explore worldschooling, relocation, slow travel, and global living as tools to create richer family experiences and more intentional lives.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => scrollTo("family-pillars")} className="btn-primary bg-manuka text-ink hover:bg-sand">
                Explore the 5 Pillars
                <ArrowRight size={16} />
              </button>
              <button type="button" onClick={() => scrollTo("start-family-journey")} className="btn-secondary border-manuka/75 text-sand hover:bg-manuka hover:text-ink">
                Start Your Journey
                <Leaf size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="family-pillars" className="container-page scroll-mt-28 py-12">
        <div className="text-center">
          <p className="eyebrow text-manuka">Our 5 Pillars of Family Freedom</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-ink">
            The Journey to a Life of Freedom
          </h2>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-5">
          {pillars.map(({ id, number, title, text, icon: Icon }, index) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                id={`${id}-pillar`}
                type="button"
                onClick={() => choosePillar(id)}
                className={`relative flex min-h-[250px] flex-col items-center rounded-lg border bg-white p-5 text-center shadow-soft transition hover:-translate-y-1 hover:border-manuka/50 hover:shadow-editorial focus:outline-none focus:ring-2 focus:ring-fern focus:ring-offset-2 ${
                  isActive ? "border-manuka ring-2 ring-manuka/30" : "border-forest/10"
                }`}
              >
                <span className="absolute -top-5 grid h-11 w-11 place-items-center rounded-full bg-forest text-sm font-extrabold text-white">{number}</span>
                {index < pillars.length - 1 && <span className="absolute -right-4 top-1/2 hidden text-manuka md:block">→</span>}
                <Icon className="mt-9 text-manuka" size={54} strokeWidth={1.35} />
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{text}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section id="why-travel" className={`container-page scroll-mt-28 pb-12 ${activeId === "why-travel" ? "" : "hidden"}`}>
        <div className="overflow-hidden rounded-lg border border-forest/10 bg-white p-5 shadow-editorial sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <div>
              <h2 className="font-display text-5xl font-bold leading-tight text-ink">Why Travel?</h2>
              <p className="mt-2 font-display text-2xl italic text-manuka">
                Why would a family choose freedom and experiences over staying in one place?
              </p>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-ink/74">
                Travel isn't just about seeing new places. It's about creating a life of meaning,
                connection, and growth for the whole family.
              </p>
            </div>
            <div className="relative min-h-64 overflow-hidden rounded-lg bg-forest shadow-soft">
              <img src="/why-travel-expanded-guide.png" alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/30 to-transparent" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {whyTravelCards.map(({ title, text, points, icon: Icon }) => (
              <article key={title} className="flex min-h-[300px] flex-col rounded-lg bg-mist p-5 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest text-white">
                  <Icon size={28} strokeWidth={1.45} />
                </span>
                <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-ink">{title}</h3>
                <p className="mt-4 min-h-16 text-sm font-semibold leading-6 text-ink/66">{text}</p>
                <ul className="mt-4 space-y-2 text-left">
                  {points.map((point) => (
                    <li key={point} className="flex gap-2 text-xs font-semibold leading-5 text-ink/66">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-manuka" size={14} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.68fr_0.32fr] lg:items-stretch">
            <article className="rounded-lg bg-mist p-6">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">What Travel Has Taught Our Children</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-5">
                {travelLessons.map(([title, text, Icon]) => (
                  <div key={title} className="text-center">
                    <Icon className="mx-auto text-forest" size={38} strokeWidth={1.4} />
                    <p className="mt-3 text-sm font-extrabold text-ink">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-ink/60">{text}</p>
                  </div>
                ))}
              </div>
            </article>
            <blockquote className="flex min-h-52 flex-col items-center justify-center border-l border-manuka/35 bg-white px-7 text-center font-display text-2xl font-bold leading-9 text-ink">
              <span className="text-5xl text-manuka">“</span>
              <p>The world is our classroom.</p>
              <p>Life is our curriculum.</p>
              <p>Every day is an opportunity to learn, grow, and connect.</p>
              <Heart className="mt-5 text-manuka" size={27} />
            </blockquote>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {whyTravelBottom.map(({ title, items, image, icon: Icon }) => (
              <article key={title} className="flex min-h-[430px] flex-col overflow-hidden rounded-lg border border-forest/10 bg-white shadow-sm">
                <div className="p-6">
                  <Icon className="text-forest" size={29} strokeWidth={1.45} />
                  <h3 className="mt-4 text-lg font-extrabold uppercase tracking-wide text-ink">{title}</h3>
                  <ul className="mt-5 space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-ink/68">
                        <CheckCircle2 className="mt-1 shrink-0 text-forest" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto h-36 overflow-hidden bg-sage">
                  <img src={image} alt="" className="h-full w-full object-cover object-top" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {activeId === "why-travel" && (
        <PillarDetailNavigation
          pillars={pillars}
          activeId={activeId}
          onSelect={choosePillar}
          onCollapse={clearPillar}
          className="-mt-6 pb-12"
        />
      )}

      <section id="travel-smarter" className={`container-page scroll-mt-28 pb-12 ${activeId === "travel-smarter" ? "" : "hidden"}`}>
        <div className="overflow-hidden rounded-lg border border-forest/10 bg-white p-5 shadow-editorial sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <div>
              <h2 className="font-display text-5xl font-bold leading-tight text-ink">Travel Smarter</h2>
              <p className="mt-2 font-display text-2xl italic text-manuka">
                Stay more, fly more, pay less.
              </p>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-ink/74">
                We travel more by combining smart accommodation choices, Airpoints, and careful cash-flow habits.
                The goal is not luxury for the sake of it. It is more shared experiences, lower costs, and more freedom.
              </p>
            </div>
            <div className="relative min-h-64 overflow-hidden rounded-lg bg-forest shadow-soft">
              <img src="/travel-smarter-expanded-guide.png" alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/86 via-white/28 to-transparent" />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">
              1. Accommodation: Stay More, Pay Less
            </h3>
            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              {accommodationStrategies.map(({ title, text, points, image, icon: Icon, links }) => (
                <article key={title} className="flex min-h-[460px] flex-col rounded-lg border border-forest/10 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-forest text-sand shadow-soft">
                      <Icon size={32} strokeWidth={1.45} />
                    </span>
                    <div>
                      <h4 className="font-display text-2xl font-bold leading-tight text-ink">{title}</h4>
                      <p className="mt-2 text-base font-semibold leading-7 text-ink/68">{text}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-ink/68">
                        <CheckCircle2 className="mt-1 shrink-0 text-manuka" size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto h-36 overflow-hidden rounded-lg bg-sage">
                    <img src={image} alt="" className="h-full w-full object-cover object-center" />
                  </div>
                  {links?.length > 0 && (
                    <div className="card-action-row mt-4 justify-center">
                      {links.map(([label, href]) => (
                        <a key={label} href={href} target="_blank" rel="noreferrer" className="btn-light px-4 py-2 text-xs">
                          {label}
                          <ArrowRight size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-lg bg-mist p-5">
            <Lightbulb className="shrink-0 text-forest" size={34} strokeWidth={1.45} />
            <p className="text-base font-bold leading-7 text-ink/74">
              Our approach: Always check Home Exchange and Karma first. Use Airbnb or Booking.com as a backup or for short stays.
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.5fr_0.5fr]">
            <article className="flex min-h-[430px] flex-col rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">2. Flights: Fly More For Less</h3>
              <div className="mt-5 flex items-start gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-forest text-sand shadow-soft">
                  <Plane size={34} strokeWidth={1.45} />
                </span>
                <div>
                  <h4 className="font-display text-2xl font-bold text-ink">Airpoints Strategy</h4>
                  <p className="mt-2 text-base font-semibold leading-7 text-ink/68">
                    Turn everyday spending into free flights.
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {airpointsStrategy.map((point) => (
                  <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-ink/68">
                    <CheckCircle2 className="mt-1 shrink-0 text-manuka" size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="card-action-row mt-5 justify-start">
                <a href={toolLinks.americanExpressAirpoints} target="_blank" rel="noreferrer" className="btn-light px-4 py-2 text-xs">
                  AMEX Airpoints
                  <ArrowRight size={14} />
                </a>
                <a href={toolLinks.anzAirpoints} target="_blank" rel="noreferrer" className="btn-light px-4 py-2 text-xs">
                  ANZ Airpoints
                  <ArrowRight size={14} />
                </a>
              </div>
              <div className="mt-auto rounded-lg bg-mist p-5">
                <p className="text-sm font-extrabold uppercase tracking-wide text-ink">How We Do It</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {airpointsFlow.map(([label, Icon], index) => (
                    <div key={label} className="relative text-center">
                      <Icon className="mx-auto text-forest" size={30} strokeWidth={1.45} />
                      <p className="mt-3 text-xs font-bold leading-5 text-ink/72">{label}</p>
                      {index < airpointsFlow.length - 1 && (
                        <ArrowRight className="absolute right-[-18px] top-2 hidden text-manuka sm:block" size={18} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="grid min-h-[430px] gap-5 rounded-lg border border-forest/10 bg-white p-6 shadow-sm md:grid-cols-[0.68fr_0.32fr]">
              <div className="flex flex-col">
                <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">3. Smart Money Strategy</h3>
                <div className="mt-5 flex items-start gap-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-forest text-sand shadow-soft">
                    <CircleDollarSign size={34} strokeWidth={1.45} />
                  </span>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-ink">Use Money Smarter</h4>
                    <p className="mt-2 text-base font-semibold leading-7 text-ink/68">
                      Improve cash flow and reduce interest, legally and ethically.
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {smartMoneyStrategy.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-ink/68">
                      <CheckCircle2 className="mt-1 shrink-0 text-manuka" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="card-action-row mt-5 justify-start">
                  <a href={toolLinks.wise} target="_blank" rel="noreferrer" className="btn-light px-4 py-2 text-xs">
                    Wise
                    <ArrowRight size={14} />
                  </a>
                  <a href={toolLinks.revolut} target="_blank" rel="noreferrer" className="btn-light px-4 py-2 text-xs">
                    Revolut
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-mist p-5 text-center">
                  <Sparkles className="text-forest" size={34} strokeWidth={1.45} />
                  <h4 className="mt-4 text-base font-extrabold text-ink">The Result</h4>
                  <p className="mt-4 text-base font-bold leading-7 text-ink/72">
                    More travel.
                    <br />
                    Lower costs.
                    <br />
                    More freedom.
                  </p>
                </div>
                <div className="h-36 overflow-hidden rounded-lg bg-sage">
                  <img src="/bali-panama-beyond-rice-fields.png" alt="" className="h-full w-full object-cover object-center" />
                </div>
              </div>
            </article>
          </div>

          <div className="mx-auto mt-7 flex max-w-3xl items-center justify-center gap-3 rounded-full border border-manuka/45 bg-mist px-4 py-3 text-center text-sm font-bold text-ink/74">
            <Heart className="shrink-0 text-forest" size={21} />
            We never travel for status. We travel for experiences, connection, and freedom.
          </div>
        </div>
      </section>
      {activeId === "travel-smarter" && (
        <PillarDetailNavigation
          pillars={pillars}
          activeId={activeId}
          onSelect={choosePillar}
          onCollapse={clearPillar}
          className="-mt-6 pb-12"
        />
      )}

      <section id="relocation" className={`container-page scroll-mt-28 pb-12 ${activeId === "relocation" ? "" : "hidden"}`}>
        <div className="overflow-hidden rounded-lg border border-forest/10 bg-white p-5 shadow-editorial sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <div>
              <h2 className="font-display text-5xl font-bold leading-tight text-ink">Relocation</h2>
              <p className="mt-2 font-display text-2xl italic text-manuka">
                New places. New possibilities. More freedom.
              </p>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-ink/74">
                Relocating isn't about escaping. It is about choosing a place that supports the lifestyle and future
                you want for your family. We're currently exploring Bali, Indonesia and Panama.
              </p>
            </div>
            <div className="relative min-h-64 overflow-hidden rounded-lg bg-forest shadow-soft">
              <img src="/relocation-expanded-guide.png" alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/25 to-transparent" />
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.34fr_0.66fr]">
            <article className="rounded-lg bg-mist p-6">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">Why Consider Relocating?</h3>
              <ul className="mt-5 space-y-3">
                {relocationReasons.map((reason) => (
                  <li key={reason} className="flex gap-3 text-sm font-semibold leading-6 text-ink/68">
                    <CheckCircle2 className="mt-1 shrink-0 text-manuka" size={16} />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {relocationBenefits.map(([title, text, Icon]) => (
                <article key={title} className="flex min-h-52 flex-col items-center justify-center rounded-lg bg-mist p-5 text-center">
                  <Icon className="text-forest" size={42} strokeWidth={1.45} />
                  <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-ink">{title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-ink/64">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
            <div className="overflow-x-auto rounded-lg border border-forest/10 bg-white shadow-sm">
              <div className="p-5">
                <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">
                  Cost Of Living Comparison (Monthly Estimate)
                </h3>
              </div>
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-sage text-xs uppercase tracking-wide text-forest">
                  <tr>
                    {["Category", "New Zealand", "Bali, Indonesia", "Panama"].map((heading) => (
                      <th key={heading} className="px-4 py-4 font-extrabold">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest/10">
                  {relocationCostRows.map((row) => (
                    <tr key={row[0]} className={row[0] === "Discretionary Income Left" ? "bg-manuka/10 font-extrabold" : ""}>
                      {row.map((cell, index) => (
                        <td key={`${row[0]}-${cell}`} className={`px-4 py-4 ${index === 0 ? "font-bold text-ink" : "text-ink/72"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="px-5 pb-5 pt-3 text-xs text-ink/50">
                *Estimations based on our current experience and research. Costs vary by lifestyle.
              </p>
            </div>

            <article className="rounded-lg border border-forest/10 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">Quick Country Snapshot</h3>
              <div className="mt-5 space-y-5">
                {countrySnapshots.map(({ title, image, points, action }) => (
                  <div key={title} className="grid gap-4 rounded-lg bg-mist p-4 sm:grid-cols-[0.38fr_0.62fr]">
                    <div className="h-40 overflow-hidden rounded-lg bg-sage">
                      <img src={image} alt="" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-base font-extrabold uppercase tracking-wide text-ink">{title}</h4>
                      <ul className="mt-3 space-y-2">
                        {points.map((point) => (
                          <li key={point} className="flex gap-2 text-xs font-semibold leading-5 text-ink/68">
                            <CheckCircle2 className="mt-0.5 shrink-0 text-manuka" size={14} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="card-action-row mt-auto">
                        <a href="#/family-travel?section=relocation" className="btn-light px-4 py-2 text-xs">
                          {action}
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.28fr_0.72fr]">
            <article className="flex min-h-[350px] flex-col rounded-lg bg-mist p-6">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">Relocation Decision Framework</h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-ink/62">
                Ask the right questions to choose the best base for your family.
              </p>
              <ul className="mt-5 space-y-3">
                {relocationFramework.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-ink/68">
                    <CheckCircle2 className="mt-1 shrink-0 text-forest" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="card-action-row mt-auto">
                <a href="#/family-travel?section=relocation" className="btn-light px-4 py-2 text-xs">
                  Relocation Planning Guide
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>

            <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="text-center text-lg font-extrabold uppercase tracking-wide text-ink">
                What We Consider When Choosing A New Base
              </h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
                {relocationBaseFactors.map(([title, text, Icon]) => (
                  <div key={title} className="border-forest/10 text-center xl:border-r xl:last:border-r-0">
                    <Icon className="mx-auto text-forest" size={34} strokeWidth={1.45} />
                    <h4 className="mt-4 text-xs font-extrabold uppercase tracking-wide text-ink">{title}</h4>
                    <p className="mx-auto mt-3 max-w-32 text-xs font-semibold leading-5 text-ink/62">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex items-center gap-4 rounded-lg bg-mist p-5">
                <Lightbulb className="shrink-0 text-forest" size={34} strokeWidth={1.45} />
                <p className="text-base font-bold leading-7 text-ink/74">
                  We're not looking for perfect. We're looking for better alignment with our values and vision.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      {activeId === "relocation" && (
        <PillarDetailNavigation
          pillars={pillars}
          activeId={activeId}
          onSelect={choosePillar}
          onCollapse={clearPillar}
          className="-mt-6 pb-12"
        />
      )}

      <section id="worldschooling" className={`container-page scroll-mt-28 pb-12 ${activeId === "worldschooling" ? "" : "hidden"}`}>
        <div className="overflow-hidden rounded-lg border border-forest/10 bg-white p-5 shadow-editorial sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
            <div>
              <h2 className="font-display text-5xl font-bold leading-tight text-ink">Worldschooling</h2>
              <p className="mt-2 font-display text-2xl italic text-manuka">
                Learning through the world. Education through experience.
              </p>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-ink/74">
                Worldschooling is about using the world as your classroom. Our children learn through real-life experiences,
                cultural immersion, and everyday adventures. They develop curiosity, confidence, and real-world skills that last a lifetime.
              </p>
            </div>
            <div className="relative min-h-64 overflow-hidden rounded-lg bg-forest shadow-soft">
              <img src="/worldschooling-expanded-guide.png" alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/30 to-transparent" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {worldschoolingSubjects.map(([title, text, points, Icon]) => (
              <article key={title} className="flex min-h-[290px] flex-col items-center rounded-lg bg-mist p-5 text-center">
                <Icon className="text-forest" size={40} strokeWidth={1.45} />
                <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-ink">{title}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-ink/62">{text}</p>
                <ul className="mt-4 space-y-2 text-left">
                  {points.map((point) => (
                    <li key={point} className="flex gap-2 text-xs font-semibold leading-5 text-ink/66">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-manuka" size={14} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.3fr_0.7fr]">
            <article className="rounded-lg bg-mist p-6">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">A Typical Day May Look Like:</h3>
              <div className="mt-5 space-y-4">
                {worldschoolingDay.map(([title, text, Icon]) => (
                  <div key={title} className="flex gap-4">
                    <Icon className="mt-1 shrink-0 text-forest" size={26} strokeWidth={1.45} />
                    <div>
                      <p className="text-sm font-extrabold text-ink">{title}</p>
                      <p className="text-sm leading-6 text-ink/64">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <div>
              <div className="grid gap-4 sm:grid-cols-4">
                {[
                  "/worldschooling-expanded-guide.png",
                  "/bali-panama-beyond-rice-fields.png",
                  "/family-and-travel.png",
                  "/pacific-family-route.png"
                ].map((image, index) => (
                  <div key={image} className="h-40 overflow-hidden rounded-lg bg-sage shadow-sm">
                    <img
                      src={image}
                      alt=""
                      className={`h-full w-full object-cover ${index === 0 ? "object-top" : "object-center"}`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 rounded-lg bg-mist p-5">
                <Leaf className="shrink-0 text-forest" size={42} strokeWidth={1.45} />
                <p className="text-base font-bold leading-7 text-ink/74">
                  We follow interest-led learning with structure, consistency, and plenty of real-life adventure.
                  It's education that fits our family, not the other way around.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {worldschoolingSupport.map(({ title, text, items, action, icon: Icon }) => (
              <article key={title} className="flex min-h-[330px] flex-col rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
                <Icon className="text-forest" size={30} strokeWidth={1.45} />
                <h3 className="mt-4 text-lg font-extrabold uppercase tracking-wide text-ink">{title}</h3>
                {text && <p className="mt-3 text-sm leading-6 text-ink/64">{text}</p>}
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-ink/68">
                      <CheckCircle2 className="mt-1 shrink-0 text-forest" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {action && (
                  <div className="card-action-row mt-auto">
                    <a href={discordUrl} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-xs">
                      {action}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      {activeId === "worldschooling" && (
        <PillarDetailNavigation
          pillars={pillars}
          activeId={activeId}
          onSelect={choosePillar}
          onCollapse={clearPillar}
          className="-mt-6 pb-12"
        />
      )}

      <section id="global-lifestyle" className={`container-page scroll-mt-28 pb-12 ${activeId === "global-lifestyle" ? "" : "hidden"}`}>
        <div className="overflow-hidden rounded-lg border border-forest/10 bg-white p-5 shadow-editorial sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <div>
              <h2 className="font-display text-5xl font-bold leading-tight text-ink">Global Lifestyle Design</h2>
              <p className="mt-2 font-display text-2xl italic text-manuka">
                Intentional choices. Lasting impact. A life by design.
              </p>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-ink/74">
                Global living isn't about constantly moving. It's about designing a life that supports our values,
                gives us freedom, and allows our family to thrive.
              </p>
            </div>
            <div className="relative min-h-64 overflow-hidden rounded-lg bg-forest shadow-soft">
              <img src="/global-lifestyle-expanded-guide.png" alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/25 to-transparent" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {globalLifestylePillars.map(({ title, text, points, icon: Icon }) => (
              <article key={title} className="flex min-h-[330px] flex-col items-center rounded-lg bg-mist p-5 text-center">
                <Icon className="text-forest" size={42} strokeWidth={1.45} />
                <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-ink">{title}</h3>
                <p className="mt-3 min-h-14 text-sm font-semibold leading-6 text-ink/64">{text}</p>
                <ul className="mt-4 space-y-2 text-left">
                  {points.map((point) => (
                    <li key={point} className="flex gap-2 text-xs font-semibold leading-5 text-ink/66">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-manuka" size={14} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 grid overflow-hidden rounded-lg bg-mist lg:grid-cols-[0.32fr_0.25fr_0.25fr_0.18fr]">
            <article className="flex flex-col justify-center border-forest/10 p-6 lg:border-r">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">Our Vision</h3>
              <p className="mt-5 text-base font-semibold leading-8 text-ink/70">
                We're building a life that blends freedom, simplicity, adventure, and purpose, so we can be fully
                present for what matters most: our family.
              </p>
            </article>
            <blockquote className="flex flex-col items-center justify-center border-forest/10 p-6 text-center font-display text-2xl font-bold leading-9 text-ink lg:border-r">
              <span className="text-5xl text-manuka">“</span>
              <p>We don't want a perfect life.</p>
              <p>We want a meaningful one.</p>
              <Heart className="mt-5 text-manuka" size={27} />
            </blockquote>
            <article className="flex flex-col justify-center border-forest/10 p-6 lg:border-r">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">We Focus On</h3>
              <ul className="mt-5 space-y-3">
                {globalLifestyleFocus.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-ink/68">
                    <CheckCircle2 className="mt-1 shrink-0 text-manuka" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <div className="min-h-64 overflow-hidden bg-sage">
              <img src="/family-and-travel.png" alt="" className="h-full w-full object-cover object-center" />
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.8fr_0.2fr]">
            <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-ink">How We Design Our Life</h3>
              <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
                {globalLifestyleFlow.map(([title, text, Icon], index) => (
                  <div key={title} className="relative text-center">
                    <Icon className="mx-auto text-forest" size={42} strokeWidth={1.45} />
                    <h4 className="mt-4 text-xs font-extrabold uppercase tracking-wide text-ink">
                      {index + 1}. {title}
                    </h4>
                    <p className="mx-auto mt-3 max-w-40 text-xs font-semibold leading-5 text-ink/62">{text}</p>
                    {index < globalLifestyleFlow.length - 1 && (
                      <ArrowRight className="absolute right-[-18px] top-4 hidden text-manuka xl:block" size={18} />
                    )}
                  </div>
                ))}
              </div>
            </article>
            <aside className="flex min-h-56 flex-col items-center justify-center rounded-lg bg-forest p-6 text-center text-sand shadow-soft">
              <h3 className="text-base font-extrabold uppercase tracking-wide text-sand">Remember</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-sand/78">
                It's not about doing everything. It's about doing what aligns with who we are.
              </p>
              <Heart className="mt-5 text-manuka" size={25} />
            </aside>
          </div>

          <div className="mx-auto mt-7 flex max-w-3xl items-center justify-center gap-3 rounded-full border border-manuka/45 bg-mist px-4 py-3 text-center text-sm font-bold text-ink/74">
            <Heart className="shrink-0 text-forest" size={21} />
            A life without borders is not a place. It is a set of choices we keep making together.
          </div>
        </div>
      </section>
      {activeId === "global-lifestyle" && (
        <PillarDetailNavigation
          pillars={pillars}
          activeId={activeId}
          onSelect={choosePillar}
          onCollapse={clearPillar}
          className="-mt-6 pb-12"
        />
      )}

      <PracticalGuidesSection />

      <section className="container-page pb-14">
        <div className="text-center">
          <p className="eyebrow text-manuka">Bali & Panama Planning Snapshot</p>
          <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl font-bold text-ink">
            Real numbers help us compare the lifestyle options.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-ink/62">
            These are planning estimates, not promises. They give us a grounded way to compare monthly family costs before making any big decisions.
          </p>
        </div>
        <div className="mt-7 grid gap-5 lg:grid-cols-[0.76fr_0.24fr]">
          <div className="overflow-x-auto rounded-lg border border-forest/10 bg-white shadow-soft">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-sage text-xs uppercase tracking-wide text-forest">
                <tr>
                  {["Category", "New Zealand", "Bali", "Panama"].map((heading) => (
                    <th key={heading} className="px-4 py-4 font-extrabold">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10">
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className={row[0] === "Total monthly estimate" ? "bg-manuka/10 font-extrabold" : ""}>
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${cell}`} className={`px-4 py-4 ${index === 0 ? "font-bold text-ink" : "text-ink/72"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-5 pb-5 pt-3 text-xs text-ink/50">
              Estimates are for planning only and will vary by exchange rates, visas, lifestyle, schooling choices, and health cover.
            </p>
          </div>
          <blockquote className="flex min-h-80 flex-col justify-center rounded-lg border border-forest/10 bg-white p-7 font-display text-xl font-bold leading-8 text-ink shadow-soft">
            <span className="text-4xl text-forest">“</span>
            <p className="mt-2">
              We aren't chasing cheaper. We're looking for a life where money, time, health, learning, and family all work together better.
            </p>
            <Heart className="mt-6 text-forest" size={25} />
          </blockquote>
        </div>
      </section>

      <FamilyTravelBookshelf />

      <TravelFreedomToolsSection />

      <section id="start-family-journey" className="container-page scroll-mt-28 pb-16">
        <div className="text-center">
          <p className="eyebrow text-manuka">Start Your Journey</p>
          <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl font-bold text-ink">
            Where Do You Want to Begin?
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {beginCards.map(({ title, text, action, href, guideId, image, icon: Icon }) => (
            <article key={title} className="flex min-h-[360px] flex-col overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft">
              <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/42 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col items-center p-5 text-center">
                <span className="-mt-11 grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-mist text-forest shadow-soft">
                  <Icon size={30} strokeWidth={1.45} />
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/66">{text}</p>
                <div className="card-action-row mt-auto">
                  {guideId ? (
                    <button type="button" onClick={() => setActiveGuideId(guideId)} className="btn-light px-4 py-2 text-xs">
                      {action}
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <a href={href} className="btn-light px-4 py-2 text-xs">
                      {action}
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-14">
        <div className="grid gap-4 border-y border-forest/10 py-6 text-center sm:grid-cols-2 lg:grid-cols-5">
          {bottomValues.map(([Icon, label]) => (
            <div key={label} className="flex items-center justify-center gap-3 border-forest/10 text-sm font-bold text-ink/72 lg:border-r lg:last:border-r-0">
              <Icon className="text-forest" size={25} strokeWidth={1.45} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      {activeGuide && <FamilyTravelGuideModal guide={activeGuide} onClose={() => setActiveGuideId("")} />}
    </main>
  );
}

function FamilyTravelGuideModal({ guide, onClose }) {
  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto bg-ink/78 px-4 py-6 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-manuka/30 bg-white shadow-editorial">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-forest/10 bg-white/95 px-4 py-3 backdrop-blur">
          <div>
            <p className="eyebrow text-manuka">Family & Travel Guide</p>
            <h2 className="font-display text-2xl font-bold text-ink">{guide.title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <a href={guide.image} download className="btn-light px-4 py-2 text-xs">
              <Download size={15} />
              Download
            </a>
            <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white text-ink transition hover:bg-sage" aria-label="Close guide popup">
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src={guide.image} alt={`${guide.title} guide`} className="mx-auto max-h-[82vh] w-auto rounded-md object-contain shadow-soft" />
        </div>
      </div>
    </div>
  );
}

function Checklist({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map(([title, text]) => (
        <li key={title} className="flex gap-3 text-sm leading-6 text-ink/72">
          <CheckCircle2 className="mt-1 shrink-0 text-forest" size={17} />
          <span>
            <strong className="text-ink">{title}</strong>
            {" - "}
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}
