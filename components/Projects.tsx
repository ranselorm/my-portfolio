"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Modal } from "antd";
import "antd/dist/reset.css";

// ===================== //
// ANIMATION VARIANTS    //
// ===================== //
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ===================== //
// TYPES & DATA          //
// ===================== //
type Project = {
  title: string;
  category: "Landing" | "Website" | "WebApp" | "Mobile";
  image: string;
  images: string[];
};

const allProjects: Project[] = [
  /* …your projects… */
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
    setActiveImageIndex(0);
    setModalOpen(true);
  };

  return (
    <section className="py-12 section-padding font-hero bg-grey">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
          <p className="text-base text-center gap-1 mb-7">
            Take a peek at my portfolio. It's where pixels and functionality
            have <br /> a party on the web!
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="w-[320px] h-[280px] shadow-lg rounded-md overflow-hidden cursor-pointer relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(project)}
              >
                {/* Image & Overlay */}
                <div className="relative w-full h-full bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-black bg-opacity-60
                      transform translate-y-full group-hover:translate-y-0
                      transition-transform duration-300 ease-out
                      flex flex-col items-center justify-center p-4
                    "
                  >
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                      className="px-4 py-2 bg-white text-black rounded"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal */}
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
              {/* Animated Banner Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.images[activeImageIndex]}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
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
