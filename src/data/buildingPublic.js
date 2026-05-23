import {
  Bot,
  Brain,
  BriefcaseBusiness,
  Camera,
  Code2,
  Compass,
  Heart,
  Laptop,
  Lightbulb,
  Rocket,
  Sparkles,
  TimerReset,
  Users,
  WandSparkles
} from "lucide-react";

export const buildingPublicGuides = [
  {
    id: "entrepreneurial-spirit",
    title: "Entrepreneurial Spirit",
    eyebrow: "From our perspective",
    subtitle:
      "How small ventures, practical creativity, family learning, and a willingness to spot opportunities have shaped our life and our children.",
    image: "/entrepreneurial-spirit-guide.png",
    pdf: "/guides/entrepreneurial-spirit-quick-reference.pdf",
    icon: Rocket,
    tags: ["Opportunity", "Family business", "Creative value", "Learning by doing"],
    pillars: [
      { title: "Identify Opportunities", text: "Notice gaps, needs, and practical ways to create value.", icon: Lightbulb },
      { title: "Solve Problems", text: "Treat business as a way to make life easier, richer, or more meaningful.", icon: Brain },
      { title: "Create Value", text: "Build products, services, and experiences that genuinely help people.", icon: Sparkles },
      { title: "Empower Others", text: "Use business to support family, community, independence, and possibility.", icon: Users }
    ],
    sections: [
      {
        title: "My early ventures",
        text: "Vanessa started small by importing iPhone screen protectors from Alibaba and selling them on TradeMe, then scaled into larger orders and trending products like Freeview receivers and digital photo frames."
      },
      {
        title: "Family-oriented businesses",
        text: "Supercute and Princess and the Pirate were hands-on ventures built around children’s clothing, birthday parties, imported products, themed equipment, catering, entertainment, and full family experiences."
      },
      {
        title: "Paul’s passion meets business",
        text: "Paul’s entrepreneurial side showed through importing motorbike fairings and gear, plus restoring classic Honda bikes with diligence, craft, and problem-solving."
      },
      {
        title: "The family learning philosophy",
        text: "The children have grown up learning supply, demand, value, decision-making, initiative, and the consequences of small ventures in safe, practical, everyday ways."
      }
    ],
    takeaways: [
      "Entrepreneurship is about independence, creativity, and critical thinking.",
      "Start small: a simple product or service teaches real business lessons.",
      "Engage children early through safe, practical mini-projects.",
      "Use every success, challenge, and setback as a learning opportunity."
    ]
  },
  {
    id: "ai-tools",
    title: "Using AI Tools",
    eyebrow: "Express creativity, build, and automate",
    subtitle:
      "A practical guide to using AI for creativity, websites, apps, dashboards, business systems, storytelling, and location-independent income.",
    image: "/ai-tools-guide.png",
    pdf: "/guides/ai-tools-quick-reference.pdf",
    icon: Bot,
    tags: ["Creative AI", "Apps", "Automation", "Storytelling"],
    pillars: [
      { title: "Creativity Without Limits", text: "Use AI for images, video, audio, narration, and visual storytelling.", icon: WandSparkles },
      { title: "Build Systems That Work", text: "Create websites, dashboards, apps, and workflows without needing to be a full-time developer.", icon: Code2 },
      { title: "Freedom To Live Your Way", text: "Manage projects and businesses from anywhere with flexible digital tools.", icon: Compass },
      { title: "Create Income Online", text: "Turn content, products, tools, and services into location-independent income streams.", icon: BriefcaseBusiness }
    ],
    sections: [
      {
        title: "Creative AI tools",
        text: "AI can produce images, video, audio, blog graphics, social content, short trailers, course narration, and creative assets quickly while keeping projects expressive."
      },
      {
        title: "App and website building",
        text: "Tools like Replit, Codex, and Figma make it possible to build sites, dashboards, apps, booking systems, marketplaces, and business platforms from anywhere."
      },
      {
        title: "Startup and productivity tools",
        text: "AI can support trading journals, position sizing calculators, reminders, project tracking, automation, templates, repeatable processes, and workflow management."
      },
      {
        title: "Content and storytelling",
        text: "AI makes it easier to write stories, create video trailers, generate educational clips, produce book projects, and document the family journey in new ways."
      }
    ],
    takeaways: [
      "Experiment with small AI projects and grow from there.",
      "Automate repetitive tasks to free up family and creative time.",
      "Use AI to enhance creativity rather than flatten it.",
      "Keep a family-first, balanced approach while leveraging technology."
    ]
  },
  {
    id: "slow-living-ai",
    title: "Slow Living",
    eyebrow: "Work less, create more, be present",
    subtitle:
      "How AI, automation, digital products, and smarter systems can support a slower, more intentional, family-first life.",
    image: "/slow-living-guide.png",
    pdf: "/guides/slow-living-quick-reference.pdf",
    icon: Heart,
    tags: ["Presence", "Automation", "Location flexibility", "Creative income"],
    pillars: [
      { title: "More Time", text: "Automate repetitive tasks so attention can return to what matters.", icon: TimerReset },
      { title: "Stronger Family Connection", text: "Use smarter systems to protect family time and personal boundaries.", icon: Users },
      { title: "Freedom To Live Anywhere", text: "Create income streams that are not tied to one place or constant client demands.", icon: Compass },
      { title: "Health, Joy & Peace", text: "Choose work rhythms that leave room for creativity, wellbeing, and simple pleasures.", icon: Heart }
    ],
    sections: [
      {
        title: "Automate repetitive tasks",
        text: "Use AI for scheduling, social media posting, content creation, graphics, video, reports, summaries, and weekly workflows that used to consume hours."
      },
      {
        title: "Build online businesses with less overhead",
        text: "Create websites, dashboards, marketplaces, and booking systems without heavy coding or high fixed costs, then manage them remotely."
      },
      {
        title: "Creative engagement and diversification",
        text: "Use AI for storytelling, course creation, digital products, creative projects, and extra income streams that do not sacrifice family time."
      },
      {
        title: "Location flexibility",
        text: "AI-supported systems can help generate and manage income from Bali, Panama, home base, or wherever the next chapter unfolds."
      }
    ],
    takeaways: [
      "Slow living is a mindset and a design choice, not a luxury.",
      "Working smarter can create more family time, travel, and personal growth.",
      "Diversify income streams to reduce pressure on time-intensive work.",
      "Build systems that support the life you actually want to live."
    ]
  }
];

export const buildingPublicNavTags = [
  { label: "Entrepreneurship", href: "#entrepreneurial-spirit" },
  { label: "AI Tools", href: "#ai-tools" },
  { label: "Slow Living", href: "#slow-living-ai" },
  { label: "Downloads", href: "#building-downloads" },
  { label: "Toolkit", href: "#building-toolkit" }
];

export const buildingToolkit = [
  { title: "Creative AI", text: "DALL-E, MidJourney, Runway, Descript, image generation, video creation, and audio editing.", icon: Camera },
  { title: "Build Tools", text: "Replit, Codex, Figma, websites, dashboards, booking systems, and apps.", icon: Laptop },
  { title: "Business Systems", text: "StayDirect.nz, CatStays.app, Foodie.nz, customer dashboards, payments, and communications.", icon: BriefcaseBusiness },
  { title: "Storytelling", text: "Family journals, long-form writing, educational clips, course content, and creative projects.", icon: Sparkles },
  { title: "Workflow Design", text: "Templates, automation, project tracking, trading tools, and repeatable operating systems.", icon: Brain },
  { title: "Family First", text: "Use technology to create more time, more presence, and more freedom, not more noise.", icon: Heart }
];

export const buildingPrinciples = [
  "Create value",
  "Automate wisely",
  "Teach life skills",
  "Build with purpose",
  "Live fully"
];
