/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                palmares: {
                    green: "#3FAE29",
                    yellow: "#FFD600",
                    gray: "#707B7B",
                }
            }
        }
    },
    plugins: [],
};
