/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "rgba(20, 44, 4, 0.8)",
          light: "rgba(20, 44, 4, 0.6)",
          dark: "rgba(20, 44, 4, 0.9)",
          solid: "rgb(20, 44, 4)",
        },
        secondary: {
          DEFAULT: "rgba(29, 93, 44)",
          light: "rgba(29, 93, 44, 0.8)",
          dark: "rgba(29, 93, 44, 1)",
        },
        accent: {
          DEFAULT: "rgba(20, 44, 4, 0.1)",
          hover: "rgba(20, 44, 4, 0.15)",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-2': ['2rem', { lineHeight: '1.4' }],
        'heading-3': ['1.5rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -1px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px -2px rgba(0, 0, 0, 0.15), 0 8px 24px -4px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
