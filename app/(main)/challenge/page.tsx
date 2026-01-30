'use client';

import { PageContainer } from '@/components/layout';
import { Card, Badge, Button, ProgressBar } from '@/components/ui';
import Link from 'next/link';

// Mock data - will be replaced with Firebase
const mockChallenge = {
  id: '1',
  title: 'Season 1 Dance Challenge',
  trackName: 'ShowGrid Official Hook',
  trackDuration: 60,
  status: 'active' as const,
  prizePool: 100000,
  startDate: new Date('2026-01-15'),
  endDate: new Date('2026-02-15'),
  participantCount: 124,
  rules: [
    'Video must be exactly 60 seconds to the official music hook',
    'Only one submission per studio allowed',
    'Must feature original choreography',
    'No explicit content or inappropriate gestures',
    'Video must be shot in portrait mode (9:16)',
    'Minimum 720p resolution required',
    'All performers must be 18+ or have guardian consent',
  ],
};

export default function ChallengePage() {
  const now = new Date();
  const totalDays = Math.ceil((mockChallenge.endDate.getTime() - mockChallenge.startDate.getTime()) / (1000 * 60 * 60 * 24));
  const daysElapsed = Math.ceil((now.getTime() - mockChallenge.startDate.getTime()) / (1000 * 60 * 60 * 24));
  const daysRemaining = Math.max(0, totalDays - daysElapsed);
  const progress = Math.min(100, (daysElapsed / totalDays) * 100);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const formatPrize = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <PageContainer>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <Badge variant="live" className="mb-2">Active</Badge>
          <h1 className="text-2xl md:text-3xl font-sora font-bold text-frost-white">
            {mockChallenge.title}
          </h1>
          <p className="text-soft-grey mt-1">
            Compete for the top spot on the leaderboard
          </p>
        </div>

        <Link href="/studio/upload">
          <Button size="lg">Submit Your Entry</Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card variant="glow" className="text-center">
          <p className="text-pulse-gold font-sora font-bold text-2xl md:text-3xl">
            {formatPrize(mockChallenge.prizePool)}
          </p>
          <p className="text-soft-grey text-sm mt-1">Prize Pool</p>
        </Card>

        <Card variant="glow" className="text-center">
          <p className="text-electric-blue font-sora font-bold text-2xl md:text-3xl">
            {mockChallenge.participantCount}
          </p>
          <p className="text-soft-grey text-sm mt-1">Participants</p>
        </Card>

        <Card variant="glow" className="text-center">
          <p className="text-neon-mint font-sora font-bold text-2xl md:text-3xl">
            {daysRemaining}
          </p>
          <p className="text-soft-grey text-sm mt-1">Days Left</p>
        </Card>

        <Card variant="glow" className="text-center">
          <p className="text-hyper-pink font-sora font-bold text-2xl md:text-3xl">
            {mockChallenge.trackDuration}s
          </p>
          <p className="text-soft-grey text-sm mt-1">Track Length</p>
        </Card>
      </div>

      {/* Timeline */}
      <Card variant="elevated" className="mb-6">
        <h2 className="font-sora font-semibold text-lg text-frost-white mb-4">Timeline</h2>
        
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-soft-grey">{formatDate(mockChallenge.startDate)}</span>
          <span className="text-soft-grey">{formatDate(mockChallenge.endDate)}</span>
        </div>
        
        <ProgressBar value={progress} variant="score" />
        
        <p className="text-center text-soft-grey text-sm mt-3">
          {daysRemaining > 0 
            ? `${daysRemaining} days remaining to submit your entry` 
            : 'Challenge has ended'}
        </p>
      </Card>

      {/* Official Music */}
      <Card variant="elevated" className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-violet-core/20 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-violet-core" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <div>
              <h3 className="font-sora font-semibold text-frost-white">{mockChallenge.trackName}</h3>
              <p className="text-soft-grey text-sm">{mockChallenge.trackDuration} seconds • Official Hook</p>
            </div>
          </div>

          <Link href="/studio/music">
            <Button variant="secondary" size="sm">
              Download
            </Button>
          </Link>
        </div>
      </Card>

      {/* Rules */}
      <Card variant="elevated">
        <h2 className="font-sora font-semibold text-lg text-frost-white mb-4">Challenge Rules</h2>
        
        <ul className="space-y-3">
          {mockChallenge.rules.map((rule, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 bg-violet-core/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-violet-core text-xs font-semibold">{index + 1}</span>
              </span>
              <span className="text-soft-grey">{rule}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t border-border-grey">
          <p className="text-soft-grey text-sm">
            By participating, you agree to all rules. Violations may result in disqualification.
          </p>
        </div>
      </Card>
    </PageContainer>
  );
}
