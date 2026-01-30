import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-border-secondary py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <span className="text-primary font-extrabold text-lg">ShowGrid</span>
            <span className="text-text-secondary text-sm">Two Worlds. One Grid.</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link href="/challenge" className="text-text-secondary hover:text-white text-sm transition-colors">
              Rules
            </Link>
            <Link href="/about" className="text-text-secondary hover:text-white text-sm transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>

          {/* Made in Bangalore */}
          <div className="text-text-secondary text-sm">
            Made with <span className="text-primary">❤</span> in Bangalore
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-border-secondary">
          <p className="text-text-muted text-xs">
            © 2026 Brand Blitz Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
