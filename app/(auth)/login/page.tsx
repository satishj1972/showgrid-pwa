'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/lib/stores/authStore';

export default function LoginPage() {
  const [method, setMethod] = useState<'select' | 'phone'>('select');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      // In real app, call Firebase Google Auth
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '/';
    } catch (err) {
      setError('Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = async () => {
    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // In real app, call Firebase Phone Auth
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep('otp');
    } catch (err) {
      setError('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // In real app, verify OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '/';
    } catch (err) {
      setError('Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center px-4 py-12">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="size-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl">grid_view</span>
            </div>
            <span className="text-white text-2xl font-extrabold uppercase">ShowGrid</span>
          </Link>
          <h1 className="text-white text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-text-secondary">Sign in to rate performances and track your studio</p>
        </div>

        {/* Login Card */}
        <div className="bg-background-card border border-border-primary rounded-2xl p-6 md:p-8">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
              {error}
            </div>
          )}

          {method === 'select' && (
            <div className="space-y-4">
              {/* Google Sign In */}
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 py-4 rounded-xl font-semibold transition-all disabled:opacity-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {loading ? 'Signing in...' : 'Continue with Google'}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border-primary"></div>
                <span className="text-text-secondary text-sm">or</span>
                <div className="flex-1 h-px bg-border-primary"></div>
              </div>

              {/* Phone Sign In */}
              <button
                onClick={() => setMethod('phone')}
                className="w-full flex items-center justify-center gap-3 bg-background-elevated border border-border-primary hover:border-primary text-white py-4 rounded-xl font-semibold transition-all"
              >
                <span className="material-symbols-outlined">phone</span>
                Continue with Phone
              </button>
            </div>
          )}

          {method === 'phone' && step === 'phone' && (
            <div className="space-y-4">
              <button
                onClick={() => setMethod('select')}
                className="text-text-secondary hover:text-white text-sm flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back
              </button>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <div className="bg-background-elevated border border-border-primary rounded-lg px-4 py-3 text-white">
                    +91
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter 10-digit number"
                    className="flex-1 bg-background-elevated border border-border-primary rounded-lg px-4 py-3 text-white placeholder-text-secondary outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={handleSendOTP}
                disabled={loading || phone.length !== 10}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white py-4 rounded-xl font-bold transition-all disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          )}

          {method === 'phone' && step === 'otp' && (
            <div className="space-y-4">
              <button
                onClick={() => setStep('phone')}
                className="text-text-secondary hover:text-white text-sm flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Change Number
              </button>

              <div className="text-center mb-4">
                <p className="text-text-secondary text-sm">
                  OTP sent to <span className="text-white">+91 {phone}</span>
                </p>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="6-digit OTP"
                  className="w-full bg-background-elevated border border-border-primary rounded-lg px-4 py-3 text-white text-center text-2xl tracking-[0.5em] placeholder-text-secondary outline-none focus:border-primary transition-colors"
                  maxLength={6}
                />
              </div>

              <button
                onClick={handleVerifyOTP}
                disabled={loading || otp.length !== 6}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white py-4 rounded-xl font-bold transition-all disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Verify & Sign In'}
              </button>

              <button className="w-full text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                Resend OTP
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-text-secondary text-xs mt-6">
          By signing in, you agree to our{' '}
          <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
