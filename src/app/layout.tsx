import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from 'next/image';
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
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
  metadataBase: new URL('https://fgpcnagercoil.com'),
  title: {
    default: "FGPC Nagercoil | Full Gospel Pentecostal Church",
    template: "%s | FGPC Nagercoil"
  },
  description: "Welcome to the official website of the Full Gospel Pentecostal Church (FGPC), Nagercoil. Join us for worship, fellowship, and spiritual growth in Kanyakumari. Located at 174, Church Street, Vettoornimadam.",
  keywords: ["FGPC", "FGPC Nagercoil", "Full Gospel Pentecostal Church", "Church in Nagercoil", "Nagercoil Church", "Christian Worship Nagercoil", "Vettoornimadam Church"],
  authors: [{ name: "FGPC Nagercoil" }],
  creator: "FGPC Nagercoil",
  publisher: "FGPC Nagercoil",
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fgpcnagercoil.com",
    title: "FGPC Nagercoil | Full Gospel Pentecostal Church",
    description: "Experience spiritual growth and community at Full Gospel Pentecostal Church, Nagercoil. Join our worship services and ministries.",
    siteName: "FGPC Nagercoil",
    images: [
      {
        url: "/header/fgpc_nagercoil.png",
        width: 1200,
        height: 630,
        alt: "FGPC Nagercoil Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FGPC Nagercoil | Full Gospel Pentecostal Church",
    description: "Join us at Full Gospel Pentecostal Church, Nagercoil for worship and fellowship.",
    images: ["/header/fgpc_nagercoil.png"],
  },
  icons: {
    icon: "/header/fgpc_nagercoil.png",
    apple: "/header/fgpc_nagercoil.png",
  },
};

export default function MainpageLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body>
        <StructuredData />
        <Header />
        {children}
        <div id="modal-root"></div>
        <Footer />
      </body>
    </html>
  );
}
