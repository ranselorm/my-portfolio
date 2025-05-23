import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg p-6 h-[250px] flex flex-col justify-between">
      <div className="flex items-center gap-3 mb-5">
        <Icon icon={icon} className="w-12 h-12 text-primary" />
        <h4 className="text-base font-bold text-gray-800  whitespace-nowrap">
          {title}
        </h4>
      </div>
      <p className="text-sm text-gray-900 flex-grow">{description}</p>
      <a href="#" className="text-blue-500 text-sm font-medium mt-auto">
        Read more...
      </a>
    </div>
  );
};
