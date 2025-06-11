// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

// import fonts google
import { Urbanist } from "next/font/google";
import { Great_Vibes } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teguh Ramadhan | Designer & Frontend Developer Portfolio",
  description:
    "Portfolio of Teguh Ramadhan, a Designer and Frontend Developer showcasing web design and development projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${greatVibes.variable}`}>
      <body className="font-sans">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
