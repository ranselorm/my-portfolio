"use client";
import React from "react";
import { Button } from "./ui/button";
import { useSheet } from "@/context/SheetContext";

const Connect = () => {
  const { openSheet } = useSheet();

  return (
    <section className="section-padding">
      <div className="bg-dark h-max md:h-[150px] flex items-center justify-center text-white font-main rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-x-8 gap-y-6">
          <div className="text-[25px] font-bold capitalize">
            Start a project
          </div>
          <div className="md:w-5/12 text-center">
            Looking to collaborate? Let's schedule a chat. I'll bring the tea,
            you bring the ideas!
          </div>
          <div className="w-full md:w-max">
            <Button className="bg-primary" onClick={openSheet}>
              Let's do this!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
