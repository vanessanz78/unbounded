const AMAZON_ASSOCIATE_ID = "unbordered-20";

const AMAZON_BOOK_LINKS = {
  "A New Earth": "https://www.amazon.com/dp/0452289963/?tag=unbordered-20",
  "AI Superpowers": "https://www.amazon.com/dp/132854639X/?tag=unbordered-20",
  "Animal, Vegetable, Miracle": "https://www.amazon.com/dp/0060852550/?tag=unbordered-20",
  "Atomic Habits": "https://www.amazon.com/dp/0735211299/?tag=unbordered-20",
  "Becoming Supernatural": "https://www.amazon.com/dp/1401953093/?tag=unbordered-20",
  "Between Death and Life": "https://www.amazon.com/dp/1940265002/?tag=unbordered-20",
  "Breaking the Habit of Being Yourself": "https://www.amazon.com/dp/1401938094/?tag=unbordered-20",
  "Co-Intelligence": "https://www.amazon.com/dp/059371671X/?tag=unbordered-20",
  "Common Stocks and Uncommon Profits": "https://www.amazon.com/dp/0471445509/?tag=unbordered-20",
  "Conversations with God": "https://www.amazon.com/dp/0340693258/?tag=unbordered-20",
  "Conversations with God, Book 1": "https://www.amazon.com/dp/0340693258/?tag=unbordered-20",
  "Crushing It!": "https://www.amazon.com/dp/0062674676/?tag=unbordered-20",
  "Die With Zero": "https://www.amazon.com/dp/0358567092/?tag=unbordered-20",
  "Digital Minimalism": "https://www.amazon.com/dp/0525536515/?tag=unbordered-20",
  "Essentialism": "https://www.amazon.com/dp/0804137382/?tag=unbordered-20",
  "Five Lives Remembered": "https://www.amazon.com/dp/1886940649/?tag=unbordered-20",
  "How to Raise a Wild Child": "https://www.amazon.com/dp/0544279328/?tag=unbordered-20",
  "I Will Teach You to Be Rich": "https://www.amazon.com/dp/1523505745/?tag=unbordered-20",
  "In Praise of Slow": "https://www.amazon.com/dp/0060750510/?tag=unbordered-20",
  "Journey Of Souls": "https://www.amazon.com/dp/0738754560/?tag=unbordered-20",
  "Many Lives, Many Masters": "https://www.amazon.com/dp/0671657860/?tag=unbordered-20",
  "Market Wizards": "https://www.amazon.com/dp/1592802974/?tag=unbordered-20",
  "Mastering Bitcoin": "https://www.amazon.com/dp/1491954388/?tag=unbordered-20",
  "Masters of Scale": "https://www.amazon.com/dp/0593239083/?tag=unbordered-20",
  "Multiple Streams of Income": "https://www.amazon.com/dp/0471714550/?tag=unbordered-20",
  "One Up On Wall Street": "https://www.amazon.com/dp/0743200403/?tag=unbordered-20",
  "Pure Human": "https://www.amazon.com/dp/1401976115/?tag=unbordered-20",
  "Rich Dad Poor Dad": "https://www.amazon.com/dp/1612680194/?tag=unbordered-20",
  "Same Soul, Many Bodies": "https://www.amazon.com/dp/0743264339/?tag=unbordered-20",
  "The 4-Hour Workweek": "https://www.amazon.com/dp/0307465357/?tag=unbordered-20",
  "The 7 Habits of Highly Effective Families": "https://www.amazon.com/dp/0307440850/?tag=unbordered-20",
  "The Age of AI": "https://www.amazon.com/dp/0316273805/?tag=unbordered-20",
  "The Alchemist": "https://www.amazon.com/dp/0061122416/?tag=unbordered-20",
  "Best Loser Wins": "https://www.amazon.com/dp/085719822X/?tag=unbordered-20",
  "The Biggest Loser Wins": "https://www.amazon.com/dp/085719822X/?tag=unbordered-20",
  "The biology of belief": "https://www.amazon.com/dp/1401923127/?tag=unbordered-20",
  "The Bitcoin Standard": "https://www.amazon.com/dp/1119473861/?tag=unbordered-20",
  "The Body Keeps the Score": "https://www.amazon.com/dp/0143127748/?tag=unbordered-20",
  "The convoluted universe": "https://www.amazon.com/dp/1940265290/?tag=unbordered-20",
  "The Daily Trading Coach": "https://www.amazon.com/dp/0470398566/?tag=unbordered-20",
  "The Divine Matrix": "https://www.amazon.com/dp/1401905730/?tag=unbordered-20",
  "The Encyclopedia of Country Living": "https://www.amazon.com/dp/1632172895/?tag=unbordered-20",
  "The Four Agreements": "https://www.amazon.com/dp/1878424505/?tag=unbordered-20",
  "The Infinite Game": "https://www.amazon.com/dp/073521350X/?tag=unbordered-20",
  "The Intelligent Investor": "https://www.amazon.com/dp/0060555661/?tag=unbordered-20",
  "The Internet of Money": "https://www.amazon.com/dp/1537000454/?tag=unbordered-20",
  "The Little Book of Common Sense Investing": "https://www.amazon.com/dp/0470102101/?tag=unbordered-20",
  "The Power of Now": "https://www.amazon.com/dp/1577314808/?tag=unbordered-20",
  "The Psychology of Money": "https://www.amazon.com/dp/0857197681/?tag=unbordered-20",
  "The seat of the soul": "https://www.amazon.com/dp/1846046963/?tag=unbordered-20",
  "The Self-Sufficient Life and How to Live It": "https://www.amazon.com/dp/0756654505/?tag=unbordered-20",
  "The Singularity Is Nearer": "https://www.amazon.com/dp/0399562761/?tag=unbordered-20",
  "The Sovereign Individual": "https://www.amazon.com/dp/0684832720/?tag=unbordered-20",
  "The total money makeover": "https://www.amazon.com/dp/1595555277/?tag=unbordered-20",
  "The Unschooling Handbook": "https://www.amazon.com/dp/0761512764/?tag=unbordered-20",
  "The Untethered Soul": "https://www.amazon.com/dp/1572245379/?tag=unbordered-20",
  "Trading in the Zone": "https://www.amazon.com/dp/0735201447/?tag=unbordered-20",
  "Vagabonding": "https://www.amazon.com/dp/0812992180/?tag=unbordered-20",
  "You are the placebo": "https://www.amazon.com/dp/8479538821/?tag=unbordered-20",
  "Your Body Speaks Your Mind": "https://www.amazon.com/dp/0749927836/?tag=unbordered-20",
  "Your Money or Your Life": "https://www.amazon.com/dp/0143115766/?tag=unbordered-20",
  "YouTube Secrets": "https://www.amazon.com/dp/1544511817/?tag=unbordered-20"
};

const normaliseTitle = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const AMAZON_BOOK_LINKS_BY_TITLE = Object.fromEntries(
  Object.entries(AMAZON_BOOK_LINKS).map(([title, url]) => [normaliseTitle(title), url])
);

export function getAmazonBookLink(title, author = "") {
  const directLink = AMAZON_BOOK_LINKS_BY_TITLE[normaliseTitle(title)];

  if (directLink) {
    return directLink;
  }

  const searchQuery = [title, author].filter(Boolean).join(" ");
  return `https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}&tag=${AMAZON_ASSOCIATE_ID}`;
}
