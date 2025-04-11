"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

type SkiilsType = {
  title: string;
  icon: string;
};

const skills: SkiilsType[] = [
  { title: "Javascript", icon: "devicon:javascript" },
  { title: "Typescript", icon: "devicon:typescript" },
  { title: "React", icon: "skill-icons:react-dark" },
  { title: "Next", icon: "skill-icons:nextjs-light" },
  { title: "Tailwind", icon: "skill-icons:tailwindcss-dark" },
  { title: "HTML5", icon: "skill-icons:html" },
  { title: "CSS3", icon: "skill-icons:css" },
  { title: "Python", icon: "skill-icons:python-dark" },
];

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
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        variants={containerVariants}
      >
        <motion.div className="md:max-w-xl" variants={containerVariants}>
          <h3 className="text-2xl font-bold mb-4">About me</h3>
          <p className="leading-normal text-gray-900 mb-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            eveniet! Dicta exercitationem sequi vero ab, illum laborum enim modi
            provident a mollitia, velit sit! Voluptatibus accusantium obcaecati
            quisquam enim nam! Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="leading-normal text-gray-900 text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            eveniet! Dicta exercitationem sequi vero ab, illum laborum enim modi
            provident a mollitia, velit sit! Voluptatibus accusantium obcaecati
            quisquam enim nam! Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="leading-normal text-gray-900 text-base">
            My Toolkit includesReact.js | Next.js | JavaScript | TypeScript |
            HTML | CSS | Tailwind CSS | Node.js | Express.js | Restful APIs |
            MongoDB | Git{" "}
          </p>
          <Marquee
            pauseOnHover
            speed={20}
            className="text-3xl font-semibold mt-8"
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 mx-6">
                <Icon icon={skill.icon} />
              </div>
            ))}
          </Marquee>
        </motion.div>
        <motion.div className="flex" variants={itemVariants}>
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
      </motion.div>
    </motion.section>
  );
};

export default About;
