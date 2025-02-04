import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ServicesSection = () => {
  return (
    <div className="bg-white w-[300px] h-[200px] p-5 flex gap-x-5">
      <Icon icon="streamline:web" className="bg-red-300 w-16 h-16" />
      <div>
        <h4 className="text-lg font-semibold">Web Development</h4>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus cum
          nesciunt, minima
        </p>
      </div>
    </div>
  );
};

export default ServicesSection;
