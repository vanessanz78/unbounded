import {
  BookOpen,
  Brain,
  Compass,
  Download,
  Eye,
  Heart,
  Leaf,
  Moon,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
  Users,
  WalletCards,
  Wind
} from "lucide-react";

export const spiritualTags = [
  { label: "Mindset", href: "#/spiritual-conscious/mindset" },
  { label: "QHHT", href: "#/spiritual-conscious/qhht" },
  { label: "Sovereignty", href: "#/spiritual-conscious/sovereignty" },
  { label: "Quick Guides", href: "#quick-reference-guides" },
  { label: "Reading List", href: "#reading-list" }
];

export const spiritualGuides = [
  {
    id: "mindset",
    number: "1",
    title: "Mindset",
    subtitle: "Daily practices for freedom and clarity",
    shortTitle: "Mindset & Awareness",
    image: "/mindset-guide.png",
    heroImage: "/spiritual-mindset-page.png",
    pdf: "/guides/mindset-quick-reference.pdf",
    path: "#/spiritual-conscious/mindset",
    icon: Brain,
    accent: "forest",
    eyebrow: "Spiritual & Conscious Living",
    quote: "The small practices we do daily shape the life we experience together.",
    overview:
      "Simple, intentional practices that build awareness, resilience, and emotional intelligence for the whole family.",
    intro:
      "Developing a strong mindset is the foundation for conscious living. These simple daily practices build awareness, resilience, and alignment with your values for both adults and children.",
    tags: ["Presence", "Awareness", "Connection", "Growth", "Freedom"],
    principles: [
      "Presence over autopilot: be here now and create choice.",
      "Gratitude over lack: focus on what is working and expand it.",
      "Growth over comfort: embrace challenges as invitations.",
      "Compassion over judgment: for yourself, your family, and others.",
      "Contribution over consumption: add value wherever you go."
    ],
    steps: [
      { title: "Morning rituals", text: "Start with 5 to 10 minutes of meditation, mindfulness, gratitude, intention setting, or gentle movement.", icon: Sun },
      { title: "Journaling & reflection", text: "Keep a family reflection journal to capture thoughts, emotions, lessons, and shared memories.", icon: BookOpen },
      { title: "Breathing & awareness", text: "Use box breathing or 5-4-3-2-1 grounding to reset the nervous system and return to the present.", icon: Wind },
      { title: "Connection with nature", text: "Walk, garden, stargaze, observe wildlife, or care for plants together.", icon: Leaf },
      { title: "Intentional consumption", text: "Choose food, media, conversations, and environments that uplift and align with your values.", icon: Eye },
      { title: "Mindset moments", text: "Use tiny pauses, gratitude circles, and breath resets throughout the day.", icon: Sparkles }
    ],
    tools: ["Calm, Insight Timer, Aura, Medito", "Mindfulness journals", "Vision boards and goal prompts", "Affirmations and mantras", "Digital detox windows", "Gratitude jar"],
    books: ["The Miracle of Mindfulness", "The Power of Now", "Parenting with Presence", "Mindful Games for Kids", "Raising Emotionally Intelligent Children"]
  },
  {
    id: "qhht",
    number: "2",
    title: "QHHT",
    subtitle: "Quantum Healing Hypnosis Technique",
    shortTitle: "QHHT Healing",
    image: "/qhht-guide.png",
    heroImage: "/spiritual-qhht-page.png",
    pdf: "/guides/qhht-quick-reference.pdf",
    path: "#/spiritual-conscious/qhht",
    icon: Sparkles,
    accent: "purple",
    eyebrow: "QHHT",
    quote: "All the answers lie within you. QHHT helps you remember.",
    overview:
      "A gentle process for accessing inner wisdom, gaining clarity, and integrating deeper insight into everyday life.",
    intro:
      "QHHT is a gentle, transformative modality that helps people connect with inner wisdom, ask deeper questions, and receive insight from within. It is not about predicting the future; it is about remembering what your soul already knows.",
    tags: ["Inner wisdom", "Healing", "Purpose", "Integration", "Guidance"],
    principles: [
      "The answers you seek have always been within you.",
      "The practitioner holds space, but your inner knowing leads.",
      "Sessions are confidential, respectful, and non-judgmental.",
      "You remain aware and in control throughout the experience.",
      "QHHT complements, but does not replace, medical, legal, or financial care."
    ],
    steps: [
      { title: "Pre-session intention", text: "Reflect on questions, life themes, or areas where you would like clarity.", icon: Compass },
      { title: "Safe space creation", text: "Sessions happen in a calm, private, supportive environment, in person or online.", icon: ShieldCheck },
      { title: "The session", text: "A relaxed hypnotic state helps you access inner guidance, memory, symbols, insight, and healing.", icon: Moon },
      { title: "Post-session integration", text: "Debrief, journal, listen back if recorded, and apply the insights in daily life.", icon: BookOpen },
      { title: "Ongoing application", text: "Use the insights as practical tools for aligned choices and deeper self-trust.", icon: Sparkles }
    ],
    tools: ["Questions list", "Quiet private space", "Session journal", "Integration prompts", "GuidedHealing.nz", "Dolores Cannon resources"],
    books: ["Between Death and Life", "The New Wave", "The Three Waves of Volunteers and the New Earth", "The Art of Hypnosis", "Healing with Hypnosis"]
  },
  {
    id: "sovereignty",
    number: "3",
    title: "Sovereignty",
    subtitle: "Personal autonomy and holistic self-care",
    shortTitle: "Sovereignty",
    image: "/sovereignty-guide.png",
    heroImage: "/spiritual-sovereignty-page.png",
    pdf: "/guides/sovereignty-quick-reference.pdf",
    path: "#/spiritual-conscious/sovereignty",
    icon: ShieldCheck,
    accent: "teal",
    eyebrow: "Sovereignty",
    quote: "Sovereignty is conscious choice, every single day.",
    overview:
      "Personal autonomy, holistic self-care, and aligned choices around body, mind, money, energy, and media.",
    intro:
      "Sovereignty is about taking full responsibility for your body, mind, time, energy, money, and choices. It models autonomy and conscious decision-making for your children.",
    tags: ["Body", "Mind", "Choices", "Boundaries", "Alignment"],
    principles: [
      "Personal sovereignty: your body, mind, emotions, and choices are your own.",
      "Financial sovereignty: control income, savings, investments, and spending.",
      "Health sovereignty: take responsibility for nourishment, movement, sleep, and natural living.",
      "Time sovereignty: design your schedule around what matters most.",
      "Information sovereignty: discern what you consume and verify."
    ],
    steps: [
      { title: "Diet & health", text: "Choose nourishing, ethical, minimally processed foods and hydration rituals.", icon: Sprout },
      { title: "Energy practices", text: "Support your body with movement, sunlight, clean water, sleep, and intentional habits.", icon: Sun },
      { title: "Mindful spending", text: "Track spending and align money with values, experiences, giving, and long-term plans.", icon: WalletCards },
      { title: "Personal boundaries", text: "Practice saying no, honoring feelings, and respecting emotional and physical safety.", icon: Heart },
      { title: "Technology & media", text: "Curate content, set screen limits, and protect real-life presence.", icon: Eye },
      { title: "Conscious choices", text: "Pause, reflect, choose from love rather than fear, and lead by example.", icon: Compass }
    ],
    tools: ["Daily sovereignty check-in", "Family budget", "Digital detox windows", "Gratitude practice", "Breathwork and movement", "Nature connection"],
    books: ["Sovereignty: The Path of Self-Responsibility", "The Conscious Parent", "Radical Acceptance", "Raising Free People", "The 7 Habits of Highly Effective Families"]
  }
];

export const dailySovereigntyCheck = [
  "Did I nourish my body today?",
  "Did I move my body?",
  "Did I spend time in sunlight?",
  "Did I honor my boundaries?",
  "Did I spend money in alignment with my values?",
  "Did I limit mindless screen time?",
  "Did I connect with loved ones?",
  "Did I reflect or journal today?"
];

export const consciousPractices = [
  { title: "Be Present", text: "In this moment.", icon: Sun },
  { title: "Make Conscious Choices", text: "From love, not fear.", icon: Heart },
  { title: "Take Responsibility", text: "For yourself and your life.", icon: Users },
  { title: "Live in Alignment", text: "With your values.", icon: Compass }
];

export { Download };
