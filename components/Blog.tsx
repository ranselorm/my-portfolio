import React from "react";
import BlogCard from "./curved/BlogCard";

const Blog = () => {
  return (
    <section className="section-padding h-screen text-white font-primary">
      <main className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-subtitle">Stories</p>
            <h3 className="section-title">Blog Update</h3>
          </div>
          <p className="max-w-2xl text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
            culpa aperiam ab accusantium et adipisci illum vel libero provident
          </p>
        </div>
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between">
          <BlogCard
            title="A great journey"
            image="/images/project5.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ut, fugit
      dolore laborum porro"
          />
          <BlogCard
            title="A great journey"
            image="/images/project5.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ut, fugit
      dolore laborum porro"
          />
          <BlogCard
            title="A great journey"
            image="/images/project5.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ut, fugit
      dolore laborum porro"
          />
          <BlogCard
            title="A great journey"
            image="/images/project5.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ut, fugit
      dolore laborum porro"
          />
        </div>
      </main>
    </section>
  );
};

export default Blog;
