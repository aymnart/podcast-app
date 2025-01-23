import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Responsive font sizes using clamp()
        xs: "clamp(0.75rem, calc(var(--base-size, 1rem) / var(--scale, 1.25) / var(--scale, 1.25)), 0.875rem)", // Min: 12px, Pref: dynamic, Max: 14px
        sm: "clamp(0.875rem, calc(var(--base-size, 1rem) / var(--scale, 1.25)), 1rem)", // Min: 14px, Pref: dynamic, Max: 16px
        base: "clamp(1rem, var(--base-size, 1rem), 1.125rem)", // Min: 16px, Pref: dynamic, Max: 18px
        lg: "clamp(1.125rem, calc(var(--base-size, 1rem) * var(--scale, 1.25)), 1.25rem)", // Min: 18px, Pref: dynamic, Max: 20px
        xl: "clamp(1.25rem, calc(var(--base-size, 1rem) * var(--scale, 1.25) * var(--scale, 1.25)), 1.5rem)", // Min: 20px, Pref: dynamic, Max: 24px
        "2xl":
          "clamp(1.5rem, calc(var(--base-size, 1rem) * var(--scale, 1.25) ** 3), 2rem)", // Min: 24px, Pref: dynamic, Max: 32px
        "3xl":
          "clamp(2rem, calc(var(--base-size, 1rem) * var(--scale, 1.25) ** 4), 2.5rem)", // Min: 32px, Pref: dynamic, Max: 40px
        "4xl":
          "clamp(2.5rem, calc(var(--base-size, 1rem) * var(--scale, 1.25) ** 5), 3rem)", // Min: 40px, Pref: dynamic, Max: 48px
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
