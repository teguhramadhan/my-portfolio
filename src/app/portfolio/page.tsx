"use client";

import { JSX, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { PiLinkBreakDuotone } from "react-icons/pi";
import {
  FaFigma,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiVuedotjs,
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNextdotjs,
} from "react-icons/si";

type Portfolio = {
  id: number;
  title: string;
  description: string;
  type: string;
  image_url: string;
  project_link?: string | null;
  tools?: string | string[] | null;
};

const iconMap: Record<string, JSX.Element> = {
  HTML: <FaHtml5 color="#e34c26" />,
  CSS: <FaCss3Alt color="#264de4" />,
  JavaScript: <SiJavascript color="#f7df1e" />,
  React: <FaReact color="#61dafb" />,
  Tailwind: <SiTailwindcss color="#38bdf8" />,
  NodeJS: <FaNodeJs color="#3c873a" />,
  Laravel: <SiLaravel color="#ff2d20" />,
  PHP: <FaPhp color="#8892be" />,
  Vue: <SiVuedotjs color="#42b883" />,
  MySQL: <SiMysql color="#00758f" />,
  Git: <FaGitAlt color="#f34f29" />,
  Figma: <FaFigma color="#FFFFFF" />,
  Photoshop: <SiAdobephotoshop color="#31a8ff" />,
  Illustrator: <SiAdobeillustrator color="#ff9a00" />,
  NextJS: <SiNextdotjs color="#ffffff" />,
};

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
                  ? "bg-accent text-white"
                  : "bg-slate-700 text-gray-200 hover:bg-gray-900"
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
    <main className="w-full bg-black mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-white">
        My Portfolio
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-12 gap-3">
        {["all", "design", "coding"].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option as "all" | "design" | "coding")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                filter === option
                  ? "bg-accent text-white"
                  : "bg-slate-700 text-gray-200 hover:bg-gray-900"
              }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Portfolio Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-1">
          {filteredPortfolios.map((item) => {
            const tools: string[] = Array.isArray(item.tools)
              ? item.tools
              : (() => {
                  try {
                    const parsed = JSON.parse(item.tools || "[]");
                    return Array.isArray(parsed) ? parsed : [String(parsed)];
                  } catch {
                    return [String(item.tools)];
                  }
                })();

            const CardWrapper = item.project_link ? "a" : "div";
            const cardProps = item.project_link
              ? {
                  href: item.project_link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "relative group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700 h-80 bg-black",
                }
              : {
                  className:
                    "relative group block rounded-2xl overflow-hidden shadow-lg border border-slate-700 h-80 bg-black",
                };

            return (
              <CardWrapper key={item.id} {...cardProps}>
                <div className="relative w-full h-full">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay bawah */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent px-4 py-4 text-white z-10">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-slate-300 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {tools.map((tool, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 text-xs bg-accent bg-opacity-80 px-2 py-1 rounded-full"
                        >
                          <span className="text-lg">
                            {iconMap[tool] ?? "🛠️"}
                          </span>{" "}
                          *&
                          <span className="text-slate-300">{tool}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end mt-2">
                      <span className="text-xs bg-slate-700 text-white px-3 py-1 rounded-full uppercase">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Optional hover effect */}
                  {item.project_link && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="text-white text-center bg-black/60 px-3 py-2 rounded-xl">
                        <div className="text-2xl flex justify-center items-center mb-2">
                          <PiLinkBreakDuotone />
                        </div>
                        <div className="text-sm">See Project</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </main>
  );
}
