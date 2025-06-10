"use client"; // Opsional, hanya jika Anda ingin animasi Framer Motion berjalan di sisi client

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjetcsCard";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description:
      "Complete UI/UX redesign and frontend implementation for a fashion e-commerce platform, focusing on user experience and conversion rates.",
    image: "/images/project-1.jpg",
    tags: ["UI/UX Design", "ReactJS", "TailwindCSS", "Figma"],
    liveLink: "https://example.com/project1",
    slug: "ecommerce-redesign",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "Built a responsive and interactive SaaS dashboard with complex data visualizations and real-time updates for analytics.",
    image: "/images/project-2.jpg",
    tags: ["NextJS", "TypeScript", "D3.js", "ChakraUI"],
    liveLink: "https://example.com/project2",
    slug: "saas-dashboard",
  },
  {
    id: 3,
    title: "Personal Blog Platform",
    description:
      "Developed a custom blog platform with a clean design, markdown support, and optimized for SEO using Next.js static generation.",
    image: "/images/project-3.jpg",
    tags: ["NextJS", "GraphQL", "Markdown", "Contentful"],
    liveLink: "https://example.com/project3",
    slug: "blog-platform",
  },
  {
    id: 4,
    title: "Mobile App Concept",
    description:
      "Designed and prototyped a mobile application for local event discovery, focusing on intuitive navigation and social features.",
    image: "/images/project-4.jpg",
    tags: ["Mobile UI", "Figma", "Prototyping", "User Research"],
    liveLink: "https://example.com/project4",
    slug: "mobile-app-concept",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-darkBg to-slate-900 text-darkText"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-secondary"
        >
          My Latest Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
