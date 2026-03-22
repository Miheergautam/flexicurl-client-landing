"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const journeys = [
  {
    id: "gyms",
    audience: "Gym Owners",
    tagline: "Full gym command centre",
    color: "#4987d2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="2" y="7" width="4" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="18" y="7" width="4" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    steps: [
      {
        n: "01",
        title: "Set up your gym in minutes",
        detail: "Import members, configure pricing tiers, set class schedules, and assign staff. Live in under 10 minutes.",
        chip: "10 min setup",
        visual: (color: string) => (
          <svg viewBox="0 0 200 120" fill="none" className="h-full w-full">
            {/* Dashboard window */}
            <rect x="20" y="10" width="160" height="100" rx="8" fill="white" opacity="0.05" stroke={color} strokeWidth="1" />
            <rect x="20" y="10" width="160" height="22" rx="8" fill={color} opacity="0.12" />
            <circle cx="33" cy="21" r="4" fill={color} opacity="0.5" />
            <circle cx="46" cy="21" r="4" fill={color} opacity="0.3" />
            <circle cx="59" cy="21" r="4" fill={color} opacity="0.2" />
            {/* Sidebar */}
            <rect x="20" y="32" width="32" height="78" rx="0" fill={color} opacity="0.06" />
            {[42, 56, 70, 84].map((y, i) => (
              <rect key={i} x="26" y={y} width="20" height="6" rx="3" fill={color} opacity={i === 0 ? 0.5 : 0.2} />
            ))}
            {/* KPI cards */}
            <rect x="62" y="36" width="36" height="26" rx="4" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
            <rect x="103" y="36" width="36" height="26" rx="4" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
            <rect x="144" y="36" width="28" height="26" rx="4" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
            <text x="80" y="52" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" opacity="0.9">342</text>
            <text x="121" y="52" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" opacity="0.9">$42k</text>
            <text x="158" y="52" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" opacity="0.9">94%</text>
            {/* Bar chart */}
            {[50, 65, 55, 75, 60, 80, 70, 90].map((h, i) => (
              <rect key={i} x={62 + i * 14} y={106 - h * 0.35} width="10" height={h * 0.35} rx="2"
                fill={color} opacity={i === 7 ? 0.9 : 0.25 + i * 0.08} />
            ))}
            {/* Check badge */}
            <circle cx="172" cy="90" r="14" fill={color} opacity="0.9" />
            <path d="M165 90l4.5 4.5 8-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        n: "02",
        title: "Automate billing & check-ins",
        detail: "Smart billing handles renewals, retries, and reminders. Members check in via QR — no manual logs ever.",
        chip: "Zero admin",
        visual: (color: string) => (
          <svg viewBox="0 0 200 120" fill="none" className="h-full w-full">
            {/* Phone */}
            <rect x="72" y="8" width="56" height="100" rx="8" fill="white" opacity="0.05" stroke={color} strokeWidth="1.2" />
            <rect x="78" y="18" width="44" height="60" rx="4" fill={color} opacity="0.06" />
            {/* QR code */}
            {[0,1,2].map(r => [0,1,2].map(c => (
              <rect key={`${r}-${c}`} x={82 + c * 12} y={22 + r * 12} width="9" height="9" rx="2"
                fill={color} opacity={(r === 0 && c === 0) || (r === 0 && c === 2) || (r === 2 && c === 0) ? 0.7 : 0.25} />
            )))}
            <text x="100" y="90" textAnchor="middle" fill={color} fontSize="7" opacity="0.6">Scan to check in</text>
            {/* Success ring */}
            <circle cx="100" cy="100" r="8" fill={color} opacity="0.15" stroke={color} strokeWidth="1" />
            <path d="M96 100l2.5 2.5 5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Floating cards */}
            <rect x="8" y="30" width="56" height="28" rx="6" fill={color} opacity="0.08" stroke={color} strokeWidth="0.8" />
            <text x="36" y="42" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" opacity="0.8">Auto-billing</text>
            <text x="36" y="52" textAnchor="middle" fill={color} fontSize="6" opacity="0.5">Smart retries on</text>
            <text x="36" y="59" textAnchor="middle" fill={color} fontSize="6" opacity="0.5">failed payments</text>
            <rect x="136" y="30" width="56" height="28" rx="6" fill={color} opacity="0.08" stroke={color} strokeWidth="0.8" />
            <text x="164" y="42" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" opacity="0.8">34 check-ins</text>
            <text x="164" y="52" textAnchor="middle" fill={color} fontSize="6" opacity="0.5">today · live</text>
            <circle cx="174" cy="52" r="3" fill="#22c55e" opacity="0.8" />
          </svg>
        ),
      },
      {
        n: "03",
        title: "Grow with real-time insights",
        detail: "Track revenue, attendance trends, and churn signals on one dashboard. Make confident decisions daily.",
        chip: "+18% avg. revenue",
        visual: (color: string) => (
          <svg viewBox="0 0 200 120" fill="none" className="h-full w-full">
            <path d="M20 100V20" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <path d="M20 100h170" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            {/* Area */}
            <path d="M24 90 L50 74 L76 68 L102 52 L128 42 L154 28 L180 16 L180 100 L24 100Z" fill={color} opacity="0.08" />
            {/* Line */}
            <path d="M24 90 L50 74 L76 68 L102 52 L128 42 L154 28 L180 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Points */}
            {[[24,90],[50,74],[76,68],[102,52],[128,42],[154,28],[180,16]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="white" stroke={color} strokeWidth="2" />
            ))}
            {/* Tooltip */}
            <rect x="140" y="6" width="48" height="20" rx="4" fill={color} opacity="0.9" />
            <text x="164" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">+22% ↑</text>
            <path d="M164 26l-4-6h8z" fill={color} opacity="0.9" />
            {/* Labels */}
            {["Jan","Apr","Jul","Oct"].map((l, i) => (
              <text key={l} x={24 + i * 52} y="112" textAnchor="middle" fill={color} fontSize="7" opacity="0.4">{l}</text>
            ))}
          </svg>
        ),
      },
    ],
  },
  {
    id: "members",
    audience: "Members",
    tagline: "Your AI pocket coach",
    color: "#7c3aed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8h3l2-4 2 8 2-5 1 3h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    steps: [
      {
        n: "01",
        title: "Tell us your goals",
        detail: "Onboarding takes 3 minutes. Share your goal, schedule, and equipment — AI builds your first plan instantly.",
        chip: "3 min onboarding",
        visual: (color: string) => (
          <svg viewBox="0 0 200 120" fill="none" className="h-full w-full">
            {/* Chat bubbles — onboarding Q&A */}
            <rect x="20" y="12" width="100" height="22" rx="10" fill={color} opacity="0.12" stroke={color} strokeWidth="0.8" />
            <text x="70" y="27" textAnchor="middle" fill={color} fontSize="7.5" opacity="0.9">What&apos;s your main goal?</text>
            {/* Options */}
            {["Lose weight", "Build muscle", "Improve fitness"].map((opt, i) => (
              <g key={opt}>
                <rect x={20 + i * 58} y="44" width="52" height="18" rx="9" fill={i === 1 ? color : "none"}
                  stroke={color} strokeWidth="0.8" opacity={i === 1 ? 0.9 : 0.3} />
                <text x={46 + i * 58} y="56" textAnchor="middle" fill={i === 1 ? "white" : color}
                  fontSize="6.5" opacity={i === 1 ? 1 : 0.5}>{opt}</text>
              </g>
            ))}
            {/* AI response */}
            <rect x="60" y="72" width="120" height="30" rx="10" fill={color} opacity="0.15" stroke={color} strokeWidth="0.8" />
            <text x="120" y="84" textAnchor="middle" fill={color} fontSize="7" opacity="0.9">✨ Your plan is ready!</text>
            <text x="120" y="95" textAnchor="middle" fill={color} fontSize="6.5" opacity="0.6">Push A · 6 sets · 45 min</text>
            {/* Sparkle */}
            <circle cx="30" cy="88" r="12" fill={color} opacity="0.08" stroke={color} strokeWidth="0.8" />
            <path d="M30 82v4m0 4v2M26 88h2m4 0h2" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          </svg>
        ),
      },
      {
        n: "02",
        title: "Follow your personalised plan",
        detail: "Log sessions, track reps and weights, get form feedback. Your plan adapts week by week as you improve.",
        chip: "AI-tuned plans",
        visual: (color: string) => (
          <svg viewBox="0 0 200 120" fill="none" className="h-full w-full">
            {/* Phone frame */}
            <rect x="70" y="6" width="60" height="108" rx="8" fill="white" opacity="0.05" stroke={color} strokeWidth="1.2" />
            <rect x="76" y="16" width="48" height="78" rx="4" fill={color} opacity="0.05" />
            {/* Header */}
            <text x="100" y="28" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" opacity="0.8">Push A · Set 3/6</text>
            {/* Dumbbell */}
            <rect x="78" y="36" width="6" height="14" rx="3" fill={color} opacity="0.3" stroke={color} strokeWidth="0.8" />
            <rect x="84" y="40" width="32" height="6" rx="2" fill={color} opacity="0.5" />
            <rect x="116" y="36" width="6" height="14" rx="3" fill={color} opacity="0.3" stroke={color} strokeWidth="0.8" />
            {/* Log row */}
            <text x="100" y="62" textAnchor="middle" fill={color} fontSize="7.5" fontWeight="bold" opacity="0.9">80 kg × 8 reps</text>
            {/* Progress bars */}
            {[100, 80, 65].map((w, i) => (
              <g key={i}>
                <rect x="78" y={72 + i * 10} width="44" height="5" rx="2.5" fill={color} opacity="0.1" />
                <rect x="78" y={72 + i * 10} width={w * 0.44} height="5" rx="2.5" fill={color} opacity="0.6" />
              </g>
            ))}
            {/* Floating check */}
            <circle cx="30" cy="60" r="16" fill={color} opacity="0.1" stroke={color} strokeWidth="1" />
            <path d="M23 60l5 5 9-10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            {/* Streak */}
            <rect x="144" y="44" width="42" height="30" rx="6" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
            <text x="165" y="57" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" opacity="0.9">🔥 14 day</text>
            <text x="165" y="67" textAnchor="middle" fill={color} fontSize="6" opacity="0.5">streak</text>
          </svg>
        ),
      },
      {
        n: "03",
        title: "See your transformation",
        detail: "Progress photos, measurement charts, and milestone badges show how far you've come — and what's next.",
        chip: "98% completion",
        visual: (color: string) => (
          <svg viewBox="0 0 200 120" fill="none" className="h-full w-full">
            {/* Before / After silhouettes */}
            <rect x="18" y="20" width="52" height="76" rx="6" fill={color} opacity="0.06" stroke={color} strokeWidth="0.8" strokeDasharray="3 2" />
            <text x="44" y="108" textAnchor="middle" fill={color} fontSize="7" opacity="0.4">Week 1</text>
            <rect x="80" y="20" width="52" height="76" rx="6" fill={color} opacity="0.06" stroke={color} strokeWidth="0.8" strokeDasharray="3 2" />
            <text x="106" y="108" textAnchor="middle" fill={color} fontSize="7" opacity="0.4">Week 12</text>
            {/* Arrow */}
            <path d="M72 58h6m-2-3l4 3-4 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            {/* Stats */}
            <rect x="142" y="18" width="50" height="22" rx="5" fill={color} opacity="0.12" stroke={color} strokeWidth="0.8" />
            <text x="167" y="29" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" opacity="0.9">−8 kg</text>
            <text x="167" y="36" textAnchor="middle" fill={color} fontSize="6" opacity="0.5">body weight</text>
            <rect x="142" y="46" width="50" height="22" rx="5" fill={color} opacity="0.12" stroke={color} strokeWidth="0.8" />
            <text x="167" y="57" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" opacity="0.9">+12 kg</text>
            <text x="167" y="64" textAnchor="middle" fill={color} fontSize="6" opacity="0.5">bench press</text>
            {/* Trophy badge */}
            <circle cx="167" cy="90" r="16" fill={color} opacity="0.9" />
            <path d="M160 86h14M163 86v5a4 4 0 0 0 8 0v-5M161 83h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "community",
    audience: "Communities",
    tagline: "Challenges, events & earnings",
    color: "#059669",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 20c0-4 2.686-7 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 14c2.761 0 5 2.239 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 13c3.314 0 6 2.686 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    steps: [
      {
        n: "01",
        title: "Launch your community",
        detail: "Create a group, invite members, and post your first challenge in minutes. Public or private — your choice.",
        chip: "Free to start",
        visual: (color: string) => (
          <svg viewBox="0 0 200 120" fill="none" className="h-full w-full">
            {/* Community network */}
            {[[100,30],[40,70],[100,90],[160,70],[60,50],[140,50]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r={i === 0 ? 18 : 12} fill={color} opacity={i === 0 ? 0.15 : 0.08}
                stroke={color} strokeWidth={i === 0 ? 1.5 : 0.8} />
            ))}
            {/* Connecting lines */}
            {[[100,30,40,70],[100,30,160,70],[100,30,60,50],[100,30,140,50],[40,70,100,90],[160,70,100,90]].map(([x1,y1,x2,y2],i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" opacity="0.2" strokeDasharray="3 2" />
            ))}
            {/* Center logo */}
            <text x="100" y="34" textAnchor="middle" fill={color} fontSize="9" fontWeight="bold" opacity="0.9">FC</text>
            {/* Member initials */}
            {[["A",40,70],["P",160,70],["M",60,50],["J",140,50]].map(([l,x,y]) => (
              <text key={l as string} x={x as number} y={(y as number)+4} textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" opacity="0.7">{l}</text>
            ))}
            {/* "+ invite" badge */}
            <rect x="76" y="82" width="48" height="18" rx="9" fill={color} opacity="0.9" />
            <text x="100" y="94" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">+ Invite friends</text>
          </svg>
        ),
      },
      {
        n: "02",
        title: "Run challenges & events",
        detail: "Monthly challenges, group workouts, and RSVP events drive consistent engagement and accountability.",
        chip: "3× more engaged",
        visual: (color: string) => (
          <svg viewBox="0 0 200 120" fill="none" className="h-full w-full">
            {/* Leaderboard */}
            <rect x="20" y="10" width="80" height="98" rx="6" fill={color} opacity="0.05" stroke={color} strokeWidth="0.8" />
            <text x="60" y="25" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" opacity="0.8">🏆 Top Athletes</text>
            {[["1st","Alex","2,450"],["2nd","Priya","2,180"],["3rd","Marcus","1,960"],["4th","Sara","1,740"]].map(([pos,name,pts],i) => (
              <g key={name as string}>
                <rect x="26" y={32 + i * 18} width="68" height="14" rx="3" fill={color} opacity={i === 0 ? 0.2 : 0.06} />
                <text x="32" y={42 + i * 18} fill={color} fontSize="6.5" fontWeight="bold" opacity={i === 0 ? 0.9 : 0.5}>{pos}</text>
                <text x="46" y={42 + i * 18} fill={color} fontSize="6.5" opacity={i === 0 ? 0.8 : 0.4}>{name}</text>
                <text x="85" y={42 + i * 18} textAnchor="end" fill={color} fontSize="6" fontWeight="bold" opacity={i === 0 ? 0.8 : 0.4}>{pts}</text>
              </g>
            ))}
            {/* Progress bar */}
            <text x="60" y="110" textAnchor="middle" fill={color} fontSize="6" opacity="0.4">14 days left</text>
            <rect x="26" y="102" width="68" height="4" rx="2" fill={color} opacity="0.1" />
            <rect x="26" y="102" width="40" height="4" rx="2" fill={color} opacity="0.6" />
            {/* Event card */}
            <rect x="114" y="10" width="72" height="50" rx="6" fill={color} opacity="0.08" stroke={color} strokeWidth="0.8" />
            <text x="150" y="25" textAnchor="middle" fill={color} fontSize="7.5" fontWeight="bold" opacity="0.9">Saturday Run</text>
            <text x="150" y="36" textAnchor="middle" fill={color} fontSize="6.5" opacity="0.6">6:30am · 5km</text>
            <rect x="122" y="44" width="56" height="12" rx="6" fill={color} opacity="0.8" />
            <text x="150" y="53" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="bold">RSVP · 24 going</text>
            {/* Feed post */}
            <rect x="114" y="68" width="72" height="40" rx="6" fill={color} opacity="0.06" stroke={color} strokeWidth="0.8" />
            <circle cx="126" cy="82" r="7" fill={color} opacity="0.2" />
            <text x="144" y="80" fill={color} fontSize="6.5" fontWeight="bold" opacity="0.8">Alex K.</text>
            <text x="144" y="89" fill={color} fontSize="6" opacity="0.5">New PR 🎉 105kg</text>
            <text x="122" y="103" fill={color} fontSize="6" opacity="0.4">❤️ 48   💬 12</text>
          </svg>
        ),
      },
      {
        n: "03",
        title: "Earn from your audience",
        detail: "Tip jars, paid challenges, and exclusive content drops let you monetise your community at any size.",
        chip: "$6.3k avg/month",
        visual: (color: string) => (
          <svg viewBox="0 0 200 120" fill="none" className="h-full w-full">
            {/* Revenue chart */}
            <path d="M20 100V20" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <path d="M20 100h90" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            {[20,36,28,48,40,62,55,78].map((h, i) => (
              <rect key={i} x={24 + i * 11} y={100 - h} width="8" height={h} rx="2"
                fill={color} opacity={i === 7 ? 0.9 : 0.2 + i * 0.09} />
            ))}
            <text x="55" y="112" textAnchor="middle" fill={color} fontSize="6" opacity="0.4">Monthly earnings</text>
            {/* Earning cards */}
            <rect x="120" y="10" width="68" height="28" rx="6" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
            <text x="154" y="22" textAnchor="middle" fill={color} fontSize="7" opacity="0.6">Tip jar</text>
            <text x="154" y="32" textAnchor="middle" fill={color} fontSize="11" fontWeight="bold" opacity="0.9">$1,240</text>
            <rect x="120" y="44" width="68" height="28" rx="6" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
            <text x="154" y="56" textAnchor="middle" fill={color} fontSize="7" opacity="0.6">Paid challenges</text>
            <text x="154" y="66" textAnchor="middle" fill={color} fontSize="11" fontWeight="bold" opacity="0.9">$3,800</text>
            <rect x="120" y="78" width="68" height="28" rx="6" fill={color} opacity="0.9" />
            <text x="154" y="90" textAnchor="middle" fill="white" fontSize="7" opacity="0.8">Total this month</text>
            <text x="154" y="101" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">$6,300</text>
          </svg>
        ),
      },
    ],
  },
];

export default function HowItWorks() {
  const [activeId, setActiveId] = useState("gyms");
  const [activeStep, setActiveStep] = useState(0);
  const current = journeys.find((j) => j.id === activeId)!;

  const handleAudienceChange = (id: string) => {
    setActiveId(id);
    setActiveStep(0);
  };

  return (
    <section
      id="how-it-works"
      className="relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#4987d2_0%,_transparent_65%)] opacity-[0.03] dark:opacity-[0.07]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#4987d2]/10 dark:bg-[#4987d2]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff]">
            How it works
          </span>
          <h2
            className={`${brandFont.className} text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white max-w-3xl`}
          >
            From signup to{" "}
            <span className="text-[#4987d2]">results</span> in three steps
          </h2>
          <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
            Pick your journey — each audience has its own path to success.
          </p>
        </div>

        {/* Mobile: horizontal tab row */}
        <div className="mb-8 flex lg:hidden gap-2 overflow-x-auto pb-1">
          {journeys.map((j) => (
            <button
              key={j.id}
              onClick={() => handleAudienceChange(j.id)}
              className="flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-200"
              style={
                activeId === j.id
                  ? { background: j.color, color: "white", boxShadow: `0 4px 14px ${j.color}40` }
                  : { background: "#f8fbff", color: "#64748b" }
              }
            >
              <span style={{ color: activeId === j.id ? "white" : j.color }}>{j.icon}</span>
              {j.audience}
            </button>
          ))}
        </div>

        {/* Desktop: sidebar + content */}
        <div className="flex gap-6 lg:gap-10">
          {/* ── SIDEBAR ── */}
          <div className="hidden lg:flex flex-col gap-3 w-64 shrink-0">
            {journeys.map((j) => {
              const isActive = activeId === j.id;
              return (
                <button
                  key={j.id}
                  onClick={() => handleAudienceChange(j.id)}
                  className="group relative flex flex-col items-start gap-2 rounded-2xl p-5 text-left transition-all duration-200 overflow-hidden"
                  style={{
                    background: isActive ? `${j.color}12` : "transparent",
                    border: `1.5px solid ${isActive ? j.color + "40" : "transparent"}`,
                  }}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
                      style={{ background: j.color }}
                    />
                  )}

                  {/* Icon + label */}
                  <div className="flex items-center gap-2.5 pl-1">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200"
                      style={{
                        background: isActive ? j.color : `${j.color}15`,
                        color: isActive ? "white" : j.color,
                      }}
                    >
                      {j.icon}
                    </span>
                    <div>
                      <p
                        className="text-sm font-semibold leading-tight"
                        style={{ color: isActive ? j.color : "#64748b" }}
                      >
                        {j.audience}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 leading-tight mt-0.5">
                        {j.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Step progress dots (only when active) */}
                  {isActive && (
                    <div className="flex items-center gap-1.5 pl-1">
                      {current.steps.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setActiveStep(i); }}
                          className="rounded-full transition-all duration-200"
                          style={{
                            width: activeStep === i ? "20px" : "6px",
                            height: "6px",
                            background: activeStep === i ? j.color : `${j.color}40`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* ── CONTENT AREA ── */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {/* On desktop show vertical timeline, on mobile/tablet show all 3 as grid */}
              <div className="hidden lg:flex flex-col gap-0">
                {current.steps.map((step, i) => {
                  const isStepActive = activeStep === i;
                  return (
                    <button
                      key={step.n}
                      onClick={() => setActiveStep(i)}
                      className="group relative flex gap-5 text-left"
                    >
                      {/* Timeline spine */}
                      <div className="flex flex-col items-center gap-0 shrink-0">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold transition-all duration-200"
                          style={{
                            background: isStepActive ? current.color : `${current.color}15`,
                            color: isStepActive ? "white" : current.color,
                            boxShadow: isStepActive ? `0 4px 16px ${current.color}40` : "none",
                          }}
                        >
                          {step.n}
                        </div>
                        {i < current.steps.length - 1 && (
                          <div
                            className="w-[2px] flex-1 my-1 rounded-full min-h-[28px]"
                            style={{ background: `${current.color}20` }}
                          />
                        )}
                      </div>

                      {/* Step content */}
                      <div
                        className="flex-1 mb-4 rounded-2xl transition-all duration-200 overflow-hidden"
                        style={{
                          background: isStepActive ? `${current.color}07` : "transparent",
                          border: `1px solid ${isStepActive ? current.color + "20" : "transparent"}`,
                        }}
                      >
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3
                                className="text-base font-semibold leading-snug mb-1.5 transition-colors duration-200"
                                style={{ color: isStepActive ? current.color : "#0f172a" }}
                              >
                                {step.title}
                              </h3>
                              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                {step.detail}
                              </p>
                            </div>
                            <span
                              className="shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold whitespace-nowrap"
                              style={{
                                background: `${current.color}15`,
                                color: current.color,
                              }}
                            >
                              {step.chip}
                            </span>
                          </div>

                          {/* Visual — expands when active */}
                          <div
                            className="overflow-hidden transition-all duration-500"
                            style={{ maxHeight: isStepActive ? "160px" : "0px", marginTop: isStepActive ? "16px" : "0px" }}
                          >
                            <div
                              className="h-36 w-full rounded-xl px-4 py-3"
                              style={{ background: `${current.color}06` }}
                            >
                              {step.visual(current.color)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Mobile/tablet: all steps as cards */}
              <div className="lg:hidden contents">
                {current.steps.map((step, i) => (
                  <div
                    key={step.n}
                    className="flex flex-col rounded-2xl overflow-hidden"
                    style={{ border: `1px solid ${current.color}20` }}
                  >
                    <div
                      className="h-32 w-full px-4 pt-4"
                      style={{ background: `${current.color}07` }}
                    >
                      {step.visual(current.color)}
                    </div>
                    <div className="p-5 bg-white dark:bg-slate-900 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white"
                          style={{ background: current.color }}
                        >
                          {step.n}
                        </span>
                        <span
                          className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                          style={{ background: `${current.color}15`, color: current.color }}
                        >
                          {step.chip}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
