/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4d54e0',
          50: '#eef0ff',
          100: '#e0e2ff',
          200: '#c7caff',
          300: '#a5a9ff',
          400: '#8085ff',
          500: '#4d54e0',
          600: '#3f42d9',
          700: '#3636c3',
          800: '#2e2e9e',
          900: '#29297e',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
    },
  },
  plugins: [],
};