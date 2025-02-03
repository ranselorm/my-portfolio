import React from "react";
import "./CurvedCard.css"; // Import the CSS file for styles

interface CurvedCardProps {
  src: string; // Image source URL
  alt?: string; // Alternative text for accessibility
}

const CurvedCard: React.FC<CurvedCardProps> = ({
  src,
  alt = "Curved Image",
}) => {
  return (
    <div className="outer bottom-right">
      {/* <img src="/images/pass.png" /> */}
    </div>
  );
};

export default CurvedCard;
