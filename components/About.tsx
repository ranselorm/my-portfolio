"use client";

import { motion } from "framer-motion";

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
      className="section-padding bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerVariants}
      >
        <motion.div
          className="relative h-[500px] md:h-auto"
          variants={itemVariants}
        >
          <img
            src="https://images.pexels.com/photos/10101138/pexels-photo-10101138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        <motion.form
          className="space-y-6 bg-white border border-white"
          variants={containerVariants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          eveniet! Dicta exercitationem sequi vero ab, illum laborum enim modi
          provident a mollitia, velit sit! Voluptatibus accusantium obcaecati
          quisquam enim nam! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugiat odio deleniti aut. Iure quod a explicabo, voluptatibus
          quisquam illum cum non molestias omnis dignissimos illo amet aliquam,
          soluta, veniam harum.
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default About;
