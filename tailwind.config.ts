import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pastel palette
        pastel: {
          pink: '#F9CDD5',      // Primary pink pastel
          green: '#7A8450',     // Primary green pastel (adjusted to proper pastel)
          green_light: '#A8D8B8', // Light pastel green
          blue: '#B3D9E8',      // Pastel blue
          purple: '#D4B3E8',    // Pastel purple
          peach: '#F5D4B8',     // Pastel peach
          yellow: '#F5E8B8',    // Pastel yellow
          white: '#FAFAF8',     // Off-white
          gray: '#E8E8E8',      // Light gray
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};

export default config;
