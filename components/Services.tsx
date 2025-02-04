import React from "react";
import ServicesCard from "./curved/ServicesCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import ServicesSection from "./ServicesSection";

const Services = () => {
  return (
    <section className="bg-dark h-full section-padding font-eaves">
      <div className="text-center mb-12 text-white flex-col flex gap-y-2">
        <p className="text-xl font-medium text-primary">My Expertise</p>
        <h3 className="section-title text">Innovative solutions</h3>
        <p className="max-w-2xl mx-auto mb-8 font-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quisquam unde nemo illum reiciendis
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center container mx-auto gap-4">
        {/* <ServicesCard title="Web Application" image="/images/web.jpg" />
        <ServicesCard title="Landing Page" image="/images/vr.jpg" />
        <ServicesCard title="Restful APIs" image="/images/design.jpg" />
        <ServicesCard title="Responsive Design" image="/images/book.jpg" /> */}
        <ServicesSection />
      </div>
    </section>
  );
};

export default Services;
