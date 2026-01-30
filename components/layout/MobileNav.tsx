'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', icon: 'home', label: 'Home' },
  { href: '/watch', icon: 'play_circle', label: 'Watch' },
  { href: '/leaderboard', icon: 'emoji_events', label: 'Ranks' },
  { href: '/studio/upload', icon: 'add_box', label: 'Upload' },
  { href: '/fan/profile', icon: 'person', label: 'Profile' },
];

export default function MobileNav() {
  const pathname = usePathname();

  // Hide on watch page (it has its own UI)
  if (pathname === '/watch') return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md border-t border-border-secondary md:hidden">
      <div className="flex justify-around items-center py-2 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                isActive 
                  ? 'text-primary' 
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-2xl" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                {item.icon}
              </span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
