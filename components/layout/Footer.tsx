import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-deep-navy border-t border-border-grey py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-sora font-bold bg-gradient-to-r from-violet-core to-electric-blue bg-clip-text text-transparent">
              ShowGrid
            </span>
            <span className="text-soft-grey text-sm">Two Worlds. One Grid.</span>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <Link href="/challenge/rules" className="text-soft-grey hover:text-frost-white transition-colors">
              Rules
            </Link>
            <Link href="/about" className="text-soft-grey hover:text-frost-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-soft-grey hover:text-frost-white transition-colors">
              Contact
            </Link>
          </nav>

          <p className="text-soft-grey text-sm">
            Made with <span className="text-hyper-pink">❤</span> in Bangalore
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-border-grey text-center">
          <p className="text-soft-grey/60 text-xs">
            © {new Date().getFullYear()} Brand Blitz Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
