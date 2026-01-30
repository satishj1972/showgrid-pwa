'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function UploadSuccessPage() {
  const [copied, setCopied] = useState(false);

  const shareUrl = 'https://showgrid.in/p/abc123';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = `Check out our dance performance on ShowGrid! 🔥💃\n\nWatch & Rate: ${shareUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleInstagramShare = () => {
    // Instagram doesn't have direct share URL, show instructions
    alert('Copy the link and share it on your Instagram story or bio!');
    handleCopy();
  };

  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="bg-background-card border border-border-primary rounded-2xl p-8 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-neon-green/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            {/* Success Icon */}
            <div className="size-24 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-neon-green/30">
              <span className="material-symbols-outlined text-neon-green text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>

            <h1 className="text-white text-3xl font-black mb-2">Upload Successful!</h1>
            <p className="text-text-secondary mb-8">
              Your performance has been submitted and is now under review. You'll be notified once it's approved.
            </p>

            {/* Performance Preview Card */}
            <div className="bg-background-elevated border border-border-primary rounded-xl p-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-20 h-28 bg-background-dark rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-text-secondary text-3xl">movie</span>
                </div>
                <div className="text-left flex-1">
                  <p className="text-white font-semibold">Your Performance</p>
                  <p className="text-text-secondary text-sm">The Monsoon Groove Showdown</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      Pending Review
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="space-y-4">
              <h3 className="text-white font-bold">Share & Get More Votes!</h3>
              <p className="text-text-secondary text-sm">
                The more people watch and rate your performance, the higher you climb!
              </p>

              {/* Share URL */}
              <div className="flex items-center gap-2 bg-background-dark border border-border-primary rounded-lg p-3">
                <input 
                  type="text" 
                  value={shareUrl} 
                  readOnly 
                  className="flex-1 bg-transparent text-white text-sm outline-none"
                />
                <button 
                  onClick={handleCopy}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="material-symbols-outlined">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>

              {/* Share Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={handleWhatsAppShare}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white py-3 rounded-xl font-bold transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
                <button 
                  onClick={handleInstagramShare}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white py-3 rounded-xl font-bold transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <Link 
                href="/leaderboard"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold transition-all w-full"
              >
                <span className="material-symbols-outlined">leaderboard</span>
                View Leaderboard
              </Link>
              <Link 
                href="/"
                className="flex items-center justify-center gap-2 text-text-secondary hover:text-white py-3 rounded-xl font-medium transition-colors w-full"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Tips Card */}
        <div className="mt-6 bg-background-card border border-border-primary rounded-xl p-6">
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">tips_and_updates</span>
            Pro Tips to Get More Votes
          </h3>
          <ul className="space-y-2 text-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Share on your studio's social media pages
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Ask your students and their families to watch and rate
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Post during peak hours (7-10 PM) for maximum visibility
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
