import About from "@/components/About";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <FeaturedTestimonial />
      {/* <Services /> */}
      {/* <Skills /> */}
      {/* <Portfolio /> */}
      {/* <Blog /> */}
      {/* <Connect /> */}
      {/* <Contact /> */}
    </div>
  );
}
