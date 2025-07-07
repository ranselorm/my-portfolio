// sections/TechStack.tsx

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

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
          <div key={i} className="flex flex-col items-center space-y-2">
            {/* <img src={tech.icon} alt={tech.title} className="w-10 h-10" /> */}
            <Icon icon={tech.icon} />
            <p className="text-sm">{tech.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const backendTech = [
  { title: "Javascript", icon: "devicon:javascript" },
  { title: "Typescript", icon: "devicon:typescript" },
  { title: "React", icon: "skill-icons:react-dark" },
  { title: "Next", icon: "skill-icons:nextjs-light" },
  { title: "Tailwind", icon: "skill-icons:tailwindcss-dark" },
  { title: "HTML5", icon: "skill-icons:html" },
  { title: "CSS3", icon: "skill-icons:css" },
  { title: "Python", icon: "skill-icons:python-dark" },
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
