"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaLaptopCode, FaEnvelope } from "react-icons/fa";

const Navbar: React.FC = () => {
  const navLinks = [
    { name: "Home", href: "#hero", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Projects", href: "#projects", icon: <FaLaptopCode /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-darkBg bg-opacity-90 backdrop-blur-md px-6 py-3 shadow-2xl rounded-full border border-slate-700 w-fit"
    >
      <div className="flex justify-center items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex flex-col items-center text-darkText hover:text-primary transition-colors relative group"
          >
            <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
              {link.icon}
            </div>
            <span className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              {link.name}
            </span>
            {/* Underline Animation */}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
