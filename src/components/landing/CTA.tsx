"use client";

import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const highlights = [
  {
    value: "14-day",
    label: "Free trial",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "No CC",
    label: "Required",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 9h16" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 13h2M9 13h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "10 min",
    label: "Onboarding",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <path d="M4 10a6 6 0 1 0 12 0A6 6 0 0 0 4 10Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "500+",
    label: "Active gyms",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <path d="M3 17V8l7-5 7 5v9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="7" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function CTA() {
  return (
    <section
      id="get-started"
      className="relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4987d2] via-[#3f78c0] to-[#2563b0] p-12 sm:p-16 shadow-2xl shadow-[#4987d2]/30">
          {/* Background decorations */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#7fb0ff]/20 blur-2xl" />

          {/* Fitness SVG art — dumbbell motif */}
          <div className="pointer-events-none absolute right-8 top-8 opacity-10 hidden lg:block">
            <svg viewBox="0 0 200 200" fill="none" className="h-56 w-56">
              <rect x="20" y="82" width="24" height="36" rx="8" fill="white" />
              <rect x="44" y="90" width="112" height="20" rx="4" fill="white" />
              <rect x="156" y="82" width="24" height="36" rx="8" fill="white" />
              <rect x="14" y="74" width="14" height="52" rx="6" fill="white" opacity="0.6" />
              <rect x="172" y="74" width="14" height="52" rx="6" fill="white" opacity="0.6" />
              {/* Pulse line */}
              <path d="M30 160h20l10-30 15 50 10-40 15 20 20-10h50" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
            </svg>
          </div>

          {/* Dot grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 max-w-xl">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                  <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
                </svg>
                Ready to level up
              </span>
              <h2 className={`${brandFont.className} text-4xl sm:text-5xl tracking-tight text-white`}>
                Start growing your gym
                <br />
                <span className="text-white/75">today — for free.</span>
              </h2>
              <p className="text-base text-white/75 leading-relaxed">
                Join 500+ gyms using Flexicurl to automate operations, engage members,
                and unlock revenue insights. Launch in under 10 minutes.
              </p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-2 mt-1">
                {highlights.map((h) => (
                  <div
                    key={h.value}
                    className="flex items-center gap-2 rounded-xl bg-white/12 px-3.5 py-2 text-sm text-white/90 backdrop-blur-sm"
                  >
                    <span className="text-white/70">{h.icon}</span>
                    <span className="font-semibold">{h.value}</span>
                    <span className="text-white/60 text-xs">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-3 w-full lg:w-auto shrink-0">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-[#4987d2] shadow-xl shadow-black/15 hover:bg-[#f0f5ff] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Start Free Trial
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 backdrop-blur-sm"
              >
                See all features
              </a>
              <p className="text-center text-xs text-white/50">
                No credit card · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
