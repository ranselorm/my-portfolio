import React from "react";
import ServicesCard from "./curved/ServicesCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ServiceCard } from "./ServiceCard";

const Services = () => {
  return (
    <section className="bg-dark h-full font-eaves">
      <div className="">
        <div className="text-center mb-12 text-white flex-col flex gap-y-2">
          <p className="text-xl font-medium text-primary">My Expertise</p>
          <h3 className="section-title text">Innovative solutions</h3>
          <p className="max-w-2xl mx-auto mb-8 font-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quisquam unde nemo illum reiciendis
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="grid grid-cols-4 gap-12">
            <ServiceCard
              icon="mdi:finance"
              title="Finance Planning"
              description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
            />
            <ServiceCard
              icon="mdi:chart-bar"
              title="Investment Planning"
              description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
            />
            <ServiceCard
              icon="mdi:percent"
              title="Mutual Funds"
              description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
            />
            <ServiceCard
              icon="mdi:shield-home"
              title="Personal Insurance"
              description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
            />
            <ServiceCard
              icon="mdi:cash-multiple"
              title="Market Research"
              description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
            />
            <ServiceCard
              icon="mdi:chart-pie"
              title="Business Analysis"
              description="Nanotechnology immersion along the information highway will close the loop on focusing solely."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
