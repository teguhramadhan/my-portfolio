"use client";

import { CodeXml } from "lucide-react";
import Particles from "./Particle"; // sesuaikan path kalau beda folder

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen border border-dashed border-slate-500 rounded-3xl m-2 lg:m-12 bg-slate-900 text-white px-6 text-center overflow-hidden">
      {/* Partikel animasi di background */}
      <Particles />

      {/* Glow light object di tengah dengan animasi pulse */}
      <div
        className="absolute top-1/2 left-1/2 w-30 h-30 bg-orange-400 rounded-full filter opacity-85 blur-3xl animate-pulse-heartbeat pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      <CodeXml className="w-32 h-32 text-orange-400 mb-12 relative z-10" />
      <h1 className="text-xl md:text-2xl font-bold mb-8 relative z-10">
        We’re Launching Soon!
      </h1>
      <p className="text-xs md:text-xl italic leading-6 relative z-10">
        Something awesome is in the works.
      </p>
      <p className="text-xs md:text-xl mb-4 max-w-xl relative z-10">
        Hang tight — we’ll be live before you know it!
      </p>
      <p className="font-semibold relative z-10">Thanks 🥰</p>
    </section>
  );
}
