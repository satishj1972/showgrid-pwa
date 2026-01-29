'use client';

import Link from 'next/link';
import Button from '../ui/Button';
import { useAuthStore } from '@/lib/stores/authStore';

const Header = () => {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <header className="sticky top-0 z-40 bg-carbon-black/90 backdrop-blur-md border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-sora font-bold bg-gradient-to-r from-violet-core to-electric-blue bg-clip-text text-transparent">
            ShowGrid
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/watch" className="text-soft-grey hover:text-frost-white transition-colors">
            Watch
          </Link>
          <Link href="/leaderboard" className="text-soft-grey hover:text-frost-white transition-colors">
            Leaderboard
          </Link>
          <Link href="/challenge" className="text-soft-grey hover:text-frost-white transition-colors">
            Challenge
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <Link href="/studio/profile">
              <div className="w-10 h-10 rounded-full bg-violet-core/20 border border-violet-core/30 flex items-center justify-center">
                <span className="text-sm font-semibold text-violet-core">
                  {user?.displayName?.[0] || 'U'}
                </span>
              </div>
            </Link>
          ) : (
            <Link href="/login">
              <Button size="sm">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
