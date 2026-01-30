'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Card } from '@/components/ui';
import { PageContainer } from '@/components/layout';
import { auth } from '@/lib/firebase/config';
import { GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { useAuthStore } from '@/lib/stores/authStore';

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAuthStore();
  const [loginMethod, setLoginMethod] = useState<'select' | 'phone'>('select');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const phoneNumber = phone.startsWith('+91') ? phone : `+91${phone}`;
      
      // Initialize reCAPTCHA
      if (!(window as any).recaptchaVerifier) {
        (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          size: 'invisible',
        });
      }

      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        (window as any).recaptchaVerifier
      );
      setConfirmationResult(confirmation);
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length < 6) {
      setError('Please enter a valid OTP');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      if (confirmationResult) {
        const result = await confirmationResult.confirm(otp);
        setUser(result.user);
        router.push('/');
      }
    } catch (err: any) {
      setError(err.message || 'Invalid OTP');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer className="flex items-center justify-center min-h-[80vh]">
      <Card variant="elevated" className="w-full max-w-md p-6">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-sora font-bold bg-gradient-to-r from-violet-core to-electric-blue bg-clip-text text-transparent">
            ShowGrid
          </h1>
          <p className="text-soft-grey mt-2">Sign in to rate performances</p>
        </div>

        {error && (
          <div className="bg-hyper-pink/10 border border-hyper-pink/30 rounded-lg p-3 mb-4">
            <p className="text-hyper-pink text-sm">{error}</p>
          </div>
        )}

        {loginMethod === 'select' && (
          <div className="space-y-4">
            {/* Google Sign In */}
            <Button
              variant="secondary"
              className="w-full"
              onClick={handleGoogleSignIn}
              isLoading={isLoading}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </Button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-border-grey" />
              <span className="text-soft-grey text-sm">or</span>
              <div className="flex-1 h-px bg-border-grey" />
            </div>

            {/* Phone Sign In */}
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => setLoginMethod('phone')}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Continue with Phone
            </Button>
          </div>
        )}

        {loginMethod === 'phone' && !confirmationResult && (
          <div className="space-y-4">
            <button
              onClick={() => setLoginMethod('select')}
              className="text-soft-grey hover:text-frost-white text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <Input
              label="Phone Number"
              type="tel"
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
            />
            <p className="text-soft-grey text-xs">We&apos;ll send you an OTP to verify</p>

            <Button
              className="w-full"
              onClick={handleSendOTP}
              isLoading={isLoading}
              disabled={phone.length < 10}
            >
              Send OTP
            </Button>
          </div>
        )}

        {loginMethod === 'phone' && confirmationResult && (
          <div className="space-y-4">
            <button
              onClick={() => {
                setConfirmationResult(null);
                setOtp('');
              }}
              className="text-soft-grey hover:text-frost-white text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Change number
            </button>

            <p className="text-soft-grey text-sm">
              OTP sent to <span className="text-frost-white">+91 {phone}</span>
            </p>

            <Input
              label="Enter OTP"
              type="text"
              placeholder="6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              maxLength={6}
            />

            <Button
              className="w-full"
              onClick={handleVerifyOTP}
              isLoading={isLoading}
              disabled={otp.length < 6}
            >
              Verify & Sign In
            </Button>
          </div>
        )}

        {/* Hidden reCAPTCHA container */}
        <div id="recaptcha-container" />

        {/* Terms */}
        <p className="text-soft-grey text-xs text-center mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </Card>
    </PageContainer>
  );
}
