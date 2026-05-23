/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e2f2a",
        forest: "#073f37",
        fern: "#2f8068",
        sage: "#dce9e1",
        mist: "#f6f7f2",
        sand: "#efe5d1",
        clay: "#b87355",
        pounamu: "#0b6b5b",
        pacific: "#23677a",
        manuka: "#d7a84f"
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(14, 47, 42, 0.13)",
        editorial: "0 32px 90px rgba(7, 63, 55, 0.2)"
      }
    }
  },
  plugins: []
};
