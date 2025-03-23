"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const HeroSection: React.FC = () => {
  return (
    <section
      className="section-padding relative bg-hero-bg bg-cover bg-center h-[90vh] font-primary flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and natural position
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto relative z-10 text-center text-white flex flex-col gap-5"
      >
        <span className="md:text-xl font-semibold tracking-wide font-pure text-gray-300">
          Hello there👋🏾
        </span>
        <h3 className="text-white font-mont font-bold text-2xl md:text-3xl">
          I am Randy, a Software Engineer
          {/* <code className="px-2 py-1 rounded font-mono ml-1">&lt; /&gt;</code> */}
        </h3>
        <p className="md:max-w-2xl mx-auto text-lg w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          molestias, repellat accusantium laborum voluptatibus totam ea eos
          maxime nihil impedit.
        </p>
        <button className="px-4 py-2 bg-primary text-white rounded hover:bg-dark w-max mx-auto flex items-center gap-x-2">
          Portfolio
          <Icon
            icon="fluent:arrow-up-right-28-regular"
            className="text-lg text-white"
          />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
