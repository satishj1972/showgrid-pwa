'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock studio data
const mockStudio = {
  id: '1',
  name: 'Nrutya Academy',
  city: 'Bangalore',
  state: 'Karnataka',
  logo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
  coverImage: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1200',
  isVerified: true,
  gridScore: 98.5,
  rank: 1,
  performanceCount: 12,
  totalRatings: 3420,
  followers: 1250,
  bio: 'Award-winning dance studio specializing in Indian Classical and Contemporary fusion. Training dancers since 2015.',
  achievements: [
    { title: 'Season 3 Champion', icon: 'emoji_events' },
    { title: 'Top Rated Studio', icon: 'star' },
    { title: '1000+ Ratings', icon: 'favorite' },
  ],
  performances: [
    { id: '1', thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400', gridScore: 98.5, status: 'approved' },
    { id: '2', thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400', gridScore: 94.2, status: 'approved' },
    { id: '3', thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400', gridScore: 91.8, status: 'approved' },
  ],
};

export default function StudioProfilePage() {
  const params = useParams();

  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Cover Image */}
      <div className="relative h-48 md:h-64 bg-background-card">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${mockStudio.coverImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="relative -mt-16 mb-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="size-32 rounded-2xl border-4 border-background-dark overflow-hidden bg-background-card">
                <img src={mockStudio.logo} alt={mockStudio.name} className="w-full h-full object-cover" />
              </div>
              {mockStudio.isVerified && (
                <div className="absolute -bottom-2 -right-2 size-8 bg-primary rounded-full flex items-center justify-center border-2 border-background-dark">
                  <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-white text-2xl md:text-3xl font-bold">{mockStudio.name}</h1>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>{mockStudio.city}, {mockStudio.state}</span>
              </div>
            </div>

            {/* Rank Badge */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="bg-pulse-gold/20 border border-pulse-gold/50 rounded-xl px-6 py-3">
                  <span className="text-pulse-gold text-3xl font-black">#{mockStudio.rank}</span>
                  <p className="text-pulse-gold/80 text-xs uppercase tracking-wider">Rank</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 border border-primary/50 rounded-xl px-6 py-3">
                  <span className="text-primary text-3xl font-black">{mockStudio.gridScore}</span>
                  <p className="text-primary/80 text-xs uppercase tracking-wider">Grid Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-background-card border border-border-primary rounded-xl p-4 text-center">
            <span className="text-white text-2xl font-bold">{mockStudio.performanceCount}</span>
            <p className="text-text-secondary text-xs uppercase">Performances</p>
          </div>
          <div className="bg-background-card border border-border-primary rounded-xl p-4 text-center">
            <span className="text-white text-2xl font-bold">{(mockStudio.totalRatings / 1000).toFixed(1)}K</span>
            <p className="text-text-secondary text-xs uppercase">Ratings</p>
          </div>
          <div className="bg-background-card border border-border-primary rounded-xl p-4 text-center">
            <span className="text-white text-2xl font-bold">{(mockStudio.followers / 1000).toFixed(1)}K</span>
            <p className="text-text-secondary text-xs uppercase">Followers</p>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-background-card border border-border-primary rounded-xl p-6 mb-6">
          <h3 className="text-white font-bold mb-2">About</h3>
          <p className="text-text-secondary text-sm">{mockStudio.bio}</p>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="text-white font-bold mb-4">Achievements</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {mockStudio.achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex items-center gap-3 bg-background-card border border-border-primary rounded-xl px-4 py-3"
              >
                <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">{achievement.icon}</span>
                </div>
                <span className="text-white text-sm font-medium">{achievement.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performances */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold">Performances</h3>
            <span className="text-text-secondary text-sm">{mockStudio.performanceCount} videos</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mockStudio.performances.map((performance) => (
              <Link 
                key={performance.id}
                href={`/watch?id=${performance.id}`}
                className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-background-card border border-border-primary hover:border-primary transition-all"
              >
                <img 
                  src={performance.thumbnail} 
                  alt="Performance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg w-fit">
                    <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-white text-sm font-bold">{performance.gridScore}</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="size-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
