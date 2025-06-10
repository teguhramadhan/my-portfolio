"use client"; // Opsional, hanya jika Anda ingin animasi Framer Motion berjalan di sisi client

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SkillCategory } from "../types";

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
    <section id="about" className="py-20 bg-darkBg text-darkText">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Image
              src="/images/your-avatar.jpg"
              alt="Your Name Avatar"
              width={300}
              height={300}
              className="rounded-full shadow-lg border-4 border-primary object-cover w-60 h-60 md:w-80 md:h-80"
            />
          </motion.div>

          <div className="flex-grow text-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 leading-relaxed"
            >
              Halo! Saya adalah seorang{" "}
              <span className="font-semibold text-secondary">Designer</span>{" "}
              yang bersemangat dalam menciptakan pengalaman pengguna yang
              intuitif dan visual yang menarik. Dengan latar belakang yang kuat
              dalam estetika dan fungsionalitas, saya mampu menerjemahkan
              ide-ide kompleks menjadi solusi desain yang elegan.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6 leading-relaxed"
            >
              Di sisi lain, saya juga adalah{" "}
              <span className="font-semibold text-accent">
                Frontend Developer
              </span>{" "}
              yang terampil dalam membangun antarmuka web yang responsif,
              performa tinggi, dan mudah dipelihara. Saya suka bekerja dengan
              Next.js dan Tailwind CSS untuk menciptakan aplikasi web modern.
              Saya percaya bahwa perpaduan antara desain yang baik dan kode yang
              bersih adalah kunci untuk produk digital yang luar biasa.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-bold text-primary mb-6 mt-10"
            >
              My Skills
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6"
            >
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700"
                >
                  <h4 className="text-xl font-semibold text-secondary mb-3">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-slate-700 text-darkText rounded-full text-sm font-medium hover:bg-primary transition-colors duration-200 cursor-default"
                      >
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
    </section>
  );
};

export default AboutSection;
