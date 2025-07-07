"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Modal } from "antd";
import "antd/dist/reset.css"; // Reset default Ant Design styles (optional if already set)

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
    image: "/images/project1.jpeg",
  },
  {
    title: "Ecommerce Web App",
    category: "WebApp",
    image: "/images/project2.jpg",
  },
  {
    title: "Landing Page - Product",
    category: "Landing",
    image: "/images/project3.jpg",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    image: "/images/project4.jpg",
  },
  { title: "Agency Site", category: "Website", image: "/images/project5.jpg" },
  {
    title: "Food Delivery Web App",
    category: "WebApp",
    image: "/images/project6.jpg",
  },
];

const categories = ["All", "Landing", "Website", "WebApp", "Mobile"] as const;
type Category = (typeof categories)[number];

const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section className="py-12 section-padding font-hero">
      <div className="container mx-auto text-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
          <p className="text-base text-center gap-1 mb-7">
            Take a peek at my portfolio. It's where pixels and functionality
            have <br /> a party on the web!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-2 transition-all text-sm font-medium border-b ${
                active === cat
                  ? "border-primary text-gray-700"
                  : "border-transparent text-gray-700 hover:border-primary"
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
            className="flex flex-wrap justify-center gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={i}
                className="bg-white w-[300px] h-[300px] shadow-lg rounded-lg overflow-hidden border flex flex-col cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(project)}
              >
                <div className="relative w-full h-48 bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center mt-auto">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-xs mt-1 text-gray-500">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* AntD Modal */}
        <Modal
          open={modalOpen}
          footer={null}
          onCancel={() => setModalOpen(false)}
          centered
          width={600}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600">
                Category: {selectedProject.category}
              </p>
              {/* Add more detail here if needed */}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;
