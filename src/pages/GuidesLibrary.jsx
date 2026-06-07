import { ArrowRight, Download, FileText } from "lucide-react";

const guideGroups = [
  {
    title: "Freedom & Wealth",
    intro: "Trading, Bitcoin, investing, online income, and financial sovereignty guides.",
    guides: [
      {
        title: "Online Trading",
        text: "A practical guide to trading structure, funded accounts, and family-first income.",
        image: "/online-trading-guide.png",
        download: "/guides/online-trading-quick-reference.pdf"
      },
      {
        title: "Bitcoin & Sovereignty",
        text: "A family guide to self-custody, privacy, long-term thinking, and wealth protection.",
        image: "/bitcoin-sovereignty-guide.png",
        download: "/guides/bitcoin-sovereignty-quick-reference.pdf"
      },
      {
        title: "Stocks & Investing",
        text: "Simple investing pathways for steady wealth building and long-term options.",
        image: "/stocks-investing-guide.png",
        download: "/guides/stocks-investing-quick-reference.pdf"
      },
      {
        title: "Social Media & Online Income",
        text: "Content, platforms, newsletters, and practical online income streams.",
        image: "/social-media-online-income-guide.png",
        download: "/guides/social-media-online-income-quick-reference.pdf"
      }
    ]
  },
  {
    title: "Family & Travel",
    intro: "Worldschooling, relocation, travel smarter systems, and global lifestyle design.",
    guides: [
      {
        title: "Why Travel?",
        text: "A family-first look at travel as connection, growth, and shared experience.",
        image: "/why-travel-expanded-guide.png",
        download: "/why-travel-expanded-guide.png"
      },
      {
        title: "Travel Smarter",
        text: "Accommodation, flights, points, and money strategies for travelling more intentionally.",
        image: "/travel-smarter-expanded-guide.png",
        download: "/travel-smarter-expanded-guide.png"
      },
      {
        title: "Worldschooling",
        text: "Learning through real-world experiences, culture, travel, and curiosity.",
        image: "/worldschooling-expanded-guide.png",
        download: "/guides/worldschooling-quick-reference.pdf"
      },
      {
        title: "Relocation Guide",
        text: "A planning guide for comparing bases, costs, visas, community, and lifestyle.",
        image: "/relocation-expanded-guide.png",
        download: "/guides/relocation-quick-reference.pdf"
      },
      {
        title: "Global Lifestyle",
        text: "A lifestyle design guide for choosing bases and building a family life by design.",
        image: "/global-lifestyle-expanded-guide.png",
        download: "/guides/global-lifestyle-quick-reference.pdf"
      }
    ]
  },
  {
    title: "Conscious Living",
    intro: "Daily check-ins, healing resources, journaling tools, and conscious family practices.",
    guides: [
      {
        title: "Connection Daily Check-In",
        text: "Daily prompts for presence, appreciation, meaningful connection, and community.",
        image: "/spiritual-connection-checklist.png",
        download: "/spiritual-connection-checklist.png"
      },
      {
        title: "Awareness Daily Check-In",
        text: "Questions that help you see clearly, be present, and choose consciously.",
        image: "/spiritual-awareness-checklist.png",
        download: "/spiritual-awareness-checklist.png"
      },
      {
        title: "Healing Daily Check-In",
        text: "A daily practice for supporting the body, mind, emotions, and rest.",
        image: "/spiritual-healing-checklist.png",
        download: "/spiritual-healing-checklist.png"
      },
      {
        title: "Sovereignty Daily Check-In",
        text: "A personal responsibility guide for choices, energy, resources, and values.",
        image: "/spiritual-sovereignty-checklist.png",
        download: "/spiritual-sovereignty-checklist.png"
      },
      {
        title: "Purpose Daily Check-In",
        text: "A reflection guide for living with intention and making each day meaningful.",
        image: "/spiritual-purpose-checklist.png",
        download: "/spiritual-purpose-checklist.png"
      },
      {
        title: "QHHT Sessions",
        text: "A visual guide to QHHT, inner wisdom, and guided healing support.",
        image: "/qhht-session-tool.png",
        download: "/qhht-session-tool.png"
      },
      {
        title: "Journaling & Reflection Tools",
        text: "Prompts and practices to help you reflect, process, and grow.",
        image: "/journaling-reflection-tools.png",
        download: "/journaling-reflection-tools.png"
      }
    ]
  },
  {
    title: "Home & Living",
    intro: "Food security, roots, slow living, and the practical home systems that support freedom.",
    guides: [
      {
        title: "Rooted in New Zealand",
        text: "A guide to whakapapa, manaakitanga, kaitiakitanga, and staying connected to place.",
        image: "/rooted-in-new-zealand-guide.png",
        download: "/guides/nz-roots-quick-reference.pdf"
      },
      {
        title: "Food Security & Storage",
        text: "Food storage, pantry systems, emergency planning, and self-sufficiency basics.",
        image: "/food-security-storage-guide.png",
        download: "/food-security-storage-guide.png"
      },
      {
        title: "Summers at Pataua",
        text: "A story guide about simplicity, family, self-sufficiency, and Northland roots.",
        image: "/summers-at-pataua-guide.png",
        download: "/summers-at-pataua-guide.png"
      },
      {
        title: "Slow Living",
        text: "A guide to working less, creating more, and building life around presence.",
        image: "/slow-living-guide.png",
        download: "/guides/slow-living-quick-reference.pdf"
      }
    ]
  },
  {
    title: "AI Tools",
    intro: "Creative AI, websites, dashboards, automation, and income-supporting workflows.",
    guides: [
      {
        title: "Using AI Tools",
        text: "A practical guide for creative AI, apps, dashboards, automation, and digital income.",
        image: "/ai-tools-guide.png",
        download: "/guides/ai-tools-quick-reference.pdf"
      },
      {
        title: "Entrepreneurial Spirit",
        text: "A guide to spotting opportunities, creating value, and teaching real-world skills.",
        image: "/entrepreneurial-spirit-guide.png",
        download: "/guides/entrepreneurial-spirit-quick-reference.pdf"
      },
      {
        title: "Social Media & Online Income",
        text: "Content systems, platforms, and repeatable workflows to grow online income streams.",
        image: "/social-media-online-income-guide.png",
        download: "/guides/social-media-online-income-quick-reference.pdf"
      }
    ]
  }
];

function GuideCard({ guide }) {
  return (
    <article className="card flex min-h-[500px] flex-col overflow-hidden">
      <div className="h-56 overflow-hidden bg-sage">
        <img src={guide.image} alt={`${guide.title} guide preview`} className="h-full w-full object-cover object-top" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-bold leading-tight text-ink">{guide.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/64">{guide.text}</p>
        <div className="card-action-row mt-auto pt-6">
          <a href={guide.image} target="_blank" rel="noreferrer" className="btn-light px-4 py-2 text-xs">
            View Guide
            <ArrowRight size={14} />
          </a>
          <a href={guide.download} download className="btn-primary px-4 py-2 text-xs">
            Download
            <Download size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function GuidesLibrary() {
  return (
    <main className="bg-mist">
      <section className="container-page py-16 text-center">
        <p className="eyebrow text-manuka">Guides Library</p>
        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
          Practical guides for every pillar of freedom.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink/70">
          Download the visual guides, quick-reference pages, and practical tools that support each topic across the site.
        </p>
      </section>

      {guideGroups.map((group) => (
        <section key={group.title} className="container-page pb-14">
          <div className="mb-7 text-center">
            <div className="mx-auto flex max-w-3xl items-center justify-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-manuka/40 to-manuka/40" />
              <FileText className="text-manuka" size={17} />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink">{group.title}</p>
              <FileText className="text-manuka" size={17} />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent via-manuka/40 to-manuka/40" />
            </div>
            <p className="mt-3 text-sm text-ink/60">{group.intro}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.guides.map((guide) => (
              <GuideCard key={`${group.title}-${guide.title}`} guide={guide} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
