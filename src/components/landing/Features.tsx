type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Member Management",
    description:
      "Centralize member profiles, waivers, and communication in one place.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ebf2fe] text-[#4987d2]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
    ),
  },
  {
    title: "Workout Tracking",
    description:
      "Log workouts, track progress, and share plans with members instantly.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ebf2fe] text-[#4987d2]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 17.5 20 12l-5.5-5.5" />
          <path d="M9.5 17.5 4 12l5.5-5.5" />
        </svg>
      </div>
    ),
  },
  {
    title: "Smart Analytics",
    description:
      "Dashboards and KPIs that surface revenue, attendance, and retention trends.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ebf2fe] text-[#4987d2]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-6" />
        </svg>
      </div>
    ),
  },
  {
    title: "Payments Automation",
    description:
      "Automate billing, renewals, and failed payment recovery with ease.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ebf2fe] text-[#4987d2]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10H7" />
          <path d="M21 6H3" />
          <path d="M3 14h18" />
          <path d="M7 18h14" />
          <path d="M3 6v12" />
        </svg>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-gray-400 transition-colors duration-300">
              Powerful tools
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-gray-100 sm:text-4xl transition-colors duration-300">
              Everything you need to run and grow your gym
            </h2>
            <p className="text-base text-slate-600 dark:text-gray-300 transition-colors duration-300">
              Streamline operations, delight members, and get actionable
              insights — all inside Flexicurl.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-[#f8fbff] dark:bg-slate-900 p-6 shadow-md shadow-[#4987d2]/10 ring-1 ring-white/60 dark:ring-slate-800 transition-colors duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4987d2]/15"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
