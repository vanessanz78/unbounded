import { Instagram, Menu, PlaySquare, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo.jsx";

const navItems = [
  { label: "Home", href: "#/" },
  { label: "Our Story", href: "#/our-story" },
  { label: "Journey", href: "#/journey" },
  { label: "Start Here", href: "#/start-here" },
  { label: "Blog", href: "#/blogs" },
  { label: "Contact", href: "#/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-manuka/20 bg-ink/95 text-sand backdrop-blur-xl">
      <div className="container-page flex min-h-24 items-center justify-between gap-5 py-3">
        <Logo variant="dark" />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-sand transition hover:text-manuka"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="grid h-11 w-11 place-items-center rounded-full border border-manuka/45 text-manuka transition hover:bg-manuka hover:text-ink"
            href="https://www.instagram.com/"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            className="grid h-11 w-11 place-items-center rounded-full border border-manuka/45 text-manuka transition hover:bg-manuka hover:text-ink"
            href="https://www.youtube.com/"
            aria-label="YouTube"
          >
            <PlaySquare size={18} />
          </a>
          <a className="btn-primary bg-manuka text-ink hover:bg-sand" href="#/journey">
            Follow Our Journey
          </a>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-manuka/35 text-manuka lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-manuka/20 bg-ink lg:hidden">
          <nav className="container-page grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-bold uppercase tracking-wide text-sand hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a className="btn-primary mt-2 bg-manuka text-ink hover:bg-sand" href="#/journey" onClick={() => setOpen(false)}>
              Follow Our Journey
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
