"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const leftNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only trigger if scroll exceeds threshold (e.g., 10px)
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      // Clear previous timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Delay before reacting
      const timeout = setTimeout(() => {
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
          setShowNavbar(false); // scroll down
        } else {
          setShowNavbar(true); // scroll up
        }
        setLastScrollY(currentScrollY);
      }, 150); // 100ms debounce

      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-opacity-70 text-white py-4 section-padding font-mont"
        >
          <div className="container mx-auto max-w-3xl flex justify-between items-center px-2 py-2 relative bg-black text-white rounded-full border-[1px] border-gray-800">
            <Link href="" className="px-3">
              <h2 className="font-pure font-bold text-xl">ransel.</h2>
            </Link>

            <div className="hidden md:flex space-x-4 z-10 font-medium">
              {leftNavLinks.map((link, index) => (
                <Link href={link.href} className="px-5 py-2" key={index}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex z-10 px-1">
              <button className="bg-primary px-4 text-white rounded-full py-2">
                Contact
              </button>
            </div>

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
                    d={
                      !isOpen
                        ? "M4 6h16M4 12h16M4 18h16"
                        : "M6 18L18 6M6 6l12 12"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden bg-purple-600">
              {leftNavLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block py-2 px-4 hover:bg-purple-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="block py-2 px-4 hover:bg-purple-700"
              >
                Contact
              </Link>
            </div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
