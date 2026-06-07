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
    id: "online-trading",
    number: "1",
    title: "Online Trading",
    shortTitle: "Trading",
    icon: CandlestickChart,
    accent: "teal",
    promise: "Trade anywhere. Live everywhere.",
    description:
      "Online trading gives our family the freedom to create consistent income from anywhere in the world with structure, discipline, and funded accounts.",
    highlights: [
      "Trade from anywhere with an internet connection and a laptop.",
      "Use funded accounts to access capital without risking life savings.",
      "Build repeatable strategies around rules, risk, and consistency.",
      "Create income options that can travel with your family."
    ],
    cta: "Learn online trading",
    imageHint: "Trading desk, laptop charts, family freedom",
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
    promise: "Location-independent income that fits family life.",
    description:
      "Online income can become a practical family freedom tool when it is treated like a system: useful content, clear offers, repeatable workflows, and businesses that can travel with you.",
    highlights: [
      "Build websites, platforms, courses, and digital products that solve real problems.",
      "Use social media and newsletters to share your story and grow trust.",
      "Automate repeatable work so the business supports life instead of consuming it.",
      "Design offers around family-first freedom, service, and practical value."
    ],
    cta: "Build the online income engine",
    imageHint: "Content creation, dashboards, laptop and family freedom",
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
    promise: "Earn by sharing tools and resources we trust.",
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
    promise: "Grow wealth steadily through smart investing.",
    description:
      "Investing does not need to be intimidating. Whether you have a lump sum to allocate or you are starting with $50 to $150 a week, the goal is a clear, calm plan that can grow over time.",
    highlights: [
      "Use diversified equities, blue-chip companies, and dividend income.",
      "Automate weekly contributions through Sharesies, Moomoo, or similar platforms.",
      "Use ETFs for broad diversification and a calmer set-and-forget approach.",
      "Research individual stocks slowly and avoid emotional decisions."
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
    promise: "Protect your wealth and opt out of broken systems.",
    description:
      "Bitcoin is more than an investment. It is a path to financial sovereignty. It gives your family options no matter where life takes you.",
    highlights: [
      "Portable wealth you can take anywhere in the world.",
      "Borderless and permissionless money for a global life.",
      "Fixed supply of 21 million protects against inflation.",
      "Self-custody gives you choice, control, and resilience."
    ],
    cta: "Build Bitcoin sovereignty",
    imageHint: "Bitcoin, self-custody, family financial sovereignty",
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
  ["Online Trading", "Weeks to months", "Evaluation fee", "High active income potential", "Disciplined learners"],
  ["Social Media & Online Income", "Months", "$0 to $100", "Medium to high", "Creators and builders"],
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
