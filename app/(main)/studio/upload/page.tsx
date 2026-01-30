'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/lib/stores/authStore';

export default function StudioUploadPage() {
  const { isAuthenticated } = useAuthStore();
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('video/')) {
      setSelectedFile(file);
    } else {
      alert('Please upload a video file');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setUploadProgress(i);
    }
    setIsUploading(false);
    // Redirect to success page
    window.location.href = '/studio/success';
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center px-4">
        <div className="bg-background-card border border-border-primary rounded-2xl p-8 max-w-md w-full text-center">
          <div className="size-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">lock</span>
          </div>
          <h2 className="text-white text-2xl font-bold mb-2">Sign In Required</h2>
          <p className="text-text-secondary mb-6">You need to sign in as a studio to upload performances.</p>
          <Link 
            href="/login"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition-all w-full"
          >
            Sign In to Continue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Header */}
      <div className="bg-background-card border-b border-border-secondary">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-text-secondary hover:text-white transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <h1 className="text-white text-2xl md:text-3xl font-bold">Upload Performance</h1>
              <p className="text-text-secondary text-sm">Submit your entry for the current challenge</p>
            </div>
          </div>

          {/* Challenge Info Bar */}
          <div className="bg-background-elevated border border-border-primary rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">music_note</span>
              </div>
              <div>
                <p className="text-white font-semibold">The Monsoon Groove Showdown</p>
                <p className="text-text-secondary text-xs">Track: "Jai Ho - Remix" (A.R. Rahman)</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-neon-green pulse-ring"></span>
              <span className="text-neon-green text-xs font-bold uppercase">2 Days Left</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Upload Area */}
        <div 
          className={`relative border-2 border-dashed rounded-2xl p-8 md:p-12 text-center transition-all ${
            dragActive 
              ? 'border-primary bg-primary/10' 
              : selectedFile 
                ? 'border-neon-green bg-neon-green/5' 
                : 'border-border-primary hover:border-primary/50 bg-background-card'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            className="hidden"
          />

          {!selectedFile ? (
            <>
              <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                {dragActive ? 'Drop your video here' : 'Drag & drop your video'}
              </h3>
              <p className="text-text-secondary mb-6">or click to browse from your device</p>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition-all"
              >
                <span className="material-symbols-outlined">folder_open</span>
                Browse Files
              </button>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-text-secondary">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">videocam</span>
                  MP4, MOV, AVI
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">timer</span>
                  Max 60 seconds
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">sd_card</span>
                  Max 500MB
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="size-20 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-neon-green text-4xl">check_circle</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Video Selected</h3>
              <p className="text-text-secondary mb-2">{selectedFile.name}</p>
              <p className="text-text-secondary text-sm mb-6">
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
              <button 
                onClick={() => setSelectedFile(null)}
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                Choose a different file
              </button>
            </>
          )}
        </div>

        {/* Upload Progress */}
        {isUploading && (
          <div className="mt-6 bg-background-card border border-border-primary rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-medium">Uploading...</span>
              <span className="text-primary font-bold">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-background-dark rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Guidelines */}
        <div className="mt-8 bg-background-card border border-border-primary rounded-xl p-6">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">info</span>
            Upload Guidelines
          </h3>
          <ul className="space-y-3 text-text-secondary text-sm">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-neon-green text-sm mt-0.5">check</span>
              Use the official track only - no remixes or mashups allowed
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-neon-green text-sm mt-0.5">check</span>
              Video must be exactly 60 seconds or less
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-neon-green text-sm mt-0.5">check</span>
              Record in portrait mode (9:16) for best display
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-neon-green text-sm mt-0.5">check</span>
              Ensure good lighting and clear audio
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-neon-green text-sm mt-0.5">check</span>
              Group size: 4 to 12 performers only
            </li>
          </ul>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <button 
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className={`flex items-center justify-center gap-2 px-10 py-4 rounded-full text-lg font-bold transition-all w-full max-w-md ${
              selectedFile && !isUploading
                ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:scale-105'
                : 'bg-border-primary text-text-secondary cursor-not-allowed'
            }`}
          >
            {isUploading ? (
              <>
                <span className="animate-spin material-symbols-outlined">progress_activity</span>
                Uploading...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">upload</span>
                Submit Entry
              </>
            )}
          </button>
          <p className="text-text-secondary text-xs text-center">
            By uploading, you agree to the <Link href="/challenge" className="text-primary hover:underline">challenge rules</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
