type Benefit = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const benefits: Benefit[] = [
  {
    title: "Save hours of admin work",
    description:
      "Automate scheduling, billing, and reminders so your team can focus on members.",
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
          <path d="M12 3v18" />
          <path d="M5 7h14" />
          <path d="M5 12h14" />
          <path d="M5 17h14" />
        </svg>
      </div>
    ),
  },
  {
    title: "Improve member retention",
    description:
      "Engage members with progress updates, check-ins, and tailored workout plans.",
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
          <path d="M20 6a8 8 0 1 1-9 13" />
          <path d="m4 12 4 4 8-8" />
        </svg>
      </div>
    ),
  },
  {
    title: "Automate membership renewals",
    description:
      "Reduce churn with smart retries, reminders, and seamless billing experiences.",
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
          <path d="M12 6v6l4 2" />
          <path d="M5 12a7 7 0 1 0 2-5.2" />
        </svg>
      </div>
    ),
  },
  {
    title: "Track business performance",
    description:
      "Measure revenue, attendance, and class capacity with real-time dashboards.",
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
          <path d="M7 14h3v4H7z" />
          <path d="M12 10h3v8h-3z" />
          <path d="M17 8h3v10h-3z" />
        </svg>
      </div>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Benefits
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built to make gym owners and members happier
            </h2>
            <p className="text-base text-slate-600">
              Keep operations smooth, members engaged, and revenue predictable
              with Flexicurl.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-[#f5f9ff] p-6 shadow-md shadow-[#4987d2]/10 ring-1 ring-white/60 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4987d2]/15"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {benefit.description}
              </p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
