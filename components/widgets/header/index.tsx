"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [drawerX, setDrawerX] = useState("67.2%");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Dynamically adjust the position based on the screen width
  React.useEffect(() => {
    const updateDrawerX = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setDrawerX("67.2%");
      } else {
        setDrawerX("0");
      }
    };

    updateDrawerX();

    window.addEventListener("resize", updateDrawerX);

    return () => {
      window.removeEventListener("resize", updateDrawerX);
    };
  }, []);

  const linkClassName =
    "block w-full text-left py-2 px-4 rounded hover:bg-gray-100";
  const contactWithMeClassName = "block w-full text-left py-2 px-4 rounded";
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Header content */}
      <div className="flex justify-between items-center px-12 py-6 w-full ">
        <h1 className="text-xl font-bold">ES LOGO</h1>
        <button onClick={toggleMenu} className="z-50" aria-label="Toggle menu">
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Drawer content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: drawerX }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white p-12 flex flex-col"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8">Menu</h2>
              <div className="space-y-4 w-[28.2%] ">
                <Link
                  className={linkClassName}
                  href="/"
                  passHref
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("panner")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Home
                </Link>
                <Link
                  className={linkClassName}
                  href="/#work"
                  passHref
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("work")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Work
                </Link>

                <Link
                  className={linkClassName}
                  href="@/assets/pdf/resume.pdf"
                  target="_blank"
                  passHref
                >
                  My Resume
                </Link>
              </div>

              <div className="flex-1">
                <h4 className="text-3xl font-bold my-8">Say Hello</h4>
                <div className="space-y-4">
                  <Link
                    href="mailto:iead.sh123@gmail.com"
                    className={contactWithMeClassName}
                  >
                    iead.sh123@gmail
                  </Link>

                  <Link
                    href="https://t.me/eyad_sharaf_almasri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactWithMeClassName}
                  >
                    t.me/eyad
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-gray-600">
                © {new Date().getFullYear()} Eyad Sharaf Almasri.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
