/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lora': ['Lora', 'serif'],
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            '--tw-prose-body': 'var(--text-color)',
            '--tw-prose-headings': 'var(--text-color)',
            '--tw-prose-links': 'var(--accent-color)',
            '--tw-prose-bold': 'var(--text-color)',
            '--tw-prose-quotes': 'var(--text-color)',
            '--tw-prose-code': 'var(--text-color)',
            '--tw-prose-pre-code': '#faf6f1',
            '--tw-prose-pre-bg': 'rgba(44, 24, 16, 0.95)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 