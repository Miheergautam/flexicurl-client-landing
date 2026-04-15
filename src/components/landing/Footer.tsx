import { Zap } from "lucide-react";
import theme from "@/theme/tokens";

const nav = [
  {
    title: "Product",
    items: [
      { label: "For Gyms", href: "#for-who" },
      { label: "For Members", href: "#for-who" },
      { label: "For Communities", href: "#for-who" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Centre", href: "#help" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

const socials = [
  {
    label: "Twitter / X",
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
  {
    label: "YouTube",
    href: "#youtube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const audiencePills = [
  { label: "For Gym Owners", color: theme.colors.gyms, href: "#for-who" },
  { label: "For Members", color: theme.colors.members, href: "#for-who" },
  { label: "For Communities", color: theme.colors.community, href: "#for-who" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-page border-t border-dark-stroke">
      {/* Top CTA band */}
      <div className="border-b border-dark-stroke">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-brand-md bg-primary shadow-lg shadow-primary/30 flex items-center justify-center">
              <Zap className="h-4 w-4 text-white fill-white" />
            </div>
            <span className="font-display text-xl tracking-tight text-dark-text">
              Flexi<span className="text-primary">CURL</span>
            </span>
          </div>

          {/* Audience pills */}
          <div className="flex flex-wrap gap-2">
            {audiencePills.map((pill) => (
              <a
                key={pill.label}
                href={pill.href}
                className="rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200 hover:opacity-80"
                style={{
                  borderColor: `${pill.color}40`,
                  color: pill.color,
                  background: `${pill.color}10`,
                }}
              >
                {pill.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-brand-md text-dark-muted hover:text-dark-text hover:bg-white/8 border border-transparent hover:border-dark-stroke transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-5">
            <p className="text-sm text-dark-muted leading-relaxed max-w-xs">
              The modern platform for gym owners, fitness members, and community
              builders — all in one place.
            </p>

            {/* Mini bar chart — fitness motif */}
            <div className="flex items-end gap-1 h-10">
              {[30, 50, 40, 65, 55, 80, 70, 90, 78, 62, 88, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background:
                      i >= 9
                        ? theme.colors.primary
                        : `rgba(91, 155, 213, ${0.15 + i * 0.06})`,
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-dark-muted">
              Member engagement trending up 📈
            </p>
          </div>

          {/* Link columns */}
          {nav.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-[10px] font-medium uppercase tracking-widest text-dark-muted">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-dark-muted hover:text-dark-text transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-dark-stroke pt-6 text-sm text-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flexicurl Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="hover:text-dark-text transition-colors duration-200"
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
