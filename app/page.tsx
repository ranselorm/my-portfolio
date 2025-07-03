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

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <MainHero /> */}
      {/* <HeroSection /> */}
      <Services />
      {/* <Skills /> */}
      {/* <Portfolio /> */}
      {/* <Blog /> */}
      {/* <Connect /> */}
      {/* <Contact /> */}
    </div>
  );
}
