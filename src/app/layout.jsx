import { Montserrat } from "next/font/google";
import "../style/css/globals.css";
import GlobalThemeProvider from "@/context/GlobalThemeProvider";
import Providers from "@/redux/Providers";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <GlobalThemeProvider>
        <Providers>{ children }</Providers>
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
