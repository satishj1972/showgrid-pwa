import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';

export const metadata: Metadata = {
  title: 'ShowGrid - Two Worlds. One Grid.',
  description: 'India\'s premier creative challenge platform where creativity is rated, ranked, and recognized fairly.',
  manifest: '/manifest.json',
  themeColor: '#6C4AFF',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-carbon-black text-frost-white flex flex-col">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
