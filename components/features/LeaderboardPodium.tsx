import { Avatar } from '@/components/ui';
import Link from 'next/link';

interface Studio {
  id: string;
  name: string;
  city: string;
  logoURL?: string;
  gridScore: number;
  rank: number;
}

interface LeaderboardPodiumProps {
  topThree: Studio[];
  className?: string;
}

const LeaderboardPodium = ({ topThree, className = '' }: LeaderboardPodiumProps) => {
  const getPodiumStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          height: 'h-32',
          bg: 'bg-gradient-to-t from-pulse-gold/20 to-transparent',
          border: 'border-pulse-gold/50',
          medal: '🥇',
          glow: 'shadow-lg shadow-pulse-gold/20',
        };
      case 2:
        return {
          height: 'h-24',
          bg: 'bg-gradient-to-t from-soft-grey/20 to-transparent',
          border: 'border-soft-grey/50',
          medal: '🥈',
          glow: '',
        };
      case 3:
        return {
          height: 'h-20',
          bg: 'bg-gradient-to-t from-amber-600/20 to-transparent',
          border: 'border-amber-600/50',
          medal: '🥉',
          glow: '',
        };
      default:
        return {
          height: 'h-16',
          bg: 'bg-deep-navy',
          border: 'border-border-grey',
          medal: '',
          glow: '',
        };
    }
  };

  // Reorder for podium display: [2nd, 1st, 3rd]
  const podiumOrder = [
    topThree.find(s => s.rank === 2),
    topThree.find(s => s.rank === 1),
    topThree.find(s => s.rank === 3),
  ].filter(Boolean) as Studio[];

  return (
    <div className={`flex items-end justify-center gap-4 py-8 ${className}`}>
      {podiumOrder.map((studio) => {
        const style = getPodiumStyle(studio.rank);
        return (
          <Link
            key={studio.id}
            href={`/studio/${studio.id}`}
            className="flex flex-col items-center group"
          >
            {/* Avatar & Medal */}
            <div className="relative mb-2">
              <Avatar 
                src={studio.logoURL} 
                fallback={studio.name} 
                size={studio.rank === 1 ? 'xl' : 'lg'} 
                className={`${style.glow} group-hover:scale-105 transition-transform`}
              />
              <span className="absolute -bottom-1 -right-1 text-xl">{style.medal}</span>
            </div>

            {/* Name & Score */}
            <div className="text-center mb-2">
              <p className="font-sora font-semibold text-frost-white text-sm truncate max-w-[100px]">
                {studio.name}
              </p>
              <p className="text-xs text-soft-grey">{studio.city}</p>
              <p className="text-violet-core font-bold mt-1">{studio.gridScore.toFixed(1)}</p>
            </div>

            {/* Podium */}
            <div
              className={`w-24 ${style.height} ${style.bg} border-t ${style.border} rounded-t-lg flex items-start justify-center pt-2`}
            >
              <span className="font-sora font-bold text-2xl text-frost-white/50">
                {studio.rank}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LeaderboardPodium;
