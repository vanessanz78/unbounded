import {
  AlertTriangle,
  ArrowRight,
  Bitcoin as BitcoinIcon,
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Compass,
  Clock,
  Download,
  ExternalLink,
  Globe2,
  HelpCircle,
  KeyRound,
  Landmark,
  Layers,
  Laptop,
  LineChart,
  LockKeyhole,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  PenLine,
  Plane,
  RefreshCw,
  HandHeart,
  HardDrive,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sprout,
  Star,
  Target,
  ThumbsUp,
  TrendingUp,
  Users,
  WalletCards
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  abundantFreedomFlyer,
  bitcoinGrowthRows,
  comparisonRows,
  familyPrinciples,
  freedomQuickGuides,
  freedomPillars,
  platformGroups,
  stockGrowthRows
} from "../data/freedomWealth.js";
import { getAmazonBookLink } from "../data/amazonBookLinks.js";
import { toolLinks } from "../data/toolLinks.js";
import PillarDetailNavigation from "../components/PillarDetailNavigation.jsx";

const accentClasses = {
  navy: "bg-[#0d3158] text-white",
  fern: "bg-fern text-white",
  gold: "bg-manuka text-ink",
  teal: "bg-pounamu text-white"
};

const guideFallbackByPillar = {
  "online-trading": "trading",
  affiliates: "online-income",
  "protect-preserve": "bitcoin"
};

const guideTargetById = {
  trading: "online-trading"
};

function getGuideForPillar(pillarId) {
  const guideId = guideFallbackByPillar[pillarId] || pillarId;
  return freedomQuickGuides.find((guide) => guide.id === guideId);
}

function getGuideTargetPillar(guideId) {
  if (freedomPillars.some((pillar) => pillar.id === guideId)) return guideId;
  return guideTargetById[guideId] || "online-trading";
}

function getRequestedPillarId() {
  if (typeof window === "undefined") return "";
  const query = window.location.hash.split("?")[1] || "";
  const section = new URLSearchParams(query).get("section");
  return freedomPillars.some((pillar) => pillar.id === section) ? section : "";
}

function getCurrentHashPath() {
  if (typeof window === "undefined") return "/";
  const hash = window.location.hash.replace("#", "") || "/";
  return hash.split(/[?#]/)[0] || "/";
}

const freedomBookLibrary = [
  {
    title: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    tag: "Bitcoin & sovereignty",
    cover: "https://covers.openlibrary.org/b/isbn/9781119473862-L.jpg"
  },
  {
    title: "Mastering Bitcoin",
    author: "Andreas M. Antonopoulos",
    tag: "Self-custody foundations",
    cover: "https://covers.openlibrary.org/b/isbn/9781491954386-L.jpg"
  },
  {
    title: "The Internet of Money",
    author: "Andreas M. Antonopoulos",
    tag: "Freedom money",
    cover: "https://covers.openlibrary.org/b/isbn/9781537000459-L.jpg"
  },
  {
    title: "The Sovereign Individual",
    author: "James Dale Davidson & William Rees-Mogg",
    tag: "Sovereignty",
    cover: "https://covers.openlibrary.org/b/isbn/9780684832722-L.jpg"
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    tag: "Long-term investing",
    cover: "https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg"
  },
  {
    title: "Common Stocks and Uncommon Profits",
    author: "Philip A. Fisher",
    tag: "Quality companies",
    cover: "https://covers.openlibrary.org/b/isbn/9780471445500-L.jpg"
  },
  {
    title: "The Little Book of Common Sense Investing",
    author: "John C. Bogle",
    tag: "Index funds",
    cover: "https://covers.openlibrary.org/b/isbn/9780470102107-L.jpg"
  },
  {
    title: "One Up On Wall Street",
    author: "Peter Lynch",
    tag: "Investing mindset",
    cover: "https://covers.openlibrary.org/b/isbn/9780743200400-L.jpg"
  },
  {
    title: "Trading in the Zone",
    author: "Mark Douglas",
    tag: "Trading psychology",
    cover: "https://covers.openlibrary.org/b/isbn/9780735201446-L.jpg"
  },
  {
    title: "Market Wizards",
    author: "Jack D. Schwager",
    tag: "Trader interviews",
    cover: "https://covers.openlibrary.org/b/isbn/9781592802975-L.jpg"
  },
  {
    title: "The Daily Trading Coach",
    author: "Brett N. Steenbarger",
    tag: "Trading practice",
    cover: "https://covers.openlibrary.org/b/isbn/9780470398562-L.jpg"
  },
  {
    title: "The Biggest Loser Wins",
    author: "Bob Lang",
    tag: "Trading mindset",
    cover: ""
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    tag: "Assets & cash flow",
    cover: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
  },
  {
    title: "Multiple Streams of Income",
    author: "Robert G. Allen",
    tag: "Income streams",
    cover: "https://covers.openlibrary.org/b/id/302117-L.jpg"
  },
  {
    title: "Crushing It!",
    author: "Gary Vaynerchuk",
    tag: "Audience building",
    cover: "https://covers.openlibrary.org/b/isbn/9780062674678-L.jpg"
  },
  {
    title: "YouTube Secrets",
    author: "Sean Cannell & Benji Travis",
    tag: "Content income",
    cover: "https://covers.openlibrary.org/b/isbn/9781544511818-L.jpg"
  },
  {
    title: "The 4-Hour Workweek",
    author: "Tim Ferriss",
    tag: "Lifestyle design",
    cover: "https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg"
  },
  {
    title: "Your Money or Your Life",
    author: "Vicki Robin & Joe Dominguez",
    tag: "Money & life energy",
    cover: "https://covers.openlibrary.org/b/isbn/9780143115762-L.jpg"
  },
  {
    title: "The Total Money Makeover",
    author: "Dave Ramsey",
    tag: "Money reset",
    cover: "https://covers.openlibrary.org/b/id/6873839-L.jpg"
  },
  {
    title: "I Will Teach You to Be Rich",
    author: "Ramit Sethi",
    tag: "Money systems",
    cover: "https://covers.openlibrary.org/b/isbn/9781523505746-L.jpg"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    tag: "Wealth mindset",
    cover: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    tag: "Purpose & courage",
    cover: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
  }
];

const bitcoinFoundationCards = [
  {
    title: "Why Bitcoin?",
    icon: ShieldCheck,
    points: [
      "Portable wealth you can take anywhere in the world.",
      "Borderless and permissionless money for a global life.",
      "Fixed supply of 21 million protects against inflation.",
      "Financial sovereignty means you are in control.",
      "Works 24/7, anywhere in the world."
    ]
  },
  {
    title: "The Problem It Solves",
    icon: HelpCircle,
    points: [
      "Fiat money can be printed without limit.",
      "Inflation silently reduces your purchasing power.",
      "Banks and governments can freeze or restrict access.",
      "Traditional systems do not always give you options.",
      "Bitcoin gives you choice, control, and resilience."
    ]
  },
  {
    title: "Why Families Love It",
    icon: Users,
    points: [
      "Protect savings for the long term.",
      "Move and live anywhere.",
      "Send and receive value instantly.",
      "Build generational wealth on your terms.",
      "Opt out of broken systems when you choose."
    ]
  },
  {
    title: "Panama Advantage",
    icon: MapPin,
    points: [
      "Buy Bitcoin privately and legally.",
      "Banking and e-Postcard linked to your Bitcoin.",
      "Spend globally with Bitcoin-backed debit cards.",
      "Quick transfers with low fees.",
      "More freedom. More privacy. More options."
    ]
  }
];

const bitcoinSovereigntySteps = [
  { title: "Educate", icon: BookOpen, text: "Learn how money works before you buy anything." },
  { title: "Secure", icon: LockKeyhole, text: "Use self-custody and protect your seed phrase." },
  { title: "Accumulate", icon: TrendingUp, text: "Buy consistently. Small amounts build real wealth." },
  { title: "Legacy", icon: Users, text: "Pass on knowledge and wealth to future generations." }
];

const bitcoinLoveItems = [
  { title: "Portable", icon: Plane },
  { title: "Borderless", icon: Globe2 },
  { title: "Permissionless", icon: KeyRound },
  { title: "Transparent", icon: HelpCircle },
  { title: "Limited Supply", icon: BitcoinIcon },
  { title: "Self-Custody Options", icon: WalletCards },
  { title: "Long-Term Focus", icon: TrendingUp }
];

const bitcoinRisks = [
  "Bitcoin is not risk-free. Education is essential.",
  "Price volatility - short term ups and downs.",
  "Self-custody responsibility - you are in control.",
  "Scams and phishing - stay alert and verify everything.",
  "Security - protect your devices and seed phrase.",
  "Regulation - rules are always evolving."
];

const stockWhyInvestItems = [
  {
    title: "Beat Inflation",
    icon: TrendingUp,
    text: "Over time, inflation reduces purchasing power. Investing helps protect and grow your value."
  },
  {
    title: "Financial Freedom",
    icon: Target,
    text: "Investing creates options, choices, and the ability to design a life on your own terms."
  },
  {
    title: "Time Is Your Greatest Asset",
    icon: Clock,
    text: "The earlier you start, the more time compounding has to work for you."
  },
  {
    title: "Family Security",
    icon: Users,
    text: "Building wealth today creates a stronger, more secure future for the people you love most."
  },
  {
    title: "Freedom To Move",
    icon: Globe2,
    text: "Investments are not tied to one location. You can take your life and your wealth anywhere."
  },
  {
    title: "Legacy & Impact",
    icon: Sprout,
    text: "Wealth gives you the ability to give, create opportunities, and leave a lasting legacy."
  }
];

const stockHowInvestItems = [
  {
    title: "Low-Cost Index Funds (ETFs)",
    icon: LineChart,
    text: "A simple way to own a slice of the whole market at low cost."
  },
  {
    title: "Quality Growth Companies",
    icon: ChartNoAxesCombined,
    text: "Invest in strong businesses with solid fundamentals and long-term potential."
  },
  {
    title: "Diversification",
    icon: Layers,
    text: "Spread across different industries, regions, and asset types to reduce risk."
  },
  {
    title: "Automate & Be Consistent",
    icon: CircleDollarSign,
    text: "Regular contributions build wealth over time without emotion or guesswork."
  },
  {
    title: "Long-Term Mindset",
    icon: Sprout,
    text: "We focus on years and decades, not days and headlines."
  },
  {
    title: "Reinvest & Grow",
    icon: RefreshCw,
    text: "Let dividends and returns compound to accelerate your results."
  }
];

const stockAccounts = [
  "Sharesies (NZ) - Simple investing and ETF access",
  "Moomoo - Advanced charting and stock research",
  "Stake - US stock and ETF investing",
  "KiwiSaver - Long-term retirement investing",
  "InvestNow - Managed funds and KiwiSaver"
];

const stockPrinciples = [
  "Invest in what you understand.",
  "Keep costs low.",
  "Do not try to time the market.",
  "Stay diversified.",
  "Let compounding do the heavy lifting.",
  "Review regularly, not constantly.",
  "Invest with purpose, not emotion."
];

const onlineIncomeMeaningItems = [
  {
    title: "Location Independent",
    icon: Globe2,
    text: "Work from anywhere with an internet connection."
  },
  {
    title: "Flexible Hours",
    icon: Clock,
    text: "Design work around your family’s lifestyle."
  },
  {
    title: "Multiple Income Streams",
    icon: TrendingUp,
    text: "Reduce risk by not relying on one source of income."
  },
  {
    title: "Scalable",
    icon: MonitorSmartphone,
    text: "Build systems and assets that can grow over time."
  },
  {
    title: "Family Focused",
    icon: Users,
    text: "More time together and more control over your future."
  },
  {
    title: "Long-Term Impact",
    icon: Sprout,
    text: "Create wealth and options for generations."
  }
];

const onlineIncomeStreams = [
  {
    title: "Digital Products",
    icon: Laptop,
    points: ["Ebooks", "Templates", "Printables", "Courses"],
    text: "Create once, sell many times."
  },
  {
    title: "Content & Media",
    icon: PenLine,
    points: ["YouTube", "Blogging", "Podcasting", "Social media"],
    text: "Build an audience and earn through value."
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    points: ["Dropshipping", "Print on demand", "Niche stores"],
    text: "Sell products online without a physical store."
  },
  {
    title: "Coaching & Services",
    icon: BriefcaseBusiness,
    points: ["Consulting", "Coaching", "Freelancing", "Virtual assistance"],
    text: "Solve problems and get paid for your skills."
  },
  {
    title: "Affiliate Marketing",
    icon: Megaphone,
    points: ["Recommend tools", "Earn commissions", "Build trust", "Help others"],
    text: "Promote products you use and believe in."
  },
  {
    title: "Software & Apps",
    icon: Layers,
    points: ["No-code tools", "SaaS", "Mobile apps"],
    text: "Build digital solutions that scale."
  }
];

const onlineIncomeBuildSteps = [
  "Start with a skill or experience you already have.",
  "Solve a real problem for a specific group of people.",
  "Create consistent value before asking for the sale.",
  "Build an audience and serve them well.",
  "Automate and systemise where possible.",
  "Keep learning and adapting."
];

const affiliateWorkItems = [
  {
    title: "Trust First",
    icon: ShieldCheck,
    text: "We only recommend products and services we use and believe in."
  },
  {
    title: "Quality Matters",
    icon: ThumbsUp,
    text: "We choose tools that are reliable, effective, and add real value."
  },
  {
    title: "Family Focused",
    icon: Users,
    text: "Every recommendation supports freedom, simplicity, and a life that works for families."
  },
  {
    title: "Global Options",
    icon: Globe2,
    text: "We look for platforms and services that work across borders and lifestyles."
  },
  {
    title: "Win-Win",
    icon: HandHeart,
    text: "You get useful resources, and we can keep creating free content to help you."
  }
];

const affiliatePartnerPlatforms = [
  {
    name: "Moomoo",
    mark: "moomoo",
    icon: LineChart,
    accent: "text-[#ff6a00]",
    text: "Advanced charting, market data, and smart investing tools.",
    href: toolLinks.moomoo
  },
  {
    name: "Sharesies",
    mark: "Sharesies",
    icon: Sprout,
    accent: "text-[#ff3f8f]",
    text: "Simple investing for New Zealand and Australia.",
    href: toolLinks.sharesies
  },
  {
    name: "STACKED",
    mark: "STACKED",
    icon: BitcoinIcon,
    accent: "text-[#0d8f57]",
    text: "Automated crypto investing and Bitcoin savings.",
    href: toolLinks.stacked
  },
  {
    name: "BlackBull Markets",
    mark: "BlackBull",
    icon: TrendingUp,
    accent: "text-ink",
    text: "Global broker with stocks, crypto, and trading tools.",
    href: toolLinks.blackbull
  },
  {
    name: "Ledger",
    mark: "Ledger",
    icon: HardDrive,
    accent: "text-ink",
    text: "Hardware wallets to secure your crypto and your future.",
    href: toolLinks.ledger
  },
  {
    name: "Twelve Labs",
    mark: "Twelve Labs",
    icon: Landmark,
    accent: "text-[#7b5cff]",
    text: "AI video intelligence for searchable content, research, and media workflows.",
    href: toolLinks.twelveLabs
  },
  {
    name: "Airpoints",
    mark: "Airpoints",
    icon: Plane,
    accent: "text-ink",
    text: "Earn and use points for travel, upgrades, and experiences.",
    href: toolLinks.airpoints
  }
];

const affiliateHowCards = [
  {
    title: "Affiliate Marketing: How It Works",
    text:
      "You recommend a product or service using your unique affiliate link. When someone uses your link to sign up or purchase, you earn a commission.",
    points: [
      "You join an affiliate program.",
      "You get a unique tracking link or code.",
      "You share your link through content, email, or conversations.",
      "Someone clicks and takes action.",
      "You earn a commission or reward."
    ],
    calloutTitle: "Examples of Affiliate Income",
    calloutIcon: MonitorSmartphone,
    calloutItems: [
      "Software subscriptions",
      "Investment platforms",
      "Travel bookings",
      "Education and courses",
      "Financial services",
      "Physical products"
    ]
  },
  {
    title: "Partnerships: How It Works",
    text:
      "You partner with a brand or business who aligns with your values and audience. They pay you to promote their products, services, or campaigns.",
    points: [
      "You build an audience and share valuable content.",
      "Brands see the value in your platform and trust.",
      "You agree on terms, deliverables, and timeline.",
      "You create content or promote their offering.",
      "You get paid for your reach, influence, and impact."
    ],
    calloutTitle: "Types of Partnerships",
    calloutIcon: Users,
    calloutItems: [
      "Sponsored content",
      "Product reviews",
      "Brand ambassadorships",
      "Email promotions",
      "Webinars and events",
      "Long-term collaborations"
    ]
  }
];

const affiliateSustainableItems = [
  {
    title: "Trust First",
    icon: ShieldCheck,
    text: "Only recommend what you genuinely believe in."
  },
  {
    title: "Solve Real Problems",
    icon: Target,
    text: "Help your audience achieve real outcomes and results."
  },
  {
    title: "Be Transparent",
    icon: BookOpen,
    text: "Let people know when you use affiliate links or partnerships."
  },
  {
    title: "Provide Value",
    icon: Star,
    text: "Your content should teach, inspire, or solve a problem."
  },
  {
    title: "Focus On Relationships",
    icon: RefreshCw,
    text: "Long-term trust creates more income than quick promotions."
  }
];

const affiliateStartSteps = [
  "Choose a niche or topic you care about.",
  "Build an audience through content and connection.",
  "Join affiliate programs for tools you already use.",
  "Create helpful content that solves problems.",
  "Share your links naturally and ethically.",
  "Keep showing up and providing value."
];

const affiliateIncomeRows = [
  ["Getting Started", "$100 - $500 / month"],
  ["Consistent Content", "$500 - $2,000 / month"],
  ["Growing Audience", "$2,000 - $10,000 / month"],
  ["Established Platform", "$10,000+ / month"]
];

const tradingWhyFuturesItems = [
  {
    title: "Trade Anywhere In The World",
    icon: Globe2,
    text:
      "All you need is an internet connection and a laptop. You are not tied to an office or a location."
  },
  {
    title: "Always A Market Open Somewhere",
    icon: Clock,
    text:
      "Futures markets run nearly 24 hours a day, 5 days a week. There is always an opportunity somewhere in the world."
  },
  {
    title: "Small Investment, High Potential",
    icon: CircleDollarSign,
    text:
      "You can control large amounts of capital with a fraction of the cost. A small start can lead to big results."
  },
  {
    title: "You Do Not Risk Your Own Money",
    icon: ShieldCheck,
    text:
      "Funded accounts allow you to trade with firm capital. You only risk a small evaluation fee, not your savings."
  },
  {
    title: "Clear Rules, Not Guesswork",
    icon: Target,
    text:
      "Structured strategies remove emotion and focus on probability, risk management, and consistency."
  }
];

const tradingPropFirmSteps = [
  {
    title: "Pass An Evaluation",
    icon: CheckCircle2,
    text: "Show the firm you can trade with consistency and follow the rules."
  },
  {
    title: "Get Funded",
    icon: WalletCards,
    text: "Once approved, you get access to firm capital to trade and grow."
  },
  {
    title: "Keep A Share Of The Profits",
    icon: CircleDollarSign,
    text: "You keep a portion of the profits you generate. They win when you win."
  },
  {
    title: "Scale Over Time",
    icon: TrendingUp,
    text: "Grow your skills, scale your account size, and build long-term income."
  },
  {
    title: "Create Freedom For Your Family",
    icon: Users,
    text: "More time, more choices, and more opportunities for the people you love."
  }
];

const tradingSuccessItems = [
  "A repeatable strategy",
  "Discipline and patience",
  "Risk management first",
  "Continuous learning",
  "Protecting capital"
];

const tradingAdvantageItems = [
  ["Bounce Strategy", "Trade key support and resistance levels for high-probability reactions."],
  ["Break Strategy", "Ride strong momentum when price breaks key levels."],
  ["Risk Management", "Protect capital first. Survive to thrive."],
  ["Trading Psychology", "Master your mindset. Master your results."]
];

const wealthProtectionAreas = [
  {
    title: "Asset Protection",
    icon: ShieldCheck,
    text: "Structures that help protect your wealth from legal claims, creditors, and financial risks.",
    points: ["Trusts", "Companies", "Smart structuring", "Separation of assets"]
  },
  {
    title: "Safe Custody",
    icon: Landmark,
    text: "Keep your assets in secure places that you control, not someone else.",
    points: ["Self-custody", "Cold wallets", "Private banking", "Diversified storage"]
  },
  {
    title: "Legal & Estate Planning",
    icon: BookOpen,
    text: "Make sure your wishes are known, your family is provided for, and your legacy is protected.",
    points: ["Wills & trusts", "Powers of attorney", "Estate plans", "Succession planning"]
  },
  {
    title: "Insurance",
    icon: WalletCards,
    text: "Protect your family from the financial impact of illness, injury, or unexpected events.",
    points: ["Health insurance", "Life insurance", "Income protection", "Travel insurance"]
  },
  {
    title: "Wealth Growth & Diversification",
    icon: ChartNoAxesCombined,
    text: "Grow your wealth intentionally and reduce risk by diversifying across assets.",
    points: ["Bitcoin & digital assets", "Stocks & ETFs", "Real assets", "Online income"]
  },
  {
    title: "Privacy & Financial Freedom",
    icon: LockKeyhole,
    text: "Protect your privacy and maintain control of your money and your choices.",
    points: ["Offshore options", "Multi-currency", "Low-tax strategies", "Secure communications"]
  }
];

const wealthProtectionSteps = [
  ["Assess & Plan", "We review our assets, risks, and goals, then create a plan that fits our family."],
  ["Build The Foundation", "Set up the right structures, accounts, and protections."],
  ["Secure & Store Safely", "Use secure custody for cash, crypto, and documents."],
  ["Protect What Matters Most", "Put insurance and legal protections in place for peace of mind."],
  ["Grow & Manage Intentionally", "Invest, diversify, and create multiple income streams."],
  ["Review & Pass It On", "Review regularly and prepare the next generation."]
];

const wealthLegacyCards = [
  {
    title: "Bitcoin & Legacy",
    icon: WalletCards,
    text:
      "With The Bitcoin Way, you can set up a FileSafe or inheritance plan that allows your Bitcoin to be passed on securely to your nominated beneficiaries without them needing technical knowledge.",
    points: [
      "Securely store your seed phrase in a protected offline vault.",
      "Nominate who can access your Bitcoin.",
      "They receive simple, clear instructions.",
      "Your wealth, your way, even when you are not here."
    ],
    callout: "Plan today so your family can access tomorrow.",
    href: toolLinks.theBitcoinWay,
    linkLabel: "Visit The Bitcoin Way"
  },
  {
    title: "Karma Group & Lifestyle Legacy",
    icon: Plane,
    text:
      "Karma Group offers more than travel. They offer long-term lifestyle planning and estate benefits that can be passed down to your family, giving them options, experiences, and memories.",
    points: [
      "Timeshare-style ownership with global destinations.",
      "Can be included in your estate plan.",
      "Pass down holidays, not just money.",
      "Create traditions that last for generations."
    ],
    callout: "Legacy can be memories, access, and options.",
    href: toolLinks.karmaGroup,
    linkLabel: "Visit Karma Group"
  }
];

function CheckList({ items, compact = false }) {
  return (
    <ul className={compact ? "space-y-2" : "space-y-3"}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-ink/75">
          <CheckCircle2 className="mt-0.5 shrink-0 text-forest" size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MiniChartScreen() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-lg border border-white/15 bg-[#081d20] p-4 shadow-editorial">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-manuka" />
          <span className="h-2.5 w-2.5 rounded-full bg-sage" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white/70">
          Long-Term View
        </span>
      </div>
      <div className="grid h-44 grid-cols-8 items-end gap-2 rounded-md bg-ink/80 p-4">
        {[34, 48, 42, 58, 68, 62, 78, 90].map((height, index) => (
          <span
            key={height}
            className={`rounded-t ${index % 2 === 0 ? "bg-manuka" : "bg-fern"}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-md bg-white/8 px-4 py-3">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wide text-manuka">Compounding</p>
          <p className="mt-1 text-sm text-white/75">Slow, steady, repeatable.</p>
        </div>
        <TrendingUp className="text-manuka" size={30} />
      </div>
    </div>
  );
}

function IconInfoGrid({ eyebrow, items, columns = "xl:grid-cols-6" }) {
  return (
    <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
      <h3 className="text-center text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
        {eyebrow}
      </h3>
      <div className={`mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${columns}`}>
        {items.map(({ title, icon: Icon, text }) => (
          <article key={title} className="rounded-lg bg-mist p-5 text-center">
            <Icon className="mx-auto text-forest" size={30} strokeWidth={1.7} />
            <h4 className="mt-4 text-xs font-extrabold uppercase tracking-wide text-ink">
              {title}
            </h4>
            <p className="mt-3 text-sm leading-6 text-ink/70">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function OnlineTradingPillarDetail({ activePillar, activeGuide, onViewAll }) {
  return (
    <section id="pillar-detail" className="container-page pb-16">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-manuka">Focused Pillar</p>
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-forest shadow-sm transition hover:border-manuka hover:text-ink"
        >
          View all pillars
          <ArrowRight size={15} />
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-editorial">
        <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="p-8 lg:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
              Pillar {activePillar.number.padStart(2, "0")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Online Trading
            </h2>
            <p className="mt-4 font-display text-2xl font-bold italic text-manuka">
              Trade Anywhere. Live Everywhere.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/74">
              Online trading gives our family the freedom to create consistent income
              from anywhere in the world. With structured strategies and funded accounts,
              a small start can lead to life-changing opportunities without risking your
              life savings.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-ink/74">
              This is more than trading. It is a pathway to time freedom, financial
              independence, and a life built on your terms.
            </p>
            <div className="card-action-row mt-7 justify-start gap-3">
              <a
                href={toolLinks.abundantFreedom}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Visit AbundantFreedom.online
                <ExternalLink size={16} />
              </a>
              {activeGuide ? (
                <a href={activeGuide.pdf} download className="btn-light">
                  Download Quick Guide
                  <Download size={16} />
                </a>
              ) : null}
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden bg-forest">
            <img
              src="/dad-online-trading.png"
              alt="Dad trading online while children play nearby"
              className="absolute inset-0 h-full w-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/78 via-white/18 to-forest/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/65 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 max-w-xs rounded-lg border border-manuka/30 bg-forest/94 p-5 text-white shadow-editorial">
              <p className="font-display text-4xl leading-none text-manuka">“</p>
              <p className="mt-1 text-sm font-semibold leading-6">
                You don't need a financial background. You need a system, discipline,
                and the desire to learn.
              </p>
              <Sprout className="mt-4 text-manuka" size={19} />
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <IconInfoGrid
            eyebrow="Why Futures Trading?"
            items={tradingWhyFuturesItems}
            columns="xl:grid-cols-5"
          />
        </div>

        <div className="px-6 pb-8 lg:px-8">
          <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
                Why Funded Accounts & Prop Firms?
              </h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-ink/68">
                Prop firms give you the opportunity to access significant capital
                without the financial pressure.
              </p>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-5">
              {tradingPropFirmSteps.map(({ title, icon: Icon, text }) => (
                <article key={title} className="rounded-lg bg-mist p-5 text-center">
                  <Icon className="mx-auto text-forest" size={30} strokeWidth={1.7} />
                  <h4 className="mt-4 text-xs font-extrabold uppercase tracking-wide text-ink">
                    {title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-ink/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 px-6 pb-8 lg:grid-cols-[0.32fr_0.68fr] lg:px-8">
          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-2xl font-bold leading-tight text-ink">
              What Makes Successful Traders?
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/72">
              It is not about being right all the time. It is about having the right approach.
            </p>
            <div className="mt-5">
              <CheckList items={tradingSuccessItems} compact />
            </div>
          </article>

          <article className="grid gap-5 rounded-lg border border-forest/10 bg-mist p-6 shadow-sm lg:grid-cols-[0.58fr_0.42fr]">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
                Our Trading Advantage
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {tradingAdvantageItems.map(([title, text]) => (
                  <div key={title} className="flex gap-3 text-sm leading-6 text-ink/72">
                    <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-manuka">
                      <TrendingUp size={16} />
                    </span>
                    <span>
                      <strong className="text-ink">{title}</strong> - {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid min-h-56 place-items-center rounded-lg border border-forest/10 bg-white p-6">
              <MiniChartScreen />
            </div>
          </article>
        </div>
      </div>

    </section>
  );
}

function StocksPillarDetail({ activePillar, activeGuide, onViewAll }) {
  return (
    <section id="pillar-detail" className="container-page pb-16">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-manuka">Focused Pillar</p>
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-forest shadow-sm transition hover:border-manuka hover:text-ink"
        >
          View all pillars
          <ArrowRight size={15} />
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-editorial">
        <div className="grid gap-0 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-manuka">
                <span className="text-sm font-extrabold">{activePillar.number}</span>
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Stocks & Investing
              </h2>
            </div>
            <p className="mt-4 font-display text-2xl font-bold italic text-manuka">
              Build wealth. Create options. Live with confidence.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/74">
              Investing helps us turn our income into long-term freedom. It is not about
              getting rich overnight. It is about making our money work, so we can focus
              on the life and legacy we want to build.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-forest">
            <img
              src="/stocks-and-investing-header.png"
              alt="Laptop showing stock market charts on a coastal table at sunset"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <IconInfoGrid eyebrow="Why We Invest" items={stockWhyInvestItems} />
        </div>

        <div className="px-6 pb-6 lg:px-8">
          <IconInfoGrid eyebrow="How We Invest" items={stockHowInvestItems} />
        </div>

        <div className="grid gap-5 px-6 pb-8 lg:grid-cols-[0.38fr_0.42fr_0.2fr] lg:px-8">
          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Landmark className="text-forest" size={24} />
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
                Investment Accounts We Use
              </h3>
            </div>
            <div className="mt-5">
              <CheckList items={stockAccounts} compact />
            </div>
            {activeGuide ? (
              <div className="card-action-row mt-6">
                <a href={activeGuide.pdf} download className="btn-light">
                  Download Stocks Guide
                  <Download size={16} />
                </a>
              </div>
            ) : null}
          </article>

          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-forest" size={24} />
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
                Investing Principles We Follow
              </h3>
            </div>
            <div className="mt-5">
              <CheckList items={stockPrinciples} compact />
            </div>
          </article>

          <article className="grid min-h-64 place-items-center rounded-lg bg-forest p-6 text-center text-white shadow-soft">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-manuka">
                Remember
              </h3>
              <p className="mt-5 text-base font-semibold leading-7">
                It is not about having a lot of money. It is about making good decisions
                with the money you have.
              </p>
              <Sprout className="mx-auto mt-5 text-manuka" size={24} />
            </div>
          </article>
        </div>
      </div>

    </section>
  );
}

function OnlineIncomePillarDetail({ activePillar, activeGuide, onViewAll }) {
  return (
    <section id="pillar-detail" className="container-page pb-16">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-manuka">Focused Pillar</p>
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-forest shadow-sm transition hover:border-manuka hover:text-ink"
        >
          View all pillars
          <ArrowRight size={15} />
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-editorial">
        <div className="grid gap-0 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-manuka">
                <span className="text-sm font-extrabold">{activePillar.number}</span>
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Social Media & Online Income
              </h2>
            </div>
            <p className="mt-4 font-display text-2xl font-bold italic text-manuka">
              Build income. Create freedom. Live anywhere.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/74">
              Online income gives our family the ability to live life on our terms.
              It is not about escaping work. It is about building meaningful work that
              supports the life and lifestyle we choose.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-forest">
            <img
              src="/online-income-photo.png"
              alt="Woman building online income from a laptop workspace"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
                What Is Online Income?
              </h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-ink/72">
                Online income simply means earning money using the internet and your
                skills, knowledge, or creativity. It can be full-time, part-time,
                seasonal, or something you build slowly over time.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {onlineIncomeMeaningItems.map(({ title, icon: Icon, text }) => (
                <article key={title} className="border-forest/10 text-center xl:border-r xl:px-3 last:border-r-0">
                  <Icon className="mx-auto text-forest" size={32} strokeWidth={1.7} />
                  <h4 className="mt-4 text-xs font-extrabold uppercase tracking-wide text-ink">
                    {title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-ink/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 lg:px-8">
          <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <h3 className="text-center text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
              Popular Online Income Streams
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {onlineIncomeStreams.map(({ title, icon: Icon, points, text }) => (
                <article key={title} className="flex h-full flex-col rounded-lg bg-mist p-5">
                  <Icon className="mx-auto text-forest" size={31} strokeWidth={1.7} />
                  <h4 className="mt-4 min-h-10 text-center text-xs font-extrabold uppercase tracking-wide text-ink">
                    {title}
                  </h4>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/72">
                    {points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-5 text-sm font-semibold leading-6 text-ink/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 px-6 pb-8 lg:grid-cols-[0.68fr_0.32fr] lg:px-8">
          <article className="flex h-full flex-col rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Star className="text-manuka" size={24} />
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
                How We Build Successful Online Businesses
              </h3>
            </div>
            <div className="mt-5 grid gap-x-7 gap-y-2 md:grid-cols-2">
              {onlineIncomeBuildSteps.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-ink/75">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-forest" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {activeGuide ? (
              <div className="card-action-row mt-6">
                <a href={activeGuide.pdf} download className="btn-light">
                  Download Income Guide
                  <Download size={16} />
                </a>
              </div>
            ) : null}
          </article>

          <article className="grid min-h-56 place-items-center rounded-lg bg-forest p-6 text-center text-white shadow-soft">
            <div>
              <Star className="mx-auto text-manuka" size={28} />
              <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wide text-manuka">
                Remember
              </h3>
              <p className="mt-5 text-base font-semibold leading-7">
                You do not need to be an expert. You need to be helpful,
                consistent, and willing to learn.
              </p>
              <Sprout className="mx-auto mt-5 text-manuka" size={24} />
            </div>
          </article>
        </div>
      </div>

    </section>
  );
}

function AffiliatePartnersRow() {
  return (
    <div className="border-y border-forest/10 px-6 py-8 lg:px-8">
      <div className="text-center">
        <p className="eyebrow text-manuka">Partners & Platforms We Love</p>
      </div>
      <div className="mt-6 grid overflow-hidden rounded-lg border border-forest/10 bg-white shadow-sm md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {affiliatePartnerPlatforms.map(({ name, mark, icon: Icon, accent, text, href }, index) => {
          const CardTag = href ? "a" : "article";
          return (
          <CardTag
            key={name}
            href={href || undefined}
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
            className={`flex min-h-[190px] flex-col items-center border-forest/10 p-5 text-center transition ${
              index < affiliatePartnerPlatforms.length - 1 ? "xl:border-r" : ""
            } ${href ? "hover:bg-sage/70" : ""}`}
          >
            <div className={`flex min-h-10 items-center justify-center gap-2 text-lg font-extrabold ${accent}`}>
              <Icon size={24} strokeWidth={1.8} />
              <span>{mark}</span>
            </div>
            <h3 className="mt-5 text-sm font-extrabold text-ink">{name}</h3>
            <p className="mt-3 text-sm leading-6 text-ink/68">{text}</p>
            {href && (
              <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-extrabold uppercase tracking-wide text-manuka">
                Visit platform
                <ArrowRight size={14} />
              </span>
            )}
          </CardTag>
          );
        })}
      </div>
      <div className="mt-5 flex flex-col items-center gap-3 rounded-lg bg-sage/70 p-4 text-center sm:flex-row sm:text-left">
        <Star className="shrink-0 text-forest" size={25} />
        <p className="text-sm font-extrabold leading-6 text-ink">
          Many of these platforms offer exclusive sign-up bonuses or perks when you use
          our links. Look for bonus details on each resource page.
        </p>
      </div>
    </div>
  );
}

function AffiliatesPillarDetail({ activePillar, activeGuide, onViewAll }) {
  return (
    <section id="pillar-detail" className="container-page pb-16">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-manuka">Focused Pillar</p>
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-forest shadow-sm transition hover:border-manuka hover:text-ink"
        >
          View all pillars
          <ArrowRight size={15} />
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-editorial">
        <div className="grid gap-0 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-manuka">
                <span className="text-sm font-extrabold">{activePillar.number}</span>
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Affiliates & Partnerships
              </h2>
            </div>
            <p className="mt-4 font-display text-2xl font-bold italic text-manuka">
              Share what works. Help others. Create income.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/74">
              We only recommend tools, platforms, and resources we use, trust, and believe
              add genuine value to families who want more freedom, more options, and a
              better future.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-ink/74">
              Through affiliate partnerships, we earn a commission when you use our links,
              at no extra cost to you.
            </p>
            <div className="mt-7 flex gap-4 rounded-lg bg-sage/70 p-4">
              <ShieldCheck className="mt-1 shrink-0 text-forest" size={24} />
              <p className="text-sm font-extrabold leading-6 text-ink">
                Our promise: We never promote anything we would not use ourselves.
              </p>
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden bg-forest">
            <img
              src="/partnership-photo.png"
              alt="Partnership planning conversation at a laptop"
              className="absolute inset-0 h-full w-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 max-w-[17rem] rounded-lg border border-manuka/25 bg-forest/95 p-5 text-white shadow-editorial">
              <p className="font-display text-4xl leading-none text-manuka">“</p>
              <p className="mt-1 text-sm font-semibold leading-6">
                When you support through our links, you are not just getting a tool. You are
                supporting our mission.
              </p>
              <Sprout className="mt-4 text-manuka" size={19} />
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <IconInfoGrid
            eyebrow="Why We Recommend"
            items={affiliateWorkItems}
            columns="xl:grid-cols-5"
          />
        </div>

        <AffiliatePartnersRow />

        <div className="grid gap-5 px-6 pb-8 lg:grid-cols-2 lg:px-8">
          {affiliateHowCards.map(({ title, text, points, calloutTitle, calloutIcon: CalloutIcon, calloutItems }) => (
            <article key={title} className="flex h-full flex-col rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/72">{text}</p>
              <div className="mt-5">
                <CheckList items={points} compact />
              </div>
              <div className="mt-auto grid gap-5 rounded-lg bg-mist p-5 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-ink">{calloutTitle}</p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-6 text-ink/72">
                    {calloutItems.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <CalloutIcon className="self-end text-forest" size={58} strokeWidth={1.35} />
              </div>
            </article>
          ))}
        </div>

        <div className="px-6 pb-8 lg:px-8">
          <IconInfoGrid
            eyebrow="What Makes It Sustainable"
            items={affiliateSustainableItems}
            columns="xl:grid-cols-5"
          />
        </div>

        <div className="grid gap-5 px-6 pb-8 lg:grid-cols-2 lg:px-8">
          <article className="flex h-full flex-col rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Target className="text-forest" size={24} />
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
                How To Get Started
              </h3>
            </div>
            <ol className="mt-5 space-y-3">
              {affiliateStartSteps.map((item, index) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink/75">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest text-[0.72rem] font-extrabold text-manuka">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-auto rounded-lg bg-sage p-4 text-sm font-extrabold leading-6 text-ink">
              Start small. Be consistent. Help consistently. Income grows over time.
            </p>
          </article>

          <article className="flex h-full flex-col rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <LineChart className="text-forest" size={24} />
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
                Potential Income Over Time
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-ink/72">
              Affiliate and partnership income can grow significantly as your audience
              and content grow.
            </p>
            <div className="mt-5 overflow-hidden rounded-lg border border-forest/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-sage text-xs uppercase tracking-wide text-forest">
                  <tr>
                    <th className="px-4 py-3 font-extrabold">Stage</th>
                    <th className="px-4 py-3 font-extrabold">Possible Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest/10">
                  {affiliateIncomeRows.map(([stage, outcome]) => (
                    <tr key={stage}>
                      <td className="px-4 py-3 font-semibold text-ink/75">{stage}</td>
                      <td className="px-4 py-3 text-ink/72">{outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-auto rounded-lg bg-sage p-4 text-sm font-extrabold leading-6 text-ink">
              Results vary. Focus on value, not just income.
            </p>
          </article>
        </div>

        <div className="px-6 pb-8 lg:px-8">
          <article className="overflow-hidden rounded-lg bg-forest text-white shadow-soft">
            <div className="grid gap-6 p-7 lg:grid-cols-[0.48fr_0.22fr_0.3fr] lg:items-center">
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-manuka">
                  Our Takeaway
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-white/85">
                  Affiliates and partnerships give families the ability to create income by
                  sharing what works, helping others, and building a life of more freedom,
                  choices, and opportunities.
                </p>
                <Sprout className="mt-4 text-manuka" size={24} />
              </div>
              <div className="grid min-h-40 place-items-center rounded-lg border border-manuka/25 bg-white/5">
                <MonitorSmartphone className="text-manuka" size={76} strokeWidth={1.25} />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                  Ready to start earning?
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Explore our guide, join trusted programs, and start turning your
                  recommendations into freedom for your family.
                </p>
                {activeGuide ? (
                  <div className="card-action-row mt-5 lg:justify-start">
                    <a href={activeGuide.pdf} download className="btn-primary">
                      Explore Our Guide
                      <ArrowRight size={16} />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        </div>
      </div>

    </section>
  );
}

function BitcoinPillarDetail({ activePillar, activeGuide, onViewAll }) {
  return (
    <section id="pillar-detail" className="container-page pb-16">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-manuka">Focused Pillar</p>
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-forest shadow-sm transition hover:border-manuka hover:text-ink"
        >
          View all pillars
          <ArrowRight size={15} />
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-editorial">
        <div className="grid gap-0 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-manuka">
                <span className="text-sm font-extrabold">{activePillar.number}</span>
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Bitcoin & Sovereignty
              </h2>
            </div>
            <p className="mt-4 font-display text-2xl font-bold italic text-manuka">
              Take control of your money. Protect your future.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/74">
              Bitcoin is more than an investment. It is a path to financial sovereignty.
              It gives your family options no matter where life takes you.
            </p>
          </div>

          <div className="relative min-h-[340px] overflow-hidden bg-forest">
            <img
              src="/bitcoin-header.png"
              alt="Gold Bitcoin coin in front of a rising market chart"
              className="absolute inset-0 h-full w-full object-cover object-[42%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-forest/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent" />
            <div className="absolute left-8 top-1/2 hidden h-32 w-32 -translate-y-1/2 place-items-center rounded-full border border-manuka/80 bg-forest/90 text-manuka shadow-editorial sm:grid">
              <BitcoinIcon size={72} strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-6 right-6 max-w-xs rounded-lg border border-manuka/30 bg-forest/92 p-5 text-white shadow-editorial">
              <p className="font-display text-4xl leading-none text-manuka">“</p>
              <p className="mt-1 text-sm font-semibold leading-6">
                Bitcoin is the hardest money ever created. It empowers families to live free,
                move freely, and build wealth that lasts.
              </p>
              <ShieldCheck className="mt-4 text-manuka" size={19} />
            </div>
          </div>
        </div>

        <div className="grid divide-y divide-forest/10 border-y border-forest/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {bitcoinFoundationCards.map(({ title, icon: Icon, points }) => (
            <article key={title} className="p-6">
              <Icon className="mx-auto text-forest" size={28} strokeWidth={1.7} />
              <h3 className="mt-4 text-center text-sm font-extrabold uppercase tracking-wide text-ink">
                {title}
              </h3>
              <div className="mt-5">
                <CheckList items={points} compact />
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-5 p-6 lg:grid-cols-[0.42fr_0.58fr] lg:p-8">
          <article className="flex h-full flex-col rounded-lg border border-forest/10 bg-mist p-6">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
              Self-Custody: You Are Your Own Bank
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/72">
              Not your keys, not your coins. True financial freedom comes from self-custody.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-[0.46fr_0.54fr]">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <Smartphone className="text-forest" size={31} />
                <p className="mt-4 text-xs font-extrabold uppercase tracking-wide text-ink">
                  Hardware Wallets
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  Store your private keys offline where hackers cannot reach.
                </p>
                <ul className="mt-3 space-y-1 text-sm font-semibold text-ink/74">
                  <li>Ledger</li>
                  <li>Trezor</li>
                  <li>Coldcard</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <KeyRound className="text-forest" size={31} />
                <p className="mt-4 text-xs font-extrabold uppercase tracking-wide text-ink">
                  Seed Phrases
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  A series of recovery words that give you access if your device is lost or damaged.
                  Protect it. Never share it.
                </p>
              </div>
            </div>
            {activeGuide ? (
              <div className="card-action-row mt-6">
                <a href={activeGuide.pdf} download className="btn-light">
                  Download Bitcoin Guide
                  <Download size={16} />
                </a>
              </div>
            ) : null}
          </article>

          <div className="grid gap-5">
            <article className="rounded-lg border border-forest/10 bg-mist p-6">
              <h3 className="text-center text-sm font-extrabold uppercase tracking-wide text-ink">
                The 4 Pillars of Bitcoin Sovereignty
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {bitcoinSovereigntySteps.map(({ title, icon: Icon, text }, index) => (
                  <div key={title} className="text-center">
                    <Icon className="mx-auto text-forest" size={28} strokeWidth={1.7} />
                    <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-ink">
                      {index + 1}. {title}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-ink/68">{text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-forest/10 bg-mist p-6">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
                What We Love About Bitcoin
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-7">
                {bitcoinLoveItems.map(({ title, icon: Icon }) => (
                  <div key={title} className="text-center">
                    <Icon className="mx-auto text-forest" size={24} strokeWidth={1.7} />
                    <p className="mt-2 text-xs font-bold leading-5 text-ink/72">{title}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="grid gap-5 p-6 pt-0 lg:grid-cols-[0.38fr_0.62fr] lg:p-8 lg:pt-0">
          <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-manuka" size={24} />
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
                Risks to Understand
              </h3>
            </div>
            <div className="mt-5">
              <CheckList items={bitcoinRisks} compact />
            </div>
            <p className="mt-5 rounded-lg bg-sage p-4 text-sm font-bold leading-6 text-ink">
              We believe education should always come before investment.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-lg bg-forest p-7 text-white shadow-soft">
            <div className="absolute inset-0 opacity-15">
              <img src="/bitcoin-header.png" alt="" className="h-full w-full object-cover" aria-hidden="true" />
            </div>
            <div className="relative grid gap-6 lg:grid-cols-[0.62fr_0.38fr]">
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-manuka">
                  Our Family Perspective
                </h3>
                <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-white/86">
                  Bitcoin is not about getting rich quickly. It is about understanding money,
                  creating options, protecting purchasing power, building long-term resilience,
                  and ensuring that wherever life takes us, we have systems that travel with us.
                </p>
                <p className="mt-5 text-sm font-extrabold text-manuka">
                  Freedom for today. Options for tomorrow. Legacy forever.
                </p>
              </div>
              <div className="grid min-h-40 place-items-center rounded-lg border border-manuka/25 bg-white/5 p-4">
                <Users className="text-manuka" size={82} strokeWidth={1.2} />
              </div>
            </div>
          </article>
        </div>
      </div>

    </section>
  );
}

function BookCover({ book }) {
  const [hasCover, setHasCover] = useState(Boolean(book.cover));

  return (
    <div className="mx-auto h-56 w-36 overflow-hidden rounded-md border border-forest/10 bg-sage shadow-soft">
      {hasCover ? (
        <img
          src={book.cover}
          alt={`${book.title} book cover`}
          className="h-full w-full object-cover"
          onError={() => setHasCover(false)}
        />
      ) : (
        <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-forest via-ink to-[#163b35] p-4 text-center text-sand">
          <BookOpen className="mx-auto mt-2 text-manuka" size={32} strokeWidth={1.5} />
          <p className="font-display text-lg font-bold leading-tight">{book.title}</p>
          <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-manuka">
            Cover coming soon
          </p>
        </div>
      )}
    </div>
  );
}

function ScrollingBookReferences() {
  const shelfRef = useRef(null);
  const scrollBooks = (direction) => {
    shelfRef.current?.scrollBy({ left: direction * 720, behavior: "smooth" });
  };

  return (
    <section id="reading-list" className="container-page scroll-mt-28 py-14">
      <div className="rounded-lg border border-forest/10 bg-white/90 px-5 py-9 shadow-soft sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-manuka">Book References</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Recommended books to build wealth, sovereignty, and family freedom.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-ink/68">
            Books shape how we think, build, invest, and make decisions. Where you can,
            support your local independent bookstore or a small online bookseller before ordering
            from the biggest marketplaces.
          </p>
        </div>

        <div className="relative mt-9">
          <button
            type="button"
            onClick={() => scrollBooks(-1)}
            aria-label="Previous books"
            className="absolute left-0 top-24 z-10 hidden h-11 w-11 place-items-center rounded-full bg-forest/10 text-ink transition hover:bg-forest hover:text-white md:grid"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => scrollBooks(1)}
            aria-label="Next books"
            className="absolute right-0 top-24 z-10 hidden h-11 w-11 place-items-center rounded-full bg-forest/10 text-ink transition hover:bg-forest hover:text-white md:grid"
          >
            <ChevronRight size={22} />
          </button>

          <div
            ref={shelfRef}
            className="flex snap-x gap-6 overflow-x-auto pb-5 md:px-14 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-forest/20 [&::-webkit-scrollbar-track]:bg-transparent"
          >
            {freedomBookLibrary.map((book) => (
              <a
                key={book.title}
                href={getAmazonBookLink(book.title, book.author)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${book.title} on Amazon`}
                className="flex w-44 shrink-0 snap-start flex-col text-center no-underline transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-manuka"
              >
                <BookCover book={book} />
                <h3 className="mx-auto mt-4 max-w-40 font-display text-base font-bold leading-tight text-ink">
                  {book.title}
                </h3>
                <p className="mt-2 text-xs leading-4 text-ink/58">{book.author}</p>
                <span className="mx-auto mt-3 rounded-full bg-sage px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-forest">
                  {book.tag}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FreedomQuickGuideSection({ choosePillar }) {
  return (
    <section id="quick-reference-guides" className="container-page scroll-mt-28 pb-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-3xl">
          <p className="eyebrow text-manuka">Quick Reference Guides</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">
            Download the practical guides for the pillar you are working on.
          </h2>
        </div>
        <a href={abundantFreedomFlyer.pdf} download className="btn-primary">
          Download Abundant Freedom Flyer
          <Download size={17} />
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {freedomQuickGuides.map((guide) => {
          const targetPillarId = getGuideTargetPillar(guide.id);
          return (
            <article key={guide.title} className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft">
              <img
                src={guide.image}
                alt={`${guide.title} visual quick reference guide`}
                className="h-56 w-full object-cover object-top"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-bold text-ink">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{guide.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => choosePillar(targetPillarId)}
                      className="rounded-full bg-sage px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-forest"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="card-action-row mt-auto gap-2 pt-5">
                  <button
                    type="button"
                    onClick={() => choosePillar(targetPillarId)}
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
          );
        })}
      </div>
    </section>
  );
}

function ProtectPreserveSection() {
  return (
    <section id="protect-preserve" className="container-page scroll-mt-28 pb-16">
      <div className="overflow-hidden rounded-lg border border-forest/10 bg-white px-5 py-9 shadow-soft sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-manuka">Protect & Preserve</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            The 6 areas of wealth protection.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-ink/68">
            A well-rounded plan covers more than one area. These six areas work together
            to protect your family, your choices, and your future.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {wealthProtectionAreas.map(({ title, icon: Icon, text, points }) => (
            <article key={title} className="flex h-full flex-col rounded-lg bg-mist p-5 text-center">
              <Icon className="mx-auto text-forest" size={38} strokeWidth={1.6} />
              <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-ink">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-ink/70">{text}</p>
              <ul className="mt-5 space-y-2 text-left text-sm leading-6 text-ink/72">
                {points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-manuka" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-forest/10 pt-9">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-manuka">How We Put It Into Practice</p>
            <p className="mt-3 text-base leading-7 text-ink/68">
              Practical steps we take to protect and preserve our family wealth.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {wealthProtectionSteps.map(([title, text], index) => (
              <article key={title} className="relative rounded-lg bg-white p-5 text-center shadow-sm ring-1 ring-forest/10">
                {index < wealthProtectionSteps.length - 1 ? (
                  <ArrowRight
                    className="absolute -right-4 top-8 hidden text-manuka/50 xl:block"
                    size={22}
                    aria-hidden="true"
                  />
                ) : null}
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-forest text-lg font-extrabold text-manuka">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {wealthLegacyCards.map(({ title, icon: Icon, text, points, callout, href, linkLabel }) => (
            <article key={title} className="relative flex h-full flex-col overflow-hidden rounded-lg bg-mist p-6 shadow-sm ring-1 ring-forest/10">
              <div className="grid gap-6 sm:grid-cols-[1fr_150px] sm:items-center">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink/70">{text}</p>
                  <div className="mt-5">
                    <CheckList items={points} compact />
                  </div>
                </div>
                <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border border-manuka/30 bg-forest text-manuka shadow-soft">
                  <Icon size={58} strokeWidth={1.25} />
                </div>
              </div>
              <p className="mt-5 rounded-lg bg-sage px-4 py-3 text-sm font-bold leading-6 text-ink/78">
                {callout}
              </p>
              <div className="mt-auto flex justify-center pt-5">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-manuka/55 bg-white px-5 text-sm font-extrabold text-forest shadow-sm transition hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-white"
                >
                  {linkLabel}
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AbundantFreedomWorkshopFooter() {
  return (
    <section className="container-page pb-16">
      <a
        href={toolLinks.abundantFreedom}
        target="_blank"
        rel="noreferrer"
        aria-label="Learn more at AbundantFreedom.online"
        className="group relative grid min-h-[260px] overflow-hidden rounded-lg border border-manuka/25 bg-forest text-sand shadow-editorial transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(4,47,39,0.28)] lg:grid-cols-[minmax(0,1fr)_320px]"
      >
        <img
          src="/nz-header-pano.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-forest/76 to-ink/24" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(215,168,79,0.24),transparent_30rem)]" />
        <div className="relative flex max-w-3xl flex-col justify-center px-6 py-8 sm:px-8 lg:px-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
            Abundant Freedom
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-sand sm:text-4xl">
            Build income that supports the life you want.
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-sand/84 sm:text-base">
            Learn the trading systems, structure, and mindset we use to create more choice,
            resilience, and location freedom.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4 border-t border-white/10 px-6 pb-8 sm:px-8 lg:border-l lg:border-t-0 lg:py-8">
          <span className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-manuka px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-ink shadow-sm transition group-hover:bg-sand">
            Visit Abundant Freedom
            <ArrowRight size={19} />
          </span>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-sand/68">
            Create freedom. Live fully.
          </p>
        </div>
      </a>
    </section>
  );
}

export default function FreedomWealth() {
  const [activeId, setActiveId] = useState(() => getRequestedPillarId());
  const activePillar = freedomPillars.find((pillar) => pillar.id === activeId);
  const activeGuide = activePillar ? getGuideForPillar(activePillar.id) : null;
  const ActiveIcon = activePillar?.icon;

  useEffect(() => {
    const syncRequestedPillar = () => {
      if (getCurrentHashPath() !== "/freedom-wealth") return;
      const requestedPillarId = getRequestedPillarId();
      if (requestedPillarId) {
        setActiveId(requestedPillarId);
        window.setTimeout(() => {
          document.getElementById("pillar-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      } else {
        setActiveId("");
      }
    };

    syncRequestedPillar();
    window.addEventListener("hashchange", syncRequestedPillar);
    return () => window.removeEventListener("hashchange", syncRequestedPillar);
  }, []);

  const viewAllPillars = () => {
    setActiveId("");
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "#/freedom-wealth");
    }
  };

  const showOverviewSection = (sectionId) => {
    viewAllPillars();
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  const choosePillar = (pillarId) => {
    setActiveId(pillarId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#/freedom-wealth?section=${pillarId}`);
    }
    window.setTimeout(() => {
      document.getElementById("pillar-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden border-b border-forest/10 bg-white">
        <img
          src="/freedom-wealth-dad-kids.jpeg"
          alt="Dad and child looking at a trading chart on a laptop"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/78 via-transparent to-white/12" />
        <div className="container-page relative grid min-h-[620px] items-center py-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-manuka">Real strategies. Real life. Real freedom.</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
              Freedom & Wealth
            </h1>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-forest sm:text-4xl">
              5 pillars to building financial freedom for your family.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/72">
              Practical ways to create financial independence through online trading,
              social media income, partnerships, investing, and Bitcoin sovereignty,
              all grounded in real family life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => showOverviewSection("quick-reference-guides")} className="btn-primary">
                Quick Reference Guides
                <BookOpen size={17} />
              </button>
              <button type="button" onClick={() => showOverviewSection("reading-list")} className="btn-light">
                Reading List
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
          <div className="mt-10 max-w-sm rounded-lg border border-manuka/35 bg-ink/82 p-5 text-sand shadow-editorial backdrop-blur-md md:absolute md:bottom-10 md:right-8 md:mt-0 md:max-w-xs">
            <p className="font-display text-4xl leading-none text-manuka">“</p>
            <p className="mt-1 text-base font-semibold leading-7">
              You don’t need a lot of money to start. You need the right knowledge,
              structure, and a plan.
            </p>
            <ShieldCheck className="mt-4 text-manuka" size={21} />
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
                className={`group flex min-h-[245px] flex-col items-center rounded-lg border bg-white p-5 text-center shadow-soft transition hover:-translate-y-1 hover:border-manuka hover:shadow-editorial ${
                  isActive ? "border-manuka shadow-editorial" : "border-forest/10"
                }`}
              >
                <span className={`grid h-14 w-14 place-items-center rounded-full ${accentClasses[pillar.accent]}`}>
                  <Icon size={26} strokeWidth={1.8} />
                </span>
                <span className="mt-3 text-sm font-extrabold text-ink">{pillar.number}</span>
                <h3 className="mt-3 min-h-12 text-sm font-extrabold uppercase leading-6 tracking-wide text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-ink/64">{pillar.promise}</p>
                <span
                  className={`mt-auto grid h-8 w-8 place-items-center rounded-full border transition ${
                    isActive
                      ? "border-forest bg-forest text-manuka"
                      : "border-manuka text-manuka group-hover:bg-manuka group-hover:text-ink"
                  }`}
                  aria-hidden="true"
                >
                  <ChevronRight className="rotate-90" size={17} strokeWidth={2.3} />
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
                <button type="button" onClick={() => choosePillar("online-trading")} className="btn-primary">
                  View Getting Started Guide
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-lg bg-forest p-8 text-sand shadow-editorial">
              <img
                src="/stocks-and-investing-header.png"
                alt="Laptop showing stock market charts on a coastal table at sunset"
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
      ) : activePillar.id === "online-trading" ? (
        <OnlineTradingPillarDetail
          activePillar={activePillar}
          activeGuide={activeGuide}
          onViewAll={viewAllPillars}
        />
      ) : activePillar.id === "bitcoin" ? (
        <BitcoinPillarDetail
          activePillar={activePillar}
          activeGuide={activeGuide}
          onViewAll={viewAllPillars}
        />
      ) : activePillar.id === "stocks" ? (
        <StocksPillarDetail
          activePillar={activePillar}
          activeGuide={activeGuide}
          onViewAll={viewAllPillars}
        />
      ) : activePillar.id === "online-income" ? (
        <OnlineIncomePillarDetail
          activePillar={activePillar}
          activeGuide={activeGuide}
          onViewAll={viewAllPillars}
        />
      ) : activePillar.id === "affiliates" ? (
        <AffiliatesPillarDetail
          activePillar={activePillar}
          activeGuide={activeGuide}
          onViewAll={viewAllPillars}
        />
      ) : (
        <section id="pillar-detail" className="container-page pb-16">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow text-manuka">Focused Pillar</p>
            <button
              type="button"
              onClick={viewAllPillars}
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

        </section>
      )}

      {activePillar && (
        <PillarDetailNavigation
          pillars={freedomPillars}
          activeId={activePillar.id}
          onSelect={choosePillar}
          onCollapse={viewAllPillars}
          className="-mt-10 pb-16"
        />
      )}

      <section id="freedom-tools-platforms" className="scroll-mt-28 border-y border-forest/10 bg-white py-14">
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

      <section id="freedom-quick-comparison" className="container-page scroll-mt-28 py-16">
        <div className="text-center">
          <p className="eyebrow text-forest">Quick Comparison</p>
          <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl font-bold text-ink">
            Pick the path that suits your capacity.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-ink/62">
            Each path can support freedom in a different way. Start with the one that matches your time, starting capital, and season of life.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {comparisonRows.map(([pillar, time, capital, potential, bestFor], index) => {
            const pillarMeta = freedomPillars[index];
            const Icon = pillarMeta?.icon || Compass;

            return (
              <article key={pillar} className="flex min-h-[390px] flex-col rounded-lg border border-forest/10 bg-white p-5 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-sm font-extrabold text-sand">
                    {pillarMeta?.number || index + 1}
                  </span>
                  <Icon className="text-manuka" size={34} strokeWidth={1.35} />
                </div>
                <h3 className="mt-5 min-h-[4.6rem] font-display text-2xl font-bold leading-tight text-ink">{pillar}</h3>
                <div className="mt-5 grid gap-3 text-left">
                  {[
                    ["Time", time],
                    ["Capital", capital],
                    ["Potential", potential],
                    ["Best for", bestFor]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-md bg-mist px-4 py-3">
                      <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-forest/70">{label}</p>
                      <p className="mt-1 text-sm font-semibold leading-5 text-ink/74">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {familyPrinciples.map(({ title, text, icon: Icon }) => (
            <article key={title} className="flex min-h-[170px] flex-col rounded-lg border border-forest/10 bg-sage/70 p-5 text-center shadow-sm">
              <Icon className="mx-auto text-manuka" size={30} strokeWidth={1.45} />
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-ink/66">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="freedom-compounding-examples" className="scroll-mt-28 bg-forest py-16 text-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-manuka">Compounding Examples</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-sand">
              Small habits can become serious options.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/72">
              These examples are illustrative, not promises. Markets vary year to year, but they show why consistent contributions can matter.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-2 lg:items-stretch">
            <article className="flex min-h-[430px] flex-col rounded-lg border border-white/10 bg-white/8 p-5 shadow-editorial sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">Stocks</p>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-sand">
                    $100 per week at 8% average return
                  </h3>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-manuka text-ink">
                  <TrendingUp size={25} strokeWidth={1.45} />
                </span>
              </div>
              <div className="mt-6 grid gap-3">
                {stockGrowthRows.map(([time, contributed, value]) => (
                  <div key={time} className="grid gap-3 rounded-lg bg-white/8 p-4 sm:grid-cols-3 sm:items-center">
                    <div>
                      <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-manuka">Time</p>
                      <p className="mt-1 text-sm font-semibold text-white/84">{time}</p>
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-manuka">Contributed</p>
                      <p className="mt-1 text-sm font-semibold text-white/84">{contributed}</p>
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-manuka">Estimate</p>
                      <p className="mt-1 text-base font-extrabold text-manuka">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="flex min-h-[430px] flex-col rounded-lg border border-white/10 bg-white/8 p-5 shadow-editorial sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">Bitcoin</p>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-sand">
                    Weekly contribution comparison
                  </h3>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-manuka text-ink">
                  <BitcoinIcon size={25} strokeWidth={1.45} />
                </span>
              </div>
              <div className="mt-6 overflow-x-auto rounded-lg bg-white/8 p-4">
                <table className="w-full min-w-[520px] text-sm">
                  <thead className="text-left text-manuka">
                    <tr>
                      {["Time", "$50/wk", "$100/wk", "$150/wk"].map((heading) => (
                        <th key={heading} className="pb-4 font-extrabold">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {bitcoinGrowthRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, index) => (
                          <td key={cell} className={`py-4 ${index === 0 ? "font-bold text-white/88" : "text-white/76"}`}>
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
        </div>
      </section>

      <ScrollingBookReferences />
      <FreedomQuickGuideSection choosePillar={choosePillar} />
      <ProtectPreserveSection />

      <AbundantFreedomWorkshopFooter />
    </main>
  );
}
