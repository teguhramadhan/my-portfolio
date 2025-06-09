"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Spinner from "@/components/Spinner";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulasi loading 2 detik

    return () => clearTimeout(timer);
  }, []);

  return <main>{loading ? <Spinner /> : <Hero />}</main>;
}
