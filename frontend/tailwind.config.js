/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                gradient: "gradient-move 1.5s infinite linear",
            },
            keyframes: {
                "gradient-move": {
                    "0%": {backgroundPosition: "200% 0"},
                    "100%": {backgroundPosition: "-200% 0"},
                },
            }
        },
    },
    plugins: [],
}