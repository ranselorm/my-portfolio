import React from "react";
import "./BlogCard.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface CurvedCardProps {
  title: string;
  image: string;
  description?: string;
  path?: string;
  date?: string;
}

const Curved: React.FC<CurvedCardProps> = ({ title, image, description }) => {
  return (
    <div>
      <div className="blog-fill top-right">
        <img src={image} alt="" className="pic" />
        <article className="p-3 flex flex-col gap-y-4">
          <h4 className="text-white font-bold text-xl font-heading">{title}</h4>
          <p className="text-gray-400">{description}</p>
          <span className="text-xs">10 November 2024</span>
        </article>
      </div>
    </div>
  );
};

const BlogCard: React.FC<CurvedCardProps> = ({
  title,
  image,
  path,
  description,
}) => {
  return (
    <main className="relative w-full md:w-[350px] font-primary">
      <Curved title={title} image={image} description={description} />
      <Link href={`${path}`}>
        <div className="w-16 h-16 bg-primary absolute top-1 left-52 z-10 rounded-full flex items-center justify-center cursor-pointer">
          <Icon
            icon="fluent:arrow-up-right-28-regular"
            className="text-5xl text-white"
          />
        </div>
      </Link>
    </main>
  );
};

export default BlogCard;
