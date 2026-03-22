"use client";

import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const stats = [
  { value: "22%", label: "Revenue growth in 3 months" },
  { value: "40%", label: "Fewer failed payments" },
  { value: "2×", label: "Faster member onboarding" },
  { value: "500+", label: "Gyms currently active" },
];

const benefits = [
  {
    id: "admin",
    label: "Save hours of admin work",
    description:
      "Automate scheduling, billing reminders, and renewals. Your team focuses on coaching — not spreadsheets.",
    tag: "Automation",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
        <circle cx="20" cy="20" r="14" stroke="#4987d2" strokeWidth="2" />
        <path d="M20 12v8l5 3" stroke="#4987d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 20a12 12 0 0 0 4 8.5" stroke="#7fb0ff" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "retention",
    label: "Improve member retention",
    description:
      "Progress tracking, check-in streaks, and personalised plans keep members coming back week after week.",
    tag: "Engagement",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
        <path d="M20 34s-14-9-14-18a8 8 0 0 1 14-5.6A8 8 0 0 1 34 16c0 9-14 18-14 18Z" stroke="#4987d2" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M14 20l4 4 8-8" stroke="#7fb0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "billing",
    label: "Automate membership renewals",
    description:
      "Smart retries, dunning emails, and frictionless renewals slash churn without any manual intervention.",
    tag: "Payments",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
        <rect x="6" y="10" width="28" height="20" rx="4" stroke="#4987d2" strokeWidth="2" />
        <path d="M6 16h28" stroke="#4987d2" strokeWidth="1.8" />
        <rect x="10" y="21" width="8" height="4" rx="2" fill="#7fb0ff" />
        <circle cx="30" cy="30" r="7" fill="#4987d2" />
        <path d="M27 30l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "insights",
    label: "Make data-driven decisions",
    description:
      "Revenue, attendance, and class capacity all in one dashboard. See what's working and double down fast.",
    tag: "Analytics",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
        <path d="M6 34V10" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 34h28" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="22" width="5" height="12" rx="1.5" fill="#d0e4f9" stroke="#4987d2" strokeWidth="1.2" />
        <rect x="18" y="16" width="5" height="18" rx="1.5" fill="#7fb0ff" stroke="#4987d2" strokeWidth="1.2" />
        <rect x="26" y="10" width="5" height="24" rx="1.5" fill="#4987d2" />
        <path d="M12 18l8-6 8-4" stroke="#7fb0ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "community",
    label: "Build a vibrant community",
    description:
      "Leaderboards, challenges, and group feeds turn your gym into a place members genuinely want to be.",
    tag: "Community",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
        <circle cx="20" cy="14" r="5" stroke="#4987d2" strokeWidth="2" />
        <circle cx="8" cy="18" r="4" stroke="#7fb0ff" strokeWidth="1.8" />
        <circle cx="32" cy="18" r="4" stroke="#7fb0ff" strokeWidth="1.8" />
        <path d="M4 34c0-4.418 3.582-8 8-8h16c4.418 0 8 3.582 8 8" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "mobile",
    label: "Members on any device",
    description:
      "Dedicated member app for iOS and Android. Book classes, view plans, and track goals anywhere, anytime.",
    tag: "Mobile",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
        <rect x="12" y="4" width="16" height="32" rx="4" stroke="#4987d2" strokeWidth="2" />
        <path d="M18 8h4" stroke="#7fb0ff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="31" r="1.5" fill="#4987d2" />
        <path d="M16 18l3 3 5-6" stroke="#4987d2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4987d2]/20 to-transparent" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-[#ebf2fe]/60 dark:bg-[#4987d2]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ebf2fe] dark:bg-[#4987d2]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff]">
            Benefits
          </span>
          <h2 className={`${brandFont.className} text-4xl tracking-tight text-slate-900 dark:text-white sm:text-5xl max-w-3xl`}>
            Built for gym owners who{" "}
            <span className="text-[#4987d2]">demand results</span>
          </h2>
          <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
            Every feature of Flexicurl is designed to save you time, grow your
            revenue, and delight your members.
          </p>
        </div>

        {/* Stats band */}
        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col items-center rounded-2xl bg-gradient-to-b from-[#f0f6ff] to-[#ebf2fe] dark:from-slate-900 dark:to-slate-900 p-5 ring-1 ring-[#dbe8fb] dark:ring-slate-800 text-center"
            >
              <span className={`${brandFont.className} text-3xl font-bold text-[#4987d2]`}>
                {s.value}
              </span>
              <span className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group relative rounded-3xl bg-[#f8fbff] dark:bg-slate-900 p-6 ring-1 ring-[#dbe8fb]/80 dark:ring-slate-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4987d2]/12 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm shadow-[#4987d2]/10 ring-1 ring-[#dbe8fb] dark:ring-slate-700 p-2.5">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff] bg-[#ebf2fe] dark:bg-[#4987d2]/15 rounded-full px-2 py-0.5">
                      {benefit.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-snug">
                    {benefit.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#4987d2] to-[#7fb0ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
