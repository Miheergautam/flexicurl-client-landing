"use client";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Add your gym and members",
    description:
      "Import your member list, set roles, and configure locations in minutes.",
  },
  {
    title: "Track workouts and attendance",
    description:
      "Log sessions, monitor check-ins, and keep members motivated with shared plans.",
  },
  {
    title: "Grow your gym with insights",
    description:
      "Unlock analytics on revenue, retention, and capacity to make confident decisions.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#ebf2fe] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#4987d2] dark:text-[#7fb0ff] transition-colors duration-300">
              How it works
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-gray-100 sm:text-4xl transition-colors duration-300">
              Launch and scale your gym in three simple steps
            </h2>
            <p className="text-base text-slate-600 dark:text-gray-300 transition-colors duration-300">
              Set up once and keep your operations, members, and payments
              flowing seamlessly.
            </p>
          </div>
        </div>

        <div className="relative mt-12 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-6">
          <div className="absolute left-6 right-6 top-7 hidden h-[2px] bg-gradient-to-r from-[#afcaed] via-[#4987d2]/60 to-[#afcaed] dark:from-slate-800 dark:via-[#4987d2]/50 dark:to-slate-800 transition-colors duration-300 md:block" />
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex-1 rounded-2xl bg-white/90 dark:bg-slate-900 p-6 shadow-md shadow-[#4987d2]/10 ring-1 ring-white/60 dark:ring-slate-800 backdrop-blur transition-colors duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4987d2]/20"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#4987d2] text-white font-semibold shadow-md shadow-[#4987d2]/25">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-[#f5f9ff] dark:bg-slate-800 p-4 text-xs text-[#3f78c0] dark:text-[#8cb6ff] shadow-inner shadow-[#4987d2]/5 transition-colors duration-300">
                Smooth onboarding, clear tracking, and insight-driven growth for
                your members and coaches.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
