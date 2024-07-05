import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="sticky">
      <header className=" text-gray-900 bg-opacity-90 backdrop-blur-2xl h-16 bg-transparent z-50 transition-colors duration-300 mx-auto flex items-center px-8 shadow-sm ">
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
            <Link
              to="/categories"
              className="text-sm font-medium hover:text-primary"
            >
              Categories
            </Link>
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
