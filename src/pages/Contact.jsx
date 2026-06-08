import { Mail, MessageCircle, Users } from "lucide-react";
import NewsletterForm from "../components/NewsletterForm.jsx";
import { discordUrl } from "../data/socialLinks.js";
import { toolLinks } from "../data/toolLinks.js";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    text: "hello@theunborderedfamily.com",
    note: "We’d love to hear from you.",
    href: "mailto:hello@theunborderedfamily.com"
  },
  {
    icon: MessageCircle,
    title: "Discord",
    text: "Join our Discord server",
    note: "Join our community and connect.",
    href: discordUrl
  },
  {
    icon: Users,
    title: "Abundant Freedom",
    text: "Newsletter and community hub",
    note: "Updates, resources, and more.",
    href: toolLinks.abundantFreedom
  }
];

export default function Contact() {
  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_20%_35%,rgba(220,233,225,.9),transparent_18rem)]" />
        <div className="container-page relative grid gap-10 py-14 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div className="lg:py-10">
            <p className="eyebrow text-forest">Contact</p>
            <div className="mt-3 h-px w-14 bg-manuka" />
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Follow along, say hello, or join Abundant Freedom.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/72">
              Get updates on travel plans, blog posts, family freedom experiments, and building in
              public.
            </p>

            <div className="mt-8 rounded-lg border border-forest/10 bg-sage/70 p-6 shadow-soft">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">Newsletter Signup</h2>
                  <p className="mt-2 leading-7 text-ink/70">
                    Join our journey and receive inspiration, updates, and behind-the-scenes
                    stories.
                  </p>
                </div>
                <img
                  src="/unbordered-attached-element-transparent.png"
                  alt=""
                  className="hidden h-16 w-16 object-contain opacity-35 sm:block"
                  aria-hidden="true"
                />
              </div>
              <NewsletterForm />
            </div>
          </div>

          <div
            className="min-h-[420px] rounded-l-[3rem] bg-cover bg-center shadow-editorial lg:min-h-[560px]"
            style={{ backgroundImage: "url('/wilsons-contact.png')" }}
            role="img"
            aria-label="The Wilson family together outdoors"
          />
        </div>
      </section>

      <section className="container-page grid gap-5 py-12 md:grid-cols-3">
        {contactCards.map(({ icon: Icon, title, text, note, href }) => (
          <a
            key={title}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex gap-5 rounded-lg border border-forest/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-sage text-forest transition group-hover:bg-forest group-hover:text-white">
              <Icon size={29} />
            </span>
            <span>
              <span className="font-display text-2xl font-bold text-ink">{title}</span>
              <span className="mt-2 block text-ink/76">{text}</span>
              <span className="mt-2 block text-ink/68">{note}</span>
            </span>
          </a>
        ))}
      </section>
    </main>
  );
}
