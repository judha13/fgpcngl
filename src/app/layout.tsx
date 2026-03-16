import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from 'next/image';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";
import ImageSlider from "./components/ImageSlider";
import { Poppins, Montserrat } from 'next/font/google';

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
  title: "FGPC - Nagercoil",
  description: "Welcome to the official website of the Full Gospel Pentecostal Church, Nagercoil. Join us for worship, fellowship, and spiritual growth.",
  icons: {
    icon: "/header/fgpc_nagercoil_logo.jpg",
  },
};

export default function MainpageLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <div id="modal-root"></div>
        <Footer />
      </body>
    </html>
  );
}
