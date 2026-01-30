'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data for leaderboard
const mockStudios = [
  { id: '1', rank: 1, name: 'Nrutya Academy', city: 'Bangalore', state: 'KA', gridScore: 98.5, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100', isYourStudio: false },
  { id: '2', rank: 2, name: 'Urban Drip Studio', city: 'Mumbai', state: 'MH', gridScore: 94.2, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', isYourStudio: false },
  { id: '3', rank: 3, name: 'Kings United', city: 'New Delhi', state: 'DL', gridScore: 91.8, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', isYourStudio: false },
  { id: '4', rank: 4, name: 'Danceworx', city: 'Mumbai', state: 'MH', gridScore: 88.0, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100', isYourStudio: false },
  { id: '5', rank: 5, name: 'Swingers Academy', city: 'Bangalore', state: 'KA', gridScore: 85.2, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', isYourStudio: true },
  { id: '6', rank: 6, name: 'Ace Dance Space', city: 'Delhi', state: 'DL', gridScore: 82.1, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', isYourStudio: false },
];

const cities = [
  { name: 'Bangalore', percentage: 92 },
  { name: 'Mumbai', percentage: 88 },
  { name: 'New Delhi', percentage: 76 },
  { name: 'Hyderabad', percentage: 65 },
  { name: 'Pune', percentage: 58 },
];

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<'overall' | 'citywise'>('overall');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [currentPage, setCurrentPage] = useState(1);

  const top3 = mockStudios.slice(0, 3);
  const restStudios = mockStudios.slice(3);

  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Trending Cities Heatmap Section */}
      <section className="bg-background-card border-b border-border-secondary">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                <h2 className="text-white text-lg font-bold uppercase tracking-wider">Trending Cities Heat Map</h2>
              </div>
              <p className="text-text-secondary text-xs uppercase tracking-widest">Live Engagement Activity</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-text-secondary">High Activity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
                <span className="text-text-secondary">Rising</span>
              </div>
            </div>
          </div>

          {/* India Map Placeholder */}
          <div className="relative h-64 bg-background-elevated rounded-xl border border-border-primary overflow-hidden mb-6">
            {/* Simplified India map representation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <path d="M200,50 L280,100 L320,180 L300,280 L250,350 L180,380 L120,340 L80,260 L100,160 L150,80 Z" 
                      fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30"/>
              </svg>
            </div>
            {/* City markers */}
            <div className="absolute top-[35%] left-[45%]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
                <span className="text-xs bg-background-dark/80 px-2 py-1 rounded text-white font-medium">DELHI</span>
              </div>
            </div>
            <div className="absolute top-[45%] left-[30%]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs bg-background-dark/80 px-2 py-1 rounded text-white font-medium">MUMBAI</span>
              </div>
            </div>
            <div className="absolute top-[55%] left-[50%]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                <span className="text-xs bg-background-dark/80 px-2 py-1 rounded text-white font-medium">HYDERABAD</span>
              </div>
            </div>
            <div className="absolute top-[65%] left-[40%]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs bg-background-dark/80 px-2 py-1 rounded text-white font-medium">BANGALORE</span>
              </div>
            </div>
            <div className="absolute top-[40%] left-[70%]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
                <span className="text-xs bg-background-dark/80 px-2 py-1 rounded text-white font-medium">KOLKATA</span>
              </div>
            </div>
          </div>

          {/* City Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {cities.map((city, index) => (
              <button
                key={city.name}
                className={`flex-shrink-0 px-4 py-2 rounded-lg border transition-all ${
                  index === 0 
                    ? 'bg-primary/20 border-primary text-white' 
                    : 'bg-background-elevated border-border-primary text-text-secondary hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold text-sm">0{index + 1}</span>
                  <span className="text-xs font-semibold uppercase">{city.name}</span>
                </div>
                <div className="w-full bg-background-dark rounded-full h-1 mt-1">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${city.percentage}%` }}></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Leaderboard Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tight">
              Challenge Leaderboard
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
              <span className="text-text-secondary text-xs">Last updated: 2 mins ago • Season 4 • Global</span>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-full font-bold text-sm transition-all">
            <span className="material-symbols-outlined text-sm">bolt</span>
            Join Challenge
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex bg-background-card rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('overall')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                activeTab === 'overall' 
                  ? 'bg-white text-background-dark' 
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              OVERALL
            </button>
            <button 
              onClick={() => setActiveTab('citywise')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                activeTab === 'citywise' 
                  ? 'bg-primary text-white' 
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              CITY-WISE
            </button>
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-background-card border border-border-primary rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-primary"
            >
              <option>Showing All Cities</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Delhi</option>
              <option>Hyderabad</option>
            </select>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-4 mb-12">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full border-2 border-text-secondary overflow-hidden bg-background-elevated">
                <img src={top3[1].avatar} alt={top3[1].name} className="w-full h-full object-cover" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-text-secondary rounded-full flex items-center justify-center text-background-dark font-bold text-sm">2</span>
            </div>
            <div className="bg-background-card border border-border-primary rounded-xl p-4 text-center min-w-[140px]">
              <h3 className="text-white font-bold text-sm">{top3[1].name}</h3>
              <p className="text-text-secondary text-xs uppercase">{top3[1].city}, {top3[1].state}</p>
              <p className="text-2xl font-black text-white mt-2">{top3[1].gridScore}</p>
              <p className="text-text-secondary text-[10px] uppercase tracking-wider">Grid Score</p>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center -mt-8">
            <div className="relative mb-3">
              <div className="w-28 h-28 rounded-full border-4 border-pulse-gold overflow-hidden bg-background-elevated shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                <img src={top3[0].avatar} alt={top3[0].name} className="w-full h-full object-cover" />
              </div>
              <span className="absolute -top-2 -right-2 w-8 h-8 bg-pulse-gold rounded-full flex items-center justify-center text-background-dark font-bold">1</span>
            </div>
            <div className="bg-background-card border-2 border-pulse-gold rounded-xl p-5 text-center min-w-[160px] shadow-[0_0_20px_rgba(250,204,21,0.15)]">
              <h3 className="text-white font-bold">{top3[0].name}</h3>
              <p className="text-primary text-xs uppercase font-semibold">{top3[0].city}, {top3[0].state}</p>
              <p className="text-4xl font-black text-primary mt-2">{top3[0].gridScore}</p>
              <p className="text-text-secondary text-[10px] uppercase tracking-wider">Grid Score</p>
              <div className="flex justify-center gap-1 mt-2">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="material-symbols-outlined text-pulse-gold text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full border-2 border-amber-600 overflow-hidden bg-background-elevated">
                <img src={top3[2].avatar} alt={top3[2].name} className="w-full h-full object-cover" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-amber-600 rounded-full flex items-center justify-center text-background-dark font-bold text-sm">3</span>
            </div>
            <div className="bg-background-card border border-border-primary rounded-xl p-4 text-center min-w-[140px]">
              <h3 className="text-white font-bold text-sm">{top3[2].name}</h3>
              <p className="text-text-secondary text-xs uppercase">{top3[2].city}, {top3[2].state}</p>
              <p className="text-2xl font-black text-white mt-2">{top3[2].gridScore}</p>
              <p className="text-text-secondary text-[10px] uppercase tracking-wider">Grid Score</p>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-background-card border border-border-primary rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border-secondary text-text-secondary text-xs uppercase tracking-wider">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Studio</div>
            <div className="col-span-3">City</div>
            <div className="col-span-3 text-right">Grid Score</div>
          </div>

          {/* Table Rows */}
          {restStudios.map((studio) => (
            <div 
              key={studio.id}
              className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-border-secondary/50 hover:bg-background-elevated transition-colors ${
                studio.isYourStudio ? 'bg-primary/5' : ''
              }`}
            >
              <div className="col-span-1 flex items-center">
                <span className={`font-bold ${studio.isYourStudio ? 'text-primary' : 'text-text-secondary'}`}>
                  {String(studio.rank).padStart(2, '0')}
                </span>
              </div>
              <div className="col-span-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-background-elevated">
                  <img src={studio.avatar} alt={studio.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{studio.name}</h4>
                  {studio.isYourStudio && (
                    <span className="text-primary text-[10px] uppercase font-bold">Your Studio</span>
                  )}
                </div>
              </div>
              <div className="col-span-3 flex items-center text-text-secondary">
                {studio.city}
              </div>
              <div className="col-span-3 flex items-center justify-end gap-3">
                <div className="flex-1 max-w-[120px] bg-background-dark rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${studio.gridScore}%` }}
                  ></div>
                </div>
                <span className={`font-bold ${studio.isYourStudio ? 'text-primary' : 'text-white'}`}>
                  {studio.gridScore.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-text-secondary text-sm">Showing 1 to 8 of 156 studios</span>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg border border-border-primary text-text-secondary hover:border-primary hover:text-white transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-lg border border-border-primary text-text-secondary hover:border-primary hover:text-white transition-all">2</button>
            <button className="w-10 h-10 rounded-lg border border-border-primary text-text-secondary hover:border-primary hover:text-white transition-all">3</button>
            <button className="w-10 h-10 rounded-lg border border-border-primary text-text-secondary hover:border-primary hover:text-white transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-background-card border border-border-primary rounded-xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">emoji_events</span>
            </div>
            <div>
              <p className="text-text-secondary text-xs uppercase tracking-wider">Prize Pool Remaining</p>
              <p className="text-2xl font-black text-primary">₹5,00,000</p>
              <p className="text-text-secondary text-xs">Season finals in 12 days</p>
            </div>
          </div>
          <div className="bg-background-card border border-border-primary rounded-xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">groups</span>
            </div>
            <div>
              <p className="text-text-secondary text-xs uppercase tracking-wider">Top Trending City</p>
              <p className="text-2xl font-black text-white">Bangalore</p>
              <p className="text-text-secondary text-xs">42 participating studios</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
