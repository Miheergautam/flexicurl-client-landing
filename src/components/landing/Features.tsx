"use client";

import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

type Feature = {
  id: string;
  label: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    id: "members",
    label: "Member Management",
    description:
      "Centralise member profiles, waivers, check-ins, and communication. Full gym visibility in one smart dashboard.",
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
    id: "workouts",
    label: "Workout Tracking",
    description:
      "Log sessions, assign AI-tuned plans, and monitor progress. Keep every member moving toward their goal.",
    stat: "98%",
    statLabel: "Plan completion rate",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <rect x="3" y="13" width="6" height="6" rx="2" stroke="#4987d2" strokeWidth="2" />
        <rect x="23" y="13" width="6" height="6" rx="2" stroke="#4987d2" strokeWidth="2" />
        <line x1="9" y1="16" x2="23" y2="16" stroke="#4987d2" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="13" y1="11" x2="13" y2="21" stroke="#7fb0ff" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="19" y1="11" x2="19" y2="21" stroke="#7fb0ff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 24l4-5 4 3.5 4-6 4 7.5" stroke="#4987d2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "analytics",
    label: "Smart Analytics",
    description:
      "Revenue, attendance, retention, and capacity trends — surfaced as actionable KPIs, not raw data.",
    stat: "+18%",
    statLabel: "Avg. revenue lift",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <path d="M4 26V6" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 26h24" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
        <rect x="6" y="17" width="4" height="9" rx="1.5" fill="#ebf2fe" stroke="#4987d2" strokeWidth="1.4" />
        <rect x="13" y="11" width="4" height="15" rx="1.5" fill="#d0e4f9" stroke="#4987d2" strokeWidth="1.4" />
        <rect x="20" y="6" width="4" height="20" rx="1.5" fill="#4987d2" />
        <path d="M8 13l7-5 7-3" stroke="#7fb0ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "payments",
    label: "Payments Automation",
    description:
      "Automated billing, smart retry on failures, and renewal reminders — revenue that flows without chasing.",
    stat: "40%",
    statLabel: "Fewer failed payments",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <rect x="3" y="8" width="26" height="16" rx="4" stroke="#4987d2" strokeWidth="2" />
        <path d="M3 13h26" stroke="#4987d2" strokeWidth="1.8" />
        <rect x="7" y="18" width="6" height="3" rx="1.5" fill="#7fb0ff" />
        <circle cx="24" cy="19.5" r="2.5" fill="#4987d2" />
        <path d="M18 10.5h6" stroke="#7fb0ff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "scheduling",
    label: "Class Scheduling",
    description:
      "Build recurring class schedules, manage capacity, and let members book in seconds from any device.",
    stat: "3 min",
    statLabel: "Avg. booking time",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <rect x="3" y="6" width="26" height="22" rx="4" stroke="#4987d2" strokeWidth="2" />
        <path d="M3 13h26" stroke="#4987d2" strokeWidth="1.8" />
        <path d="M10 3v6M22 3v6" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" />
        <rect x="8" y="17" width="5" height="5" rx="1.5" fill="#7fb0ff" />
        <rect x="16" y="17" width="5" height="5" rx="1.5" fill="#ebf2fe" stroke="#4987d2" strokeWidth="1.2" />
        <rect x="24" y="17" width="4" height="5" rx="1.5" fill="#ebf2fe" stroke="#4987d2" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: "comms",
    label: "Member Communication",
    description:
      "Push notifications, in-app messaging, and targeted campaigns — keep every member engaged and informed.",
    stat: "4.9★",
    statLabel: "Member satisfaction",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <path
          d="M5 6h22a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9l-6 4V8a2 2 0 0 1 2-2Z"
          stroke="#4987d2"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M10 13h12M10 19h8" stroke="#7fb0ff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#4987d2]/6 blur-3xl dark:bg-[#4987d2]/10" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-[#ebf2fe]/80 dark:bg-[#4987d2]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Section header */}
        <div className="mb-14 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ebf2fe] dark:bg-[#4987d2]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff]">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
              <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
            </svg>
            Powerful tools
          </span>
          <h2
            className={`${brandFont.className} text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white max-w-3xl`}
          >
            Everything your gym needs to{" "}
            <span className="text-[#4987d2]">thrive</span>
          </h2>
          <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
            From member onboarding to revenue analytics — Flexicurl handles the
            operations so you can focus on results.
          </p>
        </div>

        {/* Uniform 3-column grid — every card identical in structure */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative flex flex-col rounded-3xl bg-[#f8fbff] dark:bg-slate-900 p-7 ring-1 ring-[#dbe8fb]/80 dark:ring-slate-800 shadow-sm hover:shadow-lg hover:shadow-[#4987d2]/12 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4987d2]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* ── Row 1: icon + stat ── */}
              <div className="relative flex items-start justify-between mb-6">
                {/* Icon container — fixed size */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 ring-1 ring-[#dbe8fb] dark:ring-slate-700 shadow-sm shadow-[#4987d2]/10 p-2.5">
                  {feature.icon}
                </div>
                {/* Stat — fixed right side */}
                <div className="text-right">
                  <p className="text-xl font-bold leading-tight text-[#4987d2]">
                    {feature.stat}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-tight text-slate-400 dark:text-slate-500">
                    {feature.statLabel}
                  </p>
                </div>
              </div>

              {/* ── Row 2: title + description ── */}
              <div className="relative flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.label}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>

              {/* ── Row 3: accent bar ── */}
              <div className="relative mt-6 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#4987d2] to-[#7fb0ff] opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <div className="flex items-center gap-3 rounded-2xl bg-[#ebf2fe] dark:bg-slate-900 px-5 py-3 ring-1 ring-[#dbe8fb] dark:ring-slate-800">
            <div className="flex -space-x-2">
              {["A", "P", "M", "S"].map((l, i) => (
                <div
                  key={i}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4987d2] text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900"
                  style={{ opacity: 1 - i * 0.15 }}
                >
                  {l}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="font-bold text-[#4987d2]">500+</span> gym owners
              trust Flexicurl
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <svg
              className="h-4 w-4 fill-amber-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292Z" />
            </svg>
            <span>
              <strong className="text-slate-700 dark:text-slate-300">4.9/5</strong>{" "}
              average rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
