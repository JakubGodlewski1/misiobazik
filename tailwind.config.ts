import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xsm": "380px",
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    darkMode: "class"
  },
  plugins: [require("daisyui"),
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            "primary": "#EE6725",
            "secondary": "#FED403",
            default:"#fff"
          },
        },
        dark: {
          // ...
          colors: {
            "primary": "#EE6725",
            "secondary": "#FED403",
            default:"#fff"
          },
        },
      },
    }),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#EE6725",
          "secondary": "#FED403",
          'secondary-content': '#FBE373',
          "accent": "#fff",
          "neutral": "#F8F2E3",
        },
      }
    ],
  },
}
export default config
