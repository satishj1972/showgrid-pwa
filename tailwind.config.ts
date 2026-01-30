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
        // Primary Brand Color
        'primary': '#f4259d',
        // Background Colors
        'background-dark': '#12080d',
        'background-card': '#22101a',
        'background-elevated': '#341829',
        // Border Colors
        'border-primary': '#683151',
        'border-secondary': '#492239',
        // Text Colors
        'text-primary': '#ffffff',
        'text-secondary': '#cb90b2',
        'text-muted': '#9a7189',
        // Accent Colors
        'neon-green': '#10b981',
        'neon-blue': '#256af4',
        'neon-yellow': '#facc15',
        // Legacy colors (keeping for compatibility)
        'carbon-black': '#050507',
        'deep-navy': '#0D0F1A',
        'frost-white': '#FFFFFF',
        'soft-grey': '#9CA3AF',
        'violet-core': '#6C4AFF',
        'electric-blue': '#3B82F6',
        'hyper-pink': '#f4259d',
        'neon-mint': '#2ED1B8',
        'pulse-gold': '#FACC15',
      },
      fontFamily: {
        'display': ['Plus Jakarta Sans', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f4259d 0%, #ff6b6b 100%)',
        'gradient-neon': 'linear-gradient(135deg, #f4259d 0%, #6C4AFF 100%)',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(244, 37, 157, 0.15)',
        'neon-strong': '0 0 20px rgba(244, 37, 157, 0.3)',
        'neon-glow': '0 0 30px rgba(244, 37, 157, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
