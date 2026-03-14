import React from "react";

export default function CTA() {
  return (
    <section id="get-started" className="bg-[#4987d2] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-r from-[#4f91dd] via-[#4987d2] to-[#3f78c0] px-8 py-10 shadow-2xl shadow-[#4987d2]/30 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Ready to level up
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Start Growing Your Gym Today
            </h2>
            <p className="max-w-2xl text-base text-white/85">
              Launch faster with member onboarding, automated billing, and
              analytics built for modern gyms.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <a
              href="#get-started"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4987d2] shadow-lg shadow-[#1f3f6d]/15 transition hover:-translate-y-[1px] hover:bg-[#f0f5ff] sm:w-auto"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
