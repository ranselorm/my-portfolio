"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="py-20 font-primary flex items-center justify-center section-padding h-screen bg-grey">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 z-10">
        <motion.div
          className="text-center md:text-left flex-1 flex flex-col space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <p className="text-black text-4xl font-hero font-bold tracking-widest leading-relaxed capitalize">
            fullstack engineer <br />&{" "}
            <span className="text-primary">developer</span>
          </p>
          <p className="text-base w-full md:max-w-5xl font-hero text-gray-700">
            Specialized in MERN Stack, I welcome you to my world of innovative
            web applications development. Let's create something great together!
          </p>
          <p className="text-base w-full md:max-w-5xl font-hero text-gray-700">
            Specialized in MERN Stack, I welcome you to my world of innovative
            web applications development. Let's create something great together!
          </p>
          <div className="flex items-center cursor-pointer w-max mt-8 group relative">
            <div className="w-8 h-8 bg-gray-300 rounded-full absolute left-0 transition-all duration-500 group-hover:left-[calc(100%-2rem)]" />
            <p className="text-xs ml-4 font-black font-mont z-10 group-hover:text-gray-600 transition-all duration-500">
              SEE MY WORKS
            </p>
            <Icon icon="radix-icons:arrow-right" className="ml-3 z-10" />
          </div>
        </motion.div>

        <motion.div
          className="flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <img
            src="https://images.unsplash.com/photo-1750800663834-ccebf03881c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D"
            className="w-[70%] md:w-[400px] h-[400px] object-cover rounded-xl shadow-lg"
            alt="Hero Image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
