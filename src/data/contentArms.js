import {
  Bot,
  Brain,
  BriefcaseBusiness,
  Coins,
  Compass,
  Feather,
  HeartHandshake,
  Home,
  Landmark,
  Leaf,
  Plane,
  Sparkles
} from "lucide-react";

export const contentArms = [
  {
    id: "freedom-wealth",
    title: "Freedom & Wealth",
    shortTitle: "Wealth",
    tagline: "Trading, online income, Bitcoin, and practical AI tools.",
    summary:
      "Building resilient income and sovereign money habits so our lifestyle is backed by real options.",
    color: "forest",
    icon: Coins,
    topics: ["Trading", "Online income", "Affiliates", "Stocks", "Bitcoin"],
    features: [
      { title: "Self-directed income", icon: BriefcaseBusiness },
      { title: "Bitcoin literacy", icon: Landmark },
      { title: "Useful AI systems", icon: Bot }
    ]
  },
  {
    id: "family-travel",
    title: "Family & Travel",
    shortTitle: "Travel",
    tagline: "Worldschooling, relocation, and global lifestyle design.",
    summary:
      "Slow travel with children, choosing bases intentionally, and learning from people and places.",
    color: "fern",
    icon: Plane,
    topics: ["Worldschooling", "Relocation", "Global lifestyle"],
    features: [
      { title: "Worldschooling", icon: Compass },
      { title: "Family rhythms", icon: HeartHandshake },
      { title: "Relocation notes", icon: Plane }
    ]
  },
  {
    id: "spiritual-conscious",
    title: "Spiritual & Conscious Living",
    shortTitle: "Conscious",
    tagline: "Mindset, QHHT, sovereignty, and inner expansion.",
    summary:
      "The inner work beneath freedom: intuition, healing, energetic sovereignty, and conscious parenting.",
    color: "clay",
    icon: Sparkles,
    topics: ["Mindset", "QHHT", "Sovereignty"],
    features: [
      { title: "Mindset practice", icon: Brain },
      { title: "QHHT reflections", icon: Sparkles },
      { title: "Sovereign choices", icon: Feather }
    ]
  },
  {
    id: "home-lifestyle",
    title: "Home & Lifestyle",
    shortTitle: "Home",
    tagline: "NZ roots, cattery life, cottage projects, and slow living.",
    summary:
      "Our New Zealand chapter: land, animals, seasonal rituals, and the home base that makes travel possible.",
    color: "sage",
    icon: Home,
    topics: ["NZ roots", "Cattery & cottage", "Slow living"],
    features: [
      { title: "NZ home base", icon: Home },
      { title: "Slow living", icon: Leaf },
      { title: "Cottage notes", icon: Feather }
    ]
  },
  {
    id: "building-public",
    title: "Building in Public",
    shortTitle: "Building",
    tagline: "Apps, AI tools, experiments, and startup lessons.",
    summary:
      "A transparent record of building products, learning fast, and turning ideas into useful tools.",
    color: "ink",
    icon: Bot,
    topics: ["Entrepreneurship", "AI tools", "Slow living systems"],
    features: [
      { title: "Product experiments", icon: Bot },
      { title: "Lessons learned", icon: Brain },
      { title: "Public progress", icon: Compass }
    ]
  }
];

export const whyFeatures = [
  {
    title: "Freedom",
    text: "Designing a life without borders geographically, financially, and mentally.",
    icon: Compass
  },
  {
    title: "Education",
    text: "Worldschooling opens minds, builds confidence, and teaches real-world skills.",
    icon: Brain
  },
  {
    title: "Connection",
    text: "Building relationships across cultures and creating a global community.",
    icon: HeartHandshake
  },
  {
    title: "Experience",
    text: "Collecting moments, not things. Travel is our greatest teacher.",
    icon: Leaf
  },
  {
    title: "Financial Sovereignty",
    text: "Using Bitcoin and smart strategies to live life on our own terms.",
    icon: Coins
  }
];
