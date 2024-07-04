import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8 max-w-6xl mx-auto">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <h1 className="font-semibold text-2xl  ">GurkhaGeek</h1>
          </div>
          <nav className="flex items-center gap-6 mt-4 md:mt-0">
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
          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            &copy; 2024 Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
