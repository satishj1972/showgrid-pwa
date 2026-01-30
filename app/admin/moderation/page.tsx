'use client';

import { useState } from 'react';

const pendingPerformances = [
  { id: '1', studio: 'Rhythm Nation', city: 'Hyderabad', uploadedAt: '10 mins ago', duration: '0:58', thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400', videoUrl: '#' },
  { id: '2', studio: 'Step Up Academy', city: 'Pune', uploadedAt: '25 mins ago', duration: '1:00', thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400', videoUrl: '#' },
  { id: '3', studio: 'Eastern Beats', city: 'Kolkata', uploadedAt: '1 hour ago', duration: '0:59', thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400', videoUrl: '#' },
  { id: '4', studio: 'Western Flow', city: 'Ahmedabad', uploadedAt: '2 hours ago', duration: '1:00', thumbnail: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400', videoUrl: '#' },
  { id: '5', studio: 'Southern Stars', city: 'Kochi', uploadedAt: '3 hours ago', duration: '0:57', thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400', videoUrl: '#' },
];

const rejectionReasons = [
  'Audio does not match official track',
  'Video duration exceeds 60 seconds',
  'Inappropriate content',
  'Poor video quality',
  'Watermarks or overlays detected',
  'Other',
];

export default function ModerationPage() {
  const [performances, setPerformances] = useState(pendingPerformances);
  const [selectedId, setSelectedId] = useState<string | null>(pendingPerformances[0]?.id || null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const selectedPerformance = performances.find(p => p.id === selectedId);

  const handleApprove = async () => {
    if (!selectedId) return;
    setActionLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setPerformances(prev => prev.filter(p => p.id !== selectedId));
    setSelectedId(performances.find(p => p.id !== selectedId)?.id || null);
    setActionLoading(false);
  };

  const handleReject = async () => {
    if (!selectedId || !rejectReason) return;
    setActionLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setPerformances(prev => prev.filter(p => p.id !== selectedId));
    setSelectedId(performances.find(p => p.id !== selectedId)?.id || null);
    setShowRejectModal(false);
    setRejectReason('');
    setActionLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white text-2xl font-bold mb-1">Content Moderation</h1>
        <p className="text-text-secondary">Review and approve pending performance submissions</p>
      </div>

      {/* Stats */}
      <div className="flex gap-4 mb-6">
        <div className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-lg text-sm font-medium">
          {performances.length} Pending
        </div>
        <div className="bg-neon-green/20 text-neon-green px-4 py-2 rounded-lg text-sm font-medium">
          142 Approved Today
        </div>
        <div className="bg-red-400/20 text-red-400 px-4 py-2 rounded-lg text-sm font-medium">
          8 Rejected Today
        </div>
      </div>

      {performances.length === 0 ? (
        <div className="bg-background-card border border-border-primary rounded-xl p-12 text-center">
          <div className="size-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-neon-green text-3xl">check_circle</span>
          </div>
          <h2 className="text-white text-xl font-bold mb-2">All Caught Up!</h2>
          <p className="text-text-secondary">No pending performances to review.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Queue List */}
          <div className="bg-background-card border border-border-primary rounded-xl p-4 h-fit">
            <h2 className="text-white font-bold mb-4">Review Queue</h2>
            <div className="space-y-2">
              {performances.map((perf) => (
                <button
                  key={perf.id}
                  onClick={() => setSelectedId(perf.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                    selectedId === perf.id
                      ? 'bg-primary/20 border border-primary'
                      : 'bg-background-elevated border border-transparent hover:border-border-primary'
                  }`}
                >
                  <div className="size-12 rounded-lg overflow-hidden bg-background-dark flex-shrink-0">
                    <img src={perf.thumbnail} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm truncate">{perf.studio}</p>
                    <p className="text-text-secondary text-xs">{perf.city} • {perf.uploadedAt}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Video Preview */}
          <div className="lg:col-span-2 space-y-4">
            {selectedPerformance && (
              <>
                {/* Video Player */}
                <div className="bg-background-card border border-border-primary rounded-xl overflow-hidden">
                  <div className="aspect-video bg-black relative">
                    <img 
                      src={selectedPerformance.thumbnail} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="size-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-white text-sm">
                      {selectedPerformance.duration}
                    </div>
                  </div>
                </div>

                {/* Performance Details */}
                <div className="bg-background-card border border-border-primary rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">{selectedPerformance.studio}</h3>
                      <p className="text-text-secondary">{selectedPerformance.city}</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold uppercase">
                      Pending Review
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-background-elevated rounded-lg p-3">
                      <p className="text-text-secondary text-xs mb-1">Duration</p>
                      <p className="text-white font-semibold">{selectedPerformance.duration}</p>
                    </div>
                    <div className="bg-background-elevated rounded-lg p-3">
                      <p className="text-text-secondary text-xs mb-1">Uploaded</p>
                      <p className="text-white font-semibold">{selectedPerformance.uploadedAt}</p>
                    </div>
                    <div className="bg-background-elevated rounded-lg p-3">
                      <p className="text-text-secondary text-xs mb-1">Challenge</p>
                      <p className="text-white font-semibold">Season 4</p>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Review Checklist</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 text-text-secondary text-sm cursor-pointer">
                        <input type="checkbox" className="size-4 rounded border-border-primary bg-background-elevated text-primary focus:ring-primary" />
                        Audio matches official track
                      </label>
                      <label className="flex items-center gap-3 text-text-secondary text-sm cursor-pointer">
                        <input type="checkbox" className="size-4 rounded border-border-primary bg-background-elevated text-primary focus:ring-primary" />
                        Video duration ≤ 60 seconds
                      </label>
                      <label className="flex items-center gap-3 text-text-secondary text-sm cursor-pointer">
                        <input type="checkbox" className="size-4 rounded border-border-primary bg-background-elevated text-primary focus:ring-primary" />
                        No inappropriate content
                      </label>
                      <label className="flex items-center gap-3 text-text-secondary text-sm cursor-pointer">
                        <input type="checkbox" className="size-4 rounded border-border-primary bg-background-elevated text-primary focus:ring-primary" />
                        Acceptable video quality
                      </label>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleApprove}
                      disabled={actionLoading}
                      className="flex-1 flex items-center justify-center gap-2 bg-neon-green hover:bg-neon-green/90 text-black py-3 rounded-xl font-bold transition-all disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined">check_circle</span>
                      Approve
                    </button>
                    <button
                      onClick={() => setShowRejectModal(true)}
                      disabled={actionLoading}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-500/90 text-white py-3 rounded-xl font-bold transition-all disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined">cancel</span>
                      Reject
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-background-card border border-border-primary rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-white text-xl font-bold mb-4">Reject Performance</h3>
            <p className="text-text-secondary text-sm mb-4">Select a reason for rejection:</p>
            
            <div className="space-y-2 mb-6">
              {rejectionReasons.map((reason) => (
                <label 
                  key={reason}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    rejectReason === reason 
                      ? 'bg-red-500/20 border border-red-500' 
                      : 'bg-background-elevated border border-transparent hover:border-border-primary'
                  }`}
                >
                  <input
                    type="radio"
                    name="rejectReason"
                    value={reason}
                    checked={rejectReason === reason}
                    onChange={() => setRejectReason(reason)}
                    className="sr-only"
                  />
                  <div className={`size-4 rounded-full border-2 flex items-center justify-center ${
                    rejectReason === reason ? 'border-red-500 bg-red-500' : 'border-border-primary'
                  }`}>
                    {rejectReason === reason && <div className="size-2 bg-white rounded-full"></div>}
                  </div>
                  <span className="text-white text-sm">{reason}</span>
                </label>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { setShowRejectModal(false); setRejectReason(''); }}
                className="flex-1 px-4 py-3 bg-background-elevated text-white rounded-xl font-medium hover:bg-background-dark transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                disabled={!rejectReason || actionLoading}
                className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-500/90 transition-colors disabled:opacity-50"
              >
                Confirm Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
