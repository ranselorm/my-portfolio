import About from "@/components/About";
import Blog from "@/components/Blog";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import MainHero from "../components/MainHero";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import SkillsTree from "@/components/SkillsTree";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      {/* <SkillsTree /> */}
      {/* <AboutMe /> */}
      {/* <MainHero /> */}
      {/* <HeroSection /> */}
      {/* <Services /> */}
      {/* <Skills /> */}
      {/* <Portfolio /> */}
      {/* <Blog /> */}
      {/* <Connect /> */}
      {/* <Contact /> */}
    </div>
  );
}
