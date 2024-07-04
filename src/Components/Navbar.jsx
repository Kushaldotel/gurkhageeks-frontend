import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="">
      <header className="bg-opacity-80 backdrop-blur-md relative h-16 bg-transparent z-50 transition-colors duration-300 mx-auto flex items-center px-8">
        <div className="container max-w-7xl mx-auto flex items-center justify-between text-white">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <h1 className="font-semibold">GurkhaGeeks ✓</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Blog
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
          </nav>
          <div className="relative">
            <button
              className="rounded-md py-2 px-4 bg-white text-gray-800 font-semibold"
            >
              Login
            </button>
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
