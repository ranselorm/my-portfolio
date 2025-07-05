import React from "react";

const AboutMe = () => {
  return (
    <section className="section-padding bg-grey font-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-row-reverse items-center gap-4 w-[70%] mx-auto">
          <div className="w-2/4 space-y-3">
            <div className="border border-primary shadow-sm w-full h-[250px] rounded-md p-4 flex items-center justify-center flex-col gap-4"></div>
            <div className="bg-[#e3e5ff] w-full h-[250px] rounded-md">2</div>
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
              <a href="mailto:selorm@berthengineering.com" className="text-sm">
                selorm@berthengineering
              </a>
            </div>

            <button className="bg-primary rounded-full py-2 px-4 flex items-center justify-center text-xs text-white">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
