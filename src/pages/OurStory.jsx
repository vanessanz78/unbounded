import {
  Anchor,
  Building2,
  Camera,
  Cat,
  Compass,
  Expand,
  Globe2,
  Heart,
  House,
  Lightbulb,
  MapPin,
  Landmark,
  Mountain,
  Navigation,
  Plane,
  Sparkles,
  Sprout,
  Sun,
  Users,
  Waves
} from "lucide-react";
import { toolLinks } from "../data/toolLinks.js";

const familyMembers = [
  {
    name: "Vanessa",
    age: "48",
    image: "/vanessa.png",
    imagePosition: "center 30%",
    text: "Passionate about trading, online businesses, creating digital content, AI storytelling, and spiritual growth."
  },
  {
    name: "Paul",
    age: "52",
    image: "/paul.png",
    imagePosition: "center 16%",
    text: "My partner and co-adventurer. Paul loves motorbikes, mountain biking, exploring outdoors, and building a life of freedom and purpose."
  },
  {
    name: "Isabella",
    age: "15",
    image: "/izzy.png",
    imagePosition: "center 35%",
    text: "Our eldest, determined, entrepreneurial, and a natural leader. She excels in academics and sports."
  },
  {
    name: "Mia",
    age: "14",
    image: "/mia.png",
    imagePosition: "center 18%",
    text: "Creative and insightful, always thinking outside the box and offering solutions we’ve never considered."
  },
  {
    name: "Kaia",
    age: "8",
    image: "/kaia.png",
    imagePosition: "center 35%",
    text: "Curious and playful, always exploring the world with wonder."
  },
  {
    name: "Harlo",
    age: "5",
    image: "/harlo.png",
    imagePosition: "center 18%",
    text: "Full of energy and joy, bringing laughter and light to our days."
  }
];

const philosophy = [
  {
    title: "Sovereignty",
    text: "over our finances, choices, and our own bodies",
    icon: Globe2
  },
  {
    title: "Global experiences",
    text: "that educate and inspire",
    icon: Plane
  },
  {
    title: "Spiritual connection",
    text: "and personal growth",
    icon: Sprout
  },
  {
    title: "Being of service",
    text: "to others",
    icon: Users
  },
  {
    title: "Freedom",
    text: "from distractions and societal pressures",
    icon: Sun
  }
];

const journeyGoals = [
  {
    title: "Travel and work as a family",
    text: "We design our life around experiences that matter most.",
    icon: Globe2
  },
  {
    title: "Maintain financial independence",
    text: "We make intentional choices today for freedom tomorrow.",
    icon: Landmark
  },
  {
    title: "Explore the world while staying connected to your roots",
    text: "New Zealand will always be our home base.",
    icon: Sprout
  },
  {
    title: "Live intentionally, with purpose and freedom",
    text: "We choose a life that aligns with our values.",
    icon: Heart
  }
];

const futurePath = [
  {
    place: "New Zealand",
    note: "Our base",
    image: "/nz-header-pano.jpg",
    icon: House
  },
  {
    place: "Bali",
    note: "Exploring",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=80",
    icon: Sprout
  },
  {
    place: "Panama",
    note: "Next adventure",
    image: "/panama-city-skyline.jpg",
    icon: Anchor
  },
  {
    place: "The World",
    note: "Endless possibilities",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
    icon: Plane
  }
];

const closingValues = [
  { label: "Family First", icon: Users },
  { label: "Freedom to Explore", icon: Compass },
  { label: "Rooted in Values", icon: Sprout },
  { label: "Living with Purpose", icon: Heart }
];

const educationPrinciples = [
  {
    title: "Child-led learning",
    text: "We follow their interests, passions, and curiosities, encouraging natural growth and deep understanding.",
    icon: Sprout
  },
  {
    title: "World experiences",
    text: "Travel, cultural immersion, and diverse environments broaden their perspective and build global awareness.",
    icon: Globe2
  },
  {
    title: "Independent thinkers",
    text: "We encourage critical thinking, creativity, and the confidence to question, explore, and form their own ideas.",
    icon: Lightbulb
  },
  {
    title: "Initiative & decision-making",
    text: "Our children are empowered to make choices, solve problems, and take responsibility for their actions.",
    icon: Navigation
  },
  {
    title: "Adaptability & open-mindedness",
    text: "We cultivate flexibility, resilience, and the ability to embrace change, not being fixed on one idea but open to new possibilities.",
    icon: Expand
  },
  {
    title: "Connection & values",
    text: "We nurture kindness, empathy, and a sense of service, reminding them they are part of something bigger.",
    icon: Heart
  }
];

const travelMoments = [
  {
    title: "The Beginning",
    text: "Our daughter Isabella was only five months old when we embarked on a six-month European journey, traveling by rail, cruises, and home exchanges.",
    icon: Heart
  },
  {
    title: "Highlights Included",
    text: "Scandinavia, Russia, England, France, Italy, Germany, Luxembourg, Belgium, and the Netherlands. Isabella even celebrated her first birthday under the Eiffel Tower in Paris.",
    icon: Camera
  },
  {
    title: "Our Journey Continues",
    text: "As our family grew, so did our adventures. We’ve continued exploring new places and creating meaningful memories together every year.",
    icon: Globe2
  },
  {
    title: "More Than a Vacation",
    text: "Travel is a chance for our children to experience the world, broaden their perspective, and connect with people and cultures meaningfully.",
    icon: Users
  }
];

const mapStops = [
  { label: "America", note: "Disneyland adventures", x: 12, y: 34 },
  { label: "South America", note: "Brazil, Iguazu Falls, Buenos Aires, Santiago", x: 24, y: 62 },
  { label: "Europe", note: "Six-month journey by rail, cruises and home exchanges", x: 48, y: 34 },
  { label: "Hong Kong", note: "Where our story began", x: 79, y: 36 },
  { label: "Fiji", note: "Annual trips and island life", x: 89, y: 58 },
  { label: "Bali", note: "Eco-retreats, Green School, Green Village and Karma properties", x: 76, y: 70 }
];

const travelPhotos = [
  { title: "Machu Picchu", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=420&q=80", rotate: "-rotate-3" },
  { title: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=420&q=80", rotate: "rotate-2" },
  { title: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=420&q=80", rotate: "-rotate-1" },
  { title: "Fiji", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=420&q=80", rotate: "rotate-3" }
];

const shapedPlaces = [
  "Hong Kong",
  "Brazil",
  "Iguazu Falls",
  "Buenos Aires",
  "Santiago",
  "Machu Picchu",
  "Europe",
  "Fiji",
  "Bali"
];

export default function OurStory() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src="/pataua-log.png"
            alt="The Unbordered Family sitting on a log at Pataua beach"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/76 to-ink/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-ink/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,rgba(3,23,22,.78),transparent_30rem)]" />
        </div>
        <div className="container-page relative grid min-h-[620px] items-center py-16 sm:min-h-[680px]">
          <div className="max-w-2xl" style={{ textShadow: "0 2px 28px rgba(3, 23, 22, 0.48)" }}>
            <p className="eyebrow text-manuka">Our Story</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-sand sm:text-6xl">
              Kia ora and welcome to The Unbordered Family.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-sand/86">
              We are Vanessa, Paul, and our four wonderful children, Isabella, Mia, Kaia, and
              Harlo, and we’d love to share our journey with you.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div
            className="min-h-[360px] rounded-lg bg-cover bg-center shadow-soft"
            style={{ backgroundImage: "url('/our-home.jpg')" }}
            role="img"
            aria-label="Our Whangarei home and garden"
          />
          <div>
            <p className="eyebrow text-manuka">Where We Live</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Our Home, Our Haven
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-ink/76">
              <p>
                We live in Whangarei, Northland, surrounded by stunning landscapes and a community
                we love. We also have a coastal property at Pataua that sings to our hearts, our
                peaceful escape by the sea.
              </p>
              <p>
                On our Abbey Caves property, we run two businesses that allow us to share our slice
                of paradise with others:
              </p>
            </div>
            <div className="mt-7 grid gap-5">
              <a
                href={toolLinks.deloraineCattery}
                className="flex gap-5 rounded-lg border border-forest/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-sage text-forest">
                  <Cat size={30} />
                </span>
                <span>
                  <span className="font-display text-2xl font-bold text-forest underline decoration-manuka/60 underline-offset-4">
                    DeloraineCattery.com
                  </span>
                  <span className="mt-1 block leading-7 text-ink/72">
                    Our boarding cattery, where cats are cared for like family.
                  </span>
                </span>
              </a>
              <a
                href={toolLinks.deloraineCottage}
                className="flex gap-5 rounded-lg border border-forest/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-sage text-forest">
                  <House size={30} />
                </span>
                <span>
                  <span className="font-display text-2xl font-bold text-forest underline decoration-manuka/60 underline-offset-4">
                    DeloraineCottage.com
                  </span>
                  <span className="mt-1 block leading-7 text-ink/72">
                    A short-term three-bedroom rental, perfect for families or travellers visiting
                    Northland.
                  </span>
                </span>
              </a>
            </div>
            <p className="mt-7 text-lg leading-8 text-ink/76">
              Life here is full, busy, and deeply rewarding. We wouldn’t have it any other way.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div
            className="min-h-[420px] bg-cover bg-center"
            style={{ backgroundImage: "url('/paul-vanessa.png')" }}
            role="img"
            aria-label="Vanessa and Paul together"
          />
          <div className="p-7 sm:p-10">
            <p className="eyebrow text-manuka">The Partnership</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
              Building freedom, side by side.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/72">
              At the heart of this journey is a shared commitment to family, adventure, and creating
              a life with more room for purpose. Vanessa brings the digital, creative, trading, and
              spiritual threads. Paul brings the outdoor spirit, practical courage, and steady
              momentum that keeps the dream moving in real life.
            </p>
            <p className="mt-5 text-lg leading-8 text-ink/72">
              Together, we’re learning how to build a life that lets our children see the world
              while staying rooted in what matters most.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Our Family</p>
            <h2 className="section-title mt-2">The People Behind the Journey</h2>
          </div>
          <Users className="hidden text-manuka sm:block" size={42} />
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {familyMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-sm">
              {member.image && (
                <div className="h-72">
                  <img
                    src={member.image}
                    alt={`${member.name} portrait`}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: member.imagePosition || "center" }}
                  />
                </div>
              )}
              <div className="p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">
                {member.age} years
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">{member.name}</h3>
              <p className="mt-3 leading-7 text-ink/70">{member.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sage/50 py-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <Plane className="text-forest" size={44} />
              <p className="eyebrow mt-5">Our Travel Adventures</p>
              <h2 className="mt-4 font-display text-5xl font-bold leading-tight text-ink">
                Travel is part of our DNA.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/76">
                When Paul and I first met, we explored Hong Kong, Brazil, Iguazu Falls, Buenos
                Aires, Santiago, and Machu Picchu, igniting a lifelong passion for adventure.
              </p>
              <div className="mt-9 space-y-8">
                {travelMoments.map(({ title, text, icon: Icon }, index) => (
                  <div key={title} className="relative flex gap-5">
                    {index < travelMoments.length - 1 && (
                      <span className="absolute left-7 top-16 h-[calc(100%+1.25rem)] w-px bg-manuka/45" />
                    )}
                    <span className="z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-forest shadow-sm">
                      <Icon size={25} />
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-forest">
                        {title}
                      </h3>
                      <p className="mt-2 leading-7 text-ink/72">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-forest/10 bg-[#dcefe9] shadow-soft">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(47,128,104,.23),transparent_15rem),radial-gradient(circle_at_72%_48%,rgba(215,168,79,.18),transparent_15rem),linear-gradient(135deg,rgba(255,255,255,.86),rgba(220,233,225,.48))]" />
                <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1500&q=60')] bg-cover bg-center mix-blend-multiply" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M13 35 C28 21 39 24 49 34 S68 38 80 36 C91 38 93 50 88 59 C82 70 70 72 60 69 C46 65 37 68 25 62"
                    fill="none"
                    stroke="rgba(7,63,55,.45)"
                    strokeWidth="0.45"
                    strokeDasharray="1.5 1.5"
                  />
                  <path
                    d="M76 70 C84 67 88 62 91 57"
                    fill="none"
                    stroke="rgba(7,63,55,.45)"
                    strokeWidth="0.45"
                    strokeDasharray="1.5 1.5"
                  />
                </svg>
                <p className="absolute right-8 top-8 max-w-xs font-display text-3xl italic leading-tight text-forest">
                  <span className="text-5xl leading-none text-manuka">“</span>
                  Collect moments,
                  <span className="block">not things.</span>
                </p>
                {mapStops.map((stop) => (
                  <div
                    key={stop.label}
                    className="absolute max-w-[10.5rem]"
                    style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
                  >
                    <MapPin className="mb-1 text-manuka drop-shadow" size={30} fill="#d7a84f" />
                    <p className="text-xs font-extrabold uppercase tracking-wide text-forest">
                      {stop.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-ink/72">{stop.note}</p>
                  </div>
                ))}
                <Plane className="absolute left-[39%] top-[39%] -rotate-12 text-forest" size={30} />
                <Plane className="absolute right-[30%] top-[45%] rotate-45 text-forest" size={30} />
                <div className="absolute bottom-5 left-4 right-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {travelPhotos.map((photo) => (
                    <div
                      key={photo.title}
                      className={`rounded-sm border-4 border-white bg-white shadow-soft ${photo.rotate}`}
                    >
                      <div
                        className="h-24 bg-cover bg-center"
                        style={{ backgroundImage: `url('${photo.image}')` }}
                        role="img"
                        aria-label={photo.title}
                      />
                      <p className="px-2 py-1 text-center text-[0.65rem] font-bold uppercase tracking-wide text-forest">
                        {photo.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-sage text-forest">
                    <Globe2 size={28} />
                  </span>
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-forest">
                    Places That Have Shaped Us
                  </h3>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-9">
                  {shapedPlaces.map((place, index) => {
                    const icons = [Building2, Globe2, Waves, Navigation, Landmark, Mountain, Plane, Waves, Sprout];
                    const Icon = icons[index] || MapPin;
                    return (
                      <div key={place} className="text-center">
                        <Icon className="mx-auto text-forest" size={24} />
                        <p className="mt-2 text-xs font-semibold text-ink/72">{place}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 rounded-lg bg-white/70 p-6 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-10">
          <div>
            <p className="eyebrow text-manuka">Education & Growth</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
              Strong Roots, Independent Minds
            </h2>
            <p className="mt-5 leading-7 text-ink/72">
              We believe learning is a lifelong adventure, not confined to four walls. Our approach
              nurtures curiosity, confidence, and character so our children can thrive in any
              environment.
            </p>
            <div className="mt-7 space-y-5">
              {educationPrinciples.map(({ title, text, icon: Icon }) => (
                <div key={title} className="flex gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sage text-forest">
                    <Icon size={26} />
                  </span>
                  <span>
                    <span className="block font-bold text-ink">{title}</span>
                    <span className="block leading-6 text-ink/70">{text}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-7 leading-7 text-ink/72">
              We combine real-world experiences with strong values, giving our children the freedom
              to become confident, capable, and compassionate global citizens.
            </p>
          </div>
          <div
            className="min-h-[520px] rounded-lg bg-cover bg-center shadow-soft"
            style={{ backgroundImage: "url('/kids.png')" }}
            role="img"
            aria-label="Our children together outdoors"
          />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 rounded-lg border border-forest/10 bg-white p-6 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-10">
          <div>
            <Heart className="text-manuka" size={34} />
            <p className="eyebrow mt-5">Our Philosophy</p>
            <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-ink">
              Possibility, sovereignty, and service.
            </h2>
            <p className="mt-5 leading-7 text-ink/72">
              From the start, we wanted our children to see life as full of possibilities. We
              believe in:
            </p>
            <ul className="mt-7 space-y-4">
              {philosophy.map(({ title, text, icon: Icon }) => (
                <li key={title} className="flex gap-4 leading-7 text-ink/74">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage text-forest">
                    <Icon size={20} />
                  </span>
                  <span>
                    <strong className="font-bold text-ink">{title}</strong> {text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="my-8 flex items-center gap-4 text-manuka">
              <span className="h-px flex-1 bg-manuka/35" />
              <img
                src="/unbordered-attached-element-transparent.png"
                alt=""
                className="h-7 w-7 object-contain"
                aria-hidden="true"
              />
              <span className="h-px flex-1 bg-manuka/35" />
            </div>
            <p className="leading-7 text-ink/72">
              We also love optimizing our resources: using Airpoints to offset travel costs,
              arranging smart mortgages, and leveraging home exchanges for incredible stays in Bali,
              Fiji, and other destinations.
            </p>
          </div>
          <div
            className="relative min-h-[520px] overflow-hidden rounded-lg bg-cover bg-center shadow-soft"
            style={{ backgroundImage: "url('/horahora.jpg')" }}
            role="img"
            aria-label="Hora Hora coastal inlet in Northland"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <blockquote className="absolute bottom-6 left-6 right-6 rounded-lg bg-forest/92 p-6 font-display text-xl italic leading-8 text-sand shadow-soft sm:left-auto sm:max-w-sm">
              <span className="absolute -top-4 left-6 text-5xl leading-none text-manuka">“</span>
              We choose a life of freedom and purpose so our children can rise to their highest
              potential and make a positive impact.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[url('/nz-header-pano.jpg')] bg-cover bg-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/18" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
        <div className="container-page relative py-16 lg:py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-manuka/60 text-manuka">
                <Compass size={26} />
              </span>
              <p className="eyebrow text-manuka">Where We’re Heading</p>
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-sand sm:text-5xl">
              Gradually transitioning to a global lifestyle.
            </h2>
            <div className="mt-7 h-px w-16 bg-manuka" />
            <div className="mt-7 space-y-6 text-lg leading-8 text-sand/86">
              <p>
                Over the next two years, our goal is to gradually transition to a global lifestyle,
                exploring countries like Bali and Panama for their tax advantages, quality of life,
                and sovereignty over finances.
              </p>
              <p>
                This plan allows us to travel, continue our businesses, and create meaningful
                experiences while maintaining a secure home base in New Zealand.
              </p>
            </div>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-lg border border-manuka/15 bg-forest/72 shadow-editorial backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {journeyGoals.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="border-b border-manuka/15 p-6 last:border-b-0 sm:even:border-l lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <Icon className="text-manuka" size={42} />
                <h3 className="mt-5 max-w-[15rem] text-xl font-extrabold leading-7 text-sand">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-sand/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist py-16">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_65%_40%,rgba(47,128,104,.18),transparent_18rem),radial-gradient(circle_at_28%_65%,rgba(215,168,79,.14),transparent_18rem)]" />
        <div className="container-page relative">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
            <div>
              <p className="eyebrow text-fern">Join Our Journey</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
                This is just the beginning.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/72">
                We hope sharing our story inspires you to consider your own path, whether it’s
                travel, location independence, or creating a life that aligns with what matters most
                to you.
              </p>
              <a href="#/journey" className="btn-primary mt-8 inline-flex">
                Follow Our Journey
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="relative min-h-[390px]">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=60')] bg-contain bg-center bg-no-repeat mix-blend-multiply" />
              <svg
                className="absolute left-6 right-6 top-24 hidden h-32 w-[calc(100%-3rem)] text-forest/60 lg:block"
                viewBox="0 0 720 130"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M46 72 C128 12 190 34 244 80 S352 115 404 64 S528 26 674 74"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
                <path d="M267 61 l26 12 -26 12 7 -12 -7 -12Z" fill="currentColor" />
                <path d="M442 74 l26 12 -26 12 7 -12 -7 -12Z" fill="currentColor" />
                <path d="M636 54 l26 12 -26 12 7 -12 -7 -12Z" fill="currentColor" />
              </svg>
              <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {futurePath.map(({ place, note, image, icon: Icon }) => (
                  <article key={place} className="text-center">
                    <div
                      className="mx-auto grid h-36 w-36 place-items-start rounded-full border-4 border-white bg-cover bg-center p-3 shadow-soft"
                      style={{ backgroundImage: `url('${image}')` }}
                      role="img"
                      aria-label={`${place} journey image`}
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-forest shadow-sm">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3 className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-forest">
                      {place}
                    </h3>
                    <p className="mt-2 font-display text-2xl italic text-forest/70">{note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 rounded-lg border border-forest/10 bg-white/72 p-4 shadow-soft backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {closingValues.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center justify-center gap-3 border-forest/10 py-2 text-ink/82 lg:border-r lg:last:border-r-0">
                <Icon className="text-forest" size={24} />
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-display text-2xl font-bold text-forest">
            Love,
            <span className="block text-manuka">The Unbordered Family</span>
          </p>
        </div>
      </section>
    </main>
  );
}
