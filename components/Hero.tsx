"use client";
import Button from "@/components/Button";
import CurvedCard from "./curved/CurvedCard";
import Social from "./Social";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="bg-grey py-20 font-primary flex items-center justify-center section-padding">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 z-10">
        <div className="text-center md:text-left flex-1 flex flex-col space-y-5">
          {/* <h3 className="text-[80px] font-hero text-black">Randy S.</h3> */}
          <p className="text-black text-4xl font-hero font-bold tracking-widest leading-relaxed capitalize">
            fullstack engineer <br />&{" "}
            <span className="text-primary">developer</span>
          </p>
          <p className="text-lg w-full md:max-w-5xl font-hero ">
            Specialized in MERN Stack, I welcome you to my world of innovative
            web applications development. Let's create something great together!
          </p>
          <div className="flex items-center cursor-pointer w-max">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <p className="text-xs -ml-4 font-black font-mont">SEE MY WORKS</p>
            <Icon icon="radix-icons:arrow-right" className="ml-3" />
          </div>
        </div>

        <motion.div className="flex">
          <div className="relative w-[400px] h-[400px]">
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
          </div>
        </motion.div>
      </div>
      {/* <div className="w-[450px] h-[450px] bg-white absolute rounded-full" /> */}
    </section>
  );
};

export default Hero;
