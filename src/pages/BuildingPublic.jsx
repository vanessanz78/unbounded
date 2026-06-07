import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Code2,
  Compass,
  Download,
  FileImage,
  GraduationCap,
  Heart,
  Image,
  Lightbulb,
  Megaphone,
  Mic,
  Pencil,
  RefreshCw,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UploadCloud,
  Users,
  Video,
  Wrench
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import PillarDetailNavigation from "../components/PillarDetailNavigation.jsx";

const replitReferralUrl = "https://replit.com/refer/vanessanz";

const aiSections = [
  {
    id: "why-ai",
    number: "01",
    title: "Why AI?",
    cardText: "Understand why AI is a game changer for families and entrepreneurs.",
    icon: Lightbulb,
    content: <WhyAI />
  },
  {
    id: "ai-tools",
    number: "02",
    title: "What AI Tools Can I Use?",
    cardText: "Discover the best AI tools for every part of your journey.",
    icon: Code2,
    content: <AITools />
  },
  {
    id: "workflow",
    number: "03",
    title: "Workflow & Step-by-Step Guidance",
    cardText: "Learn how to use AI tools effectively and efficiently.",
    icon: GraduationCap,
    content: <Workflow />
  },
  {
    id: "idea-now-what",
    number: "04",
    title: "I Have an Idea. Now What?",
    cardText: "Turn your idea into a real project or product.",
    icon: Pencil,
    content: <IdeaNowWhat />
  },
  {
    id: "money-scale",
    number: "05",
    title: "How Do I Make Money & Scale?",
    cardText: "Launch, market and scale your project for real income.",
    icon: CircleDollarSign,
    content: <MoneyScale />
  }
];

function getRequestedSection() {
  if (typeof window === "undefined") return "why-ai";
  const query = window.location.hash.split("?")[1] || "";
  const requested = new URLSearchParams(query).get("section");
  return aiSections.some((section) => section.id === requested) ? requested : "why-ai";
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-ink/76">
      <CheckCircle2 className="mt-0.5 shrink-0 text-manuka" size={16} />
      <span>{children}</span>
    </li>
  );
}

function DetailBlock({ icon: Icon, title, children }) {
  return (
    <article className="border-b border-forest/10 pb-6 last:border-b-0">
      <div className="flex gap-5">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sand/65 text-ink">
          <Icon size={27} strokeWidth={1.7} />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
          <div className="mt-3 space-y-3 text-sm leading-6 text-ink/76">{children}</div>
        </div>
      </div>
    </article>
  );
}

function WhyAI() {
  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-ink">Why Creative Tools Matter</h2>
      <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr_0.75fr]">
        <div className="space-y-5 text-sm leading-7 text-ink/76">
          <p>
            Creative tools have completely changed the way our family works, creates, and generates income.
            They are more than software; they are gateways to freedom, creativity, and opportunity.
          </p>
          <p>
            For families wanting to explore location-independent income or teach children practical digital skills,
            AI and digital creativity make what once seemed impossible entirely achievable.
          </p>
          <p>
            We use these tools across multiple family ventures: AbundantFreedom.online, StayDirect.nz,
            CatStays.app, Foodi.nz, DeloraineCattery.com, and DeloraineCottage.com.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-ink">Scaling Creative Output</h3>
          <p className="mt-4 text-sm leading-7 text-ink/76">
            AI allows us to produce content that would have previously taken days in just hours. Videos,
            blog illustrations, and marketing visuals can be generated quickly and repurposed across platforms.
          </p>
          <h3 className="mt-8 font-display text-xl font-bold text-ink">Why These Tools Work for Families</h3>
          <ul className="mt-4 space-y-4">
            <CheckItem>Democratization of creativity: you do not need a large team or budget.</CheckItem>
            <CheckItem>Practicality: small projects can be scaled over time.</CheckItem>
            <CheckItem>Hands-on learning: children see ideas become tangible projects.</CheckItem>
            <CheckItem>Freedom: work can be done from anywhere.</CheckItem>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-ink">How We Apply Them</h3>
          <p className="mt-4 text-sm leading-7 text-ink/76">
            We generate graphics for AbundantFreedom.online, content for StayDirect.nz, and social posts for Foodi.nz.
            The children participate in selecting ideas, reviewing outputs, and giving feedback.
          </p>
          <h3 className="mt-8 font-display text-xl font-bold text-ink">Putting It Into Practice</h3>
          <ul className="mt-4 space-y-3">
            <CheckItem>Start small: pick a simple idea or project and experiment.</CheckItem>
            <CheckItem>Involve children in age-appropriate creative and review tasks.</CheckItem>
            <CheckItem>Use AI tools to save time and scale outputs effectively.</CheckItem>
            <CheckItem>Document your process and iterate over time.</CheckItem>
          </ul>
        </div>
        <aside>
          <h3 className="font-display text-xl font-bold text-ink">Final Thoughts</h3>
          <p className="mt-4 text-sm leading-7 text-ink/76">
            Creative tools are not just about producing outputs; they are about transformation.
          </p>
          <div className="mt-8 rounded-lg bg-sand/55 p-6">
            <p className="font-display text-5xl text-manuka">“</p>
            <p className="mt-2 text-lg leading-8 text-ink/76">
              Tools do not replace creativity. They unlock it.
            </p>
            <p className="mt-5 text-sm font-semibold text-ink/60">- Unbordered Family</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function AITools() {
  const categories = [
    [Image, "1. Image & Visual Tools", "DALL-E, MidJourney, Leonardo AI, and RunDiffusion help create illustrations, marketing graphics, storybooks, and business visuals."],
    [Video, "2. Video Production Tools", "Runway, Descript, Pictory, InVideo, and Synthesia make short films, tutorials, and animated content more accessible."],
    [Mic, "3. Audio & Voice Tools", "Descript, ElevenLabs, Murf, Play.ht, and Resemble AI can generate narrations, podcasts, guided audio, and course voiceovers."],
    [Pencil, "4. Writing & Storytelling Tools", "ChatGPT, Jasper, Writesonic, Rytr, and Sudowrite can help draft content, scripts, prompts, blogs, courses, and children’s projects."],
    [FileImage, "5. Graphic & Layout Design", "Canva, Figma, Adobe Express, Crello, and Snappa help arrange visuals and create professional layouts for digital and print media."],
    [
      Compass,
      "6. App & Website Building",
      <>
        <a href={replitReferralUrl} target="_blank" rel="noreferrer" className="font-bold text-forest underline decoration-manuka/60 underline-offset-4">
          Replit
        </a>
        {", Codex, Supabase, GitHub, and API tools let you build and deploy websites, dashboards, and apps locally or online."}
      </>
    ]
  ];

  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-ink">What AI Tools Can I Use?</h2>
      <h3 className="mt-7 font-display text-2xl font-bold text-ink">Understanding Creative Tools</h3>
      <p className="mt-3 text-sm leading-7 text-ink/76">
        Creative tools amplify ideas and make projects achievable without needing a large team or long hours.
        For families and entrepreneurs, understanding the categories and practical applications of these tools is essential.
      </p>
      <div className="mt-8 space-y-3">
        {categories.map(([Icon, title, text]) => (
          <article key={title} className="flex gap-5 rounded-lg border border-forest/10 bg-white/70 p-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sand/65 text-ink">
              <Icon size={25} strokeWidth={1.7} />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-ink/74">{text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <CheckItem>Co-create storybooks, marketing visuals, or videos with your children.</CheckItem>
        <CheckItem>Automate repetitive tasks like content posting, dashboard updates, and analytics.</CheckItem>
        <CheckItem>Integrate multiple tools to create a full workflow from concept to publication.</CheckItem>
      </div>
      <h3 className="mt-8 font-display text-xl font-bold text-ink">Staying Current and Exploring New Tools</h3>
      <p className="mt-3 text-sm leading-7 text-ink/76">
        Always keep abreast of emerging AI technologies. Many new tools offer free credits or introductory
        access, perfect for testing ideas or building small projects.
      </p>
    </div>
  );
}

function Workflow() {
  const leftSteps = [
    [Lightbulb, "Step 1: Idea Generation", "Start with an idea or problem you want to solve. Involve your children where appropriate, even just brainstorming names, visuals, or simple concepts."],
    [ClipboardList, "Step 2: Planning & Storyboarding", "Outline the project in detail. Break it into manageable steps with clear milestones, layouts, styles, or storyboards."],
    [Wrench, "Step 3: Selecting the Right Tools", "Choose tools appropriate for each task: writing, images, video, audio, layout, apps, dashboards, and API integrations."],
    [Pencil, "Step 4: Execution", "Input prompts or assets, generate outputs, and iterate. Generate images, adjust layouts, write scripts, create narration, and compile the final piece."]
  ];
  const rightSteps = [
    [UploadCloud, "Step 5: Integration & Publication", "Combine all outputs into the final product: a video, app, storybook, social post, dashboard, or guide."],
    [RefreshCw, "Step 6: Reflection & Iteration", "Review what worked, what did not, and what needs refining. Document workflow adjustments and efficiency gains."],
    [Users, "Step 7: Involving Family in the Workflow", "Children can help select prompts, provide feedback, draw sketches, or suggest improvements."],
    [Rocket, "Step 8: Scaling and Experimentation", "Integrate tools into larger workflows and connect dashboards, websites, or apps for seamless automation."]
  ];

  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-ink">Workflow & Step-by-Step Guidance</h2>
      <p className="mt-4 max-w-5xl text-sm leading-7 text-ink/76">
        Having explored the tools themselves, the next step is understanding how to use them in a practical workflow
        that fits into family life while generating outputs that are meaningful and scalable.
      </p>
      <div className="mt-8 grid gap-9 lg:grid-cols-2">
        <div className="space-y-6">{leftSteps.map(([Icon, title, text]) => <DetailBlock key={title} icon={Icon} title={title}>{text}</DetailBlock>)}</div>
        <div className="space-y-6">
          {rightSteps.map(([Icon, title, text]) => <DetailBlock key={title} icon={Icon} title={title}>{text}</DetailBlock>)}
          <div className="rounded-lg bg-sand/55 p-6">
            <h3 className="font-display text-xl font-bold text-ink">Practical Tips:</h3>
            <ul className="mt-4 space-y-2">
              <CheckItem>Start small and manageable; one micro-project per week is enough.</CheckItem>
              <CheckItem>Document each step to build a reusable workflow template.</CheckItem>
              <CheckItem>Encourage children’s participation to teach responsibility.</CheckItem>
              <CheckItem>Experiment and iterate frequently.</CheckItem>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm leading-7 text-ink/76">
        This workflow ensures families can generate creative outputs, build income, and learn together while
        maintaining balance, presence, and a playful approach to technology.
      </p>
    </div>
  );
}

function IdeaNowWhat() {
  const actionSteps = [
    ["1", "Step 1: Prototype", "Use AI to generate visual examples, templates, and instructional guides."],
    ["2", "Step 2: Build", "Create a landing page with AI-assisted web design tools."],
    ["3", "Step 3: Promote", "Use AI-driven social media content to attract participants."],
    ["4", "Step 4: Deliver", "Automate registration, emails, and resource delivery."],
    ["5", "Step 5: Scale", "Repurpose the same content for workshops, e-books, or video tutorials."]
  ];

  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-ink">I Have an Idea. Now What?</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-8">
          <DetailBlock icon={Target} title="Discovering Opportunity">
            Entrepreneurship starts with curiosity. AI tools allow you to explore multiple ideas quickly,
            test viability, and prototype without heavy upfront investment.
            <ul className="mt-4 space-y-2">
              <CheckItem>Observation: look for gaps in daily life or community.</CheckItem>
              <CheckItem>Ideation: brainstorm small-scale ideas that solve a problem.</CheckItem>
              <CheckItem>Validation: test your idea quickly through small experiments.</CheckItem>
            </ul>
          </DetailBlock>
          <DetailBlock icon={Rocket} title="From Idea to Action">
            AI can help with concept design, content creation, and automation so you can move from concept to first version quickly.
          </DetailBlock>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-ink">Example: Launching a Mini Workshop</h3>
          <p className="mt-3 text-sm leading-7 text-ink/76">
            Imagine you want to teach a skill your family has mastered, such as creating handmade crafts for kids.
          </p>
          <div className="mt-5 space-y-4">
            {actionSteps.map(([number, title, text]) => (
              <article key={title} className="flex gap-4 border-b border-forest/10 pb-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sand text-ink font-bold">{number}</span>
                <div>
                  <h4 className="font-display text-lg font-bold text-ink">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-ink/72">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-7">
          <DetailBlock icon={RefreshCw} title="Learning & Iterating">
            Entrepreneurship is iterative. Gather feedback, adjust your product, and track performance metrics.
          </DetailBlock>
          <div className="rounded-lg bg-sand/55 p-6">
            <h3 className="font-display text-xl font-bold text-ink">Practical Mindset</h3>
            <p className="mt-3 text-sm leading-7 text-ink/76">
              AI tools are amplifiers. They let you scale ideas while maintaining freedom, creativity, and family time.
            </p>
            <ul className="mt-4 space-y-2">
              <CheckItem>Explore multiple streams of income.</CheckItem>
              <CheckItem>Develop small projects into functional ventures.</CheckItem>
              <CheckItem>Transform everyday insights into valuable offerings.</CheckItem>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-lg bg-sand/40 p-5">
        <h3 className="font-display text-xl font-bold text-ink">Final Thoughts</h3>
        <p className="mt-2 text-sm leading-7 text-ink/76">
          Start with a simple concept, iterate, and gradually expand your projects into meaningful,
          income-generating experiences that empower your family and create freedom.
        </p>
      </div>
    </div>
  );
}

function MoneyScale() {
  const familyTips = [
    [Target, "Start with one project and test marketing channels before scaling."],
    [Scale, "Track results and optimize strategies using dashboards and analytics."],
    [RefreshCw, "Repurpose content across multiple platforms to maximize reach and income."],
    [Heart, "Keep a balance between revenue generation and family presence."],
    [Users, "Stay consistent and provide value to build trust and long-term audience loyalty."]
  ];

  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-ink">How Do I Make Money and Scale?</h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-ink/76">
        This page is focused entirely on turning creative projects into income through smart marketing,
        scaling strategies, and monetization techniques.
      </p>
      <div className="mt-8 grid gap-7 lg:grid-cols-3">
        <article className="border-forest/10 lg:border-r lg:pr-7">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-ink text-sand">
              <Megaphone size={30} strokeWidth={1.8} />
            </span>
            <h3 className="font-display text-xl font-bold text-ink">1. Marketing Your Products</h3>
          </div>
          <p className="mt-5 text-sm leading-7 text-ink/76">
            Once you have a product or creative output, marketing is key. AI tools can help you
            design marketing campaigns, create social media posts, and automate outreach.
            Effective marketing helps your project reach the right audience and maximizes the
            chance of converting attention into revenue.
          </p>
          <p className="mt-5 text-sm font-semibold text-ink">Strategies include:</p>
          <ul className="mt-3 space-y-3">
            <CheckItem>Targeted social media campaigns using AI-generated graphics and copy.</CheckItem>
            <CheckItem>Automated email marketing sequences for product launches or updates.</CheckItem>
            <CheckItem>Optimized website landing pages and dashboards for conversions.</CheckItem>
          </ul>
          <div className="mt-6 overflow-hidden rounded-lg border border-forest/10 bg-sand/55 shadow-sm">
            <div className="flex items-end gap-4 p-5">
              <div className="flex-1 rounded-md bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-ink/60">Launch Campaign</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["2.4K", "12.5%", "$8.9K"].map((stat) => (
                    <div key={stat} className="rounded bg-mist p-2 text-center text-xs font-extrabold text-forest">{stat}</div>
                  ))}
                </div>
                <div className="mt-4 h-16 rounded bg-gradient-to-tr from-sage via-white to-manuka/40" />
              </div>
              <div className="h-24 w-14 rounded-md bg-ink p-1">
                <div className="h-full rounded bg-sand/80" />
              </div>
            </div>
          </div>
        </article>

        <article className="border-forest/10 lg:border-r lg:pr-7">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-ink text-sand">
              <Scale size={30} strokeWidth={1.8} />
            </span>
            <h3 className="font-display text-xl font-bold text-ink">2. Scaling Your Projects</h3>
          </div>
          <p className="mt-5 text-sm leading-7 text-ink/76">
            Scaling means growing your project to reach a larger audience without proportionally
            increasing your time or workload. AI and automation are critical here.
          </p>
          <ul className="mt-5 space-y-3">
            <CheckItem><strong>Batch content creation:</strong> Generate multiple social media posts, videos, or visuals in one session.</CheckItem>
            <CheckItem><strong>Automation tools:</strong> Schedule posts, manage subscriptions, and handle client communications.</CheckItem>
            <CheckItem>
              <strong>Platform integration:</strong> Connect apps like{" "}
              <a href={replitReferralUrl} target="_blank" rel="noreferrer" className="font-bold text-forest underline decoration-manuka/60 underline-offset-4">
                Replit
              </a>
              {", Codex, GitHub, and Supabase to create a seamless production pipeline."}
            </CheckItem>
          </ul>
          <div className="mt-8 rounded-lg bg-ink p-5 text-white shadow-sm">
            <div className="grid grid-cols-5 gap-2">
              {["Replit", "GitHub", "Supabase", "Codex", "Your Project"].map((tool, index) => {
                const content = (
                  <>
                    <Sparkles className="mx-auto text-manuka" size={20} />
                    <p className="mt-2 text-[0.62rem] font-bold">{tool}</p>
                    {index < 4 && <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-manuka md:block">→</span>}
                  </>
                );

                return tool === "Replit" ? (
                  <a
                    key={tool}
                    href={replitReferralUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative rounded-md border border-manuka/40 bg-forest/80 p-3 text-center transition hover:border-manuka hover:bg-forest"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={tool} className="relative rounded-md border border-manuka/40 bg-forest/80 p-3 text-center">
                    {content}
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-center text-sm font-extrabold text-sand">
              Connect your tools. Automate your workflow. Scale with confidence.
            </p>
          </div>
        </article>

        <article>
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-ink text-sand">
              <CircleDollarSign size={32} strokeWidth={1.8} />
            </span>
            <h3 className="font-display text-xl font-bold text-ink">3. Monetizing Your Work</h3>
          </div>
          <p className="mt-5 text-sm leading-7 text-ink/76">
            Creative outputs can generate multiple income streams:
          </p>
          <ul className="mt-5 space-y-3">
            <CheckItem><strong>Digital Products:</strong> e-books, guides, or storybooks co-created with your children.</CheckItem>
            <CheckItem><strong>Courses & Tutorials:</strong> Teach skills or workflows online.</CheckItem>
            <CheckItem><strong>Affiliate Marketing:</strong> Recommend tools or products used in your projects.</CheckItem>
            <CheckItem><strong>Services:</strong> Offer consulting, design, or content creation using your AI-enhanced skillset.</CheckItem>
          </ul>
          <div className="mt-8 overflow-hidden rounded-lg border border-forest/10 bg-sand/55 shadow-sm">
            <div className="flex items-end gap-4 p-5">
              <div className="flex-1 rounded-md bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-ink/60">My Products</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["Ebook", "Course", "Templates"].map((item) => (
                    <div key={item} className="rounded bg-mist p-2 text-center">
                      <div className="mx-auto h-10 w-8 rounded bg-manuka/50" />
                      <p className="mt-2 text-[0.6rem] font-bold text-ink/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-24 w-14 rounded-md bg-ink p-1">
                <div className="h-full rounded bg-sand/80" />
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-8 rounded-lg border border-forest/10 bg-sand/45 p-6">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-sand">
            <Users size={27} strokeWidth={1.8} />
          </span>
          <h3 className="font-display text-xl font-bold text-ink">4. Practical Tips for Families</h3>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-5">
          {familyTips.map(([Icon, text]) => (
            <article key={text} className="border-forest/10 text-center md:border-r md:px-4 md:last:border-r-0">
              <Icon className="mx-auto text-manuka" size={32} />
              <p className="mt-3 text-xs font-semibold leading-5 text-ink/74">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 flex gap-3 border-t border-forest/10 pt-5 text-sm leading-6 text-ink/76">
          <ShieldCheck className="mt-0.5 shrink-0 text-manuka" size={18} />
          <p>
            By focusing this page on marketing, scaling, and monetization, families can see the full potential
            of their creative projects. It is not just about making content; it is about creating freedom,
            income, and sustainable growth while staying engaged with your family.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BuildingPublic() {
  const [activeId, setActiveId] = useState(getRequestedSection);
  const activeSection = useMemo(
    () => aiSections.find((section) => section.id === activeId),
    [activeId]
  );

  const freedomStats = [
    [Compass, "Location Independent", "Work from anywhere in the world."],
    [Sparkles, "Build & Create Faster", "AI helps us turn ideas into reality."],
    [CircleDollarSign, "Multiple Income Streams", "One idea can become many opportunities."],
    [Users, "More Time for Family", "Automate the busy work and reclaim your time."],
    [Heart, "Purpose Driven Projects", "We build things that matter to us."]
  ];

  const liveProjects = [
    ["StayDirect.nz", "Property management made simple.", "/project-staydirect-nz.png"],
    ["CatStays.app", "Connecting cat parents with trusted sitters.", "/project-catstays-app.png"],
    ["Fudi.nz", "Local food, local people, local connection.", "/project-fudi-nz.jpg"],
    ["GuidedHealing.nz", "Healing sessions and spiritual reflection.", "/project-guidedhealing-nz.png"],
    ["AbundantFreedom.online", "Strategies, tools and freedom resources.", "/project-abundantfreedom-online.png"]
  ];

  const toolStack = [
    ["ChatGPT", "AI assistant", "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128"],
    ["Midjourney", "Image generation", "https://www.google.com/s2/favicons?domain=midjourney.com&sz=128"],
    ["Runway", "AI video creation", "https://www.google.com/s2/favicons?domain=runwayml.com&sz=128"],
    ["Descript", "Audio and video editing", "https://www.google.com/s2/favicons?domain=descript.com&sz=128"],
    ["Replit", "Code and apps", "https://www.google.com/s2/favicons?domain=replit.com&sz=128", replitReferralUrl],
    ["Figma", "Design and prototyping", "https://www.google.com/s2/favicons?domain=figma.com&sz=128"],
    ["Make", "Automation", "https://www.google.com/s2/favicons?domain=make.com&sz=128"],
    ["Notion", "Notes and docs", "https://www.google.com/s2/favicons?domain=notion.so&sz=128"]
  ];

  const bookResources = [
    ["AI Superpowers", "Kai-Fu Lee", "https://covers.openlibrary.org/b/isbn/9781328546395-L.jpg"],
    ["The Age of AI", "Henry Kissinger, Eric Schmidt & Daniel Huttenlocher", "https://covers.openlibrary.org/b/isbn/9780316273800-L.jpg"],
    ["The Infinite Game", "Simon Sinek", "https://covers.openlibrary.org/b/isbn/9780735213500-L.jpg"],
    ["Build the Future You Want", "Reid Hoffman & Aria Finger", "https://covers.openlibrary.org/b/isbn/9780593239087-L.jpg"],
    ["The Singularity Is Nearer", "Ray Kurzweil", "https://covers.openlibrary.org/b/isbn/9780399562761-L.jpg"]
  ];

  const buildCards = [
    ["Websites & Platforms", "Build purpose-driven websites and platforms that serve your family, community, and business.", "/staydirect-website.png"],
    ["Dashboards & Automation", "Custom dashboards and smart systems that save time, reduce stress, and streamline operations.", "/staydirect-dashboard.png"],
    ["Marketplace & Tools", "Tools and marketplaces that connect people and bring value to everyday life.", "/staydirect-marketplace.png"]
  ];

  const guideResources = [
    [
      "Using AI Tools",
      "A practical quick-reference guide for creative AI, apps, dashboards, automation, and digital income.",
      "/ai-tools-guide.png",
      "/guides/ai-tools-quick-reference.pdf"
    ],
    [
      "Entrepreneurial Spirit",
      "A guide to spotting opportunities, creating value, and teaching real-world business skills through family projects.",
      "/entrepreneurial-spirit-guide.png",
      "/guides/entrepreneurial-spirit-quick-reference.pdf"
    ],
    [
      "Slow Living",
      "How automation, AI tools, and smarter systems can support a slower, more intentional family-first life.",
      "/slow-living-guide.png",
      "/guides/slow-living-quick-reference.pdf"
    ],
    [
      "Social Media Online Income",
      "A simple guide for using content, platforms, and repeatable systems to grow online income streams.",
      "/social-media-online-income-guide.png",
      "/guides/social-media-online-income-quick-reference.pdf"
    ]
  ];

  useEffect(() => {
    const syncActiveSection = () => setActiveId(getRequestedSection());
    syncActiveSection();
    window.addEventListener("hashchange", syncActiveSection);
    return () => window.removeEventListener("hashchange", syncActiveSection);
  }, []);

  const selectSection = (sectionId) => {
    setActiveId(sectionId);
    window.history.replaceState(
      null,
      "",
      `#/using-ai-tools?section=${sectionId}`
    );
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  const collapseSection = () => {
    setActiveId("");
    window.history.replaceState(null, "", "#/using-ai-tools");
    window.setTimeout(() => {
      document.getElementById("ai-guide")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  const scrollToProjects = (event) => {
    event.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="bg-mist">
      <section className="relative overflow-hidden bg-ink text-white">
        <img
          src="/home-family-portrait.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-68"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-ink/22" />
        <div className="container-page relative grid min-h-[520px] items-center gap-8 py-14 lg:grid-cols-[0.48fr_0.52fr]">
          <div>
            <p className="eyebrow text-manuka">Using AI Tools</p>
            <h1 className="mt-3 font-display text-5xl font-bold leading-[0.96] text-sand sm:text-6xl">
              Leverage AI.
              <span className="block text-manuka">Build freedom.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-sand/86">
              Create income, location freedom, and more time for what matters most: your family.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-sand/72">
              AI tools and automation help us create, build, and run online businesses from anywhere in the world.
              They save time, unlock creativity, and open doors to multiple income streams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" onClick={scrollToProjects} className="btn-primary bg-manuka text-ink hover:bg-sand">
                Explore All Projects
                <ArrowRight size={16} />
              </a>
              <a href="#/using-ai-tools#ai-guide" className="btn-secondary border-manuka/50 text-sand hover:bg-manuka hover:text-ink">
                How We Use AI
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-manuka/35 bg-ink/76 p-5 shadow-editorial backdrop-blur-md lg:ml-auto lg:max-w-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">AI gives us the freedom to:</p>
            <ul className="mt-5 space-y-3">
              {["Create from anywhere", "Work less, earn more", "Build income online", "Spend more time together", "Live life on our terms"].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-sand/88">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-manuka" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-manuka/20 bg-ink text-sand">
        <div className="container-page grid gap-4 py-5 md:grid-cols-2 xl:grid-cols-5">
          {freedomStats.map(([Icon, title, text]) => (
            <article key={title} className="flex gap-3 border-manuka/20 py-2 xl:border-r xl:pr-4 xl:last:border-r-0">
              <Icon className="shrink-0 text-manuka" size={25} strokeWidth={1.8} />
              <div>
                <h2 className="text-xs font-extrabold text-sand">{title}</h2>
                <p className="mt-1 text-xs leading-5 text-sand/66">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="ai-guide" className="container-page py-12">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-ink">
            How AI tools help us create freedom
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            One technology. Endless possibilities.
          </h1>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {aiSections.map(({ id, number, title, cardText, icon: Icon }) => {
            const isActive = activeSection?.id === id;
            return (
              <a
                key={id}
                href={`#/using-ai-tools?section=${id}`}
                onClick={(event) => {
                  event.preventDefault();
                  selectSection(id);
                }}
                className={`flex min-h-[285px] flex-col rounded-lg border bg-white/82 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${
                  isActive ? "border-manuka ring-1 ring-manuka/70" : "border-forest/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <Icon size={44} strokeWidth={1.6} className="shrink-0 text-ink" />
                  <div>
                    <p className="text-xs font-extrabold text-manuka">{number}</p>
                    <h2 className="mt-1 font-display text-lg font-bold leading-tight text-ink">{title}</h2>
                  </div>
                </div>
                <p className="mt-7 text-sm leading-6 text-ink/76">{cardText}</p>
                <span className="mx-auto mt-auto inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white">
                  {isActive ? "Viewing Details" : "Explore"}
                  <ArrowRight size={15} className="text-manuka" />
                </span>
              </a>
            );
          })}
        </div>

        {activeSection && (
          <>
            <section
              id={activeSection.id}
              className="mt-4 rounded-lg border border-manuka/70 bg-white/88 p-6 shadow-soft sm:p-8"
            >
              {activeSection.content}
            </section>
            <PillarDetailNavigation
              pillars={aiSections}
              activeId={activeSection.id}
              onSelect={selectSection}
              onCollapse={collapseSection}
              className="mt-6 pb-2"
              contained={false}
            />
          </>
        )}

        <div className="mt-6 flex items-center justify-center gap-3 text-sm font-semibold text-ink/68">
          <ShieldCheck className="text-manuka" size={18} />
          <span>Each step opens a detailed guide with tools, strategies, real examples and actionable steps.</span>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container-page grid gap-6 lg:grid-cols-[0.25fr_0.75fr] lg:items-center">
          <div>
            <p className="eyebrow text-manuka">Tools we use</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">Our go-to AI tools and platforms.</h2>
            <p className="mt-3 text-sm leading-6 text-ink/68">These tools help us create, automate, and scale our projects and businesses.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {toolStack.map(([title, text, logo, href]) => {
              const content = (
                <>
                  <img
                    src={logo}
                    alt={`${title} logo`}
                    className="mx-auto h-7 w-7 rounded-md object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <h3 className="mt-2 text-xs font-extrabold text-ink">{title}</h3>
                  <p className="mt-1 text-[0.68rem] leading-4 text-ink/60">{text}</p>
                </>
              );

              return href ? (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-forest/10 bg-mist p-3 text-center transition hover:-translate-y-0.5 hover:border-manuka/60 hover:shadow-sm"
                >
                  {content}
                </a>
              ) : (
                <article key={title} className="rounded-lg border border-forest/10 bg-mist p-3 text-center">
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-ink py-10 text-white">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
            <div>
              <p className="eyebrow text-manuka">Real projects. Real impact.</p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-sand">
                A few examples of what we have created with AI.
              </h2>
              <p className="mt-3 font-display text-xl italic text-manuka">Built with purpose.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-5">
              {liveProjects.map(([title, text, image]) => (
                <article key={title} className="overflow-hidden rounded-md border border-white/12 bg-white/8">
                  <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
                  <div className="p-3">
                    <h3 className="break-words text-[0.8rem] font-extrabold leading-tight text-white">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/68">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-build" className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="eyebrow text-manuka">What we build with AI</p>
            <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-ink">
              Tools, systems and content that create our freedom.
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink/72">
              We use AI to design, build, automate, and promote online businesses that generate income and impact.
              Every project starts with the goal of location freedom, financial freedom, and more time for family.
            </p>
            <a href="#projects" onClick={scrollToProjects} className="btn-light mt-7 border-manuka/50">
              Explore All Projects
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {buildCards.map(([title, text, image]) => (
              <article key={title} className="rounded-lg border border-forest/10 bg-white p-4 shadow-sm">
                <div className="h-36 rounded-md bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{text}</p>
                <ul className="mt-4 space-y-2">
                  <CheckItem>Plan and document the workflow.</CheckItem>
                  <CheckItem>Automate repeatable steps.</CheckItem>
                  <CheckItem>Launch, test and refine.</CheckItem>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-10 text-white">
        <div className="container-page grid gap-6 lg:grid-cols-[0.22fr_0.78fr] lg:items-center">
          <div>
            <p className="eyebrow text-manuka">Books & resources</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-sand">Keep learning. Keep growing.</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">Great books and resources that continue to expand our knowledge and perspective.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-5">
            {bookResources.map(([title, author, image]) => (
              <article key={title} className="rounded-lg border border-white/12 bg-white/8 p-3">
                <div className="flex h-40 items-center justify-center rounded-md bg-ink/24 p-2 shadow-md">
                  <img
                    src={image}
                    alt={`${title} book cover`}
                    className="h-full w-auto max-w-full rounded-sm object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="mt-3 text-sm font-extrabold text-white">{title}</h3>
                <p className="mt-1 text-xs text-white/60">{author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="bg-sand/34 py-12">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
            <div>
              <p className="eyebrow text-manuka">Guides</p>
              <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-ink">
                Practical guides for building with AI.
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink/72">
                These quick-reference guides support this section with practical tools, income ideas,
                workflows, and family-first systems you can return to as you build.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {guideResources.map(([title, text, image, pdf]) => (
                <article key={title} className="flex h-full flex-col rounded-lg border border-forest/10 bg-white p-4 shadow-sm">
                  <img
                    src={image}
                    alt={`${title} quick reference guide`}
                    className="h-44 w-full rounded-md object-cover object-top"
                    loading="lazy"
                  />
                  <h3 className="mt-4 font-display text-xl font-bold leading-tight text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/68">{text}</p>
                  <a href={pdf} download className="btn-light mx-auto mt-auto border-manuka/50">
                    Download Guide
                    <Download size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <img src="/pacific-family-route.png" alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-38" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/84 to-forest/65" />
        <div className="container-page relative grid gap-8 py-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-sand">Use technology. Create freedom. Live life on your terms.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-sand/76">
              We use AI tools to build a life of impact, income and adventure, together as a family.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#/contact" className="btn-primary bg-manuka text-ink hover:bg-sand">Join the Community</a>
              <a href="#ai-guide" className="btn-secondary border-manuka/55">Start With a Guide</a>
            </div>
          </div>
          <aside className="rounded-lg border border-manuka/35 bg-ink/72 p-5 backdrop-blur">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-manuka">What is next?</p>
            <ul className="mt-4 space-y-2">
              {["Pick one area that excites you", "Access our free guides", "Join the community", "Take action today"].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-sand/82">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-manuka" size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
