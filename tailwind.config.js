/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xxs: "420px",
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        theme: "hsla(11, 87%, 57%, 1)",
        golden:"",
        green:"",
        purple:"",
        red:"",
        blue:"",
        success: "hsl(140, 65%, 50%)",
        danger: "hsl(360, 75%, 60%)",
        backgroundV1: "hsl(var(--background-v1))",
        backgroundV2: "hsl(var(--background-v2))",
        backgroundV3: "hsl(var(--background-v3))",
        backgroundV4: "hsl(var(--background-v4))",
        backgroundV5: "hsl(var(--background-v5))",
        textV1: "hsl(var(--text-v1))",
        textV2: "hsl(var(--text-v2))",
        borderV1: "hsl(var(--border-v1))",
        borderV2: "hsl(var(--border-v2))",
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800"
      },
      lineHeight: {
        "1": "1",
        "1.2":"1.2",
        "1.5": "1.5",
        "1.8": "1.8",
      },
      gap: {
        sm: "12px",
        md: "24px",
        lg: "32px"
      },
      borderRadius: {
        sm: "10px",
        md: "20px",
        lg: "30px",
      },
      boxShadow:{
         "icon":"5px 5px 49px red"
      },
      backgroundImage:{
        "banner-dark":"linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
        "banner-dark-v2":"linear-gradient(180deg,rgba(2,2,2,0),#000)",
        "banner-light-v2":"linear-gradient(180deg,rgba(2,2,2,0),rgba(255,255,255,1))",
        "banner":"linear-gradient(to top, rgba(255, 255, 255, 1), transparent)",
        "red-grad": "linear-gradient(206deg, rgba(255, 0, 3, 0.24) 31.77%, rgba(204, 77, 95, 0.1) 85.64%)",
        "green-grad": "linear-gradient(135deg, #1DB954, #33FF6B)",
        "golden-grad": "linear-gradient(135deg, #FFD700, #FFB437)",
        "blue-grad": "linear-gradient(135deg, #00BFFF, #87CEFA)",
        "purple-grad": "linear-gradient(135deg, #8A2BE2, #800080)",
        "danger-grad": "linear-gradient(135deg, #FF4500, #FF4040)",
        "golden-grad2": "linear-gradient(318.96deg, rgba(0, 0, 0, 0.4) -1.9%, rgba(36, 36, 36, 0.4) 105%), rgba(209, 167, 48, 0.25)",
        "blue-grad2": "linear-gradient(318.96deg, rgba(0, 0, 0, 0.4) -1.9%, rgba(36, 36, 36, 0.4) 105%), rgba(52, 255, 247, 0.25)",
        "purple-grad2": "linear-gradient(318.96deg, rgba(0, 0, 0, 0.4) -1.9%, rgba(36, 36, 36, 0.4) 105%), rgba(215, 96, 255, 0.25)",
        "green-grad2": "linear-gradient(318.96deg, rgba(0, 0, 0, 0.4) -1.9%, rgba(36, 36, 36, 0.4) 105%), rgba(47, 122, 56, 0.25)",
        "red-grad2": "linear-gradient(318.96deg, rgba(0, 0, 0, 0.4) -1.9%, rgba(36, 36, 36, 0.4) 105%), rgba(255, 64, 64, 0.25)"
      },
    },
  },
  plugins: [],
};
