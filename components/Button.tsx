import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
}) => {
  const baseStyle =
    "px-6 py-2 rounded-md text-white font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles = {
    primary: `${baseStyle} bg-black hover:bg-gray-800 focus:ring-gray-800`,
    secondary: `${baseStyle} bg-primary`,
  };

  return (
    <button className={styles[variant]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
