import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo.jsx";

const navItems = [
  { label: "Our Story", href: "#/our-story" },
  { label: "Freedom & Wealth", href: "#/freedom-wealth" },
  { label: "Family & Travel", href: "#/family-travel" },
  { label: "Conscious Living", href: "#/spiritual-conscious" },
  { label: "Home & Living", href: "#/home-lifestyle" },
  { label: "AI Tools", href: "#/using-ai-tools" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-manuka/20 bg-ink/95 text-sand backdrop-blur-xl">
      <div className="container-page flex min-h-24 items-center gap-5 py-3">
        <Logo variant="dark" />
        <nav className="hidden flex-1 items-center justify-center gap-5 xl:gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-center text-[0.66rem] font-extrabold uppercase tracking-[0.16em] text-sand transition hover:text-manuka xl:text-[0.7rem]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="ml-auto grid h-11 w-11 place-items-center rounded-md border border-manuka/35 text-manuka lg:hidden"
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
          </nav>
        </div>
      )}
    </header>
  );
}
