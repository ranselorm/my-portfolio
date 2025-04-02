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
      className="section-padding bg-white font-primary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerVariants}
      >
        <motion.div className="" variants={containerVariants}>
          <h3 className="text-2xl font-semibold mb-4">About me</h3>
          <p className="leading-normal text-gray-900 mb-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            eveniet! Dicta exercitationem sequi vero ab, illum laborum enim modi
            provident a mollitia, velit sit! Voluptatibus accusantium obcaecati
            quisquam enim nam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat odio deleniti aut. Iure quod a explicabo,
            voluptatibus quisquam illum cum non molestias omnis dignissimos illo
            amet aliquam, soluta, veniam harum.
          </p>
        </motion.div>
        <motion.div className="flex justify-center" variants={itemVariants}>
          <div className="relative w-[350px] h-[400px]">
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
      </motion.div>
    </motion.section>
  );
};

export default About;
