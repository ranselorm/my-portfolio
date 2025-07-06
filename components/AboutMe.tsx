"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="section-padding bg-grey font-primary py-12">
        <div className="container mx-auto">
          <div className="flex flex-row-reverse items-center gap-4 w-[70%] mx-auto">
            <div className="w-2/4 space-y-3">
              <div className="border border-primary shadow-sm w-full h-[250px] rounded-md p-4 flex justify-center flex-col gap-4">
                <h3>About Me</h3>
                <p className="text-gray-600 text-sm font-medium leading-tightest">
                  I am a Fullstack Developer with a passion for building
                  scalable web applications and engaging user experiences.
                  Currently, I am focused on enhancing my skills in React and
                  Node.js. <br />
                  <br />I enjoy collaborating with teams to create innovative
                  solutions and continuously learning new technologies to stay
                  ahead in the industry.
                </p>
                <div
                  className="flex items-center cursor-pointer w-max"
                  onClick={showModal}
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full" />
                  <p className="text-xs -ml-4 font-black font-mont">
                    SEE MY WORKS
                  </p>
                  <Icon icon="radix-icons:arrow-right" className="ml-3" />
                </div>
              </div>
              <div className="bg-[#e3e5ff] w-full h-[250px] rounded-md">
                <div className="flex items-center justify-center h-full"></div>
              </div>
            </div>
            <div className="w-2/4 rounded-md h-[512px] border border-primary flex flex-col items-center justify-center gap-8 p-4">
              <div className="w-56 rounded-md overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center space-y-2 font-hero">
                <h2 className="text-base font-bold text-black">Randy Selorm</h2>
                {/* <p className="text-sm text-gray-600">Fullstack Developer</p> */}
                <a
                  href="mailto:selorm@berthengineering.com"
                  className="text-sm text-gray-500"
                >
                  selorm@berthengineering.com
                </a>
              </div>

              <button className="bg-primary rounded-full py-2 px-4 flex items-center justify-center text-xs text-white">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default AboutMe;

// npm install react@18 react-dom@18
