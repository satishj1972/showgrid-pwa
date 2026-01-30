'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OfficialMusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    // In real app, trigger actual download
  };

  return (
    <div className="min-h-screen bg-background-dark pb-24">
      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/challenge" className="text-text-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div>
            <h1 className="text-white text-2xl font-bold">Official Music Track</h1>
            <p className="text-text-secondary text-sm">Download the track for your performance</p>
          </div>
        </div>

        {/* Music Card */}
        <div className="bg-background-card border border-border-primary rounded-2xl overflow-hidden mb-6">
          {/* Album Art */}
          <div className="relative h-48 bg-gradient-to-br from-primary/30 via-purple-500/30 to-blue-500/30 flex items-center justify-center">
            <div className="absolute inset-0 bg-background-dark/50"></div>
            <div className="relative z-10 text-center">
              <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/50">
                <span className="material-symbols-outlined text-primary text-4xl">music_note</span>
              </div>
              <span className="text-xs text-primary font-bold uppercase tracking-widest">Official Track</span>
            </div>
          </div>

          {/* Track Info */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-neon-green pulse-ring"></span>
              <span className="text-neon-green text-xs font-bold uppercase">Active Challenge</span>
            </div>
            <h2 className="text-white text-2xl font-bold mb-1">Jai Ho - Remix</h2>
            <p className="text-text-secondary mb-4">A.R. Rahman • The Monsoon Groove Showdown</p>

            {/* Track Details */}
            <div className="flex gap-6 text-sm mb-6">
              <div>
                <span className="text-text-secondary">Duration</span>
                <p className="text-white font-semibold">1:00</p>
              </div>
              <div>
                <span className="text-text-secondary">Format</span>
                <p className="text-white font-semibold">MP3 320kbps</p>
              </div>
              <div>
                <span className="text-text-secondary">Size</span>
                <p className="text-white font-semibold">2.4 MB</p>
              </div>
            </div>

            {/* Audio Player */}
            <div className="bg-background-elevated border border-border-secondary rounded-xl p-4 mb-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="size-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all"
                >
                  <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <div className="flex-1">
                  <div className="h-2 bg-background-dark rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-xs text-text-secondary mt-1">
                    <span>0:20</span>
                    <span>1:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button 
              onClick={handleDownload}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all ${
                downloaded
                  ? 'bg-neon-green/20 text-neon-green border border-neon-green/30'
                  : 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30'
              }`}
            >
              <span className="material-symbols-outlined">
                {downloaded ? 'check_circle' : 'download'}
              </span>
              {downloaded ? 'Downloaded' : 'Download Track'}
            </button>
          </div>
        </div>

        {/* Rules Reminder */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">warning</span>
            Important Rules
          </h3>
          <ul className="space-y-2 text-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">close</span>
              <span><strong className="text-white">No remixes</strong> - Use the track exactly as provided</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">close</span>
              <span><strong className="text-white">No mashups</strong> - Do not combine with other tracks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">close</span>
              <span><strong className="text-white">No alterations</strong> - Do not edit tempo, pitch, or effects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-neon-green text-sm mt-0.5">check</span>
              <span><strong className="text-white">Full track only</strong> - Use the complete 60-second track</span>
            </li>
          </ul>
          <p className="text-primary text-xs mt-4 font-medium">
            Violations will result in immediate disqualification.
          </p>
        </div>

        {/* Next Steps */}
        <div className="mt-6 flex gap-3">
          <Link 
            href="/studio/upload"
            className="flex-1 flex items-center justify-center gap-2 bg-background-card border border-border-primary hover:border-primary text-white py-3 rounded-xl font-semibold transition-all"
          >
            <span className="material-symbols-outlined">upload</span>
            Upload Entry
          </Link>
          <Link 
            href="/challenge"
            className="flex-1 flex items-center justify-center gap-2 bg-background-card border border-border-primary hover:border-primary text-white py-3 rounded-xl font-semibold transition-all"
          >
            <span className="material-symbols-outlined">description</span>
            View Rules
          </Link>
        </div>
      </div>
    </div>
  );
}
