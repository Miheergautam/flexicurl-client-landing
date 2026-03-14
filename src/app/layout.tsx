import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ebf2fe] text-slate-900 min-h-screen selection:bg-[#4987d2]/20 selection:text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
