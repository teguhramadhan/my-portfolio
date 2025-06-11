"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { SkillCategory } from "../types";

// import icons
import { CgFigma } from "react-icons/cg";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaSketch,
  FaJsSquare,
  FaPhotoVideo,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAdobexd,
} from "react-icons/si";

const skills: SkillCategory[] = [
  {
    category: "Design Tools",
    items: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Concepts",
    items: [
      "UI/UX Principles",
      "Responsive Design",
      "Design Systems",
      "Prototyping",
      "User Research",
    ],
  },
  {
    category: "Other",
    items: ["Git", "RESTful APIs", "Performance Optimization"],
  },
];

const iconMap: Record<string, JSX.Element> = {
  Figma: <CgFigma />,
  "Adobe XD": <SiAdobexd />,
  Sketch: <FaSketch />,
  Photoshop: <FaPhotoVideo />,
  "React.js": <FaReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  JavaScript: <FaJsSquare />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  "Tailwind CSS": <SiTailwindcss />,
  Git: <FaGitAlt />,
};

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="w-full lg:px-12 py-20 bg-darkBg text-darkText"
    >
      <div className="mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="text-base md:text-lg lg:text-2xl">
            <div className="flex flex-col justify-center items-center max-w-6xl mx-auto px-4 text-justify gap-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="leading-relaxed text-darkText"
              >
                Hello! I am a{" "}
                <span className="font-semibold text-secondary">Designer</span>{" "}
                passionate about creating intuitive and visually appealing user
                experiences. With a strong background in aesthetics and
                functionality, I am able to translate complex ideas into elegant
                design solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="leading-relaxed text-darkText"
              >
                On the other hand, I am also{" "}
                <span className="font-semibold text-accent">
                  Frontend Developer
                </span>{" "}
                skilled in building responsive, high-performance, and
                maintainable web interfaces. I love working with Next.js and
                Tailwind CSS to create modern web applications. I believe that
                the combination of good design and clean code is the key to
                great digital products.
              </motion.p>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-primary mb-8 mt-12 text-center"
              >
                My Skills
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {skills.map((skillCategory, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-700"
                  >
                    <h4 className="text-xl font-semibold text-secondary mb-4">
                      {skillCategory.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-darkText rounded-full text-sm font-medium hover:bg-primary transition-colors duration-200 cursor-default"
                        >
                          {iconMap[skill] && (
                            <span className="text-lg text-accent">
                              {iconMap[skill]}
                            </span>
                          )}
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
