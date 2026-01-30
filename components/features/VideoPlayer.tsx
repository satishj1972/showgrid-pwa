'use client';

import { useState, useRef } from 'react';
import { Badge } from '@/components/ui';

interface VideoPlayerProps {
  videoURL: string;
  thumbnailURL?: string;
  studioName: string;
  city: string;
  gridScore?: number;
  onEnded?: () => void;
  className?: string;
}

const VideoPlayer = ({ 
  videoURL, 
  thumbnailURL, 
  studioName, 
  city, 
  gridScore, 
  onEnded,
  className = '' 
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className={`relative bg-deep-navy rounded-xl overflow-hidden aspect-[9/16] max-h-[70vh] ${className}`}
      onClick={togglePlay}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(isPlaying ? false : true)}
    >
      <video
        ref={videoRef}
        src={videoURL}
        poster={thumbnailURL}
        className="w-full h-full object-cover"
        onEnded={() => {
          setIsPlaying(false);
          onEnded?.();
        }}
        playsInline
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-carbon-black/40 pointer-events-none" />

      {/* Top info */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        <div>
          <h3 className="font-sora font-semibold text-frost-white">{studioName}</h3>
          <p className="text-soft-grey text-sm">{city}</p>
        </div>
        {gridScore !== undefined && (
          <div className="bg-deep-navy/80 backdrop-blur-sm border border-pulse-gold/30 rounded-lg px-3 py-1.5">
            <span className="text-pulse-gold font-sora font-bold">{gridScore.toFixed(1)}</span>
            <span className="text-soft-grey text-xs ml-1">Grid Score</span>
          </div>
        )}
      </div>

      {/* Play button */}
      {showControls && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 bg-violet-core/90 rounded-full flex items-center justify-center shadow-lg shadow-violet-core/30 hover:bg-violet-core transition-colors">
            <svg className="w-8 h-8 text-frost-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

      {/* Bottom badge */}
      <div className="absolute bottom-4 left-4">
        <Badge variant="live">Dance Challenge</Badge>
      </div>
    </div>
  );
};

export default VideoPlayer;
