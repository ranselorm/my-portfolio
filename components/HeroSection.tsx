"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      className="section-padding relative bg-hero-bg bg-cover bg-center h-[90vh] font-primary flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto relative z-10 text-center text-white flex flex-col gap-5"
      >
        <span className="md:text-xl font-semibold tracking-wide font-pure text-gray-300">
          Hello there👋🏾
        </span>
        <h3 className="text-white font-nunito font-bold text-2xl md:text-3xl">
          I'm Randy, a FullStack Developer
        </h3>
        <p className="md:max-w-lg mx-auto text-lg w-full">
          Specialized in MERN Stack, I welcome you to my world of innovative web
          applications development. Let's create something great together!
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
