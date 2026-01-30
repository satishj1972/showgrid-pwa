'use client';

import { useState, useEffect } from 'react';
import { useAuthStore } from '@/lib/stores/authStore';
import Link from 'next/link';

// Mock data
const mockPerformance = {
  id: '1',
  videoURL: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  thumbnailURL: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800',
  studioName: 'Kings United',
  city: 'Mumbai',
  country: 'India',
  gridScore: 8.4,
  trackName: 'Naatu Naatu Remix',
};

export default function WatchPage() {
  const { isAuthenticated } = useAuthStore();
  const [rating, setRating] = useState(9.2);
  const [isDragging, setIsDragging] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newRating = Math.round(percentage * 9 + 1); // 1-10 scale
    setRating(newRating);
  };

  const handleSubmitRating = () => {
    if (!isAuthenticated) {
      // Redirect to login
      window.location.href = '/login';
      return;
    }
    setShowConfirmation(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background-dark">
      {/* Blurred Background Layer */}
      <div 
        className="fixed inset-0 z-0 blur-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 8, 13, 0.8), rgba(18, 8, 13, 0.8)), url('${mockPerformance.thumbnailURL}')`,
        }}
      />

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 w-full max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary flex items-center justify-center rounded-full shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white">grid_view</span>
            </div>
            <div>
              <h2 className="text-white text-lg font-extrabold tracking-tight leading-none uppercase">ShowGrid</h2>
              <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Live Challenge</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">music_note</span>
              <p className="text-white text-sm font-medium">Track: {mockPerformance.trackName}</p>
            </div>
            <Link href="/" className="size-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all">
              <span className="material-symbols-outlined text-white">close</span>
            </Link>
          </div>
        </header>

        {/* Vertical Video Area */}
        <main className="flex-1 flex items-center justify-center px-4 relative py-4">
          {/* Video Player Container */}
          <div className="video-container relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/5 bg-black w-full max-w-[480px]">
            {/* Video/Thumbnail */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${mockPerformance.thumbnailURL}')` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </div>

            {/* Interaction Elements Over Video */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              {/* Top Info (Score Ticker) */}
              <div className="flex justify-end">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-sm">{mockPerformance.gridScore}</span>
                </div>
              </div>

              {/* Video Controls Overlay */}
              <div className="flex justify-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
              </div>

              {/* Studio & City Details */}
              <div className="space-y-1">
                <h1 className="text-white text-3xl font-extrabold leading-tight drop-shadow-lg">
                  {mockPerformance.studioName}
                </h1>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <p className="text-sm font-semibold tracking-wide uppercase">
                    {mockPerformance.city}, {mockPerformance.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
              <div className="h-full bg-primary w-1/3 shadow-[0_0_10px_#f4259d]" />
            </div>
          </div>

          {/* Side Interaction (Desktop Only) */}
          <div className="hidden lg:flex flex-col gap-4 ml-8">
            <button className="size-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <span className="material-symbols-outlined text-white group-hover:scale-110 transition-transform">favorite</span>
            </button>
            <button className="size-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <span className="material-symbols-outlined text-white group-hover:scale-110 transition-transform">share</span>
            </button>
            <button className="size-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <span className="material-symbols-outlined text-white group-hover:scale-110 transition-transform">chat_bubble</span>
            </button>
          </div>
        </main>

        {/* Rating Interface (Bottom Dock) */}
        <section className="w-full max-w-[800px] mx-auto px-4 md:px-6 pb-8 md:pb-12 pt-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <p className="text-white text-lg font-bold">Rate this Performance</p>
              <div className="flex items-center gap-2">
                <span className="text-primary text-2xl font-black">{rating.toFixed(1)}</span>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Score</span>
              </div>
            </div>

            {/* Slider Interface */}
            <div className="relative px-2 py-4">
              <div 
                className="h-3 w-full bg-white/10 rounded-full overflow-hidden cursor-pointer"
                onClick={handleSliderChange}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseMove={(e) => isDragging && handleSliderChange(e)}
              >
                <div 
                  className="h-full bg-primary rounded-full shadow-[0_0_20px_#f4259d] transition-all"
                  style={{ width: `${((rating - 1) / 9) * 100}%` }}
                />
              </div>

              {/* Slider Thumb */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-8 bg-white rounded-full border-4 border-primary shadow-xl cursor-pointer flex items-center justify-center pointer-events-none"
                style={{ left: `${((rating - 1) / 9) * 100}%` }}
              >
                <div className="size-1 bg-primary rounded-full" />
              </div>

              {/* Scale Numbers */}
              <div className="flex justify-between mt-4 px-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <span 
                    key={num} 
                    className={`text-xs font-bold ${Math.round(rating) === num ? 'text-primary' : 'text-white/40'}`}
                  >
                    {num}
                  </span>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmitRating}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold text-base shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
            >
              Submit Rating
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Keyboard Shortcut Tooltip */}
        <div className="fixed bottom-6 right-8 hidden md:flex items-center gap-2 text-white/30">
          <span className="material-symbols-outlined text-sm">keyboard</span>
          <p className="text-[10px] font-bold tracking-widest uppercase">Use 1-10 to rate instantly</p>
        </div>
      </div>

      {/* Post-Rating Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="bg-background-dark border border-white/10 p-10 rounded-3xl max-w-sm w-full text-center shadow-2xl mx-4">
            <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
            </div>
            <h3 className="text-white text-2xl font-extrabold mb-2">Vote Recorded!</h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed px-4">
              You just supported <span className="text-white font-bold">{mockPerformance.studioName}</span> with a score of <span className="text-primary font-bold">{rating.toFixed(1)}</span>. They are currently #1 in {mockPerformance.city}.
            </p>
            <button 
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
            >
              Next Performance
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <Link href="/leaderboard" className="mt-4 block text-white/40 hover:text-white font-medium text-sm transition-colors">
              Back to Leaderboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
