"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

type Feature = {
  label: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: React.ReactNode;
};

type Tab = {
  id: string;
  label: string;
  color: string;
  features: Feature[];
};

const tabs: Tab[] = [
  {
    id: "gyms",
    label: "Gyms",
    color: "#4987d2",
    features: [
      {
        label: "Member Management",
        description:
          "Centralise profiles, waivers, check-ins, and communication. See every member at a glance.",
        stat: "2,400+",
        statLabel: "Members managed",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <circle cx="12" cy="10" r="5" stroke="#4987d2" strokeWidth="2" />
            <path d="M2 28c0-5.523 4.477-10 10-10h1" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
            <circle cx="23" cy="15" r="4" stroke="#7fb0ff" strokeWidth="1.8" />
            <path d="M16 28c0-3.866 3.134-7 7-7" stroke="#7fb0ff" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Payments Automation",
        description:
          "Automated billing, smart retry on failures, and renewal reminders — revenue flows without chasing.",
        stat: "40%",
        statLabel: "Fewer failed payments",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <rect x="3" y="8" width="26" height="16" rx="4" stroke="#4987d2" strokeWidth="2" />
            <path d="M3 13h26" stroke="#4987d2" strokeWidth="1.8" />
            <rect x="7" y="18" width="6" height="3" rx="1.5" fill="#7fb0ff" />
            <circle cx="24" cy="19.5" r="2.5" fill="#4987d2" />
          </svg>
        ),
      },
      {
        label: "Smart Analytics",
        description:
          "Revenue, attendance, retention, and capacity trends surfaced as actionable KPIs every day.",
        stat: "+18%",
        statLabel: "Avg. revenue lift",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <path d="M4 26V6" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 26h24" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
            <rect x="6" y="17" width="4" height="9" rx="1.5" fill="#ebf2fe" stroke="#4987d2" strokeWidth="1.4" />
            <rect x="13" y="11" width="4" height="15" rx="1.5" fill="#d0e4f9" stroke="#4987d2" strokeWidth="1.4" />
            <rect x="20" y="6" width="4" height="20" rx="1.5" fill="#4987d2" />
          </svg>
        ),
      },
      {
        label: "Class Scheduling",
        description:
          "Build recurring schedules, manage capacity, and let members book in seconds from any device.",
        stat: "3 min",
        statLabel: "Avg. booking time",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <rect x="3" y="6" width="26" height="22" rx="4" stroke="#4987d2" strokeWidth="2" />
            <path d="M3 13h26" stroke="#4987d2" strokeWidth="1.8" />
            <path d="M10 3v6M22 3v6" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
            <rect x="8" y="17" width="5" height="5" rx="1.5" fill="#7fb0ff" />
            <rect x="16" y="17" width="5" height="5" rx="1.5" fill="#ebf2fe" stroke="#4987d2" strokeWidth="1.2" />
          </svg>
        ),
      },
      {
        label: "Staff & Permissions",
        description:
          "Assign trainers, managers, and front-desk staff with custom permission levels per location.",
        stat: "5 roles",
        statLabel: "Permission levels",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <circle cx="10" cy="10" r="4" stroke="#4987d2" strokeWidth="2" />
            <circle cx="22" cy="10" r="4" stroke="#7fb0ff" strokeWidth="2" />
            <path d="M2 26c0-4.418 3.582-8 8-8" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 18c4.418 0 8 3.582 8 8" stroke="#7fb0ff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Multi-Location",
        description:
          "Manage multiple branches from one account with unified reporting and separate operations.",
        stat: "∞",
        statLabel: "Locations supported",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <circle cx="16" cy="13" r="4" stroke="#4987d2" strokeWidth="2" />
            <path d="M16 28s-10-8-10-15a10 10 0 0 1 20 0c0 7-10 15-10 15Z" stroke="#4987d2" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="6" cy="25" r="2.5" fill="#7fb0ff" opacity="0.7" />
            <circle cx="26" cy="25" r="2.5" fill="#7fb0ff" opacity="0.7" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "members",
    label: "Members",
    color: "#7c3aed",
    features: [
      {
        label: "AI Workout Plans",
        description:
          "Personalised training programmes built around your goals, schedule, and available equipment.",
        stat: "98%",
        statLabel: "Plan completion rate",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <rect x="3" y="13" width="6" height="6" rx="2" stroke="#7c3aed" strokeWidth="2" />
            <rect x="23" y="13" width="6" height="6" rx="2" stroke="#7c3aed" strokeWidth="2" />
            <line x1="9" y1="16" x2="23" y2="16" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="13" y1="11" x2="13" y2="21" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="19" y1="11" x2="19" y2="21" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 24l4-5 4 3.5 4-6 4 7.5" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        label: "Progress Tracking",
        description:
          "Log reps, weights, photos, and measurements. Watch your transformation unfold over time.",
        stat: "1.2M",
        statLabel: "Sessions logged",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <path d="M4 26V6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 26h24" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 22l5-6 5 4 5-8 5 7" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="16" r="2" fill="#7c3aed" />
            <circle cx="16" cy="20" r="2" fill="#7c3aed" />
            <circle cx="21" cy="12" r="2" fill="#7c3aed" />
          </svg>
        ),
      },
      {
        label: "Nutrition Logging",
        description:
          "Track macros, calories, and hydration alongside your workouts for a complete health picture.",
        stat: "500k+",
        statLabel: "Meals tracked",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <circle cx="16" cy="16" r="11" stroke="#7c3aed" strokeWidth="2" />
            <path d="M16 5v2M16 25v2M5 16h2M25 16h2" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M11 16a5 5 0 0 1 10 0" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="16" r="2" fill="#7c3aed" />
          </svg>
        ),
      },
      {
        label: "Recovery Insights",
        description:
          "Sleep, HRV, and readiness scores tell you when to push hard and when to recover smart.",
        stat: "82/100",
        statLabel: "Avg. energy score",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <path d="M4 16h4l3-8 4 16 3-10 4 6 3-4h5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 4v3M16 25v3" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Coaching Chat",
        description:
          "Message your trainer, ask nutrition questions, and get real-time feedback in the app.",
        stat: "< 2h",
        statLabel: "Avg. coach response",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <path d="M5 6h22a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9l-6 4V8a2 2 0 0 1 2-2Z" stroke="#7c3aed" strokeWidth="2" strokeLinejoin="round" />
            <path d="M10 13h12M10 19h8" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Streaks & Milestones",
        description:
          "Unlock badges, hit streak goals, and celebrate PRs with your community and coach.",
        stat: "21 days",
        statLabel: "Avg. active streak",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <path d="M16 4l2.5 6.5H25l-5.5 4 2 6.5L16 17l-5.5 4 2-6.5L7 10.5h6.5z" stroke="#7c3aed" strokeWidth="2" strokeLinejoin="round" />
            <path d="M10 26h12" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 29h6" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "community",
    label: "Community",
    color: "#059669",
    features: [
      {
        label: "Fitness Challenges",
        description:
          "Launch monthly challenges — most steps, heaviest lift, best streak. Compete and celebrate together.",
        stat: "3×",
        statLabel: "Higher engagement",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <path d="M10 26V14a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v12" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 26h16" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 14H4a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h1M26 14h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-1" stroke="#6ee7b7" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="16" cy="6" r="3" fill="#059669" opacity="0.6" />
          </svg>
        ),
      },
      {
        label: "Social Feed",
        description:
          "Members post workouts, transformations, and wins. React, comment, and cheer each other on.",
        stat: "120k+",
        statLabel: "Posts this month",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <rect x="3" y="5" width="26" height="18" rx="4" stroke="#059669" strokeWidth="2" />
            <path d="M3 14h26" stroke="#6ee7b7" strokeWidth="1.6" />
            <circle cx="8" cy="9.5" r="2" fill="#6ee7b7" />
            <path d="M13 9h10" stroke="#6ee7b7" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M6 20l4-4 4 3 4-5 4 6" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 27h18" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Leaderboards",
        description:
          "Live rankings by workouts, calories burned, or check-ins. Friendly competition drives consistency.",
        stat: "62%",
        statLabel: "Better attendance",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <rect x="2" y="16" width="6" height="12" rx="2" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <rect x="11" y="10" width="6" height="18" rx="2" fill="#6ee7b7" stroke="#059669" strokeWidth="1.5" />
            <rect x="20" y="4" width="6" height="24" rx="2" fill="#059669" />
            <circle cx="23" cy="2" r="2.5" fill="#059669" opacity="0.6" />
          </svg>
        ),
      },
      {
        label: "Group Events",
        description:
          "Schedule open gym sessions, workshops, and social runs. Members RSVP and get reminders.",
        stat: "14",
        statLabel: "Events per week",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <rect x="3" y="6" width="26" height="22" rx="4" stroke="#059669" strokeWidth="2" />
            <path d="M3 13h26" stroke="#6ee7b7" strokeWidth="1.8" />
            <path d="M10 3v6M22 3v6" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
            <circle cx="11" cy="20" r="3" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <circle cx="21" cy="20" r="3" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <path d="M14 20h4" stroke="#6ee7b7" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Badges & Achievements",
        description:
          "Members earn digital badges for milestones — first 30 days, 100 sessions, personal records.",
        stat: "48",
        statLabel: "Badge types",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <path d="M16 3l2.5 6.5H25l-5 4 2 6.5L16 16l-5.5 4 2-6.5-5-4h6.5z" stroke="#059669" strokeWidth="2" strokeLinejoin="round" fill="#d1fae5" />
            <path d="M11 26h10" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 29h6" stroke="#6ee7b7" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Creator Monetisation",
        description:
          "Coaches and community leaders earn via tip jars, paid challenges, and exclusive content drops.",
        stat: "$6.3k",
        statLabel: "Avg. creator/month",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
            <circle cx="16" cy="14" r="8" stroke="#059669" strokeWidth="2" />
            <path d="M16 8v2m0 8v2" stroke="#6ee7b7" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M13 11h4.5a2.5 2.5 0 0 1 0 5H14a2.5 2.5 0 0 0 0 5H19" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M10 24l3 4 3-3 3 3 3-4" stroke="#6ee7b7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState<string>("gyms");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="features"
      className="relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#4987d2]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-[#ebf2fe]/80 dark:bg-[#4987d2]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ebf2fe] dark:bg-[#4987d2]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff]">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
              <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
            </svg>
            Powerful features
          </span>
          <h2
            className={`${brandFont.className} text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white max-w-3xl`}
          >
            Tools built for{" "}
            <span style={{ color: current.color }}>{current.label}</span>
          </h2>
          <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
            Every feature is purpose-built. Switch audience to explore what
            Flexicurl does for each.
          </p>
        </div>

        {/* Audience tab switcher */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-2xl bg-[#f4f8fe] dark:bg-slate-900 p-1.5 ring-1 ring-[#dbe8fb] dark:ring-slate-800 gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: tab.color,
                          color: "white",
                          boxShadow: `0 4px 14px ${tab.color}40`,
                        }
                      : { color: "#64748b" }
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Uniform 6-card grid — every card identical in structure */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {current.features.map((feature) => (
            <div
              key={feature.label}
              className="group relative flex flex-col rounded-3xl bg-[#f8fbff] dark:bg-slate-900 p-7 ring-1 ring-[#dbe8fb]/80 dark:ring-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top left, ${current.color}08, transparent 70%)`,
                }}
              />

              {/* Row 1: icon + stat */}
              <div className="relative flex items-start justify-between mb-6">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm p-2.5"
                  style={{
                    border: `1px solid ${current.color}20`,
                    boxShadow: `0 2px 8px ${current.color}12`,
                  }}
                >
                  {feature.icon}
                </div>
                <div className="text-right">
                  <p
                    className="text-xl font-bold leading-tight"
                    style={{ color: current.color }}
                  >
                    {feature.stat}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-tight text-slate-400 dark:text-slate-500">
                    {feature.statLabel}
                  </p>
                </div>
              </div>

              {/* Row 2: title + description */}
              <div className="relative flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.label}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>

              {/* Row 3: accent bar */}
              <div
                className="relative mt-6 h-[3px] w-10 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, ${current.color}, ${current.color}60)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
