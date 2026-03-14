"use client";

import Link from "next/link";
import { Pacifico } from "next/font/google";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "For Gyms", href: "#how-it-works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/"
            className={`${pacifico.className} text-2xl leading-none text-[#4987d2]`}
            aria-label="Flexicurl home"
          >
            Flexicurl
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 dark:text-gray-200 hover:text-[#4987d2] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )
              ) : (
                <div className="h-4 w-4" />
              )}
            </button>

            <a
              href="#login"
              className="text-sm font-medium text-slate-700 dark:text-gray-200 hover:text-[#4987d2] transition-colors duration-200"
            >
              Login
            </a>

            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full bg-[#4987d2] px-6 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Get Started
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-gray-200 hover:text-[#4987d2] transition-colors duration-200"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-80 pb-5" : "max-h-0"
          }`}
        >
          <nav className="rounded-2xl bg-white/90 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm p-4 flex flex-col gap-3 transition-colors duration-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm font-medium text-slate-700 dark:text-gray-200 hover:text-[#4987d2] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="px-2 py-2 text-sm font-medium text-slate-700 dark:text-gray-200 hover:text-[#4987d2] transition-colors duration-200"
            >
              Login
            </a>

            <button
              type="button"
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="inline-flex items-center gap-2 rounded-full p-2 text-sm font-medium text-slate-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )
              ) : (
                <div className="h-4 w-4" />
              )}
              <span>Toggle theme</span>
            </button>

            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-[#4987d2] px-6 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
