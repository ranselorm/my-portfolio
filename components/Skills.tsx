import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type SkiilsType = {
  title: string;
  icon: string;
};

const skills: SkiilsType[] = [
  { title: "Javascript", icon: "devicon:javascript" },
  { title: "Typescript", icon: "devicon:typescript" },
  { title: "React", icon: "skill-icons:react-dark" },
  { title: "Next", icon: "skill-icons:nextjs-light" },
  { title: "Tailwind", icon: "skill-icons:tailwindcss-dark" },
  { title: "HTML5", icon: "skill-icons:html" },
  { title: "CSS3", icon: "skill-icons:css" },
  { title: "Python", icon: "skill-icons:python-dark" },
];

const Skiils = () => {
  return (
    <section className="section-padding font-primary text-white">
      <main className="container mx-auto flex flex-col md:flex-row items-center gap-4">
        <div className="flex-col flex md:w-2/6 gap-y-4">
          <p className="section-subtitle">My Skills</p>
          <h3 className="section-title">
            Beautiful and unique digital experiences
          </h3>
          <p className="mb-8 md:mb-0 font-xl text-left">
            Skills, tools, and technologies that I handle better than a game
            controller.
          </p>
        </div>
        <div className="md:w-4/6 grid md:grid-cols-4 grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <div
              className="rounded bg-gray-100 w-full h-28 col-span-1 flex justify-center items-center p-5 flex-col gap-y-2"
              key={index}
            >
              <Icon icon={`${skill.icon}`} className="text-3xl" />
              <span className="text-black">{skill.title}</span>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Skiils;
