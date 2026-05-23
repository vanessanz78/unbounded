import {
  BarChart3,
  Bitcoin,
  BookOpen,
  BriefcaseBusiness,
  CandlestickChart,
  GraduationCap,
  HandCoins,
  Laptop,
  LockKeyhole,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards
} from "lucide-react";

export const freedomPillars = [
  {
    id: "trading",
    number: "1",
    title: "Online Trading",
    shortTitle: "Trading",
    icon: CandlestickChart,
    accent: "navy",
    promise: "Structured trading, prop firms, and repeatable strategies that fit around family life.",
    description:
      "Vanessa’s trading path began as a practical way to create location-independent income without being tied to a desk all day. The focus is simple: short, structured windows, clear rules, and strategies that can be practiced around family life.",
    highlights: [
      "Bounce Strategy: reading a level rejection and waiting for confirmation.",
      "Break Strategy: identifying support or resistance breaks and capturing the move as it unfolds.",
      "Prop firm trading: starting with a small challenge and learning to trade funded capital.",
      "Primary focus: NASDAQ and Gold futures, so the learning stays simple and repeatable."
    ],
    cta: "Join AbundantFreedom.online",
    imageHint: "Trading desk, clean chart setup, laptop lifestyle",
    guideImage: "/online-trading-guide.png",
    guidePdf: "/guides/online-trading-quick-reference.pdf"
  },
  {
    id: "online-income",
    number: "2",
    title: "Social Media & Online Income",
    shortTitle: "Online Income",
    icon: Laptop,
    accent: "fern",
    promise: "Build an audience, share your story, and turn useful content into income.",
    description:
      "Social media can become a real income stream when it is treated like a system: consistent publishing, honest storytelling, engaged community, and offers that genuinely help people.",
    highlights: [
      "YouTube: long-life content with monetization from around 1,000 subscribers and 4,000 watch hours.",
      "Instagram: strong for visual brand building, sponsored content, and affiliate links.",
      "TikTok: fast reach and trend-based visibility, especially for short family or lifestyle stories.",
      "Newsletters: direct connection, no algorithm ceiling, and a natural home for recommendations."
    ],
    cta: "Build the content engine",
    imageHint: "Content creation, phone on tripod, laptop and coffee",
    guideImage: "/social-media-online-income-guide.png",
    guidePdf: "/guides/social-media-online-income-quick-reference.pdf"
  },
  {
    id: "affiliates",
    number: "3",
    title: "Affiliates & Partnerships",
    shortTitle: "Affiliates",
    icon: HandCoins,
    accent: "gold",
    promise: "Monetize trust through aligned tools, ethical links, and useful recommendations.",
    description:
      "Affiliate income works best when it is grounded in trust. The aim is not to promote everything, but to share tools, platforms, books, courses, and products you already use or believe in.",
    highlights: [
      "Use affiliate links in YouTube descriptions, newsletters, blog posts, and resource pages.",
      "Track clicks and conversions so you understand what your audience actually values.",
      "Start with products you use: travel tools, trading resources, books, wallets, apps, or courses.",
      "Keep recommendations clear, honest, and aligned with the family’s values."
    ],
    cta: "Create a partner stack",
    imageHint: "Analytics dashboard, product showcases, laptop workspace",
    guideImage: "/social-media-online-income-guide.png",
    guidePdf: "/guides/social-media-online-income-quick-reference.pdf"
  },
  {
    id: "stocks",
    number: "4",
    title: "Stocks & Investing",
    shortTitle: "Stocks",
    icon: TrendingUp,
    accent: "navy",
    promise: "Simple long-term investing for lump sums, weekly contributions, ETFs, and individual stocks.",
    description:
      "Investing does not need to be intimidating. Whether you have a lump sum to allocate or you are starting with $50 to $150 a week, the goal is a clear, calm plan that can grow over time.",
    highlights: [
      "For lump sums: consider diversified equities, blue-chip companies, and dividend income.",
      "For weekly investing: automate contributions through Sharesies, Moomoo, or similar platforms.",
      "ETFs offer broad diversification and can be easier to set and forget.",
      "Individual stocks offer more control but need more research and emotional discipline."
    ],
    cta: "Start the investing plan",
    imageHint: "Charts, compound growth, calm finance visuals",
    guideImage: "/stocks-investing-guide.png",
    guidePdf: "/guides/stocks-investing-quick-reference.pdf"
  },
  {
    id: "bitcoin",
    number: "5",
    title: "Bitcoin & Sovereignty",
    shortTitle: "Bitcoin",
    icon: Bitcoin,
    accent: "teal",
    promise: "Buy, hold, protect, spend, and pass on Bitcoin with family sovereignty in mind.",
    description:
      "Bitcoin is more than an investment. For families who value mobility, financial responsibility, and long-term sovereignty, it can become part of a global money system that travels with you.",
    highlights: [
      "NZ-friendly tools include STACKED, Moomoo, Sharesies, and BlackBull Markets.",
      "Begin with soft wallets for small amounts, then move long-term holdings to hardware wallets.",
      "Self-custody means protecting your keys, seed phrases, devices, and inheritance plan.",
      "Bitcoin can be held long-term, transferred globally, and converted for spending when needed."
    ],
    cta: "Build Bitcoin sovereignty",
    imageHint: "Hardware wallets, Bitcoin education, family legacy",
    guideImage: "/bitcoin-sovereignty-guide.png",
    guidePdf: "/guides/bitcoin-sovereignty-quick-reference.pdf"
  }
];

export const abundantFreedomFlyer = {
  title: "Abundant Freedom",
  subtitle: "Trade Anywhere. Live Everywhere.",
  image: "/abundant-freedom-flyer.png",
  pdf: "/guides/abundant-freedom-flyer.pdf"
};

export const freedomQuickGuides = [
  {
    id: "trading",
    title: "Online Trading",
    description: "Vanessa’s trading story, Bounce and Break strategies, prop firm basics, and practical family-first takeaways.",
    image: "/online-trading-guide.png",
    pdf: "/guides/online-trading-quick-reference.pdf",
    tags: ["Trading", "Prop firms", "Abundant Freedom"]
  },
  {
    id: "online-income",
    title: "Social Media & Online Income",
    description: "YouTube, Instagram, TikTok, newsletters, affiliate foundations, and realistic content-income pathways.",
    image: "/social-media-online-income-guide.png",
    pdf: "/guides/social-media-online-income-quick-reference.pdf",
    tags: ["YouTube", "Instagram", "Newsletters"]
  },
  {
    id: "stocks",
    title: "Stocks & Investing",
    description: "Two investing pathways for New Zealand families: lump sums, small weekly contributions, ETFs, and stocks.",
    image: "/stocks-investing-guide.png",
    pdf: "/guides/stocks-investing-quick-reference.pdf",
    tags: ["Sharesies", "Moomoo", "ETFs"]
  },
  {
    id: "bitcoin",
    title: "Bitcoin & Sovereignty",
    description: "A practical family guide to buying, holding, protecting, and passing on Bitcoin with sovereignty in mind.",
    image: "/bitcoin-sovereignty-guide.png",
    pdf: "/guides/bitcoin-sovereignty-quick-reference.pdf",
    tags: ["Bitcoin", "Wallets", "Self-custody"]
  }
];

export const platformGroups = [
  {
    title: "Trading & Investing",
    icon: BarChart3,
    items: ["Moomoo NZ", "Sharesies", "BlackBull Markets", "Prop firm challenges"]
  },
  {
    title: "Crypto & Bitcoin",
    icon: Bitcoin,
    items: ["STACKED NZ", "BlueWallet", "Sparrow Wallet", "The Bitcoin Way"]
  },
  {
    title: "Wallet Security",
    icon: LockKeyhole,
    items: ["Ledger", "Trezor", "Coldcard", "Metal seed phrase storage"]
  },
  {
    title: "Courses & Community",
    icon: GraduationCap,
    items: ["AbundantFreedom.online", "Discord mentorship", "Templates", "Calculators"]
  }
];

export const comparisonRows = [
  ["Online Trading", "Days to weeks", "From $100", "High active income", "Hands-on learners"],
  ["Social Media & Online Income", "Months", "$0 to $100", "Medium to high", "Creators and communicators"],
  ["Affiliates & Partnerships", "Weeks to months", "$0 to $100", "Medium", "Audience builders"],
  ["Stocks & Investing", "Months to years", "From $50/week", "Medium passive growth", "Long-term builders"],
  ["Bitcoin & Sovereignty", "Months to years", "From $20/week", "High long-term potential", "Future-focused families"]
];

export const stockGrowthRows = [
  ["5 years", "$26,000", "~$32,000+"],
  ["10 years", "$52,000", "~$78,000+"],
  ["15 years", "$78,000", "~$148,000+"]
];

export const bitcoinGrowthRows = [
  ["1 year", "~$2,800", "~$5,600", "~$8,400"],
  ["5 years", "~$18,900", "~$37,800", "~$56,700"],
  ["10 years", "~$94,000", "~$188,000", "~$282,000"],
  ["15 years", "~$236,000", "~$472,000", "~$708,000"]
];

export const readingList = [
  {
    category: "Trading & Mindset",
    icon: CandlestickChart,
    books: [
      ["The Biggest Loser Wins", "Bob Lang", "A practical, emotionally intelligent look at what separates successful traders from the rest."],
      ["Trading in the Zone", "Mark Douglas", "Mindset, discipline, and consistency for traders."],
      ["Market Wizards", "Jack D. Schwager", "Interviews with top traders revealing systems and thought processes."],
      ["The Daily Trading Coach", "Brett N. Steenbarger", "A 101-day trading psychology coaching plan."]
    ]
  },
  {
    category: "Investing & Long-Term Wealth",
    icon: PiggyBank,
    books: [
      ["The Intelligent Investor", "Benjamin Graham", "The classic guide to value investing."],
      ["Common Stocks and Uncommon Profits", "Philip A. Fisher", "Qualitative investing and growth-stock thinking."],
      ["The Little Book of Common Sense Investing", "John C. Bogle", "A straightforward guide to index funds."],
      ["One Up On Wall Street", "Peter Lynch", "How everyday investors can identify strong companies."]
    ]
  },
  {
    category: "Passive Income & Online Entrepreneurship",
    icon: BriefcaseBusiness,
    books: [
      ["Rich Dad Poor Dad", "Robert T. Kiyosaki", "A mindset shift toward assets and cash flow."],
      ["Multiple Streams of Income", "Robert G. Allen", "A guide to diversified income streams."],
      ["Crushing It!", "Gary Vaynerchuk", "Social and online monetization strategies."],
      ["YouTube Secrets", "Sean Cannell & Benji Travis", "Step-by-step strategies for YouTube growth and monetization."]
    ]
  },
  {
    category: "Bitcoin & Financial Sovereignty",
    icon: ShieldCheck,
    books: [
      ["The Bitcoin Standard", "Saifedean Ammous", "The historical and economic case for Bitcoin."],
      ["Mastering Bitcoin", "Andreas M. Antonopoulos", "A technical guide to understanding Bitcoin."],
      ["The Internet of Money", "Andreas M. Antonopoulos", "Bitcoin as a philosophy, network, and freedom tool."],
      ["The Sovereign Individual", "Davidson & Rees-Mogg", "How decentralization reshapes wealth and individual choice."]
    ]
  },
  {
    category: "Personal Finance & Money Mindset",
    icon: WalletCards,
    books: [
      ["The Total Money Makeover", "Dave Ramsey", "A debt-elimination and personal finance reset."],
      ["Your Money or Your Life", "Vicki Robin & Joe Dominguez", "A deeper look at money, time, and life energy."],
      ["I Will Teach You to Be Rich", "Ramit Sethi", "Practical systems for modern personal finance."]
    ]
  }
];

export const familyPrinciples = [
  { title: "Start Small", text: "Begin with practice, weekly habits, or low-cost experiments.", icon: PiggyBank },
  { title: "Use Structure", text: "Rules, routines, and systems reduce emotional decisions.", icon: BarChart3 },
  { title: "Protect the Family", text: "Risk management comes before speed, hype, or shortcuts.", icon: ShieldCheck },
  { title: "Build Together", text: "Money can become education, service, and legacy.", icon: Users }
];
