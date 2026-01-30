'use client';

import Link from 'next/link';

const champions = [
  {
    season: 4,
    title: 'The Monsoon Groove Showdown',
    winner: { name: 'Nrutya Academy', city: 'Bangalore', score: 98.5, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200' },
    runnerUp: { name: 'Urban Drip Studio', city: 'Mumbai', score: 94.2 },
    prize: '₹50,000',
    status: 'current',
  },
  {
    season: 3,
    title: 'Summer Beat Championship',
    winner: { name: 'Kings United', city: 'Delhi', score: 96.8, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=200' },
    runnerUp: { name: 'MJ5 Official', city: 'Mumbai', score: 93.1 },
    prize: '₹50,000',
    status: 'completed',
  },
  {
    season: 2,
    title: 'Spring Dance Fest',
    winner: { name: 'V-Unbeatable', city: 'Mumbai', score: 97.2, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
    runnerUp: { name: 'Dance Factory', city: 'Chennai', score: 91.5 },
    prize: '₹40,000',
    status: 'completed',
  },
  {
    season: 1,
    title: 'The Launch Championship',
    winner: { name: 'Rhythm Nation', city: 'Hyderabad', score: 95.4, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200' },
    runnerUp: { name: 'Step Up Academy', city: 'Pune', score: 89.7 },
    prize: '₹30,000',
    status: 'completed',
  },
];

const legendaryStudios = [
  { name: 'Kings United', wins: 3, city: 'Delhi', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=200' },
  { name: 'V-Unbeatable', wins: 2, city: 'Mumbai', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
  { name: 'Nrutya Academy', wins: 1, city: 'Bangalore', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200' },
];

export default function HallOfFamePage() {
  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pulse-gold/20 border border-pulse-gold/30 mb-6">
            <span className="material-symbols-outlined text-pulse-gold" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
            <span className="text-pulse-gold text-sm font-bold uppercase tracking-wider">Hall of Fame</span>
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-black mb-4">
            ShowGrid <span className="text-primary">Champions</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Celebrating the studios that rose to the top through talent, dedication, and fair crowd ratings.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4">
        {/* Legendary Studios */}
        <div className="mb-12">
          <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-pulse-gold">stars</span>
            Legendary Studios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {legendaryStudios.map((studio, index) => (
              <div key={studio.name} className="bg-background-card border border-border-primary rounded-xl p-6 flex items-center gap-4 hover:border-pulse-gold/50 transition-colors">
                <div className="relative">
                  <div className="size-16 rounded-full overflow-hidden border-2 border-pulse-gold">
                    <img src={studio.avatar} alt={studio.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 size-6 bg-pulse-gold rounded-full flex items-center justify-center text-xs font-black text-black">
                    {studio.wins}
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold">{studio.name}</p>
                  <p className="text-text-secondary text-sm">{studio.city}</p>
                  <p className="text-pulse-gold text-xs font-semibold">{studio.wins} Championship{studio.wins > 1 ? 's' : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Season Champions */}
        <div>
          <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">military_tech</span>
            Season Champions
          </h2>
          <div className="space-y-6">
            {champions.map((season) => (
              <div 
                key={season.season} 
                className={`rounded-2xl overflow-hidden border ${
                  season.status === 'current' 
                    ? 'border-primary bg-gradient-to-r from-background-card to-primary/10' 
                    : 'border-border-primary bg-background-card'
                }`}
              >
                {/* Season Header */}
                <div className="p-6 border-b border-border-primary">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                          season.status === 'current' 
                            ? 'bg-neon-green/20 text-neon-green' 
                            : 'bg-background-elevated text-text-secondary'
                        }`}>
                          Season {season.season}
                        </span>
                        {season.status === 'current' && (
                          <span className="flex items-center gap-1 text-neon-green text-xs">
                            <span className="flex h-2 w-2 rounded-full bg-neon-green pulse-ring"></span>
                            In Progress
                          </span>
                        )}
                      </div>
                      <h3 className="text-white text-2xl font-bold">{season.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 bg-pulse-gold/20 px-4 py-2 rounded-lg">
                      <span className="material-symbols-outlined text-pulse-gold">payments</span>
                      <span className="text-pulse-gold font-bold">{season.prize}</span>
                    </div>
                  </div>
                </div>

                {/* Winner & Runner Up */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Winner */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-pulse-gold/10 border border-pulse-gold/30">
                      <div className="relative">
                        <div className="size-16 rounded-full overflow-hidden border-2 border-pulse-gold">
                          <img src={season.winner.avatar} alt={season.winner.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-2 -right-2 size-8 bg-pulse-gold rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-black text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-pulse-gold text-xs font-bold uppercase tracking-wider mb-1">Champion</p>
                        <p className="text-white text-lg font-bold">{season.winner.name}</p>
                        <p className="text-text-secondary text-sm">{season.winner.city}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-2xl font-black">{season.winner.score}</p>
                        <p className="text-text-secondary text-xs uppercase">Grid Score</p>
                      </div>
                    </div>

                    {/* Runner Up */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background-elevated border border-border-secondary">
                      <div className="size-12 rounded-full bg-background-card flex items-center justify-center border border-border-primary">
                        <span className="text-text-secondary font-bold">2nd</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-text-secondary text-xs font-bold uppercase tracking-wider mb-1">Runner Up</p>
                        <p className="text-white font-semibold">{season.runnerUp.name}</p>
                        <p className="text-text-secondary text-sm">{season.runnerUp.city}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-xl font-bold">{season.runnerUp.score}</p>
                        <p className="text-text-secondary text-xs uppercase">Grid Score</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">Want to see your studio here?</p>
          <Link 
            href="/studio/upload" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/30"
          >
            <span className="material-symbols-outlined">upload</span>
            Join the Competition
          </Link>
        </div>
      </main>
    </div>
  );
}
