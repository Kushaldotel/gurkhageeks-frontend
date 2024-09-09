import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ProfileDropdown from "../../Components/ProfileDropdown";
import { motion } from "framer-motion";
import getCookie from "@/Utils/cookies/getCookie";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLButtonElement | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const isAuthenticated = getCookie('accessToken')


  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const profileDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="sticky z-50">
      <header className="text-gray-900 bg-opacity-90 backdrop-blur-2xl h-16 bg-transparent z-50 transition-colors duration-300 mx-auto flex items-center px-8 shadow-sm">
        <div className="sticky container flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex space-x-4">
            <button onClick={toggleMenu} className="md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link to="/" className="flex items-center gap-2 text-primary">
              <h1 className="font-semibold">GurkhaGeeks ✓</h1>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={
                pathname === "/"
                  ? "font-semibold text-sm underline rounded-full"
                  : "text-sm font-medium"
              }
            >
              Home
            </Link>
            <Link
              to="/blog/list"
              className={
                pathname === "/blog/list"
                  ? "font-semibold text-sm underline rounded-full"
                  : "text-sm font-medium"
              }
            >
              Blogs
            </Link>

            <div className="relative group">
              <button
                onClick={toggleDropdown}
                className="text-sm font-medium hover:text-primary"
                ref={dropdownRef}
              >
                Roadmaps ▾
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-6 w-96 border-t-4 border-t-purple-600 bg-gray-50 border border-gray-200 rounded-md shadow-lg z-20 opacity-100 transition-opacity duration-200 ease-in-out">
                  <div className="flex flex-col p-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to="/roadmap/fullstack"
                        className={
                          pathname === "/roadmap/fullstack"
                            ? "px-4 py-2 text-sm font-medium rounded-md underline"
                            : "text-sm block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        }
                        onClick={closeDropdown}
                      >
                        Full Stack
                      </Link>
                      <Link
                        to="/roadmap/mernstack"
                        className={
                          pathname === "/roadmap/mernstack"
                            ? "px-4 py-2 text-sm font-medium rounded-md underline"
                            : "text-sm block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        }
                        onClick={closeDropdown}
                      >
                        MERN Stack
                      </Link>
                      <Link
                        to="/roadmap/ai-ml"
                        className={
                          pathname === "/roadmap/ai-ml"
                            ? "px-4 py-2 text-sm font-medium rounded-md underline"
                            : "text-sm block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        }
                        onClick={closeDropdown}
                      >
                        AI & ML
                      </Link>
                      <Link
                        to="/roadmap/frontend"
                        className={
                          pathname === "/roadmap/frontend"
                            ? "px-4 py-2 text-sm font-medium rounded-md underline"
                            : "text-sm block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        }
                        onClick={closeDropdown}
                      >
                        Front-end Dev
                      </Link>
                      <Link
                        to="/roadmap/backend"
                        className={
                          pathname === "/roadmap/backend"
                            ? "px-4 py-2 text-sm font-medium rounded-md underline"
                            : "text-sm block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        }
                        onClick={closeDropdown}
                      >
                        Back-end Dev
                      </Link>
                      <Link
                        to="/roadmap/cybersecurity"
                        className={
                          pathname === "/roadmap/cybersecurity"
                            ? "px-4 py-2 text-sm font-medium rounded-md underline"
                            : "text-sm block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        }
                        onClick={closeDropdown}
                      >
                        Cybersecurity
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className={
                pathname === "/about"
                  ? "font-semibold text-sm underline rounded-full"
                  : "text-sm font-medium"
              }
            >
              About
            </Link>
            <Link
              to="/contact"
              className={
                pathname === "/contact"
                  ? "font-semibold text-sm underline rounded-full"
                  : "text-sm font-medium"
              }
            >
              Contact
            </Link>
            <Link
              to="/blog/create"
              className={
                pathname === "/blog/create"
                  ? "font-semibold text-sm underline rounded-full"
                  : "text-sm font-medium"
              }
            >
              Add Blog
            </Link>
          </nav>

          {/* For Mobile Version */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed p-4 top-12 left-0 right-0 w-96 bg-white shadow-md md:hidden"
              style={{ width: "100vw", maxWidth: "100%", left: 0 }}
            >
              <nav className="flex flex-col p-4">
                <Link to="/" className="py-2">
                  Home
                </Link>
                <Link to="/blog/list" className="py-2">
                  Blogs
                </Link>
                <button onClick={toggleDropdown} className="py-2 text-left">
                  Roadmaps ▾
                </button>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 overflow-hidden"
                  >
                    <Link to="/roadmap/fullstack" className="block py-2">
                      Full Stack
                    </Link>
                    <Link to="/roadmap/mernstack" className="block py-2">
                      MERN Stack
                    </Link>
                    <Link to="/roadmap/ai-ml" className="block py-2">
                      AI & ML
                    </Link>
                    <Link to="/roadmap/frontend" className="block py-2">
                      Front-end Dev
                    </Link>
                    <Link to="/roadmap/backend" className="block py-2">
                      Back-end Dev
                    </Link>
                    <Link to="/roadmap/cybersecurity" className="block py-2">
                      Cybersecurity
                    </Link>
                  </motion.div>
                )}
                <Link to="/about" className="py-2">
                  About
                </Link>
                <Link to="/contact" className="py-2">
                  Contact
                </Link>
                <Link to="/blog/create" className="py-2">
                  Add Blog
                </Link>
              </nav>
            </motion.div>
          )}

          <div className="relative">
            {!isAuthenticated ? (
              <Link to="/login">
                <button className="rounded-md py-1.5 px-4 text-sm bg-gray-800 text-gray-50 font-light">
                  Login
                </button>
              </Link>
            ) : (
              <div className="relative">
                <div
                  onClick={profileDropdown}
                  className="cursor-pointer flex items-center space-x-2"
                >
                  <img
                    src="/img/icons.png"
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                </div>
                {showDropdown && (
                  <ProfileDropdown toggleDropdown={profileDropdown} />
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
