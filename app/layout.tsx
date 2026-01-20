import type { Metadata } from "next";
import Head from "next/head";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CodeHersHK",
  description:
    "Inviting girls to challenge stereotypes in this traditionally male-dominated field.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="{poppins.className}">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
