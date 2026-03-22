"use client";

import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const steps = [
  {
    number: "01",
    label: "Set up your gym",
    description:
      "Import your member list, configure locations, set pricing tiers, and go live in under 10 minutes.",
    detail: "No credit card needed · Free onboarding call",
    illustration: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        {/* Building silhouette */}
        <rect x="20" y="30" width="80" height="46" rx="4" fill="#ebf2fe" stroke="#4987d2" strokeWidth="1.5" />
        <rect x="34" y="44" width="14" height="14" rx="2" fill="#d0e4f9" stroke="#4987d2" strokeWidth="1.2" />
        <rect x="54" y="44" width="14" height="14" rx="2" fill="#d0e4f9" stroke="#4987d2" strokeWidth="1.2" />
        <rect x="74" y="44" width="14" height="14" rx="2" fill="#d0e4f9" stroke="#4987d2" strokeWidth="1.2" />
        <rect x="45" y="60" width="28" height="16" rx="2" fill="#4987d2" />
        {/* Roof peak */}
        <path d="M10 32L60 8l50 24" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Flag */}
        <line x1="60" y1="4" x2="60" y2="14" stroke="#4987d2" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M60 4l8 4-8 4" fill="#7fb0ff" />
        {/* Check badge */}
        <circle cx="96" cy="28" r="10" fill="#4987d2" />
        <path d="M91 28l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Track & engage members",
    description:
      "Log workouts, monitor check-ins, assign AI-tuned plans, and keep members motivated every step of the way.",
    detail: "Live dashboards · Push notifications · Leaderboards",
    illustration: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        {/* Phone frame */}
        <rect x="40" y="6" width="40" height="68" rx="8" fill="white" stroke="#4987d2" strokeWidth="1.5" />
        <rect x="44" y="14" width="32" height="52" rx="4" fill="#ebf2fe" />
        {/* Heart rate line */}
        <path d="M46 36h6l3-8 4 16 3-10 4 6h6" stroke="#4987d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Stats bars */}
        <rect x="46" y="44" width="6" height="14" rx="2" fill="#d0e4f9" />
        <rect x="55" y="40" width="6" height="18" rx="2" fill="#7fb0ff" />
        <rect x="64" y="36" width="6" height="22" rx="2" fill="#4987d2" />
        {/* Dumbbell icon left */}
        <rect x="6" y="32" width="6" height="16" rx="2" fill="#d0e4f9" stroke="#4987d2" strokeWidth="1.2" />
        <rect x="12" y="36" width="16" height="8" rx="2" fill="#4987d2" />
        <rect x="28" y="32" width="6" height="16" rx="2" fill="#d0e4f9" stroke="#4987d2" strokeWidth="1.2" />
        {/* Spark indicators */}
        <circle cx="20" cy="20" r="4" fill="#7fb0ff" opacity="0.6" />
        <circle cx="100" cy="20" r="4" fill="#7fb0ff" opacity="0.6" />
        <circle cx="14" cy="58" r="3" fill="#4987d2" opacity="0.4" />
        <circle cx="106" cy="54" r="3" fill="#4987d2" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Grow with insights",
    description:
      "Revenue trends, retention analytics, and capacity reports — make every business decision backed by real data.",
    detail: "Monthly reports · Revenue forecasting · Export ready",
    illustration: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        {/* Chart area */}
        <rect x="10" y="14" width="100" height="56" rx="6" fill="#ebf2fe" />
        {/* Grid lines */}
        <line x1="10" y1="56" x2="110" y2="56" stroke="#d0e4f9" strokeWidth="1" />
        <line x1="10" y1="42" x2="110" y2="42" stroke="#d0e4f9" strokeWidth="1" />
        <line x1="10" y1="28" x2="110" y2="28" stroke="#d0e4f9" strokeWidth="1" />
        {/* Area fill */}
        <path d="M16 62l15-14 15-4 15-10 15-6 20-14 8-4v20H16Z" fill="#4987d2" opacity="0.15" />
        {/* Line chart */}
        <path d="M16 62l15-14 15-4 15-10 15-6 20-14 8-4" stroke="#4987d2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Data points */}
        {[
          [16, 62], [31, 48], [46, 44], [61, 34], [76, 28], [96, 14], [104, 10]
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="white" stroke="#4987d2" strokeWidth="2" />
        ))}
        {/* Tooltip */}
        <rect x="72" y="4" width="40" height="20" rx="4" fill="#4987d2" />
        <text x="92" y="18" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">+22%</text>
        <path d="M92 24l-3-4h6z" fill="#4987d2" />
        {/* Trophy */}
        <circle cx="20" cy="20" r="6" fill="#7fb0ff" opacity="0.7" />
        <path d="M17 20l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[#f4f8fe] dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#4987d2_0%,_transparent_60%)] opacity-[0.04] dark:opacity-[0.08]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4987d2]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#4987d2]/10 dark:bg-[#4987d2]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff]">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 1v10M1 6h10" strokeLinecap="round" />
            </svg>
            How it works
          </span>
          <h2 className={`${brandFont.className} text-4xl tracking-tight text-slate-900 dark:text-white sm:text-5xl max-w-3xl`}>
            From signup to{" "}
            <span className="text-[#4987d2]">scale</span> in three steps
          </h2>
          <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
            Set up once and let Flexicurl handle members, workouts, and revenue
            — automatically, every day.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-[4.5rem] left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] hidden h-[2px] lg:block">
            <div className="h-full w-full bg-gradient-to-r from-[#4987d2] via-[#7fb0ff] to-[#4987d2] opacity-30" />
            <div className="absolute inset-y-0 left-0 w-1/3 h-full bg-[#4987d2] opacity-70 rounded-full" style={{ animation: "none" }} />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.number} className="group flex flex-col gap-5">
                {/* Step card */}
                <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-7 shadow-md shadow-[#4987d2]/8 ring-1 ring-[#dbe8fb]/80 dark:ring-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4987d2]/15 transition-all duration-300 flex flex-col gap-5">
                  {/* Number badge */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4987d2] text-white font-bold text-lg shadow-lg shadow-[#4987d2]/30">
                      {step.number}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#dbe8fb] dark:from-slate-800 to-transparent" />
                  </div>

                  {/* Illustration */}
                  <div className="h-24 w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {step.illustration}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {step.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Detail chip */}
                  <div className="rounded-xl bg-[#ebf2fe] dark:bg-slate-800 px-4 py-2.5 text-xs text-[#3f78c0] dark:text-[#7fb0ff] font-medium">
                    {step.detail}
                  </div>

                  {/* Progress indicator */}
                  <div className="flex gap-1.5">
                    {steps.map((_, j) => (
                      <div
                        key={j}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          j <= i
                            ? "bg-[#4987d2] flex-1"
                            : "bg-[#dbe8fb] dark:bg-slate-700 w-4"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-[#4987d2] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4987d2]/30 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Start your free trial
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="text-sm text-slate-400 dark:text-slate-500">No credit card required</p>
        </div>
      </div>
    </section>
  );
}
