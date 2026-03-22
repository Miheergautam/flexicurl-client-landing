"use client";

import { useEffect, useState } from "react";

type Slide = {
  id: string;
  label: string;
  chip: string;
  title: string;
  description: string;
  primary: {
    title: string;
    badge: string;
    stats: { label: string; value: string; footnote: string }[];
  };
  secondaryLeft: { title: string; note: string };
  secondaryRight: {
    title: string;
    delta: string;
    bars: { label: string; value: number }[];
  };
  bottom: { title: string; subtitle: string; value: string; note: string };
};

const slides: Slide[] = [
  {
    id: "gyms",
    label: "Gyms",
    chip: "Gyms · Intelligent fitness ecosystem",
    title: "Make fitness journeys simple, structured, and sustainable.",
    description:
      "Manage members, track workouts, automate payments, and grow your gym — all in one soft, modern platform.",
    primary: {
      title: "Today's Activity",
      badge: "On Track",
      stats: [
        { label: "Calories", value: "1,240", footnote: "+8% vs yesterday" },
        { label: "Steps", value: "8,450", footnote: "Goal 10k" },
        { label: "Check-ins", value: "34", footnote: "This week" },
      ],
    },
    secondaryLeft: {
      title: "Calorie Burn",
      note: "Peak burn around 6pm",
    },
    secondaryRight: {
      title: "Member Progress",
      delta: "+12%",
      bars: [
        { label: "Strength", value: 72 },
        { label: "Endurance", value: 65 },
        { label: "Attendance", value: 88 },
      ],
    },
    bottom: {
      title: "Monthly Revenue",
      subtitle: "+18% vs last month",
      value: "$42,800",
      note: "Auto-billing running",
    },
  },
  {
    id: "members",
    label: "User App",
    chip: "Members · Personal coaching in one app",
    title: "Your pocket coach for workouts, meals, and recovery.",
    description:
      "Follow AI-tuned plans, log sessions, and stay consistent without overthinking your next move.",
    primary: {
      title: "Today's Plan",
      badge: "Ready",
      stats: [
        { label: "Workout", value: "Push A", footnote: "45 mins · 6 sets" },
        { label: "Calories", value: "1,850", footnote: "Macros aligned" },
        { label: "Hydration", value: "2.4 L", footnote: "Keep sipping" },
      ],
    },
    secondaryLeft: {
      title: "Recovery & Focus",
      note: "Stretch, hydrate, early sleep",
    },
    secondaryRight: {
      title: "Habit Streaks",
      delta: "+3 days",
      bars: [
        { label: "Sleep", value: 82 },
        { label: "Protein", value: 68 },
        { label: "Mobility", value: 74 },
      ],
    },
    bottom: {
      title: "Energy Score",
      subtitle: "Based on sleep, HRV, and activity",
      value: "82 / 100",
      note: "Keep sleep steady",
    },
  },
  {
    id: "community",
    label: "Community",
    chip: "Community · Social fitness & challenges",
    title: "Grow together with community-led challenges.",
    description:
      "Launch social workouts, share progress, and celebrate wins with your crew — online and in the club.",
    primary: {
      title: "Community Pulse",
      badge: "Live",
      stats: [
        { label: "Posts", value: "128", footnote: "Today" },
        { label: "Check-ins", value: "62", footnote: "Gyms synced" },
        { label: "Events", value: "14", footnote: "This week" },
      ],
    },
    secondaryLeft: {
      title: "Challenge Heatmap",
      note: "Weekend peaks and club drops",
    },
    secondaryRight: {
      title: "Engagement",
      delta: "+9%",
      bars: [
        { label: "Posts", value: 76 },
        { label: "Reactions", value: 64 },
        { label: "Attendance", value: 81 },
      ],
    },
    bottom: {
      title: "Creator Earnings",
      subtitle: "+22% vs last drop",
      value: "$6,300",
      note: "Tip jar + passes",
    },
  },
];

/* ─── Gyms: Desktop Dashboard ─── */
function GymsDashboard({ slide }: { slide: Slide }) {
  const chartHeights = [38, 45, 52, 48, 60, 72, 65, 80, 74, 88, 82, 95];
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const sidebarIcons = [
    "M4 6h16M4 12h10M4 18h16",
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  ];

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-2 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center px-3 gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate">
            app.flexicurl.com/dashboard
          </span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Sidebar */}
        <div className="w-11 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 flex flex-col items-center py-3 gap-2 shrink-0">
          <div className="h-7 w-7 rounded-xl bg-[#4987d2] shadow-sm shadow-[#4987d2]/40 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 w-1.5 rounded-[2px] ${i === 0 ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
          {sidebarIcons.map((d, i) => (
            <div
              key={i}
              className="h-7 w-7 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center"
            >
              <svg
                className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d={d}
                />
              </svg>
            </div>
          ))}
          <div className="mt-auto mb-1">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#4987d2] to-[#7fb0ff] border-2 border-white dark:border-slate-800 shadow-sm" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0">
            <div>
              <p className="text-xs font-bold text-slate-800 dark:text-gray-100 leading-none">
                Dashboard
              </p>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5">
                FlexiCURL Gym · Today
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-6 rounded-lg border border-slate-200 dark:border-slate-700 px-2 flex items-center">
                <span className="text-[9px] text-slate-500 dark:text-slate-400">
                  This month
                </span>
              </div>
              <div className="h-6 rounded-lg bg-[#4987d2] px-2 flex items-center shadow-sm shadow-[#4987d2]/30">
                <span className="text-[9px] text-white font-semibold">
                  {slide.primary.badge}
                </span>
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-2 shrink-0">
            {slide.primary.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl  border border-slate-100 dark:border-slate-800 p-2.5 shadow-sm"
              >
                <p className="text-[9px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {stat.label}
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-gray-100 mt-0.5">
                  {stat.value}
                </p>
                <p className="text-[9px] text-[#4987d2] font-medium mt-0.5">
                  {stat.footnote}
                </p>
              </div>
            ))}
          </div>

          {/* Revenue chart */}
          <div className="flex-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 shadow-sm flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-2 shrink-0">
              <p className="text-[10px] font-semibold text-slate-700 dark:text-gray-200">
                {slide.bottom.title}
              </p>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] font-semibold text-emerald-500">
                  {slide.bottom.subtitle}
                </span>
              </div>
            </div>
            <div className="flex items-end gap-1 flex-1 min-h-0">
              {chartHeights.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm min-w-0 transition-all duration-700"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 11
                        ? "#4987d2"
                        : i >= 9
                          ? "#7fb0ff"
                          : i >= 6
                            ? "#a8c9f0"
                            : "#dbeafe",
                  }}
                />
              ))}
            </div>
            <div className="flex mt-1 shrink-0">
              {months.map((m, i) => (
                <span
                  key={i}
                  className="flex-1 text-center text-[8px] text-slate-300 dark:text-slate-700"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Progress + Revenue row */}
          <div className="grid grid-cols-5 gap-2 shrink-0">
            <div className="col-span-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2.5 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-[9px] font-semibold text-slate-700 dark:text-gray-200">
                  {slide.secondaryRight.title}
                </p>
                <span className="text-[9px] text-[#4987d2] font-semibold">
                  {slide.secondaryRight.delta}
                </span>
              </div>
              {slide.secondaryRight.bars.map((bar) => (
                <div key={bar.label} className="mb-1.5">
                  <div className="flex justify-between text-[8px] text-slate-400 mb-0.5">
                    <span>{bar.label}</span>
                    <span className="text-[#4987d2] font-semibold">
                      {bar.value}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="h-1 rounded-full bg-gradient-to-r from-[#4987d2] to-[#7fb0ff]"
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-2 rounded-xl bg-gradient-to-br from-[#4987d2] to-[#2d6abf] p-2.5 shadow-sm shadow-[#4987d2]/30 flex flex-col justify-between">
              <p className="text-[9px] font-medium text-white/70">
                {slide.bottom.note}
              </p>
              <div>
                <p className="text-xl font-bold text-white leading-none">
                  {slide.bottom.value}
                </p>
                <p className="text-[8px] text-white/60 mt-0.5">
                  {slide.bottom.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── User App: Mobile Mockup ─── */
function UserAppMockup({ slide }: { slide: Slide }) {
  return (
    <div className="flex items-center justify-center h-full min-h-[480px]">
      <div className="relative w-[220px] rounded-[36px] overflow-hidden border-[6px] border-slate-900 dark:border-slate-700 shadow-[0_32px_80px_rgba(0,0,0,0.28)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-slate-900">
          <span className="text-[10px] font-bold text-slate-800 dark:text-gray-200">
            9:41
          </span>
          <div className="h-3.5 w-14 rounded-full bg-slate-900 dark:bg-black" />
          <div className="flex items-center gap-1">
            <div className="flex items-end gap-px h-3">
              {[40, 60, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-sm bg-slate-800 dark:bg-gray-200"
                  style={{ height: `${h}%`, opacity: i === 3 ? 0.3 : 1 }}
                />
              ))}
            </div>
            <div className="flex items-center h-3 w-5 rounded-[2px] border border-slate-800 dark:border-gray-200 p-px">
              <div className="flex-1 h-full rounded-[1px] bg-slate-800 dark:bg-gray-200" />
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="bg-[#f4f8ff] dark:bg-slate-950 px-3 pb-2 space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between pt-0.5">
            <div>
              <p className="text-[10px] text-slate-400">Good morning</p>
              <p className="text-sm font-bold text-slate-800 dark:text-gray-100 leading-tight">
                Alex
              </p>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#4987d2] to-[#7fb0ff] border-2 border-white dark:border-slate-800 shadow-sm" />
          </div>

          {/* Today hero card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#4987d2] via-[#3a72bb] to-[#2d5fa5] p-3 shadow-md shadow-[#4987d2]/30">
            <div className="flex items-start justify-between mb-1.5">
              <p className="text-[9px] font-semibold text-white/70 uppercase tracking-wide">
                {slide.primary.title}
              </p>
              <span className="text-[8px] bg-white/20 text-white font-semibold px-1.5 py-0.5 rounded-full">
                {slide.primary.badge}
              </span>
            </div>
            <p className="text-base font-bold text-white leading-tight">
              {slide.primary.stats[0].value}
            </p>
            <p className="text-[9px] text-white/60 mt-0.5">
              {slide.primary.stats[0].footnote}
            </p>
            <div className="mt-2 h-1 rounded-full bg-white/20">
              <div className="h-1 rounded-full bg-white/80 w-[60%]" />
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-1.5">
            {slide.primary.stats.slice(1).map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2 shadow-sm"
              >
                <p className="text-[8px] text-slate-400">{stat.label}</p>
                <p className="text-xs font-bold text-slate-800 dark:text-gray-100">
                  {stat.value}
                </p>
                <p className="text-[8px] text-[#4987d2] font-medium">
                  {stat.footnote}
                </p>
              </div>
            ))}
          </div>

          {/* Habit streaks */}
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2.5 shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[9px] font-semibold text-slate-700 dark:text-gray-200">
                {slide.secondaryRight.title}
              </p>
              <span className="text-[8px] text-[#4987d2] font-semibold bg-[#ebf2fe] dark:bg-slate-800 px-1.5 py-0.5 rounded-full">
                {slide.secondaryRight.delta}
              </span>
            </div>
            {slide.secondaryRight.bars.map((bar) => (
              <div key={bar.label} className="mb-1">
                <div className="flex justify-between text-[8px] text-slate-400 mb-0.5">
                  <span>{bar.label}</span>
                  <span className="text-[#4987d2] font-semibold">
                    {bar.value}%
                  </span>
                </div>
                <div className="h-1 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-1 rounded-full bg-gradient-to-r from-[#4987d2] to-[#7fb0ff]"
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Energy score */}
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-[9px] font-semibold text-slate-700 dark:text-gray-200">
                {slide.bottom.title}
              </p>
              <p className="text-[8px] text-slate-400">{slide.bottom.note}</p>
            </div>
            <p className="text-sm font-bold text-[#4987d2]">
              {slide.bottom.value}
            </p>
          </div>
        </div>

        {/* Bottom tab bar */}
        <div className="flex items-center justify-around px-4 py-2.5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div
                className={`h-4 w-4 rounded-md ${active ? "bg-[#4987d2]" : "bg-slate-200 dark:bg-slate-700"}`}
              />
              {active && (
                <div className="h-1 w-1 rounded-full bg-[#4987d2]" />
              )}
            </div>
          ))}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center py-1.5 bg-white dark:bg-slate-900">
          <div className="h-1 w-14 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>
      </div>
    </div>
  );
}

/* ─── Community: Social Platform ─── */
function CommunityPlatform({ slide }: { slide: Slide }) {
  const members = [
    { name: "Sarah M.", color: "from-purple-400 to-pink-400" },
    { name: "Jake R.", color: "from-orange-400 to-amber-400" },
    { name: "Luna K.", color: "from-teal-400 to-cyan-400" },
    { name: "Dev P.", color: "from-[#4987d2] to-[#7fb0ff]" },
    { name: "Nina O.", color: "from-rose-400 to-red-400" },
  ];

  const posts = [
    {
      author: "Sarah M.",
      time: "2h ago",
      content:
        "Just hit a new PR on deadlifts — 3 months of consistent training finally paying off.",
      likes: 24,
      comments: 8,
      color: "from-purple-400 to-pink-400",
    },
    {
      author: "Jake R.",
      time: "4h ago",
      content:
        "Morning run challenge Day 14 complete. Who else is keeping the streak alive this week?",
      likes: 17,
      comments: 5,
      color: "from-orange-400 to-amber-400",
    },
  ];

  const challenges = [
    { name: "30-Day Squat", joined: 342, pct: 85, color: "bg-[#4987d2]" },
    { name: "Plank Week", joined: 218, pct: 62, color: "bg-purple-400" },
    { name: "5K Sprint", joined: 156, pct: 44, color: "bg-amber-400" },
  ];

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50">
      {/* Platform header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#4987d2]" />
          <span className="text-[10px] font-bold text-slate-700 dark:text-gray-200">
            FlexiCURL
          </span>
          <span className="text-[9px] text-slate-300 dark:text-slate-600">
            /
          </span>
          <span className="text-[9px] text-slate-400">Community</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-5 rounded-lg bg-[#ebf2fe] dark:bg-slate-800 px-2 flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#4987d2] animate-pulse" />
            <span className="text-[9px] font-semibold text-[#4987d2]">
              {slide.primary.badge}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Main feed */}
        <div className="flex-1 flex flex-col p-3 gap-3 overflow-hidden min-w-0">
          {/* Active members / stories */}
          <div className="shrink-0">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-semibold text-slate-700 dark:text-gray-200">
                Active Now
              </p>
              <span className="text-[9px] text-[#4987d2] font-medium">
                {slide.primary.stats[1].value} members
              </span>
            </div>
            <div className="flex gap-2.5">
              {members.map((m) => (
                <div key={m.name} className="flex flex-col items-center gap-1">
                  <div
                    className={`h-9 w-9 rounded-full bg-gradient-to-br ${m.color} ring-2 ring-white dark:ring-slate-900 ring-offset-1 ring-offset-slate-50 dark:ring-offset-slate-950 shadow-sm`}
                  />
                  <span className="text-[8px] text-slate-400 dark:text-slate-500 max-w-[36px] text-center leading-tight truncate">
                    {m.name.split(" ")[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Post feed */}
          <div className="flex flex-col gap-2 flex-1 overflow-hidden">
            {posts.map((post) => (
              <div
                key={post.author}
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 shadow-sm shrink-0"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`h-6 w-6 rounded-full bg-gradient-to-br ${post.color} shrink-0`}
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-slate-800 dark:text-gray-100 leading-none">
                      {post.author}
                    </p>
                    <p className="text-[8px] text-slate-400">{post.time}</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-600 dark:text-gray-300 leading-relaxed">
                  {post.content}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <button className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3 text-[#4987d2]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-[9px] text-slate-400">
                      {post.likes}
                    </span>
                  </button>
                  <button className="flex items-center gap-1">
                    <svg
                      className="h-3 w-3 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="text-[9px] text-slate-400">
                      {post.comments}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Community pulse stats */}
          <div className="grid grid-cols-3 gap-2 shrink-0">
            {slide.primary.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2 text-center shadow-sm"
              >
                <p className="text-xs font-bold text-[#4987d2]">{stat.value}</p>
                <p className="text-[9px] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-28 bg-white/80 dark:bg-slate-900/80 border-l border-slate-100 dark:border-slate-800 flex flex-col p-2.5 gap-2.5 shrink-0 overflow-hidden">
          <p className="text-[9px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide shrink-0">
            Trending
          </p>

          {challenges.map((c) => (
            <div
              key={c.name}
              className="rounded-lg bg-slate-50 dark:bg-slate-800/60 p-2 border border-slate-100 dark:border-slate-800/80 shrink-0"
            >
              <div
                className={`h-1 rounded-full mb-1.5 ${c.color}`}
                style={{ width: `${c.pct}%` }}
              />
              <p className="text-[9px] font-medium text-slate-700 dark:text-gray-200 leading-tight">
                {c.name}
              </p>
              <p className="text-[8px] text-slate-400">{c.joined} joined</p>
            </div>
          ))}

          <div className="border-t border-slate-100 dark:border-slate-800 pt-2 shrink-0">
            <p className="text-[9px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
              Engagement
            </p>
            {slide.secondaryRight.bars.map((bar) => (
              <div key={bar.label} className="mb-1.5">
                <div className="flex justify-between text-[8px] text-slate-400 mb-0.5">
                  <span>{bar.label}</span>
                  <span className="text-[#4987d2]">{bar.value}%</span>
                </div>
                <div className="h-1 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-1 rounded-full bg-[#4987d2]"
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-gradient-to-br from-[#4987d2] to-[#2d6abf] p-2 mt-auto shrink-0">
            <p className="text-[8px] text-white/70">{slide.bottom.title}</p>
            <p className="text-sm font-bold text-white leading-tight">
              {slide.bottom.value}
            </p>
            <p className="text-[8px] text-white/60">{slide.bottom.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      6500,
    );
    return () => clearInterval(id);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section
      id="hero"
      className="relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-white/70 dark:bg-slate-950/70 transition-colors duration-300" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* ── LEFT SIDE ── */}
          <div className="space-y-7">
            {/* Animated chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4987d2]/25 bg-[#ebf2fe]/80 dark:bg-slate-900/80 dark:border-slate-700 px-3.5 py-1.5 shadow-sm transition-all duration-300">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4987d2] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4987d2]" />
              </span>
              <span className="text-xs font-semibold text-[#4987d2] tracking-wide">
                {activeSlide.chip}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.15] transition-all duration-500">
              <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                {activeSlide.title}
              </span>
            </h1>

            {/* Description */}
            <p className="text-[17px] leading-relaxed text-slate-500 dark:text-gray-400 max-w-lg transition-all duration-300">
              {activeSlide.description}
            </p>

            {/* CTA buttons */}
            {/*<div className="flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-full bg-[#4987d2] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4987d2]/30 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
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
              <button className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-gray-200 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200">
                <span className="flex items-center justify-center h-5 w-5 rounded-full bg-[#4987d2]/10 border border-[#4987d2]/20">
                  <svg
                    className="h-3 w-3 text-[#4987d2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch a demo
              </button>
            </div>*/}

            {/* Category selector */}
            <div className="pt-1 border-t border-slate-100 dark:border-slate-800/60">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                Explore by
              </p>
              <div className="flex flex-wrap gap-2">
                {slides.map((slide, idx) => {
                  const isActive = idx === activeIndex;
                  const slideIcons: Record<string, string> = {
                    gyms: "M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18H1.5m21 0H1.5m0 0V3.75A2.25 2.25 0 013.75 1.5h16.5A2.25 2.25 0 0122.5 3.75V4.5",
                    members:
                      "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15h3",
                    community:
                      "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
                  };
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-[#4987d2] text-white shadow-lg shadow-[#4987d2]/25 scale-[1.02]"
                          : "bg-white/70 dark:bg-slate-900/50 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-slate-700/80 hover:border-[#4987d2]/40 hover:text-[#4987d2] dark:hover:border-[#4987d2]/40 dark:hover:text-[#7fb0ff]"
                      }`}
                    >
                      <svg
                        className="h-3.5 w-3.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d={slideIcons[slide.id]}
                        />
                      </svg>
                      {slide.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Social proof */}
            {/*<div className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-2 shrink-0">
                {[
                  "from-purple-400 to-pink-400",
                  "from-orange-400 to-amber-400",
                  "from-teal-400 to-cyan-400",
                  "from-[#4987d2] to-[#7fb0ff]",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full bg-gradient-to-br ${color} border-2 border-white dark:border-slate-950 shadow-sm`}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-gray-200">
                  Trusted by 2,400+ gyms
                </p>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="h-3 w-3 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 ml-1">
                    4.9 · 800+ reviews
                  </span>
                </div>
              </div>
            </div>*/}
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="relative min-h-[560px]" key={activeSlide.id}>
            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#afcaed]/50 blur-3xl pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-[#4987d2]/30 blur-3xl pointer-events-none" />
            {activeSlide.id === "gyms" && (
              <GymsDashboard slide={activeSlide} />
            )}
            {activeSlide.id === "members" && (
              <UserAppMockup slide={activeSlide} />
            )}
            {activeSlide.id === "community" && (
              <CommunityPlatform slide={activeSlide} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
