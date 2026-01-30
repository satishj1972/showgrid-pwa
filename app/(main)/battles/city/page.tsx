'use client';

import { useState } from 'react';
import Link from 'next/link';

const cities = [
  { name: 'Mumbai', studios: 45, avgScore: 87.3, topStudio: 'Urban Drip Studio', color: '#f4259d' },
  { name: 'Delhi', studios: 38, avgScore: 85.1, topStudio: 'Kings United', color: '#256af4' },
  { name: 'Bangalore', studios: 42, avgScore: 89.2, topStudio: 'Nrutya Academy', color: '#10b981' },
  { name: 'Chennai', studios: 28, avgScore: 82.4, topStudio: 'Dance Factory', color: '#f59e0b' },
  { name: 'Hyderabad', studios: 31, avgScore: 84.7, topStudio: 'Rhythm Nation', color: '#8b5cf6' },
  { name: 'Kolkata', studios: 22, avgScore: 81.9, topStudio: 'Eastern Beats', color: '#ec4899' },
];

const battleHistory = [
  { city1: 'Mumbai', city2: 'Delhi', winner: 'Mumbai', score1: 892, score2: 845, date: 'Season 3' },
  { city1: 'Bangalore', city2: 'Chennai', winner: 'Bangalore', score1: 923, score2: 798, date: 'Season 3' },
  { city1: 'Delhi', city2: 'Bangalore', winner: 'Bangalore', score1: 856, score2: 901, date: 'Season 2' },
];

export default function CityBattlePage() {
  const [selectedCity1, setSelectedCity1] = useState('Mumbai');
  const [selectedCity2, setSelectedCity2] = useState('Bangalore');

  const city1Data = cities.find(c => c.name === selectedCity1)!;
  const city2Data = cities.find(c => c.name === selectedCity2)!;

  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Header */}
      <div className="bg-background-card border-b border-border-secondary py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4">
            <span className="material-symbols-outlined text-primary">location_city</span>
            <span className="text-primary text-sm font-bold uppercase tracking-wider">City Battles</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black mb-2">City vs City</h1>
          <p className="text-text-secondary">Compare dance studio performance across India's top cities</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* City Selector */}
        <div className="bg-background-card border border-border-primary rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            {/* City 1 */}
            <div>
              <label className="text-text-secondary text-xs font-bold uppercase tracking-wider mb-2 block">Select City</label>
              <select 
                value={selectedCity1}
                onChange={(e) => setSelectedCity1(e.target.value)}
                className="w-full bg-background-elevated border border-border-primary rounded-xl px-4 py-3 text-white font-semibold outline-none focus:border-primary transition-colors"
              >
                {cities.filter(c => c.name !== selectedCity2).map(city => (
                  <option key={city.name} value={city.name}>{city.name}</option>
                ))}
              </select>
            </div>

            {/* VS Badge */}
            <div className="flex items-center justify-center">
              <div className="size-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <span className="text-primary text-xl font-black">VS</span>
              </div>
            </div>

            {/* City 2 */}
            <div>
              <label className="text-text-secondary text-xs font-bold uppercase tracking-wider mb-2 block">Select City</label>
              <select 
                value={selectedCity2}
                onChange={(e) => setSelectedCity2(e.target.value)}
                className="w-full bg-background-elevated border border-border-primary rounded-xl px-4 py-3 text-white font-semibold outline-none focus:border-primary transition-colors"
              >
                {cities.filter(c => c.name !== selectedCity1).map(city => (
                  <option key={city.name} value={city.name}>{city.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Comparison Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* City 1 Card */}
          <div className="bg-background-card border-2 rounded-2xl p-6 relative overflow-hidden" style={{ borderColor: city1Data.color }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px]" style={{ backgroundColor: `${city1Data.color}20` }}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${city1Data.color}20` }}>
                  <span className="material-symbols-outlined" style={{ color: city1Data.color }}>location_on</span>
                </div>
                <h3 className="text-white text-2xl font-black">{city1Data.name}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Active Studios</span>
                  <span className="text-white text-xl font-bold">{city1Data.studios}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Avg Grid Score</span>
                  <span className="text-white text-xl font-bold">{city1Data.avgScore}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Top Studio</span>
                  <span className="font-semibold" style={{ color: city1Data.color }}>{city1Data.topStudio}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-primary">
                <div className="h-3 bg-background-dark rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${city1Data.avgScore}%`, backgroundColor: city1Data.color }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* City 2 Card */}
          <div className="bg-background-card border-2 rounded-2xl p-6 relative overflow-hidden" style={{ borderColor: city2Data.color }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px]" style={{ backgroundColor: `${city2Data.color}20` }}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${city2Data.color}20` }}>
                  <span className="material-symbols-outlined" style={{ color: city2Data.color }}>location_on</span>
                </div>
                <h3 className="text-white text-2xl font-black">{city2Data.name}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Active Studios</span>
                  <span className="text-white text-xl font-bold">{city2Data.studios}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Avg Grid Score</span>
                  <span className="text-white text-xl font-bold">{city2Data.avgScore}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">Top Studio</span>
                  <span className="font-semibold" style={{ color: city2Data.color }}>{city2Data.topStudio}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-primary">
                <div className="h-3 bg-background-dark rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${city2Data.avgScore}%`, backgroundColor: city2Data.color }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Winner Indicator */}
        <div className="bg-background-card border border-border-primary rounded-xl p-6 mb-8 text-center">
          <p className="text-text-secondary text-sm uppercase tracking-wider mb-2">Currently Leading</p>
          <p className="text-3xl font-black" style={{ color: city1Data.avgScore > city2Data.avgScore ? city1Data.color : city2Data.color }}>
            {city1Data.avgScore > city2Data.avgScore ? city1Data.name : city2Data.name}
          </p>
          <p className="text-text-secondary mt-2">
            by <span className="text-white font-bold">{Math.abs(city1Data.avgScore - city2Data.avgScore).toFixed(1)}</span> points
          </p>
        </div>

        {/* Battle History */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">history</span>
            Past City Battles
          </h2>
          <div className="space-y-3">
            {battleHistory.map((battle, index) => (
              <div key={index} className="bg-background-card border border-border-primary rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`font-bold ${battle.winner === battle.city1 ? 'text-neon-green' : 'text-white'}`}>
                    {battle.city1}
                  </span>
                  <span className="text-text-secondary text-sm">{battle.score1}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-background-elevated text-text-secondary text-xs font-bold">
                  {battle.date}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-text-secondary text-sm">{battle.score2}</span>
                  <span className={`font-bold ${battle.winner === battle.city2 ? 'text-neon-green' : 'text-white'}`}>
                    {battle.city2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link href="/leaderboard" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            View Full Leaderboard
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
