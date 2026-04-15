"use client";

import theme from "@/theme/tokens";

const proofStats = [
  { value: "500+", label: "Gyms onboarded" },
  { value: "50k+", label: "Active members" },
  { value: "4.9★", label: "App store rating" },
  { value: "$2M+", label: "Revenue managed" },
];

export default function CTA() {
  return (
    <section
      id="get-started"
      className="relative bg-dark-page overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-64 w-64 rounded-full bg-community/8 blur-3xl" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">

          {/* ── LEFT: Copy + CTAs ── */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-white/60">
                Join the movement
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl">
                Your fitness
                <br />
                business{" "}
                <span className="relative inline-block">
                  <span className="text-primary-lighter">starts here.</span>
                  {/* Underline squiggle */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6 Q25 2 50 5 Q75 8 100 4 Q125 1 150 5 Q175 8 198 3"
                      stroke={theme.colors.primaryLighter}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-dark-muted leading-relaxed max-w-md">
                Whether you run a gym, chase PRs, or build a community —
                Flexicurl is the one platform that does it all.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2.5 rounded-brand-md bg-primary px-7 py-4 text-base font-bold text-white shadow-2xl shadow-primary/40 hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Start free — 14 days
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-brand-md border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white/80 hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-200"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* ── RIGHT: Live dashboard card ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow behind card */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            </div>

            <div className="relative w-full max-w-sm rounded-brand-xl overflow-hidden border border-dark-stroke shadow-2xl shadow-black/40 bg-dark-card">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-dark-stroke bg-dark-card/90 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-2 h-5 rounded-full bg-white/[0.06] flex items-center px-3">
                  <span className="text-[10px] text-dark-muted font-medium">
                    app.flexicurl.com/dashboard
                  </span>
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-5 space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-dark-text">Good morning 👋</p>
                    <p className="text-xs text-dark-muted">FlexiCURL Gym · Live</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-brand-sm bg-success/15 border border-success/20 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                    <span className="text-[11px] font-semibold text-success">34 live</span>
                  </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Members", value: "342", delta: "+12" },
                    { label: "Revenue", value: "$42k", delta: "+18%" },
                    { label: "Retention", value: "94%", delta: "+3%" },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-brand-md bg-white/[0.04] border border-dark-stroke p-3"
                    >
                      <p className="text-[10px] text-dark-muted mb-1">{kpi.label}</p>
                      <p className="text-sm font-bold text-dark-text">{kpi.value}</p>
                      <p className="text-[10px] font-semibold text-success">{kpi.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Revenue chart */}
                <div className="rounded-brand-md bg-white/[0.04] border border-dark-stroke p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-dark-text">Monthly Revenue</p>
                    <span className="text-[10px] font-bold text-primary-lighter">↑ +22% vs last month</span>
                  </div>
                  {/* Chart bars */}
                  <div className="flex items-end gap-1.5 h-16">
                    {[35, 48, 42, 55, 50, 65, 58, 72, 66, 80, 74, 92].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm transition-all" style={{
                        height: `${h}%`,
                        background: i === 11
                          ? theme.colors.primary
                          : `rgba(91,155,213,${0.15 + i * 0.055})`,
                      }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1.5">
                    {["Jan", "Apr", "Jul", "Oct"].map((m) => (
                      <span key={m} className="text-[9px] text-dark-muted">{m}</span>
                    ))}
                  </div>
                </div>

                {/* Recent check-ins */}
                <div className="space-y-2">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-dark-muted">Recent check-ins</p>
                  {[
                    { name: "Alex K.", time: "2 min ago", type: "Strength" },
                    { name: "Priya D.", time: "5 min ago", type: "Yoga" },
                    { name: "Marcus W.", time: "8 min ago", type: "Cardio" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-3 rounded-brand-md bg-white/[0.03] px-3 py-2.5">
                      <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary-lighter">
                        {c.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-dark-text truncate">{c.name}</p>
                        <p className="text-[10px] text-dark-muted">{c.type}</p>
                      </div>
                      <span className="text-[10px] text-dark-muted shrink-0">{c.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom stats band ── */}
        <div className="mt-20 pt-8 border-t border-dark-stroke">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {proofStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="font-display text-3xl font-bold text-primary">
                  {s.value}
                </span>
                <span className="mt-1 text-xs text-dark-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
