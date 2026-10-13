/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#00152c",
        "primary-container": "#0e2a47",
        "on-primary": "#ffffff",
        "on-primary-container": "#7992b4",
        "primary-fixed": "#d2e4ff",
        "primary-fixed-dim": "#afc8ed",
        "on-primary-fixed": "#001c38",
        "on-primary-fixed-variant": "#2f4867",

        "secondary": "#8a5100",
        "secondary-container": "#fd9d21",
        "on-secondary-container": "#673b00",
        "secondary-fixed": "#ffdcbd",
        "secondary-fixed-dim": "#ffb86d",
        "on-secondary-fixed": "#2c1600",
        "on-secondary-fixed-variant": "#693c00",

        "tertiary": "#310300",
        "tertiary-container": "#570800",
        "on-tertiary-container": "#f36044",

        "surface": "#faf9f5",
        "surface-bright": "#faf9f5",
        "surface-dim": "#dbdad6",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4f4f0",
        "surface-container": "#efeeea",
        "surface-container-high": "#e9e8e4",
        "surface-container-highest": "#e3e2df",
        "surface-variant": "#e3e2df",

        "on-surface": "#1b1c1a",
        "on-surface-variant": "#43474d",
        "inverse-surface": "#2f312e",
        "inverse-on-surface": "#f2f1ed",
        "outline": "#74777e",
        "outline-variant": "#c4c6ce",

        // SHS Brand Tokens
        "shs-navy": "#0e2a47",
        "shs-navy-dark": "#0a1c30",
        "shs-gold": "#e58a00",
        "shs-gold-light": "#f59e0b",
        "shs-gold-subtle": "#fff7ed",
        "shs-yellow": "#f59e0b",
        "shs-yellow-bright": "#facc15",
        "shs-yellow-light": "#fef08a",
        "shs-yellow-subtle": "#fef9c3",
        "shs-yellow-badge": "#fef3c7",
        "shs-coral": "#e05338",
        "shs-forest": "#1e6b52",
        "shs-forest-light": "#e8f3ee",
        "shs-border": "#e5e2dc",
        "shs-paper": "#faf9f5"
      },
      fontFamily: {
        "display": ["Epilogue", "sans-serif"],
        "headline": ["Epilogue", "sans-serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "sans": ["Plus Jakarta Sans", "sans-serif"],
        "mono": ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"]
      },
      spacing: {
        "gutter": "1.5rem",
        "gutter-mobile": "1.25rem",
        "margin": "3rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem"
      },
      borderRadius: {
        "sm": "0.25rem",
        "DEFAULT": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "1.75rem",
        "full": "9999px"
      },
      boxShadow: {
        "tactile": "0 4px 12px -2px rgba(14, 42, 71, 0.07)",
        "card": "0 2px 8px 0 rgba(0, 0, 0, 0.04)"
      }
    },
  },
  plugins: [],
}
