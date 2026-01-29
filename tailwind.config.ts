import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Colors
        'carbon-black': '#050507',
        'deep-navy': '#0D0F1A',
        'frost-white': '#FFFFFF',
        'soft-grey': '#9CA3AF',
        'border-grey': 'rgba(148,163,184,0.35)',
        // Neon Accents
        'violet-core': '#6C4AFF',
        'electric-blue': '#3B82F6',
        'hyper-pink': '#EC4899',
        'neon-mint': '#2ED1B8',
        'pulse-gold': '#FACC15',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6C4AFF 0%, #3B82F6 100%)',
        'gradient-success': 'linear-gradient(135deg, #3B82F6 0%, #2ED1B8 100%)',
        'gradient-wedding': 'linear-gradient(135deg, #EC4899 0%, #FACC15 100%)',
        'gradient-events': 'linear-gradient(135deg, #2ED1B8 0%, #6C4AFF 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
