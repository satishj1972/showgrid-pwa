'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/authStore';

export default function Header() {
  const pathname = usePathname();
  const { user, isAuthenticated } = useAuthStore();

  const navLinks = [
    { href: '/challenges', label: 'Challenges' },
    { href: '/leaderboard', label: 'Leaderboard', active: true },
    { href: '/studios', label: 'Studios' },
    { href: '/schedule', label: 'Schedule' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-border-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-lg">grid_view</span>
            </div>
            <span className="text-white font-extrabold text-lg uppercase tracking-tight">ShowGrid</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-background-card border border-border-primary rounded-lg px-3 py-2">
              <span className="material-symbols-outlined text-text-secondary text-sm">search</span>
              <input 
                type="text" 
                placeholder="Search Studio" 
                className="bg-transparent text-sm text-white placeholder-text-secondary outline-none w-32"
              />
            </div>

            {/* Notifications */}
            <button className="size-10 rounded-lg bg-background-card border border-border-primary flex items-center justify-center text-text-secondary hover:text-white hover:border-primary transition-all">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>

            {/* User Avatar / Sign In */}
            {isAuthenticated && user ? (
              <div className="size-10 rounded-full border-2 border-primary overflow-hidden">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {user.displayName?.charAt(0) || 'U'}
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/login"
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
