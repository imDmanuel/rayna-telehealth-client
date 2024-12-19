import type { Config } from "tailwindcss";
import { blur } from "tailwindcss/defaultTheme";
import { white, black, transparent } from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    colors: {
      white: white,
      black: black,
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
      transparent: transparent,
      primary: {
        DEFAULT: "rgba(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",

        50: "rgba(var(--color-primary-50))",
        75: "rgba(var(--color-primary-75))",
        100: "rgba(var(--color-primary-100))",
        200: "rgba(var(--color-primary-200))",
        300: "rgba(var(--color-primary-300))",
        400: "rgba(var(--color-primary-400))",
        500: "rgba(var(--color-primary-500))",
        600: "rgba(var(--color-primary-600))",
        700: "rgba(var(--color-primary-700))",
        800: "rgba(var(--color-primary-800))",
        900: "rgba(var(--color-primary-900))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",

        50: "rgba(var(--color-secondary-50))",
        75: "rgba(var(--color-secondary-75))",
        100: "rgba(var(--color-secondary-100))",
        200: "rgba(var(--color-secondary-200))",
        300: "rgba(var(--color-secondary-300))",
        400: "rgba(var(--color-secondary-400))",
        500: "rgba(var(--color-secondary-500))",
        600: "rgba(var(--color-secondary-600))",
        700: "rgba(var(--color-secondary-700))",
        800: "rgba(var(--color-secondary-800))",
        900: "rgba(var(--color-secondary-900))",
      },

      success: {
        50: "rgba(var(--color-success-50))",
        75: "rgba(var(--color-success-75))",
        100: "rgba(var(--color-success-100))",
        200: "rgba(var(--color-success-200))",
        300: "rgba(var(--color-success-300))",
        400: "rgba(var(--color-success-400))",
        500: "rgba(var(--color-success-500))",
        600: "rgba(var(--color-success-600))",
        700: "rgba(var(--color-success-700))",
        800: "rgba(var(--color-success-800))",
        900: "rgba(var(--color-success-900))",
      },

      warning: {
        50: "rgba(var(--color-warning-50))",
        75: "rgba(var(--color-warning-75))",
        100: "rgba(var(--color-warning-100))",
        200: "rgba(var(--color-warning-200))",
        300: "rgba(var(--color-warning-300))",
        400: "rgba(var(--color-warning-400))",
        500: "rgba(var(--color-warning-500))",
        600: "rgba(var(--color-warning-600))",
        700: "rgba(var(--color-warning-700))",
        800: "rgba(var(--color-warning-800))",
        900: "rgba(var(--color-warning-900))",
      },
      error: {
        50: "rgba(var(--color-error-50))",
        75: "rgba(var(--color-error-75))",
        100: "rgba(var(--color-error-100))",
        200: "rgba(var(--color-error-200))",
        300: "rgba(var(--color-error-300))",
        400: "rgba(var(--color-error-400))",
        500: "rgba(var(--color-error-500))",
        600: "rgba(var(--color-error-600))",
        700: "rgba(var(--color-error-700))",
        800: "rgba(var(--color-error-800))",
        900: "rgba(var(--color-error-900))",
      },
      neutral: {
        50: "rgba(var(--color-neutral-50))",
        75: "rgba(var(--color-neutral-75))",
        100: "rgba(var(--color-neutral-100))",
        200: "rgba(var(--color-neutral-200))",
        300: "rgba(var(--color-neutral-300))",
        400: "rgba(var(--color-neutral-400))",
        500: "rgba(var(--color-neutral-500))",
        600: "rgba(var(--color-neutral-600))",
        700: "rgba(var(--color-neutral-700))",
        800: "rgba(var(--color-neutral-800))",
        900: "rgba(var(--color-neutral-900))",
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
      border: "rgba(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      chart: {
        "1": "hsl(var(--chart-1))",
        "2": "hsl(var(--chart-2))",
        "3": "hsl(var(--chart-3))",
        "4": "hsl(var(--chart-4))",
        "5": "hsl(var(--chart-5))",
      },
      sidebar: {
        DEFAULT: "rgba(var(--sidebar-background))",
        foreground: "rgba(var(--sidebar-foreground))",
        primary: "rgba(var(--sidebar-primary))",
        "primary-foreground": "rgba(var(--sidebar-primary-foreground))",
        accent: "rgba(var(--sidebar-accent))",
        "accent-foreground": "rgba(var(--sidebar-accent-foreground))",
        border: "hsl(var(--sidebar-border))",
        ring: "hsl(var(--sidebar-ring))",
      },
    },
    boxShadow: {
      "soft-2xs": "0px 1.5px 4px -1px rgba(16, 25, 40, 0.07)",
      "soft-xs":
        "0px 2px 4px -1px rgba(16, 25, 40, 0.02), 0px 5px 13px -5px rgba(16, 25, 40, 0.05)",
      "soft-sm": "0px 10px 18px -2px rgba(16, 25, 40, 0.07)",
      "soft-md":
        "0px 0px 3px -1px rgba(16, 25, 40, 0.04), 0px 14px 22px -9px rgba(16, 25, 40, 0.14)",
      "soft-lg":
        "0px 4px 6px -2px rgba(16, 25, 40, 0.03), 0px 16px 24px -4px rgba(16, 25, 40, 0.08)",
      "soft-xl":
        "0px 8px 8px -4px rgba(16, 25, 40, 0.03), 0px 24px 32px -4px rgba(16, 25, 40, 0.08)",
      "soft-2xl": "0px 32px 54px -12px rgba(16, 25, 40, 0.18)",
      "soft-3xl": "0px 40px 72px -12px rgba(16, 25, 40, 0.14)",
      "hard-2xs":
        "0px 0px 0px 1px rgba(16, 25, 40, 0.05), 0px 2px 7px 0px rgba(16, 25, 40, 0.05)",
      "hard-xs":
        "0px 0px 0px 1px rgba(16, 25, 40, 0.05), 0px 2px 2px -1px rgba(16, 25, 40, 0.04), 0px 2px 12px -1px rgba(16, 25, 40, 0.1)",
      "hard-sm":
        "0px 0px 0px 1px rgba(16, 25, 40, 0.05), 0px 6px 16px 0px rgba(16, 25, 40, 0.08)",
      "hard-md":
        "0px 0px 0px 1px rgba(16, 25, 40, 0.05), 0px 0px 3px -1px rgba(16, 25, 40, 0.04), 0px 16px 24px -6px rgba(16, 25, 40, 0.08)",
    },
    blur: {
      none: blur.none,
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "16px",
      xl: "20px",
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Arial", "sans-serif"],
      },

      fontSize: {
        // Paragraph sizes
        "paragraph-lg": ["16px", { lineHeight: "145%", letterSpacing: "0%" }],
        "paragraph-md": ["14px", { lineHeight: "145%", letterSpacing: "0%" }],
        "paragraph-sm": ["12px", { lineHeight: "145%", letterSpacing: "0%" }],
        "paragraph-xs": ["10px", { lineHeight: "145%", letterSpacing: "0%" }],

        // Caption sizes
        "caption-lg": ["14px", { lineHeight: "120%", letterSpacing: "1%" }],
        "caption-sm": ["12px", { lineHeight: "120%", letterSpacing: "1%" }],
        "caption-xs": ["10px", { lineHeight: "120%", letterSpacing: "1%" }],

        // Display sizes
        "display-lg": ["56px", { lineHeight: "100%", letterSpacing: "-4%" }],
        "display-sm": ["48px", { lineHeight: "100%", letterSpacing: "-4%" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;
