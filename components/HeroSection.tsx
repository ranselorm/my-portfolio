import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="section-padding relative bg-hero-bg bg-cover bg-center h-[90vh] font-primary flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>

      <div className="container mx-auto relative z-10 text-center text-white flex flex-col gap-5">
        <span className="text-lg font-semibold tracking-wide font-pure text-gray-300">
          Hello there👋🏾
        </span>
        <h1 className="text-lg sm:text-4xl text-white font-mont font-bold">
          I am Randy,
          <code className="bg-deep px-2 py-1 rounded font-mono ml-1 text-black">
            &lt;Software Engineer /&gt;
          </code>
        </h1>
        <p className="max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          molestias, repellat accusantium laborum voluptatibus totam ea eos
          maxime nihil impedit.
        </p>
        <button className="px-4 py-2 bg-primary text-white rounded hover:bg-dark w-max mx-auto flex items-center gap-x-2">
          Portfolio
          <Icon
            icon="fluent:arrow-up-right-28-regular"
            className="text-lg text-white"
          />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
