'use client';

import Link from 'next/link';
import { useAuthStore } from '@/lib/stores/authStore';

const mockFan = {
  name: 'Rahul Sharma',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
  joinedDate: 'October 2025',
  ratingsGiven: 342,
  streak: 7,
  maxStreak: 14,
  xp: 2450,
  level: 12,
  nextLevelXp: 3000,
  badges: [
    { id: '1', name: 'Early Adopter', icon: 'rocket_launch', color: 'text-purple-400' },
    { id: '2', name: 'Rating Master', icon: 'star', color: 'text-yellow-400' },
    { id: '3', name: 'Week Warrior', icon: 'local_fire_department', color: 'text-orange-400' },
  ],
  recentRatings: [
    { studioName: 'Nrutya Academy', city: 'Bangalore', score: 9, timestamp: '2 hours ago' },
    { studioName: 'Urban Drip Studio', city: 'Mumbai', score: 8, timestamp: '5 hours ago' },
    { studioName: 'Kings United', city: 'Delhi', score: 10, timestamp: '1 day ago' },
  ],
  favoriteStudios: [
    { id: '1', name: 'Nrutya Academy', city: 'Bangalore', logo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' },
    { id: '2', name: 'Urban Drip', city: 'Mumbai', logo: 'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100' },
  ],
};

export default function FanProfilePage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center px-4">
        <div className="bg-background-card border border-border-primary rounded-2xl p-8 max-w-md w-full text-center">
          <div className="size-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">person</span>
          </div>
          <h2 className="text-white text-2xl font-bold mb-2">Sign In to View Profile</h2>
          <p className="text-text-secondary mb-6">Track your ratings, streaks, and achievements.</p>
          <Link href="/login" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition-all w-full">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const xpProgress = (mockFan.xp / mockFan.nextLevelXp) * 100;

  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Header */}
      <div className="bg-background-card border-b border-border-secondary">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="size-24 rounded-full border-4 border-primary overflow-hidden">
                <img src={mockFan.avatar} alt={mockFan.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary rounded-full px-2 py-1 text-xs font-bold text-white">
                Lv.{mockFan.level}
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-white text-2xl font-bold mb-1">{mockFan.name}</h1>
              <p className="text-text-secondary text-sm mb-3">Member since {mockFan.joinedDate}</p>
              
              {/* XP Bar */}
              <div className="max-w-xs mx-auto md:mx-0">
                <div className="flex justify-between text-xs text-text-secondary mb-1">
                  <span>{mockFan.xp} XP</span>
                  <span>{mockFan.nextLevelXp} XP</span>
                </div>
                <div className="h-2 bg-background-dark rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full" style={{ width: `${xpProgress}%` }}></div>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <button className="flex items-center gap-2 bg-background-elevated border border-border-primary hover:border-primary px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors">
              <span className="material-symbols-outlined text-sm">edit</span>
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-background-card border border-border-primary rounded-xl p-4 text-center">
            <span className="material-symbols-outlined text-primary text-2xl mb-2">star</span>
            <p className="text-white text-2xl font-bold">{mockFan.ratingsGiven}</p>
            <p className="text-text-secondary text-xs uppercase">Ratings Given</p>
          </div>
          <div className="bg-background-card border border-border-primary rounded-xl p-4 text-center">
            <span className="material-symbols-outlined text-orange-400 text-2xl mb-2">local_fire_department</span>
            <p className="text-white text-2xl font-bold">{mockFan.streak} Days</p>
            <p className="text-text-secondary text-xs uppercase">Current Streak</p>
          </div>
          <div className="bg-background-card border border-border-primary rounded-xl p-4 text-center">
            <span className="material-symbols-outlined text-purple-400 text-2xl mb-2">emoji_events</span>
            <p className="text-white text-2xl font-bold">{mockFan.maxStreak} Days</p>
            <p className="text-text-secondary text-xs uppercase">Best Streak</p>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8">
          <h3 className="text-white font-bold mb-4">Badges Earned</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {mockFan.badges.map((badge) => (
              <div key={badge.id} className="flex-shrink-0 bg-background-card border border-border-primary rounded-xl p-4 text-center min-w-[120px]">
                <div className="size-12 bg-background-elevated rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className={`material-symbols-outlined ${badge.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{badge.icon}</span>
                </div>
                <p className="text-white text-sm font-medium">{badge.name}</p>
              </div>
            ))}
            <div className="flex-shrink-0 bg-background-card border border-dashed border-border-primary rounded-xl p-4 text-center min-w-[120px] flex flex-col items-center justify-center">
              <div className="size-12 bg-background-elevated rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="material-symbols-outlined text-text-secondary">add</span>
              </div>
              <p className="text-text-secondary text-sm">More to earn</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold">Recent Ratings</h3>
            <Link href="/fan/activity" className="text-primary text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="space-y-3">
            {mockFan.recentRatings.map((rating, index) => (
              <div key={index} className="bg-background-card border border-border-primary rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-background-elevated rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">movie</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{rating.studioName}</p>
                    <p className="text-text-secondary text-xs">{rating.city} • {rating.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-primary font-bold">{rating.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Studios */}
        <div>
          <h3 className="text-white font-bold mb-4">Favorite Studios</h3>
          <div className="grid grid-cols-2 gap-4">
            {mockFan.favoriteStudios.map((studio) => (
              <Link key={studio.id} href={`/studio/${studio.id}`} className="bg-background-card border border-border-primary hover:border-primary rounded-xl p-4 flex items-center gap-3 transition-colors">
                <div className="size-12 rounded-lg overflow-hidden bg-background-elevated">
                  <img src={studio.logo} alt={studio.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-medium">{studio.name}</p>
                  <p className="text-text-secondary text-xs">{studio.city}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
