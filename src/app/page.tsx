"use client";

import React, { useEffect, useState } from "react";

import HeroSection from "../components/HeroSection";
// import SplashCursor from "@/blocks/SplashCursor";
import AboutSection from "../components/AboutSection";
import PortfolioPage from "./portfolio/page";
// import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

// Analytics Vercel
import { Analytics } from "@vercel/analytics/next";

// 🌀 Loading Spinner
const LoadingSpinner = () => (
  <div className="h-screen flex items-center justify-center bg-black">
    <div className="animate-sway">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
