import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui';

interface PerformanceCardProps {
  id: string;
  studioName: string;
  city: string;
  thumbnailURL: string;
  gridScore?: number;
  ratingsCount: number;
  status?: 'pending' | 'approved' | 'rejected';
  className?: string;
}

const PerformanceCard = ({
  id,
  studioName,
  city,
  thumbnailURL,
  gridScore,
  ratingsCount,
  status = 'approved',
  className = '',
}: PerformanceCardProps) => {
  return (
    <Link
      href={`/watch?id=${id}`}
      className={`block group ${className}`}
    >
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-deep-navy border border-border-grey group-hover:border-violet-core/50 transition-colors">
        {/* Thumbnail */}
        <Image
          src={thumbnailURL}
          alt={`${studioName} performance`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/90 via-carbon-black/20 to-transparent" />

        {/* Status badge */}
        {status === 'pending' && (
          <div className="absolute top-2 left-2">
            <Badge variant="soon">Pending</Badge>
          </div>
        )}

        {/* Score badge */}
        {gridScore !== undefined && status === 'approved' && (
          <div className="absolute top-2 right-2 bg-deep-navy/80 backdrop-blur-sm border border-pulse-gold/30 rounded-lg px-2 py-1">
            <span className="text-pulse-gold font-sora font-bold text-sm">{gridScore.toFixed(1)}</span>
          </div>
        )}

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-sora font-semibold text-frost-white text-sm truncate">
            {studioName}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <span className="text-soft-grey text-xs">{city}</span>
            <span className="text-soft-grey text-xs">{ratingsCount} ratings</span>
          </div>
        </div>

        {/* Play icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-violet-core/90 rounded-full flex items-center justify-center shadow-lg shadow-violet-core/30">
            <svg className="w-6 h-6 text-frost-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PerformanceCard;
