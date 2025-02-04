"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const leftNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 left-0 z-50 py-4 section-padding font-mont ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl flex justify-between items-center px-4 py-2 rounded-full border-[1px] border-gray-800">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="px-3">
            <h2 className="font-pure font-bold text-2xl">ransel.</h2>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          {leftNavLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.href} className="px-5 py-2">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <motion.div
          className="hidden md:flex"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <button className="bg-primary px-4 text-white rounded-full py-2">
            Contact
          </button>
        </motion.div>

        {/* Hamburger Menu */}
        <motion.div
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
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
        </motion.div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg rounded-lg p-4 absolute w-full top-16 left-0"
          >
            {leftNavLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  className="block py-2 px-4 text-black hover:bg-gray-200 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
