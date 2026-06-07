import { BookOpen } from "lucide-react";
import { useRef } from "react";

const readingShelves = [
  {
    id: "freedom-wealth",
    title: "Freedom & Wealth",
    text: "Money, markets, Bitcoin, investing, trading psychology, and building options with purpose.",
    books: [
      ["Trading in the Zone", "Mark Douglas", "https://covers.openlibrary.org/b/isbn/9780735201446-L.jpg"],
      ["Market Wizards", "Jack D. Schwager", "https://covers.openlibrary.org/b/isbn/9781592802975-L.jpg"],
      ["The Daily Trading Coach", "Brett N. Steenbarger", "https://covers.openlibrary.org/b/isbn/9780470398562-L.jpg"],
      ["The Bitcoin Standard", "Saifedean Ammous", "https://covers.openlibrary.org/b/isbn/9781119473862-L.jpg"],
      ["Mastering Bitcoin", "Andreas M. Antonopoulos", "https://covers.openlibrary.org/b/isbn/9781491954386-L.jpg"],
      ["The Sovereign Individual", "James Dale Davidson", "https://covers.openlibrary.org/b/isbn/9780684832722-L.jpg"],
      ["The Intelligent Investor", "Benjamin Graham", "https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg"],
      ["Rich Dad Poor Dad", "Robert T. Kiyosaki", "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"],
      ["The Psychology of Money", "Morgan Housel", "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"],
      ["The 4-Hour Workweek", "Tim Ferriss", "https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg"]
    ]
  },
  {
    id: "family-travel",
    title: "Family & Travel",
    text: "Worldschooling, freedom-focused travel, relocation, nature, and family life by design.",
    books: [
      ["Vagabonding", "Rolf Potts", "https://covers.openlibrary.org/b/isbn/9780812992182-L.jpg"],
      ["Die With Zero", "Bill Perkins", "https://covers.openlibrary.org/b/isbn/9780358099765-L.jpg"],
      ["The 4-Hour Workweek", "Tim Ferriss", "https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg"],
      ["The Unschooling Handbook", "Mary Griffith", "https://covers.openlibrary.org/b/isbn/9780761512769-L.jpg"],
      ["How to Raise a Wild Child", "Scott D. Sampson", "https://covers.openlibrary.org/b/isbn/9780544279322-L.jpg"],
      ["Essentialism", "Greg McKeown", "https://covers.openlibrary.org/b/isbn/9780804137386-L.jpg"],
      ["Atomic Habits", "James Clear", "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"],
      ["The 7 Habits of Highly Effective Families", "Stephen R. Covey", "https://covers.openlibrary.org/b/isbn/9780307440853-L.jpg"]
    ]
  },
  {
    id: "conscious-living",
    title: "Conscious Living",
    text: "Connection, awareness, healing, sovereignty, purpose, and living from inner alignment.",
    books: [
      ["The Power of Now", "Eckhart Tolle", "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg"],
      ["A New Earth", "Eckhart Tolle", "https://covers.openlibrary.org/b/isbn/9780452289963-L.jpg"],
      ["The Untethered Soul", "Michael A. Singer", "https://covers.openlibrary.org/b/isbn/9781572245372-L.jpg"],
      ["Between Death and Life", "Dolores Cannon", "https://covers.openlibrary.org/b/isbn/9781940265001-L.jpg"],
      ["The Convoluted Universe", "Dolores Cannon", "https://covers.openlibrary.org/b/isbn/9781886940823-L.jpg"],
      ["Five Lives Remembered", "Dolores Cannon", "https://covers.openlibrary.org/b/isbn/9781886940649-L.jpg"],
      ["Many Lives, Many Masters", "Brian L. Weiss", "https://covers.openlibrary.org/b/isbn/9780671657864-L.jpg"],
      ["Same Soul, Many Bodies", "Brian L. Weiss", "https://covers.openlibrary.org/b/isbn/9780743264334-L.jpg"],
      ["The Body Keeps the Score", "Bessel van der Kolk", "https://covers.openlibrary.org/b/isbn/9780143127741-L.jpg"],
      ["Becoming Supernatural", "Dr. Joe Dispenza", "https://covers.openlibrary.org/b/isbn/9781401953096-L.jpg"],
      ["Breaking the Habit of Being Yourself", "Dr. Joe Dispenza", "https://covers.openlibrary.org/b/isbn/9781401938093-L.jpg"],
      ["Pure Human", "Gregg Braden", "https://covers.openlibrary.org/b/isbn/9781401976118-L.jpg"],
      ["The Alchemist", "Paulo Coelho", "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"]
    ]
  },
  {
    id: "home-living",
    title: "Home & Living",
    text: "Food security, slow living, family rhythms, home systems, and living closer to what matters.",
    books: [
      ["Animal, Vegetable, Miracle", "Barbara Kingsolver", "https://covers.openlibrary.org/b/isbn/9780060852559-L.jpg"],
      ["The Self-Sufficient Life and How to Live It", "John Seymour", "https://covers.openlibrary.org/b/isbn/9780756654504-L.jpg"],
      ["The Encyclopedia of Country Living", "Carla Emery", "https://covers.openlibrary.org/b/isbn/9781632172891-L.jpg"],
      ["In Praise of Slow", "Carl Honore", "https://covers.openlibrary.org/b/isbn/9780060750510-L.jpg"],
      ["Digital Minimalism", "Cal Newport", "https://covers.openlibrary.org/b/isbn/9780525536512-L.jpg"],
      ["Essentialism", "Greg McKeown", "https://covers.openlibrary.org/b/isbn/9780804137386-L.jpg"],
      ["Atomic Habits", "James Clear", "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"]
    ]
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    text: "Creativity, automation, useful technology, online income, and building real projects.",
    books: [
      ["Co-Intelligence", "Ethan Mollick", "https://covers.openlibrary.org/b/isbn/9780593716717-L.jpg"],
      ["ChatGPT for Everyone", "Olivier Caelen", "https://covers.openlibrary.org/b/isbn/9781805120942-L.jpg"],
      ["The Age of AI", "Henry A. Kissinger", "https://covers.openlibrary.org/b/isbn/9780316273800-L.jpg"],
      ["AI Superpowers", "Kai-Fu Lee", "https://covers.openlibrary.org/b/isbn/9781328546395-L.jpg"],
      ["The Infinite Game", "Simon Sinek", "https://covers.openlibrary.org/b/isbn/9780735213500-L.jpg"],
      ["Masters of Scale", "Reid Hoffman", "https://covers.openlibrary.org/b/isbn/9780593239087-L.jpg"],
      ["The Singularity Is Nearer", "Ray Kurzweil", "https://covers.openlibrary.org/b/isbn/9780399562761-L.jpg"]
    ]
  }
];

function BookShelf({ shelf }) {
  const shelfRef = useRef(null);
  const scrollBooks = (direction) => {
    shelfRef.current?.scrollBy({ left: direction * 760, behavior: "smooth" });
  };

  return (
    <section id={shelf.id} className="container-page scroll-mt-28 pb-14">
      <div className="rounded-lg border border-forest/10 bg-white/78 p-6 shadow-soft">
        <div className="mb-8 text-center">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-manuka/40 to-manuka/40" />
            <BookOpen className="text-manuka" size={17} />
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink">{shelf.title}</p>
            <BookOpen className="text-manuka" size={17} />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-manuka/40 to-manuka/40" />
          </div>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-ink/60">{shelf.text}</p>
        </div>
        <div className="relative">
          <button
            className="absolute left-0 top-20 z-10 hidden h-10 w-10 place-items-center rounded-full bg-forest/10 text-ink transition hover:bg-forest hover:text-white md:grid"
            type="button"
            onClick={() => scrollBooks(-1)}
            aria-label={`Previous ${shelf.title} books`}
          >
            ‹
          </button>
          <button
            className="absolute right-0 top-20 z-10 hidden h-10 w-10 place-items-center rounded-full bg-forest/10 text-ink transition hover:bg-forest hover:text-white md:grid"
            type="button"
            onClick={() => scrollBooks(1)}
            aria-label={`Next ${shelf.title} books`}
          >
            ›
          </button>
          <div
            ref={shelfRef}
            className="flex snap-x gap-6 overflow-x-auto pb-5 md:px-12 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-forest/20 [&::-webkit-scrollbar-track]:bg-transparent"
          >
            {shelf.books.map(([title, author, cover]) => (
              <article key={`${shelf.id}-${title}`} className="w-36 shrink-0 snap-start text-center">
                <div className="mx-auto h-48 w-32 overflow-hidden rounded-md bg-sage shadow-soft">
                  <img src={cover} alt={`${title} book cover`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <h3 className="mx-auto mt-4 max-w-36 text-sm font-extrabold leading-5 text-ink">{title}</h3>
                <p className="mt-2 text-xs leading-4 text-ink/58">{author}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RecommendedReading() {
  return (
    <main className="bg-mist">
      <section className="container-page py-16 text-center">
        <p className="eyebrow text-manuka">Recommended Reading</p>
        <h1 className="mx-auto mt-4 max-w-5xl font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
          Books that help us think, live, and grow together.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink/70">
          Where you can, support your local independent bookstore or a small online bookseller before ordering from the biggest marketplaces.
        </p>
      </section>

      {readingShelves.map((shelf) => (
        <BookShelf key={shelf.id} shelf={shelf} />
      ))}
    </main>
  );
}
