"use client";

import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const plans = [
  {
    name: "Starter",
    monthlyPrice: "$39",
    annualPrice: "$31",
    period: "/mo",
    description: "Everything you need to organise members and get moving.",
    features: [
      "Unlimited members",
      "Check-ins & attendance",
      "Class scheduling",
      "Basic analytics dashboard",
      "Email support",
    ],
    notIncluded: ["Automated billing", "AI workout plans", "Custom branding"],
    cta: "Start Free",
    popular: false,
    accentFrom: "#7fb0ff",
    accentTo: "#4987d2",
  },
  {
    name: "Growth",
    monthlyPrice: "$89",
    annualPrice: "$71",
    period: "/mo",
    description: "Automation, payments, and retention tools for scaling gyms.",
    features: [
      "Everything in Starter",
      "Automated billing & renewals",
      "AI workout plans & tracking",
      "Advanced analytics & reports",
      "Member mobile app",
      "Priority support",
    ],
    notIncluded: ["Multi-location", "Dedicated CSM"],
    cta: "Start Free Trial",
    popular: true,
    accentFrom: "#4987d2",
    accentTo: "#2563b0",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "",
    description: "Multi-location, custom workflows, and dedicated success.",
    features: [
      "Everything in Growth",
      "Unlimited locations",
      "Custom integrations & API",
      "Dedicated CSM",
      "SLAs & security reviews",
      "White-label branding",
      "Onboarding & migration",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
    accentFrom: "#3f78c0",
    accentTo: "#7fb0ff",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-[#4987d2]/5 dark:bg-[#4987d2]/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ebf2fe] dark:bg-[#4987d2]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4987d2] dark:text-[#7fb0ff]">
            Pricing
          </span>
          <h2 className={`${brandFont.className} text-4xl tracking-tight text-slate-900 dark:text-white sm:text-5xl max-w-3xl`}>
            Plans that grow{" "}
            <span className="text-[#4987d2]">with your gym</span>
          </h2>
          <p className="max-w-xl text-base text-slate-500 dark:text-slate-400">
            Start free, no credit card required. Scale as your community grows.
          </p>

          {/* Billing toggle */}
          <div className="mt-2 flex items-center gap-3 rounded-2xl bg-[#f4f8fe] dark:bg-slate-900 p-1.5 ring-1 ring-[#dbe8fb] dark:ring-slate-800">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                !annual
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm ring-1 ring-[#dbe8fb] dark:ring-slate-700"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm ring-1 ring-[#dbe8fb] dark:ring-slate-700"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Annual
              <span className="rounded-full bg-[#4987d2] px-1.5 py-0.5 text-[10px] font-bold text-white">
                −20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#4987d2] to-[#2563b0] text-white shadow-2xl shadow-[#4987d2]/35"
                  : "bg-white dark:bg-slate-900 ring-1 ring-[#dbe8fb]/80 dark:ring-slate-800 shadow-md shadow-[#4987d2]/8 hover:shadow-xl hover:shadow-[#4987d2]/15"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-[#4987d2] shadow-lg shadow-[#4987d2]/20 whitespace-nowrap">
                  ★ Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className="mb-3 inline-flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${plan.popular ? "bg-white/70" : "bg-[#4987d2]"}`}
                  />
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest ${
                      plan.popular ? "text-white/70" : "text-[#4987d2] dark:text-[#7fb0ff]"
                    }`}
                  >
                    {plan.name}
                  </span>
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={`text-4xl font-bold leading-none ${
                      plan.popular ? "text-white" : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  {plan.period && (
                    <span
                      className={`mb-1 text-sm ${
                        plan.popular ? "text-white/60" : "text-slate-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.popular ? "text-white/75" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`h-px w-full mb-6 ${
                  plan.popular
                    ? "bg-white/20"
                    : "bg-gradient-to-r from-transparent via-[#dbe8fb] dark:via-slate-700 to-transparent"
                }`}
              />

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span
                      className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.popular
                          ? "bg-white/20"
                          : "bg-[#ebf2fe] dark:bg-slate-800"
                      }`}
                    >
                      <svg
                        className={`h-3 w-3 ${plan.popular ? "text-white" : "text-[#4987d2]"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="m5 13 4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className={plan.popular ? "text-white/90" : "text-slate-700 dark:text-slate-300"}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm opacity-40">
                    <span
                      className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
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
                    <span className={plan.popular ? "text-white/50" : "text-slate-400 dark:text-slate-600"}>
                      {feature}
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
          ))}
        </div>

        {/* Bottom note */}
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
