"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { div } from "framer-motion/client";

type Portfolio = {
  id: number;
  title: string;
  description: string;
  type: string;
  image_url: string;
  project_link?: string | null;
};

// 🌀 Loading Spinner
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-60">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState<Portfolio[]>([]);
  const [filter, setFilter] = useState<"all" | "design" | "coding">("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPortfolios() {
      setLoading(true);
      const { data, error } = await supabase
        .from("portfolios")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        setError(error.message);
      } else if (data) {
        setPortfolios(data);
        setFilteredPortfolios(data);
      }
      setLoading(false);
    }
    fetchPortfolios();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredPortfolios(portfolios);
    } else {
      setFilteredPortfolios(portfolios.filter((p) => p.type === filter));
    }
  }, [filter, portfolios]);

  if (loading) return <LoadingSpinner />;
  if (error)
    return <p className="text-center mt-20 text-red-500">Error: {error}</p>;
  if (filteredPortfolios.length === 0)
    return (
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-10 text-center">My Portfolio</h1>

        <div className="flex justify-center mb-12 gap-3">
          {["all", "design", "coding"].map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option as "all" | "design" | "coding")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
          ${
            filter === option
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        <p className="text-center mt-20 text-accent pb-12">
          No portfolios found.
        </p>
      </div>
    );

  return (
    <main className="w-full mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">My Portfolio</h1>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-12 gap-3">
        {["all", "design", "coding"].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option as "all" | "design" | "coding")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
          ${
            filter === option
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Portfolio List - Flex Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-1">
          {filteredPortfolios.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 text-darkText rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="w-full h-64 rounded-t-xl overflow-hidden relative">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700 transition hover:shadow-2xl">
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-primary group-hover:underline">
                  {item.title}
                </h2>

                <p className="text-slate-400 text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap justify-between items-center mt-4">
                  {item.project_link ? (
                    <a
                      href={item.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm md:text-sm font-medium text-white bg-accent px-4 py-2 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition"
                    >
                      View Project →
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500 italic">
                      No link available
                    </span>
                  )}

                  <span className="text-xs md:text-sm px-3 py-1 bg-slate-700 text-darkText font-semibold rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
