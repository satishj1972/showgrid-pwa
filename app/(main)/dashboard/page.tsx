'use client';

import { useState } from 'react';
import Link from 'next/link';

type Mode = 'studio' | 'fan';

const studioData = {
  globalRank: 42,
  rankChange: '+3 spots this week',
  gridScore: 12850,
  scoreProgress: 80,
  retention: 94,
  retentionGrowth: '+12% Monthly Growth',
  currentVideo: {
    title: 'Bol Shakalaka Choreography',
    subtitle: 'Mumbai Urban Street Mix • 482k Views',
    trending: '#12',
    thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800',
  },
  mastery: {
    energy: 98,
    choreography: 85,
    sync: 92,
  },
};

const fanData = {
  performancesRated: 156,
  badge: 'Active Reviewer Badge',
  cityPride: 'Mumbai',
  pointsEarned: 2400,
  pointsNote: 'Redeem for VIP voting power',
  recentlyRated: [
    { id: '1', name: 'Kings United', rating: 9.8, image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400' },
    { id: '2', name: 'MJ5 Official', rating: 8.5, image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400' },
    { id: '3', name: 'V-Unbeatable', rating: 9.2, image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400' },
  ],
};

export default function DashboardPage() {
  const [mode, setMode] = useState<Mode>('studio');

  return (
    <div className="min-h-screen bg-background-dark pb-24">
      <main className="max-w-[1100px] mx-auto px-6 py-8">
        {/* Page Heading & Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-border-primary pb-8 mb-8">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-black italic mb-2">Your Dashboard</h1>
            <p className="text-text-secondary text-lg">Switch between your creator studio and your fan experience.</p>
          </div>

          {/* Mode Switcher */}
          <div className="flex h-14 w-full md:w-80 items-center rounded-xl bg-background-card p-1.5 border border-primary/40 shadow-[0_0_10px_rgba(244,37,157,0.2)]">
            <button
              onClick={() => setMode('studio')}
              className={`flex-1 h-full flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-widest text-xs transition-all ${
                mode === 'studio' 
                  ? 'bg-primary text-white' 
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">movie_edit</span>
              Studio Mode
            </button>
            <button
              onClick={() => setMode('fan')}
              className={`flex-1 h-full flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-widest text-xs transition-all ${
                mode === 'fan' 
                  ? 'bg-[#00f2ff] text-black' 
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">stars</span>
              Fan Mode
            </button>
          </div>
        </div>

        {/* Studio Mode Content */}
        {mode === 'studio' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group flex flex-col gap-3 rounded-xl p-6 border border-border-primary bg-background-card hover:border-primary/60 transition-all">
                <div className="flex justify-between items-start">
                  <p className="text-text-secondary text-xs font-bold uppercase tracking-widest">Global Rank</p>
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">leaderboard</span>
                </div>
                <p className="text-white text-4xl font-black">#{studioData.globalRank}</p>
                <p className="text-primary text-xs font-semibold">{studioData.rankChange}</p>
              </div>

              <div className="group flex flex-col gap-3 rounded-xl p-6 border border-border-primary bg-background-card hover:border-primary/60 transition-all">
                <div className="flex justify-between items-start">
                  <p className="text-text-secondary text-xs font-bold uppercase tracking-widest">Total Grid Score</p>
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">bolt</span>
                </div>
                <p className="text-white text-4xl font-black">{studioData.gridScore.toLocaleString()}</p>
                <div className="w-full bg-background-dark h-1 rounded-full overflow-hidden mt-1">
                  <div className="bg-primary h-full rounded-full" style={{ width: `${studioData.scoreProgress}%` }}></div>
                </div>
              </div>

              <div className="group flex flex-col gap-3 rounded-xl p-6 border border-border-primary bg-background-card hover:border-primary/60 transition-all">
                <div className="flex justify-between items-start">
                  <p className="text-text-secondary text-xs font-bold uppercase tracking-widest">Audience Retention</p>
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">trending_up</span>
                </div>
                <p className="text-white text-4xl font-black">{studioData.retention}%</p>
                <p className="text-neon-green text-xs font-semibold">{studioData.retentionGrowth}</p>
              </div>
            </div>

            {/* Video & Mastery Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Current Video */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                  Current Challenge Video
                </h2>
                <Link href="/watch" className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border-primary group block">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <img src={studioData.currentVideo.thumbnail} alt="Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="bg-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-2 inline-block">
                      Trending {studioData.currentVideo.trending}
                    </span>
                    <h3 className="text-2xl font-black text-white">{studioData.currentVideo.title}</h3>
                    <p className="text-sm text-gray-300">{studioData.currentVideo.subtitle}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary p-4 rounded-full shadow-[0_0_20px_rgba(244,37,157,0.5)]">
                      <span className="material-symbols-outlined text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Mastery Analysis */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                  Mastery Analysis
                </h2>
                <div className="bg-background-card border border-border-primary rounded-2xl p-6 h-[calc(100%-2.5rem)] flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                        <span className="text-text-secondary">Energy</span>
                        <span className="text-primary">{studioData.mastery.energy}%</span>
                      </div>
                      <div className="h-2 w-full bg-background-dark rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${studioData.mastery.energy}%` }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                        <span className="text-text-secondary">Choreography</span>
                        <span className="text-primary">{studioData.mastery.choreography}%</span>
                      </div>
                      <div className="h-2 w-full bg-background-dark rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${studioData.mastery.choreography}%` }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                        <span className="text-text-secondary">Sync</span>
                        <span className="text-primary">{studioData.mastery.sync}%</span>
                      </div>
                      <div className="h-2 w-full bg-background-dark rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${studioData.mastery.sync}%` }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border-primary text-center">
                    <p className="text-sm text-text-secondary italic">"Your energy levels are consistently in the top 1% of the 'Urban' category."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fan Mode Content */}
        {mode === 'fan' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 border border-[#00f2ff]/30 bg-background-card">
                <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-2">Performances Rated</p>
                <p className="text-white text-4xl font-black">{fanData.performancesRated}</p>
                <p className="text-[#00f2ff] text-xs font-semibold mt-1">{fanData.badge}</p>
              </div>

              <div className="rounded-xl p-6 border border-[#00f2ff]/30 bg-background-card flex items-center justify-between">
                <div>
                  <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-2">City Pride</p>
                  <p className="text-white text-2xl font-black">{fanData.cityPride}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-[#00f2ff]/20 flex items-center justify-center border border-[#00f2ff] shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                  <span className="material-symbols-outlined text-[#00f2ff]">location_on</span>
                </div>
              </div>

              <div className="rounded-xl p-6 border border-[#00f2ff]/30 bg-background-card">
                <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-2">Points Earned</p>
                <p className="text-[#00f2ff] text-4xl font-black">{fanData.pointsEarned.toLocaleString()}</p>
                <p className="text-text-secondary text-xs mt-1">{fanData.pointsNote}</p>
              </div>
            </div>

            {/* Creator Spotlight CTA */}
            <div className="rounded-2xl p-8 border border-primary/40 bg-gradient-to-r from-background-card to-primary/10 shadow-[0_0_30px_rgba(244,37,157,0.1)]">
              <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase bg-primary/20 text-primary border border-primary/30 mb-4 inline-block">
                Creator Spotlight
              </span>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-white text-3xl font-black mb-2">Think your studio can win?</h3>
                  <p className="text-text-secondary">
                    Join the elite ranks of Indian dancers. <span className="text-primary">Upload your performance now</span> and let the world rate your hustle!
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Link href="/studio/upload" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(244,37,157,0.3)]">
                    <span className="material-symbols-outlined">upload</span>
                    Start Upload
                  </Link>
                  <p className="text-text-secondary text-xs uppercase tracking-widest">Next challenge ends in 3 days</p>
                </div>
              </div>
            </div>

            {/* Recently Rated Studios */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00f2ff]">history</span>
                  Recently Rated Studios
                </h2>
                <Link href="/fan/activity" className="text-primary text-sm font-bold uppercase tracking-wider hover:underline">View All</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {fanData.recentlyRated.map((studio) => (
                  <Link key={studio.id} href={`/studio/${studio.id}`} className="bg-background-card border border-border-primary rounded-xl overflow-hidden group hover:border-[#00f2ff]/50 transition-all">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img src={studio.image} alt={studio.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-3">
                      <p className="text-white font-bold">{studio.name}</p>
                      <p className="text-primary text-xs font-semibold">Your Rating: {studio.rating}</p>
                      <div className="h-1 bg-background-dark rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-[#00f2ff] rounded-full" style={{ width: `${studio.rating * 10}%` }}></div>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link href="/watch" className="bg-background-card border border-dashed border-border-primary rounded-xl flex flex-col items-center justify-center min-h-[200px] hover:border-primary/50 transition-all group">
                  <div className="size-12 rounded-full border border-border-primary flex items-center justify-center mb-2 group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-text-secondary group-hover:text-primary transition-colors">add</span>
                  </div>
                  <p className="text-text-secondary text-sm uppercase tracking-wider">Rate More</p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
