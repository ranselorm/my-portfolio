// sections/TechStack.tsx

import React from "react";

type TechItem = {
  name: string;
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
          <div key={i} className="flex flex-col items-center space-y-2">
            <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
            <p className="text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

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
