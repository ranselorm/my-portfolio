"use client";
import React from "react";

const frontend = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "NEXT JS",
  "ZUSTAND",
  "TAILWIND CSS",
  "FRAMER MOTION",
  "DOM",
  "UNIT TEST",
  "PERFORMANCE OPTIMIZE",
  "SSR",
];

const backend = [
  "NODE",
  "BUN",
  "EXPRESS",
  "REST API",
  "ZOD VALIDATION",
  "JWT/OAUTH",
  "SQL",
  "POSTGRES",
  "PRISMA ORM",
  "DB MODELING",
  "STRIPE PAYMENTS",
];

const others = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "PYTHON",
  "GO",
  "REACT NATIVE",
  "GIT",
  "GITHUB",
  "LINUX",
  "WORDPRESS",
  "VPS",
  "VERCEL",
  "UX/UI DESIGN",
  "PRODUCT DESIGN",
  "FIGMA",
  "ADOBE XD",
  "WIREFRAME",
];

const SkillsTree = () => {
  return (
    <section className="relative py-24 px-4 bg-[#0d1117] text-white font-mono">
      <div className="max-w-6xl mx-auto flex flex-col items-center relative">
        {/* Center: MY SKILLS */}
        <div className="z-10 bg-[#121826] px-6 py-3 rounded border border-[#2d3748] text-white font-bold text-sm tracking-widest shadow-lg">
          MY SKILLS
        </div>

        {/* Main vertical line */}
        <div className="absolute top-[72px] h-12 w-px bg-gray-600"></div>

        {/* Horizontal split line */}
        <div className="absolute top-[120px] flex justify-between w-[700px] max-w-full">
          <div className="h-px bg-gray-600 w-1/2" />
          <div className="h-px bg-gray-600 w-1/2" />
        </div>

        {/* Side vertical lines */}
        <div className="absolute top-[120px] left-[calc(50%-350px)] w-px h-10 bg-gray-600 max-w-[100px]" />
        <div className="absolute top-[120px] right-[calc(50%-350px)] w-px h-10 bg-gray-600 max-w-[100px]" />

        {/* Skill Groups */}
        <div className="mt-32 w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Frontend */}
          <div className="flex flex-wrap gap-2 justify-center">
            {frontend.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#1e2634] text-xs border border-[#2d3748] rounded"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Backend */}
          <div className="flex flex-wrap gap-2 justify-center">
            {backend.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#1e2634] text-xs border border-[#2d3748] rounded"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Other Skills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {others.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#1e2634] text-xs border border-[#2d3748] rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTree;
