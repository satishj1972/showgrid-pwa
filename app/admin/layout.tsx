'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const adminNav = [
  { href: '/admin', label: 'Dashboard', icon: 'dashboard' },
  { href: '/admin/moderation', label: 'Moderation', icon: 'pending_actions' },
  { href: '/admin/studios', label: 'Studios', icon: 'groups' },
  { href: '/admin/challenges', label: 'Challenges', icon: 'emoji_events' },
  { href: '/admin/export', label: 'Export', icon: 'download' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background-dark flex">
      {/* Sidebar */}
      <aside className="w-64 bg-background-card border-r border-border-primary hidden md:flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border-primary">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white">admin_panel_settings</span>
            </div>
            <div>
              <span className="text-white font-bold">ShowGrid</span>
              <span className="text-primary text-xs block">Admin Panel</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {adminNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-background-elevated hover:text-white'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Back to App */}
        <div className="p-4 border-t border-border-primary">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-background-elevated hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-medium">Back to App</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background-card border-b border-border-primary p-4">
        <div className="flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">admin_panel_settings</span>
            </div>
            <span className="text-white font-bold">Admin</span>
          </Link>
          <div className="flex gap-2">
            {adminNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`size-10 rounded-lg flex items-center justify-center ${
                  pathname === item.href ? 'bg-primary text-white' : 'bg-background-elevated text-text-secondary'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:p-8 p-4 pt-20 md:pt-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
