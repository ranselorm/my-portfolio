// sections/TechStack.tsx

import React from "react";
import TechGrid from "@/components/TechGrid";

const frontendTech = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Vue.js", icon: "/icons/vue.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "SASS", icon: "/icons/sass.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
];

const backendTech = [
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Tech Stack</h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <TechGrid title="Frontend" items={frontendTech} />
          <TechGrid title="Backend" items={backendTech} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
