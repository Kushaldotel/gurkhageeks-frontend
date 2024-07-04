import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-colors duration-300 max-w-6xl mx-auto h-16 flex items-center">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 text-primary"
            prefetch={false}
          >
            <h1 className="font-semibold">GurkhaGeeks</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary"
              prefetch={false}
            >
              Categories
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="bg-transparent hover:bg-gray-200 rounded-full p-2"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-md border bg-white shadow-lg">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-none border-0 focus:ring-0 p-2"
                />
              </div>
            )}
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
