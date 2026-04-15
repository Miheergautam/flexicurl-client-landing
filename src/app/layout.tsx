import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

/* ── Fonts — each registers a CSS variable wired into @theme (globals.css) */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flexicurl | Modern Gym Management Platform",
  description:
    "Run your gym smarter with Flexicurl — manage members, track workouts, automate payments, and grow your community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable} ${playfair.variable}
          ${geistSans.variable} ${geistMono.variable}
          antialiased font-sans
          bg-page text-body
          min-h-screen
          selection:bg-primary/20 selection:text-heading
          transition-colors duration-300
        `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
