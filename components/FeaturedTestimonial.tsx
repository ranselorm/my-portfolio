"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="relative bg-[#0F172A] py-12 font-primary section-padding overflow-visible h-[50vh] flex items-center my-20 justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="relative z-20"
        >
          <div className="relative my-[172px] rounded-md overflow-hidden shadow-2xl w-[300px] h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvc3N8ZW58MHx8MHx8fDA%3D"
              alt="Testimonial"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Text with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl text-white relative"
        >
          {/* <Icon
            icon="hugeicons:quote-up"
            className="absolute top-0 left-0 w-16 h-16 text-white opacity-10 -translate-x-4 -translate-y-3"
          /> */}

          <p className="text-lg md:text-2xl font-medium leading-relaxed z-10 relative">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
            posuere. Nunc eu scelerisque interdum eget tellus non nibh
            scelerisque bibendum.
          </p>

          <div className="mt-6">
            <p className="font-bold text-lg">Judith Black</p>
            <p className="text-gray-400 text-base">CEO of Workcation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
