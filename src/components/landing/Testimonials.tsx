"use client";

import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const testimonials = [
  {
    audience: "Gym Owner",
    audienceColor: "#4987d2",
    audiencePale: "#ebf2fe",
    quote:
      "Flexicurl cut our admin time by more than half. I used to spend Sunday evenings manually chasing renewals — now it's all automatic. Our revenue is up 22% and the team finally has time to focus on members.",
    name: "Alex Carter",
    role: "Owner · Peak Performance Gym",
    initials: "AC",
    result: "+22% recurring revenue in 3 months",
    resultIcon: "📈",
    stars: 5,
  },
  {
    audience: "Member",
    audienceColor: "#7c3aed",
    audiencePale: "#f3effe",
    quote:
      "I tried three other apps before Flexicurl. Nothing else gives me an actual plan, tracks my nutrition, and lets me chat with my coach all in one place. I hit my first 100kg squat last month — first real PR in two years.",
    name: "Jordan Mills",
    role: "Member · IronForge Athletics",
    initials: "JM",
    result: "First 100kg squat · 2-year plateau broken",
    resultIcon: "🏋️",
    stars: 5,
  },
  {
    audience: "Community",
    audienceColor: "#059669",
    audiencePale: "#ecfdf5",
    quote:
      "I run a 2,000-member online fitness community and Flexicurl made it a real business. The challenge system alone tripled our engagement. The tip jar and paid drops now bring in over $6k a month.",
    name: "Priya Desai",
    role: "Founder · Flow Strength Community",
    initials: "PD",
    result: "$6,300/mo creator revenue · 3× engagement",
    resultIcon: "🏆",
    stars: 5,
  },
];

const logos = [
  "PeakGym", "IronForge", "FlowStudio",
  "UrbanFit", "CoreMotion", "NovaSport",
];

const stats = [
  { value: "500+", label: "Gyms" },
  { value: "50k+", label: "Members" },
  { value: "120k+", label: "Community posts" },
  { value: "4.9★", label: "App rating" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#4987d2_0%,_transparent_60%)] opacity-[0.04] dark:opacity-[0.07]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ebf2fe] dark:bg-[#4987d2]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff]">
            Real results
          </span>
          <h2
            className={`${brandFont.className} text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white max-w-3xl`}
          >
            Heard across every corner of the{" "}
            <span className="text-[#4987d2]">fitness world</span>
          </h2>
          <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
            Gym owners, members, and community leaders — all growing with
            Flexicurl.
          </p>
        </div>

        {/* Stats band */}
        <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-2xl bg-[#f8fbff] dark:bg-slate-900 px-4 py-5 ring-1 ring-[#dbe8fb] dark:ring-slate-800"
            >
              <span
                className={`${brandFont.className} text-3xl font-bold text-[#4987d2]`}
              >
                {s.value}
              </span>
              <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial cards — one per audience */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col rounded-3xl bg-white dark:bg-slate-900 overflow-hidden shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              style={{
                border: `1px solid ${t.audienceColor}18`,
                boxShadow: `0 4px 24px ${t.audienceColor}10`,
              }}
            >
              {/* Top colour bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${t.audienceColor}, ${t.audienceColor}60)`,
                }}
              />

              <div className="flex flex-col flex-1 p-7 gap-5">
                {/* Audience tag + stars */}
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                    style={{
                      background: `${t.audienceColor}15`,
                      color: t.audienceColor,
                    }}
                  >
                    {t.audience}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292Z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quote mark */}
                <div
                  className="text-5xl font-serif leading-none"
                  style={{ color: `${t.audienceColor}25` }}
                >
                  &ldquo;
                </div>

                {/* Quote */}
                <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t.quote}
                </p>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${t.audienceColor}25, transparent)`,
                  }}
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: t.audienceColor }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Result badge */}
                <div
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold"
                  style={{
                    background: `${t.audienceColor}10`,
                    color: t.audienceColor,
                  }}
                >
                  <span>{t.resultIcon}</span>
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo cloud */}
        <div className="mt-16 flex flex-col items-center gap-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600">
            Trusted by leading fitness brands
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {logos.map((logo) => (
              <div
                key={logo}
                className="rounded-xl bg-[#f8fbff] dark:bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-400 dark:text-slate-600 ring-1 ring-[#dbe8fb] dark:ring-slate-800 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] hover:ring-[#4987d2]/30 transition-all duration-200"
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
