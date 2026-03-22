"use client";

import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const segments = [
  {
    id: "gyms",
    tag: "Gym Owners",
    headline: "Run your gym smarter",
    color: "#4987d2",
    stat: { value: "500+", label: "Gyms live" },
    cta: "Start for free",
    perks: ["Member & billing automation", "Live analytics dashboard", "Class scheduling & staff"],
    graphic: (
      <svg viewBox="0 0 280 180" fill="none" className="h-full w-full">
        {/* Browser window */}
        <rect x="20" y="20" width="240" height="145" rx="10" fill="white" opacity="0.06" stroke="#4987d2" strokeWidth="1.2" />
        <rect x="20" y="20" width="240" height="26" rx="10" fill="#4987d2" opacity="0.12" />
        <circle cx="36" cy="33" r="4.5" fill="#4987d2" opacity="0.5" />
        <circle cx="52" cy="33" r="4.5" fill="#4987d2" opacity="0.3" />
        <circle cx="68" cy="33" r="4.5" fill="#4987d2" opacity="0.2" />
        <rect x="90" y="27" width="110" height="12" rx="6" fill="#4987d2" opacity="0.1" />

        {/* Sidebar */}
        <rect x="20" y="46" width="38" height="119" fill="#4987d2" opacity="0.08" />
        {[58,74,90,106].map((y,i) => (
          <rect key={i} x="27" y={y} width="24" height="8" rx="4" fill="#4987d2" opacity={i===0?0.55:0.2} />
        ))}
        <circle cx="39" cy="152" r="9" fill="#4987d2" opacity="0.25" />

        {/* KPI cards */}
        {[["342", "Members", 68],["$42k","Revenue",120],["94%","Retention",172]].map(([val,lbl,x],i) => (
          <g key={i}>
            <rect x={x as number} y="54" width="40" height="36" rx="6" fill="#4987d2" opacity="0.1" stroke="#4987d2" strokeWidth="0.8" />
            <text x={(x as number)+20} y="70" textAnchor="middle" fill="#4987d2" fontSize="11" fontWeight="bold" opacity="0.9">{val}</text>
            <text x={(x as number)+20} y="81" textAnchor="middle" fill="#4987d2" fontSize="7" opacity="0.5">{lbl}</text>
          </g>
        ))}

        {/* Bar chart */}
        {[38,52,45,64,57,72,60,84,74,90].map((h,i) => (
          <rect key={i} x={68+i*17} y={155-h} width="12" height={h} rx="3"
            fill="#4987d2" opacity={i===9?0.9:0.18+i*0.07} />
        ))}

        {/* Trend line */}
        <path d="M68 130 85 118 102 120 119 108 136 105 153 95 170 90 187 82 204 78 221 68"
          stroke="#4987d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

        {/* Check badge */}
        <circle cx="234" cy="72" r="18" fill="#4987d2" opacity="0.9" />
        <path d="M225 72l6 6 11-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "members",
    tag: "Members",
    headline: "Train with a plan that works",
    color: "#7c3aed",
    stat: { value: "50k+", label: "Active members" },
    cta: "Join for free",
    perks: ["AI personalised workouts", "Progress tracking & PRs", "Coach chat & recovery"],
    graphic: (
      <svg viewBox="0 0 280 180" fill="none" className="h-full w-full">
        {/* Phone */}
        <rect x="90" y="10" width="100" height="162" rx="14" fill="white" opacity="0.06" stroke="#7c3aed" strokeWidth="1.5" />
        <rect x="98" y="22" width="84" height="138" rx="8" fill="#7c3aed" opacity="0.05" />

        {/* Today's plan header */}
        <text x="140" y="38" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="bold" opacity="0.8">Today · Push A</text>

        {/* Dumbbell icon */}
        <rect x="102" y="46" width="8" height="18" rx="4" fill="#7c3aed" opacity="0.3" stroke="#7c3aed" strokeWidth="0.8" />
        <rect x="110" y="51" width="60" height="8" rx="3" fill="#7c3aed" opacity="0.55" />
        <rect x="170" y="46" width="8" height="18" rx="4" fill="#7c3aed" opacity="0.3" stroke="#7c3aed" strokeWidth="0.8" />

        {/* Heart rate */}
        <path d="M100 80h14l4-10 6 20 5-12 4 6h14 14 8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />

        {/* Progress bars */}
        {[["Strength","#7c3aed",85],["Endurance","#a78bfa",68],["Recovery","#c4b5fd",74]].map(([lbl,clr,pct],i) => (
          <g key={lbl as string}>
            <text x="102" y={106+i*18} fill="#7c3aed" fontSize="7" opacity="0.5">{lbl}</text>
            <rect x="102" y={109+i*18} width="76" height="5" rx="2.5" fill="#7c3aed" opacity="0.1" />
            <rect x="102" y={109+i*18} width={76*(pct as number)/100} height="5" rx="2.5" fill={clr as string} opacity="0.7" />
          </g>
        ))}

        {/* Streak badge */}
        <rect x="102" y="152" width="76" height="18" rx="9" fill="#7c3aed" opacity="0.85" />
        <text x="140" y="164" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">🔥 14-day streak</text>

        {/* Floating dumbbell left */}
        <rect x="18" y="68" width="10" height="28" rx="5" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" strokeWidth="1" />
        <rect x="28" y="76" width="36" height="12" rx="4" fill="#7c3aed" opacity="0.35" />
        <rect x="64" y="68" width="10" height="28" rx="5" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" strokeWidth="1" />

        {/* Star badge right */}
        <circle cx="236" cy="80" r="22" fill="#7c3aed" opacity="0.12" stroke="#7c3aed" strokeWidth="1" />
        <path d="M236 62l3.5 9h9.5l-7.5 5.5 2.5 9.5-8-5.5-8 5.5 2.5-9.5-7.5-5.5h9.5z"
          fill="#7c3aed" opacity="0.7" stroke="#7c3aed" strokeWidth="0.5" />
        <text x="236" y="116" textAnchor="middle" fill="#7c3aed" fontSize="7.5" fontWeight="bold" opacity="0.7">PR</text>
      </svg>
    ),
  },
  {
    id: "community",
    tag: "Communities",
    headline: "Build culture. Earn together.",
    color: "#059669",
    stat: { value: "120k+", label: "Community posts" },
    cta: "Build your community",
    perks: ["Challenges & leaderboards", "Social feed & events", "Creator monetisation"],
    graphic: (
      <svg viewBox="0 0 280 180" fill="none" className="h-full w-full">
        {/* Central hub */}
        <circle cx="140" cy="90" r="30" fill="#059669" opacity="0.12" stroke="#059669" strokeWidth="1.5" />
        <text x="140" y="86" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold" opacity="0.9">FC</text>
        <text x="140" y="98" textAnchor="middle" fill="#059669" fontSize="7" opacity="0.6">Community</text>

        {/* Member nodes */}
        {[
          [60,  40, "A", 0.9],
          [220, 40, "P", 0.7],
          [30,  120,"M", 0.6],
          [250, 120,"J", 0.8],
          [90,  160,"S", 0.5],
          [190, 160,"K", 0.7],
        ].map(([x,y,lbl,op]) => (
          <g key={lbl as string}>
            <line x1={140} y1={90} x2={x as number} y2={y as number} stroke="#059669" strokeWidth="1" opacity="0.15" strokeDasharray="4 3" />
            <circle cx={x as number} cy={y as number} r="18" fill="#059669" opacity={(op as number)*0.12} stroke="#059669" strokeWidth="1" />
            <text x={x as number} y={(y as number)+4} textAnchor="middle" fill="#059669" fontSize="9" fontWeight="bold" opacity={(op as number)*0.9}>{lbl}</text>
          </g>
        ))}

        {/* Trophy top-right */}
        <rect x="200" y="18" width="60" height="44" rx="8" fill="#059669" opacity="0.1" stroke="#059669" strokeWidth="0.8" />
        <text x="230" y="34" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="bold" opacity="0.8">🏆 Challenge</text>
        <text x="230" y="46" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="bold" opacity="0.9">14 days left</text>
        <rect x="208" y="52" width="44" height="5" rx="2.5" fill="#059669" opacity="0.15" />
        <rect x="208" y="52" width="28" height="5" rx="2.5" fill="#059669" opacity="0.65" />

        {/* Earnings card bottom-left */}
        <rect x="18" y="130" width="76" height="38" rx="8" fill="#059669" opacity="0.9" />
        <text x="56" y="146" textAnchor="middle" fill="white" fontSize="7.5" opacity="0.85">This month</text>
        <text x="56" y="160" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$6,300</text>

        {/* Live dot + feed snippet */}
        <rect x="200" y="140" width="64" height="26" rx="6" fill="#059669" opacity="0.1" stroke="#059669" strokeWidth="0.8" />
        <circle cx="212" cy="153" r="4" fill="#22c55e" opacity="0.9" />
        <text x="222" y="150" fill="#059669" fontSize="6.5" fontWeight="bold" opacity="0.8">128 posts</text>
        <text x="222" y="160" fill="#059669" fontSize="6" opacity="0.5">today · live</text>
      </svg>
    ),
  },
];

export default function ForWho() {
  return (
    <section
      id="for-who"
      className="relative bg-slate-950 overflow-hidden"
    >
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(73,135,210,0.12),transparent)]" />
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
            One platform · Three audiences
          </span>
          <h2
            className={`${brandFont.className} text-4xl sm:text-5xl tracking-tight text-white max-w-3xl`}
          >
            Built for every corner of the{" "}
            <span className="text-[#4987d2]">fitness world</span>
          </h2>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {segments.map((seg, idx) => (
            <div
              key={seg.id}
              className={`group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                idx === 1 ? "lg:-translate-y-3" : ""
              }`}
              style={{
                border: `1px solid ${seg.color}25`,
                boxShadow: idx === 1
                  ? `0 24px 64px ${seg.color}20`
                  : `0 4px 24px ${seg.color}12`,
              }}
            >
              {/* Graphic area — the star of the card */}
              <div
                className="relative h-52 w-full overflow-hidden"
                style={{ background: `linear-gradient(160deg, ${seg.color}15 0%, ${seg.color}05 100%)` }}
              >
                {/* Audience tag — overlaid top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                    style={{ background: `${seg.color}25`, color: seg.color }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: seg.color }} />
                    {seg.tag}
                  </span>
                </div>

                {/* SVG graphic */}
                <div className="absolute inset-0 p-4 pt-10">
                  {seg.graphic}
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 bg-slate-900 px-6 py-5 gap-4">
                {/* Headline */}
                <h3 className={`${brandFont.className} text-lg text-white leading-snug`}>
                  {seg.headline}
                </h3>

                {/* 3 short perks */}
                <ul className="space-y-2">
                  {seg.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-slate-400">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: seg.color }}
                      />
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${seg.color}25, transparent)` }} />

                {/* Stat + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold" style={{ color: seg.color }}>
                      {seg.stat.value}
                    </p>
                    <p className="text-xs text-slate-600">{seg.stat.label}</p>
                  </div>
                  <a
                    href="#get-started"
                    className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: seg.color }}
                  >
                    {seg.cta}
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
