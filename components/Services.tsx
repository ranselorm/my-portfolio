"use client";
import React from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Services = () => {
  return (
    <motion.section
      className="bg-dark h-full font-mont section-padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8 text-white flex flex-col gap-y-2">
          <p className="text-xl font-medium text-primary">My Expertise</p>
          <h3 className="section-title text">Innovative Solutions</h3>
        </div>

        <motion.div
          className="grid grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {[
            {
              icon: "carbon:ibm-cloud-pak-applications",
              title: "Web Application",
            },
            { icon: "circum:mobile-3", title: "Mobile Application" },
            { icon: "material-symbols-light:web", title: "Landing Page" },
            { icon: "bxs:chart", title: "SEO Optimization" },
          ].map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
