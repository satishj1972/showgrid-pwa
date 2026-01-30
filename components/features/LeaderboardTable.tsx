'use client';

import { Avatar, Badge } from '@/components/ui';
import Link from 'next/link';

interface Studio {
  id: string;
  name: string;
  city: string;
  logoURL?: string;
  gridScore: number;
  rank: number;
  performanceCount: number;
  isVerified?: boolean;
}

interface LeaderboardTableProps {
  studios: Studio[];
  className?: string;
}

const LeaderboardTable = ({ studios, className = '' }: LeaderboardTableProps) => {
  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-pulse-gold';
      case 2:
        return 'text-soft-grey';
      case 3:
        return 'text-amber-600';
      default:
        return 'text-soft-grey';
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div className={`bg-deep-navy border border-border-grey rounded-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-carbon-black/50 border-b border-border-grey text-xs font-medium text-soft-grey uppercase tracking-wider">
        <div className="col-span-1">Rank</div>
        <div className="col-span-6">Studio</div>
        <div className="col-span-2 text-center">Entries</div>
        <div className="col-span-3 text-right">Grid Score</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border-grey">
        {studios.map((studio) => (
          <Link
            key={studio.id}
            href={`/studio/${studio.id}`}
            className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-carbon-black/30 transition-colors"
          >
            <div className={`col-span-1 font-sora font-bold text-lg ${getRankStyle(studio.rank)}`}>
              {getRankBadge(studio.rank)}
            </div>

            <div className="col-span-6 flex items-center gap-3">
              <Avatar src={studio.logoURL} fallback={studio.name} size="md" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-frost-white">{studio.name}</span>
                  {studio.isVerified && (
                    <svg className="w-4 h-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-soft-grey">{studio.city}</span>
              </div>
            </div>

            <div className="col-span-2 text-center text-soft-grey">
              {studio.performanceCount}
            </div>

            <div className="col-span-3 text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-violet-core/10 border border-violet-core/20">
                <span className="font-sora font-bold text-violet-core">{studio.gridScore.toFixed(1)}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardTable;
