"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const brandFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const navLinks = [
  { label: "About", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Business", href: "#how-it-works" },
  { label: "Community", href: "#join-us-now" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`rounded-2xl px-5 transition-all duration-500 ${
            scrolled
              ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 shadow-[0_8px_32px_rgba(73,135,210,0.12),0_2px_8px_rgba(0,0,0,0.06)]"
              : "bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-white/5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
          }`}
        >
          {/* Main bar */}
          <div className="h-16 flex items-center justify-between gap-6">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="h-7 w-7 rounded-xl bg-[#4987d2] shadow-md shadow-[#4987d2]/30 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <div className="grid grid-cols-2 gap-0.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-1.5 rounded-[2px] ${
                        i === 0 ? "bg-white" : "bg-white/55"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span
                className={`${brandFont.className} text-xl leading-none tracking-tight text-slate-900 dark:text-white`}
              >
                Flexi<span className="text-[#4987d2]">CURL</span>
              </span>
            </Link>

            {/* Desktop nav links — centred */}
            <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] transition-colors duration-200 rounded-xl hover:bg-[#4987d2]/[0.06] dark:hover:bg-[#4987d2]/10 group"
                >
                  {link.label}
                  <span className="absolute bottom-1.5 left-3.5 right-3.5 h-[2px] rounded-full bg-[#4987d2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-1.5 shrink-0">
              {/* Theme toggle */}
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="h-9 w-9 flex items-center justify-center rounded-xl text-slate-500 dark:text-slate-400 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] hover:bg-[#4987d2]/[0.07] dark:hover:bg-[#4987d2]/15 border border-transparent hover:border-[#4987d2]/20 transition-all duration-200"
              >
                {mounted ? (
                  isDark ? (
                    <Sun className="h-[17px] w-[17px]" />
                  ) : (
                    <Moon className="h-[17px] w-[17px]" />
                  )
                ) : (
                  <div className="h-[17px] w-[17px]" />
                )}
              </button>

              <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-0.5" />

              {/* Sign in */}
              <a
                href="#login"
                className="px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] hover:bg-[#4987d2]/[0.06] dark:hover:bg-[#4987d2]/10 rounded-xl transition-all duration-200"
              >
                Sign in
              </a>

              {/* CTA */}
              <a
                href="#get-started"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#4987d2] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#4987d2]/25 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Get Started
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center h-9 w-9 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm hover:border-[#4987d2]/40 transition-all duration-200 gap-[5px]"
            >
              <span
                className={`block h-[1.5px] w-4 rounded-full bg-slate-700 dark:bg-slate-300 transition-all duration-300 origin-center ${
                  open ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 rounded-full bg-slate-700 dark:bg-slate-300 transition-all duration-200 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 rounded-full bg-slate-700 dark:bg-slate-300 transition-all duration-300 origin-center ${
                  open ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              open ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <div className="border-t border-slate-100 dark:border-slate-800/80 pt-3 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] hover:bg-[#4987d2]/[0.06] dark:hover:bg-[#4987d2]/10 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-3 mt-3 space-y-1.5">
                {/* Theme row */}
                <button
                  type="button"
                  onClick={() => {
                    toggleTheme();
                    setOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] hover:bg-[#4987d2]/[0.06] dark:hover:bg-[#4987d2]/10 rounded-xl transition-all duration-200"
                >
                  <span>{isDark ? "Light mode" : "Dark mode"}</span>
                  {mounted ? (
                    isDark ? (
                      <Sun className="h-4 w-4 text-amber-500" />
                    ) : (
                      <Moon className="h-4 w-4 text-[#4987d2]" />
                    )
                  ) : (
                    <div className="h-4 w-4" />
                  )}
                </button>

                {/* Sign in */}
                <a
                  href="#login"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#4987d2] dark:hover:text-[#7fb0ff] hover:bg-[#4987d2]/[0.06] dark:hover:bg-[#4987d2]/10 rounded-xl transition-all duration-200"
                >
                  Sign in
                </a>

                {/* CTA */}
                <a
                  href="#get-started"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#4987d2] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-[#4987d2]/25 hover:opacity-90 transition-all duration-200 mt-1"
                >
                  Get Started Free
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
