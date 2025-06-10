"use client"; // Diperlukan karena menggunakan Framer Motion (motion.div)

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";

import SplitText from "@/blocks/SpliteText";
import ProfileImage from "@/components/ProfileImage";

// import icons
import { RiCodeBlock } from "react-icons/ri";
import { TbVectorBezier2 } from "react-icons/tb";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen mt-[-56px] md:mt-0 lg:mt-0 flex md:items-center items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="flex flex-col justify-center items-center">
        {/* Ava Hero */}
        <div className="text-center">
          <ProfileImage // ganti dengan path fotomu
            size={160}
          />

          {/* <h1 className="text-2xl font-bold">Teguh Ramadhan</h1> */}
          {/* <p className="text-gray-400">Frontend Developer & Designer</p> */}
        </div>
        {/* Detail hero */}
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
            <RiCodeBlock className="absolute text-[48vw] lg:text-[10vw] right-6 lg:right-0 top-0 text-secondary/60 -z-10" />
            <TbVectorBezier2 className="absolute text-[48vw] lg:text-[10vw] left-6 lg:left-0 bottom-0 text-accent/60 -z-10" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-slate-200 mb-8 max-w-xl"
          >
            Crafting delightful digital experiences as a{" "}
            <span className="font-semibold text-accent">Designer</span> &{" "}
            <span className="font-semibold text-secondary">
              Frontend Developer
            </span>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
