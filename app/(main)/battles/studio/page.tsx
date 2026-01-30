'use client';

import { useState } from 'react';
import Link from 'next/link';

const currentBattle = {
  id: '1',
  title: 'Battle of the Week',
  endsIn: '2 days 14 hours',
  totalVotes: 12450,
  studio1: {
    id: '1',
    name: 'Nrutya Academy',
    city: 'Bangalore',
    votes: 6890,
    thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
  },
  studio2: {
    id: '2',
    name: 'Urban Drip Studio',
    city: 'Mumbai',
    votes: 5560,
    thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100',
  },
};

const upcomingBattles = [
  { studio1: 'Kings United', studio2: 'MJ5 Official', startsIn: '3 days' },
  { studio1: 'V-Unbeatable', studio2: 'Dance Factory', startsIn: '5 days' },
];

const pastBattles = [
  { studio1: 'Rhythm Nation', studio2: 'Step Up Academy', winner: 'Rhythm Nation', votes1: 8920, votes2: 7450 },
  { studio1: 'Eastern Beats', studio2: 'Western Flow', winner: 'Western Flow', votes1: 5670, votes2: 6230 },
];

export default function StudioBattlePage() {
  const [voted, setVoted] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const studio1Percentage = Math.round((currentBattle.studio1.votes / currentBattle.totalVotes) * 100);
  const studio2Percentage = 100 - studio1Percentage;

  const handleVote = (studioId: string) => {
    if (voted) return;
    setVoted(studioId);
    setShowConfirm(true);
    setTimeout(() => setShowConfirm(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Header */}
      <div className="bg-background-card border-b border-border-secondary py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4">
            <span className="material-symbols-outlined text-primary">swords</span>
            <span className="text-primary text-sm font-bold uppercase tracking-wider">Studio Battles</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black mb-2">Head to Head</h1>
          <p className="text-text-secondary">Vote for your favorite studio in epic dance battles</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Current Battle */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-xl font-bold flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-neon-green pulse-ring"></span>
              {currentBattle.title}
            </h2>
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span className="material-symbols-outlined text-sm">schedule</span>
              Ends in {currentBattle.endsIn}
            </div>
          </div>

          {/* Battle Arena */}
          <div className="bg-background-card border border-border-primary rounded-2xl overflow-hidden">
            {/* Vote Progress Bar */}
            <div className="h-2 flex">
              <div className="bg-primary h-full transition-all duration-500" style={{ width: `${studio1Percentage}%` }}></div>
              <div className="bg-[#00f2ff] h-full transition-all duration-500" style={{ width: `${studio2Percentage}%` }}></div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                {/* Studio 1 */}
                <div 
                  className={`relative rounded-xl overflow-hidden cursor-pointer transition-all ${
                    voted === currentBattle.studio1.id 
                      ? 'ring-4 ring-primary' 
                      : voted ? 'opacity-60' : 'hover:ring-2 hover:ring-primary/50'
                  }`}
                  onClick={() => handleVote(currentBattle.studio1.id)}
                >
                  <div className="aspect-video relative">
                    <img src={currentBattle.studio1.thumbnail} alt={currentBattle.studio1.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="bg-primary/90 px-6 py-3 rounded-full font-bold text-white">
                        Vote for {currentBattle.studio1.name}
                      </div>
                    </div>
                    {voted === currentBattle.studio1.id && (
                      <div className="absolute top-4 right-4 bg-primary rounded-full p-2">
                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-background-elevated">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-full overflow-hidden border-2 border-primary">
                        <img src={currentBattle.studio1.avatar} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-white font-bold">{currentBattle.studio1.name}</p>
                        <p className="text-text-secondary text-xs">{currentBattle.studio1.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-2xl font-black">{studio1Percentage}%</span>
                      <span className="text-text-secondary text-sm">{currentBattle.studio1.votes.toLocaleString()} votes</span>
                    </div>
                  </div>
                </div>

                {/* VS Badge */}
                <div className="flex items-center justify-center py-4 md:py-0">
                  <div className="size-20 rounded-full bg-gradient-to-br from-primary to-[#00f2ff] flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-black">VS</span>
                  </div>
                </div>

                {/* Studio 2 */}
                <div 
                  className={`relative rounded-xl overflow-hidden cursor-pointer transition-all ${
                    voted === currentBattle.studio2.id 
                      ? 'ring-4 ring-[#00f2ff]' 
                      : voted ? 'opacity-60' : 'hover:ring-2 hover:ring-[#00f2ff]/50'
                  }`}
                  onClick={() => handleVote(currentBattle.studio2.id)}
                >
                  <div className="aspect-video relative">
                    <img src={currentBattle.studio2.thumbnail} alt={currentBattle.studio2.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="bg-[#00f2ff]/90 px-6 py-3 rounded-full font-bold text-black">
                        Vote for {currentBattle.studio2.name}
                      </div>
                    </div>
                    {voted === currentBattle.studio2.id && (
                      <div className="absolute top-4 right-4 bg-[#00f2ff] rounded-full p-2">
                        <span className="material-symbols-outlined text-black" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-background-elevated">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-full overflow-hidden border-2 border-[#00f2ff]">
                        <img src={currentBattle.studio2.avatar} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-white font-bold">{currentBattle.studio2.name}</p>
                        <p className="text-text-secondary text-xs">{currentBattle.studio2.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#00f2ff] text-2xl font-black">{studio2Percentage}%</span>
                      <span className="text-text-secondary text-sm">{currentBattle.studio2.votes.toLocaleString()} votes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Votes */}
              <div className="mt-6 pt-6 border-t border-border-primary text-center">
                <p className="text-text-secondary">
                  <span className="text-white font-bold">{currentBattle.totalVotes.toLocaleString()}</span> total votes cast
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Battles */}
        <div className="mb-12">
          <h2 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">upcoming</span>
            Upcoming Battles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingBattles.map((battle, index) => (
              <div key={index} className="bg-background-card border border-border-primary rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold">{battle.studio1}</span>
                  <span className="text-primary font-bold">vs</span>
                  <span className="text-white font-semibold">{battle.studio2}</span>
                </div>
                <span className="text-text-secondary text-sm">Starts in {battle.startsIn}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Past Battles */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-text-secondary">history</span>
            Past Battles
          </h2>
          <div className="space-y-3">
            {pastBattles.map((battle, index) => (
              <div key={index} className="bg-background-card border border-border-primary rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`font-semibold ${battle.winner === battle.studio1 ? 'text-neon-green' : 'text-white'}`}>
                      {battle.studio1}
                      {battle.winner === battle.studio1 && (
                        <span className="material-symbols-outlined text-neon-green text-sm ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                      )}
                    </span>
                    <span className="text-text-secondary">{battle.votes1.toLocaleString()}</span>
                  </div>
                  <span className="text-text-secondary text-sm">vs</span>
                  <div className="flex items-center gap-4">
                    <span className="text-text-secondary">{battle.votes2.toLocaleString()}</span>
                    <span className={`font-semibold ${battle.winner === battle.studio2 ? 'text-neon-green' : 'text-white'}`}>
                      {battle.winner === battle.studio2 && (
                        <span className="material-symbols-outlined text-neon-green text-sm mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                      )}
                      {battle.studio2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Vote Confirmation Toast */}
      {showConfirm && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-neon-green text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg animate-bounce z-50">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          Vote submitted!
        </div>
      )}
    </div>
  );
}
