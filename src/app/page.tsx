// src/app/page.tsx
import React from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
// import AboutSection from "../components/AboutSection";
// import ProjectsSection from "../components/ProjectsSection";
// import ContactSection from "../components/ContactSection";
import SplashCursor from "@/blocks/SplashCursor";

// Analytics Vercel
import { Analytics } from "@vercel/analytics/next";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-darkBg text-darkText font-sans">
      <Analytics />
      <SplashCursor />
      <HeroSection />
      {/* <AboutSection /> */}
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
};

export default Home;
