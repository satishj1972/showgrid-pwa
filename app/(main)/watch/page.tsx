'use client';

import { useState } from 'react';
import { VideoPlayer, RatingWidget, PerformanceCard } from '@/components/features';
import { PageContainer } from '@/components/layout';
import { Button, Modal } from '@/components/ui';
import { useAuthStore } from '@/lib/stores/authStore';

// Mock data - will be replaced with Firebase
const mockPerformance = {
  id: '1',
  videoURL: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  thumbnailURL: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400',
  studioName: 'Rhythm Studios',
  city: 'Mumbai',
  gridScore: 8.7,
  ratingsCount: 234,
};

const mockUpNext = [
  { id: '2', studioName: 'Dance Factory', city: 'Delhi', thumbnailURL: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400', gridScore: 8.2, ratingsCount: 189 },
  { id: '3', studioName: 'Groove Academy', city: 'Bangalore', thumbnailURL: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400', gridScore: 7.9, ratingsCount: 156 },
  { id: '4', studioName: 'Step Up Crew', city: 'Chennai', thumbnailURL: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400', gridScore: 8.5, ratingsCount: 201 },
];

export default function WatchPage() {
  const { isAuthenticated } = useAuthStore();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [hasRated, setHasRated] = useState(false);

  const handleRatingSubmit = (score: number) => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    // TODO: Submit to Firebase
    console.log('Rating submitted:', score);
    setHasRated(true);
  };

  return (
    <PageContainer className="pb-24 md:pb-8">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Video Section */}
        <div className="lg:col-span-2">
          <VideoPlayer
            videoURL={mockPerformance.videoURL}
            thumbnailURL={mockPerformance.thumbnailURL}
            studioName={mockPerformance.studioName}
            city={mockPerformance.city}
            gridScore={mockPerformance.gridScore}
          />

          {/* Rating Section */}
          <div className="mt-4">
            {hasRated ? (
              <div className="bg-neon-mint/10 border border-neon-mint/30 rounded-xl p-4 text-center">
                <svg className="w-8 h-8 text-neon-mint mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-neon-mint font-semibold">Thanks for rating!</p>
                <p className="text-soft-grey text-sm mt-1">Your rating helps rank this performance fairly.</p>
              </div>
            ) : (
              <RatingWidget onSubmit={handleRatingSubmit} />
            )}
          </div>

          {/* Performance Stats */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="bg-deep-navy border border-border-grey rounded-lg p-3 text-center">
              <p className="text-pulse-gold font-sora font-bold text-xl">{mockPerformance.gridScore}</p>
              <p className="text-soft-grey text-xs">Grid Score</p>
            </div>
            <div className="bg-deep-navy border border-border-grey rounded-lg p-3 text-center">
              <p className="text-frost-white font-sora font-bold text-xl">{mockPerformance.ratingsCount}</p>
              <p className="text-soft-grey text-xs">Ratings</p>
            </div>
            <div className="bg-deep-navy border border-border-grey rounded-lg p-3 text-center">
              <p className="text-electric-blue font-sora font-bold text-xl">#12</p>
              <p className="text-soft-grey text-xs">Current Rank</p>
            </div>
          </div>
        </div>

        {/* Up Next Sidebar */}
        <div className="lg:col-span-1">
          <h3 className="font-sora font-semibold text-frost-white mb-4">Up Next</h3>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {mockUpNext.map((perf) => (
              <PerformanceCard
                key={perf.id}
                id={perf.id}
                studioName={perf.studioName}
                city={perf.city}
                thumbnailURL={perf.thumbnailURL}
                gridScore={perf.gridScore}
                ratingsCount={perf.ratingsCount}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} title="Sign in to rate">
        <p className="text-soft-grey mb-4">
          You need to sign in to submit your rating. Your ratings help rank performances fairly.
        </p>
        <div className="flex flex-col gap-3">
          <Button onClick={() => window.location.href = '/login'}>
            Sign In
          </Button>
          <Button variant="ghost" onClick={() => setShowLoginModal(false)}>
            Continue Watching
          </Button>
        </div>
      </Modal>
    </PageContainer>
  );
}
