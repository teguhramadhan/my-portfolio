"use client"; // Diperlukan karena menggunakan Framer Motion (motion.div)

import React from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import SplitText from "@/blocks/SpliteText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex md:items-center items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        {/* Headline dengan Font Modern (Inter) dan Animasi Framer Motion */}
        <div className="flex flex-col items-start gap-3">
          <SplitText
            text="Hello,"
            className="text-lg lg:text-4xl font-semibold text-center font-serif"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="I'm Teguh Ramadhan"
            className="text-2xl lg:text-6xl font-semibold text-center font-sans pb-4 md:pb-8 lg:pb-8"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-slate-400 mb-8 max-w-xl"
        >
          Crafting delightful digital experiences as a{" "}
          <span className="font-semibold text-accent">Designer</span> &{" "}
          <span className="font-semibold text-secondary">
            Frontend Developer
          </span>
          .
        </motion.p>

        {/* Tombol Aksi dengan Animasi Framer Motion */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex flex-col md:flex-row lg:flex-row gap-6 justify-center">
            <Link
              href="#projects"
              className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="ml-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
