import { Instagram, Mail, PlaySquare, Send } from "lucide-react";
import NewsletterForm from "./NewsletterForm.jsx";

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-page grid gap-8 py-9 md:grid-cols-[1fr_1.3fr_1fr] md:items-center">
        <div className="flex items-center gap-4">
          <Send className="shrink-0" size={30} />
          <div>
            <p className="font-bold">Join our journey.</p>
            <p className="text-sm text-white/75">
              Updates, travel tips, and stories from wherever we are.
            </p>
          </div>
        </div>
        <NewsletterForm compact />
        <div className="flex items-center justify-start gap-3 md:justify-end">
          <span className="mr-2 text-sm font-semibold text-white/80">Let’s connect</span>
          {[
            { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/" },
            { icon: PlaySquare, label: "YouTube", href: "https://www.youtube.com/" },
            { icon: Mail, label: "Email", href: "mailto:hello@theunborderedfamily.com" }
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/45 text-white transition hover:bg-white hover:text-forest"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
