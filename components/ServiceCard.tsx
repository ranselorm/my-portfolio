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
    <div className="bg-white shadow-lg p-6 h-[250px] flex justify-between">
      <Icon icon={icon} className="w-10 h-10 text-blue-500" />
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <a href="#" className="text-blue-500 text-sm font-medium">
          Read more...
        </a>
      </div>
    </div>
  );
};
