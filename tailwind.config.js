/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "palmares-green": "#1A8F3A",
                "palmares-yellow": "#F2C300",
            },
        },
    },
    plugins: [],
};
