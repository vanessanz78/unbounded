import { Headphones, MapPin } from "lucide-react";
import { contentArms } from "../data/contentArms.js";
import PlaceholderImage from "./PlaceholderImage.jsx";

export default function BlogCard({ post, compact = false }) {
  const arm = contentArms.find((item) => item.id === post.arm);
  const postHref = `#/blogs?post=${post.id}`;

  return (
    <a
      className="group block overflow-hidden rounded-md border border-forest/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-manuka/45 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-manuka focus-visible:ring-offset-4"
      href={postHref}
      aria-label={`Read ${post.title}`}
    >
      {post.imageUrl ? (
        <div
          className={`${compact ? "min-h-40" : "min-h-56"} relative bg-cover bg-center`}
          style={{ backgroundImage: `url(${post.imageUrl})` }}
          aria-label={`Image for ${post.title}`}
          role="img"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-70 transition group-hover:opacity-40" />
        </div>
      ) : (
        <PlaceholderImage
          tone={post.imageTone}
          label={`Placeholder for ${post.title}`}
          className={compact ? "min-h-44 rounded-none" : "min-h-56 rounded-none"}
        />
      )}
      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-forest">
          <span className="inline-flex items-center gap-1">
            <MapPin size={13} className="text-manuka" /> {post.location}
          </span>
          <span className="h-1 w-1 rounded-full bg-manuka" />
          <span>{arm?.shortTitle || "Story"}</span>
          {post.audio && (
            <span className="inline-flex items-center gap-1 rounded-full bg-sage px-2 py-1 text-forest">
              <Headphones size={13} /> Audio
            </span>
          )}
        </div>
        <h3 className="font-display text-xl font-bold text-ink">{post.title}</h3>
        <p className="mt-2 text-sm leading-6 text-ink/70">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-ink/55">
          <time dateTime={post.date}>
            {new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
              new Date(`${post.date}T00:00:00`)
            )}
          </time>
          <span>{post.readTime}</span>
        </div>
      </div>
    </a>
  );
}
