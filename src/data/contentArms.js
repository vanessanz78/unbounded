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
  Sparkles,
  TrendingUp
} from "lucide-react";

export const contentArms = [
  {
    id: "freedom-wealth",
    title: "Freedom & Wealth",
    shortTitle: "Wealth",
    tagline: "Trading, online income, partnerships, investing, and Bitcoin sovereignty.",
    summary:
      "Building resilient income and sovereign money habits so our lifestyle is backed by real options.",
    color: "forest",
    icon: Coins,
    topics: ["Online Trading", "Social Media & Online Income", "Affiliates & Partnerships", "Stocks & Investing", "Bitcoin & Sovereignty"],
    features: [
      { title: "Online trading", icon: TrendingUp },
      { title: "Self-directed income", icon: BriefcaseBusiness },
      { title: "Bitcoin literacy", icon: Landmark }
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
    topics: ["Why Travel?", "Travel Smarter", "Worldschooling", "Relocation", "Global Lifestyle Design"],
    features: [
      { title: "Worldschooling", icon: Compass },
      { title: "Family rhythms", icon: HeartHandshake },
      { title: "Relocation notes", icon: Plane }
    ]
  },
  {
    id: "spiritual-conscious",
    title: "Conscious Living",
    shortTitle: "Conscious",
    tagline: "Connection, awareness, healing, sovereignty, and purpose.",
    summary:
      "The inner work beneath freedom: connection, awareness, healing, sovereignty, and purpose.",
    color: "clay",
    icon: Sparkles,
    topics: ["Connection", "Awareness", "Healing", "Sovereignty", "Purpose"],
    features: [
      { title: "Connection", icon: HeartHandshake },
      { title: "Awareness", icon: Brain },
      { title: "Healing", icon: Sparkles },
      { title: "Sovereignty", icon: Feather },
      { title: "Purpose", icon: Compass }
    ]
  },
  {
    id: "home-lifestyle",
    title: "Home & Living",
    shortTitle: "Lifestyle",
    tagline: "The five pillars of our grounded, family-first lifestyle.",
    summary:
      "Sovereign living, nature, roots, income-generating property, and food security built around family.",
    color: "sage",
    icon: Home,
    topics: ["Sovereign Lifestyle", "Nature & Outdoor Adventures", "Connection to Roots", "Income Generating Property", "Food Security & Self Sufficiency"],
    features: [
      { title: "Sovereign choices", icon: Compass },
      { title: "Nature connection", icon: Leaf },
      { title: "Income property", icon: Home }
    ]
  },
  {
    id: "building-public",
    title: "AI Tools",
    shortTitle: "AI Tools",
    tagline: "Creative tools, workflows, project ideas, and scalable income systems.",
    summary:
      "Practical ways to use AI for creativity, family projects, automation, products, and online income.",
    color: "ink",
    icon: Bot,
    topics: ["Why AI?", "What AI Tools Can I Use?", "Workflow & Step-by-Step Guidance", "I Have an Idea. Now What?", "How Do I Make Money & Scale?"],
    features: [
      { title: "Creative AI", icon: Bot },
      { title: "Step-by-step workflows", icon: Brain },
      { title: "Scalable ideas", icon: Compass }
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
