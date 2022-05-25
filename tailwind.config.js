module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
    daisyui: {
      themes: [
        {
          gizmo: {
            primary: "#c0392b",
            secondary: "#2e86de",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        "dark",
        "cupcake",
      ],
    },
  
  plugins: [require("daisyui")],
}
