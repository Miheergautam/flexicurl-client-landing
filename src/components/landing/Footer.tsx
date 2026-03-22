import React from "react";
import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

const links = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "For Gyms", href: "#how-it-works" },
      { label: "Benefits", href: "#benefits" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", href: "#help" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

const socials = [
  {
    label: "Twitter",
    href: "#twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#linkedin",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Gyms" },
  { value: "50k+", label: "Members" },
  { value: "4.9★", label: "Rating" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#dbe8fb] bg-white dark:bg-slate-950 dark:border-slate-800 transition-colors duration-300">
      {/* Top band */}
      <div className="border-b border-[#dbe8fb] dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-[#4987d2] shadow-md shadow-[#4987d2]/30 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-1.5 rounded-[2px] ${i === 0 ? "bg-white" : "bg-white/55"}`}
                  />
                ))}
              </div>
            </div>
            <span className={`${brandFont.className} text-xl tracking-tight text-slate-900 dark:text-white`}>
              Flexi<span className="text-[#4987d2]">CURL</span>
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-sm font-bold text-[#4987d2]">{s.value}</span>
                <span className="text-xs text-slate-400 dark:text-slate-600">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 dark:text-slate-600 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] hover:bg-[#ebf2fe] dark:hover:bg-slate-800 border border-transparent hover:border-[#dbe8fb] dark:hover:border-slate-700 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand tagline */}
          <div className="space-y-4 max-w-xs">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              The modern gym management platform to run, grow, and delight your
              members — from day one.
            </p>
            {/* Mini fitness bar illustration */}
            <div className="flex items-end gap-1 h-8">
              {[30, 50, 40, 70, 55, 80, 65, 90, 75, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i >= 7 ? "#4987d2" : "#dbe8fb",
                    opacity: i >= 7 ? 1 : (0.3 + i * 0.07),
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-600">Member engagement trending up 📈</p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {links.map((section) => (
              <div key={section.title} className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#dbe8fb] dark:border-slate-800 pt-6 text-sm text-slate-400 dark:text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flexicurl. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="hover:text-[#4987d2] dark:hover:text-[#7fb0ff] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
