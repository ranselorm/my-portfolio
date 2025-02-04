import React from "react";
import { ServiceCard } from "./ServiceCard";

const Services = () => {
  return (
    <section className="bg-dark h-full font-mont section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 text-white flex flex-col gap-y-2">
          <p className="text-xl font-medium text-primary">My Expertise</p>
          <h3 className="section-title text">Innovative Solutions</h3>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quisquam unde nemo illum reiciendis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-4 gap-4">
          <ServiceCard
            icon="mdi:web"
            title="Web Application"
            description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
          />
          <ServiceCard
            icon="mdi:cellphone"
            title="Mobile Application"
            description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
          />
          <ServiceCard
            icon="mdi:monitor-dashboard"
            title="Landing Page"
            description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
          />
          <ServiceCard
            icon="mdi:shopping"
            title="E-Commerce Solutions"
            description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
