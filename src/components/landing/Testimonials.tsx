"use client";

import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const testimonials = [
  {
    quote:
      "Flexicurl reduced our admin time by half. Members love the seamless check-ins and personalised workout plans. It just works — every single day.",
    name: "Alex Carter",
    role: "Owner",
    gym: "Peak Performance Gym",
    result: "+22% recurring revenue in 3 months",
    initials: "AC",
    color: "#4987d2",
    stars: 5,
  },
  {
    quote:
      "The analytics and automated billing have been game changers. We finally have clarity on what drives retention and can act on it instantly.",
    name: "Priya Desai",
    role: "Founder",
    gym: "Flow Strength Studio",
    result: "40% fewer failed payments",
    initials: "PD",
    color: "#7fb0ff",
    stars: 5,
  },
  {
    quote:
      "Switching to Flexicurl was the best decision I made this year. Onboarding was a breeze and our members noticed the difference immediately.",
    name: "Marcus Webb",
    role: "Head Coach",
    gym: "IronForge Athletics",
    result: "2× faster member onboarding",
    initials: "MW",
    color: "#3f78c0",
    stars: 5,
  },
];

const logos = ["NovaSport", "IronForge", "FlowStudio", "PeakGym", "UrbanFit", "CoreMotion"];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#f4f8fe] dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Background mesh */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#4987d2_0%,_transparent_60%)] opacity-[0.05] dark:opacity-[0.10]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#4987d2]/10 dark:bg-[#4987d2]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff]">
            Real results
          </span>
          <h2 className={`${brandFont.className} text-4xl tracking-tight text-slate-900 dark:text-white sm:text-5xl max-w-3xl`}>
            Loved by gym owners{" "}
            <span className="text-[#4987d2]">worldwide</span>
          </h2>
          <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
            Hear from the teams using Flexicurl to build exceptional member
            experiences and drive real business growth.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col rounded-3xl bg-white dark:bg-slate-900 p-7 shadow-md shadow-[#4987d2]/8 ring-1 ring-[#dbe8fb]/80 dark:ring-slate-800 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#4987d2]/18 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}88)` }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>

              {/* Large quote mark */}
              <div
                className="text-5xl leading-none font-serif mb-1 transition-colors duration-300"
                style={{ color: `${t.color}30` }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-5">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#dbe8fb] dark:via-slate-700 to-transparent mb-4" />

              {/* Author row */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-sm font-bold shadow-md"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}bb)` }}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {t.role}, {t.gym}
                  </p>
                </div>
              </div>

              {/* Result badge */}
              <div className="mt-4 rounded-xl bg-[#ebf2fe] dark:bg-slate-800 px-3 py-2 text-xs font-semibold text-[#3f78c0] dark:text-[#7fb0ff] flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="none">
                  <path d="M2 10l4-4 4 4 4-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.result}
              </div>
            </div>
          ))}
        </div>

        {/* Logo cloud */}
        <div className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-6">
            Trusted by fitness brands across the globe
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {logos.map((logo) => (
              <div
                key={logo}
                className="rounded-xl bg-white dark:bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-400 dark:text-slate-600 ring-1 ring-[#dbe8fb] dark:ring-slate-800 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] hover:ring-[#4987d2]/40 transition-all duration-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
