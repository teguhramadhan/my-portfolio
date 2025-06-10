import React from "react";
import HeroSection from "../components/HeroSection";
import SplashCursor from "@/blocks/SplashCursor";
// import Navbar from "@/components/Navbar";
// import Footer from "../components/Footer";
// import AboutSection from "../components/AboutSection";
// import ProjectsSection from "../components/ProjectsSection";
// import ContactSection from "../components/ContactSection";

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
