import {
  BookOpen,
  CalendarDays,
  Camera,
  Compass,
  Download,
  GraduationCap,
  Heart,
  Home,
  Leaf,
  Map,
  Plane,
  School,
  ShieldCheck,
  Sprout,
  Users,
  WalletCards,
  Wifi
} from "lucide-react";

export const familyTravelGuides = [
  {
    id: "worldschooling",
    title: "Worldschooling",
    eyebrow: "Learn. Explore. Grow. Together.",
    subtitle:
      "A family-first guide to learning through real-world experiences, cultural immersion, travel, nature, and meaningful connection.",
    image: "/worldschooling-guide.png",
    pdf: "/guides/worldschooling-quick-reference.pdf",
    icon: GraduationCap,
    tags: ["Real experiences", "Global awareness", "Lifelong skills", "Family connection"],
    pillars: [
      { title: "Explore", text: "Discover new places, ask questions, and follow curiosity.", icon: Map },
      { title: "Experience", text: "Hands-on activities, projects, and practical life skills.", icon: Sprout },
      { title: "Reflect", text: "Journals, discussions, videos, and creative documentation.", icon: BookOpen },
      { title: "Connect", text: "Community, culture, language, nature, and shared meaning.", icon: Users },
      { title: "Grow", text: "Confidence, independence, adaptability, and lifelong learning.", icon: Leaf }
    ],
    sections: [
      {
        title: "What is worldschooling?",
        text: "Worldschooling is a way of life where children learn through travel, real-world exploration, community, culture, and nature instead of relying only on traditional classrooms."
      },
      {
        title: "Green School Bali highlights",
        text: "Bamboo architecture, project-based learning, sustainability, child-led curiosity, and a strong global community make Green School Bali a powerful example of experiential education."
      },
      {
        title: "Learning on the go",
        text: "Markets, cooking classes, workshops, museums, hikes, farming, kayaking, travel planning, and storytelling can all become curriculum when children are invited to observe, participate, and reflect."
      },
      {
        title: "Tools that support the journey",
        text: "Use journals, learning maps, guided meditations, project planners, photo diaries, Khan Academy Kids, Kids World Cultures, Pok Pok, Worldreader, Read Along, and Khan Academy for older kids."
      }
    ],
    tips: [
      "Start with a short term, trial experience, or one-month learning project.",
      "Join other worldschooling families and expat parent groups.",
      "Balance travel, learning, rest, and family rhythm.",
      "Use real-world documentation to track progress and memories."
    ],
    reading: ["Worldschooling - Mary Ellen Grimley", "The Unschooling Handbook - Mary Griffith", "How to Raise a Wild Child - Scott D. Sampson"]
  },
  {
    id: "relocation",
    title: "Relocation Guide",
    eyebrow: "Bali, Panama, and practical planning",
    subtitle:
      "A planning guide for families comparing lifestyle, visas, costs, community, schooling, remote work, and sovereignty considerations.",
    image: "/relocation-guide.png",
    pdf: "/guides/relocation-quick-reference.pdf",
    icon: Plane,
    tags: ["Bali", "Panama", "Visa planning", "Cost comparison"],
    pillars: [
      { title: "Live Beautifully", text: "Choose places that support nature, community, family, and wellbeing.", icon: Heart },
      { title: "Work Remotely", text: "Plan internet, banking, time zones, business systems, and backups.", icon: Wifi },
      { title: "Raise Globally", text: "Blend formal schooling, worldschooling, tutors, and cultural mentors.", icon: School },
      { title: "Build Sovereignty", text: "Understand visas, tax residency, healthcare, insurance, and long-term options.", icon: ShieldCheck }
    ],
    sections: [
      {
        title: "Bali, Indonesia",
        text: "Bali offers tropical living, cultural immersion, affordable family life, remote-work communities, Green School options, and flexible visa pathways such as B211a visitor visas and remote KITAS-style options."
      },
      {
        title: "Panama",
        text: "Panama can offer a strategic international base with remote-worker visa options, modern infrastructure, lower cost of living, banking privacy, strong financial services, and pathways toward residency."
      },
      {
        title: "Planning essentials",
        text: "Research current visa rules, health insurance, schooling, banking, tax residency, accommodation, internet reliability, local transport, and community networks before committing."
      },
      {
        title: "Family cost comparison",
        text: "Compared with New Zealand, Bali and Panama may create more discretionary income for family experiences, support, travel, domestic help, and savings, depending on lifestyle and structure."
      }
    ],
    tips: [
      "Check official immigration sources and professional advisors before decisions.",
      "Test a short-term stay for 3 to 6 months before committing.",
      "Build community before arrival through parent, expat, and nomad groups.",
      "Budget for visas, health insurance, schooling, domestic support, and return flights."
    ],
    reading: ["Official visa pages", "Embassy and consulate information", "Expat parent groups", "Local tax and legal advisors"]
  },
  {
    id: "global-lifestyle",
    title: "Global Lifestyle",
    eyebrow: "Living beyond borders",
    subtitle:
      "A lifestyle design guide for choosing bases, learning globally, building community, managing money, and staying rooted as a family.",
    image: "/global-lifestyle-guide.png",
    pdf: "/guides/global-lifestyle-quick-reference.pdf",
    icon: Compass,
    tags: ["Lifestyle design", "Choosing bases", "Community", "Financial planning"],
    pillars: [
      { title: "Freedom of Choice", text: "Choose where you live, learn, work, and spend time together.", icon: Compass },
      { title: "Flexibility", text: "Let schedules adapt around family needs, seasons, travel, and growth.", icon: CalendarDays },
      { title: "Cultural Immersion", text: "Learn local customs, language, food, rituals, and daily life.", icon: Users },
      { title: "Mindful Spending", text: "Invest in experiences, education, wellbeing, and values-led living.", icon: WalletCards }
    ],
    sections: [
      {
        title: "Principles of a global lifestyle",
        text: "Global living is not just travel. It is a family rhythm built around freedom, flexibility, cultural immersion, sustainability, connection, and intentional choices."
      },
      {
        title: "Choosing your bases",
        text: "Bali offers cultural immersion, education options, tropical living, and local support networks. Panama offers tax-friendly structures, U.S. access, banking, and residency pathways."
      },
      {
        title: "Education on the move",
        text: "Worldschooling, digital tools, international schools, tutors, nannies, local caretakers, and cultural mentors can all support a child’s growth."
      },
      {
        title: "Practical daily life",
        text: "Keep routines, use experiences as curriculum, rely on helpful technology, and create space for family reflection, community, and rest."
      }
    ],
    tips: [
      "Home is wherever your family grows together.",
      "Test bases before committing long term.",
      "Use Wise, Revolut, Airalo/eSIM, XE Currency, and Google Workspace-style tools.",
      "Create a monthly budget that includes housing, food, transport, education, insurance, and savings."
    ],
    reading: ["The 4-Hour Workweek", "Digital Nomad Families", "Nomad Families: The Global Life", "Worldschooling resources"]
  }
];

export const familyTravelNavTags = [
  { label: "Worldschooling", href: "#worldschooling" },
  { label: "Relocation", href: "#relocation" },
  { label: "Global Lifestyle", href: "#global-lifestyle" },
  { label: "Downloads", href: "#quick-guides" },
  { label: "Reading", href: "#family-travel-reading" }
];

export const relocationCostRows = [
  ["Accommodation", "NZD $3,000-$5,500", "USD $1,200-$3,000", "USD $1,500-$3,000"],
  ["Groceries & food", "NZD $800-$1,500", "USD $400-$900", "USD $500-$900"],
  ["Transport", "NZD $400-$700", "USD $100-$250", "USD $100-$250"],
  ["Healthcare / insurance", "NZD $500-$800", "USD $100-$300", "USD $100-$300"],
  ["Education / childcare", "NZD $1,200-$2,500", "USD $500-$1,500", "USD $1,000-$2,500"],
  ["Total monthly estimate", "NZD $7,750-$14,000", "USD $2,550-$6,850", "USD $3,800-$8,800"]
];

export const dailyWorldschooling = [
  ["Morning", "Movement, nature walks, breakfast, and setting intentions."],
  ["Learning time", "Reading, maths, research, language, and guided exploration."],
  ["Hands-on projects", "Science, creative projects, cultural learning, or practical life skills."],
  ["Outdoor time", "Beach, bush, hiking, markets, village life, or adventure learning."],
  ["Reflect + connect", "Journaling, sharing, family conversations, and photos/videos."]
];
