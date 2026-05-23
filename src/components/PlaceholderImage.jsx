import { Image, Sparkles } from "lucide-react";

const tones = {
  jungle: "from-forest via-fern to-[#1f6d54]",
  bamboo: "from-[#cabf8a] via-[#94a878] to-forest",
  coast: "from-[#2a6670] via-[#89b9ad] to-[#efd59d]",
  sunset: "from-[#263f3b] via-clay to-[#e7bd79]",
  sky: "from-[#8bbbd9] via-[#d9edf2] to-[#496a7d]",
  mountain: "from-[#244d48] via-[#8dae98] to-[#dce7df]",
  tools: "from-[#1b2f37] via-forest to-[#91bba5]",
  light: "from-[#f3dfc4] via-[#e6f2e9] to-[#7aa18b]",
  nz: "from-[#d8edf1] via-[#5d9484] to-[#163f38]",
  bali: "from-[#17372f] via-[#4f815e] to-[#d3a55b]",
  panama: "from-[#07433b] via-[#23677a] to-[#e0b766]"
};

export default function PlaceholderImage({
  tone = "jungle",
  label = "AI image placeholder",
  className = "",
  children
}) {
  return (
    <div
      className={`relative min-h-56 overflow-hidden rounded-lg bg-gradient-to-br ${tones[tone] || tones.jungle} ${className}`}
    >
      <div className="absolute inset-0 opacity-35">
        <div className="absolute left-6 top-6 h-28 w-28 rounded-full border border-white/40" />
        <div className="absolute -right-10 bottom-6 h-44 w-44 rounded-full border border-white/25" />
        <div className="absolute left-1/2 top-0 h-full w-px rotate-12 bg-white/30" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.32),transparent_28%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.18),transparent_34%)]" />
      <div className="relative flex h-full min-h-56 flex-col justify-between p-5 text-white">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/16 px-3 py-2 text-xs font-bold uppercase tracking-wide backdrop-blur">
          <Sparkles size={14} />
          AI Visual Slot
        </div>
        <div>
          <Image className="mb-3 opacity-85" size={28} />
          <p className="max-w-xs text-sm font-semibold text-white/90">{label}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
