import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { Poppins, Montserrat } from 'next/font/google';
import GlobalLoader from "./components/GlobalLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FGPC Nagercoil",
  description: "Together, we build the Kingdom of God through love, service, and faith, creating a community rooted in His grace",
};

export default async function MainpageLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <GlobalLoader>
          {children}
        </GlobalLoader>
        <div id="modal-root"></div>
        <Footer />
      </body>
    </html>
  );
}
