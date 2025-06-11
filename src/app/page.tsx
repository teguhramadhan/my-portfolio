"use client";

import React, { useEffect, useState } from "react";

import HeroSection from "../components/HeroSection";
// import SplashCursor from "@/blocks/SplashCursor";
import AboutSection from "../components/AboutSection";
import PortfolioPage from "./portfolio/page";
// import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
// import ContactSection from "../components/ContactSection";

// Analytics Vercel
import { Analytics } from "@vercel/analytics/next";

// 🌀 Loading Spinner
const LoadingSpinner = () => (
  <div className="flex bg-darkBg justify-center items-center h-screen gap-2">
    <div className="relative w-6 h-6 animate-bounce">
      <div className="absolute inset-0 rounded-full bg-accent opacity-75 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-accent"></div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan delay load (misalnya karena fetch data, dll)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 detik loading, bisa diatur

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-darkBg text-darkText font-sans">
      <Analytics />
      <HeroSection />
      <AboutSection />
      <PortfolioPage />
      <Footer />
      {/* <ContactSection /> */}
    </div>
  );
};

export default Home;
