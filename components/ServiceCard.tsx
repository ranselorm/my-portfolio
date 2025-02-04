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
    <div className="bg-white shadow-lg rounded-lg p-6 h-[250px] flex flex-col justify-between">
      <div className="flex items-center gap-3">
        <Icon icon={icon} className="w-12 h-12 text-blue-500" />
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
      <p className="text-sm text-gray-600 flex-grow">{description}</p>
      <a href="#" className="text-blue-500 text-sm font-medium mt-auto">
        Read more...
      </a>
    </div>
  );
};
