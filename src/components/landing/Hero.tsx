"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#ebf2fe] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#ebf2fe] via-white to-[#ebf2fe] dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-white/70 dark:bg-slate-950/70 transition-colors duration-300" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-white/80 dark:bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#4987d2] shadow-sm shadow-[#4987d2]/10 ring-1 ring-white/60 dark:ring-slate-800 transition-colors duration-300">
              Flexicurl · Modern fitness ops
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-gray-100 sm:text-5xl leading-tight transition-colors duration-300">
              Run Your Gym Smarter with Flexicurl
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300 sm:max-w-xl transition-colors duration-300">
              Manage members, track workouts, automate payments, and grow your
              gym — all in one soft, modern platform.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-full bg-[#4987d2] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#4987d2]/25 transition hover:bg-[#3f78c0]"
              >
                Start Free Trial
              </a>
              <a
                href="#book-demo"
                className="inline-flex items-center justify-center rounded-full border border-[#afcaed] bg-white/90 px-7 py-3 text-sm font-semibold text-[#4987d2] shadow-sm shadow-[#4987d2]/10 transition hover:bg-white"
              >
                Book Demo
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-gray-300 transition-colors duration-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#afcaed] dark:bg-slate-800 text-[#1f3f6d] dark:text-gray-100 font-semibold shadow-sm shadow-[#4987d2]/15 transition-colors duration-300">
                4.9
              </span>
              <div>
                <p className="font-semibold text-slate-800 dark:text-gray-100 transition-colors duration-300">
                  Loved by gym owners
                </p>
                <p>Trusted for member experience and operational efficiency.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#afcaed]/50 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-[#4987d2]/30 blur-3xl" />
            <div className="relative grid gap-4">
              <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-md shadow-[#4987d2]/10 ring-1 ring-white/60 dark:ring-slate-800 p-6 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-200 transition-colors duration-300">
                    Today&apos;s Activity
                  </p>
                  <span className="text-xs font-semibold text-[#4987d2] bg-[#ebf2fe] dark:bg-slate-800 dark:text-[#7fb0ff] px-2 py-1 rounded-full transition-colors duration-300">
                    On Track
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-[#f5f9ff] dark:bg-slate-800 p-3 shadow-sm shadow-[#4987d2]/5 transition-colors duration-300">
                    <p className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
                      Calories
                    </p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-gray-100 transition-colors duration-300">
                      1,240
                    </p>
                    <p className="text-[11px] text-[#4987d2]">
                      +8% vs yesterday
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#f5f9ff] dark:bg-slate-800 p-3 shadow-sm shadow-[#4987d2]/5 transition-colors duration-300">
                    <p className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
                      Steps
                    </p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-gray-100 transition-colors duration-300">
                      8,450
                    </p>
                    <p className="text-[11px] text-[#4987d2]">Goal 10k</p>
                  </div>
                  <div className="rounded-xl bg-[#f5f9ff] dark:bg-slate-800 p-3 shadow-sm shadow-[#4987d2]/5 transition-colors duration-300">
                    <p className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
                      Check-ins
                    </p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-gray-100 transition-colors duration-300">
                      34
                    </p>
                    <p className="text-[11px] text-[#4987d2]">This week</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-md shadow-[#4987d2]/10 ring-1 ring-white/60 dark:ring-slate-800 transition-colors duration-300">
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-200 transition-colors duration-300">
                    Calorie Burn
                  </p>
                  <div className="mt-4 h-28 rounded-xl bg-gradient-to-b from-[#ebf2fe] to-white dark:from-slate-900 dark:to-slate-950 p-4 shadow-inner transition-colors duration-300">
                    <div className="h-full w-full rounded-lg bg-[radial-gradient(circle_at_30%_20%,#4987d2_0,#4987d2_8px,transparent_12px),radial-gradient(circle_at_70%_40%,#afcaed_0,#afcaed_9px,transparent_13px),radial-gradient(circle_at_50%_70%,#7da8dd_0,#7da8dd_10px,transparent_14px)]" />
                  </div>
                  <p className="mt-3 text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
                    Peak burn around 6pm
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f5f9ff] dark:bg-slate-800 p-6 shadow-md shadow-[#4987d2]/10 ring-1 ring-white/60 dark:ring-slate-800 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700 dark:text-gray-200 transition-colors duration-300">
                      Member Progress
                    </p>
                    <span className="text-xs font-semibold text-[#4987d2]">
                      +12%
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: "Strength", value: 72 },
                      { label: "Endurance", value: 65 },
                      { label: "Attendance", value: 88 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
                          <span>{item.label}</span>
                          <span className="font-semibold text-[#4987d2]">
                            {item.value}%
                          </span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-white dark:bg-slate-700 shadow-inner transition-colors duration-300">
                          <div
                            className="h-2 rounded-full bg-[#4987d2]"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-md shadow-[#4987d2]/10 ring-1 ring-white/60 dark:ring-slate-800 flex items-center justify-between transition-colors duration-300">
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-gray-100 transition-colors duration-300">
                    Monthly Revenue
                  </p>
                  <p className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
                    +18% vs last month
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-[#4987d2]">
                    $42,800
                  </p>
                  <p className="text-[11px] text-[#3f78c0]">
                    Auto-billing running
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
