"use client";
import { useState } from "react";
import Link from "next/link";

const leftNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
];

const rightNavLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black py-4 section-padding font-mont">
      <div className="container mx-auto max-w-5xl flex justify-between items-center px-2 py-2 relative bg-white rounded-full border-[1px] border-gray-800">
        {/* Logo */}
        <Link href="" className="px-3">
          <h2 className="font-pure font-bold text-2xl">ransel.</h2>
        </Link>

        {/* Left Links */}
        <div className="hidden md:flex space-x-4 z-10 font-medium">
          {leftNavLinks?.map((link, index) => (
            <Link href="#" className="px-5 py-2" key={index}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Links */}
        <div className="hidden md:flex z-10 px-1">
          <button className="bg-primary px-4 text-white rounded-full py-2">
            Contact
          </button>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-600">
          <Link href="#home" className="block py-2 px-4 hover:bg-purple-700">
            Home
          </Link>
          <Link href="#about" className="block py-2 px-4 hover:bg-purple-700">
            About
          </Link>
          <Link
            href="#services"
            className="block py-2 px-4 hover:bg-purple-700"
          >
            Service
          </Link>
          <Link
            href="#portfolio"
            className="block py-2 px-4 hover:bg-purple-700"
          >
            Portfolio
          </Link>
          <Link href="#blog" className="block py-2 px-4 hover:bg-purple-700">
            Blog
          </Link>
          <Link href="#contact" className="block py-2 px-4 hover:bg-purple-700">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
