"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ===================== //
// TYPES & DATA          //
// ===================== //
type Project = {
  title: string;
  category: "Landing" | "Website" | "WebApp" | "Mobile";
  image: string;
};

const allProjects: Project[] = [
  {
    title: "Portfolio Website",
    category: "Website",
    image: "/projects/site1.jpg",
  },
  {
    title: "Ecommerce Web App",
    category: "WebApp",
    image: "/projects/webapp1.jpg",
  },
  {
    title: "Landing Page - Product",
    category: "Landing",
    image: "/projects/landing1.jpg",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    image: "/projects/mobile1.jpg",
  },
  { title: "Agency Site", category: "Website", image: "/projects/site2.jpg" },
  {
    title: "Food Delivery Web App",
    category: "WebApp",
    image: "/projects/webapp2.jpg",
  },
  {
    title: "iOS Fitness App",
    category: "Mobile",
    image: "/projects/mobile2.jpg",
  },
];

const categories = ["All", "Landing", "Website", "WebApp", "Mobile"] as const;

type Category = (typeof categories)[number];

// ===================== //
// MAIN COMPONENT        //
// ===================== //
const Projects = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  return (
    <section className="py-20 section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border transition-all text-sm font-medium
                ${
                  active === cat
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-lg rounded-lg overflow-hidden border"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-xs mt-1 text-gray-500">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
