import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ebff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: '#14b8a6',
        ink: '#111827',
        soft: '#f8fafc',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
