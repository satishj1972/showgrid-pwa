import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import { AuthProvider } from '@/components/providers';

export const metadata: Metadata = {
  title: 'ShowGrid - Two Worlds. One Grid.',
  description: 'India\'s premier creative challenge platform where creativity is rated, ranked, and recognized fairly.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#6C4AFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-carbon-black text-frost-white flex flex-col">
        <AuthProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <MobileNav />
        </AuthProvider>
      </body>
    </html>
  );
}
