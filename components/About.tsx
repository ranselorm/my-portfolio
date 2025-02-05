"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerVariants}
      >
        {/* Image with Text Overlay */}
        <motion.div
          className="relative h-[500px] md:h-auto"
          variants={itemVariants}
        >
          <img
            src="/images/happy.png"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 rounded-b-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full">
                <Icon icon="hugeicons:contact-book" className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold">Contact us</h3>
            </div>
            <p className="mb-4">
              Ask about our financing plans or payment options. We're here to
              help.
            </p>
            <div className="text-sm space-y-1">
              <p>2nd Floor, Vertical Square</p>
              <p>Community 6, Tema</p>
              <p>Adjacent Hotel Joecarl</p>
              <p>Tel: +233 20 933 4842</p>
              <p>Email: cyrusheadoffice@gmail.com</p>
              <p>Email: info@cyrusfinance.com</p>
              <p>Website: www.cyrusfinance.com</p>
            </div>
          </div>
        </motion.div>

        <div className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit
          ab, consequuntur eum in officiis corrupti sint consectetur sunt quam
          illo earum delectus harum explicabo voluptates repellat nesciunt
          voluptatem consequatur?
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
