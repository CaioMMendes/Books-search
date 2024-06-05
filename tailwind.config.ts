import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "header": "url('/assets/img/background-header.png')",
      },
      fontFamily: {
        sans: ["var(--font-jakarta),sans"],
      },

      colors: {
        "primary": "#5c6f68",

        "corduroy": {
          "50": "#f6f7f7",
          "100": "#e1e6e4",
          "200": "#c2cdc8",
          "300": "#9caca6",
          "400": "#778a83",
          "500": "#5c6f68",
          "600": "#495853",
          "700": "#3d4845",
          "800": "#333c39",
          "900": "#2d3431",
          "950": "#171c1b",
        },

        "cascade": {
          "50": "#f5f8f7",
          "100": "#e0e7e5",
          "200": "#c0cfca",
          "300": "#8aa39b",
          "400": "#748d86",
          "500": "#59736c",
          "600": "#465b56",
          "700": "#3a4b46",
          "800": "#323d3b",
          "900": "#2c3533",
          "950": "#161d1c",
        },
        "bermuda": {
          "50": "#effaf6",
          "100": "#d8f3e7",
          "200": "#b4e6d3",
          "300": "#95d9c3",
          "400": "#4fb89a",
          "500": "#2d9c7f",
          "600": "#1e7d67",
          "700": "#186454",
          "800": "#155043",
          "900": "#124239",
          "950": "#092520",
        },
        "madang": {
          "50": "#ebfef3",
          "100": "#cefde0",
          "200": "#a4f9c8",
          "300": "#65f0a9",
          "400": "#28df87",
          "500": "#03c66e",
          "600": "#00a15a",
          "700": "#00814c",
          "800": "#00663d",
          "900": "#005434",
          "950": "#002f1f",
        },
        "ice-cold": {
          "50": "#effefc",
          "100": "#c7fff9",
          "200": "#a7fff6",
          "300": "#50f8ec",
          "400": "#1de4dd",
          "500": "#04c8c4",
          "600": "#00a0a1",
          "700": "#057f80",
          "800": "#0a6365",
          "900": "#0d5354",
          "950": "#002f33",
        },
      },
    },
  },
  plugins: [],
}
export default config
