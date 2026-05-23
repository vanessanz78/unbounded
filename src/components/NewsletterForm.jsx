import { ArrowRight } from "lucide-react";

export default function NewsletterForm({ compact = false }) {
  return (
    <form
      className={compact ? "flex w-full gap-2" : "mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row"}
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="sr-only" htmlFor={compact ? "footer-email" : "newsletter-email"}>
        Email address
      </label>
      <input
        id={compact ? "footer-email" : "newsletter-email"}
        type="email"
        required
        placeholder="Your email address"
        className="min-h-12 flex-1 rounded-md border border-forest/15 bg-white px-4 text-sm text-ink outline-none ring-fern/30 transition placeholder:text-ink/45 focus:ring-4"
      />
      <button className={compact ? "btn-light min-h-12 px-4" : "btn-primary min-h-12"} type="submit">
        Subscribe <ArrowRight size={16} />
      </button>
    </form>
  );
}
