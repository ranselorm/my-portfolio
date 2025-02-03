"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const categories = [
  "All",
  "Wordpress",
  "Digital Marketing",
  "Web Design",
  "Branding",
  "Photography",
];

const projects = [
  {
    id: 1,
    title: "Project 1",
    category: "Wordpress",
    image: "/images/project1.jpeg",
    path: "#",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Digital Marketing",
    image: "/images/project2.jpg",
    path: "#",
  },
  {
    id: 3,
    title: "Project 3",
    category: "Web Design",
    image: "/images/project3.jpg",
    path: "#",
  },
  {
    id: 4,
    title: "Project 4",
    category: "Branding",
    image: "/images/project4.jpg",
    path: "#",
  },
  {
    id: 5,
    title: "Project 5",
    category: "Photography",
    image: "/images/project5.jpg",
    path: "#",
  },
  {
    id: 6,
    title: "Project 6",
    category: "Web Design",
    image: "/images/project6.jpg",
    path: "#",
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section-padding bg-dark text-white font-primary">
      <main className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-heading section-title">My Projects</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-6 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-base px-2 py-2 rounded ${
                activeCategory === category
                  ? "border-b border-primary"
                  : "text-white"
              } shadow hover:border-b border-primary transition duration-150 text-white`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative bg-white rounded shadow overflow-hidden group transform transition duration-500 ease-in-out h-[300px]"
              style={{ animationDelay: `${index * 0.3}s` }} // Staggered animation
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full rounded-none object-cover group-hover:opacity-80 transition"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary bg-opacity-55 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <h3 className="text-2xl text-white font-bold">
                  {project.title}
                </h3>
                <a href="#">
                  <Icon
                    icon="carbon:launch"
                    className="absolute top-3 right-3 font-bold text-xl cursor-pointer"
                    onClick={() => alert("Hello there" + " " + project.title)}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Portfolio;
