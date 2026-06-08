import { ArrowRight, BookOpen, Image, MapPin, Mountain, Plane, Waves } from "lucide-react";
import BlogCard from "../components/BlogCard.jsx";
import ContentArmGrid from "../components/ContentArmGrid.jsx";
import NewsletterForm from "../components/NewsletterForm.jsx";
import { blogPosts } from "../data/blogs.js";
import { whyFeatures } from "../data/contentArms.js";

export default function Home() {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 5);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src="/home-family-portrait.png"
            alt="The Wilson family together overlooking rice terraces"
            className="h-full w-full object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/76 to-ink/16" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/12" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(215,168,79,.28),transparent_18rem),radial-gradient(circle_at_5%_90%,rgba(3,23,22,.72),transparent_28rem)]" />
        </div>
        <div className="container-page relative grid min-h-[650px] items-center gap-10 py-16 sm:min-h-[700px]">
          <div className="max-w-2xl" style={{ textShadow: "0 2px 28px rgba(3, 23, 22, 0.42)" }}>
            <p className="eyebrow text-manuka">Live freely. Learn globally. Love deeply.</p>
            <div className="my-5 flex items-center gap-3 text-manuka">
              <span className="h-px w-20 bg-manuka" />
              <span className="h-1.5 w-1.5 rotate-45 bg-manuka" />
              <span className="h-1.5 w-1.5 rotate-45 bg-manuka" />
              <span className="h-px w-20 bg-manuka" />
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.04] text-sand sm:text-6xl lg:text-7xl">
              Raising Global Citizens.
              <span className="block text-manuka">Living Unbordered.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-sand/86">
              We’re a family of explorers, slow travelers, and lifelong learners. Following
              curiosity, freedom, and opportunities around the world while giving our kids the
              education of a lifetime.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="btn-primary bg-manuka text-ink hover:bg-sand" href="#/our-story">
                Our Story <ArrowRight size={16} />
              </a>
              <a className="btn-secondary border-manuka/75 text-sand hover:bg-manuka hover:text-ink" href="#/blogs">
                Read the Blog <BookOpen size={16} />
              </a>
              <a className="btn-secondary border-manuka/75 text-sand hover:bg-manuka hover:text-ink" href="#/journey">
                Follow Our Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-10 text-center text-sand">
        <div className="container-page">
          <p className="font-display text-2xl font-bold sm:text-3xl">
            Freedom to Live. Purpose to Share. A Legacy <span className="text-manuka">Beyond Borders.</span>
          </p>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-page">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-forest">
              Recent Adventures
            </h2>
            <a
              className="hidden text-sm font-extrabold uppercase tracking-[0.18em] text-forest sm:inline-flex"
              href="#/blogs"
            >
              View All Posts →
            </a>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-16 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_10%,rgba(215,168,79,.35),transparent_18rem),url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1800&q=70')] bg-cover bg-center" />
        <div className="container-page relative">
          <div className="text-center">
            <p className="eyebrow text-manuka">Content Arms</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-sand">What We Share</h2>
            <div className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-3 text-manuka">
              <span className="h-px flex-1 bg-manuka/50" />
              <span className="h-1.5 w-1.5 rotate-45 bg-manuka" />
              <span className="h-px flex-1 bg-manuka/50" />
            </div>
          </div>
          <div className="mt-10">
            <ContentArmGrid variant="dark" />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <article className="premium-panel grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <div>
            <p className="eyebrow inline-flex items-center gap-3 text-fern">
              <MapPin size={24} strokeWidth={2.1} /> Where We Are
            </p>
            <h2 className="mt-8 max-w-xl font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl">
              North Island, New Zealand
            </h2>
            <p className="mt-8 max-w-xl text-2xl leading-[1.75] text-ink/68">
              Our home base in the North Island, where native bush meets beautiful beaches.
              Surrounded by nature, family, and freedom, we’re building a life rooted in
              adventure, connection, and purpose.
            </p>
            <a className="btn-primary mt-9 px-8 py-4 text-base" href="#/our-story">
              Explore Where We Are
              <ArrowRight size={18} />
            </a>
          </div>

          <div
            className="relative min-h-[520px] overflow-hidden rounded-lg bg-cover bg-center shadow-editorial"
            style={{ backgroundImage: "url('/pataua-north-road-aerial.png')" }}
            role="img"
            aria-label="Aerial view of Pataua and Northland coastline"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-ink/48 via-transparent to-white/5" />
            <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full bg-white/24 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-soft backdrop-blur">
              Pataua, Northland
            </div>
            <div className="absolute left-8 top-28 inline-flex items-center gap-2 rounded-full bg-white/92 px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-forest shadow-soft">
              <Mountain size={19} />
              Native Bush
            </div>
            <div className="absolute right-5 top-[46%] inline-flex items-center gap-2 rounded-full bg-white/92 px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-forest shadow-soft">
              <Waves size={19} />
              Beautiful Beaches
            </div>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M24 29 C30 38 28 48 38 54 C48 60 61 55 75 61 C84 65 83 74 76 82"
                fill="none"
                stroke="rgba(255,255,255,.86)"
                strokeDasharray="1.2 2.2"
                strokeLinecap="round"
                strokeWidth="0.7"
              />
              <circle cx="38" cy="54" r="1.3" fill="white" />
              <circle cx="76" cy="82" r="1.3" fill="white" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 bg-ink/62 p-6 text-white backdrop-blur-sm">
              <Image className="shrink-0" size={34} />
              <p className="text-lg font-bold leading-7">
                North Island bush and beach, aerial view
              </p>
            </div>
          </div>
        </article>

        <div className="mt-5 grid gap-5 md:grid-cols-1">
          <article className="premium-panel grid gap-8 p-6 sm:grid-cols-[1fr_0.85fr] sm:p-8 lg:items-center">
            <div>
              <p className="eyebrow inline-flex items-center gap-2">
                <Plane size={15} /> Where We’re Heading
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold">Bali, Panama & Beyond</h2>
              <div className="mt-5 space-y-4 text-lg leading-8 text-ink/70">
                <p>We believe home can be more than one place.</p>
                <p>
                  From the rice fields and creative communities of Bali to the freedom and
                  opportunity emerging in Panama, we’re exploring destinations that align with a
                  slower, more intentional way of life.
                </p>
                <p>Places where family, freedom, culture, and possibility intersect.</p>
              </div>
              <a className="btn-primary mt-6" href="#/journey">
                See Our Plan
              </a>
            </div>
            <div
              className="relative min-h-[420px] overflow-hidden rounded-lg bg-cover bg-center shadow-soft"
              style={{ backgroundImage: "url('/bali-panama-beyond-rice-fields.png')" }}
              role="img"
              aria-label="Bali rice terraces at sunrise"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ink/18 via-transparent to-transparent" />
            </div>
          </article>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="text-center">
          <p className="eyebrow">The compass points</p>
          <h2 className="section-title">Why We Live Unbordered</h2>
        </div>
        <div className="mt-9 grid gap-6 md:grid-cols-5">
          {whyFeatures.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-forest/10 bg-white/70 p-5 text-center shadow-sm backdrop-blur">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage text-pounamu">
                <Icon size={27} />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
              <p className="mx-auto mt-2 max-w-[14rem] text-sm leading-6 text-ink/70">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sage py-16">
        <div className="container-page text-center">
          <h2 className="section-title mt-2">Follow the Road as It Unfolds</h2>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
