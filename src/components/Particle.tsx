"use client";

export default function Particles() {
  // Buat array kecil partikel dengan posisi random dan delay animasi random
  const particles = Array.from({ length: 30 }).map((_, i) => {
    const size = Math.random() * 6 + 8; // ukuran 4-10 px
    const top = Math.random() * 100; // posisi vertical 0%-100%
    const left = Math.random() * 100; // posisi horizontal 0%-100%
    const delay = Math.random() * 4; // delay animasi supaya tidak serentak
    const animClass = i % 2 === 0 ? "animate-sway" : "animate-swayReverse";

    return (
      <div
        key={i}
        className={`${animClass} bg-emerald-400 rounded-sm opacity-90 absolute`}
        style={{
          width: size,
          height: size,
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
          filter: "blur(4px)",
        }}
      />
    );
  });

  return <>{particles}</>;
}
