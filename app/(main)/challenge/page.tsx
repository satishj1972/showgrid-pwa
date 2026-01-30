'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ChallengePage() {
  const [confirmations, setConfirmations] = useState({
    original: false,
    noRemix: false,
    scoringWeights: false,
  });

  const allConfirmed = Object.values(confirmations).every(Boolean);

  return (
    <div className="min-h-screen bg-background-card pb-24 relative">
      {/* Decorative Glow Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <main className="max-w-[960px] mx-auto px-4 py-10">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
          <div className="flex min-w-72 flex-col gap-3">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Challenge Rules
            </h1>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">music_note</span>
              <p className="text-text-secondary text-lg font-normal leading-normal">
                Indian Classical Fusion - Track #09
              </p>
            </div>
          </div>
          <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-bold transition-all hover:scale-105 active:scale-95">
            <span className="truncate">Track Details</span>
          </button>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {/* How it Works */}
          <div className="flex flex-1 gap-4 rounded-xl border border-border-primary bg-background-elevated p-6 flex-col neon-border hover:border-primary/50 transition-colors group">
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-lg font-bold">How it Works</h2>
              <ul className="text-text-secondary text-sm space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-primary font-bold">1.</span> 
                  Upload your high-definition performance video.
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary font-bold">2.</span> 
                  Community voting period (7 days).
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary font-bold">3.</span> 
                  Final Judge Panel review for top 10 finalists.
                </li>
              </ul>
            </div>
          </div>

          {/* Music Rules - Highlighted */}
          <div className="flex flex-1 gap-4 rounded-xl border-2 border-primary bg-background-elevated p-6 flex-col shadow-[0_0_20px_rgba(244,37,157,0.1)] group">
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined">speaker</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-lg font-bold">Music Rules</h2>
              <p className="text-white text-sm font-semibold mb-1">Strict Single-Track Policy:</p>
              <div className="bg-primary/20 p-3 rounded-lg border border-primary/30">
                <p className="text-white text-xs leading-relaxed">
                  <span className="text-primary font-black uppercase">Warning:</span> No remixes, mashups, or alterations. Use the provided track as-is.
                </p>
              </div>
              <p className="text-text-secondary text-xs mt-2 italic">
                Violations result in immediate disqualification.
              </p>
            </div>
          </div>

          {/* Scoring Criteria */}
          <div className="flex flex-1 gap-4 rounded-xl border border-border-primary bg-background-elevated p-6 flex-col neon-border group">
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">grade</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-lg font-bold">Scoring Criteria</h2>
              <div className="space-y-3">
                <div>
                  <div className="w-full bg-background-dark rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-white">Choreography</span>
                    <span className="text-primary">40%</span>
                  </div>
                </div>
                <div>
                  <div className="w-full bg-background-dark rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-white">Synchronization</span>
                    <span className="text-primary">30%</span>
                  </div>
                </div>
                <div>
                  <div className="w-full bg-background-dark rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-white">Expression</span>
                    <span className="text-primary">30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="flex flex-1 gap-4 rounded-xl border border-border-primary bg-background-elevated p-6 flex-col neon-border group">
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-lg font-bold">Eligibility</h2>
              <p className="text-text-secondary text-sm leading-normal">
                Open to all registered dance studios. Performance groups must consist of <span className="text-white font-bold">4 to 12 performers</span> only.
              </p>
              <p className="text-text-secondary text-xs italic opacity-80">
                Registration certificate must be valid.
              </p>
            </div>
          </div>

          {/* Prize Pool & Rewards - Wide */}
          <div className="flex flex-1 gap-4 rounded-xl border border-border-primary bg-background-elevated p-6 flex-col neon-border group md:col-span-2">
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">trophy</span>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div className="flex flex-col gap-2 flex-1">
                <h2 className="text-white text-lg font-bold">Prize Pool & Rewards</h2>
                <p className="text-text-secondary text-sm leading-normal">
                  Winning studio receives a <span className="text-white font-bold">₹50,000 cash prize</span> and the prestigious 'ShowGrid Certified' digital badge for their official profile.
                </p>
              </div>
              <div className="hidden sm:block">
                <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/40">
                  <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consent Checkboxes */}
        <div className="bg-background-dark rounded-xl p-6 border border-border-secondary mb-10">
          <div className="space-y-1 mb-4">
            <h3 className="text-white font-bold">Participation Confirmation</h3>
            <p className="text-text-secondary text-xs">Please confirm you've read and understood the rules.</p>
          </div>
          <div className="flex flex-col">
            <label className="flex gap-x-3 py-3 items-center cursor-pointer group">
              <input 
                type="checkbox"
                checked={confirmations.original}
                onChange={(e) => setConfirmations(prev => ({ ...prev, original: e.target.checked }))}
                className="h-5 w-5 rounded border-border-primary border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-primary focus:ring-offset-background-dark focus:outline-none transition-all accent-primary"
              />
              <p className="text-white text-sm font-medium leading-normal group-hover:text-primary transition-colors">
                I confirm our video entry is original and recorded for this challenge.
              </p>
            </label>
            <label className="flex gap-x-3 py-3 items-center cursor-pointer group">
              <input 
                type="checkbox"
                checked={confirmations.noRemix}
                onChange={(e) => setConfirmations(prev => ({ ...prev, noRemix: e.target.checked }))}
                className="h-5 w-5 rounded border-border-primary border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-primary focus:ring-offset-background-dark focus:outline-none transition-all accent-primary"
              />
              <p className="text-white text-sm font-medium leading-normal group-hover:text-primary transition-colors">
                I understand that any music remixing will lead to disqualification.
              </p>
            </label>
            <label className="flex gap-x-3 py-3 items-center cursor-pointer group">
              <input 
                type="checkbox"
                checked={confirmations.scoringWeights}
                onChange={(e) => setConfirmations(prev => ({ ...prev, scoringWeights: e.target.checked }))}
                className="h-5 w-5 rounded border-border-primary border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-primary focus:ring-offset-background-dark focus:outline-none transition-all accent-primary"
              />
              <p className="text-white text-sm font-medium leading-normal group-hover:text-primary transition-colors">
                I agree to the scoring weights (40/30/30) as final.
              </p>
            </label>
          </div>
        </div>

        {/* Footer Action */}
        <div className="flex flex-col items-center gap-4">
          <Link 
            href="/"
            className={`flex min-w-[320px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 text-white text-lg font-extrabold leading-normal tracking-[0.015em] shadow-lg transition-all ${
              allConfirmed 
                ? 'bg-primary shadow-primary/20 hover:scale-105 active:scale-95' 
                : 'bg-primary/50 cursor-not-allowed'
            }`}
          >
            <span className="truncate">Got it, take me back</span>
          </Link>
          <p className="text-text-secondary text-xs">
            By clicking, you acknowledge the terms of participation.
          </p>
        </div>
      </main>
    </div>
  );
}
