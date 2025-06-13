import { motion } from "framer-motion";
import { JSX } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
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
} from "react-icons/si";

// List skill yang kamu miliki
const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Vue"],
  },
  {
    category: "Backend",
    items: ["NodeJS", "PHP", "Laravel", "MySQL"],
  },
];

// Peta ikon per stack
const iconMap: Record<string, JSX.Element> = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  NodeJS: <FaNodeJs />,
  Laravel: <SiLaravel />,
  PHP: <FaPhp />,
  Vue: <SiVuedotjs />,
  MySQL: <SiMysql />,
};

// Warna brand per stack
const brandColors: Record<string, string> = {
  HTML: "#e34c26",
  CSS: "#264de4",
  JavaScript: "#f7df1e",
  React: "#61dafb",
  Tailwind: "#38bdf8",
  NodeJS: "#3c873a",
  Laravel: "#ff2d20",
  PHP: "#8892be",
  Vue: "#42b883",
  MySQL: "#00758f",
};

export default function AboutSection() {
  return (
    <div className="max-w-8xl mx-auto px-0 md:px-6 lg:px-8 text-center bg-darkBg pt-12 pb-36">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl md:text-3xl font-bold text-accent mb-10 mt-12"
      >
        My Tech Stack
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {skills.flatMap((category) =>
          category.items.map((skill) => {
            const color = brandColors[skill as keyof typeof brandColors];
            return (
              <div
                key={`${category.category}-${skill}`}
                className="text-6xl hover:scale-110 transition-transform duration-200 bg-slate-700 p-6 hover:bg-accent rounded-xl"
                title={skill}
              >
                <span style={{ color }}>{iconMap[skill]}</span>
              </div>
            );
          })
        )}
      </motion.div>
    </div>
  );
}
