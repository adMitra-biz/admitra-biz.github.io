/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./admitra-smb.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./static/**/*.{js,html}"
  ],
  safelist: [
    // Dynamic classes used in JavaScript
    'opacity-0', 'opacity-100', 'transform', 'translate-y-0', '-translate-y-full',
    'scale-100', 'scale-105', 'scale-110', 'rotate-180', 
    // Animation classes
    'animate-pulse', 'animate-spin', 'animate-bounce',
    // Backdrop blur variations
    'backdrop-blur-sm', 'backdrop-blur-md', 'backdrop-blur-lg', 'backdrop-blur-xl', 'backdrop-blur-2xl', 'backdrop-blur-3xl',
    // Glass morphism effects
    'bg-white/10', 'bg-white/20', 'bg-white/30', 'bg-white/40', 'bg-white/50', 'bg-white/60', 'bg-white/70', 'bg-white/80', 'bg-white/90',
    'bg-black/10', 'bg-black/20', 'bg-black/30', 'bg-black/40', 'bg-black/50',
    // Hover states that might be missed
    'hover:scale-105', 'hover:scale-110', 'hover:shadow-xl', 'hover:shadow-2xl',
    'hover:bg-primary-50', 'hover:bg-primary-100', 'hover:bg-primary-600', 'hover:bg-primary-700',
    'hover:text-primary-400', 'hover:text-primary-600', 'hover:text-primary-700',
    // Modal and overlay classes
    'fixed', 'inset-0', 'z-40', 'z-50', 'z-9999',
    'pointer-events-none', 'pointer-events-auto',
    // Mobile menu states
    'menu-open', 'open',
    // Video loading states
    'lazy-video', 'video-placeholder', 'loaded',
    // Custom component classes that extend Tailwind
    'btn-primary', 'btn-secondary', 'nav-item', 'badge', 'glass', 'hero-gradient', 'gradient-text', 'display-font'
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors (modern blue)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Secondary colors (teal)
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Accent colors (indigo)
        accent: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        // Semantic colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Sora', 'system-ui', 'sans-serif'],
        'alt': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'mono': ['Space Mono', 'Menlo', 'monospace']
      },
      animation: {
        'slideInScale': 'slideInScale 0.5s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        slideInScale: {
          '0%': { transform: 'translateY(20px) scale(0.9)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' }
        },
        fadeInUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}