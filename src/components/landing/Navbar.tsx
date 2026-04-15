"use client";

import Link from "next/link";
import { Moon, Sun, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About",     href: "#pricing" },
  { label: "Features",  href: "#features" },
  { label: "Business",  href: "#how-it-works" },
  { label: "Community", href: "#join-us-now" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`rounded-brand-lg px-5 transition-all duration-500 ${
            scrolled
              ? "bg-card/85 backdrop-blur-2xl border border-stroke/60 shadow-elevated"
              : "bg-card/50 backdrop-blur-xl border border-card/50 shadow-card"
          }`}
        >
          {/* ── Main bar ── */}
          <div className="h-16 flex items-center justify-between gap-6">

            {/* Brand */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="h-7 w-7 rounded-brand-md bg-primary shadow-md shadow-primary/30 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Zap className="h-4 w-4 text-white fill-white" />
              </div>
              <span className="font-display text-xl leading-none tracking-tight text-heading">
                Flexi<span className="text-primary">CURL</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-medium text-body hover:text-primary rounded-brand-md hover:bg-primary-light transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1.5 left-3.5 right-3.5 h-[2px] rounded-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
                className="h-9 w-9 flex items-center justify-center rounded-brand-md text-muted hover:text-primary hover:bg-primary-light border border-transparent hover:border-stroke transition-all duration-200"
              >
                {mounted ? (
                  isDark ? <Sun className="h-[17px] w-[17px]" /> : <Moon className="h-[17px] w-[17px]" />
                ) : (
                  <div className="h-[17px] w-[17px]" />
                )}
              </button>

              <div className="w-px h-4 bg-stroke mx-0.5" />

              {/* Sign in */}
              <a
                href="#login"
                className="px-3.5 py-2 text-sm font-medium text-body hover:text-primary hover:bg-primary-light rounded-brand-md transition-all duration-200"
              >
                Sign in
              </a>

              {/* Primary CTA */}
              <a
                href="#get-started"
                className="inline-flex items-center gap-1.5 rounded-brand-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/25 hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Get Started
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((p) => !p)}
              className="md:hidden flex flex-col justify-center items-center h-9 w-9 rounded-brand-md border border-stroke bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-200 gap-[5px]"
            >
              {[
                open ? "rotate-45 translate-y-[6.5px]" : "",
                open ? "opacity-0 scale-x-0" : "",
                open ? "-rotate-45 -translate-y-[6.5px]" : "",
              ].map((extra, i) => (
                <span
                  key={i}
                  className={`block h-[1.5px] w-4 rounded-full bg-heading transition-all duration-300 origin-center ${extra}`}
                />
              ))}
            </button>
          </div>

          {/* ── Mobile menu ── */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 pb-4" : "max-h-0"}`}>
            <div className="border-t border-stroke pt-3 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2.5 text-sm font-medium text-body hover:text-primary hover:bg-primary-light rounded-brand-md transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t border-stroke pt-3 mt-3 space-y-1.5">
                <button
                  type="button"
                  onClick={() => { toggleTheme(); setOpen(false); }}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-body hover:text-primary hover:bg-primary-light rounded-brand-md transition-all duration-200"
                >
                  <span>{isDark ? "Light mode" : "Dark mode"}</span>
                  {mounted ? (
                    isDark ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4 text-primary" />
                  ) : <div className="h-4 w-4" />}
                </button>

                <a
                  href="#login"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2.5 text-sm font-medium text-body hover:text-primary hover:bg-primary-light rounded-brand-md transition-all duration-200"
                >
                  Sign in
                </a>

                <a
                  href="#get-started"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-brand-md bg-primary px-4 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 hover:bg-primary-dark transition-all duration-200 mt-1"
                >
                  Get Started Free
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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
