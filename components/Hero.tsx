"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="py-20 font-primary flex items-center justify-center section-padding h-screen bg-grey">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 z-10">
        <div className="text-center md:text-left flex-1 flex flex-col space-y-8">
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
            {/* Animated Circle */}
            <div className="w-8 h-8 bg-gray-300 rounded-full absolute left-0 transition-all duration-500 group-hover:left-[calc(100%-2rem)]" />

            {/* Text */}
            <p className="text-xs ml-4 font-black font-mont z-10 group-hover:text-gray-600 transition-all duration-500">
              SEE MY WORKS
            </p>

            {/* Arrow Icon */}
            <Icon icon="radix-icons:arrow-right" className="ml-3 z-10" />
          </div>
        </div>

        <motion.div className="flex">
          {/* <div className="relative w-[400px] h-[400px]">
            <div className="absolute inset-0 bg-primary rounded-xl transform translate-x-10 translate-y-10 z-0">
              <img
                src="/images/bg.svg"
                alt="Background"
                className="w-full h-full object-cover rounded-xl opacity-15"
              />
            </div>

            <img
              src="https://images.pexels.com/photos/10101138/pexels-photo-10101138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover rounded-xl relative z-10"
            />
          </div> */}
          <img
            src="https://images.unsplash.com/photo-1750800663834-ccebf03881c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D"
            className="w-[70%] md:w-[400px] h-[400px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
      {/* <div className="w-[450px] h-[450px] bg-white absolute rounded-full" /> */}
    </section>
  );
};

export default Hero;
