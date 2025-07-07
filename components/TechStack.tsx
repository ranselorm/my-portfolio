"use client";
import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ===================== //
// REUSABLE TECH GRID    //
// ===================== //
type TechItem = {
  title: string;
  icon: string;
};

type TechGridProps = {
  title: string;
  items: TechItem[];
};

const TechGrid: React.FC<TechGridProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
        {items.map((tech, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center space-y-2 bg-grey rounded-md h-[80px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Icon icon={tech.icon} className="text-3xl" />
            <p className="text-xs">{tech.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ===================== //
// BACKEND SKILL BARS    //
// ===================== //
const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

// ===================== //
// DATA ARRAYS           //
// ===================== //
const frontendTech = [
  { title: "Javascript", icon: "devicon:javascript" },
  { title: "Typescript", icon: "devicon:typescript" },
  { title: "React", icon: "skill-icons:react-dark" },
  { title: "Next", icon: "skill-icons:nextjs-light" },
  { title: "Tailwind", icon: "skill-icons:tailwindcss-dark" },
  { title: "HTML5", icon: "skill-icons:html" },
  { title: "CSS3", icon: "skill-icons:css" },
  { title: "Python", icon: "skill-icons:python-dark" },
];

const backendSkills = [
  { name: "Node.js", level: 90 },
  { name: "Express", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Firebase", level: 70 },
  { name: "GraphQL", level: 65 },
];

// ===================== //
// MAIN SECTION          //
// ===================== //
const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 section-padding" ref={ref}>
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-32 text-left">
          {/* Frontend Tech Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TechGrid title="Frontend" items={frontendTech} />
          </motion.div>

          {/* Backend Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            // whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Backend Skills</h3>
            {backendSkills.map((skill, i) => (
              <SkillBar key={i} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
