import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Social = () => {
  return (
    <div className="hidden md:flex flex-col items-center justify-center h-full gap-4 text-white">
      <p
        style={{
          writingMode: "vertical-rl", // Make the text vertical
          textAlign: "center",
          fontSize: "16px",
          margin: "0",
        }}
      >
        Follow me on:
      </p>
      {/* Separator Line */}
      <div
        style={{
          width: "1px",
          height: "50px", // Adjust height for the line
          backgroundColor: "#b3a4f3", // Lighter purple color
          margin: "10px 0", // Space around the line
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px", // Space between icons
        }}
      >
        <Icon
          icon="proicons:x-twitter"
          style={{
            fontSize: "16px",
          }}
        />
        <Icon
          icon="ri:linkedin-line"
          style={{
            fontSize: "16px",
          }}
        />
      </div>
    </div>
  );
};

export default Social;
