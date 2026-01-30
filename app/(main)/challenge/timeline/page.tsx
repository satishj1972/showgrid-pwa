'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ChallengeTimelinePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#101622] pb-24">
      <main className="max-w-[1000px] mx-auto px-6 py-10 space-y-8">
        {/* Status Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30">
            <span className="flex h-2 w-2 rounded-full bg-neon-green pulse-ring"></span>
            <span className="text-xs font-bold text-neon-green uppercase tracking-widest leading-none">Live</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight italic">
            The Monsoon Groove Showdown
          </h1>
          <p className="text-[#90a4cb] text-sm font-medium uppercase tracking-[0.2em]">
            Current Track: "Jai Ho - Remix" (A.R. Rahman)
          </p>
        </div>

        {/* Countdown Timer Card */}
        <div className="bg-[#1a2333] border border-[#222f49] rounded-xl p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 h-64 w-64 bg-neon-blue/5 rounded-full blur-3xl group-hover:bg-neon-blue/10 transition-all"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-xs font-bold text-neon-blue mb-6 tracking-widest uppercase">
              Submission Window Closes In
            </p>
            
            <div className="flex gap-4 md:gap-8 justify-center w-full">
              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="w-full h-20 flex items-center justify-center rounded-xl bg-[#222f49] border border-[#2d3b5a]">
                  <span className="text-4xl md:text-5xl font-black text-white">{formatNumber(timeLeft.days)}</span>
                </div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-tighter">Days</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="w-full h-20 flex items-center justify-center rounded-xl bg-[#222f49] border border-[#2d3b5a]">
                  <span className="text-4xl md:text-5xl font-black text-white">{formatNumber(timeLeft.hours)}</span>
                </div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-tighter">Hours</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="w-full h-20 flex items-center justify-center rounded-xl bg-[#222f49] border border-[#2d3b5a]">
                  <span className="text-4xl md:text-5xl font-black text-white">{formatNumber(timeLeft.minutes)}</span>
                </div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-tighter">Minutes</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="w-full h-20 flex items-center justify-center rounded-xl bg-neon-blue/20 border border-neon-blue/30">
                  <span className="text-4xl md:text-5xl font-black text-neon-blue">{formatNumber(timeLeft.seconds)}</span>
                </div>
                <span className="text-xs font-medium text-neon-blue uppercase tracking-tighter font-bold">Seconds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Stepper Timeline */}
        <div className="w-full py-8 px-4">
          <div className="relative flex items-center justify-between w-full">
            <div className="absolute left-0 top-5 h-1 w-full bg-[#222f49] rounded-full"></div>
            <div className="absolute left-0 top-5 h-1 w-1/2 bg-neon-blue rounded-full"></div>

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-neon-blue flex items-center justify-center shadow-[0_0_20px_rgba(37,106,244,0.4)]">
                <span className="material-symbols-outlined text-white text-xl">check</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white">Submissions Open</p>
                <p className="text-[10px] text-slate-400 uppercase font-semibold">Started Oct 10</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-neon-blue flex items-center justify-center ring-4 ring-[#101622] shadow-[0_0_20px_rgba(37,106,244,0.2)]">
                <span className="material-symbols-outlined text-white text-xl">upload</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-neon-blue">Active Window</p>
                <p className="text-[10px] text-neon-blue uppercase font-bold">Closing Oct 15</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#222f49] flex items-center justify-center border-2 border-[#2d3b5a]">
                <span className="material-symbols-outlined text-slate-500 text-xl">star_half</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-600">Ratings Live</p>
                <p className="text-[10px] text-slate-400 uppercase font-semibold">Starts Oct 16</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#222f49] flex items-center justify-center border-2 border-[#2d3b5a]">
                <span className="material-symbols-outlined text-slate-500 text-xl">emoji_events</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-600">Winners Announced</p>
                <p className="text-[10px] text-slate-400 uppercase font-semibold">Oct 20</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="bg-[#1a2333]/50 border border-[#222f49] rounded-xl p-6 flex flex-col items-center">
            <span className="text-3xl font-black text-white">42</span>
            <span className="text-xs text-[#90a4cb] uppercase tracking-wider mt-1">Studios Joined</span>
          </div>

          <div className="bg-[#1a2333]/50 border border-[#222f49] rounded-xl p-6 flex flex-col items-center">
            <span className="text-3xl font-black text-white">128</span>
            <span className="text-xs text-[#90a4cb] uppercase tracking-wider mt-1">Video Entries</span>
          </div>

          <Link href="/leaderboard" className="bg-neon-blue hover:bg-neon-blue/90 transition-colors rounded-xl px-6 py-4 flex items-center justify-center gap-3 shadow-lg group">
            <span className="text-lg font-bold text-white uppercase tracking-tight italic">View Live Leaderboard</span>
            <span className="material-symbols-outlined text-white transition-transform group-hover:translate-x-1">trending_up</span>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#222f49]">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="h-8 w-8 rounded-full border-2 border-[#101622] bg-gradient-to-br from-primary to-purple-500"></div>
              <div className="h-8 w-8 rounded-full border-2 border-[#101622] bg-gradient-to-br from-blue-500 to-cyan-500"></div>
              <div className="h-8 w-8 rounded-full border-2 border-[#101622] bg-gradient-to-br from-orange-500 to-yellow-500"></div>
            </div>
            <p className="text-xs text-slate-400">+12 studios currently uploading...</p>
          </div>
          <div className="flex gap-4">
            <Link href="/challenge" className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase">
              <span className="material-symbols-outlined text-base">description</span>
              Review Track Rules
            </Link>
            <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase">
              <span className="material-symbols-outlined text-base">share</span>
              Share Challenge
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
