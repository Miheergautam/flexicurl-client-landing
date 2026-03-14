import React from "react";

const links = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "For Gyms", href: "#how-it-works" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#dbe8fb] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="text-xl font-semibold tracking-tight text-[#4987d2]">
              Flexicurl
            </div>
            <p className="max-w-sm text-sm text-slate-600">
              The modern gym management and community platform to run, grow, and
              delight your members.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {links.map((section) => (
              <div key={section.title} className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="transition hover:text-slate-900"
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

        <div className="mt-10 flex flex-col gap-4 border-t border-[#dbe8fb] pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flexicurl. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="transition hover:text-slate-800">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-slate-800">
              Terms
            </a>
            <a href="#contact" className="transition hover:text-slate-800">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
