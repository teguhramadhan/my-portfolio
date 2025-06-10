import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LayoutProps } from "../types"; // Import tipe dari src/types

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-darkBg text-darkText font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
