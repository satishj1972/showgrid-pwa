'use client';

import { useState } from 'react';

const challengesData = [
  { 
    id: '1', 
    title: 'The Monsoon Groove Showdown', 
    track: 'Jai Ho - Remix', 
    status: 'active', 
    startDate: 'Jan 15, 2026', 
    endDate: 'Jan 30, 2026',
    studios: 42,
    performances: 128,
    prizePool: 50000,
  },
  { 
    id: '2', 
    title: 'Summer Beat Championship', 
    track: 'Naatu Naatu', 
    status: 'completed', 
    startDate: 'Dec 1, 2025', 
    endDate: 'Dec 20, 2025',
    studios: 38,
    performances: 112,
    prizePool: 50000,
  },
  { 
    id: '3', 
    title: 'Spring Dance Fest', 
    track: 'Balam Pichkari', 
    status: 'completed', 
    startDate: 'Mar 1, 2025', 
    endDate: 'Mar 20, 2025',
    studios: 45,
    performances: 98,
    prizePool: 40000,
  },
  { 
    id: '4', 
    title: 'Valentine Groove', 
    track: 'TBD', 
    status: 'draft', 
    startDate: 'Feb 10, 2026', 
    endDate: 'Feb 25, 2026',
    studios: 0,
    performances: 0,
    prizePool: 50000,
  },
];

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState(challengesData);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleLockChallenge = (id: string) => {
    setChallenges(prev => prev.map(c => 
      c.id === id ? { ...c, status: 'completed' } : c
    ));
  };

  const handleActivateChallenge = (id: string) => {
    setChallenges(prev => prev.map(c => 
      c.id === id ? { ...c, status: 'active' } : c
    ));
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-white text-2xl font-bold mb-1">Challenge Management</h1>
          <p className="text-text-secondary">Create and manage dance challenges</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <span className="material-symbols-outlined">add</span>
          New Challenge
        </button>
      </div>

      {/* Active Challenge Highlight */}
      {challenges.filter(c => c.status === 'active').map(challenge => (
        <div key={challenge.id} className="bg-gradient-to-r from-background-card to-primary/10 border border-primary/30 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-3 w-3 rounded-full bg-neon-green pulse-ring"></span>
            <span className="text-neon-green text-sm font-bold uppercase tracking-wider">Active Challenge</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-white text-2xl font-bold mb-1">{challenge.title}</h2>
              <p className="text-text-secondary">Track: {challenge.track}</p>
              <p className="text-text-secondary text-sm mt-1">
                {challenge.startDate} — {challenge.endDate}
              </p>
            </div>
            
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-white text-2xl font-bold">{challenge.studios}</p>
                <p className="text-text-secondary text-xs uppercase">Studios</p>
              </div>
              <div className="text-center">
                <p className="text-white text-2xl font-bold">{challenge.performances}</p>
                <p className="text-text-secondary text-xs uppercase">Entries</p>
              </div>
              <div className="text-center">
                <p className="text-primary text-2xl font-bold">₹{(challenge.prizePool / 1000)}K</p>
                <p className="text-text-secondary text-xs uppercase">Prize Pool</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => handleLockChallenge(challenge.id)}
              className="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg font-medium hover:bg-red-500/30 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">lock</span>
              Lock Challenge
            </button>
            <button className="flex items-center gap-2 bg-background-elevated text-white px-4 py-2 rounded-lg font-medium hover:bg-background-dark transition-colors">
              <span className="material-symbols-outlined text-sm">edit</span>
              Edit Details
            </button>
            <button className="flex items-center gap-2 bg-background-elevated text-white px-4 py-2 rounded-lg font-medium hover:bg-background-dark transition-colors">
              <span className="material-symbols-outlined text-sm">leaderboard</span>
              View Leaderboard
            </button>
          </div>
        </div>
      ))}

      {/* All Challenges List */}
      <div className="bg-background-card border border-border-primary rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border-primary">
          <h3 className="text-white font-bold">All Challenges</h3>
        </div>
        
        <div className="divide-y divide-border-primary">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="p-6 hover:bg-background-elevated transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-white font-semibold">{challenge.title}</h4>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase ${
                      challenge.status === 'active' ? 'bg-neon-green/20 text-neon-green' :
                      challenge.status === 'completed' ? 'bg-blue-400/20 text-blue-400' :
                      'bg-gray-400/20 text-gray-400'
                    }`}>
                      {challenge.status}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">Track: {challenge.track}</p>
                  <p className="text-text-secondary text-sm">{challenge.startDate} — {challenge.endDate}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-white font-semibold">{challenge.studios}</p>
                    <p className="text-text-secondary text-xs">Studios</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-semibold">{challenge.performances}</p>
                    <p className="text-text-secondary text-xs">Entries</p>
                  </div>
                  <div className="text-center">
                    <p className="text-primary font-semibold">₹{(challenge.prizePool / 1000)}K</p>
                    <p className="text-text-secondary text-xs">Prize</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  {challenge.status === 'draft' && (
                    <button
                      onClick={() => handleActivateChallenge(challenge.id)}
                      className="px-3 py-1.5 bg-neon-green/20 text-neon-green rounded-lg text-sm font-medium hover:bg-neon-green/30 transition-colors"
                    >
                      Activate
                    </button>
                  )}
                  {challenge.status === 'completed' && (
                    <button className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors">
                      View Results
                    </button>
                  )}
                  <button className="p-1.5 text-text-secondary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Challenge Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-background-card border border-border-primary rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-xl font-bold">Create New Challenge</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-text-secondary hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Challenge Title</label>
                <input
                  type="text"
                  placeholder="e.g., Summer Beat Championship"
                  className="w-full bg-background-elevated border border-border-primary rounded-lg px-4 py-3 text-white placeholder-text-secondary outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Official Track Name</label>
                <input
                  type="text"
                  placeholder="e.g., Naatu Naatu"
                  className="w-full bg-background-elevated border border-border-primary rounded-lg px-4 py-3 text-white placeholder-text-secondary outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Upload Track File</label>
                <div className="border-2 border-dashed border-border-primary rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-text-secondary text-3xl mb-2">upload_file</span>
                  <p className="text-text-secondary text-sm">Click to upload MP3 file</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full bg-background-elevated border border-border-primary rounded-lg px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">End Date</label>
                  <input
                    type="date"
                    className="w-full bg-background-elevated border border-border-primary rounded-lg px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Prize Pool (₹)</label>
                <input
                  type="number"
                  placeholder="50000"
                  className="w-full bg-background-elevated border border-border-primary rounded-lg px-4 py-3 text-white placeholder-text-secondary outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-3 bg-background-elevated text-white rounded-xl font-medium hover:bg-background-dark transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors">
                Create Challenge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
