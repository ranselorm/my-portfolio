import React from "react";
import "./ServicesCard.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface CurvedCardProps {
  title: string;
  image: string;
  path?: string;
}

const Curved: React.FC<CurvedCardProps> = ({ title, image }) => {
  return (
    <div>
      <div className="fill bottom-right">
        <div className="px-2 py-4 text-white font-medium text-lg">{title}</div>
        <img src={image} />
      </div>
    </div>
  );
};

const ServiceCard: React.FC<CurvedCardProps> = ({ title, image, path }) => {
  return (
    <main className="relative w-full md:w-[350px] font-primary">
      <Curved title={title} image={image} />
      <Link href={`${path}`}>
        <div className="w-16 h-16 bg-primary absolute bottom-0 left-52 z-10 rounded-full flex items-center justify-center cursor-pointer">
          <Icon
            icon="fluent:arrow-up-right-28-regular"
            className="text-5xl text-white"
          />
        </div>
      </Link>
    </main>
  );
};

export default ServiceCard;
