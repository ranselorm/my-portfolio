"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { Drawer } from "antd";
import "antd/dist/reset.css";

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

type Project = {
  title: string;
  category: "Website" | "Web Application" | "Mobile Application";
  image: string;
  images: string[];
  url: string;
};

const allProjects: Project[] = [
  {
    title: "Minsol Ltd",
    category: "Website",
    image: "/images/minsol.png",
    images: ["/images/minsol.png"],
    url: "https://www.minsolltd.com/",
  },
  {
    title: "Anansesem Admin",
    category: "Web Application",
    image: "/images/ananse1.png",
    images: [
      "/images/ananse1.png",
      "/images/ananse2.png",
      "/images/ananse3.png",
      "/images/ananse4.png",
    ],
    url: "#",
  },
  {
    title: "Cyrus Consumer Finance",
    category: "Website",
    image: "/images/landing1.png",
    images: ["/images/landing1.png", "/images/landing1b.png"],
    url: "https://ccf-lime.vercel.app/",
  },
  {
    title: "Yahwe-eita App",
    category: "Mobile Application",
    image: "/images/phones.svg",
    images: ["/images/phones.svg"],
    url: "https://play.google.com/store/apps/details?id=com.berthengineering.yahweeitaapp&hl=en",
  },
  {
    title: "Gericht",
    category: "Website",
    image: "/images/res.png",
    images: ["/images/res.png"],
    url: "https://restaurant-jade-chi.vercel.app/",
  },
  {
    title: "Food Delivery Web App",
    category: "Web Application",
    image: "/images/project6.jpg",
    images: ["/images/project6.jpg", "/images/project1b.jpeg"],
    url: "#",
  },
];

const categories = [
  "All",
  "Website",
  "Web Application",
  "Mobile Application",
] as const;
type Category = (typeof categories)[number];

const Projects: React.FC = () => {
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
            animate="visible"
            className="flex flex-wrap justify-center gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="w-[320px] h-[280px] rounded-md overflow-hidden cursor-pointer relative border"
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
                  {/* Info Bar */}
                  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 px-4 py-2 flex justify-between items-center">
                    <div className="flex flex-col text-left">
                      <span className="text-xs text-gray-500">
                        {project.category}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-800">
                        {project.title}
                      </h4>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                      className="hover:text-primary"
                    >
                      <Icon icon="mdi:open-in-new" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Drawer */}
        <Drawer
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          width={500}
          // title={selectedProject?.title}
          placement="right"
        >
          {selectedProject && (
            <div className="flex flex-col gap-4">
              {/* Animated Banner Image */}
              <div>
                <h3 className="font-semibold text-xl">
                  {selectedProject?.title}
                </h3>
                <span className="text-sm text-gray-600 -mt-20">
                  {selectedProject?.category}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.images[activeImageIndex]}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-[250px] rounded-md overflow-hidden flex items-end justify-center gap-y-4 border"
                >
                  <Image
                    src={selectedProject.images[activeImageIndex]}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  {/* thumbnails */}
                  <div className="flex flex-wrap justify-center gap-3 mb-1">
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
                </motion.div>
              </AnimatePresence>
              <div className="font-hero">
                <p className="leading-relaxed text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  eveniet, dolorem voluptates excepturi, officiis accusantium
                  corporis doloribus eum ullam recusandae cupiditate qui
                  voluptate distinctio velit perspiciatis ad laborum. Numquam,
                  accusantium?
                </p>
                <a href={selectedProject?.url} target="_blank">
                  <button className="bg-primary mt-16 text-white py-3 rounded w-full flex items-center justify-center">
                    Launch {selectedProject?.title}
                  </button>
                </a>
              </div>
            </div>
          )}
        </Drawer>
      </div>
    </section>
  );
};

export default Projects;
