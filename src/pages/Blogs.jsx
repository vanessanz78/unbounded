import {
  ArrowRight,
  Check,
  Copy,
  Headphones,
  LockKeyhole,
  Pause,
  Pencil,
  Play,
  Share2,
  Trash2,
  Upload
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { blogPosts, locations } from "../data/blogs.js";
import { contentArms } from "../data/contentArms.js";

const STORAGE_KEY = "unbordered-family-admin-posts";
const DELETED_STORAGE_KEY = "unbordered-family-deleted-posts";
const ADMIN_PASSWORD = "Admin123";

const tagLinks = {
  "AI tools": "#/using-ai-tools?section=ai-tools",
  "Using AI Tools": "#/using-ai-tools?section=why-ai",
  "Conscious Living": "#/spiritual-conscious",
  "Digital Creativity": "#/blogs",
  Entrepreneurship: "#/using-ai-tools?section=idea-now-what",
  "Family & Travel": "#/family-travel",
  "NZ Roots": "#/home-lifestyle?section=connection-to-roots",
  "Home & Living": "#/home-lifestyle",
  "Sovereign lifestyle": "#/home-lifestyle?section=sovereign-lifestyle",
  "Nature & outdoors": "#/home-lifestyle?section=nature-outdoor-adventures",
  "Connection to roots": "#/home-lifestyle?section=connection-to-roots",
  "Income property": "#/home-lifestyle?section=income-generating-property",
  "Food security": "#/home-lifestyle?section=food-security-self-sufficiency",
  "Online income": "#/freedom-wealth?section=online-income",
  Trading: "#/freedom-wealth?section=online-trading",
  Freedom: "#/freedom-wealth",
  Worldschooling: "#/family-travel?section=worldschooling"
};

function getStoredPosts() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function getDeletedPostIds() {
  try {
    return JSON.parse(window.localStorage.getItem(DELETED_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function estimateReadTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function postToSpeechText(post) {
  const sections = post.sections
    .map((section) => `${section.heading}. ${section.paragraphs.join(" ")}`)
    .join(" ");
  return `${post.title}. ${post.subtitle || ""}. ${post.excerpt}. ${sections}. Practical takeaways. ${post.takeaways.join(". ")}.`;
}

function getLinkedPostId() {
  const query = window.location.hash.split("?")[1]?.split("#")[0] || "";
  return new URLSearchParams(query).get("post");
}

export default function Blogs() {
  const [arm, setArm] = useState("All");
  const [location, setLocation] = useState("All");
  const [storedPosts, setStoredPosts] = useState([]);
  const [deletedPostIds, setDeletedPostIds] = useState([]);
  const [activePostId, setActivePostId] = useState(getLinkedPostId() || blogPosts[0]?.id);
  const [adminOpen, setAdminOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  useEffect(() => {
    setStoredPosts(getStoredPosts());
    setDeletedPostIds(getDeletedPostIds());
    const handleHashChange = () => {
      const linkedPostId = getLinkedPostId();
      if (linkedPostId) setActivePostId(linkedPostId);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.speechSynthesis?.cancel();
    };
  }, []);

  const allPosts = useMemo(() => {
    const storedIds = new Set(storedPosts.map((post) => post.id));
    const deletedIds = new Set(deletedPostIds);
    return [...storedPosts, ...blogPosts.filter((post) => !storedIds.has(post.id) && !deletedIds.has(post.id))];
  }, [deletedPostIds, storedPosts]);

  const filteredPosts = useMemo(
    () =>
      allPosts.filter((post) => {
        const armMatch = arm === "All" || post.arm === arm;
        const locationMatch = location === "All" || post.location === location;
        return armMatch && locationMatch;
      }),
    [allPosts, arm, location]
  );

  const activePost = allPosts.find((post) => post.id === activePostId) || filteredPosts[0] || allPosts[0];

  const handleListen = () => {
    if (!activePost || !("speechSynthesis" in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(postToSpeechText(activePost));
    const voices = window.speechSynthesis.getVoices();
    const nzVoice =
      voices.find((voice) => voice.lang?.toLowerCase() === "en-nz") ||
      voices.find((voice) => voice.lang?.toLowerCase().startsWith("en-au")) ||
      voices.find((voice) => voice.lang?.toLowerCase().startsWith("en-gb")) ||
      voices.find((voice) => voice.lang?.toLowerCase().startsWith("en"));

    if (nzVoice) utterance.voice = nzVoice;
    utterance.lang = nzVoice?.lang || "en-NZ";
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleShare = async () => {
    if (!activePost) return;
    const url = `${window.location.origin}${window.location.pathname}#/blogs?post=${activePost.id}`;
    const shareData = {
      title: activePost.title,
      text: activePost.excerpt,
      url
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareMessage("Shared");
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        setShareMessage("Link copied");
      }
    } catch {
      setShareMessage("");
    }
  };

  const savePost = (post) => {
    const nextPosts = [post, ...storedPosts.filter((item) => item.id !== post.id)];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPosts));
    setStoredPosts(nextPosts);
    setActivePostId(post.id);
  };

  const deletePost = (postId) => {
    const nextStoredPosts = storedPosts.filter((post) => post.id !== postId);
    const isBuiltInPost = blogPosts.some((post) => post.id === postId);
    const nextDeletedPostIds = isBuiltInPost ? [...new Set([...deletedPostIds, postId])] : deletedPostIds;

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextStoredPosts));
    window.localStorage.setItem(DELETED_STORAGE_KEY, JSON.stringify(nextDeletedPostIds));
    setStoredPosts(nextStoredPosts);
    setDeletedPostIds(nextDeletedPostIds);

    if (activePostId === postId) {
      const nextPost = [...nextStoredPosts, ...blogPosts.filter((post) => !nextDeletedPostIds.includes(post.id))][0];
      setActivePostId(nextPost?.id);
    }
  };

  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-forest to-pounamu" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-forest/88 to-pounamu/76" aria-hidden="true" />
        <div className="container-page relative grid min-h-[540px] items-center py-16 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="max-w-3xl">
            <span className="rounded-md bg-manuka px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-ink">
              New Post
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-sand sm:text-7xl">
              {activePost?.title}
            </h1>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.18em] text-manuka">
              {activePost?.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sand/90">{activePost?.excerpt}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={handleListen} className="btn-primary">
                {isSpeaking ? <Pause size={17} /> : <Play size={17} />}
                {isSpeaking ? "Pause Audio" : "Listen in NZ Accent"}
              </button>
              <button type="button" onClick={handleShare} className="btn-light">
                <Share2 size={17} />
                {shareMessage || "Share Post"}
              </button>
            </div>
          </div>

          <aside className="mt-10 rounded-lg border border-manuka/35 bg-ink/72 p-6 text-sand shadow-editorial backdrop-blur lg:mt-0">
            <p className="eyebrow text-manuka">A different way to begin</p>
            <div className="mt-5 space-y-5">
              {[
                ["Kia ora", "Be well. We start by asking if you are well, because wellbeing comes before doing."],
                ["Ko wai to ingoa?", "What is the name of your waters? You are connected to place, ancestry, and story."],
                ["He aha te mea nui?", "Where do you belong? Who are your ancestors? What is your whakapapa?"]
              ].map(([title, text]) => (
                <div key={title} className="border-b border-manuka/25 pb-5 last:border-b-0 last:pb-0">
                  <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-manuka">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-sand/90">{text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="grid gap-4 rounded-lg border border-forest/10 bg-white p-4 shadow-sm lg:grid-cols-[1fr_1fr_auto]">
          <div>
            <label htmlFor="content-arm-filter" className="mb-2 block text-xs font-extrabold uppercase tracking-wide text-fern">
              Content arm
            </label>
            <select
              id="content-arm-filter"
              className="h-12 w-full rounded-md border border-forest/15 bg-white px-3 text-sm font-semibold text-ink outline-none focus:ring-4 focus:ring-fern/20"
              value={arm}
              onChange={(event) => setArm(event.target.value)}
            >
              <option>All</option>
              {contentArms.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="location-filter" className="mb-2 block text-xs font-extrabold uppercase tracking-wide text-fern">
              Location
            </label>
            <select
              id="location-filter"
              className="h-12 w-full rounded-md border border-forest/15 bg-white px-3 text-sm font-semibold text-ink outline-none focus:ring-4 focus:ring-fern/20"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            >
              {locations.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <button type="button" onClick={() => setAdminOpen(true)} className="btn-primary self-end">
            Admin
            <LockKeyhole size={16} />
          </button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="space-y-4">
            {filteredPosts.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setActivePostId(post.id)}
                className={`w-full overflow-hidden rounded-lg border bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${
                  activePost?.id === post.id ? "border-manuka ring-2 ring-manuka/30" : "border-forest/10"
                }`}
              >
                <div
                  className="min-h-44 bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.imageUrl}')` }}
                  role="img"
                  aria-label={`Image for ${post.title}`}
                />
                <div className="p-4">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-forest">
                    {post.location} · {post.readTime}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-ink">{post.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/68">{post.excerpt}</p>
                </div>
              </button>
            ))}
          </aside>

          {activePost && (
            <BlogArticle post={activePost} isSpeaking={isSpeaking} onListen={handleListen} onShare={handleShare} shareMessage={shareMessage} />
          )}
        </div>
      </section>

      {adminOpen && <AdminBlogPanel posts={allPosts} onClose={() => setAdminOpen(false)} onDelete={deletePost} onSave={savePost} />}
    </main>
  );
}

function BlogArticle({ post, isSpeaking, onListen, onShare, shareMessage }) {
  const arm = contentArms.find((item) => item.id === post.arm);

  return (
    <article className="rounded-lg border border-forest/10 bg-white shadow-editorial">
      <div className="overflow-hidden rounded-t-lg">
        <img src={post.imageUrl} alt={post.title} className="max-h-[640px] w-full object-cover object-center" />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-forest">
          <span>{arm?.title || "Story"}</span>
          <span className="h-1 w-1 rounded-full bg-manuka" />
          <span>{post.location}</span>
          <span className="h-1 w-1 rounded-full bg-manuka" />
          <time dateTime={post.date}>
            {new Intl.DateTimeFormat("en-NZ", { month: "short", day: "numeric", year: "numeric" }).format(
              new Date(`${post.date}T00:00:00`)
            )}
          </time>
          {post.audio && (
            <span className="inline-flex items-center gap-1 rounded-full bg-sage px-2 py-1 text-forest">
              <Headphones size={13} /> Audio
            </span>
          )}
        </div>

        <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">{post.title}</h2>
        <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.18em] text-manuka">{post.subtitle}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <a
              key={tag}
              href={tagLinks[tag] || "#/blogs"}
              className="rounded-full bg-sage px-3 py-1 text-[0.72rem] font-bold text-forest transition hover:bg-manuka hover:text-ink"
            >
              {tag}
            </a>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <button type="button" onClick={onListen} className="btn-primary">
            {isSpeaking ? <Pause size={17} /> : <Play size={17} />}
            {isSpeaking ? "Pause Audio" : "Listen in NZ Accent"}
          </button>
          <button type="button" onClick={onShare} className="btn-light">
            {shareMessage ? <Check size={17} /> : <Share2 size={17} />}
            {shareMessage || "Share"}
          </button>
        </div>

        <div className="prose-unbordered mt-8 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="font-display text-2xl font-bold text-ink">{section.heading}</h3>
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-ink/74">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <section className="rounded-lg bg-sage p-6">
            <h3 className="font-display text-2xl font-bold text-ink">Practical takeaways</h3>
            <ul className="mt-4 space-y-3">
              {post.takeaways.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink/74">
                  <Check className="mt-0.5 shrink-0 text-forest" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-lg bg-mist p-6">
            <h3 className="font-display text-2xl font-bold text-ink">Recommended reading</h3>
            <ul className="mt-4 space-y-3">
              {post.reading.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink/74">
                  <ArrowRight className="mt-0.5 shrink-0 text-manuka" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}

function createEmptyAdminForm() {
  return {
    id: "",
    title: "",
    subtitle: "",
    excerpt: "",
    arm: "building-public",
    location: "Online",
    tags: "AI tools, Using AI Tools",
    body: "",
    takeaways: "",
    reading: ""
  };
}

function postToAdminForm(post) {
  return {
    id: post.id,
    title: post.title || "",
    subtitle: post.subtitle || "",
    excerpt: post.excerpt || "",
    arm: post.arm || "building-public",
    location: post.location || "Online",
    tags: (post.tags || []).join(", "),
    body: (post.sections || []).flatMap((section) => section.paragraphs || []).join("\n\n"),
    takeaways: (post.takeaways || []).join("\n"),
    reading: (post.reading || []).join("\n")
  };
}

function AdminBlogPanel({ posts, onClose, onDelete, onSave }) {
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [form, setForm] = useState(createEmptyAdminForm);
  const [editingTitle, setEditingTitle] = useState("New blog post");

  const handleLogin = (event) => {
    event.preventDefault();
    setIsAuthed(password.trim() === ADMIN_PASSWORD);
  };

  const updateField = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImagePreview(String(reader.result || ""));
    reader.readAsDataURL(file);
  };

  const startNewPost = () => {
    setForm(createEmptyAdminForm());
    setImagePreview("");
    setEditingTitle("New blog post");
  };

  const editPost = (post) => {
    setForm(postToAdminForm(post));
    setImagePreview(post.imageUrl || "");
    setEditingTitle(post.title);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const bodyParagraphs = form.body
      .split(/\n+/)
      .map((item) => item.trim())
      .filter(Boolean);
    const bodyText = bodyParagraphs.join(" ");
    const fallbackId = form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const post = {
      id: form.id || `${fallbackId || "blog-post"}-${Date.now()}`,
      title: form.title,
      subtitle: form.subtitle,
      excerpt: form.excerpt,
      arm: form.arm,
      location: form.location,
      date: new Date().toISOString().slice(0, 10),
      readTime: estimateReadTime(`${form.excerpt} ${bodyText}`),
      audio: true,
      imageUrl: imagePreview || "/ai-and-what-this-means-blog.png",
      featured: false,
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      sections: [{ heading: form.subtitle || "Story", paragraphs: bodyParagraphs }],
      takeaways: form.takeaways.split(/\n+/).map((item) => item.trim()).filter(Boolean),
      reading: form.reading.split(/\n+/).map((item) => item.trim()).filter(Boolean)
    };

    onSave(post);
    startNewPost();
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-ink/70 px-4 py-8 backdrop-blur-sm">
      <section className="mx-auto max-w-6xl rounded-lg bg-white shadow-editorial">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-forest/10 bg-white/95 p-5 backdrop-blur">
          <div>
            <p className="eyebrow text-manuka">Admin</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-ink">Manage blog posts.</h2>
          </div>
          <button type="button" onClick={onClose} className="btn-light">
            Close
          </button>
        </div>

        {!isAuthed ? (
          <form onSubmit={handleLogin} className="m-5 max-w-xl rounded-lg border border-forest/10 bg-sage p-5 shadow-soft">
            <label htmlFor="admin-password" className="text-xs font-extrabold uppercase tracking-wide text-forest">
              Admin password
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter admin password"
                className="min-h-12 rounded-lg border border-forest/10 bg-white px-4 text-sm outline-none ring-forest/20 transition focus:ring-4"
              />
              <button type="submit" className="btn-primary">
                Login
                <LockKeyhole size={16} />
              </button>
            </div>
          </form>
        ) : (
          <div className="grid gap-5 p-5 lg:grid-cols-[0.34fr_0.66fr]">
            <aside className="rounded-lg border border-forest/10 bg-mist p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-ink">Posts</h3>
                <button type="button" onClick={startNewPost} className="btn-light px-4 py-2 text-xs">
                  New
                </button>
              </div>
              <div className="mt-4 max-h-[620px] space-y-3 overflow-y-auto pr-1">
                {posts.map((post) => (
                  <div key={post.id} className="rounded-lg border border-forest/10 bg-white p-3 shadow-sm">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-manuka">{post.location}</p>
                    <h4 className="mt-1 font-display text-lg font-bold leading-tight text-ink">{post.title}</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button type="button" onClick={() => editPost(post)} className="btn-light px-3 py-2 text-xs">
                        <Pencil size={14} />
                        Edit
                      </button>
                      <button type="button" onClick={() => onDelete(post.id)} className="btn-light px-3 py-2 text-xs text-red-700">
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <form onSubmit={handleSave} className="grid gap-5 rounded-lg border border-forest/10 bg-mist p-5 shadow-soft lg:grid-cols-2">
              <div className="lg:col-span-2">
                <p className="eyebrow text-fern">Editing</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink">{editingTitle}</h3>
              </div>
              <AdminInput label="Title" value={form.title} onChange={(value) => updateField("title", value)} required />
              <AdminInput label="Subtitle" value={form.subtitle} onChange={(value) => updateField("subtitle", value)} />
              <AdminInput label="Excerpt" value={form.excerpt} onChange={(value) => updateField("excerpt", value)} textarea required />
              <AdminInput label="Tags, comma separated" value={form.tags} onChange={(value) => updateField("tags", value)} />
              <div>
                <label htmlFor="admin-arm" className="text-xs font-extrabold uppercase tracking-wide text-forest">Content arm</label>
                <select
                  id="admin-arm"
                  value={form.arm}
                  onChange={(event) => updateField("arm", event.target.value)}
                  className="mt-2 min-h-12 w-full rounded-lg border border-forest/10 bg-white px-4 text-sm outline-none ring-forest/20 transition focus:ring-4"
                >
                  {contentArms.map((arm) => (
                    <option key={arm.id} value={arm.id}>{arm.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="admin-location" className="text-xs font-extrabold uppercase tracking-wide text-forest">Location</label>
                <select
                  id="admin-location"
                  value={form.location}
                  onChange={(event) => updateField("location", event.target.value)}
                  className="mt-2 min-h-12 w-full rounded-lg border border-forest/10 bg-white px-4 text-sm outline-none ring-forest/20 transition focus:ring-4"
                >
                  {locations.filter((item) => item !== "All").map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <AdminInput label="Blog body, separate paragraphs with new lines" value={form.body} onChange={(value) => updateField("body", value)} textarea required className="lg:col-span-2" />
              <AdminInput label="Takeaways, one per line" value={form.takeaways} onChange={(value) => updateField("takeaways", value)} textarea />
              <AdminInput label="Reading list, one per line" value={form.reading} onChange={(value) => updateField("reading", value)} textarea />
              <div className="lg:col-span-2">
                <label htmlFor="admin-image" className="text-xs font-extrabold uppercase tracking-wide text-forest">Photo upload</label>
                <label className="mt-2 flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-dashed border-forest/25 bg-white p-6 text-sm font-bold text-forest transition hover:border-manuka hover:text-ink">
                  <Upload size={18} />
                  Upload blog image
                  <input id="admin-image" type="file" accept="image/*" onChange={handleImageUpload} className="sr-only" />
                </label>
                {imagePreview && <img src={imagePreview} alt="Uploaded preview" className="mt-4 max-h-80 rounded-lg object-contain" />}
              </div>
              <div className="lg:col-span-2 flex flex-wrap justify-end gap-3">
                <button type="button" onClick={() => navigator.clipboard?.writeText(JSON.stringify(form, null, 2))} className="btn-light">
                  <Copy size={16} />
                  Copy Draft
                </button>
                <button type="submit" className="btn-primary">
                  {form.id ? "Update Post" : "Publish Post"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
            </div>
        )}
      </section>
    </div>
  );
}

function AdminInput({ label, value, onChange, textarea = false, required = false, className = "" }) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const classes = "mt-2 w-full rounded-lg border border-forest/10 bg-white px-4 text-sm outline-none ring-forest/20 transition focus:ring-4";
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs font-extrabold uppercase tracking-wide text-forest">{label}</label>
      {textarea ? (
        <textarea
          id={id}
          required={required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={6}
          className={`${classes} py-3`}
        />
      ) : (
        <input
          id={id}
          required={required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${classes} min-h-12`}
        />
      )}
    </div>
  );
}
