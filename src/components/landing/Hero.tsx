"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import theme from "@/theme/tokens";

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
  secondaryRight: { title: string; delta: string; bars: { label: string; value: number }[] };
  bottom: { title: string; subtitle: string; value: string; note: string };
};

const slides: Slide[] = [
  {
    id: "gyms",
    label: "Gyms",
    chip: "Gyms · Intelligent fitness ecosystem",
    title: "Make fitness journeys simple, structured, and sustainable.",
    description: "Manage members, track workouts, automate payments, and grow your gym — all in one soft, modern platform.",
    primary: { title: "Today's Activity", badge: "On Track", stats: [
      { label: "Calories",   value: "1,240",  footnote: "+8% vs yesterday" },
      { label: "Steps",      value: "8,450",  footnote: "Goal 10k" },
      { label: "Check-ins",  value: "34",     footnote: "This week" },
    ]},
    secondaryLeft: { title: "Calorie Burn", note: "Peak burn around 6pm" },
    secondaryRight: { title: "Member Progress", delta: "+12%", bars: [
      { label: "Strength",   value: 72 },
      { label: "Endurance",  value: 65 },
      { label: "Attendance", value: 88 },
    ]},
    bottom: { title: "Monthly Revenue", subtitle: "+18% vs last month", value: "$42,800", note: "Auto-billing running" },
  },
  {
    id: "members",
    label: "User App",
    chip: "Members · Personal coaching in one app",
    title: "Your pocket coach for workouts, meals, and recovery.",
    description: "Follow AI-tuned plans, log sessions, and stay consistent without overthinking your next move.",
    primary: { title: "Today's Plan", badge: "Ready", stats: [
      { label: "Workout",    value: "Push A", footnote: "45 mins · 6 sets" },
      { label: "Calories",   value: "1,850",  footnote: "Macros aligned" },
      { label: "Hydration",  value: "2.4 L",  footnote: "Keep sipping" },
    ]},
    secondaryLeft: { title: "Recovery & Focus", note: "Stretch, hydrate, early sleep" },
    secondaryRight: { title: "Habit Streaks", delta: "+3 days", bars: [
      { label: "Sleep",   value: 82 },
      { label: "Protein", value: 68 },
      { label: "Mobility",value: 74 },
    ]},
    bottom: { title: "Energy Score", subtitle: "Based on sleep, HRV, and activity", value: "82 / 100", note: "Keep sleep steady" },
  },
  {
    id: "community",
    label: "Community",
    chip: "Community · Social fitness & challenges",
    title: "Grow together with community-led challenges.",
    description: "Launch social workouts, share progress, and celebrate wins with your crew — online and in the club.",
    primary: { title: "Community Pulse", badge: "Live", stats: [
      { label: "Posts",      value: "128", footnote: "Today" },
      { label: "Check-ins",  value: "62",  footnote: "Gyms synced" },
      { label: "Events",     value: "14",  footnote: "This week" },
    ]},
    secondaryLeft: { title: "Challenge Heatmap", note: "Weekend peaks and club drops" },
    secondaryRight: { title: "Engagement", delta: "+9%", bars: [
      { label: "Posts",      value: 76 },
      { label: "Reactions",  value: 64 },
      { label: "Attendance", value: 81 },
    ]},
    bottom: { title: "Creator Earnings", subtitle: "+22% vs last drop", value: "$6,300", note: "Tip jar + passes" },
  },
];

// Sidebar icon paths for the dashboard mockup
const sidebarIcons = [
  "M4 6h16M4 12h10M4 18h16",
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
];

/* ─── Gyms: Desktop Dashboard ─────────────────────────────────────────── */
function GymsDashboard({ slide }: { slide: Slide }) {
  const chartHeights = [38, 45, 52, 48, 60, 72, 65, 80, 74, 88, 82, 95];
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];

  return (
    <div className="flex flex-col h-full rounded-brand-lg overflow-hidden bg-page border border-stroke">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-card border-b border-stroke shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-2 h-5 rounded-full bg-primary-light flex items-center px-3 gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-muted shrink-0" />
          <span className="text-[10px] text-muted font-medium truncate">app.flexicurl.com/dashboard</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Sidebar */}
        <div className="w-11 bg-card border-r border-stroke flex flex-col items-center py-3 gap-2 shrink-0">
          <div className="h-7 w-7 rounded-brand-md bg-primary shadow-sm shadow-primary/40 flex items-center justify-center">
            <Zap className="h-3.5 w-3.5 text-white fill-white" />
          </div>
          {sidebarIcons.map((d, i) => (
            <div key={i} className="h-7 w-7 rounded-brand-md bg-primary-light flex items-center justify-center">
              <svg className="h-3.5 w-3.5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={d} />
              </svg>
            </div>
          ))}
          <div className="mt-auto mb-1">
            <div className="h-7 w-7 rounded-full bg-brand border-2 border-card shadow-sm" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0">
            <div>
              <p className="text-xs font-bold text-heading leading-none">Dashboard</p>
              <p className="text-[9px] text-muted mt-0.5">FlexiCURL Gym · Today</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-6 rounded-brand-sm border border-stroke px-2 flex items-center">
                <span className="text-[9px] text-muted">This month</span>
              </div>
              <div className="h-6 rounded-brand-sm bg-primary px-2 flex items-center shadow-sm shadow-primary/30">
                <span className="text-[9px] text-white font-semibold">{slide.primary.badge}</span>
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-2 shrink-0">
            {slide.primary.stats.map((stat) => (
              <div key={stat.label} className="rounded-brand-md bg-card border border-stroke p-2.5 shadow-card">
                <p className="text-[9px] uppercase tracking-wide text-muted">{stat.label}</p>
                <p className="text-sm font-bold text-heading mt-0.5">{stat.value}</p>
                <p className="text-[9px] text-primary font-medium mt-0.5">{stat.footnote}</p>
              </div>
            ))}
          </div>

          {/* Revenue chart */}
          <div className="flex-1 rounded-brand-md bg-card border border-stroke p-3 shadow-card flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-2 shrink-0">
              <p className="text-[10px] font-semibold text-heading">{slide.bottom.title}</p>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-success" />
                <span className="text-[9px] font-semibold text-success">{slide.bottom.subtitle}</span>
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
                      i === 11 ? theme.colors.primary
                      : i >= 9  ? theme.colors.primaryLighter
                      : i >= 6  ? "#A8CEE8"
                      : theme.colors.stroke,
                  }}
                />
              ))}
            </div>
            <div className="flex mt-1 shrink-0">
              {months.map((m, i) => (
                <span key={i} className="flex-1 text-center text-[8px] text-muted">{m}</span>
              ))}
            </div>
          </div>

          {/* Progress + Revenue row */}
          <div className="grid grid-cols-5 gap-2 shrink-0">
            <div className="col-span-3 rounded-brand-md bg-card border border-stroke p-2.5 shadow-card">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-[9px] font-semibold text-heading">{slide.secondaryRight.title}</p>
                <span className="text-[9px] text-primary font-semibold">{slide.secondaryRight.delta}</span>
              </div>
              {slide.secondaryRight.bars.map((bar) => (
                <div key={bar.label} className="mb-1.5">
                  <div className="flex justify-between text-[8px] text-muted mb-0.5">
                    <span>{bar.label}</span>
                    <span className="text-primary font-semibold">{bar.value}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-primary-light">
                    <div className="h-1 rounded-full bg-brand" style={{ width: `${bar.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-2 rounded-brand-md p-2.5 shadow-card shadow-primary/30 flex flex-col justify-between"
              style={{ background: theme.gradients.brand }}>
              <p className="text-[9px] font-medium text-white/70">{slide.bottom.note}</p>
              <div>
                <p className="text-xl font-bold text-white leading-none">{slide.bottom.value}</p>
                <p className="text-[8px] text-white/60 mt-0.5">{slide.bottom.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── User App: Mobile Mockup ──────────────────────────────────────────── */
function UserAppMockup({ slide }: { slide: Slide }) {
  return (
    <div className="flex items-center justify-center h-full min-h-[480px]">
      <div className="relative w-[220px] rounded-[36px] overflow-hidden border-[6px] border-heading shadow-[0_32px_80px_rgba(0,0,0,0.28)]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-card">
          <span className="text-[10px] font-bold text-heading">9:41</span>
          <div className="h-3.5 w-14 rounded-full bg-heading" />
          <div className="flex items-center gap-1">
            <div className="flex items-end gap-px h-3">
              {[40, 60, 80, 100].map((h, i) => (
                <div key={i} className="w-[3px] rounded-sm bg-heading" style={{ height: `${h}%`, opacity: i === 3 ? 0.3 : 1 }} />
              ))}
            </div>
            <div className="flex items-center h-3 w-5 rounded-[2px] border border-heading p-px">
              <div className="flex-1 h-full rounded-[1px] bg-heading" />
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="bg-page px-3 pb-2 space-y-2">
          <div className="flex items-center justify-between pt-0.5">
            <div>
              <p className="text-[10px] text-muted">Good morning</p>
              <p className="text-sm font-bold text-heading leading-tight">Alex</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-brand border-2 border-card shadow-sm" />
          </div>

          {/* Hero card */}
          <div className="rounded-brand-lg p-3 shadow-md shadow-primary/30"
            style={{ background: theme.gradients.brand }}>
            <div className="flex items-start justify-between mb-1.5">
              <p className="text-[9px] font-semibold text-white/70 uppercase tracking-wide">{slide.primary.title}</p>
              <span className="text-[8px] bg-white/20 text-white font-semibold px-1.5 py-0.5 rounded-full">{slide.primary.badge}</span>
            </div>
            <p className="text-base font-bold text-white leading-tight">{slide.primary.stats[0].value}</p>
            <p className="text-[9px] text-white/60 mt-0.5">{slide.primary.stats[0].footnote}</p>
            <div className="mt-2 h-1 rounded-full bg-white/20">
              <div className="h-1 rounded-full bg-white/80 w-[60%]" />
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-1.5">
            {slide.primary.stats.slice(1).map((stat) => (
              <div key={stat.label} className="rounded-brand-md bg-card border border-stroke p-2 shadow-card">
                <p className="text-[8px] text-muted">{stat.label}</p>
                <p className="text-xs font-bold text-heading">{stat.value}</p>
                <p className="text-[8px] text-primary font-medium">{stat.footnote}</p>
              </div>
            ))}
          </div>

          {/* Streaks */}
          <div className="rounded-brand-md bg-card border border-stroke p-2.5 shadow-card">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[9px] font-semibold text-heading">{slide.secondaryRight.title}</p>
              <span className="text-[8px] text-primary font-semibold bg-primary-light px-1.5 py-0.5 rounded-full">{slide.secondaryRight.delta}</span>
            </div>
            {slide.secondaryRight.bars.map((bar) => (
              <div key={bar.label} className="mb-1">
                <div className="flex justify-between text-[8px] text-muted mb-0.5">
                  <span>{bar.label}</span>
                  <span className="text-primary font-semibold">{bar.value}%</span>
                </div>
                <div className="h-1 rounded-full bg-primary-light">
                  <div className="h-1 rounded-full bg-brand" style={{ width: `${bar.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Energy */}
          <div className="rounded-brand-md bg-card border border-stroke p-2 flex items-center justify-between shadow-card">
            <div>
              <p className="text-[9px] font-semibold text-heading">{slide.bottom.title}</p>
              <p className="text-[8px] text-muted">{slide.bottom.note}</p>
            </div>
            <p className="text-sm font-bold text-primary">{slide.bottom.value}</p>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex items-center justify-around px-4 py-2.5 bg-card border-t border-stroke">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`h-4 w-4 rounded-brand-sm ${active ? "bg-primary" : "bg-primary-light"}`} />
              {active && <div className="h-1 w-1 rounded-full bg-primary" />}
            </div>
          ))}
        </div>
        <div className="flex justify-center py-1.5 bg-card">
          <div className="h-1 w-14 rounded-full bg-stroke" />
        </div>
      </div>
    </div>
  );
}

/* ─── Community: Social Platform ───────────────────────────────────────── */
function CommunityPlatform({ slide }: { slide: Slide }) {
  const members = [
    { name: "Sarah M.", color: "from-purple-400 to-pink-400" },
    { name: "Jake R.",  color: "from-orange-400 to-amber-400" },
    { name: "Luna K.",  color: "from-teal-400 to-cyan-400" },
    { name: "Dev P.",   color: "from-primary to-primary-lighter" },
    { name: "Nina O.",  color: "from-rose-400 to-red-400" },
  ];
  const posts = [
    { author: "Sarah M.", time: "2h ago", content: "Just hit a new PR on deadlifts — 3 months of consistent training finally paying off.", likes: 24, comments: 8, color: "from-purple-400 to-pink-400" },
    { author: "Jake R.",  time: "4h ago", content: "Morning run challenge Day 14 complete. Who else is keeping the streak alive this week?", likes: 17, comments: 5, color: "from-orange-400 to-amber-400" },
  ];
  const challenges = [
    { name: "30-Day Squat", joined: 342, pct: 85, color: "bg-primary" },
    { name: "Plank Week",   joined: 218, pct: 62, color: "bg-purple-400" },
    { name: "5K Sprint",    joined: 156, pct: 44, color: "bg-amber-400" },
  ];

  return (
    <div className="flex flex-col h-full rounded-brand-lg overflow-hidden bg-page border border-stroke">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-card border-b border-stroke shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-[10px] font-bold text-heading">FlexiCURL</span>
          <span className="text-[9px] text-muted">/</span>
          <span className="text-[9px] text-muted">Community</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-5 rounded-brand-sm bg-primary-light px-2 flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-semibold text-primary">{slide.primary.badge}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Main feed */}
        <div className="flex-1 flex flex-col p-3 gap-3 overflow-hidden min-w-0">
          <div className="shrink-0">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-semibold text-heading">Active Now</p>
              <span className="text-[9px] text-primary font-medium">{slide.primary.stats[1].value} members</span>
            </div>
            <div className="flex gap-2.5">
              {members.map((m) => (
                <div key={m.name} className="flex flex-col items-center gap-1">
                  <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${m.color} ring-2 ring-card ring-offset-1 ring-offset-page shadow-sm`} />
                  <span className="text-[8px] text-muted max-w-[36px] text-center leading-tight truncate">{m.name.split(" ")[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 overflow-hidden">
            {posts.map((post) => (
              <div key={post.author} className="rounded-brand-md bg-card border border-stroke p-3 shadow-card shrink-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`h-6 w-6 rounded-full bg-gradient-to-br ${post.color} shrink-0`} />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-heading leading-none">{post.author}</p>
                    <p className="text-[8px] text-muted">{post.time}</p>
                  </div>
                </div>
                <p className="text-[10px] text-body leading-relaxed">{post.content}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-[9px] text-muted">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-[9px] text-muted">{post.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 shrink-0">
            {slide.primary.stats.map((stat) => (
              <div key={stat.label} className="rounded-brand-md bg-card border border-stroke p-2 text-center shadow-card">
                <p className="text-xs font-bold text-primary">{stat.value}</p>
                <p className="text-[9px] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-28 bg-card/80 border-l border-stroke flex flex-col p-2.5 gap-2.5 shrink-0 overflow-hidden">
          <p className="text-[9px] font-medium text-muted uppercase tracking-wide shrink-0">Trending</p>
          {challenges.map((c) => (
            <div key={c.name} className="rounded-brand-sm bg-page p-2 border border-stroke shrink-0">
              <div className={`h-1 rounded-full mb-1.5 ${c.color}`} style={{ width: `${c.pct}%` }} />
              <p className="text-[9px] font-medium text-heading leading-tight">{c.name}</p>
              <p className="text-[8px] text-muted">{c.joined} joined</p>
            </div>
          ))}

          <div className="border-t border-stroke pt-2 shrink-0">
            <p className="text-[9px] font-medium text-muted uppercase tracking-wide mb-2">Engagement</p>
            {slide.secondaryRight.bars.map((bar) => (
              <div key={bar.label} className="mb-1.5">
                <div className="flex justify-between text-[8px] text-muted mb-0.5">
                  <span>{bar.label}</span>
                  <span className="text-primary">{bar.value}%</span>
                </div>
                <div className="h-1 rounded-full bg-primary-light">
                  <div className="h-1 rounded-full bg-primary" style={{ width: `${bar.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-brand-md p-2 mt-auto shrink-0" style={{ background: theme.gradients.brand }}>
            <p className="text-[8px] text-white/70">{slide.bottom.title}</p>
            <p className="text-sm font-bold text-white leading-tight">{slide.bottom.value}</p>
            <p className="text-[8px] text-white/60">{slide.bottom.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────── */
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveIndex((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const activeSlide = slides[activeIndex];

  const slideIcons: Record<string, string> = {
    gyms:      "M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18H1.5m21 0H1.5m0 0V3.75A2.25 2.25 0 013.75 1.5h16.5A2.25 2.25 0 0122.5 3.75V4.5",
    members:   "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15h3",
    community: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-page transition-colors duration-300">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-page/70 transition-colors duration-300" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT — brand gradient panel */}
          <div
            className="relative rounded-brand-xl p-8 lg:p-10 space-y-7 overflow-hidden shadow-elevated"
            style={{ background: theme.gradients.brand }}
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/8 blur-2xl" />

            {/* Chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">{activeSlide.chip}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.15] text-white transition-all duration-500">
              {activeSlide.title}
            </h1>

            {/* Description */}
            <p className="text-[17px] leading-relaxed text-white/80 max-w-lg transition-all duration-300">
              {activeSlide.description}
            </p>

            {/* Explore selector */}
            <div className="pt-1 border-t border-white/20">
              <p className="text-[10px] font-medium uppercase tracking-widest text-white/60 mb-3">Explore by</p>
              <div className="flex flex-wrap gap-2">
                {slides.map((slide, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`inline-flex items-center gap-2 rounded-brand-md px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-white text-primary-dark shadow-lg shadow-black/10 scale-[1.02]"
                          : "bg-white/15 text-white border border-white/25 hover:bg-white/25 hover:border-white/40"
                      }`}
                    >
                      <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={slideIcons[slide.id]} />
                      </svg>
                      {slide.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — product mockups */}
          <div className="relative min-h-[560px]" key={activeSlide.id}>
            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-primary-lighter/30 blur-3xl pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            {activeSlide.id === "gyms"      && <GymsDashboard    slide={activeSlide} />}
            {activeSlide.id === "members"   && <UserAppMockup    slide={activeSlide} />}
            {activeSlide.id === "community" && <CommunityPlatform slide={activeSlide} />}
          </div>
        </div>
      </div>
    </section>
  );
}
