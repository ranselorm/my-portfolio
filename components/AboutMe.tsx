import React from "react";

const AboutMe = () => {
  return (
    <section className="section-padding bg-grey font-primary py-12">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 w-[70%] mx-auto">
          <div className="w-2/4 space-y-3">
            <div className="bg-[#dfdfe2] shadow-sm w-full h-[250px] rounded-md">
              1
            </div>
            <div className="bg-[#e3e5ff] w-full h-[250px] rounded-md">2</div>
          </div>
          <div className="bg-[#e3e5ff] w-2/4 rounded-md h-[512px]">3</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
