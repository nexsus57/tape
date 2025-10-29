/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-circles': "url('https://www.transparenttextures.com/patterns/circles-and-roundabouts.png')",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#1A2B3C', // A slightly less saturated, more slate-like dark blue
        'brand-blue-dark': '#111D2A', // Darker version
        'brand-blue-deep': '#003366', // Deep industrial blue
        'brand-yellow': '#F5C518', // A slightly richer, more modern yellow
        'brand-amber': '#F59E0B', // Vibrant amber for CTAs
        'brand-gray': '#F1F5F9', // slate-100
        'brand-accent': '#2563EB', // blue-600
        'brand-accent-dark': '#1D4ED8', // blue-700
        
        // Admin Panel Colors
        'admin-bg': '#F1F5F9', // Light gray background
        'admin-sidebar': '#1E293B', // Dark slate
        'admin-card': '#FFFFFF',
        'admin-text': '#334155', // Dark text
        'admin-text-light': '#64748B', // Lighter text
        'admin-accent': '#3B82F6', // Blue accent
        'admin-accent-hover': '#2563EB',
        'admin-border': '#E2E8F0',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(0.5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'slide-down': 'slide-down 0.3s ease-out forwards',
        'ken-burns': 'ken-burns 30s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
