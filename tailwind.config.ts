import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { 
    extend: {             
      colors: {
        'text': {
          50: `rgb(var(--text-50) / <alpha-value>)`,
          100: `rgb(var(--text-100) / <alpha-value>)`,
          200: `rgb(var(--text-200) / <alpha-value>)`,
          300: `rgb(var(--text-300) / <alpha-value>)`,
          400: `rgb(var(--text-400) / <alpha-value>)`,
          500: `rgb(var(--text-500) / <alpha-value>)`,
          600: `rgb(var(--text-600) / <alpha-value>)`,
          700: `rgb(var(--text-700) / <alpha-value>)`,
          800: `rgb(var(--text-800) / <alpha-value>)`,
          900: `rgb(var(--text-900) / <alpha-value>)`,
          950: `rgb(var(--text-950) / <alpha-value>)`,
        },
        'background': {
          50: `rgb(var(--background-50) / <alpha-value>)`,
          100: `rgb(var(--background-100) / <alpha-value>)`,
          200: `rgb(var(--background-200) / <alpha-value>)`,
          300: `rgb(var(--background-300) / <alpha-value>)`,
          400: `rgb(var(--background-400) / <alpha-value>)`,
          500: `rgb(var(--background-500) / <alpha-value>)`,
          600: `rgb(var(--background-600) / <alpha-value>)`,
          700: `rgb(var(--background-700) / <alpha-value>)`,
          800: `rgb(var(--background-800) / <alpha-value>)`,
          900: `rgb(var(--background-900) / <alpha-value>)`,
          950: `rgb(var(--background-950) / <alpha-value>)`,
        },
        'primary': {
          50: `rgb(var(--primary-50) / <alpha-value>)`,
          100: `rgb(var(--primary-100) / <alpha-value>)`,
          200: `rgb(var(--primary-200) / <alpha-value>)`,
          300: `rgb(var(--primary-300) / <alpha-value>)`,
          400: `rgb(var(--primary-400) / <alpha-value>)`,
          500: `rgb(var(--primary-500) / <alpha-value>)`,
          600: `rgb(var(--primary-600) / <alpha-value>)`,
          700: `rgb(var(--primary-700) / <alpha-value>)`,
          800: `rgb(var(--primary-800) / <alpha-value>)`,
          900: `rgb(var(--primary-900) / <alpha-value>)`,
          950: `rgb(var(--primary-950) / <alpha-value>)`,
        },
        'secondary': {
          50: `rgb(var(--secondary-50) / <alpha-value>)`,
          100: `rgb(var(--secondary-100) / <alpha-value>)`,
          200: `rgb(var(--secondary-200) / <alpha-value>)`,
          300: `rgb(var(--secondary-300) / <alpha-value>)`,
          400: `rgb(var(--secondary-400) / <alpha-value>)`,
          500: `rgb(var(--secondary-500) / <alpha-value>)`,
          600: `rgb(var(--secondary-600) / <alpha-value>)`,
          700: `rgb(var(--secondary-700) / <alpha-value>)`,
          800: `rgb(var(--secondary-800) / <alpha-value>)`,
          900: `rgb(var(--secondary-900) / <alpha-value>)`,
          950: `rgb(var(--secondary-950) / <alpha-value>)`,
        },
        'accent': {
          50: `rgb(var(--accent-50) / <alpha-value>)`,
          100: `rgb(var(--accent-100) / <alpha-value>)`,
          200: `rgb(var(--accent-200) / <alpha-value>)`,
          300: `rgb(var(--accent-300) / <alpha-value>)`,
          400: `rgb(var(--accent-400) / <alpha-value>)`,
          500: `rgb(var(--accent-500) / <alpha-value>)`,
          600: `rgb(var(--accent-600) / <alpha-value>)`,
          700: `rgb(var(--accent-700) / <alpha-value>)`,
          800: `rgb(var(--accent-800) / <alpha-value>)`,
          900: `rgb(var(--accent-900) / <alpha-value>)`,
          950: `rgb(var(--accent-950) / <alpha-value>)`,
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        "small": "1135px",
      }
    },
  },
  plugins: [],
}
export default config
