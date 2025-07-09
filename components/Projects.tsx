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
  images: string[]; // <-- array of images
};

const allProjects: Project[] = [
  {
    title: "Portfolio Website",
    category: "Website",
    image: "/images/project1.jpeg",
    images: [
      "/images/project1.jpeg",
      "/images/project2.jpg",
      "/images/project3.jpg",
    ],
  },
  {
    title: "Ecommerce Web App",
    category: "WebApp",
    image: "/images/project2.jpg",
    images: ["/images/project1.jpeg", "/images/project1b.jpeg"],
  },
  {
    title: "Landing Page - Product",
    category: "Landing",
    image: "/images/project3.jpg",
    images: ["/images/project1.jpeg", "/images/project1b.jpeg"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    image: "/images/project4.jpg",
    images: ["/images/project1.jpeg", "/images/project1b.jpeg"],
  },
  {
    title: "Agency Site",
    category: "Website",
    image: "/images/project5.jpg",
    images: ["/images/project1.jpeg", "/images/project1b.jpeg"],
  },
  {
    title: "Food Delivery Web App",
    category: "WebApp",
    image: "/images/project6.jpg",
    images: ["/images/project1.jpeg", "/images/project1b.jpeg"],
  },
];

const categories = ["All", "Landing", "Website", "WebApp", "Mobile"] as const;
type Category = (typeof categories)[number];

const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0); // reset to first image
    setModalOpen(true);
  };

  return (
    <section className="py-12 section-padding font-hero bg-grey">
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
            className="flex flex-wrap justify-center gap-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={i}
                className="bg-white w-[280px] h-[280px] shadow-lg rounded-lg overflow-hidden border flex flex-col cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(project)}
              >
                <div className="relative w-full h-full bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* <div className="p-4 text-center mt-auto">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-xs mt-1 text-gray-500">
                    {project.category}
                  </p>
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* AntD Modal */}
        {/* AntD Modal */}
        <Modal
          open={modalOpen}
          footer={null}
          onCancel={() => setModalOpen(false)}
          centered
          width={800}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="flex flex-col gap-4">
              {/* Main/Banner Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.images[activeImageIndex]}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-64 rounded-md overflow-hidden"
                >
                  <Image
                    src={selectedProject.images[activeImageIndex]}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Thumbnails */}
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {selectedProject.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative w-20 h-14 rounded-md overflow-hidden cursor-pointer border ${
                      idx === activeImageIndex
                        ? "border-primary"
                        : "border-gray-300"
                    }`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <Image
                      src={img}
                      alt={`Thumb ${idx}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Category */}
              <p className="text-sm text-center text-gray-600">
                Category: {selectedProject.category}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;
