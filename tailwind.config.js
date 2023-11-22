/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // modra: "#051D40",
        modra: "#0f1a38",
        // zlata: "#ffd700",
        natyzlata: "#ad8330",
        zlata: "#daa520",
      },
      fontFamily: {
        nadpis: "Libre Baskerville",
        obsah: "Montserrat",
      },
    },
  },
  plugins: [],
};
