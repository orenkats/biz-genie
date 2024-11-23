/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#86A789",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#B2C8BA",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#6B8E67",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#9CAF94",
          foreground: "#FFFFFF",
        },
        eggplant: '#2D2C3B',
        violet: '#B2A6D9',
        lavender: '#EDE8F5',
        sprout: '#708C82',
        pink: '#F5C2C2',
        sugar: '#F8F9F5',
        ivory: '#E1DAD3',
        nude: '#E4C9B6',
        dustyrose: '#D7A49A',
        sage: '#B7BAA5',
        babyblue: '#A4B1BA',
        matteblack: '#28282B',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["DM Serif Text", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      "fade-in": {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "fade-in-right": {
        "0%": { opacity: "0", transform: "translateX(20px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      "fade-in-left": {
        "0%": { opacity: "0", transform: "translateX(-20px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      "slide-up": {
        "0%": { transform: "translateY(100px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      "bounce-in": {
        "0%": { transform: "scale(0.3)", opacity: "0" },
        "50%": { transform: "scale(1.05)" },
        "70%": { transform: "scale(0.9)" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
      "float": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },
      "pulse-slow": {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0.5" },
      },
      "spin-slow": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      "wiggle": {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      "text-shimmer": {
        "0%": { backgroundPosition: "-200% 0" },
        "100%": { backgroundPosition: "200% 0" },
      },
      blob: {
        "0%": { transform: "translate(0px, 0px) scale(1)" },
        "33%": { transform: "translate(30px, -50px) scale(1.1)" },
        "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        "100%": { transform: "translate(0px, 0px) scale(1)" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "fade-in": "fade-in 0.3s ease-out",
      "fade-in-right": "fade-in-right 0.5s ease-out",
      "fade-in-left": "fade-in-left 0.5s ease-out",
      "slide-up": "slide-up 0.6s ease-out",
      "bounce-in": "bounce-in 0.8s cubic-bezier(0.36, 0, 0.66, -0.56)",
      "float": "float 3s ease-in-out infinite",
      "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      "spin-slow": "spin-slow 3s linear infinite",
      "wiggle": "wiggle 1s ease-in-out infinite",
      "text-shimmer": "text-shimmer 2s ease-in-out infinite",
      "blob": "blob 7s infinite",
    },
  },

  },
  plugins: [require("tailwindcss-animate")],
};
