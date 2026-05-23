import {
  Bike,
  Cat,
  Compass,
  Egg,
  Feather,
  Flame,
  Heart,
  Home,
  Leaf,
  MapPin,
  PawPrint,
  Sprout,
  TreePine,
  Users,
  Waves
} from "lucide-react";

export const homeLifestyleGuides = [
  {
    id: "nz-roots",
    title: "NZ Roots",
    eyebrow: "Grounded in New Zealand",
    subtitle:
      "The values beneath the whole unbordered life: coastal childhoods, whānau, nature, simplicity, belonging, and a slower way of living.",
    image: "/nz-roots-guide.png",
    pdf: "/guides/nz-roots-quick-reference.pdf",
    icon: TreePine,
    tags: ["Whakapapa", "Pataua", "Nature", "Slow living"],
    pillars: [
      { title: "Whakapapa", text: "Knowing where we come from, and our connection to land, people, place, and story.", icon: Compass },
      { title: "Manaakitanga", text: "Caring for others through generosity, hospitality, kindness, and community.", icon: Users },
      { title: "Kaitiakitanga", text: "Guardianship of land, ocean, waterways, animals, and living things.", icon: Leaf },
      { title: "Barefoot Freedom", text: "Childhood shaped by fishing, bush walks, swimming, climbing, curiosity, and imagination.", icon: Waves }
    ],
    sections: [
      {
        title: "Where our story begins",
        text: "Before travel plans, remote work, and global living, there was home: warm earth, salt on skin, long summer evenings, bush tracks, estuary tides, paddocks, driftwood fires, and the feeling that the world was wide open."
      },
      {
        title: "Summers at Pataua",
        text: "Six-week summer holidays at Pataua were simple and isolated. There was no power, no rush, long gravel roads, rowing across the channel, and a way of life that somehow felt fuller because there was less."
      },
      {
        title: "A different way of living",
        text: "My auntie lived almost completely self-sufficiently with vegetable gardens, orchards, ducks, chickens, fresh eggs, kaimoana, fish, shellfish, and everything grown, gathered, caught, shared, and respected."
      },
      {
        title: "What we carry forward",
        text: "Those roots guide our desire for slow living, worldschooling, nature, simplicity, intentional family life, and global freedom with grounded roots."
      }
    ],
    details: [
      "Children thrive with freedom, nature, and imagination.",
      "Community matters, and belonging matters.",
      "Simplicity can be deeply fulfilling.",
      "Home is not just a place. It is a way of living."
    ]
  },
  {
    id: "deloraine",
    title: "Deloraine Cattery & Cottage",
    eyebrow: "Home & Lifestyle",
    subtitle:
      "The home base that became our income, our freedom, our children’s playground, and the first proof that lifestyle could be designed around family.",
    image: "/deloraine-cottage-home-guide.png",
    pdf: "/guides/deloraine-cottage-home-quick-reference.pdf",
    icon: Home,
    tags: ["Cattery", "Cottage", "Property", "Freedom"],
    pillars: [
      { title: "Family", text: "The reason behind every choice: more space, more time, more freedom, and a richer childhood.", icon: Heart },
      { title: "Nature", text: "Three acres of Hinuera stone, gardens, grass, trees, pool, spa, and outdoor life.", icon: Sprout },
      { title: "Cattery", text: "A care-based business where cats are treated like family and clients trust us deeply.", icon: Cat },
      { title: "Cottage", text: "A three-bedroom rental that helped replace Paul’s income and create more home-based freedom.", icon: Home }
    ],
    sections: [
      {
        title: "A life we never planned",
        text: "In September 2014 we purchased Deloraine Cattery, but the story began with a feeling. Vanessa drove into the driveway and felt like she was already home."
      },
      {
        title: "The move that changed everything",
        text: "After a conversation in Times Square, an email from America, and five fast weeks, we moved just one kilometre down the road with beds still made and drawers still full."
      },
      {
        title: "Built around care",
        text: "The cattery became our primary source of income, serving families who travel, renovate, move house, go on holiday, or need temporary care for cats they love."
      },
      {
        title: "Creating freedom through lifestyle",
        text: "Deloraine Cottage grew from the desire to keep both of us home, creating income through hospitality, home exchanges, QHHT sessions, and modern booking systems."
      }
    ],
    details: [
      "Open grass, gardens, bikes, scooters, motorbikes, and room for adventure.",
      "Private indoor suites, indoor-only rooms, and communal social spaces for cats.",
      "Modern French-inspired cottage styling with high ceilings and timeless detail.",
      "Freedom is not just income. It is time, presence, connection, purpose, and wellbeing."
    ]
  }
];

export const homeLifestyleNavTags = [
  { label: "NZ Roots", href: "#nz-roots" },
  { label: "Deloraine", href: "#deloraine" },
  { label: "Downloads", href: "#home-downloads" },
  { label: "Values", href: "#home-values" },
  { label: "Slow Living", href: "#slow-living" }
];

export const homeLifestyleMoments = [
  { title: "Barefoot childhood", text: "Fishing, exploring, swimming, climbing, collecting eggs, and learning from the land itself.", icon: Feather },
  { title: "Self-sufficient rhythm", text: "Vegetable gardens, fruit trees, orchards, ducks, chickens, fresh eggs, fish, shellfish, and kaimoana.", icon: Egg },
  { title: "Deloraine property", text: "Three acres of Northland space, gardens, pool, spa, driveway adventures, and room to breathe.", icon: MapPin },
  { title: "Outdoor life", text: "Fire pit evenings, playground days, long grass, trees, scooters, bikes, skates, and motorbike adventures.", icon: Bike },
  { title: "Care-based income", text: "Cattery trust, cottage hospitality, home exchanges, QHHT sessions, websites, dashboards, and booking systems.", icon: PawPrint },
  { title: "The next chapter", text: "Less chasing, more presence, more time together, more nature, more purpose, and more aligned freedom.", icon: Flame }
];

export const homeLifestyleValues = [
  "Rooted in love",
  "Guided by values",
  "Driven by freedom",
  "Connected to nature",
  "Living our story"
];
