'use client';

import { useState } from 'react';
import { LeaderboardPodium, LeaderboardTable } from '@/components/features';
import { PageContainer } from '@/components/layout';
import { Select, Badge } from '@/components/ui';

// Mock data - will be replaced with Firebase
const mockStudios = [
  { id: '1', name: 'Rhythm Studios', city: 'Mumbai', gridScore: 9.2, rank: 1, performanceCount: 5, isVerified: true },
  { id: '2', name: 'Dance Factory', city: 'Delhi', gridScore: 8.9, rank: 2, performanceCount: 4, isVerified: true },
  { id: '3', name: 'Groove Academy', city: 'Bangalore', gridScore: 8.7, rank: 3, performanceCount: 6, isVerified: false },
  { id: '4', name: 'Step Up Crew', city: 'Chennai', gridScore: 8.5, rank: 4, performanceCount: 3, isVerified: true },
  { id: '5', name: 'Motion Arts', city: 'Hyderabad', gridScore: 8.3, rank: 5, performanceCount: 4, isVerified: false },
  { id: '6', name: 'Beat Street', city: 'Pune', gridScore: 8.1, rank: 6, performanceCount: 2, isVerified: true },
  { id: '7', name: 'Urban Moves', city: 'Kolkata', gridScore: 7.9, rank: 7, performanceCount: 3, isVerified: false },
  { id: '8', name: 'Footwork Studio', city: 'Ahmedabad', gridScore: 7.7, rank: 8, performanceCount: 2, isVerified: true },
  { id: '9', name: 'Dance Vibes', city: 'Jaipur', gridScore: 7.5, rank: 9, performanceCount: 1, isVerified: false },
  { id: '10', name: 'The Dance Hub', city: 'Lucknow', gridScore: 7.3, rank: 10, performanceCount: 2, isVerified: false },
];

const cities = [
  { value: 'all', label: 'All Cities' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Kolkata', label: 'Kolkata' },
];

export default function LeaderboardPage() {
  const [selectedCity, setSelectedCity] = useState('all');

  const filteredStudios = selectedCity === 'all' 
    ? mockStudios 
    : mockStudios.filter(s => s.city === selectedCity);

  const topThree = filteredStudios.slice(0, 3);

  return (
    <PageContainer>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-sora font-bold text-frost-white">
            Leaderboard
          </h1>
          <p className="text-soft-grey mt-1">
            Real-time rankings based on crowd ratings
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="live">Live</Badge>
          <Select
            options={cities}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-40"
          />
        </div>
      </div>

      {/* Podium for Top 3 */}
      {topThree.length >= 3 && (
        <div className="bg-deep-navy border border-border-grey rounded-xl mb-6">
          <LeaderboardPodium topThree={topThree} />
        </div>
      )}

      {/* Full Leaderboard Table */}
      <LeaderboardTable studios={filteredStudios} />

      {/* Info Footer */}
      <div className="mt-6 text-center">
        <p className="text-soft-grey text-sm">
          Rankings update in real-time based on crowd ratings. 
          <span className="text-violet-core ml-1">No popularity bias.</span>
        </p>
      </div>
    </PageContainer>
  );
}
