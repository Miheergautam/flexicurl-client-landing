"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const plans = [
  {
    id: "starter",
    name: "Starter",
    audience: "For small gyms",
    audienceColor: "#4987d2",
    monthlyPrice: "$39",
    annualPrice: "$31",
    description: "Everything you need to organise members and get running.",
    features: [
      "Up to 150 members",
      "Class scheduling & check-ins",
      "Basic analytics dashboard",
      "Member mobile app",
      "Email support",
    ],
    notIncluded: [
      "Automated billing",
      "AI workout plans",
      "Community tools",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    audience: "For scaling gyms",
    audienceColor: "#4987d2",
    monthlyPrice: "$89",
    annualPrice: "$71",
    description: "Automation, payments, AI plans, and full community tools.",
    features: [
      "Unlimited members",
      "Automated billing & renewals",
      "AI workout plans & nutrition",
      "Advanced analytics & exports",
      "Community challenges & feed",
      "Priority support",
    ],
    notIncluded: [
      "Multi-location",
      "Dedicated CSM",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    audience: "For gym chains",
    audienceColor: "#4987d2",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description: "Multi-location, custom workflows, and dedicated success.",
    features: [
      "Unlimited locations",
      "Custom integrations & API",
      "White-label member app",
      "Dedicated CSM & onboarding",
      "SLAs & security reviews",
      "Custom reporting",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const addons = [
  { label: "Community Pro", note: "Challenges, leaderboards & creator tools", price: "+$29/mo", color: "#059669" },
  { label: "Member AI Coach", note: "AI nutrition + recovery insights per member", price: "+$2/member", color: "#7c3aed" },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="relative bg-[#f4f8fe] dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[#4987d2]/6 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#4987d2]/10 dark:bg-[#4987d2]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff]">
            Pricing
          </span>
          <h2
            className={`${brandFont.className} text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white max-w-3xl`}
          >
            Plans that grow{" "}
            <span className="text-[#4987d2]">with your gym</span>
          </h2>
          <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
            Start free. Scale as your community grows. No surprise fees.
          </p>

          {/* Billing toggle */}
          <div className="mt-2 inline-flex items-center rounded-2xl bg-white dark:bg-slate-900 p-1.5 ring-1 ring-[#dbe8fb] dark:ring-slate-800 gap-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-xl px-5 py-2 text-sm font-medium transition-all duration-200 ${
                !annual
                  ? "bg-[#4987d2] text-white shadow-md shadow-[#4987d2]/25"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-medium transition-all duration-200 ${
                annual
                  ? "bg-[#4987d2] text-white shadow-md shadow-[#4987d2]/25"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700"
              }`}
            >
              Annual
              <span className="rounded-full bg-emerald-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                −20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid gap-5 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#4987d2] to-[#2563b0] shadow-2xl shadow-[#4987d2]/30"
                  : "bg-white dark:bg-slate-900 ring-1 ring-[#dbe8fb] dark:ring-slate-800 shadow-md shadow-[#4987d2]/6 hover:shadow-xl hover:shadow-[#4987d2]/12"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1 text-xs font-bold text-[#4987d2] shadow-lg shadow-[#4987d2]/15">
                  ★ Most popular
                </div>
              )}

              <div className="flex flex-col flex-1 p-8 gap-6">
                {/* Plan name */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`h-2 w-2 rounded-full ${plan.popular ? "bg-white/60" : "bg-[#4987d2]"}`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        plan.popular
                          ? "text-white/60"
                          : "text-[#4987d2] dark:text-[#7fb0ff]"
                      }`}
                    >
                      {plan.audience}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      plan.popular ? "text-white" : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-end gap-1">
                    <span
                      className={`text-4xl font-bold leading-none ${
                        plan.popular ? "text-white" : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice !== "Custom" && (
                      <span
                        className={`mb-1 text-sm ${
                          plan.popular ? "text-white/60" : "text-slate-400"
                        }`}
                      >
                        /mo
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      plan.popular ? "text-white/70" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`h-px w-full ${
                    plan.popular
                      ? "bg-white/15"
                      : "bg-gradient-to-r from-transparent via-[#dbe8fb] dark:via-slate-700 to-transparent"
                  }`}
                />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular ? "bg-white/20" : "bg-[#ebf2fe] dark:bg-slate-800"
                        }`}
                      >
                        <svg
                          className={`h-3 w-3 ${plan.popular ? "text-white" : "text-[#4987d2]"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m5 13 4 4L19 7" />
                        </svg>
                      </span>
                      <span className={plan.popular ? "text-white/90" : "text-slate-700 dark:text-slate-300"}>
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm opacity-35">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular ? "bg-white/10" : "bg-slate-100 dark:bg-slate-800"
                        }`}
                      >
                        <svg
                          className={`h-3 w-3 ${plan.popular ? "text-white" : "text-slate-400"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <span className={plan.popular ? "text-white/40" : "text-slate-400 dark:text-slate-600"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#get-started"
                  className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-white text-[#4987d2] shadow-lg shadow-black/10 hover:bg-[#f0f5ff]"
                      : "bg-[#4987d2] text-white shadow-md shadow-[#4987d2]/25 hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on strip */}
        <div className="mt-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600">
            Available add-ons
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {addons.map((addon) => (
              <div
                key={addon.label}
                className="flex items-center justify-between rounded-2xl bg-white dark:bg-slate-900 px-5 py-4 ring-1 ring-[#dbe8fb] dark:ring-slate-800"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: addon.color }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {addon.label}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{addon.note}</p>
                  </div>
                </div>
                <span
                  className="text-sm font-bold"
                  style={{ color: addon.color }}
                >
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400 dark:text-slate-600">
          All plans include a 14-day free trial. No credit card required.{" "}
          <a href="#features" className="text-[#4987d2] dark:text-[#7fb0ff] hover:underline">
            Compare all features →
          </a>
        </p>
      </div>
    </section>
  );
}
