'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-6">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="flex h-2 w-2 rounded-full bg-primary pulse-ring"></span>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Season 1 Live</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Two Worlds.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">
                One Grid.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              India's premier dance studio challenge platform where creativity is rated, ranked, and recognized fairly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link 
                href="/watch"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
              >
                <span className="material-symbols-outlined">play_circle</span>
                Watch Performances
              </Link>
              <Link 
                href="/studio/upload"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary/50 hover:border-primary text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-primary/10"
              >
                <span className="material-symbols-outlined">upload</span>
                Upload Your Entry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-background-card border border-border-primary rounded-xl p-6 hover:border-primary/50 transition-all group">
            <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">visibility</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Watch & Rate</h3>
            <p className="text-text-secondary text-sm">
              Watch performances from dance studios across India and rate them on a scale of 1-10.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-background-card border border-border-primary rounded-xl p-6 hover:border-primary/50 transition-all group">
            <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">leaderboard</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Live Leaderboard</h3>
            <p className="text-text-secondary text-sm">
              Real-time rankings updated as votes come in. See which studios are trending in your city.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-background-card border border-border-primary rounded-xl p-6 hover:border-primary/50 transition-all group">
            <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">emoji_events</span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Win Rewards</h3>
            <p className="text-text-secondary text-sm">
              Top studios win cash prizes and the prestigious ShowGrid Certified badge.
            </p>
          </div>
        </div>
      </section>

      {/* Current Challenge Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-background-card to-background-elevated border border-border-primary rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-neon-green pulse-ring"></span>
                <span className="text-neon-green text-xs font-bold uppercase tracking-widest">Active Challenge</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                The Monsoon Groove Showdown
              </h2>
              <p className="text-text-secondary">
                Dance to "Jai Ho - Remix" and compete for ₹5,00,000 prize pool
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-white font-bold text-2xl">42</span>
                  <p className="text-text-secondary">Studios</p>
                </div>
                <div className="w-px h-10 bg-border-primary"></div>
                <div>
                  <span className="text-white font-bold text-2xl">128</span>
                  <p className="text-text-secondary">Entries</p>
                </div>
                <div className="w-px h-10 bg-border-primary"></div>
                <div>
                  <span className="text-primary font-bold text-2xl">12</span>
                  <p className="text-text-secondary">Days Left</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link 
                href="/challenge/timeline"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105"
              >
                View Challenge
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link 
                href="/challenge"
                className="inline-flex items-center justify-center gap-2 text-text-secondary hover:text-white text-sm font-medium transition-colors"
              >
                Read Rules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">How ShowGrid Works</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            A fair platform where creativity speaks louder than follower counts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: 'music_note', title: 'Get the Track', desc: 'Download the official challenge track' },
            { icon: 'videocam', title: 'Record', desc: 'Create your 60-second performance' },
            { icon: 'cloud_upload', title: 'Upload', desc: 'Submit your entry before deadline' },
            { icon: 'trending_up', title: 'Compete', desc: 'Get rated and climb the leaderboard' },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
              </div>
              <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Step {index + 1}</div>
              <h3 className="text-white font-bold mb-1">{step.title}</h3>
              <p className="text-text-secondary text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 pb-32">
        <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Showcase Your Talent?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Join thousands of dance studios competing for recognition on India's fairest talent platform.
          </p>
          <Link 
            href="/login"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
          >
            Get Started
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
