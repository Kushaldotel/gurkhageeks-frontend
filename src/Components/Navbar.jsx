import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="sticky z-50">
      <header className=" text-gray-900 bg-opacity-90 backdrop-blur-2xl h-16 bg-transparent z-50 transition-colors duration-300 mx-auto flex items-center px-8 shadow-sm">
        <div className="sticky container max-w-7xl mx-auto flex items-center justify-between ">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <h1 className="font-semibold">GurkhaGeeks ✓</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "font-semibold text-sm underline rounded-full"
                  : "text-sm font-medium"
              }
            >
              Home
            </Link>
            <Link
              to="/Blogs"
              className={
                location.pathname === "/Blogs"
                  ? "font-semibold text-sm underline rounded-full"
                  : "text-sm font-medium"
              }
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <div className="relative group">
              <button
                onClick={toggleDropdown}
                className="text-sm font-medium hover:text-primary"
                ref={dropdownRef}
              >
                Categories
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-6 w-96 border-t-4 border-t-purple-600 bg-gray-50 border border-gray-200 rounded-md shadow-lg z-20 opacity-100 transition-opacity duration-200 ease-in-out">
                  <div className="flex flex-col p-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to="/Fullstack"
                        className={
                          location.pathname === "/Fullstack"
                            ? "px-4 py-2 text-sm font-medium rounded-md underline"
                            : "text-sm block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        }
                        onClick={closeDropdown}
                      >
                        Full Stack
                      </Link>
                      <Link
                        to="/Mernstack"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        onClick={closeDropdown}
                      >
                        MERN Stack
                      </Link>
                      <Link
                        to="/AIML"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        onClick={closeDropdown}
                      >
                        AI & ML
                      </Link>
                      <Link
                        to="/Frontend"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        onClick={closeDropdown}
                      >
                        Front-end Dev
                      </Link>
                      <Link
                        to="/Backend"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-primary rounded-md"
                        onClick={closeDropdown}
                      >
                        Back-end Dev
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
            <Link
              to="/Roadmaps"
              className="text-sm font-medium hover:text-primary"
            >
              Roadmaps
            </Link>
            <Link
              to="/AddBlog"
              className={
                location.pathname === "/AddBlog"
                  ? "font-semibold text-sm  underline rounded-full"
                  : "text-sm font-medium"
              }
            >
              Add Blog
            </Link>
            <Link
              to="/LatestNews"
              className="text-sm font-medium hover:text-primary"
            >
              Latest News
            </Link>
          </nav>
          <div className="relative">
            <Link to="/Login">
              <button className="rounded-md py-1.5 px-4 text-sm bg-gray-800 text-gray-50 font-light">
                Login
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default Navbar;
