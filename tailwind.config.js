/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        'indigo-light': {
          extend: 'light',
          colors: {
            background: '#eef2ff',
            foreground: '#000',
            primary: {
              50: '#eef2ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#4f46e5',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
              DEFAULT: '#4f46e5',
              foreground: '#fff',
            },
            secondary: {
              DEFAULT: '#64748b',
              foreground: '#000',
            },
            focus: '#60a5fa',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
        'indigo-dark': {
          extend: 'dark',
          colors: {
            background: '#000',
            foreground: '#fff',
            primary: {
              50: '#1e3a8a',
              100: '#1e40af',
              200: '#1d4ed8',
              300: '#4f46e5',
              400: '#3b82f6',
              500: '#60a5fa',
              600: '#93c5fd',
              700: '#bfdbfe',
              800: '#dbeafe',
              900: '#eef2ff',
              DEFAULT: '#4f46e5',
              foreground: '#fff',
            },
            secondary: {
              DEFAULT: '#18181b',
              foreground: '#fff',
            },
            focus: '#60a5fa',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '2px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
}
