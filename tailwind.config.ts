import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    darkMode: "class",

    extend: {
      keyframes: {
        drawBorder: {
          '0%': { 'width': '0%' },
          '100%': { 'width': '100%' },
        },
      },
      animation: {
        drawBorder: 'drawBorder 0.3s ease-in-out forwards',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'bs-blue': '#0d6efd',
        'bs-blue-v1': '#5A83FF',
        'bs-blue-v4': 'rgba(90, 131, 255, 0.15)',
        'bs-indigo': '#6610f2',
        'bs-purple': '#6f42c1',
        'bs-pink': '#d63384',
        'bs-red': '#dc3545',
        'bs-red-v1': 'rgba(252, 77, 77, 0.2)',
        'bs-red-v2': 'rgba(252, 77, 77, 0.2)',
        'bs-green-v1': 'rgba(91, 210, 134, 0.2)',
        'bs-green-v2': 'rgba(86, 212, 140, 0.2)',
        'bs-orange': '#fd7e14',
        'bs-yellow': '#ffc107',
        'bs-green': '#198754',
        'bs-teal': '#20c997',
        'bs-cyan-v1': '#0dcaf0',
        'bs-cyan-v2': '#39DBBF',
        'bs-white': '#fff',
        'bs-gray': '#6c757d',
        'bs-gray-v1': '#707488',
        'bs-gray-dark-v1': '#0E1019',
        'bs-gray-dark-v2': '#191D2D',
        'bs-gray-dark-v3': '#151821',
        'bs-gray-dark-v4': '#343a40',
        'bs-gray-dark-v5': '#21263B',
        'bs-gray-dark-v6': '#151825',
        'bs-primary': '#0d6efd',
        'bs-secondary': '#6c757d',
        'bs-success': '#198754',
        'bs-info': '#0dcaf0',
        'bs-warning': '#ffc107',
        'bs-danger': '#dc3545',
        'bs-light-v1': '#f8f9fa',
        'bs-light-v2': '#BFC3D4',
        'bs-dark': '#212529',
      },
      fontFamily: {
        sans: [
          'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"',
          '"Liberation Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        monospace: [
          'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'
        ],
      },
      screens: {
        // 'extra-extra-wide': '1184px',  // Extra-wide screens
        'extra-wide': '1184px',  // Extra-wide screens
        'medium-wide': '991px',  // Extra-wide screens
        'phone-md': '767px',
      },
      width: {
        'extra-wide': '1184px',  // Extra-wide screens
        'phone-md': '767px',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
