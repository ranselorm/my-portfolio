import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServicesSection = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
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
  );
};

export default ServicesSection;
