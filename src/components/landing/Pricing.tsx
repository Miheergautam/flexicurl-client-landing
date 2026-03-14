type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$39/mo",
    description: "Everything you need to organize members and classes.",
    features: [
      "Unlimited members",
      "Check-ins & attendance",
      "Basic analytics",
      "Email support",
    ],
    cta: "Start Free",
  },
  {
    name: "Growth",
    price: "$89/mo",
    description: "Automation, payments, and retention tools for scaling gyms.",
    features: [
      "Automated billing & renewals",
      "Workout plans & tracking",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Let’s talk",
    description: "Multi-location, custom workflows, and dedicated success.",
    features: [
      "Dedicated CSM",
      "Custom integrations",
      "SLAs & security reviews",
      "Onboarding & migration",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#4987d2] dark:text-[#7fb0ff] transition-colors duration-300">
              Pricing
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-gray-100 sm:text-4xl transition-colors duration-300">
              Flexible plans for every stage of your gym
            </h2>
            <p className="text-base text-slate-600 dark:text-gray-300 transition-colors duration-300">
              Choose the plan that fits your growth today and scale as your
              community expands.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-md shadow-[#4987d2]/12 ring-1 ring-white/60 dark:ring-slate-800 transition-colors duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4987d2]/20 ${
                plan.popular
                  ? "border-2 border-[#4987d2]"
                  : "border border-[#dbe8fb] dark:border-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-[#4987d2] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-[#4987d2]/25">
                  Most Popular
                </div>
              )}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100 transition-colors duration-300">
                  {plan.name}
                </h3>
                <p className="text-3xl font-semibold text-slate-900 dark:text-gray-100 transition-colors duration-300">
                  {plan.price}
                </p>
                <p className="text-sm text-slate-600 dark:text-gray-300 transition-colors duration-300">
                  {plan.description}
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-gray-300 transition-colors duration-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ebf2fe] dark:bg-slate-800 text-[#4987d2] transition-colors duration-300">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#get-started"
                  className={`flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-[#4987d2] text-white shadow-md shadow-[#4987d2]/20 hover:bg-[#3f78c0]"
                      : "border border-[#dbe8fb] dark:border-slate-700 text-[#4987d2] dark:text-[#7fb0ff] hover:bg-[#f5f9ff] dark:hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
